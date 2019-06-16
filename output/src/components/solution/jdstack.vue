<template>
  <div class="solution-jdstack">
    <div class="jdstack-banner">
      <div class="jdstack-banner-wrap">
        <h2 class="jdstack-banner-title">
          {{$t('jdstack.jdstack_1')}}
        </h2>
        <p class="jdstack-banner-des">
          {{$t('jdstack.jdstack_2')}}
        </p>
        <a clstag="jdstack|keycount|MiddleContentSec|jdstack_visit"  @click="gaEventTrigger('MiddleContentSec','jdstack|keycount|MiddleContentSec|jdstack_visit')" href="//uc.jdcloud.com/myorder/form?cateId=363&questionId=364" class="jdstack-banner-link" target="_blank">{{$t('jdstack.jdstack_3')}}</a>
      </div>
    </div>

    <div class="jdstack-floor w jdstack-advantage">
      <div class="jdstack-floor-hd">
        <h3 class="tit">{{$t('jdstack.jdstack_4')}}</h3>
      </div>
      <div class="jdstack-floor-bd">
        <div class="row">
          <div class="col-3 col-xs-12">
            <i class="jdstack-advantage-icon"></i>
            <h5 class="jdstack-advantage-title">{{$t('jdstack.jdstack_5')}}</h5>
            <p class="jdstack-advantage-des">{{$t('jdstack.jdstack_6')}}</p>
          </div>
          <div class="col-3 col-xs-12">
            <i class="jdstack-advantage-icon icon1"></i>
            <h5 class="jdstack-advantage-title">{{$t('jdstack.jdstack_7')}}</h5>
            <p class="jdstack-advantage-des">{{$t('jdstack.jdstack_8')}}</p>
          </div>
          <div class="col-3 col-xs-12">
            <i class="jdstack-advantage-icon icon2"></i>
            <h5 class="jdstack-advantage-title">{{$t('jdstack.jdstack_9')}}</h5>
            <p class="jdstack-advantage-des">{{$t('jdstack.jdstack_10')}}</p>
          </div>
          <div class="col-3 col-xs-12">
            <i class="jdstack-advantage-icon icon3"></i>
            <h5 class="jdstack-advantage-title">{{$t('jdstack.jdstack_11')}}</h5>
            <p class="jdstack-advantage-des">{{$t('jdstack.jdstack_12')}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="jdstack-floor w">
      <div class="jdstack-floor-hd">
        <h3 class="tit">{{$t('jdstack.jdstack_13')}}</h3>
      </div>
      <div class="jdstack-floor-bd m-pd10">
        <table class="jdstack-pro-table">
          <colgroup>
            <col width="895">
            <col>
          </colgroup>
          <tr>
            <th>{{$t('jdstack.jdstack_14')}}</th>
            <th>{{$t('jdstack.jdstack_15')}}</th>
          </tr>
          <tr>
            <td>
              <span class="pro-item">{{$t('jdstack.jdstack_16')}}</span>
              <span class="pro-item">{{$t('jdstack.jdstack_17')}}</span>
              <span class="pro-item">{{$t('jdstack.jdstack_18')}}</span>
              <span class="pro-item">{{$t('jdstack.jdstack_19')}}</span>
              <span class="pro-item">{{$t('jdstack.jdstack_20')}}</span>
              <span class="pro-item">{{$t('jdstack.jdstack_21')}}</span>
            </td>
            <td>
              <span class="pro-item">{{$t('jdstack.jdstack_22')}}</span>
            </td>
          </tr>
        </table>
        <table class="jdstack-pro-table">
          <colgroup>
            <col width="485">
            <col width="365">
            <col>
          </colgroup>
          <tr>
            <th>{{$t('jdstack.jdstack_23')}}</th>
            <th>{{$t('jdstack.jdstack_24')}}</th>
            <th>{{$t('jdstack.jdstack_25')}}</th>
          </tr>
          <tr>
            <td>
              <span class="pro-item">{{$t('jdstack.jdstack_26')}}</span>
              <span class="pro-item">{{$t('jdstack.jdstack_27')}}</span>
              <span class="pro-item">{{$t('jdstack.jdstack_28')}}</span>
            </td>
            <td>
              <span class="pro-item">{{$t('jdstack.jdstack_29')}}</span>
              <span class="pro-item">{{$t('jdstack.jdstack_30')}}</span>
            </td>
            <td>
              <span class="pro-item">{{$t('jdstack.jdstack_31')}}</span>
              <span class="pro-item">{{$t('jdstack.jdstack_32')}}</span>
            </td>
          </tr>
        </table>
        <table class="jdstack-pro-table">
          <tr>
            <th>{{$t('jdstack.jdstack_33')}}</th>
          </tr>
        </table>
      </div>
    </div>

    <div class="jdstack-floor w">
      <div class="jdstack-floor-hd">
        <h3 class="tit">{{$t('jdstack.jdstack_34')}}</h3>
      </div>
      <div class="jdstack-floor-bd m-pd10">
        <table class="service-table">
          <colgroup>
              <col width="22.5%">
              <col>
          </colgroup>
          <tr>
            <td class="td-center">
              <i class="icon"></i>
              <h5>{{$t('jdstack.jdstack_35')}}</h5>
            </td>
            <td>
              <p>{{$t('jdstack.jdstack_36')}}</p>
              <ul>
                <li>{{$t('jdstack.jdstack_37')}}</li>
                <li>{{$t('jdstack.jdstack_38')}}</li>
                <li>{{$t('jdstack.jdstack_39')}}</li>
                <li>{{$t('jdstack.jdstack_40')}}</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td class="td-center">
              <i class="icon icon1"></i>
              <h5>{{$t('jdstack.jdstack_41')}}</h5>
            </td>
            <td>
              <p>{{$t('jdstack.jdstack_42')}}</p>
              <ul>
                <li>{{$t('jdstack.jdstack_43')}}</li>
                <li>{{$t('jdstack.jdstack_44')}}</li>
                <li>{{$t('jdstack.jdstack_45')}}</li>
                <li>{{$t('jdstack.jdstack_46')}}</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td class="td-center">
              <i class="icon icon2"></i>
              <h5>{{$t('jdstack.jdstack_47')}}</h5>
            </td>
            <td>
              <p>{{$t('jdstack.jdstack_48')}}</p>
              <ul>
                <li>{{$t('jdstack.jdstack_49')}}</li>
                <li>{{$t('jdstack.jdstack_50')}}</li>
                <li>{{$t('jdstack.jdstack_51')}}</li>
                <li>{{$t('jdstack.jdstack_52')}}</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td class="td-center">
              <i class="icon icon3"></i>
              <h5>{{$t('jdstack.jdstack_53')}}</h5>
            </td>
            <td>
              <p>{{$t('jdstack.jdstack_54')}}</p>
              <ul>
                <li>{{$t('jdstack.jdstack_55')}}</li>
                <li>{{$t('jdstack.jdstack_56')}}</li>
                <li>{{$t('jdstack.jdstack_57')}}</li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<style>
/* RWD start */
/* @import "//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/jdc-jdstack/jdc-jdstack.css"; */
.solution-jdstack .jdstack-banner{background:#0a1966;color:#fff}.solution-jdstack .jdstack-banner-wrap{margin:0 auto;width:1200px;height:440px;background:url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/jdc-jdstack/i/banner.png) center no-repeat}.solution-jdstack .jdstack-banner-title{padding:98px 0 10px;margin-left:20px;font-size:38px}.solution-jdstack .jdstack-banner-des{margin-left:20px;font-size:18px;width:560px;line-height:38px;height:120px;margin-bottom:20px;overflow:hidden}.solution-jdstack .jdstack-banner-link{display:inline-block;padding:0 10px;margin-top:30px;margin-left:20px;text-align:center;min-width:118px;height:34px;line-height:34px;font-size:16px;color:#fff;border:1px solid #fff;transition:color .4s ease-in 0s,background .4s ease-in 0s}.solution-jdstack .jdstack-banner-link:hover{background:#fefefe;color:#222a3c}.solution-jdstack .jdstack-floor{padding-bottom:60px}.solution-jdstack .jdstack-floor-hd{padding:50px 0;text-align:center}.solution-jdstack .jdstack-floor-hd .tit{font-size:36px;line-height:40px}.solution-jdstack .jdstack-advantage-icon{display:inline-block;width:50px;height:50px;background:url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/jdc-jdstack/i/advantage-icon.svg) 0 center no-repeat;background-size:400%}.solution-jdstack .jdstack-advantage-icon.icon1{background-position:-50px center}.solution-jdstack .jdstack-advantage-icon.icon2{background-position:-100px center}.solution-jdstack .jdstack-advantage-icon.icon3{background-position:-150px center}.solution-jdstack .jdstack-advantage{text-align:center}.solution-jdstack .jdstack-advantage .row{box-shadow:0 0 21px 0 rgba(134,194,225,.3)}.solution-jdstack .jdstack-advantage .col-3{position:relative;padding:20px 25px}.solution-jdstack .jdstack-advantage .col-3:after{content:'';position:absolute;right:0;top:20px;bottom:20px;width:1px;background-color:#e0e0e0}.solution-jdstack .jdstack-advantage .col-3:last-child:after{content:none}.solution-jdstack .jdstack-advantage .jdstack-advantage-title{padding:20px 0;line-height:24px;font-size:22px;color:#333}.solution-jdstack .jdstack-advantage .jdstack-advantage-des{text-align:left;min-height:120px;line-height:30px;font-size:14px;color:#666}.solution-jdstack table{width:100%;table-layout:fixed;border-collapse:collapse;border-spacing:0}.solution-jdstack .jdstack-pro-table{text-align:center;border:1px solid #e0e0e0}.solution-jdstack .jdstack-pro-table+.jdstack-pro-table{border-top:0 none}.solution-jdstack .jdstack-pro-table th{border-right:1px solid #e0e0e0;padding:15px 0;text-align:center;background-color:#eef3f7;font-size:22px;color:#333}.solution-jdstack .jdstack-pro-table td{border-right:1px solid #e0e0e0;padding:10px 0 30px;font-size:14px;color:#666}.solution-jdstack .jdstack-pro-table .pro-item{display:inline-block;margin:20px 10px;padding:10px 5px;min-width:100px;line-height:24px;text-align:center;border:1px solid #e0e0e0}.solution-jdstack .service-table td,.solution-jdstack .service-table th{padding:30px;border:1px solid #e0e0e0}.solution-jdstack .service-table .td-center{text-align:center}.solution-jdstack .service-table h5{margin-top:10px;line-height:42px;font-size:22px}.solution-jdstack .service-table ul{margin-top:4px}.solution-jdstack .service-table li,.solution-jdstack .service-table p{line-height:30px;font-size:14px;color:#666}.solution-jdstack .service-table li{padding-left:15px;position:relative}.solution-jdstack .service-table li:before{content:'';position:absolute;left:0;top:13px;width:4px;height:4px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background-color:#666}.solution-jdstack .service-table .icon{display:inline-block;width:60px;height:60px;background:url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/jdc-jdstack/i/service-icon.svg) 0 0 no-repeat;background-size:400%}.solution-jdstack .service-table .icon.icon1{background-position:-60px center}.solution-jdstack .service-table .icon.icon2{background-position:-120px center}.solution-jdstack .service-table .icon.icon3{background-position:-180px center}.jdc-lang-en .solution-jdstack .jdstack-banner-des{max-width:860px;width:auto}.jdc-rwd .m-pd10{padding:0 10px}.jdc-rwd .solution-jdstack .jdstack-banner-wrap{width:auto;max-width:1200px}@media (max-width:1200px){.jdc-rwd .jdstack-pro-table{table-layout:inherit}.jdc-rwd .jdstack-pro-table .pro-item,.jdc-rwd .jdstack-pro-table .pro-item+.pro-item{margin:5px}}@media (max-width:768px){.jdc-rwd .solution-jdstack .jdstack-floor{padding-bottom:20px}.jdc-rwd .solution-jdstack .jdstack-banner-wrap{text-align:center;height:340px;background-size:cover}.jdc-rwd .solution-jdstack .jdstack-banner-title{font-size:24px;text-align:center;margin-left:0;padding:100px 0 10px}.jdc-rwd .solution-jdstack .jdstack-banner-des{font-size:12px;line-height:18px;height:auto;max-height:106px;width:auto;margin:0;padding:0 10px;text-align:left}.jdc-rwd .solution-jdstack .jdstack-banner-link{margin:20px auto 0;height:24px;line-height:24px;font-size:12px;min-width:88px}.jdc-rwd .solution-jdstack .jdstack-floor-hd{padding:15px 0}.jdc-rwd .solution-jdstack .jdstack-floor-hd .tit{font-size:22px;line-height:32px}.jdc-rwd .solution-jdstack .jdstack-advantage .row{border-top:1px solid #ededed;box-shadow:none}.jdc-rwd .solution-jdstack .jdstack-advantage .col-3{padding:10px;border-bottom:1px solid #ededed}.jdc-rwd .solution-jdstack .jdstack-advantage .col-3:after{display:none}.jdc-rwd .solution-jdstack .jdstack-advantage .jdstack-advantage-icon{position:absolute;top:15px;left:10px;width:30px;height:30px}.jdc-rwd .solution-jdstack .jdstack-advantage .jdstack-advantage-icon.icon1{background-position:-30px center}.jdc-rwd .solution-jdstack .jdstack-advantage .jdstack-advantage-icon.icon2{background-position:-60px center}.jdc-rwd .solution-jdstack .jdstack-advantage .jdstack-advantage-icon.icon3{background-position:-90px center}.jdc-rwd .solution-jdstack .jdstack-advantage .jdstack-advantage-title{font-size:14px;text-align:left;padding:0 0 0 40px}.jdc-rwd .solution-jdstack .jdstack-advantage .jdstack-advantage-des{padding-left:40px;min-height:auto;font-size:12px;line-height:18px}.jdc-rwd .solution-jdstack .jdstack-pro-table{table-layout:inherit}.jdc-rwd .solution-jdstack .jdstack-pro-table th{font-size:14px;padding:10px 0}.jdc-rwd .solution-jdstack .jdstack-pro-table td{padding:10px 0;font-size:12px}.jdc-rwd .solution-jdstack .jdstack-pro-table .pro-item{min-width:80px;line-height:22px;margin:5px}.jdc-rwd .solution-jdstack .jdstack-pro-table .pro-item+.pro-item{margin:5px}.jdc-rwd .solution-jdstack .service-table{table-layout:inherit}.jdc-rwd .solution-jdstack .service-table td,.jdc-rwd .solution-jdstack .service-table th{padding:10px}.jdc-rwd .solution-jdstack .service-table h5{font-size:14px;margin-top:0;line-height:22px}.jdc-rwd .solution-jdstack .service-table li,.jdc-rwd .solution-jdstack .service-table p{font-size:12px;line-height:20px}.jdc-rwd .solution-jdstack .service-table li{padding-left:10px}.jdc-rwd .solution-jdstack .service-table li:before{top:7px}.jdc-rwd .solution-jdstack .service-table .icon{width:30px;height:30px}.jdc-rwd .solution-jdstack .service-table .icon.icon1{background-position:-30px center}.jdc-rwd .solution-jdstack .service-table .icon.icon2{background-position:-60px center}.jdc-rwd .solution-jdstack .service-table .icon.icon3{background-position:-90px center}}
</style>
