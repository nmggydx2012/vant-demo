<template>
  <div class="home">
    <div class="fixed">
      <van-nav-bar title="海淘购" left-text="返回" right-text="按钮" left-arrow  @click="goback">
        <van-icon name="search" slot="right" />
      </van-nav-bar>
    </div>
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home" @click="GoHome">首页</van-tabbar-item>
      <van-tabbar-item icon="qr" @click="GOQr">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" info="5" @click="GoCar">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" info="20" @click="GoContact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      active: "wap-home"
    };
  },
  computed: {},
  methods: {
    goback() {
      this.$router.go(-1);
    },
    GoHome() {
      this.$router.push("/");
    },
    GOQr() {
      this.$router.push("/sort");
    },
    GoCar() {
      this.$router.push("/shopcar");
    },
    GoContact() {
      this.$router.push("/mine");
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  position: relative;
  .fixed {
    margin-top: -60px;
    color: red;
  }
  .swipe {
    img {
      height: 250px;
    }
  }
  .aui {
    margin: 10px 0;
    ul {
      width: 100%;
      li {
        float: left;
        list-style: none;
        border: 1px solid #ddd;
        width: 24%;
        img {
          width: 80%;
        }
        a {
          text-decoration: none;
          color: #424242;
          display: block;
          width: 100%;
        }
      }
    }
  }
  .hot {
    width: 100%;
    p {
      color: red;
    }
    img {
      width: 100%;
    }
  }
}
</style>
