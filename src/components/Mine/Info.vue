<template>
  <div class="info">
    <ul>
      <li>
        <span>头像</span>
        <p>
          <img src="http://v.bootstrapmb.com/2019/6/mrcu5076/images/ad1.jpg" alt />
        
            <van-icon name="arrow" class="arrow" />
        
        </p>
      </li>
      <li>
        <span>姓名</span>
        <p>wangbill</p>
      </li>
    </ul>
    <ul>
      <li>
        <span>QQ号码</span>
        <p>1073176393</p>

      </li>
      <li>
        <span>手机</span>
        <p>1506****320</p>
      </li>
      <li>
        <span>邮箱地址</span>
        <p>1073176393@qq.com</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.info{
  ul{
    li{
      height: 70px;
      overflow: hidden;
      border-bottom: 1px solid #ccc;;
      span{
        float: left;
        margin-left: 6px;
        display: block;
        height: 100%;
        line-height: 70px;
      }
      p{
        float: right;
        height: 100%;
        line-height: 70px;
        margin: 0px;
        margin-right:6px;
        color: #ccc;
        img{
          width: 40px;
          vertical-align:middle;
        }
        .arrow{
          margin-left: 5px;
          font-size:18px;
          color: #424242;
        }
      }
    }
  }
}
</style>