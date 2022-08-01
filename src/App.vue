<template>
  <TopBarComp />
  <main class="w-screen h-screen bg-grandient-ang px-8 2xl:px-48 xl:px-24">
    <MainBarComp :page="watchlist" @search="filter = $event" />
    <router-view v-slot="{ Component }">
      <component :is="Component" :page="watchlist" @update="updateWatchlistStatus" />
    </router-view>
  </main>
</template>

<script>
import { onMounted, ref } from "vue";
import TopBarComp from "@/components/TopBarComp.vue";
import MainBarComp from "@/components/MainBarComp.vue";
import { get } from "@/services/methods";

export default {
  name: "App",
  components: {
    TopBarComp,
    MainBarComp,
  },
  setup() {
    const getList = get("/coins");
    const watchlist = ref(null);
    const filter = ref("");
    const price = ref("");
    onMounted(getList);

    function updateWatchlistStatus(param) {
      watchlist.value = param;
    }

    // async function updatePrice() {
    //   const prices = await get("/get-current-price");
    //   price.value = prices;
    //   console.log(price.value);
    // }

    // onMounted(updatePrice());

    // setInterval(() => {
    //   console.log("interval");
    //   updatePrice();
    // }, 5000);
    return { watchlist, filter, updateWatchlistStatus };
  },
  watch: {
    filter() {
      console.log(this.filter);
    },
  },
};
</script>
