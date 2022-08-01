<template>
  <section class="flex flex-col">
    <div class="flex">
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
    </div>
    <p v-if="error" class="text-center text-red-400">{{ message }}</p>
    <div class="text-white flex-col items-center pt-10">
      <div class="flex flex-row justify-around items-center bg-[#202A44] rounded-lg h-10">
        <p>Name</p>
        <p>Price</p>
      </div>
      <div class="flex flex-row justify-around items-center bg-[#27445C] rounded-lg h-10">
        <p>{{ coin }}</p>
        <p>{{ price }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { getList } from "@/utils/storageHandler";
import { getDateTimeValue } from "@/services/methods";
import formCurrency from "@/utils/formatmoney";

export default {
  setup() {
    const datetime = ref("");
    const coin = ref("");
    const list = ref(getList("list"));
    const error = ref(false);
    const price = ref();
    const message = ref("error: Insert Date/Time and select a coin");

    async function handleClick(date, value) {
      console.log(date);
      if (!date || !value) {
        error.value = true;
        return "";
      }
      error.value = false;
      price.value = formCurrency.format(await getDateTimeValue(date, value));
      console.log(price.value);
      return "";
    }

    return {
      datetime,
      list,
      coin,
      handleClick,
      error,
      message,
      price,
    };
  },
  watch: {
    coin() {
      console.log(this.coin);
    },
  },
};
</script>
