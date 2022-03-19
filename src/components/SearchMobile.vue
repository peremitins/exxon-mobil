<template>
  <div class="search-mobile" :class="{ show: $store.state.isSearchShow }">
    <input
      type="text"
      ref="search"
      v-model="searchValue"
      placeholder="по ID, наименованию или адресу"
    >
    <svg class="search-mobile__icon-search">
      <use xlink:href="../assets/img/svg/sprite.svg#ic24_search" />
    </svg>
    <button
      type="button"
      class="search-mobile__btn-cancel"
      @click="closeSearch"
    >
      <svg>
        <use xlink:href="../assets/img/svg/sprite.svg#ic24_cancel" />
      </svg>
    </button>
  </div>
</template>

<script>

export default {
  name: 'SearchMobile',
  data() {
    return {
      searchValue: ''
    }
  },
  methods: {
    closeSearch() {
      this.$store.commit('TOGGLE_SEARCH')
      this.$nextTick(() => {
        this.$refs.search.blur()
      })
    }
  },
  computed: {
    isSearchShow() {
      return this.$store.state.isSearchShow
    }
  },
  watch: {
    isSearchShow() {
      this.$refs.search.focus()
    }
  }
}
</script>