<template>
  <div class="login">
    <div class="lang-btn" @click="switchLang">
      <i :class="['iconfont','icon-'+language]"></i>
    </div>
    <div class="login-logo">
      <div class="logo-box">
        <i class="iconfont icon-logo"></i>
      </div>
      <p class="app-name">Signal</p>
    </div>

    <div class="input-box" style="margin-top: 18vh">
      <i class="iconfont icon-user"></i>
      <input type="text" v-model="form.username" :placeholder="$t('login.username')"/>
    </div>
    <div class="input-box border-bottom">
      <i class="iconfont icon-password"></i>
      <input type="password" v-model="form.password" :placeholder="$t('login.password')"/>
    </div>

    <mu-raised-button class="login-button"
                      @click="login" :label="$t('login.logIn')"/>

    <loading v-show="loadShow"/>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "login",
    data() {
      return {
        form: {
          username: 'admin',
          password: '123456'
        },
        loadShow: false
      }
    },
    computed: {
      ...mapGetters([
        'language'
      ])
    },
    mounted() {
    },
    methods: {
      login() {
        this.loadShow = true
        this.$fetch.login.login(this.form).then((res) => {
          this.loadShow = false
          this.$router.push('/joinSignal')
        }).catch((res) => {
          this.loadShow = false
        })
      },

      // 中英文切换
      switchLang() {
        let language = this.language === 'en' ? 'zh' : 'en'
        this.$i18n.locale = language
        this.$store.dispatch('setLanguage', language)
      }
    }
  }
</script>

<style lang="scss">
  .login {
    color: #fff;
    width: 100%;
    height: 100vh;
    background-color: #2C3E54;
    overflow: hidden;
    .lang-btn {
      width: 60px;
      height: 60px;
      position: fixed;
      z-index: 2000;
      right: 0;
      top: 15vh;
      opacity: .6;
      .iconfont {
        font-size: 60px;
        color: #fff;
      }
    }
    .login-logo {
      width: 100%;
      .logo-box {
        text-align: center;
        margin-top: 120px;
        .icon-logo {
          color: #009A9A;
          font-size: 120px;
          display: block;
        }
      }
      .app-name {
        font-size: 50px;
        text-align: center;
        margin-top: 30px;
      }
    }
    .input-box {
      border-top: 1px solid rgba(250, 250, 250, 0.2);
      width: 480px;
      height: 80px;
      margin: 0 auto;
      .iconfont {
        color: #A9B4BA;
        font-size: 38px;
        float: left;
        margin: 22px 0 0 0;
      }
      input {
        background: transparent;
        border: none;
        outline: none;
        height: 80px;
        margin-left: 22px;
        color: rgba(250, 250, 250, 0.8);
      }
    }
    .border-bottom {
      border-bottom: 1px solid rgba(250, 250, 250, 0.2);
    }
    .login-button {
      display: block;
      background-color: #009A9A;
      color: #fff;
      width: 480px;
      height: 80px;
      margin: 0 auto;
      margin-top: 120px;
    }
  }
</style>
