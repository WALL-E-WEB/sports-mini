//index.js
//获取应用实例
const app = getApp()
var deltaX = 0
Page({
  data: {
    number: 0,
    leftNumber: 0,
    scrollWidth:'',
    scrollHeight:''
  },
  //事件处理函数
  scroll(e) {
    deltaX += e.detail.deltaX
    let left = e.detail.scrollLeft
    this.setData({
      number:  Math.round(  left / 10 / 5 )
    })
    // this.setData({
    //    leftNumber:Math.floor(e.detail.scrollLeft/10) *10
    // })
  },
  onLoad: function(){
    console.log('父组件onload')
    // let _this = this
    // wx.createSelectorQuery().select('#scroll').fields({
    //   rect:true,
    //   size:true
    // }).exec( function(res){
      
    // //  _this.data.scrollWidth=res[0].width
    //  _this.setData({
    //   scrollWidth:res[0].width,
    //   scrollHeight:res[0].height,
    //  })
    //  console.log('父元素exec',this.data)
    // })
  },
  onShow(){
    console.log('父组件onShow')
    console.log('',this.data.scrollWidth)
    let _this = this
    wx.createSelectorQuery().select('#scroll').fields({
      rect:true,
      size:true
    }).exec( function(res){
      
    //  _this.data.scrollWidth=res[0].width
     _this.setData({
      scrollWidth:res[0].width,
      scrollHeight:res[0].height,
     })
     console.log('父元素exec',_this.data.scrollWidth)
    })
    // let _this = this
    // wx.createSelectorQuery().select('#scroll').fields({
    //   rect:true,
    //   size:true
    // }).exec(function(res){
    //   console.log('父元素',res)
    // //  _this.data.scrollWidth=res[0].width
    // _this.setData({
    //   scrollWidth:res[0].width
    //  })
    
    // })
  },
  onReady(){
    console.log('父组件onReady')
  }
})