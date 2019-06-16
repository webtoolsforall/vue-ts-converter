<template>
  <div class="newRetail">
    <div class="newRetail-banner">
      <div class="w">
        <h1 class="newRetail-title">{{$t('retail.retail_1')}}</h1>
        <p class="newRetail-des">{{$t('retail.retail_2')}}<br/>{{$t('retail.retail_3')}}</p>
        <!--<p class="newRetail-des">3月20日-4月20日，产品限时低至3折<br/>每周前20名企业用户下单即送京东云定制台历一份</p>-->
        <!--<div class="newRetail-btn-wrap"><a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_1" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_1")' data-ga="MiddleContentSec_免费试用" href="#" class="newRetail-btn">{{$t('retail.retail_17')}}</a></div>-->
      </div>
    </div>
    <div class="newRetail-floor">
      <div class="w">
        <h2 class="newRetail-floor-title">{{$t('retail.retail_4')}}</h2>
        <ul class="newRetail-case-tabs clearfix">
          <li data-ga="MiddleContentSec_电商网站安全防护" class="tab-item" :class="scenesActiveIndex==1?'active':''" clstag="Solution|keycount|MiddleContentSec|Solution_newretail_1" @click="scenesTab(1,'1')">{{$t('retail.retail_5')}}</li>
          <li data-ga="MiddleContentSec_冷/热数据上云备份" class="tab-item" :class="scenesActiveIndex==2?'active':''" clstag="Solution|keycount|MiddleContentSec|Solution_newretail_2" @click="scenesTab(2,'2')">{{$t('retail.retail_6')}}</li>
          <li data-ga="MiddleContentSec_电商网站加速" class="tab-item" :class="scenesActiveIndex==3?'active':''" clstag="Solution|keycount|MiddleContentSec|Solution_newretail_3" @click="scenesTab(3,'3')">{{$t('retail.retail_7')}}</li>
          <li data-ga="MiddleContentSec_短信" class="tab-item" :class="scenesActiveIndex==4?'active':''" clstag="Solution|keycount|MiddleContentSec|Solution_newretail_4" @click="scenesTab(4,'4')">{{$t('retail.retail_8')}}<span class="retail-icon"></span></li>
        </ul>
        <div class="newRetail-case-box">
          <div class="case-item clearfix" v-show="scenesActiveIndex==1">
            <div class="f-fl case-cont">
              <p>{{$t('retail.retail_9')}}</p>
              <dl class="case-features">
                <dt>{{$t('retail.retail_10')}}</dt>
                <dd><span class="case-features-num">{{$t('retail.retail_11')}}</span><div>{{$t('retail.retail_12')}}</div></dd>
                <dd><span class="case-features-num">{{$t('retail.retail_13')}}</span><div>{{$t('retail.retail_14')}}</div></dd>
                <dd><span class="case-features-num">{{$t('retail.retail_15')}}</span><div>{{$t('retail.retail_16')}}</div></dd>
              </dl>
              <a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_2" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_2")' data-ga="MiddleContentSec_立即购买" href="//www.jdcloud.com/products/webanti" target="_blank" class="case-cont-btn">{{$t('retail.retail_17')}}</a>
            </div>
            <div class="case-image"><img src="/static/img/newRetail/1.png"></div>
          </div>
          <div class="case-item clearfix" v-show="scenesActiveIndex==2">
            <div class="f-fl case-cont">
              <p>{{$t('retail.retail_18')}}</p>
              <dl class="case-features">
                <dt>{{$t('retail.retail_10')}}</dt>
                <dd><span class="case-features-num">{{$t('retail.retail_11')}}</span><div>{{$t('retail.retail_21')}}</div></dd>
                <dd><span class="case-features-num">{{$t('retail.retail_13')}}</span><div>{{$t('retail.retail_23')}}</div></dd>
                <dd><span class="case-features-num">{{$t('retail.retail_15')}}</span><div>{{$t('retail.retail_25')}}</div></dd>
                <dd><span class="case-features-num">{{$t('retail.retail_26')}}</span><div>{{$t('retail.retail_27')}}</div></dd>
              </dl>
              <a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_3" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_3")' data-ga="MiddleContentSec_立即购买" href="//www.jdcloud.com/products/cloudstorage" target="_blank" class="case-cont-btn">{{$t('retail.retail_17')}}</a>
            </div>
            <div class="case-image"><img src="/static/img/newRetail/2.png"></div>
          </div>
          <div class="case-item clearfix" v-show="scenesActiveIndex==3">
            <div class="f-fl case-cont">
              <p>{{$t('retail.retail_29')}}</p>
              <dl class="case-features">
                <dt>{{$t('retail.retail_10')}}</dt>
                <dd><span class="case-features-num">{{$t('retail.retail_11')}}</span><div>{{$t('retail.retail_32')}}</div></dd>
                <dd><span class="case-features-num">{{$t('retail.retail_13')}}</span><div>{{$t('retail.retail_34')}}</div></dd>
                <dd><span class="case-features-num">{{$t('retail.retail_15')}}</span><div>{{$t('retail.retail_36')}}</div></dd>
                <dd><span class="case-features-num">{{$t('retail.retail_26')}}</span><div>{{$t('retail.retail_38')}}</div></dd>
              </dl>
              <a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_4" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_4")' data-ga="MiddleContentSec_立即购买" href="//www.jdcloud.com/products/cdn" target="_blank" class="case-cont-btn">{{$t('retail.retail_17')}}</a>
            </div>
            <div class="case-image"><img src="/static/img/newRetail/3.png"></div>
          </div>
          <div class="case-item clearfix" v-show="scenesActiveIndex==4">
            <div class="f-fl case-cont">
              <p>{{$t('retail.retail_40')}}</p>
              <dl class="case-features">
                <dt>{{$t('retail.retail_10')}}</dt>
                <dd><span class="case-features-num">{{$t('retail.retail_11')}}</span><div>{{$t('retail.retail_43')}}</div></dd>
                <dd><span class="case-features-num">{{$t('retail.retail_13')}}</span><div>{{$t('retail.retail_45')}}</div></dd>
              </dl>
              <a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_5" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_5")' data-ga="MiddleContentSec_立即购买" href="//wx.jdcloud.com/market/datas/16/10665" target="_blank" class="case-cont-btn">{{$t('retail.retail_17')}}</a>
            </div>
            <div class="case-image"><img src="/static/img/newRetail/4.png"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="newRetail-floor newRetail-floor-even">
      <div class="w">
        <h2 class="newRetail-floor-title">{{$t('retail.retail_47')}}</h2>
        <ul class="newRetail-floor-list clearfix">
          <li class="newRetail-floor-li" @mouseenter="solutionTab(1)" :class="solutionOnIndex==1?'on':''">
            <i class="newRetail-bicon"></i>
            <h3>{{$t('retail.retail_48')}}</h3>
            <p>{{$t('retail.retail_49')}}</p>
            <ul class="newRetail-floor-sub clearfix">
              <li>
                <span><i class="rewRetail-bsicon rewRetail-bsicon1"></i>{{$t('retail.retail_50')}}</span>
              </li>
              <li>
                <span><i class="rewRetail-bsicon rewRetail-bsicon2"></i>{{$t('retail.retail_51')}}</span>
              </li>
              <li>
                <span><i class="rewRetail-bsicon rewRetail-bsicon3"></i>{{$t('retail.retail_52')}}</span>
              </li>
              <li>
                <span><i class="rewRetail-bsicon rewRetail-bsicon4"></i>{{$t('retail.retail_53')}}</span>
              </li>
            </ul>
            <a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_6" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_6")' data-ga="MiddleContentSec_立即咨询" href="//answer.jd.com/jump/?shortCode=kdWnbLkdVbJC&surveyId=1557021" target="_blank" class="newRetail-floor-btn">{{$t('retail.retail_54')}}</a>
          </li>
          <li class="newRetail-floor-li" @mouseenter="solutionTab(2)" :class="solutionOnIndex==2?'on':''">
            <i class="newRetail-bicon newRetail-bicon2"></i>
            <h3>{{$t('retail.retail_55')}}</h3>
            <p>{{$t('retail.retail_56')}}</p>
            <ul class="newRetail-floor-sub clearfix">
              <li>
                <span><i class="rewRetail-bsicon rewRetail-bsicon5"></i>{{$t('retail.retail_57')}}</span>
              </li>
              <li>
                <span style="margin-right:-10px;"><i class="rewRetail-bsicon rewRetail-bsicon6"></i>{{$t('retail.retail_58')}}</span>
              </li>
              <li>
                <span><i class="rewRetail-bsicon rewRetail-bsicon7"></i>{{$t('retail.retail_59')}}</span>
              </li>
              <li>
                <span><i class="rewRetail-bsicon rewRetail-bsicon8"></i>{{$t('retail.retail_60')}}</span>
              </li>
            </ul>
            <a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_7" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_7")' data-ga="MiddleContentSec_立即咨询" href="//answer.jd.com/jump/?shortCode=kdWnbLkdVbJC&surveyId=1557021" target="_blank" class="newRetail-floor-btn">{{$t('retail.retail_54')}}</a>
          </li>
          <li class="newRetail-floor-li" @mouseenter="solutionTab(3)" :class="solutionOnIndex==3?'on':''">
            <i class="newRetail-bicon newRetail-bicon3"></i>
            <h3>{{$t('retail.retail_62')}}</h3>
            <p>{{$t('retail.retail_63')}}</p>
            <ul class="newRetail-floor-sub clearfix">
              <li>
                <span><i class="rewRetail-bsicon rewRetail-bsicon9"></i>{{$t('retail.retail_64')}}<br/>{{$t('retail.retail_65')}}</span>
              </li>
              <li>
                <span><i class="rewRetail-bsicon rewRetail-bsicon10"></i>{{$t('retail.retail_66')}}<br/>{{$t('retail.retail_67')}}</span>
              </li>
              <li>
                <span><i class="rewRetail-bsicon rewRetail-bsicon11"></i>{{$t('retail.retail_68')}}<br/>{{$t('retail.retail_69')}}</span>
              </li>
              <li>
                <span><i class="rewRetail-bsicon rewRetail-bsicon12"></i>{{$t('retail.retail_70')}}<br/>{{$t('retail.retail_71')}}</span>
              </li>
            </ul>
            <a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_8" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_8")' data-ga="MiddleContentSec_立即咨询" href="//answer.jd.com/jump/?shortCode=kdWnbLkdVbJC&surveyId=1557021" target="_blank" class="newRetail-floor-btn">{{$t('retail.retail_54')}}</a>
          </li>
          <li class="newRetail-floor-li last" @mouseenter="solutionTab(4)" :class="solutionOnIndex==4?'on':''">
            <i class="newRetail-bicon newRetail-bicon4"></i>
            <h3>{{$t('retail.retail_73')}}</h3>
            <p>{{$t('retail.retail_74')}}</p>
            <ul class="newRetail-floor-sub clearfix">
              <li>
                <span><i class="rewRetail-bsicon rewRetail-bsicon9"></i>{{$t('retail.retail_75')}}</span>
              </li>
              <li>
                <span><i class="rewRetail-bsicon rewRetail-bsicon8"></i>{{$t('retail.retail_60')}}</span>
              </li>
              <li>
                <span><i class="rewRetail-bsicon rewRetail-bsicon7"></i>{{$t('retail.retail_77')}}</span>
              </li>
            </ul>
            <a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_9" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_9")' data-ga="MiddleContentSec_立即咨询" href="//answer.jd.com/jump/?shortCode=kdWnbLkdVbJC&surveyId=1557021" target="_blank" class="newRetail-floor-btn">{{$t('retail.retail_54')}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="newRetail-floor">
      <div class="w">
        <h2 class="newRetail-floor-title">{{$t('retail.retail_79')}}</h2>
        <ul class="newRetail-products-lst clearfix">
          <li>
            <div class="newRetail-iconbox"><i class="icon-product">&#xe754;</i></div>
            <h3>{{$t('retail.retail_81')}}</h3>
            <p>{{$t('retail.retail_82')}}</p>
            <span class="newRetail-products-price">{{$t('retail.retail_83')}}</span>
            <a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_10" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_10")' data-ga="MiddleContentSec_主机_立即购买" href="//www.jdcloud.com/activity/JD1" target="_blank" class="newRetail-btn-blue">{{$t('retail.retail_17')}}</a>
          </li>
          <li>
            <div class="newRetail-iconbox"><i class="icon-product">&#xe7b0;</i></div>
            <h3>{{$t('retail.retail_86')}}</h3>
            <p>{{$t('retail.retail_87')}}</p>
            <span class="newRetail-products-price">{{$t('retail.retail_88')}}</span>
            <a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_11" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_11")' data-ga="MiddleContentSec_云硬盘_立即购买" href="//answer.jd.com/jump/?shortCode=kdWAnhfbYnXn&surveyId=1557312" class="newRetail-btn-blue" target="_blank">{{$t('retail.retail_17')}}</a>
          </li>
          <li class="last">
            <div class="newRetail-iconbox"><i class="icon-product">&#xe753;</i></div>
            <h3>{{$t('retail.retail_91')}}</h3>
            <p>{{$t('retail.retail_92')}}</p>
            <span class="newRetail-products-price">{{$t('retail.retail_88')}}</span>
            <a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_12" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_12")' data-ga="MiddleContentSec_云数据库_立即购买" href="//answer.jd.com/jump/?shortCode=kdWAnhfbYnXn&surveyId=1557312" target="_blank" class="newRetail-btn-blue">{{$t('retail.retail_17')}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="newRetail-floor newRetail-floor-even">
      <div class="w">
        <h2 class="newRetail-floor-title">{{$t('retail.retail_95')}}</h2>
        <ul class="newRetail-case-tabs clearfix">
          <li class="tab-item" @click="thirdActiveTab(1)" :class="thirdActiveIndex==1?'active':''">{{$t('retail.retail_96')}}<span class="retail-icon"></span></li>
          <li class="tab-item" @click="thirdActiveTab(2)" :class="thirdActiveIndex==2?'active':''">{{$t('retail.retail_97')}}</li>
        </ul>
        <div class="newRetail-case-box recommend-case-box">
          <div class="case-item" v-show="thirdActiveIndex==1">
            <div class="case-sub clearfix">
              <ul class="case-sub-list">
                <li class="case-sub-item" @mouseenter="hover(1)" :class="subActiveIndex==1?'active':''"><span>{{$t('retail.retail_98')}}</span></li>
                <li class="case-sub-item" @mouseenter="hover(2)" :class="subActiveIndex==2?'active':''"><span>{{$t('retail.retail_99')}}</span></li>
                <li class="case-sub-item" @mouseenter="hover(3)" :class="subActiveIndex==3?'active':''"><span>{{$t('retail.retail_100')}}</span></li>
              </ul>
              <div class="case-sub-ct-wrap">
                
                <div class="case-sub-ct" v-show="subActiveIndex==1">
                  <ul class="case-sub-ct-list">
                    <li><a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_13" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_13")' data-ga="MiddleContentSec_快递查询" href="//wxlink.jdcloud.com/market/api/10307" target="_blank">{{$t('retail.retail_101')}}</a></li>
                    <li><a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_14" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_14")' data-ga="MiddleContentSec_IP地址真人度查询" href="//wx.jdcloud.com/market/api/10363" target="_blank">{{$t('retail.retail_102')}}</a></li>
                    <li><a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_15" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_15")' data-ga="MiddleContentSec_IP地址经纬度覆盖面" href="//wx.jdcloud.com/market/api/10365" target="_blank">{{$t('retail.retail_103')}}</a></li>
                    <li><a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_16" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_16")' data-ga="MiddleContentSec_IP地址类型查询" href="//wx.jdcloud.com/market/api/10364" target="_blank">{{$t('retail.retail_104')}}</a></li>
                    <li><a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_17" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_17")' data-ga="MiddleContentSec_IP地址区县级归属地" href="//wx.jdcloud.com/market/api/10366" target="_blank">{{$t('retail.retail_105')}}</a></li>
                    <li><a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_18" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_18")' data-ga="MiddleContentSec_IP数据API合集4in1" href="//wx.jdcloud.com/market/datas/18/11637" target="_blank">{{$t('retail.retail_106')}}</a></li>
                    <li><a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_19" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_19")' data-ga="MiddleContentSec_快递物流查询" href="//wx.jdcloud.com/market/api/12115" target="_blank">{{$t('retail.retail_107')}}</a></li>
                    <li><a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_20" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_20")' data-ga="MiddleContentSec_全球快递物流查询" href="//wx.jdcloud.com/market/api/12147" target="_blank">{{$t('retail.retail_108')}}</a></li>
                  </ul>
                </div>
                <div class="case-sub-ct" v-show="subActiveIndex==2">
                  <ul class="case-sub-ct-list">
                    <li><a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_21" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_21")' data-ga="MiddleContentSec_京东商品评价详情API" href="//wx.jdcloud.com/market/api/12203" target="_blank">{{$t('retail.retail_109')}}</a></li>
                    <li><a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_22" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_22")' data-ga="MiddleContentSec_京东高级整店搜索API" href="//wx.jdcloud.com/market/api/12202" target="_blank">{{$t('retail.retail_110')}}</a></li>
                    <li><a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_23" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_23")' data-ga="MiddleContentSec_海淘用户购买力查询" href="//wx.jdcloud.com/market/datas/31/11712" target="_blank">{{$t('retail.retail_111')}}</a></li>
                    <li><a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_24" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_24")' data-ga="MiddleContentSec_跨境电商商品个性化推荐" href="//wx.jdcloud.com/market/datas/31/11777" target="_blank">{{$t('retail.retail_112')}}</a></li>
                    <li><a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_25" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_25")' data-ga="MiddleContentSec_京东热词" href="//wx.jdcloud.com/market/datas/31/10464" target="_blank">{{$t('retail.retail_113')}}</a></li>
                    <li><a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_26" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_26")' data-ga="MiddleContentSec_京东商品关联词" href="//wx.jdcloud.com/market/datas/31/10465" target="_blank">{{$t('retail.retail_114')}}</a></li>
                    <li><a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_27" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_27")' data-ga="MiddleContentSec_京东商品联动" href="//wx.jdcloud.com/market/datas/31/10471" target="_blank">{{$t('retail.retail_115')}}</a></li>
                    <li><a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_28" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_28")' data-ga="MiddleContentSec_短信营销" href="//wx.jdcloud.com/market/datas/16/11785" target="_blank">{{$t('retail.retail_116')}}</a></li>
                  </ul>
                </div>
                <div class="case-sub-ct" v-show="subActiveIndex==3">
                  <ul class="case-sub-ct-list">
                    <li><a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_29" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_29")' data-ga="MiddleContentSec_语音验证码接口" href="//wx.jdcloud.com/market/datas/18/11290" target="_blank">{{$t('retail.retail_117')}}</a></li>
                    <li><a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_30" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_30")' data-ga="MiddleContentSec_身份证实名认证" href="//wxlink.jdcloud.com/market/api/11077" target="_blank">{{$t('retail.retail_118')}}</a></li>
                    <li><a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_31" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_31")' data-ga="MiddleContentSec_营业执照识别" href="//wxlink.jdcloud.com/market/api/11723" target="_blank">{{$t('retail.retail_119')}}</a></li>
                    <li><a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_32" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_32")' data-ga="MiddleContentSec_图片验证码识别" href="//wxlink.jdcloud.com/market/api/11852" target="_blank">{{$t('retail.retail_120')}}</a></li>
                    <li><a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_33" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_33")' data-ga="MiddleContentSec_身份证返照验证" href="//wx.jdcloud.com/market/datas/5/11934" target="_blank">{{$t('retail.retail_121')}}</a></li>
                    <li><a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_34" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_34/3/4元素验证")' data-ga="MiddleContentSec_银行卡2/3/4元素验证" href="//wx.jdcloud.com/market/datas/5/11935" target="_blank">{{$t('retail.retail_122')}}</a></li>
                    <li><a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_35" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_35")' data-ga="MiddleContentSec_手机号机主二要素验证" href="//wx.jdcloud.com/market/api/11920" target="_blank">{{$t('retail.retail_123')}}</a></li>
                    <li><a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_36" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_36")' data-ga="MiddleContentSec_地址真实性核验" href="//wx.jdcloud.com/market/datas/5/12117" target="_blank">{{$t('retail.retail_124')}}</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="case-item" v-show="thirdActiveIndex==2">
            <div class="case-sub clearfix case-sub-row">
              <ul class="case-sub-list">
                <li class="case-sub-item active"><span>{{$t('retail.retail_125')}}</span></li>
              </ul>
              <div class="case-sub-ct-wrap">
                <div class="case-sub-ct">
                  <ul class="case-sub-ct-list">
                    <li><a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_37" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_37")' data-ga="MiddleContentSec_智慧记进销存管理系统" href="//market.jdcloud.com/576205.html" target="_blank">{{$t('retail.retail_126')}}</a></li>
                    <li><a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_38" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_38")' data-ga="MiddleContentSec_360电商云OMS" href="//market.jdcloud.com/575802.html" target="_blank">{{$t('retail.retail_127')}}</a><span class="tips-hover">{{$t('retail.retail_128')}}</span></li>
                    <li><a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_39" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_39")' data-ga="MiddleContentSec_融成云打印系统" href="//market.jdcloud.com/548805.html" target="_blank">{{$t('retail.retail_129')}}</a></li>
                    <li><a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_40" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_40")' data-ga="MiddleContentSec_管易云ERP" href="//market.jdcloud.com/530009.html" target="_blank">{{$t('retail.retail_130')}}</a></li>
                    <li><a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_41" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_41")' data-ga="MiddleContentSec_有爱ERP系统" href="//market.jdcloud.com/275628.html" target="_blank">{{$t('retail.retail_131')}}</a></li>
                    <li><a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_42" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_42")' data-ga="MiddleContentSec_奥斯在线云ERP进销存" href="//market.jdcloud.com/275642.html" target="_blank">{{$t('retail.retail_132')}}</a></li>
                    <li><a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_43" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_43")' data-ga="MiddleContentSec_融成ERP进销存" href="//market.jdcloud.com/575202.html" target="_blank">{{$t('retail.retail_133')}}</a></li>
                    <li><a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_44" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_44")' data-ga="MiddleContentSec_管家婆云ERP" href="//market.jdcloud.com/274607.html" target="_blank">{{$t('retail.retail_134')}}</a></li>
                    <li><a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_45" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_45 中文版")' data-ga="MiddleContentSec_OpenCart 中文版" href="//market.jdcloud.com/571804.html" target="_blank">{{$t('retail.retail_135')}}</a></li>
                    <li><a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_46" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_46 及时沟通")' data-ga="MiddleContentSec_IM 及时沟通" href="//market.jdcloud.com/574801.html" target="_blank">{{$t('retail.retail_136')}}</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <p class="newRetail-tips"><i>{{$t('retail.retail_137')}}</i>{{$t('retail.retail_138')}}</p>
        </div>
      </div>
    </div>
    <div class="m-event" id="particles-js" v-if="!isLogin">
      <div class="m-event-bd">
        <h4>{{$t('retail.retail_139')}}</h4>
        <a clstag="Solution|keycount|MiddleContentSec|Solution_newretail_47" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_47")' data-ga="MiddleContentSec_立即注册" target="_blank" href="//uc.jdcloud.com/reg?ReturnUrl=//www.jdcloud.com/">{{$t('retail.retail_140')}}</a>
      </div>
    </div>
  </div>
</template>

<style>

/* RWD start */
/* @import  '//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/newRetail/newRetail.css'; */
.newRetail-banner{color:#fff;background-color:#1a284e}.newRetail-banner .w{margin:auto;width:1200px;height:500px;background:url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/newRetail/i/banner.png) right center no-repeat}.newRetail-banner .newRetail-title{box-sizing:border-box;width:530px;padding:80px 0 30px;font-size:44px}.newRetail-banner .newRetail-des{width:530px;line-height:30px;font-size:18px}.newRetail-banner .newRetail-des+.newRetail-des{margin-top:18px}.newRetail-banner .newRetail-btn-wrap{padding-top:60px}.newRetail-banner .newRetail-btn{display:inline-block;padding:0 30px;line-height:35px;background:#2f94f2;color:#fff;font-size:16px}.newRetail-banner .newRetail-btn:hover{color:#fff}.newRetail-floor{padding-bottom:80px;background-color:#fff}.newRetail-floor .cl{overflow:hidden}.newRetail-floor .w{position:relative}.newRetail-floor.newRetail-floor-even{background-color:#eef3f7}.newRetail-floor.newRetail-floor-even .newRetail-case-tabs li{border-bottom-color:#eef3f7}.newRetail-floor .newRetail-floor-title{line-height:56px;font-size:36px;color:#222;text-align:center;padding:40px 0 70px}.newRetail-floor .newRetail-floor-list{box-shadow:0 0 21px rgba(134,194,225,.3);padding:20px 0;*border:1px solid #e0e0e0;zoom:1}.newRetail-floor .newRetail-floor-li{border-right:1px solid #e0e0e0;padding:15px;width:210px;float:left;text-align:center;height:350px;overflow:hidden;-webkit-transition:all .2s;-o-transition:all .2s;transition:all .2s}.newRetail-floor .newRetail-floor-li.last{border:0 none}.newRetail-floor .newRetail-floor-li h3{padding:20px 0;font-size:24px;color:#333}.newRetail-floor .newRetail-floor-li p{line-height:24px;text-align:left;color:#666}.newRetail-floor .newRetail-floor-li .newRetail-bicon{display:inline-block;width:50px;height:50px;background:url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/newRetail/i/list_icon1.png) center center no-repeat;background-size:contain}.newRetail-floor .newRetail-floor-li .newRetail-bicon2{background-image:url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/newRetail/i/list_icon2.png)}.newRetail-floor .newRetail-floor-li .newRetail-bicon3{background-image:url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/newRetail/i/list_icon3.png)}.newRetail-floor .newRetail-floor-li .newRetail-bicon4{background-image:url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/newRetail/i/list_icon4.png)}.newRetail-floor .newRetail-floor-li .newRetail-floor-sub{display:none;position:relative;padding:35px 0 20px;margin-top:20px;height:110px}.newRetail-floor .newRetail-floor-li .newRetail-floor-sub li{float:left;width:50%;color:#666;text-align:left;padding:0 0 15px}.newRetail-floor .newRetail-floor-li .newRetail-floor-sub li span{display:inline-block;max-height:42px;overflow:hidden;padding:0 10px 0 0}.newRetail-floor .newRetail-floor-li .newRetail-floor-sub:after{content:"";position:absolute;border-style:solid;border-color:transparent transparent #2f94f2;border-width:10px;top:-20px;left:40px}.newRetail-floor .newRetail-floor-li .newRetail-floor-sub:before{content:"";position:absolute;border-style:solid;border-color:transparent transparent #eef3f7;border-width:10px;top:-19px;left:40px;z-index:9}.newRetail-floor .newRetail-floor-li .rewRetail-bsicon{float:left;background-image:url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/newRetail/i/list_sp.png);background-repeat:no-repeat}.newRetail-floor .newRetail-floor-li .rewRetail-bsicon.rewRetail-bsicon1{margin-right:17px;width:33px;height:28px;background-position:0 0}.newRetail-floor .newRetail-floor-li .rewRetail-bsicon.rewRetail-bsicon2{margin-right:16px;width:34px;height:32px;background-position:0 -30px}.newRetail-floor .newRetail-floor-li .rewRetail-bsicon.rewRetail-bsicon3{margin-right:20px;width:30px;height:33px;background-position:-40px 0}.newRetail-floor .newRetail-floor-li .rewRetail-bsicon.rewRetail-bsicon4{margin-right:20px;width:30px;height:32px;background-position:0 -70px}.newRetail-floor .newRetail-floor-li .rewRetail-bsicon.rewRetail-bsicon5{margin-right:6px;width:44px;height:21px;background-position:-80px 0}.newRetail-floor .newRetail-floor-li .rewRetail-bsicon.rewRetail-bsicon6{margin-right:20px;width:30px;height:32px;background-position:-80px -30px}.newRetail-floor .newRetail-floor-li .rewRetail-bsicon.rewRetail-bsicon7{margin-right:11px;width:39px;height:30px;background-position:-40px -40px}.newRetail-floor .newRetail-floor-li .rewRetail-bsicon.rewRetail-bsicon8{margin-right:16px;width:34px;height:25px;background-position:-80px -70px}.newRetail-floor .newRetail-floor-li .rewRetail-bsicon.rewRetail-bsicon9{margin-right:14px;width:36px;height:31px;background-position:0 -110px}.newRetail-floor .newRetail-floor-li .rewRetail-bsicon.rewRetail-bsicon10{margin-right:11px;width:29px;height:33px;background-position:-40px -80px}.newRetail-floor .newRetail-floor-li .rewRetail-bsicon.rewRetail-bsicon11{margin-right:20px;width:30px;height:30px;background-position:-70px -100px}.newRetail-floor .newRetail-floor-li .rewRetail-bsicon.rewRetail-bsicon12{margin-right:6px;width:30px;height:27px;background-position:0 -150px}.newRetail-floor .newRetail-floor-li .newRetail-floor-btn{display:none;border:1px solid #2f94f2;color:#2f94f2;font-size:16px;line-height:33px;padding:0 25px}.newRetail-floor .newRetail-floor-li .newRetail-floor-btn:hover{color:#fff;background-color:#2f94f2}.newRetail-floor .newRetail-floor-li.on{width:435px;border-right:1px solid #2f94f2}.newRetail-floor .newRetail-floor-li.on .newRetail-bicon{float:left;width:80px;height:80px;margin-top:10px;margin-right:15px}.newRetail-floor .newRetail-floor-li.on h3{padding:0;text-align:left;color:#2f94f2}.newRetail-floor .newRetail-floor-li.on p{color:#2f94f2;max-height:72px;overflow:hidden}.newRetail-floor .newRetail-floor-li.on .newRetail-floor-sub{display:block;border-top:1px solid #2f94f2}.newRetail-floor .newRetail-floor-li.on .newRetail-floor-btn{display:inline-block}.newRetail-floor .newRetail-floor-li.on.last{border:0 none}.newRetail-floor .newRetail-products-lst .newRetail-iconbox{text-align:center;background:#eef3f7;height:170px;line-height:170px}.newRetail-floor .newRetail-products-lst .icon-product{font-size:82px;color:#2f94f2}.newRetail-floor .newRetail-products-lst li{padding:0 0 50px;margin-right:15px;float:left;text-align:center;width:385px;background:#fff;border:1px solid #e0e0e0;box-shadow:0 0 17px rgba(134,194,225,.3);-webkit-transition:all .3s;-o-transition:all .3s;transition:all .3s}.newRetail-floor .newRetail-products-lst li:hover{-webkit-transform:scale(1.05);-o-transform:scale(1.05);transform:scale(1.05);border:1px solid #2f94f2}.newRetail-floor .newRetail-products-lst li:hover .tgy-btn-blue{background:#2f94f2;color:#fff}.newRetail-floor .newRetail-products-lst li h3{padding:20px;line-height:44px;font-size:24px;color:#222;text-align:left}.newRetail-floor .newRetail-products-lst li p{padding:0 20px;max-height:160px;overflow:hidden;color:#666;line-height:32px;text-align:left}.newRetail-floor .newRetail-products-lst .newRetail-products-price{display:block;padding:10px 0 20px 20px;color:#fb6928;font-size:20px;text-align:left}.newRetail-floor .newRetail-products-lst .newRetail-btn-blue{display:inline-block;padding:0 50px;line-height:48px;border:1px solid #2f94f2;font-size:20px;color:#2f94f2}.newRetail-floor .newRetail-products-lst .newRetail-btn-blue:hover{color:#fff;background-color:#2f94f2}.newRetail-floor .newRetail-products-lst .last{margin-right:0}.newRetail-floor .newRetail-case-tabs{border-bottom:1px solid #7387b7;padding-left:15px}.newRetail-floor .newRetail-case-tabs li{float:left;max-width:25%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:#222;font-size:22px;height:44px;line-height:44px;border-bottom:4px solid #fff;cursor:pointer}.newRetail-floor .newRetail-case-tabs li+li{margin-left:20px}.newRetail-floor .newRetail-case-tabs li.active{border-bottom-color:#2f94f2}.newRetail-floor .newRetail-case-box{color:#222}.newRetail-floor .newRetail-case-box .case-item{font-size:14px;padding-top:40px;overflow:hidden}.newRetail-floor .newRetail-case-box .case-item .case-cont{width:585px;line-height:24px;padding-left:15px}.newRetail-floor .newRetail-case-box .case-item .case-cont p{margin-bottom:20px}.newRetail-floor .newRetail-case-box .case-item .case-cont .tit{font-size:16px;color:#fff;margin-right:0}.newRetail-floor .newRetail-case-box .case-item .case-cont span{color:#6eb9ff;margin-right:30px}.newRetail-floor .newRetail-case-box .case-item .case-cont .case-cont-btn{display:inline-block;margin-top:65px;min-width:120px;text-align:center;height:36px;line-height:36px;color:#fff;background-color:#2f94f2}.newRetail-floor .newRetail-case-box .case-item .case-features{color:#666}.newRetail-floor .newRetail-case-box .case-item .case-features dt{font-size:16px}.newRetail-floor .newRetail-case-box .case-item .case-features dd{font-size:14px}.newRetail-floor .newRetail-case-box .case-item .case-image{float:right;width:583px;height:284px}.newRetail-floor .newRetail-tips{margin-top:10px;padding-left:20px;line-height:34px;font-size:14px;background-color:#f8fcff;border:1px solid #e0e0e0;color:#666}.newRetail-floor .newRetail-tips i{margin-right:8px;display:inline-block;vertical-align:middle;width:15px;text-align:center;height:15px;line-height:15px;border-radius:50%;color:#fff;background-color:#ff803b}.newRetail-floor .recommend-case-box .case-sub{border:1px solid #e0e0e0;box-shadow:0 0 17px rgba(134,194,225,.3)}.newRetail-floor .recommend-case-box .case-sub.case-sub-row .case-sub-item{height:318px}.newRetail-floor .recommend-case-box .case-sub.case-sub-row .case-sub-ct-list{text-align:left}.newRetail-floor .recommend-case-box .case-sub.case-sub-row .case-sub-ct-list li{margin:28px 39px 0;text-align:center}.newRetail-floor .case-sub-list{float:left;height:318px;background-color:#fafafa}.newRetail-floor .case-sub-list .case-sub-item{width:103px;height:106px;box-sizing:border-box;border-top:1px solid #e0e0e0;text-align:center;font-size:18px;color:#666}.newRetail-floor .case-sub-list .case-sub-item span,.newRetail-floor .case-sub-list .case-sub-item:after{display:inline-block;vertical-align:middle}.newRetail-floor .case-sub-list .case-sub-item:after{content:'';width:0;height:100%}.newRetail-floor .case-sub-list .case-sub-item:first-child{border-top:0 none}.newRetail-floor .case-sub-list .case-sub-item.active{background-color:#f0f4f8}.newRetail-floor .case-sub-ct-wrap{float:left;width:1095px;background-color:#fff}.newRetail-floor .case-sub-ct-list{height:318px;text-align:center;font-size:0}.newRetail-floor .case-sub-ct-list li{position:relative;margin:60px 38px 0;display:inline-block}.newRetail-floor .case-sub-ct-list li>a{position:relative;display:block;padding:0 5px;box-sizing:border-box;width:192px;height:68px;line-height:68px;border:1px solid #2f94f2;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;color:#2f94f2;font-size:16px}.newRetail-floor .case-sub-ct-list li:hover .tips-hover{display:block}.newRetail-floor .case-sub-ct-list .tips-hover{display:none;position:absolute;z-index:5;top:55px;left:36px;padding:0 5px;white-space:nowrap;min-width:204px;text-align:center;height:36px;line-height:36px;font-size:14px;color:#666;border:1px solid #eee;border-radius:3px;background-color:#fff;box-shadow:0 0 3px 0 rgba(0,0,0,.13)}.newRetail-floor .case-sub-ct-list .tips-hover:before{content:'';position:absolute;left:28px;top:-10px;width:0;height:0;border-style:solid;border-width:0 4px 8px;border-color:transparent transparent #eee}.newRetail-floor .case-sub-ct-list .tips-hover:after{content:'';position:absolute;left:28px;top:-8px;width:0;height:0;border-style:solid;border-width:0 4px 8px;border-color:transparent transparent #fff}.newRetail-floor .retail-icon{display:inline-block;margin-left:2px;vertical-align:middle;width:24px;height:24px;background:url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/newRetail/i/list_sp.png) -40px -120px no-repeat}.jdc-lang-en .newRetail-floor .retail-icon{background:url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/newRetail/i/sale.png) center no-repeat}
  @import "~static/css/index/m-event.css";


</style>

<script>
  import apiUrl from "api"

  export default{
    data(){
      return {
        scenesActiveIndex: 1,
        solutionOnIndex: 1,
        thirdActiveIndex: 1,
        subActiveIndex: 1,
        isLogin: false
      }
    },
    created(){
      this.getUserInfo();
    },
    methods: {
      scenesTab(index,gaTitle){
        this.scenesActiveIndex = index;
        this.gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_newretail_tab_"+gaTitle)
      },
      solutionTab(index){
        this.solutionOnIndex = index;
      },
      thirdActiveTab(index){
        this.thirdActiveIndex = index;
      },
      hover(index){
        this.subActiveIndex = index;
      },
      //登录校验
      getUserInfo(){
        this.$http.get(apiUrl.api.userInfo).then(response => {
          if (response.body.code != 0) {
            //非登录状态
            this.isLogin = false;
            if($('#particles-js').length) {
              seajs.use("//static-portal.jdcloud.com/jcloud/jc/1.2.0/js/particles.min.js", function () {
                particlesJS("particles-js", {
                  "particles": {
                    "number": {
                      "value": 100,
                      "density": {
                        "enable": true,
                        "value_area": 800
                      }
                    },
                    "color": {
                      "value": "#ffffff"
                    },
                    "shape": {
                      "type": "circle",
                      "stroke": {
                        "width": 0,
                        "color": "#000000"
                      },
                      "polygon": {
                        "nb_sides": 5
                      },
                      "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                      }
                    },
                    "opacity": {
                      "value": 0.2,
                      "random": false,
                      "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                      }
                    },
                    "size": {
                      "value": 4,
                      "random": true,
                      "anim": {
                        "enable": false,
                        "speed": 20,
                        "size_min": 0.1,
                        "sync": false
                      }
                    },
                    "line_linked": {
                      "enable": true,
                      "distance": 150,
                      "color": "#ffffff",
                      "opacity": 0.1,
                      "width": 1
                    },
                    "move": {
                      "enable": true,
                      "speed": 2,
                      "direction": "none",
                      "random": true,
                      "straight": false,
                      "out_mode": "bounce",
                      "bounce": false,
                      "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                      }
                    }
                  },
                  "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                      "onhover": {
                        "enable": false,
                        "mode": "grab"
                      },
                      "onclick": {
                        "enable": false,
                        "mode": "push"
                      },
                      "resize": true
                    },
                    "modes": {
                      "grab": {
                        "distance": 140,
                        "line_linked": {
                          "opacity": 1
                        }
                      },
                      "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                      },
                      "repulse": {
                        "distance": 200,
                        "duration": 0.4
                      },
                      "push": {
                        "particles_nb": 4
                      },
                      "remove": {
                        "particles_nb": 2
                      }
                    }
                  },
                  "retina_detect": true
                });
              })
            }
          }else{
            this.isLogin = true;
          }
        }, response => {
          console.log('请求userInfo错误')
        });
      },
    }
  }
</script>
