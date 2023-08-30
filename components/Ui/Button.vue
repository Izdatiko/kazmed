<template>
  <button @click="handleButtonClick">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  to: String,
});

const router = useRouter();

const emits = defineEmits(["click"]);

const handleButtonClick = () => {
  if (props.to) {
    router.push(props.to);
  }
  emits("click", props.to);
};
</script>