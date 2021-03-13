<template>
    <div>
    <img
      src="https://img01.sogoucdn.com/v2/thumb/crop/xy/ai/x/0/y/0/w/120/h/80/iw/90/ih/60/t/0/ir/3?t=2&appid=200997&url=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2FLdv96ZtlFHQp0vzTLKBvialmk4OHXmQbpEc4cqXnLZ94ZeO3biaTjXCF5ZKOHmApLN4wwiazXZIeVa2EVNTBz18qw%2F0%3Fwx_fmt%3Djpeg&sign=ad062d3171f09a7a798d7e25def568e6"
      class="headerimg"
      alt=""
      srcset=""
    />
    <ul >
        <li class="mineitem" v-for="item in minearry" :key="item.label" @click="itemclick(item)">
           <span class="mintitle">{{item.label}}</span> 
           <i class="cubeic-arrow"></i>
        </li>
    </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            minearry:[
                {
                    label:'商品收藏'
                },{
                    label:'我的足迹'
                },{
                    label:'店铺收藏'
                },{
                    label:'我的订单'
                },{
                    label:'退出',
                    type:'exit'
                }
            ]
        }
    },methods: {
        itemclick(item){
            if(item.type=='exit'){
                localStorage.removeItem('token')
                this.$router.replace({path:'/login'})
            }
        }
    },
}
</script>
<style lang="stylus" scoped>
.mineitem
    display flex 
    justify-content space-between
    font-size 14px
    text-align left
    height 50px
    line-height 50px
    padding-left 5%
    border-bottom 1px solid #eee
    .minetitel
        display  inline-block;
        width 90%
.headerimg {
  height: 150px;
  width: 100%;
}
</style>