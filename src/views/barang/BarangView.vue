<template>
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
            <li class="text-gray-500">Detail Barang</li>
        </ol>
    </nav>
    <span class="text-red-600 rounded shadow">
        {{ validation.message }}
    </span>
    <div class="flex justify-center px-4">
        <div class="w-full block rounded-lg shadow-lg bg-white">
            <div class="py-2 px-6 border-b border-gray-300">
                <h5>Detail Data Barang</h5>
            </div>
            <div class="p-6">
                <div class="row">
                    <div class="col-md-auto">
                        <div class="form-floating mb-3 xl:w-96">
                            <input type="text" class="form-control
                                                                w-full
                                                                text-base
                                                                font-normal
                                                                bg-clip-padding
                                                                rounded
                                                                transition
                                                                ease-in-out
                                                                m-0 border-0
                                                                bg-white" placeholder="08XXXXXXXXXX"
                                v-model="barang.kode_barang" disabled>
                            <label for="kode_barang" class="text-gray-700">
                                Kode Barang:
                            </label>
                        </div>

                        <div class="form-floating mb-3 xl:w-96">
                            <input type="text" class="form-control
                                                                w-full
                                                                text-base
                                                                font-normal
                                                                bg-clip-padding
                                                                rounded
                                                                transition
                                                                ease-in-out
                                                                m-0 border-0
                                                                bg-white" placeholder="08XXXXXXXXXX"
                                v-model="barang.nama_barang" disabled>
                            <label for="nama_barang" class="text-gray-700">
                                Nama Barang:
                            </label>
                        </div>

                        <div class="form-floating mb-3 xl:w-96">
                            <input type="text" class="form-control
                                                                w-full
                                                                text-base
                                                                font-normal
                                                                bg-clip-padding
                                                                rounded
                                                                transition
                                                                ease-in-out
                                                                m-0 border-0
                                                                bg-white" placeholder="08XXXXXXXXXX" v-model="barang.stock"
                                disabled>
                            <label for="stock" class="text-gray-700">
                                Stock:
                            </label>
                        </div>

                    </div>
                    <div class="col-md-auto">
                        <div class="form-floating mb-3 xl:w-96">
                            <input type="text" class="form-control
                                                                w-full
                                                                text-base
                                                                font-normal
                                                                bg-clip-padding
                                                                rounded
                                                                transition
                                                                ease-in-out
                                                                m-0 border-0
                                                                bg-white" placeholder="08XXXXXXXXXX"
                                v-model="barang.jenis_barang" disabled>
                            <label for="jenis_barang" class="text-gray-700">
                                Jenis Barang:
                            </label>
                        </div>
                        <div class="form-floating mb-3 xl:w-96">
                            <input type="text" class="form-control
                                                                    w-full
                                                                    text-base
                                                                    font-normal
                                                                    bg-clip-padding
                                                                    rounded
                                                                    transition
                                                                    ease-in-out
                                                                    m-0 border-0
                                                                    bg-white" placeholder="08XXXXXXXXXX"
                                v-model="barang.satuan" disabled>
                            <label for="satuan" class="text-gray-700">
                                Satuan:
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
                <div align="right">
                    <RouterLink to="/barang"
                        class="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">
                        Back</RouterLink>
                    &nbsp;
                    <RouterLink :to="{ name: 'barang.edit', params: { id: barang_id } }"
                        class="inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">
                        Edit
                    </RouterLink>
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
            satuan: "",
            jenis_barang: "",
        });

        const router = useRouter();
        const route = useRoute();
        const validation = ref([]);
        const barang_id = ref(route.params.id);

        onMounted(() => {
            axios
                .get(`/barangs/${route.params.id}`)
                .then((response) => {
                    barang.kode_barang = response.data.data.kode_barang;
                    barang.nama_barang = response.data.data.nama_barang;
                    barang.stock = response.data.data.stock;
                    barang.satuan = response.data.data.satuan;
                    barang.jenis_barang = response.data.data.jenis_barang.jenis;
                })
                .catch((error) => {
                    validation.value = error.message;
                    // console.log(error.response.data);
                });
        });

        return {
            barang,
            validation,
            router,
            barang_id,
        };
    },
};
</script>
