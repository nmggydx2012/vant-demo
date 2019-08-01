<template>
  <div>
    <div class="All">
      <div class="title">全部分类</div>
      <div class="cloth">
        <ul>
          <li v-for="(item,index) in lists " :key="index">
            <img :src="item.img" alt />
            <p>{{item.name}}</p>
          </li>
        </ul>
      </div>
      <div class="cleafix"></div>
    </div>
    
    <div class="products">
      <div>精品优选</div>
      <div>
         <van-card
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="http://v.bootstrapmb.com/2019/6/mrcu5076/images/ad1.jpg"
      /> <van-card
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="http://v.bootstrapmb.com/2019/6/mrcu5076/images/ad1.jpg"
      /> <van-card
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="http://v.bootstrapmb.com/2019/6/mrcu5076/images/ad1.jpg"
      /> <van-card
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="http://v.bootstrapmb.com/2019/6/mrcu5076/images/ad1.jpg"
      /> <van-card
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="http://v.bootstrapmb.com/2019/6/mrcu5076/images/ad1.jpg"
      /> <van-card
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="http://v.bootstrapmb.com/2019/6/mrcu5076/images/ad1.jpg"
      /> <van-card
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="http://v.bootstrapmb.com/2019/6/mrcu5076/images/ad1.jpg"
      /> <van-card
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="http://v.bootstrapmb.com/2019/6/mrcu5076/images/ad1.jpg"
      /> <van-card
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="http://v.bootstrapmb.com/2019/6/mrcu5076/images/ad1.jpg"
      />
      </div>
    </div>
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
  }
};
</script>

<style lang="less" scoped>
.All {
  .cloth {
    ul {
      li {
        float: left;
        width: 25%;
        img {
          width: 50%;
        }
      }
    }
  }
  .cleafix{
    content: "";
    display:block;
    clear: both;
  }
}
</style>