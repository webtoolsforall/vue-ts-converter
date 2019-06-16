<template>
    <div>
        <div class="syhbs-banner">
            <div class="syhbs-wrap"><h1 class="syhbs-h1">{{$t('hybrnamecloud.hybrnamecloud_1')}}</h1><br>
                <p class="syhbs-p">{{$t('hybrnamecloud.hybrnamecloud_2')}}</p>
                <div class="syhbs-bbox"><a
                        @click='gaEventTrigger("SectionBannerSec","Solution|keycount|SectionBannerSec|Solution_HybridCloud_Consult")'
                        data-ga="SectionBannerSec_一键咨询"
                        :clstag="`Solution|keycount|SectionBannerSec|Solution_HybridCloud_Consult`"
                        href="//answer.jd.com/answer/kWMrdXZbSdXk/1549235.htm" target="_blank"
                        class="syhbs-btn">{{$t('hybrnamecloud.hybrnamecloud_3')}}</a></div>
            </div>
        </div><!-- 产品特点 -->
        <div class="syhbs-promix">
            <div class="syhbs-wrap"><h2>{{$t('hybrnamecloud.hybrnamecloud_4')}}</h2>
                <ul class="syhbs-list">
                    <li><img src="/static/img/hhy_td1.png"><h6>{{$t('hybrnamecloud.hybrnamecloud_5')}}</h6>
                        <p>{{$t('hybrnamecloud.hybrnamecloud_6')}}</p></li>
                    <li><img src="/static/img/hhy_td2.png"><h6>{{$t('hybrnamecloud.hybrnamecloud_7')}}</h6>
                        <p>{{$t('hybrnamecloud.hybrnamecloud_8')}}</p></li>
                    <li><img src="/static/img/hhy_td3.png"><h6>{{$t('hybrnamecloud.hybrnamecloud_9')}}</h6>
                        <p>{{$t('hybrnamecloud.hybrnamecloud_10')}}</p></li>
                    <li><img src="/static/img/hhy_td4.png"><h6>{{$t('hybrnamecloud.hybrnamecloud_11')}}</h6>
                        <p>{{$t('hybrnamecloud.hybrnamecloud_12')}}</p></li>
                </ul>
            </div>
        </div><!-- 特色服务 -->
        <div class="syhbs-vip">
            <div class="syhbs-wrap"><h2>{{$t('hybrnamecloud.hybrnamecloud_13')}}</h2>
                <ul class="syhbs-vip-list">
                    <li><img src="/static/img/zx_bg.png"><h5>{{$t('hybrnamecloud.hybrnamecloud_14')}}</h5>
                        <p>{{$t('hybrnamecloud.hybrnamecloud_15')}}</p><a
                                @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_HybridCloudSpecial_1")'
                                data-ga="MiddleContentSec_官方地址"
                                :clstag="`Solution|keycount|MiddleContentSec|Solution_HybridCloudSpecial_1`"
                                href="//www.jdcloud.com/products/dc" target="_blank" class="look_a">{{$t('hybrnamecloud.hybrnamecloud_16')}}</a>
                    </li>
                    <li><img src="/static/img/zy_bg.png"><h5>{{$t('hybrnamecloud.hybrnamecloud_17')}}</h5>
                        <p>{{$t('hybrnamecloud.hybrnamecloud_18')}}</p><a
                                @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_HybridCloudSpecial_2")'
                                data-ga="MiddleContentSec_官方地址"
                                :clstag="`Solution|keycount|MiddleContentSec|Solution_HybridCloudSpecial_2`"
                                href="//www.jdcloud.com/solution/tgy" target="_blank" class="look_a">{{$t('hybrnamecloud.hybrnamecloud_16')}}</a>
                    </li>
                    <li><img src="/static/img/gl_bg.png"><h5>{{$t('hybrnamecloud.hybrnamecloud_20')}}</h5>
                        <p>{{$t('hybrnamecloud.hybrnamecloud_21')}}</p><a
                                @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_HybridCloudSpecial_3")'
                                data-ga="MiddleContentSec_官方地址"
                                :clstag="`Solution|keycount|MiddleContentSec|Solution_HybridCloudSpecial_3`"
                                href="//market.jdcloud.com/564605.html" target="_blank" class="look_a">{{$t('hybrnamecloud.hybrnamecloud_16')}}</a>
                    </li>
                </ul>
            </div>
        </div><!-- 场景架构 -->
        <div class="tyg-case">
            <div class="tgy-wrap clearfix"><h2 class="tgy-h2">{{$t('hybrnamecloud.hybrnamecloud_23')}}</h2>
                <div class="tgy-case-left"></div>
                <div class="tgy-case-box"><h3 class="tgy-case-h3">{{$t('hybrnamecloud.hybrnamecloud_24')}}</h3>
                    <p class="tgy-case-p"><span>{{$t('hybrnamecloud.hybrnamecloud_25')}}</span><br><b>{{$t('hybrnamecloud.hybrnamecloud_26')}}</b>{{$t('hybrnamecloud.hybrnamecloud_27')}}<br><b>{{$t('hybrnamecloud.hybrnamecloud_28')}}</b>{{$t('hybrnamecloud.hybrnamecloud_29')}}<br><b>{{$t('hybrnamecloud.hybrnamecloud_30')}}</b>{{$t('hybrnamecloud.hybrnamecloud_31')}}<br><b>{{$t('hybrnamecloud.hybrnamecloud_32')}}</b>{{$t('hybrnamecloud.hybrnamecloud_33')}}<br><b>{{$t('hybrnamecloud.hybrnamecloud_34')}}</b>{{$t('hybrnamecloud.hybrnamecloud_35')}}<br><b>{{$t('hybrnamecloud.hybrnamecloud_36')}}</b>{{$t('hybrnamecloud.hybrnamecloud_37')}}
                    </p></div>
            </div>
        </div><!-- 合作伙伴 -->
        <div class="partner">
            <div class="tgy-wrap"><h2 class="tgy-h2">{{$t('hybrnamecloud.hybrnamecloud_38')}}</h2>
                <ul class="hz_ul">
                    <li @mouseenter="enter(1)" @mouseleave="leave" :class="activeIndex == 1?'act':''"><img
                            src="/static/img/logo_1.png"><h4 class="hhy-title">
                        {{$t('hybrnamecloud.hybrnamecloud_39')}}</h4>
                        <p>{{$t('hybrnamecloud.hybrnamecloud_40')}}</p><span>{{$t('hybrnamecloud.hybrnamecloud_41')}}</span><a
                                @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_HybridCloudPartners_1")'
                                data-ga="MiddleContentSec_犀思云"
                                :clstag="`Solution|keycount|MiddleContentSec|Solution_HybridCloudPartners_1`"
                                href="https://market.jdcloud.com/537401.html" target="_blank">{{$t('hybrnamecloud.hybrnamecloud_16')}}</a>
                    </li>
                    <li @mouseenter="enter(2)" @mouseleave="leave" :class="activeIndex == 2?'act':''"><img
                            src="/static/img/logo_2.png"><h4 class="hhy-title">
                        {{$t('hybrnamecloud.hybrnamecloud_43')}}</h4>
                        <p>{{$t('hybrnamecloud.hybrnamecloud_44')}}</p><span>{{$t('hybrnamecloud.hybrnamecloud_41')}}</span></li>
                    <li @mouseenter="enter(3)" @mouseleave="leave" :class="activeIndex == 3?'act':''"><img
                            src="/static/img/logo_6.png"><h4 class="hhy-title">
                        {{$t('hybrnamecloud.hybrnamecloud_46')}}</h4>
                        <p>{{$t('hybrnamecloud.hybrnamecloud_47')}}<br/>{{$t('hybrnamecloud.hybrnamecloud_48')}}<br/>{{$t('hybrnamecloud.hybrnamecloud_49')}}
                        </p><span>{{$t('hybrnamecloud.hybrnamecloud_41')}}</span></li>
                    <li @mouseenter="enter(4)" @mouseleave="leave" :class="activeIndex == 4?'act':''"><img
                            src="/static/img/logo_3.png"><h4 class="hhy-title">
                        {{$t('hybrnamecloud.hybrnamecloud_51')}}</h4>
                        <p>{{$t('hybrnamecloud.hybrnamecloud_52')}}</p><span>{{$t('hybrnamecloud.hybrnamecloud_53')}}</span><a
                                @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_HybridCloudPartners_2")'
                                data-ga="MiddleContentSec_深信服"
                                :clstag="`Solution|keycount|MiddleContentSec|Solution_HybridCloudPartners_2`"
                                href="//market.jdcloud.com/520009.html" target="_blank">{{$t('hybrnamecloud.hybrnamecloud_16')}}</a>
                    </li>
                    <li @mouseenter="enter(5)" @mouseleave="leave" :class="activeIndex == 5?'act':''"><img
                            src="/static/img/logo_4.png"><h4 class="hhy-title">
                        {{$t('hybrnamecloud.hybrnamecloud_55')}}</h4>
                        <p>{{$t('hybrnamecloud.hybrnamecloud_56')}}</p><span>{{$t('hybrnamecloud.hybrnamecloud_57')}}</span><a
                                @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_HybridCloudPartners_3")'
                                data-ga="MiddleContentSec_骞云"
                                :clstag="`Solution|keycount|MiddleContentSec|Solution_HybridCloudPartners_3`"
                                href="//market.jdcloud.com/564605.html" target="_blank">{{$t('hybrnamecloud.hybrnamecloud_16')}}</a>
                    </li>
                    <li @mouseenter="enter(6)" @mouseleave="leave" :class="activeIndex == 6?'act':''"><img
                            src="/static/img/logo_5.png"><h4 class="hhy-title">
                        {{$t('hybrnamecloud.hybrnamecloud_59')}}</h4>
                        <p>{{$t('hybrnamecloud.hybrnamecloud_60')}}</p><span>{{$t('hybrnamecloud.hybrnamecloud_61')}}</span><a
                                @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_HybridCloudPartners_4")'
                                data-ga="MiddleContentSec_天融信"
                                :clstag="`Solution|keycount|MiddleContentSec|Solution_HybridCloudPartners_4`"
                                href="//market.jdcloud.com/541410.html" target="_blank">{{$t('hybrnamecloud.hybrnamecloud_16')}}</a>
                    </li>
                    <li @mouseenter="enter(7)" @mouseleave="leave" :class="activeIndex == 7?'act':''"><img
                            src="/static/img/logo_5.png"><h4 class="hhy-title">
                        {{$t('hybrnamecloud.hybrnamecloud_59')}}</h4>
                        <p>{{$t('hybrnamecloud.hybrnamecloud_64')}}</p><span>{{$t('hybrnamecloud.hybrnamecloud_65')}}</span><a
                                @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_HybridCloudPartners_5")'
                                data-ga="MiddleContentSec_天融信"
                                :clstag="`Solution|keycount|MiddleContentSec|Solution_HybridCloudPartners_5`"
                                href="//market.jdcloud.com/540814.html" target="_blank">{{$t('hybrnamecloud.hybrnamecloud_16')}}</a>
                    </li>
                    <li @mouseenter="enter(8)" @mouseleave="leave" :class="activeIndex == 8?'act':''"><img
                            src="/static/img/logo_7.png"><h4 class="hhy-title">
                        {{$t('hybrnamecloud.hybrnamecloud_67')}}</h4>
                        <p>{{$t('hybrnamecloud.hybrnamecloud_68')}}<br/>{{$t('hybrnamecloud.hybrnamecloud_69')}}<br/>{{$t('hybrnamecloud.hybrnamecloud_70')}}
                        </p><span>{{$t('hybrnamecloud.hybrnamecloud_71')}}</span><a
                                @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_HybridCloudPartners_6")'
                                data-ga="MiddleContentSec_英方"
                                :clstag="`Solution|keycount|SectionBannerSec|Solution_HybridCloudPartners_6`"
                                href="//market.jdcloud.com/571605.html" target="_blank">{{$t('hybrnamecloud.hybrnamecloud_16')}}</a>
                    </li>
                </ul>
            </div>
        </div><!-- 推荐产品 -->
        <div class="tgy-products">
            <div class="tgy-wrap "><h2 class="tgy-h2">{{$t('hybrnamecloud.hybrnamecloud_73')}}</h2>
                <ul class="tgy-products-lst clearfix">
                    <li><span class="tgy-iconbox"><i class="tgy-icon"></i></span>
                        <h3>{{$t('hybrnamecloud.hybrnamecloud_74')}}</h3>
                        <p>{{$t('hybrnamecloud.hybrnamecloud_75')}}</p><span class="tgy-products-price">{{$t('hybrnamecloud.hybrnamecloud_76')}}</span><a
                                @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_HybridCloudRecommend_1")'
                                data-ga="MiddleContentSec_云主机"
                                :clstag="`Solution|keycount|MiddleContentSec|Solution_HybridCloudRecommend_1`"
                                href="//console.jdcloud.com/gz/containers" target="_blank" class="tgy-btn-blue">{{$t('hybrnamecloud.hybrnamecloud_77')}}</a>
                    </li>
                    <li><span class="tgy-iconbox"><i class="tgy-icon2"></i></span>
                        <h3>{{$t('hybrnamecloud.hybrnamecloud_78')}}</h3>
                        <p>{{$t('hybrnamecloud.hybrnamecloud_79')}}</p><span class="tgy-products-price">{{$t('hybrnamecloud.hybrnamecloud_80')}}</span><a
                                @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_HybridCloudRecommend_2")'
                                data-ga="MiddleContentSec_私有网络"
                                :clstag="`Solution|keycount|MiddleContentSec|Solution_HybridCloudRecommend_2`"
                                href="//console.jdcloud.com/gz/vpc" target="_blank" class="tgy-btn-blue">{{$t('hybrnamecloud.hybrnamecloud_77')}}</a>
                    </li>
                    <li class="last"><span class="tgy-iconbox"><i class="tgy-icon3"></i></span>
                        <h3>{{$t('hybrnamecloud.hybrnamecloud_82')}}</h3>
                        <p>{{$t('hybrnamecloud.hybrnamecloud_83')}}</p><span class="tgy-products-price">{{$t('hybrnamecloud.hybrnamecloud_84')}}</span><a
                                @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_HybridCloudRecommend_3")'
                                data-ga="MiddleContentSec_云数据库"
                                :clstag="`Solution|keycount|MiddleContentSec|Solution_HybridCloudRecommend_3`"
                                href="//rds-console.jdcloud.com/gz/databases" target="_blank" class="tgy-btn-blue">{{$t('hybrnamecloud.hybrnamecloud_77')}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style>@import "~static/css/solution/hhy.css";</style>
<script>export default {
    data() {
        return {
            activeIndex: 0
        }
    },
    methods: {
        enter(index) {
            this.activeIndex = index;
        },
        leave() {
            this.activeIndex = 0;
        },
        // ga1(){
        //   ga('send', 'event', 'PT_detail', '混合云', 'PT_detail_混合云_一键咨询');
        // },
        // ga2(){
        //   ga('send', 'event', 'PT_detail', '混合云', 'PT_detail_混合云_特色服务_专线连接_查看详情');
        // },
        // ga3(){
        //   ga('send', 'event', 'PT_detail', '混合云', 'PT_detail_混合云_特色服务_自营托管_查看详情');
        // },
        // ga4(){
        //   ga('send', 'event', 'PT_detail', '混合云', 'PT_detail_混合云_特色服务_管理运维_查看详情');
        // },
        // ga5(){
        //   ga('send', 'event', 'PT_detail', '混合云', 'PT_detail_混合云_合作伙伴_犀思云_专线连接_查看详情');
        // },
        // ga6(){
        //   ga('send', 'event', 'PT_detail', '混合云', 'PT_detail_混合云_合作伙伴_深信服_VPN_查看详情');
        // },
        // ga7(){
        //   ga('send', 'event', 'PT_detail', '混合云', 'PT_detail_混合云_合作伙伴_骞云_监控管理_查看详情');
        // },
        // ga8(){
        //   ga('send', 'event', 'PT_detail', '混合云', 'PT_detail_混合云_合作伙伴_天融信_漏洞扫描_查看详情');
        // },
        // ga9(){
        //   ga('send', 'event', 'PT_detail', '混合云', 'PT_detail_混合云_合作伙伴_天融信_渗透测试_查看详情');
        // },
        // ga10(){
        //   ga('send', 'event', 'PT_detail', '混合云', 'PT_detail_混合云_合作伙伴_主机迁移_查看详情');
        // },
        // ga11(){
        //   ga('send', 'event', 'PT_detail', '混合云', 'PT_detail_混合云_推荐产品_云主机_立即购买');
        // },
        // ga12(){
        //   ga('send', 'event', 'PT_detail', '混合云', 'PT_detail_混合云_推荐产品_私有网络_立即购买');
        // },
        // ga13(){
        //   ga('send', 'event', 'PT_detail', '混合云', 'PT_detail_混合云_推荐产品_云数据库_立即购买');
        // }
    }
}</script>