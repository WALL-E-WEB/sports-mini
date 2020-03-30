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
    date:'2001-08-08'
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
  onSelectBirthday(e){
    console.log('22',e)
    this.setData({
      date: e.detail.value
    })
  }
})