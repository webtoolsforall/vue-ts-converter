<template>
  <div>
   <div class="promo" id="j_promo">
        <div class="promo_bd">
            <div class="promo_gallery cmp_slider">
                <div class="promo_gallery_wp cmp_slider_wp" style="position: relative;">

                    <div class="promo_item active" style="top: 0px; left: 0px; position: absolute;">

                        <div class="promo_acc">
                            <h2>物流云解决方案</h2>

                            <p>技术 / 产口 / 服务</p>
                        </div>

                        <div class="promo_bgimg promo_img1"></div>
                          <div class="wrap"><!--
                            <a href="//www.jdcloud.com/loc/jwms.html" class="js-link">查看详情</a>-->
                            <router-link to="/solution/wms" class="btn_free">查看详情</router-link>
                        </div>
                    </div>

                </div>
                <div class="promo_nav cmp_slider_nav" style="display: none;"><i class="on">1</i></div>
            </div>
        </div>
    </div>


    <div class="solution" id="j_loc_solution">
        <div class="loc_mod_inner">
            <div class="loc_mod_hd">
                <h3>全面的物流解决方案</h3>

                <p>COMPREHENSIVE LOGISTICAL SOLUTION</p>
                <i class="loc_mod_arrow"></i>

            </div>
            <div class="loc_mod_bd clear">

                <div class="solution_items">
                    <div @mouseover='toggleLoc(1)' :class="{on:checkOnLoc==1}" class="solution_item solution_first">
                        <div class="solution_item_hd">
                            <i class="mod_iconfont"></i>
                            <h4>仓储管理</h4>

                            <p>通过开放京东自建仓储管理系统及仓储资源，快速实现企业仓储系统对接和信息平台搭建，降低企业自建仓储成本，满足仓储需求。</p>
                        </div>
                        <div class="solution_item_bd clear">
                            <div class="solution_item_sub">
                                <h5>仓储资源</h5>

                                <p>开放京东仓库资源，提供仓库管理系统及仓储规划，解决企业仓储需求的软硬件服务，一站式实现企业仓储需求。</p>
                            </div>
                            <div class="solution_item_sub solution_item_sub2">
                                <h5>仓储系统</h5>

                                <p>以京东仓储WMS系统的高度可配置性为依据，协助企业搭建自身仓储信息系统，实现企业自身业务与仓储系统的快速融合。</p>
                            </div>
                            <div class="solution_item_sub">
                                <h5>服务平台</h5>

                                <p>搭建仓储众包及信息化服务平台，整合全社会仓储资源，通过仓储硬件资源与软件资源的双重模式，实现共享仓储资源和打造仓储服务生态。</p>
                            </div>
                        </div>
                    </div>

                    <div @mouseover='toggleLoc(2)' :class="{on:checkOnLoc==2}" class="solution_item solution_second">
                        <div class="solution_item_hd">
                            <i class="mod_iconfont"></i>
                            <h4>配送服务</h4>

                            <p>基于京东配送系统和大数据的技术能力，开放京东配送资源和稳定高效的配送系统，降低企业自建配送成本，提升配送体验。</p>
                        </div>
                        <div class="solution_item_bd clear">
                            <div class="solution_item_sub solution_mgt">
                                <h5>配送资源</h5>

                                <p>提供京东物流配送资源，对接京东配送服务开放平台，降低企业配送成本，提高企业配送服务质量。</p>
                            </div>
                            <div class="solution_item_sub solution_mgt">
                                <h5>配送系统</h5>

                                <p>以企业需求和特性为切入点，结合京东配送系统的技术和产品，打造企业综合物流配送系统，提升物流管理效率。</p>
                            </div>
                            <div class="solution_item_sub">
                                <h5>服务平台</h5>

                                <p>构建物流网络信息综合平台，巩固企业主营业务，拓展企业其他物流服务，全面提供企业物流服务质量。</p>
                            </div>
                            <div class="solution_item_sub">
                                <h5>创新物流</h5>

                                <p>提供车辆众包与配送众包双重服务，整合全社会车辆和人力配送资源，搭建全民众包运营配送体系，实现全面配送覆盖。</p>
                            </div>
                        </div>
                    </div>

                    <div @mouseover='toggleLoc(3)' :class="{on:checkOnLoc==3}" class="solution_item solution_third">
                        <div class="solution_item_hd">
                            <i class="mod_iconfont"></i>
                            <h4>方案咨询</h4>

                            <p>定制化的为政府和企业提供物流建设咨询服务和运营规划相关培训与指导。</p>
                        </div>
                        <div class="solution_item_bd clear">
                            <div class="solution_item_sub first">
                                <h5>物流战略规划</h5>

                                <p>通过定性和定量分析，提供适合企业自身业务发展的物流建设咨询方案。</p>
                            </div>
                            <div class="solution_item_sub">
                                <h5>物流网络规划</h5>

                                <p>帮助企业设计和规划物流网络，降低企业自建运输和仓储成本，提升服务水平。</p>
                            </div>
                            <div class="solution_item_sub">
                                <h5>库内规划</h5>

                                <p>提供仓库工程与设施规划咨询服务，改进仓储流程管理，提高业务处理能力。</p>
                            </div>
                            <div class="solution_item_sub last">
                                <h5>运营培训</h5>

                                <p>提供京东物流运营建设培训，输出运营管理体系建设与运营管理方法。</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </div>


    <div class="service">
        <div class="loc_mod_inner">
            <div class="loc_mod_hd">
                <h3>开放创新 多样服务</h3>

                <p>OPEN INNOVATIONS AND MULTIPLICITY OF SERVICE</p>
                <i class="loc_mod_arrow"></i>

            </div>
            <div class="loc_mod_bd clear">

                <div class="service_item service_item_text1">
                    <h4>车辆众包</h4>

                    <p>在发布运输任务后，基于LBS定位任务坐标，在车辆众包池中按照众包模型匹配适配车辆，车辆接受配送任务后，上门接货并完成服务。任务完成后，车辆释放，重新回到车辆众包池等待接收新任务。</p>
                </div>
                <div class="service_item service_item_text2">
                    <h4>仓储管理</h4>

                    <p>京东的仓储资源开放，连通商家后台系统与第三方快递，实现“订单下达-库存入出-运单实现”完整流转过程。</p>
                </div>
                <div class="service_item service_item_text3">
                    <h4>物流大数据云服务</h4>

                    <p>通过大数据分析建立物流数据服务，对物流相关数据，如配送信用体系、财务预算、质量安全等分析，更好的为物流应用和建设提供支持与保障。</p>
                </div>
                <div class="service_item service_item_shape1"></div>
                <div class="service_item service_item_shape2"></div>
                <div class="service_item service_item_shape3"></div>
                <div class="service_item service_item_shape4"></div>
                <div class="service_item service_item_shape5"></div>
                <div class="service_item service_item_car"></div>
                <div class="service_item service_item_circle"></div>
                <div class="service_item service_item_car"></div>
                <div class="service_item service_item_icon service_item_icon1"><i class="mod_iconfont"></i><span class="service_dot"></span></div>
                <div class="service_item service_item_icon service_item_icon2"><i class="mod_iconfont"></i><span class="service_dot"></span></div>
                <div class="service_item service_item_icon service_item_icon3"><i class="mod_iconfont"></i><span class="service_dot"></span></div>

            </div>

        </div>
    </div>


    <div class="advage">
        <div class="loc_mod_inner">
            <div class="loc_mod_hd">
                <h3>独特优势 值得信赖</h3>

                <p>DISTINCTIVE ADVANTAGES AND TRUSTWORTHY</p>
                <i class="loc_mod_arrow"></i>

            </div>
            <div class="loc_mod_bd clear">

                <div class="advage_item">
                    <div class="advage_icon advage_icon1">

                    </div>
                    <div class="advage_info">
                        <h4>云计算技术</h4>

                        <p>安全、高效、稳定的云计算技术服务能力。</p>
                    </div>
                </div>
                <div class="advage_item">
                    <div class="advage_icon advage_icon2">

                    </div>
                    <div class="advage_info">
                        <h4>大数据应用</h4>

                        <p>丰富的大数据应用，实现物流价值最大化。</p>
                    </div>
                </div>
                <div class="advage_item">
                    <div class="advage_icon advage_icon3">

                    </div>
                    <div class="advage_info">
                        <h4>资源系统共享</h4>

                        <p>京东核心物流资源和系统平台开放，共享最专业化的仓配服务。</p>
                    </div>
                </div>
                <div class="advage_item">
                    <div class="advage_icon advage_icon4">

                    </div>
                    <div class="advage_info">
                        <h4>运营经验保障</h4>

                        <p>行业领先的物流运营经验，为企业发展规划提供咨询保障。</p>
                    </div>
                </div>

            </div>

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
  export default {
    data(){
      return{
        checkOnLoc:1,
      }
    },
    methods:{
      toggleLoc:function(ind){
        this.checkOnLoc = ind
      }
    }

  };
</script>

<style>
@import  '~assets/loc/css/index.css';
@import  '~assets/loc/css/index.min_9a802727.css';
.js-link{
      display: block;
    margin-top: 90px;
    margin-left: 20px;
    width: 140px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    background: #43aaed;
    transition: all .3s ease;
}
</style>
