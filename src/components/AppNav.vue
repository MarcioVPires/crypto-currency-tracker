<template>
  <section class="w-full flex flex-col justify-center items-center pt-14 sm:pt-16">
    <div class="w-full flex flex-col sm:flex-row sm:justify-between text-center pt-10 pb-4">
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
      <div class="w-full sm:w-1/4 relative pb-10 sm:order-2 sm:pb-0">
        <input
          aria-label="search"
          placeholder="insert a coin name"
          type="text"
          class="w-full rounded-full h-9 bg-[#3C516F] pl-12 text-white"
          :value="inputValue"
          @input="updateValue"
        />
        <img :src="[searchIcon]" alt="" class="absolute top-1.5 left-3 w-6" />
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
import searchIcon from "@/assets/img/search-icon.svg";

export default {
  name: "WatchList",
  props: ["page"],
  components: {},
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
      searchIcon,
    };
  },
  methods: {
    ToggleActive() {
      this.watchlistActive = !this.watchlistActive;
    },
  },
};
</script>
