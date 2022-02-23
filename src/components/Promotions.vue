<template>
  <div class="promotions-wrapper">
    <TabsInner>
      <TabInner name="Актуальные" :selected="true">
        <component :is='Actual'></component>
      </TabInner>
      <TabInner name="Архив">
        <component :is='Archive'></component>
      </TabInner>
    </TabsInner>
  </div>
</template>

<script>
import TabInner from './ui/TabInner'
import TabsInner from './ui/TabsInner'
import Actual from './Actual'
import Archive from './Archive'
export default {
  components: {
    TabInner,
    TabsInner,
    Actual,
    Archive
  },
  name: 'Promotions',
  data() {
    return {
      Actual,
      Archive
    }
  }
}
</script>