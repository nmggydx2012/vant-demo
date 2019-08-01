<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="全部">全部内容</van-tab>
      <van-tab title="待付款">待付款</van-tab>
      <van-tab title="待收货">待收货</van-tab>
      <van-tab title="待评级">待评级</van-tab>
      <van-tab title="退货退款">退货退款</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "2"
    }
  },
};
</script>

<style lang="less" scoped>
</style>