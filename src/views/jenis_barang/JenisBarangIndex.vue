<template>
    <nav class="rounded-md w-full">
        <ol class="list-reset flex">
            <li>
                <RouterLink to="/" class="text-blue-600 hover:text-blue-700">Home</RouterLink>
            </li>
            <li><span class="text-gray-500 mx-2">></span></li>
            <li class="text-gray-500">Master Jenis Barang</li>
        </ol>
    </nav>
    <span class="text-red-600 rounded shadow">
        {{ validation.message }}
    </span>
    <div class="flex justify-center px-4">
        <div class="w-full block rounded-lg shadow-lg bg-white">
            <div class="py-2 px-6 border-b border-gray-300">
                <h5>Jenis Barang List</h5>
            </div>
            <div class="p-6">
                <RouterLink to="/jenis_barang/create"
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
                                                Jenis
                                            </th>
                                            <th scope="col">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="jenis_barang in jenis_barang" :key="jenis_barang.id">
                                            <td class="text-sm">
                                                {{ jenis_barang.jenis }}
                                            </td>
                                            <td class="text-sm">
                                                <RouterLink
                                                    :to="{ name: 'jenis_barang.edit', params: { id: jenis_barang.id } }"
                                                    class="inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">
                                                    Edit
                                                </RouterLink>
                                                <button @click.prevent="jenis_barangDelete(jenis_barang.id, index)"
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
        let jenis_barang = ref([]);
        let validation = ref([]);

        onMounted(() => {
            // fetch api from laravel backend
            axios
                .get('/jenis_barangs')
                .then((res) => {
                    jenis_barang.value = res.data.data;
                })
                .catch((error) => {
                    console.log(error.message);
                });
        });
        function jenis_barangDelete(id, index) {
            axios
                .delete(`/jenis_barangs/${id}`)
                .then(() => {
                    jenis_barang.value.splice(index, 1);
                    // router.push({ path: "/jenis_barang" });
                })
                .catch((error) => {
                    validation.value = error.message;
                });
        }
        return {
            jenis_barang,
            jenis_barangDelete,
            validation,
        };
    },
};
</script>