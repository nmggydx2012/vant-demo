<template>
  <div class="about">
    <ul>
      <li>
        <a>
          <span>
            <i>评分鼓励</i>
          </span>
          <br />
        </a>
        <van-icon name="arrow" class="icon" />
      </li>
       <li>
        <a>
          <span>
            <i>客服电话</i>
          </span>
          <br />
        </a>
        <van-icon name="arrow" class="icon" />
      </li>
       <li>
        <a>
          <span>
            <i>问题反馈</i>
          </span>
          <br />
        </a>
        <van-icon name="arrow" class="icon" />
      </li>
       <li>
        <a>
          <span>
            <i>检查更新</i>
          </span>
          <br />
        </a>
        <van-icon name="arrow" class="icon" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about {
  color: red;
  ul {
    margin-top: 10px;

    li {
      overflow: hidden;
      font-size: 16px;
      padding: 11px;
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