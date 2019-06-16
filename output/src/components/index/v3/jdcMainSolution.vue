<template>
  <div
    class="jdc-main-solution"
    id="js-solution-hook"
    :style="`background-image: url('${floorItem.floorCatalogList[0].imageUrl.split(',')[0]}')`"
  >
    <div class="jdc-main-hd">
      <h3 class="jdc-main-title">{{floorItem.name}}</h3>
      <p class="jdc-main-des" v-if="floorItem.description">{{floorItem.description}}</p>
    </div>
    <div class="jdc-main-bd">
      <div
        class="w jdc-solution-list-wrap hidden-xs"
        id="js-sliderBox"
      >
        <ul class="jdc-solution-list">
          <li class="jdc-solution-list-item"
            v-for="(item,index) in floorItem.floorCatalogList" :key="index"
            @click="gaEventTrigger('SolutionSec','HomePage|keycount|SolutionSec|HomePage_SolutionsIcon_' + index)" 
            :clstag="'HomePage|keycount|SolutionSec|HomePage_SolutionsIcon_' + index" 
            :data-ga="'SolutionSec_'+item.name">
            <p class="jdc-solution-text">{{item.name}}</p>
          </li>
        </ul>
        <a
          href="javascript:;"
          class="jdc-solution-btn jdc-solution-btn-prev jdcfont"
        >&#xe906;</a>
        <a
          href="javascript:;"
          class="jdc-solution-btn jdc-solution-btn-next jdcfont"
        >&#xe905;</a>
      </div>

      <div class="jdc-solution-slider-content hidden-xs">
        <ul class="jdc-solution-wrap">
          <li
            v-for="(item,index) in floorItem.floorCatalogList" :key="index"
            class="jdc-solution-item" :class="index === 0 ? ' current': ''"
            @click="gaEventTrigger('SolutionSec','HomePage|keycount|SolutionSec|HomePage_SolutionsIcon_' + index)" 
            :clstag="'HomePage|keycount|SolutionSec|HomePage_SolutionsIcon_' + index" 
            :data-ga="'SolutionSec_'+item.name" 
            :data-bg="item.imageUrl.split(',')[0]">
            <div class="jdc-solution-item-content">
              <div class="jdc-solution-text-wrap">
                <dl>
                  <dt class="jdc-solution-title"><em>{{item.name}}</em></dt>
                  <dd class="jdc-solution-des" v-if="item.description">{{item.description}}</dd>
                </dl>
                <a
                  @click="gaEventTrigger('SolutionSec', 'HomePage|keycount|SolutionSec|HomePage_Solutions_' + index)" 
                  :clstag="'HomePage|keycount|SolutionSec|HomePage_Solutions_' + index" 
                  :data-ga="'SolutionSec_'+item.name+'_了解更多'" 
                  :href="item.buttonUrl" target="_blank"
                  class="jdc-solution-btn"
                >{{$t('common.solutionMore')}}</a>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="m-solution-wrap">
        <ul class="m-solution-list swiper-wrapper">
          <li class="m-solution-item swiper-slide"
           v-for="(item,index) in floorItem.floorCatalogList" :key="index">
            <div
              class="m-bg-wrap"
              :style="`background-image: url('${item.imageUrl.split(',')[0]}')`">
              <h5 class="m-solution-title">{{item.name}}</h5>
            </div>
            <div class="m-solution-text">
              <p class="m-solution-des">{{item.description}}</p>
              <a
                @click="gaEventTrigger('SolutionSec', 'HomePage|keycount|SolutionSec|HomePage_Solutions_' + index)" 
                :clstag="'HomePage|keycount|SolutionSec|HomePage_Solutions_' + index" 
                :data-ga="'SolutionSec_'+item.name+'_了解更多'" 
                :href="item.buttonUrl"
                class="m-solution-link"
              >{{$t('common.solutionMore')}}&gt;</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: ['floorItem'],
  mounted() {
    this.initFun()
  },
  methods: {
    initFun() {
      seajs.use("jdf/2.0.0/ui/slider/1.0.0/slider", function(slider) {
        var win = $(window);
        var body = $("html,body");
        var solution = $("#js-solution-hook");
        var imgSrc = "";
        var currentIndex = 0;
        var index = 0;
        var solutionWrap = $(".jdc-solution-wrap");
        var list = $(".jdc-solution-list");
        var sliderLi = list.find(".jdc-solution-list-item");
        var sliderBox = $("#js-sliderBox").slider({
          contentEl: ".jdc-solution-list-item",
          nextEl: ".jdc-solution-btn-next",
          prevEl: ".jdc-solution-btn-prev",
          visible: 5,
          step: 5,
          speed: 300,
          hasOverflow: true,
          isLoop: false,
          evt: "click",
          hasBlank: true,
          onNext: function() {
            currentIndex = list.find("li.current").index();
            solutionSlider(currentIndex);
          },
          onPrev: function() {
            currentIndex = list.find("li.current").index();
            solutionSlider(currentIndex);
          }
        });

        function solutionSlider(ind) {
          var current = solutionWrap.children("li").eq(ind);
          imgSrc = current.data("bg");
          solution.css("background-image", "url(" + imgSrc + ")");
          current
            .addClass("current")
            .siblings()
            .removeClass("current");
        }

        $(".jdc-solution-list-wrap").on(
          "click",
          ".jdc-solution-list-item",
          function() {
            var self = $(this);
            index = self.index();
            solutionSlider(index);
            self
              .addClass("current")
              .siblings()
              .removeClass("current");
          }
        );

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

        var oldBodyWidth = null;
        var xsFlag = true;
        var nonXsFlag = true;
        function compute() {
          var bodyWidth = body.width();
          if (bodyWidth > 768 && bodyWidth <= 1200) {
            // console.log('main-solution-console:bodyWidth >= 768 && bodyWidth <= 1200')
            var liWidth = bodyWidth / 5;
            sliderLi.css("width", liWidth);
            sliderBox.options.contentWidth = liWidth;
          } else if (bodyWidth > 1200) {
            // console.log('main-solution-console:bodyWidth > 1200')
            sliderLi.css("width", 240);
            sliderBox.options.contentWidth = 240;
          } else {
            // console.log('main-solution-console:bodyWidth < 768');
            xsFlag = false;
            nonXsFlag = true;
            return false;
          }
          nonXsFlag = false;
          xsFlag = true;
          // sliderBox.options.contentWidth = null;
          // sliderBox.init();
          // sliderBox.show(currentIndex);
        }

        compute();

        window.onresize = debounce(
          function() {
            compute();
          },
          80,
          false
        );

        var swiper = new Swiper(".m-solution-wrap", {
          slidesPerView: "auto",
          centeredSlides: true,
          spaceBetween: 10,
          loop: true
        });
      });
    }
  }
};
</script>


<style>
/* @import "//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/jdc-main-solution-v1/jdc-main-solution-v1.css"; */
.jdc-main-solution{margin-top:65px;height:580px;transition:background-image .2s;background-position:center;background-color:#242644;background-size:cover}.jdc-main-solution .jdc-main-des,.jdc-main-solution .jdc-main-title{color:#fff}.jdc-solution-slider{margin-top:30px}.jdc-solution-slider-content,.jdc-solution-slider-content .jdc-solution-wrap{position:relative}.jdc-solution-slider-content .jdc-solution-item{opacity:0;filter:alpha(opacity=0);position:absolute;z-index:1;left:0;top:0;width:100%;color:#fff}.jdc-solution-slider-content .jdc-solution-item.current{z-index:2;opacity:1;filter:alpha(opacity=100)}.jdc-solution-slider-content .jdc-solution-item-content{margin:0 auto;padding-top:55px;max-width:1200px}.jdc-solution-slider-content .jdc-solution-text-wrap{margin-left:7.5%;float:left;width:590px}.jdc-solution-slider-content .jdc-solution-text-wrap .jdc-solution-btn{margin-top:23px;display:inline-block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;min-width:70px;background:#fff;color:#333;text-align:center;padding:0 30px;height:36px;line-height:36px;-webkit-border-radius:18px;-moz-border-radius:18px;border-radius:18px;font-size:14px;opacity:.9;filter:alpha(opacity=90);transition:all .25s ease}.jdc-solution-slider-content .jdc-solution-text-wrap .jdc-solution-btn:hover{opacity:1;filter:alpha(opacity=100);box-shadow:0 0 10px 0 rgba(3,0,76,.3)}.jdc-solution-slider-content .jdc-solution-title{line-height:30px;font-size:20px;font-weight:700;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.jdc-solution-slider-content .jdc-solution-des{display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;margin-top:18px;max-height:112px;line-height:28px;overflow:hidden;font-size:14px;text-overflow:ellipsis}.jdc-solution-slider-content .jdc-solution-logo-wrap{float:left;margin-left:40px;width:420px;max-height:230px;overflow:hidden;font-size:0}.jdc-solution-slider-content .jdc-solution-logo-wrap:after{content:'';width:0;height:100%;display:inline-block;vertical-align:middle}.jdc-solution-slider-content .jdc-solution-logo-list{display:inline-block}.jdc-solution-slider-content .jdc-solution-logo-list li{display:inline-block;margin-top:40px;width:33%;vertical-align:middle;text-align:left}.jdc-solution-list-wrap{position:relative;margin-top:10px;height:65px;overflow:hidden}.jdc-solution-list-wrap:after{content:'';position:absolute;left:0;bottom:0;right:0;border-bottom:1px solid rgba(255,255,255,.27)}.jdc-solution-list-wrap .jdc-solution-btn{position:absolute;top:0;width:20px;height:65px;text-align:center;line-height:65px;font-size:24px;color:#fff;transition:all .4s cubic-bezier(0.4,0,.2,1)}.jdc-solution-list-wrap .jdc-solution-btn:hover{opacity:1;filter:alpha(opacity=100)}.jdc-solution-list-wrap .jdc-solution-btn.disabled{display:none}.jdc-solution-list-wrap .jdc-solution-btn-prev{left:0}.jdc-solution-list-wrap .jdc-solution-btn-next{right:0}.jdc-solution-list{text-align:center;font-size:0}.jdc-solution-list .jdc-solution-list-item{display:inline-block;vertical-align:top;width:20%;text-align:center;font-size:14px;cursor:pointer}.jdc-solution-list .jdc-solution-list-item.current .jdc-solution-text:after{-ms-transform:scaleX(1);-webkit-transform:scaleX(1);transform:scaleX(1)}.jdc-solution-list .img-wrap{margin:0 auto;width:42px;height:42px;overflow:hidden;background-size:42px;background-position:0 -1680px}.jdc-solution-list .jdc-solution-text{position:relative;padding:0 20px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:65px;color:#fff;font-size:20px}.jdc-solution-list .jdc-solution-text:after{content:'';position:absolute;bottom:0;left:0;right:0;height:3px;background:#3171ff;background:-moz-linear-gradient(80deg,#3171ff 0,#a14faf 100%);background:-webkit-linear-gradient(80deg,#3171ff 0,#a14faf 100%);background:linear-gradient(80deg,#3171ff 0,#a14faf 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#3171ff', endColorstr='#a14faf', GradientType=1);-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);-webkit-transition:all .15s;transition:all .15s;z-index:1}.m-solution-wrap{display:none;position:relative;z-index:1;color:#fff;overflow:hidden}.m-solution-wrap .m-solution-list{display:-ms-flexbox;display:flex;box-sizing:border-box;width:100%}.m-solution-wrap .m-solution-item{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-negative:0;flex-shrink:0;width:84%}.m-solution-wrap .m-solution-item.swiper-slide-active .m-bg-wrap{-webkit-transform:scaleY(1);-ms-transform:scaleY(1);transform:scaleY(1)}.m-solution-wrap .m-solution-item.swiper-slide-active .m-solution-des{display:-webkit-box}.m-solution-wrap .m-solution-item.swiper-slide-active .m-solution-link{display:block}.m-solution-wrap .m-bg-wrap{position:relative;height:160px;background-size:cover;background-position:center;border-radius:5px;box-shadow:0 3px 5px 0 rgba(22,22,22,.5);transition:-webkit-transform .2s cubic-bezier(0.4,0,.2,1);transition:transform .2s cubic-bezier(0.4,0,.2,1);transition:transform .2s cubic-bezier(0.4,0,.2,1),-webkit-transform .2s cubic-bezier(0.4,0,.2,1);-webkit-transform:scaleY(0.8);-ms-transform:scaleY(0.8);transform:scaleY(0.8)}.m-solution-wrap .m-solution-title{position:absolute;bottom:0;left:0;right:0;height:40px;line-height:40px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;text-align:center;font-size:16px;background-color:rgba(0,0,0,.2)}.m-solution-wrap .m-solution-text{margin-top:10px;height:120px;overflow:hidden}.m-solution-wrap .m-solution-des{display:none;padding:0 5px;overflow:hidden;text-overflow:ellipsis;max-height:80px;-webkit-line-clamp:4;-webkit-box-orient:vertical;line-height:20px;font-size:12px;color:rgba(255,255,255,.7)}.m-solution-wrap .m-solution-link{display:none;padding:5px 5px 20px;line-height:15px;font-size:12px;color:#fff}.m-solution-wrap .m-solution-link:hover{color:#fff}@media (max-width:768px){.jdc-rwd .jdc-main-solution{margin-top:0;height:auto;background-color:#252b3a;background-image:none!important}.jdc-rwd .jdc-solution-item-content{padding-top:15px}.jdc-rwd .jdc-solution-slider-content{padding:0 10px}.jdc-rwd .jdc-solution-slider-content .jdc-solution-wrap{padding-bottom:10px;height:auto}.jdc-rwd .jdc-solution-slider-content .jdc-btn-more{margin-top:-10px}.jdc-rwd .jdc-solution-slider-content .jdc-solution-title{font-size:16px}.jdc-rwd .jdc-solution-slider-content .jdc-solution-title em{font-size:18px}.jdc-rwd .jdc-solution-slider-content .jdc-solution-des{font-size:12px;line-height:20px;margin-top:5px;color:#fff;opacity:.8;max-height:60px;overflow:hidden}.jdc-rwd .jdc-solution-slider-content .jdc-solution-btn{position:absolute;left:0;top:0;margin-top:0;width:100%;height:100%;opacity:0;filter:alpha(opacity=0);-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.jdc-rwd .jdc-solution-slider-content .jdc-solution-btn:hover{opacity:0;filter:alpha(opacity=0)}.jdc-rwd .jdc-solution-slider-content .jdc-solution-item{height:155px;opacity:1;filter:alpha(opacity=100);position:relative;z-index:1;-webkit-transition:all .2s cubic-bezier(0.4,0,.2,1);transition:all .2s cubic-bezier(0.4,0,.2,1)}.jdc-rwd .jdc-solution-slider-content .jdc-solution-item+.jdc-solution-item{margin-top:2px}.jdc-rwd .jdc-solution-slider-content .jdc-solution-text-wrap{float:none;padding-right:0;text-align:center;width:auto}.jdc-rwd .m-solution-wrap{display:block}}
</style>


