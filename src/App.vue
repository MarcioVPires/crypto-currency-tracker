<template>
  <TopBarComp />
  <main class="w-screen h-screen overflow-x-hidden bg-grandient-ang px-8 2xl:px-48 xl:px-24">
    <AppNav :page="watchlist" @search="filter = $event" />
    <router-view v-slot="{ Component }">
      <component :is="Component" :page="watchlist" @update="updateWatchlistStatus" />
    </router-view>
  </main>
</template>

<script>
import { onMounted, ref } from "vue";
import TopBarComp from "@/components/TopBarComp.vue";
import AppNav from "@/components/AppNav.vue";
import { get } from "@/services/methods";

export default {
  name: "App",
  components: {
    TopBarComp,
    AppNav,
  },
  setup() {
    const getList = get("/coins");
    const watchlist = ref(null);
    const filter = ref("");
    onMounted(getList);

    function updateWatchlistStatus(param) {
      watchlist.value = param;
    }

    return { watchlist, filter, updateWatchlistStatus };
  },
  watch: {
    filter() {
      console.log(this.filter);
    },
  },
};
</script>
