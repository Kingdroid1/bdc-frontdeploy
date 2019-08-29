<template>
  <div>
    <div class="tabs">
      <ul class="nav nav-tabs ad_tabs">
        <li class="nav-item pr-3" v-for="tab in tabs" v-bind:key="tab" >
          <a class="nav-link pb-3" :class="{ 'active': tab.isActive }" :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
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
    name: "tabs",

    data() {
      return { tabs: [] };
    },

    mounted() {
      this.tabs = this.$children;

      // add this :
      this.$nextTick(() => {
           this.selectTab(this.tabs[0]);
      });
      this.selectTab(this.tabs[1]);
    },
    
    created(){
    },

    methods: {
      selectTab(selectedTab) {
        this.tabs.forEach(tab => {
          tab.isActive = (tab.href == selectedTab.href);
        });
      }
    }
  };
</script>