// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    passwd: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bindUsername(e){
    this.setData({
      username: e.detail.value
    });
  },
  bindPasswd(e){
    this.setData({
      passwd: e.detail.value
    })
  },
  login(){
    console.log("login start")
    if (!this.data.username || ! this.data.passwd) {
      wx.showModal({
        title: "用户名与密码不能为空",
        cancelColor: 'grey',
      })
    }
  },
  register(){
    wx.showToast({
      title: 'method don\'t write ',
    })
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