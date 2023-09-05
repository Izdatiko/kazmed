<template>
  <div class="sid">
    <div class="pagination pt">
      <div class="section-container">
        <nuxt-link to="/">Главная</nuxt-link> /
        <nuxt-link to="/services">Услуги</nuxt-link>
      </div>
    </div>
    <div class="section-container">
      <div class="sid-wrapper">
        <div class="sid-wrapper__title">
          <h2>{{ sid.title }}</h2>
        </div>
        <div class="sid-wrapper__content">
          <img :src="sid.image" alt="" />
          <p>{{ sid.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const { data: sid } = await useFetch(
  `https://www.api.kme.kz/api/services/${route.params.id}/`
);
</script>