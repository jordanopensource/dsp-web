<template>
  <div class="tabs-component">
    <ul class="tabs-list">
      <li v-for="(tab, i) in tabs" :key="i" :class="{ 'is-active': tab.isActive, 'is-disabled': tab.isDisabled }"
        class="tab-list-item" role="presentation" v-show="tab.isVisible" :aria-controls="tab.hash"
        :aria-selected="tab.isActive" @click="selectTab(tab.hash, $event)">
        <a v-html="tab.header" :href="tab.hash" class="tab-list-item-a" role="tab"></a>
      </li>
    </ul>
    <div class="tabs-panels">
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tabs: [],
        activeTabHash: '',
        activeTabIndex: 0,
        lastActiveTabHash: '',
      }
    },
    props: {
      options: {
        type: Object,
        required: false,
        default () {
          return {
            useUrlFragment: true,
            defaultTabHash: null,
          }
        },
      },
    },
    created() {
      this.tabs = this.$children;
    },
    mounted() {
      window.addEventListener('hashchange', () => this.selectTab(window.location.hash));
      if (this.findTab(window.location.hash)) {
        this.selectTab(window.location.hash);
        return;
      }
      if (this.options.defaultTabHash !== null && this.findTab("#" + this.options.defaultTabHash)) {
        this.selectTab("#" + this.options.defaultTabHash);
        return;
      }
      if (this.tabs.length) {
        this.selectTab(this.tabs[0].hash);
      }
    },
    methods: {
      findTab(hash) {
        return this.tabs.find(tab => tab.hash === hash);
      },
      selectTab(selectedTabHash, event) {
        if (event && !this.options.useUrlFragment) {
          event.preventDefault();
        }
        const selectedTab = this.findTab(selectedTabHash);
        if (!selectedTab) {
          return;
        }
        if (selectedTab.isDisabled) {
          event.preventDefault();
          return;
        }
        if (this.lastActiveTabHash === selectedTab.hash) {
          this.$emit('clicked', {
            tab: selectedTab
          });
          return;
        }
        this.tabs.forEach(tab => {
          tab.isActive = (tab.hash === selectedTab.hash);
        });
        this.$emit('changed', {
          tab: selectedTab
        });
        this.activeTabHash = selectedTab.hash;
        this.activeTabIndex = this.getTabIndex(selectedTabHash);
        this.lastActiveTabHash = this.activeTabHash = selectedTab.hash;
      },
      setTabVisible(hash, visible) {
        const tab = this.findTab(hash);
        if (!tab) {
          return;
        }
        tab.isVisible = visible;
        if (tab.isActive) {
          tab.isActive = visible;
          this.tabs.every((tab, index, array) => {
            if (tab.isVisible) {
              tab.isActive = true;
              return false;
            }
            return true;
          });
        }
      },
      getTabIndex(hash) {
        const tab = this.findTab(hash);
        return this.tabs.indexOf(tab);
      },
      getTabHash(index) {
        const tab = this.tabs.find(tab => this.tabs.indexOf(tab) === index);
        if (!tab) {
          return;
        }
        return tab.hash;
      },
      getActiveTab() {
        return this.findTab(this.activeTabHash);
      },
      getActiveTabIndex() {
        return this.getTabIndex(this.activeTabHash);
      },
    },
  };

</script>

<style scoped>
  .tab-component {
    transition: all 0.25s linear;
    -webkit-transition: all 0.25s linear;
  }

  .tabs-panels {
    @apply relative block p-8 bg-white border-b border-l border-r border-solid border-josa-grey;
  }

  .tab-panel {
    transition: all 0.25s linear;
    -webkit-transition: all 0.25s linear;
  }

  .tabs-list:before {
    content: "";
    @apply absolute block bg-white top-auto left-0 right-0 bottom-0 border-b border-solid border-josa-grey;
  }

  .tabs-list {
    @apply list-none relative;
  }

  .tab-list-item {
    @apply cursor-pointer relative inline-block m-0 py-4 px-8 bg-josa-grey-100 z-10 border-t border-b border-solid border-josa-grey;
    transition: all 0.25s linear;
    -webkit-transition: all 0.25s linear;
  }

  [dir='ltr'] .tab-list-item {
    @apply border-l;
  }

  [dir='rtl'] .tab-list-item {
    @apply border-r;
  }

  [dir='ltr'] .tab-list-item:last-child {
    @apply border-r;
  }

  [dir='rtl'] .tab-list-item:last-child {
    @apply border-l;
  }

  .tab-list-item:hover {
    @apply bg-white;
  }

  .tab-list-item.is-active {
    @apply bg-white z-20;
    border-bottom-color: white;
  }

  .tab-list-item-a {
    @apply z-0 font-medium text-josa-black;
  }

</style>
