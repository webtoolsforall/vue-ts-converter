<template>
  <div class="jdc-main-partner-wrap w">
    <div class="jdc-main-hd">
      <h3 class="jdc-main-title">{{floorItem.name}}</h3>
      <p class="jdc-main-des" v-if="floorItem.description">{{floorItem.description}}</p>
    </div>
    <div class="jdc-main-bd">
      <div class="jdc-main-partner">
        <div class="row">
          <div class="col-3 col-xs-6"
            v-for="(item,index) in floorItem.floorCatalogList" :key="index">
            <img
              data-lazy-img="done"
              :src="item.imageUrl.split(',')[0]"
              :alt="item.name"
            ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: ['floorItem']
}
</script>

<style>
/* @import "//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/jdc-main-partner/jdc-main-partner.css"; */
.jdc-main-partner .col-3{text-align:center}.jdc-main-partner img{width:100%;height:100%;max-width:100%;max-height:120px}@media (max-width:768px){.jdc-rwd .jdc-main-partner{padding:0 8%}}
</style>

