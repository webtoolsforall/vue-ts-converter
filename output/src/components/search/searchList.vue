<template>
  <div>
    <div class="help-search-v1 help-search-style2">
      <div class="help-w">
        <div class="help-sw">
          <div class="input-group jdc-input-group">
            <input
              type="text"
              class="form-control"
              v-model="searchParam.query"
              :placeholder="$t('searchInfo.placeholder')"
              @keyup.enter="searchEnterByKey()"
              :maxlength="80"
            >
            <span class="input-group-btn">
              <button
                class="btn btn-search"
                @click="searchEnterByKey()"
                type="button"
                clstag="Search|keycount|MiddleContentSec|Search_button"
              >{{$t('searchInfo.search')}}</button>
            </span>
          </div>
          <div class="search-hotwords">
            <a
              :data-href="'/search?query='+word"
              v-for="(word,index) in $t('common.hotWordList')"
              :key="index"
              @click="clickKeyWord(word,index)"
              :clstag="`Search|keycount|MiddleContentSec|keyword-${index}`"
            >{{word}}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="search-tab-hd">
      <div class="w">
        <ul class="search-classify">
          <li :class="{on: tabIndex===index}" v-for="(item,index) in tabArr" :key="index">
            <a
              href="javascript:;"
              :clstag="`Search|keycount|MiddleContentSec|tab-${index}`"
              @click="switchTab(index)"
            >{{item[`name_${$i18n.locale}`]}}（{{item.count}}）</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="help-w searchInfo">
      <p v-if="$i18n.locale=='cn'" class="help-nt">为您找到{{resultcount||'0'}}个相关结果</p>
      <p v-else class="help-nt">Found {{resultcount||'0'}} results for you</p>
      <v-recommend
        v-if="tabIndex===0&&recommendList.length>0"
        :list="recommendList"
      ></v-recommend>
      <ul class="help-searchlst">
        <li v-for="(item,index) in searchList" :key="index">
          <router-link
            target="_blank"
            :to="getFullPath(item.cateid[0],item.itemid,item.staticFileName)"
            :data-href="item.staticFileName"
            @click="gaEventTrigger('MiddleContentSec','Search|keycount|MiddleContentSec|title-'+index)"
            :clstag="`Search|keycount|MiddleContentSec|title-${index}`"
          >
            <h3 v-html="item.title" style="display:inline-block;"></h3>
          </router-link>
          <p class="help-search-con">
            <i v-html="htmlDecode(item.content)"></i>
            <i v-if="item.content&&item.content.length>220">...</i>
          </p>
          <p class="help-search-come">
            {{$t('searchInfo.from')}}： {{item.catalog0Name}}
            <router-link
              style="color:#999"
              target="_blank"
              v-if="item.catalogName"
              :to="getFullPath(item.cateid[0],item.itemid,item.staticFileName)"
              :data-href="item.itemid"
              @click="gaEventTrigger('MiddleContentSec','Search|keycount|MiddleContentSec|content-'+index)"
              :clstag="`Search|keycount|MiddleContentSec|content-${index}`"
            >&gt; {{item.catalogName}}</router-link>
          </p>
        </li>
      </ul>

      <el-pagination
        class="jdc-pagination"
        v-show="resultcount"
        @current-change="handleCurrentChange"
        :current-page.sync="searchParam.pageNum"
        :page-sizes="[10, 20, 50]"
        :page-size="searchParam.pageSize"
        layout=" prev, pager, next,slot"
        :total="resultcount"
      >
        <slot>
          <span class="jdc-pagination-total">/{{Math.ceil(resultcount/searchParam.pageSize)}}</span>
        </slot>
      </el-pagination>

      <h3 class="help-search-h3" v-text="$t('searchInfo.problem')">没有解决您的问题？您可以通过如下方式获得帮助</h3>
      <ul class="help-inlst help-serlst f-cb">
        <li>
          <a
            @click="gaEventTrigger('MiddleContentSec','Search|keycount|MiddleContentSec|searchInfo_1')"
            :data-ga="'ContactUsSec_提交工单'"
            clstag="Search|keycount|MiddleContentSec|searchInfo_1"
            href="//uc.jdcloud.com/myorder/submit"
          >
            <h3 v-text="$t('searchInfo.step1.title')">提交工单</h3>
            <p>
              {{$t('searchInfo.step1.msg1')}}
              <br>
              {{$t('searchInfo.step1.msg2')}}
            </p>
          </a>
        </li>
        <li>
          <a
            @click="gaEventTrigger('MiddleContentSec','Search|keycount|MiddleContentSec|searchInfo_2')"
            :data-ga="'ContactUsSec_在线客服'"
            clstag="Search|keycount|MiddleContentSec|searchInfo_2"
            href="//chat.jd.com/agile/NDYzMDUw"
          >
            <h3 v-text="$t('searchInfo.step2.title')">在线客服</h3>
            <p>
              {{$t('searchInfo.step2.msg1')}}
              <br>
              {{$t('searchInfo.step2.msg2')}}
            </p>
          </a>
        </li>
        <li class="last">
          <a
            @click="gaEventTrigger('MiddleContentSec','Search|keycount|MiddleContentSec|searchInfo_3')"
            :data-ga="'ContactUsSec_客服电话／邮箱'"
            clstag="Search|keycount|MiddleContentSec|searchInfo_3"
            href="mailto:jdcloud@jd.com"
          >
            <h3 v-text="$t('searchInfo.step3.title')">客服电话／邮箱</h3>
            <p>
              {{$t('searchInfo.step3.msg1')}}
              <br>
              {{$t('searchInfo.step3.msg2')}}
            </p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import apiUrl from "api";
import VRecommend from "./recommend.vue";
export default {
  components: {
    VRecommend
  },
  data() {
    return {
      tabIndex: 0,
      tabArr: [
        { name_cn: "产品", name_en: "Products", count: 0 },
        { name_cn: "解决方案", name_en: "Solutions", count: 0 },
        { name_cn: "文档", name_en: "Documentation", count: 0 },
        { name_cn: "综合", name_en: "Comprehensives", count: 0 }
      ],
      resultcount: 0,
      searchList: [],
      recommendList: [], // 推荐列表
      searchParam: {
        serviceCode: 1, // 服务编码(1关键词搜索服务 2自动补全服务 3相关搜索服务 4热门搜索词)
        query: "",
        pageNum: 1,
        pageSize: 15,
        sceneType: "pc", //
        fields: "item,content,title,lang,staticFileName",
        filter: "cateid:product", // cateid:1 文档; cateid:product 产品; cateid:solution 解决方案; '' 综合;
        lang: this.$i18n.locale
      }
    };
  },
  watch: {
    $route(to, from) {
      let query = to.query.query || "";
      this.searchParam.query = query;
      this.tabIndex = 0;
      this.searchParam.pageNum = 1;
      this.searchEnter("Y");
    }
  },
  created() {
    let query = this.$route.query.query || "";
    this.searchParam.query = query;
    this.searchEnter("Y");
  },
  methods: {
    searchEnter(type) {
      this.searchParam.serviceCode = 1;
      this.searchParam.query = this.searchParam.query || "";
      this.searchParam.pageNum = Number(this.searchParam.pageNum);
      this.searchParam.pageSize = Number(this.searchParam.pageSize);
      this.searchParam.sceneType = this.searchParam.sceneType || "pc";
      this.searchParam.fields = this.searchParam.fields;
      this.searchParam.filter = this.searchParam.filter;
      this.$http.get(apiUrl.api.search, { params: this.searchParam }).then(res => {
        this.searchList = res.body.result.resultdata;
        this.resultcount = res.body.result.resultcount;
        if (type === "Y") {
          this.getProductRecommend();
          this.getSearchNum();
        }
      }, res => {
        console.log("搜索查询错误", res);
      });
      this.gaEventTrigger(
        "SectionBannerSec",
        "Search|keycount|SectionBannerSec|searchInfo_SearchButton"
      );
    },
    searchEnterByKey() {
      if (this.searchParam.query === this.$route.query.query) {
        // 过滤搜索与路由一样的关键词  否则watch无法监听
        this.switchTab(0)
        return false;
      }
      this.$router.push({
        path: "/search?query=" + this.searchParam.query
      });
    },
    clickKeyWord(key, index) {
      if (key === this.$route.query.query) {
        // 过滤与路由一样的关键词  否则watch无法监听
        this.switchTab(0)
        return false;
      }
      this.$router.push({
        path: "/search?query=" + key
      });
      this.gaEventTrigger(
        "SectionBannerSec",
        "Search|keycount|SectionBannerSec|Search_keyword_" + index
      );
    },
    // 分类数量查询
    getSearchNum() {
      this.$http
        .get(apiUrl.api.searchnumber, { params: this.searchParam })
        .then(
          res => {
            this.tabArr[0].count = res.body.result["product"];
            this.tabArr[1].count = res.body.result["solution"];
            this.tabArr[2].count = res.body.result["1"];
            this.tabArr[3].count = res.body.result["all"];
          },
          response => {
            console.log("搜索查询错误");
          }
        );
    },
    // 搜索推荐
    getProductRecommend() {
      if (this.searchParam.query === "") {
        this.recommendList = []
        return false;
      }
      let params = {
        query: this.searchParam.query
      };
      this.$http
        .get(apiUrl.api.searchProductRecommendList, { params })
        .then(res => {
          this.recommendList = [];
          if (res.body.code === 0 && res.body.result) {
            try {
              let result = JSON.parse(res.body.result)
              result.forEach(item => {
                let obj = {
                  name: '',
                  url: '',
                  data: null
                }
                let txtVoList = (item.txtVoList) || []
                txtVoList.forEach(element => {
                  if (element.templet === 0 && element.txt) {
                    obj.name= item.name
                    obj.url = item.url.replace(".html", "")
                    obj.data = element.txt
                    this.recommendList.push(obj)
                  }
                });
              })
            } catch (error) {
              console.log('推荐内容catch error', error)
            }
          }
        });
    },
    htmlDecode(str) {
      var s = "";
      str = str || "";
      if (str.length == 0) return "";
      s = str.replace(/&amp;/g, "&");
      s = s.replace(/&nbsp;/g, " ");
      s = s.replace(/&lt;/g, "<");
      s = s.replace(/&gt;/g, ">");
      s = s.replace(/&#39;/g, "'");
      s = s.replace(/&quot;/g, '"');
      return s;
    },
    switchTab(index) {
      if (this.tabIndex !== index) {
        this.searchParam.pageNum = 1;
      }
      this.tabIndex = index;
      switch (index) {
        case 0:
          this.searchParam.filter = "cateid:product";
          break;
        case 1:
          this.searchParam.filter = "cateid:solution";
          break;
        case 2:
          this.searchParam.filter = "cateid:1";
          break;
        case 3:
          this.searchParam.filter = "";
          break;
        default:
          this.searchParam.filter = "";
          break;
      }
      this.searchEnter();
      this.gaEventTrigger(
        "MiddleContentSec",
        `Search|keycount|MiddleContentSec|tab-${index}`
      );
    },
    getFullPath(cateid, itemid, path) {
      let url = "";
      switch (cateid) {
        case "1":
          url = `//docs.jdcloud.com${path}`;
          break;
        case "product":
          url = `//www.jdcloud.com${path}`;
          break;
        case "solution":
          url = `//www.jdcloud.com${path}`;
          break;
        case "notice":
          url = `//www.jdcloud.com${path}`;
          break;
        case "news":
          url = `//www.jdcloud.com${path}`;
          break;
        case "customerCase":
          url = `//www.jdcloud.com${path}`;
          break;
        default:
          url = path;
          break;
      }
      return url;
    },
    handleCurrentChange(val) {
      this.searchParam.pageNum = Number(val);
      this.searchEnter();
      $("body,html").animate({ scrollTop: 0 }, 0);
    }
  }
};
</script>

<style>
/*//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/jdc-help-search/jdc-help-search.css */
.help-w {
  width: 1200px;
  margin: auto;
}
.help-search-v1 {
  border-bottom: 1px solid #efefef;
  padding: 20px 0;
}
.help-search-v1 .help-sw {
  width: 720px;
}
.help-search-v1 .help-sw .input-group {
  padding-right: 85px;
}
.help-search-v1 .help-sw .input-group .form-control {
  border: 1px solid #3171ff;
  height: 36px;
  font-size: 14px;
  color: #20293b;
  *height: 32px;
}
.help-search-v1 .help-sw .input-group .input-group-btn {
  padding: 0;
  border: 0;
  background: 0 0;
}
.help-search-v1 .help-sw .input-group .btn-search {
  width: 85px;
  height: 36px;
  line-height: 36px;
  *line-height: 30px;
  background: #3171ff;
  font-size: 16px;
  text-align: center;
  color: #fff;
  border-radius: 0;
}
.help-search-v1 .help-sw .input-group .btn-search:hover {
  background: #2d70df;
}
.help-position {
  color: #999;
  padding: 20px 0;
  border-bottom: 1px solid #efefef;
}
.help-position a {
  color: #999;
}
.help-nt {
  color: #999;
  padding: 10px 0 0;
}
.help-searchlst {
  margin-top: 40px;
}
.help-searchlst li {
  margin-bottom: 40px;
}
.help-searchlst li h3 {
  font-size: 16px;
  color: #3171ff;
  margin-bottom: 20px;
}
.help-searchlst li a:hover h3 {
  color: #3171ff;
}
.help-search-con {
  color: #666;
  line-height: 25px;
  word-break: break-all;
}
.help-search-come {
  font-size: 12px;
  color: #999;
  padding-top: 10px;
}
.help-keywords {
  color: #3171ff;
}
.page {
  clear: both;
}
.page a {
  display: inline-block;
  border: 1px solid #ededed;
  background: #f7f7f7;
  color: #222;
  padding: 8px 15px 9px;
}
.help-inlstw {
  position: relative;
  overflow: hidden;
}
.help-inlst h3 {
  font-size: 16px;
  color: #222;
  margin-bottom: 8px;
}
.help-inlst p {
  color: #666;
}
.help-inlst li {
  float: left;
  border: 1px solid #ebebeb;
  padding: 20px;
  width: 345px;
  margin-right: 19px;
  background: #fff;
}
.help-inlst li:hover {
  box-shadow: 0 0 15px #ebebeb;
}
.help-inlst li:hover h3 {
  color: #3171ff;
}
.help-search-h3 {
  margin: 60px 0 20px;
}
.help-serlst {
  padding-bottom: 60px;
}
.help-serlst p {
  color: #999;
}
.help-serlst .last {
  margin-right: 0;
}
.show {
  display: block;
}
.hide {
  display: none;
}
.blueLink {
  color: #3171ff;
}
.searchInfo .pages {
  padding-top: 30px;
  padding-bottom: 50px;
}
.searchInfo .jdc-banner-btn {
  color: #fff;
  opacity: 1;
  background: -moz-linear-gradient(80deg, #3171ff 0, #a14faf 100%);
  background: -webkit-linear-gradient(80deg, #3171ff 0, #a14faf 100%);
  background: -webkit-linear-gradient(10deg, #3171ff 0, #a14faf 100%);
  background: linear-gradient(80deg, #3171ff 0, #a14faf 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#3171ff', endColorstr='#a14faf', GradientType=1);
}
.searchInfo .jdc-product-banner-search {
  padding: 0 20px;
  margin-top: 10px;
  position: relative;
  background: url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/jdc-help-search/i/search-bg.jpg)
    left 32px no-repeat;
  border: 1px solid #e7e9ed;
}
.searchInfo .jdc-product-banner-search .jdc-banner-link-m {
  display: none;
}
.searchInfo .jdc-product-banner-search .w {
  position: relative;
  z-index: 2;
  height: 100%;
}
.searchInfo .jdc-product-banner-search .jdc-product-banner-ct {
  position: relative;
  z-index: 2;
  padding-bottom: 20px;
}
.searchInfo .jdc-product-banner-search .jdc-banner-icon {
  position: absolute;
  z-index: 1;
  top: 0;
  right: -80px;
  width: 560px;
  height: 390px;
  background-position: center;
  background-size: cover !important;
}
.searchInfo .jdc-product-banner-search .jdc-product-banner-tit {
  height: 36px;
  line-height: 36px;
  padding: 12px 0 5px;
  color: #333;
  font-size: 0;
  font-weight: 400;
  cursor: pointer;
}
.searchInfo .jdc-product-banner-search .jdc-product-banner-tit strong {
  display: inline-block;
  vertical-align: top;
  font-size: 20px;
  font-weight: 400;
}
.searchInfo .jdc-product-banner-search .jdc-product-banner-txt {
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 12px;
  color: #666;
  cursor: pointer;
}
.searchInfo .jdc-product-banner-search .jdc-product-tag {
  display: inline-block;
  vertical-align: top;
  margin-top: 11px;
  margin-left: 10px;
  padding: 1px 3px;
  height: auto;
  line-height: 14px;
  border: 1px solid #ccc;
  border-radius: 16px;
  font-size: 0;
  color: #999;
}
.searchInfo .jdc-product-banner-search .jdc-product-tag em {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  padding: 0 5px;
  font-weight: 400;
  font-size: 12px;
}
.searchInfo .jdc-product-banner-search .jdc-product-tag em + em {
  border-left: 1px solid #ccc;
}
.searchInfo .jdc-product-banner-search .jdc-banner-link {
  margin-left: 20px;
  color: #3171ff;
}
.searchInfo .jdc-product-banner-search .jdc-product-event-link {
  position: absolute;
  bottom: 16px;
  left: 0;
  font-size: 0;
}
.searchInfo .jdc-product-banner-search .jdc-product-event-link > * {
  display: inline-block;
  font-size: 14px;
  color: #fff;
}
.searchInfo .jdc-product-banner-search .jdc-product-event-link i {
  font-size: 26px;
  margin-right: 16px;
  width: 26px;
  height: 26px;
  line-height: 26px;
  vertical-align: -1px;
}
.searchInfo .jdc-product-banner-search .jdc-product-event-link a:hover {
  text-decoration: underline;
}
.searchInfo .jdc-product-banner-search .jdc-product-event-link .line {
  margin: 0 20px;
  width: 1px;
  height: 14px;
  background: #fff;
  opacity: 0.4;
  filter: alpha(opacity=40);
  vertical-align: -2px;
}
.searchInfo .jdc-banner-event-link-search {
  height: 40px;
  line-height: 40px;
  border-top: 1px solid #e7e9ed;
  font-size: 14px;
}
.searchInfo .jdc-banner-event-link-search .w {
  overflow: hidden;
}
.searchInfo .jdc-banner-event-link-search .event-link-text {
  float: left;
  padding-right: 10px;
  max-width: 120px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #333;
}
.searchInfo .jdc-banner-event-link-search .event-link-text .jdcfont {
  display: none;
  vertical-align: -2px;
  font-size: 18px;
  margin-right: 5px;
  -webkit-text-stroke-width: 0;
  color: #3171ff;
}
.searchInfo .jdc-banner-event-link-search ul {
  overflow: hidden;
}
.searchInfo .jdc-banner-event-link-search li {
  float: left;
  max-width: 33.33%;
  height: 40px;
  border-right: 1px solid rgba(243, 245, 251, 0.1);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  -ms-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease;
}
.searchInfo .jdc-banner-event-link-search li:last-child {
  border-right: 0;
}
.searchInfo .jdc-banner-event-link-search li a {
  display: block;
  padding: 0 10px;
  overflow: hidden;
  word-wrap: normal;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #666;
}
.searchInfo .jdc-banner-event-link-search li a i {
  vertical-align: top;
  margin-right: 10px;
  font-size: 20px;
}
.searchInfo .jdc-banner-event-link-search li:hover a {
  color: #3171ff;
  text-decoration: underline;
}
.searchInfo .pages {
  padding-right: 15px;
  text-align: left;
}
.searchInfo .pages .el-pagination__total {
  color: #fff;
}
.searchInfo .pages span {
  height: 36px;
  line-height: 36px;
}
.searchInfo .pages .el-pager li {
  min-width: 36px;
  height: 36px;
  line-height: 36px;
  margin: 0 5px;
}
.searchInfo .pages .btn-next,
.searchInfo .pages .btn-prev {
  background: rgba(0, 0, 0, 0);
  height: 36px;
  width: 36px;
  margin: 0 5px;
  border: 1px solid #eee;
}
.searchInfo .pages .el-pager li.active {
  border-color: #3171ff;
  background-color: #3171ff;
  color: #fff;
  cursor: default;
}
.searchInfo .pages .el-pager li {
  border: 1px solid #eee;
  background: rgba(0, 0, 0, 0);
  color: #666;
}
.searchInfo .pages .el-pager li:hover {
  color: #fff;
  background: #3171ff;
  border: 1px solid #eee;
}
.drop-list {
  position: absolute;
  display: inline-block;
  width: 628px;
  min-height: 36px;
  overflow-x: inherit;
  background-color: #fff;
  border: 1px solid #b6b6b6;
  border-top: 0;
}
.drop-list ul li {
  height: 36px;
  line-height: 36px;
  padding-left: 5px;
}
.drop-list ul li:hover {
  background-color: #ddd;
}
.help-search-v1 .help-sw .input-group.jdc-input-group .form-control {
  border-color: #91919a;
  color: #20293b;
}
.help-search-v1 .help-sw .input-group.jdc-input-group .btn-search {
  background: #313042;
  border-color: #91919a;
}
.help-search-v1 .help-sw .input-group.jdc-input-group .btn-search:hover {
  background: #393946;
  border-color: #a3a3a9;
}
.search-hotwords {
  font-size: 0;
  padding-top: 8px;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
}
.search-hotwords a {
  float: left;
  font-size: 12px;
  color: #666;
  margin-right: 15px;
}
.help-search-style2 {
  background: #f6f8ff;
  border-bottom: 0;
  padding: 29px 0;
}
.search-tab-hd {
  border-bottom: 2px solid #f3f5fb;
  height: 68px;
  margin-bottom: 20px;
}
.search-classify {
  font-size: 0;
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
  height: 62px;
  padding-top: 8px;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
.search-classify::-webkit-scrollbar {
  display: none;
}
.search-classify li {
  font-size: 14px;
  height: 60px;
  line-height: 60px;
  position: relative;
  padding: 0 20px;
  display: inline-block;
}
.search-classify li a {
  color: #333;
}
.search-classify li:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
}
.search-classify li.on a {
  color: #3171ff;
}
.search-classify li.on:after {
  background: #3171ff;
}
.help-product-search .jdc-product-banner-search {
  display: none;
}
.help-product-search .jdc-product-banner-search:first-child,
.help-product-search.open .jdc-product-banner-search {
  display: block;
}
.help-product-search.open .help-product-search-more .hpsm-open {
  display: none;
}
.help-product-search.open .help-product-search-more .hpsm-close {
  display: block;
}
.help-product-search .help-product-search-more {
  text-align: center;
  padding: 12px 0;
}
.help-product-search .help-product-search-more a {
  color: #666;
}
.help-product-search .help-product-search-more i {
  margin-left: 5px;
  vertical-align: -1px;
  display: inline-block;
  width: 12px;
  height: 12px;
  line-height: 12px;
  text-align: center;
  background: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiPjxzdHlsZT4uc3Qwe2ZpbGw6Izk4OTg5OH08L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00OS41IDkwLjFjLTEuNC0uMi0yLjQtLjUtMy4yLTEuM0wyLjkgNDQuNWMtMS43LTEuOC0xLjctNC42LjEtNi4zIDEuOC0xLjcgNC42LTEuNyA2LjMuMWw0MC4zIDQxLjEgNDEuOC00MS4yYzEuNy0xLjcgNC42LTEuNyA2LjMgMCAxLjcgMS44IDEuNyA0LjYtLjEgNi4zbC00NSA0NC4zYy0uOC45LTEuOSAxLjMtMy4xIDEuM3oiLz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDkuNiA1NC44Yy0xLjUtLjItMi40LS41LTMuMi0xLjNMMTEuOCAxOC4xYy0xLjctMS44LTEuNy00LjYuMS02LjMgMS44LTEuNyA0LjYtMS43IDYuMy4xTDQ5LjcgNDRsMzIuOC0zMi4zYzEuNy0xLjcgNC42LTEuNyA2LjMgMCAxLjcgMS44IDEuNyA0LjYtLjEgNi4zTDUyLjggNTMuNWMtLjkuOS0yIDEuMy0zLjIgMS4zeiIvPjwvc3ZnPg==)
    no-repeat;
}
.help-product-search .help-product-search-more .hpsm-close {
  display: none;
}
.help-product-search .help-product-search-more .hpsm-close i {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
.jdc-rwd .help-w {
  width: auto;
  max-width: 1200px;
}
@media (max-width: 1200px) {
  .jdc-rwd .help-search-v1 {
    padding: 20px 10px;
  }
  .jdc-rwd .help-search-v1 .help-sw {
    width: auto;
    max-width: 720px;
  }
  .jdc-rwd .help-nt {
    padding: 10px 10px 0;
  }
  .jdc-rwd .help-search-h3,
  .jdc-rwd .help-searchlst {
    padding: 0 10px;
  }
  .jdc-rwd .help-serlst {
    padding: 0 10px 60px;
  }
  .jdc-rwd .help-inlst li {
    margin-bottom: 20px;
  }
  .jdc-rwd .searchInfo .jdc-product-banner-search {
    margin: 10px 10px 0;
  }
}
@media (max-width: 768px) {
  .jdc-rwd .help-searchlst {
    margin-top: 10px;
  }
  .jdc-rwd .help-searchlst li {
    margin-bottom: 20px;
  }
  .jdc-rwd .help-searchlst li h3 {
    margin-bottom: 5px;
    font-size: 14px;
  }
  .jdc-rwd .help-search-con {
    font-size: 12px;
    line-height: 18px;
  }
  .jdc-rwd .help-search-come {
    padding-top: 5px;
  }
  .jdc-rwd .help-search-h3 {
    margin: 20px 0 10px;
  }
  .jdc-rwd .help-search-v1 {
    padding: 14px 10px;
    position: relative;
    z-index: 10;
    background: #fff;
  }
  .jdc-rwd .help-search-v1 .help-sw .input-group.jdc-input-group .form-control {
    height: 32px;
  }
  .jdc-rwd .help-search-v1 .help-sw .input-group.jdc-input-group .btn-search {
    height: 32px;
    line-height: 32px;
  }
  .jdc-rwd .help-inlst li {
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    margin-bottom: 10px;
    margin-right: 0;
  }
  .jdc-rwd .help-inlst li:hover {
    box-shadow: none;
  }
  .jdc-rwd .help-inlst li:hover h3 {
    color: #333;
  }
  .jdc-rwd .help-inlst h3 {
    font-size: 14px;
    margin-bottom: 4px;
  }
  .jdc-rwd .help-serlst p {
    font-size: 12px;
  }
  .jdc-rwd .help-serlst {
    padding: 0 10px 30px;
  }
  .jdc-rwd .help-search-style2 {
    background: #f6f8ff;
  }
  .jdc-rwd .search-tab-hd {
    height: 40px;
    border-bottom: 1px solid #f3f5fb;
    margin-bottom: 10px;
  }
  .jdc-rwd .search-tab-hd .search-classify {
    height: 41px;
    padding-top: 0;
  }
  .jdc-rwd .search-tab-hd .search-classify li {
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    padding: 0 10px;
  }
  .jdc-rwd .search-tab-hd .search-classify li:after {
    height: 1px;
    bottom: -1px;
  }
  .jdc-rwd .jdc-product-banner-search {
    padding: 0 10px;
    background: url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/jdc-help-search/i/search-m-bg.jpg)
      center 40px no-repeat;
    background-size: cover;
  }
  .jdc-rwd .jdc-product-banner-search .jdc-product-banner-ct {
    padding-bottom: 16px;
  }
  .jdc-rwd .jdc-product-banner-search .jdc-product-banner-tit {
    padding: 8px 0;
    height: auto;
    line-height: 30px;
  }
  .jdc-rwd .jdc-product-banner-search .jdc-product-banner-tit strong {
    font-size: 16px;
  }
  .jdc-rwd .jdc-product-banner-search .jdc-banner-btn {
    background: #3171ff;
    -webkit-filter: none;
    filter: none;
  }
  .jdc-rwd .jdc-product-banner-search .jdc-product-tag {
    margin-top: 6px;
  }
  .jdc-rwd .jdc-product-banner-search .jdc-product-banner-txt {
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    margin-bottom: 10px;
    max-height: 64px;
    line-height: 16px;
    font-size: 12px;
    overflow: hidden;
  }
  .jdc-rwd .jdc-product-banner-search .jdc-banner-link {
    margin-left: 10px;
    font-size: 12px;
  }
  .jdc-rwd .jdc-banner-event-link-search {
    padding: 10px 0;
    height: auto;
    line-height: 26px;
    font-size: 12px;
  }
  .jdc-rwd .jdc-banner-event-link-search .event-link-text {
    max-width: 90px;
    font-size: 12px;
    color: #666;
  }
  .jdc-rwd .jdc-banner-event-link-search ul {
    width: 100%;
  }
  .jdc-rwd .jdc-banner-event-link-search li {
    max-width: 100%;
    width: 100%;
    height: 26px;
    border-right: 0 none;
  }
  .jdc-rwd .jdc-banner-event-link-search li a {
    padding-left: 0;
    color: #3171ff;
  }
  .jdc-rwd .jdc-banner-event-link-search li a i {
    font-size: 14px;
  }
}
</style>
<style>
/*隐藏移动端关键词*/
@media (max-width: 768px) {
  .search-hotwords {
    display: none;
  }
}
.el-loading-spinner {
  top: 200px
}
.el-loading-mask {
  background-color: rgba(255,255,255,.3);
}
</style>

