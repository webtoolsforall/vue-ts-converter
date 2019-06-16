<template>
  <div class="jdc-news w f-cb">
    <div class="news-details">
        <div class="news-guide">
            <router-link clstag="video|keycount|MiddleContentSec|allList_1" 
            @click.native='gaEventTrigger("SectionBannerSec","video|keycount|MiddleContentSec|allList_1")'
             data-ga="SectionBannerSec_视频动态" :to="{name: 'video'}">视频动态</router-link>
            <span class="news-guide-split">&gt;</span>
            <span>视频详情</span>
        </div>
        <div class="news-content">
            <div class="news-content-hd">
              <h4 class="jdc-news-title">{{videoObj.title}}</h4>
              <p class="news-hd-time" v-if="videoObj.updateTime">{{videoObj.updateTime | dateFormate}}</p>
            </div>
            <div class="news-content-bd">
              <import-js src="//vjs.zencdn.net/7.1.0/video.js"></import-js>
              <template v-if="videoObj.videoUrl">
                <video :poster="videoObj.imageUrl" id="video" 
                controls preload="auto" autoplay="autoplay" x5-video-player-type="h5">
                  <source :src="videoObj.videoUrl" type="video/mp4">当前浏览器不能支持视频播放，请采用chrome或IE9以上浏览器 
                </video>
              </template>
            </div>
        </div>
        
    </div>
    
</div>
</template>

<script>
import apiUrl from "api";
export default {
  data() {
    return {
      videoId:'',
      videoUrl:'',
      videoObj:{}
    };
  },
  created() {
    this.videoId = this.$route.query.id
    if (this.videoId) {
      this.getVideoById()
    } else {
      console.log('参数有误')
    }
  },
  methods: {
    getVideoById () {
      this.$http
        .get(apiUrl.api.getVideoById, {
          params: {
            id: this.videoId,
          }
        }).then(res => {
          if (res.body.code == 0) {
            this.videoObj = res.body.result && JSON.parse(res.body.result) || {}
            document.title= this.videoObj.title+'_视频中心-京东云'
            $('meta[name="description"]')[0].content = '京东云视频中心,京东云';
            $('meta[name="keywords"]')[0].content = '京东云视频中心提供丰富多样的视频资源，云朵说栏目深入讲解京东云产品内容和解决方案详情，品牌视频和活动视频使用户全方位了解京东云。';
            // this.$nextTick(function(){
            //   this.playVideo()
            // })
          } else {
            console.log("getVideoById查询失败！")
          }
        },
        response => {
          console.log("请求getVideoById错误");
        }
      );
    },
    playVideo () {
      let _video = document.getElementById("video");
      setTimeout(() => {
        _video.play();
      }, 300);
    }
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
  components: {
    importJs: {
      render(createElement) {
        return createElement("script", {
          attrs: {
            type: "text/javascript",
            src: this.src
          }
        });
      },
      props: {
        src: {
          type: String,
          required: true
        }
      }
    }
  },
  
}; 
</script>

<style scoped>
/* RWD start */
/* @import "//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/jdc-news-details/jdc-news-details.css"; */
.jdc-news{position:relative}.jdc-news .news-hot-title{padding-bottom:28px}.jdc-news .news-hot-title h3{line-height:18px;font-size:16px;color:#0989c5}.news-guide{padding-top:25px;padding-bottom:25px;line-height:24px;font-size:14px}.news-guide span{color:#666}.news-guide .news-guide-split{padding-left:10px;padding-right:10px}.news-guide a,.news-guide a:hover{color:#1299f8}.news-content{padding-right:20px;min-height:900px;border-right:1px solid #eaeaea}.news-content-hd .jdc-news-title{line-height:30px;font-size:20px;font-weight:700;color:#333}.news-content-hd .news-hd-time{margin-top:20px;line-height:24px;font-size:14px;color:#666}.news-content-hd .jdc-news-summary{position:relative;margin-top:24px;padding-left:25px;line-height:24px;color:#666}.news-content-hd .jdc-news-summary:before{content:'';position:absolute;top:6px;bottom:6px;left:0;width:5px;background-color:#333}.news-content-hd .jdc-news-summary dt{font-weight:700}.news-content-hd .jdc-news-summary dd{max-height:96px;overflow:hidden}.news-content-bd{padding-top:20px;line-height:28px;font-size:14px;color:#333}.news-content-bd p{text-indent:2em}.news-content-bd img{display:block;margin:20px auto;max-width:100%}.jdc-lang-en .news-content-bd p{text-indent:0!important}.news-content-page{padding:40px 0}.news-content-page li{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;line-height:28px;color:#333;font-size:14px}.news-content-page li a{color:#999}.news-content-page li a:hover{color:#1299f8}.news-hot{position:absolute;right:0;top:80px;padding-left:15px;padding-right:15px;width:315px}.news-dynamic-item{padding:30px 10px 20px}.news-dynamic-item:hover{background:#fafafa}.news-dynamic-item h4{clear:both;padding-bottom:20px}.news-dynamic-item h4 a{line-height:1;font-size:18px;color:#333}.news-dynamic-item h4 a:hover{color:#0989c5}.news-hot-list .news-img-wrap{height:180px}.news-hot-list li+li{margin-top:30px}.news-hot-list li img{width:315px;height:180px}.news-hot-list .news-link{display:block;overflow:hidden;-webkit-transition:all .25s ease;-moz-transition:all .25s ease;-ms-transition:all .25s ease;-o-transition:all .25s ease;transition:all .25s ease}.news-hot-list .news-link:hover{box-shadow:0 6px 10px 0 rgba(20,34,67,.1)}.news-hot-list .news-text-wrap{padding:15px 20px;height:55px;background-color:#fff}.news-hot-list .news-title{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;line-height:24px;color:#333;font-size:14px}.news-hot-list .news-time{margin-top:10px;line-height:22px;font-size:12px;color:#666}@media (max-width:768px){.jdc-rwd .jdc-news .news-details{margin-right:0}.jdc-rwd .jdc-news .news-guide{padding:9px 10px;font-size:12px;border-bottom:1px solid #e7e9ed}.jdc-rwd .jdc-news .news-guide-split{padding-left:5px;padding-right:5px}.jdc-rwd .jdc-news .news-content{padding:0 10px;min-height:auto;border-right:0 none}.jdc-rwd .jdc-news .jdc-news-title{margin-top:5px;line-height:24px;font-size:14px}.jdc-rwd .jdc-news .news-hd-time{margin-top:0;line-height:22px;font-size:12px}.jdc-rwd .jdc-news .jdc-news-summary{margin-top:10px;padding-left:0}.jdc-rwd .jdc-news .jdc-news-summary dt{line-height:24px;font-size:14px}.jdc-rwd .jdc-news .jdc-news-summary dd{line-height:16px;font-size:12px}.jdc-rwd .jdc-news .jdc-news-summary:before{content:none}.jdc-rwd .jdc-news .news-content-bd{line-height:20px;font-size:12px}.jdc-rwd .jdc-news .news-content-page{margin-top:20px;padding:12px 10px;border-top:1px solid #e7e9ed}.jdc-rwd .jdc-news .news-content-page li{font-size:12px}}
.news-content {
  min-height: auto;
  padding-right: 0;
  border-right: 0px solid #eaeaea; 
}
.news-content-bd{
  padding-bottom: 30px;  
  text-align: center;
}

.news-content-bd video{
  width: 100%;
  max-width: 800px;
  max-height: 600px;
}
#video{
  position: relative;
  background-color: #000;
}
@media (max-width: 768px) {
  .news-content-bd{
    padding-bottom: 20px;  
  }
}
</style>
