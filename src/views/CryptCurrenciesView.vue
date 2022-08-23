<template>
  <TableComp page="allcoins" />
</template>

<script>
import TableComp from "@/components/TableComp.vue";

export default {
  name: "CryptCurrencies",
  props: ["page"],
  emits: ["update"],
  components: {
    TableComp,
  },
  mounted() {
    this.$emit("update", false);
  },
};
</script>
