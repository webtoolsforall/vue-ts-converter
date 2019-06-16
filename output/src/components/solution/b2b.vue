<template>

  <div>
    <div class="b2b-banner">
      <div class="b2b-box">
        <h2 class="b2b-bh2">JCMall（云贸）</h2>
        <h3 class="b2b-bh3">垂直行业大宗交易和批发贸易为基础模型的交易平台</h3>
        <p class="b2b-bp">支持多商家入驻模式，支持不同业务场景的批发销售方式，<br>并且提供完善的订单流程和逆向退款流程</p>
        <p class="b2b-bp2">致电 400-615-1212 联系商业顾问</p>
        <a @click='gaEventTrigger("SectionBannerSec","Solution|keycount|SectionBannerSec|Solution_JCMall_FreeTrial")'
           data-ga="SectionBannerSec_免费试用 JCMall" href="//book.jdcloud.com/opentenant/apply" target="_blank"
           class="b2b-blink" :clstag="`Solution|keycount|MiddleContentSec|Solution_JCMall_FreeTrial`">免费试用 JCMall</a>
        <a @click='gaEventTrigger("SectionBannerSec","Solution|keycount|SectionBannerSec|Solution_JCMall_MyJCMall")'
           :clstag="`Solution|keycount|SectionBannerSec|Solution_JCMall_MyJCMall`"
           data-ga="SectionBannerSec_前往我的JCMall" href="//book.jdcloud.com/jcuser/autoLoginPlatform" target="_blank"
           class="b2b-blink-v1">前往我的JCMall</a>
      </div>
    </div>

    <div class="m-main mod_partner b2b-solution">
      <div class="w">
        <div class="m-main-hd">
          <h3>B2B解决方案</h3>
          <div class="line"></div>
        </div>
        <p class="weilian-p">从商家入驻到商品销售，全流程线上化处理，还可针对不同商品设置折扣比例，电商系统支持多种订单类型和支付通道。</p>
      </div>
    </div>

    <div class="m-main b2b-application">
      <div class="w">
        <div class="m-main-hd">
          <h3>应用场景</h3>
          <div class="line"></div>
        </div>
        <div class="m-main-bd">
          <ul>
            <li class="ba-li1">
              <h4>专业市场/批发市场线上化</h4>
              <p>面向专业批发市场或商贸城提供以交易为核心的采购、分销、服务为一体的综合电商服务平台，打造线上品牌，实现线上线下的融合。</p>
            </li>
            <li class="ba-li2">
              <h4>大宗商品交易服务平台</h4>
              <p>通过采用供应链一体化的模式构建大宗商品现货市场的电子交易平台，优化产业供应链，提高企业服务能力和盈利能力。</p>
            </li>
            <li class="ba-li3">
              <h4>垂直采购平台</h4>
              <p>帮助企业构建一站式线上采购服务平台，从传统的采购模式升级到供应商可管控，产品质量有保障，价格更透明的阳光高效的互联网采购模式，提升企业运营效率。</p>
            </li>
            <li class="ba-li4">
              <h4>垂直分销平台</h4>
              <p>帮助品牌企业建立分销服务平台，以交易为核心，围绕下游渠道商、经销商、门店提供线上分销解决方案，提高管理效率和服务水平。</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="m-main model-contact">
      <div class="w">
        <div class="m-main-hd">
          <h3>联系我们</h3>
          <div class="line"></div>
        </div>
        <div class="m-main-bd">
          <div class="mod_contact_wrap_new">
            <ul class="mod_contact_list">
              <li class="mod_cl_item mod_cl_item_1" clstag="pageclick|keycount|jcloud_201602171|67">
                <div class="mod_cl_item_icon">&#xe656;</div>
                <p><strong>邮箱</strong>
                  <a @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_JCMall_Mail")'
                     :clstag="`Solution|keycount|MiddleContentSec|Solution_JCMall_Mail`"
                     data-ga="MiddleContentSec_邮箱" href="mailto:jdcloud@jd.com">jdcloud@jd.com</a>
                </p>
              </li>
              <li class="mod_cl_item mod_cl_item_2">
                <div class="mod_cl_item_icon">&#xe657;</div>
                <p><strong>联系电话</strong>
                  <a @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_JCMall_Telephone")'
                     :clstag="`Solution|keycount|MiddleContentSec|Solution_JCMall_Telephone`"
                     data-ga="MiddleContentSec_联系电话" href="tel:4006151212">4006151212</a></p>
              </li>
              <li class="mod_cl_item mcl_item_3" clstag="pageclick|keycount|jcloud_201602171|68">
                <div class="mod_cl_item_icon">&#xe624;</div>
                <p><strong>官方地址</strong>
                  <a @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_JCMall_Website")'
                     :clstag="`Solution|keycount|MiddleContentSec|Solution_JCMall_Website`"
                     data-ga="MiddleContentSec_官方地址" href="//www.jdcloud.com" target="_blank">www.jdcloud.com</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<style>
  /*  @import 'http://static-portal.jdcloud.com/jcloud/jc/1.1.0/widget/jcmall/jcmall.css';
    @import 'http://static-portal.jdcloud.com/jcloud/jc/1.1.0/widget/contact/contact.css';*/
  /* jcloud-jc/1.0.0 jcmall.css md5:0734203117f551f00496a3c6aff4c7f8 */
  .jc_hd {
    background: #222
  }

  .b2b-banner {
    background: url(//static-portal.jdcloud.com/jcloud/jc/1.1.0/widget/jcmall/i/jcmall_banner.jpg) center center no-repeat #bed9f6;
    height: 500px
  }

  .b2b-box {
    width: 1200px;
    margin: auto
  }

  .b2b-bh2 {
    font-size: 40px;
    color: #4a4b4f;
    padding: 115px 0 0 40px
  }

  .b2b-bh3 {
    font-size: 20px;
    color: #000;
    padding: 10px 0 20px 40px
  }

  .b2b-bp {
    font-size: 12px;
    color: #4a4b4f;
    padding: 0 0 10px 40px;
    line-height: 20px
  }

  .b2b-bp2 {
    font-size: 14px;
    color: #178ede;
    padding: 0 0 15px 40px
  }

  .b2b-blink {
    font-size: 16px;
    color: #FFF;
    width: 176px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #31c1f9;
    display: inline-block;
    *display: inline;
    *zoom: 1;
    margin: 0 0 0 40px;
    vertical-align: top
  }

  .b2b-blink:hover {
    color: #fff;
    background: #2cade0
  }

  .b2b-blink-v1 {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    vertical-align: top;
    margin-left: 20px;
    width: 174px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    border: 1px solid #31c1f9;
    color: #31c1f9;
    font-size: 16px
  }

  .b2b-blink-v1:hover {
    background: #fff;
    background: rgba(255, 255, 255, .3)
  }

  .b2b-solution {
    background: #fbfcfe url(//static-portal.jdcloud.com/jcloud/jc/1.1.0/widget/jcmall/i/b2b-solution.jpg) center bottom no-repeat;
    padding: 0 0 125px
  }

  .b2b-solution .weilian-p {
    padding-top: 30px;
    text-align: center;
    color: #000;
    font-size: 14px;
    line-height: 14px
  }

  .product-intro {
    height: 753px;
    background: #f6f6f6 url(//static-portal.jdcloud.com/jcloud/jc/1.1.0/widget/jcmall/i/product-intro.png) center 0 no-repeat
  }

  .product-intro .pi-bd {
    text-align: center;
    padding: 0 60px;
    margin-top: 50px
  }

  .product-intro .pi-bd dl {
    float: left;
    width: 280px;
    height: 400px;
    margin: 0 40px;
    opacity: .9;
    filter: alpha(opacity=90);
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    transition: all .3s
  }

  .product-intro .pi-bd dl:hover {
    opacity: 1;
    filter: alpha(opacity=100);
    -webkit-box-shadow: 0 0 20px 0 rgba(0, 0, 0, .3);
    -moz-box-shadow: 0 0 20px 0 rgba(0, 0, 0, .3);
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, .3)
  }

  .product-intro .pi-bd dt {
    color: #fff;
    font-size: 22px;
    height: 50px;
    line-height: 50px
  }

  .product-intro .pi-bd dd {
    background: #fff;
    width: 260px;
    height: 340px;
    margin: 0 auto;
    overflow: hidden;
    font-size: 14px
  }

  .product-intro .pi-bd li {
    margin: 16px 0;
    line-height: 16px
  }

  .product-intro .pi-bd dl.ver {
    background: #00b9ff
  }

  .product-intro .pi-bd dl.ver2 {
    background: #fde145
  }

  .product-intro .pi-bd dl.ver3 {
    background: #ff6b58
  }

  .product-intro .pi-ft {
    text-align: center
  }

  .product-intro .pi-ft a {
    margin-top: 65px
  }

  .color1 {
    color: #00b7ff
  }

  .color2 {
    color: #ff8a00
  }

  .color3 {
    color: #f50;
    font-size: 16px
  }

  .b2b-application ul {
    overflow: hidden;
    padding-bottom: 65px
  }

  .b2b-application li {
    float: left;
    margin-right: 20px;
    width: 285px;
    height: 425px;
    text-align: center
  }

  .b2b-application li h4 {
    padding-top: 60px;
    padding-bottom: 30px;
    font-size: 20px
  }

  .b2b-application li p {
    margin: 0 20px;
    line-height: 24px;
    font-size: 12px;
    color: #333
  }

  .b2b-application .ba-li1 {
    background: #edffd9 url(//static-portal.jdcloud.com/jcloud/jc/1.1.0/widget/jcmall/i/ba_bg1.png) center 257px no-repeat
  }

  .b2b-application .ba-li1 h4 {
    color: #00bf00
  }

  .b2b-application .ba-li2 {
    background: #e5f8f8 url(//static-portal.jdcloud.com/jcloud/jc/1.1.0/widget/jcmall/i/ba_bg2.png) center 261px no-repeat
  }

  .b2b-application .ba-li2 h4 {
    color: #00bdbe
  }

  .b2b-application .ba-li3 {
    background: #ffedee url(//static-portal.jdcloud.com/jcloud/jc/1.1.0/widget/jcmall/i/ba_bg3.png) center 259px no-repeat
  }

  .b2b-application .ba-li3 h4 {
    color: #ff535b
  }

  .b2b-application .ba-li4 {
    margin-right: 0;
    background: #d9f1ff url(//static-portal.jdcloud.com/jcloud/jc/1.1.0/widget/jcmall/i/ba_bg4.png) center 247px no-repeat
  }

  .b2b-application .ba-li4 h4 {
    color: #1973c2
  }

  /* jcloud-jc/1.0.0 contact.css md5:4688012b4e3b1914f5110823f244cea0 */
  .model-contact {
    background: #31c1f9 url(//static-portal.jdcloud.com/jcloud/jc/1.1.0/widget/contact/i/mod_contact_bg.png) no-repeat bottom center
  }

  .model-contact .m-main-hd h3 {
    color: #fff
  }

  .model-contact .m-main-hd .line {
    background: #fff
  }

  .mod_contact_wrap_new {
    padding-bottom: 65px
  }

  .mod_contact_list {
    overflow: auto;
    zoom: 1
  }

  .mod_cl_item {
    float: left;
    width: 400px;
    color: #fff;
    text-align: center
  }

  .mod_cl_item_icon {
    width: 100px;
    height: 100px;
    line-height: 100px;
    font-size: 60px;
    -moz-border-radius: 100px;
    border-radius: 100px;
    border: 1px solid #fff;
    background: #31c1f9;
    margin: 0 auto 15px
  }

  .mod_cl_item p strong {
    display: block;
    font-size: 18px;
    line-height: 28px
  }

  .mod_cl_item a {
    opacity: .6;
    line-height: 1.5;
    color: #fff;
    font-size: 14px
  }

  .mod_cl_item a:hover {
    color: #fff
  }

  .mod_cl_item_icon {
    width: 102px \9;
    height: 102px \9;
    border: none \9;
    background: url(//static-portal.jdcloud.com/jcloud/jc/1.1.0/widget/contact/i/mod_contact_degrade_aee1c751.png) no-repeat top center \9
  }

</style>
