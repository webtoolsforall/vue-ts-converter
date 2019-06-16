<template>
  <div class="jdc-pro-list">
    <div class="jdc-main-hd">
      <h3 class="jdc-main-title">{{floorItem.name}}</h3>
      <p class="jdc-main-des" v-if="floorItem.description">{{floorItem.description}}</p>
    </div>
    <div class="jdc-main-bd">
      <div class="pro-list-wrap">

        <template v-for="(proFloorUl,index) in serviceData">
          <div class="pro-list-hd hidden-xs" :key="index + '2'">
            <ul class="f-cb">
              <li class="pro-list-tab" :class="{'active':curProductId==proFloorLi.sort}" 
                :clstag="`HomePage|keycount|ProductSec|HomePage_Products_${proFloorLi.id}`" 
                @click="toggleProShow(proFloorLi.id,proFloorLi.sort,proFloorLi.buttonUrl)" 
                v-for="(proFloorLi,firInd) in proFloorUl" :key="firInd + '3'">
                <a href="javascript:;">
                  <div class="pro-list-icon">
                    <img :src="proFloorLi.imageUrl.split(',')[0]">
                    <img :src="proFloorLi.imageUrl.split(',')[1]" class="img-active">
                  </div>
                  <div class="pro-list-name">{{proFloorLi.name}}</div>
                </a>
              </li>
            </ul>
          </div>
          <div class="pro-list-container" :key="index + '1'">
            <div
              class="pro-list-sub" 
              :class="{'on m-active':curProductId===proFloorLi.sort}"
              v-for="(proFloorLi,secInd) in proFloorUl" :key="secInd + '4'">
              <div class="pro-list-hd-m jdc-common-arr">
                <div class="pro-list-icon">
                  <img :src="proFloorLi.imageUrl.split(',')[0]">
                  <img :src="proFloorLi.imageUrl.split(',')[1]" class="img-active">
                </div>
                {{proFloorLi.name}}
              </div>
              <div class="pro-list-bd f-cb">
                <div class="pro-list-item"
                  v-for="(proFloorItem,thrInd) in proFloorLi.childList" :key="thrInd + '5'">
                  <a
                    target="_blank" class="pro-list-link"
                    :href="proFloorItem.webUrl" 
                    @click="gaEventTrigger('ProductSec',`HomePage|keycount|ProductSec|HomePage_ProductsItem_${proFloorItem.id}`)"
                    :clstag="`HomePage|keycount|ProductSec|HomePage_ProductsItem_${proFloorItem.id}`">
                    <dl>
                      <dt>{{proFloorItem.name}}
                        <!-- <em class="pro-tag pro-tag-red">Hot</em> -->
                      </dt>
                      <dd class="f-toe" :title="proFloorItem.description">{{proFloorItem.description}}</dd>
                    </dl>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </template>

        <div class="pro-list-more">
          <a :href="curButtonUrl"
              :clstag="'HomePage|keycount|ProductSec|HomePage_Products_' + curButtonUrl.split('=')[1]"
              @click="gaEventTrigger('ProductSec','HomePage|keycount|ProductSec|HomePage_Products_' + curButtonUrl.split('=')[1])"
              class="jdc-btn jdc-btn-ghost jdc-bg hidden-xs">
              <span class="jdc-btn-txt"> {{$t('common.floor_01')}}</span>
            </a>
            <a :href="curButtonUrl"
             :clstag="'HomePage|keycount|ProductSec|HomePage_Products_' + curButtonUrl.split('=')[1]"
              @click="gaEventTrigger('ProductSec','HomePage|keycount|ProductSec|HomePage_Products_' + curButtonUrl.split('=')[1])"
            class="jdc-btn-more jdc-link-more">
            {{$t('common.floor_01')}}</a>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curProductId: 1,
      curButtonUrl: '//www.jdcloud.com/productsOverView?tab=0',
    }
  },
  props: ['floorItem'],
  computed: {
    serviceData () {
      let arr = []
      if (this.floorItem.floorCatalogList) {
        let _proList = this.floorItem.floorCatalogList
        let _arrSpliceLen = Math.ceil(_proList.length/5)
        for (let i = 0; i < _arrSpliceLen; i++) {
          arr.push(_proList.slice(i*5,(i+1)*5))
        }
      }
      // console.log('serviceData====', arr)
      return arr
    }
  },
  mounted() {
    this.initFun()
  },
  methods: {
    toggleProShow: function(id,sort,btnURL) {
        this.gaEventTrigger(
        "ProductSec",
        "HomePage|keycount|ProductSec|HomePage_Products_"+id
      );
      this.curProductId = sort
      this.curButtonUrl = btnURL
      // console.log('toggleProShow curProductId=',this.curProductId, 'this.curButtonUrl=', this.curButtonUrl)
    },
    initFun() {
      // $('.pro-list-sub').eq(0).addClass("m-active").addClass("on")
      var body = $("body,html")
      $(".pro-list-tab").click(function() {
        var self = $(this),
          selfIndex = $(this).index(),
          _parent = $(this).parents(".pro-list-hd");
        if (!self.hasClass("active")) {
          $(".pro-list-tab").removeClass("active");
          self.addClass("active");
          $(".pro-list-sub").removeClass("on");
          _parent
            .next()
            .find(".pro-list-sub")
            .eq(selfIndex)
            .addClass("on");
        }
      });

      $(".pro-list-hd-m").click(function() {
        var self = $(this),
          _parent = $(this).parent();
        if (!_parent.hasClass("m-active")) {
          $(".pro-list-sub").removeClass("m-active");
          _parent.addClass("m-active");
          var top = self.offset().top;
          body.animate(
            {
              scrollTop: top
            },
            200
          );
        } else {
          _parent.removeClass("m-active");
        }
      });
    }
  }
};
</script>


<style>
/* @import "//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/jdc-main-product-v2/jdc-main-product-v2.css"; */
.pro-list-hd{max-width:1200px;margin:0 auto}.pro-list-tab{position:relative;float:left;width:20%;text-align:center}.pro-list-tab a{display:block;padding:20px 10px 0;height:110px;box-sizing:border-box;color:#333;position:relative}.pro-list-tab a:hover,.pro-list-tab a:hover .pro-list-icon i{color:#3171ff}.pro-list-tab a:hover .pro-list-icon img{display:none}.pro-list-tab a:hover .pro-list-icon .img-active{display:block}.pro-list-tab a:after{content:'';position:absolute;left:0;bottom:0;width:100%;height:2px;background:#3171ff;background:-moz-linear-gradient(80deg,#3171ff 0,#a14faf 100%);background:-webkit-linear-gradient(80deg,#3171ff 0,#a14faf 100%);background:linear-gradient(80deg,#3171ff 0,#a14faf 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#3171ff', endColorstr='#a14faf', GradientType=1);-webkit-transform:scaleX(0);-ms-transform:scale(0);transform:scaleX(0);-webkit-transition:all .15s;transition:all .15s;z-index:1}.pro-list-tab a .pro-list-icon{margin:0 auto;width:42px;height:42px;line-height:42px}.pro-list-tab a .pro-list-icon i{font-size:42px;color:#666}.pro-list-tab a .pro-list-icon img{max-width:100%;max-height:100%;display:block}.pro-list-tab a .pro-list-icon .img-active{display:none}.pro-list-tab a .pro-list-name{margin-top:10px;font-size:16px;overflow:hidden;word-wrap:normal;white-space:nowrap;text-overflow:ellipsis}.pro-list-tab.active a,.pro-list-tab.active a .pro-list-icon i{color:#3171ff}.pro-list-tab.active a .pro-list-icon img{display:none}.pro-list-tab.active a .pro-list-icon .img-active{display:block}.pro-list-tab.active a:after{-ms-transform:scale(1);-webkit-transform:scaleX(1);transform:scaleX(1)}.i-triangle{display:none;position:absolute;left:50%;bottom:0;width:0;height:0;margin-left:-4px;border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:6px solid #3171ff}.pro-list-container{background:#f6f8ff;overflow:hidden;box-shadow:inset 0 3px 5px 0 #eaefff}.pro-list-sub{overflow:hidden;max-width:1200px;margin:0 auto}.pro-list-hd-m{display:none}.pro-list-bd{display:none;padding:30px 0 10px}.on .pro-list-bd{display:block}.pro-list-more{padding-top:30px;text-align:center}.pro-list-item{float:left;width:33.33%;padding:0 10px 20px 0;box-sizing:border-box;position:relative}.pro-list-item .pro-list-link{padding:15px 30px 0;display:block;height:65px;transition:all .2s ease-out}.pro-list-item .pro-list-link:hover{background:#fff;box-shadow:2.5px 4.5px 5px 0 rgba(0,0,0,.03)}.pro-list-item .pro-list-link:hover dt{color:#3171ff}.pro-list-item .pro-list-link dt{font-size:16px;overflow:hidden;word-wrap:normal;white-space:nowrap;text-overflow:ellipsis}.pro-list-item .pro-list-link dd{margin-top:8px;font-size:14px;color:#999;overflow:hidden;word-wrap:normal;white-space:nowrap;text-overflow:ellipsis}.pro-list-item .pro-list-btn{display:block;position:absolute;bottom:20px;right:20px;width:70px;height:18px;line-height:18px;text-align:center;border:1px solid #3171ff;color:#3171ff;font-size:12px;-webkit-transition:all .2s ease-out;-moz-transition:all .2s ease-out;-ms-transition:all .2s ease-out;-o-transition:all .2s ease-out;transition:all .2s ease-out}.pro-list-item .pro-list-btn:hover{background:#3171ff;color:#fff}.pro-tag{display:inline-block;margin-left:10px;font-size:12px;color:#fff;height:14px;line-height:14px;padding:0 3px;font-weight:400;border-radius:2px;-webkit-border-radius:2px;-moz-border-radius:2px;vertical-align:1px}.pro-tag-red{background:#ff0213}.pro-tag-orange{background:#fa7500}.pro-tag-gray{background:#999}@media (max-width:768px){.jdc-rwd .pro-list-wrap{border-top:1px solid #ededed}.jdc-rwd .pro-list-container{background:#fff;box-shadow:none}.jdc-rwd .pro-list-more{padding-top:0}.jdc-rwd .pro-list-hd-m{display:block;position:relative;height:60px;line-height:60px;padding:0 50px 0 20px;color:#333;border-bottom:1px solid #ededed;cursor:pointer;font-size:16px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.jdc-rwd .pro-list-hd-m .pro-list-icon{display:inline-block;width:26px;height:26px;margin-right:8px;vertical-align:-7px}.jdc-rwd .pro-list-hd-m .pro-list-icon img{display:block}.jdc-rwd .pro-list-hd-m .pro-list-icon img.img-active{display:none}.jdc-rwd .pro-list-hd-m .jdcfont{font-size:26px;margin-right:10px;vertical-align:-4px}.jdc-rwd .pro-list-bd{display:none!important;padding:15px 0;border-bottom:1px solid #ededed;background-color:#f6f8ff}.jdc-rwd .m-active .pro-list-hd-m{color:#3171ff}.jdc-rwd .m-active .pro-list-bd{display:block!important}.jdc-rwd .m-active .jdc-common-arr:after{-webkit-transform:rotate(-180deg);-ms-transform:rotate(-180deg);transform:rotate(-180deg)}.jdc-rwd .m-active .pro-list-icon img{display:none}.jdc-rwd .m-active .pro-list-icon img.img-active{display:block}.jdc-rwd .pro-list-item{float:none;width:auto;padding:0}.jdc-rwd .pro-list-item .pro-list-link{padding:10px 20px;height:auto}.jdc-rwd .pro-list-item .pro-list-link:hover{background:0 0;box-shadow:none}.jdc-rwd .pro-list-item .pro-list-link dt{font-size:14px}.jdc-rwd .pro-list-item .pro-list-link dd{margin-top:4px}}
</style>

