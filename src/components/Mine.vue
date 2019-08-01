<template>
  <div class="mine">
    这是Mine页面
    <ul>
      <li>
        <router-link to = '/info'>
          <img src="http://v.bootstrapmb.com/2019/6/mrcu5076/images/ad1.jpg" alt />
          <span>
            <i>艾薇儿</i>
            <i>时尚女王</i>
          </span>
          <br>
        </router-link>
        <van-icon name="arrow" class="icon" />
      </li>
    </ul>
    <ul>
      <li>
        <router-link to = '/order'>我的订单</router-link >
        <van-icon name="arrow" class="icon" />
      </li>
    </ul>
    <ul>
      <li>
        <router-link to = '/address'>收获地址</router-link>
        <van-icon name="arrow" class="icon" />
      </li>
      <li>
        <router-link to = '/message'>消息通知</router-link>
        <van-icon name="arrow" class="icon" />
      </li>
      <li>
        <router-link to = '/collection'>我的收藏</router-link >
        <van-icon name="arrow" class="icon" />
      </li>
    </ul>
    <ul>
      <li>
        <router-link to= "about">关于海淘购</router-link>
        <van-icon name="arrow" class="icon" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.mine {
  height: 100%;
  ul {
    margin-top: 10px;

    li {
      overflow: hidden;
      font-size: 18px;
      padding: 11px;
      img {
        width: 50px;
        float: left;
      }
      a {
        float: left;
        text-decoration: none;
        color: #424242;
        margin-left: 10px;
      }
      .icon {
        float: right;
        margin-right: 10px;
      }
    }
  }
}
</style>