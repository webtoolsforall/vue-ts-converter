<template>

  <div>
    <div class="jcshop-banner">
      <div class="w">
        <h2>JCStore</h2>
        <p>
          结合京东十几年电商发展的技术能力和运营经验，基于B2C行业市场主流趋势，为品牌商、线下实体零售商、大中型制造企业提供独立的品牌商城解决方案。同时结合京东全部电商能力开放，包括运营，营销，仓储，配送，客服，售后，金融等，全方位提高品牌商城的运营能力和消费者的购物体验。</p>
        <a @click='gaEventTrigger("SectionBannerSec","Solution|keycount|SectionBannerSec|Solution_JCStore_Apply")'
           :clstag="`Solution|keycount|SectionBannerSec|Solution_JCStore_Apply`"
           data-ga="SectionBannerSec_申请试用" href="//book.jdcloud.com/jcuser/apply?productType=1" target="_blank"
           class="js-link">申请试用</a>
      </div>
    </div>

    <div class="m-main jcshop-solution">
      <div class="w">
        <div class="m-main-hd">
          <h3>解决方案</h3>
          <div class="line"></div>
        </div>
        <div class="m-main-bd">
          <ul>
            <li class="js-item1">
              <div class="jsfirst">
                <i></i>
                <div class="js-item-bottom">
                  <div class="bg"></div>
                  <h4>独立专属品牌商城</h4>
                </div>
              </div>
              <div class="jssecond">
                <div class="bg"></div>
                <div class="js-second-content">
                  <h4>独立专属品牌商城</h4>
                  <p>品牌商自主或授权运营的独立个性化品牌商城，让企业实现对自身品牌商品的高标准经营与管理，为消费者提供高标准专属服务。</p>
                </div>
              </div>
            </li>
            <li class="js-item2">
              <div class="jsfirst">
                <i></i>
                <div class="js-item-bottom">
                  <div class="bg"></div>
                  <h4>线下实体品牌店O2O</h4>
                </div>
              </div>
              <div class="jssecond">
                <div class="bg"></div>
                <div class="js-second-content">
                  <h4>线下实体品牌店O2O</h4>
                  <p>线下实体店的线上专属电商商城，实现实体店线上线下业务整合，满足消费者线上线下一站式购物需求，提升用户体验。
                  </p>
                </div>
              </div>
            </li>
            <li class="js-item3">
              <div class="jsfirst">
                <i></i>
                <div class="js-item-bottom">
                  <div class="bg"></div>
                  <h4>C2M定制化生产</h4>
                </div>
              </div>
              <div class="jssecond">
                <div class="bg"></div>
                <div class="js-second-content">
                  <h4>C2M定制化生产</h4>
                  <p>大中型制造企业专属商城，客户需求直接反馈至工厂，省去所有中间渠道，实现按需定制化生产，与核心客户更紧密连接。</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="m-main jcshop-service">
      <div class="w">
        <div class="m-main-hd">
          <h3>产品架构</h3>
          <div class="line"></div>
        </div>
        <div class="m-main-bd">
          <div class="rect1"></div>
          <div class="rect2"></div>
          <div class="rect3"></div>
          <div class="js-bg"></div>
        </div>
      </div>
    </div>

    <div class="m-main valueAdded-service">
      <div class="w">
        <div class="m-main-hd">
          <h3>增值服务</h3>
          <div class="line"></div>
        </div>
        <div class="m-main-bd">
          <div class="bs_list" id="bsListBox">
            <div class="bs_item" :class="{on:activeIndex === 1}" @mouseenter="changeFocus(1)">
              <div class="bs_item_wrap">
                <div class="bs_view">
                  <div class="bs_view_main">
                    <div class="newfont bs_view_icon"></div>
                    <h4>运营</h4>
                    <p>京东商城多年运营经验整体输出，为品牌商城提供运营服务，提升运营效率。</p>
                  </div>
                </div>
                <div class="bs_dt">
                  <div class="bs_dt_main">
                    <div class="bs_dt_hd">
                      <div class="newfont bs_dt_hd_icon"></div>
                      <h4>运营</h4>
                      <p>京东商城多年运营经验整体输出，为品牌商城提供运营服务，提升运营效率。</p>
                    </div>
                    <div class="bs_dt_bd bs_dt_bd_2col">
                      <ul>
                        <li><i>&gt;</i>商城管理</li>
                        <li><i>&gt;</i>商品管理</li>
                        <li><i>&gt;</i>视觉设计</li>
                        <li><i>&gt;</i>数据分析</li>
                        <li><i>&gt;</i>运营反馈</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bs_item_line"></div>
            </div>

            <div class="bs_item" :class="{on:activeIndex === 2}" @mouseenter="changeFocus(2)">
              <div class="bs_item_wrap">
                <div class="bs_view">
                  <div class="bs_view_main">
                    <div class="newfont bs_view_icon"></div>
                    <h4>营销</h4>
                    <p>京东商城多年营销经验整体输出，为商城提供高效引流服务，精准抓取用户需求。</p>
                  </div>
                </div>
                <div class="bs_dt">
                  <div class="bs_dt_main">
                    <div class="bs_dt_hd">
                      <div class="newfont bs_dt_hd_icon"></div>
                      <h4>营销</h4>
                      <p>京东商城多年营销经验整体输出，为商城提供高效引流服务，精准抓取用户需求。</p>
                    </div>
                    <div class="bs_dt_bd bs_dt_bd_2col">
                      <ul>
                        <li><i>&gt;</i>商城推广</li>
                        <li><i>&gt;</i>整合营销</li>
                        <li><i>&gt;</i>活动营销</li>
                        <li><i>&gt;</i>会员管理</li>
                        <li><i>&gt;</i>精准营销</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bs_item_line"></div>
            </div>

            <div class="bs_item" :class="{on:activeIndex === 3}" @mouseenter="changeFocus(3)">
              <div class="bs_item_wrap">
                <div class="bs_view">
                  <div class="bs_view_main">
                    <div class="newfont bs_view_icon"></div>
                    <h4>咨询</h4>
                    <p>为企业互联网转型及电商运营提供咨询服务，帮助合作伙伴探索B2C领域商业模式，解决电商运营难题。</p>
                  </div>
                </div>
                <div class="bs_dt">
                  <div class="bs_dt_main">
                    <div class="bs_dt_hd">
                      <div class="newfont bs_dt_hd_icon"></div>
                      <h4>咨询</h4>
                      <p>为企业互联网转型及电商运营提供咨询服务，帮助合作伙伴探索B2C领域商业模式，解决电商运营难题。</p>
                    </div>
                    <div class="bs_dt_bd bs_dt_bd_2col">
                      <ul>
                        <li><i>&gt;</i>跨平台布局</li>
                        <li><i>&gt;</i>系统整合方案</li>
                        <li><i>&gt;</i>运营体系规划</li>
                        <li><i>&gt;</i>组织人员架构</li>
                        <li><i>&gt;</i>行业数据分析</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bs_item_line"></div>
            </div>

            <div class="bs_item" :class="{on:activeIndex === 4}" @mouseenter="changeFocus(4)">
              <div class="bs_item_wrap">
                <div class="bs_view">
                  <div class="bs_view_main">
                    <div class="newfont bs_view_icon"></div>
                    <h4>培训</h4>
                    <p>为合作伙伴提供产品使用培训，快速掌握JCStore电商云产品，并提供电商入门、实操、战略等系列培训。</p>
                  </div>
                </div>
                <div class="bs_dt">
                  <div class="bs_dt_main">
                    <div class="bs_dt_hd">
                      <div class="newfont bs_dt_hd_icon"></div>
                      <h4>培训</h4>
                      <p>为合作伙伴提供产品使用培训，快速掌握JCStore电商云产品，并提供电商入门、实操、战略等系列培训。</p>
                    </div>
                    <div class="bs_dt_bd bs_dt_bd_2col">
                      <ul>
                        <li><i>&gt;</i>业务流程梳理</li>
                        <li><i>&gt;</i>团队体系建设</li>
                        <li><i>&gt;</i>商城运营指导</li>
                        <li><i>&gt;</i>营销推广指导</li>
                        <li><i>&gt;</i>商城实操培训</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="m-main jcshop-application">
      <div class="w">
        <div class="m-main-hd">
          <h3>合作伙伴</h3>
          <div class="line"></div>
        </div>
        <div class="m-main-bd">
          <div class="round1"></div>
          <div class="round2"></div>
          <div class="round3"></div>
          <div class="ja-bg"></div>
          <h4>JCStore</h4>
        </div>
      </div>
    </div>


    <div class="m-main jcshop-price">
      <div class="w">
        <div class="m-main-hd">
          <h3>服务价值</h3>
          <div class="line"></div>
        </div>
        <div class="m-main-bd">
          <ul class="jp-ul">
            <li class="jp-li1">
              <i></i>
              <h4>提升品牌价值</h4>
              <div class="jp-line"></div>
              <p>建立属于品牌方独立的官方品牌商城，展开专属的品牌宣传，吸引粉丝关注，加强品牌影响力，提升宣传效果</p>
            </li>
            <li class="jp-li2">
              <i></i>
              <h4>拓展销售机会</h4>
              <div class="jp-line"></div>
              <p>在多渠道电商平台的基础上，整合线上线下销售渠道，满足消费者“随时、随地、任何方式”的多渠道购买需求</p>
            </li>
            <li class="jp-li3">
              <i></i>
              <h4>优化用户体验</h4>
              <div class="jp-line"></div>
              <p>加强客户关系管理，为消费者提供全电商流程服务。直接获取消费者反馈和需求，提升用户满意度</p>
            </li>
            <li class="jp-li4">
              <i></i>
              <h4>提高运营效率</h4>
              <div class="jp-line"></div>
              <p>品牌电商云店可有效降低企业运营的人工和设备成本，通过更优的价格，提供更好的品质服务，最大化企业利益</p>
            </li>
          </ul>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: 1
      }
    },
    methods: {
      changeFocus(index) {
        this.activeIndex = index;
      }
    }
  }
</script>

<style>
  /*@import  'http://static-portal.jdcloud.com/jcloud/jc/1.1.0/widget/jcshop/jcshop.css';
  @import  'http://static-portal.jdcloud.com/jcloud/jc/1.1.0/widget/contact/contact.css';*/

  /* jcloud-jc/1.0.0 jcshop.css md5:295ad06d3753b57830bc436ac071de8d */
  .jc_hd {
    background: #222
  }

  .jcshop-banner {
    height: 500px;
    background: url(//static-portal.jdcloud.com/jcloud/jc/1.1.0/widget/jcshop/i/jcshop_banner.jpg) center no-repeat #288dff
  }

  .jcshop-banner h2 {
    margin-left: 20px;
    padding-top: 125px;
    padding-bottom: 40px;
    line-height: 1;
    font-size: 60px;
    color: #fff;
    font-family: arial, \5b8b\4f53
  }

  .jcshop-banner p {
    margin-left: 20px;
    width: 530px;
    line-height: 30px;
    color: #fff;
    font-size: 16px
  }

  .js-link {
    display: block;
    margin-left: 20px;
    margin-top: 45px;
    width: 120px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 18px;
    color: #fff;
    border: 1px solid #fff
  }

  .js-link:hover {
    color: #3050d3;
    background: #fff
  }

  .jcshop-solution ul {
    margin-bottom: 65px;
    font-size: 0;
    overflow: hidden
  }

  .jcshop-solution li {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    position: relative;
    margin-right: 1px;
    width: 399px;
    height: 300px
  }

  .jcshop-solution li .bg {
    width: 100%;
    height: 100%;
    opacity: .85;
    filter: alpha(opacity=85)
  }

  .jcshop-solution li:hover .jsfirst {
    opacity: 0;
    filter: alpha(opacity=0)
  }

  .jcshop-solution li:hover .jssecond {
    top: 0;
    opacity: 1;
    filter: alpha(opacity=100)
  }

  .jcshop-solution li:hover .js-item-bottom {
    opacity: 0;
    filter: alpha(opacity=0)
  }

  .js-item-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px
  }

  .js-item-bottom h4 {
    position: absolute;
    top: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 22px;
    color: #fff
  }

  .jsfirst {
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
    opacity: 1;
    filter: alpha(opacity=100);
    height: 100%
  }

  .jsfirst i {
    display: block;
    margin: 85px auto 0;
    width: 85px;
    height: 85px
  }

  .jssecond {
    position: absolute;
    z-index: 2;
    top: 50px;
    opacity: 0;
    filter: alpha(opacity=0);
    width: 100%;
    height: 100%;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s
  }

  .jssecond .js-second-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff
  }

  .jssecond .js-second-content h4 {
    margin-top: 55px;
    text-align: center;
    font-size: 22px;
    line-height: 22px
  }

  .jssecond .js-second-content p {
    margin: 35px 55px 0;
    line-height: 30px;
    font-size: 16px
  }

  .js-item1 {
    background: url(//static-portal.jdcloud.com/jcloud/jc/1.1.0/widget/jcshop/i/js_solution1.jpg) center no-repeat
  }

  .js-item1 i {
    background: url(//static-portal.jdcloud.com/jcloud/jc/1.1.0/widget/jcshop/i/jcshop.png?__sprite) center no-repeat;
    background-position: 0 0
  }

  .js-item1 .bg {
    background: #28cec3
  }

  .js-item2 {
    background: url(//static-portal.jdcloud.com/jcloud/jc/1.1.0/widget/jcshop/i/js_solution2.jpg) center no-repeat
  }

  .js-item2 i {
    background: url(//static-portal.jdcloud.com/jcloud/jc/1.1.0/widget/jcshop/i/jcshop.png?__sprite) center no-repeat;
    background-position: 0 -95px
  }

  .js-item2 .bg {
    background: #00beff
  }

  .js-item3 {
    background: url(//static-portal.jdcloud.com/jcloud/jc/1.1.0/widget/jcshop/i/js_solution3.jpg) center no-repeat
  }

  .js-item3 i {
    background: url(//static-portal.jdcloud.com/jcloud/jc/1.1.0/widget/jcshop/i/jcshop.png?__sprite) center no-repeat;
    background-position: 0 -190px
  }

  .js-item3 .bg {
    background: #448aff
  }

  .jcshop-service {
    padding-bottom: 65px
  }

  .jcshop-service .m-main-bd {
    position: relative;
    height: 680px
  }

  .rect1 {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: url(//static-portal.jdcloud.com/jcloud/jc/1.1.0/widget/jcshop/i/ellipse3.png) 396px 60px no-repeat;
    animation: 1.8s ease-out 1.6s normal none infinite running show-hide
  }

  .rect2 {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    background: url(//static-portal.jdcloud.com/jcloud/jc/1.1.0/widget/jcshop/i/ellipse2.png) 486px 145px no-repeat;
    animation: 1.8s ease-out 1s normal none infinite running show-hide
  }

  .rect3 {
    position: absolute;
    z-index: 3;
    width: 100%;
    height: 100%;
    background: url(//static-portal.jdcloud.com/jcloud/jc/1.1.0/widget/jcshop/i/ellipse1.png) 544px 203px no-repeat;
    animation: 1.8s ease-out .4s normal none infinite running show-hide
  }

  .js-bg {
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 100%;
    background: url(//static-portal.jdcloud.com/jcloud/jc/1.1.0/widget/jcshop/i/jc_bg.png) center 0 no-repeat
  }

  .valueAdded-service {
    background: #eaf6ff;
    padding-bottom: 65px
  }

  .jcshop-application {
    background: #f8f8f8;
    padding-bottom: 65px
  }

  .jcshop-application .m-main-bd {
    position: relative;
    height: 541px
  }

  .jcshop-application .m-main-bd h4 {
    position: relative;
    z-index: 10;
    padding-top: 170px;
    text-align: center;
    line-height: 1;
    font-size: 38px;
    color: #fff;
    font-family: arial, \5b8b\4f53
  }

  .round1 {
    position: absolute;
    z-index: 1;
    top: 18px;
    width: 100%;
    height: 100%;
    background: url(//static-portal.jdcloud.com/jcloud/jc/1.1.0/widget/jcshop/i/ja_round1.png) center top no-repeat;
    animation: 2s ease-out 1.5s normal none infinite running show-hide-v1
  }

  .round2 {
    position: absolute;
    z-index: 2;
    top: 54px;
    width: 100%;
    height: 100%;
    background: url(//static-portal.jdcloud.com/jcloud/jc/1.1.0/widget/jcshop/i/ja_round2.png) center top no-repeat;
    animation: 2s ease-out 1s normal none infinite running show-hide-v1
  }

  .round3 {
    position: absolute;
    z-index: 3;
    top: 92px;
    width: 100%;
    height: 100%;
    background: url(//static-portal.jdcloud.com/jcloud/jc/1.1.0/widget/jcshop/i/ja_round3.png) center top no-repeat;
    animation: 2s ease-out .5s normal none infinite running show-hide-v1
  }

  .ja-bg {
    position: absolute;
    z-index: 4;
    top: 0;
    width: 100%;
    height: 541px;
    background: url(//static-portal.jdcloud.com/jcloud/jc/1.1.0/widget/jcshop/i/js_application_bg.png) -172px center no-repeat
  }

  .jcshop-price {
    padding-bottom: 65px
  }

  .jp-ul {
    font-size: 0
  }

  .jp-ul li {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    position: relative;
    vertical-align: top;
    width: 298px;
    height: 354px;
    border: 1px solid transparent
  }

  .jp-ul li i {
    display: block;
    margin: 40px auto 0;
    width: 94px;
    height: 94px
  }

  .jp-ul li h4 {
    margin-top: 36px;
    padding-bottom: 20px;
    text-align: center;
    line-height: 18px;
    font-size: 18px;
    color: #222
  }

  .jp-ul li p {
    margin: 25px 40px 0;
    line-height: 24px;
    font-size: 14px;
    color: #666
  }

  .jp-line {
    margin: 0 auto;
    width: 20px;
    height: 2px;
    background: #999
  }

  .jp-li1 i {
    background: url(//static-portal.jdcloud.com/jcloud/jc/1.1.0/widget/jcshop/i/jp_icon1.png) center no-repeat
  }

  .jp-li2 i {
    background: url(//static-portal.jdcloud.com/jcloud/jc/1.1.0/widget/jcshop/i/jp_icon2.png) center no-repeat
  }

  .jp-li3 i {
    background: url(//static-portal.jdcloud.com/jcloud/jc/1.1.0/widget/jcshop/i/jp_icon3.png) center no-repeat
  }

  .jp-li4 i {
    background: url(//static-portal.jdcloud.com/jcloud/jc/1.1.0/widget/jcshop/i/jp_icon4.png) center no-repeat
  }

  @-webkit-keyframes show-hide {
    0% {
      opacity: .3
    }
    50% {
      opacity: 1
    }
    100% {
      opacity: .3
    }
  }

  @-moz-keyframes show-hide {
    0% {
      opacity: .3
    }
    50% {
      opacity: 1
    }
    100% {
      opacity: .3
    }
  }

  @-o-keyframes show-hide {
    0% {
      opacity: .3
    }
    50% {
      opacity: 1
    }
    100% {
      opacity: .3
    }
  }

  @-ms-keyframes show-hide {
    0% {
      opacity: .3;
      filter: alpha(opacity=30)
    }
    50% {
      opacity: 1;
      filter: alpha(opacity=100)
    }
    100% {
      opacity: .3;
      filter: alpha(opacity=30)
    }
  }

  @keyframes show-hide {
    0% {
      opacity: .3
    }
    50% {
      opacity: 1
    }
    100% {
      opacity: .3
    }
  }

  @-webkit-keyframes show-hide-v1 {
    0% {
      opacity: 0
    }
    50% {
      opacity: 1
    }
    100% {
      opacity: 0
    }
  }

  @-moz-keyframes show-hide-v1 {
    0% {
      opacity: 0
    }
    50% {
      opacity: 1
    }
    100% {
      opacity: 0
    }
  }

  @-o-keyframes show-hide-v1 {
    0% {
      opacity: 0
    }
    50% {
      opacity: 1
    }
    100% {
      opacity: 0
    }
  }

  @-ms-keyframes show-hide-v1 {
    0% {
      opacity: 0;
      filter: alpha(opacity=0)
    }
    50% {
      opacity: 1;
      filter: alpha(opacity=100)
    }
    100% {
      opacity: 0;
      filter: alpha(opacity=0)
    }
  }

  @keyframes show-hide-v1 {
    0% {
      opacity: 0
    }
    50% {
      opacity: 1
    }
    100% {
      opacity: 0
    }
  }

  .bs_list {
    overflow: hidden
  }

  .bs_item {
    position: relative;
    float: left;
    width: 220px;
    min-height: 260px;
    overflow: hidden;
    cursor: default;
    -webkit-transition: width .3s ease;
    -moz-transition: width .3s ease;
    transition: width .3s ease
  }

  .bs_item_line {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 1px;
    overflow: hidden;
    background: #ccd6de;
    z-index: 1
  }

  .bs_item_wrap {
    width: 760px;
    overflow: hidden;
    -webkit-transition: margin-left .3s ease;
    -moz-transition: margin-left .3s ease;
    transition: margin-left .3s ease
  }

  .bs_view {
    float: left;
    width: 220px
  }

  .bs_view_main {
    margin: 0 30px;
    color: #fff
  }

  .bs_view_main h4 {
    padding: 15px 0;
    font-size: 24px;
    text-align: center;
    color: #333
  }

  .bs_view_main p {
    margin: 10px 0 0;
    line-height: 24px;
    font-size: 14px;
    color: #666
  }

  .bs_view_icon {
    margin-top: 15px;
    font-size: 50px;
    text-align: center;
    color: #36acea
  }

  .bs_dt {
    float: left;
    width: 540px
  }

  .bs_dt_main {
    margin: 0 30px
  }

  .bs_dt_hd {
    position: relative;
    display: block;
    padding-left: 160px;
    min-height: 150px;
    border-bottom: 1px solid #ccd6de;
    color: #fff
  }

  .bs_dt_hd h4 {
    padding: 10px 0 0;
    font-size: 24px;
    color: #222
  }

  .bs_dt_hd p {
    margin: 10px 0 0;
    line-height: 24px;
    font-size: 14px;
    color: #666
  }

  .bs_dt_hd_arrow {
    position: absolute;
    left: 74px;
    bottom: -1px;
    margin-left: -20px;
    width: 0;
    height: 0;
    border: 10px dashed transparent;
    border-bottom: 10px solid #efefef;
    overflow: visible !important
  }

  .bs_dt_hd_arrow i {
    position: absolute;
    right: -10px;
    top: -8px;
    width: 0;
    height: 0;
    border: 10px dashed transparent;
    border-bottom: 10px solid #3baaf1
  }

  .bs_dt_hd_icon {
    position: absolute;
    left: 20px;
    font-size: 90px;
    color: #36acea
  }

  .bs_dt_bd {
    padding-top: 10px
  }

  .bs_dt_bd:after {
    content: '';
    display: block;
    clear: both;
    font-size: 0
  }

  .bs_dt_bd_item {
    position: relative;
    display: block;
    min-height: 80px;
    margin: 10px 0 0;
    outline: 0
  }

  .bs_dt_bd_item .bs_dt_bd_icon {
    position: absolute;
    left: 3px;
    top: -7px;
    font-size: 55px;
    color: #fff
  }

  .bs_dt_bd_item h5 {
    margin: 0 0 0 70px;
    color: #fff;
    font-weight: 700
  }

  .bs_dt_bd_item p {
    margin: 10px 0 0 70px;
    color: #fff;
    line-height: 18px;
    font-size: 14px
  }

  .bs_dt_bd_item a {
    display: block;
    margin-top: 25px;
    margin-left: 70px;
    width: 67px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    color: #3baaf1;
    font-size: 12px;
    border: 1px solid #3baaf1;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    transition: all .3s ease
  }

  .bs_dt_bd_item a:hover {
    text-decoration: none;
    color: #fff;
    background: #3baaf1
  }

  .bs_dt_bd_item:focus, .bs_dt_bd_item:hover {
    text-decoration: none
  }

  .bs_dt_bd_2col ul {
    overflow: hidden;
    padding-top: 15px
  }

  .bs_dt_bd_2col ul li {
    float: left;
    width: 33%;
    line-height: 32px;
    font-size: 14px;
    color: #666
  }

  .bs_dt_bd_2col ul li i {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    margin-right: 12px;
    text-align: center;
    vertical-align: middle;
    width: 14px;
    height: 14px;
    line-height: 14px;
    color: #fff;
    background: #a6d5ff;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%
  }

  .bs_item.on {
    width: 540px
  }

  .bs_item.on .bs_item_wrap {
    margin-left: -220px
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
