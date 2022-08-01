<template>
  <TableComp :page="page" />
</template>

<script>
import TableComp from "@/components/TableComp.vue";

export default {
  name: "WatchList",
  props: ["page", "price"],
  emits: ["update"],
  components: {
    TableComp,
  },
  mounted() {
    // this.$emit("update", true);
  },
};
</script>
