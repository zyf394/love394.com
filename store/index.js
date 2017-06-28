import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0,
      toastObj: {
        isShow: false,
        text: '',
        icon: ''
      },
      login: {
        isLogin: false,
        token: ''
      }
    },
    getters,
    mutations,
    actions
  })
}

export default createStore