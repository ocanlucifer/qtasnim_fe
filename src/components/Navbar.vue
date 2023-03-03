
<template>
    <nav
        class="mx-auto relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 md:flex md:justify-between md:items-center">
        <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
            <div @click="toggleNav" class="flex md:hidden">
                <button type="button" class=" text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400">
                    <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                        <path fill-rule="evenodd"
                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                        </path>
                    </svg>
                </button>
            </div>
            <router-link to="/" class="px-6">
                <div class="nav-brand">
                    <img src="@/assets/logo.svg" width="50"
                        class="max-w-xs hover:scale-110 transition duration-300 ease-in-out">
                </div>

            </router-link>
            <div class="px-6">
                <ul :class="showMenu ? 'flex' : 'hidden'"
                    class="flex-col mt-3 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
                    <li class="text-gray-100 hover:text-indigo-400">
                        <RouterLink to="/jenis_barang"
                            class="nav-link max-w-xs hover:scale-110 transition duration-300 ease-in-out">Master Jenis
                            Barang
                        </RouterLink>
                    </li>
                    <li class="text-gray-100 hover:text-indigo-400">
                        <RouterLink to="/barang"
                            class="nav-link max-w-xs hover:scale-110 transition duration-300 ease-in-out">Master Barang
                        </RouterLink>
                    </li>
                    <li class="text-gray-100 hover:text-indigo-400">
                        <RouterLink to="/transaksi"
                            class="nav-link max-w-xs hover:scale-110 transition duration-300 ease-in-out">Transaksi
                        </RouterLink>
                    </li>
                    <li class="text-gray-100 hover:text-indigo-400">
                        <RouterLink to="/" class="nav-link max-w-xs hover:scale-110 transition duration-300 ease-in-out">
                            List Penjualan Barang
                        </RouterLink>
                    </li>
                    <li class="text-gray-100 hover:text-indigo-400">
                        <RouterLink to="/compareTrx"
                            class="nav-link max-w-xs hover:scale-110 transition duration-300 ease-in-out">
                            Penjualan Jenis Barang
                        </RouterLink>
                    </li>
                </ul>
            </div>
            <!-- Collapsible wrapper -->
        </div>
    </nav>
    <!-- <div class="bg-gray-700"> -->
    <div class="py-2"></div>
    <!-- <br> -->
    <!-- </div> -->
</template>
<script>
import { ref } from 'vue';
export default {
    setup() {
        let showMenu = ref(false);
        const toggleNav = () => (showMenu.value = !showMenu.value);

        return { showMenu, toggleNav };
    },
};
</script>