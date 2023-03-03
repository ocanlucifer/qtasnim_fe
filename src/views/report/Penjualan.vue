<template>
    <main class="container">
        <div class="py-2"></div>
        <span class="text-red-600 rounded shadow">
            {{ valmsg.message }}
        </span>
        <div class="card rounded shadow">
            <div class="card-header">
                <h6>List Penjualan</h6>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <div class="input-group">
                            <label for="c_search" class="btn btn-info">Search By:</label>
                            <select data-te-select-init class="form-select" :class="{ 'is-invalid': validation.c_search }"
                                v-model="filter.c_search">
                                <option value="kode_transaksi">Kode Transaksi</option>
                                <option value="kode_barang">Kode Barang</option>
                                <option value="nama_barang">Nama Barang</option>
                                <option value="stock_awal">Stok</option>
                                <option value="qty_jual">Jumlah Terjual</option>
                                <option value="tgl_transaksi">Tgl. Transaksi</option>
                                <option value="jenis">Jenis Barang</option>
                            </select>
                            <span v-if="validation.c_search" class="invalid-feedback" role="alert">
                                {{ validation.c_search[0] }}
                            </span>
                            <input type="text" class="form-control" :class="{ 'is-invalid': validation.search }"
                                v-model="filter.search" placeholder="type search keyword" v-on:keyup="searchAndSort" />
                            <span v-if="validation.search" class="invalid-feedback" role="alert">
                                {{ validation.search[0] }}
                            </span>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="input-group">
                            <label for="c_search" class="btn btn-success">Sort By:</label>
                            <select data-te-select-init class="form-select" :class="{ 'is-invalid': validation.c_sort }"
                                v-model="filter.c_sort">
                                <option value="kode_transaksi">Kode Transaksi</option>
                                <option value="kode_barang">Kode Barang</option>
                                <option value="nama_barang">Nama Barang</option>
                                <option value="tgl_transaksi">Tgl. Transaksi</option>
                            </select>
                            <span v-if="validation.c_sort" class="invalid-feedback" role="alert">
                                {{ validation.c_sort[0] }}
                            </span>
                            <select data-te-select-init class="form-select" v-model="filter.sort"
                                v-on:change="searchAndSort">
                                <option value="ASC">Ascending</option>
                                <option value="DESC">Descending</option>
                            </select>
                        </div>
                    </div>
                </div>
                <br><br>
                <table class=" table table-responsive table-hover table-bordered">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col">
                                No
                            </th>
                            <th scope="col">
                                Kode Barang
                            </th>
                            <th scope="col">
                                Nama Barang
                            </th>
                            <th scope="col">
                                Stok
                            </th>
                            <th scope="col">
                                Jumlah Terjual
                            </th>
                            <th scope="col">
                                Tgl. Transaksi
                            </th>
                            <th scope="col">
                                Kode Transaksi
                            </th>
                            <th scope="col">
                                Jenis Barang
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="penjualan in penjualan" :key="penjualan.id_trx">
                            <td>
                                {{ penjualan.id_trx }}
                            </td>
                            <td>
                                {{ penjualan.kode_barang }}
                            </td>
                            <td>
                                {{ penjualan.nama_barang }}
                            </td>
                            <td>
                                {{ penjualan.stok }}
                            </td>
                            <td>
                                {{ penjualan.qty_jual }}
                            </td>
                            <td>
                                {{ penjualan.tgl_transaksi }}
                            </td>
                            <td>
                                {{ penjualan.kode_transaksi }}
                            </td>
                            <td>
                                {{ penjualan.jenis }}
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
                .get(`/reportTrx/?c_search=${this.filter.c_search}&search=${this.filter.search}&c_sort=${this.filter.c_sort}&sort=${this.filter.sort}`)
                .then((res) => {
                    this.penjualan.value = res.data.data;
                })
                .catch((error) => {
                    this.valmsg.value = error.response.data.message;
                    console.log(error);
                });
        },
    },
    setup() {
        const penjualan = ref([]);
        const validation = reactive([]);

        const valmsg = ref([]);

        const filter = reactive({
            c_search: "kode_transaksi",
            search: "",
            c_sort: "kode_transaksi",
            sort: "DESC",
        });

        onMounted(() => {
            // fetch api from laravel backend
            axios
                .get('/reportTrx')
                .then((res) => {
                    penjualan.value = res.data.data;
                })
                .catch((error) => {
                    console.log(error.message);
                    validation.value = error.message;
                });
        });
        return {
            penjualan,
            filter,
            valmsg,
            validation,
        };
    },
};
</script>