// pages/guide/guide.js
Page({
  father(e,d){
    console.log(e);
    console.log(d);
    
  },
  /**
   * 页面的初始数据
   */
  data: {
    isChecked:false,
  },
  onSelectMan(e){
    this.setData({
      isChecked:true
    })

  },
  onSelectWoman(){
    this.setData({
      isChecked:false
    })
  },
})