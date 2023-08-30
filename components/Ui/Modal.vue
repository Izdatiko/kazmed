<template>
  <div class="modal-bg" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <div class="modal-content">
        <IconSuccess />
        <p>Спасибо за заявку!</p>
        <p>В скором времени мы свяжемся с вами.</p>
        <IconClose class="modal-close" @click="$emit('close-modal')" />
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

