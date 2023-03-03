import { createRouter, createWebHistory } from 'vue-router'
import Penjualan from '../views/report/Penjualan.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'reportTrx',
      component: Penjualan
    },
    {
      path: '/compareTrx',
      name: 'compareTrx',
      component: () => import('../views/report/Perbandingan.vue')
    },
    {
      path: '/barang',
      name: 'barang',
      component: () => import('../views/barang/BarangIndex.vue')
    },
    {
      path: '/barang/show/:id',
      name: 'barang.show',
      component: () => import('../views/barang/BarangView.vue')
    },
    {
      path: '/barang/create',
      name: 'barang.create',
      component: () => import('../views/barang/BarangCreate.vue')
    },
    {
      path: '/barang/edit/:id',
      name: 'barang.edit',
      component: () => import('../views/barang/BarangEdit.vue')
    },
  ]
})

export default router
