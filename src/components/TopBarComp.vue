<template>
  <nav
    class="w-full fixed flex justify-between items-center bg-[#192841] h-12 2xl:px-48 xl:px-24 top-0 p-7 sm:p-8"
  >
    <img :src="require('@/assets/img/logo-cct.svg')" alt="logo" class="w-28 sm:w-36" />
    <div class="flex gap-5">
      <p>USD</p>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
