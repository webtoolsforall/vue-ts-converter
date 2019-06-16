<template>
  <div>
     <div class="b2b-video-box">
        <div class="b2b-ivideo">
            <video autoplay loop   v-bind:src="Video">
                <!--<source src="https://os.alipayobjects.com/rmsportal/AQkpnOPrVZAYjOi.mp4" type="video/mp4">-->
                <!--<source src="https://os.alipayobjects.com/rmsportal/AQkpnOPrVZAYjOi.webm" type="video/webm">-->
            </video>
        </div>
    </div>

    <div class="b2b-banner">
        <div class="bg-banner">
            <div class="b2b-box">
                <h2 class="b2b-ih2">亿万企业 亿万电商</h2>
                <div id="tab">
                    <ul class="b2b-ilst">
                        <li><a target="_blank" href="/solution/b2b" clstag="pageclick|keycount|jcloud_b2b_201609071|1"><i class="b2b-icon"></i><strong>JCMall &gt;&gt;</strong><span class="b2b-iline"></span></a></li>
                        <li><a target="_blank" href="/solution/b2c" clstag="pageclick|keycount|jcloud_b2b_201609071|1"><i class="b2b-icon2"></i><strong>JCStore &gt;&gt;</strong><span class="b2b-iline"></span></a></li>
                        <li><i class="b2b-icon3"></i><strong>JCPlatform</strong></li>
                    </ul>
                </div>
                <a href="//book.jdcloud.com/opentenant/apply" target="_blank" class="b2b-ilink" clstag="pageclick|keycount|jcloud_b2b_201609071|2">免费试用 JCMall</a>
                <a href="//book.jdcloud.com/jcuser/autoLoginPlatform" target="_blank" class="b2b-ilink bg-tm">前往我的 JCMall</a>
            </div>
        </div>
        <div class="b2b-ibottom">
            <div class="b2b-ibox">
                <div class="b2b-ileft"><i class="b2b-icon6"></i> 为商家带来 <strong class="b2b-ifs24">8,150,000 </strong>商机</div>
                <div class="b2b-ibg">

                    <ul class="b2b-ilst2">
                        <li><i class="b2b-icon7"></i> <span class="txt-blue">咨询热线</span> 400 615 1212</li>
                        <li><i class="b2b-icon8"></i> <span class="txt-blue">电子邮箱</span> jdcloud@jd.com</li>
                    </ul>
                    <div class="b2b-icode"><img :src="qrCode" alt="京东云微信公众号" width="90" height="90" class="mb5">京东云微信公众号</div>
                </div>
            </div>
        </div>


    </div>


    <div class="mod_partner b2b-solution">
        <div class="b2b-solution-bg"></div>
        <div class="mod_partner_inner">
            <div class="mod_partner_hd">
                <h3>产品解决方案</h3>
                <p>PRODUCT SOLUTIONS</p>
                <i class="mod_partner_arrow"></i>
            </div>
            <!--            <div class="mod_partner_bd">
                            <p class="weilian-p">以各行业特色为依据，界面精工细作，布局灵活配置，模块功能齐全。<br>
                                简约大方亦精致，轻巧高速易维护，操作简单，使用便捷，全面提升网站购物体验。</p>
                        </div>-->


            <div class="case_col">
                <div class="case_col_box">

                    <div  @mouseover='toggleSlide(1)' :class="{on:checkOnSlide==1}" class="case_item case_item_eco">
                        <div class="case_item_box">
                            <div class="case_item_side">
                                <div class="case_item_tit">
                                    <h4>JCMall</h4>

                                    <div class="case_item_tit_line"></div>
                                </div>
                                <div class="mod_iconfont iconfont case_item_side_bg">&#xe62a;</div>
                            </div>
                            <div class="case_item_main">
                                <div class="case_list">
                                    <div class="case_list_box">
                                        <a href="javascript:;" class="case_show">
                                            <div class="case_show_icon">
                                                <span class="mod_ver_line"></span>
                                                <i class="iconfont case_show_icon_img">&#xe65c;</i>
                                            </div>
                                            <div class="case_show_tit">专业市场</div>
                                            <div class="case_show_hover"><span><i></i></span></div>
                                        </a>
                                        <a href="javascript:;" class="case_show case_show_even">
                                            <div class="case_show_icon">
                                                <span class="mod_ver_line"></span>
                                                <i class="iconfont case_show_icon_img">&#xe657;</i>
                                            </div>
                                            <div class="case_show_tit">垂直采购平台</div>
                                            <div class="case_show_hover"><span><i></i></span></div>
                                        </a>
                                        <a href="javascript:;" class="case_show">
                                            <div class="case_show_icon">
                                                <span class="mod_ver_line"></span>
                                                <i class="iconfont case_show_icon_img">&#xe65a;</i>
                                            </div>
                                            <div class="case_show_tit">分销商</div>
                                            <div class="case_show_hover"><span><i></i></span></div>
                                        </a>
                                        <a href="javascript:;" class="case_show case_show_even">
                                            <div class="case_show_icon">
                                                <span class="mod_ver_line"></span>
                                                <i class="iconfont case_show_icon_img">&#xe668;</i>
                                            </div>
                                            <div class="case_show_tit">垂直分销平台</div>
                                            <div class="case_show_hover"><span><i></i></span></div>
                                        </a>
                                    </div>

                                </div>
                                <div class="case_desc">
                                    <div class="case_desc_view on">
                                        <h3 class="case-h3">面向专业市场、批发市场及品牌企业的B2B交易分销平台</h3>
                                        <dl>
                                            <dt>我们为您提供：</dt>
                                            <dd>· 集采、销、购为一体的云交易网站</dd>
                                            <dd>· 企业构建一站式线上采购服务平台</dd>
                                            <dd>· 企业线上线下分销服务平台</dd>
                                            <dd>· 物流、数据、资金流沉淀变现平台</dd>
                                            <dd>· 上下游及产业生态圈建设基础</dd>
                                        </dl>
                                    </div>

                                </div>
                                <div class="case_btn">
                                    <a href="//book.jdcloud.com/opentenant/apply" class="case_btn_lk" target="_blank"><span class="mod_ver_line"></span><span class="case_btn_txt">免费试用 JCMall</span><i class="mod_iconfont">&#xe650;</i></a>
                                    <a href="//book.jdcloud.com/jcuser/autoLoginPlatform" class="case_btn_lk" target="_blank"><span class="mod_ver_line"></span><span class="case_btn_txt">前往我的 JCMall</span><i class="mod_iconfont">&#xe650;</i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div  @mouseover='toggleSlide(2)' :class="{on:checkOnSlide==2}" class="case_item case_item_log">
                        <div class="case_item_box">
                            <div class="case_item_side">
                                <div class="case_item_tit">
                                    <h4>JCStore</h4>

                                    <div class="case_item_tit_line"></div>
                                </div>
                                <div class="iconfont case_item_side_bg">&#xe629;</div>
                            </div>
                            <div class="case_item_main">
                                <div class="case_list">
                                    <div class="case_list_box">
                                        <a href="javascript:;" class="case_show">
                                            <div class="case_show_icon">
                                                <span class="mod_ver_line"></span>
                                                <i class="iconfont case_show_icon_img">&#xe657;</i>
                                            </div>
                                            <div class="case_show_tit">生产制造企业</div>
                                            <div class="case_show_hover"><span><i></i></span></div>
                                        </a>
                                        <a href="javascript:;" class="case_show case_show_even">
                                            <div class="case_show_icon">
                                                <span class="mod_ver_line"></span>
                                                <i class="iconfont case_show_icon_img">&#xe658;</i>
                                            </div>
                                            <div class="case_show_tit">品牌商及经销商</div>
                                            <div class="case_show_hover"><span><i></i></span></div>
                                        </a>
                                        <a href="javascript:;" class="case_show">
                                            <div class="case_show_icon">
                                                <span class="mod_ver_line"></span>
                                                <i class="iconfont case_show_icon_img">&#xe65b;</i>
                                            </div>
                                            <div class="case_show_tit">线下零售门店</div>
                                            <div class="case_show_hover"><span><i></i></span></div>
                                        </a>

                                    </div>
                                </div>
                                <div class="case_desc">
                                    <div class="case_desc_view on">
                                        <h3 class="case-h3">面向制造企业、品牌商及零售商的B2C/C2C交易平台 </h3>
                                        <dl>
                                            <dt>我们为您提供：</dt>
                                            <dd>· 独立的品牌电商官网</dd>
                                            <dd>· 线上线下闭环交易体验</dd>
                                            <dd>· 数据化运营与管理模式</dd>
                                            <dd>· 移动互联交易场景升级</dd>
                                            <dd>· 丰富的电商资源服务能力</dd>
                                        </dl>
                                    </div>

                                </div>
                                <div class="case_btn">
                                    <a href="//book.jdcloud.com/jcuser/apply?productType=1" class="case_btn_lk" target="_blank"><span class="mod_ver_line"></span><span
                                            class="case_btn_txt">申请试用</span><i class="mod_iconfont">&#xe650;</i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div  @mouseover='toggleSlide(3)' :class="{on:checkOnSlide==3}" class="case_item case_item_smt">
                        <div class="case_item_box">
                            <div class="case_item_side">
                                <div class="case_item_tit">
                                    <h4>JCPlatform</h4>

                                    <div class="case_item_tit_line"></div>
                                </div>
                                <div class="iconfont case_item_side_bg">&#xe628;</div>
                            </div>
                            <div class="case_item_main">
                                <div class="case_list">
                                    <div class="case_list_box">
                                        <a href="javascript:;" class="case_show">
                                            <div class="case_show_icon">
                                                <span class="mod_ver_line"></span>
                                                <i class="mod_iconfont case_show_icon_img">&#xe659;</i>
                                            </div>
                                            <div class="case_show_tit">品牌商</div>
                                            <div class="case_show_hover"><span><i></i></span></div>
                                        </a>
                                        <a href="javascript:;" class="case_show case_show_even">
                                            <div class="case_show_icon">
                                                <span class="mod_ver_line"></span>
                                                <i class="mod_iconfont case_show_icon_img">&#xe657;</i>
                                            </div>
                                            <div class="case_show_tit">生产商</div>
                                            <div class="case_show_hover"><span><i></i></span></div>
                                        </a>
                                        <a href="javascript:;" class="case_show">
                                            <div class="case_show_icon">
                                                <span class="mod_ver_line"></span>
                                                <i class="mod_iconfont case_show_icon_img">&#xe65c;</i>
                                            </div>
                                            <div class="case_show_tit">专业市场</div>
                                            <div class="case_show_hover"><span><i></i></span></div>
                                        </a>

                                        <a href="javascript:;" class="case_show case_show_even">
                                            <div class="case_show_icon">
                                                <span class="mod_ver_line"></span>
                                                <i class="mod_iconfont case_show_icon_img">&#xe656;</i>
                                            </div>
                                            <div class="case_show_tit">批发市场</div>
                                            <div class="case_show_hover"><span><i></i></span></div>
                                        </a>
                                        <a href="javascript:;" class="case_show case_show_even">
                                            <div class="case_show_icon">
                                                <span class="mod_ver_line"></span>
                                                <i class="mod_iconfont case_show_icon_img">&#xe658;</i>
                                            </div>
                                            <div class="case_show_tit">批发商</div>
                                            <div class="case_show_hover"><span><i></i></span></div>
                                        </a>
                                        <a href="javascript:;" class="case_show">
                                            <div class="case_show_icon">
                                                <span class="mod_ver_line"></span>
                                                <i class="mod_iconfont case_show_icon_img">&#xe65b;</i>
                                            </div>
                                            <div class="case_show_tit">零售商</div>
                                            <div class="case_show_hover"><span><i></i></span></div>
                                        </a>


                                    </div>

                                </div>
                                <div class="case_desc">
                                    <div class="case_desc_view on">
                                        <h3 class="case-h3">面向批发商、零售商的B2C/C2C交易平台 </h3>
                                        <dl>
                                            <dt>我们为您提供：</dt>
                                            <dd>· 多渠道产品、营销、订单、会员、库存管理；</dd>
                                            <dd>· 多场景的体验、互动、交易形态；</dd>
                                            <dd>· 多终端履约方式；</dd>
                                        </dl>
                                    </div>

                                </div>
                                <div class="case_btn">
                                    <a href="//book.jdcloud.com/jcuser/apply?productType=2" class="case_btn_lk" target="_blank"><span class="mod_ver_line"></span><span
                                            class="case_btn_txt">申请试用</span><i class="mod_iconfont">&#xe650;</i></a>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>






        </div>
    </div>

    <div class="mod_partner price ">
        <div class="mod_partner_inner">
            <div class="mod_partner_hd">
                <h3>产品价值</h3>
                <p>PRODUCT VALUE</p>
                <i class="mod_partner_arrow"></i>

            </div>
            <div class="mod_partner_bd">

                <ul class="price-lst">
                    <li>
                        <i></i>
                        <p class="price-p">有效扩大目标客户群体基数<br>促进线下业务开展</p>
                    </li>
                    <li>
                        <i class="price-i2"></i>
                        <p class="price-p2">显著提高销售额和收入</p>
                    </li>
                    <li>
                        <i class="price-i3"></i>
                        <p class="price-p">提升传统企业市场盈利能力</p>
                    </li>
                    <li>
                        <i class="price-i4"></i>
                        <p class="price-p">快速部署建立标准的网上商<br>
                            城业务</p>
                    </li>
                    <li>
                        <i class="price-i5"></i>
                        <p class="price-p2">简化系统管理 降低IT成本</p>
                    </li>
                    <li>
                        <i class="price-i6"></i>
                        <p class="price-p2">提高电子商务客户服务能力</p>
                    </li>
                </ul>
            </div>

        </div>
    </div>

    <div class="mod_partner value ">
        <div class="mod_partner_inner">
            <div class="mod_partner_hd">
                <h3>产品优势</h3>
                <p>PRODUCT VALUE</p>
                <i class="mod_partner_arrow"></i>

            </div>
            <div class="mod_partner_bd">


            </div>

        </div>
    </div>

     <div class="mod_partner b2b-service ">
        <div class="mod_partner_inner">
            <div class="mod_partner_hd">
                <h3>对接服务</h3>
                <p>SOPHISTICATED SOLUTIONS</p>
                <i class="mod_partner_arrow"></i>

            </div>
            <div class="mod_partner_bd">

                <div id="stepw">

                    <div class="b2b-stabp">
                        <div  :class="{show:checkOnStep==1}" class="b2bStep b2b-sstep"></div>
                        <div  :class="{show:checkOnStep==2}" class="b2bStep b2b-sstep2"></div>
                        <div  :class="{show:checkOnStep==3}" class="b2bStep b2b-sstep3"></div>
                    </div>
                    <ul class="b2b-slst">
                        <li @mouseover='toggleStep(1)' :class="{on:checkOnStep==1}">
                            <div class="b2b-sbox">
                                <span class="b2b-stepnum">STEP<span class="b2b-sfs16">1</span></span>
                                传统企业电商转型<br>战略咨询
                            </div>
                            <span class="b2b-circle"></span>
                        </li>
                        <li @mouseover='toggleStep(2)' :class="{on:checkOnStep==2}">
                            <div class="b2b-sbox">
                                <span class="b2b-stepnum">STEP<span class="b2b-sfs16">2</span></span>
                                电商交易平台搭建
                            </div>
                            <span class="b2b-circle"></span>
                        </li>
                        <li @mouseover='toggleStep(3)' :class="{on:checkOnStep==3}">
                            <div class="b2b-sbox">
                                <span class="b2b-stepnum">STEP<span class="b2b-sfs16">3</span></span>
                                电商交易平台<br>
                                运营与优化
                            </div>
                            <span class="b2b-circle"></span>
                        </li>
                    </ul>
                    <div class="b2b-line"></div>
                </div>
            </div>

        </div>
    </div>


    <div class="mod_partner case2 ">
        <div class="mod_partner_inner">
            <div class="mod_partner_hd">
                <h3>客户案例</h3>
                <p>CUSTOMER CASE</p>
                <i class="mod_partner_arrow"></i>

            </div>
            <div class="mod_partner_bd">
                <ul class="case2-lst">
                    <li>
                        <i></i>
                        <h4>中国铁路物资股份有限公司</h4>
                        采用供应链一体化服务的模式构建大宗商品<br>
                        电商平台，提高企业服务能力和盈利能力
                    </li>
                    <li>
                        <i class="case2-i2"></i>
                        <h4>河南京莎电子商务发展有限公司</h4>
                        服务全国厂商、品牌商、终端零售商<br>
                        为主的B2B鞋业批发采购平台
                    </li>
                    <li>
                        <i class="case2-i3"></i>
                        <h4>佛山市广进创富企业资产管理有限公司</h4>
                        将线上线下的不同优势进行融合互补，构建新型<br>O2O渠道生态圈，完成实体商贸业的转型升级
                    </li>
                    <li class="case2-last">
                        <i class="case2-i4"></i>
                        <h4>北京市包整电子商务有限公司</h4>
                        帮助垂直行业领域企业，建立起面向全国市场的<br>电商交易网站，打破地域局限，增强行业竞争力
                    </li>

                </ul>

            </div>

        </div>
    </div>

  </div>
</template>

<script>
import img from "assets/dsy/images/qrCode.jpg"
import Video from "assets/dsy/jcloud-video.mp4"

  export default {
      data(){
      return{
        qrCode:img,
        Video:Video,
        checkOnSlide:1,
        checkOnStep:1,
          }
        },
        methods:{
          toggleSlide:function(ind){
            this.checkOnSlide = ind
          },
           toggleStep:function(ind){
            this.checkOnStep = ind
          }
        }


  };
</script>

<style>
@import  '~assets/dsy/css/index.css';

.b2bStep{
  display:none;
}

.show{
  display:block;
}
</style>
