<template>
  <div>
    <div class="actContent">
      <div v-html="dbContent"></div>
      <div v-html="actContent"></div>
      <script-in v-html="_jscontent"></script-in>
    </div>
    <!-- <script-in v-html="jsContent"></script-in> -->
  </div>
</template>

<script>
import apiUrl from "api";

export default {
  name: "staticSetting",
  data() {
    return {
      actContent: "",
      dbContent: "",
      src: "//www.jdcloud.com/srccccc",
      // _jscontent: ""
    };
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
    },
    scriptIn: {
      render(createElement) {
         return   createElement('script', {
          attrs: {
            type: "text/javascript"
          }
        }, this.$slots.default)
      },
      props: {
        _jscontent: {
          type:String,
          default:""
          
        }
      },
    }
  },
  // computed:{
  //     jsContent: function () {
  //       return this._jscontent
  //     }

  // },
  methods: {
    // 暂定三个子级目录替换
    replaceLangUrl: function(lang) {
      lang = String(lang);
      return lang
        .replace("/cn", "")
        .replace("/en", "")
        .replace("/activity/", "")
        .replace("/news/", "")
        .replace("/service/", "")
        .replace("/neec/", "")
        .replace("/aidc/", "");
    },
    getDetailById: function(_lang) {
      var _curUrl = this.replaceLangUrl(this.$route.path);
      _lang ? _lang : this.$cookie.get("jdcloud_sitelang");
      this.$http
        .get(apiUrl.api.getStaticPage, {
          params: {
            url: _curUrl,
            lang: _lang
          }
        })
        .then(
          res => {
            if (res.body.code == 0) {
              if (res.body.code == 0 && res.body.result) {
                this.actContent = res.body.result && res.body.result.ossContent;
                this._jscontent = res.body.result && res.body.result.jsContent;
                this.dbContent = res.body.result && res.body.result.dbContent;
              }
            } else if (res.body.code == 401) {
              console.log(_lang);
              _lang == "cn" ? false : this.getDetailById("cn");
              if (this.$cookie.get("dontShowTipStatus") == 1) {
                // 不做处理
              } else {
                // 没点击don'tshowTip
                this.$store.commit("hideLangTipEvt", true);
                window.pageConfig.enEmpty = true
              }
            }
          },
          err => {
            console.log(err);
          }
        );
    },
    // 1120 李美娟汇桔网cookie引流需求 
    hjSetCookie: function() {
      var _referrer = document.referrer||''
      if(_referrer.indexOf('huijuyun.com')>0 && this.$route.path.indexOf("wtoip")>0){
        this.$cookie.set("ao", "hj", {
          expires: 30,
          domain: ".jdcloud.com"
        });
      }else{
        console.log("else_hj")
      }
    }
  },
  created() {
    // 取params
    // 请求动态内容
    this.getDetailById();
    this.hjSetCookie()
  }
};
</script>

<style>
</style>
