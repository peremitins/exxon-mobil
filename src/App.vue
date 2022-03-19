<template>
  <div id="app" class="app">
    <Modal
      v-if="isModalOpen"
      @closeModal="closeModal"
      @acceptModal="acceptModal"
    />
    <SearchMobile />
    <div class="main">
      <Sidebar class="desktop" />
      <Sidebar
        class="mobile"
        :class="{ 'overlay': this.$store.state.isMenuShow }"
      />
      <div class="main-content">
        <router-view class="pages" />
      </div>
    </div>
  </div>
</template>

<script>
import SearchMobile from './components/SearchMobile'
import Modal from './components/Modal'
import Sidebar from './components/Sidebar.vue'

export default {
  components: {
    SearchMobile,
    Modal,
    Sidebar
  },
  data() {
    return {
      isModalOpen: true,
      test: ''
    }
  },
  methods: {
    closeModal(val) {
      this.isModalOpen = val
    },
    acceptModal(val) {
      this.isModalOpen = val
    },
    overflowHidden() {
      if (this.isModalOpen) {
        document.documentElement.style.overflow = 'hidden'
      } else {
        document.documentElement.style.overflow = 'auto'
      }
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      if (this.$store.state.isMenuShow) {
        this.$store.commit('CLOSE_MENU')
      }
    })
    this.overflowHidden()
  },
  watch: {
    isModalOpen() {
      this.overflowHidden()
    }
  }
}
</script>