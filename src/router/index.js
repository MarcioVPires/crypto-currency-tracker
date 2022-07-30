import { createRouter, createWebHistory } from "vue-router";
import CryptCurrenciesView from "../views/CryptCurrenciesView.vue";
import WatchListView from "../views/WatchListView.vue";

const routes = [
  {
    path: "/",
    name: "/",
    component: WatchListView,
  },
  {
    path: "/cryptocurrencies",
    name: "cryptocurrencies",
    component: CryptCurrenciesView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
