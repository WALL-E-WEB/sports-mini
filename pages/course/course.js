// pages/course/course.js
const {
  throttle
} = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    heat: 2,
    top: '',
    classFixed: '',
    mainscrolltop: -200,
    subscrolltop: 0,
    mainscroll: true,
    subscroll: false,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getRect()
    console.log('bb')
  },
  getRect() {
    const query = wx.createSelectorQuery()
    query.select('.course-wrap').boundingClientRect((res) => {
      console.log('.course-wrap', res)
      this.data.top = res.top
    }).exec()
  },
  scrollwraplower(e) {
    this.setData({
      subscroll: true,
      mainscroll: false
    })


  },
  onscrolltoupper() {
    let _this = this
    this.setData({
      subscrolltop: 0,
    }, function () {

      _this.setData({
        subscroll: false,
        mainscroll: true
      })
    })
  }


})