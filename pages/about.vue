<template>
  <section class="container">
    <h1 class="title">
      394班10年聚会活动详情：
    </h1>
    <ul class="info">
      <li><strong>时间：</strong>2017年10月6-7日</li>
      <li><strong>地点：</strong>宾阳中学</li>
      <li><strong>活动安排：</strong></li>
      <li>
        <h3>10月6日：</h3>
        <ul>
          <li class="mfic-time">14：00 宾中门口集合</li>
          <li class="mfic-time">15：00 校园游览拍照</li>
          <li class="mfic-time">16：00 教室趣味活动（保密）</li>
          <li class="mfic-time">17：00 拍集体合照</li>
          <li class="mfic-time">18：00 晚餐</li>
          <li class="mfic-time">21：00 唱K</li>
        </ul>
        <h3>10月7日：</h3>
        <ul>
          <li class="mfic-time">自由活动（可自组小团队玩耍）</li>
        </ul>
      </li>
    </ul>
    <nuxt-link class="button" to="/">
      返回首页
    </nuxt-link>
  </section>
</template>
<script>
export default {
  head () {
    return {
      title: `聚会信息`
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../assets/css/variable.styl'

.title
  padding-left: 60px
  font-size 50px
  text-align left
.info
  padding-left: 60px
  font-weight: 300;
  color: $color-light-grey;
  margin: 10px 0 100px 0;
  text-align left
  font-size 32px
  li
    strong
      color $color-light-pink
    h3
      padding 20px 0 0 30px
    ul
      padding-left 60px
      li
        &.mfic-time::before
          margin-right 4px
          color $color-light-grey-s
.button
  margin-top: 50px;
</style>
