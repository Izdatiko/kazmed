<script setup lang="ts">
const swiper = useSwiper();
</script>

<template>
  <div class="controls">
    <button @click="swiper.slidePrev()"><IconArrowLeft /></button>
    <button @click="swiper.slideNext()"><IconArrowRight /></button>
  </div>
</template>

<style scoped>
.controls {
  display: flex;
  gap: 10px;
  top: -60px;
  position: absolute;
  right: 20px;
}
</style>