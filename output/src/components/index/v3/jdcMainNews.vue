<template>
  <div class="jdc-main-news-wrap">
    <div class="w">
      <div class="jdc-main-hd">
        <h3 class="jdc-main-title">{{floorItem.name}}</h3>
        <p class="jdc-main-des" v-if="floorItem.description">{{floorItem.description}}</p>
      </div>
    </div>
    <div class="jdc-main-bd">
      <div class="jdc-main-news w">
        <div class="row">
          <div class="col-4 col-md-4 col-sm-4 col-xs-12"
            v-for="(item,index) in floorItem.floorCatalogList.slice(0,3)" :key="index">
            <div class="jdc-main-news-item">
              <a
               @click="gaEventTrigger('BlackBoardSec','HomePage|keycount|BlackBoardSec|HomePage_BlackBoardSec_' + item.id)" 
               :clstag="'HomePage|keycount|BlackBoardSec|HomePage_BlackBoardSec_' + item.id" 
               :data-ga="'BlackBoardSec_'+item.name" 
               :href="item.buttonUrl" target="_blank">
                <dl class="item-text">
                  <dt :title="item.name">{{item.name}}</dt>
                  <dd class="item-date">{{item.iconClass}}</dd>
                  <dd class="item-txt2">{{item.description}}</dd>
                </dl>
                <div class="item-tag">{{item.buttonTitle}}</div>
              </a></div>
          </div>
        </div>

        <div class="jdc-main-more-btn">
          <a
            href="/news/list"
            target="_blank"
            class="jdc-btn jdc-btn-ghost jdc-bg hidden-xs"
            @click="gaEventTrigger('BlackBoardSec','HomePage|keycount|BlackBoardSec|HomePage_BlackBoardSec_More')" 
            :clstag="`HomePage|keycount|BlackBoardSec|HomePage_BlackBoardSec_More`"
          ><span class="jdc-btn-txt">{{$t('common.more')}}</span></a> 
          <a
            href="/news/list"
            class="jdc-btn-more jdc-link-more"
            @click="gaEventTrigger('BlackBoardSec','HomePage|keycount|BlackBoardSec|HomePage_BlackBoardSec_More')" 
            :clstag="`HomePage|keycount|BlackBoardSec|HomePage_BlackBoardSec_More`" 
          >{{$t('common.more')}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['floorItem'],
}
</script>

<style>
/* @import '//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/jdc-main-news-v2/jdc-main-news-v2.css' */
.jdc-main-news-wrap{margin-top:60px;padding-top:70px;position:relative;background:url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/jdc-main-news-v2/i/bg-news.png) no-repeat center 0 #f6f8ff;background-size:cover}.jdc-main-news{max-width:1200px}.jdc-main-news .row{padding:20px 0 40px;margin-left:-30px}.jdc-main-news .col-4{padding-left:30px}.jdc-main-news-item{height:320px;position:relative;background:#fff;overflow:hidden;-webkit-transition:all .25s ease;-moz-transition:all .25s ease;transition:all .25s ease;border-radius:4px}.jdc-main-news-item:hover{-webkit-box-shadow:0 6px 10px 0 rgba(20,34,67,.1);-moz-box-shadow:0 6px 10px 0 rgba(20,34,67,.1);box-shadow:0 6px 10px 0 rgba(20,34,67,.1)}.jdc-main-news-item a{display:block;padding:35px 25px}.jdc-main-news-item .item-date{font-size:12px;color:#666;line-height:18px;margin-top:12px}.jdc-main-news-item .item-text{font-size:14px;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.jdc-main-news-item .item-text dt{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;height:60px;line-height:30px;font-size:20px;color:#3171ff;overflow:hidden;word-wrap:normal;text-overflow:ellipsis}.jdc-main-news-item .item-text dd.item-txt2{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;margin-top:12px;height:105px;color:#666;line-height:26px;text-align:left}.jdc-main-news-item .item-tag{margin-top:15px;display:inline-block;box-sizing:border-box;font-size:12px;min-width:50px;max-width:180px;height:24px;line-height:22px;border:1px solid #3171ff;color:#3171ff;-webkit-border-radius:15px;-moz-border-radius:15px;border-radius:15px;text-align:center;padding:0 15px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.jdc-main-news-btn{padding-bottom:40px;text-align:center}.jdc-main-news .jdc-btn-txt{background:#f6f8ff}@media (max-width:768px){.jdc-rwd .jdc-main-news-wrap{background:url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/jdc-main-news-v2/i/bg-news-m.png) no-repeat center 0 #f6f8ff;background-size:contain;margin-top:20px;padding-top:10px}.jdc-rwd .jdc-main-news{max-width:1200px}.jdc-rwd .jdc-main-news .row{padding:0;margin-left:0}.jdc-rwd .jdc-main-news .col-4{padding:0 10px;margin-bottom:0}.jdc-rwd .jdc-main-news .col-4:nth-child(n+2){display:none}.jdc-rwd .jdc-main-news .col-4:last-child{margin-bottom:0}.jdc-rwd .jdc-main-news .jdc-main-more-btn{padding-bottom:0}.jdc-rwd .jdc-main-news-item{height:auto}.jdc-rwd .jdc-main-news-item a{padding:25px 20px 20px}.jdc-rwd .jdc-main-news-item .item-text{font-size:12px;position:relative}.jdc-rwd .jdc-main-news-item .item-text dt{height:auto;line-height:26px;font-weight:400;font-size:18px}.jdc-rwd .jdc-main-news-item .item-text dd.item-txt2{margin-top:5px;height:auto;-webkit-line-clamp:initial}}
</style>
