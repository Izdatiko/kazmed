<template>
  <div class="advantages">
    <div class="section-container">
      <h3 class="advantages-title">Преимущества</h3>
      <h2 class="advantages-heading">
        KazMedEngineering является официальным представителем Philips
      </h2>
      <div class="advantages-list">
        <div
          v-for="advantage in advantages"
          :key="advantage.id"
          class="advantages-list__item"
        >
          <div class="advantages-image">
            <img :src="advantage.image" alt="" />
          </div>
          <h4 class="advantages-list__item">{{ advantage.title }}</h4>
          <p class="advantages-text">{{ advantage.description }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="advantages-additional">
    <div class="advantages-additional__block">
      <h3>Команда специалистов</h3>
      <p>
        Наши инженеры помогут разобраться вам со всеми вопросами, оставьте
        заявку
      </p>
    </div>
    <UiButton to="#form" class="whiteBtn">Оставить заявку</UiButton>
  </div>
</template>

<script setup>
const { data: advantages } = await useFetch(
  "https://www.api.kme.kz/api/advantages/"
);
</script>