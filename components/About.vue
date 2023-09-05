<template>
  <div id="component-about" class="about">
    <div v-for="section in about" :key="section.id">
      <div class="about-content">
        <div class="about-content__swiper">
          <div class="swiper-container">
            <Swiper
              class="swiper-cards"
              :modules="[SwiperPagination]"
              :pagination="true"
              :loop="false"
              :slides-per-view="1"
              :slider-to-scroll="1"
              :centered-slides="true"
              :breakpoints="{
                700: {
                  modules: [SwiperEffectCoverflow],
                  centeredSlides: true,
                  spaceBetween: 60,
                  slidesPerView: 3,
                  width: 800,
                  sliderToScroll: 3,
                  effect: 'coverflow',
                  coverflowEffect: {
                    stretch: 1,
                    depth: 20,
                    rotate: 1,
                    modifier: 1,
                    slideShadows: false,
                  },
                },
              }"
            >
              <SwiperSlide
                v-for="(image, index) in section.about_images"
                :key="index"
                class="swiper-wraper"
                :style="`background-image: url(${image.image});
              };`"
              >
                <div class="swiper-slide"></div>
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
          <UiButton :to="'/about'" class="btn"> Узнать больше </UiButton>
        </div>
      </div>
      <div class="about-gallery componentAbout">
        <div v-for="image in section.about_images" :key="image.id">
          <div
            class="about-gallery__img"
            :style="`background-image: url(${image.image});`"
          ></div>
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
              :modules="[SwiperPagination]"
              :pagination="true"
              :loop="false"
              :slides-per-view="1"
              :slider-to-scroll="1"
              :centered-slides="true"
              :breakpoints="{
                700: {
                  modules: [SwiperEffectCoverflow],
                  centeredSlides: true,
                  spaceBetween: 60,
                  slidesPerView: 3,
                  width: 800,
                  sliderToScroll: 3,
                  effect: 'coverflow',
                  coverflowEffect: {
                    stretch: 1,
                    depth: 20,
                    rotate: 1,
                    modifier: 1,
                    slideShadows: false,
                  },
                },
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
  height: 450px !important;
  border-radius: 32px;
  transition: all 0.3s ease;
  @media (min-width: 700px) {
    box-shadow: 20px 20px 20px 0 rgba(40, 43, 57, 0.3);
    height: 200px;
  }
}
.swiper-cards {
  max-width: 691px !important;
  width: 100%;
  @media (max-width: 700px) {
    max-width: 501px !important;
  }
}
</style>
