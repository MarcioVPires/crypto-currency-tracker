<template>
  <section class="flex">
    <select v-model="coin" class="w-2/6 rounded-lg" id="cars" aria-label="options">
      <option
        v-for="coin in list"
        :coin="coin"
        :key="coin.coin_id"
        :value="coin.coin_id"
        class="text-xs"
      >
        {{ coin.name }}
        <img class="w-1" :src="coin.image" alt="" />
      </option>
    </select>
    <input
      class="bg-[#3C516F] text-white text-xs rounded-l-lg h-9 w-4/6 px-4 ml-2"
      type="datetime-local"
      aria-label="date"
      v-model="datetime"
    />
    <button
      @click="handleClick(datetime, coin)"
      class="w-2/6 bg-blue-600 text-white rounded-r-lg p-1.5 hover:bg-blue-400"
    >
      Search
    </button>
  </section>
</template>

<script>
import { ref } from "vue";
import { getList } from "@/utils/storageHandler";
import { getDateTimeValue } from "@/services/methods";

export default {
  setup() {
    const datetime = ref("");
    const coin = ref("");
    const list = ref(getList("list"));

    function handleClick(date, value) {
      getDateTimeValue(date, value);
    }

    return {
      datetime,
      list,
      coin,
      handleClick,
    };
  },
  watch: {
    coin() {
      console.log(this.coin);
    },
  },
};
</script>
