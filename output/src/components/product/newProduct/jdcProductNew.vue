<template>
  <div>
    <new-banner
      v-if="!loading && computeShow(0)"
      :backgroundMeta="backgroundMeta"
      :data="computeBindingData(0)"
      :placeName="oldDataBannerName"
    ></new-banner>
    <operating
      v-if="!loading && computeShow(6,'2')"
      :data="computeBindingData(6)"
    ></operating>
    <switcher
      v-if="!loading"
      :priceData="computeBindingData(8)"
      :floors="floorsList"
      :productPrice="productPrice"
    ></switcher>
    <div
      class="jdc-product-floor"
      v-if="!loading"
    >
      <advantage
        v-if="!loading && computeShow(1)"
        :data="computeBindingData(1)"
      ></advantage>
      <specification
        v-if="!loading && computeShow(7)"
        :data="computeBindingData(7)"
      ></specification>
      <functions
        v-if="!loading && computeShow(2)"
        :data="computeBindingData(2)"
      ></functions>
      <scene
        v-if="!loading && computeShow(5)"
        :data="computeBindingData(5)"
      ></scene>
      <cases
        v-if="!loading && computeShow(4)"
        :data="computeBindingData(4)"
      ></cases>
      <problems
        v-if="!loading"
        :data="computeBindingData(3)"
      ></problems>
    </div>
    <operating
      v-if="!loading && computeShow(6,'1')"
      :data="computeBindingData(6)"
    ></operating>
  </div>
</template>
<script>
import newBanner from "./widgets/bannerV3";
import advantage from "./widgets/advantage";
import specification from "./widgets/specification";
import functions from "./widgets/functions";
import scene from "./widgets/scene";
import cases from "./widgets/cases";
import problems from "./widgets/problems";
import operating from "./widgets/operating";
import switcher from "./packages/Switcher";

import APISURL from "api";

import TDK from "./config/TDK";
export default {
  name: "new-products",
  data() {
    return {
      floors: [],
      loading: false,
      floorsList: null,
      productPrice: null,
      oldDataBannerName: "", // 老数据中banner name在data中
      backgroundMeta: {}
    };
  },
  created() {
    this.setTDK();
  },
  computed: {
    productPath() {
      return this.$route.params.id;
    }
  },
  methods: {
    // 根据产品名称，获取 ./config/TDK.js 中对应配置/default 配置。 设置TDK
    setTDK() {
      let productName = this.productPath;
      let lang = this.$i18n.locale;
      let data = null;
      if (TDK[lang][productName]) {
        data = TDK[lang][productName];
      } else {
        data = TDK[lang]["default"];
      }
      document.title = data.title;
      $('meta[name="keywords"]')[0].content = data.keyword;
      $('meta[name="description"]')[0].content = data.description;
    },
    computeShow(templateId, position) {
      if (!this.floorsList) {
        return false;
      }
      if (position) {
        return (
          (this.floorsList[templateId] &&
            this.floorsList.position === position) ||
          false
        );
      } else {
        return this.floorsList[templateId] || false;
      }
    },
    computeBindingData(templateId) {
      return (
        (this.floors.length > 0 &&
          this.floors[templateId] &&
          this.floors[templateId].txt) ||
        null
      );
    },
    getProductDetailByPath(lang = this.$cookie.get("jdcloud_sitelang")) {
      //TODO:vaidation  lang?lang:this.$cookie.get('jdcloud_sitelang')
      this.loading = true;
      this.$http
        .get(APISURL.api.getProductPathNew, {
          params: {
            path: "/products/" + this.productPath,
            lang: lang
          }
        })
        .then(res => {
          if (res.body.code == 0) {
            let data = JSON.parse(res.body.result.product);
            if (res.data.status === 1 && this.$i18n.locale === "en") {
              this.getProductDetailByPath("cn");
              if (this.$cookie.get("dontShowTipStatus") == 1) {
                // 不做处理
              } else {
                // 没点击don'tshowTip
                this.$store.commit("hideLangTipEvt", true);
                window.pageConfig.enEmpty = true
              }
            } else if (data.status === 1) {
              this.$router.push("/404");
            } else {
              this.parseData(res);
            }
          } else if (res.body.code == 401) {
            this.getProductDetailByPath("cn");
            if (this.$cookie.get("dontShowTipStatus") == 1) {
              // 不做处理
            } else {
              // 没点击don'tshowTip
              this.$store.commit("hideLangTipEvt", true);
              window.pageConfig.enEmpty = true
            }
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    parseData(res) {
      let data = JSON.parse(res.data.result.product);
      this.oldDataBannerName = data.name;
      this.backgroundMeta = {
        id: data.parentNavigationId,
        name: data.parentNavigationName
      };
      let obj = {};
      let test = [];
      let count = 0;
      // 问题楼层需要默认显示，根据mark判断是否存在问题楼层，如果不存在进行push处理
      let hasFAQFloor = false;
      data.txtVoList.forEach(d => {
        if (d.templet === 3) {
          hasFAQFloor = true;
        }
        count++;
        test.push({
          id: d.templet
        });
        obj[d.templet.toString()] = true;
        this.floors[d.templet] = d;
        if (d.txt && d.txt.position) {
          obj["position"] = d.txt.position;
        }
        if (d.templet === 0 && d.txt && d.txt.label && d.txt.label[0]) {
          this.productPrice = d.txt.label[0];
        }
        if (count === data.txtVoList.length) {
          this.loading = false;
          !hasFAQFloor && (this.floors["3"] = { txt: [] });
          obj["3"] = true;
        }
      });

      this.floorsList = obj;
    },
    initjQueryFunctions() {
      this.$nextTick(function() {
        $(function() {
          $(".product-all").mouseenter(function() {
            $(".product-all,.jdc-common-products").show();
            $(".product-all-title").addClass("open");
            $(".jdc-common-products ul").waterfall();
            var popH = $(window).height() - 70;
            var poplstH = $(".jdc-common-products ul").height();

            if (popH <= poplstH) {
              $(".jdc-common-products").height(popH);
            } else {
              $(".jdc-common-products").height("auto");
            }
          });
          $(".product-all").mouseleave(function(e) {
            $(".product-all,.jdc-common-products").hide();
            e.stopPropagation();
            $(".product-all-title").removeClass("open");
          });

          $(".jdc-product-helpdoc dt").click(function() {
            $(this).toggleClass("active");
          });

          var proSliderList = $(".jdc-pro-slide-list");
          $(".js-btn-more").click(function(e) {
            var self = $(this);
            e.preventDefault();
            self.toggleClass("isShow");
            proSliderList.toggleClass("active");
          });

          seajs.use(
            [
              "jdf/2.0.0/ui/tab/1.0.0/tab",
              "jdf/2.0.0/ui/ceilinglamp/1.0.0/ceilinglamp",
              "jdf/2.0.0/ui/elevator/1.0.0/elevator"
            ],
            function(tab, ceilinglamp, elevator) {
              var titleList = $(".tab-content").find(".tab-item-title");
              var contentList = $(".tab-content").find(".tab-item");
              titleList.off().on("click", function() {
                var self = $(this);
                var index = self.index() / 2;
                self.toggleClass("active");
                if (self.hasClass("active")) {
                  self.next(".tab-item").removeClass("tab-item-hidden");
                  tab.show(index);
                } else {
                  self.next(".tab-item").addClass("tab-item-hidden");
                }
              });
              var tab = $(".jdc-product-tab").tab({
                navEl: ".jdc-bar-nav .nav-item",
                contentEl: ".tab-content .tab-item",
                curCls: "current",
                evt: "click",
                onChange: function(obj) {
                  var index = obj.index || 0;
                  titleList
                    .eq(index)
                    .addClass("active")
                    .siblings()
                    .removeClass("active");
                }
              });

              var elevatorBox = $(".js-bar-ceilinglamp");
              elevatorBox.ceilinglamp({
                curCls: "nav-fixed",
                zIndex: 10,
                top: 0
              });

              $(".jdc-product-floor").elevator({
                floorEl: ".jdc-product-floor-item",
                elevatorEl: elevatorBox,
                handlerSelector: ".nav-item",
                curCls: "on",
                floorScrollMargin: -60
              });
            }
          );

          var sliderBox = null;
          var proSlider = null;
          var sliderLi = $(".jdc-common-slider-item");
          var proSliderLi = $(".jdc-pro-slider-item");
          var body = $("html,body");
          seajs.use("jdf/2.0.0/ui/slider/1.0.0/slider", function(slider) {
            proSlider = $(".jdc-pro-slider").slider({
              contentEl: ".jdc-pro-slider-ct li",
              curCls: "current",
              speed: 300,
              isAutoPlay: false,
              nextEl: ".jdc-pro-slider-next",
              prevEl: ".jdc-pro-slider-prev",
              visible: 3,
              step: 3,
              hasOverflow: true
            });

            sliderBox = $(".jdc-common-slider").slider({
              contentEl: ".jdc-common-slider-ct li",
              curCls: "current",
              speed: 300,
              isAutoPlay: false,
              nextEl: ".jdc-common-slider-next",
              prevEl: ".jdc-common-slider-prev",
              visible: 4,
              step: 4,
              hasOverflow: true
            });
          });

          function debounce(func, threshold, execAsap) {
            var timeout;
            return function debounced() {
              var obj = this,
                args = arguments;
              function delayed() {
                if (!execAsap) func.apply(obj, args);
                timeout = null;
              }
              if (timeout) clearTimeout(timeout);
              else if (execAsap) func.apply(obj, args);
              timeout = setTimeout(delayed, threshold || 100);
            };
          }
          function sliderCompute() {
            var bodyWidth = body.width();
            if (bodyWidth > 768 && bodyWidth <= 1200) {
              var liWidth = bodyWidth / 4;
              sliderLi.css("width", liWidth);
              proSliderLi.css("width", bodyWidth / 3);
            } else if (bodyWidth > 1200) {
              sliderLi.css({ width: "300px", height: "275px" });
              proSliderLi.css({ width: "400px", height: "450px" });
            } else {
              return false;
            }
            if (proSlider&&proSlider.options&&proSlider.options.contentWidth) {
              proSlider.options.contentWidth = null;
              proSlider.init();
              sliderBox.options.contentWidth = null;
              sliderBox.init();
            }
          }

          window.onresize = debounce(
            function() {
              sliderCompute();
            },
            80,
            false
          );
        });
      });
    },
  },
  updated() {
    this.initjQueryFunctions();
  },
  mounted() {
    // this.addWxShareMsg();

    this.getProductDetailByPath();
    this.initjQueryFunctions();
    // $("html, body").animate(
    //   {
    //     scrollTop: 0
    //   },
    //   800
    // );
  },
  // destroyed() {
  //   this._timer = null;
  // },
  components: {
    newBanner,
    advantage,
    specification,
    functions,
    scene,
    cases,
    problems,
    operating,
    switcher
  }
};
</script>
<style>
/* @import "//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/jdc-product-v1/jdc-product-v1.css"; */
.jdc-product-banner{height:390px;background-color:#1f2133;background-position:center;background-repeat:no-repeat;background-size:cover!important;position:relative}.jdc-product-banner .jdc-banner-link-m{display:none}.jdc-product-banner .m-product-bg{display:none;position:absolute;left:0;bottom:0;top:0;right:0;z-index:1;background-position:center;background-repeat:no-repeat;background-size:cover!important}.jdc-product-banner .w{position:relative;z-index:2;height:100%}.jdc-product-banner .jdc-product-banner-ct{position:relative;z-index:2}.jdc-product-banner .jdc-banner-icon{position:absolute;z-index:1;top:0;right:-80px;width:560px;height:390px;background-position:center;background-size:cover!important}.jdc-product-banner .jdc-product-banner-tit{height:60px;line-height:60px;padding:110px 0 25px;color:#fff;font-size:0;font-weight:700}.jdc-product-banner .jdc-product-banner-tit strong{display:inline-block;vertical-align:top;font-size:30px}.jdc-product-banner .jdc-product-banner-tit i,.jdc-product-banner .jdc-product-banner-tit img{display:none;margin-right:15px;font-size:50px;width:50px;height:50px;font-weight:400}.jdc-product-banner .jdc-product-banner-txt{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;color:#fff;font-size:14px;min-height:48px;max-height:96px;line-height:24px;width:70%;margin-bottom:30px}.jdc-product-banner .jdc-product-tag{display:inline-block;vertical-align:top;margin-top:28px;margin-left:10px;padding:1px 3px;height:auto;line-height:14px;border:1px solid rgba(255,255,255,.4);border-radius:16px;font-size:0}.jdc-product-banner .jdc-product-tag em{position:relative;display:inline-block;vertical-align:middle;padding:0 5px;font-weight:400;font-size:12px}.jdc-product-banner .jdc-product-tag em+em{border-left:1px solid rgba(255,255,255,.4)}.jdc-product-banner .jdc-product-event-link{position:absolute;bottom:16px;left:0;font-size:0}.jdc-product-banner .jdc-product-event-link>*{display:inline-block;font-size:14px;color:#fff}.jdc-product-banner .jdc-product-event-link i{font-size:26px;margin-right:16px;width:26px;height:26px;line-height:26px;vertical-align:-1px}.jdc-product-banner .jdc-product-event-link a:hover{text-decoration:underline}.jdc-product-banner .jdc-product-event-link .line{margin:0 20px;width:1px;height:14px;background:#fff;opacity:.4;filter:alpha(opacity=40);vertical-align:-2px}.jdc-banner-event-link{height:40px;line-height:40px;background:#363848}.jdc-banner-event-link .w{overflow:hidden}.jdc-banner-event-link .event-link-text{float:left;padding-right:10px;max-width:120px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;color:#fff;font-size:14px}.jdc-banner-event-link .event-link-text .jdcfont{display:none;vertical-align:-2px;font-size:18px;margin-right:5px;-webkit-text-stroke-width:0}.jdc-banner-event-link ul{overflow:hidden}.jdc-banner-event-link li{float:left;width:33.33%;height:40px;border-right:1px solid rgba(243,245,251,.1);-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .25s ease;-moz-transition:all .25s ease;-ms-transition:all .25s ease;-o-transition:all .25s ease;transition:all .25s ease}.jdc-banner-event-link li:last-child{border-right:0}.jdc-banner-event-link li:hover{background:rgba(0,0,0,.2)}.jdc-banner-event-link li a{display:block;padding:0 12px;overflow:hidden;word-wrap:normal;white-space:nowrap;text-overflow:ellipsis;color:#fff}.jdc-banner-event-link li a i{vertical-align:top;margin-right:10px;font-size:20px}.jdc-product-tit{font-size:24px;color:#333;line-height:40px;padding:50px 0;text-align:center}.jdc-product-table{font-size:14px}.jdc-product-table tbody td,.jdc-product-table tbody th,.jdc-product-table thead th{border:1px solid #e7e9ed;padding:15px}.jdc-product-table thead th{font-weight:700;color:#fff;background:#7aace8;text-align:center;font-size:16px}.jdc-product-table tbody th{text-align:center}.product-tbg2{background:#f4f7ff}.jdc-product-fun .fun-item{background:#fff;border:1px solid #e7e9ed;margin-bottom:10px;color:#333}.jdc-product-fun .fun-item .fun-item-hd{padding:0 20px;height:60px;line-height:60px;font-size:0;font-weight:700}.jdc-product-fun .fun-item .fun-item-hd h4{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:16px;font-weight:700}.jdc-product-fun .fun-item .fun-item-bd{border-top:1px solid #e7e9ed;padding:15px 20px 0;font-size:14px;line-height:24px}.jdc-product-fun .fun-item .fun-item-bd h4{font-size:14px;font-weight:700}.jdc-product-fun .fun-item .fun-item-bd p{margin-bottom:15px}.jdc-product-tab .tab-nav{font-size:0;text-align:center}.jdc-product-tab .tab-nav li{font-size:18px;display:inline-block;vertical-align:middle;margin:0 20px;cursor:pointer;color:#333;line-height:20px;padding-bottom:25px;position:relative}.jdc-product-tab .tab-nav li.current:after{content:"";position:absolute;bottom:0;left:0;width:100%;height:2px;background:#3171ff;background:-moz-linear-gradient(80deg,#3171ff 0,#a14faf 100%);background:-webkit-linear-gradient(80deg,#3171ff 0,#a14faf 100%);background:linear-gradient(80deg,#3171ff 0,#a14faf 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#3171ff', endColorstr='#a14faf', GradientType=1)}.jdc-product-tab .tab-content{border:1px solid #e7e9ed;background:#fff;padding:35px}.jdc-product-tab .tab-content .tab-item{display:none}.jdc-product-tab .tab-content .tab-item.current{display:block}.jdc-product-tab .tab-content .tab-item .tab-item-txt{display:table-cell;width:100%;vertical-align:top;padding-right:35px;color:#333}.jdc-product-tab .tab-content .tab-item .tab-item-txt h4{font-size:16px;line-height:30px;margin-bottom:10px;font-weight:700}.jdc-product-tab .tab-content .tab-item .tab-item-txt p{line-height:24px;overflow:hidden}.jdc-product-tab .tab-content .tab-item .tab-item-txt dl{margin-top:10px;overflow:hidden}.jdc-product-tab .tab-content .tab-item .tab-item-txt dl dt{float:left}.jdc-product-tab .tab-content .tab-item .tab-item-txt dl dd{overflow:hidden}.jdc-product-tab .tab-content .tab-item .tab-item-txt dl dd a{color:#3171ff;margin-right:10px}.jdc-product-tab .tab-content .tab-item .tab-item-txt dl dd span{margin-right:10px}.jdc-product-tab .tab-content .tab-item .tab-item-txt .jdc-btn{margin-top:20px}.jdc-product-tab .tab-content .tab-item .tab-item-img{display:table-cell;padding-left:35px;vertical-align:middle;width:550px;height:330px;border-left:1px solid #eee}.jdc-product-tab .tab-content .tab-item .tab-item-img img{max-width:550px;max-height:330px}.jdc-product-floor .jdc-product-floor-item{padding-bottom:60px}.jdc-product-floor .jdc-product-floor-item:nth-child(even){background-color:#f6f8ff}.jdc-product-advantage{margin-top:-20px;margin-left:-20px;font-size:0}.jdc-product-advantage .col-6{float:none;display:inline-block;vertical-align:top;margin-top:20px;padding-left:20px}.jdc-product-advantage .product-advantage-item{padding:15px 20px;font-size:0}.jdc-product-advantage .img-wrap{float:left;margin-top:18px;margin-left:6px;text-align:center;width:44px;height:44px;line-height:44px}.jdc-product-advantage .img-wrap img{max-width:100%}.jdc-product-advantage .product-advantage-ct{margin-left:80px}.jdc-product-advantage .product-advantage-ct dt{line-height:26px;font-size:16px;color:#333}.jdc-product-advantage .product-advantage-ct dd{margin-top:10px;line-height:24px;font-size:14px;color:#666}.jdc-product-help .row{margin-top:-20px;margin-left:-20px}.jdc-product-help .col-4{margin-top:20px;padding-left:20px}.jdc-product-help .product-help-item{display:block;position:relative;padding:13px 40px 13px 20px;border:1px solid #e7e9ed;transition:all .25s;background-color:#fff}.jdc-product-help .product-help-item:hover{box-shadow:0 1px 9px 0 rgba(197,204,225,.29)}.jdc-product-help .product-help-item:after{content:'';position:absolute;right:20px;top:18px;border:2px solid #999;width:10px;height:10px;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);border-top:none;border-left:none}.jdc-product-help .help-item-text{display:block;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;line-height:24px;color:#666;font-size:14px}.jdc-product-help .help-btn-wrap{margin-top:30px;text-align:center}.jdc-bar .product-all{position:absolute;left:0;top:0;z-index:10;width:130px;*float:left;padding-top:58px;display:none}.jdc-bar .product-all .product-all-title{height:58px;line-height:58px;border:1px solid transparent;cursor:pointer;border-bottom:none;text-align:center;width:125px;position:absolute;z-index:8;display:none;left:0;top:0;font-size:16px;color:#333;background-color:#fff}.jdc-bar .product-all .product-all-title .jdcfont{color:#333;font-size:18px}.jdc-bar .product-all .open{border:1px solid #ededed;background:#fff;border-bottom:none;color:#3171ff}.jdc-bar .product-all .open .jdcfont{color:#3171ff}.jdc-bar .product-all .jdc-common-products{display:none;box-shadow:0 2px 3px 0 #eee;width:1200px;padding:20px;border:1px solid #ededed;background:#fff;overflow:auto;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;zoom:100%;clear:both}.jdc-bar .product-all .jdc-common-products ul{position:relative;margin-bottom:10px;overflow:hidden}.jdc-bar .product-all .jdc-common-products ul li{width:208px;text-align:left;margin-right:25px;position:absolute}.jdc-bar .product-all .jdc-common-products ul li h3{font-size:16px;margin-bottom:20px;color:#222;padding:0 10px}.jdc-bar .product-all .jdc-common-products ul li a{display:block;padding:10px;color:#666;line-height:20px;font-size:14px;white-space:normal}.jdc-bar .product-all .jdc-common-products ul li a:hover{color:#3171ff;background:#f8f8f8}.jdc-bar .product-all .jdc-common-products ul li .line{border-bottom:1px solid #ededed;display:block;margin:0 0 15px 10px}.jdc-bar .product-all .jdc-common-products ul .last{margin-right:0}.jdc-bar .nav-item .jdcfont{margin-left:5px;font-size:18px;vertical-align:-1px}.jdc-bar .help-hot{display:inline-block;background:#ff4401;color:#fff;font-size:12px;padding:0 3px;border-radius:2px;margin-left:5px;line-height:15px}.jdc-bar .help-grey{background:#999}.jdc-bar .help-org{background:#ff7200}.nav-fixed{position:fixed;top:0;left:0;width:100%;z-index:10;background:#fff}.nav-fixed .item-hide,.nav-fixed .product-all{display:block!important}.jdc-pro-slider{position:relative;height:450px;overflow:hidden}.jdc-pro-slider .jdc-pro-slider-item{position:relative;float:left;box-sizing:border-box;width:33.333%;height:450px;overflow:hidden}.jdc-pro-slider .slider-item-wrap{box-sizing:border-box;margin:0 10px;padding:15px 20px;height:450px;background-color:#fff;border:1px solid #e7e9ed}.jdc-pro-slider .slider-item-wrap:hover{box-shadow:0 1px 21px 0 rgba(197,204,225,.57)}.jdc-pro-slider .slider-item-hd{padding:0 10px 15px;border-bottom:1px solid #e7e9ed}.jdc-pro-slider .slider-item-bd{height:275px;overflow-y:auto}.jdc-pro-slider .slider-item-feature{padding:5px 10px}.jdc-pro-slider .slider-item-feature dt{line-height:26px;font-size:16px;color:#333}.jdc-pro-slider .slider-item-feature dd{margin-top:3px;line-height:18px;font-size:14px;color:#666}.jdc-pro-slider .slider-item-feature dd+dt{margin-top:12px}.jdc-pro-slider .slider-item-tit{line-height:26px;font-size:16px;color:#333;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.jdc-pro-slider .slider-item-des{margin-top:7px;height:36px;line-height:18px;overflow:hidden;color:#666;font-size:14px}.jdc-pro-slider .slider-item-ft{display:table;text-align:center;box-sizing:border-box;padding:15px 5px 0;width:100%;border-top:1px solid #e7e9ed}.jdc-pro-slider .slider-item-ft .slider-item-price{display:table-cell;text-align:left;max-width:200px;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;color:#ff4949;font-size:22px}.jdc-pro-slider .slider-item-ft .jdc-btn{max-width:132px;text-overflow:ellipsis;white-space:nowrap}.jdc-pro-slider .jdc-pro-slider-btn{display:block;position:absolute;top:0;z-index:3;width:30px;height:450px;text-align:center;background:rgba(217,217,217,.15)}.jdc-pro-slider .jdc-pro-slider-btn a{width:30px;line-height:450px;position:absolute;top:0;left:0;font-size:28px;z-index:2;color:#d1d1d1}.jdc-pro-slider .jdc-pro-slider-prev{left:10px}.jdc-pro-slider .jdc-pro-slider-next{right:10px}.jdc-pro-slider .jdc-pro-slider-btn.disabled{display:none}.jdc-common-slider{position:relative;height:275px;overflow:hidden}.jdc-common-slider:after{content:"";position:absolute;top:0;left:0;width:1px;height:100%;background:#e0e0e0;z-index:3}.jdc-common-slider:before{content:"";position:absolute;top:0;right:0;width:1px;height:100%;background:#e0e0e0;z-index:3}.jdc-common-slider .jdc-common-slider-item{position:relative;float:left;width:25%;height:275px;overflow:hidden;text-align:center;background:#fff}.jdc-common-slider .jdc-common-slider-item .item-first{padding:0 20px;border:1px solid #e0e0e0;border-left:0;height:275px;box-sizing:border-box}.jdc-common-slider .jdc-common-slider-item .item-first .img-box{height:100px;line-height:100px;margin:60px auto 0}.jdc-common-slider .jdc-common-slider-item .item-first .img-box img{max-width:100%;max-height:100%;vertical-align:middle}.jdc-common-slider .jdc-common-slider-item .item-first .img-box img:after{display:inline-block;width:0;height:100%;vertical-align:middle}.jdc-common-slider .jdc-common-slider-item .item-first .tit{margin-top:20px;max-height:54px;font-size:18px;overflow:hidden}.jdc-common-slider .jdc-common-slider-item .item-first .txt{margin-top:10px;color:#666;padding:0 10px}.jdc-common-slider .jdc-common-slider-item .item-second{position:absolute;top:50px;left:0;width:100%;height:100%;z-index:2;transition:all .2s ease-in;opacity:0;border:1px solid #525b82;color:#fff;box-sizing:border-box;text-align:left}.jdc-common-slider .jdc-common-slider-item .item-second .detail{padding:20px;word-break:break-all}.jdc-common-slider .jdc-common-slider-item .item-second .tit{max-height:54px;font-size:18px;overflow:hidden}.jdc-common-slider .jdc-common-slider-item .item-second .txt{margin-top:6px;max-height:168px;overflow:hidden;line-height:24px}.jdc-common-slider .jdc-common-slider-item:hover .item-second{top:0;opacity:1;background:rgba(6,19,80,.65)}.jdc-common-slider .jdc-common-slider-btn{display:block;position:absolute;top:0;z-index:3;width:30px;height:275px;text-align:center;background:rgba(217,217,217,.15)}.jdc-common-slider .jdc-common-slider-btn a{width:30px;line-height:275px;position:absolute;top:0;left:0;font-size:28px;z-index:2;color:#d1d1d1}.jdc-common-slider .jdc-common-slider-prev{left:0}.jdc-common-slider .jdc-common-slider-next{right:0}.jdc-common-slider .jdc-common-slider-btn.disabled{display:none}.jdc-product-operator{text-align:left;background-color:#f6f8ff}.jdc-product-operator .w{box-sizing:border-box;padding:12px}.jdc-product-operator .jdc-product-operator-img{max-width:100%}.tab-item-title{display:none}@media (max-width:1200px){.jdc-rwd .jdc-banner-event-link>.w,.jdc-rwd .jdc-product-banner>.w{padding:0 20px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.jdc-rwd .jdc-product-banner>.w{overflow:hidden}.jdc-rwd .jdc-banner-icon{top:30px;right:-100px;-ms-transform:scale(0.8);-webkit-transform:scale(0.8);transform:scale(0.8)}.jdc-rwd .jdc-product-nav .jdc-product-navlst li{padding:0 10px}.jdc-rwd .tab-nav li{margin:0 10px;padding-bottom:15px}.jdc-rwd .jdc-product-tab{padding-bottom:0}.jdc-rwd .jdc-product-tab .tab-content .tab-item-img{padding-left:0;width:45.83333333333333333%;height:auto}.jdc-rwd .jdc-product-tab .tab-content .tab-item-img img{max-width:100%}.jdc-rwd .slider-item-ft .slider-item-price{display:inline-block;width:45%;font-size:18px;vertical-align:middle}}@media (max-width:768px){.jdc-rwd .jdc-product-banner{background-image:none!important}.jdc-rwd .jdc-product-banner>.w{background-image:initial}.jdc-rwd .jdc-product-banner .jdc-product-tag{margin-top:8px}.jdc-rwd .jdc-product-banner .m-product-bg{display:block}.jdc-rwd .jdc-product-floor{padding-bottom:30px}.jdc-rwd .jdc-product-floor .jdc-btn-more{-webkit-text-stroke-width:0}.jdc-rwd .jdc-product-floor .jdc-btn-more:hover{color:#666}.jdc-rwd .jdc-product-floor-item{padding:0 10px;background-color:#fff}.jdc-rwd .jdc-product-floor-item:nth-child(even){background-color:#fff}.jdc-rwd .jdc-product-floor-item.jdc-floor-item-bg{padding-bottom:15px;background-color:#f6f8ff}.jdc-rwd .jdc-product-banner{height:auto}.jdc-rwd .jdc-product-banner>.w{height:200px}.jdc-rwd .jdc-product-banner .jdc-product-banner-txt{width:auto}.jdc-rwd .jdc-banner-link-m{display:inline}.jdc-rwd .jdc-product-tab{margin-left:-10px;margin-right:-10px}.jdc-rwd .jdc-product-banner-tit{padding:20px 0;height:auto;line-height:30px}.jdc-rwd .jdc-product-banner-tit i,.jdc-rwd .jdc-product-banner-tit img{display:none;margin-right:10px;width:30px;height:30px;line-height:30px;font-size:30px}.jdc-rwd .jdc-product-banner-tit strong{font-size:18px}.jdc-rwd .jdc-product-banner-txt{margin-bottom:20px;min-height:64px;height:64px;line-height:16px;font-size:12px;overflow:hidden}.jdc-rwd .jdc-banner-link{font-size:12px;margin-left:10px}.jdc-rwd .jdc-banner-event-link{position:static;bottom:auto;top:auto;height:auto;line-height:32px;font-size:12px;background-color:#212330}.jdc-rwd .jdc-banner-event-link .event-link-text{max-width:90px;font-size:12px;color:#999}.jdc-rwd .jdc-banner-event-link li{width:100%;height:32px;border-right:0 none}.jdc-rwd .jdc-banner-event-link li:hover{background-color:transparent}.jdc-rwd .jdc-banner-event-link li a{padding-left:0;color:#999}.jdc-rwd .jdc-banner-event-link li a i{font-size:14px}.jdc-rwd .jdc-product-tit{padding:25px 0 15px;line-height:32px;font-size:22px}.jdc-rwd .fun-item{position:relative}.jdc-rwd .fun-item:before{content:'';position:absolute;z-index:1;left:0;right:0;top:-1px;height:2px;background:linear-gradient(80deg,#3171ff 0,#a14faf 100%)}.jdc-rwd .fun-item .fun-item-hd{padding:0 10px;height:50px;line-height:50px}.jdc-rwd .fun-item .fun-item-hd h4{font-size:14px;color:#3171ff;font-weight:400}.jdc-rwd .fun-item .fun-item-hd i{width:30px;height:30px}.jdc-rwd .fun-item .fun-item-bd{padding:15px 10px 0}.jdc-rwd .fun-item .fun-item-bd h4{color:#333;font-weight:400}.jdc-rwd .fun-item .fun-item-bd p{margin-top:5px;line-height:16px;font-size:12px;color:#666}.jdc-rwd .tab-content{padding:0;height:auto;border:0 none;font-size:12px}.jdc-rwd .tab-content .tab-item{padding:20px;border-bottom:1px solid #ededed}.jdc-rwd .tab-content .tab-item.tab-item-hidden{display:none}.jdc-rwd .tab-content .tab-item .tab-item-img,.jdc-rwd .tab-content .tab-item .tab-item-txt{display:block}.jdc-rwd .tab-content .tab-item .tab-item-txt{padding-right:0}.jdc-rwd .tab-content .tab-item .tab-item-txt p{max-height:initial;line-height:18px;color:#666}.jdc-rwd .tab-content .tab-item .tab-item-txt .jdc-btn,.jdc-rwd .tab-content .tab-item .tab-item-txt dl{margin-top:10px}.jdc-rwd .tab-content .tab-item .tab-item-txt .jdc-btn{display:block;border-radius:0;line-height:28px;background:#3171ff}.jdc-rwd .tab-content .tab-item .tab-item-img{margin-top:10px;padding-left:0;width:100%;height:auto;border-left:0 none;text-align:center}.jdc-rwd .tab-content .tab-item .tab-item-img img{max-width:100%;max-height:100%}.jdc-rwd .tab-item-title{display:block;position:relative;height:60px;line-height:60px;font-size:16px;color:#333;cursor:pointer;border-bottom:1px solid #ededed}.jdc-rwd .tab-item-title.active{color:#3171ff}.jdc-rwd .tab-item-title:first-child{border-top:1px solid #ededed}.jdc-rwd .tab-item-title h4{padding-right:50px;margin-left:20px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.jdc-rwd .jdc-common-slider{margin-left:-10px;margin-right:-10px;height:auto;border-top:1px solid #e7e9ed}.jdc-rwd .jdc-common-slider:after,.jdc-rwd .jdc-common-slider:before{display:none}.jdc-rwd .jdc-common-slider ul{width:auto!important;position:static!important}.jdc-rwd .jdc-common-slider .jdc-common-slider-item{float:none!important;width:100%!important;height:auto!important;text-align:left;border-bottom:1px solid #e7e9ed;padding:10px;box-sizing:border-box;display:table}.jdc-rwd .jdc-common-slider .jdc-common-slider-item .item-first{display:table-cell;border:0;height:auto;margin-right:10px;vertical-align:middle}.jdc-rwd .jdc-common-slider .jdc-common-slider-item .item-first .img-box{width:130px;height:auto;line-height:inherit;margin:0}.jdc-rwd .jdc-common-slider .jdc-common-slider-item .item-first .img-box img{max-width:100%;max-height:100%;vertical-align:middle}.jdc-rwd .jdc-common-slider .jdc-common-slider-item .item-first .tit,.jdc-rwd .jdc-common-slider .jdc-common-slider-item .item-first .txt{display:none}.jdc-rwd .jdc-common-slider .jdc-common-slider-item .item-second{display:table-cell;position:static;height:auto;z-index:2;transition:none;opacity:1;border:0;color:#333;padding-left:10px}.jdc-rwd .jdc-common-slider .jdc-common-slider-item .item-second .detail{padding:0}.jdc-rwd .jdc-common-slider .jdc-common-slider-item .item-second .tit{max-height:inherit;font-size:14px}.jdc-rwd .jdc-common-slider .jdc-common-slider-item .item-second .txt{font-size:12px;color:#666;margin-top:2px;max-height:inherit;line-height:18px}.jdc-rwd .jdc-common-slider .jdc-common-slider-item:hover .item-second{top:0;opacity:1;background:0 0}.jdc-rwd .jdc-common-slider .jdc-common-slider-btn{display:none}.jdc-rwd .jdc-product-advantage-wrap{padding-bottom:10px;background:url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/jdc-product-v1/i/fn_bg.jpg) center bottom no-repeat;background-size:100% auto}.jdc-rwd .jdc-product-advantage{margin-top:0;margin-left:0;margin-right:0;padding-bottom:10px;background-color:rgba(255,255,255,.5)}.jdc-rwd .jdc-product-advantage .product-advantage-item{padding:10px}.jdc-rwd .jdc-product-advantage .col-6{margin-top:0;padding-left:0;width:100%}.jdc-rwd .jdc-product-advantage .img-wrap{margin-top:6px;width:32px;height:32px;line-height:32px}.jdc-rwd .jdc-product-advantage .product-advantage-ct{margin-left:50px}.jdc-rwd .jdc-product-advantage .product-advantage-ct dt{font-size:14px;line-height:24px}.jdc-rwd .jdc-product-advantage .product-advantage-ct dd{margin-top:2px;height:auto;font-size:12px;line-height:18px}.jdc-rwd .jdc-product-help{margin-left:-10px;margin-right:-10px}.jdc-rwd .jdc-product-help .row{margin-top:0;margin-left:0;margin-right:0;border-top:1px solid #ededed}.jdc-rwd .jdc-product-help .col-4{margin-top:0;padding-left:0;width:100%}.jdc-rwd .jdc-product-help .product-help-item{padding:12px 20px;border-width:0 0 1px;border-color:#ededed}.jdc-rwd .jdc-product-help .product-help-item:hover{box-shadow:none}.jdc-rwd .jdc-product-help .help-item-text{color:#333}.jdc-rwd .jdc-product-help .help-btn-wrap{margin-top:0}.jdc-rwd .jdc-pro-slider{height:auto}.jdc-rwd .jdc-pro-slider .jdc-pro-slide-list{width:auto!important;position:static!important}.jdc-rwd .jdc-pro-slider .jdc-pro-slide-list.active .jdc-pro-slider-item{display:block!important}.jdc-rwd .jdc-pro-slider .jdc-pro-slider-item{float:none!important;width:100%!important;height:auto!important}.jdc-rwd .jdc-pro-slider .jdc-pro-slider-item+.jdc-pro-slider-item{margin-top:10px}.jdc-rwd .jdc-pro-slider .jdc-pro-slider-item:nth-child(n+4){display:none!important}.jdc-rwd .jdc-pro-slider .slider-item-wrap{margin:0;padding:10px;height:auto}.jdc-rwd .jdc-pro-slider .slider-item-hd{padding:0 0 10px}.jdc-rwd .jdc-pro-slider .slider-item-bd{height:auto}.jdc-rwd .jdc-pro-slider .slider-item-tit{font-weight:400;font-size:14px}.jdc-rwd .jdc-pro-slider .slider-item-des{height:auto;font-size:12px}.jdc-rwd .jdc-pro-slider .slider-item-feature{padding:5px 0}.jdc-rwd .jdc-pro-slider .slider-item-feature dt{line-height:18px}.jdc-rwd .jdc-pro-slider .slider-item-feature dd,.jdc-rwd .jdc-pro-slider .slider-item-feature dt{font-size:12px}.jdc-rwd .jdc-pro-slider .slider-item-ft{display:block;padding:15px 0 5px}.jdc-rwd .jdc-pro-slider .slider-item-ft .jdc-btn{display:block;max-width:initial;border-radius:0;line-height:28px;background:#3171ff}.jdc-rwd .jdc-pro-slider .slider-item-price{display:block;padding-bottom:20px;width:auto;max-width:initial;line-height:24px;font-size:14px;color:#fb6928}.jdc-rwd .jdc-pro-slider .jdc-pro-slider-btn{display:none}}
</style>

