<template>
  <div id="component-about" class="about">
    <div v-for="section in about" :key="section.id">
      <div class="about-content">
        <div class="about-content__swiper">
          <div class="swiper-container">
            <Swiper
              class="swiper-cards"
              :width="800"
              :modules="[SwiperEffectCoverflow, SwiperPagination]"
              :pagination="true"
              :initialSlide="1"
              :loop="false"
              :effect="'coverflow'"
              :space-between="60"
              :slides-per-view="3"
              :slider-to-scroll="3"
              :centered-slides="true"
              :coverflow-effect="{
                stretch: 1,
                depth: 20,
                rotate: 1,
                modifier: 1,
                slideShadows: false,
              }"
            >
              <SwiperSlide
                v-for="(image, index) in section.about_images"
                :key="index"
                class="swiper-wraper"
                :style="`background-image: url(${image.image});
              };`"
              >
                <div class="swiper-slide swiper-slide-active"></div>
              </SwiperSlide>
              <UiSwiperControls class="controls-right" />
            </Swiper>
          </div>
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
      <div class="about-content">
        <div class="about-content__license">
          <h1>Лицензии</h1>
          <p>
            KazMedEngineering обладает необходимыми лицензиями и сертификатами
            для предоставления авторизованных услуг. Компания получила
            официальное разрешение от Philips на распространение и обслуживание
            медицинского оборудования. Данная лицензия демонстрирует наше тесное
            партнерство и приверженность строгим стандартам Philips
          </p>
        </div>
        <div class="about-content__swiper">
          <div class="swiper-container">
            <Swiper
              class="swiper-cards"
              :width="800"
              :modules="[SwiperEffectCoverflow, SwiperPagination]"
              :pagination="true"
              :initialSlide="1"
              :loop="false"
              :effect="'coverflow'"
              :space-between="60"
              :slides-per-view="3"
              :slider-to-scroll="3"
              :centered-slides="true"
              :coverflow-effect="{
                stretch: 1,
                depth: 20,
                rotate: 1,
                modifier: 1,
                slideShadows: false,
              }"
            >
              <SwiperSlide
                v-for="image in licenses"
                :key="image.id"
                class="swiper-wraper"
                :style="`background-image: url(${image.image});
              };`"
              >
                <div class="swiper-slide"></div>
              </SwiperSlide>
              <UiSwiperControls class="controls-left" />
            </Swiper>
          </div>
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
const { data: licenses } = await useFetch(
  "https://www.api.kme.kz/api/licenses/"
);
</script>



<style lang="scss" scoped>
.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 380px;
  height: 450px;
  border-radius: 32px;
  transition: all 0.3s ease;
  box-shadow: 20px 20px 20px 0 rgba(40, 43, 57, 0.3);

  & .swiper-slide-active {
    z-index: 2;
    width: 450px;
  }
}

.swiper-cards {
  max-width: 691px !important;
  width: 100%;
}
</style>
