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
    {
      path: '/jenis_barang',
      name: 'jenis_barang',
      component: () => import('../views/jenis_barang/JenisBarangIndex.vue')
    },
    {
      path: '/jenis_barang/create',
      name: 'jenis_barang.create',
      component: () => import('../views/jenis_barang/JenisBarangCreate.vue')
    },
    {
      path: '/jenis_barang/edit/:id',
      name: 'jenis_barang.edit',
      component: () => import('../views/jenis_barang/JenisBarangEdit.vue')
    },
    {
      path: '/transaksi',
      name: 'transaksi',
      component: () => import('../views/transaksi/TransaksiIndex.vue')
    },
    {
      path: '/transaksi/show/:id',
      name: 'transaksi.show',
      component: () => import('../views/transaksi/TransaksiView.vue')
    },
    {
      path: '/transaksi/create',
      name: 'transaksi.create',
      component: () => import('../views/transaksi/TransaksiCreate.vue')
    },
    {
      path: '/transaksi/edit/:id',
      name: 'transaksi.edit',
      component: () => import('../views/transaksi/TransaksiEdit.vue')
    },
    // {
    //   path: '/transaksi_detail',
    //   name: 'transaksi_detail',
    //   component: () => import('../views/transaksi_detail/TransaksiDetailIndex.vue')
    // },
    // {
    //   path: '/transaksi_detail/show/:id',
    //   name: 'transaksi_detail.show',
    //   component: () => import('../views/transaksi_detail/TransaksiDetailView.vue')
    // },
    // {
    //   path: '/transaksi_detail/create',
    //   name: 'transaksi_detail.create',
    //   component: () => import('../views/transaksi_detail/TransaksiDetailCreate.vue')
    // },
    // {
    //   path: '/transaksi_detail/edit/:id',
    //   name: 'transaksi_detail.edit',
    //   component: () => import('../views/transaksi_detail/TransaksiDetailEdit.vue')
    // },
  ]
})

export default router
