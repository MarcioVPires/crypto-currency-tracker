<template>
  <section>
    <div
      class="flex flex-row sm:justify-around bg-[#202A44] text-white items-center rounded-lg py-2 mb-1"
    >
      <div class="min-w-[35%] text-center sm:min-w-[12%]">
        <p>Name</p>
      </div>

      <div class="w-5/6 flex sm:justify-around whitespace-nowrap overflow-x-scroll no-scrollbar">
        <div class="min-w-[50%] text-center sm:min-w-[12%]">
          <p>Last Hour</p>
        </div>
        <!-- <div
          :v-for="name in propNames"
          :name="name"
          :key="name"
          :load="log(name)"
          class="min-w-[50%] text-center sm:min-w-[12%]"
        >
          <p>{{ name }}</p>
        </div> -->
        <div class="min-w-[50%] text-center sm:min-w-[12%]">
          <p>Price</p>
        </div>
        <div class="min-w-[50%] text-center sm:min-w-[12%]">
          <p>Market Cap</p>
        </div>
        <div class="min-w-[50%] text-center sm:min-w-[12%]">
          <p>Volume</p>
        </div>
        <div class="min-w-[50%] text-center sm:min-w-[12%]">
          <p>Last Day</p>
        </div>
        <div class="min-w-[50%] text-center sm:min-w-[12%]">
          <p>Last Week</p>
        </div>
        <div class="min-w-[50%] text-center sm:min-w-[12%]">
          <p>Notify</p>
        </div>
      </div>
    </div>
    <TableRowComp />
  </section>
</template>

<script>
import TableRowComp from "./TableRowComp.vue";

export default {
  name: "TableComp",
  props: ["watchlist"],
  components: {
    TableRowComp,
  },
  data() {
    return {
      propNames: ["Last Hour", "Price", "Market Cap", "Volume", "Last Day", "Search", "Watchlist"],
    };
  },
  methods: {
    log(item) {
      console.log(item);
      console.log(this.propNames);
    },
  },
};
</script>
