<template>
  <aside class="sidebar" @click.stop="closeMenu">
    <div @click.stop class="sidebar__wrapper" :class="{ 'hidden': !this.$store.state.isMenuShow }">
      <button
        type="button"
        class="sidebar__btn-close"
        @click="closeMenu"
      >
        <span></span>
        <span></span>
      </button>
      <router-link
        to="/"
        class="sidebar__logo"
      >
        <img src="@/assets/img/svg/logo.svg" @click="closeMenu" alt="Логотип">
      </router-link>
      
      <nav class="sidebar__main-menu">
        <div class="sidebar__title">Основное</div>
        <ul class="sidebar__link-wrapper">
          <li class="sidebar__link-item" @click="closeMenu">
            <router-link to="/" class="sidebar__link">Список объектов</router-link>
          </li>
          <li class="sidebar__link-item" @click="closeMenu">
            <router-link to="/2" class="sidebar__link">Export for agency</router-link>
          </li>
        </ul>
      </nav>
      
      <nav class="sidebar__menu-settings">
        <div class="sidebar__title">Настройки</div>
        <ul class="sidebar__link-wrapper">
          <li class="sidebar__link-item" @click="closeMenu">
            <router-link to="/pointsm1c" class="sidebar__link">Общие</router-link>
          </li>
          <li class="sidebar__link-item" @click="closeMenu">
            <router-link to="#4" class="sidebar__link">Пользователи</router-link>
          </li>
          <li class="sidebar__link-item" @click="closeMenu">
            <router-link to="#5" class="sidebar__link">Промо акции</router-link>
          </li>
          <li class="sidebar__link-item" @click="closeMenu">
            <router-link to="#6" class="sidebar__link">Дистрибьюторы и ТА</router-link>
          </li>
          <li class="sidebar__link-item" @click="closeMenu">
            <router-link to="#7" class="sidebar__link">Справочник каналов</router-link>
          </li>
          <li class="sidebar__link-item" @click="closeMenu">
            <router-link to="#8" class="sidebar__link">Регионы</router-link>
          </li>
          <li class="sidebar__link-item" @click="closeMenu">
            <router-link to="#9" class="sidebar__link">Квартальные продажи</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  methods: {
    closeMenu() {
      this.$store.commit('CLOSE_MENU')
    }
  }
}
</script>