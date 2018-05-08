<template>
  <div class="loading-box">
    <i class="iconfont icon-loading"></i>
  </div>
</template>

<script>
  export default {
    name: 'loading-name'
  }
</script>

<style lang="scss">
  @import "../../styles/mixin";

  .loading-box {
    display: flex;
    align-items: center;
    justify-content: center;
    @include fixedScreen;
    z-index: 1000;
    background-color: rgba(255, 255, 255, .3);
    .iconfont{
      display: block;
      color: #009A9A;
      font-size: 100px;
      animation:mymove 1.5s linear infinite;
    }
  }

  @keyframes mymove
  {
    from {transform:rotate(0)}
    to {transform:rotate(360deg)}
  }
</style>
