<template>
  <section class="container">
    <h1 class="title">
      394班聚会名单：
    </h1>
    <table>
      <thead>
        <tr>
          <th>姓名</th>
          <th>手机</th>
          <th>是否参加</th>
          <th>是否交费</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="val in members">
          <td>{{val.name}}</td>
          <td>{{val.phone}}</td>
          <td>{{val.is_enrolled ? '是' : '否'}}</td>
          <td>{{val.is_payed ? '是' : '否'}}</td>
        </tr>
      </tbody>
    </table>
    <p :class="['addMembers-btn', isLastPage ? 'disabled' : '']" @click="addMembers">{{addMembersText}}</p>
    <nuxt-link class="button" to="/">
      返回首页
    </nuxt-link>
  </section>
</template>
<script>
import axios from 'axios'
import { getToken } from '../utils/auth'

import {
  env,
  domain
} from '../config'

export default {
  head () {
    return {
      title: `聚会名单`
    }
  },
  data () {
    return {
      members: [],
      page: 1,
      isLastPage: false,
      addMembersText: '点击加载更多名单'
    }
  },
  asyncData ({ req, params }) {
    return axios.get(`http://${domain}/api/member/list?page=1&pageSize=10`)
    .then((res) => {
      return { members: res.data.data }
    })
    .catch(err => console.log(err))
  },
  mounted () {
    let token = getToken()
    if (!token) {
      this.$router.replace(`/signin?redirect_url=${window.location.href}`)
    }
  },
  methods: {
    addMembers() {
      if (this.isLastPage) return
      this.addMembersText = '加载中...'
      this.page++
      axios.get(`http://${domain}/api/member/list?page=${this.page}&pageSize=10`)
        .then((res) => {
          if (res.data.data && res.data.data.length < 10) {
            this.isLastPage = true
            this.addMembersText = '没有更多名单了'
          } else {
            this.addMembersText = '点击加载更多名单'
          }
          (this.members || []).push(...res.data)
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../assets/css/variable.styl'

.title
  padding-left 60px
  font-size 50px
  text-align left
.info
  font-weight 300
  color $color-grey-pink
  margin 10px 0 0 0
  text-align left
.button
  margin-top 50px
.addMembers-btn
  color $color-light-pink
  font-size 28px
  padding-top 40px
  &.disabled
    color $color-light-grey
table
  margin 0 auto
  font-size 28px
  tr
    line-height 80px
    td
      padding 0 20px
      color #666
  tbody
    tr
      &:nth-of-type(odd)
        background rgba(255, 172, 168, .4) // 0.6$color-light-pink
      &:nth-of-type(even)
        background $color-light-grey-sss
        
</style>
