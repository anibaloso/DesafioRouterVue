import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: HomeView
  },
  {
    path: '/productos',
    name: 'productos',
    props: () => {
      return {
        nombre: 'Desayuno',
        descripcion: 'Contamos con desayunos nutrivivos y deliciosos',
        precio: 2000,
        cantidad: 'Para dos personas'
      }
    },
    component: () => import('@/views/ProductosView.vue')
  },
  {
    path: '/contacto',
    name: 'contacto',
    props: () => {
      return {
        nombre: 'Desayuno',
        descripcion: 'Contamos con desayunos nutrivivos y deliciosos',
        precio: 2000,
        cantidad: 'Para dos personas'
      }
    },
    component: () => import('@/views/ContactoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
