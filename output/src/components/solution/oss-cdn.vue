<template>
 <div id="app" class="jdc_compaign_container">
    <import-js src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"></import-js>
    <import-js src="//vjs.zencdn.net/7.1.0/video.js"></import-js>
        <div style="display: none;">
            <img src="~assets/mkt/wx_logo.jpg" alt="">
        </div>
        <!-- video start -->
        <div class="jdc_compaign_video_wrap" clstag="Solution|keycount|MiddleContentSec|Solution_video_1">
            <div class="inner_video_wrap">
                <video id="my-player" class="video video-js" controls preload="auto" poster="~assets/mkt/poster01.jpg" data-setup='{}'>
                    <source src="http://jdc-static.oss.cn-north-1.jcloudcs.com/jdc-about-static/jdc_compaign/yds-MySQL.mp4" type="video/mp4" id="my-player-source"></source>
                </video>
                <div class="close" id="close">
                </div>
            </div>
        </div>
        <!-- video end -->
        <!-- 顶部banner start-->
        <div class="jdc_compaign_banner">
            <div class="jdc_compaign_banner_content">
                <h2 class="jdc_compaign_banner_content_title">
                    内容存储分发及网络加速解决方案
                </h2>
                <div class="jdc_compaign_banner_desc">
                    <p>以安全、稳定、极速、易扩展的大规模分布式对象存储（OSS）服务为基础，配合京东云低成本、高性能、可扩展的CDN加速内容分发服务，除了能为客户提供海量文件存储备份，对热点数据加速分发，视频点播等服务，还可以通过大规模分布式实时转码技术，为客户提供低延迟、高可用、易接入的视频直播一站式服务。解决客户底层研发的难题，降低设备运维成本，帮助客户快速搭建自有的内容存储分发平台和视频直播、点播平台。</p>
                </div>
                <button class="contact_btn goBottom jdc_btn_hover clickEvent" data-event="contactUsTop" id="contact_btn">联系我们</button>
            </div>
        </div>
        <!-- 顶部banner end-->
        <!-- 顶部tab栏 start -->
        <div class="jdc_compaign_top_tab_wrap normal">
            <div class="jdc_compaign_top_tab">
                <div  @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_osscdn_FloorTab_1')" clstag="Solution|keycount|MiddleContentSec|Solution_osscdn_FloorTab_1" class="jdc_compaign_tab_item active one">
                    了解内容存储分发及网络加速
                </div>
                <div  @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_osscdn_FloorTab_2')" clstag="Solution|keycount|MiddleContentSec|Solution_osscdn_FloorTab_2" class="jdc_compaign_tab_item two">
                    应用场景
                </div>
                <div  @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_osscdn_FloorTab_3')" clstag="Solution|keycount|MiddleContentSec|Solution_osscdn_FloorTab_3" class="jdc_compaign_tab_item three">
                    产品优势
                </div>
                <div  @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_osscdn_FloorTab_4')" clstag="Solution|keycount|MiddleContentSec|Solution_osscdn_FloorTab_4" class="jdc_compaign_tab_item four">
                    产品简介
                </div>
            </div>
        </div>
        <!-- 顶部tab栏 end -->
        <!-- 联系我们 start -->
        <div class="jdc_compaign_service">
            <div class="jdc_compaign_service_right">
                <div class="mod_hang_appeal_btn contact_us clickEvent mobile_contact" clstag="Solution|keycount|MiddleContentSec|Solution_osscdn_mobileContent_1" data-event="contactUsModalMobile">
                    <p>联系</p>
                    <p>我们</p>
                </div>
                <div class="mod_hang_appeal_btn show_left_modal"><i class="newfont"></i><span>咨询反馈</span></div>
                <div class="mod_hang_qrcode mod_hang_top">
                    <a data-ga="ContactUsSec_返回顶部" data-cate="ContactUsSec" class="mod_hang_qrcode_btn" href="javascript:;">
                        <i class="newfont"></i>
                        <span>返回顶部</span>
                    </a>
                </div>
            </div>
            <div class="jdc_compaign_service_left">
                <img src="~assets/mkt/icon_remove.png" alt="" class="jdc_compaign_service_close clickEvent"
                    data-event="closeModal" id="closeModal">
                <p class="jdc_compaign_service_left_title">联系我们</p>
                <p class="jdc_compaign_service_left_desc">安全解决方案详情垂询，针对您的业务场景，专业工程师帮助您解决疑问</p>
                <button class="jdc_compaign_service_btn jdc_bg jdc_btn_hover clickEvent" data-event="contactUsModal">快来上云</button>
            </div>
        </div>
        <!-- 联系我们 end -->
        <!-- content01 start -->
        <div class="jdc_compaign_content one" id="content01">
            <h2 class="jdc_compaign_content_title content_container">
                <p>了解内容存储分发及网络加速</p>
            </h2>
            <div class="jdc_compaign_content_inner content_container">
                <div class="jdc_compaign_video_item clickEvent" data-src="http://jdc-static.oss.cn-north-1.jcloudcs.com/jdc-about-static/yunduoshuo/06live%2526OSS%2526CDN.mp4" data-event="VideoMySQLClick">
                    <div class="jdc_compaign_video_item_img_wrap">
                        <div class="video_mask"></div>
                        <img src="~assets/mkt/player_btn.png" class="jdc_compaign_video_item_player_btn" alt="">
                        <img class="jdc_compaign_video_item_img" src="~assets/mkt/poster04.jpg" />
                        <img class="jdc_compaign_video_item_img_mobile" src="~assets/mkt/poster01_mobile.jpg"/>
                    </div>
                    <p>内容存储分发及网络加速一站式攻略详解</p>
                </div>
                <div class="jdc_compaign_content_inner_input_content">
                    <p class="jdc_compaign_content_inner_input_content_title mobile_contact_title">
                        联系我们了解更多
                    </p>
                    <div class="jdc_compaign_content_inner_input_wrap_content">
                        <div class="jdc_compaign_content_inner_input_wrap">
                            <label for="name"><span>*</span>姓名</label>
                            <input type="text" id="name" name="name">
                            <p class="error_text"></p>
                        </div>
                        <div class="jdc_compaign_content_inner_input_wrap">
                            <label for="email"><span>*</span>邮箱</label>
                            <input type="text" id="email" name="email">
                            <p class="error_text"></p>
                        </div>
                        <div class="jdc_compaign_content_inner_input_wrap">
                            <label for="mobile"><span>*</span>手机</label>
                            <input type="tel" id="mobile" name="mobile">
                            <p class="error_text"></p>
                        </div>
                        <div class="jdc_compaign_content_inner_input_wrap">
                            <label for="company"><span>*</span>公司</label>
                            <input type="text" id="company" name="company">
                            <p class="error_text"></p>
                        </div>
                        <div class="jdc_compaign_content_inner_input_wrap selectWrap">
                            <label for="industry"><span>*</span>行业</label>
                            <select id="industry" class="selectIndustry" name="industry">
                                <option></option>
                            </select>
                        </div>
                        <div class="jdc_compaign_content_inner_input_wrap selectWrap selectDutyWrap">
                            <label for="duty"><span>*</span>职务</label>
                            <select id="duty" class="selectDuty" name="duty">
                                <option></option>
                            </select>
                        </div>
                    </div>
                    <button class="jdc_compaign_content_btn jdc_btn_hover jdc_bg"  clstag="Solution|keycount|MiddleContentSec|Solution_osscdn_submit" @click="submitForm" 
                    data-event="regeister" id="submit_btn">完成</button>
                </div>
                <div style="clear:both;"></div>
            </div>
        </div>
        <!-- content01 end -->
        <!-- content02 start -->
        <div class="jdc_compaign_content two" id="content02">
            <h2 class="jdc_compaign_content_title">
                应用场景
            </h2>
            <div class="jdc_compaign_content_inner content_container">
                <div class="jdc_compaign_content_inner_tabbar">
                    <span @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_osscdn_sencha_tab_1')" clstag="Solution|keycount|MiddleContentSec|Solution_osscdn_sencha_tab_1" class="jdc_compaign_content_inner_tabItem active">海量数据存储与备份容灾</span>
                    <span @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_osscdn_sencha_tab_2')" clstag="Solution|keycount|MiddleContentSec|Solution_osscdn_sencha_tab_2" class="jdc_compaign_content_inner_tabItem">视频点播</span>
                    <span @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_osscdn_sencha_tab_3')" clstag="Solution|keycount|MiddleContentSec|Solution_osscdn_sencha_tab_3" class="jdc_compaign_content_inner_tabItem">电商直播</span>
                </div>
                <ul class="jdc_compaign_content_inner_tab_content content_container">
                    <li class="jdc_compaign_content_inner_tab_content_item current">
                        <div class="jdc_compaign_content_inner_left">
                            <img src="~assets/mkt/tab01.jpg" alt="">
                        </div>
                        <div class="jdc_compaign_content_inner_right">
                            <div class="jdc_compaign_content_inner_right_title">
                                海量数据存储与备份容灾
                            </div>
                            <div class="jdc_compaign_content_inner_section">
                                <div class="jdc_compaign_content_inner_section_title hidden-xs">
                                    <i class="jdc_bg"></i>推荐使用产品<span></span>
                                </div>
                                <p>
                                    <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_osscdn_Link_1')" clstag="Solution|keycount|MiddleContentSec|Solution_osscdn_Link_1"  class="jdc_compaign_content_inner_section_desc link clickEvent" href="https://www.jdcloud.com/cn/products/object-storage-service"
                                    target="_blank" data-event="OSSClick">对象存储（OSS）<span></span></a>
                                    <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_osscdn_Link_2')" clstag="Solution|keycount|MiddleContentSec|Solution_osscdn_Link_2"  class="jdc_compaign_content_inner_section_desc link clickEvent" href="https://www.jdcloud.com/cn/products/cdn"
                                    target="_blank" data-event="CDNClick">CDN  <span></span></a>
                                    <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_osscdn_Link_3')" clstag="Solution|keycount|MiddleContentSec|Solution_osscdn_Link_3"  class="jdc_compaign_content_inner_section_desc link clickEvent" href="https://www.jdcloud.com/cn/products/virtual-machines"
                                    target="_blank" data-event="VirtualMachinesClick">云主机  <span></span></a>
                                </p>
                            </div>
                            <div class="jdc_compaign_content_inner_section">
                                <div class="jdc_compaign_content_inner_section_title">
                                    <i class="jdc_bg"></i>特点<span></span>
                                </div>
                                <p class="jdc_compaign_content_inner_section_desc content">
                                    适用于图片、音视频、日志等各种类型海量文件的存储，支持流式写入和文件写入两种方式。面对冷热数据存储的场景提供不同存储类型，费用低廉。多副本跨多个AZ（AZ:可用区，单个地域下可以包含多个AZ,不同AZ之间实现资源隔离，保障资源的高可用性。同地域下的AZ通常采用低延迟与高带宽的线路进行互联。）的存储数据。保证数据高可用，同时支持跨Region（Region：地域，不同地域即不同的地理区域）复制容灾，完美实现数据备份与容灾。
                                </p>
                            </div>
                        </div>
                    </li>
                    <li class="jdc_compaign_content_inner_tab_content_item">
                        <div class="jdc_compaign_content_inner_left">
                            <img src="~assets/mkt/tab02.jpg" alt="">
                        </div>
                        <div class="jdc_compaign_content_inner_right">
                            <div class="jdc_compaign_content_inner_right_title">
                                视频点播
                            </div>
                            <div class="jdc_compaign_content_inner_section">
                                <div class="jdc_compaign_content_inner_section_title hidden-xs">
                                    <i class="jdc_bg"></i>推荐使用产品<span></span>
                                </div>
                                <p>
                                    <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_osscdn_Link_4')" clstag="Solution|keycount|MiddleContentSec|Solution_osscdn_Link_4"  class="jdc_compaign_content_inner_section_desc link clickEvent" href="https://www.jdcloud.com/cn/products/object-storage-service"
                                    target="_blank" data-event="OSSClick">对象存储（OSS）<span></span></a>
                                    <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_osscdn_Link_5')" clstag="Solution|keycount|MiddleContentSec|Solution_osscdn_Link_5"  class="jdc_compaign_content_inner_section_desc link clickEvent" href="https://www.jdcloud.com/cn/products/cdn"
                                    target="_blank" data-event="CDNClick">CDN  <span></span></a>
                                    <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_osscdn_Link_6')" clstag="Solution|keycount|MiddleContentSec|Solution_osscdn_Link_6"  class="jdc_compaign_content_inner_section_desc link clickEvent" href="https://www.jdcloud.com/cn/products/media-processing-service"
                                    target="_blank" data-event="MediaServiceClick">媒体处理服务  <span></span></a>
                                    <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_osscdn_Link_7')" clstag="Solution|keycount|MiddleContentSec|Solution_osscdn_Link_7"  class="jdc_compaign_content_inner_section_desc link clickEvent" href="https://www.jdcloud.com/cn/products/virtual-machines"
                                    target="_blank" data-event="VirtualMachinesClick">云主机  <span></span></a>
                                </p>
                            </div>
                            <div class="jdc_compaign_content_inner_section">
                                <div class="jdc_compaign_content_inner_section_title">
                                    <i class="jdc_bg"></i>特点<span></span>
                                </div>
                                <p class="jdc_compaign_content_inner_section_desc content">
                                    京东云自主研发的视频点播平台，支持HTTP、HTTPS协议访问的网站视频内容加速，支持文件上传下载，多种文件格式，智能自主地推送视频文件到离用户最近的CDN节点；在帮助客户节约IT资源的同时，也有效帮客户减轻源站压力。通过源站监控，轻松应对各类突发访问，保障网站的安全运行。
                                </p>
                            </div>
                        </div>
                    </li>
                    <li class="jdc_compaign_content_inner_tab_content_item">
                        <div class="jdc_compaign_content_inner_left">
                            <img src="~assets/mkt/tab03.jpg" alt="">
                        </div>
                        <div class="jdc_compaign_content_inner_right">
                            <div class="jdc_compaign_content_inner_right_title">
                                电商直播
                            </div>
                            <div class="jdc_compaign_content_inner_section">
                                <div class="jdc_compaign_content_inner_section_title hidden-xs">
                                    <i class="jdc_bg"></i>推荐使用产品<span></span>
                                </div>
                                <p>
                                    <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_osscdn_Link_8')" clstag="Solution|keycount|MiddleContentSec|Solution_osscdn_Link_8"  class="jdc_compaign_content_inner_section_desc link clickEvent" href="https://www.jdcloud.com/cn/products/live-video"
                                        target="_blank" data-event="VideoServiceClick">视频服务<span></span></a>
                                    <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_osscdn_Link_9')" clstag="Solution|keycount|MiddleContentSec|Solution_osscdn_Link_9"  class="jdc_compaign_content_inner_section_desc link clickEvent" href="https://www.jdcloud.com/cn/products/object-storage-service"
                                    target="_blank" data-event="OSSClick">对象存储（OSS）<span></span></a>
                                    <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_osscdn_Link_10')" clstag="Solution|keycount|MiddleContentSec|Solution_osscdn_Link_10"  class="jdc_compaign_content_inner_section_desc link clickEvent" href="https://www.jdcloud.com/cn/products/cdn"
                                    target="_blank" data-event="CDNClick">CDN  <span></span></a>
                                    <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_osscdn_Link_11')" clstag="Solution|keycount|MiddleContentSec|Solution_osscdn_Link_11"  class="jdc_compaign_content_inner_section_desc link clickEvent" href="https://www.jdcloud.com/cn/products/media-processing-service"
                                    target="_blank" data-event="MediaServiceClick">媒体处理服务  <span></span></a>
                                    <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_osscdn_Link_12')" clstag="Solution|keycount|MiddleContentSec|Solution_osscdn_Link_12"  class="jdc_compaign_content_inner_section_desc link clickEvent" href="https://www.jdcloud.com/cn/products/virtual-machines"
                                    target="_blank" data-event="VirtualMachinesClick">云主机  <span></span></a>
                                </p>
                            </div>
                            <div class="jdc_compaign_content_inner_section">
                                <div class="jdc_compaign_content_inner_section_title hidden-xs">
                                    <i class="jdc_bg"></i>特点<span></span>
                                </div>
                                <p class="jdc_compaign_content_inner_section_desc content">
                                    目前电商行业获客成本高、用户增速放缓，亟需找到新的流量入口，用户访问后商品展示形式单一，图文信息不足以支撑消费者的购物决策，需要通过互动方式，增强用户购物体验，促进下单。视频直播方式，使用户更全面地了解产品或者服务，视频信息维度比图片文字更加丰富；通过主播的讲解示范、问题回答等互动方式，既带来了流量又解决导购问题。京东云视频直播服务是基于京东云平台优质的计算、网络基础资源和分布式媒体处理集群，为客户提供的低延迟、高可用、易接入的视频直播一站式服务，同时具有端到端的整体解决方案，帮助客户能快速搭建自己的直播平台和应用。
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="tab-content">
                    <div clstag="Solution|keycount|MiddleContentSec|Solution_tab_4" class="tab-item current">
                        <div  class="tab-item-title jdcfont jdc-common-arr active">
                            <h4>海量数据存储与备份容灾</h4>
                        </div>
                        <div class="tab-item-content">
                            <div class="tab-item-img">
                                <img src="~assets/mkt/tab01.jpg">
                            </div>
                            <div class="jdc_compaign_content_inner_section">
                                <p class="jdc_compaign_content_inner_section_title">
                                    <i class="jdc_bg"></i>推荐使用产品<span></span>
                                </p>
                                <p>
                                    <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_osscdn_Link_13')" clstag="Solution|keycount|MiddleContentSec|Solution_osscdn_Link_13"  class="jdc_compaign_content_inner_section_desc link clickEvent" href="https://www.jdcloud.com/cn/products/object-storage-service"
                                    target="_blank" data-event="OSSClick">对象存储（OSS）<span></span></a>
                                    <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_osscdn_Link_14')" clstag="Solution|keycount|MiddleContentSec|Solution_osscdn_Link_14"  class="jdc_compaign_content_inner_section_desc link clickEvent" href="https://www.jdcloud.com/cn/products/cdn"
                                    target="_blank" data-event="CDNClick">CDN  <span></span></a>
                                    <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_osscdn_Link_15')" clstag="Solution|keycount|MiddleContentSec|Solution_osscdn_Link_15"  class="jdc_compaign_content_inner_section_desc link clickEvent" href="https://www.jdcloud.com/cn/products/virtual-machines"
                                    target="_blank" data-event="VirtualMachinesClick">云主机  <span></span></a>
                                </p>
                            </div>
                            <div class="jdc_compaign_content_inner_section">
                                <p class="jdc_compaign_content_inner_section_title">
                                    <i class="jdc_bg"></i>特点<span></span>
                                </p>
                                <p class="jdc_compaign_content_inner_section_desc">
                                    适用于图片、音视频、日志等各种类型海量文件的存储，支持流式写入和文件写入两种方式。面对冷热数据存储的场景提供不同存储类型，费用低廉。多副本跨多个AZ（AZ:可用区，单个地域下可以包含多个AZ,不同AZ之间实现资源隔离，保障资源的高可用性。同地域下的AZ通常采用低延迟与高带宽的线路进行互联。）的存储数据。保证数据高可用，同时支持跨Region（Region：地域，不同地域即不同的地理区域）复制容灾，完美实现数据备份与容灾。
                                </p>
                            </div>
                        </div>  
                    </div>
                    <div clstag="Solution|keycount|MiddleContentSec|Solution_tab_5" class="tab-item">
                        <div  class="tab-item-title jdcfont jdc-common-arr">
                            <h4>视频点播</h4>
                        </div>
                        <div class="tab-item-content">
                            <div class="tab-item-img">
                                <img src="~assets/mkt/tab02.jpg">
                            </div>
                            <div class="jdc_compaign_content_inner_section">
                                <p class="jdc_compaign_content_inner_section_title">
                                    <i class="jdc_bg"></i>推荐使用产品<span></span>
                                </p>
                                <p>
                                    <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_osscdn_Link_16')" clstag="Solution|keycount|MiddleContentSec|Solution_osscdn_Link_16"  class="jdc_compaign_content_inner_section_desc link clickEvent" href="https://www.jdcloud.com/cn/products/object-storage-service"
                                    target="_blank" data-event="OSSClick">对象存储（OSS）<span></span></a>
                                    <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_osscdn_Link_17')" clstag="Solution|keycount|MiddleContentSec|Solution_osscdn_Link_17"  class="jdc_compaign_content_inner_section_desc link clickEvent" href="https://www.jdcloud.com/cn/products/cdn"
                                    target="_blank" data-event="CDNClick">CDN  <span></span></a>
                                    <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_osscdn_Link_18')" clstag="Solution|keycount|MiddleContentSec|Solution_osscdn_Link_18"  class="jdc_compaign_content_inner_section_desc link clickEvent" href="https://www.jdcloud.com/cn/products/media-processing-service"
                                    target="_blank" data-event="MediaServiceClick">媒体处理服务  <span></span></a>
                                    <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_osscdn_Link_19')" clstag="Solution|keycount|MiddleContentSec|Solution_osscdn_Link_19"  class="jdc_compaign_content_inner_section_desc link clickEvent" href="https://www.jdcloud.com/cn/products/virtual-machines"
                                    target="_blank" data-event="VirtualMachinesClick">云主机  <span></span></a>
                                </p>
                            </div>
                            <div class="jdc_compaign_content_inner_section">
                                <p class="jdc_compaign_content_inner_section_title">
                                    <i class="jdc_bg"></i>特点<span></span>
                                </p>
                                <p class="jdc_compaign_content_inner_section_desc">
                                    京东云自主研发的视频点播平台，支持HTTP、HTTPS协议访问的网站视频内容加速，支持文件上传下载，多种文件格式，智能自主地推送视频文件到离用户最近的CDN节点；在帮助客户节约IT资源的同时，也有效帮客户减轻源站压力。通过源站监控，轻松应对各类突发访问，保障网站的安全运行。
                                </p>
                            </div>
                        </div>  
                    </div>
                    <div clstag="Solution|keycount|MiddleContentSec|Solution_tab_6" class="tab-item">
                        <div  class="tab-item-title jdcfont jdc-common-arr">
                            <h4>电商直播</h4>
                        </div>
                        <div class="tab-item-content">
                            <div class="tab-item-img">
                                <img src="~assets/mkt/tab03.jpg">
                            </div>
                            <div class="jdc_compaign_content_inner_section">
                                <p class="jdc_compaign_content_inner_section_title">
                                    <i class="jdc_bg"></i>数据库<span></span>
                                </p>
                                <p>
                                    <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_osscdn_Link_20')" clstag="Solution|keycount|MiddleContentSec|Solution_osscdn_Link_20"  class="jdc_compaign_content_inner_section_desc link clickEvent" href="https://www.jdcloud.com/cn/products/live-video"
                                        target="_blank" data-event="VideoServiceClick">视频服务<span></span></a>
                                    <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_osscdn_Link_21')" clstag="Solution|keycount|MiddleContentSec|Solution_osscdn_Link_21"  class="jdc_compaign_content_inner_section_desc link clickEvent" href="https://www.jdcloud.com/cn/products/object-storage-service"
                                    target="_blank" data-event="OSSClick">对象存储（OSS）<span></span></a>
                                    <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_osscdn_Link_22')" clstag="Solution|keycount|MiddleContentSec|Solution_osscdn_Link_22"  class="jdc_compaign_content_inner_section_desc link clickEvent" href="https://www.jdcloud.com/cn/products/cdn"
                                    target="_blank" data-event="CDNClick">CDN  <span></span></a>
                                    <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_osscdn_Link_23')" clstag="Solution|keycount|MiddleContentSec|Solution_osscdn_Link_23"  class="jdc_compaign_content_inner_section_desc link clickEvent" href="https://www.jdcloud.com/cn/products/media-processing-service"
                                    target="_blank" data-event="MediaServiceClick">媒体处理服务  <span></span></a>
                                    <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_osscdn_Link_24')" clstag="Solution|keycount|MiddleContentSec|Solution_osscdn_Link_24"  class="jdc_compaign_content_inner_section_desc link clickEvent" href="https://www.jdcloud.com/cn/products/virtual-machines"
                                    target="_blank" data-event="VirtualMachinesClick">云主机  <span></span></a>
                                </p>
                            </div>
                            <div class="jdc_compaign_content_inner_section">
                                <p class="jdc_compaign_content_inner_section_title">
                                    <i class="jdc_bg"></i>特点<span></span>
                                </p>
                                <p class="jdc_compaign_content_inner_section_desc">
                                    目前电商行业获客成本高、用户增速放缓，亟需找到新的流量入口，用户访问后商品展示形式单一，图文信息不足以支撑消费者的购物决策，需要通过互动方式，增强用户购物体验，促进下单。视频直播方式，使用户更全面地了解产品或者服务，视频信息维度比图片文字更加丰富；通过主播的讲解示范、问题回答等互动方式，既带来了流量又解决导购问题。京东云视频直播服务是基于京东云平台优质的计算、网络基础资源和分布式媒体处理集群，为客户提供的低延迟、高可用、易接入的视频直播一站式服务，同时具有端到端的整体解决方案，帮助客户能快速搭建自己的直播平台和应用。
                                </p>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
        <!-- content02 end -->
        <div class="jdc_compaign_content three jdc_bg" id="content03">
            <h2 class="jdc_compaign_content_title">
                产品优势
            </h2>
            <div class="jdc_compaign_content_inner content_container">
                <div class="tab-content">
                    <div clstag="Solution|keycount|MiddleContentSec|Solution_tab_1" class="tab-item current">
                        <div class="tab-item-title jdcfont jdc-common-arr active">
                            <h4>
                                <img src="~assets/mkt/product01.png" alt=""> 
                                <img src="~assets/mkt/product01_active.png" alt="" class="icon_active">
                                对象存储OSS
                            </h4>
                        </div>
                        <div class="tab-item-content">
                            <div class="jdc_compaign_content_inner_section">
                                <p class="jdc_compaign_content_inner_section_title"
                                    target="_blank">
                                    高可用性
                                </p>
                                <p class="jdc_compaign_content_inner_section_desc">
                                    多份副本保存。同Region下提供多可用区机制，保证服务不间断。提供跨区域复制功能支持数据自动备份在不同地域，实现异地容灾。
                                </p>
                            </div>
                            <div class="jdc_compaign_content_inner_section">
                                <p class="jdc_compaign_content_inner_section_title"
                                    target="_blank">
                                    安全可靠
                                </p>
                                <p class="jdc_compaign_content_inner_section_desc">
                                    服务端加密，确保数据安全。签名认证机制。权限控制，Bucket Policy灵活授权。
                                </p>
                            </div>
                            <div class="jdc_compaign_content_inner_section">
                                <p class="jdc_compaign_content_inner_section_title"
                                    target="_blank">
                                    成本低廉
                                </p>
                                <p class="jdc_compaign_content_inner_section_desc">
                                    无需采购、部署和运维费用，按需使用存储空间，根据用量收取费用，没有最低限制，同时提供多种存储类型，帮助用户节约存储成本，更经济地存储和管理数据资源。
                                </p>
                            </div>
                        </div>  
                    </div>
                    <div clstag="Solution|keycount|MiddleContentSec|Solution_tab_2" class="tab-item">
                        <div class="tab-item-title jdcfont jdc-common-arr">
                            <h4>
                                <img src="~assets/mkt/product02.png" alt=""> 
                                <img src="~assets/mkt/product02_active.png" alt="" class="icon_active">
                                CDN产品优势
                            </h4>
                        </div>
                        <div class="tab-item-content">
                            <div class="jdc_compaign_content_inner_section">
                                <p class="jdc_compaign_content_inner_section_title"
                                    target="_blank">
                                    服务透明质量可视
                                </p>
                                <p class="jdc_compaign_content_inner_section_desc">
                                    实时、多维、可视化的业务用量及服务质量监控，透明化的提供稳定、优质的加速服务。
                                </p>
                            </div>
                            <div class="jdc_compaign_content_inner_section">
                                <p class="jdc_compaign_content_inner_section_title"
                                    target="_blank">
                                    精准调度极速体验
                                </p>
                                <p class="jdc_compaign_content_inner_section_desc">
                                    基于京东自有IP地址库及智能融合云调度技术,实现95%以上的命中率和极速用户体验。
                                </p>
                            </div>
                            <div class="jdc_compaign_content_inner_section">
                                <p class="jdc_compaign_content_inner_section_title"
                                    target="_blank">
                                    弹性服务降低回源
                                </p>
                                <p class="jdc_compaign_content_inner_section_desc">
                                    多线路二级源实时动态调度、合并回源、定制分片回源和缓存等策略，实现低负载、高命中率、弹性缓存和最低回源。
                                </p>
                            </div>
                            <div class="jdc_compaign_content_inner_section">
                                <p class="jdc_compaign_content_inner_section_title"
                                    target="_blank">
                                    快速响应定制开发
                                </p>
                                <p class="jdc_compaign_content_inner_section_desc">
                                    针对图片/页面/下载/视频/小视频等业务特点进行针对性定制开发和优化。
                                </p>
                            </div>
                            <div class="jdc_compaign_content_inner_section">
                                <p  class="jdc_compaign_content_inner_section_title"
                                    target="_blank">
                                    私人管家稳定可靠
                                </p>
                                <p class="jdc_compaign_content_inner_section_desc">
                                    京东多年大促技术保障经验的专业运维团队,提供全天候服务保障,每个客户都是VIP。
                                </p>
                            </div>
                        </div>  
                    </div>
                    <div clstag="Solution|keycount|MiddleContentSec|Solution_tab_3" class="tab-item">
                        <div class="tab-item-title jdcfont jdc-common-arr">
                            <h4>
                                <img src="~assets/mkt/product03.png" alt=""> 
                                <img src="~assets/mkt/product03_active.png" alt="" class="icon_active">
                                视频直播优势
                            </h4>
                        </div>
                        <div class="tab-item-content">
                            <div class="jdc_compaign_content_inner_section">
                                <p  class="jdc_compaign_content_inner_section_title"
                                    target="_blank">
                                    多终端多协议
                                </p>
                                <p class="jdc_compaign_content_inner_section_desc">
                                    支持RTMP/HDL/HLS协议，PC/iOS/Android多终端视频直播、观看。
                                </p>
                            </div>
                            <div class="jdc_compaign_content_inner_section">
                                <p class="jdc_compaign_content_inner_section_title"
                                    target="_blank">
                                    专业的视频处理能力
                                </p>
                                <p class="jdc_compaign_content_inner_section_desc">
                                    提供实时转码、直播录制、直播截图、直播时移、直播延时等丰富功能满足视频直播多种业务需求。
                                </p>
                            </div>
                            <div class="jdc_compaign_content_inner_section">
                                <p class="jdc_compaign_content_inner_section_title"
                                    target="_blank">
                                    一站式服务
                                </p>
                                <p class="jdc_compaign_content_inner_section_desc">
                                    提供从推流、视频处理、分发到播放的一站式技术服务以及端到端的整体解决方案。
                                </p>
                            </div>
                            <div class="jdc_compaign_content_inner_section">
                                <p  class="jdc_compaign_content_inner_section_title"
                                    target="_blank">
                                    全面的安全防护
                                </p>
                                <p class="jdc_compaign_content_inner_section_desc">
                                    提供鉴黄、推拉流鉴权、一键断流等保证直播业务安全。
                                </p>
                            </div>
                            <div class="jdc_compaign_content_inner_section">
                                <p  class="jdc_compaign_content_inner_section_title"
                                    target="_blank">
                                    多行业多场景
                                </p>
                                <p class="jdc_compaign_content_inner_section_desc">
                                    满足电商、娱乐、在线教育、游戏、金融等多种直播应用场景。
                                </p>
                            </div>
                            <div class="jdc_compaign_content_inner_section">
                                <p class="jdc_compaign_content_inner_section_title"
                                    target="_blank">
                                    7*24客服，专家运维
                                </p>
                                <p class="jdc_compaign_content_inner_section_desc">
                                    提供7*24小时专家客服，随时处理客户问题，保证业务连续。
                                </p>
                            </div>
                            <div class="jdc_compaign_content_inner_section">
                                <p  class="jdc_compaign_content_inner_section_title"
                                    target="_blank">
                                    丰富的统计分析
                                </p>
                                <p class="jdc_compaign_content_inner_section_desc">
                                    可对带宽、流量、在线人数等进行统计查看，帮助客户有效分析业务数据。
                                </p>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
        <div class="jdc_compaign_content four" id="content04">
            <h2 class="jdc_compaign_content_title">
                <p>产品简介</p>
            </h2>
            <div class="jdc_compaign_content_inner content_container">
                <div class="jdc_compaign_content_inner_item">
                    <div class="jdc_compaign_content_inner_item_logo_wrap">
                        <img src="~assets/mkt/intro01.png" alt="对象存储OSS">
                        <p>对象存储OSS</p>
                    </div>
                    <div class="jdc_compaign_content_inner_item_mask">
                        <h2 class="jdc_compaign_content_inner_item_mask_title">
                            <img src="~assets/mkt/intro01_top.png" alt="" class="jindie_logo">
                            对象存储OSS
                        </h2>   
                        <p class="jdc_compaign_content_inner_item_mask_desc">
                            京东云对象存储服务（Object Storage Service，简称 OSS），是京东云提供的海量、安全、成本低廉、稳定可靠的云存储服务。您可以实现对数据的统一管理，满足各类存储需求。支持标准的 RESTfulAPI 接口，您可在任何时间、任何地点上传和下载数据，也可以通过控制台对数据进行简单的管理。
                        </p>
                        <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_osscdn_catDetail_1')" clstag="Solution|keycount|MiddleContentSec|Solution_osscdn_catDetail_1" href="https://www.jdcloud.com/cn/products/object-storage-service" class="jdc_compaign_content_inner_item_mask_link clickEvent" data-event="OSSClick" target="_blank">
                            查看详情<span></span>
                        </a>
                    </div>
                </div>
                <div class="jdc_compaign_content_inner_item">
                        <div class="jdc_compaign_content_inner_item_logo_wrap">
                            <img src="~assets/mkt/intro02.png" alt="京东云CDN">
                            <p>京东云CDN</p>
                        </div>
                        <div class="jdc_compaign_content_inner_item_mask">
                            <h2 class="jdc_compaign_content_inner_item_mask_title">
                                <img src="~assets/mkt/intro02_top.png" alt="" class="suqian_logo">
                                京东云CDN
                            </h2>
                            <p class="jdc_compaign_content_inner_item_mask_desc">
                                京东云CDN（Content Delivery Network）基于京东优质网络基础设施和智能云计算技术，向客户提供低成本、高性能、可扩展的互联网内容分发服务。利用广泛的节点覆盖和先进的云调度、云存储技术，提供完整的静态网页、文件、视频点播、视频直播等互联网内容分发管理和网络加速解决方案，将海量内容更快、更可靠地投递给互联网终端用户，降低网站运营成本，提升用户互联网应用体验。                        
                            </p>
                            <p class="jdc_compaign_content_inner_item_mask_desc">
                                京东云CDN可以为您有效解决以下问题：
                            </p>
                            <p class="jdc_compaign_content_inner_item_mask_desc">
                                1) 将内容更快的推送给终端用户,提升用户体验,增强用户粘性；
                            </p>
                            <p class="jdc_compaign_content_inner_item_mask_desc">
                                2) 帮助互联网内容提供者将更多的精力聚焦在内容上,减轻网络基础设施建设负担和成本；
                            </p>
                            <p class="jdc_compaign_content_inner_item_mask_desc">
                                3) 提升网络应用的健壮性和安全性,实现多点容灾备份,有效防御外来攻击和威胁。
                            </p>
                            <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_osscdn_catDetail_2')" href="https://www.jdcloud.com/cn/products/cdn" clstag="Solution|keycount|MiddleContentSec|Solution_osscdn_catDetail_2" class="jdc_compaign_content_inner_item_mask_link clickEvent" data-event="CDNClick" target="_blank">
                                查看详情<span></span>
                            </a>
                        </div>                    
                </div>
                <div class="jdc_compaign_content_inner_item">
                        <div class="jdc_compaign_content_inner_item_logo_wrap">
                            <img src="~assets/mkt/intro03.png" alt="视频直播">
                            <p>视频直播</p>
                        </div>
                        <div class="jdc_compaign_content_inner_item_mask">
                            <h2 class="jdc_compaign_content_inner_item_mask_title">
                                <img src="~assets/mkt/intro03_top.png" alt="" class="suqian_logo">
                                视频直播
                            </h2>
                            <p class="jdc_compaign_content_inner_item_mask_desc">
                                京东云为宿迁市政府本地机房部署安全监测和防护组件，正常请求和应答的数据无需经过云端节点，一旦攻击流量超过本地防护阈值，可自动迁移上云，利用云端 IP 高防节点进行清洗，这种“非常态化上云”的协同防御模式满足宿迁市政府对数据自主可控和本地业务安全合规监管要求。
                            </p>
                            <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_osscdn_catDetail_3')" href="https://www.jdcloud.com/cn/products/live-video" clstag="Solution|keycount|MiddleContentSec|Solution_osscdn_catDetail_3" class="jdc_compaign_content_inner_item_mask_link clickEvent" data-event="VideoServiceClick" target="_blank">
                                查看详情<span></span>
                            </a>
                        </div>                    
                </div>
            </div>
        </div>
        <div class="success_feedback">
            <div class="success_feedback_mask">

            </div>
            <div class="success_feedback_modal">
                <div class="success_feedback_modal_title">
                    提示
                    <img src="~assets/mkt/icon_remove_spec.png" alt="" class="close_feedback">
                </div>
                <div class="success_feedback_modal_content success">
                    <img src="~assets/mkt/success_icon.png" alt="">
                    <p>感谢您的信任</p>
                    <p>我们将在三个工作日内与您取得联系</p>
                </div>
                <div class="success_feedback_modal_content fail">
                    <img src="~assets/mkt/fail_icon.png" alt="">
                    <p>系统繁忙，请稍后再试</p>
                </div>
                <div class="success_feedback_modal_footer">
                    <button class="success_feedback_modal_btn jdc_bg close_feedback">关闭</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import ceiling from "@/utils/ceiling_osscdn.js";
import fun from "fun";
import apiUrl from "api";

export default {
  data() {
    return {
      submitDone: false,
      formLoading: false,
      checkOnTgy: 1,
      ruleForm: {
        referrer: "",
        referrerDomain: "",
        campaignCode: "",
        pageTitle: "",
        requestorName: "",
        email: "",
        phone: "",
        company: "",
        industry: "",
        jobTitle: "",
        deviceType: "1",
        pageURL: ""
      },
    };
  },
  components: {
    importJs: {
      render(createElement) {
        return createElement("script", {
          attrs: {
            type: "text/javascript",
            src: this.src
          }
        });
      },
      props: {
        src: {
          type: String,
          required: true
        }
      }
    }
  },
  methods: {
    submitForm() {
      this.gaEventTrigger(
        "MiddleContentSec",
        "Solution|keycount|MiddleContentSec|Solution_database_submit"
      );
         // 行业列表
      const industryList = [
        {
          id: 1,
          text: "IT_通信_电子_互联网"
        },
        {
          id: 2,
          text: "房地产_建筑业"
        },
        {
          id: 3,
          text: "服务业"
        },
        {
          id: 4,
          text: "房地产_建筑业"
        },
        {
          id: 5,
          text: "交通_运输_物流_仓储"
        },
        {
          id: 6,
          text: "金融业"
        },
        {
          id: 7,
          text: "贸易_批发_零售_租赁业"
        },
        {
          id: 8,
          text: "能源_矿产_环保"
        },
        {
          id: 9,
          text: "农_林_牧_渔_其他"
        },
        {
          id: 10,
          text: "商业服务"
        },
        {
          id: 11,
          text: "生产_加工_制造"
        },
        {
          id: 12,
          text: "文化_传媒_娱乐_体育"
        },
        {
          id: 13,
          text: "政府_非营利机构"
        }
      ];

      // 职务列表
      const dutyList = [
        {
          id: 1,
          text: "CFO"
        },
        {
          id: 2,
          text: "CIO/CTO"
        },
        {
          id: 3,
          text: "CXO"
        },
        {
          id: 4,
          text: "董事长/总裁/总经理"
        },
        {
          id: 5,
          text: "个人开发者"
        },
        {
          id: 6,
          text: "技术经理"
        },
        {
          id: 7,
          text: "技术总监"
        },
        {
          id: 8,
          text: "老师"
        },
        {
          id: 9,
          text: "其他"
        },
        {
          id: 10,
          text: "学生"
        },
        {
          id: 11,
          text: "业务总监/经理"
        },
        {
          id: 12,
          text: "政府官员"
        }
      ];
      let success_flag = true;
      const name = $("#name").val();
      const email = $("#email").val();
      const mobile = $("#mobile").val();
      const company = $("#company").val();
      let industry = $("#industry").val();
      let duty = $("#duty").val();
      const checkEmail = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
      const checkMobile = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;

      $.each(industryList, (index, item) => {
        if (industry == item.id) {
          industry = item.text;
        }
      });

      $.each(dutyList, (index, item) => {
        if (duty == item.id) {
          duty = item.text;
        }
      });

      $("input")
        .removeClass("error")
        .siblings("p")
        .html("");
      if (!name) {
        $("#name")
          .addClass("error")
          .siblings("p")
          .html("姓名为必填项");
        success_flag = false;
      }
      if (!email) {
        $("#email")
          .addClass("error")
          .siblings("p")
          .html("邮箱为必填项");
        success_flag = false;
      }

      if (email && !checkEmail.test(email)) {
        $("#email")
          .addClass("error")
          .siblings("p")
          .html("邮箱格式有误，请重新输入");
        success_flag = false;
      }

      if (!mobile) {
        $("#mobile")
          .addClass("error")
          .siblings("p")
          .html("手机为必填项");
        success_flag = false;
      }

      if (mobile && !checkMobile.test(mobile)) {
        $("#mobile")
          .addClass("error")
          .siblings("p")
          .html("手机号码格式有误，请重新输入");
        success_flag = false;
      }

      if (!company) {
        $("#company")
          .addClass("error")
          .siblings("p")
          .html("公司为必填项");
        success_flag = false;
      }
      const _par = {
        formDefId: 7,
        formData: {
          referrer: "",
          referrerDomain: "",
          campaignCode: "",
          pageTitle: "",
          requestorName: name,
          email: email,
          phone: mobile,
          company: company,
          industry: industry,
          jobTitle: duty,
          deviceType: "1",
          pageURL: ""
        }
      }; 
      var _self = this;
      _par.formData.pageTitle = document.title;
      _par.formData.pageURL = window.location.href;
      _par.formData.referrerURL = sessionStorage.getItem("referrer"); // 进入京东云网站之前访问的网站链接
      _par.formData.referrerDomain = sessionStorage.getItem("referrerDomain"); // 进入京东云网站之前访问的网站域名
      _par.formData.campaignCode = sessionStorage.getItem("campaignCode"); // 收集进入京东云官网带有queryString
      _par.formData.deviceType = this.checkDevice() ? "2" : "1"; // device
      if (!success_flag) return;
      this.formLoading = true
      this.$http.post(apiUrl.api.subscriptionSubmit, _par).then(
        res => {
          if (res.body.code == 0) {
             $(".success_feedback")
                .show()
                .find(".success_feedback_modal_content.success")
                .show();
              $(".success_feedback")
                .find(".success_feedback_modal_content.fail")
                .hide();
                this.submitDone = true
              $.ajax({
                url: `${
                  window.location.protocol
                }//visits.jdcloud.com/security/event`,
                type: "POST",
                data: {
                  event_name: "regeister",
                  view_form: "内容存储及分发网络加速解决方案"
                },
                beforeSend: function(xhr) {},
                success: function(res) {},
                complete: function(XMLHttpRequest, textStatus) {},
                error: function(XMLHttpRequest, textStatus, errorThrown) {}
              });  
          } else {
              $(".success_feedback").find(".success_feedback_modal_content.fail").find("p").html(res.body.message)
              this.submitDone = false
              $(".success_feedback").hide();
              $(".success_feedback")
                .show()
                .find(".success_feedback_modal_content.fail")
                .show();
              $(".success_feedback")
                .find(".success_feedback_modal_content.success")
                .hide();
          }
          this.formLoading = false
        },
        err => {
          this.formLoading = false
          console.log(err);
        }
      );
        
    }
  },
  mounted() {
    var _self = this
    $(window).on("load", function() {
      const VIEWFROM = "内容存储及分发网络加速解决方案";
      // 行业列表
      const industryList = [
        {
          id: 1,
          text: "IT_通信_电子_互联网"
        },
        {
          id: 2,
          text: "房地产_建筑业"
        },
        {
          id: 3,
          text: "服务业"
        },
        {
          id: 4,
          text: "房地产_建筑业"
        },
        {
          id: 5,
          text: "交通_运输_物流_仓储"
        },
        {
          id: 6,
          text: "金融业"
        },
        {
          id: 7,
          text: "贸易_批发_零售_租赁业"
        },
        {
          id: 8,
          text: "能源_矿产_环保"
        },
        {
          id: 9,
          text: "农_林_牧_渔_其他"
        },
        {
          id: 10,
          text: "商业服务"
        },
        {
          id: 11,
          text: "生产_加工_制造"
        },
        {
          id: 12,
          text: "文化_传媒_娱乐_体育"
        },
        {
          id: 13,
          text: "政府_非营利机构"
        }
      ];

      // 职务列表
      const dutyList = [
        {
          id: 1,
          text: "CFO"
        },
        {
          id: 2,
          text: "CIO/CTO"
        },
        {
          id: 3,
          text: "CXO"
        },
        {
          id: 4,
          text: "董事长/总裁/总经理"
        },
        {
          id: 5,
          text: "个人开发者"
        },
        {
          id: 6,
          text: "技术经理"
        },
        {
          id: 7,
          text: "技术总监"
        },
        {
          id: 8,
          text: "老师"
        },
        {
          id: 9,
          text: "其他"
        },
        {
          id: 10,
          text: "学生"
        },
        {
          id: 11,
          text: "业务总监/经理"
        },
        {
          id: 12,
          text: "政府官员"
        }
      ];

      $(".selectIndustry").select2({
        placeholder: "请选择行业",
        width: "100%",
        data: industryList
      });

      $(".selectDuty").select2({
        placeholder: "请选择职务",
        width: "100%",
        data: dutyList
      });

      const $jdc_compaign_tab_items = $(".jdc_compaign_tab_item");
      const $jdc_compaign_top_tab_wrap = $(".jdc_compaign_top_tab_wrap");

      const $content01 = $("#content01");
      const $content02 = $("#content02");
      const $content03 = $("#content03");
      const $content04 = $("#content04");
      const $content05 = $("#content05");
      // const $player = $("video");
      // const $close = $("#close");

      $("#close").on("click", () => {
        $("video")[0].pause();
        $(".jdc_compaign_video_wrap").hide();
        $("body").css("overflow", "auto");
      });

      $(".jdc_compaign_video_item").on("click", function() {
        let src = $(this).data("src");
        $(".jdc_compaign_video_wrap").show();
        $("video").attr("src", src);
        setTimeout(() => {
          $("video")[0].play();
          $("video").attr("autoplay", "autoplay");
        }, 500);
      });
      // 应用场景切换
      $(".jdc_compaign_content_inner_tabItem").on("click", function() {
        const currentIndex = $(this).index();
        $(this)
          .addClass("active")
          .siblings()
          .removeClass("active");
        $(
          `.jdc_compaign_content_inner_tab_content_item:nth-child(${currentIndex +
            1})`
        )
          .addClass("current")
          .siblings()
          .removeClass("current");
      });

      // 产品简介动效
      $(".productItem").on("mouseover", function() {
        $(this)
          .addClass("current")
          .siblings()
          .removeClass("current");
      });

      $(".tab-item-title").on("click", function() {
        $(this)
          .toggleClass("active")
          .parent()
          .toggleClass("current");
      });
      /* 标题栏吸顶效果 */
		ceiling($jdc_compaign_top_tab_wrap[0], 'jdc_compaign_top_tab_wrap normal');

        // 回到顶部
        $('.mod_hang_qrcode_btn').on('click', () => {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
        });

      // 标题栏切换选中状态
      $jdc_compaign_tab_items.on("click", function() {
        const $this = $(this);
        const index = $this.index();
        switch (index) {
          case 0:
            $("html, body").animate(
              {
                scrollTop: $content01[0].offsetTop
              },
              500
            );
            break;
          case 1:
            $("html, body").animate(
              {
                scrollTop: $content02[0].offsetTop
              },
              500
            );
            break;
          case 2:
            $("html, body").animate(
              {
                scrollTop: $content03[0].offsetTop
              },
              500
            );
            break;
          case 3:
            $("html, body").animate(
              {
                scrollTop: $content04[0].offsetTop
              },
              500
            );
            break;
          case 4:
            $("html, body").animate(
              {
                scrollTop: $content05[0].offsetTop
              },
              500
            );
            break;
        }
      });

      /* 标题栏吸顶效果 */
      ceiling(
        $jdc_compaign_top_tab_wrap[0],
        "jdc_compaign_top_tab_wrap normal"
      );
        $('#contact_btn').on('click', () => {
            _self.gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_osscdn_contantUs_1')
            if ($('body').width() > 1200) {
                $('html, body').animate({
                    scrollTop: $content01[0].offsetTop
                }, 500);
            } else {
                $('html, body').animate({
                    scrollTop: $('.mobile_contact_title')[0].offsetTop
                }, 500);
            }
        });
        // 移动端联系我们
		$('.mobile_contact').on('click', () => {
            _self.gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_osscdn_mobileContent_1')
			$('html, body').animate({
				scrollTop: $('.mobile_contact_title')[0].offsetTop
			}, 500);
		});
        // 点击快来上云
        $('.jdc_compaign_service_btn').on('click', () => {
            $('html, body').animate({
                scrollTop: $content01[0].offsetTop + 30
            }, 500);
        });

      $(".mod_hang_qrcode_btn").on("click", () => {
        $("html, body").animate(
          {
            scrollTop: 0
          },
          500
        );
      });

      $(".jdc_compaign_service_close").on("click", () => {
        $(".jdc_compaign_service_left").hide(500);
        window.sessionStorage.setItem("isClose", "1");
      });

      $(".show_left_modal").on("click", () => {
        $(".jdc_compaign_service_left").show(500);
      });

      // $("#submit_btn").on("click", () => {
      //   let success_flag = true;
      //   const name = $("#name").val();
      //   const email = $("#email").val();
      //   const mobile = $("#mobile").val();
      //   const company = $("#company").val();
      //   let industry = $("#industry").val();
      //   let duty = $("#duty").val();
      //   const checkEmail = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
      //   const checkMobile = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;

      //   $.each(industryList, (index, item) => {
      //     if (industry == item.id) {
      //       industry = item.text;
      //     }
      //   });

      //   $.each(dutyList, (index, item) => {
      //     if (duty == item.id) {
      //       duty = item.text;
      //     }
      //   });

      //   $("input")
      //     .removeClass("error")
      //     .siblings("p")
      //     .html("");
      //   if (!name) {
      //     $("#name")
      //       .addClass("error")
      //       .siblings("p")
      //       .html("姓名为必填项");
      //     success_flag = false;
      //   }
      //   if (!email) {
      //     $("#email")
      //       .addClass("error")
      //       .siblings("p")
      //       .html("邮箱为必填项");
      //     success_flag = false;
      //   }

      //   if (email && !checkEmail.test(email)) {
      //     $("#email")
      //       .addClass("error")
      //       .siblings("p")
      //       .html("邮箱格式有误，请重新输入");
      //     success_flag = false;
      //   }

      //   if (!mobile) {
      //     $("#mobile")
      //       .addClass("error")
      //       .siblings("p")
      //       .html("手机为必填项");
      //     success_flag = false;
      //   }

      //   if (mobile && !checkMobile.test(mobile)) {
      //     $("#mobile")
      //       .addClass("error")
      //       .siblings("p")
      //       .html("手机号码格式有误，请重新输入");
      //     success_flag = false;
      //   }

      //   if (!company) {
      //     $("#company")
      //       .addClass("error")
      //       .siblings("p")
      //       .html("公司为必填项");
      //     success_flag = false;
      //   }
      //   if (!success_flag) return;

      //   // const postURL = `${window.location.protocol}//solutions.jdcloud.com/api/v1/user/`;
      //   const postURL = `/api/form/submit`;
      //   const _par = {
      //     formDefId: 6,
      //     formData: {
      //       referrer: "",
      //       referrerDomain: "",
      //       campaignCode: "",
      //       pageTitle: "",
      //       requestorName: name,
      //       email: email,
      //       phone: mobile,
      //       company: company,
      //       industry: industry,
      //       jobTitle: duty,
      //       deviceType: "1",
      //       pageURL: ""
      //     }
      //   }; 
      //   console.log(_par)
      //   // return false
      //   $.ajax({
      //     url: postURL,
      //     type: "POST",
      //     data: _par,
      //     // contentType : "application/json",
			//     dataType : "json",
      //     // data: {
      //     //   username: name,
      //     //   userpass: "",
      //     //   userphone: mobile,
      //     //   useraddress: "",
      //     //   usercompany: company,
      //     //   useremail: email,
      //     //   userduty: duty,
      //     //   userindustry: industry,
      //     //   viewfrom: VIEWFROM,
      //     //   campainName: "云数据库场景化应用实战方案"
      //     // },
      //     beforeSend: function(xhr) {},
      //     success: function(res) {
      //       if (res !== null && res.code === 200) {
      //         $(".success_feedback")
      //           .show()
      //           .find(".success_feedback_modal_content.success")
      //           .show();
      //         $(".success_feedback")
      //           .find(".success_feedback_modal_content.fail")
      //           .hide();
      //       } else {
      //         $(".success_feedback")
      //           .show()
      //           .find(".success_feedback_modal_content.fail")
      //           .show();
      //         $(".success_feedback")
      //           .find(".success_feedback_modal_content.success")
      //           .hide();
      //       }
      //       $("body").css("overflow", "hidden");

      //     },
      //     complete: function(XMLHttpRequest, textStatus) {},
      //     error: function(XMLHttpRequest, textStatus, errorThrown) {
      //       $(".success_feedback")
      //         .show()
      //         .find(".success_feedback_modal_content.fail")
      //         .show();
      //       $(".success_feedback")
      //         .find(".success_feedback_modal_content.success")
      //         .hide();
      //       $("body").css("overflow", "hidden");
      //     }
      //   });
      // });

      // 关闭遮罩恢复可以滑动
      $(".close_feedback").on("click", () => {
        $(".success_feedback").hide();
        $("body").css("overflow", "auto");
        if(_self.submitDone == true){
          window.location.reload()
        }
      });

      // 阻止移动端遮罩层背后滑动
      $(".success_feedback")[0].addEventListener(
        "touchmove",
        e => {
          e.preventDefault();
        },
        false
      );
 
      $(".clickEvent").on("click", function() {
        const event_name = $(this).data("event");
        $.ajax({
          url: `${window.location.protocol}//visits.jdcloud.com/security/event`,
          type: "POST",
          data: {
            event_name,
            view_form: VIEWFROM
          },
          beforeSend: function(xhr) {},
          success: function(res) {},
          complete: function(XMLHttpRequest, textStatus) {},
          error: function(XMLHttpRequest, textStatus, errorThrown) {}
        });
      });

      window.onresize = function() {};
    });
  }
};
</script>


<style>
@import url('//vjs.zencdn.net/7.1.0/video-js.css');
@import url('//cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css');
</style>


<style lang="less">

.jdc_compaign_container {
    line-height: 1;
    position: relative;
    // video
    .jdc_compaign_video_wrap {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        z-index: 1000;
        overflow: hidden;
        .inner_video_wrap {
            width: 65%;
            height: 65%;
            position: relative;
            margin: 0 auto;
            top: 15%;
            // background-color: transparent;
            // transform: translate(-50%, -50%);
            .video {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                // background-color: transparent;
                .vjs-big-play-button {
                    display: none;
                }
            }
            .close {
                position: absolute;
                top: 0;
                right: 0;
                width: 30px;
                height: 30px;
                z-index: 2;
                background-image: url('~assets/mkt/close.png');
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat; 
                cursor: pointer;
                opacity: .7;
            }
        }
    }
    // 主视图区
    .content_container {
        max-width: 1200px;
        margin: 0 auto;
    }
    // 主色调背景
    .jdc_bg {
        background: linear-gradient(80deg,#0989c5 0,#995cb6 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0989c5', endColorstr='#995cb6', GradientType=1);
    }
    // 按钮hover共用style
    .jdc_btn_hover {
        &:hover {
            box-shadow: 0 0 10px 0 rgba(3,0,76,.3);
        }
    }
    // 联系我们
    .jdc_compaign_service {
        position: fixed;
        right: 20px;
        bottom: 100px;
        z-index: 1000;
        display: none;
        .jdc_compaign_service_left {
            display: none;
            position: relative;
            width: 260px;
            height: 254px;
            float: right;
            background-color: #fff;
            box-sizing: border-box;
            padding: 46px 20px 0 20px;
            font-size: 15px;
            line-height: 1.5;
            text-align: center;
            box-shadow: 0 3px 10px 0 rgba(32,86,178,0.20);
            margin-right: 6px;
            img {
                cursor: pointer;
                position: absolute;
                width: 20px;
                height: 20px;
                right: 20px;
                top: 20px;
            }
            .jdc_compaign_service_left_title {
                font-size: 20px;
                color: #666;
                margin-bottom: 22px;
                line-height: 1;
            }
            .jdc_compaign_service_btn {
                position: absolute;
                display: block;
                width: 160px;
                line-height: 40px;
                height: 40px;
                border-radius: 10px;
                color: #fff;
                font-size: 16px;
                border: none;
                outline: none;
                bottom: 30px;
                left: 50%;
                margin-left: -80px;
                &:active {
                    opacity: .5;
                }
            }
        }
        .jdc_compaign_service_right {
            position: relative;
            float: right;
            margin-right: 6px;
            .contact_us {
                display: none;
            }
        }
    }
    // 主banner区域
    .jdc_compaign_banner {
        position: relative;
        color: #fff;
        width: 100%;
        height: 530px;
        background-image: url('~assets/mkt/banner_cover.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        .jdc_compaign_banner_content {
            position: relative;
            width: 100%;
            max-width: 1200px;
            top: 106px;
            z-index: 2;
            box-sizing: border-box;
            padding-left: 10px;
            margin: 0 auto;
            .jdc_compaign_banner_content_title {
                font-size: 44px;
                font-weight: 400;
            }
            .jdc_compaign_banner_desc {
                width: 634px;
                font-size: 14px;
                line-height: 1.5;
                color: #FFFFFF;
                text-align: justify;
                margin-top: 32px;
            }
            .contact_btn {
                width: 116px;
                line-height: 36px;
                height: 36px;
                background-color: #fff;
                border-radius: 18px;
                color: #030054;
                font-size: 14px;
                border: none;
                outline: none;
                margin-top: 40px;
                &:active {
                    opacity: .5;
                }
            }
        }
        .jdc_compaign_banner_img {
            position: absolute;
            right: 0;
            height: 550px;
            top: 0;
        }
    }
    // 顶部tab栏
    .jdc_compaign_top_tab_wrap {
        width: 100%;
        background-color: rgba(0,0,0,.25);
        position: relative;
        &.normal {
            top: -60px;
        }
        &.fixPosition {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 100;
            background-color: #fff;
            .jdc_compaign_top_tab {
                color: #333; 
                .jdc_compaign_tab_item {
                    &.active {
                        background-position: bottom;
                        background-size: 100% 2px;
                    }
                }
            }        
        }
        .jdc_compaign_top_tab {
            max-width: 1200px;
            height: 60px;
            line-height: 60px; 
            color: #fff;
            font-size: 16px;
            margin: 0 auto;
            .jdc_compaign_tab_item {
                width: 25%;
                float: left;
                cursor: pointer;
                text-align: center;
                border-bottom: 2px solid #f3f5fb;
                white-space: nowrap;
                overflow: hidden;
                &.active {
                    background-image: url('~assets/mkt/active_line.png');
                    background-size: 100% 4px;
                    background-position: top;
                    background-repeat: no-repeat;
                }
            }
        }
    }
    // 成功提示框
    .success_feedback {
        display: none;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 10001;
        .success_feedback_mask {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, .3);
        }
        .success_feedback_modal {
            width: 465px;
            height: 310px;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -155px;
            margin-left: -232.5px;
            background-color: #fff;
            border-radius: 3px;
            overflow: hidden;
            .success_feedback_modal_title {
                font-size: 16px;
                height: 48px;
                line-height: 48px;
                padding-left: 20px;
                background-color: #F4F5F9 ;
                img {
                    width: 15px;
                    height: 15px;
                    position: absolute;
                    padding: 10px;
                    right: 10px;
                    top: 6px;
                    cursor: pointer;
                }
            }
            .success_feedback_modal_content {
                text-align: center;
                padding-top: 52px;
                img {
                    width: 46px;
                    height: 46px;
                }
                p {
                    color: #333;
                    font-size: 14px;
                    &:nth-child(2) {
                        font-size: 18px;
                        margin: 20px auto 10px;
                    }
                }
            }
            .success_feedback_modal_footer {
                position: absolute;
                width: 100%;
                height: 48px;
                text-align: right;
                padding-right: 20px;
                background-color: #F4F5F9;
                bottom: 0;
                box-sizing: border-box;
                .success_feedback_modal_btn {
                    text-align: center;
                    width: 90px;
                    line-height: 36px;
                    height: 36px;
                    border-radius: 3px;
                    color: #fff;
                    font-size: 16px;
                    border: none;
                    outline: none;
                    margin-top: 6px;
                }
            }
        }
    }
    // 主内容区
    .jdc_compaign_content {
        padding: 60px 0;
        width: 100%;
        .jdc_compaign_content_title {
            font-size: 26px;
            color: #0989C5;
            text-align: center;
            margin-bottom: 50px;
        }
        .tab-content {
            display: none;
        }
        &.one {
            .jdc_compaign_content_inner_input_content {
                width: 710px;
                height: 387px;
                float: left;
                padding: 30px 28px;
                box-sizing: border-box;
                box-shadow: 0 3px 10px 0 rgba(55,80,161,0.20);
                // margin-bottom: 60px;
                .jdc_compaign_content_inner_input_content_title {
                    font-size: 18px;
                    color: #0989C5;
                }
            }
            .jdc_compaign_video_item {
                position: relative;
                width: 490px;
                float: left;
                height: 385px;
                text-align: center;
                &:nth-child(2) {
                    margin: 0 5%;
                }
                p {
                    font-size: 16px;
                    color: #333;
                    line-height: 60px;
                    border: 2px solid #A9B8DE;
                    border-top: none;
                }
                .jdc_compaign_video_item_img_wrap {
                    position: relative;
                    cursor: pointer;
                    &:hover {
                        .video_mask {
                            background-color: rgba(0,0,0,.15);
                        }
                    }
                    .jdc_compaign_video_item_img {
                        display: block;
                        width: 100%;
                        height: 324px;
                    }
                    .jdc_compaign_video_item_img_mobile {
                        display: none;
                        width: 100%;
                        height: 324px;
                    }
                    .jdc_compaign_video_item_player_btn {
                        position: absolute;
                        width: 52px;
                        height: 52px;
                        top: 135px;
                        left: 50%;
                        margin-left: -20px;
                        z-index: 3;
                    }
                    .video_mask {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                        background-color: rgba(0,0,0,.35);
                        z-index: 2;
                        transition: all .5s;
                    }
                }
            }
            .select2-container--default .select2-selection--single .select2-selection__rendered {
                // color: #fff;
            }
            .jdc_compaign_content_title {
                margin-bottom: 40px;
                &.jdc_compaign_content_title_m {
                    display: none;
                }
                p {
                    &:nth-child(2) {
                        font-size: 14px;
                        margin-top: 20px;
                    }
                }
            }
            .jdc_compaign_content_inner {
                box-sizing: border-box;
                .jdc_compaign_content_inner_input_wrap_content {
                    overflow: hidden;
                }
                .jdc_compaign_content_inner_input_wrap {
                    position: relative;
                    width: 50%;
                    // width: 390px;
                    margin-top: 36px;
                    float: left;
                    &.selectWrap {
                        label {
                            span {
                                visibility: hidden;
                            }
                        }
                    }
                    label {
                        // display: block;
                        // width: 100%;
                        margin-bottom: 10px;
                        margin-right: 5px;
                        color: #333;
                        span {
                            color: #C50900;
                        }
                    }
                    input {
                        width: 260px;
                        // width: 100%;
                        box-sizing: border-box;
                        height: 40px;
                        line-height: 40px;
                        // background: rgba(0,0,0,0.15);
                        border: 1px solid rgba(151,151,151,0.12);
                        box-shadow: inset 0 2px 3px 0 rgba(55,80,161,0.09);
                        border-radius: 3px;
                        padding-left: 20px;
                        &.error {
                            border: 1px solid #C50900;
                        }
                    }
                    select {
                        // width: 100%;
                        width: 260px;
                        height: 40px;
                        line-height: 40px;
                        // background: rgba(0,0,0,0.15);
                        border: 1px solid rgba(151,151,151,0.12);
                        // box-shadow: inset 0 2px 3px 0 rgba(55,80,161,0.09);
                        border-radius: 3px;
                    }
                    .select2-container--default, .select2-container {
                        width: 260px !important;
                        .select2-selection--single {
                            // width: 100%;
                            width: 260px !important;
                            height: 40px;
                            line-height: 40px;
                            // background: rgba(0,0,0,0.15);
                            border: 1px solid rgba(151,151,151,0.12);
                            box-shadow: inset 0 2px 3px 0 rgba(55,80,161,0.09);
                            .select2-selection__rendered {
                                height: 40px;
                                line-height: 40px;    
                                padding-left: 20px;                           
                            }
                            .select2-selection__arrow {
                                top: 6px;
                                b {
                                    // border-color: rgba(255, 255, 255, .5) transparent transparent transparent;
                                }   
                            }
                        }
                        .select2-selection--single .select2-selection__placeholder {
                            color: rgba(0, 0, 0, .5);
                        }
                    }
                    .error_text {
                        position: absolute;
                        color: #C50900;
                        font-size: 12px;
                        bottom: -18px;
                        padding-left: 3.5em;
                    }
                }
            }
            .jdc_compaign_content_btn {
                display: block;
                width: 160px;
                height: 40px;
                line-height: 40px;
                border: 0;
                margin: 34px auto 0;
                color: #fff;
                border-radius: 10px;
                &:active {
                    opacity: .5;
                }
                &:hover {
                    box-shadow: 0 0 10px 0 rgba(3,0,76,.3);
                }
            }
        }
        &.two {
            overflow: hidden;
            background-color: #F7F8FC;
            .jdc_compaign_content_inner_tabbar {
                font-size: 16px;
                text-align: center;
                border-bottom: 1px solid #D8D8D8;
                padding-bottom: 10px;
                margin-bottom: 20px;
                .jdc_compaign_content_inner_tabItem {
                    padding: 0 14px 8px;
                    margin: 0 60px;
                    cursor: pointer;
                    position: relative;
                    top: 1px;
                    &.active {
                        background-image: url('~assets/mkt/active_line.png');
                        background-size: 100% 3px;
                        background-position: bottom;
                        background-repeat: no-repeat;
                    }
                }
            }
            .jdc_compaign_content_inner_tab_content {
                position: relative;
                height: 465px;
                .jdc_compaign_content_inner_tab_content_item {
                    position: absolute;
                    width: 100%;
                    height: 465px;
                    z-index: 1;
                    opacity: 0;
                    left: 0;
                    top: 0;
                    transition: all 1s;
                    &.current {
                        z-index: 2;
                        opacity: 1;
                    }
                    .jdc_compaign_content_inner_left {
                        width: 712px;
                        height: 465px;
                        float: left;
                        position: relative;
                        left: 4px;
                        img {
                            display: block;
                            width: 100%;
                            height: 100%;
                            box-shadow: 0 4px 14px 0 rgba(55,80,161,0.20);
                        }
                    }
                    .jdc_compaign_content_inner_right {
                        width: 475px;
                        height: 465px;
                        float: left;
                        padding: 30px;
                        box-sizing: border-box;
                        background-image: url('~assets/mkt/solution_bg.png');
                        background-size: cover;
                        background-position-x: right;
                        background-position-y: top;
                        background-repeat: no-repeat;
                        text-align: left;
                        .jdc_compaign_content_inner_right_title {
                            font-size: 24px;
                            color: #333333;
                        }
                        .jdc_compaign_content_inner_section {
                            margin-top: 25px;
                            .jdc_compaign_content_inner_section_title {
                                font-size: 20px;
                                color:#0989C5;
                                text-align: justify;
                                // margin-bottom: 15px;
                                i {
                                    display: inline-block;
                                    width: 10px;
                                    height: 10px;
                                    border-radius: 50%;
                                    margin-right: 10px;
                                    position: relative;
                                    top: -2px;
                                }
                            }
                            .jdc_compaign_content_inner_section_desc {
                                font-size: 14px;
                                color: #666;
                                text-align: justify;
                                line-height: 1.5;
                                &.link {
                                    margin-top: -6px;
                                    display: inline-block;
                                    span {
                                        width: 30px;
                                        height: 30px;
                                        display: inline-block;
                                        background-image: url('~assets/mkt/arrow_pc.png');
                                        background-size: 14px 8px;
                                        background-position: center;
                                        background-repeat: no-repeat;
                                        position: relative;
                                        top: 10px;
                                        left: -5px;
                                    }
                                    &:hover {
                                        color: #0989C5;
                                        span {
                                            background-image: url('~assets/mkt/arrow_m.png'); 
                                        }
                                    }
                                }
                                &.content {
                                    margin-top: 5px;
                                }
                            }
                        }
                    }
                }
            }
        }
        &.three {
            overflow: hidden;
            .jdc_compaign_content_title {
                color: #fff;
            }
            .jdc_compaign_content_inner {
                .tab-content {
                    display: block;
                    .tab-item-title {
                        position: relative;
                        background: #EFF0F4;
                        border-bottom: 1px solid #CDCDCD;
                        // color: #fff;
                        &.jdc-common-arr:after {
                            content: '\e8f5';
                            position: absolute;
                            top: 26px;
                            right: 30px;
                            text-align: center;
                            line-height: 20px;
                            font-size: 30px;
                            transition: all .5s;
                            transform: rotate(180deg);
                            color: #A22488;
                        }
                        &.active {
                            color: #fff;
                            background-image: linear-gradient(90deg,#3650A1 0%,#E50778 100%);
                            &.jdc-common-arr:after {
                                transform: rotate(0deg);
                                color: #fff;
                            }
                            h4 {
                                img {
                                    display: none;
                                    &.icon_active {
                                        display: inline-block;
                                    }
                                }
                            }
                        }
                        h4 {
                            height: 68px;
                            line-height: 68px;
                            padding: 0 20px;
                            box-sizing: border-box;
                            font-size: 18px;
                            img {
                                display: inline-block;
                                width: 34px;
                                height: 34px;
                                margin-right: 15px;
                                &.icon_active {
                                    display: none;
                                }
                            }
                        }
                    }
                    .tab-item {
                        &.current {
                            .tab-item-content {
                                display: block;
                            }                                
                        }
                        .tab-item-content {
                            display: none;
                            background-color: #fff;
                            padding: 15px 15px;
                        }
                        .tab-item-img {
                            width: 100%;
                            padding: 8px 16px;
                            box-sizing: border-box;
                            margin-bottom: 10px;
                            img {
                                width: 100%;
                                box-shadow: 0 4px 14px 0 rgba(55,80,161,0.20);
                            }
                        }
                        .jdc_compaign_content_inner_section {
                            margin-top: 0px;
                            padding: 10px 15px;
                            .jdc_compaign_content_inner_section_title {
                                font-size: 18px;
                                color:#333;
                                text-align: justify;
                                margin-bottom: 10px;
                                display: block;
                                font-weight: 500;
                                i {
                                    display: inline-block;
                                    width: 7px;
                                    height: 7px;
                                    border-radius: 50%;
                                    margin-right: 10px;
                                    position: relative;
                                    top: -1px;
                                }
                            }
                            .jdc_compaign_content_inner_section_desc {
                                font-size: 14px;
                                color: #444;
                                text-align: justify;
                                line-height: 1.5;
                                &.link {
                                    margin-top: -10px;
                                    display: inline-block;
                                    color:#0989C5;
                                    span {
                                        width: 30px;
                                        height: 30px;
                                        display: inline-block;
                                        background-image: url('~assets/mkt/arrow_m.png');
                                        background-size: 14px 8px;
                                        background-position: center;
                                        background-repeat: no-repeat;
                                        position: relative;
                                        top: 10px;
                                        left: -5px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        &.four {
            overflow: hidden;
            .jdc_compaign_content_inner {
                .jdc_compaign_content_inner_item {
                    width: 32%;
                    float: left;
                    box-shadow: 0 3px 10px 0 rgba(55,80,161,0.20);
                    padding: 36px 30px;
                    height: 480px;
                    box-sizing: border-box;
                    position: relative;
                    overflow: hidden;
                    &:nth-child(2) {
                        margin-right: 2%;
                        margin-left: 2%;
                    }
                    &:hover {
                        .jdc_compaign_content_inner_item_logo_wrap {
                            top: -100%;
                        }
                        .jdc_compaign_content_inner_item_mask {
                            top: 0;
                        }
                    }
                    .jdc_compaign_content_inner_item_logo_wrap {
                        // display: none;
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        top: 0;
                        left: 0;
                        background-color: #fff;
                        z-index: 2;
                        transition: all .5s;
                        img {
                            position: absolute;
                            width: 70px;
                            height: 70px;
                            top: 50%;
                            left: 50%;
                            margin-top: -35px;
                            margin-left: -35px
                        }
                        p {
                            position: absolute;
                            width: 100%;
                            font-size: 18px;
                            text-align: center;
                            top: 60%;
                        }
                    }
                    .jdc_compaign_content_inner_item_mask {
                        position: relative;
                        top: 400px;
                        transition: all .5s;
                        .jdc_compaign_content_inner_item_mask_title {
                            font-size: 18px;
                            color: #333;
                            font-weight: 500;
                            margin-bottom: 20px;
                            img {
                                width: 24px;
                                height: 24px;
                                margin-right: 14px;
                                position: relative;
                                top: -1px;
                            }
                        }
                        .jdc_compaign_content_inner_item_mask_desc {
                            font-size: 14px;
                            color: #666;
                            line-height: 1.5;
                            text-align: justify;
                        }
                        .jdc_compaign_content_inner_item_mask_link {
                            // position: absolute;
                            // bottom: 36px;
                            font-size: 14px;
                            color: #999;
                            margin-top: 10px;
                            display: block;
                            span {
                                width: 30px;
                                height: 30px;
                                display: inline-block;
                                background-image: url('~assets/mkt/arrow_pc.png');
                                background-size: 14px 8px;
                                background-position: center;
                                background-repeat: no-repeat;
                                position: relative;
                                top: 9px;
                            }
                            &:hover {
                                color: #0989C5;
                                span {
                                    background-image: url('~assets/mkt/arrow_m.png'); 
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

@media (max-width: 1200px) {
    .jdc_compaign_container {
        .jdc_compaign_video_wrap {
            .inner_video_wrap {
                width: 100%;
                background-color: #000;
                height: 50%;
                .video {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    // height: auto;
                    transform: translateY(-50%);
                    background-color: transparent;
                }
                .close {
                    top: 10px;
                }
            }
        }
        .jdc_compaign_service {
            bottom: 10px;
            right: 10px;
            display: block;
            .jdc_compaign_service_left {
                display: none !important;
            }
            .jdc_compaign_service_right {
                .contact_us {
                    display: block;
                }
            }
            .mod_hang_qrcode_btn, .mod_hang_top {
                width: 50px;
                height: 50px;
                i {
                    width: 50px;
                    height: 50px;
                    line-height: 50px;
                    font-size: 30px;
                }
            }
            .mod_hang_appeal_btn {
                width: 50px;
                height: 50px;
                padding-top: 10px;
                box-sizing: border-box;
                background-color: #fff;
                p {
                    // height: 25px;
                    // line-height: 25px;
                    text-align: center;
                    font-size: 14px;
                    &:nth-child(1) {
                        margin-bottom: 1px;
                    }
                }
            }
            .show_left_modal {
                display: none !important;
            }
        }
        .jdc_compaign_banner  {
            padding: 30px 20px;
            box-sizing: border-box;
            background-image: url('~assets/mkt/banner_m.jpg');
            .jdc_compaign_banner_content {
                position: relative;
                top: 0;
                padding-left: 0;
                .jdc_compaign_banner_content_title {
                    font-size: 22px;
                }
                .jdc_compaign_banner_desc {
                    font-size: 12px;
                    width: 100%;
                    margin-top: 20px;
                }
                .contact_btn {
                    width: 90px;
                    height: 25px;
                    line-height: 25px;
                    font-size: 12px;
                    border-radius: 12.5px;
                    margin-top: 22px;
                }
            }
        }
        .jdc_compaign_top_tab_wrap {
            display: none;
        }
        .jdc_compaign_banner {
            height: auto;
        }
        .jdc_compaign_content {
            padding: 30px 0;
            .jdc_compaign_content_title {
                font-size: 22px;
                margin-bottom: 25px;
            }
            .tab-content {
                display: block;
                .tab-item-title {
                    position: relative;
                    border-top: 1px solid #ededed;
                    color: #666666;
                    &.jdc-common-arr:after {
                        content: '\e8f5';
                        position: absolute;
                        top: 50%;
                        right: 30px;
                        width: auto;
                        text-align: center;
                        line-height: 20px;
                        font-size: 30px;
                        transition: all .5s;
                        transform: translateY(-50%) rotate(180deg);
                    }
                    &.active {
                        color: #0989C5;
                        &.jdc-common-arr:after {
                            transform: translateY(-50%) rotate(0deg);
                        }
                    }
                    h4 {
                        height: 50px;
                        line-height: 50px;
                        padding: 0 15px;
                        box-sizing: border-box;
                        font-size: 18px;
                    }
                }
                .tab-item {
                    &.current {
                        .tab-item-content {
                            display: block;
                        }                                
                    }
                    .tab-item-content {
                        display: none;
                    }
                    .tab-item-img {
                        width: 100%;
                        padding: 8px 16px;
                        box-sizing: border-box;
                        margin-bottom: 10px;
                        img {
                            width: 100%;
                            box-shadow: 0 4px 14px 0 rgba(55,80,161,0.20);
                        }
                    }
                    .jdc_compaign_content_inner_section {
                        margin-top: 0px;
                        padding: 15px;
                        .jdc_compaign_content_inner_section_title {
                            font-size: 14px;
                            color:#0989C5;
                            text-align: justify;
                            margin-bottom: 15px;
                            display: block;
                            font-weight: 500;
                            i {
                                display: inline-block;
                                width: 7px;
                                height: 7px;
                                border-radius: 50%;
                                margin-right: 10px;
                                position: relative;
                                top: -1px;
                            }
                        }
                        .jdc_compaign_content_inner_section_desc {
                            font-size: 12px;
                            color: #666;
                            text-align: justify;
                            line-height: 1.5;
                            &.link {
                                margin-top: -10px;
                                display: inline-block;
                                color:#0989C5;
                                span {
                                    width: 30px;
                                    height: 30px;
                                    display: inline-block;
                                    background-image: url('~assets/mkt/arrow_m.png');
                                    background-size: 14px 8px;
                                    background-position: center;
                                    background-repeat: no-repeat;
                                    position: relative;
                                    top: 10px;
                                    left: -5px;
                                }
                            }
                        }
                    }
                }
            }
            &.one {
                background-color: #F7F8FC;
                .jdc_compaign_content_title {
                    margin-bottom: 22px;
                }
                .jdc_compaign_content_inner {
                    overflow: hidden;
                    .jdc_compaign_content_inner_input_content {
                        box-shadow: none;
                        width: 100%;
                        height: auto;
                        padding-bottom: 0;
                        margin-bottom: 0;
                        .jdc_compaign_content_inner_input_content_title {
                            text-align: center;
                            font-size: 22px;
                        }
                        .jdc_compaign_content_inner_input_wrap_content {
                            .jdc_compaign_content_inner_input_wrap {
                                width: 100%;
                                margin-left: 0;
                                margin-top: 25px;
                                display: flex;
                                &.selectWrap {
                                    width: 100%;
                                    &.selectDutyWrap {
                                        margin-left: 0;
                                    }
                                }
                                label {
                                    margin-bottom: 0;
                                    line-height: 30px;
                                }
                                select {
                                    flex: 1;
                                    height: 30px;
                                    line-height: 30px;
                                    background: rgba(203,203,203,0.09);
                                }
                                .select2-container--default, .select2-container {
                                    flex: 1;
                                    background: rgba(203,203,203,0.09);
                                    .select2-selection--single {
                                        background: rgba(203,203,203,0.09);
                                        height: 30px;
                                        line-height: 30px;
                                        width: 100% !important;
                                        .select2-selection__rendered {
                                            height: 30px;
                                            line-height: 30px;    
                                            padding-left: 10px;                           
                                        }
                                        .select2-selection__arrow {
                                            top: 3px;
                                        }
                                    }
                                }
                                input {
                                    box-sizing: border-box;
                                    padding-left: 10px;
                                    height: 30px;
                                    line-height: 30px;
                                    flex: 1;
                                    background: rgba(203,203,203,0.09);
                                }
                                .error_text {
                                    font-size: 12px;
                                    position: absolute;
                                    bottom: -15px;
                                }
                            }
                        }
                    }
                }
                .jdc_compaign_content_btn {
                    width: 100%;
                    height: 32px;
                    line-height: 32px;
                    border-radius: 5px;
                }
                .jdc_compaign_video_item {
                    position: relative;
                    width: 100%;
                    padding: 0 15px;
                    float: none;
                    box-sizing: border-box;
                    height: auto;
                    p {
                        font-size: 16px;
                        color: #333;
                        line-height: 40px;
                        border: 1px solid #A9B8DE;
                    }
                    .jdc_compaign_video_item_img_wrap {
                        position: relative;
                        cursor: pointer;
                        .jdc_compaign_video_item_img {
                            display: none;
                        }
                        .jdc_compaign_video_item_img_mobile {
                            display: block;
                            height: 200px;
                        }
                        .jdc_compaign_video_item_player_btn {
                            top: 50%;
                            transform: translateY(-50%);
                        }
                    }
                }
            }
            &.two {
                background-color: #fff;
                padding-top: 30px;
                padding-bottom: 0;
                .jdc_compaign_content_inner {
                    .jdc_compaign_content_inner_tabbar {
                        display: none;
                    }
                    .jdc_compaign_content_inner_tab_content {
                        display: none;
                    }
                }
            }
            &.three {
                .jdc_compaign_content_inner {
                    padding: 0px 15px 15px;
                    .tab-content {
                        .tab-item-title {
                            border-top: none;
                            color: #333333;
                            h4 {
                                font-size: 16px;
                                img {
                                    width: 20px;
                                    height: 20px;
                                }
                            }
                        }
                        .tab-item {
                            .jdc_compaign_content_inner_section {
                                .jdc_compaign_content_inner_section_title {
                                    font-size: 14px;
                                }
                                .jdc_compaign_content_inner_section_desc {
                                    font-size: 12px;
                                }
                            }
                        }
                    }
                }
            }
            &.four {
                .jdc_compaign_content_inner {
                    padding: 0 15px;
                    .jdc_compaign_content_inner_item {
                        width: 100%;
                        height: auto;
                        margin-bottom: 10px;
                        &:nth-child(2) {
                            margin-right: 0%;
                            margin-left: 0%;
                        }
                        .jdc_compaign_content_inner_item_logo_wrap {
                            display: none;
                        }
                        .jdc_compaign_content_inner_item_mask {
                            top: 0;
                            .jdc_compaign_content_inner_item_mask_link {
                                margin-top: 0;
                            }
                            .jdc_compaign_content_inner_item_mask_title {
                                font-size: 14px;
                                margin-bottom: 10px;
                                img {
                                    width: 16px;
                                    height: 16px;
                                    margin-right: 6px;
                                }
                            }
                            .jdc_compaign_content_inner_item_mask_desc {
                                font-size: 12px;
                            }
                        }
                    }
                }
            }
        }
        // 成功提示框
        .success_feedback {
            .success_feedback_modal {
                width: 300px;
                height: 218px;
                position: absolute;
                top: 50%;
                left: 50%;
                margin-top: -109px;
                margin-left: -150px;
                background-color: #fff;
                border-radius: 3px;
                .success_feedback_modal_title {
                    display: none;
                }
                .success_feedback_modal_content {
                    padding-top: 40px;
                    img {
                        width: 33px;
                        height: 33px;
                    }
                    p {
                        color: #333;
                        &:nth-child(2) {
                            font-size: 18px;
                            margin: 20px auto 10px;
                        }
                    }
                }
                .success_feedback_modal_footer {
                    padding: 0 12.5px;
                    background-color: #fff;
                    .success_feedback_modal_btn {
                        text-align: center;
                        width: 100%;
                        line-height: 33px;
                        height: 33px;
                        border-radius: 3px;
                        color: #fff;
                        font-size: 12px;
                        border: none;
                        outline: none;
                    }
                }
            }
        }
    }  
}

.jdc-side {
    display: none !important;
}

.select2-search--dropdown {
    display: none !important;
}

</style>
