<template>
  <div id="component-about" class="about">
    <div class="section-container">
      <div class="about-content">
        <div class="about-content__swiper">
          <!-- <Swiper
            class="swiper-container"
            :pagination="true"
            :effect="'coverflow'"
            :grabCursor="true"
            :centeredSlides="true"
            :slidesPerView="'auto'"
            :coverflow="{
              rotete: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }"
          >
            <swiper-slide>
              <img src="../assets/img/about/1.png" alt="" />
            </swiper-slide>
            <swiper-slide>
              <img src="../assets/img/about/2.png" alt="" />
            </swiper-slide>
            <swiper-slide>
              <img src="../assets/img/about/3.png" alt="" />
            </swiper-slide>
          </Swiper> -->
        </div>
        <div class="about-content__text">
          <h6>О компании</h6>
          <h1>KazMedEngineering основано в июле 2007 года</h1>
          <p>
            Товарищество с ограниченной ответственностью «КазМедИнжиниринг» было
            основано в июле 2007 года.Мы являемся авторизированным
            дистрибьютором Philips Medical System Nederland B.V. в Республике
            Казахстан В своем составе компания имеет высококвалифицированных
            инженеров, прошедших обучение в ведущих учебных центрах Европы и
            США. Компания оснащена всем необходимым инструментарием для
            предоставления качественных услуг по диагностике, ремонту и
            обслуживанию медицинской техники
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

<style scoped>
.swiper-container {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}
</style>