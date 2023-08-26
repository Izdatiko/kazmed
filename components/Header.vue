<template>
  <div class="header fixed-header">
    <div class="header-container">
      <div class="header-nav">
        <div class="header-nav__items">
          <nuxt-link to="/">
            <img src="@/assets/img/Logo.png" alt="" />
          </nuxt-link>
        </div>
        <div v-if="!isMobile" class="header-nav__items">
          <nuxt-link
            :class="{ isActive: isActive === 'about' }"
            @click="setActive('about')"
            to="/"
            >О компании</nuxt-link
          >
          <nuxt-link
            :class="{ isActive: isActive === 'reviews' }"
            @click="setActive('reviews')"
            to=""
            >Отзывы</nuxt-link
          >
          <nuxt-link
            :class="{ isActive: isActive === 'partners' }"
            @click="setActive('partners')"
            to="/"
            >Партнеры</nuxt-link
          >
          <nuxt-link
            :class="{ isActive: isActive === 'advantages' }"
            @click="setActive('advantages')"
            to="/"
            >Преимущества</nuxt-link
          >
          <nuxt-link
            :class="{ isActive: isActive === 'services' }"
            @click="setActive('services')"
            to="/"
            >Услуги</nuxt-link
          >
          <nuxt-link
            :class="{ isActive: isActive === 'contacts' }"
            @click="setActive('contacts')"
            to="/"
            >Контакты</nuxt-link
          >
        </div>
        <div v-if="!isMobile" class="header-nav__items">
          <div class="header-nav__contacts">
            <nuxt-link to="/">
              <IconWhatsapp />
            </nuxt-link>
            <nuxt-link to="tel:+77172270231">
              <IconPhone />
              +7 7172 27 02 31
            </nuxt-link>
          </div>
        </div>
        <div v-if="isMobile" class="header-nav__items">
          <button
            @click="isBurger = !isBurger"
            :class="isBurger ? 'header-svg active-burger' : 'header-svg'"
          >
            <IconBurger />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let isMobile = useMobile();
let isBurger = useBurger();
let isActive = ref("");

console.log(isMobile.value);
function setActive(section) {
  isActive.value = section;
}
</script>

<style scoped>
.isActive {
  color: #09a3b2;
}
</style>