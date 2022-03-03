<template>
  <div id="app" class="app">
    <Modal
      v-if="isModalOpen"
      @closeModal="closeModal"
      @acceptModal="acceptModal"
    />
    <div class="main">
      <Sidebar />
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
      isModalOpen: true
    }
  },
  methods: {
    closeModal(val) {
      this.isModalOpen = val;
    },
    acceptModal(val) {
      this.isModalOpen = val;
    }
  }
}
</script>