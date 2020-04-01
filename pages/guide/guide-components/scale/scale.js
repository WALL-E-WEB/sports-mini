// pages/guide/guide-components/scale/scale.js
var tempValue = 0
Component({
  options:{
    addGlobalClass:true
  },
  externalClasses: ['scale-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    margin: {
      type: String,
      value: '10px'
    },
    height: {
      type: String,
      value: '20px'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    value:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    scroll(e){
      console.log(e)
      tempValue += e.detail.deltaX
      this.setData({
        value: tempValue
      })
    }
  }
})