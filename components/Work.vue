<template>
  <div class="form">
    <div class="section-container">
      <div class="form-heading">РАБОТА В KazMedEngineering</div>
      <div class="form-text">
        Мы ищем инженера! Оставляйте свои данные и свяжемся с вами!
      </div>
      <form @submit.prevent="submitForm" class="form-form">
        <input
          v-model="formData.name"
          class="form-form__input"
          type="text"
          placeholder="Имя"
        />
        <input
          v-model="formData.phone_number"
          class="form-form__input"
          type="tel"
          placeholder="Телефон"
        />
        <UiButton type="submit" class="whiteBtn">Оставить заявку</UiButton>
      </form>
      <div class="form-terms">
        <IconApprove />
        <p>
          Отправляя свои данные вы соглашаетесь с условиями конфиденциальности
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const formData = ref({
  name: "",
  phone_number: "",
});

const submitForm = async () => {
  try {
    const response = await fetch(
      "https://www.api.kme.kz/api/vacancy/application/create/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.value.name,
          phone_number: formData.value.phone_number,
        }),
      }
    );
    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData);
      formData.value.name = "";
      formData.value.phone_number = "";
    } else {
      console.error("Ошибка");
    }
  } catch (error) {
    console.error("Ошибка:", error);
  }
};
</script>