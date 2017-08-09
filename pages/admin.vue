<template>
  <section class="container">
    <h1 class="title">
      394班聚会名单管理平台
    </h1>
    <table>
      <thead>
        <tr>
          <th>姓名</th>
          <th>手机</th>
          <th>是否参加</th>
          <th>报名时间</th>
          <th>是否交费</th>
          <th>交费时间</th>
          <th v-show="isEditting">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(val, index) in members">
          <td><input type="text" v-model="val.name" :disabled="!isEditting" placeholder="输入姓名"></td>
          <td><input type="text" v-model="val.phone" :disabled="!isEditting" placeholder="输入手机"></td>
          <td>
            <select v-model="val.is_enrolled" 
                    @change="updateIsEnrolled(index, $event)"
                    :disabled="!isEditting">
                <option disabled value="">Please select one</option>
                <option value="1">是</option>
                <option value="0">否</option>
            </select>
          </td>
          <td><input type="text" v-model="val.enrolled_time" :disabled="!isEditting" placeholder="输入报名时间"></td>
          <td>
            <select v-model="val.is_payed" 
                    @change="updateIsPayed(index, $event)"
                    :disabled="!isEditting">
              <option disabled value="">Please select one</option>
              <option value="1">是</option>
              <option value="0">否</option>
            </select>
          </td>
          <td><input type="text" v-model="val.payed_time" :disabled="!isEditting" placeholder="输入交费时间"></td>
          <td v-show="isEditting"><a @click="remove(index)">删除</a></td>
        </tr>
      </tbody>
    </table>
    <div :class="['button', isEditting ? 'disabled' : '']" 
          @click="edit">
          编辑
    </div>
    <div class="button"
          v-show="isEditting"
          @click="add">
          增加
    </div>
    <div :class="['button', !isEditting ? 'disabled' : '']" 
          @click="submit">
          保存
    </div>
    <v-dialog :isShow="dialogConf.isShow"
      :title="dialogConf.title"
      :text="dialogConf.text"
      :icon="dialogConf.icon"
      :btn="dialogConf.btn"
      ref="dialog" />
  </section>
</template>
<script>
import moment from 'moment'
import axios from 'axios'
import { getToken } from '../utils/auth'
import {
  env,
  domain
} from '../config'
import VDialog from '../components/Dialog.vue'
export default {
  head () {
    return {
      title: `管理平台`
    }
  },
  asyncData ({ req, params }) {
    return axios.get(`http://${domain}/api/member/list`)
    .then((res) => {
      let members = res.data.map(item => {
        let enrolledTime = item.enrolled_time
        let payedTime = item.payed_time
        item.enrolled_time = enrolledTime ? moment(enrolledTime).format('YYYY-MM-DD HH:mm:ss') : ''
        item.payed_time = payedTime ? moment(payedTime).format('YYYY-MM-DD HH:mm:ss') : ''
        return item
      })
      return { members }
    })
    .catch(err => console.log(err))
  },
  data () {
    return {
      isEditting: false,
      willRemoveId: null,
      dialogConf: {
        title: '删除操作',
        text: '确定要删除该行吗？',
        icon: 'mfic-wrong',
        isShow: true,
        btn: {
          confirm: this.confirmHandler,
          cancel: this.cancelHandler
        }
      }
    }
  },
  methods: {
    edit () {
      this.isEditting = true
    },
    add () {
      this.members.push({
        name: '',
        phone: '',
        is_payed: 0,
        is_enrolled: 0,
        enrolled_time: '',
        pay_time: ''
      })
    },
    remove (index) {
      this.$refs.dialog.show()
      this.willRemoveId = this.members[index]._id
    },
    confirmHandler () {
      console.log('confirm')
      const willRemoveId = this.willRemoveId
      const itemIdList = this.members.map(item => item._id)
      const index = itemIdList.indexOf(willRemoveId)
      if (index !== -1) {
        axios.post(`http://${domain}/api/member/remove`, {_id: willRemoveId})
          .then((res) => {
            this.members.splice(index, 1)
            this.$refs.dialog.hide()
          })
          .catch(err => console.log(err))
      } else {
        this.$refs.dialog.hide()
        window.alert(`该项不存在，ID为${willRemoveId}`)
      }
    },
    cancelHandler () {
      console.log('cancel')
      this.$refs.dialog.hide()
    },
    submit () {
      axios.post(`http://${domain}/api/member/list`, {data: this.members})
        .then((res) => {
          console.log(res)
          this.isEditting = false
        })
        .catch(err => console.log(err))
    },
    updateIsEnrolled(index, $event) {
      let inputVal = $event.target.value
      let item = this.members[index]
      item.is_enrolled = Number(inputVal)
    },
    updateIsPayed(index, $event) {
      let inputVal = $event.target.value
      let item = this.members[index]
      item.is_payed = Number(inputVal)
    }
  },
  components: {
    VDialog
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../assets/css/variable.styl'
.container
  padding-top 10px
.title
  padding-left: 30px
  font-size 18px
.info
  font-weight: 300;
  color: $color-grey-pink;
  margin: 10px 0 0 0;
  text-align left
.button
  margin-top: 10px;
table
  margin 0 20px
  font-size 6px
  tr
    line-height 20px
    td
      padding 0 10px
      color #666
      width 132px
      a
        color $color-grey
        &:hover
          cursor pointer
  tbody
    tr
      &:nth-of-type(odd)
        background rgba(255, 172, 168, .4) // 0.6$color-light-pink
      &:nth-of-type(even)
        background $color-light-grey-ss
      input:disabled
        background-color: rgba(255, 255, 255, .4)
.button
  display inline-block
  margin 10px 10px
  padding 5px 10px
  font-size 7px
  &:hover
    cursor pointer
        
</style>
