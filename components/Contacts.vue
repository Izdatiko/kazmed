<template>
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
</template>

<script setup>
const { data: contacts } = await useFetch(
  "https://www.api.kme.kz/api/contacts/"
);
</script>