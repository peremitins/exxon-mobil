<template>
  <header class="header">
    <button
      class="header__burger"
      type="button"
      @click="toggleMenu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div v-if="this.$route.path === '/'" class="header__title">
      Объекты
    </div>
    <button type="button" v-else @click="$router.go(-1)" class="header__backward">
      <svg class="header__left-arrow">
        <use xlink:href="@/assets/img/svg/sprite.svg#ic24_bttn_left" />
      </svg>
      <span class="header__backward-text">Объекты</span>
    </button>
    <router-link to="" class="header__person">
      <svg class="header__person-icon">
        <use xlink:href="@/assets/img/svg/sprite.svg#ic_account" />
      </svg>
    </router-link>
    <div class="header__mobile-btn-group">
      <button class="header__mobile-btn header__mobile-btn-search" @click="showSearch">
        <svg>
          <use xlink:href="@/assets/img/svg/sprite.svg#ic36_search" />
        </svg>
      </button>
      <button class="header__mobile-btn header__mobile-btn-filter" @click="openFilter">
        <img src="@/assets/img/svg/ic36_filter.svg" alt="Filters icon">
        <span class="header__mobile-btn-qnt">
          1
        </span>
      </button>
      <button class="header__mobile-btn header__mobile-btn-add">
        <svg>
          <use xlink:href="../assets/img/svg/sprite.svg#ic24_bttn_add" />
        </svg>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    toggleMenu() {
      this.$store.commit('CLOSE_MENU')
    },
    showSearch() {
      this.$store.commit('TOGGLE_SEARCH')
    },
    openFilter() {
      conxole.log('kjb')
      this.$store.commit('CLOSE_FILTER')
    }
  }
}
</script>