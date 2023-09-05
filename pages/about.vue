<template>
  <div
    id="component-about"
    style="margin-bottom: 20px; border-radius: 32px"
    class="about"
  >
    <div class="section-container">
      <div class="pagination">
        <div>
          <nuxt-link to="/">Главная</nuxt-link> /
          <nuxt-link to="/about">О компании</nuxt-link>
        </div>
      </div>
      <div v-for="section in about" :key="section.id">
        <div class="about-content">
          <div class="about-content__text pageAbout">
            <h1>{{ section.title }}</h1>

            <p>
              {{ section.description }}
            </p>
          </div>
        </div>
        <div class="about-gallery">
          <div v-for="image in section.about_images" :key="image.id">
            <div
              class="about-gallery__img"
              :style="`background-image: url(${image.image});`"
            ></div>
          </div>
        </div>
      </div>

      <div class="about-content">
        <div class="about-content__license pageLicense">
          <h1>Лицензии</h1>
          <p>
            KazMedEngineering обладает необходимыми лицензиями и сертификатами
            для предоставления авторизованных услуг. Компания получила
            официальное разрешение от Philips на распространение и обслуживание
            медицинского оборудования. Данная лицензия демонстрирует наше тесное
            партнерство и приверженность строгим стандартам Philips
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: about } = await useFetch("https://www.api.kme.kz/api/about/");
</script>



<style lang="scss" scoped>
.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 350px;
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
