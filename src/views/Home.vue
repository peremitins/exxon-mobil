<template>
  <div>
    <Tabs>
      <Tab name="Общие данные" :selected="true">
        <h1>here is the content for the pictures tab.</h1>
      </Tab>
      <Tab name="Mobil Бонус">
        <h1>here is the content for the pictures tab.</h1>
      </Tab>
      <Tab name="My Mobil">
        <h1>here is the content for the video tab.</h1>
      </Tab>
      <Tab name="Brand Assessment">
        <h1>2</h1>
      </Tab>
      <Tab name="Квартальные продажи">
        <h1>4</h1>
      </Tab>
    </Tabs>
  </div>
</template>

<script>
import Tab from '@/components/ui/Tab'
import Tabs from '@/components/ui/Tabs'

export default {
  components: {
    Tab, Tabs
  },
  name: 'Home',
  
}
</script>
