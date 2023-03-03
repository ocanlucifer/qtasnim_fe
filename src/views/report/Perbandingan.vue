<template>
    <main class="container">
        <div class="py-2"></div>
        <span class="text-red-600 rounded shadow">
            {{ valmsg.message }}
        </span>
        <div class="card rounded shadow">
            <div class="card-header">
                <h6>Perbandingan Penjualan Berdasarkan Jenis Barang</h6>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <div class="input-group">
                            <label for="c_search" class="btn btn-info">Dari Tanggal:</label>
                            <input type="date" class="form-control" :class="{ 'is-invalid': validation.tgl_awal }"
                                v-model="filter.tgl_awal" v-on:keyup="searchAndSort" />
                            <span v-if="validation.tgl_awal" class="invalid-feedback" role="alert">
                                {{ validation.tgl_awal[0] }}
                            </span>
                            <label for="tgl_akhir" class="btn btn-info">Sampai:</label>
                            <input type="date" class="form-control" :class="{ 'is-invalid': validation.tgl_akhir }"
                                v-model="filter.tgl_akhir" v-on:keyup="searchAndSort" />
                            <span v-if="validation.tgl_akhir" class="invalid-feedback" role="alert">
                                {{ validation.tgl_akhir[0] }}
                            </span>
                        </div>
                    </div>
                </div>
                <br><br>
                <table class=" table table-responsive table-hover table-bordered">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col">
                                Jenis Barang
                            </th>
                            <th scope="col">
                                Total Terjual
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="perbandingan in perbandingan" :key="perbandingan.id_trx">
                            <td>
                                {{ perbandingan.jenis }}
                            </td>
                            <td>
                                {{ perbandingan.qty_terjual }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </main>
</template>
<script>
import { reactive, ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
export default {
    methods: {
        searchAndSort(e) {
            axios
                .get(`/compareTrx/?tgl_awal=${this.filter.tgl_awal}&tgl_akhir=${this.filter.tgl_akhir}`)
                .then((res) => {
                    this.perbandingan.value = res.data.data;
                })
                .catch((error) => {
                    this.valmsg.value = error.response.data.message;
                    console.log(error);
                });
        },
    },
    setup() {
        const perbandingan = ref([]);
        const validation = reactive([]);

        const valmsg = ref([]);

        var currentDate = new Date();
        currentDate.setDate(currentDate.getDate());

        let objectDate = currentDate;

        let day = objectDate.getDate();

        let month = objectDate.getMonth() + 1;

        let year = objectDate.getFullYear();

        if (day < 10) {
            day = '0' + day;
        }

        if (month < 10) {
            month = `0${month}`;
        }

        const filter = reactive({
            tgl_awal: "",
            tgl_akhir: "",
        });


        filter.tgl_awal = year + '-' + month + '-' + day;
        filter.tgl_akhir = year + '-' + month + '-' + day;

        onMounted(() => {
            // fetch api from laravel backend
            axios
                .get('/compareTrx')
                .then((res) => {
                    perbandingan.value = res.data.data;
                })
                .catch((error) => {
                    console.log(error.message);
                    validation.value = error.message;
                });
        });
        return {
            perbandingan,
            filter,
            valmsg,
            validation,
        };
    },
};
</script>