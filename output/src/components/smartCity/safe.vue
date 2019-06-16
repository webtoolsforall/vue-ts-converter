<template>
  <div class="jdc_compaign_container">
    <img
      src="/static/img/safe/wx_logo.jpg"
      alt=""
      class="wx_logo"
    >
    <!-- video start -->
    <div class="jdc_compaign_video_wrap">
      <div class="inner_video_wrap">
        <video
          id="my-player"
          class="video video-js"
          controls
          preload="auto"
          poster="/static/img/safe/poster01.jpg"
          data-setup='{}'
        >
          <source
            src="http://jdc-static.oss.cn-north-1.jcloudcs.com/jdc-about-static/yunduoshuo/07security.mp4"
            type="video/mp4"
            id="my-player-source"
          />
        </video>
        <div
          class="close"
          id="close"
          @click="closeVideo"
          :clstag="`Solution|keycount|MiddleContentSec|safe|closeVideo`"
        >
        </div>
      </div>
    </div>
    <!-- video end -->
    <!-- 顶部banner start-->
    <div class="jdc_compaign_banner">
      <div class="jdc_compaign_banner_content">
        <h2 class="jdc_compaign_banner_content_title">
          如何更好的保障企业级应用安全
        </h2>
        <div class="jdc_compaign_banner_desc">
          <p>复杂的网络环境中，您的业务每天面临各种安全威胁。DDos攻击、CC攻击、黑客入侵、撞库、网页篡改、恶意爬虫、网页挂马等问题严重影响业务正常运营，损害企业品牌形象，甚至使您的公司蒙受重大经济损失。</p>
          <p>京东云基于多年来为京东商城提供安全保障的积累，为您的企业建立起全方位安全防护体系，保障核心数据安全与业务的持续稳定。</p>
        </div>
        <button
          class="contact_btn goBottom jdc_btn_hover clickEvent"
          data-event="contactUsTop"
          id="contact_btn"
          @click="goBottom"
          clstag="Solution|keycount|SectionBannerSec|safe|callUs"
        >联系我们</button>
      </div>
    </div>
    <!-- 顶部banner end-->
    <!-- 顶部tab栏 start -->
    <div class="jdc_compaign_top_tab_wrap normal">
      <div class="jdc_compaign_top_tab">
        <div class="jdc_compaign_tab_item active one"
          :clstag="`Solution|keycount|MiddleContentSec|safe|tab_1`"
          @click="gaEventTrigger('Solution|keycount|MiddleContentSec', `Solution|keycount|MiddleContentSec|safe|tab_1`)"
        >
          安全挑战
        </div>
        <div class="jdc_compaign_tab_item two"
          :clstag="`Solution|keycount|MiddleContentSec|safe|tab_2`"
          @click="gaEventTrigger('Solution|keycount|MiddleContentSec', `Solution|keycount|MiddleContentSec|safe|tab_2`)"
        >
          解决方案
        </div>
        <div class="jdc_compaign_tab_item three"
          :clstag="`Solution|keycount|MiddleContentSec|safe|tab_3`"
          @click="gaEventTrigger('Solution|keycount|MiddleContentSec', `Solution|keycount|MiddleContentSec|safe|tab_3`)"
        >
          客户价值
        </div>
        <div class="jdc_compaign_tab_item four"
          :clstag="`Solution|keycount|MiddleContentSec|safe|tab_4`"
          @click="gaEventTrigger('Solution|keycount|MiddleContentSec', `Solution|keycount|MiddleContentSec|safe|tab_4`)"
        >
          成功案例
        </div>
        <div class="jdc_compaign_tab_item five"
          :clstag="`Solution|keycount|MiddleContentSec|safe|tab_5`"
          @click="gaEventTrigger('Solution|keycount|MiddleContentSec', `Solution|keycount|MiddleContentSec|safe|tab_5`)"
        >
          推荐产品
        </div>
        <div class="jdc_compaign_tab_item six"
          :clstag="`Solution|keycount|MiddleContentSec|safe|tab_6`"
          @click="gaEventTrigger('Solution|keycount|MiddleContentSec', `Solution|keycount|MiddleContentSec|safe|tab_6`)"
        >
          联系我们
        </div>
      </div>
    </div>
    <!-- 顶部tab栏 end -->
    <div class="jdc_compaign_service">
      <div class="jdc_compaign_service_right">
        <div
          class="mod_hang_appeal_btn goBottom contact_us clickEvent"
          data-event="contactUsModalMobile"
          @click="goBottom"
        >
          <p>联系</p>
          <p>我们</p>
        </div>
        <div
          class="mod_hang_appeal_btn show_left_modal"
          @click="showLeftModal"
          :clstag="`Solution|keycount|MiddleContentSec|safe|showLeftModal`"
        ><i class="newfont"></i><span>咨询反馈</span></div>
        <div class="mod_hang_qrcode mod_hang_top">
          <a
            data-ga="ContactUsSec_返回顶部"
            data-cate="ContactUsSec"
            class="mod_hang_qrcode_btn"
            href="javascript:;"
            @click="goTop"
            :clstag="`Solution|keycount|MiddleContentSec|safe|goTop`"
          >
            <i class="newfont"></i>
            <span>返回顶部</span>
          </a>
        </div>
      </div>
      <div class="jdc_compaign_service_left">
        <img
          src="/static/img/safe/icon_remove.png"
          alt=""
          class="jdc_compaign_service_close clickEvent"
          data-event="closeModal"
          id="closeModal"
          @click="closeLeftModal"
          :clstag="`Solution|keycount|MiddleContentSec|safe|closeLeftModal`"
        >
        <p class="jdc_compaign_service_left_title">联系我们</p>
        <p class="jdc_compaign_service_left_desc">安全解决方案详情垂询，针对您的业务场景，专业工程师帮助您解决疑问</p>
        <button
          class="jdc_compaign_service_btn jdc_bg goBottom jdc_btn_hover clickEvent"
          data-event="contactUsModal"
          @click="goBottom"
          :clstag="`Solution|keycount|MiddleContentSec|safe|goBottom`"
        >快来上云</button>
      </div>
    </div>
    <div
      class="jdc_compaign_content one"
      id="content01"
    >
      <h2 class="jdc_compaign_content_title">
        安全挑战
      </h2>
      <p class="jdc_compaign_content_desc_title">IP高防+Web应用防火墙的最佳部署应用场景包括游戏、金融、电商、互联网、政企等</p>
      <p class="jdc_compaign_content_desc_title">京东云内和云外的各类型用户，帮助用户解决”棘手”的安全问题</p>
      <div class="jdc_compaign_content_inner content_container">
        <div class="jdc_compaign_content_inner_left">
          <div
            class="jdc_compaign_video_item clickEvent"
            @click="playVideo"
            data-src="http://jdc-static.oss.cn-north-1.jcloudcs.com/jdc-about-static/yunduoshuo/07security.mp4"
            data-event="VideoSecurityLClick"
            :clstag="`Solution|keycount|MiddleContentSec|safe|player_btn`"
          >
            <div class="jdc_compaign_video_item_img_wrap">
              <div class="video_mask"></div>
              <img
                src="/static/img/safe/player_btn.png"
                class="jdc_compaign_video_item_player_btn"
                alt=""
              >
              <img
                class="jdc_compaign_video_item_img"
                src="/static/img/safe/poster01.jpg"
              />
              <img
                class="jdc_compaign_video_item_img_mobile"
                src="/static/img/safe/poster01_mobile.png"
              />
            </div>
            <p>云端安全部署</p>
          </div>
        </div>
        <div class="jdc_compaign_content_inner_right hidden-xs">
          <div class="jdc_compaign_content_inner_right_top">
            <div>
              <div class="jdc_compaign_content_inner_right_top_item_main">
                <div class="img_wrap">
                  <img
                    src="/static/img/safe/solve_icon01.png"
                    alt="DDoS 攻击清洗"
                  >
                </div>
                <p>DDoS 攻击清洗</p>
              </div>
              <p class="jdc_compaign_content_inner_right_top_item_desc">
                IP 高防支持电信+联通+移动线路，机房集群高达 1000G+的清洗能力，单线最大支持400G的清洗，能从容应对各种大流量 DDoS 攻击，保证用户的业务能够平稳安全地运行。
              </p>
            </div>
            <div>
              <div class="jdc_compaign_content_inner_right_top_item_main">
                <div class="img_wrap">
                  <img
                    src="/static/img/safe/solve_icon02.png"
                    alt="CC 攻击防护"
                  >
                </div>
                <p>CC 攻击防护</p>
              </div>
              <p class="jdc_compaign_content_inner_right_top_item_desc">
                网站被大量的恶意 CC 请求攻击时，由于长时间占用核心资源，如 CPU、内存导致网站业务响应缓慢或无法正常提供服务。Web 应用防火墙能够精准高效缓解 CC 攻击，过滤垃圾访问。
              </p>
            </div>
            <div>
              <div class="jdc_compaign_content_inner_right_top_item_main">
                <div class="img_wrap">
                  <img
                    src="/static/img/safe/solve_icon03.png"
                    alt="网页防篡改"
                  >
                </div>
                <p>网页防篡改</p>
              </div>
              <p class="jdc_compaign_content_inner_right_top_item_desc">
                当攻击者将服务端的静态网页篡改后，Web 应用防火墙将缓存的未被篡改的网页返回给Web 访问者，保证Web 访问者访问的是正确的页面。
              </p>
            </div>
          </div>
          <div class="jdc_compaign_content_inner_right_bottom">
            <div>
              <div class="jdc_compaign_content_inner_right_top_item_main">
                <div class="img_wrap">
                  <img
                    src="/static/img/safe/solve_icon04.png"
                    alt="网页防爬虫"
                  >
                </div>
                <p>网页防爬虫</p>
              </div>
              <p class="jdc_compaign_content_inner_right_top_item_desc">
                网站被黑客或攻击者恶意爬虫，导致网站业务缓慢，网站信息被窃取。Web 应用防火墙通过 cookie 防护、验证码防护、封禁防护等手段，防止恶意扫描。
              </p>
            </div>
            <div>
              <div class="jdc_compaign_content_inner_right_top_item_main">
                <div class="img_wrap">
                  <img
                    src="/static/img/safe/solve_icon05.png"
                    alt="网页防挂马"
                  >
                </div>
                <p>网页防挂马</p>
              </div>
              <p class="jdc_compaign_content_inner_right_top_item_desc">
                面对黑客对网站进行渗透注入，窃取管理员权限，网站留下暗链，篡改网站页面内容等问题，Web应用防火墙可帮助用户根据业务要求选择开启三种相应的防护策略，消除应用层安全威胁。
              </p>
            </div>
            <div>
              <div class="jdc_compaign_content_inner_right_top_item_main">
                <div class="img_wrap">
                  <img
                    src="/static/img/safe/solve_icon06.png"
                    alt="防暴力破解"
                  >
                </div>
                <p>防暴力破解</p>
              </div>
              <p class="jdc_compaign_content_inner_right_top_item_desc">
                暴力破解等非正常手段扰乱客户正常运营模式，Web应用防火墙可通过精准访问控制和定制化规则配置，针对恶意刷单、机器人强力破解等进行全方位有效防护。
              </p>
            </div>
          </div>
        </div>
        <div class="jdc_compaign_content_inner_right_m visible-xs">
          <div class="jdc_compaign_content_inner_right_inner">
            <div>
              <div class="jdc_compaign_content_inner_right_top_item_main">
                <div class="img_wrap">
                  <img
                    src="/static/img/safe/solve_m_icon01.png"
                    alt="DDoS 攻击清洗"
                  >
                </div>
                <p>DDoS 攻击清洗</p>
              </div>
              <p class="jdc_compaign_content_inner_right_top_item_desc">
                IP 高防支持电信+联通+移动线路，机房集群高达 1000G+的清洗能力，单线最大支持400G的清洗，能从容应对各种大流量 DDoS 攻击，保证用户的业务能够平稳安全地运行。
              </p>
            </div>
            <div>
              <div class="jdc_compaign_content_inner_right_top_item_main">
                <div class="img_wrap">
                  <img
                    src="/static/img/safe/solve_m_icon02.png"
                    alt="CC 攻击防护"
                  >
                </div>
                <p>CC 攻击防护</p>
              </div>
              <p class="jdc_compaign_content_inner_right_top_item_desc">
                网站被大量的恶意 CC 请求攻击时，由于长时间占用核心资源，如 CPU、内存导致网站业务响应缓慢或无法正常提供服务。Web 应用防火墙能够精准高效缓解 CC 攻击，过滤垃圾访问。
              </p>
            </div>
          </div>
          <div class="jdc_compaign_content_inner_right_inner">
            <div>
              <div class="jdc_compaign_content_inner_right_top_item_main">
                <div class="img_wrap">
                  <img
                    src="/static/img/safe/solve_m_icon03.png"
                    alt="网页防篡改"
                  >
                </div>
                <p>网页防篡改</p>
              </div>
              <p class="jdc_compaign_content_inner_right_top_item_desc">
                当攻击者将服务端的静态网页篡改后，Web 应用防火墙将缓存的未被篡改的网页返回给Web 访问者，保证Web 访问者访问的是正确的页面。
              </p>
            </div>
            <div>
              <div class="jdc_compaign_content_inner_right_top_item_main">
                <div class="img_wrap">
                  <img
                    src="/static/img/safe/solve_m_icon04.png"
                    alt="网页防爬虫"
                  >
                </div>
                <p>网页防爬虫</p>
              </div>
              <p class="jdc_compaign_content_inner_right_top_item_desc">
                网站被黑客或攻击者恶意爬虫，导致网站业务缓慢，网站信息被窃取。Web 应用防火墙通过 cookie 防护、验证码防护、封禁防护等手段，防止恶意扫描。
              </p>
            </div>
          </div>
          <div class="jdc_compaign_content_inner_right_inner">
            <div>
              <div class="jdc_compaign_content_inner_right_top_item_main">
                <div class="img_wrap">
                  <img
                    src="/static/img/safe/solve_m_icon05.png"
                    alt="网页防挂马"
                  >
                </div>
                <p>网页防挂马</p>
              </div>
              <p class="jdc_compaign_content_inner_right_top_item_desc">
                面对黑客对网站进行渗透注入，窃取管理员权限，网站留下暗链，篡改网站页面内容等问题，Web应用防火墙可帮助用户根据业务要求选择开启三种相应的防护策略，消除应用层安全威胁。
              </p>
            </div>
            <div>
              <div class="jdc_compaign_content_inner_right_top_item_main">
                <div class="img_wrap">
                  <img
                    src="/static/img/safe/solve_m_icon06.png"
                    alt="防暴力破解"
                  >
                </div>
                <p>防暴力破解</p>
              </div>
              <p class="jdc_compaign_content_inner_right_top_item_desc">
                暴力破解等非正常手段扰乱客户正常运营模式，Web应用防火墙可通过精准访问控制和定制化规则配置，针对恶意刷单、机器人强力破解等进行全方位有效防护。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="jdc_compaign_content two" id="content02">
            <div class="content_container">
                <h2 class="jdc_compaign_content_title">
                    客户业务场景安全挑战
                </h2>
                <div class="jdc_compaign_content_inner">
                    <div class="jdc_compaign_content_inner_item">
                        <div class="jdc_compaign_content_inner_item_title jdc_bg">
                            <img src="/static/img/safe/network_icon.png" alt="">
                            网络安全威胁
                        </div>
                        <div class="jdc_compaign_content_inner_item_content">
                            <p>网站遭受DDoS攻击/CC攻击，导致无法访问。</p>
                            <p>网页被挂马，内容被篡改，损害网站公信力。</p>
                            <p>SQL注入和XSS注入等应用层攻击造成重要数据丢失，客户利益受到损害。</p>
                        </div>
                    </div>
                    <div class="jdc_compaign_content_inner_item">
                        <div class="jdc_compaign_content_inner_item_title jdc_bg">
                            <img src="/static/img/safe/business_icon.png" alt="">
                            业务安全威胁
                        </div>
                        <div class="jdc_compaign_content_inner_item_content">
                            <p>大量恶意注册，恶意刷单扰乱业务发展。</p>
                            <p>暴力破解，撞库，盗号导致数据安全受到威胁。</p>
                            <p>批量发帖，垃圾评论/邮件影响客户正常运营。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    <div
      class="jdc_compaign_content two"
      id="content02"
    >
      <h2 class="jdc_compaign_content_title">
        解决方案
      </h2>
      <div class="switch_tab">
        <div class="tab_item active"
          :clstag="`Solution|keycount|MiddleContentSec|safe|switch_tab_1`"
          @click="gaEventTrigger('Solution|keycount|MiddleContentSec', `Solution|keycount|MiddleContentSec|safe|switch_tab_1`)"
        >部署方案1</div>
        <div class="tab_item"
          :clstag="`Solution|keycount|MiddleContentSec|safe|switch_tab_2`"
                @click="gaEventTrigger('Solution|keycount|MiddleContentSec', `Solution|keycount|MiddleContentSec|safe|switch_tab_2`)"
        >部署方案2</div>
      </div>
      <ul class="jdc_compaign_content_inner content_container jdc_compaign_content_inner_tab_content">
        <li class="jdc_compaign_content_inner_tab_content_item current">
          <div class="jdc_compaign_content_inner_left">
            <img
              src="/static/img/safe/solution_img01.png"
              alt=""
            >
          </div>
          <div class="jdc_compaign_content_inner_right">
            <div class="jdc_compaign_content_inner_right_title">
              产品简介
            </div>
            <div class="jdc_compaign_content_inner_section">
              <div class="jdc_compaign_content_inner_section_title hidden-xs">
                <i class="jdc_bg"></i>IP高防<span></span>
              </div>
              <p class="jdc_compaign_content_inner_section_desc">
                IP高防是针对互联网服务器在遭受大流量的DDoS攻击后导致服务不可用的情况下，推出的付费增值服务。用户开通IP高防服务提供的IP地址上，经过IP高防服务对所有异常流量的实时检测和清洗，确保仅正常流量可回源到用户服务器，从而保证了源站的稳定可靠。
              </p>
              <a
                class="jdc_compaign_content_inner_section_desc link clickEvent"
                href="https://www.jdcloud.com/products/ipanti"
                target="_blank"
                data-event="IPClick"
                :clstag="`Solution|keycount|MiddleContentSec|safe|href_1`"
                @click="gaEventTrigger('Solution|keycount|MiddleContentSec', `Solution|keycount|MiddleContentSec|safe|href_1`)"
              >查看详情 <span></span></a>
            </div>
            <div class="jdc_compaign_content_inner_section">
              <div class="jdc_compaign_content_inner_section_title hidden-xs">
                <i class="jdc_bg"></i>Web应用防火墙<span></span>
              </div>
              <p class="jdc_compaign_content_inner_section_desc">
                Web应用防火墙（Web Application Firewall）是京东云推出的专业的安全防护服务。可以防御SQL注入、XSS跨站脚本、常见Web服务器插件漏洞、木马上传等OWASP常见攻击，抵御恶意CC攻击，为用户的网站保驾护航。
              </p>
              <a
                class="jdc_compaign_content_inner_section_desc link clickEvent"
                href="https://www.jdcloud.com/products/waf"
                target="_blank"
                data-event="WebClick"
                :clstag="`Solution|keycount|MiddleContentSec|safe|href_2`"
                @click="gaEventTrigger('Solution|keycount|MiddleContentSec', `Solution|keycount|MiddleContentSec|safe|href_2`)"
              >查看详情 <span></span></a>
            </div>
          </div>
        </li>
        <li class="jdc_compaign_content_inner_tab_content_item">
          <div class="jdc_compaign_content_inner_left">
            <img
              src="/static/img/safe/solution_img02.png"
              alt=""
            >
          </div>
          <div class="jdc_compaign_content_inner_right">
            <div class="jdc_compaign_content_inner_right_title">
              产品简介
            </div>
            <div class="jdc_compaign_content_inner_section">
              <div class="jdc_compaign_content_inner_section_title hidden-xs">
                <i class="jdc_bg"></i>DDoS防护包<span></span>
              </div>
              <p class="jdc_compaign_content_inner_section_desc">
                DDoS防护包是一款针对业务部署在京东云内的用户，迅速提升其抗DDoS攻击能力的产品。具有配置简单、公网IP不用换、防护能力即买即生效、防护对象能灵活更换等特点。支持京东云内多种业务抗DDoS能力的平滑升级，如云主机、负载均衡、云物理服务器、Web应用防火墙等具有公网IP的服务，有效保障业务的网络安全。
              </p>
              <a
                class="jdc_compaign_content_inner_section_desc link clickEvent"
                href="https://www.jdcloud.com/cn/products/anti-ddos-protection-package"
                target="_blank"
                data-event="ddosClick"
                :clstag="`Solution|keycount|MiddleContentSec|safe|href_3`"
                @click="gaEventTrigger('Solution|keycount|MiddleContentSec', `Solution|keycount|MiddleContentSec|safe|href_3`)"
              >查看详情 <span></span></a>
            </div>
            <div class="jdc_compaign_content_inner_section">
              <div class="jdc_compaign_content_inner_section_title hidden-xs">
                <i class="jdc_bg"></i>应用安全网关<span></span>
              </div>
              <p class="jdc_compaign_content_inner_section_desc">
                应用安全网关是对网站或者APP服务进行可视化安全分析和应用层威胁防护的产品。通过提供WAF、用户访问审计、业务安全可视和合规性检查等功能，保障业务稳定可持续运行，提升用户体验，为网络服务提供者解决HTTP/HTTPS业务因攻击导致的异常或合规性问题。应用安全网关既可以绑定公网IP的负载均衡绑定，也可与VPC内部工作的负载均衡进行协同工作，可以同时防御来自互联网和来自VPC内部的攻击。
              </p>
              <a
                class="jdc_compaign_content_inner_section_desc link clickEvent"
                href="https://www.jdcloud.com/cn/products/application-security-gateway"
                target="_blank"
                data-event="applicationSecurityGatewayClick"
                :clstag="`Solution|keycount|MiddleContentSec|safe|href_4`"
                @click="gaEventTrigger('Solution|keycount|MiddleContentSec', `Solution|keycount|MiddleContentSec|safe|href_4`)"
              >查看详情 <span></span></a>
            </div>
          </div>
        </li>
      </ul>
      <div class="tab-content">
        <div class="tab-item current">
          <div class="tab-item-title jdcfont jdc-common-arr active">
            <h4>部署方案1</h4>
          </div>
          <div class="tab-item-content">
            <div class="tab-item-img">
              <img src="/static/img/safe/solution_img01.png">
            </div>
            <div class="jdc_compaign_content_inner_section">
              <p class="jdc_compaign_content_inner_section_title">
                <a
                  class="link clickEvent"
                  href="https://www.jdcloud.com/products/ipanti"
                  target="_blank"
                  data-event="IPClick"
                  :clstag="`Solution|keycount|MiddleContentSec|safe|href_5`"
                @click="gaEventTrigger('Solution|keycount|MiddleContentSec', `Solution|keycount|MiddleContentSec|safe|href_5`)"
                ><i class="jdc_bg"></i>IP高防<span></span></a>
              </p>
              <p class="jdc_compaign_content_inner_section_desc">
                IP高防是针对互联网服务器在遭受大流量的DDoS攻击后导致服务不可用的情况下，推出的付费增值服务。用户开通IP高防服务提供的IP地址上，经过IP高防服务对所有异常流量的实时检测和清洗，确保仅正常流量可回源到用户服务器，从而保证了源站的稳定可靠。
              </p>
            </div>
            <div class="jdc_compaign_content_inner_section">
              <p class="jdc_compaign_content_inner_section_title">
                <a
                  class="link clickEvent"
                  href="https://www.jdcloud.com/products/waf"
                  target="_blank"
                  data-event="WebClick"
                  :clstag="`Solution|keycount|MiddleContentSec|safe|href_6`"
                @click="gaEventTrigger('Solution|keycount|MiddleContentSec', `Solution|keycount|MiddleContentSec|safe|href_6`)"
                ><i class="jdc_bg"></i>Web应用防火墙<span></span></a>
              </p>
              <p class="jdc_compaign_content_inner_section_desc">
                Web应用防火墙（Web Application Firewall）是京东云推出的专业的安全防护服务。可以防御SQL注入、XSS跨站脚本、常见Web服务器插件漏洞、木马上传等OWASP常见攻击，抵御恶意CC攻击，为用户的网站保驾护航。
              </p>
            </div>
          </div>
        </div>
        <div class="tab-item">
          <div class="tab-item-title jdcfont jdc-common-arr">
            <h4>部署方案2</h4>
          </div>
          <div class="tab-item-content">
            <div class="tab-item-img">
              <img src="/static/img/safe/solution_img02.png">
            </div>
            <div class="jdc_compaign_content_inner_section">
              <p class="jdc_compaign_content_inner_section_title">
                <a
                  class="link clickEvent"
                  href="https://www.jdcloud.com/cn/products/anti-ddos-protection-package"
                  target="_blank"
                  data-event="ddosClick"
                  :clstag="`Solution|keycount|MiddleContentSec|safe|href_7`"
                @click="gaEventTrigger('Solution|keycount|MiddleContentSec', `Solution|keycount|MiddleContentSec|safe|href_7`)"
                ><i class="jdc_bg"></i>DDoS防护包<span></span></a>
              </p>
              <p class="jdc_compaign_content_inner_section_desc">
                DDoS防护包是一款针对业务部署在京东云内的用户，迅速提升其抗DDoS攻击能力的产品。具有配置简单、公网IP不用换、防护能力即买即生效、防护对象能灵活更换等特点。支持京东云内多种业务抗DDoS能力的平滑升级，如云主机、负载均衡、云物理服务器、Web应用防火墙等具有公网IP的服务，有效保障业务的网络安全。
              </p>
            </div>
            <div class="jdc_compaign_content_inner_section">
              <p class="jdc_compaign_content_inner_section_title">
                <a
                  class="link clickEvent"
                  href="https://www.jdcloud.com/cn/products/application-security-gateway"
                  target="_blank"
                  data-event="applicationSecurityGatewayClick"
                  :clstag="`Solution|keycount|MiddleContentSec|safe|href_8`"
                  @click="gaEventTrigger('Solution|keycount|MiddleContentSec', `Solution|keycount|MiddleContentSec|safe|href_8`)"
                >
                  <i class="jdc_bg"></i>应用安全网关<span></span>
                </a>
              </p>
              <p class="jdc_compaign_content_inner_section_desc">
                应用安全网关是对网站或者APP服务进行可视化安全分析和应用层威胁防护的产品。通过提供WAF、用户访问审计、业务安全可视和合规性检查等功能，保障业务稳定可持续运行，提升用户体验，为网络服务提供者解决HTTP/HTTPS业务因攻击导致的异常或合规性问题。应用安全网关既可以绑定公网IP的负载均衡绑定，也可与VPC内部工作的负载均衡进行协同工作，可以同时防御来自互联网和来自VPC内部的攻击。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="jdc_compaign_content three jdc_bg"
      id="content03"
    >
      <div class="content_container">
        <div class="jdc_compaign_content_title">
          客户价值
        </div>
        <div class="jdc_compaign_content_inner">
          <div class="jdc_compaign_content_inner_item">
            <img
              src="/static/img/safe/advantage_icon01.png"
              alt=""
            >
            <div class="jdc_compaign_content_inner_item_content">
              <h2>弹性计费</h2>
              <p>Web应用防火墙测试阶段免费。</p>
              <p>IP高防保底+弹性防护灵活计费，弹性部分按实际攻击值收费，无攻击不收费。</p>
            </div>
          </div>
          <div class="jdc_compaign_content_inner_item">
            <img
              src="/static/img/safe/advantage_icon02.png"
              alt=""
            >
            <div class="jdc_compaign_content_inner_item_content">
              <h2>源站隐藏</h2>
              <p>支持将用户站点和DNS解析服务安全隐藏，确保用户关键基础设施不被攻击，降低基础设施宕机导致的业务风险。</p>
            </div>
          </div>
          <div class="jdc_compaign_content_inner_item">
            <img
              src="/static/img/safe/advantage_icon03.png"
              alt=""
            >
            <div class="jdc_compaign_content_inner_item_content">
              <h2>实时响应</h2>
              <p>7*24小时全天候监控，及时发现攻击事件。并通过短信、邮件、站内信告警实现精准推送由京东云顶尖安全专家团队、攻防团队、技术服务团队和产品研发团队提供产品技术和各类重大时点的保障服务，并针对重大攻击事件和重大漏洞爆发事件提供应急响应。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="jdc_compaign_content four"
      id="content04"
    >
      <div class="content_container">
        <div class="jdc_compaign_content_title">
          成功案例
        </div>
        <div class="jdc_compaign_content_inner content_container">
          <div class="jdc_compaign_content_inner_item">
            <div class="jdc_compaign_content_inner_item_logo_wrap">
              <img
                src="/static/img/safe/logo01.png"
                alt="金蝶"
              >
            </div>
            <div class="jdc_compaign_content_inner_item_mask">
              <h2 class="jdc_compaign_content_inner_item_mask_title"><img
                  src="/static/img/safe/logo01.png"
                  alt=""
                  class="jindie_logo"
                >金蝶软件</h2>
              <p class="jdc_compaign_content_inner_item_mask_desc">京东云助力金蝶构筑安全的混合云方案，根据客户特定场景下的安全需求，为客户提供定制化的Web 应用防火墙安全规则和配置，以及精准的 CC 防护、网页防篡改、防爬虫等功能。同时京东云安全专家为金蝶客户提供专业的安全防护服务，保障客户的业务网站持续稳定运行。</p>
              <a
                href="https://www.jdcloud.com/case/detail/5"
                class="jdc_compaign_content_inner_item_mask_link"
                target="_blank"
                :clstag="`Solution|keycount|MiddleContentSec|safe|href_9`"
                @click="gaEventTrigger('Solution|keycount|MiddleContentSec', `Solution|keycount|MiddleContentSec|safe|href_9`)"
              >查看详情<span></span></a>
            </div>
          </div>
          <div class="jdc_compaign_content_inner_item">
            <div class="jdc_compaign_content_inner_item_logo_wrap">
              <img
                src="/static/img/safe/logo02.png"
                alt="宿迁市政府"
              >
            </div>
            <div class="jdc_compaign_content_inner_item_mask">
              <h2 class="jdc_compaign_content_inner_item_mask_title"><img
                  src="/static/img/safe/logo02.png"
                  alt=""
                  class="suqian_logo"
                >宿迁市政府</h2>
              <p class="jdc_compaign_content_inner_item_mask_desc">京东云为宿迁市政府本地机房部署安全监测和防护组件，正常请求和应答的数据无需经过云端节点，一旦攻击流量超过本地防护阈值，可自动迁移上云，利用云端 IP 高防节点进行清洗，这种“非常态化上云”的协同防御模式满足宿迁市政府对数据自主可控和本地业务安全合规监管要求。</p>
              <a
                href="https://www.jdcloud.com/case/detail/1"
                class="jdc_compaign_content_inner_item_mask_link"
                target="_blank"
                :clstag="`Solution|keycount|MiddleContentSec|safe|href_10`"
                @click="gaEventTrigger('Solution|keycount|MiddleContentSec', `Solution|keycount|MiddleContentSec|safe|href_10`)"
              >查看详情<span></span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="jdc_compaign_content five"
      id="content05"
    >
      <div class="content_container">
        <div class="jdc_compaign_content_title">
          推荐产品
        </div>
        <div class="jdc_compaign_content_inner content_container">
          <div class="jdc_compaign_content_inner_item">
            <h2 class="jdc_compaign_content_inner_item_title">Web应用防火墙</h2>
            <p class="jdc_compaign_content_inner_item_desc">针对网站业务流量进行恶意特征识别及防护，避免网站服务器被恶意入侵，保障业务的核心数据安全。</p>
            <p class="jdc_compaign_content_inner_item_price"><span>¥3880.00</span>/月</p>
            <a
              href="https://cloudwaf-console.jdcloud.com/overview/business"
              class="clickEvent"
              data-event="buyWebClick"
              target="_blank"
            >
              <button class="jdc_compaign_content_inner_item_btn jdc_btn_hover"
                :clstag="`Solution|keycount|MiddleContentSec|safe|buy_btn_1`"
                @click="gaEventTrigger('Solution|keycount|MiddleContentSec', `Solution|keycount|MiddleContentSec|safe|buy_btn_1`)"
              >立即购买</button>
            </a>
          </div>
          <div class="jdc_compaign_content_inner_item">
            <h2 class="jdc_compaign_content_inner_item_title">IP高防</h2>
            <p class="jdc_compaign_content_inner_item_desc">针对遭受大流量的DDoS攻击的用户提供增值防护的服务。通过将业务IP替换成高防IP的方式，隐藏源站。</p>
            <p class="jdc_compaign_content_inner_item_price"><span>¥6000.00</span>/月</p>
            <a
              href="https://ip-anti-console.jdcloud.com/instancelist"
              class="clickEvent"
              data-event="buyIPClick"
              target="_blank"
            >
              <button class="jdc_compaign_content_inner_item_btn jdc_btn_hover"
                :clstag="`Solution|keycount|MiddleContentSec|safe|buy_btn_1`"
                @click="gaEventTrigger('Solution|keycount|MiddleContentSec', `Solution|keycount|MiddleContentSec|safe|buy_btn_1`)"
              >立即购买</button>
            </a>
          </div>
          <div class="jdc_compaign_content_inner_item">
            <h2 class="jdc_compaign_content_inner_item_title">应用安全网关</h2>
            <p class="jdc_compaign_content_inner_item_desc">针对网站或APP服务进行可视化安全分析和应用层威胁防护。通过提供WAF、用户访问审计、业务安全可视和合规性检查等功能，保障业务稳定可持续运行。</p>
            <p class="jdc_compaign_content_inner_item_price"><span>¥299.00</span>/月</p>
            <a
              href="https://sgw-console.jdcloud.com/jsecvpcwaf/dashboard"
              class="clickEvent"
              data-event="buyGatewayClick"
              target="_blank"
            >
              <button class="jdc_compaign_content_inner_item_btn jdc_btn_hover"
              :clstag="`Solution|keycount|MiddleContentSec|safe|buy_btn_3`"
                @click="gaEventTrigger('Solution|keycount|MiddleContentSec', `Solution|keycount|MiddleContentSec|safe|buy_btn_3`)"
              >立即购买</button>
            </a>
          </div>
          <div class="jdc_compaign_content_inner_item">
            <h2 class="jdc_compaign_content_inner_item_title">DDoS防护包</h2>
            <p class="jdc_compaign_content_inner_item_desc">针对业务部署在京东云内的用户，迅速提升其抗DDoS攻击能力的产品。具有配置简单、公网IP不用换、防护能力即买即生效、防护对象能灵活更换等特点。</p>
            <p class="jdc_compaign_content_inner_item_price"><span>¥100.00</span>/月</p>
            <a
              href="https://antiddos-console.jdcloud.com/gz/ddos/protection-open"
              class="clickEvent"
              data-event="buyDDosClick"
              target="_blank"
            >
              <button class="jdc_compaign_content_inner_item_btn jdc_btn_hover"
                :clstag="`Solution|keycount|MiddleContentSec|safe|buy_btn_4`"
                @click="gaEventTrigger('Solution|keycount|MiddleContentSec', `Solution|keycount|MiddleContentSec|safe|buy_btn_4`)"
              >立即购买</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="jdc_compaign_content six"
      id="content06"
    >
      <h2 class="jdc_compaign_content_title content_container">
        <p>联系我们</p>
      </h2>
      <div class="jdc_compaign_content_inner content_container">
        <div class="jdc_compaign_content_inner_input_wrap">
          <label for="name">姓名<span>*</span></label>
          <input
            v-model="name"
            type="text"
            id="name"
            name="name"
          >
          <p class="error_text"></p>
        </div>
        <div class="jdc_compaign_content_inner_input_wrap">
          <label for="email">邮箱<span>*</span></label>
          <input
            v-model="email"
            type="text"
            id="email"
            name="email"
          >
          <p class="error_text"></p>
        </div>
        <div class="jdc_compaign_content_inner_input_wrap">
          <label for="mobile">手机<span>*</span></label>
          <input
            v-model="mobile"
            type="tel"
            id="mobile"
            name="mobile"
          >
          <p class="error_text"></p>
        </div>
        <div class="jdc_compaign_content_inner_input_wrap">
          <label for="company">公司<span>*</span></label>
          <input
            v-model="company"
            type="text"
            id="company"
            name="company"
          >
          <p class="error_text"></p>
        </div>
        <div class="jdc_compaign_content_inner_input_wrap selectWrap">
          <label for="industry">行业</label>
          <select
            id="industry"
            class="selectIndustry"
            name="industry"
          >
            <option></option>
          </select>
        </div>
        <div class="jdc_compaign_content_inner_input_wrap selectWrap selectDutyWrap">
          <label for="duty">职务</label>
          <select
            id="duty"
            class="selectDuty"
            name="duty"
          >
            <option></option>
          </select>
        </div>
      </div>
      <button
        class="jdc_compaign_content_btn jdc_btn_hover"
        id="submit_btn"
        @click="submitForm"
        :clstag="`Solution|keycount|MiddleContentSec|safe|submitForm`"
        
      >提交</button>
    </div>
    <div class="success_feedback">
      <div class="success_feedback_mask">
      </div>
      <div class="success_feedback_modal">
        <div class="success_feedback_modal_title">
          提示
          <img
            src="/static/img/safe/icon_remove_spec.png"
            alt=""
            class="close_feedback"
            @click="closeFeedback"
            :clstag="`Solution|keycount|MiddleContentSec|safe|closeFeedback`"
          >
        </div>
        <div class="success_feedback_modal_content success">
          <img
            src="/static/img/safe/success_icon.png"
            alt=""
          >
          <p>感谢您的信任</p>
          <p>我们将在三个工作日内与您取得联系</p>
        </div>
        <div class="success_feedback_modal_content fail">
          <img
            src="/static/img/safe/fail_icon.png"
            alt=""
          >
          <p>系统繁忙，请稍后再试</p>
        </div>
        <div class="success_feedback_modal_footer">
          <button
            class="success_feedback_modal_btn jdc_bg close_feedback"
            @click="closeFeedback"
            :clstag="`Solution|keycount|MiddleContentSec|safe|closeFeedback`"
          >关闭</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $:true */
import apiUrl from "api";
export default {
  name: "safe",
  data() {
    return {
      VIEWFROM: "企业级应用安全纵深防御解决方案",
      EVENTURL: `${window.location.protocol}//visits.jdcloud.com/security/event`, // 事件采集url
      industryList: [
        // 行业列表
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
      ],
      dutyList: [
        // 职务列表
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
      ],
      name: "",
      email: "",
      mobile: "",
      company: "",
      industry: '', // 行业
      duty: '', // 职务
      demandText: '',
      fromEvent: ''

    };
  },
  methods: {
    /**
     * 吸顶函数，需结合css实现。
     */
    ceiling(obj, originalClass) {
      const ot = obj.offsetTop;
      // const $about = $('#about');
      const $content01 = $("#content01");
      const $content02 = $("#content02");
      const $content03 = $("#content03");
      const $content04 = $("#content04");
      const $content05 = $("#content05");
      const $content06 = $("#content06");

      document.onscroll = function() {
        const st =
          document.body.scrollTop || document.documentElement.scrollTop;
        // console.log('st', st);
        // console.log($(".jdc_compaign_service_left").css("display"));
        // const showFlag = !window.sessionStorage.getItem('isClose') && $('.jdc_compaign_service_left').css('display') === 'none' // 是否出现弹框的flag
        switch (true) {
          case st < $content01[0].offsetTop + $content01.height() - 10:
            // if (showFlag) $('.jdc_compaign_service_left').show(500)
            if ($(".jdc_compaign_service_left").css("display") === "block")
              $(".jdc_compaign_service_left").hide(500);
            $(".jdc_compaign_tab_item.one")
              .addClass("active")
              .siblings()
              .removeClass("active");
            break;
          case st >= $content01[0].offsetTop + $content01.height() - 10 &&
            st < $content02[0].offsetTop + $content02.height():
            // if (showFlag) $('.jdc_compaign_service_left').show(500)
            $(".jdc_compaign_tab_item.two")
              .addClass("active")
              .siblings()
              .removeClass("active");
            break;
          case st >= $content02[0].offsetTop + $content02.height() &&
            st < $content03[0].offsetTop + $content03.height():
            // if (showFlag) $('.jdc_compaign_service_left').show(500)
            $(".jdc_compaign_tab_item.three")
              .addClass("active")
              .siblings()
              .removeClass("active");
            break;
          case st >= $content03[0].offsetTop + $content03.height() &&
            st < $content04[0].offsetTop + $content04.height():
            // if (showFlag) $('.jdc_compaign_service_left').show(500)
            $(".jdc_compaign_tab_item.four")
              .addClass("active")
              .siblings()
              .removeClass("active");
            break;
          case st >= $content04[0].offsetTop + $content04.height() &&
            st < $content05[0].offsetTop + $content05.height():
            $(".jdc_compaign_tab_item.five")
              .addClass("active")
              .siblings()
              .removeClass("active");
            break;
          case st > $content05[0].offsetTop + $content05.height() &&
            st < $content06[0].offsetTop + $content06.height():
            $(".jdc_compaign_tab_item.six")
              .addClass("active")
              .siblings()
              .removeClass("active");
            break;
          case st > $content06[0].offsetTop - 150:
            $(".jdc_compaign_tab_item.seven")
              .addClass("active")
              .siblings()
              .removeClass("active");
            break;
        }
        obj.setAttribute(
          "class",
          st >= ot ? `fixPosition ${originalClass}` : originalClass
        );
        if ($("body").width() > 768) {
          st >= ot
            ? $content01.css("padding-top", "60px")
            : $content01.css("padding-top", "0");
          // st >= ot ? $('.jdc_compaign_service').show() : $('.jdc_compaign_service').hide();
          st > 300
            ? $(".jdc_compaign_service").show()
            : $(".jdc_compaign_service").hide();
        } else {
          $content01.css("padding-top", "30px");
          $(".jdc_compaign_service").show();
        }
      };
    },
    /**
     * 提交表单
     */
    submitForm() {
      let success_flag = true;
      let industry = $("#industry").val();
      let duty = $("#duty").val();
      this.fromEvent = $("#from").val();
      this.demandText = $("#demand").val();
      const checkEmail = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
      const checkMobile = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;

      $.each(this.industryList, (index, item) => {
        if (industry == item.id) { // ===娶不到 string number
          this.industry = item.text;
        }
      });
      $.each(this.dutyList, (index, item) => {
        if (duty == item.id) {
          this.duty = item.text;
        }
      });

      $("input")
        .removeClass("error")
        .siblings("p")
        .html("");
      if (!this.name) {
        $("#name")
          .addClass("error")
          .siblings("p")
          .html("姓名为必填项");
        success_flag = false;
      }
      if (!this.email) {
        $("#email")
          .addClass("error")
          .siblings("p")
          .html("邮箱为必填项");
        success_flag = false;
      }

      if (this.email && !checkEmail.test(this.email)) {
        $("#email")
          .addClass("error")
          .siblings("p")
          .html("邮箱格式有误，请重新输入");
        success_flag = false;
      }

      if (!this.mobile) {
        $("#mobile")
          .addClass("error")
          .siblings("p")
          .html("手机为必填项");
        success_flag = false;
      }

      if (this.mobile && !checkMobile.test(this.mobile)) {
        $("#mobile")
          .addClass("error")
          .siblings("p")
          .html("手机号码格式有误，请重新输入");
        success_flag = false;
      }
      if (!this.company) {
        $("#company")
          .addClass("error")
          .siblings("p")
          .html("公司为必填项");
        success_flag = false;
      }
      if (!success_flag) return;
      this.postForm()
      this.gaEventTrigger('Solution|keycount|MiddleContentSec', `Solution|keycount|MiddleContentSec|safe|submitForm`)
    },
    postForm () {
      const _par = {
        formDefId: 11,
        formData: {
          requestorName: this.name,
          email: this.email,
          phone: this.mobile,
          company: this.company,
          industry: this.industry,
          jobTitle: this.duty,
          pageTitle: "企业级应用安全纵深防御_安全解决方案",
          pageURL: "/safe",
          referrerURL: "",
          referrerDomain: "",
          campaignCode: "1",
          deviceType: "",
          isWillingToContact: ''
        }
      };
      var _self = this;
      _par.formData.pageTitle = document.title;
      _par.formData.pageURL = window.location.href;
      _par.formData.referrerURL = sessionStorage.getItem("referrer"); // 进入京东云网站之前访问的网站链接
      _par.formData.referrerDomain = sessionStorage.getItem("referrerDomain"); // 进入京东云网站之前访问的网站域名
      _par.formData.campaignCode = sessionStorage.getItem("campaignCode"); // 收集进入京东云官网带有queryString
      _par.formData.deviceType = "1"; // device
      this.$http.post(apiUrl.api.subscriptionSubmit, _par).then(
        res => {
          if (res.body.code == 0) {
            // this.postVisits();
            this.postEvent();
            $(".success_feedback")
              .show()
              .find(".success_feedback_modal_content.success")
              .show();
            $(".success_feedback")
              .find(".success_feedback_modal_content.fail")
              .hide();
          } else {
            console.log("数据提交失败");
            $(".success_feedback")
              .show()
              .find(".success_feedback_modal_content.fail")
              .show();
            $(".success_feedback")
              .find(".success_feedback_modal_content.success")
              .hide();
            $("body").css("overflow", "hidden");
          }

          this.formLoading = false;
        },
        err => {
          this.formLoading = false;
          console.log(err);
        }
      );
    },
    postVisits() {
      const postURL = `${window.location.protocol}//visits.jdcloud.com/api/v1/user/`;
      let params = {
        username: this.name,
        userpass: "",
        userphone: this.mobile,
        usercompany: this.company,
        useremail: this.email,
        userduty: this.duty,
        userindustry: this.industry,
        viewfrom: this.VIEWFROM,
        userdemand: !this.demandText ? "" : this.demandText
      }
      $.ajax({
        url: postURL,
        type: "POST",
        data: params,
        beforeSend: function(xhr) {},
        success: function(res) {},
        complete: function(XMLHttpRequest, textStatus) {},
        error: function(XMLHttpRequest, textStatus, errorThrown) {}
      });
    },
    postEvent() {
      $.ajax({
        url: this.EVENTURL,
        type: "POST",
        data: {
          event_name: "regeister",
          view_form: this.VIEWFROM
        },
        beforeSend: function(xhr) {},
        success: function(res) {},
        complete: function(XMLHttpRequest, textStatus) {},
        error: function(XMLHttpRequest, textStatus, errorThrown) {}
      });
    },
    /**
     * 关闭左侧联系我们
     */
    closeLeftModal() {
      $(".jdc_compaign_service_left").hide(500);
      window.sessionStorage.setItem("isClose", "1");
    },
    /**
     * 显示左侧联系我们
     */
    showLeftModal() {
      $(".jdc_compaign_service_left").show(500);
    },
    /**
     * 跳转到表单提交
     */
    goBottom () {
      const $content06 = $('#content06')
      $('html, body').animate({
        scrollTop: $content06[0].offsetTop - 60
      }, 500)
      this.gaEventTrigger(`Solution|keycount|CallUs`, `Solution|keycount|CallUs`)
    },
    /**
     * 回到顶部
     */
    goTop() {
      $("html, body").animate(
        {
          scrollTop: 0
        },
        500
      );
    },
    // 关闭提示框
    closeFeedback() {
      $(".success_feedback").hide();
      $("body").css("overflow", "auto");

      $("input").val("");
      $("#industry").val("");
      $("#duty").val("");
      $("#select2-industry-container").html('<span class="select2-selection__placeholder">请选择行业</span></span>')
      $("#select2-duty-container").html('<span class="select2-selection__placeholder">请选择职务</span>')
      this.name = "";
      this.email = "";
      this.mobile = "";
      this.company = "";
      this.industry = "";
      this.duty = "";
      this.fromEvent = "";
      this.demandText = "";
      //window.location.reload();
    },
    // 图片按比例调整大小
    resizeFunc() {
      const $jdc_compaign_video_item_img = $(
        ".jdc_compaign_video_item_img_mobile"
      );
      if ($("body").width() < 1200) {
        $jdc_compaign_video_item_img.css(
          "height",
          ($jdc_compaign_video_item_img.width() * 385) / 685
        );
      }
    },
    // 关闭视频
    closeVideo() {
      const $player = $("video");
      $player[0].pause();
      $(".jdc_compaign_video_wrap").hide();
      $("body").css("overflow", "auto");
    },
    // 播放视频
    playVideo() {
      const $player = $("video");
      $(".jdc_compaign_video_item").on("click", function() {
        let src = $(this).data("src");
        $(".jdc_compaign_video_wrap").show();
        $player.attr("src", src);
        setTimeout(() => {
          $player[0].play();
          $("video").attr("autoplay", "autoplay");
        }, 500);
      });
      this.gaEventTrigger('Solution|keycount|MiddleContentSec', `Solution|keycount|MiddleContentSec|safe|player_btn`)
    },
    // 标题栏切换选中状态
    tabSwitch() {
      const $jdc_compaign_tab_items = $(".jdc_compaign_tab_item");
      const $content01 = $("#content01");
      const $content02 = $("#content02");
      const $content03 = $("#content03");
      const $content04 = $("#content04");
      const $content05 = $("#content05");
      const $content06 = $("#content06");
      const $content07 = $("#content07");

      // 标题栏切换选中状态
      $jdc_compaign_tab_items.on("click", function() {
        const $this = $(this);
        const index = $this.index();
        switch (index) {
          case 0:
            $("html, body").animate(
              {
                scrollTop: $content01[0].offsetTop - 60
              },
              500
            );
            break;
          case 1:
            $("html, body").animate(
              {
                scrollTop: $content02[0].offsetTop - 60
              },
              500
            );
            break;
          case 2:
            $("html, body").animate(
              {
                scrollTop: $content03[0].offsetTop - 60
              },
              500
            );
            break;
          case 3:
            $("html, body").animate(
              {
                scrollTop: $content04[0].offsetTop - 60
              },
              500
            );
            break;
          case 4:
            $("html, body").animate(
              {
                scrollTop: $content05[0].offsetTop - 60
              },
              500
            );
            break;
          case 5:
            $("html, body").animate(
              {
                scrollTop: $content06[0].offsetTop - 60
              },
              500
            );
            break;
          case 6:
            $("html, body").animate(
              {
                scrollTop: $content07[0].offsetTop - 60
              },
              500
            );
            break;
        }
      });
    },
    initSelect2() {
      $(".selectIndustry").select2({
        placeholder: "请选择行业",
        width: "100%",
        data: this.industryList
      });

      $(".selectDuty").select2({
        placeholder: "请选择职务",
        width: "100%",
        data: this.dutyList
      });
    },
    /**
     * 页面初始化
     */
    pageInit() {
      const that = this;
      const $jdc_compaign_top_tab_wrap = $(".jdc_compaign_top_tab_wrap");

      this.initSelect2();
      this.tabSwitch();
      this.resizeFunc();

      /* 标题栏吸顶效果 */
      this.ceiling(
        $jdc_compaign_top_tab_wrap[0],
        "jdc_compaign_top_tab_wrap normal"
      );

      // tab切换PC
      $(".switch_tab .tab_item").on("click", function() {
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

      // 切换tab Mobile
      $(".tab-item-title").on("click", function() {
        $(this)
          .toggleClass("active")
          .parent()
          .toggleClass("current");
      });

      // 阻止移动端遮罩层背后滑动
      $(".success_feedback")[0].addEventListener(
        "touchmove",
        e => {
          e.preventDefault();
        },
        false
      );
    }
  },
  mounted() {
    this.pageInit();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css";
.jdc_compaign_container {
  line-height: 1;
  .wx_logo {
    position: absolute;
    width: 300px;
    height: 300px;
    visibility: hidden;
    z-index: -1;
  }
  // video
  .jdc_compaign_video_wrap {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
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
        background-image: url("/static/img/safe/close.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        cursor: pointer;
        opacity: 0.7;
      }
    }
  }
  .content_container {
    max-width: 1200px;
    margin: 0 auto;
  }
  .jdc_bg {
    background: linear-gradient(80deg, #0989c5 0, #995cb6 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0989c5', endColorstr='#995cb6', GradientType=1);
  }
  .jdc_btn_hover {
    &:hover {
      box-shadow: 0 0 10px 0 rgba(3, 0, 76, 0.3);
    }
  }
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
      float: left;
      background-color: #fff;
      box-sizing: border-box;
      padding: 46px 20px 0 20px;
      font-size: 15px;
      line-height: 1.5;
      text-align: center;
      box-shadow: 0 3px 10px 0 rgba(32, 86, 178, 0.2);
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
          opacity: 0.5;
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
  .jdc_compaign_banner {
    position: relative;
    color: #fff;
    width: 100%;
    height: 530px;
    background-image: url("/static/img/safe/banner_cover.jpg");
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
        // font-weight: 100;
        color: #ffffff;
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
          opacity: 0.5;
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
  .jdc_compaign_top_tab_wrap {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.25);
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
        width: 16.66%;
        float: left;
        cursor: pointer;
        text-align: center;
        border-bottom: 2px solid #f3f5fb;
        white-space: nowrap;
        overflow: hidden;
        &.active {
          background-image: url("/static/img/safe/active_line.png");
          background-size: 100% 4px;
          background-position: top;
          background-repeat: no-repeat;
        }
        // &.two {
        //     width: 19%;
        // }
        // &.one, &.three {
        //      width: 18%;
        // }
        // &.five, &.six, &.seven {
        //     width: 10%;
        // }
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
      background-color: rgba(0, 0, 0, 0.3);
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
        background-color: #f4f5f9;
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
        background-color: #f4f5f9;
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
  .jdc_compaign_content {
    padding: 60px 0;
    .jdc_compaign_content_title {
      font-size: 26px;
      color: #0989c5;
      text-align: center;
      margin-bottom: 50px;
    }
    .tab-content {
      display: none;
    }
    &.six {
      background-color: #fff;
      .jdc_compaign_content_title {
        margin-bottom: 20px;
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
        padding: 0 136px;
        overflow: hidden;
        box-sizing: border-box;
        .jdc_compaign_content_inner_input_wrap {
          position: relative;
          width: 390px;
          float: left;
          margin-left: 40px;
          margin-top: 30px;
          &.selectWrap {
            width: 412px;
            &.selectDutyWrap {
              margin-left: 15px;
            }
          }
          label {
            display: block;
            width: 100%;
            margin-bottom: 10px;
            span {
              color: #ff0000;
            }
          }
          input {
            width: 100%;
            height: 40px;
            line-height: 40px;
            background: rgba(203, 203, 203, 0.09);
            border: 1px solid rgba(151, 151, 151, 0.12);
            box-shadow: inset 0 2px 3px 0 rgba(55, 80, 161, 0.09);
            border-radius: 3px;
            padding-left: 20px;
            &.error {
              border: 1px solid #e2231a;
            }
          }
          select {
            width: 100%;
            height: 40px;
            line-height: 40px;
            background: rgba(203, 203, 203, 0.09);
            border: 1px solid rgba(151, 151, 151, 0.12);
            box-shadow: inset 0 2px 3px 0 rgba(55, 80, 161, 0.09);
            border-radius: 3px;
          }
          .select2-container--default,
          .select2-container {
            .select2-selection--single {
              width: 100%;
              height: 40px;
              line-height: 40px;
              background: rgba(203, 203, 203, 0.09);
              border: 1px solid rgba(151, 151, 151, 0.12);
              box-shadow: inset 0 2px 3px 0 rgba(55, 80, 161, 0.09);
              .select2-selection__rendered {
                height: 40px;
                line-height: 40px;
                padding-left: 20px;
              }
              .select2-selection__arrow {
                top: 6px;
              }
            }
          }
          .error_text {
            position: absolute;
            color: #e2231a;
            font-size: 12px;
            bottom: -18px;
          }
        }
      }
      .jdc_compaign_content_btn {
        display: block;
        width: 160px;
        height: 40px;
        line-height: 40px;
        border: 0;
        margin: 50px auto 0;
        color: #fff;
        border-radius: 4px;
        background-color: #5372bd;
        &:active {
          opacity: 0.5;
        }
        &:hover {
          box-shadow: 0 0 10px 0 rgba(3, 0, 76, 0.3);
        }
      }
    }
    &.two {
      background: #f7f8fc;
      overflow: hidden;
      padding: 60px 0 80px;
      .jdc_compaign_content_title {
        margin-bottom: 32px;
      }
      .switch_tab {
        width: 342px;
        height: 40px;
        margin: 0 auto 15px;
        // border-radius: 20px;
        overflow: hidden;
        box-sizing: border-box;
        .tab_item {
          position: relative;
          width: 170px;
          line-height: 38px;
          float: left;
          text-align: center;
          border-left: none;
          cursor: pointer;
          transition: all 0.3s;
          color: #333333;
          &:after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: #e5e5e5;
          }
          &.active {
            // background-image: linear-gradient(-135deg, #0989C5 0%, #995CB6 100%);
            // colorgb(44, 27, 27)fff;
            &:after {
              content: "";
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 2px;
              background: #0989c5;
              background: linear-gradient(80deg, #0989c5 0, #995cb6 100%);
              filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0989c5', endColorstr='#995cb6', GradientType=1);
            }
          }
        }
      }
      .jdc_compaign_content_inner {
        background-image: url("/static/img/safe/solution_bg.png");
        background-size: cover;
        // background-position-x: right;
        // background-position-y: top;
        background-repeat: no-repeat;
        &.jdc_compaign_content_inner_tab_content {
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
          }
        }
        .jdc_compaign_content_inner_left {
          width: 712px;
          height: 465px;
          float: left;
          position: relative;
          left: 4px;
          &:after {
            position: absolute;
            content: "";
            right: 0;
            top: 5%;
            height: 90%;
            width: 1px;
            background-color: #dedede;
          }
          img {
            display: block;
            width: 100%;
            height: 100%;
            // box-shadow: 0 4px 14px 0 rgba(55,80,161,0.20);
          }
        }
        .jdc_compaign_content_inner_right {
          width: 475px;
          height: 465px;
          float: left;
          padding: 30px;
          box-sizing: border-box;
          .jdc_compaign_content_inner_right_title {
            font-size: 24px;
            color: #333333;
          }
          .jdc_compaign_content_inner_section {
            margin-top: 35px;
            .jdc_compaign_content_inner_section_title {
              font-size: 20px;
              color: #0989c5;
              text-align: justify;
              margin-bottom: 15px;
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
              color: #999;
              text-align: justify;
              line-height: 1.5;
              &.link {
                margin-top: -1px;
                display: inline-block;
                span {
                  width: 30px;
                  height: 30px;
                  display: inline-block;
                  background-image: url("/static/img/safe/arrow_pc.png");
                  background-size: 14px 8px;
                  background-position: center;
                  background-repeat: no-repeat;
                  position: relative;
                  top: 10px;
                }
                &:hover {
                  color: #0989c5;
                  span {
                    background-image: url("/static/img/safe/arrow_m.png");
                  }
                }
              }
            }
          }
        }
      }
    }
    &.one {
      background: #ffffff;
      overflow: hidden;
      width: 100%;
      .jdc_compaign_content_inner_left {
        width: 464px;
        height: 482px;
        float: left;
        img {
          width: 100%;
          height: 100%;
          display: block;
          box-shadow: 0 3px 10px 0 rgba(55, 80, 161, 0.2);
        }
        .jdc_compaign_video_item {
          position: relative;
          width: 100%;
          height: 482px;
          text-align: center;
          &:nth-child(2) {
            margin: 0 5%;
          }
          p {
            font-size: 16px;
            color: #333;
            line-height: 60px;
            border: 2px solid #a9b8de;
            border-top: none;
          }
          .jdc_compaign_video_item_img_wrap {
            position: relative;
            cursor: pointer;
            &:hover {
              .video_mask {
                background-color: rgba(0, 0, 0, 0.15);
              }
            }
            .jdc_compaign_video_item_img {
              display: block;
              width: 100%;
              height: 422px;
            }
            .jdc_compaign_video_item_img_mobile {
              display: none;
              width: 100%;
              height: 324px;
            }
            .jdc_compaign_video_item_player_btn {
              position: absolute;
              width: 127px;
              height: 86px;
              top: 50%;
              left: 50%;
              margin-left: -64px;
              margin-top: -43px;
              z-index: 3;
            }
            .video_mask {
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              background-color: rgba(0, 0, 0, 0.35);
              z-index: 2;
              transition: all 0.5s;
            }
          }
        }
      }
      .jdc_compaign_content_title {
        margin-bottom: 28px;
      }
      .jdc_compaign_content_desc_title {
        font-size: 14px;
        color: #0989c5;
        text-align: center;
        line-height: 1.5;
        &:nth-child(3) {
          margin-bottom: 24px;
        }
      }
      .jdc_compaign_content_inner_right {
        .jdc_compaign_content_inner_right_top,
        .jdc_compaign_content_inner_right_bottom {
          & > div {
            width: 230px;
            height: 235px;
            float: left;
            margin-left: 10px;
            margin-bottom: 12px;
            box-shadow: 0 3px 10px 0 rgba(55, 80, 161, 0.2);
            transition: all 0.5s;
            padding-top: 50px;
            box-sizing: border-box;
            color: #333;
            overflow: hidden;
            background-color: #fff;
            &:hover {
              background-image: linear-gradient(
                -140deg,
                #0989c5 0%,
                #995cb6 100%
              );
              color: #fff;
              filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0989c5', endColorstr='#995cb6', GradientType=1);
              padding-top: 15px;
              .jdc_compaign_content_inner_right_top_item_main {
                text-align: left;
                padding-left: 30px;
                .img_wrap {
                  background: transparent;
                  width: 32px;
                  height: 32px;
                  border-radius: 0;
                  margin-right: 10px;
                }
                p {
                  display: inline-block;
                  position: relative;
                  top: -20px;
                  color: #fff;
                }
              }
              .jdc_compaign_content_inner_right_top_item_desc {
                display: block;
                text-align: justify;
                padding: 0 30px;
                line-height: 1.5;
                font-size: 13px;
              }
            }
            .jdc_compaign_content_inner_right_top_item_desc {
              display: none;
              color: #fff;
            }
            .jdc_compaign_content_inner_right_top_item_main {
              text-align: center;
              .img_wrap {
                display: inline-block;
                width: 70px;
                height: 70px;
                border-radius: 50%;
                padding-top: 20px;
                box-sizing: border-box;
                box-shadow: 0 3px 10px 0 rgba(55, 80, 161, 0.2);
                background-image: linear-gradient(
                  -140deg,
                  #0989c5 0%,
                  #995cb6 100%
                );
                filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0989c5', endColorstr='#995cb6', GradientType=1);
                margin-bottom: 30px;
                img {
                  width: 32px;
                  height: 32px;
                  display: block;
                  margin: 0 auto;
                }
              }
              p {
                font-size: 18px;
              }
            }
          }
        }
        .jdc_compaign_content_inner_right_bottom {
          & > div {
            margin-bottom: 0;
          }
        }
      }
    }
    &.three {
      color: #fff;
      overflow: hidden;
      .jdc_compaign_content_title {
        color: #fff;
        width: 190px;
        display: inline-block;
        position: relative;
        top: -220px;
        left: 30px;
        line-height: 1.2;
      }
      .jdc_compaign_content_inner {
        width: 770px;
        display: inline-block;
        box-sizing: border-box;
        margin-left: 150px;
        .jdc_compaign_content_inner_item {
          padding: 30px 45px;
          background-color: rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
          // transition: all 0.5s;
          &:last-child {
            margin-bottom: 0;
          }
          &:hover {
            background-color: #fff;
            box-shadow: 0 8px 10px 0 #293f87;
            transform: scale(1.05, 1.07);
            .jdc_compaign_content_inner_item_content {
              h2 {
                color: #444;
              }
              p {
                color: #666;
              }
            }
          }
          img {
            width: 90px;
            height: 90px;
            position: relative;
            top: -8px;
          }
          .jdc_compaign_content_inner_item_content {
            display: inline-block;
            max-width: 540px;
            line-height: 1.5;
            margin-left: 45px;
            position: relative;
            top: 20px;
            h2 {
              font-size: 18px;
              font-weight: 500;
              margin-bottom: 10px;
            }
            p {
              font-size: 14px;
              text-align: justify;
            }
          }
        }
      }
    }
    &.four {
      overflow: hidden;
      .jdc_compaign_content_inner {
        .jdc_compaign_content_inner_item {
          width: 48%;
          margin-right: 4%;
          float: left;
          box-shadow: 0 3px 10px 0 rgba(55, 80, 161, 0.2);
          padding: 50px;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
          &:nth-child(2) {
            margin-right: 0;
            .jdc_compaign_content_inner_item_logo_wrap {
              // display: none;
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              background-color: #fff;
              z-index: 2;
              img {
                position: absolute;
                width: 92px;
                height: 107px;
                top: 50%;
                left: 50%;
                margin-top: -53.5px;
                margin-left: -46px;
              }
            }
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
            transition: all 0.5s;
            img {
              position: absolute;
              width: 195px;
              height: 45px;
              top: 50%;
              left: 50%;
              margin-top: -22.5px;
              margin-left: -97.5px;
            }
          }
          .jdc_compaign_content_inner_item_mask {
            position: relative;
            top: 400px;
            transition: all 0.5s;
            .jdc_compaign_content_inner_item_mask_title {
              font-size: 18px;
              color: #333;
              font-weight: 500;
              margin-bottom: 20px;
              img {
                display: none;
              }
            }
            .jdc_compaign_content_inner_item_mask_desc {
              font-size: 14px;
              color: #666;
              line-height: 1.5;
            }
            .jdc_compaign_content_inner_item_mask_link {
              font-size: 14px;
              color: #999;
              margin-top: 10px;
              display: block;
              span {
                width: 30px;
                height: 30px;
                display: inline-block;
                background-image: url("/static/img/safe/arrow_pc.png");
                background-size: 14px 8px;
                background-position: center;
                background-repeat: no-repeat;
                position: relative;
                top: 9px;
              }
              &:hover {
                color: #0989c5;
                span {
                  background-image: url("/static/img/safe/arrow_m.png");
                }
              }
            }
          }
        }
      }
    }
    &.five {
      background: #f7f8fc;
      padding-bottom: 40px;
      overflow: hidden;
      .jdc_compaign_content_inner {
        .jdc_compaign_content_inner_item {
          padding: 30px 42px;
          box-sizing: border-box;
          width: 285px;
          height: 364px;
          float: left;
          background-color: #fff;
          margin-right: 20px;
          margin-bottom: 20px;
          &:last-child {
            margin-right: 0;
          }
          &:hover {
            box-shadow: 0 3px 10px 0 rgba(55, 80, 161, 0.2);
            .jdc_compaign_content_inner_item_btn {
              background-color: #5372bd;
              color: #fff;
            }
          }
          .jdc_compaign_content_inner_item_title {
            font-size: 18px;
            color: #000000;
            text-align: center;
            margin-bottom: 40px;
            position: relative;
            &:after {
              position: absolute;
              content: "";
              height: 2px;
              width: 40px;
              left: 50%;
              margin-left: -20px;
              background-color: #e50778;
              border-radius: 1px;
              bottom: -24px;
            }
          }
          .jdc_compaign_content_inner_item_desc {
            font-size: 14px;
            color: #666666;
            text-align: justify;
            line-height: 21px;
            height: 106px;
          }
          .jdc_compaign_content_inner_item_price {
            margin-top: 25px;
            color: #37bef0;
            text-align: center;
            font-size: 14px;
            span {
              font-size: 28px;
              font-weight: 700;
            }
          }
          .jdc_compaign_content_inner_item_btn {
            display: block;
            background-color: #fff;
            line-height: 38px;
            height: 40px;
            box-sizing: border-box;
            border: 1px solid #5372bd;
            font-size: 16px;
            color: #333333;
            text-align: center;
            width: 160px;
            margin: 30px auto 0;
            border-radius: 4px;
            transition: all 0.3s;
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
    .jdc_compaign_content {
      .switch_tab {
        display: none;
      }
      .jdc_compaign_content_inner_tab_content {
        display: none;
      }
      .tab-content {
        display: block;
        .tab-item-title {
          position: relative;
          border-top: 1px solid #ededed;
          color: #666666;
          &.jdc-common-arr:after {
            content: "\e8f5";
            position: absolute;
            top: 50%;
            right: 30px;
            width: auto;
            text-align: center;
            line-height: 20px;
            font-size: 30px;
            transition: all 0.5s;
            transform: translateY(-50%) rotate(180deg);
          }
          &.active {
            color: #0989c5;
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
              box-shadow: 0 4px 14px 0 rgba(55, 80, 161, 0.2);
            }
          }
          .jdc_compaign_content_inner_section {
            margin-top: 0px;
            padding: 15px;
            .jdc_compaign_content_inner_section_title {
              font-size: 14px;
              color: #0989c5;
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
              .link {
                margin-top: -10px;
                display: inline-block;
                color: #0989c5;
                span {
                  width: 30px;
                  height: 30px;
                  display: inline-block;
                  background-image: url("/static/img/safe/arrow_m.png");
                  background-size: 14px 8px;
                  background-position: center;
                  background-repeat: no-repeat;
                  position: relative;
                  top: 10px;
                  left: -5px;
                }
              }
            }
            .jdc_compaign_content_inner_section_desc {
              font-size: 12px;
              color: #3f3f3f;
              text-align: justify;
              line-height: 1.5;
              &.link {
                margin-top: -10px;
                display: inline-block;
                color: #0989c5;
                span {
                  width: 30px;
                  height: 30px;
                  display: inline-block;
                  background-image: url("/static/img/safe/arrow_m.png");
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
}

@media (min-width: 780px) and (max-width: 1200px) {
  .jdc_compaign_container {
    .jdc_compaign_content {
      &.six {
        .jdc_compaign_content_inner {
          padding: 0 90px;
          .jdc_compaign_content_inner_input_wrap {
            width: 100%;
            margin-left: 0;
            &.selectWrap {
              width: 100%;
              &.selectDutyWrap {
                margin-left: 0;
              }
            }
            input {
              box-sizing: border-box;
              padding-left: 10px;
            }
          }
        }
      }
      &.two {
        padding-bottom: 0px;
        .jdc_compaign_content_inner {
          .jdc_compaign_content_inner_left {
            width: 100%;
            height: auto;
            padding: 0 15px;
            box-sizing: border-box;
            left: 0;
          }
          .jdc_compaign_content_inner_right {
            width: 100%;
            padding: 30px 15px;
            background-image: none;
            height: auto;
            .jdc_compaign_content_inner_right_title {
              font-size: 17px;
              font-weight: bold;
            }
            .jdc_compaign_content_inner_section {
              margin-top: 20px;
              .jdc_compaign_content_inner_section_title {
                font-size: 14px;
                font-weight: bold;
                i {
                  width: 7.5px;
                  height: 7.5px;
                  top: -1px;
                }
              }
              .jdc_compaign_content_inner_section_desc {
                color: #999;
                font-size: 13px;
                &.link {
                  display: none;
                }
              }
            }
          }
        }
      }
      &.one {
        .jdc_compaign_content_inner_left {
          float: none;
          width: 100%;
          height: auto;
          padding: 15px;
          box-sizing: border-box;
          .jdc_compaign_video_item {
            height: auto;
          }
        }
        .jdc_compaign_content_inner_right {
          .jdc_compaign_content_inner_right_top,
          .jdc_compaign_content_inner_right_bottom {
            & > div {
              width: 32%;
            }
          }
        }
      }
      &.three {
        .jdc_compaign_content_title {
          display: block;
          top: 0;
          left: 0;
          width: 100%;
        }
        .jdc_compaign_content_inner {
          margin: 0 auto;
          display: block;
        }
      }
      &.five {
        .jdc_compaign_content_inner {
          padding: 0 90px;
          .jdc_compaign_content_inner_input_wrap {
            width: 100%;
            margin-left: 0;
            &.selectWrap {
              width: 100%;
              &.selectDutyWrap {
                margin-left: 0;
              }
            }
            input {
              box-sizing: border-box;
              padding-left: 10px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 780px) {
  .jdc_compaign_container {
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
      .mod_hang_qrcode_btn,
      .mod_hang_top {
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
    .jdc_compaign_banner {
      padding: 30px 20px;
      box-sizing: border-box;
      background-image: url("/static/img/safe/banner_m.jpg");
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
      &.six {
        padding: 30px 15px;
        .jdc_compaign_content_title {
          margin-bottom: 22px;
        }
        .jdc_compaign_content_inner {
          padding: 0;
          .jdc_compaign_content_inner_input_wrap {
            width: 100%;
            margin-left: 0;
            margin-top: 25px;
            &:first-child {
              margin-top: 0;
            }
            &.selectWrap {
              width: 100%;
              &.selectDutyWrap {
                margin-left: 0;
              }
            }
            select {
              height: 30px;
              line-height: 30px;
            }
            .select2-container--default,
            .select2-container {
              .select2-selection--single {
                height: 30px;
                line-height: 30px;
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
            }
            .error_text {
              font-size: 12px;
              position: absolute;
              bottom: -15px;
            }
          }
        }
        .jdc_compaign_content_btn {
          width: 100%;
          height: 32px;
          line-height: 32px;
          border-radius: 5px;
        }
      }
      &.two {
        padding-bottom: 0;
        .jdc_compaign_content_inner {
          .jdc_compaign_content_inner_left {
            width: 100%;
            height: auto;
            padding: 0 15px;
            box-sizing: border-box;
            left: 0;
          }
          .jdc_compaign_content_inner_right {
            width: 100%;
            padding: 30px 15px;
            background-image: none;
            height: auto;
            .jdc_compaign_content_inner_right_title {
              font-size: 17px;
              font-weight: bold;
            }
            .jdc_compaign_content_inner_section {
              margin-top: 20px;
              .jdc_compaign_content_inner_section_title {
                font-size: 14px;
                font-weight: bold;
                i {
                  width: 7.5px;
                  height: 7.5px;
                  top: -1px;
                }
                span {
                  width: 30px;
                  height: 28px;
                  display: inline-block;
                  background-image: url("/static/img/safe/arrow_m.png");
                  background-size: 15px 8px;
                  background-position: center;
                  background-repeat: no-repeat;
                  position: relative;
                  top: 9px;
                  left: 2px;
                }
              }
              .jdc_compaign_content_inner_section_desc {
                color: #999;
                font-size: 13px;
                &.link {
                  display: none;
                }
              }
            }
          }
        }
      }
      &.one {
        .jdc_compaign_content_desc_title {
          font-size: 12px;
          &:nth-child(2) {
            padding: 0 35px;
            // margin-bottom: 24px;
          }
        }
        .jdc_compaign_content_inner_left {
          float: none;
          width: 100%;
          height: auto;
          padding: 15px;
          box-sizing: border-box;
          .jdc_compaign_video_item {
            height: auto;
            .jdc_compaign_video_item_img_wrap {
              .jdc_compaign_video_item_player_btn {
                width: 90px;
                height: 50px;
                margin-left: -45px;
                margin-top: -25px;
              }
              .jdc_compaign_video_item_img {
                display: none;
              }
              .jdc_compaign_video_item_img_mobile {
                display: block;
              }
            }
          }
        }
        .jdc_compaign_content_inner_right {
          .jdc_compaign_content_inner_right_top,
          .jdc_compaign_content_inner_right_bottom {
            & > div {
              width: 45%;
              min-height: 185px;
              margin-left: 5%;
              margin-bottom: 20px;
              background: #fff;
              color: #666;
              padding-top: 15px;
              .jdc_compaign_content_inner_right {
                padding-right: 5%;
              }
              .jdc_compaign_content_inner_right_top_item_main {
                text-align: left;
                padding-left: 20px;
                .img_wrap {
                  background: transparent;
                  width: 32px;
                  height: 32px;
                  border-radius: 0;
                  margin-right: 10px;
                  margin-bottom: 0;
                  box-shadow: none;
                  img {
                    display: none;
                  }
                }
                p {
                  display: inline-block;
                  position: relative;
                  top: -20px;
                  font-weight: 500;
                  font-size: 14px;
                }
              }
            }
          }
        }
        .jdc_compaign_content_inner_right_m {
          .jdc_compaign_content_inner_right_inner {
            padding: 0 15px;
            & > div {
              width: 48%;
              min-height: 190px;
              float: left;
              margin-right: 4%;
              box-shadow: 0 3px 10px 0 rgba(55, 80, 161, 0.2);
              margin-bottom: 4%;
              background-color: #fff;
              &:nth-child(2) {
                margin-right: 0;
              }
              .jdc_compaign_content_inner_right_top_item_main {
                padding: 10px;
                color: #666;
                font-weight: 500;
                .img_wrap {
                  background: transparent;
                  width: 16px;
                  height: 16px;
                  margin-right: 5px;
                  display: inline-block;
                  img {
                    width: 100%;
                    height: 100%;
                  }
                }
                p {
                  display: inline-block;
                  position: relative;
                  font-weight: 700;
                  font-size: 14px;
                }
              }
              .jdc_compaign_content_inner_right_top_item_desc {
                display: block;
                text-align: justify;
                padding: 0 10px;
                line-height: 1.5;
                font-size: 12px;
              }
            }
          }
        }
      }
      &.three {
        .jdc_compaign_content_title {
          display: block;
          top: 0;
          text-align: center;
          width: 100%;
          left: 0;
        }
        .jdc_compaign_content_inner {
          margin-left: 0;
          width: 100%;
          .jdc_compaign_content_inner_item {
            background-color: #fff;
            padding: 15px 15px 15px 5px;
            margin: 10px 15px;
            box-shadow: 0 8px 10px 0 #293f87;
            color: #333;
            display: flex;
            align-items: center;
            img {
              width: 50px;
              height: 50px;
              top: 2px;
            }
            .jdc_compaign_content_inner_item_content {
              flex: 1;
              margin-left: 15px;
              top: 0;
              h2 {
                font-size: 13px;
                font-weight: 700;
                color: #666;
              }
              p {
                font-size: 12px;
                color: #666;
              }
            }
          }
        }
      }
      &.four {
        .jdc_compaign_content_inner {
          padding: 0 15px;
          box-sizing: border-box;
          .jdc_compaign_content_inner_item {
            width: 100%;
            padding: 25px;
            margin-bottom: 10px;
            &:nth-child(2) {
              margin-bottom: 0;
            }
            .jdc_compaign_content_inner_item_logo_wrap {
              display: none;
            }
            .jdc_compaign_content_inner_item_mask {
              top: 0;
              .jdc_compaign_content_inner_item_mask_title {
                font-size: 13px;
                margin-bottom: 15px;
                font-weight: 700;
                img {
                  display: inline-block;
                }
                .jindie_logo {
                  width: 95px;
                  margin-right: 15px;
                  position: relative;
                  top: -1px;
                }
                .suqian_logo {
                  width: 32px;
                  margin-right: 15px;
                }
              }
              .jdc_compaign_content_inner_item_mask_desc {
                font-size: 12px;
              }
              .jdc_compaign_content_inner_item_mask_link {
                font-size: 12px;
                margin-top: 0;
                span {
                  width: 28px;
                  height: 26px;
                  background-size: 15px 7px;
                }
              }
            }
          }
        }
      }
      &.five {
        padding: 30px 15px;
        .jdc_compaign_content_inner {
          .jdc_compaign_content_inner_item {
            padding: 20px 10px;
            width: 48%;
            height: auto;
            margin-right: 4%;
            margin-bottom: 4%;
            &:nth-of-type(even) {
              margin-right: 0;
            }
            .jdc_compaign_content_inner_item_title {
              font-size: 14px;
              margin-bottom: 24px;
              &:after {
                width: 20px;
                margin-left: -10px;
                bottom: -12px;
              }
            }
            .jdc_compaign_content_inner_item_desc {
              font-size: 12px;
              color: #666666;
              text-align: justify;
              line-height: 21px;
              height: auto;
            }
            .jdc_compaign_content_inner_item_price {
              margin-top: 10px;
              color: #37bef0;
              text-align: center;
              font-size: 16px;
              span {
                font-size: 16px;
                font-weight: normal;
              }
            }
            .jdc_compaign_content_inner_item_btn {
              line-height: 25px;
              height: 25px;
              font-size: 12px;
              width: 80px;
              margin: 15px auto 0;
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
