(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c4d68"],{"3d12":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}}),a("div",{staticClass:"container"},[a("main",{staticClass:"carts"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row d-flex justify-content-center"},[a("div",{staticClass:"col-md-9"},[t._m(0),a("div",{staticClass:"h2 text-center py-3"},[t._v("選購的產品")]),a("table",{staticClass:"table"},[t._m(1),a("tbody",[t._l(t.order.products,function(s){return a("tr",{key:s.title},[a("td",[a("img",{attrs:{src:s.product.imageUrl,alt:"",width:"100",height:"80"}})]),a("td",[t._v(t._s(s.product.title))]),a("td",{staticClass:"text-left"},[t._v(t._s(s.qty))]),a("td",{staticClass:"text-left"},[t._v(t._s(s.size))]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(s.product.price)))])])}),a("tr",[a("td",{staticClass:"text-right",attrs:{colspan:"4"}},[t._v("總計")]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(t.order.total)))])])],2)]),a("div",{staticClass:"h2 text-center py-3"},[t._v("購買者資料")]),a("table",{staticClass:"table"},[a("tr",[a("th",{attrs:{width:"150"}},[t._v("Email")]),a("td",[t._v(t._s(t.order.user.email))])]),a("tr",[a("th",{attrs:{width:"150"}},[t._v("姓名")]),a("td",[t._v(t._s(t.order.user.name))])]),a("tr",[a("th",{attrs:{width:"150"}},[t._v("收件人電話")]),a("td",[t._v(t._s(t.order.user.tel))])]),a("tr",[a("th",{attrs:{width:"150"}},[t._v("收件人地址")]),a("td",[t._v(t._s(t.order.user.address))])]),a("tr",[a("th",{attrs:{width:"150"}},[t._v("付款狀態")]),t.order.is_paid?a("td",{staticClass:"text-success"},[t._v("付款完成")]):t._e(),t.order.is_paid?t._e():a("td",{staticClass:"text-success"},[t._v("尚未付款")])])]),a("div",{staticClass:"text-right py-5"},[a("button",{staticClass:"btn btn-primary",staticStyle:{width:"200px"},on:{click:t.payorder}},[t._v("資料確認無誤，付款去")])])])])])])])],1)},r=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"step d-flex align-items-center"},[a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"box box1 text-center active"},[t._v("填寫訂單資料")])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"box box2 text-center active"},[t._v("金流付款")])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"box box3 text-center"},[t._v("完成")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("tr",[a("th",{attrs:{width:"100"}}),a("th",{staticClass:"text-left",attrs:{width:""}},[t._v("品名")]),a("th",{staticClass:"text-left",attrs:{width:"70"}},[t._v("數量")]),a("th",{staticClass:"text-left",attrs:{width:"70"}},[t._v("尺寸")]),a("th",{attrs:{width:"140"}},[t._v("價格")])])])}],i=(a("1157"),{data:function(){return{isLoading:!1,getcartproduct:{},order:{user:{}},orderId:""}},methods:{getorder:function(){var t=this,s="".concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_COUSTOMPATH,"/order/").concat(t.orderId);t.isLoading=!0,this.$http.get(s).then(function(s){t.order=s.data.order,t.isLoading=!1})},payorder:function(){var t=this,s=this,a="".concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_COUSTOMPATH,"/pay/").concat(s.orderId);s.isLoading=!0,this.$http.post(a).then(function(a){a.data.success&&(console.log(a.data),s.$router.push("/pay/".concat(s.orderId)),t.getorder(),s.isLoading=!1)})}},created:function(){this.orderId=this.$route.params.orderId,this.getorder()}}),c=i,d=a("2877"),o=Object(d["a"])(c,e,r,!1,null,null,null);s["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0c4d68.2b21e410.js.map