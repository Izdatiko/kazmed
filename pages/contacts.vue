<template>
  <div class="pagination pt">
    <div class="section-container">
      <nuxt-link to="/">Главная</nuxt-link> /
      <nuxt-link to="/contacts">Контакты</nuxt-link>
    </div>
  </div>
  <div class="contacts">
    <div class="contacts-design"><IconMap /></div>

    <div
      v-for="contact in contacts"
      :key="contact.id"
      class="section-container"
    >
      <h3 class="contacts-title">Контакты</h3>
      <h2 class="contacts-heading">{{ contact.name }}</h2>
      <div class="contacts-body">
        <div class="contacts-details">
          <div class="contacts-details__item">
            <p><span>Адрес: </span>{{ contact.address }}</p>
          </div>
          <div class="contacts-details__item">
            <p><span>Телефон: </span>{{ contact.phone_number }}</p>
          </div>
          <div class="contacts-details__item">
            <p><span>Email: </span>{{ contact.email }}</p>
          </div>
        </div>
        <div class="contacts-map">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A86bb9836a92b5b861a33cfeaf30016bf13fea24564995eda02daf14102ca7818&amp;source=constructor"
            width="500"
            height="400"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
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
  <!-- Work -->
  <div class="form">
    <div class="section-container">
      <div class="form-heading">РАБОТА В KazMedEngineering</div>
      <div class="form-text">
        Мы ищем инженера! Оставляйте свои данные и свяжемся с вами!
      </div>
      <form @submit.prevent="submitWork" class="form-form">
        <input
          v-model="workData.name"
          class="form-form__input"
          type="text"
          placeholder="Имя"
        />
        <input
          v-model="workData.phone_number"
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

const { data: contacts } = await useFetch(
  "https://www.api.kme.kz/api/contacts/"
);

const maxPhoneNumberLength = 12;

const formData = ref({
  name: "",
  phone_number: "",
});

const workData = ref({
  name: "",
  phone_number: "",
});

const closeModal = () => {
  showModal.value = false;
};

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

const submitWork = async () => {
  try {
    const response = await fetch(
      "https://www.api.kme.kz/api/vacancy/application/create/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: workData.value.name,
          phone_number: workData.value.phone_number,
        }),
      }
    );
    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData);
      workData.value.name = "";
      workData.value.phone_number = "";
      showModal.value = true;
    } else {
      console.error("Ошибка");
    }
  } catch (error) {
    console.error("Ошибка:", error);
  }
};
</script>