<template>
  <div>
    消息通知
    <ul>
      <li>
        <a>
          <span>
            <i>接受消息通知</i>
          </span>
          <br />
        </a>
        
        <span  class="icon">已开启</span>
      </li>
      <li>
        <a>
          <span>
            <i>关系消息通知</i>
          </span>
          <br />
        </a>
        <van-switch v-model="checked" class="icon" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
     checked: true,
    }
  },};
</script>

<style lang="less" scoped>
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
</style>