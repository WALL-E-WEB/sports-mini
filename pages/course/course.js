// pages/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    heat: 2,
    top: '',
    classFixed: ''
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
  onPageScroll: function (e) {
    console.log(e)
    console.log(this.data.top);
    
    if (e.scrollTop >= this.data.top) {
      console.log('bbbbbbbbbb');
      this.setData({
        classFixed: 'fixed'
        // classFixed: ''
      })
      return false
      console.log(this.data.classFixed)
    }else{
      console.log('aaa')
      this.setData({
        classFixed: ''
      })
    }

  }
})