<template>
  <div class="settings">
    <Header />
    <div class="settings__content">
      Настройки
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer'


export default {
  name: 'Settings',
  components: {
    Footer,
    Header
  }
}
</script>