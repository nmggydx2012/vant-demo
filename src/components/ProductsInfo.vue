<template>
  <div class="productsinfo">
    <!-- 轮播图 -->
    <van-swipe :autoplay="2500" indicator-color="red">
      <van-swipe-item>
        <img src="http://v.bootstrapmb.com/2019/6/mrcu5076/images/page.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="http://v.bootstrapmb.com/2019/6/mrcu5076/images/page1.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="http://v.bootstrapmb.com/2019/6/mrcu5076/images/bd1.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="http://v.bootstrapmb.com/2019/6/mrcu5076/images/bd3.jpg" alt />
      </van-swipe-item>
    </van-swipe>
    <!-- 信息部分呢 -->
    <div class="message">
      <h3>2017春装新款修身九分西装裤小脚高腰休闲西裤女装,修身九分西装裤小</h3>
      <p>修身九分西装裤小脚高腰休闲西裤女装anna家32176</p>
      <em>¥81.25</em>
      <br />
      <i>价格 ¥121.25</i>
      <div>
        <span>
          <van-icon name="like-o" />销量 34
        </span>
        <span>
          <van-icon name="like-o" />收藏475人
        </span>
        <span>
          <van-icon name="like-o" />顺丰快递
        </span>
      </div>
    </div>
    <!-- tab选项卡 -->
    <van-tabs v-model="activeName" class="tabs" title-active-color="red">
      <van-tab title="商品详情" name="a">
        <p>
          春夏季新款破洞高腰牛仔裤女哈女哈伦铅笔春夏款破洞高腰牛仔裤
          女哈伦铅笔宽松九分女裤宽松九分女松九分女裤宽裤 S25
        </p>
        <img src="http://v.bootstrapmb.com/2019/6/mrcu5076/images/bd1.jpg" alt="">
        <img src="http://v.bootstrapmb.com/2019/6/mrcu5076/images/bd1.jpg" alt="">
        <img src="http://v.bootstrapmb.com/2019/6/mrcu5076/images/bd1.jpg" alt="">
        <img src="http://v.bootstrapmb.com/2019/6/mrcu5076/images/bd1.jpg" alt="">
        <img src="http://v.bootstrapmb.com/2019/6/mrcu5076/images/bd1.jpg" alt="">
        <img src="http://v.bootstrapmb.com/2019/6/mrcu5076/images/bd1.jpg" alt="">
      </van-tab>
      <van-tab title="规格尺码" name="b">
        <ul>
          <li>尺码: 均码</li>
          <li>腰围：68 紧身</li>
          <li>裤长：37</li>
          <li>衣长：59</li>
          <li>胸围：109</li>
          <li>裤口：32</li>
          <li>袖长：38</li>
          <li>颜色：黑色/白色/黄色</li>
          <li>风格：基本款</li>
          <li>季节：春季</li>
          <li>领型：连衣</li>
        </ul>
      </van-tab>
      <van-tab title="商品评价" name="c">
        <ul>
        <li>这个衣服还不错</li>
        <li>这个衣服还不错</li>
        <li>这个衣服还不错</li>
        <li>这个衣服还不错</li>
        <li>这个衣服还不错</li>
        </ul>
      </van-tab>
    </van-tabs>
    <!-- 购物车底部 -->
    <van-goods-action class="action">
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon info="5" icon="cart-o" text="购物车" />
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "a"
    };
  }
};
</script>

<style lang="scss" scoped>
.productsinfo {
  padding-bottom: 100px;
  overflow: hidden;
  .action {
    z-index: 999;
  }
  img {
    width: 100%;
  }
  .message {
    text-align: left;
    em {
      color: red;
      font-weight: bolder;
      font-size: 20px;
    }
    i {
      font-weight: bolder;
      font-size: 18px;
    }
    div {
      display: flex;
      margin-top: 5px;
      span {
        flex: 1;
      }
    }
  }
  .tabs {
    margin-top: 10px;
    img{
      width: 100%;
      margin: 7px;
    }
    ul{
      li{
        text-align: left;
        margin-left: 10px;
        font-size: 18px;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #ccc;
      }
    }
  }
}
</style>