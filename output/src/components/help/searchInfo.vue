<template>
    <div>
      <div class="help-search-v1">
    <div class="help-w">
        <div class="help-sw">
            <div class="input-group jdc-input-group">
                 <input type="text" v-model="searchParam.query" @keyup.enter="searchEnter" @keyup="loadWords"  class="form-control" placeholder="输入关键字搜索，如云主机">
                <span class="input-group-btn">
                    <button class="btn btn-search" @click="searchEnter" clstag="HelpFaq|keycount|SectionBannerSec|searchInfo_SearchButton"  type="button">搜索</button>
                </span>
            </div>
              <!-- <div class="drop-list" :class="{hide:wordList.length==0}">
               <ul>
                 <li @click="dropIninput(word)" v-for="(word,index) in wordList">{{word}}</li>
               </ul>
            </div> -->

        </div>
    </div>
</div>

<div class="help-w searchInfo"> 
    <p  class="help-nt">为您找到{{resultcount||'0'}}个相关结果</p>
    <ul class="help-searchlst">
        <li v-for="(item,ind) in searchList">
            <router-link target="_blank" :to="{name:'detail',params:{contentId:item.itemid,isCateLog:'1'}}">
              <h3 v-html="item.title" style="display:inline-block;color:#448aff"></h3>
              </router-link>
            <p class="help-search-con" ><i v-html="item.content"></i><i v-if="item.content&&item.content.length>220">...</i></p>

            <p class="help-search-come">来自： {{item.catalog0Name}}
                &gt;
                <router-link style="color:#999" target="_blank" :to="{name:'detail',params:{contentId:item.catalogId,isCateLog:'0'}}">{{item.catalogName}}</router-link>
            </p>
        </li>
    </ul>

     <el-pagination class="jdc-pagination"
      v-show="resultcount"
      @current-change="handleCurrentChange"
      :current-page.sync="searchParam.pageNum"
      :page-sizes="[10, 20, 50]"
      :page-size="searchParam.pageSize"
      layout=" prev, pager, next,slot"
      :total="resultcount">
      <slot>
          <span class="jdc-pagination-total">/{{Math.ceil(resultcount/searchParam.pageSize)}}</span>
      </slot>
    </el-pagination>


    <h3 class="help-search-h3">没有解决您的问题？您可以通过如下方式获得帮助</h3>
    <ul class="help-inlst help-serlst f-cb">
        <li><a
        @click="gaEventTrigger('MiddleContentSec','HelpFaq|keycount|MiddleContentSec|searchInfo_1')"
        :data-ga="'ContactUsSec_提交工单'"
        clstag="HelpFaq|keycount|MiddleContentSec|searchInfo_1"
         href="//uc.jdcloud.com/myorder/submit">
            <h3>提交工单</h3>
            <p>7*24小时支持，处理周期较长<br>
                适合需要技术支持时使用</p></a>

        </li>
        <li>
            <a
            @click="gaEventTrigger('MiddleContentSec','HelpFaq|keycount|MiddleContentSec|searchInfo_2')"
        :data-ga="'ContactUsSec_在线客服'"
        clstag="HelpFaq|keycount|MiddleContentSec|searchInfo_2"
             href="//chat.jd.com/agile/NDYzMDUw">
                <h3>在线客服</h3>
                <p>5*8小时支持，云专家在线<br>
                    即时帮您解决问题</p>
            </a>
        </li>
        <li class="last">
         <a
         @click="gaEventTrigger('MiddleContentSec','HelpFaq|keycount|MiddleContentSec|searchInfo_3')"
        :data-ga="'ContactUsSec_客服电话／邮箱'"
        clstag="HelpFaq|keycount|MiddleContentSec|searchInfo_3"
          href="mailto:jdcloud@jd.com">
              <h3>客服电话／邮箱</h3>
              <p>400-615-1212（7*24小时）<br>
                jdcloud@jd.com（7*24小时）</p>
          </a>
        </li>
    </ul>
</div>



    </div>
</template>

<script>


  import apiUrl from 'api'
  import fun from 'fun'
  export default {
    name:'searchInfo',
    data() {
      return {

         searchParam:{
          serviceCode:1,//服务编码(1关键词搜索服务 2自动补全服务 3相关搜索服务 4热门搜索词)
          query:'',
          pageNum:1,
          pageSize:15,
          sceneType:'pc', //
          fields:'item,content,title',
          filter:'cateid:1',
       },
      searchList:[],
      wordList:[],
      earlyWord:'',
      resultcount:0,
      };
    },

    methods: {
      //选择下拉框中词汇
      dropIninput(val) {
        this.searchParam.query= val
        this.wordList=[]
      },

      handleCurrentChange(val) {
        this.searchParam.pageNum=Number(val)
        this.$router.push({ name: 'searchInfo', query: { query: this.searchParam.query,pageNum:Number(this.searchParam.pageNum),pageSize:Number(this.searchParam.pageSize) }})

        this.searchEnter()

      },
      //相关关键词列表
      loadWords:function(){
        var _self= this;
        // console.log("触发key结果")
        this.searchParam.serviceCode=2
         setTimeout(function(){
               //search
            _self.$http.get(apiUrl.api.testSearch,
              {params: _self.searchParam}
            ).then(res => {
                  _self.wordList=res.body.result.resultdata||[]
            }, err => {
              console.log(err)
            })
         },500)


      },
      //搜索按钮
      searchEnter: function () {
        this.gaEventTrigger('SectionBannerSec', 'HelpFaq|keycount|SectionBannerSec|searchInfo_SearchButton')
        
        this.wordList=[]
        // console.log(this.searchParam.pageNum)
        this.searchParam.serviceCode=1
        this.searchParam.query=this.searchParam.query||this.$route.query.query||''
        this.searchParam.pageNum=Number(this.$route.query.pageNum)||1
        this.searchParam.pageSize=Number(this.$route.query.pageSize)||15
        this.searchParam.sceneType=this.$route.query.sceneType||'pc'
        this.searchParam.fields=this.$route.query.fields||'item,content,title'
        this.searchParam.filter=this.$route.query.filter||'cateid:1'
        // console.log("触发搜索结果")
        //search
          this.$http.get(apiUrl.api.testSearch,
            {params: this.searchParam}
          ).then(res => {
            if(res.body.result.status=="OK"){
                this.searchList=res.body.result.resultdata
                this.resultcount=res.body.result.resultcount;
                if(res.body.result.errors&&res.body.result.errors.code==100){
                  this.earlyWord=this.searchParam.query
                }
            }else if(res.body.result.status=="WARN"||res.body.result.status=="FAIL"){
              this.searchList=[]
               this.resultcount = 0
              console.log("dg_error_no_search")
            }else{
               this.searchList=[]
               this.resultcount = 0
              // console.log(res.body.result.status)
            }

          }, err => {
            console.log(err)
          })

      },

    },
    created() {
      if(this.$route.query.query){
            this.searchEnter()
      }
    }
  };
</script>
 
 <style>
 /* RWD start */
 /* @import url("//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/jdc-help-search/jdc-help-search.css"); */
 .help-w{width:1200px;margin:auto}.help-search-v1{border-bottom:1px solid #efefef;padding:20px 0}.help-search-v1 .help-sw{width:720px}.help-search-v1 .help-sw .input-group{padding-right:85px}.help-search-v1 .help-sw .input-group .form-control{border:1px solid #0989c5;height:36px;font-size:14px;color:#20293b;*height:32px}.help-search-v1 .help-sw .input-group .input-group-btn{padding:0;border:0;background:0 0}.help-search-v1 .help-sw .input-group .btn-search{width:85px;height:36px;line-height:36px;*line-height:30px;background:#0989c5;font-size:16px;text-align:center;color:#fff;border-radius:0}.help-search-v1 .help-sw .input-group .btn-search:hover{background:#2d70df}.help-position{color:#999;padding:20px 0;border-bottom:1px solid #efefef}.help-position a{color:#999}.help-nt{color:#999;padding:10px 0 0}.help-searchlst{margin-top:40px}.help-searchlst li{margin-bottom:40px}.help-searchlst li h3{font-size:16px;color:#222;margin-bottom:20px}.help-searchlst li a:hover h3{color:#0989c5}.help-search-con{color:#666;line-height:25px}.help-search-come{font-size:12px;color:#999;padding-top:10px}.help-keywords{color:#0989c5}.page{clear:both}.page a{display:inline-block;border:1px solid #ededed;background:#f7f7f7;color:#222;padding:8px 15px 9px}.help-inlstw{position:relative;overflow:hidden}.help-inlst h3{font-size:16px;color:#222;margin-bottom:8px}.help-inlst p{color:#666}.help-inlst li{float:left;border:1px solid #ebebeb;padding:20px;width:345px;margin-right:19px;background:#fff}.help-inlst li:hover{box-shadow:0 0 15px #ebebeb}.help-inlst li:hover h3{color:#0989c5}.help-search-h3{margin:60px 0 20px}.help-serlst{padding-bottom:60px}.help-serlst p{color:#999}.help-serlst .last{margin-right:0}.show{display:block}.hide{display:none}.blueLink{color:#0989c5}.searchInfo .pages{padding-top:30px;padding-bottom:50px}.searchInfo .pages{padding-right:15px;text-align:left}.searchInfo .pages .el-pagination__total{color:#fff}.searchInfo .pages span{height:36px;line-height:36px}.searchInfo .pages .el-pager li{min-width:36px;height:36px;line-height:36px;margin:0 5px}.searchInfo .pages .btn-next,.searchInfo .pages .btn-prev{background:0 0;height:36px;width:36px;margin:0 5px;border:1px solid #eee}.searchInfo .pages .el-pager li.active{border-color:#0989c5;background-color:#0989c5;color:#fff;cursor:default}.searchInfo .pages .el-pager li{border:1px solid #eee;background:0 0;color:#666}.searchInfo .pages .el-pager li:hover{color:#fff;background:#0989c5;border:1px solid #eee}.drop-list{position:absolute;display:inline-block;width:628px;min-height:36px;overflow-x:inherit;background-color:#fff;border:1px solid #b6b6b6;border-top:0}.drop-list ul li{height:36px;line-height:36px;padding-left:5px}.drop-list ul li:hover{background-color:#ddd}.help-search-v1 .help-sw .input-group.jdc-input-group .form-control{border-color:#91919a;color:#20293b}.help-search-v1 .help-sw .input-group.jdc-input-group .btn-search{background:#313042;border-color:#91919a}.help-search-v1 .help-sw .input-group.jdc-input-group .btn-search:hover{background:#393946;border-color:#a3a3a9}.jdc-rwd .help-w{width:auto;max-width:1200px}@media (max-width:1200px){.jdc-rwd .help-search-v1{padding:20px 10px}.jdc-rwd .help-search-v1 .help-sw{width:auto;max-width:720px}.jdc-rwd .help-nt{padding:10px 10px 0}.jdc-rwd .help-search-h3,.jdc-rwd .help-searchlst{padding:0 10px}.jdc-rwd .help-serlst{padding:0 10px 60px}.jdc-rwd .help-inlst li{margin-bottom:20px}}@media (max-width:768px){.jdc-rwd .help-searchlst{margin-top:10px}.jdc-rwd .help-searchlst li{margin-bottom:20px}.jdc-rwd .help-searchlst li h3{margin-bottom:5px;font-size:14px}.jdc-rwd .help-search-con{font-size:12px;line-height:18px}.jdc-rwd .help-search-come{padding-top:5px}.jdc-rwd .help-search-h3{margin:20px 0 10px}.jdc-rwd .help-search-v1{padding:14px 10px;position:relative;z-index:10;background:#fff}.jdc-rwd .help-search-v1 .help-sw .input-group.jdc-input-group .form-control{height:32px}.jdc-rwd .help-search-v1 .help-sw .input-group.jdc-input-group .btn-search{height:32px;line-height:32px}.jdc-rwd .help-inlst li{width:100%;box-sizing:border-box;padding:10px;margin-bottom:10px;margin-right:0}.jdc-rwd .help-inlst li:hover{box-shadow:none}.jdc-rwd .help-inlst li:hover h3{color:#333}.jdc-rwd .help-inlst h3{font-size:14px;margin-bottom:4px}.jdc-rwd .help-serlst p{font-size:12px}.jdc-rwd .help-serlst{padding:0 10px 30px}}
 </style>
 