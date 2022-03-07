<template>
  <div>
    <div class="tabs-inner">
      <ul class="tabs-inner__tab-wrapper">
        <li 
          v-for="(tab, idx) in tabs"
          :key="idx"
          class="tabs-inner__tab"
          :class="{'is-active' : tab.isActive}"
        > 
          <a
            class="tabs-inner__tab-link"
            :href="tab.href"
            @click="selectTab(tab)"
          >
            {{tab.name}}
          </a>
        </li>
      </ul>
    </div>
    <div class="tabs-inner-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabsInner',
  data() {
    return {
      tabs: []
    };
  },
  created() {
    this.tabs = this.$children
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name == selectedTab.name)
      });
    }
  }
}
</script>