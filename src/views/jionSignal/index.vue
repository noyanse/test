<template>
  <div>
    <strength/>
    <signal-type/>
    <sign-time/>
  </div>
</template>

<script>
  import strength from './components/strength'
  import SignalType from './components/SignalType'
  import SignTime from './components/SignTime'

  export default {
    name: "jionSignal",
    components: {strength, SignalType, SignTime}

  }
</script>

<style scoped>

</style>
