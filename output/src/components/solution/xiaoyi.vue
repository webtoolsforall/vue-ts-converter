<template>
  <div>
    <div class="tgy-banner">
      <div class="tgy-wrap">
        <h1 class="tgy-h1">
          {{$t('solution.xiaoyi.xiaoyi_1')}}
          </h1>
        <p class="tgy-p">
          {{$t('solution.xiaoyi.xiaoyi_2')}}
        </p>
        <img src="~static/img/ewm-xiaoyi.png" class="ewm_bg" v-show="imgShow">
        <div class="tgy-bbox">
          <a clstag="Solution|keycount|MiddleContentSec|Solution_xiaoyi_0" @click='gaEventTrigger("SectionBannerSec","Solution|keycount|MiddleContentSec|Solution_xiaoyi_0")' data-ga="SectionBannerSec_立即体验" href="http://yi.jd.com/"  target="_blank" class="tgy-btn">
          {{$t('solution.xiaoyi.xiaoyi_3')}}
          </a>
          <a href="javascript:void 0;" target="_blank" class="tgy-btn tgy-btn-white" clstag="Solution|keycount|MiddleContentSec|Solution_xiaoyi_5" @click.prevent="showImg">
            {{$t('solution.xiaoyi.xiaoyi_4')}}
          </a>
        </div>
      </div>
    </div>
    <div class="tgy-base">
      <div class="tgy-wrap">
        <h2 class="tgy-h2">
          {{$t('solution.xiaoyi.xiaoyi_5')}}
        </h2>
        <ul class="tgy-base-lst clearfix">
          <li class="tgy-base-li" :class="activeIndex==1?'on':''" @mouseenter="changeActive(1)">
            <i class="tgy-bicon tgy-bicon"></i>
            <h3>
              {{$t('solution.xiaoyi.xiaoyi_6')}}
            </h3>
            <p>
              {{$t('solution.xiaoyi.xiaoyi_7')}}
            </p>
            <ul class="tgy-base-sub clearfix">
              <li>
                <span><i class="tgy-bsicon tgy-bsicon9"></i>
                {{$t('solution.xiaoyi.xiaoyi_8')}}
                </span>
              </li>
              <li>
                <span><i class="tgy-bsicon tgy-bsicon10"></i>
                {{$t('solution.xiaoyi.xiaoyi_9')}}
                </span>
              </li>
            </ul>
          </li>

          <li class="tgy-base-li" :class="activeIndex==2?'on':''" @mouseenter="changeActive(2)">
            <i class="tgy-bicon tgy-bicon2"></i>
            <h3>
              {{$t('solution.xiaoyi.xiaoyi_10')}}
            </h3>
            <p>
              {{$t('solution.xiaoyi.xiaoyi_11')}}
            </p>
            <ul class="tgy-base-sub clearfix">
              <li>
                <span><i class="tgy-bsicon tgy-bsicon7"></i>
                {{$t('solution.xiaoyi.xiaoyi_12')}}
                </span>
              </li>
              <li>
                <span><i class="tgy-bsicon tgy-bsicon8"></i>
                {{$t('solution.xiaoyi.xiaoyi_13')}}
                </span>
              </li>
            </ul>
          </li>


          <li class="tgy-base-li last" :class="activeIndex==3?'on':''" @mouseenter="changeActive(3)">
            <i class="tgy-bicon tgy-bicon3"></i>
            <h3>
              {{$t('solution.xiaoyi.xiaoyi_14')}}
            </h3>
            <p>
              {{$t('solution.xiaoyi.xiaoyi_15')}}
            </p>
            <ul class="tgy-base-sub clearfix">
              <li>
                <span><i class="tgy-bsicon"></i>
                {{$t('solution.xiaoyi.xiaoyi_16')}}
                </span>
              </li>
              <li>
                <span><i class="tgy-bsicon tgy-bsicon2"></i>
                  {{$t('solution.xiaoyi.xiaoyi_17')}}
                </span>
              </li>
              <li>
                <span><i class="tgy-bsicon tgy-bsicon3"></i>
                  {{$t('solution.xiaoyi.xiaoyi_18')}}
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="storage-floor">
      <div class="tgy-wrap">
        <h2 class="tgy-h2">
          {{$t('solution.xiaoyi.xiaoyi_19')}}
        </h2>
        <div id="tabcon">
          <ul class="storage-tab">
            <li data-ga="MiddleContentSec_移动审批" class="ui-switchable-item" :class="showIndex==1?'on':''"  @click="changeTab(1,'xiaoyi_1')">
              {{$t('solution.xiaoyi.xiaoyi_20')}}
            </li>
            <li data-ga="MiddleContentSec_任务系统" class="ui-switchable-item" :class="showIndex==2?'on':''"  @click="changeTab(2,'xiaoyi_2')">
              {{$t('solution.xiaoyi.xiaoyi_21')}}
            </li>
            <li data-ga="MiddleContentSec_日志系统" class="ui-switchable-item" :class="showIndex==3?'on':''"  @click="changeTab(3,'xiaoyi_3')">
              {{$t('solution.xiaoyi.xiaoyi_22')}}
            </li>
            <li data-ga="MiddleContentSec_考勤管理" class="ui-switchable-item" :class="showIndex==4?'on':''"  @click="changeTab(4,'xiaoyi_4')">
              {{$t('solution.xiaoyi.xiaoyi_23')}}
            </li>
          </ul>

          <div class="storage-box ui-switchable-panel-main">

            <div class="storage-tbox" v-show="showIndex==1">
              <ul class="storage-lst">
                <li>
                  {{$t('solution.xiaoyi.xiaoyi_24')}}
                </li>
                <li>
                  {{$t('solution.xiaoyi.xiaoyi_25')}}
                </li>
                <li>
                  {{$t('solution.xiaoyi.xiaoyi_26')}}
                </li>
              </ul>
              <div class="storage-tmp"></div>
            </div>

            <div class="storage-tbox" v-show="showIndex==2">
              <ul class="storage-lst">
                <li>
                  {{$t('solution.xiaoyi.xiaoyi_27')}}
                </li>
                <li>
                  {{$t('solution.xiaoyi.xiaoyi_28')}}
                </li>
                <li>
                  {{$t('solution.xiaoyi.xiaoyi_29')}}
                </li>
              </ul>
              <div class="storage-tmp storage-tmp2"></div>
            </div>

            <div class="storage-tbox" v-show="showIndex==3">
              <ul class="storage-lst">
                <li>
                  {{$t('solution.xiaoyi.xiaoyi_30')}}
                </li>
                <li>
                  {{$t('solution.xiaoyi.xiaoyi_31')}}
                </li>
              </ul>
              <div class="storage-tmp storage-tmp3"></div>
            </div>

            <div class="storage-tbox" v-show="showIndex==4">
              <ul class="storage-lst">
                <li>
                  {{$t('solution.xiaoyi.xiaoyi_32')}}
                </li>
                <li>
                  {{$t('solution.xiaoyi.xiaoyi_33')}}
                </li>
              </ul>
              <div class="storage-tmp storage-tmp4"></div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div class="foot_lx">
      <div class="tgy-wrap">
        <h2>
          {{$t('solution.xiaoyi.xiaoyi_34')}}
        </h2>
        <p class="email"><i>
          {{$t('solution.xiaoyi.xiaoyi_35')}}
          ：</i>
        {{$t('solution.xiaoyi.xiaoyi_36')}}
        </p>
        <!-- <p class="tel_phone"><i>电话：</i>010-89115145</p> -->
      </div>
    </div>
  </div>
</template>

<style>
  @import "~static/css/xiaoyi/jdxy.css";
  .ewm_bg{
    display: block;
  }
</style>

<script>
  export default{
    data(){
      return {
        showIndex: 1,
        activeIndex: 1,
        imgShow: false
      }
    },
    methods: {
      changeTab(index,gaTitle){
        this.showIndex = index;
        this.gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_"+gaTitle)
      },
      changeActive(index){
        this.activeIndex = index;
      },
      showImg(){
        this.imgShow = !this.imgShow;
        this.gaEventTrigger("MiddleContentSec","Solution|keycount|MiddleContentSec|Solution_xiaoyi_5")
      }
    }
  }
</script>
