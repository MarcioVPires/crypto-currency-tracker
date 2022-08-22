<template>
  <section class="w-full flex flex-col justify-center items-center pt-14 sm:pt-16">
    <div class="w-full flex flex-col sm:flex-row sm:justify-between text-center pt-10 pb-4">
      <NavComp />
    </div>
  </section>
</template>

<script>
import NavComp from "@/components/NavComp.vue";

export default {
  name: "WatchList",
  props: ["page"],
  components: {
    NavComp,
  },
};
</script>
