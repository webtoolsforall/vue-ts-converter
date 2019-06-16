<template>
  <div id="app" class="jdc_compaign_container">
    <import-js src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"></import-js>
    <import-js src="//vjs.zencdn.net/7.1.0/video.js"></import-js>
    <img src="~assets/mkt/wx_logo.jpg" alt="" class="wx_logo">
    <div class="jdc_compaign_video_wrap">
      <div class="inner_video_wrap">
        <video id="my-player" class="video video-js" controls preload="auto" poster="~assets/mkt/poster01.jpg" data-setup='{}'>
          <source src="http://jdc-static.oss.cn-north-1.jcloudcs.com/jdc-about-static/jdc_compaign/yds-MySQL.mp4" type="video/mp4" id="my-player-source">
          </source>
        </video>
        <div class="close" id="close">
        </div>
      </div>
    </div>
    <!-- 顶部banner start-->
    <div class="jdc_compaign_banner">
      <div class="jdc_compaign_banner_content">
        <h2 class="jdc_compaign_banner_content_title">
          云数据库场景化应用实战方案
        </h2>
        <div class="jdc_compaign_banner_desc">
          <p>云数据库可便捷应用于电商高并发、金融行业安全灾备、网站快速搭建、游戏高稳定、大数据分析等场景，让您开箱即用，从繁琐的数据库管理中解放出来。京东云数据库支持多种数据库类型，包括：云数据库RDS、云数据库MongoDB、分布式数据库DRDS、分布式数据库TiDB等，提供了高可用架构，并支持故障自动切换，自动备份、按时间点恢复、备份跨地域复制及监控报警等功能，可极大降低管理维护成本，使您能专注于应用开发和业务发展。</p>
        </div>
        <button class="contact_btn goBottom jdc_btn_hover clickEvent" data-event="contactUsTop" id="contact_btn">联系我们</button>
      </div>
    </div>
    <!-- 顶部banner end-->
    <!-- 顶部tab栏 start -->
    <div class="jdc_compaign_top_tab_wrap normal">
      <div class="jdc_compaign_top_tab">
        <div @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_FloorTab_1')" clstag="Solution|keycount|MiddleContentSec|Solution_database_FloorTab_1" class="jdc_compaign_tab_item active one">
          应用场景
        </div>
        <div @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_FloorTab_2')" clstag="Solution|keycount|MiddleContentSec|Solution_database_FloorTab_2" class="jdc_compaign_tab_item two">
          产品优势
        </div>
        <div @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_FloorTab_3')" clstag="Solution|keycount|MiddleContentSec|Solution_database_FloorTab_3" class="jdc_compaign_tab_item three">
          产品简介
        </div>
        <div @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_FloorTab_4')" clstag="Solution|keycount|MiddleContentSec|Solution_database_FloorTab_4" class="jdc_compaign_tab_item four">
          产品视频
        </div>
        <div @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_FloorTab_5')" clstag="Solution|keycount|MiddleContentSec|Solution_database_FloorTab_5" class="jdc_compaign_tab_item five">
          联系我们
        </div>
      </div>
    </div>
    <!-- 顶部tab栏 end -->
    <div class="jdc_compaign_service">
      <div class="jdc_compaign_service_right">
        <div class="mod_hang_appeal_btn goBottom contact_us clickEvent" data-event="contactUsModalMobile">
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
        <img src="~assets/mkt/icon_remove.png" alt="" class="jdc_compaign_service_close clickEvent" data-event="closeModal" id="closeModal">
        <p class="jdc_compaign_service_left_title">联系我们</p>
        <p class="jdc_compaign_service_left_desc">安全解决方案详情垂询，针对您的业务场景，专业工程师帮助您解决疑问</p>
        <button class="jdc_compaign_service_btn jdc_bg goBottom jdc_btn_hover clickEvent" data-event="contactUsModal">快来上云</button>
      </div>
    </div>
    <div class="jdc_compaign_content one" id="content01">
      <h2 class="jdc_compaign_content_title">
        应用场景
      </h2>
      <div class="jdc_compaign_content_inner content_container">
        <div class="jdc_compaign_content_inner_tabbar">
          <span @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_sencha_tab_1')" clstag="Solution|keycount|MiddleContentSec|Solution_database_sencha_tab_1" class="jdc_compaign_content_inner_tabItem active">网站</span>
          <span @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_sencha_tab_2')" clstag="Solution|keycount|MiddleContentSec|Solution_database_sencha_tab_2" class="jdc_compaign_content_inner_tabItem">金融</span>
          <span @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_sencha_tab_3')" clstag="Solution|keycount|MiddleContentSec|Solution_database_sencha_tab_3" class="jdc_compaign_content_inner_tabItem">电商/O2O</span>
          <span @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_sencha_tab_4')" clstag="Solution|keycount|MiddleContentSec|Solution_database_sencha_tab_4" class="jdc_compaign_content_inner_tabItem">企业ERP/移动办公场景</span>
          <span @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_sencha_tab_5')" clstag="Solution|keycount|MiddleContentSec|Solution_database_sencha_tab_5" class="jdc_compaign_content_inner_tabItem">通用</span>
        </div>
        <ul class="jdc_compaign_content_inner_tab_content content_container">
          <li class="jdc_compaign_content_inner_tab_content_item current">
            <div class="jdc_compaign_content_inner_left">
              <img src="~assets/mkt/tab01.jpg" alt="">
            </div>
            <div class="jdc_compaign_content_inner_right">
              <div class="jdc_compaign_content_inner_right_title">
                网站高可用场景
              </div>
              <div class="jdc_compaign_content_inner_section">
                <div class="jdc_compaign_content_inner_section_title hidden-xs">
                  <i class="jdc_bg"></i>数据库<span></span>
                </div>
                <a class="jdc_compaign_content_inner_section_desc link clickEvent" @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_Link_1')" clstag="Solution|keycount|MiddleContentSec|Solution_database_Link_1" href="https://www.jdcloud.com/cn/products/jcs-for-sql-server" target="_blank" data-event="SQLServerClick">云数据库SQL Server <span></span></a>
                <a class="jdc_compaign_content_inner_section_desc link clickEvent" @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_Link_2')" clstag="Solution|keycount|MiddleContentSec|Solution_database_Link_2" href="https://www.jdcloud.com/cn/products/jcs-for-mongodb" target="_blank" data-event="MongoDBClick">云数据库MongoDB <span></span></a>
              </div>
              <div class="jdc_compaign_content_inner_section">
                <div class="jdc_compaign_content_inner_section_title">
                  <i class="jdc_bg"></i>特点<span></span>
                </div>
                <p class="jdc_compaign_content_inner_section_desc">
                  网站业务对服务可用性要求较高时，可以选择跨可用区部署应用。云数据库实例支持跨可用区部署，可提供跨机房级容灾。选择跨可用区部署时，实例的主从节点分别部署在不同的可用区，当因不可抗力导致某一可用区整体不能服务时，可快速将服务切换到另一可用区。
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
                安全容灾场景
              </div>
              <div class="jdc_compaign_content_inner_section">
                <div class="jdc_compaign_content_inner_section_title">
                  <i class="jdc_bg"></i>数据库<span></span>
                </div>
                <a class="jdc_compaign_content_inner_section_desc link clickEvent" @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_Link_3')" clstag="Solution|keycount|MiddleContentSec|Solution_database_Link_3" href="https://www.jdcloud.com/cn/products/jcs-for-sql-server" target="_blank" data-event="SQLServerClick">云数据库SQL Server <span></span></a>
                <a class="jdc_compaign_content_inner_section_desc link clickEvent" @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_Link_4')" clstag="Solution|keycount|MiddleContentSec|Solution_database_Link_4" href="https://www.jdcloud.com/cn/products/jcs-for-mongodb" target="_blank" data-event="MongoDBClick">云数据库MongoDB <span></span></a>
              </div>
              <div class="jdc_compaign_content_inner_section">
                <div class="jdc_compaign_content_inner_section_title">
                  <i class="jdc_bg"></i>特点<span></span>
                </div>
                <p class="jdc_compaign_content_inner_section_desc">
                  金融类业务对数据可靠性有较高的要求，为确保数据不丢失，通常需要异地灾备数据。云数据库支持跨地域数据数据库同步，可一键实现异地容灾。当生产中心因不可抗力停服时，借助数据库跨地域备份同步服务，可确保绝大部分数据不丢失，并可在灾备中心快速恢复数据到新的数据库实例。
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
                高性能、高并发场景
              </div>
              <div class="jdc_compaign_content_inner_section">
                <div class="jdc_compaign_content_inner_section_title hidden-xs">
                  <i class="jdc_bg"></i>数据库<span></span>
                </div>
                <a class="jdc_compaign_content_inner_section_desc link clickEvent" @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_Link_5')" clstag="Solution|keycount|MiddleContentSec|Solution_database_Link_5" href="https://www.jdcloud.com/cn/products/jcs-for-sql-server" target="_blank" data-event="SQLServerClick">云数据库SQL Server <span></span></a>
                <a class="jdc_compaign_content_inner_section_desc link clickEvent" @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_Link_6')" clstag="Solution|keycount|MiddleContentSec|Solution_database_Link_6" href="https://www.jdcloud.com/cn/products/jcs-for-mongodb" target="_blank" data-event="MongoDBClick">云数据库MongoDB <span></span></a>
              </div>
              <div class="jdc_compaign_content_inner_section">
                <div class="jdc_compaign_content_inner_section_title hidden-xs">
                  <i class="jdc_bg"></i>特点<span></span>
                </div>
                <p class="jdc_compaign_content_inner_section_desc">
                  当业务的读取请求较高，或是需要应对短期内读取流量高峰，可创建一个或多个云数据库RDS只读实例，每个只读实例拥有独立的链接地址，应用端可自行实现读取压力分配。
                </p>
              </div>
            </div>
          </li>
          <li class="jdc_compaign_content_inner_tab_content_item">
            <div class="jdc_compaign_content_inner_left">
              <img src="~assets/mkt/tab04.jpg" alt="">
            </div>
            <div class="jdc_compaign_content_inner_right">
              <div class="jdc_compaign_content_inner_right_title">
                企业ERP/移动办公场景
              </div>
              <div class="jdc_compaign_content_inner_section">
                <div class="jdc_compaign_content_inner_section_title hidden-xs">
                  <i class="jdc_bg"></i>数据库<span></span>
                </div>
                <a class="jdc_compaign_content_inner_section_desc link clickEvent" @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_Link_7')" clstag="Solution|keycount|MiddleContentSec|Solution_database_Link_7" href="https://www.jdcloud.com/cn/products/jcs-for-sql-server" target="_blank" data-event="SQLServerClick">云数据库 SQL Server <span></span></a>
              </div>
              <div class="jdc_compaign_content_inner_section">
                <div class="jdc_compaign_content_inner_section_title">
                  <i class="jdc_bg"></i>特点<span></span>
                </div>
                <p class="jdc_compaign_content_inner_section_desc">
                  适合企业ERP核心应用及移动办公的需求。成熟的企业级数据库SQL
                  Server满足您处理复杂业务逻辑和对数据高一致性要求的场景；基于多可用区的主备架构给企业数据和业务提供了最大程度的高可靠保障；易于维护的特性让您无须关注运维，专注于企业业务的发展。
                </p>
              </div>
            </div>
          </li>
          <li class="jdc_compaign_content_inner_tab_content_item">
            <div class="jdc_compaign_content_inner_left">
              <img src="~assets/mkt/tab05.jpg" alt="">
            </div>
            <div class="jdc_compaign_content_inner_right">
              <div class="jdc_compaign_content_inner_right_title">
                海量数据查询分析场景
              </div>
              <div class="jdc_compaign_content_inner_section">
                <div class="jdc_compaign_content_inner_section_title">
                  <i class="jdc_bg"></i>数据库<span></span>
                </div>
                <a class="jdc_compaign_content_inner_section_desc link clickEvent" @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_Link_8')" clstag="Solution|keycount|MiddleContentSec|Solution_database_Link_8" href="https://www.jdcloud.com/cn/products/drds" target="_blank" data-event="DRDSClick">分布式数据库DRDS <span></span></a>
              </div>
              <div class="jdc_compaign_content_inner_section">
                <div class="jdc_compaign_content_inner_section_title hidden-xs">
                  <i class="jdc_bg"></i>分布式数据库DRDS<span></span>
                </div>
                <p class="jdc_compaign_content_inner_section_desc">
                  强大的分库分表能力天然支持数据的自动分片，可将数据按既定的分片策略存储到后端的MySQL节点，并可随时按需进行扩展，适合海量数据的分片查询，分析，例如按时间查询历史信息，按照地区汇总各种数据等。
                </p>
              </div>
            </div>
          </li>
        </ul>
        <div class="tab-content">
          <div class="tab-item current">
            <div clstag="Solution|keycount|MiddleContentSec|Solution_tab_1" class="tab-item-title jdcfont jdc-common-arr active">
              <h4>网站高可用场景</h4>
            </div>
            <div class="tab-item-content">
              <div class="tab-item-img">
                <img src="~assets/mkt/tab01.jpg">
              </div>
              <div class="jdc_compaign_content_inner_section">
                <p class="jdc_compaign_content_inner_section_title">
                  <i class="jdc_bg"></i>数据库<span></span>
                </p>
                <a class="jdc_compaign_content_inner_section_desc link clickEvent" @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_Link_9')" clstag="Solution|keycount|MiddleContentSec|Solution_database_Link_9" href="https://www.jdcloud.com/cn/products/jcs-for-sql-server" target="_blank" data-event="SQLServerClick">云数据库 SQL Server <span></span></a>
                <a class="jdc_compaign_content_inner_section_desc link clickEvent" @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_Link_10')" clstag="Solution|keycount|MiddleContentSec|Solution_database_Link_10" href="https://www.jdcloud.com/cn/products/jcs-for-mongodb" target="_blank" data-event="MongoDBClick">云数据库MongoDB <span></span></a>
              </div>
              <div class="jdc_compaign_content_inner_section">
                <p class="jdc_compaign_content_inner_section_title">
                  <i class="jdc_bg"></i>特点<span></span>
                </p>
                <p class="jdc_compaign_content_inner_section_desc">
                  网站业务对服务可用性要求较高时，可以选择跨可用区部署应用。云数据库实例支持跨可用区部署，可提供跨机房级容灾。选择跨可用区部署时，实例的主从节点分别部署在不同的可用区，当因不可抗力导致某一可用区整体不能服务时，可快速将服务切换到另一可用区。
                </p>
              </div>
            </div>
          </div>
          <div class="tab-item">
            <div clstag="Solution|keycount|MiddleContentSec|Solution_tab_2" class="tab-item-title jdcfont jdc-common-arr">
              <h4>安全容灾场景</h4>
            </div>
            <div class="tab-item-content">
              <div class="tab-item-img">
                <img src="~assets/mkt/tab02.jpg">
              </div>
              <div class="jdc_compaign_content_inner_section">
                <p class="jdc_compaign_content_inner_section_title">
                  <i class="jdc_bg"></i>数据库<span></span>
                </p>
                <a class="jdc_compaign_content_inner_section_desc link clickEvent" @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_Link_11')" clstag="Solution|keycount|MiddleContentSec|Solution_database_Link_11" href="https://www.jdcloud.com/cn/products/jcs-for-sql-server" target="_blank" data-event="SQLServerClick">云数据库 SQL Server <span></span></a>
                <a class="jdc_compaign_content_inner_section_desc link clickEvent" @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_Link_12')" clstag="Solution|keycount|MiddleContentSec|Solution_database_Link_12" href="https://www.jdcloud.com/cn/products/jcs-for-mongodb" target="_blank" data-event="MongoDBClick">云数据库MongoDB <span></span></a>
              </div>
              <div class="jdc_compaign_content_inner_section">
                <p class="jdc_compaign_content_inner_section_title">
                  <i class="jdc_bg"></i>特点<span></span>
                </p>
                <p class="jdc_compaign_content_inner_section_desc">
                  金融类业务对数据可靠性有较高的要求，为确保数据不丢失，通常需要异地灾备数据。云数据库支持跨地域数据数据库同步，可一键实现异地容灾。当生产中心因不可抗力停服时，借助数据库跨地域备份同步服务，可确保绝大部分数据不丢失，并可在灾备中心快速恢复数据到新的数据库实例。
                </p>
              </div>
            </div>
          </div>
          <div class="tab-item">
            <div clstag="Solution|keycount|MiddleContentSec|Solution_tab_3" class="tab-item-title jdcfont jdc-common-arr">
              <h4>高性能、高并发场景</h4>
            </div>
            <div class="tab-item-content">
              <div class="tab-item-img">
                <img src="~assets/mkt/tab03.jpg">
              </div>
              <div class="jdc_compaign_content_inner_section">
                <p class="jdc_compaign_content_inner_section_title">
                  <i class="jdc_bg"></i>数据库<span></span>
                </p>
                <a class="jdc_compaign_content_inner_section_desc link clickEvent" @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_Link_13')" clstag="Solution|keycount|MiddleContentSec|Solution_database_Link_13" href="https://www.jdcloud.com/cn/products/jcs-for-sql-server" target="_blank" data-event="SQLServerClick">云数据库 SQL Server <span></span></a>
                <a class="jdc_compaign_content_inner_section_desc link clickEvent" @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_Link_14')" clstag="Solution|keycount|MiddleContentSec|Solution_database_Link_14" href="https://www.jdcloud.com/cn/products/jcs-for-mongodb" target="_blank" data-event="MongoDBClick">云数据库MongoDB <span></span></a>
              </div>
              <div class="jdc_compaign_content_inner_section">
                <p class="jdc_compaign_content_inner_section_title">
                  <i class="jdc_bg"></i>特点<span></span>
                </p>
                <p class="jdc_compaign_content_inner_section_desc">
                  当业务的读取请求较高，或是需要应对短期内读取流量高峰，可创建一个或多个云数据库RDS只读实例，每个只读实例拥有独立的链接地址，应用端可自行实现读取压力分配。
                </p>
              </div>
            </div>
          </div>
          <div class="tab-item">
            <div clstag="Solution|keycount|MiddleContentSec|Solution_tab_4" class="tab-item-title jdcfont jdc-common-arr">
              <h4>企业ERP/移动办公场景</h4>
            </div>
            <div class="tab-item-content">
              <div class="tab-item-img">
                <img src="~assets/mkt/tab04.jpg">
              </div>
              <div class="jdc_compaign_content_inner_section">
                <p class="jdc_compaign_content_inner_section_title">
                  <i class="jdc_bg"></i>数据库<span></span>
                </p>
                <a class="jdc_compaign_content_inner_section_desc link clickEvent" @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_Link_15')" clstag="Solution|keycount|MiddleContentSec|Solution_database_Link_15" href="https://www.jdcloud.com/cn/products/jcs-for-sql-server" target="_blank" data-event="SQLServerClick">云数据库 SQL Server <span></span></a>
              </div>
              <div class="jdc_compaign_content_inner_section">
                <p class="jdc_compaign_content_inner_section_title">
                  <i class="jdc_bg"></i>特点<span></span>
                </p>
                <p class="jdc_compaign_content_inner_section_desc">
                  适合企业ERP核心应用及移动办公的需求。成熟的企业级数据库SQL
                  Server满足您处理复杂业务逻辑和对数据高一致性要求的场景；基于多可用区的主备架构给企业数据和业务提供了最大程度的高可靠保障；易于维护的性能让您无须关注运维，专注于企业业务的发展。
                </p>
              </div>
            </div>
          </div>
          <div class="tab-item">
            <div clstag="Solution|keycount|MiddleContentSec|Solution_tab_5" class="tab-item-title jdcfont jdc-common-arr">
              <h4>海量数据查询分析场景</h4>
            </div>
            <div class="tab-item-content">
              <div class="tab-item-img">
                <img src="~assets/mkt/tab05.jpg">
              </div>
              <div class="jdc_compaign_content_inner_section">
                <p class="jdc_compaign_content_inner_section_title">
                  <i class="jdc_bg"></i>数据库<span></span>
                </p>
                <a class="jdc_compaign_content_inner_section_desc link clickEvent" @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_Link_16')" clstag="Solution|keycount|MiddleContentSec|Solution_database_Link_16" href="https://www.jdcloud.com/cn/products/drds" target="_blank" data-event="DRDSClick">分布式数据库DRDS <span></span></a>
              </div>
              <div class="jdc_compaign_content_inner_section">
                <p class="jdc_compaign_content_inner_section_title">
                  <i class="jdc_bg"></i>分布式数据库DRDS<span></span>
                </p>
                <p class="jdc_compaign_content_inner_section_desc">
                  强大的分库分表能力天然支持数据的自动分片，可将数据按既定的分片策略存储到后端的MySQL节点，并可随时按需进行扩展，适合海量数据的分片查询，分析，例如按时间查询历史信息，按照地区汇总各种数据等。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="jdc_compaign_content two" id="content02">
      <h2 class="jdc_compaign_content_title">
        产品优势
      </h2>
      <div class="jdc_compaign_content_inner content_container">
        <table class="jdc-product-table">
          <colgroup>
            <col width="24.166666666666667%">
            <col width="46.25%">
            <col>
          </colgroup>
          <thead>
            <tr>
              <th>产品优势</th>
              <th><span>京东云数据库</span></th>
              <th>传统自建</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>简单易用</td>
              <td>通过京东云控制台或简单的API调用，您可以在几分钟内完成创建云数据库实例，快速投入到业务应用中，缩短业务等待时间。</td>
              <td>需提前数周采购硬件、软件； 需自行搭建高可用环境； 自行部署、联调监控、告警等； 系统上线时间从数天到数周不等。</td>
            </tr>
            <tr>
              <td>高可用性</td>
              <td>默认提供主从热备架构，支持自动容灾切换，确保业务可用性。此外，实例支持多可用区部署，可提供跨机房容灾能力。</td>
              <td>需自行配置多台服务器，搭建主从热备架构，实施难度大，日常维护成本较高。</td>
            </tr>
            <tr>
              <td>高可靠性</td>
              <td>拥有完善的数据备份机制，支持自动备份和手动备份，每个实例默认每天自动备份一次，您也可以根据业务情况随时创建备份，备份文件以三副本的形式保存在京东云对象存储中，无需担心数据丢失。</td>
              <td>自行维护，依赖硬件的故障发生率与技术人员的数据库管理水平。</td>
            </tr>
            <tr>
              <td>高安全性</td>
              <td>实例默认部署在用户自定义的VPC私有网络内，在TCP层直接进行网络隔离保护，确保数据安全。同时，您可以通过白名单功能限制可连接实例的IP，精准的从访问源进行安全控制。</td>
              <td>自行维护，实施难度大，维护成本高，依赖技术人员的管理水平。</td>
            </tr>
            <tr>
              <td>弹性扩展</td>
              <td>支持弹性扩容缩容，您可以根据业务情况按需调整实例配置，提高资源利用率，降低使用成本，配置变更过程不影响业务运行。</td>
              <td>人工扩容，运维工作繁琐，部署周期较长，考虑业务峰值，资源利用率较低。</td>
            </tr>
            <tr>
              <td>运维方便</td>
              <td>控制台提供丰富的可视化监控数据指标，各项数据一目了然。您也可以设置自动报警规则，随时随地掌握实例运行情况。</td>
              <td>数据库运维、基础网络、服务器运维和设备成本投入高。</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="jdc_compaign_content three" id="content03">
      <h2 class="jdc_compaign_content_title">
        产品简介
      </h2>
      <div class="jdc_compaign_content_inner content_container">
        <ul class="productList">
          <li class="productItem current">
            <div class="productItem_left">
              <span></span>
              <p>关系型数据库RDS</p>
            </div>
            <div class="productItem_right">
              <div class="productItem_right_section">
                <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_Link_17')" clstag="Solution|keycount|MiddleContentSec|Solution_database_Link_17" href="https://www.jdcloud.com/cn/products/jcs-for-mysql" data-event="MySQLClick" class="productItem_right_section_title clickEvent" target="_blank">
                  <i class="jdc_bg"></i>云数据库 MySQL<span></span>
                </a>
                <p>云数据库MySQL是京东云基于全球广受欢迎的MySQL数据库提供的稳定可靠的云数据库服务。</p>
                <p>默认提供主从热备架构，支持自动容灾切换，确保业务可用性。</p>
                <p>提供备份、恢复、监控、安全审计等全套数据库解决方案，彻底解决数据库运维的烦恼。</p>
              </div>
              <div class="productItem_right_section">
                <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_Link_18')" clstag="Solution|keycount|MiddleContentSec|Solution_database_Link_18" href="https://www.jdcloud.com/cn/products/jcs-for-mariadb" data-event="MariaDBClick" class="productItem_right_section_title clickEvent" target="_blank">
                  <i class="jdc_bg"></i>云数据库 MariaDB<span></span>
                </a>
                <p>云数据库MariaDB是京东云基于开源的MariaDB构建的稳定可靠的数据库服务。</p>
                <p>默认提供主从热备架构，支持自动容灾切换，确保业务可用性。</p>
                <p>提供数据备份、故障恢复、监控等全套解决方案，彻底解决数据库运维的烦恼。</p>
              </div>
              <div class="productItem_right_section">
                <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_Link_19')" clstag="Solution|keycount|MiddleContentSec|Solution_database_Link_19" href="https://www.jdcloud.com/cn/products/jcs-for-percona" data-event="PerconaClick" class="productItem_right_section_title clickEvent" target="_blank">
                  <i class="jdc_bg"></i>云数据库 Percona<span></span>
                </a>
                <p>云数据库Percona是京东云基于开源的Percona构建的稳定可靠的数据库服务。</p>
                <p>云数据库Percona易于部署、管理和扩展，默认支持主从热备架构，提供数据备份、故障恢复、监控等全套解决方案，彻底解决数据库运维的烦恼。</p>
              </div>
              <div class="productItem_right_section">
                <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_Link_20')" clstag="Solution|keycount|MiddleContentSec|Solution_database_Link_20" href="https://www.jdcloud.com/cn/products/jcs-for-sql-server" data-event="SQLServerClick" class="productItem_right_section_title clickEvent" target="_blank">
                  <i class="jdc_bg"></i>云数据库 SQL Server<span></span>
                </a>
                <p>京东云数据库SQL Server是京东云基于微软的SQL Server打造的适合云端的数据库产品。</p>
                <p>默认提供主从热备架构，支持自动容灾切换，确保业务可用性。</p>
                <p>具有服务高可用，数据高可靠，功能丰富，高效稳定，运维省心等种种优点，是最适合政府、企业及电商的商业级云数据库。</p>
              </div>
            </div>
          </li>
          <li class="productItem">
            <div class="productItem_left">
              <span></span>
              <p>非关系型数据库</p>
            </div>
            <div class="productItem_right">
              <div class="productItem_right_section">
                <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_Link_21')" clstag="Solution|keycount|MiddleContentSec|Solution_database_Link_21" href="https://www.jdcloud.com/cn/products/jcs-for-mongodb" data-event="MongoDBClick" class="productItem_right_section_title clickEvent" target="_blank">
                  <i class="jdc_bg"></i>云数据库 MongoDB<span></span>
                </a>
                <p>云数据库 MongoDB 是京东云基于全球广受欢迎的MongoDB提供的高性能NoSQL数据库服务。</p>
                <p>默认提供三节点副本集架构，支持自动容灾切换，确保业务可用性。</p>
                <p>支持在线扩容、备份恢复等功能，管理维护方便，使您能专注于应用开发和业务发展。 </p>
              </div>
            </div>
          </li>
          <li class="productItem">
            <div class="productItem_left">
              <span></span>
              <p>分布式数据库</p>
            </div>
            <div class="productItem_right">
              <div class="productItem_right_section">
                <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_Link_22')" clstag="Solution|keycount|MiddleContentSec|Solution_database_Link_22" href="https://www.jdcloud.com/cn/products/tidb-service" data-event="TiDBClick" class="productItem_right_section_title clickEvent" target="_blank">
                  <i class="jdc_bg"></i>分布式数据库 TiDB（公测中）<span></span>
                </a>
                <p>Cloud-TiDB 是京东云联合 PingCAP 基于国内开源 数据库 TiDB 打造的一款同时支持联机事务处理（OLTP）和 联机分析处理（OLAP）分布式数据库。</p>
                <p>具有自动的水平伸缩，强一致性的分布式事务，故障自恢复，兼容 MySQL协议等种种优点，适合海量数据量的在线交易和实时分析业务。</p>
              </div>
              <div class="productItem_right_section">
                <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_Link_23')" clstag="Solution|keycount|MiddleContentSec|Solution_database_Link_23" href="https://www.jdcloud.com/cn/products/drds" data-event="DRDSClick" class="productItem_right_section_title clickEvent" target="_blank">
                  <i class="jdc_bg"></i>分布树数据库 DRDS（内测中）<span></span>
                </a>
                <p>DRDS是京东云精心自研的数据库中间件产品，可实现海量数据下的自动分库分表，具有高性能，分布式，弹性升级，兼容MySQL等优点，适用于高并发、大规模数据的在线交易，历史数据查询，自动数据分片等业务场景，历经多次618，双十一的考验，已经在京东集团内大规模使用。</p>
              </div>
            </div>
          </li>
        </ul>
        <div class="tab-content">
          <div class="tab-item current">
            <div clstag="Solution|keycount|MiddleContentSec|Solution_tab_6" class="tab-item-title jdcfont jdc-common-arr active">
              <h4><img src="~assets/mkt/product01_m.png" alt=""> 关系型数据库RDS</h4>
            </div>
            <div class="tab-item-content">
              <div class="jdc_compaign_content_inner_section">
                <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_Link_24')" clstag="Solution|keycount|MiddleContentSec|Solution_database_Link_24" href="https://www.jdcloud.com/cn/products/jcs-for-mysql" data-event="MySQLClick" class="jdc_compaign_content_inner_section_title clickEvent" target="_blank">
                  <i class="jdc_bg"></i>云数据库 MySQL<span></span>
                </a>
                <p class="jdc_compaign_content_inner_section_desc">
                  云数据库MySQL是京东云基于全球广受欢迎的MySQL数据库提供的稳定可靠的云数据库服务。
                </p>
                <p class="jdc_compaign_content_inner_section_desc">
                  默认提供主从热备架构，支持自动容灾切换，确保业务可用性。
                </p>
                <p class="jdc_compaign_content_inner_section_desc">
                  提供备份、恢复、监控、安全审计等全套数据库解决方案，彻底解决数据库运维的烦恼。
                </p>
              </div>
              <div class="jdc_compaign_content_inner_section">
                <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_Link_25')" clstag="Solution|keycount|MiddleContentSec|Solution_database_Link_25" href="https://www.jdcloud.com/cn/products/jcs-for-mariadb" data-event="MariaDBClick" class="jdc_compaign_content_inner_section_title clickEvent" target="_blank">
                  <i class="jdc_bg"></i>云数据库 MariaDB<span></span>
                </a>
                <p class="jdc_compaign_content_inner_section_desc">
                  云数据库MariaDB是京东云基于开源的MariaDB构建的稳定可靠的数据库服务。
                </p>
                <p class="jdc_compaign_content_inner_section_desc">
                  默认提供主从热备架构，支持自动容灾切换，确保业务可用性。
                </p>
                <p class="jdc_compaign_content_inner_section_desc">
                  提供数据备份、故障恢复、监控等全套解决方案，彻底解决数据库运维的烦恼。
                </p>
              </div>
              <div class="jdc_compaign_content_inner_section">
                <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_Link_26')" clstag="Solution|keycount|MiddleContentSec|Solution_database_Link_26" href="https://www.jdcloud.com/cn/products/jcs-for-percona" data-event="PerconaClick" class="jdc_compaign_content_inner_section_title clickEvent" target="_blank">
                  <i class="jdc_bg"></i>云数据库 Percona<span></span>
                </a>
                <p class="jdc_compaign_content_inner_section_desc">
                  云数据库Percona是京东云基于开源的Percona构建的稳定可靠的数据库服务。
                </p>
                <p class="jdc_compaign_content_inner_section_desc">
                  云数据库Percona易于部署、管理和扩展，默认支持主从热备架构，提供数据备份、故障恢复、监控等全套解决方案，彻底解决数据库运维的烦恼。
                </p>
              </div>
              <div class="jdc_compaign_content_inner_section">
                <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_Link_27')" clstag="Solution|keycount|MiddleContentSec|Solution_database_Link_27" href="https://www.jdcloud.com/cn/products/jcs-for-sql-server" data-event="SQLServerClick" class="jdc_compaign_content_inner_section_title clickEvent" target="_blank">
                  <i class="jdc_bg"></i>云数据库 SQL Server<span></span>
                </a>
                <p class="jdc_compaign_content_inner_section_desc">
                  京东云数据库SQL Server是京东云基于微软的SQL Server打造的适合云端的数据库产品。
                </p>
                <p class="jdc_compaign_content_inner_section_desc">
                  默认提供主从热备架构，支持自动容灾切换，确保业务可用性。
                </p>
                <p class="jdc_compaign_content_inner_section_desc">
                  具有服务高可用，数据高可靠，功能丰富，高效稳定，运维省心等种种优点，是最适合政府、企业及电商的商业级云数据库。
                </p>
              </div>
            </div>
          </div>
          <div class="tab-item">
            <div clstag="Solution|keycount|MiddleContentSec|Solution_tab_7" class="tab-item-title jdcfont jdc-common-arr">
              <h4><img src="~assets/mkt/product02_m.png" alt=""> 非关系型数据库</h4>
            </div>
            <div class="tab-item-content">
              <div class="jdc_compaign_content_inner_section">
                <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_Link_28')" clstag="Solution|keycount|MiddleContentSec|Solution_database_Link_28" href="https://www.jdcloud.com/cn/products/jcs-for-mongodb" data-event="MongoDBClick" class="jdc_compaign_content_inner_section_title clickEvent" target="_blank">
                  <i class="jdc_bg"></i>云数据库 MongoDB<span></span>
                </a>
                <p class="jdc_compaign_content_inner_section_desc">
                  云数据库 MongoDB 是京东云基于全球广受欢迎的MongoDB提供的高性能NoSQL数据库服务。
                </p>
                <p class="jdc_compaign_content_inner_section_desc">
                  默认提供三节点副本集架构，支持自动容灾切换，确保业务可用性。
                </p>
                <p class="jdc_compaign_content_inner_section_desc">
                  支持在线扩容、备份恢复等功能，管理维护方便，使您能专注于应用开发和业务发展。
                </p>
              </div>
            </div>
          </div>
          <div class="tab-item">
            <div clstag="Solution|keycount|MiddleContentSec|Solution_tab_8" class="tab-item-title jdcfont jdc-common-arr">
              <h4><img src="~assets/mkt/product03_m.png" alt=""> 分布式数据库</h4>
            </div>
            <div class="tab-item-content">
              <div class="jdc_compaign_content_inner_section">
                <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_Link_29')" clstag="Solution|keycount|MiddleContentSec|Solution_database_Link_29" href="https://www.jdcloud.com/cn/products/tidb-service" data-event="TiDBClick" class="jdc_compaign_content_inner_section_title clickEvent" target="_blank">
                  <i class="jdc_bg"></i>分布式数据库 TiDB（公测中）<span></span>
                </a>
                <p class="jdc_compaign_content_inner_section_desc">
                  Cloud-TiDB 是京东云联合 PingCAP 基于国内开源 数据库 TiDB 打造的一款同时支持联机事务处理（OLTP）和 联机分析处理（OLAP）分布式数据库。
                </p>
                <p class="jdc_compaign_content_inner_section_desc">
                  具有自动的水平伸缩，强一致性的分布式事务，故障自恢复，兼容 MySQL协议等种种优点，适合海量数据量的在线交易和实时分析业务。
                </p>
              </div>
              <div class="jdc_compaign_content_inner_section">
                <a @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_Link_30')" clstag="Solution|keycount|MiddleContentSec|Solution_database_Link_30" href="https://www.jdcloud.com/cn/products/drds" data-event="DRDSClick" class="jdc_compaign_content_inner_section_title clickEvent" target="_blank">
                  <i class="jdc_bg"></i>分布式数据库 DRDS（内测中）<span></span>
                </a>
                <p class="jdc_compaign_content_inner_section_desc">
                  DRDS是京东云精心自研的数据库中间件产品，可实现海量数据下的自动分库分表，具有高性能，分布式，弹性升级，兼容MySQL等优点，适用于高并发、大规模数据的在线交易，历史数据查询，自动数据分片等业务场景，历经多次618，双十一的考验，已经在京东集团内大规模使用。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="jdc_compaign_content four" id="content04">
      <h2 class="jdc_compaign_content_title">
        <p>产品视频</p>
      </h2>
      <div class="jdc_compaign_content_inner content_container">
        <div class="jdc_compaign_video_item clickEvent" @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_VideoMySQLClick')" data-src="http://jdc-static.oss.cn-north-1.jcloudcs.com/jdc-about-static/jdc_compaign/yds-MySQL.mp4" data-event="VideoMySQLClick" clstag="Solution|keycount|MiddleContentSec|Solution_database_VideoMySQLClick">
          <div class="jdc_compaign_video_item_img_wrap">
            <div class="video_mask"></div>
            <img src="~assets/mkt/player_btn.png" class="jdc_compaign_video_item_player_btn" alt="">
            <img class="jdc_compaign_video_item_img" src="~assets/mkt/poster01.jpg" />
          </div>
          <p>MySQL云数据库，高可用首选产品</p>
        </div>
        <div class="jdc_compaign_video_item clickEvent" @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_VideoSQLServerClick')" data-src="http://jdc-static.oss.cn-north-1.jcloudcs.com/jdc-about-static/jdc_compaign/yds-SQL%2520Server.mp4" data-event="VideoSQLServerClick" clstag="Solution|keycount|MiddleContentSec|Solution_database_VideoSQLServerClick">
          <div class="jdc_compaign_video_item_img_wrap">
            <div class="video_mask"></div>
            <img src="~assets/mkt/player_btn.png" class="jdc_compaign_video_item_player_btn" alt="">
            <img class="jdc_compaign_video_item_img" src="~assets/mkt/poster02.jpg" />
          </div>
          <p>SQL Server云数据库，配备超高安全防护机制</p>
        </div>
        <div class="jdc_compaign_video_item clickEvent" @click="gaEventTrigger('MiddleContentSec','Solution|keycount|MiddleContentSec|Solution_database_VideoMongoDBClick')" data-src="http://jdc-static.oss.cn-north-1.jcloudcs.com/jdc-about-static/jdc_compaign/yds-MongoDB.mp4" data-event="VideoMongoDBClick" clstag="Solution|keycount|MiddleContentSec|Solution_database_VideoMongoDBClick">
          <div class="jdc_compaign_video_item_img_wrap">
            <div class="video_mask"></div>
            <img src="~assets/mkt/player_btn.png" class="jdc_compaign_video_item_player_btn" alt="">
            <img class="jdc_compaign_video_item_img" src="~assets/mkt/poster03.jpg" />
          </div>
          <p>MongoDB云数据库，灾备从未如此简单</p>
        </div>
      </div>
    </div>
    <div class="jdc_compaign_content five jdc_bg" id="content05" v-loading="formLoading">
      <h2 class="jdc_compaign_content_title">
        <p>联系我们</p>
      </h2>
      <div class="jdc_compaign_content_inner content_container">
        <div class="jdc_compaign_content_inner_input_wrap">
          <label for="name">姓名<span>*</span></label>
          <input type="text" id="name" name="name">
          <p class="error_text"></p>
        </div>
        <div class="jdc_compaign_content_inner_input_wrap">
          <label for="email">邮箱<span>*</span></label>
          <input type="text" id="email" name="email">
          <p class="error_text"></p>
        </div>
        <div class="jdc_compaign_content_inner_input_wrap">
          <label for="mobile">手机<span>*</span></label>
          <input type="tel" id="mobile" name="mobile">
          <p class="error_text"></p>
        </div>
        <div class="jdc_compaign_content_inner_input_wrap">
          <label for="company">公司<span>*</span></label>
          <input type="text" id="company" name="company">
          <p class="error_text"></p>
        </div>
        <div class="jdc_compaign_content_inner_input_wrap selectWrap">
          <label for="industry">行业</label>
          <select id="industry" class="selectIndustry" name="industry">
            <option></option>
          </select>
        </div>
        <div class="jdc_compaign_content_inner_input_wrap selectWrap selectDutyWrap">
          <label for="duty">职务</label>
          <select id="duty" class="selectDuty" name="duty">
            <option></option>
          </select>
        </div>
      </div>
      <button class="jdc_compaign_content_btn jdc_btn_hover" clstag="Solution|keycount|MiddleContentSec|Solution_database_submit" @click="submitForm" data-event="regeister" id="submit_btn">完成</button>
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
import ceiling from "@/utils/ceiling.js";
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
        formDefId: 6,
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
                    view_form: '暂未测试'
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
      const VIEWFROM = "暂未测试";
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

      $(".goBottom").on("click", () => {
        if ($("body").width() > 768) {
          $("html, body").animate(
            {
              scrollTop: $content05[0].offsetTop
            },
            500
          );
        } else {
          $("html, body").animate(
            {
              scrollTop: $content05[0].offsetTop + 60
            },
            500
          );
        }

        $(".jdc_compaign_service_left").hide(500);
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
      //       // $.ajax({
      //       //   url: `${
      //       //     window.location.protocol
      //       //   }//solutions.jdcloud.com/security/event`,
      //       //   type: "POST",
      //       //   data: {
      //       //     event_name: "regeister",
      //       //     view_form: VIEWFROM
      //       //   },
      //       //   beforeSend: function(xhr) {},
      //       //   success: function(res) {},
      //       //   complete: function(XMLHttpRequest, textStatus) {},
      //       //   error: function(XMLHttpRequest, textStatus, errorThrown) {}
      //       // });
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

      /* $('#contact_btn').on('click', () => {
			$.ajax({
                url: `${window.location.protocol}//localhost:30008/abtest/event`,
				type: 'POST',
                data: {
					event_name: 'contactUsTop',
					view_form: VIEWFROM,
                },
                beforeSend: function (xhr) {},
                success: function (res) {
                    
                },
                complete: function (XMLHttpRequest, textStatus) {},
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    
                }
            });  
		}); */

      //
      $(".clickEvent").on("click", function() {
        const event_name = $(this).data("event");
        $.ajax({
          url: `${window.location.protocol}//visits.jdcloud.com/security/event`,
          type: "POST",
          data: {
            event_name,
            view_form: VIEWFROM
          },
          beforeSend: function(xhr) {console.log('aaaaaa')},
          success: function(res) {console.log('bbbbb')},
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
</style>


<style>
/* select css */
.select2-container {
  box-sizing: border-box;
  display: inline-block;
  margin: 0;
  position: relative;
  vertical-align: middle;
}
.select2-container .select2-selection--single {
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  height: 28px;
  user-select: none;
  -webkit-user-select: none;
}
.select2-container .select2-selection--single .select2-selection__rendered {
  display: block;
  padding-left: 8px;
  padding-right: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.select2-container .select2-selection--single .select2-selection__clear {
  position: relative;
}
.select2-container[dir="rtl"]
  .select2-selection--single
  .select2-selection__rendered {
  padding-right: 8px;
  padding-left: 20px;
}
.select2-container .select2-selection--multiple {
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  min-height: 32px;
  user-select: none;
  -webkit-user-select: none;
}
.select2-container .select2-selection--multiple .select2-selection__rendered {
  display: inline-block;
  overflow: hidden;
  padding-left: 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.select2-container .select2-search--inline {
  float: left;
}
.select2-container .select2-search--inline .select2-search__field {
  box-sizing: border-box;
  border: none;
  font-size: 100%;
  margin-top: 5px;
  padding: 0;
}
.select2-container
  .select2-search--inline
  .select2-search__field::-webkit-search-cancel-button {
  -webkit-appearance: none;
}
.select2-dropdown {
  background-color: white;
  border: 1px solid #aaa;
  border-radius: 4px;
  box-sizing: border-box;
  display: block;
  position: absolute;
  left: -100000px;
  width: 100%;
  z-index: 1051;
}
.select2-results {
  display: block;
}
.select2-results__options {
  list-style: none;
  margin: 0;
  padding: 0;
}
.select2-results__option {
  padding: 6px;
  user-select: none;
  -webkit-user-select: none;
}
.select2-results__option[aria-selected] {
  cursor: pointer;
}
.select2-container--open .select2-dropdown {
  left: 0;
}
.select2-container--open .select2-dropdown--above {
  border-bottom: none;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.select2-container--open .select2-dropdown--below {
  border-top: none;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.select2-search--dropdown {
  display: block;
  padding: 4px;
}
.select2-search--dropdown .select2-search__field {
  padding: 4px;
  width: 100%;
  box-sizing: border-box;
}
.select2-search--dropdown .select2-search__field::-webkit-search-cancel-button {
  -webkit-appearance: none;
}
.select2-search--dropdown.select2-search--hide {
  display: none;
}
.select2-close-mask {
  border: 0;
  margin: 0;
  padding: 0;
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  min-height: 100%;
  min-width: 100%;
  height: auto;
  width: auto;
  opacity: 0;
  z-index: 99;
  background-color: #fff;
  filter: alpha(opacity=0);
}
.select2-hidden-accessible {
  border: 0 !important;
  clip: rect(0 0 0 0) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
}
.select2-container--default .select2-selection--single {
  background-color: #fff;
  border: 1px solid #aaa;
  border-radius: 4px;
}
.select2-container--default
  .select2-selection--single
  .select2-selection__rendered {
  color: #444;
  line-height: 28px;
}
.select2-container--default
  .select2-selection--single
  .select2-selection__clear {
  cursor: pointer;
  float: right;
  font-weight: bold;
}
.select2-container--default
  .select2-selection--single
  .select2-selection__placeholder {
  color: #999;
}
.select2-container--default
  .select2-selection--single
  .select2-selection__arrow {
  height: 26px;
  position: absolute;
  top: 1px;
  right: 1px;
  width: 20px;
}
.select2-container--default
  .select2-selection--single
  .select2-selection__arrow
  b {
  border-color: #888 transparent transparent transparent;
  border-style: solid;
  border-width: 5px 4px 0 4px;
  height: 0;
  left: 50%;
  margin-left: -4px;
  margin-top: -2px;
  position: absolute;
  top: 50%;
  width: 0;
}
.select2-container--default[dir="rtl"]
  .select2-selection--single
  .select2-selection__clear {
  float: left;
}
.select2-container--default[dir="rtl"]
  .select2-selection--single
  .select2-selection__arrow {
  left: 1px;
  right: auto;
}
.select2-container--default.select2-container--disabled
  .select2-selection--single {
  background-color: #eee;
  cursor: default;
}
.select2-container--default.select2-container--disabled
  .select2-selection--single
  .select2-selection__clear {
  display: none;
}
.select2-container--default.select2-container--open
  .select2-selection--single
  .select2-selection__arrow
  b {
  border-color: transparent transparent #888 transparent;
  border-width: 0 4px 5px 4px;
}
.select2-container--default .select2-selection--multiple {
  background-color: white;
  border: 1px solid #aaa;
  border-radius: 4px;
  cursor: text;
}
.select2-container--default
  .select2-selection--multiple
  .select2-selection__rendered {
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 0 5px;
  width: 100%;
}
.select2-container--default
  .select2-selection--multiple
  .select2-selection__rendered
  li {
  list-style: none;
}
.select2-container--default
  .select2-selection--multiple
  .select2-selection__placeholder {
  color: #999;
  margin-top: 5px;
  float: left;
}
.select2-container--default
  .select2-selection--multiple
  .select2-selection__clear {
  cursor: pointer;
  float: right;
  font-weight: bold;
  margin-top: 5px;
  margin-right: 10px;
}
.select2-container--default
  .select2-selection--multiple
  .select2-selection__choice {
  background-color: #e4e4e4;
  border: 1px solid #aaa;
  border-radius: 4px;
  cursor: default;
  float: left;
  margin-right: 5px;
  margin-top: 5px;
  padding: 0 5px;
}
.select2-container--default
  .select2-selection--multiple
  .select2-selection__choice__remove {
  color: #999;
  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  margin-right: 2px;
}
.select2-container--default
  .select2-selection--multiple
  .select2-selection__choice__remove:hover {
  color: #333;
}
.select2-container--default[dir="rtl"]
  .select2-selection--multiple
  .select2-selection__choice,
.select2-container--default[dir="rtl"]
  .select2-selection--multiple
  .select2-selection__placeholder,
.select2-container--default[dir="rtl"]
  .select2-selection--multiple
  .select2-search--inline {
  float: right;
}
.select2-container--default[dir="rtl"]
  .select2-selection--multiple
  .select2-selection__choice {
  margin-left: 5px;
  margin-right: auto;
}
.select2-container--default[dir="rtl"]
  .select2-selection--multiple
  .select2-selection__choice__remove {
  margin-left: 2px;
  margin-right: auto;
}
.select2-container--default.select2-container--focus
  .select2-selection--multiple {
  border: solid black 1px;
  outline: 0;
}
.select2-container--default.select2-container--disabled
  .select2-selection--multiple {
  background-color: #eee;
  cursor: default;
}
.select2-container--default.select2-container--disabled
  .select2-selection__choice__remove {
  display: none;
}
.select2-container--default.select2-container--open.select2-container--above
  .select2-selection--single,
.select2-container--default.select2-container--open.select2-container--above
  .select2-selection--multiple {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.select2-container--default.select2-container--open.select2-container--below
  .select2-selection--single,
.select2-container--default.select2-container--open.select2-container--below
  .select2-selection--multiple {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.select2-container--default .select2-search--dropdown .select2-search__field {
  border: 1px solid #aaa;
}
.select2-container--default .select2-search--inline .select2-search__field {
  background: transparent;
  border: none;
  outline: 0;
  box-shadow: none;
  -webkit-appearance: textfield;
}
.select2-container--default .select2-results > .select2-results__options {
  max-height: 200px;
  overflow-y: auto;
}
.select2-container--default .select2-results__option[role="group"] {
  padding: 0;
}
.select2-container--default .select2-results__option[aria-disabled="true"] {
  color: #999;
}
.select2-container--default .select2-results__option[aria-selected="true"] {
  background-color: #ddd;
}
.select2-container--default .select2-results__option .select2-results__option {
  padding-left: 1em;
}
.select2-container--default
  .select2-results__option
  .select2-results__option
  .select2-results__group {
  padding-left: 0;
}
.select2-container--default
  .select2-results__option
  .select2-results__option
  .select2-results__option {
  margin-left: -1em;
  padding-left: 2em;
}
.select2-container--default
  .select2-results__option
  .select2-results__option
  .select2-results__option
  .select2-results__option {
  margin-left: -2em;
  padding-left: 3em;
}
.select2-container--default
  .select2-results__option
  .select2-results__option
  .select2-results__option
  .select2-results__option
  .select2-results__option {
  margin-left: -3em;
  padding-left: 4em;
}
.select2-container--default
  .select2-results__option
  .select2-results__option
  .select2-results__option
  .select2-results__option
  .select2-results__option
  .select2-results__option {
  margin-left: -4em;
  padding-left: 5em;
}
.select2-container--default
  .select2-results__option
  .select2-results__option
  .select2-results__option
  .select2-results__option
  .select2-results__option
  .select2-results__option
  .select2-results__option {
  margin-left: -5em;
  padding-left: 6em;
}
.select2-container--default
  .select2-results__option--highlighted[aria-selected] {
  background-color: #5897fb;
  color: white;
}
.select2-container--default .select2-results__group {
  cursor: default;
  display: block;
  padding: 6px;
}
.select2-container--classic .select2-selection--single {
  background-color: #f7f7f7;
  border: 1px solid #aaa;
  border-radius: 4px;
  outline: 0;
  background-image: -webkit-linear-gradient(top, #fff 50%, #eee 100%);
  background-image: -o-linear-gradient(top, #fff 50%, #eee 100%);
  background-image: linear-gradient(to bottom, #fff 50%, #eee 100%);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFFFF', endColorstr='#FFEEEEEE', GradientType=0);
}
.select2-container--classic .select2-selection--single:focus {
  border: 1px solid #5897fb;
}
.select2-container--classic
  .select2-selection--single
  .select2-selection__rendered {
  color: #444;
  line-height: 28px;
}
.select2-container--classic
  .select2-selection--single
  .select2-selection__clear {
  cursor: pointer;
  float: right;
  font-weight: bold;
  margin-right: 10px;
}
.select2-container--classic
  .select2-selection--single
  .select2-selection__placeholder {
  color: #999;
}
.select2-container--classic
  .select2-selection--single
  .select2-selection__arrow {
  background-color: #ddd;
  border: none;
  border-left: 1px solid #aaa;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  height: 26px;
  position: absolute;
  top: 1px;
  right: 1px;
  width: 20px;
  background-image: -webkit-linear-gradient(top, #eee 50%, #ccc 100%);
  background-image: -o-linear-gradient(top, #eee 50%, #ccc 100%);
  background-image: linear-gradient(to bottom, #eee 50%, #ccc 100%);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFEEEEEE', endColorstr='#FFCCCCCC', GradientType=0);
}
.select2-container--classic
  .select2-selection--single
  .select2-selection__arrow
  b {
  border-color: #888 transparent transparent transparent;
  border-style: solid;
  border-width: 5px 4px 0 4px;
  height: 0;
  left: 50%;
  margin-left: -4px;
  margin-top: -2px;
  position: absolute;
  top: 50%;
  width: 0;
}
.select2-container--classic[dir="rtl"]
  .select2-selection--single
  .select2-selection__clear {
  float: left;
}
.select2-container--classic[dir="rtl"]
  .select2-selection--single
  .select2-selection__arrow {
  border: none;
  border-right: 1px solid #aaa;
  border-radius: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  left: 1px;
  right: auto;
}
.select2-container--classic.select2-container--open .select2-selection--single {
  border: 1px solid #5897fb;
}
.select2-container--classic.select2-container--open
  .select2-selection--single
  .select2-selection__arrow {
  background: transparent;
  border: none;
}
.select2-container--classic.select2-container--open
  .select2-selection--single
  .select2-selection__arrow
  b {
  border-color: transparent transparent #888 transparent;
  border-width: 0 4px 5px 4px;
}
.select2-container--classic.select2-container--open.select2-container--above
  .select2-selection--single {
  border-top: none;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background-image: -webkit-linear-gradient(top, #fff 0%, #eee 50%);
  background-image: -o-linear-gradient(top, #fff 0%, #eee 50%);
  background-image: linear-gradient(to bottom, #fff 0%, #eee 50%);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFFFF', endColorstr='#FFEEEEEE', GradientType=0);
}
.select2-container--classic.select2-container--open.select2-container--below
  .select2-selection--single {
  border-bottom: none;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-image: -webkit-linear-gradient(top, #eee 50%, #fff 100%);
  background-image: -o-linear-gradient(top, #eee 50%, #fff 100%);
  background-image: linear-gradient(to bottom, #eee 50%, #fff 100%);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFEEEEEE', endColorstr='#FFFFFFFF', GradientType=0);
}
.select2-container--classic .select2-selection--multiple {
  background-color: white;
  border: 1px solid #aaa;
  border-radius: 4px;
  cursor: text;
  outline: 0;
}
.select2-container--classic .select2-selection--multiple:focus {
  border: 1px solid #5897fb;
}
.select2-container--classic
  .select2-selection--multiple
  .select2-selection__rendered {
  list-style: none;
  margin: 0;
  padding: 0 5px;
}
.select2-container--classic
  .select2-selection--multiple
  .select2-selection__clear {
  display: none;
}
.select2-container--classic
  .select2-selection--multiple
  .select2-selection__choice {
  background-color: #e4e4e4;
  border: 1px solid #aaa;
  border-radius: 4px;
  cursor: default;
  float: left;
  margin-right: 5px;
  margin-top: 5px;
  padding: 0 5px;
}
.select2-container--classic
  .select2-selection--multiple
  .select2-selection__choice__remove {
  color: #888;
  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  margin-right: 2px;
}
.select2-container--classic
  .select2-selection--multiple
  .select2-selection__choice__remove:hover {
  color: #555;
}
.select2-container--classic[dir="rtl"]
  .select2-selection--multiple
  .select2-selection__choice {
  float: right;
}
.select2-container--classic[dir="rtl"]
  .select2-selection--multiple
  .select2-selection__choice {
  margin-left: 5px;
  margin-right: auto;
}
.select2-container--classic[dir="rtl"]
  .select2-selection--multiple
  .select2-selection__choice__remove {
  margin-left: 2px;
  margin-right: auto;
}
.select2-container--classic.select2-container--open
  .select2-selection--multiple {
  border: 1px solid #5897fb;
}
.select2-container--classic.select2-container--open.select2-container--above
  .select2-selection--multiple {
  border-top: none;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.select2-container--classic.select2-container--open.select2-container--below
  .select2-selection--multiple {
  border-bottom: none;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.select2-container--classic .select2-search--dropdown .select2-search__field {
  border: 1px solid #aaa;
  outline: 0;
}
.select2-container--classic .select2-search--inline .select2-search__field {
  outline: 0;
  box-shadow: none;
}
.select2-container--classic .select2-dropdown {
  background-color: #fff;
  border: 1px solid transparent;
}
.select2-container--classic .select2-dropdown--above {
  border-bottom: none;
}
.select2-container--classic .select2-dropdown--below {
  border-top: none;
}
.select2-container--classic .select2-results > .select2-results__options {
  max-height: 200px;
  overflow-y: auto;
}
.select2-container--classic .select2-results__option[role="group"] {
  padding: 0;
}
.select2-container--classic .select2-results__option[aria-disabled="true"] {
  color: grey;
}
.select2-container--classic
  .select2-results__option--highlighted[aria-selected] {
  background-color: #3875d7;
  color: #fff;
}
.select2-container--classic .select2-results__group {
  cursor: default;
  display: block;
  padding: 6px;
}
.select2-container--classic.select2-container--open .select2-dropdown {
  border-color: #5897fb;
}
/* build app.css */
.jdc_compaign_container {
  line-height: 1;
  position: relative;
}
.jdc_compaign_container .wx_logo {
  position: absolute;
  width: 300px;
  height: 300px;
  visibility: hidden;
  z-index: -1;
}
.jdc_compaign_container .jdc_compaign_video_wrap {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  overflow: hidden;
}
.jdc_compaign_container .jdc_compaign_video_wrap .inner_video_wrap {
  width: 65%;
  height: 65%;
  position: relative;
  margin: 0 auto;
  top: 15%;
}
.jdc_compaign_container .jdc_compaign_video_wrap .inner_video_wrap .video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.jdc_compaign_container
  .jdc_compaign_video_wrap
  .inner_video_wrap
  .video
  .vjs-big-play-button {
  display: none;
}
.jdc_compaign_container .jdc_compaign_video_wrap .inner_video_wrap .close {
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  z-index: 2;
  background-image: url(~assets/mkt/close.png);
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  cursor: pointer;
  opacity: 0.7;
}
.jdc_compaign_container .content_container {
  max-width: 1200px;
  margin: 0 auto;
}
.jdc_compaign_container .jdc_bg {
  background: linear-gradient(80deg, #0989c5, #995cb6);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0989c5",endColorstr="#995cb6",GradientType=1);
}
.jdc_compaign_container .jdc_btn_hover:hover {
  -webkit-box-shadow: 0 0 10px 0 rgba(3, 0, 76, 0.3);
  box-shadow: 0 0 10px 0 rgba(3, 0, 76, 0.3);
}
.jdc_compaign_container .jdc_compaign_service {
  position: fixed;
  right: 20px;
  bottom: 100px;
  z-index: 1000;
  display: none;
}
.jdc_compaign_container .jdc_compaign_service .jdc_compaign_service_left {
  display: none;
  position: relative;
  width: 260px;
  height: 254px;
  float: right;
  background-color: #fff;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 46px 20px 0;
  font-size: 15px;
  line-height: 1.5;
  text-align: center;
  -webkit-box-shadow: 0 3px 10px 0 rgba(32, 86, 178, 0.2);
  box-shadow: 0 3px 10px 0 rgba(32, 86, 178, 0.2);
  margin-right: 6px;
}
.jdc_compaign_container .jdc_compaign_service .jdc_compaign_service_left img {
  cursor: pointer;
  position: absolute;
  width: 20px;
  height: 20px;
  right: 20px;
  top: 20px;
}
.jdc_compaign_container
  .jdc_compaign_service
  .jdc_compaign_service_left
  .jdc_compaign_service_left_title {
  font-size: 20px;
  color: #666;
  margin-bottom: 22px;
  line-height: 1;
}
.jdc_compaign_container
  .jdc_compaign_service
  .jdc_compaign_service_left
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
}
.jdc_compaign_container
  .jdc_compaign_service
  .jdc_compaign_service_left
  .jdc_compaign_service_btn:active {
  opacity: 0.5;
}
.jdc_compaign_container .jdc_compaign_service .jdc_compaign_service_right {
  position: relative;
  float: right;
  margin-right: 6px;
}
.jdc_compaign_container
  .jdc_compaign_service
  .jdc_compaign_service_right
  .contact_us {
  display: none;
}
.jdc_compaign_container .jdc_compaign_banner {
  position: relative;
  color: #fff;
  width: 100%;
  height: 530px;
  background-image: url(~assets/mkt/banner_cover.jpg);
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
}
.jdc_compaign_container .jdc_compaign_banner .jdc_compaign_banner_content {
  position: relative;
  width: 100%;
  max-width: 1200px;
  top: 106px;
  z-index: 2;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding-left: 10px;
  margin: 0 auto;
}
.jdc_compaign_container
  .jdc_compaign_banner
  .jdc_compaign_banner_content
  .jdc_compaign_banner_content_title {
  font-size: 44px;
  font-weight: 400;
}
.jdc_compaign_container
  .jdc_compaign_banner
  .jdc_compaign_banner_content
  .jdc_compaign_banner_desc {
  width: 634px;
  font-size: 14px;
  line-height: 1.5;
  color: #fff;
  text-align: justify;
  margin-top: 32px;
}
.jdc_compaign_container
  .jdc_compaign_banner
  .jdc_compaign_banner_content
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
}
.jdc_compaign_container
  .jdc_compaign_banner
  .jdc_compaign_banner_content
  .contact_btn:active {
  opacity: 0.5;
}
.jdc_compaign_container .jdc_compaign_banner .jdc_compaign_banner_img {
  position: absolute;
  right: 0;
  height: 550px;
  top: 0;
}
.jdc_compaign_container .jdc_compaign_top_tab_wrap {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  position: relative;
}
.jdc_compaign_container .jdc_compaign_top_tab_wrap.normal {
  top: -60px;
}
.jdc_compaign_container .jdc_compaign_top_tab_wrap.fixPosition {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: #fff;
}
.jdc_compaign_container
  .jdc_compaign_top_tab_wrap.fixPosition
  .jdc_compaign_top_tab {
  color: #333;
}
.jdc_compaign_container
  .jdc_compaign_top_tab_wrap.fixPosition
  .jdc_compaign_top_tab
  .jdc_compaign_tab_item.active {
  background-position: bottom;
  background-size: 100% 2px;
}
.jdc_compaign_container .jdc_compaign_top_tab_wrap .jdc_compaign_top_tab {
  max-width: 1200px;
  height: 60px;
  line-height: 60px;
  color: #fff;
  font-size: 16px;
  margin: 0 auto;
}
.jdc_compaign_container
  .jdc_compaign_top_tab_wrap
  .jdc_compaign_top_tab
  .jdc_compaign_tab_item {
  width: 20%;
  float: left;
  cursor: pointer;
  text-align: center;
  border-bottom: 2px solid #f3f5fb;
  white-space: nowrap;
  overflow: hidden;
}
.jdc_compaign_container
  .jdc_compaign_top_tab_wrap
  .jdc_compaign_top_tab
  .jdc_compaign_tab_item.active {
  background-image: url(~assets/mkt/active_line.png);
  background-size: 100% 4px;
  background-position: top;
  background-repeat: no-repeat;
}
.jdc_compaign_container .success_feedback {
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10001;
}
.jdc_compaign_container .success_feedback .success_feedback_mask {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
.jdc_compaign_container .success_feedback .success_feedback_modal {
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
}
.jdc_compaign_container
  .success_feedback
  .success_feedback_modal
  .success_feedback_modal_title {
  font-size: 16px;
  height: 48px;
  line-height: 48px;
  padding-left: 20px;
  background-color: #f4f5f9;
}
.jdc_compaign_container
  .success_feedback
  .success_feedback_modal
  .success_feedback_modal_title
  img {
  width: 15px;
  height: 15px;
  position: absolute;
  padding: 10px;
  right: 10px;
  top: 6px;
  cursor: pointer;
}
.jdc_compaign_container
  .success_feedback
  .success_feedback_modal
  .success_feedback_modal_content {
  text-align: center;
  padding-top: 52px;
}
.jdc_compaign_container
  .success_feedback
  .success_feedback_modal
  .success_feedback_modal_content
  img {
  width: 46px;
  height: 46px;
}
.jdc_compaign_container
  .success_feedback
  .success_feedback_modal
  .success_feedback_modal_content
  p {
  color: #333;
  font-size: 14px;
}
.jdc_compaign_container
  .success_feedback
  .success_feedback_modal
  .success_feedback_modal_content
  p:nth-child(2) {
  font-size: 18px;
  margin: 20px auto 10px;
}
.jdc_compaign_container
  .success_feedback
  .success_feedback_modal
  .success_feedback_modal_footer {
  position: absolute;
  width: 100%;
  height: 48px;
  text-align: right;
  padding-right: 20px;
  background-color: #f4f5f9;
  bottom: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.jdc_compaign_container
  .success_feedback
  .success_feedback_modal
  .success_feedback_modal_footer
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
.jdc_compaign_container .jdc_compaign_content {
  padding: 60px 0;
  width: 100%;
}
.jdc_compaign_container .jdc_compaign_content .jdc_compaign_content_title {
  font-size: 26px;
  color: #0989c5;
  text-align: center;
  margin-bottom: 50px;
}
.jdc_compaign_container .jdc_compaign_content .tab-content {
  display: none;
}
.jdc_compaign_container .jdc_compaign_content.one {
  overflow: hidden;
}
.jdc_compaign_container
  .jdc_compaign_content.one
  .jdc_compaign_content_inner_tabbar {
  font-size: 16px;
  text-align: center;
  border-bottom: 1px solid #d8d8d8;
  padding-bottom: 10px;
  margin-bottom: 20px;
}
.jdc_compaign_container
  .jdc_compaign_content.one
  .jdc_compaign_content_inner_tabbar
  .jdc_compaign_content_inner_tabItem {
  padding: 0 14px 8px;
  margin: 0 22px;
  cursor: pointer;
  position: relative;
  top: 1px;
}
.jdc_compaign_container
  .jdc_compaign_content.one
  .jdc_compaign_content_inner_tabbar
  .jdc_compaign_content_inner_tabItem.active {
  background-image: url(~assets/mkt/active_line.png);
  background-size: 100% 3px;
  background-position: bottom;
  background-repeat: no-repeat;
}
.jdc_compaign_container
  .jdc_compaign_content.one
  .jdc_compaign_content_inner_tab_content {
  position: relative;
  height: 465px;
}
.jdc_compaign_container
  .jdc_compaign_content.one
  .jdc_compaign_content_inner_tab_content
  .jdc_compaign_content_inner_tab_content_item {
  position: absolute;
  width: 100%;
  height: 465px;
  z-index: 1;
  opacity: 0;
  left: 0;
  top: 0;
  -webkit-transition: all 1s;
  transition: all 1s;
}
.jdc_compaign_container
  .jdc_compaign_content.one
  .jdc_compaign_content_inner_tab_content
  .jdc_compaign_content_inner_tab_content_item.current {
  z-index: 2;
  opacity: 1;
}
.jdc_compaign_container
  .jdc_compaign_content.one
  .jdc_compaign_content_inner_tab_content
  .jdc_compaign_content_inner_tab_content_item
  .jdc_compaign_content_inner_left {
  width: 712px;
  height: 465px;
  float: left;
  position: relative;
  left: 4px;
}
.jdc_compaign_container
  .jdc_compaign_content.one
  .jdc_compaign_content_inner_tab_content
  .jdc_compaign_content_inner_tab_content_item
  .jdc_compaign_content_inner_left
  img {
  display: block;
  width: 100%;
  height: 100%;
  -webkit-box-shadow: 0 4px 14px 0 rgba(55, 80, 161, 0.2);
  box-shadow: 0 4px 14px 0 rgba(55, 80, 161, 0.2);
}
.jdc_compaign_container
  .jdc_compaign_content.one
  .jdc_compaign_content_inner_tab_content
  .jdc_compaign_content_inner_tab_content_item
  .jdc_compaign_content_inner_right {
  width: 475px;
  height: 465px;
  float: left;
  padding: 30px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-image: url(~assets/mkt/solution_bg.png);
  background-size: cover;
  background-position-x: right;
  background-position-y: top;
  background-repeat: no-repeat;
}
.jdc_compaign_container
  .jdc_compaign_content.one
  .jdc_compaign_content_inner_tab_content
  .jdc_compaign_content_inner_tab_content_item
  .jdc_compaign_content_inner_right
  .jdc_compaign_content_inner_right_title {
  font-size: 24px;
  color: #333;
}
.jdc_compaign_container
  .jdc_compaign_content.one
  .jdc_compaign_content_inner_tab_content
  .jdc_compaign_content_inner_tab_content_item
  .jdc_compaign_content_inner_right
  .jdc_compaign_content_inner_section {
  margin-top: 35px;
}
.jdc_compaign_container
  .jdc_compaign_content.one
  .jdc_compaign_content_inner_tab_content
  .jdc_compaign_content_inner_tab_content_item
  .jdc_compaign_content_inner_right
  .jdc_compaign_content_inner_section
  .jdc_compaign_content_inner_section_title {
  font-size: 20px;
  color: #0989c5;
  text-align: justify;
  margin-bottom: 15px;
}
.jdc_compaign_container
  .jdc_compaign_content.one
  .jdc_compaign_content_inner_tab_content
  .jdc_compaign_content_inner_tab_content_item
  .jdc_compaign_content_inner_right
  .jdc_compaign_content_inner_section
  .jdc_compaign_content_inner_section_title
  i {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  position: relative;
  top: -2px;
}
.jdc_compaign_container
  .jdc_compaign_content.one
  .jdc_compaign_content_inner_tab_content
  .jdc_compaign_content_inner_tab_content_item
  .jdc_compaign_content_inner_right
  .jdc_compaign_content_inner_section
  .jdc_compaign_content_inner_section_desc {
  font-size: 14px;
  color: #999;
  text-align: justify;
  line-height: 1.5;
}
.jdc_compaign_container
  .jdc_compaign_content.one
  .jdc_compaign_content_inner_tab_content
  .jdc_compaign_content_inner_tab_content_item
  .jdc_compaign_content_inner_right
  .jdc_compaign_content_inner_section
  .jdc_compaign_content_inner_section_desc.link {
  margin-top: -1px;
  display: inline-block;
}
.jdc_compaign_container
  .jdc_compaign_content.one
  .jdc_compaign_content_inner_tab_content
  .jdc_compaign_content_inner_tab_content_item
  .jdc_compaign_content_inner_right
  .jdc_compaign_content_inner_section
  .jdc_compaign_content_inner_section_desc.link
  span {
  width: 30px;
  height: 30px;
  display: inline-block;
  background-image: url(~assets/mkt/arrow_pc.png);
  background-size: 14px 8px;
  background-position: 50%;
  background-repeat: no-repeat;
  position: relative;
  top: 10px;
  left: -5px;
}
.jdc_compaign_container
  .jdc_compaign_content.one
  .jdc_compaign_content_inner_tab_content
  .jdc_compaign_content_inner_tab_content_item
  .jdc_compaign_content_inner_right
  .jdc_compaign_content_inner_section
  .jdc_compaign_content_inner_section_desc.link:hover {
  color: #0989c5;
}
.jdc_compaign_container
  .jdc_compaign_content.one
  .jdc_compaign_content_inner_tab_content
  .jdc_compaign_content_inner_tab_content_item
  .jdc_compaign_content_inner_right
  .jdc_compaign_content_inner_section
  .jdc_compaign_content_inner_section_desc.link:hover
  span {
  background-image: url(~assets/mkt/arrow_m.png);
}
.jdc_compaign_container .jdc_compaign_content.two {
  background: #f7f8fc;
  overflow: hidden;
}
.jdc_compaign_container .jdc_compaign_content.two .jdc_compaign_content_title {
  margin-bottom: 72px;
}
.jdc_compaign_container .jdc_compaign_content.two .jdc_compaign_content_inner {
  font-size: 14px;
  color: #444;
  text-align: center;
  line-height: 1.5;
}
.jdc_compaign_container
  .jdc_compaign_content.two
  .jdc_compaign_content_inner
  table {
  border-collapse: collapse;
  border-spacing: 0;
  margin-top: 22px;
}
.jdc_compaign_container
  .jdc_compaign_content.two
  .jdc_compaign_content_inner
  table
  thead
  th {
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  color: #fff;
  background-image: linear-gradient(-135deg, #0989c5, #995cb6);
  line-height: 68px;
  height: 68px;
  border: none;
  opacity: 0.7;
}
.jdc_compaign_container
  .jdc_compaign_content.two
  .jdc_compaign_content_inner
  table
  thead
  th:nth-child(2) {
  opacity: 1;
  position: relative;
  top: -22px;
}
.jdc_compaign_container
  .jdc_compaign_content.two
  .jdc_compaign_content_inner
  table
  thead
  th:nth-child(2)
  span {
  position: absolute;
  width: 100%;
  height: 100%;
  line-height: 50px;
  top: 22px;
  left: 0;
  background-image: linear-gradient(-135deg, #0989c5, #995cb6);
}
.jdc_compaign_container
  .jdc_compaign_content.two
  .jdc_compaign_content_inner
  table
  td,
.jdc_compaign_container
  .jdc_compaign_content.two
  .jdc_compaign_content_inner
  table
  th {
  border: 1px solid #d8d8d8;
}
.jdc_compaign_container
  .jdc_compaign_content.two
  .jdc_compaign_content_inner
  table
  tbody {
  font-size: 14px;
  color: #444;
}
.jdc_compaign_container
  .jdc_compaign_content.two
  .jdc_compaign_content_inner
  table
  tbody
  tr {
  height: 108px;
}
.jdc_compaign_container
  .jdc_compaign_content.two
  .jdc_compaign_content_inner
  table
  tbody
  tr
  td:first-child {
  font-size: 18px;
  color: #333;
  font-weight: 700;
  padding: 0 90px;
}
.jdc_compaign_container
  .jdc_compaign_content.two
  .jdc_compaign_content_inner
  table
  tbody
  tr
  td:nth-child(2),
.jdc_compaign_container
  .jdc_compaign_content.two
  .jdc_compaign_content_inner
  table
  tbody
  tr
  td:nth-child(3) {
  padding: 0 40px;
}
.jdc_compaign_container .jdc_compaign_content.three {
  overflow: hidden;
}
.jdc_compaign_container
  .jdc_compaign_content.three
  .jdc_compaign_content_inner
  .productList {
  height: 540px;
  border: 1px solid #dadada;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.jdc_compaign_container
  .jdc_compaign_content.three
  .jdc_compaign_content_inner
  .productList
  .productItem {
  display: block;
  height: 540px;
  float: left;
  position: relative;
  overflow: hidden;
}
.jdc_compaign_container
  .jdc_compaign_content.three
  .jdc_compaign_content_inner
  .productList
  .productItem:first-child.current
  .productItem_left {
  color: #fff;
}
.jdc_compaign_container
  .jdc_compaign_content.three
  .jdc_compaign_content_inner
  .productList
  .productItem:first-child.current
  .productItem_left
  span {
  background-image: url(~assets/mkt/product01_active.png);
}
.jdc_compaign_container
  .jdc_compaign_content.three
  .jdc_compaign_content_inner
  .productList
  .productItem:first-child
  .productItem_left
  span {
  background-image: url(~assets/mkt/product01.png);
}
.jdc_compaign_container
  .jdc_compaign_content.three
  .jdc_compaign_content_inner
  .productList
  .productItem:nth-child(2) {
  border-left: 1px solid #dadada;
  border-right: 1px solid #dadada;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.jdc_compaign_container
  .jdc_compaign_content.three
  .jdc_compaign_content_inner
  .productList
  .productItem:nth-child(2).current
  .productItem_left {
  color: #fff;
}
.jdc_compaign_container
  .jdc_compaign_content.three
  .jdc_compaign_content_inner
  .productList
  .productItem:nth-child(2).current
  .productItem_left
  span {
  background-image: url(~assets/mkt/product02_active.png);
}
.jdc_compaign_container
  .jdc_compaign_content.three
  .jdc_compaign_content_inner
  .productList
  .productItem:nth-child(2)
  .productItem_left
  span {
  background-image: url(~assets/mkt/product02.png);
}
.jdc_compaign_container
  .jdc_compaign_content.three
  .jdc_compaign_content_inner
  .productList
  .productItem:nth-child(3).current
  .productItem_left {
  color: #fff;
}
.jdc_compaign_container
  .jdc_compaign_content.three
  .jdc_compaign_content_inner
  .productList
  .productItem:nth-child(3).current
  .productItem_left
  span {
  background-image: url(~assets/mkt/product03_active.png);
}
.jdc_compaign_container
  .jdc_compaign_content.three
  .jdc_compaign_content_inner
  .productList
  .productItem:nth-child(3)
  .productItem_left
  span {
  background-image: url(~assets/mkt/product03.png);
}
.jdc_compaign_container
  .jdc_compaign_content.three
  .jdc_compaign_content_inner
  .productList
  .productItem.current
  .productItem_left {
  width: 220px;
  background-image: -webkit-gradient(
    linear,
    right top,
    left top,
    from(#0989c5),
    to(#995cb6)
  );
  background-image: linear-gradient(-90deg, #0989c5, #995cb6);
  -webkit-box-shadow: 0 8px 24px 0 rgba(55, 80, 161, 0.5);
  box-shadow: 0 8px 24px 0 rgba(55, 80, 161, 0.5);
}
.jdc_compaign_container
  .jdc_compaign_content.three
  .jdc_compaign_content_inner
  .productList
  .productItem.current
  .productItem_right {
  width: 636px;
  padding: 44px;
}
.jdc_compaign_container
  .jdc_compaign_content.three
  .jdc_compaign_content_inner
  .productList
  .productItem
  .productItem_left {
  color: #444;
  width: 170px;
  height: 540px;
  background-color: #f7f8fc;
  display: inline-block;
  text-align: center;
  border-bottom: 1px solid #dadada;
}
.jdc_compaign_container
  .jdc_compaign_content.three
  .jdc_compaign_content_inner
  .productList
  .productItem
  .productItem_left
  span {
  width: 72px;
  height: 72px;
  display: inline-block;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  margin-top: 215px;
}
.jdc_compaign_container
  .jdc_compaign_content.three
  .jdc_compaign_content_inner
  .productList
  .productItem
  .productItem_left
  p {
  font-size: 18px;
  margin-top: 15px;
}
.jdc_compaign_container
  .jdc_compaign_content.three
  .jdc_compaign_content_inner
  .productList
  .productItem
  .productItem_right {
  width: 0;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  float: right;
  overflow: hidden;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.jdc_compaign_container
  .jdc_compaign_content.three
  .jdc_compaign_content_inner
  .productList
  .productItem
  .productItem_right
  .productItem_right_section {
  line-height: 1.5;
  font-size: 14px;
  text-align: justify;
}
.jdc_compaign_container
  .jdc_compaign_content.three
  .jdc_compaign_content_inner
  .productList
  .productItem
  .productItem_right
  .productItem_right_section
  .productItem_right_section_title {
  font-size: 16px;
  font-weight: 700;
  color: #0989c5;
  line-height: 2;
}
.jdc_compaign_container
  .jdc_compaign_content.three
  .jdc_compaign_content_inner
  .productList
  .productItem
  .productItem_right
  .productItem_right_section
  .productItem_right_section_title
  i {
  width: 9px;
  height: 9px;
  top: -2px;
  display: inline-block;
  border-radius: 50%;
  margin-right: 10px;
  position: relative;
}
.jdc_compaign_container
  .jdc_compaign_content.three
  .jdc_compaign_content_inner
  .productList
  .productItem
  .productItem_right
  .productItem_right_section
  .productItem_right_section_title
  span {
  width: 30px;
  height: 28px;
  display: inline-block;
  background-image: url(~assets/mkt/arrow_m.png);
  background-size: 15px 8px;
  background-position: 50%;
  background-repeat: no-repeat;
  position: relative;
  top: 7px;
  left: 2px;
}
.jdc_compaign_container .jdc_compaign_content.four {
  background: #f7f8fc;
  overflow: hidden;
}
.jdc_compaign_container .jdc_compaign_content.four .jdc_compaign_video_item {
  position: relative;
  width: 30%;
  float: left;
  height: 250px;
  text-align: center;
}
.jdc_compaign_container
  .jdc_compaign_content.four
  .jdc_compaign_video_item:nth-child(2) {
  margin: 0 5%;
}
.jdc_compaign_container .jdc_compaign_content.four .jdc_compaign_video_item p {
  font-size: 16px;
  color: #333;
  line-height: 44px;
  border: 1px solid #a9b8de;
}
.jdc_compaign_container
  .jdc_compaign_content.four
  .jdc_compaign_video_item
  .jdc_compaign_video_item_img_wrap {
  position: relative;
  cursor: pointer;
}
.jdc_compaign_container
  .jdc_compaign_content.four
  .jdc_compaign_video_item
  .jdc_compaign_video_item_img_wrap:hover
  .video_mask {
  background-color: rgba(0, 0, 0, 0.25);
}
.jdc_compaign_container
  .jdc_compaign_content.four
  .jdc_compaign_video_item
  .jdc_compaign_video_item_img_wrap
  .jdc_compaign_video_item_img {
  display: block;
  width: 100%;
  height: 204px;
}
.jdc_compaign_container
  .jdc_compaign_content.four
  .jdc_compaign_video_item
  .jdc_compaign_video_item_img_wrap
  .jdc_compaign_video_item_player_btn {
  position: absolute;
  width: 40px;
  height: 40px;
  top: 90px;
  left: 50%;
  margin-left: -20px;
  z-index: 3;
}
.jdc_compaign_container
  .jdc_compaign_content.four
  .jdc_compaign_video_item
  .jdc_compaign_video_item_img_wrap
  .video_mask {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.jdc_compaign_container
  .jdc_compaign_content.five
  .select2-container--default
  .select2-selection--single
  .select2-selection__rendered {
  color: #fff;
}
.jdc_compaign_container .jdc_compaign_content.five .jdc_compaign_content_title {
  margin-bottom: 40px;
  color: #fff;
}
.jdc_compaign_container
  .jdc_compaign_content.five
  .jdc_compaign_content_title.jdc_compaign_content_title_m {
  display: none;
}
.jdc_compaign_container
  .jdc_compaign_content.five
  .jdc_compaign_content_title
  p:nth-child(2) {
  font-size: 14px;
  margin-top: 20px;
}
.jdc_compaign_container .jdc_compaign_content.five .jdc_compaign_content_inner {
  padding: 0 136px;
  overflow: hidden;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.jdc_compaign_container
  .jdc_compaign_content.five
  .jdc_compaign_content_inner
  .jdc_compaign_content_inner_input_wrap {
  position: relative;
  width: 390px;
  float: left;
  margin-left: 40px;
  margin-top: 30px;
}
.jdc_compaign_container
  .jdc_compaign_content.five
  .jdc_compaign_content_inner
  .jdc_compaign_content_inner_input_wrap.selectWrap {
  width: 412px;
}
.jdc_compaign_container
  .jdc_compaign_content.five
  .jdc_compaign_content_inner
  .jdc_compaign_content_inner_input_wrap.selectWrap.selectDutyWrap {
  margin-left: 15px;
}
.jdc_compaign_container
  .jdc_compaign_content.five
  .jdc_compaign_content_inner
  .jdc_compaign_content_inner_input_wrap
  label {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  color: #fff;
}
.jdc_compaign_container
  .jdc_compaign_content.five
  .jdc_compaign_content_inner
  .jdc_compaign_content_inner_input_wrap
  label
  span {
  color: #c50900;
}
.jdc_compaign_container
  .jdc_compaign_content.five
  .jdc_compaign_content_inner
  .jdc_compaign_content_inner_input_wrap
  input {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: rgba(0, 0, 0, 0.15);
  border: 1px solid hsla(0, 0%, 59%, 0.12);
  -webkit-box-shadow: inset 0 2px 3px 0 rgba(55, 80, 161, 0.09);
  box-shadow: inset 0 2px 3px 0 rgba(55, 80, 161, 0.09);
  border-radius: 3px;
  padding-left: 20px;
  color: #fff;
}
.jdc_compaign_container
  .jdc_compaign_content.five
  .jdc_compaign_content_inner
  .jdc_compaign_content_inner_input_wrap
  input.error {
  border: 1px solid #c50900;
}
.jdc_compaign_container
  .jdc_compaign_content.five
  .jdc_compaign_content_inner
  .jdc_compaign_content_inner_input_wrap
  select {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: rgba(0, 0, 0, 0.15);
  border: 1px solid hsla(0, 0%, 59%, 0.12);
  -webkit-box-shadow: inset 0 2px 3px 0 rgba(55, 80, 161, 0.09);
  box-shadow: inset 0 2px 3px 0 rgba(55, 80, 161, 0.09);
  border-radius: 3px;
}
.jdc_compaign_container
  .jdc_compaign_content.five
  .jdc_compaign_content_inner
  .jdc_compaign_content_inner_input_wrap
  .select2-container--default
  .select2-selection--single,
.jdc_compaign_container
  .jdc_compaign_content.five
  .jdc_compaign_content_inner
  .jdc_compaign_content_inner_input_wrap
  .select2-container
  .select2-selection--single {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: rgba(0, 0, 0, 0.15);
  border: 1px solid hsla(0, 0%, 59%, 0.12);
  -webkit-box-shadow: inset 0 2px 3px 0 rgba(55, 80, 161, 0.09);
  box-shadow: inset 0 2px 3px 0 rgba(55, 80, 161, 0.09);
}
.jdc_compaign_container
  .jdc_compaign_content.five
  .jdc_compaign_content_inner
  .jdc_compaign_content_inner_input_wrap
  .select2-container--default
  .select2-selection--single
  .select2-selection__rendered,
.jdc_compaign_container
  .jdc_compaign_content.five
  .jdc_compaign_content_inner
  .jdc_compaign_content_inner_input_wrap
  .select2-container
  .select2-selection--single
  .select2-selection__rendered {
  height: 40px;
  line-height: 40px;
  padding-left: 20px;
}
.jdc_compaign_container
  .jdc_compaign_content.five
  .jdc_compaign_content_inner
  .jdc_compaign_content_inner_input_wrap
  .select2-container--default
  .select2-selection--single
  .select2-selection__arrow,
.jdc_compaign_container
  .jdc_compaign_content.five
  .jdc_compaign_content_inner
  .jdc_compaign_content_inner_input_wrap
  .select2-container
  .select2-selection--single
  .select2-selection__arrow {
  top: 6px;
}
.jdc_compaign_container
  .jdc_compaign_content.five
  .jdc_compaign_content_inner
  .jdc_compaign_content_inner_input_wrap
  .select2-container--default
  .select2-selection--single
  .select2-selection__arrow
  b,
.jdc_compaign_container
  .jdc_compaign_content.five
  .jdc_compaign_content_inner
  .jdc_compaign_content_inner_input_wrap
  .select2-container
  .select2-selection--single
  .select2-selection__arrow
  b {
  border-color: hsla(0, 0%, 100%, 0.5) transparent transparent;
}
.jdc_compaign_container
  .jdc_compaign_content.five
  .jdc_compaign_content_inner
  .jdc_compaign_content_inner_input_wrap
  .select2-container--default
  .select2-selection--single
  .select2-selection__placeholder,
.jdc_compaign_container
  .jdc_compaign_content.five
  .jdc_compaign_content_inner
  .jdc_compaign_content_inner_input_wrap
  .select2-container
  .select2-selection--single
  .select2-selection__placeholder {
  color: hsla(0, 0%, 100%, 0.5);
}
.jdc_compaign_container
  .jdc_compaign_content.five
  .jdc_compaign_content_inner
  .jdc_compaign_content_inner_input_wrap
  .error_text {
  position: absolute;
  color: #c50900;
  font-size: 12px;
  bottom: -18px;
}
.jdc_compaign_container .jdc_compaign_content.five .jdc_compaign_content_btn {
  display: block;
  width: 160px;
  height: 40px;
  line-height: 40px;
  border: 0;
  margin: 50px auto 0;
  color: #6b6aba;
  background-color: #fff;
  border-radius: 10px;
}
.jdc_compaign_container
  .jdc_compaign_content.five
  .jdc_compaign_content_btn:active {
  opacity: 0.5;
}
.jdc_compaign_container
  .jdc_compaign_content.five
  .jdc_compaign_content_btn:hover {
  -webkit-box-shadow: 0 0 10px 0 rgba(3, 0, 76, 0.3);
  box-shadow: 0 0 10px 0 rgba(3, 0, 76, 0.3);
}
@media (min-width: 780px) and (max-width: 1200px) {
  .jdc_compaign_container .jdc_compaign_content .tab-content {
    display: block;
  }
  .jdc_compaign_container .jdc_compaign_content .tab-content .tab-item-title {
    position: relative;
    border-top: 1px solid #ededed;
  }
  .jdc_compaign_container
    .jdc_compaign_content
    .tab-content
    .tab-item-title.jdc-common-arr:after {
    content: "\E8F5";
    position: absolute;
    top: 20px;
    right: 20px;
    width: 20px;
    text-align: center;
    line-height: 20px;
    height: 20px;
    font-size: 16px;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }
  .jdc_compaign_container
    .jdc_compaign_content
    .tab-content
    .tab-item-title.active {
    color: #0989c5;
  }
  .jdc_compaign_container
    .jdc_compaign_content
    .tab-content
    .tab-item-title.active:after {
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg);
  }
  .jdc_compaign_container
    .jdc_compaign_content
    .tab-content
    .tab-item-title
    h4 {
    height: 50px;
    line-height: 50px;
    padding: 0 15px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 18px;
  }
  .jdc_compaign_container
    .jdc_compaign_content
    .tab-content
    .tab-item.current
    .tab-item-content {
    display: block;
  }
  .jdc_compaign_container
    .jdc_compaign_content
    .tab-content
    .tab-item
    .tab-item-content {
    display: none;
  }
  .jdc_compaign_container
    .jdc_compaign_content
    .tab-content
    .tab-item
    .tab-item-img {
    width: 100%;
    padding: 8px 16px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin-bottom: 10px;
  }
  .jdc_compaign_container
    .jdc_compaign_content
    .tab-content
    .tab-item
    .tab-item-img
    img {
    width: 100%;
    -webkit-box-shadow: 0 4px 14px 0 rgba(55, 80, 161, 0.2);
    box-shadow: 0 4px 14px 0 rgba(55, 80, 161, 0.2);
  }
  .jdc_compaign_container
    .jdc_compaign_content
    .tab-content
    .tab-item
    .jdc_compaign_content_inner_section {
    margin-top: 0;
    padding: 15px;
  }
  .jdc_compaign_container
    .jdc_compaign_content
    .tab-content
    .tab-item
    .jdc_compaign_content_inner_section
    .jdc_compaign_content_inner_section_title {
    font-size: 14px;
    color: #0989c5;
    text-align: justify;
    margin-bottom: 15px;
    display: block;
    font-weight: 500;
  }
  .jdc_compaign_container
    .jdc_compaign_content
    .tab-content
    .tab-item
    .jdc_compaign_content_inner_section
    .jdc_compaign_content_inner_section_title
    i {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    margin-right: 10px;
    position: relative;
    top: -1px;
  }
  .jdc_compaign_container
    .jdc_compaign_content
    .tab-content
    .tab-item
    .jdc_compaign_content_inner_section
    .jdc_compaign_content_inner_section_desc {
    font-size: 12px;
    color: #666;
    text-align: justify;
    line-height: 1.5;
  }
  .jdc_compaign_container
    .jdc_compaign_content
    .tab-content
    .tab-item
    .jdc_compaign_content_inner_section
    .jdc_compaign_content_inner_section_desc.link {
    margin-top: -10px;
    display: inline-block;
    color: #0989c5;
  }
  .jdc_compaign_container
    .jdc_compaign_content
    .tab-content
    .tab-item
    .jdc_compaign_content_inner_section
    .jdc_compaign_content_inner_section_desc.link
    span {
    width: 30px;
    height: 30px;
    display: inline-block;
    background-image: url(~assets/mkt/arrow_m.png);
    background-size: 14px 8px;
    background-position: 50%;
    background-repeat: no-repeat;
    position: relative;
    top: 10px;
    left: -5px;
  }
  .jdc_compaign_container .jdc_compaign_content.one {
    padding-bottom: 0;
  }
  .jdc_compaign_container
    .jdc_compaign_content.one
    .jdc_compaign_content_inner_tab_content,
  .jdc_compaign_container
    .jdc_compaign_content.one
    .jdc_compaign_content_inner_tabbar {
    display: none;
  }
  .jdc_compaign_container .jdc_compaign_content.two {
    padding-bottom: 35px;
  }
  .jdc_compaign_container
    .jdc_compaign_content.two
    .jdc_compaign_content_title {
    margin-bottom: 47px;
  }
  .jdc_compaign_container
    .jdc_compaign_content.two
    .jdc_compaign_content_inner
    table {
    margin: 0 auto;
  }
  .jdc_compaign_container
    .jdc_compaign_content.two
    .jdc_compaign_content_inner
    table
    thead
    th {
    height: 34px;
    line-height: 34px;
  }
  .jdc_compaign_container
    .jdc_compaign_content.two
    .jdc_compaign_content_inner
    table
    thead
    th:nth-child(2) {
    top: -11px;
  }
  .jdc_compaign_container
    .jdc_compaign_content.two
    .jdc_compaign_content_inner
    table
    thead
    th:nth-child(2)
    span {
    top: 11px;
    line-height: 30px;
  }
  .jdc_compaign_container
    .jdc_compaign_content.two
    .jdc_compaign_content_inner
    table
    tbody
    tr {
    height: 108px;
    padding: 36px 0;
  }
  .jdc_compaign_container
    .jdc_compaign_content.two
    .jdc_compaign_content_inner
    table
    tbody
    tr
    td:first-child {
    color: #333;
    font-weight: 700;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .jdc_compaign_container
    .jdc_compaign_content.two
    .jdc_compaign_content_inner
    table
    tbody
    tr
    td:nth-child(2),
  .jdc_compaign_container
    .jdc_compaign_content.two
    .jdc_compaign_content_inner
    table
    tbody
    tr
    td:nth-child(3) {
    padding: 25px 12px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .jdc_compaign_container .jdc_compaign_content.three {
    padding-bottom: 0;
  }
  .jdc_compaign_container .jdc_compaign_content.three .productList {
    display: none;
  }
  .jdc_compaign_container
    .jdc_compaign_content.three
    .tab-content
    .tab-item
    .tab-item-title
    h4 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .jdc_compaign_container
    .jdc_compaign_content.three
    .tab-content
    .tab-item
    .tab-item-title
    h4
    img {
    width: 20px;
    height: 20px;
    margin-right: 15px;
  }
  .jdc_compaign_container
    .jdc_compaign_content.three
    .tab-content
    .tab-item
    .jdc_compaign_content_inner_section {
    padding-top: 0;
  }
  .jdc_compaign_container
    .jdc_compaign_content.three
    .tab-content
    .tab-item
    .jdc_compaign_content_inner_section
    .jdc_compaign_content_inner_section_title
    span {
    width: 30px;
    height: 30px;
    display: inline-block;
    background-image: url(~assets/mkt/arrow_m.png);
    background-size: 14px 8px;
    background-position: 50%;
    background-repeat: no-repeat;
    position: relative;
    top: 10px;
    left: 0;
  }
  .jdc_compaign_container
    .jdc_compaign_content.five
    .jdc_compaign_content_inner
    .jdc_compaign_content_inner_input_wrap {
    width: 100%;
    margin: 0 auto;
    margin-top: 30px;
    float: none;
  }
  .jdc_compaign_container
    .jdc_compaign_content.five
    .jdc_compaign_content_inner
    .jdc_compaign_content_inner_input_wrap.selectWrap {
    width: 100%;
  }
  .jdc_compaign_container
    .jdc_compaign_content.five
    .jdc_compaign_content_inner
    .jdc_compaign_content_inner_input_wrap.selectWrap.selectDutyWrap {
    margin-left: 0;
  }
  .jdc_compaign_container
    .jdc_compaign_content.five
    .jdc_compaign_content_inner
    .jdc_compaign_content_inner_input_wrap
    input {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding-left: 10px;
  }
}
@media (max-width: 780px) {
  .jdc_compaign_container .jdc_compaign_video_wrap .inner_video_wrap {
    width: 100%;
    background-color: #000;
    height: 50%;
  }
  .jdc_compaign_container .jdc_compaign_video_wrap .inner_video_wrap .video {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    background-color: transparent;
  }
  .jdc_compaign_container .jdc_compaign_video_wrap .inner_video_wrap .close {
    top: 10px;
  }
  .jdc_compaign_container .jdc_compaign_service {
    bottom: 10px;
    right: 10px;
    display: block;
  }
  .jdc_compaign_container .jdc_compaign_service .jdc_compaign_service_left {
    display: none !important;
  }
  .jdc_compaign_container
    .jdc_compaign_service
    .jdc_compaign_service_right
    .contact_us {
    display: block;
  }
  .jdc_compaign_container .jdc_compaign_service .mod_hang_qrcode_btn,
  .jdc_compaign_container .jdc_compaign_service .mod_hang_top {
    width: 50px;
    height: 50px;
  }
  .jdc_compaign_container .jdc_compaign_service .mod_hang_qrcode_btn i,
  .jdc_compaign_container .jdc_compaign_service .mod_hang_top i {
    width: 50px;
    height: 50px;
    line-height: 50px;
    font-size: 30px;
  }
  .jdc_compaign_container .jdc_compaign_service .mod_hang_appeal_btn {
    width: 50px;
    height: 50px;
    padding-top: 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #fff;
  }
  .jdc_compaign_container .jdc_compaign_service .mod_hang_appeal_btn p {
    text-align: center;
    font-size: 14px;
  }
  .jdc_compaign_container
    .jdc_compaign_service
    .mod_hang_appeal_btn
    p:first-child {
    margin-bottom: 1px;
  }
  .jdc_compaign_container .jdc_compaign_service .show_left_modal {
    display: none !important;
  }
  .jdc_compaign_container .jdc_compaign_banner {
    padding: 30px 20px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background-image: url(~assets/mkt/banner_m.jpg);
  }
  .jdc_compaign_container .jdc_compaign_banner .jdc_compaign_banner_content {
    position: relative;
    top: 0;
    padding-left: 0;
  }
  .jdc_compaign_container
    .jdc_compaign_banner
    .jdc_compaign_banner_content
    .jdc_compaign_banner_content_title {
    font-size: 22px;
  }
  .jdc_compaign_container
    .jdc_compaign_banner
    .jdc_compaign_banner_content
    .jdc_compaign_banner_desc {
    font-size: 12px;
    width: 100%;
    margin-top: 20px;
  }
  .jdc_compaign_container
    .jdc_compaign_banner
    .jdc_compaign_banner_content
    .contact_btn {
    width: 90px;
    height: 25px;
    line-height: 25px;
    font-size: 12px;
    border-radius: 12.5px;
    margin-top: 22px;
  }
  .jdc_compaign_container .jdc_compaign_top_tab_wrap {
    display: none;
  }
  .jdc_compaign_container .jdc_compaign_banner {
    height: auto;
  }
  .jdc_compaign_container .jdc_compaign_content {
    padding: 30px 0;
  }
  .jdc_compaign_container .jdc_compaign_content .jdc_compaign_content_title {
    font-size: 22px;
    margin-bottom: 25px;
  }
  .jdc_compaign_container .jdc_compaign_content .tab-content {
    display: block;
  }
  .jdc_compaign_container .jdc_compaign_content .tab-content .tab-item-title {
    position: relative;
    border-top: 1px solid #ededed;
  }
  .jdc_compaign_container
    .jdc_compaign_content
    .tab-content
    .tab-item-title.jdc-common-arr:after {
    content: "\E8F5";
    position: absolute;
    top: 20px;
    right: 20px;
    width: 20px;
    text-align: center;
    line-height: 20px;
    height: 20px;
    font-size: 16px;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }
  .jdc_compaign_container
    .jdc_compaign_content
    .tab-content
    .tab-item-title.active {
    color: #0989c5;
  }
  .jdc_compaign_container
    .jdc_compaign_content
    .tab-content
    .tab-item-title
    h4 {
    height: 50px;
    line-height: 50px;
    padding: 0 15px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 18px;
  }
  .jdc_compaign_container
    .jdc_compaign_content
    .tab-content
    .tab-item.current
    .tab-item-content {
    display: block;
  }
  .jdc_compaign_container
    .jdc_compaign_content
    .tab-content
    .tab-item
    .tab-item-content {
    display: none;
  }
  .jdc_compaign_container
    .jdc_compaign_content
    .tab-content
    .tab-item
    .tab-item-img {
    width: 100%;
    padding: 8px 16px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin-bottom: 10px;
  }
  .jdc_compaign_container
    .jdc_compaign_content
    .tab-content
    .tab-item
    .tab-item-img
    img {
    width: 100%;
    -webkit-box-shadow: 0 4px 14px 0 rgba(55, 80, 161, 0.2);
    box-shadow: 0 4px 14px 0 rgba(55, 80, 161, 0.2);
  }
  .jdc_compaign_container
    .jdc_compaign_content
    .tab-content
    .tab-item
    .jdc_compaign_content_inner_section {
    margin-top: 0;
    padding: 15px;
  }
  .jdc_compaign_container
    .jdc_compaign_content
    .tab-content
    .tab-item
    .jdc_compaign_content_inner_section
    .jdc_compaign_content_inner_section_title {
    font-size: 14px;
    color: #0989c5;
    text-align: justify;
    margin-bottom: 15px;
    display: block;
    font-weight: 500;
  }
  .jdc_compaign_container
    .jdc_compaign_content
    .tab-content
    .tab-item
    .jdc_compaign_content_inner_section
    .jdc_compaign_content_inner_section_title
    i {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    margin-right: 10px;
    position: relative;
    top: -1px;
  }
  .jdc_compaign_container
    .jdc_compaign_content
    .tab-content
    .tab-item
    .jdc_compaign_content_inner_section
    .jdc_compaign_content_inner_section_desc {
    font-size: 12px;
    color: #666;
    text-align: justify;
    line-height: 1.5;
  }
  .jdc_compaign_container
    .jdc_compaign_content
    .tab-content
    .tab-item
    .jdc_compaign_content_inner_section
    .jdc_compaign_content_inner_section_desc.link {
    margin-top: -10px;
    display: inline-block;
    color: #0989c5;
  }
  .jdc_compaign_container
    .jdc_compaign_content
    .tab-content
    .tab-item
    .jdc_compaign_content_inner_section
    .jdc_compaign_content_inner_section_desc.link
    span {
    width: 30px;
    height: 30px;
    display: inline-block;
    background-image: url(~assets/mkt/arrow_m.png);
    background-size: 14px 8px;
    background-position: 50%;
    background-repeat: no-repeat;
    position: relative;
    top: 10px;
    left: -5px;
  }
  .jdc_compaign_container .jdc_compaign_content.one {
    padding-top: 30px;
    padding-bottom: 0;
  }
  .jdc_compaign_container
    .jdc_compaign_content.one
    .jdc_compaign_content_inner
    .jdc_compaign_content_inner_tab_content,
  .jdc_compaign_container
    .jdc_compaign_content.one
    .jdc_compaign_content_inner
    .jdc_compaign_content_inner_tabbar {
    display: none;
  }
  .jdc_compaign_container .jdc_compaign_content.two {
    padding-bottom: 35px;
  }
  .jdc_compaign_container
    .jdc_compaign_content.two
    .jdc_compaign_content_title {
    margin-bottom: 47px;
  }
  .jdc_compaign_container
    .jdc_compaign_content.two
    .jdc_compaign_content_inner
    table {
    margin: 0 auto;
  }
  .jdc_compaign_container
    .jdc_compaign_content.two
    .jdc_compaign_content_inner
    table
    thead
    th {
    font-size: 15px;
    height: 34px;
    line-height: 34px;
  }
  .jdc_compaign_container
    .jdc_compaign_content.two
    .jdc_compaign_content_inner
    table
    thead
    th:nth-child(2) {
    top: -11px;
  }
  .jdc_compaign_container
    .jdc_compaign_content.two
    .jdc_compaign_content_inner
    table
    thead
    th:nth-child(2)
    span {
    top: 11px;
    line-height: 30px;
  }
  .jdc_compaign_container
    .jdc_compaign_content.two
    .jdc_compaign_content_inner
    table
    tbody
    tr {
    height: 108px;
    padding: 36px 0;
  }
  .jdc_compaign_container
    .jdc_compaign_content.two
    .jdc_compaign_content_inner
    table
    tbody
    tr
    td:first-child {
    font-size: 14px;
    color: #333;
    font-weight: 700;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .jdc_compaign_container
    .jdc_compaign_content.two
    .jdc_compaign_content_inner
    table
    tbody
    tr
    td:nth-child(2),
  .jdc_compaign_container
    .jdc_compaign_content.two
    .jdc_compaign_content_inner
    table
    tbody
    tr
    td:nth-child(3) {
    padding: 25px 12px;
    font-size: 13px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .jdc_compaign_container .jdc_compaign_content.three {
    padding-bottom: 0;
  }
  .jdc_compaign_container .jdc_compaign_content.three .productList {
    display: none;
  }
  .jdc_compaign_container
    .jdc_compaign_content.three
    .tab-content
    .tab-item
    .tab-item-title
    h4 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .jdc_compaign_container
    .jdc_compaign_content.three
    .tab-content
    .tab-item
    .tab-item-title
    h4
    img {
    width: 20px;
    height: 20px;
    margin-right: 15px;
  }
  .jdc_compaign_container
    .jdc_compaign_content.three
    .tab-content
    .tab-item
    .jdc_compaign_content_inner_section {
    padding-top: 0;
  }
  .jdc_compaign_container
    .jdc_compaign_content.three
    .tab-content
    .tab-item
    .jdc_compaign_content_inner_section
    .jdc_compaign_content_inner_section_title
    span {
    width: 30px;
    height: 30px;
    display: inline-block;
    background-image: url(~assets/mkt/arrow_m.png);
    background-size: 14px 8px;
    background-position: 50%;
    background-repeat: no-repeat;
    position: relative;
    top: 10px;
    left: 0;
  }
  .jdc_compaign_container .jdc_compaign_content.four .jdc_compaign_video_item {
    position: relative;
    width: 100%;
    padding: 0 15px;
    float: none;
    height: 226px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .jdc_compaign_container
    .jdc_compaign_content.four
    .jdc_compaign_video_item:nth-child(2) {
    margin: 0;
    height: 286px;
    padding: 30px 15px;
  }
  .jdc_compaign_container
    .jdc_compaign_content.four
    .jdc_compaign_video_item
    p {
    font-size: 16px;
    color: #333;
    line-height: 40px;
    border: 1px solid #a9b8de;
  }
  .jdc_compaign_container
    .jdc_compaign_content.four
    .jdc_compaign_video_item
    .jdc_compaign_video_item_img_wrap {
    position: relative;
    cursor: pointer;
  }
  .jdc_compaign_container
    .jdc_compaign_content.four
    .jdc_compaign_video_item
    .jdc_compaign_video_item_img_wrap
    .jdc_compaign_video_item_img {
    height: 186px;
  }
  .jdc_compaign_container
    .jdc_compaign_content.four
    .jdc_compaign_video_item
    .jdc_compaign_video_item_img_wrap
    .jdc_compaign_video_item_player_btn {
    top: 75px;
  }
  .jdc_compaign_container .jdc_compaign_content.five {
    padding: 30px 15px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .jdc_compaign_container
    .jdc_compaign_content.five
    .jdc_compaign_content_inner {
    padding: 0;
  }
  .jdc_compaign_container
    .jdc_compaign_content.five
    .jdc_compaign_content_inner
    .jdc_compaign_content_inner_input_wrap {
    width: 100%;
    margin-left: 0;
    margin-top: 25px;
  }
  .jdc_compaign_container
    .jdc_compaign_content.five
    .jdc_compaign_content_inner
    .jdc_compaign_content_inner_input_wrap:first-child {
    margin-top: 0;
  }
  .jdc_compaign_container
    .jdc_compaign_content.five
    .jdc_compaign_content_inner
    .jdc_compaign_content_inner_input_wrap.selectWrap {
    width: 100%;
  }
  .jdc_compaign_container
    .jdc_compaign_content.five
    .jdc_compaign_content_inner
    .jdc_compaign_content_inner_input_wrap.selectWrap.selectDutyWrap {
    margin-left: 0;
  }
  .jdc_compaign_container
    .jdc_compaign_content.five
    .jdc_compaign_content_inner
    .jdc_compaign_content_inner_input_wrap
    .select2-container--default
    .select2-selection--single,
  .jdc_compaign_container
    .jdc_compaign_content.five
    .jdc_compaign_content_inner
    .jdc_compaign_content_inner_input_wrap
    .select2-container
    .select2-selection--single,
  .jdc_compaign_container
    .jdc_compaign_content.five
    .jdc_compaign_content_inner
    .jdc_compaign_content_inner_input_wrap
    select {
    height: 30px;
    line-height: 30px;
  }
  .jdc_compaign_container
    .jdc_compaign_content.five
    .jdc_compaign_content_inner
    .jdc_compaign_content_inner_input_wrap
    .select2-container--default
    .select2-selection--single
    .select2-selection__rendered,
  .jdc_compaign_container
    .jdc_compaign_content.five
    .jdc_compaign_content_inner
    .jdc_compaign_content_inner_input_wrap
    .select2-container
    .select2-selection--single
    .select2-selection__rendered {
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
  }
  .jdc_compaign_container
    .jdc_compaign_content.five
    .jdc_compaign_content_inner
    .jdc_compaign_content_inner_input_wrap
    .select2-container--default
    .select2-selection--single
    .select2-selection__arrow,
  .jdc_compaign_container
    .jdc_compaign_content.five
    .jdc_compaign_content_inner
    .jdc_compaign_content_inner_input_wrap
    .select2-container
    .select2-selection--single
    .select2-selection__arrow {
    top: 3px;
  }
  .jdc_compaign_container
    .jdc_compaign_content.five
    .jdc_compaign_content_inner
    .jdc_compaign_content_inner_input_wrap
    input {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding-left: 10px;
    height: 30px;
    line-height: 30px;
  }
  .jdc_compaign_container
    .jdc_compaign_content.five
    .jdc_compaign_content_inner
    .jdc_compaign_content_inner_input_wrap
    .error_text {
    font-size: 12px;
    position: absolute;
    bottom: -15px;
  }
  .jdc_compaign_container .jdc_compaign_content.five .jdc_compaign_content_btn {
    width: 100%;
    height: 32px;
    line-height: 32px;
    border-radius: 5px;
  }
  .jdc_compaign_container .success_feedback .success_feedback_modal {
    width: 300px;
    height: 218px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -109px;
    margin-left: -150px;
    background-color: #fff;
    border-radius: 3px;
  }
  .jdc_compaign_container
    .success_feedback
    .success_feedback_modal
    .success_feedback_modal_title {
    display: none;
  }
  .jdc_compaign_container
    .success_feedback
    .success_feedback_modal
    .success_feedback_modal_content {
    padding-top: 40px;
  }
  .jdc_compaign_container
    .success_feedback
    .success_feedback_modal
    .success_feedback_modal_content
    img {
    width: 33px;
    height: 33px;
  }
  .jdc_compaign_container
    .success_feedback
    .success_feedback_modal
    .success_feedback_modal_content
    p {
    color: #333;
  }
  .jdc_compaign_container
    .success_feedback
    .success_feedback_modal
    .success_feedback_modal_content
    p:nth-child(2) {
    font-size: 18px;
    margin: 20px auto 10px;
  }
  .jdc_compaign_container
    .success_feedback
    .success_feedback_modal
    .success_feedback_modal_footer {
    padding: 0 12.5px;
    background-color: #fff;
  }
  .jdc_compaign_container
    .success_feedback
    .success_feedback_modal
    .success_feedback_modal_footer
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
.jdc-side,
.select2-search--dropdown {
  display: none !important;
}
/*# sourceMappingURL=../../app.map*/
</style>
