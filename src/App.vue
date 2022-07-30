<template>
  <TopBarComp />
  <main class="w-screen h-screen bg-grandient-ang px-8 2xl:px-48 xl:px-24">
    <MainBarComp />
    <router-view />
    <TestComp />
  </main>
</template>

<script>
import TopBarComp from "@/components/TopBarComp.vue";
import TestComp from "@/components/TestComp.vue";
import MainBarComp from "./components/MainBarComp.vue";

export default {
  name: "App",
  components: {
    TopBarComp,
    MainBarComp,
    TestComp,
  },
};
</script>
