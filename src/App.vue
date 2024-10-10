<template>
  <div class="w-full">
    <MainHeader />
  </div>
  <div class="md:mx-[60px] lg:mx-[100px] font-mono">
    <RouterView />
  </div>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue';

export default {
  components: {
    MainHeader
  }
}
</script>

<style scoped></style>
