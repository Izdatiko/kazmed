<template>
  <div class="services">
    <div class="section-container">
      <h3 class="services-title">Услуги</h3>
      <h2 class="services-heading">
        ТО выполняется с использованием оригинальных деталей Philips
      </h2>
      <div class="services-list">
        <nuxt-link
          :to="`/services/${service.id}`"
          v-for="service in services"
          :key="service.id"
          class="services-list__item"
        >
          <img :src="service.image" class="services-image" alt="" />
          <div class="services-details">
            <div class="services-details__title">
              <h3>{{ service.title }}</h3>
            </div>
            <IconArrow :to="`/services/${id}`" class="services-icon" />
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const { data: services } = await useFetch(
  "https://www.api.kme.kz/api/services/"
);
</script>