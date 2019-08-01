<template>
  <div class="home">
    <div class="swipe">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="http://v.bootstrapmb.com/2019/6/mrcu5076/images/banner1.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="http://v.bootstrapmb.com/2019/6/mrcu5076/images/banner.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="http://v.bootstrapmb.com/2019/6/mrcu5076/images/banner1.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="http://v.bootstrapmb.com/2019/6/mrcu5076/images/banner.jpg" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="aui">
      <ul>
        <li>
          <img src="http://v.bootstrapmb.com/2019/6/mrcu5076/images/icon/icon-1.png" alt />
          <a href="#">热销单品</a>
        </li>
        <li>
          <img src="http://v.bootstrapmb.com/2019/6/mrcu5076/images/icon/icon-1.png" alt />

          <a href="#">今日上新</a>
        </li>
        <li>
          <img src="http://v.bootstrapmb.com/2019/6/mrcu5076/images/icon/icon-1.png" alt />
          <a href="#">优惠套装</a>
        </li>
        <li>
          <img src="http://v.bootstrapmb.com/2019/6/mrcu5076/images/icon/icon-1.png" alt />
          <a href="#">秒杀专场</a>
        </li>
      </ul>
    </div>
    <div class="hot">
      <p>牛仔男不单调不低调</p>
      <img src="http://v.bootstrapmb.com/2019/6/mrcu5076/images/hot.jpg" alt />
    </div>
    <van-grid :column-num="2">
      <van-grid-item v-for="(item,index) in lists" :key="index" :icon="item.img" :text="item.name" @click="productsinfo" />
    </van-grid>
    <van-grid :border="false" :column-num="2">
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          name: "裙子",
          img: "http://v.bootstrapmb.com/2019/6/mrcu5076/images/q1.png"
        },
        {
          name: "裙子",
          img: "http://v.bootstrapmb.com/2019/6/mrcu5076/images/q1.png"
        },
        {
          name: "裙子",
          img: "http://v.bootstrapmb.com/2019/6/mrcu5076/images/q1.png"
        },
        {
          name: "裙子",
          img: "http://v.bootstrapmb.com/2019/6/mrcu5076/images/q1.png"
        },
        {
          name: "裙子",
          img: "http://v.bootstrapmb.com/2019/6/mrcu5076/images/q1.png"
        },
        {
          name: "裙子",
          img: "http://v.bootstrapmb.com/2019/6/mrcu5076/images/q1.png"
        },
        {
          name: "裙子",
          img: "http://v.bootstrapmb.com/2019/6/mrcu5076/images/q1.png"
        }
      ]
    };
  },
  methods: {
    productsinfo () {
        this.$router.push('/productsinfo')
    }
  },
};
</script>

<style lang="less" scoped>
.home {
  position: relative;

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