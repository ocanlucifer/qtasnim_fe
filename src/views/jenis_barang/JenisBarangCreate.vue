<template>
    <div class="">
        <nav class="rounded-md w-full">
            <ol class="list-reset flex">
                <li>
                    <RouterLink to="/" class="text-blue-600 hover:text-blue-700">Home</RouterLink>
                </li>
                <li><span class="text-gray-500 mx-2">></span></li>
                <li>
                    <RouterLink to="/jenis_barang" class="text-blue-600 hover:text-blue-700">Master Jenis Barang
                    </RouterLink>
                </li>
                <li><span class="text-gray-500 mx-2">></span></li>
                <li class="text-gray-500">Create Jenis Barang</li>
            </ol>
        </nav>
        <span class="text-red-600 rounded shadow">
            {{ valmsg.message }}
        </span>
        <div class="flex justify-center px-4">
            <div class="w-full block rounded-lg shadow-lg bg-white">
                <div class="py-2 px-6 border-b border-gray-300">
                    <h5>Input Jenis Barang Data</h5>
                </div>
                <div class="p-6">
                    <form @submit.prevent="submit" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-md-auto">
                                <div class="form-floating mb-4 xl:w-96">
                                    <input type="text" class="form-control
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
                                                                    m-0" placeholder="08XXXXXXXXXX"
                                        :class="{ 'is-invalid': validation.jenis }" v-model="jenis_barang.jenis">
                                    <span v-if="validation.jenis" class="invalid-feedback  py-2.5" role="alert">
                                        {{ validation.jenis[0] }}
                                    </span>
                                    <label for="jenis" class="text-gray-700">
                                        Jenis
                                    </label>
                                </div>
                                <br>
                                <div align="right">
                                    <RouterLink to="/jenis_barang"
                                        class="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">
                                        Back
                                    </RouterLink>
                                    &nbsp;
                                    <button type=" submit"
                                        class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                        Create
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
        const jenis_barang = reactive({
            jenis: "",
        });
        const validation = ref([]);

        const router = useRouter();
        const route = useRoute();
        const jenis_barang_id = ref(route.params.id);
        const valmsg = ref([]);

        function submit() {
            let jenis = jenis_barang.jenis;

            const config = {
                headers: {
                    "content-type": "multipart/form-data",
                },
            };
            axios
                .post(
                    `/jenis_barangs`,
                    {
                        jenis: jenis,
                    },
                    config
                )
                .then((response) => {
                    router.push({
                        path: "/jenis_barang"
                    });
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
            jenis_barang,
            validation,
            router,
            submit,
            valmsg,
        };
    },
};
</script>