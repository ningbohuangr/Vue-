<template>
  <div>
    <img
      src="https://img01.sogoucdn.com/v2/thumb/crop/xy/ai/x/0/y/0/w/120/h/80/iw/90/ih/60/t/0/ir/3?t=2&appid=200997&url=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2FLdv96ZtlFHQp0vzTLKBvialmk4OHXmQbpEc4cqXnLZ94ZeO3biaTjXCF5ZKOHmApLN4wwiazXZIeVa2EVNTBz18qw%2F0%3Fwx_fmt%3Djpeg&sign=ad062d3171f09a7a798d7e25def568e6"
      class="headerimg"
      alt=""
      srcset=""
    />
    <cube-form
      :model="model"
      :schema="schema"
      @submit="submitHandler"
    ></cube-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      model: {
        username: "",
        password: "",
      },
      schema: {
        fields: [
          {
            type: "input",
            modelKey: "username",
            label: "用户名",
            props: {
              placeholder: "用户名",
            },
            rules: {
              //校验规则
              type: "String",
              required: true,
              min: 3,
              max: 15,
            },
            trigger: "blur",
            messages: {
              required: "用户名不能为空",
              min: "用户名不能少于三个字符",
              max: "用户名不能大于十五个字符",
            },
          },
          {
            type: "input",
            modelKey: "password",
            label: "密码",
            props: {
              placeholder: "请输入密码",
              type: "password",
              eye: {
                open: false,
              },
            },
            trigger: "blur",
            rules: {
              required: true,
            },
          },
          {
            type: "submit",
            label: "登录",
          },
        ],
      },
    };
  },
  methods: {
    async submitHandler(e) {
      e.preventDefault();
      try{
          const result=await this.$http.get('/api/login',{params:this.model})
          if(result.code=='0'){
              this.$store.commit('settoken',result.token)
              window.localStorage.setItem('token',result.token)

              //判断路由是否带参，带参就去重定向参数地址，否则就去首页
              if(this.$route.query. redirect){
                this.$router.replace({path:this.$route.query. redirect})
              }else{
                this.$router.replace('/botnav')
              }
          }else{
              alert(result.code)
          }
      }catch(err){
          console.log(err)
      }

    // this.$http.get('/api/login',{params:this.model}).then(res=>{
    //     console.log(res.data)
    // })
    },
  },
};
</script>
<style lang="stylus">
.headerimg {
  height: 150px;
  width: 100%;
}
</style>