import Vue from 'vue'
import VueRouter from 'vue-router'
const fatherComp = () => import('@/layout/CenterMain')
const Overview = () => import('views/Overview')
const Portrait = () => import('views/Portrait')
const ProvinceDetail = () => import('views/ProvinceDetail')
const Welcome = () => import('views/welcome')
const Other = () => import('views/Other')
const Analysis = () => import("views/Analysis")
Vue.use(VueRouter)

export const children = [
  {
    path: 'overview',
    name: 'overview',
    component: Overview,
    meta: {
      title: '概览',
    },
  },
  {
    path: 'portrait',
    name: 'portrait',
    component: Portrait,
    meta: {
      title: '人口画像',
    },
  },
  {
    path: 'other',
    name: 'other',
    component: Other,
    meta: {
      title: '人口分布与素质',
    },
  }
]
export const menuList = [
  {
    path: '/home',
    name: 'home',
    component: fatherComp,
    redirect: 'home/overview',
    meta: {
      title: '数据库',
      icon: 'database'
    },
    children
  },
  {
    path: '/analysis',
    name: 'analysis',
    component: Analysis,
    meta: {
      title: '分析所',
      icon: 'analyse'
    },
  },
  {
    path: '/province-detail',
    name: 'province-detail',
    component: ProvinceDetail,
    meta: {
      title: '详细数据',
      icon: 'detail'
    }
  },
]

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  ...menuList
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
