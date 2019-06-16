<template>
  <div class="jdc-main-service-wrap w">
    <div class="jdc-main-hd">
      <h3 class="jdc-main-title">{{floorItem.name}}</h3>
      <p class="jdc-main-des" v-if="floorItem.description">{{floorItem.description}}</p>
    </div>
    <div class="jdc-main-bd ">
      <div class="jdc-main-service">
        <div class="jdc-main-service-list">
          <div class="row">
            <div class="col-2 col-xs-4 jdc-main-service-item"
              v-for="(item,index) in floorItem.floorCatalogList" :key="index">
              <a
                class="service-icon"
                :href="item.webUrl"
                @click="gaEventTrigger('MarketPlaceSec', 'HomePage|keycount|MarketPlaceSec|HomePage_Services_' + item.id)" 
                :data-ga="'MarketPlaceSec_'+item.name" 
                :clstag="'HomePage|keycount|MarketPlaceSec|HomePage_Services_' + item.id" 
                target="_blank">
                <img :src="item.imageUrl.split(',')[0]" width="54" height="54" alt="">
              </a>
              <dl>
                <dt>
                  <a
                    @click="gaEventTrigger('MarketPlaceSec','HomePage|keycount|MarketPlaceSec|HomePage_Services_' + item.id)" 
                    :data-ga="'MarketPlaceSec_'+item.name" 
                    :href="item.webUrl" 
                    :clstag="'HomePage|keycount|MarketPlaceSec|HomePage_Services_' + item.id" 
                    target="_blank">{{item.name}}</a>
                </dt>
                <dd v-for="(it,ind) in item.childList.slice(0,3)" :key="ind">
                  <a 
                    @click="gaEventTrigger('MarketPlaceSec','HomePage|keycount|MarketPlaceSec|HomePage_Services_' + it.id)" 
                    :data-ga="'MarketPlaceSec_'+it.name" 
                    target="_blank" 
                    :href="it.webUrl" 
                    :clstag="'HomePage|keycount|MarketPlaceSec|HomePage_Services_' + it.id" 
                  >{{it.name}}</a>
                </dd>
              </dl>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ['floorItem'],
  mounted() {},
  methods: {}
};
</script>

<style>
/* @import "//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/jdc-main-service-v2/jdc-main-service-v2.css"; */
.jdc-main-service-wrap{max-width:1200px;margin:0 auto}.jdc-main-service .col-6{height:535px;overflow:hidden}.jdc-main-service-item{border:1px solid #e7e9ef;border-right:0;height:220px;text-align:center;overflow:hidden}.jdc-main-service-item:last-child{border-right:1px solid #e7e9ef}.jdc-main-service-item:hover{background:#3171ff}.jdc-main-service-item:hover a{color:#fff}.jdc-main-service-item:hover .service-icon{display:none;margin-top:0}.jdc-main-service-item:hover dl{margin-top:40px}.jdc-main-service-item:hover dd a{opacity:.9;filter:alpha(opacity=90)}.jdc-main-service-item a{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#333;font-size:14px}.jdc-main-service-item .service-icon{display:block;margin-top:50px;line-height:64px}.jdc-main-service-item .service-icon i{vertical-align:top;font-size:52px}.jdc-main-service-item dl{padding:0 5px;margin-top:25px;line-height:20px}.jdc-main-service-item dl a:after{content:'';position:absolute;bottom:0;left:0;right:0;height:1px;background:#fff;-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);-webkit-transition:all .15s;transition:all .15s;z-index:1}.jdc-main-service-item dl a:hover:after{-ms-transform:scaleX(1);-webkit-transform:scaleX(1);transform:scaleX(1)}.jdc-main-service-item dt a{position:relative;display:inline-block;line-height:22px;max-width:100%;font-size:18px;margin-bottom:10px}.jdc-main-service-item dt a:after{opacity:.9;filter:alpha(opacity=90)}.jdc-main-service-item dd a{position:relative;margin-top:15px;display:inline-block;opacity:0;filter:alpha(opacity=0)}@media (max-width:768px){.jdc-rwd .jdc-main-service{padding:0 10px}.jdc-rwd .jdc-main-service .col-6{height:auto}.jdc-rwd .jdc-main-service-list .row{margin-left:0}.jdc-rwd .jdc-main-service-item{padding:20px 0 32px;height:auto;margin-top:-1px}.jdc-rwd .jdc-main-service-item:nth-child(3){border-right:1px solid #e7e9ef}.jdc-rwd .jdc-main-service-item .service-icon{margin-top:0}.jdc-rwd .jdc-main-service-item:hover{background:#fff}.jdc-rwd .jdc-main-service-item:hover .service-icon{margin-top:0;display:block}.jdc-rwd .jdc-main-service-item:hover a{color:#333}.jdc-rwd .jdc-main-service-item img{width:40px!important;height:40px!important}.jdc-rwd .jdc-main-service-item dl{margin-top:0}.jdc-rwd .jdc-main-service-item dt a{font-size:14px}.jdc-rwd .jdc-main-service-item dd{display:none}}
</style>


