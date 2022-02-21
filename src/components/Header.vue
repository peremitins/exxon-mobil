<template>
  <header class="header">
    <div v-if="this.$route.path === '/'">
      Список объектов
    </div>
    <router-link v-else to="/" class="header__backward">
      <svg class="header__left-arrow">
        <use xlink:href="@/assets/img/svg/sprite.svg#ic24_bttn_left" />
      </svg>
      <span class="header__backward-text">Назад</span>
    </router-link>
    <div class="header__person">
      <svg class="header__person-icon">
        <use xlink:href="@/assets/img/svg/sprite.svg#ic_account" />
      </svg>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>