// components/project-title/project-title.js
Component({
  options:{
    addGlobalClass:true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:'我的训练'
    },
    icon:{
      type:Boolean,
      value:true
    },
    subTitle:{
      type:String,
      value:''
    },
    slot:{
      type:Boolean,
      value:false
    },
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
