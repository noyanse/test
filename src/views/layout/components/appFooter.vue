<template>
  <div class="app-footer">
    <ul>
      <li :class="['footer-btn', index===btnIndex?'active':'']"
          v-for="(btn, index) in footerBtns"
          :key="index" @click="handleChange(index)">
        <i :class="['iconfont', btn.icon]"></i>
        <p>{{btn.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import {FOOTER_BTNS} from '../../../constants/footer'

  export default {
    name: "app-footer",
    data() {
      return {
        footerBtns: FOOTER_BTNS,
        btnIndex: 0
      }
    },
    methods: {
      handleChange(index) {
        this.btnIndex = index
      }
    }
  }
</script>

<style lang="scss">
  .app-footer {
    width: 100%;
    height: 120px;
    background: #1A1C25;
    border-top: 1px solid #333;
    & > ul {
      overflow: hidden;
      .footer-btn {
        color: #fff;
        float: left;
        width: 33.3333%;
        text-align: center;
        .iconfont {
          display: block;
          font-size: 40px;
          color: #fff;
          margin: 15px 0;
        }
      }
      .active {
        color: #059DEA;
        .iconfont {
          color: #059DEA;
        }
      }
    }
  }
</style>
