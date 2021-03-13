import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store=new Vuex.Store({
  state: {
    token: '',
    cartarry:JSON.parse(localStorage.getItem('cartarry'))|| []//存储购物车和商品的数据
  },
  mutations: {
    //设置vuex的token
    settoken(state, token) {
      state.token = token
    },
    //添加商品到购物车
    tocart(state, tag) {
      let goods = state.cartarry.find(v => v.titel == tag.lable)
      if (goods) {
        goods.cartCount += 1
      } else {
        state.cartarry.push({ titel: tag.lable, cartCount: 1 })
      }
    },
    //购物车数量加一
    cartadd(state, index) {
      state.cartarry[index].cartCount++
    },
    //购物车数量减一
    removeCart(state, index) {
      if (state.cartarry[index].cartCount > 1) {
        state.cartarry[index].cartCount--
      } else {
        if (window.confirm('确定从购物车删除商品')){
          state.cartarry.splice(index, 1)
        }
      }
    },
    //清空购物车
    clearcart(state){
      state.cartarry=[]
    }

  },
  actions: {

  },
  modules: {

  },
  //相当于我们vue computed 计算属性
  getters: {
    countsum: state => {
      let num = 0
      state.cartarry.forEach(v => {
        num += v.cartCount
      })
      return num
    }
  }
})
//监听每次调用mutations的时候，都会进这个方法，然后我们可以做一些自己想做的处理
store.subscribe((mutation,state)=>{
  localStorage.setItem('cartarry',JSON.stringify(state.cartarry))
})
export default store
