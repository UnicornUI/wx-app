// pages/map/map.js

//var QQMapWX = require("../../utils/qqmap-wx-jssdk.js");
var qqmapsdk;
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    scroll: true,
    height: 'auto',
    placeName: "",
    viewtop: -150,
    startPoint: [0, 0],
    mask: true,
    points:[]
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
    let _this = this;
    let pic = app.global.pic;
    // console.log(pic);
    if (pic == null || pic == "undefined") {
      return;
    }
    let mks = [];
    let points = [];
    mks.push({
      title: pic.name, 
      id: pic.id,
      latitude: pic.latitude,
      longitude: longitude,
      iconPath: "/resources/images/mapPage/local.png",
      width: 45,
      height: 50
    });
    points.push({
      latitude: pic.latitude,
      longitude: pic.longitude
    });
    points.push({
      latitude: _this.data.Mylatitude,
      longitude: _this.data.Mylongitude
    });
    _this.setData({
      markers: mks,
      points: points,
      
    })
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

  },

  placeInput(e){
    this.setData({
      placeName: e.detail.value
    });
  },
  onSearch(){
    console.log("searching.....");
    let that = this;
    let name = that.data.placeName;
    console.log(name);
    if (name == ''){
      that.setData({
        markers : null
      })
    }else {
      that.nearby_search(name);
    }
  },
  nearby_search(name){
    let _this = this;
    let loc = [this.data.latitude, this.data.longitude];
    // 调用官方提供的查询接口
    qqmapsdk.search({
      keyword: name,             // 搜索的关键字
      localtion: loc.toString(), // 所搜的周边中心点
      success(result){           // 搜索成功的回调
        let mks = [];
        for(let i = 0; i < result.data.length; i++) {
          mks.push({ // 获取返回的数组，放入到 mks 中
            title: result.data[i].title,
            id : result.data[i].id,
            latitude: result.data[i].latitude,
            longitude: result.data[i].longitude,
            iconPath: "/resources/images/mapPage/local.png", // 设置显示的图标的路径
            width: 45,
            height: 50          
          });
        }
        _this.setData({
          mks: mks
        });
      },
      failure(res){
        console.log(res);
      },
      complete(res){
        console.log(res);
      }
    });  
  }
})