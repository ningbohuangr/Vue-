module.exports = {
  configureWebpack: {
    devServer: {
      //Mock接口编写的地方
      //每个做更改这个配置文件的时候,都必须重启项目才会生效
      before(app) {
        // app.get('请求地址',(req,res)=>{
        //   res.json()
        // })
        //注册接口
        //用户校验
        let userpoor = [
          { username: 'aning', password: '12345' },
          { username: 'aluo', password: '12345' }
        ]
        app.get('/api/register', (req, res) => {
          const { username, password } = req.query
          const userlength = userpoor.filter(v => v.username == username).length
          if (userlength > 0) {
            res.json({
              success: false,
              message: '用户名已存在'
            })
          } else {
            res.json({
              success: true,
              message: '注册成功'
            })
          }
        })

        //登录接口
        let tokenkey = 'aning'
        app.get('/api/login', (req, res) => {
          const { username, password } = req.query
          if (username == 'aning' && password == '12345' || username == 'aluo' && password == '12345') {
            res.json({
              code: 0,
              message: '登录成功',
              token: tokenkey + '-' + username + (new Date().getTime() + 60 * 60 * 1000)//模拟加密
            })
          } else {
            res.json({
              code: 1,
              message: '账户或有密码错误'
            })
          }
        })
        app.get('/api/index', (req, res) => {
          res.json({
            data: [
              {
                url: 'https://www.baidu.com',
                image: 'https://i04piccdn.sogoucdn.com/7ba152c8f8aab3c0'
              },
              {
                url: 'https://www.baidu.com',
                image: 'https://i01piccdn.sogoucdn.com/bc2a088d5ef2d3b9'
              },
              {
                url: 'https://www.baidu.com',
                image: 'https://i03piccdn.sogoucdn.com/bf517b75c532f196'
              }
            ]
          })
        })
        app.get('/api/rollinglist', (req, res) => {
          res.json({
            data: [
              [
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label: '分类一'
                },
              ],
              [
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                  label: '分类一'
                },
              ],
            ]
          })
        })
        app.get('/api/classify',(req,res)=>{
          switch(req.query.type){
            case '0':
              res.json({
                data:[
                  {
                    img:'https://img02.sogoucdn.com/app/a/4001/542ad976-bf33-439c-ae66-60b5609a1de0-20201228195613.jpg',
                    lable:'小米'
                  },{
                    img:'https://img03.sogoucdn.com/v2/thumb/crop/xy/ai/x/0/y/0/w/120/h/90/iw/90/ih/67.5/t/0/ir/3?t=2&appid=200997&url=https%3A%2F%2F2d.zol-img.com.cn%2Fproduct%2F202_320x240%2F391%2FcemiFAjRqKUJI.jpg&sign=eafe0a031876f1a13f0c299a661f8f5f',
                    lable:'华为'
                  },{
                    img:'https://img02.sogoucdn.com/app/a/4001/9baaa46d-f400-42d1-aac1-bfba5675e2a3-20210203142636.jpg',
                    lable:'荣耀'
                  },{
                    img:'https://img04.sogoucdn.com/v2/thumb/retype/ext/jpg?appid=10160007&url=http%3A%2F%2Fimg12.360buyimg.com%2Fn1%2Fjfs%2Ft1%2F115966%2F23%2F9822%2F122385%2F5ee1479fEcfc63939%2F31f5646f85b488fa.jpg',
                    lable:'雪梨'
                  },{
                    img:'https://img02.sogoucdn.com/app/a/4001/87d8c280-c1b9-4573-80d9-29880ac49f1a-20210201165546.jpg',
                    lable:'viovo'
                  },{
                    img:'https://img01.sogoucdn.com/app/a/100200009/fcd55ade-faf9-46a4-a9c5-641d78dd8399.jpg',
                    lable:'苹果'
                  },{
                    img:'http://pic7.nipic.com/20100616/3035787_163421067418_2.jpg',
                    lable:'香蕉'
                  }
                ]
              })
              break;
              case '1':
                res.json({
                  data:[
                    {
                      img:'https://img02.sogoucdn.com/app/a/4001/542ad976-bf33-439c-ae66-60b5609a1de0-20201228195613.jpg',
                      lable:'大米'
                    },{
                      img:'https://img03.sogoucdn.com/v2/thumb/crop/xy/ai/x/0/y/0/w/120/h/90/iw/90/ih/67.5/t/0/ir/3?t=2&appid=200997&url=https%3A%2F%2F2d.zol-img.com.cn%2Fproduct%2F202_320x240%2F391%2FcemiFAjRqKUJI.jpg&sign=eafe0a031876f1a13f0c299a661f8f5f',
                      lable:'大华为'
                    },{
                      img:'https://img02.sogoucdn.com/app/a/4001/9baaa46d-f400-42d1-aac1-bfba5675e2a3-20210203142636.jpg',
                      lable:'大荣耀'
                    },{
                      img:'https://img04.sogoucdn.com/v2/thumb/retype/ext/jpg?appid=10160007&url=http%3A%2F%2Fimg12.360buyimg.com%2Fn1%2Fjfs%2Ft1%2F115966%2F23%2F9822%2F122385%2F5ee1479fEcfc63939%2F31f5646f85b488fa.jpg',
                      lable:'大雪梨'
                    },{
                      img:'https://img02.sogoucdn.com/app/a/4001/87d8c280-c1b9-4573-80d9-29880ac49f1a-20210201165546.jpg',
                      lable:'大viovo'
                    },{
                      img:'https://img01.sogoucdn.com/app/a/100200009/fcd55ade-faf9-46a4-a9c5-641d78dd8399.jpg',
                      lable:'大苹果'
                    },{
                      img:'http://pic7.nipic.com/20100616/3035787_163421067418_2.jpg',
                      lable:'大香蕉'
                    }
                  ]
                })
                break;
                case '2':
                  res.json({
                    data:[
                      {
                        img:'https://img02.sogoucdn.com/app/a/4001/542ad976-bf33-439c-ae66-60b5609a1de0-20201228195613.jpg',
                        lable:'小小米'
                      },{
                        img:'https://img03.sogoucdn.com/v2/thumb/crop/xy/ai/x/0/y/0/w/120/h/90/iw/90/ih/67.5/t/0/ir/3?t=2&appid=200997&url=https%3A%2F%2F2d.zol-img.com.cn%2Fproduct%2F202_320x240%2F391%2FcemiFAjRqKUJI.jpg&sign=eafe0a031876f1a13f0c299a661f8f5f',
                        lable:'小华为'
                      },{
                        img:'https://img02.sogoucdn.com/app/a/4001/9baaa46d-f400-42d1-aac1-bfba5675e2a3-20210203142636.jpg',
                        lable:'荣耀'
                      },{
                        img:'https://img04.sogoucdn.com/v2/thumb/retype/ext/jpg?appid=10160007&url=http%3A%2F%2Fimg12.360buyimg.com%2Fn1%2Fjfs%2Ft1%2F115966%2F23%2F9822%2F122385%2F5ee1479fEcfc63939%2F31f5646f85b488fa.jpg',
                        lable:'小雪梨'
                      },{
                        img:'https://img02.sogoucdn.com/app/a/4001/87d8c280-c1b9-4573-80d9-29880ac49f1a-20210201165546.jpg',
                        lable:'viovo'
                      },{
                        img:'https://img01.sogoucdn.com/app/a/100200009/fcd55ade-faf9-46a4-a9c5-641d78dd8399.jpg',
                        lable:'小苹果'
                      },{
                        img:'http://pic7.nipic.com/20100616/3035787_163421067418_2.jpg',
                        lable:'小香蕉'
                      }
                    ]
                  })
                  break;
                  case '3':
                    res.json({
                      data:[
                        {
                          img:'https://img02.sogoucdn.com/app/a/4001/542ad976-bf33-439c-ae66-60b5609a1de0-20201228195613.jpg',
                          lable:'高小米'
                        },{
                          img:'https://img03.sogoucdn.com/v2/thumb/crop/xy/ai/x/0/y/0/w/120/h/90/iw/90/ih/67.5/t/0/ir/3?t=2&appid=200997&url=https%3A%2F%2F2d.zol-img.com.cn%2Fproduct%2F202_320x240%2F391%2FcemiFAjRqKUJI.jpg&sign=eafe0a031876f1a13f0c299a661f8f5f',
                          lable:'高华为'
                        },{
                          img:'https://img02.sogoucdn.com/app/a/4001/9baaa46d-f400-42d1-aac1-bfba5675e2a3-20210203142636.jpg',
                          lable:'高荣耀'
                        },{
                          img:'https://img04.sogoucdn.com/v2/thumb/retype/ext/jpg?appid=10160007&url=http%3A%2F%2Fimg12.360buyimg.com%2Fn1%2Fjfs%2Ft1%2F115966%2F23%2F9822%2F122385%2F5ee1479fEcfc63939%2F31f5646f85b488fa.jpg',
                          lable:'高雪梨'
                        },{
                          img:'https://img02.sogoucdn.com/app/a/4001/87d8c280-c1b9-4573-80d9-29880ac49f1a-20210201165546.jpg',
                          lable:'高viovo'
                        },{
                          img:'https://img01.sogoucdn.com/app/a/100200009/fcd55ade-faf9-46a4-a9c5-641d78dd8399.jpg',
                          lable:'高苹果'
                        },{
                          img:'http://pic7.nipic.com/20100616/3035787_163421067418_2.jpg',
                          lable:'高香蕉'
                        }
                      ]
                    })
                    break;
                    case '4':
                      res.json({
                        data:[
                          {
                            img:'https://img02.sogoucdn.com/app/a/4001/542ad976-bf33-439c-ae66-60b5609a1de0-20201228195613.jpg',
                            lable:'低小米'
                          },{
                            img:'https://img03.sogoucdn.com/v2/thumb/crop/xy/ai/x/0/y/0/w/120/h/90/iw/90/ih/67.5/t/0/ir/3?t=2&appid=200997&url=https%3A%2F%2F2d.zol-img.com.cn%2Fproduct%2F202_320x240%2F391%2FcemiFAjRqKUJI.jpg&sign=eafe0a031876f1a13f0c299a661f8f5f',
                            lable:'低华为'
                          },{
                            img:'https://img02.sogoucdn.com/app/a/4001/9baaa46d-f400-42d1-aac1-bfba5675e2a3-20210203142636.jpg',
                            lable:'低荣耀'
                          },{
                            img:'https://img04.sogoucdn.com/v2/thumb/retype/ext/jpg?appid=10160007&url=http%3A%2F%2Fimg12.360buyimg.com%2Fn1%2Fjfs%2Ft1%2F115966%2F23%2F9822%2F122385%2F5ee1479fEcfc63939%2F31f5646f85b488fa.jpg',
                            lable:'低雪梨'
                          },{
                            img:'https://img02.sogoucdn.com/app/a/4001/87d8c280-c1b9-4573-80d9-29880ac49f1a-20210201165546.jpg',
                            lable:'低viovo'
                          },{
                            img:'https://img01.sogoucdn.com/app/a/100200009/fcd55ade-faf9-46a4-a9c5-641d78dd8399.jpg',
                            lable:'低苹果'
                          },{
                            img:'http://pic7.nipic.com/20100616/3035787_163421067418_2.jpg',
                            lable:'低香蕉'
                          }
                        ]
                      })
                      break;
          }
        })
      }
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
