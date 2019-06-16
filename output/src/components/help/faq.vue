<template>
  <div>
    <div id="help-tab" class="jc_help">

      <div class="help-search jdc-help-search">
        <div class="help-w">
          <h1>{{currentMenuName}}</h1>
          <div class="help-sw">
            <div class="input-group">
              <input type="text" v-model="searchParam.query" @blur="dropListHide" @keyup.enter="searchEnterRouterChange"
                     @keyup="loadWords($event)"
                     class="form-control" placeholder="输入关键字搜索，如云主机">

              <span class="input-group-btn">
                <button class="btn btn-search"
                        :clstag="'HelpFaq|keycount|SectionBannerSec|HelpAndSupport_SearchButton'"
                        @click="searchEnterRouterChange"   clstag="HelpFaq|keycount|SectionBannerSec|HelpAndSupport_SearchButton"  type="button">搜索</button>

              </span>
            </div>
            <div class="drop-list" v-show="wordList.length>0">
              <ul>
                <li @click="dropIninput(word, index)"
                    :clstag="`HelpFaq|keycount|SectionBannerSec|HelpAndSupport_SearchSuggestion_${index}`"
                    v-for="(word,index) in wordList">{{word}}</li>
              </ul>
            </div>
            <div class="help-shot">
              <a :data-ga="'SectionBannerSec_search_'+word" @click="dropIninput(word, index)"
                 :clstag="`HelpFaq|keycount|SectionBannerSec|HelpAndSupport_SearchSuggestion_${index}`"
                 v-for="(word,index) in hotWordList">{{word}}</a>
            </div>
          </div>
        </div>
      </div>

      <div class="help_tab">
        <div class="help-w">
          <ul class="">
            <li :data-ga="'MiddleContentSec_'+itemList.name" :data-id="itemList.id"
                :clstag="'HelpFaq|keycount|SectionBannerSec|HelpAndSupport_SearchListTab_'+ index"
                :class="{active:index==defaultActiv}" @click="activeOn(index,itemList.name)"
                v-for="(itemList,index) in faqData">
              <router-link :to="{'path':'./faq',query:{act:index}}">{{itemList.name}}</router-link>
            </li>

          </ul>
        </div>
      </div>

      <div v-show="ind==defaultActiv" v-for="(itemContent,ind) in faqData">

        <template v-if="itemContent.name=='产品文档'">
          <div class="help_content cont_docu" style="display: block;">
            <div class="help_wrap">
              <ul class="cont_docu_list" style="height: 342px;">
                <template
                  v-for="(ulItem, topIndex) in itemContent.children && Math.ceil(itemContent.children.length/aryCapacity)">
                  <li class="fallLi"
                      v-for="(itemContentList,listIndex) in itemContent.children.slice((ulItem-1)*aryCapacity,ulItem*aryCapacity)">
                    <h4>{{itemContentList.name}}</h4>
                    <ol>
                      <template v-for="(itemLink, index) in itemContentList.children">
                        <router-link
                          @click.native='gaEventTrigger("MiddleContentSec", "HelpFaq|keycount|SectionBannerSec|HelpAndSupport_productDoc_"+index)'
                          :clstag='"HelpFaq|keycount|SectionBannerSec|HelpAndSupport_productDoc_"+index'
                          :data-ga="'MiddleContentSec_ProductDoc_'+itemLink.name"
                          :to="{name:'detail',params:{contentId:itemLink.id,parentName:itemContent.name,isCateLog:'0',defaultActiv:defaultActiv||0}}">
                          <li :class="hotLabelClass(itemLink.label)"> {{itemLink.name}}
                            <em :class="hotLabelClass(itemLink.label)" v-if="itemLink.label">{{itemLink.label
                              |hotLabel}}</em>
                          </li>
                        </router-link>
                      </template>

                    </ol>
                  </li>

                </template>
              </ul>
            </div>
          </div>

        </template>

        <div v-else-if="itemContent.name=='新手入门'" class="help_content cont_init" style="display:block">
          <template v-for="(itemContentList,listIndex) in itemContent.children">

            <div class="help_wrap" v-if="itemContentList.name=='产品使用指南'">
              <h3>产品使用指南</h3>
              <div class="guide-box">
                <div class="arrow-box">
                  <a href="javascript:;"
                     @click="gaEventTrigger('MiddleContentSec','HelpFaq|keycount|SectionBannerSec|HelpAndSupport_Introduction_1')"
                     :clstag="`'HelpFaq|keycount|SectionBannerSec|HelpAndSupport_Introduction_1`"
                     class="arrow arr-left" style="display:none"></a>
                  <a href="javascript:;"
                     @click="gaEventTrigger('MiddleContentSec','HelpFaq|keycount|SectionBannerSec|HelpAndSupport_Introduction_2')"
                     :clstag="`'HelpFaq|keycount|SectionBannerSec|HelpAndSupport_Introduction_2'`"
                     class="arrow arr-right" ></a>
                </div>
                <ul class="guide-list">
                  <li v-for="(itemLink,index) in itemContentList.children">
                    <router-link
                      @click.native='gaEventTrigger("MiddleContentSec","HelpFaq|keycount|SectionBannerSec|HelpAndSupport_Introduction_"+index)'
                      :clstag='"HelpFaq|keycount|SectionBannerSec|HelpAndSupport_Introduction_"+index'
                      :data-ga="'MiddleContentSec_GetStarted_'+itemLink.name" class="help-box"
                      :to="{name:'detail',params:{contentId:itemLink.id,parentName:itemContent.name,isCateLog:'0',defaultActiv:defaultActiv||0}}">
                      <h5>{{itemLink.name}}</h5>
                      <p>{{itemLink.summary}}</p>
                    </router-link>
                  </li>

                </ul>
              </div>
            </div>


            <div class="video-box hidden-xs" v-else-if="itemContentList.name=='视频教程'">
              <div class="help_wrap">
                <h3>视频教程</h3>
                <ul class="video-list">
                  <!--<li v-for="itemLink in itemContentList.children">
                  <router-link class="help-box" :to="{name:'detail',params:{contentId:itemLink.id,parentName:itemContent.name,isCateLog:'0',defaultActiv:defaultActiv||0}}" target="_blank">
                     <div class="imgbox">
                          <img :src="itemLink.iconUrl">
                      </div>
                      <h6>{{itemLink.name}}</h6>
                    </router-link>
                  </li>-->
                  <li>
                    <a @click='gaEventTrigger("MiddleContentSec","HelpFaq|keycount|SectionBannerSec|HelpAndSupport_Video_1")'
                       :clstag="`HelpFaq|keycount|SectionBannerSec|HelpAndSupport_Video_1`"
                       data-ga="MiddleContentSec_GetStarted_新手入门第一课：选型并购买云主机" target="_blank"
                       href="//ke.jd.com/491211.jhtml">
                      <div class="imgbox">
                        <img
                          src="~static/img/help_帮助中心配图01.png">
                      </div>
                      <h6>新手入门第一课：选型并购买云主机</h6>
                    </a>
                  </li>
                  <li>
                    <a @click='gaEventTrigger("MiddleContentSec","HelpFaq|keycount|SectionBannerSec|HelpAndSupport_Video_2")'
                       :clstag="`HelpFaq|keycount|SectionBannerSec|HelpAndSupport_Video_2`"
                       data-ga="MiddleContentSec_GetStarted_新手入门第二课：连接并登录云主机" target="_blank"
                       href="//ke.jd.com/491615.jhtml">
                      <div class="imgbox">
                        <img
                          src="~static/img/help_帮助中心配图02.png">
                      </div>
                      <h6>新手入门第二课：连接并登录云主机</h6>
                    </a>
                  </li>
                  <li>
                    <a @click='gaEventTrigger("MiddleContentSec","HelpFaq|keycount|SectionBannerSec|HelpAndSupport_Video_3")'
                       :clstag="`HelpFaq|keycount|SectionBannerSec|HelpAndSupport_Video_3`"
                       data-ga="MiddleContentSec_GetStarted_新手入门第三课：创建并管理云数据库" target="_blank"
                       href="//ke.jd.com/492203.jhtml">
                      <div class="imgbox">
                        <img
                          src="~static/img/help_帮助中心配图03.png">
                      </div>
                      <h6>新手入门第三课：创建并管理云数据库</h6>
                    </a>
                  </li>
                  <li>
                    <a @click='gaEventTrigger("MiddleContentSec","HelpFaq|keycount|SectionBannerSec|HelpAndSupport_Video_4")'
                       :clstag="`HelpFaq|keycount|SectionBannerSec|HelpAndSupport_Video_4`"
                       data-ga="MiddleContentSec_GetStarted_新手入门第四课：搭建WordPress博客" target="_blank"
                       href="//ke.jd.com/492025.jhtml">
                      <div class="imgbox">
                        <img
                          src="~static/img/help_帮助中心配图04.png">
                      </div>
                      <h6>新手入门第四课：搭建WordPress博客</h6>
                    </a>
                  </li>

                </ul>
                <p class="video-tomore">
                  前往《京东云课堂》，<a @click='gaEventTrigger("MiddleContentSec","HelpFaq|keycount|SectionBannerSec|HelpAndSupport_Video_5")'
                               :clstag="`HelpFaq|keycount|SectionBannerSec|HelpAndSupport_Video_5`"
                               data-ga="MiddleContentSec_GetStarted_查看更多教程"
                               href="//ke.jd.com/ser/list.action?page=1&serviceSortCode=default&serviceSortType=desc&cid=18802&cateId1=18802"
                               target="_blank">查看更多教程</a>
                </p>
              </div>
            </div>
            <div class="help_wrap" v-else-if="itemContentList.name=='产品入门'">
              <h3>产品入门</h3>
              <ul class="sinit-tit">
                <li @click="entryLevelToggle(index,itemLink.name)" v-for="(itemLink,index) in itemContentList.children"
                    :clstag='"HelpFaq|keycount|SectionBannerSec|HelpAndSupport_GetStarted_" + ind'
                    :class="active(index,itemContentList.children.length)">{{itemLink.name}}
                </li>
              </ul>
              <div class="sinit-box" :class="{show11:index==entryLevelIndex}"
                   v-for="(itemLink,index) in itemContentList.children">
                <div class="progress-box">
                  <ul>
                    <li v-for="(step,indexStep) in itemLink.children"
                        @click="gaEventTrigger('MiddleContentSec', 'HelpFaq|keycount|SectionBannerSec|HelpAndSupport_GetStarted_'+indexStep)"
                        :clstag="'HelpFaq|keycount|SectionBannerSec|HelpAndSupport_GetStarted_'+indexStep"
                        :class="{active:indexStep==0}">
                      <em>{{indexStep+1}}</em>{{step.name}}
                    </li>
                  </ul>
                </div>


                <!-- count -->
                <div class="progress-cont">
                  <template  v-for="(step,indexStep) in itemLink.children">
                   <div :class="{'active':indexStep==0}" class="m-progress-cont-tt"><em>{{indexStep+1}}</em>{{step.name}}</div>
                    <ul>
                      <template v-for="(stepList,indexStepList) in step.children">
                        <li>
                          <router-link
                            @click.native='gaEventTrigger("MiddleContentSec","HelpFaq|keycount|SectionBannerSec|HelpAndSupport_GetStarted_"+indexStep)'
                            :clstag='"HelpFaq|keycount|SectionBannerSec|HelpAndSupport_GetStarted_"+indexStep'
                            :data-ga="'MiddleContentSec_GetStarted_'+stepList.name" target="_blank" :to="stepList.path">
                            {{stepList.name}}
                          </router-link>
                        </li>
                      </template>
                    </ul>
                  </template>
                </div>
                <!-- count end -->


              </div>
            </div>


          </template>
        </div>

        <template v-else-if="itemContent.name=='自助服务'">
          <div class="help-w">

            <div class="help_content cont_service" style="display: block;">
              <div class="help_wrap">
                <h3>自助服务</h3>
                <ul class="service-list">
                  <a @click='gaEventTrigger("MiddleContentSec", "HelpFaq|keycount|MiddleContentSec|HelpAndSupport_selfService_"+index)'
                     :clstag="'HelpFaq|keycount|MiddleContentSec|HelpAndSupport_selfService_'+index"
                     :data-ga="'MiddleContentSec_SelfService_'+itemLink.name" target="_blank" :href="itemLink.path"
                     v-for="(itemLink,index) in itemContent.children">
                    <li>
                      <i class="icon-help" v-html="itemLink.iconClass"></i>
                      <p>{{itemLink.name}}</p>
                    </li>
                  </a>
                </ul>
              </div>
                <h3>更多服务支持</h3>
            <ul class="more-service">
              <li>
                <a @click='gaEventTrigger("MiddleContentSec", "HelpFaq|keycount|MiddleContentSec|HelpAndSupport_selfService_11")'
                     :clstag="'HelpFaq|keycount|MiddleContentSec|HelpAndSupport_selfService_11'" href="//uc.jdcloud.com/myorder/submit">
                  <h5>提交工单</h5>
                  <p>7*24小时支持，处理周期较长
                    <br> 适合需要技术支持时使用
                  </p>
                </a>
              </li>
              <li>
                <a @click='gaEventTrigger("MiddleContentSec", "HelpFaq|keycount|MiddleContentSec|HelpAndSupport_selfService_12")'
                     :clstag="'HelpFaq|keycount|MiddleContentSec|HelpAndSupport_selfService_12'" href="//chat.jd.com/agile/NDYzMDUw">
                  <h5>在线客服</h5>
                  <p>7*12小时（9：00~21：00）支持，
                    <br> 云专家在线即时帮您解决问题
                  </p>
                </a>
              </li>
              <li class="last">
                <a @click='gaEventTrigger("MiddleContentSec", "HelpFaq|keycount|MiddleContentSec|HelpAndSupport_selfService_13")'
                     :clstag="'HelpFaq|keycount|MiddleContentSec|HelpAndSupport_selfService_13'" href="mailto:jdcloud@jd.com">
                  <div>
                    <h5>客服电话／邮箱</h5>
                    <p>400-615-1212（7*24小时）
                      <br> jdcloud@jd.com（7*24小时）
                    </p>
                  </div>
                </a>
              </li>
            </ul>
            </div>

          
          </div>

        </template>

        <template v-else>
          <div class="help_content cont_docu" style="display: block;">
            <div class="help_wrap">
              <ul class="cont_docu_list" style="height: 342px;">
                <template v-for="ulItem in itemContent.children && Math.ceil(itemContent.children.length/aryCapacity)">
                  <li class="floatLi"
                      v-for="(itemContentList,listIndex) in itemContent.children.slice((ulItem-1)*aryCapacity,ulItem*aryCapacity)">
                    <h4>{{itemContentList.name}}</h4>
                    <ol>
                      <template v-for="(itemLink,index) in itemContentList.children">
                        <router-link
                          @click.native='gaEventTrigger("MiddleContentSec","HelpFaq|keycount|SectionBannerSec|HelpAndSupport_openApi_"+index )'
                          :clstag="'HelpFaq|keycount|SectionBannerSec|HelpAndSupport_openApi_'+index"
                          :data-ga="'MiddleContentSec_OpenAPISDK_'+itemLink.name"
                          :to="{name:'detail',params:{contentId:itemLink.id,parentName:itemContent.name,isCateLog:'0',defaultActiv:defaultActiv||0}}">
                          <li :class="hotLabelClass(itemLink.label)"> {{itemLink.name}}
                            <em :class="hotLabelClass(itemLink.label)" v-if="itemLink.label">{{itemLink.label
                              |hotLabel}}</em>
                          </li>
                        </router-link>
                      </template>

                    </ol>
                  </li>

                </template>
              </ul>
              <div style="clear:both"></div>
            </div>
          </div>

        </template>

      </div>

    </div>
  </div>
</template>

<script>
  import apiUrl from 'api'

  export default {
    data() {
      return {
        entryLevelIndex: 0,
        currentMenuName: '',
        activeName: 'wiki',
        defaultActiv: 0,
        //产品文档一行显示几列
        aryCapacity: 5,
        //帮助支持每行显示列数
        helpSupportColNum: 4,
        faqData: [],
        searchParam: {
          serviceCode: 1, //服务编码(1关键词搜索服务 2自动补全服务 3相关搜索服务 4热门搜索词)
          query: '',
          pageNum: 1,
          pageSize: 10,
          sceneType: 'pc', //
          fields: 'item,content,title',
        },
        searchList: [],
        wordList: [],
        hotWordList: [
          '云主机',
          '云硬盘',
          '对象存储',
          '域名',
          '计费',
          '备案',
          '实名认证',
        ],
      };
    },
    filters: {

      hotLabel: function (ind) {
        switch (ind) {
          case "hot":
            return 'HOT'
            break;
          case "new":
            return 'NEW'
            break;
          case "openBeta":
            return '公测中'
            break;
          case "tuned":
            return '敬请期待'
            break;
          case "test":
            return '内测中'
            break;
          default:
            ''
        }
      },

    },
    watch: {
      "$route": function (to, from) {
        this.defaultActiv = to.query.act || 0;
      }
    },
    methods: {
      entryLevelToggle: function (ind, gaTitle) {
        this.entryLevelIndex = ind
        this.gaEventTrigger("MiddleContentSec", "HelpFaq|keycount|SectionBannerSec|HelpAndSupport_GetStarted_" + ind)

      },
      toggleSlide: function () {
        console.log($(this))
      },
      active(index, domLen) {
        return {
          'active': index == this.entryLevelIndex && domLen > 1
        }
      },
      hotLabelClass: function (ind) {
        switch (ind) {
          case "hot":
            return 'cdl_hot'
            break;
          case "new":
            return 'cdl_new'
            break;
          case "openBeta":
            return 'cdl_new'
            break;
          case "tuned":
            return 'cdl_beta'
            break;
          case "test":
            return 'cdl_beta'
            break;
          default:
            ''
        }
      },
      // 返回索引
      getArrKey(a, v) {
        for (var k in a) {
          if (a[k] == v) {
            return k;
          }
        }
      },
      // 瀑布流
      renderFalls() {


        /* 瀑布流 */

        var margin = 30, // 右侧间距
          water_li = $('.cont_docu_list').children('li.fallLi'), // 需要瀑布流就加fallLi  正常就加floatLi
          water_li_w = 260, // 单个li的宽度
          a_height = new Array, // 记录每列高度
          line_num = 4, // 一共几列
          max_key, min_key, ul_height; // 最高的列索引与第一个最低的列索引与ul的高度值
        // 开始
        for (var i = 0; i < water_li.length; i++) {
          if (i < line_num) {
            a_height[i] = $(water_li[i]).height();
            $(water_li[i]).css({
              top: 0,
              left: i * (water_li_w + margin)
            });
            max_key = this.getArrKey(a_height, Math.max.apply(null, a_height));
            ul_height = a_height[max_key];
          } else {
            min_key = this.getArrKey(a_height, Math.min.apply(null, a_height));
            $(water_li[i]).css({
              top: a_height[min_key] + 20,
              left: min_key * (water_li_w + margin)
            });
            a_height[min_key] += $(water_li[i]).height() + 20;
            max_key = this.getArrKey(a_height, Math.max.apply(null, a_height));
            ul_height = a_height[max_key];
          }
          $('.cont_docu_list').css({
            height: ul_height
          });
        }

        /* 快速入门 */
        // 产品使用指南
        $('.guide-box .guide-list').width(($('.guide-box .guide-list').children('li').length * 384) + ($(
          '.guide-box .guide-list').children('li').length - 1) * 24);
        $('.guide-box .arrow.arr-left').click(function () {
          $('.guide-box .guide-list').animate({
            left: parseInt($('.guide-box .guide-list').css('left')) > -(408 * 3) ? 0 : parseInt($(
              '.guide-box .guide-list').css('left')) + (408 * 3)
          }, 500, ifHide);
        });
        $('.guide-box .arrow.arr-right').click(function () {
          $('.guide-box .guide-list').animate({
            left: parseInt($('.guide-box .guide-list').css('left')) < -parseInt($('.guide-box .guide-list').css(
              'width')) + (408 * 6) ? -parseInt($('.guide-box .guide-list').css('width')) - 24 + (408 * 3) : parseInt(
              $('.guide-box .guide-list').css('left')) - (408 * 3)
          }, 500, ifHide);
        });
        ifHide();

        function ifHide() {
          if (parseInt($('.guide-box .guide-list').css('left')) <= -parseInt($('.guide-box .guide-list').css('width')) -
            24 + (408 * 3)) {
            // console.log("if")
            $('.guide-box .arrow.arr-right').hide();
            $('.guide-box .arrow.arr-left').show();
          } else if (parseInt($('.guide-box .guide-list').css('left')) >= 0) {
            // console.log("else if")
            $('.guide-box .arrow.arr-left').hide();
             $('.guide-box .arrow.arr-right').show();
          } else {
            //  console.log("else")
            // $('.guide-box .arrow.arr-left').show();
            // $('.guide-box .arrow.arr-right').hide();
          }
        }

        /* 产品入门初始显示 */
        // 大标题
        //$('.cont_init .sinit-tit li').eq(0).addClass('active');
        $('.cont_init .sinit-box').eq(0).show();
        // 进度
        $('.cont_init .sinit-box .progress-box').each(function () {
          $(this).find('li').eq(0).addClass('active');
        });
        $('.cont_init .sinit-box .progress-cont').each(function () {
          $(this).find('ul').eq(0).show();
        });

        /* 产品入门tab点击 */
        // 大标题
        $('.cont_init .sinit-tit li').click(function () {
          $('.cont_init .sinit-box').hide();
          // $('.cont_init .sinit-tit li').removeClass('active');
          $('.cont_init .sinit-box').eq($(this).index()).show();
          // $(this).addClass('active');
        });
        // 进度
        $('.cont_init .sinit-box').each(function () {
          $(this).find('.progress-box li').click(function () {
            $(this).parent().parent().parent().find('.progress-cont ul').hide();
            $(this).parent().parent().parent().find('.progress-cont ul').eq($(this).index()).show();
            $(this).parent().find('li').removeClass('active');
            $(this).addClass('active');
          });
        });

      

      },
      //选择下拉框中词汇
      dropIninput(val, index) {
        this.searchParam.query = val
        this.$router.push({
          name: 'searchInfo',
          query: {
            query: this.searchParam.query
          }
        })
        this.gaEventTrigger("SectionBannerSec", "HelpFaq|keycount|SectionBannerSec|HelpAndSupport_SearchSuggestion_" + index)
      },
      //清空下拉列表
      loadWordNull() {
        this.wordList = []
      },
      // blur失焦后
      dropListHide: function () {
        var _self = this
        setTimeout(function () {
          _self.loadWordNull()
        }, 200)
      },
      //相关关键词列表
      loadWords: function (e) {

        var _self = this;
        this.searchParam.serviceCode = 2
        setTimeout(function () {
          //search
          _self.$http.get(apiUrl.api.testSearch, {
            params: _self.searchParam
          }).then(res => {
            // _self.searchList=res.body.result.resultdata
            _self.wordList = res.body.result.resultdata || []
          }, err => {
            console.log(err)
          })
        }, 500)


      },
      //搜索按钮
      searchEnterRouterChange: function () {

        this.searchParam.serviceCode = 1
        this.$router.push({
          name: 'searchInfo',
          query: {
            query: this.searchParam.query
          }
        })
        this.gaEventTrigger('SectionBannerSec', 'HelpFaq|keycount|SectionBannerSec|HelpAndSupport_SearchButton')
      },
      activeOn: function (index, gaTitle) {
        this.defaultActiv = index;
        // this.$route.params.defaultActiv = this.defaultActiv
        this.$router.push('/help/faq?act=' + this.defaultActiv)
        this.gaEventTrigger('SectionBannerSec', 'HelpFaq|keycount|SectionBannerSec|HelpAndSupport_SearchListTab_'+ index)

      },
    },
    created() {
      if (this.$route.query.act) {
        this.defaultActiv = this.$route.query.act
      }
      //请求帮助中心数据
      this.$http.get(apiUrl.api.getHelpList, {
        params: {
          path: '/help'
        }
      }).then(res => {
        this.faqData = res.body.result.children
        this.currentMenuName = res.body.result.name
      }, err => {
        console.log(err)
      })
    },
    mounted(){
        // tab 1 4 展开收起
        $("#help-tab").on("click",".fallLi",function () {
          $(this).toggleClass("active")
          $(this).siblings().removeClass("active")
        })

        $("#help-tab").on("click",".floatLi",function () {
          $(this).toggleClass("active")
          $(this).siblings().removeClass("active")
        })

    },
    updated() {
      this.renderFalls()
      
      seajs.use(['jdf/1.0.0/ui/switchable/1.0.0/switchable'], function () {
        $('.help-in-prev').off();
        $('.help-in-next').off();
        $('#faqSlider').switchable({
          type: 'slider',
          mainClass: 'ui-switchable-panel',
          contentClass: 'ui-switchable-panel-main',
          speed: 600,
          step: 3,
          hasPage: true,
          seamlessLoop: true
        });
      });

      // 底部产品入门
      $(".progress-cont").on("click", ".m-progress-cont-tt", function() {
        var _self = $(this);
        _self.hasClass("active") ? _self.removeClass("active") : _self.addClass("active").siblings().removeClass("active")
      });
      // 节流和屏幕尺寸变化 对瀑布流重排
      var _self = this;
      window.onresize = debounce(function () {
            _self.renderFalls()
      }, 80, false);
      function debounce(func, threshold, execAsap) {
          var timeout;
          return function debounced() {
              var obj = this, args = arguments;
              function delayed() {
                  if (!execAsap)
                      func.apply(obj, args);
                  timeout = null;
              }
              ;
              if (timeout)
                  clearTimeout(timeout);
              else if (execAsap)
                  func.apply(obj, args);
              timeout = setTimeout(delayed, threshold || 100);
          };
      }
      

    }
  };

</script>

<style scoped>
/* RWD start */
/* @import url("//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/jdc-help/jdc-help.css"); */
.jc_help{padding:0 0 60px}.help-search{background:#0989c5 url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/jdc-help/i/help-search.jpg) center top no-repeat;height:170px}.help-search .help-w{width:1200px;margin:0 auto}.help-search h1{font-size:36px;padding:48px 0 0;color:#fff;float:left}.help-search .help-sw{width:720px;padding:55px 0 0 310px}.help-search .help-sw .input-group{padding-right:85px}.help-search .help-sw .input-group .form-control{border:none;height:40px;font-size:14px;color:#20293b}.help-search .help-sw .input-group .input-group-btn{padding:0;border:0;background:0 0}.help-search .help-sw .input-group .btn-search{width:85px;height:40px;background:#0989c5;font-size:16px;text-align:center;color:#fff;border-radius:0}.help-search .help-sw .input-group .btn-search:hover{background:#3881fb}.help-search .help-sw .help-shot{padding:10px 0 0;font-size:16px}.help-search .help-sw .help-shot a{color:#ccc;margin-right:15px;font-size:14px}.help-search .help-sw .help-shot a:hover{color:#fff}.help_tab{border-bottom:1px solid #efefef}.help_tab ul{width:1200px;margin:0 auto;*zoom:1}.help_tab ul:after,.help_tab ul:before{content:"";display:block;clear:both;height:0;line-height:0;visibility:hidden}.help_tab ul li{float:left;padding:4px 25px 0;height:55px;line-height:55px;font-size:16px;cursor:pointer;color:#333;border-bottom:3px solid transparent}.help_tab ul li.active,.help_tab ul li:hover{border-bottom:3px solid #0989c5;color:#338aff}.help_content{display:none}.help_wrap{width:1200px;margin:0 auto}.cont_docu{padding:40px 0}.cont_docu .cont_docu_list{position:relative}.cont_docu .cont_docu_list>li{position:absolute;width:260px}.cont_docu .cont_docu_list>li h4{margin-left:10px;margin-bottom:10px;border-bottom:1px solid #e1e1e1;font-size:16px;line-height:36px;color:#222}.cont_docu .cont_docu_list>li li{color:#0989c5;font-size:14px;line-height:38px;height:38px;padding:0 10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cont_docu .cont_docu_list>li li:hover{background:#f8f8f8}.cont_docu .cont_docu_list>li li em{color:#fff;font-size:12px;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;display:inline-block;padding:1px 3px;height:15px;text-align:center;line-height:16px;font-weight:400;margin-left:10px}.cont_docu .cont_docu_list>li li em.cdl_new{background:#ff7200}.cont_docu .cont_docu_list>li li em.cdl_hot{background:#ff4200}.cont_docu .cont_docu_list>li li em.cdl_beta{background:#999}.cont_init h3{color:#222;font-size:16px;font-weight:400;margin-top:30px}.cont_init .course{margin-top:30px;*zoom:1}.cont_init .course:after,.cont_init .course:before{content:"";display:block;clear:both;height:0;line-height:0;visibility:hidden}.cont_init .course>li{padding:30px 30px 0;border:1px solid #ebebeb;width:320px;height:310px;position:relative;overflow:hidden;transition:all .3s;margin:0 18px 18px 0;float:left}.cont_init .course li .course-img-box{margin-bottom:40px;transition:all .3s}.cont_init .course li .course-img-box img{width:60px;height:60px;transition:all .3s}.cont_init .course li h5{color:#333;font-size:20px;font-weight:400;margin-bottom:20px;transition:all .3s}.cont_init .course>li>p{height:125px;font-size:14px;line-height:24px;color:#666;overflow:hidden;transition:all .3s}.cont_init .course>li .curriculum{height:0;margin-bottom:15px;overflow:hidden;transition:all .3s;position:relative}.cont_init .course>li .curriculum li~li{margin-top:25px;position:relative}.cont_init .course>li .curriculum li~li:before{content:"";bottom:22px;left:11px;height:25px;position:absolute;border-left:1px solid #ebebeb;z-index:11}.cont_init .course>li .curriculum li p{line-height:22px}.cont_init .course>li .curriculum li p em{float:left;border:2px solid #0989c5;background:#fff;border-radius:100px;text-align:center;line-height:20px;width:20px;height:20px;margin-right:20px;color:#0989c5;position:relative;z-index:12}.cont_init .course>li .course-summary{border-top:1px solid #efefef;height:34px;line-height:34px;color:#999;font-size:14px;position:absolute;bottom:0;left:30px;right:30px;z-index:13;background:#fff}.cont_init .course>li:hover{border-color:#0989c5}.cont_init .course>li:hover .course-img-box{margin-bottom:0;height:0}.cont_init .course>li:hover .course-img-box img{width:0;height:0}.cont_init .course>li:hover h5{color:#0989c5}.cont_init .course>li:hover>p{height:0}.cont_init .course>li:hover .curriculum{height:auto;max-height:210px;overflow-y:auto}.cont_init .course-show-all{text-align:center;font-size:14px;padding:15px 0}.cont_init .course-show-all p a{color:#0989c5;cursor:pointer}.cont_init .course-show-all p a:hover{text-decoration:underline}.cont_init .guide-box{position:relative;margin-top:30px;height:142px;overflow:hidden}.cont_init .guide-box:hover .arrow-box .arrow{display:block}.cont_init .guide-box .arrow-box .arrow{display:none;cursor:pointer;position:absolute;z-index:29;top:0;bottom:0;width:40px;background-color:#000;background-color:rgba(0,0,0,.15)}.cont_init .guide-box .arrow-box .arrow:after{content:"";display:block;height:14px;width:10px;position:absolute;top:50%;left:50%;margin-top:-7px;margin-left:-5px;background-image:url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/jdc-help/i/help-arr.png)}.cont_init .guide-box .arrow-box .arr-left:after{background-position:0 0}.cont_init .guide-box .arrow-box .arr-right:after{background-position:0 -14px}.cont_init .guide-box .arrow-box .arr-left{left:0}.cont_init .guide-box .arrow-box .arr-right{right:0}.cont_init .guide-box .arrow-box .arrow:hover{position:absolute;top:0;bottom:0;background-color:#000;background-color:rgba(0,0,0,.2)}.cont_init .guide-box .arrow-box .arrow.disable{display:none}.cont_init .guide-box .guide-list{position:absolute;left:0;*zoom:1}.cont_init .guide-box .guide-list:after,.cont_init .guide-box .guide-list:before{content:"";display:block;clear:both;height:0;line-height:0;visibility:hidden}.cont_init .guide-box .guide-list li{float:left;border:1px solid #ebebeb;width:342px;height:100px;padding:20px;transition:all .3s}.cont_init .guide-box .guide-list li~li{margin-left:24px}.cont_init .guide-box .guide-list li h5{font-size:16px;line-height:18px;font-weight:400;color:#333;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:all .3s}.cont_init .guide-box .guide-list li p{font-size:14px;color:#666;line-height:24px;max-height:72px;margin-top:15px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}.cont_init .guide-box .guide-list li:hover{border-color:#0989c5}.cont_init .guide-box .guide-list li:hover h5{color:#0989c5}.cont_init .video-box{background:#f8f8f8;margin-top:30px;padding-top:1px}.cont_init .video-box .video-list{*zoom:1;margin-top:30px}.cont_init .video-box .video-list:after,.cont_init .video-box .video-list:before{content:"";display:block;clear:both;height:0;line-height:0;visibility:hidden}.cont_init .video-box .video-list li{float:left;width:260px;height:210px;border:1px solid #ebebeb;padding:10px;background:#fff;transition:all .3s}.cont_init .video-box .video-list li~li{margin-left:24px}.cont_init .video-box .video-list li .imgbox,.cont_init .video-box .video-list li .imgbox img{width:260px;height:175px}.cont_init .video-box .video-list li h6{font-size:14px;margin-top:10px;color:#333;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:all .3s}.cont_init .video-box .video-list li:hover{border-color:#0989c5}.cont_init .video-box .video-list li:hover h6{color:#0989c5}.cont_init .video-box .video-tomore{color:#999;font-size:14px;text-align:center;padding:30px 0}.cont_init .video-box .video-tomore a{color:#0989c5}.cont_init .video-box .video-tomore a:hover{text-decoration:underline}.cont_init .sinit-tit{*zoom:1}.cont_init .sinit-tit:after,.cont_init .sinit-tit:before{content:"";display:block;clear:both;height:0;line-height:0;visibility:hidden}.cont_init .sinit-tit{margin-top:30px}.cont_init .sinit-tit li{float:left;color:#222;font-size:14px;padding-right:10px;cursor:pointer}.cont_init .sinit-tit li~li:before{content:"|";color:#bbb;margin-right:10px}.cont_init .sinit-tit li.active{color:#0989c5}.cont_init .sinit-box{border:1px solid #ebebeb;margin-top:20px;display:none}.cont_init .sinit-box .progress-box{background:#f8f8f8}.cont_init .sinit-box .progress-box ul{text-align:center;height:60px;line-height:60px}.cont_init .sinit-box .progress-box ul li{display:inline-block;color:#333;font-size:16px;padding:0 20px;position:relative;cursor:pointer}.cont_init .sinit-box .progress-box ul li~li{margin-left:150px}.cont_init .sinit-box .progress-box ul li~li:before{content:"";display:block;position:absolute;left:-150px;top:50%;width:150px;height:0;border-top:1px solid #ccc;cursor:default}.cont_init .sinit-box .progress-box ul li em{display:inline-block;width:20px;height:20px;text-align:center;line-height:20px;border:2px solid #333;background:#fff;margin-right:10px;-webkit-border-radius:100px;-moz-border-radius:100px;border-radius:100px;font-weight:400}.cont_init .sinit-box .progress-box ul li.active{color:#0989c5}.cont_init .sinit-box .progress-box ul li.active em{border-color:#0989c5}.cont_init .sinit-box .progress-cont{min-height:195px}.cont_init .sinit-box .progress-cont ul{*zoom:1;margin-left:200px;padding-bottom:32px;display:none}.cont_init .sinit-box .progress-cont ul:after,.cont_init .sinit-box .progress-cont ul:before{content:"";display:block;clear:both;height:0;line-height:0;visibility:hidden}.cont_init .sinit-box .progress-cont ul li{float:left;width:330px;list-style:disc;cursor:pointer;color:#999;margin-top:32px}.cont_init .sinit-box .progress-cont ul li a{color:#0989c5}.cont_init .sinit-box .progress-cont ul li a:hover{text-decoration:underline}.cont_service h3{color:#222;font-size:16px;font-weight:400;margin-top:30px}.cont_service .service-list{margin:30px -12px 0;*zoom:1}.cont_service .service-list:after,.cont_service .service-list:before{content:"";display:block;clear:both;height:0;line-height:0;visibility:hidden}.cont_service .service-list li{float:left;margin:0 12px 24px;border:1px solid #ebebeb;width:218px;height:140px;padding-top:20px;cursor:pointer;text-align:center;transition:all .3s}.cont_service .service-list li i{font-size:40px;color:#bbb;transition:all .3s}.cont_service .service-list li:hover{border-color:#0989c5}.cont_service .service-list li:hover i{color:#0989c5}.cont_service .service-list li p{font-size:14px;color:#333;margin-top:10px}.cont_service .more-service{*zoom:1;margin:30px -12px 0}.cont_service .more-service:after,.cont_service .more-service:before{content:"";display:block;clear:both;height:0;line-height:0;visibility:hidden}.cont_service .more-service li{float:left;margin:0 12px;width:342px;height:140px;padding:0 20px;border:1px solid #ebebeb;background:url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/jdc-help/i/service-more-bg.jpg);transition:all .3s}.cont_service .more-service li:hover{border-color:#0989c5}.cont_service .more-service li h5{font-size:16px;color:#333;line-height:18px;padding:20px 0 30px;transition:all .3s}.cont_service .more-service li:hover h5{color:#0989c5}.cont_service .more-service li p{font-size:14px;line-height:24px;color:#666}.jdc-help-search.help-search{background-image:url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/jdc-help/i/help-banner.jpg);background-size:cover;background-color:#2b3a4e;height:390px}.jdc-help-search.help-search .help-sw{padding:170px 0 0 310px}.jdc-help-search.help-search h1{padding:162px 0 0 20px}.jdc-help-search.help-search .help-sw .input-group .btn-search{background:#313042;border-color:#91919a}.jdc-help-search.help-search .help-sw .input-group .btn-search:hover{background:#393946;border-color:#a3a3a9}.cont_docu .cont_docu_list>li.floatLi{float:left;position:relative}.show11{display:block!important}.drop-list{z-index:10;position:absolute;display:inline-block;width:628px;min-height:36px;overflow-x:inherit;background-color:#fff;border:1px solid #b6b6b6;border-top:0}.drop-list ul li{height:36px;line-height:36px;padding-left:5px}.drop-list ul li:hover{background-color:#ddd}.el-tabs__nav .el-tabs__active-bar{background-color:#0989c5}.el-tabs__nav .el-tabs__item{width:144px;height:60px;line-height:60px;text-align:center;font-size:16px;color:#333}.el-tabs__nav .el-tabs__item.is-active,.el-tabs__nav .el-tabs__item:hover{color:#0989c5}.help-serh2{font-size:16px;margin:30px 0}.help-inlst h3{font-size:16px}.m-progress-cont-tt{display:none}.jdc-rwd .help_tab ul,.jdc-rwd .help_wrap{width:auto;max-width:1200px}.jdc-rwd .help-w{width:auto;max-width:1200px;margin:0 auto}.jdc-rwd .help-search .help-sw{max-width:720px;width:auto}@media (max-width:1200px){.jdc-rwd .cont_docu{overflow-x:auto;overflow-y:hidden}.jdc-rwd .cont_init .video-box .video-list li{margin:0 24px 24px 0}.jdc-rwd .cont_init .sinit-box .progress-box ul li{width:20%;box-sizing:border-box}.jdc-rwd .cont_init .sinit-box .progress-box ul li~li{margin-left:0}.jdc-rwd .cont_init .sinit-box .progress-box ul li~li:before{border-top:0}.jdc-rwd .cont_init .sinit-box .progress-cont ul{margin-left:100px}.jdc-rwd .cont_init .sinit-box .progress-cont ul li{width:33.33%}.jdc-rwd .cont_service h3{margin-left:20px}.jdc-rwd .cont_service .service-list{margin:30px 0 0;padding:0 12px}.jdc-rwd .cont_service .more-service{margin:30px 0 0}.jdc-rwd .cont_service .more-service li{margin:0 12px 12px}}@media (max-width:768px){.jdc-rwd .cont_docu{padding:0}.jdc-rwd .help-search{height:150px}.jdc-rwd .help-search h1{padding:20px 0 0 10px;font-size:20px}.jdc-rwd .help-search .help-sw{clear:both;padding:10px 10px 0}.jdc-rwd .help-search .help-sw .input-group .form-control{height:32px;font-size:12px}.jdc-rwd .help-search .help-sw .input-group .btn-search{height:32px;line-height:32px}.jdc-rwd .help-search .help-sw .help-shot{padding:10px 0 0;max-height:36px;overflow:hidden;font-size:12px}.jdc-rwd .help-search .help-sw .help-shot a{font-size:12px;margin-right:10px}.jdc-rwd .help_tab .help-w{overflow-x:auto;-webkit-overflow-scrolling:touch}.jdc-rwd .help_tab ul{display:table;width:100%}.jdc-rwd .help_tab ul:after,.jdc-rwd .help_tab ul:before{content:none}.jdc-rwd .help_tab ul li{float:none;display:table-cell;padding:0 10px;height:40px;line-height:40px;box-sizing:border-box;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:14px}.jdc-rwd .help_tab ul li.active,.jdc-rwd .help_tab ul li:hover{border-bottom:2px solid #0989c5;color:#0989c5}.jdc-rwd .help_tab ul li.active a,.jdc-rwd .help_tab ul li.active a:hover{color:#0989c5}.jdc-rwd .cont_docu .cont_docu_list{height:auto!important}.jdc-rwd .cont_docu .cont_docu_list>li{width:100%;position:static}.jdc-rwd .cont_docu .cont_docu_list>li h4{margin:0;padding-right:50px;line-height:50px;padding-left:20px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#333;border-color:#ededed;position:relative}.jdc-rwd .cont_docu .cont_docu_list>li h4:after{content:'';position:absolute;top:18px;border:2px solid #3f3f3f;display:block;width:6px;height:6px;margin:auto;transform:rotate(-45deg);border-top:none;border-right:none;right:22px}.jdc-rwd .cont_docu .cont_docu_list>li.active h4{color:#0989c5}.jdc-rwd .cont_docu .cont_docu_list>li.active h4:after{border-bottom:none;border-left:none;border-right:2px solid #0989c5;border-top:2px solid #0989c5;top:20px}.jdc-rwd .cont_docu .cont_docu_list>li ol{border-bottom:1px solid #ededed;padding:5px 0;background:#f7f8fa;display:none}.jdc-rwd .cont_docu .cont_docu_list>li.active ol{display:block}.jdc-rwd .cont_docu .cont_docu_list>li li{height:36px;line-height:36px;color:#333;padding:0 20px}.jdc-rwd .cont_init .guide-box{height:auto;overflow:auto;padding:0 10px;margin-top:20px}.jdc-rwd .cont_init .guide-box .guide-list{width:auto!important;position:static}.jdc-rwd .cont_init .guide-box .guide-list li{float:none;width:100%;height:auto;box-sizing:border-box;margin-bottom:10px;padding:10px}.jdc-rwd .cont_init .guide-box .guide-list li h5{color:#0989c5;font-size:14px}.jdc-rwd .cont_init .guide-box .guide-list li p{font-size:12px;line-height:18px;margin-top:6px}.jdc-rwd .cont_init .guide-box .guide-list li:hover{border-color:#ebebeb}.jdc-rwd .cont_init .guide-box .guide-list li~li{margin-left:0}.jdc-rwd .cont_init .guide-box .arrow-box{display:none}.jdc-rwd .cont_init h3{text-align:center;font-size:18px;color:#0989c5}.jdc-rwd .cont_init .video-box{background:#fff;margin-top:0}.jdc-rwd .cont_init .video-box .video-list{margin-top:20px;padding:0 10px}.jdc-rwd .cont_init .video-box .video-list li{width:100%;box-sizing:border-box;height:auto;text-align:center;border:0;margin:0 0 10px}.jdc-rwd .cont_init .video-box .video-list li .imgbox{width:auto;height:auto;text-align:center}.jdc-rwd .cont_init .video-box .video-tomore{padding:0}.jdc-rwd .cont_init .sinit-box{border:0}.jdc-rwd .cont_init .sinit-box .progress-cont{border-bottom:1px solid #ededed}.jdc-rwd .cont_init .sinit-box .progress-box{display:none}.jdc-rwd .cont_init .sinit-tit{padding-left:20px}.jdc-rwd .m-progress-cont-tt{display:block;height:50px;line-height:50px;font-size:16px;border-top:1px solid #ededed;padding:0 50px 0 20px;position:relative}.jdc-rwd .m-progress-cont-tt em{display:inline-block;width:14px;height:14px;text-align:center;line-height:14px;border:1px solid #333;background:#fff;margin-right:5px;border-radius:100%;font-size:12px;font-weight:400;vertical-align:1px}.jdc-rwd .m-progress-cont-tt:after{content:'';position:absolute;top:18px;border:2px solid #3f3f3f;display:block;width:6px;height:6px;margin:auto;transform:rotate(-45deg);border-top:none;border-right:none;right:22px}.jdc-rwd .m-progress-cont-tt.active{color:#0989c5}.jdc-rwd .m-progress-cont-tt.active em{border-color:#0989c5}.jdc-rwd .m-progress-cont-tt.active:after{border-bottom:none;border-left:none;border-right:2px solid #0989c5;border-top:2px solid #0989c5;top:20px}.jdc-rwd .cont_init .sinit-box .progress-cont ul{margin-left:0;border-top:1px solid #ededed;padding:10px 0;background:#f7f8fa;display:none!important}.jdc-rwd .cont_init .sinit-box .progress-cont .m-progress-cont-tt.active+ul{display:block!important}.jdc-rwd .cont_init .sinit-box .progress-cont ul li{width:100%;margin-top:0;line-height:28px}.jdc-rwd .cont_init .sinit-box .progress-cont ul li a{display:block;padding:0 20px;color:#666}.jdc-rwd .cont_init .sinit-box .progress-cont ul li a:hover{text-decoration:none}.jdc-rwd .cont_init .sinit-box .progress-cont{min-height:inherit}.jdc-rwd .cont_service h3{text-align:center;font-size:18px;color:#0989c5;margin-left:0}.jdc-rwd .cont_service .service-list{margin-top:16px;padding:0 10px}.jdc-rwd .cont_service .service-list li{float:none;display:inline-block;vertical-align:top;width:25%;height:auto;margin:0 0 16px;padding-top:0;border:0}.jdc-rwd .cont_service .service-list li:hover i{color:#0989c5}.jdc-rwd .cont_service .service-list li i{font-size:32px}.jdc-rwd .cont_service .service-list li p{margin-top:0;padding:0 2px;font-size:12px}.jdc-rwd .cont_service .more-service{margin:16px 0 0;padding:0 10px}.jdc-rwd .cont_service .more-service li{margin:0 0 10px;width:100%;height:auto;background:#fff;padding:10px;box-sizing:border-box}.jdc-rwd .cont_service .more-service li:hover{border-color:#ebebeb}.jdc-rwd .cont_service .more-service li h5{font-size:14px;color:#0989c5;padding:0 0 8px}.jdc-rwd .cont_service .more-service li p{font-size:12px;line-height:18px}}
</style>
