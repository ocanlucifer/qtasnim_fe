<template>
    <nav class="rounded-md w-full">
        <ol class="list-reset flex">
            <li>
                <RouterLink to="/" class="text-blue-600 hover:text-blue-700">Home</RouterLink>
            </li>
            <li><span class="text-gray-500 mx-2">></span></li>
            <li class="text-gray-500">Transaksi</li>
        </ol>
    </nav>
    <span class="text-red-600 rounded shadow">
        {{ validation.message }}
    </span>
    <div class="flex justify-center px-4">
        <div class="w-full block rounded-lg shadow-lg bg-white">
            <div class="py-2 px-6 border-b border-gray-300">
                <h5>Transaksi List</h5>
            </div>
            <div class="p-6">
                <RouterLink to="/transaksi/create"
                    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                    Create
                </RouterLink>
                <br><br>
                <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="overflow-x-auto">
                                <table class="table table-hover table-bordered">
                                    <thead class="bg-gray-50">
                                        <tr>
                                            <th scope="col">
                                                Kode Transaksi
                                            </th>
                                            <th scope="col">
                                                Tanggal Transaksi
                                            </th>
                                            <th scope="col">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="transaksi in transaksi" :key="transaksi.id">
                                            <td class="text-sm">
                                                <RouterLink :to="{ name: 'transaksi.show', params: { id: transaksi.id } }">
                                                    {{ transaksi.kode_transaksi }}
                                                </RouterLink>
                                            </td>
                                            <td class="text-sm">
                                                {{ transaksi.tgl_transaksi }}
                                            </td>
                                            <td class="text-sm">
                                                <button @click.prevent="transaksiDelete(transaksi.id, index)"
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
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { onMounted, ref } from 'vue';
export default {
    setup() {
        let transaksi = ref([]);
        let validation = ref([]);

        onMounted(() => {
            // fetch api from laravel backend
            axios
                .get('/transaksi')
                .then((res) => {
                    transaksi.value = res.data.data;
                })
                .catch((error) => {
                    console.log(error.message);
                });
        });
        function transaksiDelete(id, index) {
            axios
                .delete(`/transaksi/${id}`)
                .then(() => {
                    transaksi.value.splice(index, 1);
                    // router.push({ path: "/transaksi" });
                })
                .catch((error) => {
                    validation.value = error.message;
                });
        }
        return {
            transaksi,
            transaksiDelete,
            validation,
        };
    },
};
</script>