import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './components/HomePage.vue';
import Mine from './components/Mine.vue';
import ShopCar from './components/ShopCar.vue';
import Sort from './components/Sort.vue';
import Home from './components/Home.vue';
import About from './components/Mine/About.vue';
import Address from './components/Mine/Address.vue';
import Collection from './components/Mine/Collection.vue';
import Order from './components/Mine/Order.vue';
import Info from './components/Mine/Info.vue';
import Message from './components/Mine/Message.vue';
import AddAddress from './components/Mine/AddAddress.vue';
import ProductsInfo from './components/ProductsInfo.vue';


Vue.use (Router);

export default new Router ({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage,
      redirect: {name: 'home'},
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home,
        },
        {
          path: '/sort',
          name: 'sort',
          component: Sort,
        },
        {
          path: '/shopcar',
          name: 'shopcar',
          component: ShopCar,
        },
        {
          path: '/mine',
          name: 'mine',
          component: Mine,
        },
        {
          path: '/about',
          name: 'about',
          component: About,
        },
        {
          path: '/info',
          name: 'info',
          component: Info,
        },
        {
          path: '/address',
          name: 'address',
          component: Address,
        },
        {
          path: '/collection',
          name: 'collection',
          component: Collection,
        },
        {
          path: '/order',
          name: 'order',
          component: Order,
        },
        {
          path: '/message',
          name: 'message',
          component: Message,
        },
        {
          path: '/addaddress',
          name: 'addaddress',
          component: AddAddress,
        },
        {
          path: '/productsinfo',
          name: 'productsinfo',
          component: ProductsInfo,
        },
      ],
    },
  ],
});
