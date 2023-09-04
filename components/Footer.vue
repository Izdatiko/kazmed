<template>
  <div class="footer">
    <div class="header-container">
      <div class="footer-content">
        <div class="footer-content__items">
          <nuxt-link to="/">
            <img src="@/assets/img/Logo.png" alt="" />
          </nuxt-link>
        </div>
        <div class="footer-content__items">
          <nuxt-link to="/about">О компании</nuxt-link>
          <nuxt-link to="/partners">Партнеры</nuxt-link>
          <nuxt-link to="/advantages">Преимущества</nuxt-link>
          <nuxt-link to="/services">Услуги</nuxt-link>
          <nuxt-link to="/contacts">Контакты</nuxt-link>
        </div>
        <div class="footer-content__items">
          <div class="footer-content__contacts">
            <nuxt-link to="/">
              <IconWhatsapp />
            </nuxt-link>
            <nuxt-link to="tel:+77172270231">
              <IconPhone />
              +7 7172 27 02 31
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright">2023 г. ТОО "KazMedEngineering" ©.</div>
  </div>
</template>