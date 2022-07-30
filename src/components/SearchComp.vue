<template>
  <div class="w-full sm:w-1/4 relative pb-10 sm:order-2 sm:pb-0">
    <input
      aria-label="search"
      placeholder="insert a coin name"
      type="text"
      class="w-full rounded-full h-9 bg-[#3C516F] pl-12"
    />
    <img :src="[searchIcon]" alt="" class="absolute top-1.5 left-3 w-6" />
  </div>
</template>

<script>
import searchIcon from "@/assets/img/search-icon.svg";

export default {
  name: "SearchComp",
  data() {
    return {
      searchIcon,
    };
  },
  methods() {},
};
</script>
