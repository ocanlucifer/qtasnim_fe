<template>
    <div class="">
        <nav class="rounded-md w-full">
            <ol class="list-reset flex">
                <li>
                    <RouterLink to="/" class="text-blue-600 hover:text-blue-700">Home</RouterLink>
                </li>
                <li><span class="text-gray-500 mx-2">></span></li>
                <li>
                    <RouterLink to="/barang" class="text-blue-600 hover:text-blue-700">Master Barang</RouterLink>
                </li>
                <li><span class="text-gray-500 mx-2">></span></li>
                <li class="text-gray-500">Tambah Barang</li>
            </ol>
        </nav>
        <span class="text-red-600 rounded shadow">
            {{ valmsg.message }}
        </span>
        <div class="flex justify-center px-4">
            <div class="w-full block rounded-lg shadow-lg bg-white">
                <div class="py-2 px-6 border-b border-gray-300">
                    <h5>Tambah Data Barang</h5>
                </div>
                <div class="p-6">
                    <form @submit.prevent="submit" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-md-auto">

                                <div class="form-floating mb-4 xl:w-96">
                                    <input type="text"
                                        class="form-control
                                                                                                                                                            block
                                                                                                                                                            w-full
                                                                                                                                                            px-3
                                                                                                                                                            py-1.5
                                                                                                                                                            text-base
                                                                                                                                                            font-normal
                                                                                                                                                            bg-clip-padding
                                                                                                                                                            rounded
                                                                                                                                                            transition
                                                                                                                                                            ease-in-out
                                                                                                                                                            m-0"
                                        placeholder="08XXXXXXXXXX" :class="{ 'is-invalid': validation.nama_barang }"
                                        v-model="barang.nama_barang">
                                    <span v-if="validation.nama_barang" class="invalid-feedback py-2.5" role="alert">
                                        {{ validation.nama_barang[0] }}
                                    </span>
                                    <label for="nama_barang" class="text-gray-700">
                                        Nama Barang
                                    </label>
                                </div>

                                <div class="form-floating mb-4 xl:w-96">
                                    <input type="text"
                                        class="form-control
                                                                                                                                                            block
                                                                                                                                                            w-full
                                                                                                                                                            px-3
                                                                                                                                                            py-1.5
                                                                                                                                                            text-base
                                                                                                                                                            font-normal
                                                                                                                                                            bg-clip-padding
                                                                                                                                                            rounded
                                                                                                                                                            transition
                                                                                                                                                            ease-in-out
                                                                                                                                                            m-0"
                                        placeholder="08XXXXXXXXXX" :class="{ 'is-invalid': validation.stock }"
                                        v-model="barang.stock">
                                    <span v-if="validation.stock" class="invalid-feedback py-2.5" role="alert">
                                        {{ validation.stock[0] }}
                                    </span>
                                    <label for="stock" class="text-gray-700">
                                        Stock
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-auto">
                                <div class="form-floating mb-4 xl:w-96">
                                    <select
                                        class="form-select appearance-none
                                                                                                                                    block
                                                                                                                                    w-full
                                                                                                                                    px-3
                                                                                                                                    py-1.5
                                                                                                                                    text-base
                                                                                                                                    font-normal
                                                                                                                                    bg-clip-padding
                                                                                                                                    rounded
                                                                                                                                    transition
                                                                                                                                    ease-in-out
                                                                                                                                    m-0"
                                        placeholder="08XXXXXXXXXX" :class="{ 'is-invalid': validation.jenis_barang_id }"
                                        v-model="barang.jenis_barang">
                                        <option v-for="jenis_barang in jenis_barang" :key="jenis_barang.id"
                                            :value="jenis_barang.id">
                                            {{ jenis_barang.jenis }}
                                        </option>
                                    </select>
                                    <span v-if="validation.jenis_barang_id" class="invalid-feedback py-2.5" role="alert">
                                        {{ validation.jenis_barang_id[0] }}
                                    </span>
                                    <label for="jenis_barang" class="text-gray-700">
                                        Jenis Barang
                                    </label>
                                </div>

                                <div class="form-floating mb-4 xl:w-96">
                                    <input type="text"
                                        class="form-control
                                                                                                                                                            block
                                                                                                                                                            w-full
                                                                                                                                                            px-3
                                                                                                                                                            py-1.5
                                                                                                                                                            text-base
                                                                                                                                                            font-normal
                                                                                                                                                            bg-clip-padding
                                                                                                                                                            rounded
                                                                                                                                                            transition
                                                                                                                                                            ease-in-out
                                                                                                                                                            m-0"
                                        placeholder="08XXXXXXXXXX" :class="{ 'is-invalid': validation.satuan }"
                                        v-model="barang.satuan" readonly>
                                    <span v-if="validation.satuan" class="invalid-feedback py-2.5" role="alert">
                                        {{ validation.satuan[0] }}
                                    </span>
                                    <label for="satuan" class="text-gray-700">
                                        satuan
                                    </label>
                                </div>
                                <br>
                                <div align="right">
                                    <RouterLink to="/barang"
                                        class="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">
                                        Back
                                    </RouterLink>
                                    &nbsp;
                                    <button type=" submit"
                                        class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { reactive, ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
export default {
    setup() {
        const barang = reactive({
            kode_barang: "",
            nama_barang: "",
            stock: "",
            jenis_barang: "",
            satuan: "Pcs",
        });

        let jenis_barang = ref([]);

        const router = useRouter();
        const route = useRoute();
        const validation = ref([]);
        const barang_id = ref(route.params.id);
        const valmsg = ref([]);

        onMounted(() => {
            axios
                .get('/jenis_barangs')
                .then((res) => {
                    jenis_barang.value = res.data.data;
                })
                .catch((error) => {
                    console.log(error.message);
                });
        });

        function submit() {
            let kode_barang = barang.kode_barang;
            let nama_barang = barang.nama_barang;
            let stock = barang.stock;
            let jenis_barang = barang.jenis_barang;
            let satuan = barang.satuan;
            axios
                .post(`/barangs`,
                    {
                        kode_barang: kode_barang,
                        nama_barang: nama_barang,
                        stock: stock,
                        jenis_barang_id: jenis_barang,
                        satuan: satuan,
                    })
                .then((response) => {
                    router.push({ path: "/barang/show/" + response.data.data.id });
                })
                .catch((error) => {
                    if (error.response.data) {
                        valmsg.value = error.response.data;
                    }

                    if (error.response.data.validator) {
                        validation.value = error.response.data.validator;
                    }
                });
        }

        return {
            barang,
            jenis_barang,
            validation,
            router,
            submit,
            barang_id,
            valmsg,
        };
    },
};
</script>
