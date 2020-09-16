import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Shop',
    component: () => import('../views/layout/Shop.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/layout/Home.vue'),
      },
      {
        path: 'products/:category',
        name: 'Products',
        component: () => import('../views/layout/Products.vue'),
      },
      {
        path: 'products/:subCategory',
        name: 'SubProducts',
        component: () => import('../views/layout/SubProducts.vue'),
      },
      {
        path: 'product/:id',
        name: 'Product',
        component: () => import('../views/layout/ClothesDetail.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/layout/About.vue'),
      },
      {
        path: 'info',
        name: 'Info',
        component: () => import('../views/layout/Info.vue'),
      },
      {
        path: 'storeInfo',
        name: 'StoreInfo',
        component: () => import('../views/layout/StoreInfo.vue'),
      },
      {
        path: 'columns',
        name: 'Columns',
        component: () => import('../views/layout/Columns.vue'),
      },
      {
        path: 'column/:id',
        name: 'Column',
        component: () => import('../views/layout/Column.vue'),
      },
    ],
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/cart/Cart.vue'),
    children: [
      {
        path: 'cartDetail',
        name: 'CartDetail',
        component: () => import('../views/cart/CartDetail.vue'),
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('../views/cart/Order.vue'),
      },
      {
        path: 'checkout',
        name: 'CheckOut',
        component: () => import('../views/cart/CheckOut.vue'),
      },
      {
        path: 'complete',
        name: 'Complete',
        component: () => import('../views/cart/Complete.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/admin',
    name: '後台',
    component: () => import('../views/dashboard/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'Backend_products',
        component: () => import('../views/dashboard/Products.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('../views/dashboard/Orders.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'storages',
        name: 'Storages',
        component: () => import('../views/dashboard/Storages.vue'),
        meta: { requiresAuth: true },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
