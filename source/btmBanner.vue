<template>
    <div>
         <dl class="m-common-list">
        <dt>发现更多精彩</dt>
        <dd v-for="item in dataObj.recommendList">
            <a :href="item.webUrl" target="_blank"><img :src="item.imageUrl"></a>
        </dd>
        </dl>
    </div>
</template>


<script>
import apiUrl from "api";
export default {
  props: {
    dataObj: {
      type: Object,
      default: function() {
        return {
          recommendList: []
        };
      }
    }
  },
  data() {
    return {
      //   recommendList: []
    };
  },
  created() {
    this.$http.get(apiUrl.api.recommendList).then(
      res => {
        this.dataObj.recommendList = res.body.result;
      },
      err => {
        console.log(err);
      }
    );
  }
};
</script>