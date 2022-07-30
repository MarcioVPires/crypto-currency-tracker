<template>
  <section>
    <h1>Table</h1>
    <TableRowComp />
  </section>
</template>

<script>
import TableRowComp from "./TableRowComp.vue";

export default {
  name: "TableComp",
  components: {
    TableRowComp,
  },
};
</script>
