<template>
  <div class="jdc-main-guide-wrap w">
        <div class="jdc-main-hd">
          <h3 class="jdc-main-title">{{floorItem.name}}</h3>
          <p class="jdc-main-des" v-if="floorItem.description">{{floorItem.description}}</p>
        </div>
        <div class="jdc-main-bd">
          <div class="jdc-main-guide">
            <div class="row">
              <div class="col-4 col-md-4 col-sm-4 col-xs-12" v-for="(listItem,ind) in floorItem.floorCatalogList.slice(0,3)" :key="ind">
                <div class="jdc-main-guide-item">
                  <a @click="gaEventTrigger('KnowJDcloudSec','HomePage|keycount|KnowJDcloudSec|HomePage_KnowJDcloud_' + listItem.id)"
                     :clstag="'HomePage|keycount|KnowJDcloudSec|HomePage_KnowJDcloud_' + listItem.id"
                     :data-ga="'KnowJDcloudSec_'+listItem.name" :href="listItem.buttonUrl" target="_blank">
                    <i class="jdcfont">&#xe911;</i>
                    <div class="img-area">
                      <img :src="listItem.imageUrl" :alt="listItem.name">
                    </div>
                    <h5>{{listItem.name}}</h5>
                  </a>
                </div>
              </div>
            </div>
            <div class="jdc-main-more-btn">
              <a
                href="//ke.jd.com/ser/list.action?page=1&serviceSortCode=default&serviceSortType=desc&cid=18802&cateId1=18802"
                :clstag="`HomePage|keycount|KnowJDcloudSec|HomePage_KnowJDcloud_More`"
                @click="gaEventTrigger('KnowJDcloudSec','HomePage|keycount|KnowJDcloudSec|HomePage_KnowJDcloud_More')"
                class="jdc-btn jdc-bg hidden-xs" target="_blank">{{$t('common.more')}}</a>
              <a
                href="//ke.jd.com/ser/list.action?page=1&serviceSortCode=default&serviceSortType=desc&cid=18802&cateId1=18802"
                :clstag="`HomePage|keycount|KnowJDcloudSec|HomePage_KnowJDcloud_More`"
                @click="gaEventTrigger('KnowJDcloudSec','HomePage|keycount|KnowJDcloudSec|HomePage_KnowJDcloud_More')"
                class="jdc-btn-more jdc-link-more" target="_blank">{{$t('common.more')}}</a>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: ['floorItem']
}
</script>
<style>
.jdc-main-guide .row {
  margin-left: -22.5px;
  padding-bottom: 40px;
}
.jdc-main-guide .row .col-4 {
  padding-left: 22.5px;
}
.jdc-main-guide .jdc-main-more-btn {
  padding-bottom: 0;
}
.jdc-main-guide-item {
  position: relative;
  height: 300px;
  background: #fff;
  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  transition: all 0.25s ease;
}
.jdc-main-guide-item:hover {
  -webkit-box-shadow: 0 6px 10px 0 rgba(20, 34, 67, 0.1);
  -moz-box-shadow: 0 6px 10px 0 rgba(20, 34, 67, 0.1);
  box-shadow: 0 6px 10px 0 rgba(20, 34, 67, 0.1);
}
.jdc-main-guide-item:hover h5 {
  color: #0989c5;
}
.jdc-main-guide-item:hover img {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.jdc-main-guide-item:hover .mask {
  display: block;
}
.jdc-main-guide-item .mask {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 220px;
  z-index: 1;
  opacity: 0.5;
  filter: alpha(opacity=50);
}
.jdc-main-guide-item a {
  display: block;
}
.jdc-main-guide-item i {
  position: absolute;
  top: 50%;
  left: 50%;
  line-height: 60px;
  font-size: 60px;
  width: 60px;
  height: 60px;
  margin-left: -30px;
  margin-top: -65px;
  color: #fff;
  z-index: 2;
}
.jdc-main-guide-item .img-area {
  width: 100%;
  height: 220px;
  overflow: hidden;
}
.jdc-main-guide-item .img-area img {
  vertical-align: top;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 220px;
  transition: all 0.5s ease;
}
.jdc-main-guide-item h5 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 80px;
  line-height: 80px;
  font-size: 18px;
  color: #666;
  text-align: center;
  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  transition: all 0.25s ease;
}
.jdc-rwd .jdc-main-guide {
  padding: 0 10px;
}
.jdc-rwd .jdc-main-guide-item,
.jdc-rwd .jdc-main-guide-item .img-area {
  height: auto;
}
@media (max-width: 768px) {
  .jdc-rwd .jdc-main-guide .row {
    padding-bottom: 0;
  }
  .jdc-rwd .jdc-main-guide .row .col-4:nth-child(n + 2) {
    display: none;
  }
  .jdc-rwd .jdc-main-guide-item .img-area {
    max-height: 260px;
  }
  .jdc-rwd .jdc-main-guide-item h5 {
    height: 50px;
    line-height: 46px;
    font-size: 14px;
  }
}
</style>

