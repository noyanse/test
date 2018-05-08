<!--辐射强度-->
<template>
  <div class="strength">
    <p class="title">
      <i class="iconfont icon-signal"></i>
      <span>辐射强度:{{strength | strengthToTitle}}</span>
    </p>
    <div id="radioStrength"></div>
  </div>
</template>

<script>
  import {printRing} from './canvas'
  export default {
    name: "radio-strength",
    data() {
      return {
        strength: 3
      }
    },
    mounted(){
      printRing(this.strength, 'radioStrength')
    }
  }
</script>

<style lang="scss">
</style>
