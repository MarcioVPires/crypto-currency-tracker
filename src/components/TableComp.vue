<template>
  <div class="sm:invisible">
    <p class="text-xs text-gray-400 text-right pb-1">🡠 Scroll Left</p>
  </div>
  <section>
    <div
      class="flex flex-row sm:justify-around bg-[#202A44] text-white items-center rounded-lg py-2 mb-1"
    >
      <div class="min-w-[35%] text-center sm:min-w-[12%]" @scroll="console.log('scrollou')">
        <p>Name</p>
      </div>

      <div class="w-5/6 flex sm:justify-around whitespace-nowrap overflow-x-scroll no-scrollbar">
        <div v-for="name in propNames" :key="name" class="min-w-[50%] text-center sm:min-w-[12%]">
          <p>{{ name }}</p>
        </div>
      </div>
    </div>
    <div
      class="flex flex-row sm:justify-around bg-[#27445C] text-white items-center rounded-lg h-10 mb-1"
      v-for="coin in currentList"
      :key="coin.name"
    >
      <div
        class="min-w-[35%] h-full text-center text-xs sm:min-w-[12%] flex justify-end items-center"
      >
        <div class="flex flex-row items-center justify-center w-full">
          <img :src="coin.image" class="w-5 pr-1" alt="" />
          <p class="text-left w-14 sm:w-20">
            {{ coin.name }} <br /><sup>{{ coin.symbol }}</sup>
          </p>
        </div>
      </div>

      <div
        class="w-5/6 flex h-10 sm:justify-around whitespace-nowrap overflow-x-scroll no-scrollbar"
      >
        <div
          class="min-w-[50%] h-full text-center text-xs sm:min-w-[12%] flex justify-center items-center"
        >
          <p>{{ coin.price_change_percentage_1h_in_currency }}</p>
        </div>
        <div
          class="min-w-[50%] h-full text-center text-xs sm:min-w-[12%] flex justify-center items-center"
        >
          <p>{{ formCurrency.format(coin.current_price) }}</p>
        </div>
        <div
          class="min-w-[50%] h-full text-center text-xs sm:min-w-[12%] flex justify-center items-center"
        >
          <p>{{ formCurrency.format(coin.market_cap) }}</p>
        </div>
        <div
          class="min-w-[50%] h-full text-center text-xs sm:min-w-[12%] flex justify-center items-center"
        >
          <p>{{ formCurrency.format(coin.total_volume) }}</p>
        </div>
        <div
          class="min-w-[50%] h-full text-center text-xs sm:min-w-[12%] flex justify-center items-center"
        >
          <p>{{ coin.price_change_percentage_24h }}</p>
        </div>
        <div
          class="min-w-[50%] h-full text-center text-xs sm:min-w-[12%] flex justify-center items-center"
        >
          <p></p>
        </div>
        <div
          class="min-w-[50%] h-full text-center text-xs sm:min-w-[12%] flex justify-center items-center"
        >
          <p></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { getList } from "@/utils/storageHandler";
import formCurrency from "@/utils/formatmoney";

export default {
  name: "TableComp",
  components: {},
  setup() {
    const propNames = [
      "Last Hour",
      "Price",
      "Market Cap",
      "Volume",
      "Last Day",
      "Search",
      "Watchlist",
    ];
    console.log(useRouter().currentRoute.value.name);
    const list = computed(() => {
      return getList("list");
    });

    const currentRoute = computed(() => {
      return useRouter().currentRoute.value.name;
    });
    const currentList = computed(() => {
      if (currentRoute.value === "/") {
        return list.value.filter((item) => item.favorite);
      }
      return list.value;
    });
    return {
      list,
      propNames,
      currentList,
      currentRoute,
      formCurrency,
    };
  },
  methods: {
    log() {
      console.log(this.list);
    },
    getList,
  },
};
</script>
