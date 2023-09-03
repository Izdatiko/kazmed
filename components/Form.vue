<template>
  <div id="form" class="form">
    <div class="section-container">
      <div class="form-title">ОБРАТНАЯ СВЯЗЬ</div>
      <div class="form-heading">
        Наша команда экспертов готова ответить на любые вопросы
      </div>
      <div class="form-text">
        Предоставим рекомендации по передовым методам обслуживания и
        использования оборудования. Свяжитесь с нами сегодня, чтобы узнать
        больше о наших услугах и о том, как мы можем помочь вашему оборудованию
        работать наилучшим образом. Оставьте свои данные в форме ниже
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
          :maxlength="maxPhoneNumberLength"
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
  <UiModal @close-modal="closeModal" v-show="showModal"></UiModal>
</template>

<script setup>
let showModal = ref(false);

const formData = ref({
  name: "",
  phone_number: "",
});

const closeModal = () => {
  showModal.value = false;
};

const maxPhoneNumberLength = 12;

const submitForm = async () => {
  try {
    const response = await fetch("https://www.api.kme.kz/api/feedbacks/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.value.name,
        phone_number: formData.value.phone_number,
      }),
    });
    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData);
      formData.value.name = "";
      formData.value.phone_number = "";
      showModal.value = true;
    } else {
      console.error("Ошибка");
    }
  } catch (error) {
    console.error("Ошибка:", error);
  }
};
</script>