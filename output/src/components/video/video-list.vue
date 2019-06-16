<template>
  <div class="jdc-news-list jdc-video-list">
    <div class="jdc-common-banner">
      <div class="w">
        <div class="jdc-common-banner-ct">
          <h4 class="jdc-common-banner-tit">视频动态</h4>
          <p class="jdc-common-banner-txt">
            京东云为您准备了丰富的视频资料，让您更快更全面了解京东云。品牌视频及活动视频，让您快速了解京东云的发展变迁；技术视频由技术专家为您讲解产品和方案，并演示产品操作，让您上云更快捷。
          </p>
        </div>
      </div>
    </div>
    <div class="jdc-news-floor">
      <div class="jdc-common-floor">
        <!--视频动态 start-->
        <div class="jdc-common-floor-item">
          <div class="w">
            <div class="jdc-common-top">
                <!-- <h4 class="jdc-common-floor-tit">{{$t('staticText.staticText_19')}}</h4> -->
                <h4 class="jdc-common-floor-tit">视频动态</h4>
                <div class="jdc-top-more" style="display:none;">
                    <!-- <a href="javascript:;" class="jdc-type-current">{{$t('staticText.staticText_20')}}<i class="jdcfont jdc-icon-arrow"></i></a> -->
                    <a href="javascript:;" class="jdc-type-current">全部动态<i class="jdcfont jdc-icon-arrow"></i></a>
                    <div class="jdc-top-sub">
                        <div class="jdc-top-sub-item"><a href="javascript:;">2018</a></div>
                        <div class="jdc-top-sub-item"><a href="javascript:;">2017</a></div>
                        <div class="jdc-top-sub-item"><a href="javascript:;">2016</a></div>
                        <div class="jdc-top-sub-item"><a href="javascript:;">2015</a></div>
                    </div>
                </div>
            </div>
            <div class="row">
              <div class="col-4" v-for="(item, index) in videoList" :key="index">
                  <a 
                    @click='gaEventTrigger("MiddleContentSec",`Video|keycount|MiddleContentSec|Video_list_${item.id}`)'
                    :clstag="`Video|keycount|MiddleContentSec|Video_list_${item.id}`"
                    :href="`/videoDetail?id=${item.id}`" :data-id="item.id" target="_blank" class="news-link">
                      <div class="news-img-wrap">
                          <i class="jdcfont">&#xe911;</i>
                          <img :src="item.imageUrl" :alt="item.title">
                      </div>
                      <div class="news-text-wrap">
                          <h5 class="news-title" :title="item.title">{{item.title}}</h5>
                          <div class="video-ft-box">
                              <div class="video-tag">
                                  <span>{{item.tagNames}}</span>
                              </div>
                              <div class="news-time" style="margin-top:0;">{{item.updateTime | dateFormate}}</div>
                          </div>
                      </div>
                  </a>
              </div>
            </div>
            <div class="jdc-pagination">
                <el-pagination
                  @current-change="handleCurrentChange"
                  :clstag="'News|keycount|MiddleContentSec|News_Dynamic_pageNum_'+pageNum"
                  :current-page="pageNum"
                  :page-size="pageSize" layout="prev, pager, next,slot"
                  :total="totalCount">
                  <slot>
                    <span class="jdc-pagination-total">/{{Math.ceil(this.totalCount/this.pageSize)}}</span>
                </slot>
                </el-pagination>
            </div>
          </div>
        </div>
        <!--视频动态 end-->
      </div>
    </div>
   <!-- <video-player  v-if="doVideoPlay" :videoUrl="playingVideoUrl" @playerClosed="closePlayer"></video-player> -->
</div>
</template>
<script>
import apiUrl from "api";
// import videoPlayer from "./player";
export default {
  name: "video-list",
  data() {
    return {
      pageNum: 1,
      pageSize: 9,
      totalCount: 0,
      currentPage: 1,
      videoList: [],
      bannerVideoDomShow: false,
      playingVideoUrl: "",
      doVideoPlay: false,
      navigationIds:-1, //视频动态
      locationId:1, //1:pc端 ; 3:移动端
    };
  },
  methods: {
    browserRedirect() {  
      var sUserAgent = navigator.userAgent.toLowerCase();  
      var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";  
      var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";  
      var bIsMidp = sUserAgent.match(/midp/i) == "midp";  
      var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";  
      var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";  
      var bIsAndroid = sUserAgent.match(/android/i) == "android";  
      var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";  
      var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";  
      console.log("您的浏览设备为：");  
      if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {  
        console.log("移动"); 
        return 3
      } else {  
        console.log("pc");
        return 1  
      }  
    },
    // 分页
    handleCurrentChange(val) {
      this.pageNum = val;
      this.getVideoList();
      let body = $("body,html");
      body.animate(
        {
          scrollTop: 0
        },
        200
      );
      this.gaEventTrigger(
        "MiddleContentSec",
        "MiddleContentSec_pageNum_" + val
      );
    },
    getVideoList() {
      this.locationId = this.browserRedirect()
      this.$http
        .get(apiUrl.api.getVideoList, {
          params: {
            pageNum: this.pageNum,
            pageSize: this.pageSize,
            isLine: 0,
            navigationId: this.navigationIds,
            locationId: this.locationId
          }
        })
        .then(
          res => {
            try {
              let data =
                (res.body.code == 0 && res.body.result && JSON.parse(res.body.result) )||[];
              this.totalCount = data.total;
              this.videoList = this.getListByClass(data.rows);
            } catch (e) {
              console.log("解析视频列表出错");
            }
          },
          response => {
            console.log("请求userInfo错误");
          }
        );
    },
    getListByClass (videoList) {
      let obj = {}
      videoList.forEach(element => {
        if (!obj[element.tagNames]) {
          obj[element.tagNames] = [element]
        } else {
          obj[element.tagNames].push(element)
        }
      });
      let arr = []
      for (var key in obj) {
        arr = arr.concat(obj[key])
      }
      return arr
    }
  },
  created() {
    this.getVideoList()
  },
  filters: {
    dateFormate(val) {
      var today = new Date(val);
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!
      var hh = today.getHours();
      var mns = today.getMinutes();
      var ss = today.getSeconds();

      var yyyy = today.getFullYear();

      if (dd < 10) {
        dd = "0" + dd;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }
      if (ss < 10) {
        ss = "0" + ss;
      }
      if (mns < 10) {
        mns = "0" + mns;
      }
      if (hh < 10) {
        hh = "0" + hh;
      }
      //   return dd + "/" + mm + "/" + yyyy;
      // return yyyy + "-" + mm + "-" + dd + ":" + ss;
      return `${yyyy}-${mm}-${dd}  ${hh}:${mns}:${ss}`;
    }
  },
  // components: {
  //   videoPlayer
  // }
};
</script>
<style>
.news-text-wrap {
  height: 90px !important;
}
</style>

<style>
/* @import "//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/jdc-news-list/jdc-news-list.css"; */
.jdc-news-list .jdc-common-banner{background:#272940 url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/jdc-news-list/i/news-list-banner.png) center no-repeat}.jdc-news-list .jdc-news-floor .row{margin-left:-20px}.jdc-news-list .jdc-news-floor .col-4{margin-bottom:40px;padding-left:20px}.jdc-news-list .jdc-news-hots .col-4{margin-bottom:0}.jdc-news-list .news-link{display:block;-webkit-transition:all .25s ease;-moz-transition:all .25s ease;-ms-transition:all .25s ease;-o-transition:all .25s ease;transition:all .25s ease}.jdc-news-list .news-link:hover{-webkit-box-shadow:0 6px 10px 0 rgba(20,34,67,.1);-moz-box-shadow:0 6px 10px 0 rgba(20,34,67,.1);box-shadow:0 6px 10px 0 rgba(20,34,67,.1)}.jdc-news-list .news-link:hover .news-title{color:#3171ff}.jdc-news-list .news-img-wrap{text-align:center;height:220px}.jdc-news-list .news-img-wrap img{width:100%;height:100%}.jdc-news-list .news-text-wrap{padding:15px 20px;background-color:#fff}.jdc-news-list .news-title{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;height:44px;line-height:22px;font-size:16px;color:#333}.jdc-news-list .news-time{margin-top:10px;line-height:24px;font-size:14px;color:#666;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.jdc-news-list .jdc-pagination{padding-top:40px;padding-bottom:80px}.jdc-video-list .jdc-common-banner{background:#272940 url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/jdc-news-list/i/video-list-banner.png) center no-repeat}.jdc-video-list .news-link img{-webkit-transition:all .25s ease;-moz-transition:all .25s ease;-ms-transition:all .25s ease;-o-transition:all .25s ease;transition:all .25s ease}.jdc-video-list .news-link:hover img{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1)}.jdc-video-list .news-img-wrap{position:relative;overflow:hidden}.jdc-video-list .news-img-wrap i{position:absolute;top:50%;left:50%;line-height:60px;font-size:60px;width:60px;height:60px;margin-left:-30px;margin-top:-30px;color:#fff;z-index:2}.jdc-video-list .news-time{margin-top:0}.video-ft-box{margin-top:10px;line-height:24px;overflow:hidden}.video-ft-box .video-tag{float:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:210px}.video-ft-box .video-tag span{margin-right:10px;color:#333}.video-ft-box .news-time{float:right}@media (max-width:1200px){.jdc-rwd .news-time,.jdc-rwd .video-ft-box{margin-top:5px;font-size:12px}}@media (max-width:768px){.jdc-rwd .jdc-news-list .row{margin:0}.jdc-rwd .jdc-news-list .col-4{float:none;margin-bottom:10px;padding:0 10px;width:100%}.jdc-rwd .jdc-news-list .news-img-wrap,.jdc-rwd .jdc-news-list .news-img-wrap img{height:auto}.jdc-rwd .jdc-news-list .news-text-wrap{padding:5px 0;height:auto}.jdc-rwd .jdc-news-list .news-link:hover{-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.jdc-rwd .jdc-news-list .news-link .news-title{height:auto;color:#333;white-space:normal;-webkit-line-clamp:initial}.jdc-rwd .jdc-news-list .news-title{padding:2px 0;line-height:20px;font-size:14px;color:#333}.jdc-rwd .jdc-news-list .news-time{line-height:22px;font-size:12px;color:#666}.jdc-rwd .jdc-news-list .jdc-pagination{padding-top:20px;padding-bottom:30px}.jdc-rwd .jdc-video-list .news-time{margin-top:0}}
</style>

