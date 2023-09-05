<template>
  <div class="controls">
    <button @click="swiper.slidePrev()"><IconArrowLeft /></button>
    <button @click="swiper.slideNext()"><IconArrowRight /></button>
  </div>
</template>

<script setup>
const swiper = useSwiper();
</script>