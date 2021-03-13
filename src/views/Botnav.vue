<template>
  <div>
    <transition :name="transitionName">
      <router-view class="Router"></router-view>
    </transition>
    <cube-tab-bar
      v-model="selectedLabelDefault"
      :data="tabs"
      @click="clickHandler"
      @change="changeHandler"
      class="botnav"
    >
    </cube-tab-bar>
    <span class="countsum" v-show="countsum>0">{{countsum}}</span>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      transitionName: "slide-right",
      selectedLabelDefault: "首页",
      tabs: [
        {
          label: "首页",
          icon: "cubeic-home",
        },
        {
          label: "分类",
          icon: "cubeic-tag",
        },
        {
          label: "购物车",
          icon: "cubeic-mall",
        },
        {
          label: "我的",
          icon: "cubeic-person",
        },
      ],
    };
  },
  computed:{
    ...mapGetters({
      countsum:'countsum'
    })
  },
  methods: {
    clickHandler(label) {
      // if you clicked home tab, then print 'Home'
      console.log(label);
    },
    changeHandler(label) {
      switch (label) {
        case "首页":
          this.$router.push({ path: "/botnav/index" }).catch((err) => {
            console.log(err);
          });
          break;
        case "分类":
          this.$router.push({ path: "/botnav/classify" }).catch((err) => {
            console.log(err);
          });
          break;
        case "购物车":
          this.$router.push({ path: "/botnav/car" }).catch((err) => {
            console.log(err);
          });
          break;
        case "我的":
          this.$router.push({ path: "/botnav/mine" }).catch((err) => {
            console.log(err);
          });
          break;
      }
    },
  },
  created() {
    switch (this.$route.path) {
      case '/botnav/index':
        this.selectedLabelDefault='首页'
        break;
    
       case '/botnav/car':
         this.selectedLabelDefault='购物车'
        break;
        case '/botnav/mine':
         this.selectedLabelDefault='我的'
        break;
        case '/botnav/classify':
         this.selectedLabelDefault='分类'
        break;
    }
  },
};
</script>
<style lang="stylus" scoped>
.cube-tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  background-color: #fff;

  .cube-tab div {
    font-size: 16px;
    padding: 3px;
  }

  i {
    font-size: 20px;
  }
}

.Router {
  position: absolute;
  width: 100%;
  transition: all 0.8s ease;
}

.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  --webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  --webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}
.countsum
  position fixed
  bottom 38px
  right 28%
  z-index 1001
  width 18px
  height 18px
  line-height 18px
  border-radius 50%
  font-size 14px
  background-color: red;
  color #fff
</style>