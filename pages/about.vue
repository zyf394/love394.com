<template>
  <section class="container">
    <h1 class="title">
      394班10年聚会活动详情：
    </h1>
    <ul class="info" v-if="name === 'client'">
      <li>时间：2017年10月1日</li>
      <li>地点：宾阳中学</li>
      <li>活动安排：2017年10月1日</li>
    </ul>
    <nuxt-link class="button" to="/">
      返回首页
    </nuxt-link>
  </section>
</template>
<script>
export default {
  asyncData ({ req }) {
    return {
      name: req ? 'server' : 'client'
    }
  },
  head () {
    return {
      title: `About Page (${this.name}-side)`
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.title
  padding-left: 60px
  font-size 50px
  text-align left
.info
  font-weight: 300;
  color: #9aabb1;
  margin: 10px 0 100px 0;
  text-align left
  font-size 32px
.button
  margin-top: 50px;
</style>
