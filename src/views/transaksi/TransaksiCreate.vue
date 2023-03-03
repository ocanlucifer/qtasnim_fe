<template>
    <div class="">
        <nav class="rounded-md w-full">
            <ol class="list-reset flex">
                <li>
                    <RouterLink to="/" class="text-blue-600 hover:text-blue-700">Home</RouterLink>
                </li>
                <li><span class="text-gray-500 mx-2">></span></li>
                <li>
                    <RouterLink to="/transaksi" class="text-blue-600 hover:text-blue-700">Transaksi
                    </RouterLink>
                </li>
                <li><span class="text-gray-500 mx-2">></span></li>
                <li class="text-gray-500">Create Transaksi</li>
            </ol>
        </nav>
        <span class="text-red-600 rounded shadow">
            {{ valmsg.message }}
        </span>
        <div class="flex justify-center px-4">
            <div class="w-full block rounded-lg shadow-lg bg-white">
                <div class="py-2 px-6 border-b border-gray-300">
                    <h5>Create Header Transaksi</h5>
                </div>
                <div class="p-6">
                    <form @submit.prevent="submit" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-md-auto">
                                <div class="form-floating mb-4 xl:w-96">
                                    <input type="date" class="form-control
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
                                        placeholder="08XXXXXXXXXX" :class="{ 'is-invalid': validation.tgl_transaksi }"
                                        v-model="transaksi.tgl_transaksi" readonly>
                                    <span v-if="validation.tgl_transaksi" class="invalid-feedback  py-2.5" role="alert">
                                        {{ validation.tgl_transaksi[0] }}
                                    </span>
                                    <label for="tgl_transaksi" class="text-gray-700">
                                        tgl_transaksi
                                    </label>
                                </div>
                                <br>
                                <div align="right">
                                    <RouterLink to="/transaksi"
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
        const transaksi = reactive({
            tgl_transaksi: "",
        });

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
        transaksi.tgl_transaksi = year + '-' + month + '-' + day;

        const validation = ref([]);

        const router = useRouter();
        const route = useRoute();
        const transaksi_id = ref(route.params.id);
        const valmsg = ref([]);

        function submit() {
            let tgl_transaksi = transaksi.tgl_transaksi;

            const config = {
                headers: {
                    "content-type": "multipart/form-data",
                },
            };
            axios
                .post(
                    `/transaksi`,
                    {
                        tgl_transaksi: tgl_transaksi,
                    },
                    config
                )
                .then((response) => {
                    router.push({ path: "/transaksi/show/" + response.data.data.id });
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
            transaksi,
            validation,
            router,
            submit,
            valmsg,
        };
    },
};
</script>