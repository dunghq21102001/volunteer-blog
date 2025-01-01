<template>
  <div class="w-full">
    <MainHeader />
  </div>
  <div class="md:mx-[60px] lg:mx-[100px]">
    <RouterView />
  </div>
  <MainFotter />

</template>
<script>
import { RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue';
import MainFotter from './components/MainFooter.vue'
export default {
  components: {
    MainHeader,
    MainFotter,
    RouterView
  }
}
</script>

<style scoped></style>
