<template>
  <nav role="navigation">
    <div class="menuToggle">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>

      <ul class="menu">
        <nuxt-link to="/about">О компании</nuxt-link>
        <nuxt-link to="/reviews">Отзывы</nuxt-link>
        <nuxt-link to="/partners">Партнеры</nuxt-link>
        <nuxt-link to="/advantages">Преимущества</nuxt-link>
        <nuxt-link to="/services">Услуги</nuxt-link>
        <nuxt-link to="/contacts">Контакты</nuxt-link>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
a {
  text-decoration: none;
  color: black;

  transition: color 0.3s ease;
}

a:hover {
  color: #09a3b2;
}

.menuToggle {
  display: block;
  position: absolute;
  top: 30px;

  z-index: 1;

  -webkit-user-select: none;
  user-select: none;
  align-items: center;
}

.menuToggle input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
  -webkit-touch-callout: none;
}

.menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;

  background: #cdcdcd;
  border-radius: 3px;

  z-index: 1;

  transform-origin: 4px 0px;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

.menuToggle span:first-child {
  transform-origin: 0% 0%;
}

.menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

.menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: black;
}

.menuToggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

.menuToggle input:checked ~ span:nth-last-child(2) {
  opacity: 1;
  transform: rotate(-45deg) translate(0, -1px);
}

.menu {
  position: absolute;
  width: 300px;
  margin: -100px 0 0 0;
  padding: 50px;
  padding-top: 125px;
  right: -100px;
  background: white;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  display: flex;
  flex-direction: column;

  transform-origin: 0% 0%;
  transform: translate(100%, 0);

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
}

.menu a {
  padding: 10px 0;
  font-size: 22px;
}

.menuToggle input:checked ~ ul {
  transform: none;
  opacity: 1;
}

@media screen and (max-width: 768px) {
  #menu {
    transform: none;
    opacity: 0;

    transition: opacity 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }
}
</style>
