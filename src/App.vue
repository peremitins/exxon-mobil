<template>
  <div id="app">
    <div class="main container">
      <Sidebar />
      <div class="main-content">
        <Header></Header>
        <router-view class="pages"/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Sidebar from './components/Sidebar.vue'

export default {
  components: {
    Header,
    Sidebar
  }
}
</script>

<style lang="scss">

</style>
