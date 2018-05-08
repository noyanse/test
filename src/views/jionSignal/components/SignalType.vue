<template>
  <div class="signal-type">
    <div class="signal-box" v-for="(type, index) in signalTypes" :key="index">
      <div :class="['signal-cell', index%3===2?'':'cell-right-border']">
        <p class="content">{{type.value}}</p>
        <p class="title">{{type.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {SIGNAL_TYPES} from '../../../constants/signalType'
  export default {
    name: "signal-type",
    data(){
      return {
        signalTypes: SIGNAL_TYPES
      }
    }
  }
</script>

<style lang="scss">
  .signal-type {
    background: #252A31;
    color: #fff;
    margin-top: 5px;
    overflow: hidden;
    .signal-box {
      width: 33.3333%;
      float: left;
      text-align: center;
      padding: 50px 0 40px 0;
      .signal-cell {
        .content {
          font-size: 32px;
        }
        .title {
          font-size: 16px;
          color: rgba(255, 255, 255, .6);
          margin-top: 20px;
        }
      }
      .cell-right-border {
        border-right: 1px solid #666;
      }
    }
  }
</style>
