<template>
  <div class="jdc-main-certification-wrap w">
    <div class="jdc-main-hd">
      <h3 class="jdc-main-title">{{floorItem.name}}</h3>
      <p class="jdc-main-des" v-if="floorItem.description">{{floorItem.description}}</p>
    </div>
    <div class="jdc-main-bd">
      <div class="jdc-main-certification">
        <div class="row">
          <div class="col-3 col-xs-6"
            v-for="(item,index) in floorItem.floorCatalogList" :key="index">
            <div class="jdc-main-certification-item">
              <div class="jdc-main-certification-item-ct"><img
                  data-lazy-img="done"
                 :src="item.imageUrl.split(',')[0]"
                 :alt="item.name"
                  width="70"
                  height="70"
                >
                <h5 v-if="$i18n.locale === 'cn'">{{item.name}}</h5>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['floorItem']
};
</script>

<style>
/* @import "//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/jdc-main-certification/jdc-main-certification.css"; */
.jdc-main-certification{padding-bottom:60px}.jdc-main-certification .row{margin-left:-26px}.jdc-main-certification .row .col-3{padding-left:26px}.jdc-main-certification-item{font-size:0}.jdc-main-certification-item .jdc-main-certification-item-ct{padding:20px;text-align:center}.jdc-main-certification-item h5{margin-top:10px;font-size:14px;color:#666}@media (max-width:768px){.jdc-rwd .jdc-main-certification{padding:0 10% 50px}.jdc-rwd .jdc-main-certification .row{text-align:center;font-size:0}.jdc-rwd .jdc-main-certification .row .col-3{float:none;display:inline-block;vertical-align:top}.jdc-rwd .jdc-main-certification-item .jdc-main-certification-item-ct{display:inline-block;padding:10px 10%}.jdc-rwd .jdc-main-certification-item .jdc-main-certification-item-ct img{display:inline-block;width:50px!important;height:50px!important}.jdc-rwd .jdc-main-certification-item h5{display:block;padding-left:0;margin-top:10px;text-align:center;font-size:12px}}
</style>
