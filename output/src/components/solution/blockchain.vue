<template>
  <div>
  <div class="promo" id="j_promo">
        <div class="promo_bd">
            <div class="promo_gallery">
                <div class="promo_gallery_wp">
                    <div class="promo_item">
                        <div class="promo_bgimg promo_img1"></div>
                    </div>
                    <a class="btn-advisory" href="//www.jdcloud.com/help/contactus.html">咨询区块链专家</a>
                </div>
                <div class="promo_nav cmp_slider_nav"></div>
            </div>
        </div>
    </div>

    <div class="bc-what">
        <div class="bsc_mod_inner">
            <div class="bsc_mod_hd">
                <h3>什么是区块链</h3>
                <p class="hr-line"></p>
            </div>
            <h3 class="yh"><i></i>区块链<span></span></h3>
            <p class="bc-what-text">我们可以这样看待区块链，它是一种公共数据库：它记录了国际间所有交易信息，随时更新，用户可以从中读取、写入信息，但又有一套特殊的机制，防止以往数据被篡改；它是一种分布式系统，它不存储放置在某一两个特定的服务器或安全节点上，而是分布式地存在于网络上所有的完整节点上，在每一个节点保留信息备份；它还是一种共识协议，基于这种协议，可以在其上开发出数目繁多的应用。</p>
        </div>
    </div>


    <div class="bc-features">
        <div class="bsc_mod_inner">
            <div class="bsc_mod_hd">
                <h3>区块链应用特点</h3>
                <p class="hr-line"></p>
            </div>
            <ul>
                <li class="li1">
                    <img :src="img" alt="去中心化">
                    <div class="item">
                        <h4>去中心化</h4>
                        <p>区块链由众多节点共同组成一个端到端的网络，不存在中心化的设备和管理机构。</p>
                    </div>
                </li>
                <li>
                    <img :src="img2" alt="交易透明">
                    <div class="item">
                        <h4>交易透明</h4>
                        <p>区块链的运行规则是公开透明的，所有的数据信息也是公开的，每一笔交易都对所有节点均可见。</p>
                    </div>
                </li>
                <li>
                    <img :src="img3" alt="不可篡改">
                    <div class="item">
                        <h4>不可篡改</h4>
                        <p>单个甚至多个节点对数据库的修改无法影响其他节点的数据库，除非能控制整个网络中超过51%的节点同时修改，这几乎不可能。</p>
                    </div>
                </li>
                <li class="li2">
                    <img :src="img4" alt="可追溯性">
                    <div class="item">
                        <h4>可追溯性</h4>
                        <p>区块链中的每一笔交易都通过密码方法与相邻两个区块串联，因此可以追溯到任何一笔交易的来龙去脉。</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    <div class="bc-app">
        <div class="bsc_mod_inner">
            <div class="bsc_mod_hd">
                <h3>区块链应用项目</h3>
                <p class="hr-line"></p>
                <p class="text">存在性证明、智能合约、物联网、身份验证、预测市场、资产交易、电子商务、社交通讯、文件存储、数据API等</p>
            </div>

        </div>
    </div>

    <div class="bc-example">
        <div class="example-bg"></div>
        <div class="bsc_mod_inner">
            <div class="bsc_mod_hd">
                <h3>典型应用案例</h3>
                <p class="hr-line"></p>
                <p class="text">京东万象数据服务开放平台可为用户提供API接口、数据包、数据报告等多种类型数据服务；利用先进的区块链技术，将数据转为资产发布至区块链上，完成数据确权、发行及流通；一旦数据流通触及法律风险，任何机构、个人均可在该平台上进行数据溯源，维护自身合法权益。</p>
            </div>
            <a href="//blockchain.jdcloud.com/chain" class="qkl">区块链数据资产网络</a>
            <a href="//wxlink.jd.com" class="wx">万象</a>
        </div>
    </div>

   <div class="mod_contact">
        <div class="mod_contact_wrap">
            <div class="mod_contact_header">
                <h2 class="mod_contact_title">如何加入京东区块链云</h2>

                <p class="mod_contact_header_aside mod_cha">我们将提供强大的开源技术，以支持您的应用服务，请把您的业务需求告诉我们，技术专家将帮助您创建区块链并协助您使用该服务。<span class="mod_cha_arrow"></span></p>
            </div>

            <div class="mod_contact_cont">
                <ul class="mod_contact_list mod_cl">
                  <li class="mod_cl_item mod_cl_item_1" clstag="pageclick|keycount|jcloud_201602171|67">
                    <div class="mod_cl_item_icon">&#xe656;</div>
                    <p><strong>邮箱</strong><a href="mailto:jdcloud@jd.com">jdcloud@jd.com</a></p>
                  </li>
                  <li class="mod_cl_item mod_cl_item_2">
                    <div class="mod_cl_item_icon">&#xe657;</div>
                    <p><strong>联系电话</strong><a href="tel:4006151212">4006151212</a></p>
                  </li>
                  <li class="mod_cl_item mcl_item_3" clstag="pageclick|keycount|jcloud_201602171|68">
                    <div class="mod_cl_item_icon">&#xe624;</div>
                    <p><strong>官方地址</strong><a href="//www.jdcloud.com" target="_blank">www.jdcloud.com</a></p>
                  </li>
                </ul>
            </div>
        </div>
    </div>




  </div>
</template>

<script>

import img from "assets/blockchain/images/img1.png"
import img2 from "assets/blockchain/images/img2.png"
import img3 from "assets/blockchain/images/img3.png"
import img4 from "assets/blockchain/images/img4.png"

  export default {
    data() {
      return {
         img:img,
          img2:img2,
          img3:img3,
          img4:img4,
      }
    }
  };
</script>

<style>
  @import '~assets/blockchain/css/index.css';
</style>
