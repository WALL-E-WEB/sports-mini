Component({
  /**
   * 组件的属性列表
   */
  properties: {
    scrollWidth: {
      type: String, //sroll的宽度
      optionalTypes: [Number],
    },
    interval: { //间隔
      type: String,
      optionalTypes: [Number],
      value: 10
    },
    NumberInterval:{
      type: Number,
      value:1
    },
    maxmum: { //最大数值
      type: String,
      optionalTypes: [Number],
      value: 220
    },
    minimum: { //最小数值
      type: String,
      optionalTypes: [Number],
      value: 100
    },
    canvasW: {
      type: Number,
      value: 800
    },
    scaleH: {
      type: String,
      optionalTypes: [Number],
      value: 25
    },
    scaleFiveH: {
      type: String,
      optionalTypes: [Number],
      value: 30
    },
    scaleTenH: {
      type: String,
      optionalTypes: [Number],
      value: 40
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    temp:''
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  lifetimes: {
    created:function(){
     console.log('子created')
      this.setData({
        temp:this.properties.scrollWidth
      })
      console.log('temp',this.data)
    },
    attached: function () {
      console.log('子attached')
      let {
        interval,
        maxmum,
        minimum
      } = this.data
      let {scrollWidth} = this.properties
      console.log('this.data',scrollWidth)
      // this.setData({
      //   canvasW:(maxmum-minimum)*interval +scrollWidth*2
      // })
      console.log('canvasW',this.data.canvasW)
      console.log('canvasW',(maxmum-minimum)*interval )
    },
    ready: function () {
      console.log('子ready')
      let _this = this
      let a =this.data.scrollWidth
      console.log(a)
      console.log('scrollWidth3',this.data)
      // console.log('scrollWidth3',this.properties.scrollWidth)

      let query = this.createSelectorQuery()
      query.select('#ruler')
        .fields({
          node: true,
          size: true,
          // rect: true,
          // scrollOffset: true
        },function(res){
          _this.setData({
            canvasW:1595
          })
        })
        .exec((res) => {
          let {
            interval,
            maxmum,
            minimum,
            scrollWidth,
            NumberInterval
          } = _this.data
          console.log('exec',res)
          const canvas = res[0].node
          const ctx = canvas.getContext('2d')
          // _this.setData({
          //   canvasW:(maxmum-minimum)*interval +scrollWidth
          // })
          console.log(_this.data.canvasW)
          const dpr = wx.getSystemInfoSync().pixelRatio
          console.log(wx.getSystemInfoSync())
          canvas.width = res[0].width * dpr
          canvas.height = res[0].height * dpr
          ctx.scale(dpr, dpr)
          console.log('canvas.width', canvas.width)
          console.log('子2ready', _this.data.scrollWidth)

          // ctx.fillRect(0, 0, 100, 100)
          console.log('bb2', _this.data)
          // let scrollWidth = _this.data.scrollWidth

          let len = (maxmum - minimum) / NumberInterval
          let blankLeav = scrollWidth / 2
          ctx.beginPath()
          for (let i = 0; i < len; i++) {
            ctx.moveTo(interval * i + blankLeav, 100)

            if (i > 0) {
              if ((i + 1) % 5 === 0 && !(i + 1) % 10 === 0) {
                ctx.lineTo(interval * i + blankLeav, 125)
              } else if ((i + 1) % 10 === 0) {
                ctx.lineTo(interval * i + blankLeav, 130)
              } else {
                ctx.lineTo(interval * i + blankLeav, 120)
              }
            } else {
              ctx.lineTo(interval * i + blankLeav, 130)
            }

            ctx.strokeStyle = 'blue';
            ctx.lineWidth = 1;
            ctx.stroke();
            // ctx.closePath()

          }
        })

    }
  },
  pageLifetimes:{
    show: function() {
      // 页面被展示
      console.log('zi show',this.data)
    },
    hide: function() {
      // 页面被隐藏
    },
    resize: function(size) {
      // 页面尺寸变化
    }
  }
})