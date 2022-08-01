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
    <TableRowComp v-for="coin in currentList" :key="coin.id" :coin="coin" />
  </section>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { getList } from "@/utils/storageHandler";
import TableRowComp from "./TableRowComp.vue";

export default {
  name: "TableComp",
  // props: ["watchlist"],
  components: {
    TableRowComp,
  },
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
