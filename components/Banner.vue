<template>
  <div class="banner">
    <swiper
      :navigation="true"
      :space-between="20"
      :pagination="true"
      :modules="modules"
      class="mySwiper"
      :autoplay="{
        delay: 7000,
      }"
    >
      <swiper-slide
        v-for="banner in banners"
        :key="banner.id"
        class="banner-container"
      >
        <div class="banner-content">
          <div class="banner-content__items">
            <h1>
              {{ banner.title.slice(3, -4) }}
            </h1>
            <p>{{ banner.sub_title }}</p>
            <UiButton :to="banner.url" class="btn">
              {{ banner.button }}
            </UiButton>
          </div>
          <div class="banner-content__items">
            <img :src="banner.image" alt="" />
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <div class="banner-down">
      <nuxt-link to="#component-about">
        <IconArrowDown />
        <p>О компании</p>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
const { data: banners } = await useFetch("https://www.api.kme.kz/api/banners/");
</script>