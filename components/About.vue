<template>
  <div id="component-about" class="about">
    <div class="section-container">
      <div v-for="section in about" :key="section.id" class="about-content">
        <div class="about-content__swiper">
          <Swiper
            class="swiper-cards"
            :width="700"
            :modules="[SwiperEffectCoverflow, SwiperPagination]"
            :pagination="true"
            :loop="false"
            :effect="'coverflow'"
            :slides-per-view="3"
            :centered-slides="true"
            :coverflow-effect="{
              rotate: 90,
              stretch: 1,
              depth: 20,
              rotate: 1,
              modifier: 10,
              slideShadows: true,
            }"
          >
            <SwiperSlide
              v-for="image in section.about_images"
              :key="image.image"
              class="swiper-wraper"
            >
              <div
                class="swiper-slide"
                :style="`background-image: url(${image.image})`"
              ></div>
            </SwiperSlide>
            <!-- <UiSwiperControls class="controls" /> -->
          </Swiper>
        </div>
        <div class="about-content__text">
          <h6>О компании</h6>
          <h1>{{ section.title }}</h1>

          <p>
            {{ section.description }}
          </p>
          <UiButton class="btn"> Узнать больше </UiButton>
        </div>
      </div>
    </div>
    <div class="about-design__box"></div>
    <div class="block-container">
      <div class="about-design__opacity"></div>
      <div class="about-design__block"></div>
    </div>
  </div>
</template>

<script setup>
const { data: about } = await useFetch("https://www.api.kme.kz/api/about/");
</script>

<style scoped>
.swiper-container {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 350px;
  height: 450px;
  border-radius: 32px;
  flex-shrink: 0;
  margin: auto;
}

.swiper-cards {
  overflow: hidden;
}
</style>
