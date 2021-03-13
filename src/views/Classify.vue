<template>
  <div class="pannelsbox">
    <cube-scroll class="leftpanels">
      <ul>
        <li
          v-for="(list, index) in tabslabel"
          :key="index"
          @click="selectlist(index)"
          :class="list.active ? 'active' : ''"
        >
          {{ list.lable }}
        </li>
      </ul>
    </cube-scroll>
    <cube-scroll class="rightpanels">
      <ul>
        <li v-for="(tag, index) in tags" :key="index">
          <img :src="tag.img" alt="" />
          <p>
            {{ tag.lable
            }}<i class="cubeic-add" @click="addtocart($event, tag)"> </i>
          </p>
        </li>
      </ul>
    </cube-scroll>
    <div class="ball-wrap">
      <transition
        @before-enter="befroreEnter"
        @enter="enter"
        @after-enter="afterEnter"
      >
        <div class="ball" v-if="ball.show">
          <div class="inner">
            <i class="cubeic-add"></i>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ball: {
        el: "",
        show: false,
      },
      tags: [],
      tabslabel: [
        {
          lable: "热门推荐",
          active: true,
        },
        {
          lable: "手机数码",
          active: false,
        },
        {
          lable: "家用电器",
          active: false,
        },
        {
          lable: "家用空调",
          active: false,
        },
        {
          lable: "电脑产品",
          active: false,
        },
        {
          lable: "美妆护肤",
          active: false,
        },
        {
          lable: "计生情趣",
          active: false,
        },
        {
          lable: "热门手袋",
          active: false,
        },
        {
          lable: "热门手袋",
          active: false,
        },
      ],
    };
  },
  methods: {
    //添加商品到购物车
    addtocart(e, tag) {
      this.$store.commit("tocart", tag);
      //让我们小球显示出来
      this.ball.show=true
      //获取点击元素
      this.ball.el=e.target
    },
    selectlist(index) {
      this.tabslabel.forEach((val, ind) => {
        if (index == ind) {
          val.active = true;
        } else {
          val.active = false;
        }
      });
      this.getclassify(index);
    },
    //获取分类
    async getclassify(index) {
      const result = await this.$http.get("/api/classify", {
        params: { type: index },
      });
      this.tags = result.data;
    },
    befroreEnter(el) {
      //让小球员移动到点击的位置
      //获取小球点击的位置
      const dom=this.ball.el
      const rect=dom.getBoundingClientRect()//获取点击dom的位置
      console.log(rect)
      const x=rect.left-window.innerWidth*0.7
      const y=-(window.innerHeight-rect.top)
      console.log(x,y)
      el.style.display='block'
      el.style.transform=`translate3d(0,${y}px,0)`
      const inner=el.querySelector('.inner')
      inner.style.transform=`translate3d(${x}px,0,0)`
    },
    enter(el,done) {
        //触发重绘
        document.body.offsetHeight
        //小球移动回到原点，就是购物车的位置
        el.style.transform=`translate3d(0,0,0)`
        const inner=el.querySelector('.inner')
        inner.style.transform=`translate3d(0,0,0)`
        //过度完成后执行的事件
        el.addEventListener('transitionend',done)
    },
    afterEnter(el) {
        //结束隐藏小球
        this.ball.show=false
        el.style.display='none'
    },
  },
  created() {
    //获取默认的分类数据
    this.getclassify(0);
  },
  mounted() {
    //配置滚动盒子的高度
    const leftpanels = document.querySelector(".leftpanels");
    const rightpanels = document.querySelector(".rightpanels");
    const bodyHeight = document.documentElement.clientHeight;
    leftpanels.style.height = bodyHeight - 60 + "px";
    rightpanels.style.height = bodyHeight - 60 + "px";
  },
};
</script>
<style lang="stylus" scoped>
.ball-wrap {
  .ball {
    position: fixed;
    left: 70%;
    bottom: 10px;
    z-index: 1003;
    color: red;
    transition: all 1s cubic-bezier(0.49, -0.29, 0.75, 0.41);

    .inner {
      width: 16px;
      height: 16px;
      transition: all 1s linear;
    }
  }
}

.pannelsbox {
  display: flex;

  .leftpanels {
    width: 30%;

    li {
      height: 80px;
      line-height: 80px;
      border-bootom: 1px solid #fff;
      color: #333;
      background-color: #f8f8f8;
      fon-size: 14px;
    }

    .active {
      background: #fff;
      color: #e93b3d;
    }
  }

  .rightpanels {
    width: 70%;

    ul {
      display: flex;
      flex-wrap: wrap;

      li {
        width: 50%;
        justify-content: center;
        align-items: center;
        font-size: 15px;

        img {
          width: 80px;
          height: 80px;
        }
      }

      cubeic-add {
        font-size: 18px;
      }
    }
  }
}
</style>