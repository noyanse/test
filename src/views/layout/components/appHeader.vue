<template>
  <div class="nav">
    <mu-tabs :value="activeTab" @change="handleTabChange" class="tab">
      <mu-tab value="tab1" title="连接信号"/>
      <mu-tab value="tab2" title="关联信号"/>
    </mu-tabs>
  </div>
</template>

<script>
  export default {
    name: "appHeader",
    data() {
      return {
        activeTab: 'tab1'
      }
    },
    methods: {
      handleTabChange(val) {
        this.activeTab = val
      }
    }
  }
</script>

<style scoped>

</style>
