<template>
  <div class="solution-qy">
    <div class="qy-banner">
      <div class="qy-banner-wrap">
        <h2 class="qy-banner-title">
          {{$t('enterprisecloud.enterprisecloud_1')}}
        </h2>
        <p class="qy-banner-des">
         {{$t('enterprisecloud.enterprisecloud_2')}}
        </p>
      </div>
    </div>

    <div class="qy-floor">
      <div class="qy-floor-hd">
        <h3 class="tit">{{$t('enterprisecloud.enterprisecloud_3')}}</h3>
      </div>
      <div class="qy-floor-bd">
        <div class="qy-floor-tab">
          <ul class="tab-nav">
            <li clstag="Solution|keycount|MiddleContentSec|Solution_qycloud_1" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_qycloud_1")' data-ga="MiddleContentSec_企业邮箱"  class="on">{{$t('enterprisecloud.enterprisecloud_4')}}</li>
            <li clstag="Solution|keycount|MiddleContentSec|Solution_qycloud_2" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_qycloud_2")' data-ga="MiddleContentSec_企业云盘" >{{$t('enterprisecloud.enterprisecloud_5')}}</li>
            <li clstag="Solution|keycount|MiddleContentSec|Solution_qycloud_3" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_qycloud_3")' data-ga="MiddleContentSec_企业服务" >{{$t('enterprisecloud.enterprisecloud_6')}}</li>
          </ul>
          <div class="tab-ct">
            <div class="tab-item tab-item1 on">
              <div class="row">
                <div class="col-6">
                  <h4 class="tit">{{$t('enterprisecloud.enterprisecloud_7')}}</h4>
                  <p class="txt">{{$t('enterprisecloud.enterprisecloud_8')}}</p>
                  <ul class="card-box f-cb">
                    <li>
                      <dl>
                        <dt>{{$t('enterprisecloud.enterprisecloud_9')}}</dt>
                        <dd><strong>{{$t('enterprisecloud.enterprisecloud_10')}}</strong>{{$t('enterprisecloud.enterprisecloud_11')}}</dd>
                        <dd><strong class="c-orange">{{$t('enterprisecloud.enterprisecloud_12')}}</strong>{{$t('enterprisecloud.enterprisecloud_13')}}</dd>
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dt>{{$t('enterprisecloud.enterprisecloud_14')}}</dt>
                        <dd><strong>{{$t('enterprisecloud.enterprisecloud_15')}}</strong>{{$t('enterprisecloud.enterprisecloud_11')}}</dd>
                        <dd><strong class="c-orange">{{$t('enterprisecloud.enterprisecloud_17')}}</strong>{{$t('enterprisecloud.enterprisecloud_13')}}</dd>
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dt>{{$t('enterprisecloud.enterprisecloud_19')}}</dt>
                        <dd><strong>{{$t('enterprisecloud.enterprisecloud_20')}}</strong>{{$t('enterprisecloud.enterprisecloud_11')}}</dd>
                        <dd><strong class="c-orange">{{$t('enterprisecloud.enterprisecloud_22')}}</strong>{{$t('enterprisecloud.enterprisecloud_13')}}</dd>
                      </dl>
                    </li>
                  </ul>
                  <!--<div class="tips-box">4.20-4.30活动期间产品<span class="c-orange">免费试用</span>一个月</div>-->
                  <div class="btn-box">
                    <a clstag="Solution|keycount|MiddleContentSec|Solution_qycloud_4" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_qycloud_4")' data-ga="MiddleContentSec_限时免费" href="//market.jdcloud.com/576651.html?orderSource=1000001" class="qy-btn" target="_blank">{{$t('enterprisecloud.enterprisecloud_24')}}</a><span class="tips">{{$t('enterprisecloud.enterprisecloud_25')}}</span>
                  </div>
                </div>
                <div class="col-6">
                  <div class="pic"></div>
                </div>
              </div>
            </div>
            <div class="tab-item tab-item2">
              <div class="row">
                <div class="col-6">
                  <h4 class="tit">{{$t('enterprisecloud.enterprisecloud_26')}}</h4>
                  <p class="txt">{{$t('enterprisecloud.enterprisecloud_27')}}</p>
                  <ul class="card-box f-cb">
                    <li>
                      <dl>
                        <dt>{{$t('enterprisecloud.enterprisecloud_9')}}</dt>
                        <dd><strong>{{$t('enterprisecloud.enterprisecloud_15')}}</strong>{{$t('enterprisecloud.enterprisecloud_11')}}</dd>
                        <dd><strong class="c-orange">{{$t('enterprisecloud.enterprisecloud_31')}}</strong>{{$t('enterprisecloud.enterprisecloud_13')}}</dd>
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dt>{{$t('enterprisecloud.enterprisecloud_14')}}</dt>
                        <dd><strong>{{$t('enterprisecloud.enterprisecloud_34')}}</strong>{{$t('enterprisecloud.enterprisecloud_11')}}</dd>
                        <dd><strong class="c-orange">{{$t('enterprisecloud.enterprisecloud_36')}}</strong>{{$t('enterprisecloud.enterprisecloud_13')}}</dd>
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dt>{{$t('enterprisecloud.enterprisecloud_19')}}</dt>
                        <dd><strong>{{$t('enterprisecloud.enterprisecloud_39')}}</strong>{{$t('enterprisecloud.enterprisecloud_11')}}</dd>
                        <dd><strong class="c-orange">{{$t('enterprisecloud.enterprisecloud_41')}}</strong>{{$t('enterprisecloud.enterprisecloud_13')}}</dd>
                      </dl>
                    </li>
                  </ul>
                  <!--<div class="tips-box">4.20-4.30活动期间产品<span class="c-orange">免费试用</span>一个月</div>-->
                  <div class="btn-box">
                    <a clstag="Solution|keycount|MiddleContentSec|Solution_qycloud_5" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_qycloud_5")' data-ga="MiddleContentSec_限时免费" href="//market.jdcloud.com/576652.html?orderSource=1000001" class="qy-btn" target="_blank">{{$t('enterprisecloud.enterprisecloud_24')}}</a><span class="tips">{{$t('enterprisecloud.enterprisecloud_25')}}</span>
                  </div>
                </div>
                <div class="col-6">
                  <div class="pic"></div>
                </div>
              </div>
            </div>
            <div class="tab-item tab-item3">
              <div class="row">
                <div class="col-6">
                  <p class="txt">{{$t('enterprisecloud.enterprisecloud_45')}}</p>
                  <ul class="card-box card-box2 f-cb">
                    <li>
                      <dl>
                        <dt>{{$t('enterprisecloud.enterprisecloud_46')}}</dt>
                        <dd><a clstag="Solution|keycount|MiddleContentSec|Solution_qycloud_6" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_qycloud_6")' data-ga="MiddleContentSec_电子商务" href="//market.jdcloud.com/service/list?cid=16405" target="_blank">{{$t('enterprisecloud.enterprisecloud_47')}}</a></dd>
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dt>{{$t('enterprisecloud.enterprisecloud_48')}}</dt>
                        <dd><a clstag="Solution|keycount|MiddleContentSec|Solution_qycloud_7" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_qycloud_7")' data-ga="MiddleContentSec_社区论坛" href="//market.jdcloud.com/service/list?cid=24001" target="_blank">{{$t('enterprisecloud.enterprisecloud_47')}}</a></dd>
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dt>{{$t('enterprisecloud.enterprisecloud_50')}}</dt>
                        <dd><a clstag="Solution|keycount|MiddleContentSec|Solution_qycloud_8" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_qycloud_8")' data-ga="MiddleContentSec_企业展示" href="//market.jdcloud.com/service/list?cid=16627" target="_blank">{{$t('enterprisecloud.enterprisecloud_47')}}</a></dd>
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dt>{{$t('enterprisecloud.enterprisecloud_52')}}</dt>
                        <dd><a clstag="Solution|keycount|MiddleContentSec|Solution_qycloud_9" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_qycloud_9")' data-ga="MiddleContentSec_短信通讯" href="//wx.jdcloud.com/market/datas/16/10665" target="_blank">{{$t('enterprisecloud.enterprisecloud_47')}}</a></dd>
                      </dl>
                    </li>
                  </ul>
                </div>
                <div class="col-6">
                  <div class="pic"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="qy-floor bg-qy-floor">
      <div class="qy-floor-hd">
        <h3 class="tit">{{$t('enterprisecloud.enterprisecloud_54')}}</h3>
      </div>
      <div class="qy-floor-bd">
        <div class="qy-framework f-cb">
          <div class="framework-left" >
            <img src="//misc.360buyimg.com/lib/img/e/blank.gif"  width="770" height="480" usemap="#maparea" alt="" hidefocus="true" style="z-index: 20">
            <div class="pic1"></div>
            <div class="pic2"></div>
            <div class="pic-active pic-active1"></div>
            <div class="pic-active pic-active2 active"></div>
            <div class="pic-active pic-active3"></div>
            <div class="pic-active pic-active4"></div>
            <map id="maparea" name="maparea">
              <area shape="poly" coords="35,221,305,65,432,140,165,294" href="javascript:;" title="数据接入区" alt="数据接入区">
              <area shape="poly" coords="188,309,457,155,581,225,316,380" href="javascript:;" title="弹性计算区" alt="弹性计算区">
              <area shape="poly" coords="338,397,611,242,733,315,471,470" href="javascript:;" title="数据缓存区" alt="数据缓存区" >
              <area shape="poly" coords="377,71,501,0,763,150,633,222" href="javascript:;" title="服务区" alt="服务区">
              <area shape="poly" coords="377,71,501,0,763,150,633,222" href="javascript:;" title="服务区" alt="服务区">
            </map>
          </div>
          <div class="framework-right">
            <h5>{{$t('enterprisecloud.enterprisecloud_55')}}</h5>
            <div class="framework-ct ">
              <dl>
                <dt>{{$t('enterprisecloud.enterprisecloud_56')}}</dt>
                <dd>
                  <p class="det">{{$t('enterprisecloud.enterprisecloud_57')}}</p>
                  <a clstag="Solution|keycount|MiddleContentSec|Solution_qycloud_10" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_qycloud_10")' data-ga="MiddleContentSec_IP高防_立即购买" href="//www.jdcloud.com/products/ipanti" class="qy-btn" target="_blank">{{$t('enterprisecloud.enterprisecloud_58')}}</a>
                </dd>
              </dl>
              <dl>
                <dt>{{$t('enterprisecloud.enterprisecloud_59')}}</dt>
                <dd>
                  <p class="det">{{$t('enterprisecloud.enterprisecloud_60')}}</p>
                  <a clstag="Solution|keycount|MiddleContentSec|Solution_qycloud_11" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_qycloud_11")' data-ga="MiddleContentSec_负载均衡_立即购买" href="//www.jdcloud.com/products/loadbalance" class="qy-btn" target="_blank">{{$t('enterprisecloud.enterprisecloud_58')}}</a>
                </dd>
              </dl>
            </div>
            <div class="framework-ct active">
              <dl>
                <dt>{{$t('enterprisecloud.enterprisecloud_62')}}</dt>
                <dd>
                  <p class="det">{{$t('enterprisecloud.enterprisecloud_63')}}</p>
                  <div class="yzj-box">
                    <div class="yzj-item g-table">
                      <div class="g-cell">
                        <p class="txt1">{{$t('enterprisecloud.enterprisecloud_64')}}</p>
                      </div>
                      <div class="g-cell btn-box">
                        <a clstag="Solution|keycount|MiddleContentSec|Solution_qycloud_12" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_qycloud_12")' data-ga="MiddleContentSec_免费使用" href="//market.jdcloud.com/576601.html" class="qy-btn" target="_blank">{{$t('enterprisecloud.enterprisecloud_65')}}</a>
                      </div>
                    </div>
                    <div class="yzj-item g-table">
                      <div class="g-cell">
                        <div class="txt2">
                          <p>{{$t('enterprisecloud.enterprisecloud_66')}}</p>
                          <strong>{{$t('enterprisecloud.enterprisecloud_67')}}</strong>
                        </div>
                      </div>
                      <div class="g-cell">
                        <div class="txt2">
                          <p>{{$t('enterprisecloud.enterprisecloud_68')}}</p>
                          <strong>{{$t('enterprisecloud.enterprisecloud_69')}}</strong>
                        </div>
                      </div>
                      <div class="g-cell">
                        <div class="txt2">
                          <p>{{$t('enterprisecloud.enterprisecloud_70')}}</p>
                          <strong>{{$t('enterprisecloud.enterprisecloud_71')}}</strong>
                        </div>
                      </div>
                      <div class="g-cell btn-box">
                        <div class="c-orange">{{$t('enterprisecloud.enterprisecloud_72')}}<span>{{$t('enterprisecloud.enterprisecloud_73')}}</span>{{$t('enterprisecloud.enterprisecloud_74')}}</div>
                        <a clstag="Solution|keycount|MiddleContentSec|Solution_qycloud_13" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_qycloud_13")' data-ga="MiddleContentSec_立即购买_28" href="//promotion.jcloud.com/productTrialforPay?uuid=5b71754c658b4dfbaa55878fa6883f2b" class="qy-btn" target="_blank">{{$t('enterprisecloud.enterprisecloud_58')}}</a>
                      </div>
                    </div>
                    <div class="yzj-item g-table">
                      <div class="g-cell">
                        <div class="txt2">
                          <p>{{$t('enterprisecloud.enterprisecloud_66')}}</p>
                          <strong>{{$t('enterprisecloud.enterprisecloud_67')}}</strong>
                        </div>
                      </div>
                      <div class="g-cell">
                        <div class="txt2">
                          <p>{{$t('enterprisecloud.enterprisecloud_68')}}</p>
                          <strong>{{$t('enterprisecloud.enterprisecloud_79')}}</strong>
                        </div>
                      </div>
                      <div class="g-cell">
                        <div class="txt2">
                          <p>{{$t('enterprisecloud.enterprisecloud_70')}}</p>
                          <strong>{{$t('enterprisecloud.enterprisecloud_71')}}</strong>
                        </div>
                      </div>
                      <div class="g-cell btn-box">
                        <div class="c-orange">{{$t('enterprisecloud.enterprisecloud_72')}}<span>{{$t('enterprisecloud.enterprisecloud_83')}}</span>{{$t('enterprisecloud.enterprisecloud_74')}}</div>
                        <a clstag="Solution|keycount|MiddleContentSec|Solution_qycloud_14" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_qycloud_14")' data-ga="MiddleContentSec_立即购买_55" href="//promotion.jcloud.com/productTrialforPay?uuid=6492100fcb0d4b608ae68164d714bfd2" class="qy-btn" target="_blank">{{$t('enterprisecloud.enterprisecloud_58')}}</a>
                      </div>
                    </div>
                    <div class="yzj-item g-table">
                      <div class="g-cell">
                        <div class="txt2">
                          <p>{{$t('enterprisecloud.enterprisecloud_66')}}</p>
                          <strong>{{$t('enterprisecloud.enterprisecloud_87')}}</strong>
                        </div>
                      </div>
                      <div class="g-cell">
                        <div class="txt2">
                          <p>{{$t('enterprisecloud.enterprisecloud_68')}}</p>
                          <strong>{{$t('enterprisecloud.enterprisecloud_89')}}</strong>
                        </div>
                      </div>
                      <div class="g-cell">
                        <div class="txt2">
                          <p>{{$t('enterprisecloud.enterprisecloud_70')}}</p>
                          <strong>{{$t('enterprisecloud.enterprisecloud_71')}}</strong>
                        </div>
                      </div>
                      <div class="g-cell btn-box">
                        <div class="c-orange">{{$t('enterprisecloud.enterprisecloud_72')}}<span>{{$t('enterprisecloud.enterprisecloud_93')}}</span>{{$t('enterprisecloud.enterprisecloud_74')}}</div>
                        <a clstag="Solution|keycount|MiddleContentSec|Solution_qycloud_15" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_qycloud_15")' data-ga="MiddleContentSec_立即购买_118" href="//promotion.jcloud.com/productTrialforPay?uuid=e53f15f6c93a4da69d2bc97f6b2670a3" class="qy-btn" target="_blank">{{$t('enterprisecloud.enterprisecloud_58')}}</a>
                      </div>
                    </div>
                    <div class="yzj-item g-table">
                      <div class="g-cell">
                        <div class="txt2">
                          <p>{{$t('enterprisecloud.enterprisecloud_66')}}</p>
                          <strong>{{$t('enterprisecloud.enterprisecloud_87')}}</strong>
                        </div>
                      </div>
                      <div class="g-cell">
                        <div class="txt2">
                          <p>{{$t('enterprisecloud.enterprisecloud_68')}}</p>
                          <strong>{{$t('enterprisecloud.enterprisecloud_99')}}</strong>
                        </div>
                      </div>
                      <div class="g-cell">
                        <div class="txt2">
                          <p>{{$t('enterprisecloud.enterprisecloud_70')}}</p>
                          <strong>{{$t('enterprisecloud.enterprisecloud_101')}}</strong>
                        </div>
                      </div>
                      <div class="g-cell btn-box">
                        <div class="c-orange">{{$t('enterprisecloud.enterprisecloud_72')}}<span>{{$t('enterprisecloud.enterprisecloud_103')}}</span>{{$t('enterprisecloud.enterprisecloud_74')}}</div>
                        <a clstag="Solution|keycount|MiddleContentSec|Solution_qycloud_16" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_qycloud_16")' data-ga="MiddleContentSec_立即购买_128" href="//promotion.jcloud.com/productTrialforPay?uuid=02ce545813e0485a820027d28a7a54f6" class="qy-btn">{{$t('enterprisecloud.enterprisecloud_58')}}</a>
                      </div>
                    </div>
                    <div class="pop-txt">
                      <a clstag="Solution|keycount|MiddleContentSec|Solution_qycloud_17" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_qycloud_17")' data-ga="MiddleContentSec_活动规则" href="javascript:;" @click.prevent="tips">{{$t('enterprisecloud.enterprisecloud_106')}}</a>
                    </div>
                  </div>
                </dd>
              </dl>
            </div>
            <div class="framework-ct ">
              <dl>
                <dt>{{$t('enterprisecloud.enterprisecloud_107')}}</dt>
                <dd>
                  <p class="det">{{$t('enterprisecloud.enterprisecloud_108')}}</p>
                  <!--<div class="price"><span>7折</span> /年，<span>6折</span> /2年，<span>5折</span> /年（限时4.12-5.12）</div>-->
                  <a clstag="Solution|keycount|MiddleContentSec|Solution_qycloud_18" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_qycloud_18")' data-ga="MiddleContentSec_云数据库_立即购买" href="//rds-console.jdcloud.com/createDataBase" class="qy-btn" target="_blank">{{$t('enterprisecloud.enterprisecloud_58')}}</a>
                </dd>
              </dl>
              <dl>
                <dt>{{$t('enterprisecloud.enterprisecloud_110')}}</dt>
                <dd>
                  <p class="det">{{$t('enterprisecloud.enterprisecloud_60')}}</p>
                  <a clstag="Solution|keycount|MiddleContentSec|Solution_qycloud_19" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_qycloud_19")' data-ga="MiddleContentSec_对象存储_立即购买" href="//www.jdcloud.com/products/cloudstorage" class="qy-btn" target="_blank">{{$t('enterprisecloud.enterprisecloud_58')}}</a>
                </dd>
              </dl>
              <dl>
                <dt>{{$t('enterprisecloud.enterprisecloud_113')}}</dt>
                <dd>
                  <p class="det">{{$t('enterprisecloud.enterprisecloud_114')}} </p>
                  <a clstag="Solution|keycount|MiddleContentSec|Solution_qycloud_20" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_qycloud_20")' data-ga="MiddleContentSec_云缓存_立即购买" href="//www.jdcloud.com/products/redis" class="qy-btn" target="_blank">{{$t('enterprisecloud.enterprisecloud_58')}}</a>
                </dd>
              </dl>
            </div>
            <div class="framework-ct ">
              <dl>
                <dt>{{$t('enterprisecloud.enterprisecloud_116')}}</dt>
                <dd>
                  <p class="det">{{$t('enterprisecloud.enterprisecloud_117')}}</p>
                  <a clstag="Solution|keycount|MiddleContentSec|Solution_qycloud_21" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_qycloud_21")' data-ga="MiddleContentSec_云监控_立即购买" href="//www.jdcloud.com/products/monitoring" class="qy-btn" target="_blank">{{$t('enterprisecloud.enterprisecloud_118')}}</a>
                </dd>
              </dl>
              <dl>
                <dt>{{$t('enterprisecloud.enterprisecloud_119')}}</dt>
                <dd>
                  <p class="det">{{$t('enterprisecloud.enterprisecloud_120')}}</p>
                  <a clstag="Solution|keycount|MiddleContentSec|Solution_qycloud_22" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_qycloud_22")' data-ga="MiddleContentSec_云解析_立即购买" href="//www.jdcloud.com/products/domainservice" class="qy-btn" target="_blank">{{$t('enterprisecloud.enterprisecloud_58')}}</a>
                </dd>
              </dl>
              <dl>
                <dt>{{$t('enterprisecloud.enterprisecloud_122')}}</dt>
                <dd>
                  <p class="det">{{$t('enterprisecloud.enterprisecloud_123')}}</p>
                  <a clstag="Solution|keycount|MiddleContentSec|Solution_qycloud_23" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_qycloud_23")' data-ga="MiddleContentSec_云备案_立即购买" href="//record-console.jdcloud.com/index" class="qy-btn" target="_blank">{{$t('enterprisecloud.enterprisecloud_124')}}</a>
                </dd>
              </dl>
              <dl>
                <dt>{{$t('enterprisecloud.enterprisecloud_125')}}</dt>
                <dd>
                  <p class="det">{{$t('enterprisecloud.enterprisecloud_126')}}</p>
                  <a clstag="Solution|keycount|MiddleContentSec|Solution_qycloud_24" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_qycloud_24")' data-ga="MiddleContentSec_专线/vpn_立即购买" href="//www.jdcloud.com/products/dc" class="qy-btn" target="_blank">{{$t('enterprisecloud.enterprisecloud_127')}}</a>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="qy-floor">
      <div class="qy-floor-hd">
        <h3 class="tit">{{$t('enterprisecloud.enterprisecloud_128')}}</h3>
        <p class="qy-floor-des">{{$t('enterprisecloud.enterprisecloud_129')}}</p></div>
      <div class="qy-floor-bd f-tac">
        <div class="qy-website"></div>
        <a clstag="Solution|keycount|MiddleContentSec|Solution_qycloud_25" @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_qycloud_25")' data-ga="MiddleContentSec_一键开启" href="//www.jdcloud.com/solution/website" target="_blank" class="qy-btn qy-btn-lg">{{$t('enterprisecloud.enterprisecloud_124')}}</a>
      </div>
    </div>

    <!--规则弹窗-->
    <div class="rule-hook" style="display:none">
      <div class="layer-info">
        <p>{{$t('enterprisecloud.enterprisecloud_131')}}<br/>
          {{$t('enterprisecloud.enterprisecloud_132')}}<br/>
          {{$t('enterprisecloud.enterprisecloud_133')}}<br/>
          {{$t('enterprisecloud.enterprisecloud_134')}}<br/>
          {{$t('enterprisecloud.enterprisecloud_135')}}<br/>
          {{$t('enterprisecloud.enterprisecloud_136')}}
        </p>
      </div>
    </div>

  </div>

</template>

<style>
  @import "~static/css/solution/solution-qy.css";
  .layer-info{width:500px;margin:0 auto;padding-top:20px;padding-bottom:20px}
  .layer-info h6{font-size:12px;line-height:22px;font-weight:400;color:#333;margin:10px 0 0}
  .layer-info p{font-size:12px;line-height:22px;color:#666;margin:0}
</style>

<script>
  export default {
    mounted() {
      seajs.use('jdf/2.0.0/ui/tab/1.0.0/tab', function(tab){
        $('.qy-floor-tab').tab({
          navEl: '.tab-nav li',
          contentEl: '.tab-ct .tab-item',
          curCls:'on',
          evt:'click'
        });
      });

      var $area = $("#maparea").find("area");
      $area.on("mouseenter", function() {
        var _idx = $(this).index();
        $('.pic-active').eq(_idx).show();

      });
      $area.on("mouseleave", function() {
        var _idx = $(this).index();
        $('.pic-active').eq(_idx).hide();
      });
      $area.on('click',function(){
        var _idx = $(this).index();
        $('.pic-active').eq(_idx).addClass('active').siblings().removeClass('active');
        $('.framework-right .framework-ct').eq(_idx).addClass('active').siblings().removeClass('active');
      })
    },
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
