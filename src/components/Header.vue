<template>
  <header class="header">
    <div v-if="this.$route.path === '/'" class="header__title">
      Список объектов
    </div>
    <button type="button" v-else @click="$router.go(-1)" class="header__backward">
      <svg class="header__left-arrow">
        <use xlink:href="@/assets/img/svg/sprite.svg#ic24_bttn_left" />
      </svg>
      <span class="header__backward-text">Назад</span>
    </button>
    <router-link to="" class="header__person">
      <svg class="header__person-icon">
        <use xlink:href="@/assets/img/svg/sprite.svg#ic_account" />
      </svg>
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>