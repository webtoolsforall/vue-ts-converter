<template>
  <div class="jdc-solution-floor-wrap"> 
    <!-- widget jdc-solution begin -->
    <div
      v-for="(item,index) in pageInfo"
      :key="index"
    >
      <!-- 11banner样式 -->
      <div
        v-if="item.templet==11 && item.txt&&item.txt.data&&item.txt.data.length>0"
        class="jdc-solution-banner"
        :style="'background-color:'+item.txt.data[0].backgroundColor"
      >
        <div class="jdc-banner-wrap">
          <div class="jdc-banner-item">
            <div
              class="jdc-content-wrap"
              v-if="item.txt&&item.txt.data&&item.txt.data.length>0"
            >
              <div class="right-area">
                <div class="img-box">
                  <img :src="item.txt.data[0].imageUrl">
                </div>
              </div>
              <div class="left-area">
                <h3
                  class="solution-banner-title"
                  v-text="item.txt.data[0].title"
                ></h3>
                <p
                  class="solution-banner-des"
                  v-text="item.txt.data[0].description"
                  :title="item.txt.data[0].description"
                ></p>
                <div
                  class="banner-btn-wrap"
                  v-if="item.txt.data[0].buttonMetas&&item.txt.data[0].buttonMetas.length>0"
                >
                  <a
                    class="jdc-banner-btn"
                    clstag="Solution|keycount|SectionBannerSec|Banner_0_0"
                    @click="gaEventTrigger('Solution|keycount|SectionBannerSec', 'Solution|keycount|SectionBannerSec|Banner_0_0')"
                    :href="item.txt.data[0].buttonMetas[0].link"
                    v-text="item.txt.data[0].buttonMetas[0].name"
                  >了解详情</a>
                  <a
                    class="jdc-banner-btn is-plain"
                    clstag="Solution|keycount|SectionBannerSec|Banner_0_1"
                    @click="gaEventTrigger('Solution|keycount|SectionBannerSec', 'Solution|keycount|SectionBannerSec|Banner_0_1')"
                    :href="item.txt.data[0].buttonMetas[1].link"
                    v-if="item.txt.data[0].buttonMetas[1]"
                    v-text="item.txt.data[0].buttonMetas[1].name"
                  >了解详情</a>
                  <a
                    class="jdc-banner-link"
                    clstag="Solution|keycount|SectionBannerSec|Banner_0_2"
                    @click="gaEventTrigger('Solution|keycount|SectionBannerSec', 'Solution|keycount|SectionBannerSec|Banner_0_2')"
                    :href="item.txt.data[0].buttonMetas[2].link"
                    v-if="item.txt.data[0].buttonMetas[2]"
                  >{{item.txt.data[0].buttonMetas[2].name}} &gt;</a>
                </div>
                <div class="banner-btn-wrap">
                  <a
                    class="banner-label-link"
                    v-if="item.txt.data[0].tagMetas"
                    v-for="(itemTag,tagIndex) in item.txt.data[0].tagMetas"
                    :key="tagIndex"
                    :clstag="`Solution|keycount|SectionBannerSec|Banner_1_${tagIndex}`"
                    @click="gaEventTrigger('Solution|keycount|SectionBannerSec', `Solution|keycount|SectionBannerSec|Banner_1_${tagIndex}`)"
                    :href="item.txt.data[0].tagMetas[tagIndex].link||'javascript:;'"
                    v-text="item.txt.data[0].tagMetas[tagIndex].name"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--吸顶-->
      <div class="jdc-bar jdc-bar-border js-bar-ceilinglamp hidden-xs"  v-if="index === 0">
        <div class="w f-cb">
          <div class="jdc-bar-nav " :class="pageInfo.length > 6 ? 'is-more' : ''">
            <div v-for="(tn,tnindex) in pageInfo.slice(0, 6)" v-if="checkTopFixBarShow(tn)" class="nav-item" :key="tnindex"><a href="javascript:;">{{tn.txt.floorName}}</a></div>
            <div class="nav-more" v-if="pageInfo.length > 6">
              <a href="javascript:;">更多<i class="jdcfont">&#xe8f5;</i></a>
              <div class="nav-sub">
                <div v-if="checkTopFixBarShow(stn)"  v-for="(stn,stnindex) in pageInfo.slice(6)" class="nav-item" :key="stnindex"><a href="javascript:;">{{stn.txt.floorName}}</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
        <!-- 21方案详述1样式-->
        <div
          v-if="item.templet==21"
          class="jdc-solution-floor"
        >
          <div class="solution-floor-hd">
            <h4
              class="solution-floor-title"
              v-text="item.txt.floorName"
            >楼层名称</h4>
          </div>
          <div
            class="solution-floor-bd"
            v-if="item.txt&&item.txt.data&&item.txt.data.length>0"
          >
            <ul class="solution-case-list f-cb">
              <li
                class="solution-case-item"
                :class="{active:ind==index1,on:ind==index1}"
                v-for="(it,ind) in item.txt.data"
                :key="ind"
                :clstag="`Solution|keycount|MiddleContentSec|Overview1_${ind}`"
                @click="gaEventTrigger('Solution|keycount|MiddleContentSec', `Solution|keycount|MiddleContentSec|Overview1_${ind}`)"
              >
                <div class="img-wrap">
                  <img
                    :src="it.imageUrl"
                    class="solution-case-img"
                  >
                </div>
                <div class="ct-wrap">
                  <h3
                    class="ct-title"
                    v-text="it.title"
                  ></h3>
                  <p
                    class="ct-des"
                    v-text="it.description"
                  ></p>
                </div>
                <ul class="solution-case-sub">
                  <li
                    v-for="(li,liIndex) in it.subDescriptions"
                    v-text="li.descriptionText"
                    :key="liIndex"
                  ></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <!-- 22方案详述2样式-->
        <div
          v-if="item.templet==22"
          class="jdc-solution-floor"
        >
          <div class="solution-floor-hd">
            <h4
              class="solution-floor-title"
              v-text="item.txt.floorName"
            >楼层名称</h4>
          </div>
          <div
            class="solution-floor-bd"
            v-if="item.txt&&item.txt.data&&item.txt.data.length>0"
          >
            <div class="solution-case row">
              <div class="col-5 col-xs-12">
                <img :src="item.txt.data[0].imageUrl">
              </div>
              <div class="col-7 col-xs-12">
                <div class="detail">
                  <h4
                    class="tit"
                    v-text="item.txt.data[0].showTitle||item.txt.data[0].title"
                  >这是标题 </h4>
                  <p
                    class="txt"
                    v-text="item.txt.data[0].descriptionDetail||item.txt.data[0].description"
                  >这里是内容</p>
                  <a
                    class="jdc-btn jdc-bg jdc-m-btn-primary"
                    v-if="item.txt.data[0].buttons&&item.txt.data[0].buttons.link"
                    clstag="Solution|keycount|MiddleContentSec|Overview2_0"
                    @click="gaEventTrigger('Solution|keycount|MiddleContentSec', 'Solution|keycount|MiddleContentSec|Overview2_0')"
                    :href="item.txt.data[0].buttons.link"
                    v-text="item.txt.data[0].buttons.name"
                  >这是按钮</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 31方案架构1-->
        <div
          v-if="item.templet==31"
          class="jdc-solution-floor"
        >
          <div class="solution-floor-hd">
            <h4
              class="solution-floor-title"
              v-text="item.txt.floorName"
            >楼层名称</h4>
          </div>
          <div
            class="solution-floor-bd"
            v-if="item.txt&&item.txt.data&&item.txt.data.length>0"
          >
            <div class="solution-fw f-cb">
              <div class="solution-fw-img">
                <img :src="item.txt.data[0].imageUrl">
              </div>
              <div class="solution-fw-detail">
                <h4
                  class="tit"
                  v-text="item.txt.data[0].title"
                >架构说明</h4>
                <p
                  class="txt"
                  v-text="item.txt.data[0].descriptionDetail"
                >这里是描述内容</p>
                <a
                  class="jdc-btn jdc-bg jdc-m-btn-primary"
                  v-if="item.txt.data[0].buttons&&item.txt.data[0].buttons.link"
                  clstag="Solution|keycount|MiddleContentSec|Architecture1_0"
                  @click="gaEventTrigger('Solution|keycount|MiddleContentSec', 'Solution|keycount|MiddleContentSec|Architecture1_0')"
                  :href="item.txt.data[0].buttons.link"
                  v-text="item.txt.data[0].buttons.name"
                >这是按钮</a>
              </div>
            </div>
          </div>
        </div>

        <!-- 32方案架构2-->
        <div
          v-if="item.templet==32"
          class="jdc-solution-floor"
        >
          <div class="solution-floor-hd">
            <h4
              class="solution-floor-title"
              v-text="item.txt.floorName"
            >楼层名称</h4>
          </div>
          <div
            class="solution-floor-bd"
            v-if="item.txt&&item.txt.data&&item.txt.data.length>0"
          >
            <div class="solution-fw f-cb">
              <div
                class="solution-fw-img solution-fw-img-col"
                clstag="Solution|keycount|MiddleContentSec|Architecture2_0"
                @click="gaEventTrigger('Solution|keycount|MiddleContentSec', 'Solution|keycount|MiddleContentSec|Architecture2_0')"
              >
                <img :src="item.txt.data[0].imageUrl">
              </div>
            </div>
          </div>
        </div>

        <!-- 41典型场景-->
        <div
          v-if="item.templet==41"
          class="jdc-solution-floor jdc-solution-floor-bg"
          style="background-image:url(../../../static/img/2018/bg-scenes.jpg)"
        >
          <div class="solution-floor-hd">
            <h4
              class="solution-floor-title"
              v-text="item.txt.floorName"
            >楼层名称</h4>
          </div>
          <div
            class="solution-floor-bd"
            v-if="item.txt&&item.txt.data&&item.txt.data.length>0"
          >
            <div class="solution-scenes jdc-bar js-bar-tab jdc-bar-style2">
              <div class="w f-cb">
                <div
                  class="jdc-bar-nav hidden-xs"
                  :class="[item.txt.data.length>5?is_more:'']"
                >
                  <div
                    class="nav-item"
                    :class="{on:ind==0}"
                    :data-tab-idx="ind"
                    v-for="(it,ind) in item.txt.data.slice(0,5)"
                    :key="ind"
                  >
                    <a
                      href="javascript:;"
                      v-text="it.title"
                      :clstag="`Solution|keycount|MiddleContentSec|Scenario_0_${ind}`"
                      @click="gaEventTrigger('Solution|keycount|MiddleContentSec', `Solution|keycount|MiddleContentSec|Scenario_0_${ind}`)"
                    >在线教育</a>
                  </div>
                  <div
                    class="nav-more"
                    v-if="item.txt.data.length>5"
                  >
                    <a href="javascript:;">{{$t('solution.solution_04')}}<i
                        class="jdcfont"
                        :clstag="`Solution|keycount|MiddleContentSec|Scenario_0_More`"
                        @click="gaEventTrigger('Solution|keycount|MiddleContentSec', `Solution|keycount|MiddleContentSec|Scenario_0_More`)"
                      ></i></a>
                    <div class="nav-sub">
                      <div
                        class="nav-item inMore"
                        :data-tab-idx="indx"
                        v-for="(it,indx) in item.txt.data.slice(5)"
                        :key="indx"
                      >
                        <a
                          href="javascript:;"
                          v-text="it.title"
                          :clstag="`Solution|keycount|MiddleContentSec|Scenario_0_${indx+5}`"
                          @click="gaEventTrigger('Solution|keycount|MiddleContentSec', `Solution|keycount|MiddleContentSec|Scenario_0_${indx+5}`)"
                        >客户案例</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="solution-case-box">
                  <div
                    class="case-item f-cb"
                    v-for="(it,ind) in item.txt.data"
                    :key="ind"
                  >
                    <h4
                      class="case-item-hd "
                      :class="{active:ind==0}"
                      v-text="it.title"
                      :clstag="`Solution|keycount|MiddleContentSec|Scenario_0_${ind}`"
                      @click="gaEventTrigger('Solution|keycount|MiddleContentSec', `Solution|keycount|MiddleContentSec|Scenario_0_${ind}`)"
                    >在线教育</h4>
                    <div class="case-item-bd">
                      <div class="case-image">
                        <img
                          :src="it.imageUrl"
                          alt=""
                        >
                      </div>
                      <div class="f-fl case-cont">
                        <p v-if="it.sceneDescription"><span class="f-fs3">{{$t('solution.solution_01')}}</span>{{it.sceneDescription}}</p>
                        <p v-if="it.solution"><span class="f-fs3">{{$t('solution.solution_02')}}</span>{{it.solution}}</p>
                        <p v-if="it.selectedProduct&&it.selectedProduct.length>0"><span class="f-fs3">{{$t('solution.solution_03')}}</span>
                          <a
                            :href="ite.url"
                            class="case-link"
                            v-for="(ite,inde) in it.selectedProduct"
                            :key="inde"
                            v-text="ite.name"
                            :clstag="`Solution|keycount|MiddleContentSec|Scenario_1_${inde}`"
                            @click="gaEventTrigger('Solution|keycount|MiddleContentSec', `Solution|keycount|MiddleContentSec|Scenario_1_${inde}`)"
                          >云主机</a>
                        </p>
                        <a
                          class="jdc-btn jdc-btn-default jdc-m-btn-primary"
                          target="_blank"
                          v-if="it.buttons&&it.buttons.link"
                          :clstag="`Solution|keycount|MiddleContentSec|Scenario_2_${ind}`"
                          @click="gaEventTrigger('Solution|keycount|MiddleContentSec', `Solution|keycount|MiddleContentSec|Scenario_2_${ind}`)"
                          :href="it.buttons.link"
                          v-text="it.buttons.name"
                        >申请试用</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 51优势-->
        <div
          v-if="item.templet==51"
          class="jdc-solution-floor"
        >
          <div class="solution-floor-hd">
            <h3
              class="solution-floor-title"
              v-text="item.txt.floorName"
            >优势</h3>
          </div>
          <div
            class="solution-floor-bd"
            v-if="item.txt&&item.txt.data&&item.txt.data.length>0"
          >
            <ul class="row retail-advantage">
              <li
                class="col-3"
                v-for="(it,ind) in item.txt.data"
                :key="ind"
              >
                <div class="icon-wrap">
                  <i class="solution-icon">
                    <img :src="it.imageUrl">
                  </i>
                </div>
                <h4
                  class="retail-advantage-title"
                  v-text="it.title"
                >标题</h4>
                <p
                  class="retail-advantage-des"
                  v-text="it.description"
                >内容</p>
              </li>
            </ul>
          </div>
        </div>

        <!-- 61流程-->
        <div
          v-if="item.templet==61"
          class="jdc-solution-floor"
        >
          <div class="solution-floor-hd">
            <h3
              class="solution-floor-title"
              v-text="item.txt.floorName"
            >合作流程</h3>
          </div>
          <div
            class="solution-floor-bd"
            v-if="item.txt&&item.txt.data&&item.txt.data.length>0"
          >
            <div class="solution-process">
              <div class="g-table">
                <div
                  class="g-cell"
                  v-for="(it,ind) in item.txt.data[0].progress"
                  :key="ind"
                >
                  <i
                    class="icon"
                    v-text="ind+1"
                  >1</i>
                  <h4
                    class="tit"
                    v-text="it.name"
                  >提交申请</h4>
                </div>
              </div>
              <a
                class="jdc-btn jdc-bg jdc-m-btn-primary"
                v-if="item.txt.data[0].buttons&&item.txt.data[0].buttons.link"
                clstag="Solution|keycount|MiddleContentSec|Flow_0"
                @click="gaEventTrigger('Solution|keycount|MiddleContentSec', 'Solution|keycount|MiddleContentSec|Flow_0')"
                :href="item.txt.data[0].buttons.link"
                v-text="item.txt.data[0].buttons.name"
              >立即体验</a>
            </div>
          </div>
        </div>

        <!-- 71推荐产品-->
        <div
          v-if="item.templet==71"
          class="jdc-solution-floor"
        >
          <div class="solution-floor-hd">
            <h3
              class="solution-floor-title"
              v-text="item.txt.floorName"
            >推荐产品</h3>
          </div>
          <div
            class="solution-floor-bd"
            v-if="item.txt&&item.txt.data&&item.txt.data.length>0"
          >
            <div class="solution-products row">
              <div
                class="col-4 col-xs-12"
                v-for="(it,ind) in item.txt.data"
                :key="ind"
                v-if="ind<3"
              >
                <div class="solution-products-item">
                  <div class="icon">
                    <img :src="it.imageUrl">
                  </div>
                  <h3
                    class="tit"
                    v-text="it.title"
                  >云主机</h3>
                  <p
                    class="txt"
                    v-text="it.description"
                  >描述</p>
                  <span
                    class="price"
                    v-text="it.explain"
                  >￥56/月</span>
                  <div class="btn-box">
                    <a
                      class="jdc-btn jdc-bg jdc-m-btn-primary"
                      v-if="it.buttons&&it.buttons.link"
                      :clstag="`Solution|keycount|MiddleContentSec|Recommendation_${ind}`"
                      @click="gaEventTrigger('Solution|keycount|MiddleContentSec', `Solution|keycount|MiddleContentSec|Recommendation_${ind}`)"
                      :href="it.buttons.link"
                      v-text="it.buttons.name "
                    >按钮</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 81合作伙伴-->
        <div
          v-if="item.templet==81"
          class="jdc-solution-floor"
        >
          <div class="solution-floor-hd">
            <h3
              class="solution-floor-title"
              v-text="item.txt.floorName"
            >合作伙伴</h3>
          </div>
          <div
            class="solution-floor-bd"
            v-if="item.txt&&item.txt.data&&item.txt.data.length>0"
          >
            <div class="solution-slider">
              <div class="solution-slider-ct">
                <ul>
                  <li
                    class="solution-slider-item"
                    v-for="(it,ind) in item.txt.data"
                    :key="ind"
                  >
                    <div class="item-first">
                      <div class="img-box">
                        <img
                          :src="it.imageUrl"
                          alt=""
                        >
                      </div>
                      <h4
                        class="tit"
                        v-text="it.name"
                      >神州数码</h4>
                      <p
                        class="txt"
                        v-text="it.sketch"
                      >中国最大的整合IT服务商</p>
                    </div>
                    <div class="item-second">
                      <div class="detail">
                        <h4
                          class="tit"
                          v-text="it.name"
                        >金蝶</h4>
                        <p
                          class="txt"
                          v-text="it.detailDescription||it.description"
                        >遮罩层描述</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="solution-slider-btn solution-slider-prev"><a
                  href="javascript:;"
                  class="jdcfont"
                >&#xe906;</a></div>
              <div class="solution-slider-btn solution-slider-next"><a
                  href="javascript:;"
                  class="jdcfont"
                >&#xe905;</a></div>
            </div>
          </div>
        </div>

        <!-- 91客户案例-->
        <div
          v-if="item.templet==91"
          class="jdc-solution-floor"
        >
          <div class="solution-floor-hd">
            <h3
              class="solution-floor-title"
              v-text="item.txt.floorName"
            >客户案例</h3>
          </div>
          <div
            class="solution-floor-bd"
            v-if="item.txt&&item.txt.data&&item.txt.data.length>0"
          >
            <div class="solution-customer">
              <div class="row">
                <div
                  class="col-4 col-xs-12"
                  v-for="(it,ind) in item.txt.data[0].cases"
                  :key="ind"
                >
                  <a
                    :clstag="`Solution|keycount|MiddleContentSec|CustomerCase2_${ind}`"
                    @click="gaEventTrigger('Solution|keycount|MiddleContentSec', `Solution|keycount|MiddleContentSec|CustomerCase2_${ind}`)"
                    :href="it.linkUrl||'javascript:;'"
                    class="solution-customer-item"
                  >
                    <img
                      :src="it.imageUrl"
                      alt=""
                    >
                    <div class="detail">
                      <h3
                        class="tit"
                        v-text="it.title"
                      >这是标题</h3>
                      <p
                        class="txt"
                        v-text="it.sketch"
                      >这是简述</p>
                    </div>
                  </a>
                </div>
              </div>
              <div class="solution-customer-more">
                <a
                  class="more-link"
                  v-if="item.txt.data[0].buttons&&item.txt.data[0].buttons.link"
                  :href="item.txt.data[0].buttons.link"
                  clstag="Solution|keycount|MiddleContentSec|CustomerCase1_0"
                  @click="gaEventTrigger('Solution|keycount|MiddleContentSec', 'Solution|keycount|MiddleContentSec|CustomerCase1_0')"
                >{{item.txt.data[0].buttons.name}}&gt;</a>
              </div>
            </div>
          </div>
        </div>

        <!-- 92客户案例2-->
        <div
          v-if="item.templet==92"
          class="jdc-solution-floor"
        >
          <div class="solution-floor-hd">
            <h3
              class="solution-floor-title"
              v-text="item.txt.floorName"
            >客户案例2</h3>
          </div>
          <div
            class="solution-floor-bd"
            v-if="item.txt&&item.txt.data&&item.txt.data.length>0"
          >
            <div class="solution-customer">
              <div class="row">
                <div class="col-8 col-xs-12">
                  <a
                    :href="item.txt.data[0].cases[0].linkUrl"
                    class="solution-customer-item"
                    clstag="Solution|keycount|MiddleContentSec|CustomerCase2_0"
                    @click="gaEventTrigger('Solution|keycount|MiddleContentSec', 'Solution|keycount|MiddleContentSec|CustomerCase2_0')"
                  >
                    <img
                      :src="item.txt.data[0].cases[0].imageUrl"
                      alt=""
                    >
                    <div class="detail">
                      <h3
                        class="tit"
                        v-text="item.txt.data[0].cases[0].title"
                      >这是标题</h3>
                      <p
                        class="txt"
                        v-text="item.txt.data[0].cases[0].sketch"
                      >这是简述</p>
                    </div>
                  </a>
                </div>
                <div class="col-4 col-xs-12">
                  <a
                    :href="item.txt.data[0].cases[1].linkUrl"
                    class="solution-customer-item"
                    v-if="item.txt.data[0].cases[1]&&item.txt.data[0].cases[1].imageUrl"
                    clstag="Solution|keycount|MiddleContentSec|CustomerCase2_1"
                    @click="gaEventTrigger('Solution|keycount|MiddleContentSec', 'Solution|keycount|MiddleContentSec|CustomerCase2_1')"
                  >
                    <img
                      :src="item.txt.data[0].cases[1].imageUrl"
                      alt=""
                    >
                    <div class="detail">
                      <h3
                        class="tit"
                        v-text="item.txt.data[0].cases[1].title"
                      >这是标题</h3>
                      <p
                        class="txt"
                        v-text="item.txt.data[0].cases[1].sketch"
                      >这是简述</p>
                    </div>
                  </a>
                  <a
                    :href="item.txt.data[0].cases[2].linkUrl"
                    class="solution-customer-item"
                    v-if="item.txt.data[0].cases[2]&&item.txt.data[0].cases[2].imageUrl"
                    clstag="Solution|keycount|MiddleContentSec|CustomerCase2_3"
                    @click="gaEventTrigger('Solution|keycount|MiddleContentSec', 'Solution|keycount|MiddleContentSec|CustomerCase2_3')"
                  >
                    <img
                      :src="item.txt.data[0].cases[2].imageUrl"
                      alt=""
                    >
                    <div class="detail">
                      <h3
                        class="tit"
                        v-text="item.txt.data[0].cases[2].title"
                      >这是标题</h3>
                      <p
                        class="txt"
                        v-text="item.txt.data[0].cases[2].sketch"
                      >这是简述</p>
                    </div>
                  </a>
                </div>

              </div>
              <div class="solution-customer-more">
                <a
                  class="more-link"
                  v-if="item.txt.data[0].buttons&&item.txt.data[0].buttons.link"
                  :href="item.txt.data[0].buttons.link"
                  clstag="Solution|keycount|MiddleContentSec|CustomerCase2_4"
                  @click="gaEventTrigger('Solution|keycount|MiddleContentSec', 'Solution|keycount|MiddleContentSec|CustomerCase2_4')"
                >{{item.txt.data[0].buttons.name}}&gt;</a>
              </div>
            </div>
          </div>
        </div>

        <!-- 101运营位-->
        <div
          v-if="item.templet==101 && item.txt&&item.txt.data&&item.txt.data.length>0 "
          class="jdc-solution-ad"
          :style="{backgroundImage: 'url('+item.txt.data[0].imageUrl+')', backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize: 'contain'}"
        >
          <a :href="item.txt.data[0].operatingLink ||'javascript:;'">
            <div
              class="txt"
              v-text="item.txt.data[0].operatingText "
              clstag="Solution|keycount|MiddleContentSec|OtherInfo_0"
              @click="gaEventTrigger('Solution|keycount|MiddleContentSec', 'Solution|keycount|MiddleContentSec|OtherInfo_0')"
            ></div>
          </a>
        </div>
    </div>
    <!-- widget jdc-solution end -->
  </div>
</template>
<script>
import apiUrl from "api";
import TDK from "./solutions_TDK";
export default {
  data() {
    return {
      index1: 0,
      pageInfo: [],
      is_more: "is-more",
      fixPanelList:[] // 吸顶效果数据
    };
  },
  created() {
    this.setTDK();
  },
  mounted() {
    this.getSolutionInfo();
  },
  updated() {
    console.log('bingo');
    this.$nextTick(function() {
      this.slider();
    });
  },
  methods: {
    checkTopFixBarShow(prod){
      const excludeList = [11, 101] //banner 运营位
      return !excludeList.includes(prod.templet)
    },
    setTDK: function(val) {
      var _SUpath = this.$route.path;
      var _productPath = _SUpath.substr(_SUpath.indexOf("solutions/") + 10);
      let lang = this.$i18n.locale;
      let data = null;
      if (TDK[lang][_productPath]) {
        data = TDK[lang][_productPath];
      } else {
        data = TDK[lang]["default"];
      }
      document.title = data.title;
      $('meta[name="keywords"]')[0].content = data.keyword;
      $('meta[name="description"]')[0].content = data.description;
    },
    getSolutionInfo(lang) {
      lang ? lang : this.$cookie.get("jdcloud_sitelang");
      let urlName = this.$route.params.name || "";
      this.$http
        .get(apiUrl.api.getSolutionInfo, {
          params: { url: urlName, lang: lang }
        })
        .then(
          res => {
            if (res.body.code == 0) {
              let data = JSON.parse(res.body.result);
              console.log(data)
              if (res.data.status === 1 && this.$i18n.locale === "en") {
                this.getSolutionInfo("cn");
                if (this.$cookie.get("dontShowTipStatus") == 1) {
                  // 不做处理
                } else {
                  // 没点击don'tshowTip
                  this.$store.commit("hideLangTipEvt", true);
                  window.pageConfig.enEmpty = true
                }
              } else if (data.status === 1) {
                this.$router.push("/404");
              } else {
                this.pageInfo = data.txtVoList.sort(function(a, b) {
                  return a.sort - b.sort;
                });
                this.pageInfo.forEach(element => {
                  if (typeof element.txt === "string") {
                    let pattern = /\n/gi;
                    try {
                      if (pattern.test(element.txt)) {
                        element.txt = element.txt.replace(pattern, "");
                      }
                      element.txt = JSON.parse(element.txt);
                    } catch (error) {
                      console.log(error);
                    }
                  }
                  
                });
                //this.name = data.name;
                document.getElementsByTagName("title")[0].innerText = data.name;
              }
            } else if (res.body.code == 401) {
              this.getSolutionInfo("cn");
              if (this.$cookie.get("dontShowTipStatus") == 1) {
                // 不做处理
              } else {
                // 没点击don'tshowTip
                this.$store.commit("hideLangTipEvt", true);
                window.pageConfig.enEmpty = true
              }
            }
          },
          response => {
            console.log("请求getSolutionInfo错误");
            this.$router.push("/404");
          }
        );
    },
    slider() {
      $(".solution-case-item").hover(function() {
        $(this)
          .addClass("on")
          .siblings()
          .removeClass("on");
      });
      $(".solution-case-item").click(function() {
        $(this).toggleClass("active");
      });
      $(".case-item")
        .hide()
        .first()
        .show();
      // $(".tab-item").click(function() {
      //     var a = $(this);
      //     var b = a.index();
      //     a.addClass("active").siblings().removeClass("active"),
      //     $(".case-item").eq(b).show().siblings().hide()
      // })
      $(".solution-scenes .jdc-bar-nav .nav-item").click(function() {
        var a = $(this);
        var b = a.index();
        if (a.hasClass("inMore")) {
          b = b + 5;
        }
        $(".solution-scenes .jdc-bar-nav .nav-item").removeClass("on");
        a.addClass("on");
        $(".case-item")
          .eq(b)
          .show()
          .siblings()
          .hide();
      }),
        $(".case-item-hd").click(function() {
          $(this).toggleClass("active");
        });
      var sliderBox = null;
      var sliderLi = $(".jdc-common-slider-item");
      var body = $("html,body");
      window.onresize = debounce(
        function() {
          sliderCompute();
        },
        80,
        false
      );
      function debounce(func, threshold, execAsap) {
        var timeout;
        return function debounced() {
          var obj = this,
            args = arguments;
          function delayed() {
            if (!execAsap) func.apply(obj, args);
            timeout = null;
          }
          if (timeout) clearTimeout(timeout);
          else if (execAsap) func.apply(obj, args);
          timeout = setTimeout(delayed, threshold || 100);
        };
      }
      function sliderCompute() {
        var bodyWidth = body.width();
        if (bodyWidth > 768 && bodyWidth <= 1200) {
          var liWidth = bodyWidth / 4;
          sliderLi.css("width", liWidth);
        } else if (bodyWidth > 1200) {
          sliderLi.css({ width: "300px", height: "275px" });
        } else {
          return false;
        }
        if (sliderBox.options) {
          sliderBox.options.contentWidth = null;
          sliderBox.init();
        }
        //  sliderBox.options.contentWidth = null;
        //  sliderBox.init();
      }
      seajs.use("jdf/2.0.0/ui/slider/1.0.0/slider", function(slider) {
        sliderBox = $(".solution-slider").slider({
          contentEl: ".solution-slider-ct li",
          curCls: "current",
          speed: 300,
          isAutoPlay: false,
          nextEl: ".solution-slider-next",
          prevEl: ".solution-slider-prev",
          visible: 4,
          step: 4,
          hasOverflow: true
        });
      });
        //  吸顶
  seajs.use(['jdf/2.0.0/ui/ceilinglamp/1.0.0/ceilinglamp','jdf/2.0.0/ui/elevator/1.0.0/elevator'], function(ceilinglamp,elevator){

    var elevatorBox = $('.js-bar-ceilinglamp');
    elevatorBox.ceilinglamp({
      curCls: "nav-fixed",
      zIndex: 10,
      top: 0
    });

    $(".jdc-solution-floor-wrap").elevator({
      floorEl: ".jdc-solution-floor",
      elevatorEl: elevatorBox,
      handlerSelector: ".nav-item",
      curCls: "on",
      floorScrollMargin: -60
    });
  });
    }
  }
};
</script>
<style scoped>
/* RWD start */
/* @import "//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/jdc-solution/jdc-solution.css"; */

.solution-floor-hd {
  padding: 50px 0;
  line-height: 40px;
  font-size: 24px;
  text-align: center;
  color: #0989c5;
}
.solution-floor-bd {
  padding-bottom: 20px;
}
.solution-floor-title {
  line-height: 40px;
  font-size: 24px;
  color: #0989c5;
}
.solution-case-list {
  display: table;
  padding: 20px 0;
  box-shadow: 0 0 21px rgba(134, 194, 225, 0.3);
}
.solution-case-item {
  box-sizing: border-box;
  display: table-cell;
  border-right: 1px solid #eee;
  padding: 0 15px;
  width: 20.5%;
  text-align: center;
  min-height: 350px;
  overflow: hidden;
}
.solution-case-item.on:last-child,
.solution-case-item:last-child {
  border: none;
}
.solution-case-item .img-wrap {
  padding: 20px 0 18px;
  max-height: 40px;
}
.solution-case-item .solution-case-img {
  height: 40px;
}
.solution-case-item .ct-title {
  padding-top: 14px;
  line-height: 32px;
  font-size: 18px;
  color: #333;
}
.solution-case-item .ct-des {
  margin-top: 14px;
  min-height: 48px;
  color: #666;
  line-height: 24px;
  font-size: 14px;
  text-align: left;
}
.solution-case-item.on {
  width: 38.333333333333336%;
  border-right: 1px solid #eee;
}
.solution-case-item.on .ct-title {
  text-align: left;
  color: #0989c5;
}
.solution-case-item.on .img-wrap {
  float: left;
  margin-left: 20px;
  width: 60px;
  height: 60px;
  line-height: 60px;
}
.solution-case-item.on .solution-case-img {
  max-width: 100%;
  height: auto;
}
.solution-case-item.on .ct-wrap {
  padding-left: 105px;
}
.solution-case-item.on .solution-case-sub {
  clear: both;
  display: block;
  border-top: 1px solid #eee;
}
.solution-case-sub {
  display: none;
  padding: 25px 38px 20px;
  margin-top: 15px;
  position: relative;
}
.solution-case-sub:after {
  content: "";
  position: absolute;
  border-style: solid;
  border-color: transparent transparent #eee;
  border-width: 10px;
  top: -20px;
  left: 40px;
}
.solution-case-sub:before {
  content: "";
  position: absolute;
  border-style: solid;
  border-color: transparent transparent #fff;
  border-width: 10px;
  top: -19px;
  left: 40px;
  z-index: 9;
}
.solution-case-sub li {
  position: relative;
  padding-left: 20px;
  line-height: 24px;
  font-size: 14px;
  color: #666;
  text-align: left;
}
.solution-case-sub li:before {
  content: "";
  position: absolute;
  left: 0;
  top: 8px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #999;
}
.solution-fw .solution-fw-img {
  float: left;
  width: 70.83333333333334%;
  height: 580px;
  line-height: 580px;
  text-align: center;
}
.solution-fw .solution-fw-img img {
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
}
.solution-fw .solution-fw-img-col {
  width: 100%;
}
.solution-fw .solution-fw-detail {
  box-sizing: border-box;
  width: 26.666666666666666%;
  padding: 2%;
  margin-bottom: 90px;
  float: right;
  background: #f9fdff;
  text-align: center;
  box-shadow: 0 0 21px rgba(134, 194, 225, 0.3);
}
.solution-fw .solution-fw-detail .tit {
  font-size: 18px;
  text-align: center;
  padding-bottom: 20px;
  color: #333;
}
.solution-fw .solution-fw-detail .txt {
  color: #666;
  line-height: 26px;
  text-align: left;
  height: 410px;
  margin-bottom: 20px;
  overflow-y: auto;
}
.solution-fw .solution-fw-detail .jdc-btn {
  margin-bottom: 10px;
}
.solution-case .col-5 {
  padding-left: 20px;
  height: 280px;
  line-height: 280px;
  text-align: center;
}
.solution-case .col-5 img {
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
}
.solution-case .col-7 {
  padding: 0 60px 0 40px;
}
.solution-case .detail .tit {
  font-size: 18px;
  padding: 16px 0 20px;
  color: #333;
}
.solution-case .detail .txt {
  color: #666;
  line-height: 26px;
  text-align: left;
  height: 130px;
  margin-bottom: 20px;
  overflow-y: auto;
}
.jdc-solution-floor-bg {
  min-height: 563px;
  background-color: #0c5682;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/jdc-solution/i/bg-scenes.jpg);
}
.jdc-solution-floor-bg .solution-floor-title {
  color: #fff;
}
.solution-case-tabs {
  padding-left: 15px;
  border-bottom: 1px solid #7387b7;
}
.solution-case-tabs .tab-item {
  float: left;
  color: #fff;
  font-size: 18px;
  height: 44px;
  line-height: 44px;
  margin-right: 50px;
  border-bottom: 2px solid transparent;
  cursor: pointer;
}
.solution-case-tabs .tab-item.active {
  border-bottom-color: #fff;
}
.solution-case-tabs .tab-item:last-child {
  margin-right: 0;
}
.solution-case-box {
  color: #fff;
}
.solution-case-box .case-item {
  font-size: 14px;
  padding-top: 40px;
  overflow: hidden;
}
.solution-case-box .case-item .case-cont {
  width: 48.75%;
  line-height: 24px;
  padding-left: 15px;
}
.solution-case-box .case-item .case-cont p {
  margin-bottom: 16px;
}
.solution-case-box .case-item .case-cont .case-link {
  color: #00aeff;
  margin-right: 20px;
}
.solution-case-box .case-item .case-cont .case-link:hover {
  color: #00aeff;
}
.solution-case-box .case-item .case-cont .tit {
  font-size: 16px;
  color: #fff;
  margin-right: 0;
}
.solution-case-box .case-item .case-cont .jdc-btn {
  margin-top: 24px;
}
.solution-case-box .case-item .case-features {
  color: #666;
}
.solution-case-box .case-item .case-features dt {
  font-size: 16px;
}
.solution-case-box .case-item .case-features dd {
  font-size: 14px;
}
.solution-case-box .case-item .case-image {
  float: right;
  width: 44.166666666666665%;
  height: 270px;
  background-size: contain !important;
}
.solution-case-box .case-item .case-image img {
  max-width: 100%;
  max-height: 100%;
  vertical-align: top;
}
.solution-case-box .case-item-hd {
  display: none;
  position: relative;
  padding: 0 20px;
  line-height: 60px;
  font-size: 16px;
  color: #333;
}
.solution-case-box .case-item-hd:after {
  content: "";
  position: absolute;
  top: 22px;
  border: 2px solid #333;
  display: block;
  width: 6px;
  height: 6px;
  margin: auto;
  transform: rotate(-45deg);
  border-top: none;
  border-right: none;
  right: 22px;
}
.solution-case-box .case-item-hd.active {
  color: #0989c5;
}
.solution-case-box .case-item-hd.active:after {
  top: 24px;
  border-bottom: none;
  border-left: none;
  border-right: 2px solid #0989c5;
  border-top: 2px solid #0989c5;
}
.retail-advantage {
  font-size: 0;
}
.retail-advantage .col-3 {
  float: none;
  display: inline-block;
  vertical-align: top;
  text-align: center;
}
.retail-advantage .col-3:nth-child(n + 5) {
  margin-top: 30px;
}
.solution-icon {
  display: inline-block;
  width: 96px;
  height: 96px;
  line-height: 96px;
  border-radius: 50%;
  background: -moz-linear-gradient(80deg, #0989c5 0, #995cb6 100%);
  background: -webkit-linear-gradient(80deg, #0989c5 0, #995cb6 100%);
  background: linear-gradient(80deg, #0989c5 0, #995cb6 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0989c5', endColorstr='#995cb6', GradientType=1);
}
.solution-icon img {
  max-width: 46px;
}
.retail-advantage-title {
  position: relative;
  padding: 25px 0;
  line-height: 34px;
  font-size: 18px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.retail-advantage-title:after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 8px;
  margin-left: -10px;
  width: 20px;
  height: 2px;
  background-color: #999;
}
.retail-advantage-des {
  margin: 18px auto 0;
  width: 75%;
  text-align: left;
  line-height: 24px;
  font-size: 14px;
  color: #666;
}
.solution-products {
  margin-left: -15px;
}
.solution-products .col-4 {
  padding-left: 15px;
}
.solution-products .solution-products-item {
  box-sizing: border-box;
  background: #fff;
  padding: 0 0 50px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 0 17px rgba(134, 194, 225, 0.3);
  text-align: center;
  transition: all 0.3s;
}
.solution-products .solution-products-item:hover {
  transform: scale(1.05);
}
.solution-products .solution-products-item .icon {
  text-align: center;
  background: #f6f8ff;
  height: 130px;
  line-height: 130px;
}
.solution-products .solution-products-item .icon img {
  display: inline-block;
  width: 60px;
  height: 60px;
}
.solution-products .solution-products-item .tit {
  min-height: 48px;
  line-height: 24px;
  font-size: 18px;
  padding: 20px 20px 10px;
  text-align: left;
  color: #333;
}
.solution-products .solution-products-item .txt {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  margin-bottom: 20px;
  color: #666;
  height: 120px;
  line-height: 30px;
  text-align: left;
  padding: 0 20px;
}
.solution-products .solution-products-item .price {
  display: block;
  color: #fb6928;
  min-height: 60px;
  line-height: 30px;
  font-size: 20px;
  text-align: left;
  padding: 0 20px 25px;
}
.solution-process .g-table {
  margin-bottom: 50px;
}
.solution-customer .row {
  margin-left: -15px;
}
.solution-customer .row .col-4,
.solution-customer .row .col-8 {
  padding-left: 15px;
}
.solution-customer .solution-customer-item {
  display: block;
  position: relative;
  color: #fff;
  text-align: center;
  margin-bottom: 15px;
  overflow: hidden;
}
.solution-customer .solution-customer-item:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #061350;
  opacity: 0.45;
  transition: opacity 0.2s;
}
.solution-customer .solution-customer-item:hover:after {
  opacity: 0.35;
}
.solution-customer .solution-customer-item:hover img {
  transform: scale(1.1);
}
.solution-customer .solution-customer-item img {
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
  transition: all 0.5s ease;
}
.solution-customer .solution-customer-item .detail {
  position: absolute;
  z-index: 5;
  top: 40%;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
}
.solution-customer .solution-customer-item .detail .tit {
  font-size: 18px;
  font-weight: 700;
}
.solution-customer .solution-customer-item .detail .txt {
  margin-top: 20px;
  font-size: 14px;
}
.jdc-solution-ad {
  background: #0989c5;
  background: -moz-linear-gradient(80deg, #0989c5 0, #995cb6 100%);
  background: -webkit-linear-gradient(80deg, #0989c5 0, #995cb6 100%);
  background: linear-gradient(80deg, #0989c5 0, #995cb6 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0989c5', endColorstr='#995cb6', GradientType=1);
  height: 200px;
  text-align: center;
  background-size: cover !important;
}
.jdc-solution-ad a {
  display: block;
  height: 200px;
  color: #fff;
  font-size: 24px;
}
.jdc-solution-ad a:after {
  display: inline-block;
  width: 0;
  height: 100%;
  vertical-align: middle;
  content: "";
}
.jdc-solution-ad a .txt {
  display: inline-block;
  vertical-align: middle;
}
.solution-slider {
  position: relative;
  height: 300px;
  overflow: hidden;
}
.solution-slider:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 300px;
  background: #e0e0e0;
  z-index: 3;
}
.solution-slider:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 1px;
  height: 300px;
  background: #e0e0e0;
  z-index: 3;
}
.solution-slider .solution-slider-item {
  position: relative;
  float: left;
  width: 25%;
  height: 300px;
  overflow: hidden;
  text-align: center;
  background: #fff;
}
.solution-slider .solution-slider-item .item-first {
  border: 1px solid #e0e0e0;
  border-left: 0;
  height: 300px;
  box-sizing: border-box;
}
.solution-slider .solution-slider-item .item-first .img-box {
  height: 100px;
  line-height: 100px;
  margin: 60px auto 0;
}
.solution-slider .solution-slider-item .item-first .img-box img {
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
}
.solution-slider .solution-slider-item .item-first .img-box img:after {
  display: inline-block;
  width: 0;
  height: 100%;
  vertical-align: middle;
}
.solution-slider .solution-slider-item .item-first .tit {
  font-size: 18px;
  margin-top: 20px;
  color: #333;
  padding: 0 10px;
  overflow: hidden;
  word-wrap: normal;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.solution-slider .solution-slider-item .item-first .txt {
  margin-top: 10px;
  color: #666;
  padding: 0 10px;
  height: 63px;
  overflow: hidden;
}
.solution-slider .solution-slider-item .item-second {
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  transition: all 0.2s ease-in;
  opacity: 0;
  border: 1px solid #525b82;
  color: #fff;
  box-sizing: border-box;
  text-align: left;
}
.solution-slider .solution-slider-item .item-second .detail {
  padding: 20px 13.33333333333% 0;
  height: 254px;
  overflow: hidden;
}
.solution-slider .solution-slider-item .item-second .tit {
  font-size: 18px;
  color: #fff;
}
.solution-slider .solution-slider-item .item-second .txt {
  margin-top: 6px;
  line-height: 24px;
}
.solution-slider .solution-slider-item:hover .item-second {
  top: 0;
  opacity: 1;
  background: rgba(6, 19, 80, 0.65);
}
.solution-slider .solution-slider-btn {
  display: block;
  position: absolute;
  top: 0;
  z-index: 3;
  width: 30px;
  height: 300px;
  text-align: center;
  background: rgba(217, 217, 217, 0.15);
}
.solution-slider .solution-slider-btn a {
  width: 30px;
  line-height: 300px;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 28px;
  z-index: 2;
  color: #d1d1d1;
}
.solution-slider .solution-slider-prev {
  left: 0;
}
.solution-slider .solution-slider-next {
  right: 0;
}
.solution-slider .solution-slider-btn.disabled {
  display: none;
}
.solution-customer-more {
  margin-top: 15px;
  text-align: center;
}
.solution-customer-more .more-link {
  font-size: 16px;
  color: #0989c5;
}
@media (max-width: 1200px) {
  .jdc-rwd .jdc-banner-wrap .img-box {
    right: 10px;
  }
}
@media (max-width: 768px) {
  .jdc-rwd .solution-floor-hd {
    padding: 15px 0;
}
  .jdc-rwd .solution-case .col-5 {
    padding-right: 20px;
    height: 202px;
    line-height: 202px;
  }
  .jdc-rwd .solution-case .col-7 {
    padding: 0 20px;
  }
  .jdc-rwd .solution-case .detail .tit {
    font-size: 14px;
    padding: 10px 0 6px;
    color: #333;
  }
  .jdc-rwd .solution-case .detail .txt {
    -webkit-line-clamp: initial;
    font-size: 12px;
    line-height: 18px;
    height: auto;
    margin-bottom: 10px;
  }
  .jdc-rwd .solution-case-list {
    display: block;
    padding: 0;
    box-shadow: none;
    border-top: 1px solid #ededed;
  }
  .jdc-rwd .solution-case-item {
    display: block;
    position: relative;
    padding: 0;
    width: auto;
    min-height: 36px;
    border-right: 0 none;
    border-bottom: 1px solid #ededed;
  }
  .jdc-rwd .solution-case-item .img-wrap {
    float: none;
    position: absolute;
    top: 44px;
    left: 10px;
    margin-left: 0;
    margin-right: 0;
    width: 30px;
    height: 30px;
    line-height: 30px;
    padding: 0;
  }
  .jdc-rwd .solution-case-item .img-wrap .solution-case-img {
    height: 30px;
  }
  .jdc-rwd .solution-case-item .solution-case-sub {
    margin-top: 0;
    padding: 10px 20px;
    background-color: #f7f8fa;
    border-top: 1px solid #ededed;
  }
  .jdc-rwd .solution-case-item .ct-title {
    position: relative;
    text-align: left;
    padding: 15px 0 0 50px;
    line-height: 24px;
    font-size: 14px;
    color: #333;
  }
  .jdc-rwd .solution-case-item .ct-title:after {
    content: "";
    position: absolute;
    top: 18px;
    border: 2px solid #333;
    display: block;
    width: 6px;
    height: 6px;
    margin: auto;
    transform: rotate(-45deg);
    border-top: none;
    border-right: none;
    right: 22px;
  }
  .jdc-rwd .solution-case-item .ct-des {
    margin-top: 3px;
    padding: 0 40px 20px 50px;
    line-height: 18px;
    font-size: 12px;
    color: #666;
    min-height: inherit;
  }
  .jdc-rwd .solution-case-item.on .ct-wrap {
    padding-left: 0;
  }
  .jdc-rwd .solution-case-item.on .solution-case-sub {
    display: none;
  }
  .jdc-rwd .solution-case-item.active .solution-case-sub {
    display: block;
  }
  .jdc-rwd .solution-case-item.active .ct-title {
    color: #0989c5;
  }
  .jdc-rwd .solution-case-item.active .ct-title:after {
    top: 20px;
    border-bottom: none;
    border-left: none;
    border-right: 2px solid #0989c5;
    border-top: 2px solid #0989c5;
  }
  .jdc-rwd .solution-case-sub:after,
  .jdc-rwd .solution-case-sub:before {
    content: none;
  }
  .jdc-rwd .solution-case-sub li {
    float: none;
    padding: 0;
    width: auto;
    font-size: 12px;
    color: #666;
    padding-left: 8px;
  }
  .jdc-rwd .solution-case-sub li:before {
    top: 9px;
    width: 4px;
    height: 4px;
  }
  .jdc-rwd .solution-case-sub li + li {
    margin-top: 0;
  }
  .jdc-rwd .solution-fw .solution-fw-img {
    margin: 0 10px;
    float: none;
    width: auto;
    height: 210px;
    line-height: 210px;
  }
  .jdc-rwd .solution-fw .solution-fw-img-col {
    width: auto;
  }
  .jdc-rwd .solution-fw .solution-fw-detail {
    float: none;
    margin: 0 10px;
    width: auto;
    padding: 0 10px;
    box-shadow: none;
    background: 0 0;
  }
  .jdc-rwd .solution-fw .solution-fw-detail .tit {
    padding: 10px 0 5px;
    line-height: 24px;
    font-size: 14px;
    color: #333;
  }
  .jdc-rwd .solution-fw .solution-fw-detail .txt {
    line-height: 18px;
    height: auto;
    font-size: 12px;
    margin-bottom: 10px;
  }
  .jdc-rwd .jdc-solution-floor-bg {
    background: none !important;
    min-height: auto;
  }
  .jdc-rwd .jdc-solution-floor-bg .solution-floor-title {
    color: #222;
  }
  .jdc-rwd .solution-case-box {
    border-top: 1px solid #ededed;
  }
  .jdc-rwd .case-item {
    padding-top: 0;
    display: block !important;
  }
  .jdc-rwd .case-item-hd {
    display: block;
    padding-right: 50px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-bottom: 1px solid #ededed;
  }
  .jdc-rwd .case-item-hd.active + .case-item-bd {
    display: block;
  }
  .jdc-rwd .case-item-bd {
    display: none;
    padding: 10px;
    background-color: #f7f8fa;
    border-bottom: 1px solid #ededed;
  }
  .jdc-rwd .solution-case-box .case-cont,
  .jdc-rwd .solution-case-box .case-image {
    float: none;
    width: auto;
  }
  .jdc-rwd .solution-case-box .case-image {
    height: auto;
  }
  .jdc-rwd .solution-case-box .case-cont {
    padding: 10px;
  }
  .jdc-rwd .solution-case-box .case-cont .f-fs3 {
    font-size: 14px;
  }
  .jdc-rwd .solution-case-box .case-cont p {
    margin-bottom: 15px;
    line-height: 18px;
    font-size: 12px;
    color: #666;
  }
  .jdc-rwd .solution-case-box .case-cont .jdc-banner-btn {
    display: block;
    margin: 0;
    height: 40px;
    line-height: 40px;
    background-color: #37bef0;
    border-radius: 0;
    color: #fff;
  }
  .jdc-rwd .solution-floor-title {
    color: #333;
  }
  .jdc-rwd .retail-advantage {
    border-top: 1px solid #ededed;
  }
  .jdc-rwd .retail-advantage .col-3:nth-child(n + 5) {
    margin-top: 0;
  }
  .jdc-rwd .retail-advantage li {
    float: none;
    display: block;
    width: auto;
    text-align: left;
    border-bottom: 1px solid #ededed;
  }
  .jdc-rwd .retail-advantage .retail-advantage-title {
    padding: 15px 0 0 50px;
    line-height: 24px;
    font-size: 14px;
    color: #333;
  }
  .jdc-rwd .retail-advantage .retail-advantage-title:after {
    content: none;
  }
  .jdc-rwd .retail-advantage .icon-wrap {
    position: absolute;
    left: 10px;
    top: 30px;
    width: 30px;
    height: 30px;
  }
  .jdc-rwd .retail-advantage .solution-icon {
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
  .jdc-rwd .retail-advantage .solution-icon img {
    max-width: 16px;
  }
  .jdc-rwd .retail-advantage .solution-icon2 {
    background-position: 0 -33px;
  }
  .jdc-rwd .retail-advantage .solution-icon3 {
    background-position: 0 -66px;
  }
  .jdc-rwd .retail-advantage .solution-icon4 {
    background-position: 0 -100px;
  }
  .jdc-rwd .retail-advantage .retail-advantage-des {
    margin: 3px 0 0;
    padding: 0 20px 15px 50px;
    width: auto;
    min-height: 36px;
    line-height: 18px;
    font-size: 12px;
    color: #666;
  }
  .jdc-rwd .solution-products {
    padding: 0 10px 10px;
    margin-left: 0;
  }
  .jdc-rwd .solution-products .col-4 {
    padding-left: 0;
  }
  .jdc-rwd .solution-products .col-4 + .col-4 {
    margin-top: 10px;
  }
  .jdc-rwd .solution-products .solution-products-item {
    padding: 10px;
  }
  .jdc-rwd .solution-products .solution-products-item:hover {
    transform: none;
  }
  .jdc-rwd .solution-products .solution-products-item .icon {
    height: 70px;
    line-height: 70px;
  }
  .jdc-rwd .solution-products .solution-products-item .icon img {
    display: inline-block;
    width: 50px;
    height: 50px;
  }
  .jdc-rwd .solution-products .solution-products-item .tit {
    min-height: auto;
    padding: 5px 0;
    line-height: 26px;
    font-size: 16px;
    color: #333;
  }
  .jdc-rwd .solution-products .solution-products-item .txt {
    margin-bottom: 10px;
    padding: 0;
    min-height: auto;
    height: auto;
    -webkit-line-clamp: initial;
    line-height: 22px;
    font-size: 12px;
  }
  .jdc-rwd .solution-products .solution-products-item .price {
    padding: 0;
    margin: 5px 0;
    min-height: auto;
    line-height: 24px;
    font-size: 14px;
  }
  .jdc-rwd .solution-process .g-table {
    margin-bottom: 16px;
  }
  .jdc-rwd .solution-customer {
    padding: 0 10px;
  }
  .jdc-rwd .solution-customer .row {
    margin-left: 0;
  }
  .jdc-rwd .solution-customer .row .col-4 {
    padding-left: 0;
  }
  .jdc-rwd .solution-customer .row .col-4:nth-child(n + 4) {
    display: none;
  }
  .jdc-rwd .solution-customer .row .col-8 {
    padding-left: 0;
  }
  .jdc-rwd .solution-customer .row .col-8 .solution-customer-item {
    max-width: 390px;
    margin: 0 auto 15px;
  }
  .jdc-rwd .solution-customer .solution-customer-item:after {
    opacity: 0.35;
  }
  .jdc-rwd .solution-customer .solution-customer-item:hover img {
    transform: none;
  }
  .jdc-rwd .solution-customer .solution-customer-item .detail {
    top: 32%;
  }
  .jdc-rwd .solution-customer .solution-customer-item .detail .tit {
    font-size: 16px;
    font-weight: 700;
  }
  .jdc-rwd .solution-customer .solution-customer-item .detail .txt {
    margin-top: 20px;
    font-size: 12px;
  }
  .jdc-rwd .jdc-solution-ad {
    height: 150px;
  }
  .jdc-rwd .jdc-solution-ad a {
    height: 150px;
    font-size: 20px;
  }
  .jdc-rwd .solution-slider {
    height: auto;
  }
  .jdc-rwd .solution-slider:after,
  .jdc-rwd .solution-slider:before {
    display: none;
  }
  .jdc-rwd .solution-slider ul {
    width: auto !important;
    position: static !important;
  }
  .jdc-rwd .solution-slider .solution-slider-item {
    float: none !important;
    width: 100% !important;
    height: auto !important;
    text-align: left;
    border-bottom: 1px solid #e7e9ed;
    padding: 10px;
    box-sizing: border-box;
    display: table;
  }
  .jdc-rwd .solution-slider .solution-slider-item .item-first {
    display: table-cell;
    border: 0;
    height: auto;
    margin-right: 10px;
    vertical-align: middle;
  }
  .jdc-rwd .solution-slider .solution-slider-item .item-first .img-box {
    width: 130px;
    height: auto;
    line-height: inherit;
    margin: 0;
  }
  .jdc-rwd .solution-slider .solution-slider-item .item-first .img-box img {
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
  }
  .jdc-rwd .solution-slider .solution-slider-item .item-first .tit,
  .jdc-rwd .solution-slider .solution-slider-item .item-first .txt {
    display: none;
  }
  .jdc-rwd .solution-slider .solution-slider-item .item-second {
    display: table-cell;
    position: static;
    height: auto;
    z-index: 2;
    transition: none;
    opacity: 1;
    border: 0;
    color: #333;
    padding-left: 10px;
  }
  .jdc-rwd .solution-slider .solution-slider-item .item-second .detail {
    padding: 0;
    height: auto;
  }
  .jdc-rwd .solution-slider .solution-slider-item .item-second .tit {
    font-size: 14px;
    color: #333;
  }
  .jdc-rwd .solution-slider .solution-slider-item .item-second .txt {
    font-size: 12px;
    color: #666;
    margin-top: 2px;
    line-height: 18px;
  }
  .jdc-rwd .solution-slider .solution-slider-item:hover .item-second {
    top: 0;
    opacity: 1;
    background: 0 0;
  }
  .jdc-rwd .solution-slider .solution-slider-btn {
    display: none;
  }
  .jdc-rwd .solution-customer-more {
    margin-top: 0;
    text-align: center;
  }
  .jdc-rwd .solution-customer-more .more-link {
    font-size: 14px;
    color: #999;
  }
}
</style>



