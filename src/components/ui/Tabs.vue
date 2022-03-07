<template>
  <div>
    <div class="tabs">
      <ul class="tabs__tab-wrapper">
        <li 
          v-for="(tab, idx) in tabs"
          :key="idx"
          class="tabs__tab"
          :class="{'is-active' : tab.isActive}"
        > 
          <a
            class="tabs__tab-link"
            :href="tab.href"
            @click="selectTab(tab)"
          >
            {{tab.name}}
          </a>
        </li>
      </ul>
    </div>
    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabs',
  data(){
    return{
      tabs: []
    };
  },
  created(){
    this.tabs = this.$children
  },
  methods:{
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name == selectedTab.name)
      });
    }
  }
}
</script>