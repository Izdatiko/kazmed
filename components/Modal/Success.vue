<template>
  <div v-if="showModal" class="modal-bg" @click="closeModal">
    <div class="modal" @click.stop>
      <div class="modal-content">
        <IconSuccess />
        <p>Спасибо за заявку!</p>
        <p>В скором времени мы свяжемся с вами.</p>
        <IconClose class="modal-close" @click="closeModal" />
      </div>
    </div>
  </div>
</template>

<script setup>
const showModal = ref(true);

const closeModal = () => {
  showModal.value = false;
};
</script>

