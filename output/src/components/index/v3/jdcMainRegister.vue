<template>
  <div>
    <div
      class="jdc-main-register"
      v-for="(listItem,ind) in floorItem.floorCatalogList"
      :key="ind">
      <h5 class="f-cb">{{listItem.name}}</h5>
      <div class="jdc-main-more-btn" v-if="listItem.buttonTitle">
        <a
          @click="gaEventTrigger('FooterBannerSec','HomePage|keycount|FooterBannerSec|HomePage_Register')"
          :data-ga="'FooterBannerSec_'+listItem.name"
          :href="listItem.buttonUrl"
          target="_blank"
          :clstag="`HomePage|keycount|FooterBannerSec|HomePage_Register`"
          class="jdc-btn jdc-bg"
        >{{listItem.buttonTitle}}</a>
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

