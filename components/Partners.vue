<template>
  <div class="partners">
    <div class="section-container">
      <div class="partners-text">
        <div class="partners-text__subtitle"><p>Партнеры</p></div>
        <div class="partners-text__title">
          <h1>Организации, которые нам доверяют</h1>
        </div>
      </div>

      <div class="partners-items">
        <div v-for="logo in logos" :key="logo.id" class="partners-items__box">
          <img :src="logo.logo" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: logos } = await useFetch("https://www.api.kme.kz/api/partners/");
</script>

