(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ace26d3"],{"4ae0":function(t,e,a){"use strict";var s=a("b0fe"),i=a.n(s);i.a},"578a":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row mt-3 py-3 login-register mt-5 d-flex justify-content-center"},[a("div",{staticClass:"col-md-9"},[a("ul",{staticClass:"login-register-tab"},[a("li",{staticClass:"title",class:{active:"login"===t.currentpage},on:{click:function(e){t.currentpage="login"}}},[t._v("會員登入")]),a("li",{staticClass:"title",class:{active:"register"===t.currentpage},on:{click:function(e){t.currentpage="register"}}},[t._v("會員註冊")])]),a("div",{staticClass:"login-register-body"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row box-border"},[a("div",{staticClass:"col-md-7 left"},["login"===t.currentpage?a("div",{staticClass:"form form-line py-5"},[a("form",[a("div",{staticClass:"form-group"},[a("div",{staticClass:"login-data"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"mb-3 input-data",attrs:{type:"email",name:"email",id:"",placeholder:"請輸入Email地址",required:""},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}})]),t.errors.has("email")?a("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("email")))]):t._e()]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"login-data"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"mb-3 input-data is-valid",attrs:{type:"password",name:"password",placeholder:"請輸入密碼",required:""},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),t.errors.has("password")?a("span",{staticClass:"text-danger"},[t._v("請輸入密碼")]):t._e()]),a("button",{staticClass:"btn btn-primary login-btn",staticStyle:{width:"260px"},attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.signin(e)}}},[t._v("登入")])])]):t._e(),"register"===t.currentpage?a("div",{staticClass:"form form-line py-5"},["register"===t.currentpage?a("div",{staticClass:"register-data"},[a("div",{staticClass:"h3 mb-2"},[t._v("加入專屬會員")]),a("div",{staticClass:"mb-3"},[t._v("我們會將寄送簡訊至你的手機")]),a("span",{staticClass:"input-data d-flex align-items-center mb-3"},[a("label",{attrs:{for:"register-tel"}},[t._v("TW+886")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.tel,expression:"user.tel"}],staticClass:"ml-1",attrs:{type:"tel",placeholder:"請輸入手機",id:"register-tel",value:"",maxlength:"10"},domProps:{value:t.user.tel},on:{input:function(e){e.target.composing||t.$set(t.user,"tel",e.target.value)}}})])]):t._e(),"register"===t.currentpage?a("button",{staticClass:"btn btn-primary login-btn",staticStyle:{width:"260px"},attrs:{type:"button"}},[t._v("下一步")]):t._e()]):t._e()]),a("div",{staticClass:"col-md-5 right d-flex justify-content-center align-items-center"},["register"===t.currentpage?a("div",{staticClass:"right-data"},[a("i",{staticClass:"fas fa-user fa-3x"}),a("div",{staticClass:"mt-3"},[t._v("\n                    已有帳號按此\n                    "),a("a",{attrs:{href:"#login"},on:{click:function(e){t.currentpage="login"}}},[t._v("登入")])])]):t._e()])])])])])])]),a("div",{staticClass:"alert alert-primary alert-dismissible login-alert fade",attrs:{role:"alert"}},[a("div",{staticClass:"text-center",staticStyle:{}},[t._v("提示訊息!")]),a("br"),a("div",{staticClass:"text-center",staticStyle:{"background-color":"while"}},[a("span",[t._v("帳號或密碼錯誤，請重新輸入")]),a("a",{staticClass:"close-alert",attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[a("i",{staticClass:"fas fa-window-close"})])])])])},i=[],r=a("1157"),n=a.n(r);n()(document).ready(function(){n()(".close-alert").click(function(){n()(".alert").removeClass("show")})});var l={name:"App",data:function(){return{user:{username:"",password:""},currentpage:"login",tel:""}},methods:{signin:function(){var t=this,e="".concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/admin/signin"),a=this;console.log(e),this.$validator.validate().then(function(s){s&&t.$http.post(e,a.user).then(function(t){console.log(t.data),t.data.success?a.$router.push("/admin/products"):(n()(".login-alert").addClass("show"),console.log("帳號或密碼錯誤，請重新輸入"))})})}}},o=l,c=(a("4ae0"),a("2877")),u=Object(c["a"])(o,s,i,!1,null,"5b08e469",null);e["default"]=u.exports},b0fe:function(t,e,a){}}]);
//# sourceMappingURL=chunk-6ace26d3.7fd5673c.js.map