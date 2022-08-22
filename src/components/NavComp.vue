<template>
  <div class="w-full sm:w-1/3 flex flex-col justify-center sm:order-1">
    <div class="flex flex-col">
      <div class="flex items-center">
        <router-link
          :class="`${
            currentRoute === '/' ? style.activeTxt : style.inactiveTxt
          } w-1/2 sm:hover:bg-[#21406C]`"
          @click="ToggleActive"
          to="/"
          >Watchlist</router-link
        >
        <router-link
          :class="`${
            currentRoute === 'cryptocurrencies' ? style.activeTxt : style.inactiveTxt
          } w-1/2 sm:hover:bg-[#21406C]`"
          @click="ToggleActive"
          to="/cryptocurrencies"
          >Currencies</router-link
        >
      </div>
      <div :class="`relative h-1.5 bg-[#3C516F] flex flex-row`">
        <div
          :class="`absolute ${position} h-full w-1/2 bg-[#6BA6FF] ${
            watchlistActive ? style.left : style.right
          } transition-all`"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "NavComp",
  setup() {
    const style = {
      activeTxt: "text-white font-bold",
      inactiveTxt: "text-[#DCDCDC] font-light",
    };

    const currentRoute = computed(() => {
      return useRouter().currentRoute.value.name;
    });

    const position = computed(() => {
      if (currentRoute.value === "/") {
        return "left-0";
      }
      return "inset-x-1/2";
    });

    return {
      style,
      currentRoute,
      position,
    };
  },
  methods: {
    ToggleActive() {
      this.watchlistActive = !this.watchlistActive;
    },
  },
};
</script>
