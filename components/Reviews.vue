<template>
  <div class="review">
    <div class="section-container">
      <div class="review-content">
        <div class="review-content__title">
          <h1>Отзывы</h1>
        </div>
        <div class="review-content__boxes">
          <UiBox :reviews="reviews" />
        </div>
        <UiButton class="btn" :to="'/reviews'">Смотреть все</UiButton>
      </div>
    </div>
  </div>
</template>

<script setup>
const reviews = ref([]);

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://www.api.kme.kz/api/reviews/get_last_three/"
    );
    const data = await response.json();
    reviews.value = data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(fetchData);
</script>


