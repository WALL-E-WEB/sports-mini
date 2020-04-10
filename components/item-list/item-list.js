// components/item-list/item-list.js
Component({
  options:{
    addGlobalClass:true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    src:{
      type:String,
      value:'/static/image/2.jpg'
    },
    time:{
      type:Boolean,
      optionalTypes:[String],
      value:'33:00'
    },
    title:{
      type:String,
      value:'biao'
    },
    sub:{
      type:String,
      value:'fu'
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
