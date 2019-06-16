<template>
  <div>
    <div class="m-common-wrap m-common-error">
        <div class="m-common-img"><h3>404</h3></div>
        <div class="m-common-content">
            <div class="f-cb">
                <h4 class="m-common-title f-fl">{{$t('error404.error_01')}}</h4>
                <a   @click="gaEventTrigger('MiddleContentSec','error|keycount|MiddleContentSec|go_index_1')" clstag="error|keycount|MiddleContentSec|go_index_1" class="m-common-btn f-fl" href="//www.jdcloud.com/">{{$t('error404.error_02')}}</a>
            </div>
            <p class="m-common-desciption">{{$t('error404.error_03')}}</p>
            <p class="m-common-link">{{$t('error404.error_04')}} 
            <a   @click="gaEventTrigger('MiddleContentSec','error|keycount|MiddleContentSec|go_help_faq_1')" clstag="error|keycount|MiddleContentSec|go_help_faq_1" href="//docs.jdcloud.com/">{{$t('error404.error_05')}}</a></p>
        </div>
        <!-- <v-btm-banner></v-btm-banner> -->
    </div>

  </div>
</template>

<script>
import VBtmBanner from "../common/btmBanner.vue"

export default {
  components:{
    VBtmBanner
  },
  data() {
    return {
      timeL: 3
    };
  },
  mounted() {
    this.$store.commit('hideLangTipEvt',false)
    /*  var _self = this;
    setInterval(function() {
      _self.timeL = _self.timeL - 1;
      if (_self.timeL == 0) {
        window.location.href = "//www.jdcloud.com";
      }
    }, 1000); */
    // 删除定时跳转首页
  }
};
</script>

<style>
/* RWD start */
.m-common-error .m-common-img {
  background: url(//static-portal.jdcloud.com/jcloud/jc/2.0.0/widget/m-error/i/404bg.png)
    center no-repeat;
}
</style>
