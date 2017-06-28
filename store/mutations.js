const mutations = {
    increment (state) {
        state.counter++
    },
    SHOW_TOAST (state, obj) {
      state.toastObj = {
        isShow: true,
        text: obj.text,
        icon: obj.icon
      }
    },
    HIDE_TOAST () {
      state.toastObj = {
        isShow: false,
        text: '',
        icon: ''
      }
    },
    SET_TOKEN (state, token) {
      state.login = {
        isLogin: true,
        token: token
      }
    }
}

export default mutations