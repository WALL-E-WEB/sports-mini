// components/button/button.js
Component({
  options:{
    addGlobalClass:true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    text:{
      type:String,
      value:'下一步'
    },
    height:{
      type:String,
      value:'100'
    },
    width:{
      type:String,
      value:'100%'
    },
    plain:{
      type:Boolean,
      value:false
    }
  },

  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onclick(){
      console.log('botton')
      this.triggerEvent('Next',{})
    }
  }
})