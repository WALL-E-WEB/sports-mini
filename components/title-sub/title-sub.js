// components/title-sub/title-sub.js
Component({
  options:{
    styleIsolation:'apply-shared',
    externalClasses:['title-sub-class']
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:'标题'
    },
    subtitle:{
      type:String,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
