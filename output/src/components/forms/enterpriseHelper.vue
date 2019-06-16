<template>
  <div>
    <div class="jdc-reg-form">
      <div class="reg">
        <div class="reg-hd">
          <h3>联系我们</h3>
          <div class="reg-qrcode">
            <qr-gen :content="currentUrl"></qr-gen>
            <!-- <img
              src="//static-portal.jdcloud.com/jcloud/jc/2.0.0/widget/jdc-side-panel/i/qrCode.jpg"
              width="90"
              height="90"
            > -->
          </div>
        </div>
        <div class="reg-bd">
          <el-form :model="form" :rules="rules" ref="ruleForm" class="form-group demo-ruleForm">
            <el-form-item class="form-item" label="姓名:" prop="requestorName">
              <el-input placeholder="请输入姓名" :maxlength="100" v-model.trim="form.requestorName"></el-input>
            </el-form-item>

            <el-form-item class="form-item" label="邮箱:" prop="email">
              <el-input placeholder="请输入邮箱" :maxlength="100" v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item class="form-item" label="手机:" prop="phone">
              <el-input :maxlength="11" placeholder="请输入联系人手机号" v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item class="form-item" label="公司:" prop="company">
              <el-input placeholder="请输入公司" :maxlength="100" v-model.trim="form.company"></el-input>
            </el-form-item>

            <el-form-item class="form-item" label="行业:" prop="industry">
              <el-select v-model="form.industry" placeholder="请选择">
                <el-option v-for="item in industryList" :key="item" :label="item" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="form-item" label="职务:" prop="jobTitle">
              <el-select v-model="form.jobTitle" placeholder="请选择">
                <el-option v-for="item in titleList" :key="item" :label="item" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="form-item" label="是否为系统集成商:" prop="systemIntegrator">
              <el-select v-model="form.systemIntegrator" placeholder="请选择">
                <el-option key="是" label="是" value="是"></el-option>
                <el-option key="否" label="否" value="否"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="reg-ft mt30">
              <el-button
                class="reg-btn btn-confirm"
                type="primary"
                @click="submitForm('ruleForm')"
                :clstag="`Partner|keycount|MiddleContentSec|Partner_Recruit_Submit`"
              >确定</el-button>
              <el-button
                class="reg-btn btn-cancel"
                @click="resetForm()"
                :clstag="`Partner|keycount|MiddleContentSec|Partner_Recruit_Reset`"
              >重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>

    <!-- 提示弹窗 -->
    <div class="pop-tips" style="display:none">
      <div class="layer-info">
        <div class="layer-info-tips">申请已提交，我们会尽快与您联系！</div>
      </div>
    </div>
  </div>
</template>
<script>
import fun from "fun";
import apiUrl from "api";
export default {
  name: "forms-enterprise-helper",
  data() {
    // 手机号校验
    var checkMoble = (rule, value, callback) => {
      if (!value) {
        return callback("请输入联系人手机号");
      }
      setTimeout(() => {
        var reg = fun.commomfun.getReg("mobile");
        if (reg != undefined && reg.test(value) == false) {
          callback("手机号格式不正确");
        } else {
          callback();
        }
      }, 300);
    };
    // 邮箱校验
    var checkEmail = (rule, value, callback) => {
      var reg = fun.commomfun.getReg("email");
      if (!value) {
        return callback("请输入联系人邮箱");
      }
      setTimeout(() => {
        if (reg != undefined && reg.test(value) == false) {
          callback("邮箱格式不正确");
        } else {
          callback();
        }
      }, 300);
    };

    return {
      industryList: [
        "IT服务（系统/数据/维护）",
        "通信/电信/网络设备",
        "互联网/电子商务",
        "基金/证券/期货/投资",
        "广告",
        "零售/批发",
        "加工制造（原料加工）",
        "物流/仓储",
        "医疗/医疗服务护理/美容/保健卫生服务",
        "教育/培训/院校",
        "政府/公共事业/非盈利机构"
      ],
      titleList: [
        "董事长/总裁/总经理",
        "技术总监",
        "技术经理",
        "CIO/CTO",
        "CFO",
        "CXO",
        "业务总监/经理",
        "政府官员",
        "个人开发者",
        "老师",
        "学生",
        "其他"
      ],
      form: {
        requestorName: "",
        email: "",
        phone: "",
        company: "",
        industry: "",
        jobTitle: "",
        systemIntegrator: ""
      },
      rules: {
        requestorName: [
          { required: true, message: "请输入姓名", trigger: "blur" }
        ],
        email: [{ required: true, validator: checkEmail, trigger: "blur" }],
        phone: [{ required: true, validator: checkMoble, trigger: "blur" }],
        company: [{ required: true, message: "请输入公司", trigger: "blur" }],
        systemIntegrator: [
          { required: true, message: "请选择是否为系统集成商", trigger: "blur" }
        ]
      }
    };
  },
  computed:{
    currentUrl(){
      return window.location.href
    },
    getAnalysisData(){
      return {
        pageTitle:document.title,
        pageURL:window.location.href,
        referrerURL:sessionStorage.getItem("referrer"),
        referrerDomain:sessionStorage.getItem("referrerDomain"),
        campaignCode:sessionStorage.getItem("campaignCode"),
        deviceType:this.checkDevice() ? "2" : "1"
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.postForm();
        } else {
          return false;
        }
      });
    },
    postForm() {
      let formParam = {
        formDefId: 13,
        formData: Object.assign(this.form, this.getAnalysisData)

      }
      this.$http
        .post(apiUrl.api.subscriptionSubmit, JSON.stringify(formParam), { emulateJSON: true })
        .then(
          res => {
            if (res.body.code === 0) {
              this.$message({ type: "success", message: "提交成功" });
              this.resetForm();
            } else {
              this.$message(res.body.message || "网络错误请稍后再试");
            }
          },
          err => {
            this.$message("提交失败,请稍后再试");
          }
        );
    },
    resetForm() {
      this.$refs["ruleForm"].resetFields();
    },
    open() {
      let _layer = this.$layer;
      _layer.open({
        type: 1,
        title: "提示",
        area: "460px",
        btn: ["确定"],
        content: ".pop-tips",
        shadeClose: true,
        btn1: function(index, layero) {
          _layer.close(index);
        }
      });
    }
  }
};
</script>
<style>
/* http://static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/m-reg-v2/m-reg-v2.css */
.reg {
  margin: 0 auto;
  padding-bottom: 50px;
  width: 1125px;
}
.reg-hd {
  position: relative;
  padding: 40px 0;
  text-align: center;
  font-size: 0;
}
.reg-hd .logo,
.reg-hd h3 {
  position: relative;
  z-index: 10;
  display: inline-block;
  *display: inline;
  *zoom: 1;
  vertical-align: top;
  font-size: 24px;
  color: #333;
}
.reg-hd h3 {
  margin-top: 17px;
  line-height: 28px;
  font-weight: 400;
  background: #fff;
}
.reg-bd {
  margin: 0 auto;
  padding-top: 20px;
  width: 1125px;
}
.reg-bd .reg-form {
  padding-bottom: 30px;
}
.reg-bd .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #3171ff;
}
.reg-bd .el-checkbox__inner {
  border-color: #dbdbdb;
  border-radius: 2px;
}
.reg-bd .el-checkbox__inner:hover {
  border-color: #3171ff;
}
.reg-bd .el-checkbox__label {
  font-size: 14px;
  color: #333;
}
.reg-bd .el-form-item.is-error .el-input__inner,
.reg-bd .el-form-item.is-error .el-textarea__inner {
  border-color: #ff4949;
}
.reg-bd .el-select {
  width: 100%;
}
.el-select:hover .el-input__inner {
  border-color: #dbdbdb;
}
.el-select-dropdown__item.hover,
.el-select-dropdown__item.selected,
.el-select-dropdown__item.selected.hover,
.el-select-dropdown__item:hover {
  color: #3171ff;
  background-color: transparent;
}
.form-item {
  position: relative;
  font-size: 0;
}
.form-item input::-webkit-contacts-auto-fill-button {
  visibility: hidden;
  display: none !important;
  pointer-events: none;
  position: absolute;
  right: 0;
}
.form-item input[type="text"] {
  padding-left: 10px;
  width: 360px;
  height: 36px;
  color: #333;
  border: 1px solid #dbdbdb;
  border-radius: 2px;
}
.form-item input[type="text"]:focus {
  border-color: #3171ff;
}
.form-item input[type="text"]:-ms-input-placeholder {
  color: #999;
}
.form-item input[type="text"]::-webkit-input-placeholder {
  color: #999;
}
.form-item input[type="text"]::placeholder {
  color: #999;
}
.form-item textarea {
  padding: 5px 10px;
  width: 360px;
  height: 88px;
  line-height: 24px;
  color: #333;
  border: 1px solid #dbdbdb;
  border-radius: 2px;
}
.form-item textarea:hover {
  border-color: #dbdbdb;
}
.form-item textarea:focus {
  border-color: #3171ff;
}
.form-item textarea:-ms-input-placeholder {
  color: #999;
}
.form-item textarea::-webkit-input-placeholder {
  color: #999;
}
.form-item textarea::placeholder {
  color: #999;
}
.form-item .form-text {
  clear: both;
  margin-left: 10px;
  line-height: 36px;
}
.form-item + .form-item {
  padding-top: 30px;
}
.form-item.pt0 {
  padding-top: 0;
}
.form-item > * {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  vertical-align: top;
  font-size: 14px;
}
.form-item.form-item-err .err-text {
  display: inline-block;
  *display: inline;
  *zoom: 1;
}
.form-item.form-item-err input[type="text"] {
  border-color: #e1504a;
}
.form-item.normal-lineHeight label {
  line-height: 1.5;
}
.form-item.normal-lineHeight p {
  margin-top: 2px;
}
.checkbox-v1 {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  vertical-align: middle;
  margin-right: 5px;
  width: 14px;
  height: 14px;
  background: url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/m-reg-v2/i/icon-checkbox.png?__sprite)
    center no-repeat;
  cursor: pointer;
}
.checkbox-v1.checked {
  background: url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/m-reg-v2/i/icon-checkbox-checked.png?__sprite)
    center no-repeat;
}
.radio-v1 {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  vertical-align: middle;
  margin-right: 5px;
  width: 14px;
  height: 14px;
  background: url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/m-reg-v2/i/icon-radio.png?__sprite)
    center no-repeat;
  cursor: pointer;
}
.radio-v1.checked {
  background: url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/m-reg-v2/i/icon-radio-checked.png?__sprite)
    center no-repeat;
}
.reg-ft {
  padding: 50px;
  text-align: center;
  font-size: 0;
}
.reg-ft .reg-btn {
  display: inline-block;
  text-align: center;
  padding: 6px 10px;
  min-width: 100px;
  line-height: 24px;
  border-radius: 17px;
  font-size: 14px;
  color: #fff;
  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  transition: all 0.25s ease;
}
.reg-ft .reg-btn + .reg-btn {
  margin-left: 30px;
}
.reg-ft .reg-btn:hover {
  box-shadow: 0 0 10px 0 rgba(3, 0, 76, 0.3);
}
.reg-ft .btn-confirm {
  background: #3171ff;
}
.reg-ft .btn-confirm:hover {
  color: #fff;
}
.reg-ft .btn-cancel {
  border: 1px solid #3171ff;
  background: #fff;
  color: #3171ff;
  padding: 5px 9px;
}
.reg-apply {
  padding-top: 50px;
  text-align: center;
}
.reg-apply .reg-apply-text {
  padding: 24px 0;
  font-size: 16px;
  color: #333;
}
.reg-apply .reg-apply-text-v1 {
  line-height: 26px;
  font-size: 14px;
  color: #666;
}
.icon-complete {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  vertical-align: top;
  width: 40px;
  height: 40px;
  background: url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/m-reg-v2/i/complete.png?__sprite)
    center no-repeat;
}
.layui-layer-iframe .layui-layer-btn,
.layui-layer-page .layui-layer-btn {
  display: none;
}
.el-input input {
  padding-left: 15px;
  width: 393px;
  height: 48px;
  color: #333;
  border: 1px solid #d9e6f3;
}
.el-form-item {
  margin-bottom: 0;
}
.form-item .el-checkbox {
  margin-left: 0;
  margin-right: 30px;
}
.form-item .el-form-item__label {
  position: relative;
  padding: 0 10px;
  width: 38%;
  margin-left: 0;
  min-width: 70px;
  line-height: 36px;
  color: #333;
  font-size: 16px;
  text-align: right;
}
.el-checkbox-group {
  width: 360px;
}
.el-checkbox + .el-checkbox {
  margin-left: 0;
}
.reg .form-group {
  margin-bottom: 0;
}
.jdc-reg-form .reg-hd .logo {
  margin-top: 13px;
  text-indent: 0;
  width: auto;
  background: 0 0;
}
.reg-hd .reg-qrcode {
  position: absolute;
  top: 20px;
  right: 0;
  padding: 5px;
  border: 1px solid #ededed;
  background: #fff;
  z-index: 1;
}
.reg-bd .reg-form.pb50 {
  padding-bottom: 50px;
}
@media (max-width: 1200px) {
  .jdc-rwd .jdc-reg-form {
    padding: 0 20px;
  }
  .jdc-rwd .reg,
  .jdc-rwd .reg-bd {
    width: auto;
  }
}
@media (max-width: 768px) {
  .jdc-rwd .form-item > * {
    display: block;
    font-size: 12px;
  }
  .jdc-rwd .form-item + .form-item {
    padding-top: 15px;
  }
  .jdc-rwd .form-item .el-form-item__label {
    margin-left: 0;
    width: auto;
    min-width: 0;
    line-height: 24px;
    padding: 0;
    font-size: 12px;
  }
  .jdc-rwd .form-item input[type="text"] {
    width: 100%;
    height: 40px;
    padding-left: 10px;
    border-radius: 0;
    font-size: 12px;
  }
  .jdc-rwd .form-item textarea {
    width: 100%;
    border-radius: 0;
    font-size: 12px;
  }
  .jdc-rwd .el-form-item__error {
    padding-top: 1px;
  }
  .jdc-rwd .el-checkbox-group {
    width: auto;
    height: auto;
    clear: both;
  }
  .jdc-rwd .el-checkbox__label {
    font-size: 12px;
  }
  .jdc-rwd .form-item label {
    line-height: 20px;
  }
  .jdc-rwd .reg {
    padding-bottom: 20px;
  }
  .jdc-rwd .reg-ft {
    margin-top: 10px;
    padding: 30px 0;
    background: #fff;
    border-top: 0;
  }
  .jdc-rwd .reg-ft .reg-btn {
    width: 100%;
    height: 40px;
    border-radius: 0;
  }
  .jdc-rwd .reg-ft .btn-cancel {
    margin-left: 0;
    margin-top: 10px;
  }
  .jdc-rwd .reg-hd {
    padding: 20px 0 0;
  }
  .jdc-rwd .reg-bd {
    padding-top: 16px;
    border: 0;
    box-shadow: none;
  }
  .jdc-rwd .reg-hd .logo,
  .jdc-rwd .reg-hd h3 {
    font-size: 16px;
    margin-top: 0;
    line-height: 24px;
    padding: 0 15px;
  }
  .jdc-rwd .reg-hd .reg-qrcode {
    display: none;
  }
}
</style>

