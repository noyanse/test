<template>
  <div class="strength-box">
    <signal-strength/>
    <radio-strength/>
  </div>
</template>

<script>
  import SignalStrength from './SignalStrength'
  import RadioStrength from './RadioStrength'

  export default {
    components: {SignalStrength, RadioStrength}
  }
</script>

<style lang="scss">
  @import "./style";
  .strength-box{
    overflow: hidden;
    background: #252A31;
  }
</style>
