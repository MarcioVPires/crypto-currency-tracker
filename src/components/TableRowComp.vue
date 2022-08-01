<template>
  <div
    class="flex flex-row sm:justify-around bg-[#27445C] text-white items-center rounded-lg h-10 mb-1"
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

    <div class="w-5/6 flex h-10 sm:justify-around whitespace-nowrap overflow-x-scroll no-scrollbar">
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
</template>

<script>
import formCurrency from "@/utils/formatmoney";

export default {
  props: ["coin"],
  setup() {
    return {
      formCurrency,
    };
  },
};
</script>
