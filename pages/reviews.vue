<template>
  <div class="review">
    <div class="section-container">
      <div class="pagination">
        <nuxt-link to="/">Главная</nuxt-link> /
        <nuxt-link to="/reviews">Отзывы</nuxt-link>
      </div>
      <div class="review-content">
        <div class="review-content__title">
          <h1>Отзывы</h1>
        </div>
        <div class="review-content__page">
          <UiBox :reviews="reviews" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const reviews = ref([]);

const fetchData = async () => {
  try {
    const response = await fetch("https://www.api.kme.kz/api/reviews/");
    const data = await response.json();
    reviews.value = data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(fetchData);
</script>