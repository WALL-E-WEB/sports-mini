// pages/guide/guide-components/prefect-title/prefect-title.js
Component({
  options: {
    // styleIsolation:'apply-shared',
    addGlobalClass: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '标题'
    },
    page: {
      type: String,
      optionalTypes: [Number],
      value: '1'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /** 组件的方法列表*/
  methods: {
    lala() {
      this.triggerEvent('myevent', {
        a: 'b'
      }, 'dddd')
    }
  },
  lifetimes: {
    created() {
      console.log('created',this.data);
    },
    attached() {
      console.log('attached',this.data);
    },
    ready() {
      console.log('ready',this.data);
    },
    moved() {
      console.log('moved',this.data);
    },
    detached() {
      console.log('detached',this.data)
    }
  },
  pageLifetimes:{
    show(){
      console.log('show',this.data)
    },
    hide(){
      console.log('hide',this.data)
    },
    resize(e){
      console.log(e)
    }
  }

})