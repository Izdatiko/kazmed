<template>
  <div v-for="review in reviews" :key="review.id" class="box">
    <div class="box-author">
      <img :src="review.logo" alt="" />
      <div class="box-author__name">
        <p>{{ review.name }}</p>
        <IconRating />
      </div>
    </div>
    <div class="box-review">
      <p v-html="review.feedback"></p>
      <a :href="review.file" target="_blank">
        <IconArrow />
      </a>
    </div>
  </div>
</template>

<script setup>
const { props } = defineProps(["reviews"]);
</script>