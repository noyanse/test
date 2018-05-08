<template>
  <div>
    test
  </div>
</template>
<script>
  export default {
    data () {
      return {
        activeTab: 'tab1'
      }
    },
    methods: {
      handleTabChange (val) {
        this.activeTab = val
      }
    }
  }
</script>
<style scoped>
</style>
