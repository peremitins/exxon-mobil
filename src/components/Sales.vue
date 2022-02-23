<template>
  <section class="sales">
    <div class="sales__tabs">
      <TabsInner>
        <TabInner name="2021" :selected="true">
          <component :is="SalesContent"></component>
        </TabInner>
        <TabInner name="2020">
          <component :is="SalesContent"></component>
        </TabInner>
        <TabInner name="2019">
          <component :is="SalesContent"></component>
        </TabInner>
      </TabsInner>
    </div>
  </section>
</template>

<script>
import TabInner from './ui/Tab'
import TabsInner from './ui/TabsInner'
import SalesContent from './SalesContent'
export default {
  name: 'Sales',
  components: {
    TabInner, TabsInner, SalesContent
  },
  data() {
    return {
      SalesContent
    }
  }
}
</script>