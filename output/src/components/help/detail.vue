<template>
  <div>
      <div>
        <!-- <import-js src="//static-portal.jdcloud.com/jcloud/jc/1.1.0/widget/help-top/help-top.js"></import-js> -->
        <!-- <import-js src="//static-portal.jdcloud.com/jcloud/jc/1.1.0/widget/help-left/help-left.js"></import-js> -->
        <!-- <import-js src="//static-portal.jdcloud.com/jcloud/jc/1.1.0/widget/help-detail/help-detail.js"></import-js> -->
        <v-detail-menu :content="faqData" ></v-detail-menu>
     </div>
     <div>
        <v-detail-content :allpro="faqData"></v-detail-content>
     </div>
  </div>
</template>

<script>

  import apiUrl from 'api'
  import VDetailContent from "./detailContent.vue"
  import VDetailMenu from "./detailMenu.vue"
  export default{
    props:['content','allpro'],
    data(){
      return {
        catdetailData:[],
        catalogData:[],
        contentData:[],
        faqData:[]
      }
      },
    components:{
      VDetailMenu,
      VDetailContent,
      'importJs': {
        render(createElement) {
          return createElement('script', {
            attrs: {
              type: 'text/javascript',
              src: this.src
            }
          });
        },
        props: {
          src: {
            type: String,
            required: true
          },
        },
      },
    },
    mounted(){
      //点击全部文档，菜单收起
      this.$nextTick(function(){
        $('.help-search').on('click','li a',function(){
          let self = $(this);
          self.parents('.product-all').trigger('mouseleave');
        })
      })
    },
    created(){
      //请求帮助中心数据
      this.$http.get(apiUrl.api.getHelpList, {
        params: {
          path: '/help'
        }
      }).then(res => {
        this.faqData = res.body.result.children
      },err => {
        console.log(err)
      })

      //请求内容 contentId



       /*this.$http.get(apiUrl.api.contentByCatalogId,{params:{
         catalogId:this.$route.params.contentId
       }}).then(res => {
        this.contentData =res;
      },err => {
        console.log("err")
      })*/



    }

  }
</script>
