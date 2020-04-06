// pages/guide/goal/goal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goalList:[
      {text:'减脂',font:'icon-jianfei'},
      {text:'增肌',font:'icon-jianshenfang'},
      {text:'坚持锻炼',font:'icon-aixin'},
    ],
    select:0
  },
  onSelectGoal(e){
    this.setData({
      select:e.target.dataset.index
    })
  },
  onNext(){
    console.log('bb')
    wx.navigateTo({
      url: '/pages/guide/notice/notice',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})