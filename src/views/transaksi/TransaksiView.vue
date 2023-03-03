<template>
    <nav class="rounded-md w-full">
        <ol class="list-reset flex">
            <li>
                <RouterLink to="/" class="text-blue-600 hover:text-blue-700">Home</RouterLink>
            </li>
            <li><span class="text-gray-500 mx-2">></span></li>
            <li>
                <RouterLink to="/transaksi" class="text-blue-600 hover:text-blue-700">Transaksi</RouterLink>
            </li>
            <li><span class="text-gray-500 mx-2">></span></li>
            <li class="text-gray-500">Detail Transaksi</li>
        </ol>
    </nav>
    <span class="text-red-600 rounded shadow">
        {{ validation.message }}
    </span>
    <div class="flex justify-center px-4">
        <div class="w-full block rounded-lg shadow-lg bg-white">
            <div class="py-2 px-6 border-b border-gray-300">
                <h5>Header Transaksi</h5>
            </div>
            <div class="p-6">
                <div class="row">
                    <div class="col-md-auto">
                        <div class="form-floating mb-3 xl:w-96">
                            <input type="text"
                                class="form-co                                                                                                                                                 text-base
                                                                                                                                                                                                                                                                                                                        font-normal
                                                                                                                                                                                                                                                                                                                        bg-clip-padding
                                                                                                                                                                                                                                                                                                                        rounded
                                                                                                                                                                                                                                                                                                                        transition
                                                                                                                                                                                                                                                                                                                        ease-in-out
                                                                                                                                                                                                                                                                                                                        m-0 border-0
                                                                                                                                                                                                                                                                                                                        bg-white"
                                placeholder="08XXXXXXXXXX" v-model="transaksi.kode_transaksi" disabled>
                            <label for="kode_transaksi" class="text-gray-700">
                                Kode Transaksi:
                            </label>
                        </div>
                    </div>
                    <div class="col-md-auto">
                        <div class="form-floating mb-3 xl:w-96">
                            <input type="date"
                                class="form-control
                                                                                                                                                                                                                                                                                                                    w-full
                                                                                                                                                                                                                                                                                                                    text-base
                                                                                                                                                                                                                                                                                                                    font-normal
                                                                                                                                                                                                                                                                                                                    bg-clip-padding
                                                                                                                                                                                                                                                                                                                    rounded
                                                                                                                                                                                                                                                                                                                    transition
                                                                                                                                                                                                                                                                                                                    ease-in-out
                                                                                                                                                                                                                                                                                                                    m-0 border-0
                                                                                                                                                                                                                                                                                                                    bg-white"
                                placeholder="08XXXXXXXXXX" v-model="transaksi.tgl_transaksi" disabled>
                            <label for="tgl_transaksi" class="text-gray-700">
                                tgl_transaksi:
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
                <div align="right">
                    <RouterLink to="/transaksi"
                        class="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">
                        Back</RouterLink>
                    &nbsp;
                    <button type="button"
                        class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                        data-te-toggle="modal" data-te-target="#exampleModalLg" data-te-ripple-init
                        data-te-ripple-color="light">
                        Tambah Barang
                    </button>
                    <!-- <RouterLink :to="{ name: 'transaksi.edit', params: { id: transaksi_id } }"
                        class="inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">
                        Edit
                    </RouterLink> -->
                </div>
            </div>
        </div>
    </div>
    <div class="py-2"></div>
    <div class="flex justify-center px-4">
        <div class="w-full block rounded-lg shadow-lg bg-white">
            <div class="py-2 px-6 border-b border-gray-300">
                <h5>Detail Transaksi</h5>
            </div>
            <div class="p-6">
                <table class=" table table-responsive table-hover table-bordered">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col">
                                Kode Barang
                            </th>
                            <th scope="col">
                                Nama Barang
                            </th>
                            <th scope="col">
                                Qty
                            </th>
                            <th scope="col">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="trx_detail in trx_detail" :key="trx_detail.id">
                            <td>
                                {{ trx_detail.barang.kode_barang }}
                            </td>
                            <td>
                                {{ trx_detail.barang.nama_barang }}
                            </td>
                            <td>
                                {{ trx_detail.qty_jual }}
                            </td>
                            <td class="text-sm">
                                <button @click.prevent="detailDelete(trx_detail.id, index)"
                                    class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div data-te-modal-init
        class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="exampleModalLg" tabindex="-1" aria-labelledby="exampleModalLgLabel" aria-modal="true" role="dialog">
        <div data-te-modal-dialog-ref
            class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px]">
            <div
                class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                <div
                    class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <h5 class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                        id="exampleModalLgLabel">
                        Tambah Barang
                    </h5>
                    <button type="button"
                        class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        data-te-modal-dismiss aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="relative p-4">
                    <form @submit.prevent="submit" enctype="multipart/form-data">
                        <div class="form-floating mb-4 xl:w-96">
                            <select
                                class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal ding rounded transition ease-in-out m-0"
                                placeholder="08XXXXXXXXXX" :class="{ 'is-invalid': validation.jenis_barang_id }"
                                v-model="brg.barang_id">
                                <option v-for="barang in barang" :key="barang.id" :value="barang.id">
                                    {{ barang.nama_barang }}
                                </option>
                            </select>
                            <span v-if="validation.barang_id" class="invalid-feedback py-2.5" role="alert">
                                {{ validation.barang_id[0] }}
                            </span>
                            <label for="tgl_transaksi" class="text-gray-700">
                                Barang
                            </label>
                        </div>
                        <div class="form-floating mb-4 xl:w-96">
                            <input type="text"
                                class="form-control block w-full px-3 py-1.5 text-base font-normal bg-clip-padding rounded transition ease-in-out m-0"
                                placeholder="08XXXXXXXXXX" :class="{ 'is-invalid': validation.qty_jual }"
                                v-model="brg.qty_jual">
                            <span v-if="validation.qty_jual" class="invalid-feedback py-2.5" role="alert">
                                {{ validation.qty_jual[0] }}
                            </span>
                            <label for="stock" class="text-gray-700">
                                Qty
                            </label>
                        </div>

                        <button type=" submit"
                            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                            Add
                        </button>
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
        const transaksi = reactive({
            tgl_transaksi: "",
            kode_transaksi: "",
        });

        const brg = reactive({
            barang_id: "",
            qty_jual: 0,
            stock: 0,
        });

        const trx_detail = ref([]);

        const router = useRouter();
        const route = useRoute();
        const validation = ref([]);
        const transaksi_id = ref(route.params.id);

        let barang = ref([]);

        onMounted(() => {
            axios
                .get(`/transaksi/${route.params.id}`)
                .then((response) => {
                    transaksi.tgl_transaksi = response.data.data.tgl_transaksi;
                    transaksi.kode_transaksi = response.data.data.kode_transaksi;
                })
                .catch((error) => {
                    validation.value = error.message;
                    // console.log(error.response.data);
                });
            axios
                .get(`/transaksi_detail?idtrx=${route.params.id}`)
                .then((res) => {
                    trx_detail.value = res.data.data;
                })
                .catch((error) => {
                    console.log(error.message);
                });

            axios
                .get('/barangs')
                .then((res) => {
                    barang.value = res.data.data;
                })
                .catch((error) => {
                    console.log(error.message);
                });
        });

        function submit() {
            let trxid = route.params.id;
            let barang_id = brg.barang_id;
            let stock = brg.stock;
            let qty_jual = brg.qty_jual;

            const config = {
                headers: {
                    "content-type": "multipart/form-data",
                },
            };
            axios
                .post(
                    `/transaksi_detail`,
                    {
                        transaksi_id: trxid,
                        barang_id: barang_id,
                        stock_awal: stock,
                        qty_jual: qty_jual,
                    },
                    config
                )
                .then((response) => {
                    router.push({ path: "/transaksi/show/" + response.data.data.transaksi_id });
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
        function detailDelete(id, index) {
            axios
                .delete(`/transaksi_detail/${id}`)
                .then(() => {
                    transaksi.value.splice(index, 1);
                    // router.push({ path: "/transaksi" });
                })
                .catch((error) => {
                    validation.value = error.message;
                });
        }

        return {
            detailDelete,
            brg,
            submit,
            barang,
            transaksi,
            trx_detail,
            validation,
            router,
            transaksi_id,
        };
    },
};
</script>
