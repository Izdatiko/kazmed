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
            to="/advantages"
            >Преимущества</nuxt-link
          >
          <nuxt-link
            :class="{ isActive: isActive === 'services' }"
            @click="setActive('services')"
            to="/services"
          >
            <div>Услуги</div>
          </nuxt-link>
          <nuxt-link
            :class="{ isActive: isActive === 'contacts' }"
            @click="setActive('contacts')"
            to="/contacts"
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
        <Burger v-if="isMobile" />
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
  top: 0;
  right: -100%;
  background-color: white;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  transition: right 0.6s ease;
  text-decoration: none;
  max-width: 200px;
  height: 100vh;
}

.show-burger .burger-menu {
  right: 0;
}

.show-burger {
  transform: translateX(-100%);
}

a {
  text-decoration: none;
  color: black;
}
</style>