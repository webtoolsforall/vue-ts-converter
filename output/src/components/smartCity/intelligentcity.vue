<template>
  <div class="smart_city_container">

    <!-- video start -->
    <div class="jdc_compaign_video_wrap">
      <div class="inner_video_wrap">
        <video
          id="my-player"
          class="video video-js"
          controls
          preload="auto"
          poster=""
          data-setup='{}'
        >
          <source
            src="//jdc-static.oss.cn-north-1.jcloudcs.com/jdc-about-static/yunduoshuo/07security.mp4"
            type="video/mp4"
            id="my-player-source"
          />
        </video>
        <div
          class="close"
          id="close"
          @click="closeVideo"
          :clstag="`IntelligentCity|keycount|MiddleContentSec|closeVideo`"
        >
        </div>
      </div>
    </div>
    <!-- video end -->
    <div class="smart_city_download_dialog">
      <div class="smart_city_download_mask">
      </div>
      <div class="smart_city_download_form">
        <img
          src="/static/img/smartCity/icon_remove_spec.png"
          alt=""
          class="smart_city_download_dialog_close"
          @click="closeDownloadModal"
          clstag="IntelligentCity|keycount|MiddleContentSec|closeDialog"
        >
        <div class="smart_city_download_form_title">
          智能城市白皮书下载
        </div>
        <div class="smart_city_download_form_content">
          <div class="smart_city_download_form_item">
            <label for="name">姓名<span>*</span></label>
            <input
              type="text"
              id="name"
              name="name"
              v-model="name"
            >
            <p class="error_text"></p>
          </div>
          <div class="smart_city_download_form_item">
            <label for="email">邮箱<span>*</span></label>
            <input
              type="text"
              id="email"
              name="email"
              v-model="email"
            >
            <p class="error_text"></p>
          </div>
          <div class="smart_city_download_form_item">
            <label for="mobile">手机<span>*</span></label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              v-model="mobile"
            >
            <p class="error_text"></p>
          </div>
          <div class="smart_city_download_form_item">
            <label for="company">公司<span>*</span></label>
            <input
              type="text"
              id="company"
              name="company"
              v-model="company"
            >
            <p class="error_text"></p>
          </div>
          <div class="smart_city_download_form_item selectWrap">
            <label for="industry">行业</label>
            <select
              id="industry"
              class="selectIndustry"
              name="industry"
            >
              <option></option>
            </select>
          </div>
          <div class="smart_city_download_form_item selectWrap">
            <label for="duty">职务</label>
            <select
              id="duty"
              class="selectDuty"
              name="duty"
            >
              <option></option>
            </select>
          </div>
          <div class="smart_city_download_form_item selectWrap ifNeed">
            <input
              type="checkbox"
              id="ifNeed"
              v-model="ifNeed"
            > <span>如果您需要纸质白皮书，请勾选并填写地址。</span>
          </div>
          <div
            class="smart_city_download_form_item selectWrap"
            v-show="ifNeed"
          >
            <label for="address">省市区<span>*</span></label>
            <div
              class="smart_city_area ui-area-wrap"
              id="address"
            >
              <div class="ui-area-text-wrap">
                <!--展示内容主体-->
                <div class="ui-area-text"></div>
                <!--显示被选中的地区-->
                <b></b>
                <!--小箭头-->
              </div>
              <div class="ui-area-content-wrap">
                <!--弹出内容主体-->
                <div class="ui-area-tab"></div>
                <!--省市区选择标签-->
                <div class="ui-area-content"></div>
                <!--地区内容-->
                <div class="ui-area-close"></div>
                <!--关闭按钮-->
              </div>
            </div>
            <p class="error_text"></p>
          </div>
          <div
            class="smart_city_download_form_item"
            v-show="ifNeed"
          >
            <label for="detail_address">详细地址<span>*</span></label>
            <input
              type="text"
              id="detail_address"
              v-model="detail_address"
              name="detail_address"
              placeholder="请填写详细地址（精确到门牌号）"
            >
            <p class="error_text"></p>
          </div>
          <button
            class="smart_city_download_form_btn jdc_bg jdc_btn_hover"
            id="submit_btn"
            @click="submitForm"
            :clstag="`IntelligentCity|keycount|MiddleContentSec|submitForm`"
           
          >提交</button>
        </div>

      </div>
    </div>
    <div class="smart_city_banner">
      <div class="content_container">
        <img
          src="/static/img/smartCity/banner_title.png"
          alt=""
          class="banner_title"
        >
        <!-- <button
          class="jdc_compaign_video_item"
          @click="playVideo"
          data-src="http://jdc-static.oss.cn-north-1.jcloudcs.com/jdc-about-static/yunduoshuo/07security.mp4"
          data-event="VideoSmartCityClick"
        >观看视频</button> -->
        <button @click="showDownloadModal('SectionBannerSec',1)" class=""
        clstag="IntelligentCity|keycount|SectionBannerSec|downLoad_1"
        >
          下载白皮书
        </button>
      </div>
    </div>
    <!-- 顶部tab栏 start -->
    <div class="jdc_compaign_top_tab_wrap normal smart_city_hidden_xs">
      <div class="jdc_compaign_top_tab">
        <div class="jdc_compaign_tab_item active one"
        :clstag="`IntelligentCity|keycount|MiddleContentSec|tab_1`"
        @click="gaEventTrigger('IntelligentCity|keycount|MiddleContentSec', `IntelligentCity|keycount|MiddleContentSec|tab_1`)"
        >
          智能城市白皮书
        </div>
        <div class="jdc_compaign_tab_item two"
        :clstag="`IntelligentCity|keycount|MiddleContentSec|tab_2`"
        @click="gaEventTrigger('IntelligentCity|keycount|MiddleContentSec', `IntelligentCity|keycount|MiddleContentSec|tab_2`)"
        >
          智能城市解决方案
        </div>
        <div class="jdc_compaign_tab_item three"
        :clstag="`IntelligentCity|keycount|MiddleContentSec|tab_3`"
        @click="gaEventTrigger('IntelligentCity|keycount|MiddleContentSec', `IntelligentCity|keycount|MiddleContentSec|tab_3`)"
        >
          智能城市案例
        </div>
      </div>
    </div>
    <!-- 顶部tab栏 end -->
    <!-- 智能城市白皮书 -->
    <div
      class="smart_city_paper smart_city_hidden_xs smart_city_section"
      id="content01"
    >
      <div class="smart_city_paper_bd">
        <div class="smart_city_section_title">
          <span class="smart_city_section_title_bg"></span>
          <p>智能城市白皮书</p>
          <p>WHITE PAPER</p>
        </div>
        <div class="smart_city_paper_content">
          <div class="smart_city_paper_content_left">
            <span>多维赋“能”</span>
            <span>生态造“市”</span>
            <span>技术聚“智”</span>
            <span>平台筑“城”</span>
            <span>——京东云•智能城市合伙人</span>
          </div>
          <div class="smart_city_paper_content_right">
            <div class="smart_city_paper_content_right_inner">
              <div class="smart_city_paper_content_right_title">
                <p>京东云智能城市白皮书</p>
                <div><span>重磅发布</span><span class="smart_city_paper_content_right_triangle"></span></div>
              </div>
              <img
                class="smart_city_paper_content_right_book"
                src="/static/img/smartCity/whitepaper-book.jpg"
              >
              <div
                class="smart_city_paper_content_right_btn"
                @click="showDownloadModal('MiddleContentSec',1)"
                clstag="IntelligentCity|keycount|MiddleContentSec|downLoad_1"
              >下载</div>
              <span class="smart_city_paper_content_right_tips">*1月17日开放下载</span>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div class="smart_city_paper_xs smart_city_section smart_city_visible_xs">
      <div class="smart_city_paper_content_xs">
        <div class="smart_city_section_title">
          <span class="smart_city_section_title_bg"></span>
          <p>智能城市白皮书</p>
          <p>WHITE PAPER</p>
        </div>
        <div class="smart_city_paper_content_left_xs">
        </div>
        <h3 class="smart_city_paper_content_subtit_xs">
          京东云智能城市白皮书重磅发布
        </h3>
        <div class="smart_city_paper_content_img_xs">
          <img src="/static/img/smartCity/whitepaper-book.jpg">

        </div>
        <div
          class="smart_city_paper_content_btn_xs smart_city_paper_content_right_btn"
          @click="showDownloadModal('MiddleContentSec',2)"
          clstag="IntelligentCity|keycount|MiddleContentSec|downLoad_2"
        >
          <span>下载</span>
        </div>
        <p class="smart_city_paper_content_btn_tips_xs">*1月17日开放下载</p>
      </div>
    </div>
    <!-- 智能城市解决方案 -->
    <div
      class="smart_city_section three"
      id="content02"
    >
      <div class="smart_city_section_content content_container">
        <div class="smart_city_section_title">
          <span class="smart_city_section_title_bg"></span>
          <p>智能城市解决方案</p>
          <p>SOLUTION</p>
          <p>京东云智能城市，致力于全方位实现“善政、兴业、惠民、筑基、共生” 的目标，助力城市数字化转型升级，让城市生活更简单美好。</p>
        </div>
        <div class="smart_city_section_video_wrap">
          <div class="smart_city_section_video current one">
            <p class="smart_city_section_video_title">京东云智能城市 <br>让城市生活更简单美好</p>
            <div
              class="smart_city_section_video_play jdc_compaign_video_item"
              data-src="//jdc-static.oss.cn-north-1.jcloudcs.com/jdc-about-static/smart_city/introduction.mp4"
              data-event="VideoSecurityLClick"
              :clstag="`IntelligentCity|keycount|MiddleContentSec|playVideo`"
              @click="gaEventTrigger('IntelligentCity|keycount|MiddleContentSec', `IntelligentCity|keycount|MiddleContentSec|playVideo`)"
            >
              <img
                src="/static/img/smartCity/solution/icon_play.png"
                alt=""
              >
              <p>播放</p>
            </div>
          </div>
          <!-- <div class="smart_city_section_video two">
                        <p class="smart_city_section_video_title">一体机</p>
                        <div class="smart_city_section_video_play">
                            <img src="/static/img/smartCity/solution/icon_play.png" alt="">
                            <p>播放</p>
                        </div>
                    </div> -->
        </div>
        <div class="smart_city_section_table">
          <div class="smart_city_section_table_left">
            <p class="smart_city_section_table_tab current"
              :clstag="`IntelligentCity|keycount|MiddleContentSec|善政`"
              @click="gaEventTrigger('IntelligentCity|keycount|MiddleContentSec', `IntelligentCity|keycount|MiddleContentSec|善政`)"
            >
              <span></span>
              <span>善政</span>
            </p>
            <p class="smart_city_section_table_tab"
              :clstag="`IntelligentCity|keycount|MiddleContentSec|惠民`"
              @click="gaEventTrigger('IntelligentCity|keycount|MiddleContentSec', `IntelligentCity|keycount|MiddleContentSec|惠民`)"
            >
              <span></span>
              <span>惠民</span>
            </p>
            <p class="smart_city_section_table_tab"
              :clstag="`IntelligentCity|keycount|MiddleContentSec|兴业`"
              @click="gaEventTrigger('IntelligentCity|keycount|MiddleContentSec', `IntelligentCity|keycount|MiddleContentSec|兴业`)"
            >
              <span></span>
              <span>兴业</span>
            </p>
            <p class="smart_city_section_table_tab"
              :clstag="`IntelligentCity|keycount|MiddleContentSec|筑基`"
              @click="gaEventTrigger('IntelligentCity|keycount|MiddleContentSec', `IntelligentCity|keycount|MiddleContentSec|筑基`)"
            >
              <span></span>
              <span>筑基</span>
            </p>
            <p class="smart_city_section_table_tab"
              :clstag="`IntelligentCity|keycount|MiddleContentSec|共生`"
              @click="gaEventTrigger('IntelligentCity|keycount|MiddleContentSec', `IntelligentCity|keycount|MiddleContentSec|共生`)"
            >
              <span></span>
              <span>共生</span>
            </p>
          </div>
          <div class="smart_city_section_table_right one">
            <span class="light_bg"></span>
            <div class="smart_city_section_table_right_content one">
              <div class="smart_city_section_table_right_content_inner one">
                <div class="smart_city_section_table_right_content_inner_top">
                  <div>
                    <p>
                      <img
                        src="/static/img/smartCity/solution/icon/icon_jiaotong.png"
                        alt=""
                      >
                      <span>京东云脑·交通</span>
                    </p>
                    <p>
                      结合移动互联网、物联网、云计算、大数据、人工智能等新一代信息技术，全面整合城市交通相关的立体化数据，对全市交通进行路网监测、拥堵疏导、可视化调度、特种车通行保障等秩序管理，拥堵溯源、通行评测、信号灯优化等分析研判，全面提升城市交通智能化。
                    </p>
                  </div>
                  <div>
                    <p>
                      <img
                        src="/static/img/smartCity/solution/icon/icon_safe.png"
                        alt=""
                      >
                      <span>京东云脑·公共安全</span>
                    </p>
                    <p>
                      以智能前端、智能平台、智能应用为核心，实现三大智能突破。通过科学布局实现立体式、多维度数据采集，做到能采尽采，全方位信息收集。通过各类感知数据连通融合，建设一个具有视图管理、视图解析、视频大数据等能力的服务化平台；依托AI、知识图谱、算法模型，实现数据到智能的转换，为综治、公安提供可落地的实战应用。
                    </p>
                  </div>
                </div>
                <div class="smart_city_section_table_right_content_inner_bot">
                  <div>
                    <p>
                      <img
                        src="/static/img/smartCity/solution/icon/icon_IOC.png"
                        alt=""
                      >
                      <span>京东云脑·AIOC</span>
                    </p>
                    <p>
                      基于云计算、物联网、大数据、AI等新一代信息技术，汇聚城市业务运行数据、城市IoT资源，对城市的综合运行态势进行全面感知，打造城市管理仪表盘。对交通、环境、旅游、食品安全等重点领域风险进行分析、预防、预警；对突发事件进行应急联动处置；提供城市管理与发展的智能化决策。推动城市管理从以垂直治理为核心，走向融合共享的新模式。
                    </p>
                  </div>
                  <div>
                    <p>
                      <img
                        src="/static/img/smartCity/solution/icon/icon_zhengwu.png"
                        alt=""
                      >
                      <span>京东云脑·互联网+政务服务</span>
                    </p>
                    <p>
                      京东云坚持以人为本、深挖内涵、精细管理，从"供给端"发力，整合当地政务资源，简化政务服务界面，完善服务访问手段，丰富政务服务内容。通过线上线下融合的高效政务服务新模式，打造科技支撑在云端、就近便捷有温度、又有本地特色的政务服务平台。
                    </p>
                  </div>
                </div>
                <div
                  class="switch_arrow"
                  @click="switchRight('one')"
                  :clstag="`IntelligentCity|keycount|MiddleContentSec|switchRight_one_1`"
                ></div>
                <ul class="dot_list">
                  <li class="current"></li>
                  <li @click="switchRight('one')"
                    :clstag="`IntelligentCity|keycount|MiddleContentSec|switchRight_one_2`"
                  ></li>
                </ul>
              </div>
              <div class="smart_city_section_table_right_content_inner two">
                <div class="smart_city_section_table_right_content_inner_top">
                  <div>
                    <p>
                      <img
                        src="/static/img/smartCity/solution/icon/icon_yingji.png"
                        alt=""
                      >
                      <span>京东云脑·应急</span>
                    </p>
                    <p>
                      以京东在云计算、大数据、物联感知的技术能力为依托，整合京东在仓储空间、应急物资、物流配送等领域的社会化资源能力，联合各相关委办局、研究机构、专家智库等共同打造城市防灾基础大数据、应急业务大数据，为政府提供“平”“战”结合的灾害监测预警、救援指挥、决策支持等的应急管理平台，全面提升城市整体防灾减灾救灾能力的立体化、协同化、智能化及社会融合化。
                    </p>
                  </div>
                  <div>
                    <p>
                      <img
                        src="/static/img/smartCity/solution/icon/icon_huangbao.png"
                        alt=""
                      >
                      <span>京东云脑·环保</span>
                    </p>
                    <p>
                      依托京东遍布全国的物流网络，创新形成动态城市空气质量监测和固定空气质量监测的“双网结合”环保监测网，通过整合城市道路监控系统、气象数据、污染源清单、车流量以及城市功能区多维度数据进行融合，利用独有的在线云校准技术，对移动网格化数据进行校准，动静结合，实现了环境监测数据的精细化管理。
                    </p>
                  </div>
                </div>
                
                <div
                  class="switch_arrow"
                  @click="switchLeft('one')"
                  :clstag="`IntelligentCity|keycount|MiddleContentSec|switchLeft_one_1`"
                ></div>
                <ul class="dot_list">
                  <li @click="switchLeft('one')"
                  :clstag="`IntelligentCity|keycount|MiddleContentSec|switchLeft_one_2`"
                  ></li>
                  <li class="current"></li>
                </ul>
              </div>
            </div>
            <div class="smart_city_section_table_right_content two">
              <div class="smart_city_section_table_right_content_inner">
                <div class="smart_city_section_table_right_content_inner_top">
                  <div>
                    <p>
                      <img
                        src="/static/img/smartCity/solution/icon/icon_service.png"
                        alt=""
                      >
                      <span>城市服务平台</span>
                    </p>
                    <p>
                      城市服务平台以“为市民服务”为导向，构造了一体化“便民”服务体系，让市民用一个APP畅享城市所有服务。充分发挥大数据建设成果，及移动化大数据沉淀实现数据的汇聚与共享，实现市民享受服务时能够最大化地“少填少报”，真正实现“百姓少跑腿、数据多跑路”，从而提升市民的获得感和满足感。
                    </p>
                  </div>
                  <div>
                    <p>
                      <img
                        src="/static/img/smartCity/solution/icon/icon_shipin.png"
                        alt=""
                      >
                      <span>食品溯源</span>
                    </p>
                    <p>
                      将食品产业链参与者，包括种养殖基地、农批市场商户、配送商、政府监管部门、社会公众串连起来，形成食品流通与监管安全链生态圈
                      。建设食品安全三级防控体系：溯源、配送供应商快检、第三方检测。通过减少中间环节，降低时间与人工成本，提高城市农产品流通效率，优化农产品流通产业链结构效率与运营效率。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="smart_city_section_table_right_content three">
              <div class="smart_city_section_table_right_content_inner one">
                <div class="smart_city_section_table_right_content_inner_top">
                  <div>
                    <p>
                      <img
                        src="/static/img/smartCity/solution/icon/icon_chanye.png"
                        alt=""
                      >
                      <span>城市产业运营平台</span>
                    </p>
                    <p>
                      城市产业运营平台服务于城市产业发展，为属地企业提供全栈式、全链条、全场景的业务支撑。围绕企业经营“人财物研产供销服信”多个环节，汇聚产业数据，驱动企业精细化、产业数字化发展。提供一站式企业创新孵化服务平台，实现线上与线下的打通，融合京东运营服务能力，助力属地企业全渠道、品牌化发展。
                    </p>
                  </div>
                  <div>
                    <p>
                      <img
                        src="/static/img/smartCity/solution/icon/icon_nongye.png"
                        alt=""
                      >
                      <span>智能农业</span>
                    </p>
                    <p>
                      智能农业将整合采集、分析、处理、交换区域农业的生产、管理、流通、市场等数据，建立农业数字化生产、智能化流通、无界化销售的神农体系，即“神农大脑”、“神农在线”、“神农电商”、“神农渠道”、“神农助手”，提升农业生产、流通、品牌建设和乡村治理等场景的发展水平，推动农业产业扶贫进展，全面助力乡村振兴。
                    </p>
                  </div>
                </div>
                <div class="smart_city_section_table_right_content_inner_bot">
                  <div>
                    <p>
                      <img
                        src="/static/img/smartCity/solution/icon/icon_lvyou.png"
                        alt=""
                      >
                      <span>智能旅游</span>
                    </p>
                    <p>
                      以旅游大数据和当地特色旅游产业要素为基础，围绕“吃、住、行、游、购、娱”六大要素，为游客游前、游中、游后提供高品质服务，为政府提供安全有序的行业综合管理，推动城市旅游业实现平台化、数字化、电商化、智能化、产业化。
                    </p>
                  </div>
                  <div>
                    <p>
                      <img
                        src="/static/img/smartCity/solution/icon/icon_chanyeyun.png"
                        alt=""
                      >
                      <span>产业云</span>
                    </p>
                    <p>
                      整合京东平台及生态资源，构建数字经济产业园，以“链接企业与市场，补齐要素与产业”为手段，促进产业转型升级，加速产业生态集聚，实现地方特色产业“品牌化、电商化、标准化、数字化、基金化”，培育成为区域经济增长新动力。
                    </p>
                  </div>
                </div>
                <div
                  class="switch_arrow"
                  @click="switchRight('three')"
                  :clstag="`IntelligentCity|keycount|MiddleContentSec|switchRight_three_1`"
                ></div>
                <ul class="dot_list">
                  <li class="current"></li>
                  <li @click="switchRight('three')"
                  :clstag="`IntelligentCity|keycount|MiddleContentSec|switchRight_three_2`"
                  ></li>
                </ul>
              </div>
              <div class="smart_city_section_table_right_content_inner two">
                <div class="smart_city_section_table_right_content_inner_top">
                  <div>
                    <p>
                      <img
                        src="/static/img/smartCity/solution/icon/icon_gongye.png"
                        alt=""
                      >
                      <span>工业互联网</span>
                    </p>
                    <p>
                      构建京东工业互联网平台，为制造企业提供研、产、供、销一站式工业应用服务，促进由“企业内部纵向集成”向“企业之间横向集成”和“产业价值链端到端集成”延伸，发展智能化生产、个性化定制、网络化协同和服务化转型的制造新模式，实现企业降本、增效、提质、扩销，推进工业企业转型创新，形成产业链企业聚集效应，培育城市工业发展新动能。
                    </p>
                  </div>
                  <div>
                    <p>
                      <img
                        src="/static/img/smartCity/solution/icon/icon_yiliao.png"
                        alt=""
                      >
                      <span>智能医疗</span>
                    </p>
                    <p>
                      以医疗健康大数据中心为基础，改造优化诊疗、结算、用药、公卫、家庭医生服务、远程医疗、健康信息、应急救治、政务共享、检查检验等十方面服务流程和效率。打造智能医院云、医疗影像云、基层医疗云等解决方案，实现城市医疗资源下沉，为居民提供智能化的医疗健康服务。
                    </p>
                  </div>
                </div>
                <div class="smart_city_section_table_right_content_inner_bot">
                  <div>
                    <p>
                      <img
                        src="/static/img/smartCity/solution/icon/icon_jiaoyu.png"
                        alt=""
                      >
                      <span>智能教育</span>
                    </p>
                    <p>
                      面向未来校园、未来课堂、智能教学三大场景，提供完整的智能教育平台，涵盖智能硬件、SAAS应用务、内容和服务，致力于解决硬件资源不足、内容资源不足、技术能力不足所带来的行业挑战，满足“数字一代”学习者的真实诉求。实现线上多渠道触达和线下解决方案落地，推动教育资源数字化、教具智能化和学习环境变革。
                    </p>
                  </div>
                  <div>
                    <p>
                      <img
                        src="/static/img/smartCity/solution/icon/icon_zhizao.png"
                        alt=""
                      >
                      <span>智能制造</span>
                    </p>
                    <p>
                      基于京东云开放创新平台，针对产品技术及设计创新、营销创新、人才培育、品牌打造等方面补齐当地智能化产业链要素，从创意、设计、研发、制造、定价到营销销售等环节，实现智能产品的一站式智能化升级，加速当地制造产业的智能化升级。
                    </p>
                  </div>
                </div>
                <div
                  class="switch_arrow"
                  @click="switchLeft('three')"
                  :clstag="`IntelligentCity|keycount|MiddleContentSec|switchLeft_three_1`"
                ></div>
                <ul class="dot_list">
                  <li @click="switchLeft('three')"
                  :clstag="`IntelligentCity|keycount|MiddleContentSec|switchLeft_three_2`"
                  ></li>
                  <li class="current"></li>
                </ul>
              </div>
            </div>
            <div class="smart_city_section_table_right_content four">
                <div class="smart_city_section_table_right_content_inner one">
                    <div class="smart_city_section_table_right_content_inner_top">
                        <div>
                            <p>
                                <img src="/static/img/smartCity/solution/icon/icon_gxwl.png" alt="">
                                <span>智能城市干线网络</span>
                            </p>
                            <p>
                              京东云联合本地政府共建云计算和大数据产业基地，打造城市数字基础设施，形成多级城市边缘节点，通过与京东公有云联动，构建一张覆盖全国的智能城市干线网络，让本地有机会获得产业要素补齐服务、专家资源、培训资源等优质的资源和服务，助力城市在数字经济时代实现变道超车。
                            </p>
                        </div>
                        
                        <div>
                            <p>
                            <img
                                src="/static/img/smartCity/solution/icon/icon_jszt.png"
                                alt=""
                            >
                            <span>技术中台</span>
                            </p>
                            <p>
                              京东云与本地政府共建城市技术中台基础设施，提供一站式云端DevOps，微服务、容器等云原生技术中台，实现城市公共业务服务下沉与新技术能力汇聚，将不断沉淀的专业化能力采用标准化、组件化、平台化、系统化的形式为上层应用提供赋能和支撑，不断提升城市IT技术生产力。
                            </p>
                        </div>
                    </div>
                    <div class="smart_city_section_table_right_content_inner_bot">
                        <div>
                            <p>
                                <img src="/static/img/smartCity/solution/icon/icon_zyy.png" alt="">
                                <span>JDStack</span>
                            </p>
                            <p>
                                超级电商成就超级云厂商，京东拥有全球最大规模的容器集群之一，每日调度百万台容器实例运转，实现全年99.99%高可靠运行，成功应对618、双11等的超级浪涌式冲击。京东云将输出京东技术能力为城市打造专有云平台（JDStack），提供全栈式、全频段、全场景、全生态云计算服务，全方位容灾体系，多层级安全防护架构，保证数据安全及服务的高可用，支撑城市政务上云、产业上云。
                            </p>
                        </div>
                        <div>
                            <p>
                                <img src="/static/img/smartCity/solution/icon/icon_sjzt.png" alt="">
                                <span>数据中台</span>
                            </p>
                            <p>
                              京东云与本地政府共建城市数据中台基础设施，形成生态大数据汇聚中心、城市公共大数据中心、智能场景大数据中心，完成政务与社会数据的汇聚融合，搭建海量数据全生命周期的管理平台，定制化提供服务于政府、产业、民生的数据智能应用，营造基于数据资源、开发环境、应用市场的全链条数创环境。
                            </p>
                        </div>
                    </div>
                    <div
                    class="switch_arrow"
                    @click="switchRight('four')"
                    :clstag="`IntelligentCity|keycount|MiddleContentSec|switchRight_one_1`"
                    ></div>
                    <ul class="dot_list">
                        <li class="current"></li>
                        <li @click="switchRight('four')"
                            :clstag="`IntelligentCity|keycount|MiddleContentSec|switchRight_one_2`"
                        ></li>
                    </ul>
                </div>
                <div class="smart_city_section_table_right_content_inner two">
                    <div class="smart_city_section_table_right_content_inner_top">
                        <div>
                            <p>
                                <img src="/static/img/smartCity/solution/icon/icon_aiot.png" alt="">
                                <span>AIoT</span>
                            </p>
                            <p>
                              京东云全力打造的智能物联网平台，集成了京东AI、IoT、大数据及云计算能力，实现遍布城市末端数以亿计的物联网设备的数据采集及远程管理，基于数据+算法模型，在公共服务、智能安防、智能社区、智能消防、智能工农业等领域实现场景智能化，为城市精细化管理和运营提供了全面的技术支撑和保障。
                            </p>
                        </div>
                    </div>
                    <div
                    class="switch_arrow"
                    @click="switchLeft('four')"
                    :clstag="`IntelligentCity|keycount|MiddleContentSec|switchLeft_one_1`"
                    ></div>
                    <ul class="dot_list">
                        <li @click="switchLeft('four')"
                        :clstag="`IntelligentCity|keycount|MiddleContentSec|switchLeft_one_2`"
                        ></li>
                        <li class="current"></li>
                    </ul>
                </div>
            </div>
            <div class="smart_city_section_table_right_content five">
                <div class="smart_city_section_table_right_content_inner">
                    <div class="smart_city_section_table_right_content_inner_top">
                        <div>
                            <p>
                                <img src="/static/img/smartCity/solution/icon/icon_xkjh.png" alt="">
                                <span>京东云星空计划</span>
                            </p>
                            <p>
                              京东云星空计划是京东云携手合作伙伴共建全景式智能城市服务系统的生态圈，京东云联合全产业链生态合作伙伴，双向赋能打造全景式、持续发展、有生命力的生态服务体系。在农业、旅游、医疗、教育、工业、交通等多个领域，京东云与金牌级、钻石级、使命级等各级合作伙伴建立“有核心、无边界、自组织、开放共享”的智能城市云上无界生态，让创新更容易发生，产业更容易发展。
                            </p>
                        </div>
                        <div>
                            <p>
                                <img src="/static/img/smartCity/solution/icon/icon_zzhb.png" alt="">
                                <span>智能环保</span>
                            </p>
                            <p>
                              依托京东遍布全国的物流网络，创新形成动态城市空气质量监测和固定空气质量监测的“双网结合”环保监测网，通过整合城市道路监控系统、气象数据、污染源清单、车流量以及城市功能区多维度数据进行融合，利用独有的在线云校准技术，对移动网格化数据进行校准，动静结合，实现了环境监测数据的精细化管理。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div class="smart_city_section_table_m">
          <ul class="solution_list">
            <li class="solution_item current">
              <div class="solution_item_top"
                :clstag="`IntelligentCity|keycount|MiddleContentSec|solution_item_1`"
                @click="gaEventTrigger('IntelligentCity|keycount|MiddleContentSec', `IntelligentCity|keycount|MiddleContentSec|solution_item_1`)"
              >
                <span></span>
                <span>善政</span>
                <img
                  src="/static/img/smartCity/solution/arrow_m.png"
                  alt=""
                >
              </div>
              <div class="solution_item_bot">
                <div class="solution_item_bot_section"
                >
                  <p>
                    <img
                      src="/static/img/smartCity/solution/icon/icon_jiaotong.png"
                      alt=""
                    >
                    <span>京东云脑·交通</span>
                  </p>
                  <p>
                    结合移动互联网、物联网、云计算、大数据、人工智能等新一代信息技术，全面整合城市交通相关的立体化数据，对全市交通进行路网监测、拥堵疏导、可视化调度、特种车通行保障等秩序管理，拥堵溯源、通行评测、信号灯优化等分析研判，全面提升城市交通智能化。
                  </p>
                </div>
                <div class="solution_item_bot_section"
                >
                  <p>
                    <img
                      src="/static/img/smartCity/solution/icon/icon_safe.png"
                      alt=""
                    >
                    <span>京东云脑·公共安全</span>
                  </p>
                  <p>
                    以智能前端、智能平台、智能应用为核心，实现三大智能突破。通过科学布局实现立体式、多维度数据采集，做到能采尽采，全方位信息收集。通过各类感知数据连通融合，建设一个具有视图管理、视图解析、视频大数据等能力的服务化平台；依托AI、知识图谱、算法模型，实现数据到智能的转换，为综治、公安提供可落地的实战应用。
                  </p>
                </div>
                <div class="solution_item_bot_section">
                  <p>
                    <img
                      src="/static/img/smartCity/solution/icon/icon_IOC.png"
                      alt=""
                    >
                    <span>京东云脑·AIOC</span>
                  </p>
                  <p>
                    基于云计算、物联网、大数据、AI等新一代信息技术，汇聚城市业务运行数据、城市IoT资源，对城市的综合运行态势进行全面感知，打造城市管理仪表盘。对交通、环境、旅游、食品安全等重点领域风险进行分析、预防、预警；对突发事件进行应急联动处置；提供城市管理与发展的智能化决策。推动城市管理从以垂直治理为核心，走向融合共享的新模式。
                  </p>
                </div>
                <div class="solution_item_bot_section">
                  <p>
                    <img
                      src="/static/img/smartCity/solution/icon/icon_zhengwu.png"
                      alt=""
                    >
                    <span>京东云脑·互联网+政务服务</span>
                  </p>
                  <p>
                    京东云坚持以人为本、深挖内涵、精细管理，从"供给端"发力，整合当地政务资源，简化政务服务界面，完善服务访问手段，丰富政务服务内容。通过线上线下融合的高效政务服务新模式，打造科技支撑在云端、就近便捷有温度、又有本地特色的政务服务平台。
                  </p>
                </div>
                <div class="solution_item_bot_section">
                  <p>
                    <img
                      src="/static/img/smartCity/solution/icon/icon_yingji.png"
                      alt=""
                    >
                    <span>京东云脑·应急</span>
                  </p>
                  <p>
                    以京东在云计算、大数据、物联感知的技术能力为依托，整合京东在仓储空间、应急物资、物流配送等领域的社会化资源能力，联合各相关委办局、研究机构、专家智库等共同打造城市防灾基础大数据、应急业务大数据，为政府提供“平”“战”结合的灾害监测预警、救援指挥、决策支持等的应急管理平台，全面提升城市整体防灾减灾救灾能力的立体化、协同化、智能化及社会融合化。
                  </p>
                </div>
                <div class="solution_item_bot_section">
                  <p>
                    <img
                      src="/static/img/smartCity/solution/icon/icon_huangbao.png"
                      alt=""
                    >
                    <span>京东云脑·环保</span>
                  </p>
                  <p>
                    依托京东遍布全国的物流网络，创新形成动态城市空气质量监测和固定空气质量监测的“双网结合”环保监测网，通过整合城市道路监控系统、气象数据、污染源清单、车流量以及城市功能区多维度数据进行融合，利用独有的在线云校准技术，对移动网格化数据进行校准，动静结合，实现了环境监测数据的精细化管理。
                  </p>
                </div>
              </div>
            </li>
            <li class="solution_item">
              <div class="solution_item_top"
                :clstag="`IntelligentCity|keycount|MiddleContentSec|solution_item_2`"
                @click="gaEventTrigger('IntelligentCity|keycount|MiddleContentSec', `IntelligentCity|keycount|MiddleContentSec|solution_item_2`)"
              >
                <span></span>
                <span>惠民</span>
                <img
                  src="/static/img/smartCity/solution/arrow_m.png"
                  alt=""
                >
              </div>
              <div class="solution_item_bot">
                <div class="solution_item_bot_section">
                  <p>
                    <img
                      src="/static/img/smartCity/solution/icon/icon_service.png"
                      alt=""
                    >
                    <span>城市服务平台</span>
                  </p>
                  <p>
                    城市服务平台以“为市民服务”为导向，构造了一体化“便民”服务体系，让市民用一个APP畅享城市所有服务。充分发挥大数据建设成果，及移动化大数据沉淀实现数据的汇聚与共享，实现市民享受服务时能够最大化地“少填少报”，真正实现“百姓少跑腿、数据多跑路”，从而提升市民的获得感和满足感。
                  </p>
                </div>
                <div class="solution_item_bot_section">
                  <p>
                    <img
                      src="/static/img/smartCity/solution/icon/icon_shipin.png"
                      alt=""
                    >
                    <span>食品溯源</span>
                  </p>
                  <p>
                    将食品产业链参与者，包括种养殖基地、农批市场商户、配送商、政府监管部门、社会公众串连起来，形成食品流通与监管安全链生态圈
                    。建设食品安全三级防控体系：溯源、配送供应商快检、第三方检测。通过减少中间环节，降低时间与人工成本，提高城市农产品流通效率，优化农产品流通产业链结构效率与运营效率。
                  </p>
                </div>
              </div>
            </li>
            <li class="solution_item">
              <div class="solution_item_top"
                :clstag="`IntelligentCity|keycount|MiddleContentSec|solution_item_3`"
                @click="gaEventTrigger('IntelligentCity|keycount|MiddleContentSec', `IntelligentCity|keycount|MiddleContentSec|solution_item_3`)"
              >
                <span></span>
                <span>兴业</span>
                <img
                  src="/static/img/smartCity/solution/arrow_m.png"
                  alt=""
                >
              </div>
              <div class="solution_item_bot">
                <div class="solution_item_bot_section">
                  <p>
                    <img
                      src="/static/img/smartCity/solution/icon/icon_chanye.png"
                      alt=""
                    >
                    <span>城市产业运营平台</span>
                  </p>
                  <p>
                    城市产业运营平台服务于城市产业发展，为属地企业提供全栈式、全链条、全场景的业务支撑。围绕企业经营“人财物研产供销服信”多个环节，汇聚产业数据，驱动企业精细化、产业数字化发展。提供一站式企业创新孵化服务平台，实现线上与线下的打通，融合京东运营服务能力，助力属地企业全渠道、品牌化发展。
                  </p>
                </div>
                <div class="solution_item_bot_section">
                  <p>
                    <img
                      src="/static/img/smartCity/solution/icon/icon_nongye.png"
                      alt=""
                    >
                    <span>智能农业</span>
                  </p>
                  <p>
                    智能农业将整合采集、分析、处理、交换区域农业的生产、管理、流通、市场等数据，建立农业数字化生产、智能化流通、无界化销售的神农体系，即“神农大脑”、“神农在线”、“神农电商”、“神农渠道”、“神农助手”，提升农业生产、流通、品牌建设和乡村治理等场景的发展水平，推动农业产业扶贫进展，全面助力乡村振兴。
                  </p>
                </div>
                <div class="solution_item_bot_section">
                  <p>
                    <img
                      src="/static/img/smartCity/solution/icon/icon_lvyou.png"
                      alt=""
                    >
                    <span>智能旅游</span>
                  </p>
                  <p>
                    以旅游大数据和当地特色旅游产业要素为基础，围绕“吃、住、行、游、购、娱”六大要素，为游客游前、游中、游后提供高品质服务，为政府提供安全有序的行业综合管理，推动城市旅游业实现平台化、数字化、电商化、智能化、产业化。
                  </p>
                </div>
                <div class="solution_item_bot_section">
                  <p>
                    <img
                      src="/static/img/smartCity/solution/icon/icon_chanyeyun.png"
                      alt=""
                    >
                    <span>产业云</span>
                  </p>
                  <p>
                    整合京东平台及生态资源，构建数字经济产业园，以“链接企业与市场，补齐要素与产业”为手段，促进产业转型升级，加速产业生态集聚，实现地方特色产业“品牌化、电商化、标准化、数字化、基金化”，培育成为区域经济增长新动力。
                  </p>
                </div>
                <div class="solution_item_bot_section">
                  <p>
                    <img
                      src="/static/img/smartCity/solution/icon/icon_gongye.png"
                      alt=""
                    >
                    <span>工业互联网</span>
                  </p>
                  <p>
                    构建京东工业互联网平台，为制造企业提供研、产、供、销一站式工业应用服务，促进由“企业内部纵向集成”向“企业之间横向集成”和“产业价值链端到端集成”延伸，发展智能化生产、个性化定制、网络化协同和服务化转型的制造新模式，实现企业降本、增效、提质、扩销，推进工业企业转型创新，形成产业链企业聚集效应，培育城市工业发展新动能。
                  </p>
                </div>
                <div class="solution_item_bot_section">
                  <p>
                    <img
                      src="/static/img/smartCity/solution/icon/icon_yiliao.png"
                      alt=""
                    >
                    <span>智能医疗</span>
                  </p>
                  <p>
                    以医疗健康大数据中心为基础，改造优化诊疗、结算、用药、公卫、家庭医生服务、远程医疗、健康信息、应急救治、政务共享、检查检验等十方面服务流程和效率。打造智能医院云、医疗影像云、基层医疗云等解决方案，实现城市医疗资源下沉，为居民提供智能化的医疗健康服务。
                  </p>
                </div>
                <div class="solution_item_bot_section">
                  <p>
                    <img
                      src="/static/img/smartCity/solution/icon/icon_jiaoyu.png"
                      alt=""
                    >
                    <span>智能教育</span>
                  </p>
                  <p>
                    面向未来校园、未来课堂、智能教学三大场景，提供完整的智能教育平台，涵盖智能硬件、SAAS应用务、内容和服务，致力于解决硬件资源不足、内容资源不足、技术能力不足所带来的行业挑战，满足“数字一代”学习者的真实诉求。实现线上多渠道触达和线下解决方案落地，推动教育资源数字化、教具智能化和学习环境变革。
                  </p>
                </div>
                <div class="solution_item_bot_section">
                  <p>
                    <img
                      src="/static/img/smartCity/solution/icon/icon_zhizao.png"
                      alt=""
                    >
                    <span>智能制造</span>
                  </p>
                  <p>
                    基于京东云开放创新平台，针对产品技术及设计创新、营销创新、人才培育、品牌打造等方面补齐当地智能化产业链要素，从创意、设计、研发、制造、定价到营销销售等环节，实现智能产品的一站式智能化升级，加速当地制造产业的智能化升级。
                  </p>
                </div>
              </div>
            </li>
            <li class="solution_item">
              <div class="solution_item_top">
                  <span></span>
                  <span>筑基</span>
                  <img src="/static/img/smartCity/solution/arrow_m.png" alt="">
              </div>
              <div class="solution_item_bot">
                  <div class="solution_item_bot_section">
                      <p>
                          <img src="/static/img/smartCity/solution/icon/icon_gxwl.png" alt="">
                          <span>智能城市干线网络</span>
                      </p>
                      <p>
                        京东云联合本地政府共建云计算和大数据产业基地，打造城市数字基础设施，形成多级城市边缘节点，通过与京东公有云联动，构建一张覆盖全国的智能城市干线网络，让本地有机会获得产业要素补齐服务、专家资源、培训资源等优质的资源和服务，助力城市在数字经济时代实现变道超车。
                      </p>
                  </div>
                  <div class="solution_item_bot_section">
                      <p>
                          <img src="/static/img/smartCity/solution/icon/icon_jszt.png" alt="">
                          <span>技术中台</span>
                      </p>
                      <p>
                        京东云与本地政府共建城市技术中台基础设施，提供一站式云端DevOps，微服务、容器等云原生技术中台，实现城市公共业务服务下沉与新技术能力汇聚，将不断沉淀的专业化能力采用标准化、组件化、平台化、系统化的形式为上层应用提供赋能和支撑，不断提升城市IT技术生产力。
                      </p>
                  </div>
                  
                  <div class="solution_item_bot_section">
                      <p>
                          <img src="/static/img/smartCity/solution/icon/icon_zyy.png" alt="">
                          <span>JDStack</span>
                      </p>
                      <p>
                        超级电商成就超级云厂商，京东拥有全球最大规模的容器集群之一，每日调度百万台容器实例运转，实现全年99.99%高可靠运行，成功应对618、双11等的超级浪涌式冲击。京东云将输出京东技术能力为城市打造专有云平台（JDStack），提供全栈式、全频段、全场景、全生态云计算服务，全方位容灾体系，多层级安全防护架构，保证数据安全及服务的高可用，支撑城市政务上云、产业上云。
                      </p>
                  </div>
                  <div class="solution_item_bot_section">
                      <p>
                          <img src="/static/img/smartCity/solution/icon/icon_sjzt.png" alt="">
                          <span>数据中台</span>
                      </p>
                      <p>
                        京东云与本地政府共建城市数据中台基础设施，形成生态大数据汇聚中心、城市公共大数据中心、智能场景大数据中心，完成政务与社会数据的汇聚融合，搭建海量数据全生命周期的管理平台，定制化提供服务于政府、产业、民生的数据智能应用，营造基于数据资源、开发环境、应用市场的全链条数创环境。
                      </p>
                  </div>
                  <div class="solution_item_bot_section">
                      <p>
                          <img src="/static/img/smartCity/solution/icon/icon_aiot.png" alt="">
                          <span>AIoT</span>
                      </p>
                      <p>
                        京东云全力打造的智能物联网平台，集成了京东AI、IoT、大数据及云计算能力，实现遍布城市末端数以亿计的物联网设备的数据采集及远程管理，基于数据+算法模型，在公共服务、智能安防、智能社区、智能消防、智能工农业等领域实现场景智能化，为城市精细化管理和运营提供了全面的技术支撑和保障。
                      </p>
                  </div>
              </div>
            </li>
            <li class="solution_item">
                <div class="solution_item_top">
                    <span></span>
                    <span>共生</span>
                    <img src="/static/img/smartCity/solution/arrow_m.png" alt="">
                </div>
                <div class="solution_item_bot">
                    <div class="solution_item_bot_section">
                        <p>
                            <img src="/static/img/smartCity/solution/icon/icon_xkjh.png" alt="">
                            <span>京东云星空计划</span>
                        </p>
                        <p>
                          京东云星空计划是京东云携手合作伙伴共建全景式智能城市服务系统的生态圈，京东云联合全产业链生态合作伙伴，双向赋能打造全景式、持续发展、有生命力的生态服务体系。在农业、旅游、医疗、教育、工业、交通等多个领域，京东云与金牌级、钻石级、使命级等各级合作伙伴建立“有核心、无边界、自组织、开放共享”的智能城市云上无界生态，让创新更容易发生，产业更容易发展。
                        </p>
                    </div>
                    <div class="solution_item_bot_section">
                        <p>
                          <img src="/static/img/smartCity/solution/icon/icon_zzhb.png" alt="">
                          <span>智能环保</span>
                        </p>
                        <p>
                          依托京东遍布全国的物流网络，创新形成动态城市空气质量监测和固定空气质量监测的“双网结合”环保监测网，通过整合城市道路监控系统、气象数据、污染源清单、车流量以及城市功能区多维度数据进行融合，利用独有的在线云校准技术，对移动网格化数据进行校准，动静结合，实现了环境监测数据的精细化管理。
                        </p>
                    </div>
                </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 智能城市案例 -->
    <div
      class="smart_city_section four"
      id="content03"
    >
      <div class="smart_city_section_content content_container">
        <div class="smart_city_section_title">
          <span class="smart_city_section_title_bg"></span>
          <p>智能城市案例</p>
          <p>CASE</p>
        </div>
        <div class="smart_city_section_content_case_list">
          <div class="smart_city_section_content_case_item">
            <div class="smart_city_section_content_case_item_mask"></div>
            <p class="smart_city_section_content_case_item_title">鄂尔多斯</p>
            <p class="smart_city_section_content_case_item_desc">首届鄂尔多斯世界羊绒博览会在鄂尔多斯召开，围绕养殖、生产、加工、设备、设计、销售等方面打造了一个全产业链式的品牌羊绒博览会，进一步扩大鄂尔多斯羊绒产业的知名度，提升鄂尔多斯羊绒温暖全世界的品质形象。京东积极参与羊绒博览会，基于京东电商大数据面向具备男女羊绒衫30浏览、一年已购、6个月关注、30天加购、重点品牌等标签的用户画像精准投放广告资源，整体销售额环比增长804.9%。</p>
          </div>
          <div class="smart_city_section_content_case_item">
            <div class="smart_city_section_content_case_item_mask"></div>
            <p class="smart_city_section_content_case_item_title">大同</p>
            <p class="smart_city_section_content_case_item_desc">首届山西（大同）数字经济发展促进大会在“煤都”大同召开，“数行三晋·智赢未来”，旨在以数字经济赋能城市发展新生态，探讨山西能源经济转型升级之路。京东云立足大同在能源建设方面的优势，找准数字经济建设发力点，积极对接大同云计算、大数据、现代农业、电子商务等多领域发展，实现产业转型升级。从细分领域探讨山西新兴产业和能源、医药、装备制造等传统产业的转型升级，让数字技术为山西发展提供助力。</p>
          </div>
          <div class="smart_city_section_content_case_item">
            <div class="smart_city_section_content_case_item_mask"></div>
            <p class="smart_city_section_content_case_item_title">滨州</p>
            <p class="smart_city_section_content_case_item_desc">京东政务云“互联网+政务”服务落地，助力滨州经济技术开发区公共服务便捷化。京东云与滨州经济技术开发区深度合作，为开发区提供“互联网+政务”服务，坚持以人为本、深挖内涵、精细管理，从“供给端”发力，整合开发区政务资源整合，简化政务服务界面，完善服务访问手段，丰富政务服务内容富。这一线上线下融合的高效政务服务新模式，成为了科技支撑在云端、就近便捷有温度、智慧共享大集成、又有滨州特色的政务服务。</p>
          </div>
          <div class="smart_city_section_content_case_item">
            <div class="smart_city_section_content_case_item_mask"></div>
            <p class="smart_city_section_content_case_item_title">滁州</p>
            <p class="smart_city_section_content_case_item_desc">滁州京东云围绕“打造百亿数字经济产业园、建设一流数据中心、实现京东全要素落地”的目标扎实推进，目前已完成30家企业招商入驻滁州京东数字经济产业园；在“京东滁州智能家电节”活动现场，京东商城与在滁家电企业签订了全年23亿订单，实现企业销量翻番；同时牵引京东智能、京东大学资源与滁州展开合作，为当地企业源源不断地输送创新研发人才、电商运营人才。</p>
          </div>
          <div class="smart_city_section_content_case_item">
            <div class="smart_city_section_content_case_item_mask"></div>
            <p class="smart_city_section_content_case_item_title">宿迁</p>
            <p class="smart_city_section_content_case_item_desc">在宿迁，联合宿迁市政府推进全市政务上云，截止到2019年1月，已完成163个业务系统、上云率达到了96.5%，政务云自上线投产使用以来多次获奖，通过了工信部和信通院的“政务云综合水平评估”、“可信政务云评估”。宿迁政务云更作为优秀案例入选 “中国政务云发展白皮书”以及IDC发布的《政务云 2.0：政务云建设模式及典型案例研究，2018》报告 。</p>
          </div>
        </div>
        <div class="smart_city_section_content_case_list_m">
          <div class="case_list">
            <div class="case_list_title">
              <span class="current"
                :clstag="`IntelligentCity|keycount|MiddleContentSec|city_1`"
                @click="gaEventTrigger('IntelligentCity|keycount|MiddleContentSec', `IntelligentCity|keycount|MiddleContentSec|city_1`)"
              >鄂尔多斯</span>
              <span
                :clstag="`IntelligentCity|keycount|MiddleContentSec|city_2`"
                @click="gaEventTrigger('IntelligentCity|keycount|MiddleContentSec', `IntelligentCity|keycount|MiddleContentSec|city_2`)"
              >大同</span>
              <span
                :clstag="`IntelligentCity|keycount|MiddleContentSec|city_3`"
                @click="gaEventTrigger('IntelligentCity|keycount|MiddleContentSec', `IntelligentCity|keycount|MiddleContentSec|city_3`)"
              >滨州</span>
              <span
                :clstag="`IntelligentCity|keycount|MiddleContentSec|city_4`"
                @click="gaEventTrigger('IntelligentCity|keycount|MiddleContentSec', `IntelligentCity|keycount|MiddleContentSec|city_4`)"
              >滁州</span>
              <span
                :clstag="`IntelligentCity|keycount|MiddleContentSec|city_5`"
                @click="gaEventTrigger('IntelligentCity|keycount|MiddleContentSec', `IntelligentCity|keycount|MiddleContentSec|city_5`)"
              >宿迁</span>
            </div>
            <div class="case_list_content">
              <p class="current">
                首届鄂尔多斯世界羊绒博览会在鄂尔多斯召开，围绕养殖、生产、加工、设备、设计、销售等方面打造了一个全产业链式的品牌羊绒博览会，进一步扩大鄂尔多斯羊绒产业的知名度，提升鄂尔多斯羊绒温暖全世界的品质形象。京东积极参与羊绒博览会，基于京东电商大数据面向具备男女羊绒衫30浏览、一年已购、6个月关注、30天加购、重点品牌等标签的用户画像精准投放广告资源，整体销售额环比增长804.9%。
              </p>
              <p>首届山西（大同）数字经济发展促进大会在“煤都”大同召开，“数行三晋·智赢未来”，旨在以数字经济赋能城市发展新生态，探讨山西能源经济转型升级之路。京东云立足大同在能源建设方面的优势，找准数字经济建设发力点，积极对接大同云计算、大数据、现代农业、电子商务等多领域发展，实现产业转型升级。从细分领域探讨山西新兴产业和能源、医药、装备制造等传统产业的转型升级，让数字技术为山西发展提供助力。</p>
              <p>京东政务云“互联网+政务”服务落地，助力滨州经济技术开发区公共服务便捷化。京东云与滨州经济技术开发区深度合作，为开发区提供“互联网+政务”服务，坚持以人为本、深挖内涵、精细管理，从“供给端”发力，整合开发区政务资源整合，简化政务服务界面，完善服务访问手段，丰富政务服务内容富。这一线上线下融合的高效政务服务新模式，成为了科技支撑在云端、就近便捷有温度、智慧共享大集成、又有滨州特色的政务服务。</p>
              <p>滁州京东云围绕“打造百亿数字经济产业园、建设一流数据中心、实现京东全要素落地”的目标扎实推进，目前已完成30家企业招商入驻滁州京东数字经济产业园；在“京东滁州智能家电节”活动现场，京东商城与在滁家电企业签订了全年23亿订单，实现企业销量翻番；同时牵引京东智能、京东大学资源与滁州展开合作，为当地企业源源不断地输送创新研发人才、电商运营人才。</p>
              <p>在宿迁，联合宿迁市政府推进全市政务上云，截止到2019年1月，已完成163个业务系统、上云率达到了96.5%，政务云自上线投产使用以来多次获奖，通过了工信部和信通院的“政务云综合水平评估”、“可信政务云评估”。宿迁政务云更作为优秀案例入选 “中国政务云发展白皮书”以及IDC发布的《政务云 2.0：政务云建设模式及典型案例研究，2018》报告 。</p>
            </div>
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
          <img
            src="~assets/mkt/icon_remove_spec.png"
            alt=""
            class="close_feedback"
          >
        </div>
        <div class="success_feedback_modal_content success" >
          <img
            src="~assets/mkt/success_icon.png"
            alt=""
          >
          <p>感谢您的信任</p>
          <p>我们将在7个工作日内为您寄出纸质版</p>
        </div>
        <div class="success_feedback_modal_content fail">
          <img
            src="~assets/mkt/fail_icon.png"
            alt=""
          >
          <p>系统繁忙，请稍后再试</p>
        </div>
        <div class="success_feedback_modal_footer">
          <button class="success_feedback_modal_btn jdc_bg close_feedback">确定</button>
        </div>
      </div>
    </div>
    <!-- footer -->
    <!-- <div class="smart_city_section five">
            <p>Copyright © 2012-<span class="now_year"></span>JDCloud.com 版权所有 京ICP备11041704号-31 京ICP证070359号 隐私声明</p>
        </div> -->
  </div>
</template>

<script>
/* global $,seajs:true */
import apiUrl from "api";
export default {
  name: "smartCity",
  data() {
    return {
      VIEWFROM: "智能城市",
      EVENTURL: `${
        window.location.protocol
      }//visits.jdcloud.com/security/event`, // 事件采集url
      PDFURL: "//jdc-static.oss.cn-north-1.jcloudcs.com/jdc-about-static/smart_city/introduction.pdf",
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
      ifNeed: "",
      detail_address: "",
      industry: "", // 行业
      duty: "", // 职务
      region: "", // 省市
      fromEvent: "",
      demandText: ""
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

      document.onscroll = function() {
        const st =
          document.body.scrollTop || document.documentElement.scrollTop;
        switch (true) {
          case st < $content01[0].offsetTop + $content01.height() - 10:
            $(".jdc_compaign_tab_item.one")
              .addClass("active")
              .siblings()
              .removeClass("active");
            break;
          case st >= $content01[0].offsetTop + $content01.height() - 10 &&
            st < $content02[0].offsetTop + $content02.height():
            $(".jdc_compaign_tab_item.two")
              .addClass("active")
              .siblings()
              .removeClass("active");
            break;
          case st >= $content02[0].offsetTop + $content02.height() &&
            st < $content03[0].offsetTop + $content03.height():
            $(".jdc_compaign_tab_item.three")
              .addClass("active")
              .siblings()
              .removeClass("active");
            break;
          case st > $content03[0].offsetTop - 150:
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
        } else {
          $content01.css("padding-top", "30px");
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
        if (industry == item.id) {
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
      if (this.ifNeed) {
        this.region = $(".ui-area-text")
          .text()
          .trim();
        if (!this.region) {
          $(".smart_city_area")
            .siblings("p")
            .html("省市区为必填项");
          $(".ui-area-text-wrap").addClass("error");
          success_flag = false;
        }
        if (!this.detail_address) {
          $("#detail_address")
            .addClass("error")
            .siblings("p")
            .html("详细地址为必填项");
          success_flag = false;
        }
      }
      if (!success_flag) return;
      // $("#submit_btn")
      //   .attr("disabled", true)
      //   .text("提交中")
      //   .addClass("disabled");
      this.postForm();
      this.gaEventTrigger('IntelligentCity|keycount|MiddleContentSec', `IntelligentCity|keycount|MiddleContentSec|submitForm`)
    },
    postForm() {
      const _par = {
        formDefId: 9,
        formData: {
          requestorName: this.name,
          email: this.email,
          phone: this.mobile,
          company: this.company,
          industry: this.industry,
          jobTitle: this.duty,
          region: this.region,
          detailedAddress: this.detail_address,
          pageTitle: "智能城市_京东云",
          pageURL: "/activity/smartCity",
          referrerURL: "",
          referrerDomain: "",
          campaignCode: "1",
          deviceType: "",
          isWillingToContact: String(this.ifNeed)
        }
      };
      var _self = this;
      _par.formData.pageTitle = document.title;
      _par.formData.pageURL = window.location.href;
      _par.formData.referrerURL = sessionStorage.getItem("referrer"); // 进入京东云网站之前访问的网站链接
      _par.formData.referrerDomain = sessionStorage.getItem("referrerDomain"); // 进入京东云网站之前访问的网站域名
      _par.formData.campaignCode = sessionStorage.getItem("campaignCode"); // 收集进入京东云官网带有queryString
      _par.formData.deviceType = this.checkDevice() ? "2" : "1"; // device
      this.$http.post(apiUrl.api.subscriptionSubmit, _par).then(
        res => {
          if (res.body.code == 0) {
            this.postVisits();
            this.postEvent();
            this.closeDownloadModal();
            if (_par.formData.isWillingToContact === 'true') { // 纸质版提示
              $(".success_feedback")
                .show()
                .find(".success_feedback_modal_content.success")
                .show();
              $(".success_feedback")
                .find(".success_feedback_modal_content.fail")
                .hide();
            } else {
              this.downLoadPdf()
            }
            
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
      const postURL = `${
        window.location.protocol
      }//visits.jdcloud.com/api/v1/user/`;
      $.ajax({
        url: postURL,
        type: "POST",
        data: {
          username: this.name,
          userpass: "",
          userphone: this.mobile,
          useraddress: this.detail_address,
          usercompany: this.company,
          useremail: this.email,
          userduty: this.duty,
          userindustry: this.industry,
          viewfrom: !this.fromEvent ? this.VIEWFROM : this.fromEvent,
          userdemand: !this.demandText ? "" : this.demandText
        },
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
          event_name: "下载白皮书",
          view_form: "智能城市"
        },
        beforeSend: function(xhr) {},
        success: function(res) {},
        complete: function(XMLHttpRequest, textStatus) {},
        error: function(XMLHttpRequest, textStatus, errorThrown) {}
      });
    },
    downLoadPdf() {
      window.location.href = this.PDFURL
    },
    // 标题栏切换选中状态
    tabSwitch() {
      const $jdc_compaign_tab_items = $(".jdc_compaign_tab_item");
      const $content01 = $("#content01");
      const $content02 = $("#content02");
      const $content03 = $("#content03");

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
        }
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
    goBottom() {
      const $content01 = $("#content01");
      $("html, body").animate(
        {
          scrollTop: $content01[0].offsetTop
        },
        500
      );
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
      window.location.reload();
    },
    // 图片按比例调整大小
    resizeFunc() {
      //   const $jdc_compaign_video_item_img = $('.jdc_compaign_video_item_img_mobile')
      const $smart_city_banner = $(".smart_city_banner");
      if ($("body").width() < 1200) {
        // $jdc_compaign_video_item_img.css('height', $jdc_compaign_video_item_img.width() * 385 / 685)
        $smart_city_banner.css(
          "height",
          ($smart_city_banner.width() * 53) / 75
        );
      } else {
        $smart_city_banner.css("height", 540);
      }
    },
    // 关闭视频
    closeVideo() {
      const $player = $("video");
      $player[0].pause();
      $(".jdc_compaign_video_wrap").hide();
      $("body").css("overflow", "auto");
      this.gaEventTrigger('IntelligentCity|keycount|MiddleContentSec', `IntelligentCity|keycount|MiddleContentSec|closeVideo`)
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
    },
    // 播放视频
    initPlayVideo () {
      const $player = $('video')
      $('.jdc_compaign_video_item').on('click', function () {
        let src = $(this).data('src')
        $('.jdc_compaign_video_wrap').show()
        $player.attr('src', src)
        setTimeout(() => {
          $player[0].play()
          $('video').attr('autoplay', 'autoplay')
        }, 500)
      })
    },
    resetPaper() {
      // 监听手机屏幕宽度
      const width = document.body.clientWidth
      const $smart_city_paper_content_left_xs = $('.smart_city_paper_content_left_xs')
      const $smart_city_paper_xs = $('.smart_city_paper_xs')
      $smart_city_paper_content_left_xs.css('width', width)
      $smart_city_paper_content_left_xs.css('height', width* 782 / 1459)
      $smart_city_paper_xs.css('height', width * 0.5 + 490)
      // 弹出框居中
      if (width > 1200) {
        const $smart_city_download_form = $(".smart_city_download_form");
        $smart_city_download_form.css(
          "left",
          ((1 - 920 / width) / 2) * 100 + "%"
        );
      }
    },
    initVideoHeight() {
      if ($("body").width() < 1200) {
        let $smart_city_section_video = $(".smart_city_section_video");
        let height = $smart_city_section_video.width() * (358 / 649);
        $smart_city_section_video.height(height);
        $smart_city_section_video.css("background-size", `100% ${height}px`);
      }
    },
    showDownloadModal(type,index) {
      console.log('登录用户：',this.userPin, typeof this.userPin)
      if (this.userPin === null || this.userPin === 'null' ) {
        this.loginIn()
        return
      }
      $(".smart_city_download_form input")
        .removeClass("error")
        .siblings("p")
        .html("");
      $(".smart_city_download_dialog").show();
      // 阻止遮罩层滑动
      $("body").css("overflow", "hidden");
      this.gaEventTrigger(`IntelligentCity|keycount|${type}`, `IntelligentCity|keycount|${type}|downLoad_${index}`)
    },
    //登录
    loginIn () {
      let retUrl = location.href + '?type=Y'
      location.href = "//uc.jdcloud.com/login?returnUrl=" + encodeURIComponent(retUrl) ;
    },
    closeDownloadModal() {
      $(".smart_city_download_dialog").hide();
      // 开启遮罩层滑动
      $("body").css("overflow", "auto");
      // 清空输入框
      $("input").val("");
      $("#industry").val("");
      $("#duty").val("");
      $("#select2-industry-container").html('<span class="select2-selection__placeholder">请选择行业</span></span>')
      $("#select2-duty-container").html('<span class="select2-selection__placeholder">请选择职务</span>')
      this.name = "";
      this.email = "";
      this.mobile = "";
      this.company = "";
      this.ifNeed = "";
      this.detail_address = "";
      this.industry = "";
      this.duty = "";
      this.region = "";
      this.fromEvent = "";
      this.demandText = "";
      this.gaEventTrigger('IntelligentCity|keycount|MiddleContentSec', `IntelligentCity|keycount|MiddleContentSec|closeDialog`)
    },
    switchRight(type) {
      // if (type === 'one') {
      //   $(".smart_city_section_table_right_content.one").addClass("current");
      // }
      
      // if (type === 'three') {
      //   $(".smart_city_section_table_right_content.three").addClass("current");
      // }
      $(`.smart_city_section_table_right_content.${type}`).addClass('current')
      this.gaEventTrigger('IntelligentCity|keycount|MiddleContentSec', `IntelligentCity|keycount|MiddleContentSec|switchRight_${type}`)
    },
    switchLeft(type) {
      // if (type === 'one') {
      //   $(".smart_city_section_table_right_content.one").removeClass("current");
      // }
      // if (type === 'three') {
      //   $(".smart_city_section_table_right_content.three").removeClass("current");
      // }
      $(`.smart_city_section_table_right_content.${type}`).removeClass('current')
      this.gaEventTrigger('IntelligentCity|keycount|MiddleContentSec', `IntelligentCity|keycount|MiddleContentSec|switchLeft_${type}`)
    },
    initSelect2() {
      $(".selectIndustry").select2({
        placeholder: "请选择行业",
        width: "100%",
        data: this.industryList,
        minimumResultsForSearch: -1
      });

      $(".selectDuty").select2({
        placeholder: "请选择职务",
        width: "100%",
        data: this.dutyList,
        minimumResultsForSearch: -1
      });
    },
    /**
     * 页面初始化
     */
    pageInit() {
      const $jdc_compaign_top_tab_wrap = $(".jdc_compaign_top_tab_wrap");

      this.initSelect2();
      this.resetPaper();
      this.tabSwitch();
      this.initPlayVideo()

      $(".now_year").text(new Date().getFullYear());
      /* 标题栏吸顶效果 */
      this.ceiling(
        $jdc_compaign_top_tab_wrap[0],
        "jdc_compaign_top_tab_wrap normal smart_city_hidden_xs"
      );

      //  $('.smart_city_download_dialog').hide()
      $(".smart_city_section_video").on("mouseover", function() {
        const $this = $(this);
        $this
          .addClass("current")
          .siblings()
          .removeClass("current");
      });
      $(".smart_city_section_table_tab").on("click", function() {
        const $this = $(this);
        const index = $this.index();
        $this
          .addClass("current")
          .siblings()
          .removeClass("current");
        switch (index) {
          case 0:
            $(".smart_city_section_table_right")[0].className =
              "smart_city_section_table_right one";
            break;
          case 1:
            $(".smart_city_section_table_right")[0].className =
              "smart_city_section_table_right two";
            break;
          case 2:
            $(".smart_city_section_table_right")[0].className =
              "smart_city_section_table_right three";
            break;
          case 3:
            $('.smart_city_section_table_right')[0].className = 
              'smart_city_section_table_right four'
            break;
          case 4:
            $('.smart_city_section_table_right')[0].className = 
              'smart_city_section_table_right five'
            break;
        }
      });
      $(".smart_city_section_content_case_item").hover(function() {
        $(this).toggleClass("current");
      });
      $(".solution_item").on("click", function() {
        if ($(this).hasClass("current")) {
          $(this).removeClass("current");
        } else {
          $(this)
            .addClass("current")
            .siblings()
            .removeClass("current");
          $("html, body").animate(
            {
              scrollTop: $(this)[0].offsetTop
            },
            500
          );
        }
      });
      $(".case_list_title span").on("click", function() {
        let clickIndex = $(this).index();
        $(this)
          .addClass("current")
          .siblings()
          .removeClass("current");
        $(`.case_list_content p:nth-child(${clickIndex + 1})`)
          .addClass("current")
          .siblings()
          .removeClass("current");
      });
      // 关闭遮罩恢复可以滑动
      $(".close_feedback").on("click", () => {
        $(".success_feedback").hide();
        this.downLoadPdf()
        // $("body").css("overflow", "auto");
        // if(_self.submitDone == true){
        //   window.location.reload()
        // }
      });
      this.initVideoHeight();
      this.resizeFunc();
      window.onresize = () => {
        this.initVideoHeight();
        this.resizeFunc();
      };
      // 监听浏览器
      const explorer = navigator.userAgent;
      const $smart_city_paper_content_right_title = $(
        ".smart_city_paper_content_right_title"
      );
      if (explorer.indexOf("Chrome") >= 0 || explorer.indexOf("Firefox") >= 0) {
        // 火狐或者谷歌
      } else {
        // 火狐或者谷歌以外
        $smart_city_paper_content_right_title.removeClass(
          "smart_city_paper_content_right_title"
        );
        $smart_city_paper_content_right_title.addClass(
          "smart_city_paper_content_right_title_ie"
        );
      }

      // 点击导航
      $(".nav-li").on("click", function() {
        $(this)
          .addClass("active-nav")
          .siblings()
          .removeClass("active-nav");
      });

      seajs.use(
        [
          "jdf/1.0.0/ui/switchable/1.0.0/switchable",
          "jdf/1.0.0/ui/area/1.0.0/area"
        ],
        function() {
          $("#address").area({
            scopeLevel: 3
          });
        }
      );
    }
  },
  mounted() {
    this.pageInit();
    if (this.userPin !== 'null' && this.$route.query.type === 'Y') {
      this.showDownloadModal()
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only /static/img/smartCity/ -->
<style lang="less">
@import "https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css";
.smart_city_visible_xs {
    display: none;
}
.smart_city_banner {
    position: relative;
    height: 540px;
    color: #ffffff;
    font-size: 16px;
    background-image: url('/static/img/smartCity/banner-bg.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    // background-size: cover;
    overflow: hidden;
    .banner_title {
        display: block;
        width: 405px;
        height: 166px;
        margin: 160px 0 35px 10px;
    }
    button {
        width: 136px;
        height: 36px;
        line-height: 36px;
        background:#FF3DE9;
        border-radius: 5px;
        margin-left: 10px;
        border: none;
        color: #ffffff;
    }
}

.smart_city_container {
    color: #fff;
    background-color: #000536;
    .content_container {
        max-width: 1200px;
        margin: 0 auto;
    }
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
                background-image: url('/static/img/safe/close.png');
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                cursor: pointer;
                opacity: .7;
            }
        }
    }
    .jdc_compaign_top_tab_wrap {
        width: 100%;
        background-color: rgba(0,0,0,.25);
        position: relative;
        color: #ffffff;
        &.normal {
            top: -60px;
        }
        &.fixPosition {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 100;
            background-color:#1D2044;
            .jdc_compaign_top_tab {
                .jdc_compaign_tab_item {
                    &.active {
                        background-position: bottom;
                        background-size: 100% 4px;
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
                width: 33.33%;
                float: left;
                cursor: pointer;
                text-align: center;
                // border-bottom: 2px solid #f3f5fb;
                white-space: nowrap;
                overflow: hidden;
                &.active {
                    background-image: url('/static/img/smartCity/active_line.png');
                    background-size: 100% 4px;
                    background-position: top;
                    background-repeat: no-repeat;
                }
            }
        }
    }
    .smart_city_section {
        padding-top: 70px;
        .smart_city_section_title {
            position: relative;
            .smart_city_section_title_bg {
                position: absolute;
                width: 247px;
                height: 98px;
                background-image: url('/static/img/smartCity/solution/title_bg.png');
                background-size: 247px 98px;
                background-position: left;
                background-repeat: no-repeat;
                left: -35px;
                top: 0;
            }
            p {
                position: relative;
                z-index: 2;
                &:nth-child(2) {
                    font-size: 36px;
                    color: #fff;
                }
                &:nth-child(3) {
                    font-size: 20px;
                    color: #FD0283;
                    opacity: .7;
                }
                &:nth-child(4) {
                    margin-top: 50px;
                    margin-bottom: 20px;
                    font-size: 14px;
                    color: #fff;
                    opacity: .8;
                }
            }
        }
        &.three {
            background-color: #01063C;
            overflow: hidden;
            background-image: url('/static/img/smartCity/solution/solution_bg.jpg');
            background-size: 100% 732px;
            background-position: bottom;
            background-repeat: no-repeat;
            .smart_city_section_video_wrap {
                margin-bottom: 60px;
                overflow: hidden;
            }
            .smart_city_section_video {
                color: #fff;
                overflow: hidden;
                width: 224px;
                height: 359px;
                float: left;
                position: relative;
                background-position: center;
                background-repeat: no-repeat;
                background-size: 927px 359px;
                transition: all .5s;
                &.one {
                    background-image: url('/static/img/smartCity/solution/jd_stack.jpg');
                }
                &.two {
                    background-image: url('/static/img/smartCity/solution/all_in_one.jpg');
                    margin-left: 47px;
                }
                .smart_city_section_video_title {
                    font-size: 36px;
                    margin-top: 153px;
                    margin-left: 56px;
                }
                &.current {
                    width: 100%;
                    background-size: cover;
                    background-position: center;
                    .smart_city_section_video_play {
                        opacity: 1;
                    }
                }
                .smart_city_section_video_play {
                    position: absolute;
                    right: 0;
                    top: 113px;
                    width: 135px;
                    height: 135px;
                    text-align: center;
                    font-size: 14px;
                    opacity: 0;
                    transition: all .5s;
                    cursor: pointer;
                    background-color: rgba(0, 0, 0, .5);
                    img {
                        width: 52px;
                        height: 52px;
                        margin-top: 28px;
                        margin-bottom: 15px;
                    }
                }
            }
            .smart_city_section_table_m {
                display: none;
            }
            .smart_city_section_table {
                height: 500px;
                margin-bottom: 44px;
                overflow: hidden;
                display: block;
                .smart_city_section_table_left {
                    width: 220px;
                    height: 500px;
                    background-color: rgba(1, 4, 38, .6);
                    text-align: center;
                    overflow: hidden;
                    float: left;
                    position: relative;
                    .smart_city_section_table_tab {
                        font-size: 18px;
                        cursor: pointer; // position: relative;
                        height: 100px;
                        line-height: 100px;
                        // margin-top: 91px;
                        &.current {
                            font-size: 22px;
                            span {
                                &:nth-child(1) {
                                    margin-right: 9px;
                                    background-image: url('/static/img/smartCity/solution/icon01_active.png');
                                }
                            }
                            &:nth-child(1) {
                                span {
                                    &:nth-child(1) {
                                        background-image: url('/static/img/smartCity/solution/icon01_active.png');
                                    }
                                }
                            }
                            &:nth-child(2) {
                                span {
                                    &:nth-child(1) {
                                        background-image: url('/static/img/smartCity/solution/icon02_active.png');
                                    }
                                }
                            }
                            &:nth-child(3) {
                                span {
                                    &:nth-child(1) {
                                        background-image: url('/static/img/smartCity/solution/icon03_active.png');
                                    }
                                }
                            }
                            &:nth-child(4) {
                                span {
                                    &:nth-child(1) {
                                        background-image: url('/static/img/smartCity/solution/icon04_active.png');
                                    }
                                }
                            }
                            &:nth-child(5) {
                                span {
                                    &:nth-child(1) {
                                        background-image: url('/static/img/smartCity/solution/icon05_active.png');
                                    }
                                }
                            }
                        }
                        span {
                            &:nth-child(1) {
                                position: relative;
                                display: inline-block;
                                width: 36px;
                                height: 36px;
                                margin-right: 18px;
                                top: 10px;
                                background-size: cover;
                                background-position: center;
                                background-repeat: no-repeat;
                                background-image: url('/static/img/smartCity/solution/icon01.png');
                            }
                            &:nth-child(2) {
                                // position: relative;
                                // top: -12px;
                            }
                        }
                        &:nth-child(1) {
                            // margin-top: 104px;
                            span {
                                &:nth-child(1) {
                                    background-image: url('/static/img/smartCity/solution/icon01.png');
                                }
                            }
                        }
                        &:nth-child(2) {
                            span {
                                &:nth-child(1) {
                                    background-image: url('/static/img/smartCity/solution/icon02.png');
                                }
                            }
                        }
                        &:nth-child(3) {
                            span {
                                &:nth-child(1) {
                                    background-image: url('/static/img/smartCity/solution/icon03.png');
                                }
                            }
                        }
                        &:nth-child(4) {
                            span {
                                &:nth-child(1) {
                                    background-image: url('/static/img/smartCity/solution/icon04.png');
                                }
                            }
                        }
                        &:nth-child(5) {
                            span {
                                &:nth-child(1) {
                                    background-image: url('/static/img/smartCity/solution/icon05.png');
                                }
                            }
                        }
                    }
                }
                .smart_city_section_table_right {
                    width: 980px;
                    height: 500px;
                    float: left;
                    background-color: rgba(16, 18, 42, .7);
                    background-image: url('/static/img/smartCity/solution/solution_right_bg.png');
                    background-size: cover;
                    background-position: bottom;
                    background-repeat: no-repeat;
                    position: relative;
                    overflow: hidden;
                    .light_bg {
                        position: absolute;
                        width: 122px;
                        // height: 168px;
                        height: 100px;
                        background-image: url(/static/img/smartCity/solution/light_bg.png);
                        background-size: contain;
                        background-position: 0 center;
                        background-repeat: no-repeat;
                        top: 0px;
                        left: 0px;
                        transition: top .5s;
                    }
                    .hasArrowToggle {
                    }
                    &.one {
                        .smart_city_section_table_right_content.one {
                            display: block;
                            width: 200%;
                            height: 100%;
                            &.current {
                                transform: translateX(-50%);
                            }
                            .smart_city_section_table_right_content_inner {
                                position: relative;
                                width: 980px;
                                height: 100%;
                                float: left;
                                .switch_arrow {
                                    position: absolute;
                                    background-image: url(/static/img/smartCity/solution/arrow.png);
                                    background-size: cover;
                                    background-position: center;
                                    background-repeat: no-repeat;
                                    width: 18px;
                                    height: 45px;
                                    right: 25px;
                                    top: 50%;
                                    margin-top: -22.5px;
                                    cursor: pointer;
                                }
                                .dot_list {
                                    position: absolute;
                                    width: 30px;
                                    height: 8px;
                                    bottom: 24px;
                                    left: 50%;
                                    margin-left: -15px;
                                    li {
                                        width: 6px;
                                        height: 6px;
                                        border-radius: 50%;
                                        background-color: #fff;
                                        opacity: 0.4;
                                        float: left;
                                        cursor: pointer;
                                        &.current {
                                        opacity: 1;
                                        }
                                        &:nth-child(2) {
                                        margin-left: 14px;
                                        }
                                    }
                                }
                                &:nth-child(2) {
                                    .switch_arrow {
                                        transform: rotate(-180deg);
                                    }
                                }
                            }
                        }
                    }
                    &.two {
                        .smart_city_section_table_right_content.two {
                            display: block;
                        }
                        .light_bg {
                            top: 100px;
                        }
                    }
                    &.three {
                        .smart_city_section_table_right_content.three {
                            display: block;
                            width: 200%;
                            height: 100%;
                            &.current {
                                transform: translateX(-50%);
                            }
                            .smart_city_section_table_right_content_inner {
                                position: relative;
                                width: 980px;
                                height: 100%;
                                float: left;
                                .switch_arrow {
                                    position: absolute;
                                    background-image: url(/static/img/smartCity/solution/arrow.png);
                                    background-size: cover;
                                    background-position: center;
                                    background-repeat: no-repeat;
                                    width: 18px;
                                    height: 45px;
                                    right: 25px;
                                    top: 50%;
                                    margin-top: -22.5px;
                                    cursor: pointer;
                                }
                                .dot_list {
                                    position: absolute;
                                    width: 30px;
                                    height: 8px;
                                    bottom: 24px;
                                    left: 50%;
                                    margin-left: -15px;
                                    li {
                                        width: 6px;
                                        height: 6px;
                                        border-radius: 50%;
                                        background-color: #fff;
                                        opacity: .4;
                                        float: left;
                                        cursor: pointer;
                                        &.current {
                                            opacity: 1;
                                        }
                                        &:nth-child(2) {
                                            margin-left: 14px;
                                        }
                                    }
                                }
                                &:nth-child(2) {
                                    .switch_arrow {
                                        transform: rotate(-180deg);
                                    }
                                }
                            }
                        }
                        .light_bg {
                            top: 200px;
                        }
                    }
                    &.four {
                        .smart_city_section_table_right_content.four {
                            display: block;
                            width: 200%;
                            height: 100%;
                            &.current {
                                transform: translateX(-50%);
                            }
                            .smart_city_section_table_right_content_inner {
                                position: relative;
                                width: 980px;
                                height: 100%;
                                float: left;
                                .switch_arrow {
                                    position: absolute;
                                    background-image: url(/static/img/smartCity/solution/arrow.png);
                                    background-size: cover;
                                    background-position: center;
                                    background-repeat: no-repeat;
                                    width: 18px;
                                    height: 45px;
                                    right: 25px;
                                    top: 50%;
                                    margin-top: -22.5px;
                                    cursor: pointer;
                                }
                                .dot_list {
                                    position: absolute;
                                    width: 30px;
                                    height: 8px;
                                    bottom: 24px;
                                    left: 50%;
                                    margin-left: -15px;
                                    li {
                                        width: 6px;
                                        height: 6px;
                                        border-radius: 50%;
                                        background-color: #fff;
                                        opacity: 0.4;
                                        float: left;
                                        cursor: pointer;
                                        &.current {
                                        opacity: 1;
                                        }
                                        &:nth-child(2) {
                                        margin-left: 14px;
                                        }
                                    }
                                }
                                &:nth-child(2) {
                                    .switch_arrow {
                                        transform: rotate(-180deg);
                                    }
                                }
                            }
                        }
                        .light_bg {
                            top: 300px;
                        }
                    }
                    &.five {
                        .smart_city_section_table_right_content.five {
                            display: block;
                        }
                        .light_bg {
                            top: 400px;
                        }
                    }
                    .smart_city_section_table_right_content {
                        display: none;
                        overflow: hidden;
                        position: relative;
                        width: 980px;
                        transition: all 1s;
                        .smart_city_section_table_right_content_inner {
                            padding: 62px 80px 62px 60px;
                            box-sizing: border-box;
                            overflow: hidden;
                            &>div {
                                overflow: hidden;
                                &.smart_city_section_table_right_content_inner_top {
                                    height: 200px;
                                }
                                &>div {
                                    width: 395px;
                                    float: left;
                                    &:nth-child(2) {
                                        margin-left: 50px;
                                    }
                                    p {
                                        &:nth-child(1) {
                                            font-size: 18px;
                                            margin-bottom: 16px;
                                            img {
                                                width: 25px;
                                                height: 25px;
                                                margin-right: 18px;
                                            }
                                        }
                                        &:nth-child(2) {
                                            padding-left: 43px;
                                            font-size: 14px;
                                            line-height: 20px;
                                            text-align: justify;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        &.four {
            background-color: #01063C;
            overflow: hidden;
            background-image: url('/static/img/smartCity/case/main_bg.jpg');
            background-size: 100% 719px;
            background-position: bottom;
            background-repeat: no-repeat;
            .smart_city_section_content_case_list_m {
                display: none;
            }
            .smart_city_section_content_case_list {
                height: 425px;
                margin-top: 50px;
                margin-bottom: 70px;
                display: block;
                background: #01063c;
                .smart_city_section_content_case_item {
                    position: relative;
                    float: left;
                    width: 240px;
                    height: 425px;
                    text-align: justify;
                    font-size: 14px;
                    padding: 40px 15px;
                    box-sizing: border-box;
                    overflow: hidden;
                    &:nth-child(1) {
                        .smart_city_section_content_case_item_mask {
                            background-image: url('/static/img/smartCity/case/city01.jpg');
                        }
                    }
                    &:nth-child(2) {
                        .smart_city_section_content_case_item_mask {
                            background-image: url('/static/img/smartCity/case/city02.jpg');
                        }
                    }
                    &:nth-child(3) {
                        .smart_city_section_content_case_item_mask {
                            background-image: url('/static/img/smartCity/case/city03.png');
                        }
                    }
                    &:nth-child(4) {
                        .smart_city_section_content_case_item_mask {
                            background-image: url('/static/img/smartCity/case/city04.jpg');
                        }
                    }
                    &:nth-child(5) {
                        .smart_city_section_content_case_item_mask {
                            background-image: url('/static/img/smartCity/case/city05.jpg');
                        }
                    }
                    &.current {
                        background-color: rgba(0, 0, 0, 1);
                        &:after {
                            position: absolute;
                            content: '';
                            width: 100%;
                            height: 100%;
                            background-color: rgba(0, 0, 0, .5);
                            top: 0;
                            left: 0;
                        }
                        .smart_city_section_content_case_item_title {
                            margin-top: 0;
                        }
                        .smart_city_section_content_case_item_desc {
                            opacity: 1;
                        }
                    }
                    .smart_city_section_content_case_item_mask {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        opacity: .7;
                        top: 0;
                        left: 0;
                        background-size: cover;
                        background-position: center;
                        background-repeat: no-repeat;
                    }
                    .smart_city_section_content_case_item_title {
                        text-align: center;
                        font-size: 29px;
                        padding-bottom: 20px;
                        margin-top: 157px;
                        transition: all .5s;
                        position: relative;
                        z-index: 2;
                    }
                    .smart_city_section_content_case_item_desc {
                        opacity: 0;
                        transition: opacity .5s;
                        position: relative;
                        z-index: 2;
                    }
                }
            }
        }
        &.five {
            padding-top: 0;
            background-color: #01063C;
            font-size: 12px;
            line-height: 60px;
            color: rgba(255, 255, 255, .6);
            text-align: center;
            position: relative;
            background-size: 100% 3px;
            background-position: top;
            background-repeat: no-repeat;
            background-image: linear-gradient(90deg, rgba(0, 72, 215, 1) 0%, rgba(224, 27, 127, 1) 51%, rgba(0, 72, 215, 1) 100%);
        }
    }
}

.smart_city_schedule {
    background-image: url('/static/img/smartCity/schedule-bg.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .smart_city_schedule_bd {
        margin: 0 auto;
        width: 100%;
        max-width: 1200px;
        padding-bottom: 60px;
    }
    .smart_city_schedule_tit {
        background-image: url('/static/img/smartCity/tit-bg.png');
        background-repeat: no-repeat;
        background-size: auto 98px;
        min-width: 247px;
        height: 98px;
        left: -35px;
        position: relative;
        .smart_city_schedule_tit_inner {
            position: relative;
            left: 35px;
            p {
                font-size: 36px; // font-weight: 600;
                color: rgba(255, 255, 255, 1);
                line-height: 59px;
            }
            span {
                font-size: 20px; // font-weight: 300;
                opacity: .7;
                color: rgba(253, 2, 131, 1);
            }
        }
    }
    .smart_city_schedule_content {
        display: flex;
        justify-content: space-between;
        margin-top: 60px;
        .smart_city_schedule_content_left {
            width: 130px;
            height: 40px;
            background: linear-gradient(0deg, rgba(0, 72, 215, 1) 0%, rgba(224, 27, 127, 1) 100%);
            opacity: 0.8;
            span {
                font-size: 51px;
                font-weight: 600;
                color: #ffffff;
                line-height: 59px;
                position: relative;
                bottom: 20px;
            }
        }
        .smart_city_schedule_content_right {
            width: 1000px;
            .smart_city_schedule_content_right_topline {
                height: 3px;
                background: linear-gradient(90deg, rgba(55, 190, 240, 1) 0%, rgba(255, 0, 130, 1) 100%);
                margin-bottom: 15px;
            }
            table tr {
                height: 40px;
                background: linear-gradient(-49deg, rgba(1, 6, 60, 1) 0%, rgba(30, 48, 114, 1) 100%);
                opacity: 0.8;
                display: table;
                margin: 10px;
                td {
                    color: #ffffff;
                    width: 300px;
                    font-size: 16px;
                    font-weight: 400;
                    color: rgba(255, 255, 255, 1);
                    line-height: 35px;
                }
                .circle {
                    height: 12px;
                    width: 12px;
                    background: linear-gradient(114deg, rgba(55, 190, 240, 1) 0%, rgba(255, 0, 130, 1) 100%);
                    display: inline-table;
                    border-radius: 50%;
                    margin: auto 20px;
                }
            }
        }
    }
}

.smart_city_paper {
    background: #000536;
    .smart_city_paper_bd {
        margin: 0 auto;
        width: 100%;
        max-width: 1200px;
        padding-bottom: 60px;
    }
    .smart_city_paper_tit {
        background-image: url('/static/img/smartCity/tit-bg.png');
        background-repeat: no-repeat;
        background-size: auto 98px;
        min-width: 247px;
        height: 98px;
        left: -35px;
        position: relative;
        .smart_city_paper_tit_inner {
            position: relative;
            left: 35px;
            p {
                font-size: 36px; // font-weight: 600;
                color: rgba(255, 255, 255, 1);
                line-height: 59px;
            }
            span {
                font-size: 20px; // font-weight: 300;
                opacity: .7;
                color: rgba(253, 2, 131, 1);
            }
        }
    }
    .smart_city_paper_content {
        margin: 60px 0 0;
        display: flex;
        .smart_city_paper_content_left {
            background-image: url('/static/img/smartCity/whitepaper-left.png');
            background-repeat: no-repeat;
            background-size: auto 360px; // min-width: 247px;
            height: 360px;
            left: -15%;
            position: relative;
            max-width: 960px;
            font-size: 20px;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            line-height: 49px;
            opacity: 0.9;
            width: 73%;
            span {
                position: relative;
                &:nth-child(1) {
                    left: 42%;
                    top: 30%;
                }
                &:nth-child(2) {
                    left: 66%;
                    top: 30%;
                }
                &:nth-child(3) {
                    left: 1%;
                    top: 56%;
                }
                &:nth-child(4) {
                    left: 24%;
                    top: 56%;
                }
                &:nth-child(5) {
                    left: 23%;
                    top: 87%;
                }
            }
        }
        .smart_city_paper_content_right {
            background-image: url(/static/img/smartCity/whitepaper-bg.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: 66%;
            margin-left: -41%;
            height: 420px;
            margin-top: -3%;
            .smart_city_paper_content_right_inner {
                position: relative;
                left: 41%;
                top: 10%;
                width: 210px;
            }
            .smart_city_paper_content_right_title {
                background-image: url("/static/img/smartCity/whitepaper-right.jpg");
                background-repeat: no-repeat;
                background-size: 100% 100%;
                background-clip: text !important;
                -moz-background-clip: text !important;
                -webkit-background-clip: text !important;
                color: transparent !important;
                font-size: 20px;
                font-weight: 600;
            }
            .smart_city_paper_content_right_title_ie {
                color: #ff8fc8 !important;
                font-size: 20px;
                font-weight: 600;
                span {
                    border-color: #ff8fc8 transparent transparent;
                }
            }
            .smart_city_paper_content_right_triangle {
                border-width: 10px 8px;
                border-color: #7d25c2 transparent transparent;
                border-style: solid;
                position: relative;
                top: 20px;
            }
            .smart_city_paper_content_right_book {
                width: 130px;
                margin: 26px 0;
            }
            .smart_city_paper_content_right_btn {
                background-image: url('/static/img/smartCity/whitepaper-btn.png');
                background-repeat: no-repeat;
                background-size: 100% 100%;
                height: 49px;
                width: 130px;
                color: #ffffff;
                text-align: center;
                font-size: 20px;
                font-weight: 400;
                line-height: 53px;
                margin-top: 10px;
                opacity: 0.6;
            }
            .smart_city_paper_content_right_tips {
                font-size: 16px;
                font-weight: 400;
                line-height: 53px;
                opacity: 0.6;
            }
        }
    }
}

.smart_city_download_dialog {
    display: none;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1050;
    color: #ffffff;
    overflow: auto;
    .smart_city_download_mask {
        position: absolute;
        width: 100%;
        height: 150%;
        top: 0;
        left: 0;
        background: rgba(0, 10, 32, 1);
        opacity: 0.9;
    }
    .smart_city_download_form {
        position: absolute;
        top: 17%;
        left: 15%;
        background-color: #000A20;
        border-radius: 3px;
        // overflow: hidden;
        width: 920px;
        .smart_city_download_dialog_close {
            height: 22px;
            width: 22px;
            float: right;
        }
        .smart_city_download_form_title {
            font-size: 26px;
            font-weight: 400;
            line-height: 30px;
            text-align: center;
            color: #ffffff;
            padding: 30px;
        }
        .smart_city_download_form_item {
            float: left;
            width: 390px;
            padding: 0px 30px;
            &.ifNeed {
                width: 780px;
                height: 60px;
                line-height: 60px;
                input {
                    width: 18px;
                    height: 18px;
                    background: rgba(38,45,62,1);
                    border: 1px solid rgba(166,166,166,1);
                    position: relative;
                    top: 4px;
                    margin-right: 5px;
                }
            }
            .ui-area-wrap {
                width: 410px;
                height: 40px;
                .ui-area-content-wrap {
                    background-color: #262d3e;
                    border: none;
                    top: 40px;
                    width: 384px;
                    .ui-area-tab {
                        border-bottom: 2px solid #4e4d4d;
                        a.ui-area-current {
                            border: 2px solid #4e4d4d;
                            border-bottom: none;
                        }
                    }
                    .ui-area-content-list li a {
                        color: #ffffff;
                        &:hover {
                            color: #005aa0;
                        }
                    }
                }
                .ui-area-text-wrap {
                    width: 100%;
                    height: 40px;
                    border: 1px solid rgba(38, 45, 62, 1);
                    line-height: 38px;
                    background: rgba(38, 45, 62, 1);
                    box-shadow: inset 0 2px 3px 0 rgba(55, 80, 161, 0.09);
                    padding-left: 20px;
                    box-sizing: border-box;
                    color: #ffffff;
                    &.error {
                        border: 1px solid #E2231A;
                    }
                    b {
                        top: 10px;
                        right: 8px;
                    }
                }
            }
            label {
                display: block;
                width: 100%;
                margin-bottom: 10px;
                span {
                    color: #FF0000;
                }
            }
            input {
                width: 100%;
                height: 40px;
                border: 1px solid rgba(38, 45, 62, 1);
                line-height: 40px;
                background: rgba(38, 45, 62, 1);
                box-shadow: inset 0 2px 3px 0 rgba(55, 80, 161, 0.09);
                padding-left: 20px;
                color: #ffffff;
                &.error {
                    border: 1px solid #E2231A;
                }
            }
            p {
                color: #e2231a;
                font-size: 12px;
                height: 18px;
            }
            select {
                width: 412px;
                height: 40px;
                line-height: 40px;
                background: rgba(203, 203, 203, 0.09);
                border: 1px solid rgba(151, 151, 151, 0.12);
                box-shadow: inset 0 2px 3px 0 rgba(55, 80, 161, 0.09);
            }
            .select2-container--default .select2-selection--single {
                background: #262d3e;
                border: 1px solid #aaa;
                height: 40px;
                width: 412px;
                line-height: 40px;
                border-radius: 0px;
                &:focus {
                    outline: none;
                }
                .select2-selection__rendered {
                    line-height: 40px;
                    padding-left: 20px;
                    color: #ffffff
                }
                .select2-selection__arrow {
                    top: 7px;
                    right: -10px;
                }
            }
            .select2-container {
                z-index: 99999;
            }
        }
        .smart_city_download_form_btn {
            width: 160px;
            height: 40px;
            line-height: 40px;
            border: 0;
            margin: 50px auto 30px;
            color: #fff;
            background: linear-gradient(90deg, rgba(55, 190, 240, 1) 0%, rgba(255, 0, 130, 1) 100%);
            margin-left: 380px;
            &:active {
                opacity: .5;
            }
            &:hover {
                box-shadow: 0 0 10px 0 rgba(3, 0, 76, .3);
            }
        }
    }

}
// 暂时注释，因为这里的样式会对其他页面的select2造成影响
.select2-container--open .select2-dropdown--above {
    background: rgba(0, 10, 32, 1);
    color: #ffffff;
    // width: 412px !important;
}
.select2-container--open .select2-dropdown--below {
    background: rgba(0, 10, 32, 1);
    color: #ffffff;
    // width: 412px !important;
}
.select2-container--default .select2-results__option[aria-selected=true] {
    background-color: #6b6d74;
}

@media (min-width: 1200px) {
    .select2-container--open .select2-dropdown--above {
        width: 412px !important;
    }
    .select2-container--open .select2-dropdown--below {
        width: 412px !important;
    }
}

@media (max-width: 1200px) {
    .smart_city_visible_xs {
        display: block;
    }
    .smart_city_hidden_xs {
        display: none;
    }
    .smart_city_banner {
        background-image: url('/static/img/smartCity/banner-bg-xs.jpg');
        .banner_title {
            display: none;
        }
        button {
            position: absolute;
            bottom: 14%;
            left: 6%;
            width: 100px;
            height: 33px;
            line-height: 32px;
            font-size: 14px;
        }
    }
    .smart_city_paper_xs {
        color: #ffffff;
        background-image: url('/static/img/smartCity/whitepaper-bg-xs.jpg');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        .smart_city_paper_content_xs {
            // padding: 30px 0;
            .smart_city_paper_content_title_xs {
                background-image: url('/static/img/smartCity/tit-bg.png');
                background-repeat: no-repeat;
                background-size: 153px 55px;
                h3 {
                    margin-left: 25px;
                    &:nth-child(1) {
                        font-size: 23px; // font-weight: 600;
                        line-height: 20px;
                    }
                    &:nth-child(2) {
                        font-size: 12px; // font-weight: 300;
                        color: rgba(253, 2, 131, 1);
                        line-height: 36px;
                        opacity: .7;
                    }
                }
            }
            .smart_city_paper_content_left_xs {
                background-image: url('/static/img/smartCity/whitepaper-left-ad.png');
                background-repeat: no-repeat;
                background-size: 100% 100%;
                margin: 30px 0;
                position: relative;
                left: 0;
            }
            .smart_city_paper_content_subtit_xs {
                margin-left: 25px;
                background: linear-gradient(236deg, rgba(55, 190, 240, 1) 0%, rgba(255, 69, 164, 1) 100%);
                color: transparent;
                background-clip: text;
                -moz-background-clip: text !important;
                -webkit-background-clip: text !important;
                font-size: 20px;
                font-weight: 600;
            }
            .smart_city_paper_content_img_xs {
                text-align: center;
                img {
                    height: 170px;
                    padding: 20px 0;
                }
            }
            .smart_city_paper_content_btn_xs {
                background-image: url('/static/img/smartCity/whitepaper-btn-xs.png');
                background-repeat: no-repeat;
                background-size: 100% 100%;
                height: 36px;
                margin: 0 25px;
                text-align: center;
                vertical-align: middle;
                align-items: center;
                display: flex;
                justify-content: space-around;
                span {
                    font-size: 14px;
                    font-weight: 400;
                    color: rgba(255, 255, 255, 1);
                    line-height: 26px;
                    letter-spacing: 2px;
                    opacity: 0.6;
                }
            }
            .smart_city_paper_content_btn_tips_xs {
                font-size: 12px;
                font-weight: 400;
                line-height: 53px;
                opacity: 0.9;
                text-align: center;
            }
        }
    }
    .smart_city_download_dialog {
        .smart_city_download_form {
            width: 100%;
            left: 0%;
            .smart_city_download_dialog_close{
                margin-right: 10px;
            }
            .smart_city_download_form_title {
                font-size: 18px;
                padding: 20px 10px;
            }
            .smart_city_download_form_content{
                padding: 0 20px;
            }
            .smart_city_download_form_item {
                width: 100%;
                padding: 10px;
                &.ifNeed {
                    width: 100%;
                    height: 40px;
                    line-height: 40px;
                    input {
                        top: 3px;
                    }
                }
                .ui-area-wrap {
                    width: 100%;
                    height: 30px;
                    .ui-area-text-wrap {
                        width: 75%;
                        height: 30px;
                        line-height: 28px;
                        b {
                            top: 6px;
                        }
                    }
                    .ui-area-content-wrap {
                        width: 85%;
                    }
                }
                label {
                    width: 16%;
                    float: left;
                }
                input {
                    height: 30px;
                    line-height: 28px;
                    width: 70%;
                }
                p {
                    height: 10px;
                    margin-left: 16%;
                }
                select {
                    width: 100%;
                    height: 30px;
                    line-height: 30px;
                }
                .select2-container--default .select2-selection--single {
                    height: 30px;
                    width: 100%;
                    line-height: 30px;
                    .select2-selection__rendered {
                        line-height: 30px;
                        padding-left: 10px;
                        color: #ffffff
                    }
                    .select2-selection__arrow {
                        top: 2px;
                        right: 5px;
                    }
                }
            }
            .select2-container {
                width: 76% !important;
            }
            .smart_city_download_form_btn {
                height: 30px;
                width: 94%;
                margin: 20px 10px;
                text-align: center;
                align-items: center;
                line-height: 30px;
            }
        }
    }
    .smart_city_container {
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
        .smart_city_section {
            padding-top: 35px;
            .smart_city_section_title {
                padding: 0 25px;
                padding-top: 4px;
                .smart_city_section_title_bg {
                    width: 153px;
                    height: 55px;
                    background-size: 153px 55px;
                    left: 5px;
                }
                p {
                    position: relative;
                    z-index: 2;
                    line-height: 1;
                    &:nth-child(2) {
                        font-size: 23px;
                        color: #fff;
                        margin-bottom: 7px;
                    }
                    &:nth-child(3) {
                        font-size: 12px;
                    }
                    &:nth-child(4) {
                        margin-top: 24px;
                        margin-bottom: 16px;
                        font-size: 12px;
                        line-height: 1.5;
                    }
                }
            }
            &.three {
                .smart_city_section_video_wrap {
                    padding: 0 25px;
                    margin-bottom: 25px;
                    .smart_city_section_video {
                        width: 100%;
                        height: 129px;
                        background-size: 100% 129px;
                        position: relative;
                        &.two {
                            margin-left: 0;
                            margin-top: 15px;
                        }
                        .smart_city_section_video_title {
                            position: absolute;
                            font-size: 18px;
                            top: 50%;
                            transform: translateY(-50%);
                            left: 18px;
                            margin-top: 0;
                            margin-left: 0;
                        }
                        &.current {
                            width: 100%;
                        }
                        .smart_city_section_video_play {
                            top: 50%;
                            width: auto;
                            height: auto;
                            font-size: 12px;
                            opacity: 1;
                            transform: translateY(-50%);
                            padding: 18px 18px 14px;
                            background-color: rgba(0, 0, 0, .4);
                            img {
                                width: 30px;
                                height: 30px;
                                margin-top: 0;
                                margin-bottom: 10px;
                            }
                        }
                    }
                }
                .smart_city_section_table {
                    display: none;
                }
                .smart_city_section_table_m {
                    display: block;
                    .solution_list {
                        .solution_item {
                            border-top: 1px solid #484A60;
                            &.current {
                                .solution_item_top {
                                    img {
                                        transform: translateY(-50%) rotate(-180deg);
                                    }
                                    span {
                                        &:nth-child(1) {
                                            background-image: url(/static/img/smartCity/solution/icon01_active.png);
                                        }
                                    }
                                }
                                .solution_item_bot {
                                    display: block;
                                }
                            }
                            &:nth-child(1) {
                                &.current {
                                    .solution_item_top {
                                        span {
                                            &:nth-child(1) {
                                                background-image: url(/static/img/smartCity/solution/icon01_active.png);
                                            }
                                        }
                                    }
                                }
                                .solution_item_top {
                                    span {
                                        &:nth-child(1) {
                                            background-image: url(/static/img/smartCity/solution/icon01.png);
                                        }
                                    }
                                }
                            }
                            &:nth-child(2) {
                                &.current {
                                    .solution_item_top {
                                        span {
                                            &:nth-child(1) {
                                                background-image: url(/static/img/smartCity/solution/icon02_active.png);
                                            }
                                        }
                                    }
                                }
                                .solution_item_top {
                                    span {
                                        &:nth-child(1) {
                                            background-image: url(/static/img/smartCity/solution/icon02.png);
                                        }
                                    }
                                }
                            }
                            &:nth-child(3) {
                                &.current {
                                    .solution_item_top {
                                        span {
                                            &:nth-child(1) {
                                                background-image: url(/static/img/smartCity/solution/icon03_active.png);
                                            }
                                        }
                                    }
                                }
                                .solution_item_top {
                                    span {
                                        &:nth-child(1) {
                                            background-image: url(/static/img/smartCity/solution/icon03.png);
                                        }
                                    }
                                }
                            }
                            &:nth-child(4) {
                                &.current {
                                    .solution_item_top {
                                        span {
                                            &:nth-child(1) {
                                                background-image: url(/static/img/smartCity/solution/icon04_active.png);
                                            }
                                        }
                                    }
                                }
                                .solution_item_top {
                                    span {
                                        &:nth-child(1) {
                                            background-image: url(/static/img/smartCity/solution/icon04.png);
                                        }
                                    }
                                }
                            }
                            &:nth-child(5) {
                                &.current {
                                    .solution_item_top {
                                        span {
                                            &:nth-child(1) {
                                                background-image: url(/static/img/smartCity/solution/icon05_active.png);
                                            }
                                        }
                                    }
                                }
                                .solution_item_top {
                                    span {
                                        &:nth-child(1) {
                                            background-image: url(/static/img/smartCity/solution/icon05.png);
                                        }
                                    }
                                }
                            }

                            .solution_item_top {
                                font-size: 18px;
                                height: 60px;
                                line-height: 60px;
                                padding: 0 25px;
                                position: relative;
                                span {
                                    &:nth-child(1) {
                                        display: inline-block;
                                        width: 20px;
                                        height: 20px;
                                        margin-right: 10px;
                                        background-size: cover;
                                        background-position: center;
                                        background-repeat: no-repeat;
                                        position: relative;
                                        top: 5px;
                                        background-image: url(/static/img/smartCity/solution/icon01.png);
                                    }
                                }
                                img {
                                    position: absolute;
                                    top: 50%;
                                    right: 25px;
                                    width: 15px;
                                    transform: translateY(-50%);
                                    transition: all .5s;
                                }
                            }
                            .solution_item_bot {
                                font-size: 12px;
                                text-align: justify;
                                display: none;
                                margin-bottom: 36px;
                                .solution_item_bot_section {
                                    padding: 0 25px;
                                    margin-bottom: 20px;
                                    img {
                                        width: 14px;
                                        height: 14px;
                                        margin-right: 5px;
                                    }
                                    p {
                                        &:nth-child(1) {
                                            display: flex;
                                            align-items: center;
                                        }
                                        &:nth-child(2) {
                                            margin-top: 13px;
                                            padding-left: 20px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            &.four {
                background-size: 100% 260px;
                .smart_city_section_content_case_list {
                    display: none;
                }
                .smart_city_section_content_case_list_m {
                    display: block;
                    padding: 0 25px;
                    margin-top: 35px;
                    .case_list {
                        .case_list_title {
                            display: flex;
                            line-height: 38px;
                            text-align: center;
                            span {
                                flex: 1;
                                background: linear-gradient(90deg, rgba(55, 190, 240, .4) 0%, rgba(255, 0, 130, .4) 100%);
                                &.current {
                                    background: linear-gradient(90deg, rgba(55, 190, 240, 1) 0%, rgba(255, 0, 130, 1) 100%);
                                }
                            }
                        }
                        .case_list_content {
                            margin: 25px 0 45px;
                            p {
                                display: none;
                                text-align: justify;
                                &.current {
                                    display: block;
                                }
                            }
                        }
                    }
                }
            }
            &.five {
                font-size: 10px;
                line-height: 1.2;
                padding: 15px;
            }
        }
    }
}
</style>
<style lang="less">
.smart_city_container {
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
        color: #333;
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
          background: linear-gradient(80deg, #0989c5 0, #995cb6 100%);
        }
      }
    }
  }
}
@media (max-width: 1200px) {
  .smart_city_container {
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
          color: #333;
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
            background: linear-gradient(80deg, #0989c5 0, #995cb6 100%);
          }
        }
      }
    }
  }
}
</style>