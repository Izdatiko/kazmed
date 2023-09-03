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
            to="/about"
            >О компании</nuxt-link
          >
          <nuxt-link
            :class="{ isActive: isActive === 'reviews' }"
            @click="setActive('reviews')"
            to="/reviews"
            >Отзывы</nuxt-link
          >
          <nuxt-link
            :class="{ isActive: isActive === 'partners' }"
            @click="setActive('partners')"
            to="/partners"
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
          >
            <div>Услуги</div>
          </nuxt-link>
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
        <div
          v-if="isBurger"
          class="burger-menu"
          :class="{ 'show-burger': isBurger }"
        >
          <nuxt-link
            :class="{ isActive: isActive === 'about' }"
            @click="setActive('about')"
            to="/about"
            >О компании</nuxt-link
          >
          <nuxt-link
            :class="{ isActive: isActive === 'reviews' }"
            @click="setActive('reviews')"
            to="/reviews"
            >Отзывы</nuxt-link
          >
          <nuxt-link
            :class="{ isActive: isActive === 'partners' }"
            @click="setActive('partners')"
            to="/partners"
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
      </div>
    </div>
  </div>
</template>

<script setup>
let showServicesMenu = ref(false);
let isMobile = useMobile();
let isBurger = useBurger(false);
let isActive = ref("");

function setActive(section) {
  isActive.value = section;
}
</script>

<style scoped>
.isActive {
  color: #09a3b2;
}

.burger-menu {
  position: absolute;
  top: 100%;
  right: -100%;
  width: 100%;
  background-color: white;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  transition: transform 0.6s ease;
  text-decoration: none;
}

.show-burger {
  transform: translateX(-100%);
}

a {
  text-decoration: none;
  color: black;
}
</style>