<template>
  <div class="strength">
    <p class="title">
      <i class="iconfont icon-signal"></i>
      <span>信号强度:{{strength | strengthToTitle}}</span>
    </p>
    <div id="signalStrength"></div>
  </div>
</template>

<script>
  import {printBar} from './canvas'

  export default {
    name: "signal-strength",
    data() {
      return {
        strength: 4
      }
    },
    mounted() {
      printBar(this.strength, 'signalStrength')
    }
  }
</script>

<style lang="scss">
</style>
