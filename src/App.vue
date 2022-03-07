<template>
  <div id="app" class="app">
    <Modal
      v-if="isModalOpen"
      @closeModal="closeModal"
      @acceptModal="acceptModal"
    />
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
    <Footer v-if="(this.$route.path !== '/') && (this.$route.name !== 'Error')" />
  </div>
</template>

<script>
import Footer from './components/Footer'
import Modal from './components/Modal'
import Sidebar from './components/Sidebar.vue'

export default {
  components: {
    Footer,
    Modal,
    Sidebar
  },
  data() {
    return {
      isModalOpen: false,
      test: ''
    }
  },
  methods: {
    closeModal(val) {
      this.isModalOpen = val
    },
    acceptModal(val) {
      this.isModalOpen = val
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      if (this.$store.state.isMenuShow) {
        this.$store.commit('CLOSE_MENU')
      }
    })
  },
  computed: {
    overflowBody() {
      return this.$store.state.isMenuShow
    }
  },
  watch: {
    overflowBody() {
      if(this.overflowBody){
        document.documentElement.style.overflow = 'hidden'
        return
      }
      document.documentElement.style.overflow = 'auto'
    }
  }
}
</script>