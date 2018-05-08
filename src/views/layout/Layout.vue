<template>
  <div class="layout">
    <div class="header">
      <app-header/>
    </div>
    <div class="content">
      <div class="body">
        <router-view/>
      </div>
    </div>
    <div class="footer">
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
  import AppHeader from './components/appHeader'
  import AppFooter from './components/appFooter'

  export default {
    name: "layout",
    components: {AppHeader, AppFooter}
  }
</script>

<style lang="scss">
  .footer{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
  }
</style>
