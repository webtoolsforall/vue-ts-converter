<template>
  <div>
   <div class="promo" id="j_promo">
        <div class="promo_bd">
            <div class="promo_gallery cmp_slider">
                <div class="promo_gallery_wp cmp_slider_wp" style="position: relative;">
                    <div class="promo_item active" style="top: 0px; left: 0px; position: absolute;">
                        <div class="promo_bgimg promo_img1"></div>
                    </div>

                </div>
                <div class="promo_nav cmp_slider_nav" style="display: none;"><i class="on">1</i></div>
            </div>
        </div>
    </div>

    <div class="financial-overview">
        <div class="bsc_mod_inner">
            <div class="bsc_mod_hd">
                <h3>方案概述</h3>
                <p>SOLUTION OVERVIEW</p>
                <i class="bsc_mod_arrow"></i>
            </div>
            <p class="bsc_mod_text">京东云金融行业解决方案，服务于银行、证券、保险、基金、互联网金融等金融机构。采用独立的机房集群，与公有云物理隔离。基于两地三中心的机房布局，满足一行三会对于金融业的监管要求。帮助金融客户从现有传统IT迈向大数据和云计算，实现业务创新转型。</p>
            <div class="bg">
                <p class="item1">两地三中心的风控体系</p>
                <p class="item2">基于区块链的业务网络</p>
                <p class="item3">丰富的金融类数据服务</p>
                <p class="item4">弹性，高效的资源供给</p>
                <p class="item5">保姆式的IDC托管服务</p>
                <p class="item6">满足监管的安全防护服务</p>
            </div>
        </div>
    </div>


    <div class="financial-service">
        <div class="bsc_mod_inner">
            <div class="bsc_mod_hd">
                <h3>基础支撑服务</h3>
                <p>BASIC SERVICE</p>
                <i class="bsc_mod_arrow"></i>
            </div>
            <div class="bs">
                <div class="home_mod_main">
                    <div class="bs_list" id="bsListBox">
                        <div @mouseover='toggleFin(1)' :class="{on:checkOnFin==1}" class="bs_item">
                            <div class="bs_item_wrap">
                                <div class="bs_view">
                                    <div class="bs_view_main">
                                        <div class="mod_iconfont bs_view_icon"></div>
                                        <h4>灾备云</h4>
                                        <p>为金融客户提供基于两地三中心的完整灾备体系保护服务，包括数据级灾备，应用级灾备和多活设计和建设服务。在满足一行三会对于金融业风控的监管要求的前提下，提高金融客户的业务连续性能力。</p>
                                    </div>
                                </div>
                                <div class="bs_dt">
                                    <div class="bs_dt_main">
                                        <div class="bs_dt_hd">
                                            <div class="mod_iconfont bs_dt_hd_icon"></div>
                                            <h4>灾备云</h4>
                                            <p>为金融客户提供基于两地三中心的完整灾备体系保护服务，包括数据级灾备，应用级灾备和多活设计和建设服务。在满足一行三会对于金融业风控的监管要求的前提下，提高金融客户的业务连续性能力。</p>

                                            <div class="bs_dt_hd_arrow"><i></i></div>
                                        </div>
                                        <div class="bs_dt_bd bs_dt_bd_2col">
                                            <div class="bs_dt_bd_item">
                                                <div class="mod_iconfont bs_dt_bd_icon"></div>
                                                <p>基于云端的全方位的灾备咨询，设计，建设服务</p>
                                            </div>
                                            <div class="bs_dt_bd_item">
                                                <div class="mod_iconfont bs_dt_bd_icon"></div>
                                                <p>超越传统复制技术的新一代云端复制技术，保证业务一致性</p>
                                            </div>
                                            <div class="bs_dt_bd_item">
                                                <div class="mod_iconfont bs_dt_bd_icon"></div>
                                                <p>多租户的灾备导航，满足集团公司差异化要求</p>
                                            </div>
                                            <div class="bs_dt_bd_item">
                                                <div class="mod_iconfont bs_dt_bd_icon"></div>
                                                <p>实时的灾备状态监控和自动化的灾备切换能力</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="bs_item_line"></div>
                        </div>

                        <div @mouseover='toggleFin(2)' :class="{on:checkOnFin==2}" class="bs_item">
                            <div class="bs_item_wrap">
                                <div class="bs_view">
                                    <div class="bs_view_main">
                                        <div class="mod_iconfont bs_view_icon"></div>
                                        <h4>DevOps流水线</h4>
                                        <p>为金融客户提供业务应用代码管理，持续集成，持续交付，配置管理等能力。使客户专注于业务开发实现的本身。</p>
                                    </div>
                                </div>
                                <div class="bs_dt">
                                    <div class="bs_dt_main">
                                        <div class="bs_dt_hd">
                                            <div class="mod_iconfont bs_dt_hd_icon"></div>
                                            <h4>DevOps流水线</h4>
                                            <p>为金融客户提供业务应用代码管理，持续集成，持续交付，配置管理等能力。使客户专注于业务开发实现的本身。</p>

                                            <div class="bs_dt_hd_arrow"><i></i></div>
                                        </div>
                                        <div class="bs_dt_bd bs_dt_bd_2col">
                                            <div class="bs_dt_bd_item">
                                                <div class="mod_iconfont bs_dt_bd_icon"></div>
                                                <p>一站式CI/CD流水线平台</p>
                                            </div>
                                            <div class="bs_dt_bd_item">
                                                <div class="mod_iconfont bs_dt_bd_icon"></div>
                                                <p>基于开源技术搭建</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="bs_item_line"></div>
                        </div>

                        <div @mouseover='toggleFin(3)' :class="{on:checkOnFin==3}" class="bs_item">
                            <div class="bs_item_wrap">
                                <div class="bs_view">
                                    <div class="bs_view_main">
                                        <div class="mod_iconfont bs_view_icon"></div>
                                        <h4>弹性容器云</h4>
                                        <p>弹性容器云向用户提供高性能计算资源，支持用户快速部署自定义应用和服务，支持灵活便捷的应用弹性伸缩策略，以及完善的监控和日志服务。</p>
                                    </div>
                                </div>
                                <div class="bs_dt">
                                    <div class="bs_dt_main">
                                        <div class="bs_dt_hd">
                                            <div class="mod_iconfont bs_dt_hd_icon"></div>
                                            <h4>弹性容器云</h4>
                                            <p>弹性容器云向用户提供高性能计算资源，支持用户快速部署自定义应用和服务，支持灵活便捷的应用弹性伸缩策略，以及完善的监控和日志服务。</p>

                                            <div class="bs_dt_hd_arrow"><i></i></div>
                                        </div>
                                        <div class="bs_dt_bd bs_dt_bd_2col">
                                            <div class="bs_dt_bd_item">
                                                <div class="mod_iconfont bs_dt_bd_icon"></div>
                                                <p>高性能的计算资源</p>
                                            </div>
                                            <div class="bs_dt_bd_item">
                                                <div class="mod_iconfont bs_dt_bd_icon"></div>
                                                <p>快速部署弹性伸缩</p>
                                            </div>
                                            <div class="bs_dt_bd_item">
                                                <div class="mod_iconfont bs_dt_bd_icon"></div>
                                                <p>完善的监控和日志服务</p>
                                            </div>
                                            <div class="bs_dt_bd_item">
                                                <div class="mod_iconfont bs_dt_bd_icon"></div>
                                                <p>先进的资源调度和管理</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="bs_item_line"></div>
                        </div>

                        <div @mouseover='toggleFin(4)' :class="{on:checkOnFin==4}" class="bs_item">
                            <div class="bs_item_wrap">
                                <div class="bs_view">
                                    <div class="bs_view_main">
                                        <div class="mod_iconfont bs_view_icon"></div>
                                        <h4>金融安全及托管</h4>
                                        <p>为金融客户提供满足等保要求和一行三会对于金融业务监管要求的整体安全解决方案。并为金融客户提供主机托管服务，帮助客户进行主机日常管理服务。</p>
                                    </div>
                                </div>
                                <div class="bs_dt">
                                    <div class="bs_dt_main">
                                        <div class="bs_dt_hd">
                                            <div class="mod_iconfont bs_dt_hd_icon"></div>
                                            <h4>金融安全及托管</h4>
                                            <p>为金融客户提供满足等保要求和一行三会对于金融业务监管要求的整体安全解决方案。并为金融客户提供主机托管服务，帮助客户进行主机日常管理服务。</p>

                                            <div class="bs_dt_hd_arrow"><i></i></div>
                                        </div>
                                        <div class="bs_dt_bd bs_dt_bd_2col">
                                            <div class="bs_dt_bd_item">
                                                <div class="mod_iconfont bs_dt_bd_icon"></div>
                                                <p>专业安全咨询设计服务</p>
                                            </div>
                                            <div class="bs_dt_bd_item">
                                                <div class="mod_iconfont bs_dt_bd_icon"></div>
                                                <p>系统化的安全防护体系</p>
                                            </div>
                                            <div class="bs_dt_bd_item">
                                                <div class="mod_iconfont bs_dt_bd_icon"></div>
                                                <p>主动式的安全预警机制</p>
                                            </div>
                                            <div class="bs_dt_bd_item">
                                                <div class="mod_iconfont bs_dt_bd_icon"></div>
                                                <p>保姆式的主机托管服务</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="financial-business">
        <div class="bsc_mod_inner">
            <div class="bsc_mod_hd">
                <h3>业务增值服务</h3>
                <p>VALUE-ADDED SERVICES</p>
                <i class="bsc_mod_arrow"></i>
            </div>
            <div class="bg">
                <div class="business-item bus-item1">
                    <div class="item-title"><h4>京东区块链云</h4>
                    <!-- <router-link @click.native='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_financial_1")'  clstag="Solution|keycount|MiddleContentSec|Solution_financial_1"data-ga="MiddleContentSec_京东区块链云" to="/solution/blockchain" >【查看详情】</router-link> -->
                    </div>
                    <div class="item-content">
                        <p>为金融客户提供成熟，稳定的区块链云技术平台。并为客户业务基于区块链技术的转型和升级提供咨询和设计服务</p>
                        <ul>
                            <li><i></i>成熟、稳定、先进</li>
                            <li><i></i>基于开源技术搭建</li>
                            <li><i></i>针对金融业务优化</li>
                        </ul>
                    </div>
                </div>

                <div class="business-item bus-item2">
                    <div class="item-title"><h4>京东云万象平台</h4><a @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_financial_2")' clstag="Solution|keycount|MiddleContentSec|Solution_financial_2" data-ga="MiddleContentSec_京东云万象平台" href="//wx.jdcloud.com"  target="_blank">【查看详情】</a></div>
                    <div class="item-content">
                        <p>构建以区块链为核心的数据交易平台，保证数据资产交易的安全性及可溯性。汇聚300余家家数据商，提供了身份认证、企业征信、个人征信、等金融类数据服务</p>
                        <ul>
                            <li><i></i>海量的公共数据</li>
                            <li><i></i>安全的数据溯源技术</li>
                            <li><i></i>行业领先的金融数据资源服务</li>
                        </ul>
                    </div>
                </div>

                <div class="business-item bus-item3">
                    <div class="item-title"><h4>京东云数知平台</h4><a @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_financial_3")' clstag="Solution|keycount|MiddleContentSec|Solution_financial_3" data-ga="MiddleContentSec_京东云数知平台" href="https://xdata.jdcloud.com"  target="_blank">【查看详情】</a></div>
                    <div class="item-content">
                        <p>提供丰富的服务能力帮助金融客户在云环境中轻松开展数据集成，数据存储，计算处理，可视化，数据开放等工作</p>
                        <ul>
                            <li><i></i>先进的自动建模服务</li>
                            <li><i></i>第三方安全认证服务</li>
                            <li><i></i>完整的数据分析和处理能力</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="financial-price">
        <div class="bsc_mod_inner">
            <div class="bsc_mod_hd">
                <h3>价值优势</h3>
                <p>ADVANTAGE</p>
                <i class="bsc_mod_arrow"></i>
            </div>
            <ul>
                <li>
                    <i class="mod_iconfont"></i>
                    <h5>完备的风控体系</h5>
                    <p>依托高风控级别的管理应急体系，实现金融业务的多级风控。保证金融客户的业务连续性和成本控制需求，并且满足监管部门的监管要求。</p>
                </li>
                <li>
                    <i class="mod_iconfont"></i>
                    <h5>先进区块链技术平台</h5>
                    <p>帮助客户基于业务构建新的区块链商业网络，为客户提供从业务建模到系统部署的区块链咨询、设计、部署、运维服务。</p>
                </li>
                <li>
                    <i class="mod_iconfont"></i>
                    <h5>丰富的金融数据集服务</h5>
                    <p>京东万象汇聚300余家数据商，提供身份认证、企业征信、个人征信等金融类数据服务，为企业信用评价、个人信息核验等业务场景提供准确的数据服务。</p>
                </li>
                <li>
                    <i class="mod_iconfont"></i>
                    <h5>强大的大数据处理平台</h5>
                    <p>提供丰富的大数据处理能力，帮助金融客户在云环境中轻松开展数据集成、数据存储、建模、计算处理、可视化等大数据分析工作。</p>
                </li>
            </ul>
        </div>
    </div>


    <div class="mod_contact">
        <div class="mod_contact_wrap">
            <div class="mod_contact_header">
                <h2 class="mod_contact_title">联系我们</h2>

                <p class="mod_contact_header_aside mod_cha">CONTACT US<span class="mod_cha_arrow"></span></p>
            </div>

            <div class="mod_contact_cont">
                <ul class="mod_contact_list mod_cl">
                  <li class="mod_cl_item mod_cl_item_1" >
                    <div class="mod_cl_item_icon">&#xe656;</div>
                    <p><strong>邮箱</strong><a @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_financial_4")' clstag="Solution|keycount|MiddleContentSec|Solution_financial_4" data-ga="MiddleContentSec_邮箱" href="mailto:jdcloud@jd.com">jdcloud@jd.com</a></p>
                  </li>
                  <li class="mod_cl_item mod_cl_item_2">
                    <div class="mod_cl_item_icon">&#xe657;</div>
                    <p><strong>联系电话</strong><a @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_financial_5")' clstag="Solution|keycount|MiddleContentSec|Solution_financial_5" data-ga="MiddleContentSec_联系电话" href="tel:4006151212">4006151212</a></p>
                  </li>
                  <li class="mod_cl_item mcl_item_3" >
                    <div class="mod_cl_item_icon">&#xe624;</div>
                    <p><strong>官方地址</strong><a @click='gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_financial_6")' clstag="Solution|keycount|MiddleContentSec|Solution_financial_6" data-ga="MiddleContentSec_官方地址" href="//www.jdcloud.com" target="_blank">www.jdcloud.com</a></p>
                  </li>
                </ul>
            </div>
        </div>
    </div>



  </div>
</template>

<script>
  export default {
      data(){
            return {
                checkOnFin:1,
            }
          },
          methods:{
            toggleFin:function(ind){
              this.checkOnFin = ind
            }
          },

  };
</script>

<style>
@import  '~assets/financial/css/index.css';
</style>
