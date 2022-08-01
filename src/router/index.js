import { createRouter, createWebHistory } from "vue-router";
import CryptCurrenciesView from "../views/CryptCurrenciesView.vue";
import WatchListView from "../views/WatchListView.vue";
import dataTimeSearch from "../views/dataTimeSearch.vue";

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
  {
    path: "/data-time-search",
    name: "data-time-search",
    component: dataTimeSearch,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
