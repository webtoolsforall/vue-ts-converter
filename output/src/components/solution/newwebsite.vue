<template>
  <div class="solution-website">
    <div class="website-banner">
      <div class="website-banner-wrap">
        <h2 class="website-banner-title">{{$t('website.website_1')}}</h2>
        <p class="website-banner-des">{{$t('website.website_2')}}</p>
      </div>
      <div class="website-banner-bottom">
        <ul class="website-step">
                <li>
                    <span class="jdcfont">&#xe752;</span>
                    <p>{{$t('website.website_4')}}</p>
                </li>
                <li>
                    <span class="jdcfont">&#xe754;</span>
                    <p>{{$t('website.website_6')}}</p>
                </li>
                <li>
                    <span class="jdcfont">&#xe93f;</span>
                    <p>{{$t('website.website_8')}}</p>
                </li>
                <li>
                    <span class="jdcfont">&#xe7e9;</span>
                    <p>{{$t('website.website_10')}}</p>
                </li>
                <li>
                    <span class="jdcfont">&#xe76a;</span>
                    <p>{{$t('website.website_12')}}</p>
                </li>
            </ul>
      </div>
    </div>
    <div class="sw-floor">
      <div class="sw-floor-hd">
        <h3 class="sw-floor-title">{{$t('website.website_4')}}</h3>
        <p class="sw-floor-des">{{$t('website.website_14')}}</p>
      </div>
      <div class="sw-floor-bd domain-wrap">
        <ul class="domain-list">
          <li class="domain-list-bg"></li>
          <li>
            <dl>
              <dt>{{$t('website.website_15')}}</dt>
              <dd>{{$t('website.website_16')}}</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>{{$t('website.website_17')}}</dt>
              <dd>{{$t('website.website_18')}}</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>{{$t('website.website_19')}}</dt>
              <dd>{{$t('website.website_20')}}</dd>
            </dl>
          </li>
          <!-- <li>
            <dl>
              <dt>.top</dt>
              <dd>顶级、巅峰、突破、No.1</dd>
            </dl>
          </li> -->
        </ul>
        <a clstag="Solution|keycount|MiddleContentSec|Solution_Domain_1" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_Domain_1")' data-ga="MiddleContentSec_立即体验"  href="//net.jdcloud.com/" target="_blank" class="website-btn">{{$t('website.website_21')}}</a>
      </div>
    </div>
    <div class="sw-floor sw-floor-even">
      <div class="sw-floor-hd">
        <h3 class="sw-floor-title">{{$t('website.website_6')}}</h3>
        <p class="sw-floor-des">{{$t('website.website_23')}}<a clstag="Solution|keycount|MiddleContentSec|Solution_Host_1" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_Host_1")' data-ga="MiddleContentSec_活动规则"  href="javascript:;" class="website-link" @click.prevent="tips">{{$t('website.website_24')}}</a></p>
      </div>
      <div class="sw-floor-bd">
        <ul class="host-list">
          <li class="host-list-item">
            <h4 class="host-title">{{$t('website.website_25')}}</h4>
            <div class="host-content">
              <dl class="host-config-item">
                <dt>{{$t('website.website_26')}}</dt>
                <dd>{{$t('website.website_27')}}</dd>
              </dl>
              <span class="line"></span>
              <dl class="host-config-item">
                <dt>{{$t('website.website_28')}}</dt>
                <dd>{{$t('website.website_29')}}</dd>
              </dl>
              <span class="line"></span>
              <dl class="host-config-item">
                <dt>{{$t('website.website_30')}}</dt>
                <dd>{{$t('website.website_31')}}</dd>
              </dl>
              <span class="line"></span>
              <dl class="host-config-item">
                <dt>{{$t('website.website_32')}}</dt>
                <dd>{{$t('website.website_33')}}</dd>
              </dl>
              <p class="host-item-des">{{$t('website.website_34')}}</p>
              <div class="host-price-special">
                <span><strong>{{$t('website.website_35')}}</strong>{{$t('website.website_36')}}</span>
                <span class="sp-line"></span>
                <span><strong>{{$t('website.website_37')}}</strong>{{$t('website.website_38')}}</span>
              </div>
              <div class="host-price-origin">{{$t('website.website_39')}}</div>
              <div class="btn-wrap">
                <a clstag="Solution|keycount|MiddleContentSec|Solution_Host_2" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_Host_2")'
                   data-ga="MiddleContentSec_JD一号Smart"  href="//promotion.jcloud.com/productTrialforPay?uuid=360547263a1c4ba3b4d2e521a23dafba" target="_blank" class="website-btn">{{$t('website.website_40')}}</a>
              </div>
            </div>
          </li>
          <li class="host-list-item">
            <h4 class="host-title">{{$t('website.website_41')}}</h4>
            <div class="host-content">
              <dl class="host-config-item">
                <dt>{{$t('website.website_26')}}</dt>
                <dd>{{$t('website.website_27')}}</dd>
              </dl>
              <span class="line"></span>
              <dl class="host-config-item">
                <dt>{{$t('website.website_28')}}</dt>
                <dd>{{$t('website.website_45')}}</dd>
              </dl>
              <span class="line"></span>
              <dl class="host-config-item">
                <dt>{{$t('website.website_30')}}</dt>
                <dd>{{$t('website.website_31')}}</dd>
              </dl>
              <span class="line"></span>
              <dl class="host-config-item">
                <dt>{{$t('website.website_32')}}</dt>
                <dd>{{$t('website.website_33')}}</dd>
              </dl>
              <p class="host-item-des">{{$t('website.website_50')}}</p>
              <div class="host-price-special">
                <span><strong>{{$t('website.website_51')}}</strong>{{$t('website.website_36')}}</span>
                <span class="sp-line"></span>
                <span><strong>{{$t('website.website_53')}}</strong>{{$t('website.website_38')}}</span>
              </div>
              <div class="host-price-origin">{{$t('website.website_55')}}</div>
              <div class="btn-wrap">
                <a clstag="Solution|keycount|MiddleContentSec|Solution_Host_3" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_Host_3")' data-ga="MiddleContentSec_JD一号Mini"  href="//promotion.jcloud.com/productTrialforPay?uuid=d6777f85c1274aaabe2618d4084e9542" target="_blank" class="website-btn">{{$t('website.website_40')}}</a>
              </div>
            </div>
          </li>
          <li class="host-list-item">
            <h4 class="host-title">{{$t('website.website_57')}}</h4>
            <div class="host-content">
              <dl class="host-config-item">
                <dt>{{$t('website.website_26')}}</dt>
                <dd>{{$t('website.website_59')}}</dd>
              </dl>
              <span class="line"></span>
              <dl class="host-config-item">
                <dt>{{$t('website.website_28')}}</dt>
                <dd>{{$t('website.website_61')}}</dd>
              </dl>
              <span class="line"></span>
              <dl class="host-config-item">
                <dt>{{$t('website.website_30')}}</dt>
                <dd>{{$t('website.website_31')}}</dd>
              </dl>
              <span class="line"></span>
              <dl class="host-config-item">
                <dt>{{$t('website.website_64')}}</dt>
                <dd>{{$t('website.website_65')}}</dd>
              </dl>
              <p class="host-item-des">{{$t('website.website_66')}}</p>
              <div class="host-price-special">
                <span><strong>{{$t('website.website_67')}}</strong>{{$t('website.website_36')}}</span>
                <span class="sp-line"></span>
                <span><strong>{{$t('website.website_69')}}</strong>{{$t('website.website_38')}}</span>
              </div>
              <div class="host-price-origin">{{$t('website.website_71')}}</div>
              <div class="btn-wrap">
                <a clstag="Solution|keycount|MiddleContentSec|Solution_Host_4" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_Host_4")' data-ga="MiddleContentSec_JD一号高容量型"  href="//promotion.jcloud.com/productTrialforPay?uuid=bd01ed57053d4a5f84b0942aa4c4defa" target="_blank" class="website-btn">{{$t('website.website_40')}}</a>
              </div>
            </div>
          </li>
          <li class="host-list-item">
            <h4 class="host-title">{{$t('website.website_73')}}</h4>
            <div class="host-content">
              <dl class="host-config-item">
                <dt>{{$t('website.website_26')}}</dt>
                <dd>{{$t('website.website_59')}}</dd>
              </dl>
              <span class="line"></span>
              <dl class="host-config-item">
                <dt>{{$t('website.website_28')}}</dt>
                <dd>{{$t('website.website_77')}}</dd>
              </dl>
              <span class="line"></span>
              <dl class="host-config-item">
                <dt>{{$t('website.website_30')}}</dt>
                <dd>{{$t('website.website_31')}}</dd>
              </dl>
              <span class="line"></span>
              <dl class="host-config-item">
                <dt>{{$t('website.website_32')}}</dt>
                <dd>{{$t('website.website_33')}}</dd>
              </dl>
              <p class="host-item-des">{{$t('website.website_34')}}</p>
              <div class="host-price-special">
                <span><strong>{{$t('website.website_83')}}</strong>{{$t('website.website_36')}}</span>
                <span class="sp-line"></span>
                <span><strong>{{$t('website.website_85')}}</strong>{{$t('website.website_38')}}</span>
              </div>
              <div class="host-price-origin">{{$t('website.website_87')}}</div>
              <div class="btn-wrap">
                <a clstag="Solution|keycount|MiddleContentSec|Solution_Host_5" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_Host_5")' data-ga="MiddleContentSec_JD一号高内存型"  href="//promotion.jcloud.com/productTrialforPay?uuid=788e6ff004e440b29a04e64f2049c7fb" target="_blank" class="website-btn">{{$t('website.website_40')}}</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="sw-floor">
      <div class="sw-floor-hd">
        <h3 class="sw-floor-title">{{$t('website.website_8')}}</h3>
        <p class="sw-floor-des">{{$t('website.website_90')}}</p>
      </div>
      <div class="sw-floor-bd record-wrap">
        <div class="record-wrap-bg">
            <ul class="g-table process-bg">
                    <li class="g-cell"><span class="num">{{$t('website.website_91')}}</span></li>
                    <li class="g-cell"><span class="num">{{$t('website.website_92')}}</span></li>
                    <li class="g-cell"><span class="num">{{$t('website.website_93')}}</span></li>
                    <li class="g-cell"><span class="num">{{$t('website.website_94')}}</span></li>
                    <li class="g-cell"><span class="num">{{$t('website.website_95')}}</span></li>
                </ul>
                <ul class="g-table">
                    <li class="g-cell"><p>{{$t('website.website_96')}}</p></li>
                    <li class="g-cell"><p>{{$t('website.website_97')}}</p></li>
                    <li class="g-cell"><p>{{$t('website.website_98')}}</p></li>
                    <li class="g-cell"><p>{{$t('website.website_99')}}</p></li>
                    <li class="g-cell"><p>{{$t('website.website_100')}}</p></li>
                </ul>
        </div>
        <a clstag="Solution|keycount|MiddleContentSec|Solution_ICP_1" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_ICP_1")' data-ga="MiddleContentSec_网站备案_立即体验"  href="//record-console.jdcloud.com/index" target="_blank" class="website-btn">{{$t('website.website_21')}}</a>
      </div>
    </div>
    <div class="sw-floor DNS-floor">
      <div class="sw-floor-hd">
        <h3 class="sw-floor-title">{{$t('website.website_10')}}</h3>
        <p class="sw-floor-des">{{$t('website.website_103')}}</p>
      </div>
      <div class="sw-floor-bd">
        <p class="dns-des">{{$t('website.website_104')}}
          <a clstag="Solution|keycount|MiddleContentSec|Solution_DNS_1" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_DNS_1")' data-ga="MiddleContentSec_域名解析_立即体验"  href="//dns-console.jdcloud.com/list" target="_blank">{{$t('website.website_21')}}</a></p>
        <div class="dns-bg"></div>
      </div>
    </div>
    <div class="sw-floor">
      <div class="sw-floor-hd">
        <h3 class="sw-floor-title">{{$t('website.website_106')}}</h3>
        <p class="sw-floor-des">{{$t('website.website_107')}}</p>
      </div>
      <div class="sw-floor-bd">
        <ul class="website-template">
          <li class="website-template-item">
            <a clstag="Solution|keycount|MiddleContentSec|Solution_WebsiteTemplate_1" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_WebsiteTemplate_1")' data-ga="MiddleContentSec_企业展示"  href="//market.jdcloud.com/service/list?cid=16627" target="_blank">
              <i class="template-icon1"></i>
              <p>{{$t('website.website_108')}}</p>
            </a>
          </li>
          <li class="website-template-item">
            <a clstag="Solution|keycount|MiddleContentSec|Solution_WebsiteTemplate_2" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_WebsiteTemplate_2")' data-ga="MiddleContentSec_电子商务"  href="//market.jdcloud.com/service/list?cid=16405" target="_blank">
              <i class="template-icon2"></i>
              <p>{{$t('website.website_109')}}</p>
            </a>
          </li>
          <li class="website-template-item">
            <a clstag="Solution|keycount|MiddleContentSec|Solution_WebsiteTemplate_3" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_WebsiteTemplate_3")' data-ga="MiddleContentSec_信息门户"  href="//market.jdcloud.com/service/list?cid=16628" target="_blank">
              <i class="template-icon3"></i>
              <p>{{$t('website.website_110')}}</p>
            </a>
          </li>
          <li class="website-template-item">
            <a clstag="Solution|keycount|MiddleContentSec|Solution_WebsiteTemplate_4" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_WebsiteTemplate_4")' data-ga="MiddleContentSec_社区论坛"  href="//market.jdcloud.com/service/list?cid=24001" target="_blank">
              <i class="template-icon4"></i>
              <p>{{$t('website.website_111')}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!--规则弹窗-->
    <div class="rule-hook" style="display:none">
      <div class="layer-info">
        <p>{{$t('website.website_112')}}</br>
        {{$t('website.website_113')}}</br>
        {{$t('website.website_114')}}</br>
        {{$t('website.website_115')}}</br>
        {{$t('website.website_116')}}</br>
        {{$t('website.website_117')}}</br>
        {{$t('website.website_118')}}</br>
        {{$t('website.website_119')}}</br>
        {{$t('website.website_120')}}</br>
        <!-- 1、JD一号系列每个账户限购10台，恶意抢刷资源、倒买倒卖资源的用户将被封号；<br/>
          2、JD一号产品只限华北-北京、华东-上海、华南-广州机房；<br/>
          3、［企业］限企业认证用户购买，每个账户限购10台；［通用］限个人或企业认证用户购买，每个账户限购1台；<br/>
          4、每台云主机创建成功后，均可支付差价弹性升级配置；<br/>
          5、购买的云计算产品，自创建之日起即时生效；<br/>
          6、本优惠价格不适用于续费，相关续费优惠活动可以在线咨询或提交工单；<br/>
          7、JD一号云服务器不支持使用代金券；<br/>
          8、云鼎用户，渠道商、代理商用户不可参与此活动；<br/>
          9、如有疑问请致电京东云客服电话 4006151212（7*24小时）；<br/>
          10、京东云保留在法律规定的范围内对上述规则进行解释的权利。 -->
        </p>
      </div>
    </div>
  </div>
</template>
 
<script>
  export default{
    methods: {
      tips(){
        let _layer = this.$layer;
        _layer.open({
          type: 1,
          title: '活动规则',
          area: '560px',
          btn: ['关闭'],
          content: '.rule-hook',
          shadeClose: true,
          btn1: function (index, layero) {
            _layer.close(index);
          }
        });
      },
    }
  }
</script>


<style>
/* RWD start */
/* @import url("//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/solution-website/solution-website.css"); */
.solution-website .website-btn{display:inline-block;min-width:120px;line-height:36px;text-align:center;height:36px;font-size:16px;color:#fff;background-color:#2f94f2}.solution-website .website-link{color:#0989c5;font-size:16px}.website-banner{background:#111c60;height:540px}.website-banner-wrap{width:100%;max-width:1200px;height:440px;margin:0 auto;background:url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/solution-website/i/banner.png) center no-repeat;background-size:contain}.website-banner-wrap .website-banner-des,.website-banner-wrap .website-banner-title{margin-left:20px;color:#fff}.website-banner-wrap .website-banner-title{padding-top:140px;line-height:64px;font-size:44px}.website-banner-wrap .website-banner-des{margin-top:30px;line-height:38px;font-size:18px}.website-banner-bottom{height:100px;background:url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/solution-website/i/banner-bottom.png) center no-repeat;background-color:#293370;background-color:rgba(255,255,255,.1)}.sw-floor .sw-floor-hd{padding-top:50px;padding-bottom:40px;text-align:center}.sw-floor .sw-floor-bd{margin:0 auto;padding-bottom:60px;max-width:1200px;width:100%}.sw-floor .sw-floor-title{line-height:56px;font-size:36px;color:#222}.sw-floor .sw-floor-des{line-height:36px;font-size:16px;color:#666}.sw-floor.sw-floor-even{background-color:#eef3f7}.sw-floor .domain-list{box-sizing:border-box;padding:20px;width:100%;display:table;-webkit-box-shadow:0 0 20px 0 rgba(134,194,225,.3);-moz-box-shadow:0 0 20px 0 rgba(134,194,225,.3);box-shadow:0 0 20px 0 rgba(134,194,225,.3)}.sw-floor .domain-list li{display:table-cell;vertical-align:middle;width:20%;height:160px;text-align:center;border-right:1px solid #e0e0e0}.sw-floor .domain-list li:first-child,.sw-floor .domain-list li:last-child{border-right:0 none}.sw-floor .domain-list .domain-list-bg{background:url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/solution-website/i/domain-bg.png) center no-repeat;background-size:contain}.sw-floor .domain-list dt{line-height:34px;font-size:24px;color:#0989c5}.sw-floor .domain-list dd{margin-top:20px;padding:0 5%;line-height:24px;font-size:14px;color:#333}.sw-floor .domain-wrap{text-align:center}.sw-floor .domain-wrap .website-btn{margin-top:42px}.sw-floor .host-list{font-size:0}.sw-floor .host-list-item{display:inline-block;vertical-align:top;box-sizing:border-box;width:24.5%;height:395px;border:1px solid #e0e0e0;background-color:#fff;-webkit-box-shadow:0 0 17px 0 rgba(134,194,225,.3);-moz-box-shadow:0 0 17px 0 rgba(134,194,225,.3);box-shadow:0 0 17px 0 rgba(134,194,225,.3)}.sw-floor .host-list-item+.host-list-item{margin-left:.6%}.sw-floor .host-title{text-align:center;height:80px;line-height:80px;font-size:22px;color:#0989c5;background-color:#eef3f7}.sw-floor .host-content{padding:20px}.sw-floor .host-content .website-btn{margin-top:40px}.sw-floor .host-config-item{display:inline-block;vertical-align:top;color:#666}.sw-floor .host-config-item dt{font-size:12px}.sw-floor .host-config-item dd{font-size:16px}.sw-floor .line{display:inline-block;margin:0 6.8%;vertical-align:top;height:40px;border-left:1px solid #e0e0e0}.sw-floor .host-item-des{margin-top:25px;line-height:16px;font-size:12px;color:#666}.sw-floor .host-price-special{padding-top:38px;color:#fb6928;font-size:14px;line-height:28px}.sw-floor .host-price-special strong{margin-right:8px;font-size:28px;font-weight:400}.sw-floor .sp-line{display:inline-block;vertical-align:top;margin:4px 15px 0;height:20px;border-left:1px solid #e0e0e0}.sw-floor .host-price-origin{margin-top:13px;line-height:16px;font-size:12px;color:#999;text-decoration:line-through}.sw-floor .btn-wrap,.sw-floor .record-wrap{text-align:center}.sw-floor .record-wrap .website-btn{margin-top:82px}.sw-floor .record-wrap-bg{margin-top:24px;height:116px;background:url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/solution-website/i/record.png) center no-repeat}.sw-floor .record-wrap-bg .g-table{display:none;margin:0 auto;max-width:375px;width:100%;text-align:center}.sw-floor .record-wrap-bg .g-table+.g-table{margin-top:10px}.sw-floor .record-wrap-bg .g-table .g-cell{width:20%}.sw-floor .record-wrap-bg .g-table p{padding:0 5px;font-size:12px}.sw-floor .process-bg{margin:0 auto;max-width:375px;height:48px;line-height:48px;background:url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/solution-website/i/bg-step.png) center no-repeat;background-size:contain;color:#0989c5}.sw-floor.DNS-floor{background-color:#182a5b}.sw-floor.DNS-floor .sw-floor-des,.sw-floor.DNS-floor .sw-floor-title{color:#fff}.sw-floor.DNS-floor .sw-floor-des{opacity:.5;filter:alpha(opacity=50)}.sw-floor .dns-des{padding-bottom:50px;text-align:center;font-size:14px;color:#fff}.sw-floor .dns-des a{color:#0989c5}.sw-floor .dns-bg{height:382px;background:url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/solution-website/i/dns.jpg) center no-repeat}.sw-floor .website-template{text-align:center;font-size:0}.sw-floor .website-template-item{display:inline-block;margin-left:-1px;width:25%}.sw-floor .website-template-item>a{position:relative;z-index:1;display:block;height:224px;border:1px solid #e0e0e0}.sw-floor .website-template-item>a:hover{z-index:5;border-color:#0989c5}.sw-floor .website-template-item p{margin-top:30px;line-height:30px;font-size:22px}.sw-floor .website-template-item i{display:inline-block;margin-top:30px;width:100px;height:100px;border-radius:100px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border:1px solid #ededed}.sw-floor .website-template-item .template-icon1{background:#eef3f7 url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/solution-website/i/solution-website.png) center no-repeat;background-position:0 0}.sw-floor .website-template-item .template-icon2{background:#eef3f7 url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/solution-website/i/solution-website.png) center no-repeat;background-position:0 -110px}.sw-floor .website-template-item .template-icon3{background:#eef3f7 url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/solution-website/i/solution-website.png) center no-repeat;background-position:0 -220px}.sw-floor .website-template-item .template-icon4{background:#eef3f7 url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/solution-website/i/solution-website.png) center no-repeat;background-position:0 -330px}.website-step{display:none;box-sizing:border-box;padding:0 2%;width:100%;height:85px;text-align:center}.website-step li{position:relative;display:table-cell;vertical-align:middle;width:20%}.website-step li:after{content:'>';position:absolute;top:20px;right:-5px;line-height:1;font-size:16px;color:#1f8bf1}.website-step li:last-child:after{content:none}.website-step li span{color:#1f8bf1;font-size:22px}.website-step li p{margin-top:10px;color:#333;font-size:12px}@media (max-width:1200px){.jdc-rwd .record-wrap-bg,.jdc-rwd .website-banner-bottom{background-size:contain}.jdc-rwd .host-list-item{margin:0 2% 2%;width:46%;height:auto}.jdc-rwd .host-list-item+.host-list-item{margin:0 2% 2%}.jdc-rwd .host-config-item{position:relative;width:25%}.jdc-rwd .host-config-item~.host-config-item:before{content:none;position:absolute;top:0;left:-35%;height:40px;border-left:1px solid #e0e0e0}.jdc-rwd .line{display:none}}@media (max-width:768px){.jdc-rwd .sw-floor-bd{padding:0 10px;width:auto}.jdc-rwd .sw-floor-even{background-color:#fff}.jdc-rwd .website-banner{height:425px}.jdc-rwd .website-banner-wrap{text-align:center;height:340px;background:url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/solution-website/i/banner-m.png) center 50px no-repeat}.jdc-rwd .website-banner-title{margin-left:0;padding-top:250px;line-height:34px;font-size:24px}.jdc-rwd .website-banner-des{margin-left:0;margin-top:10px;line-height:22px;font-size:12px}.jdc-rwd .website-banner-bottom{height:85px;background-color:#f7f8fa;background-image:none;border-bottom:1px solid #ededed}.jdc-rwd .website-step{display:table}.jdc-rwd .sw-floor-hd{padding-top:25px;padding-bottom:15px}.jdc-rwd .sw-floor-title{line-height:32px;font-size:22px}.jdc-rwd .sw-floor-des{display:none;margin-top:5px;line-height:24px;font-size:14px}.jdc-rwd .sw-floor-even .sw-floor-des{display:block}.jdc-rwd .sw-floor-even .sw-floor-des .website-link{font-size:14px}.jdc-rwd .domain-list{display:inline-block;width:auto;position:relative;padding:0;box-shadow:none}.jdc-rwd .domain-list li{display:list-item;margin-left:105px;text-align:left;width:auto;height:auto;border-right:0 none;line-height:24px}.jdc-rwd .domain-list li dt{line-height:inherit;float:left;font-size:18px;min-width:50px}.jdc-rwd .domain-list li dd{margin-top:0;padding:0;overflow:hidden;font-size:12px}.jdc-rwd .domain-list .domain-list-bg{position:absolute;left:10px;margin-left:0;width:75px;height:75px}.jdc-rwd .website-btn{display:block;margin:20px auto 0;min-width:auto;max-width:320px;height:40px;line-height:40px;background-color:#37bef0;font-size:14px}.jdc-rwd .domain-wrap .website-btn,.jdc-rwd .host-content .website-btn,.jdc-rwd .record-wrap .website-btn{margin-top:20px}.jdc-rwd .host-list .host-list-item{display:block;margin:0;width:auto;box-shadow:none}.jdc-rwd .host-list .host-list-item+.host-list-item{margin-top:20px}.jdc-rwd .host-title{height:60px;line-height:60px;font-size:20px}.jdc-rwd .host-content{padding:10px}.jdc-rwd .host-item-des{margin-top:10px}.jdc-rwd .host-price-special{padding-top:10px}.jdc-rwd .host-price-origin{margin-top:0}.jdc-rwd .DNS-floor{position:relative;background-color:transparent}.jdc-rwd .DNS-floor .sw-floor-bd{padding-bottom:180px}.jdc-rwd .DNS-floor .sw-floor-title{color:#333}.jdc-rwd .DNS-floor .sw-floor-des{display:block;position:absolute;top:290px;margin-top:0;left:10px;font-size:14px;color:#182a5b;opacity:1}.jdc-rwd .DNS-floor .dns-des{position:absolute;top:320px;left:10px;right:10px;padding-bottom:0;text-align:left;line-height:20px;font-size:12px;color:#666}.jdc-rwd .DNS-floor .dns-des a{display:block;margin:20px auto;max-width:320px;height:40px;line-height:40px;text-align:center;font-size:14px;color:#fff;background-color:#37bef0}.jdc-rwd .DNS-floor .dns-bg{height:210px;background-size:contain}.jdc-rwd .website-template{padding-bottom:20px;margin-left:-10px}.jdc-rwd .website-template-item{margin-left:0;padding-left:10px;width:50%;box-sizing:border-box}.jdc-rwd .website-template-item:nth-child(n+3){margin-top:10px}.jdc-rwd .website-template-item>a{height:auto;padding-bottom:10px}.jdc-rwd .website-template-item>a:hover{border-color:#e0e0e0}.jdc-rwd .website-template-item i{margin-top:15px;width:44px;height:44px;background-size:120%!important}.jdc-rwd .website-template-item .template-icon1{background-position:-5px -5px}.jdc-rwd .website-template-item .template-icon2{background-position:-4px -58px}.jdc-rwd .website-template-item .template-icon3{background-position:-4px -114px}.jdc-rwd .website-template-item .template-icon4{background-position:-4px -170px}.jdc-rwd .website-template-item p{margin-top:10px;line-height:24px;font-size:14px}.jdc-rwd .record-wrap-bg{margin-top:0;height:auto;background:0 0}.jdc-rwd .record-wrap-bg .g-table{display:table}}
</style>
