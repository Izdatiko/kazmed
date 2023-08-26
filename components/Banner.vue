<template>
  <div class="banner">
    <swiper
      :navigation="true"
      :pagination="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide class="banner-container">
        <div class="banner-content">
          <div class="banner-content__items">
            <h1>
              Обслуживание<br />
              мед. оборудования<br />
              <span>Philips</span>
            </h1>
            <p>от официального<br />представителя</p>
            <UiButton> Узнать больше </UiButton>
          </div>
          <div class="banner-content__items">
            <img src="@/assets/img/banner.png" alt="" />
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="banner-container">
        <div class="banner-content">
          <div class="banner-content__items">
            <h1>
              Обслуживание<br />
              мед. оборудования<br />
              <span>Philips</span>
            </h1>
            <p>от официального<br />представителя</p>
            <UiButton> Узнать больше </UiButton>
          </div>
          <div class="banner-content__items">
            <img src="@/assets/img/banner.png" alt="" />
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
</script>