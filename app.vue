<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const { $viewport } = useNuxtApp();

let isMobile = useMobile();

watch($viewport.breakpoint, () => {
  isMobile.value = $viewport.breakpoint.value.includes("mobile");
});

onBeforeMount(() => {
  if (window.innerWidth < 1000) {
    isMobile.value = true;
  } else {
    isMobile.value = false;
  }
  window.addEventListener(
    "resize",
    function () {
      if (window.innerWidth < 1000) {
        isMobile.value = true;
      } else {
        isMobile.value = false;
      }
    },
    { passive: true }
  );
});
</script>