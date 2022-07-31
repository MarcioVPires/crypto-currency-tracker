<template>
  <div class="sm:invisible">
    <p class="text-xs text-gray-400 text-right pb-1">Scroll right --></p>
  </div>
  <TableComp watchlist="true" />
</template>

<script>
import TableComp from "@/components/TableComp.vue";

export default {
  name: "WatchList",
  components: {
    TableComp,
  },
};
</script>
