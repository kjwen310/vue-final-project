(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4aa0ab12"],{"1dde":function(t,e,a){var r=a("d039"),s=a("b622"),o=a("2d00"),i=s("species");t.exports=function(t){return o>=51||!r((function(){var e=[],a=e.constructor={};return a[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"2d79":function(t,e,a){"use strict";var r=a("3206"),s=a.n(r);s.a},3206:function(t,e,a){},8418:function(t,e,a){"use strict";var r=a("c04e"),s=a("9bf2"),o=a("5c6c");t.exports=function(t,e,a){var i=r(e);i in t?s.f(t,i,o(0,a)):t[i]=a}},"99af":function(t,e,a){"use strict";var r=a("23e7"),s=a("d039"),o=a("e8b5"),i=a("861d"),n=a("7b0b"),l=a("50c4"),c=a("8418"),d=a("65f0"),u=a("1dde"),m=a("b622"),v=a("2d00"),f=m("isConcatSpreadable"),p=9007199254740991,_="Maximum allowed index exceeded",b=v>=51||!s((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),C=u("concat"),g=function(t){if(!i(t))return!1;var e=t[f];return void 0!==e?!!e:o(t)},h=!b||!C;r({target:"Array",proto:!0,forced:h},{concat:function(t){var e,a,r,s,o,i=n(this),u=d(i,0),m=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?i:arguments[e],g(o)){if(s=l(o.length),m+s>p)throw TypeError(_);for(a=0;a<s;a++,m++)a in o&&c(u,m,o[a])}else{if(m>=p)throw TypeError(_);c(u,m++,o)}return u.length=m,u}})},e90b:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$router.push("/shop/home")}}},[t._v("首頁")])]),a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$router.push("/cart/cartDetail")}}},[t._v("購物車")])]),a("li",{staticClass:"breadcrumb-item active"},[t._v("填寫資料")])])]),a("div",{staticClass:"row d-flex justify-content-center bg-light"},[a("div",{staticClass:"col-md-4 order-info py-3"},[a("div",{staticClass:"card text-left"},[a("h3",{staticClass:"card-header"},[t._v("訂單說明")]),a("div",{staticClass:"card-body"},[a("div",{staticClass:"d-flex mb-3"},[a("div",{staticClass:"card-text mr-auto"},[t._v("數量")]),a("div",{staticClass:"card-text"},[t._v(t._s(t.amount)+" 件")])]),a("div",{staticClass:"d-flex mb-4"},[a("div",{staticClass:"card-text mr-auto"},[t._v("總計")]),a("span",{staticClass:"price-style"},[t._v("NT."+t._s(t.total))])]),a("hr",{staticClass:"mb-4"}),t._m(0),t._m(1)])])]),a("div",{staticClass:"col-lg-6 col-md-8 py-3"},[a("div",{staticClass:"form text-left py-3 px-1"},[a("validation-observer",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.invalid;return[a("form",{staticClass:"px-3",on:{submit:function(e){return e.preventDefault(),t.createOrder(e)}}},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors,s=e.classes;return[a("label",{attrs:{for:"userName"}},[t._v("姓名")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:s,attrs:{type:"text",name:"姓名",id:"userName",placeholder:"請輸入您的姓名"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),r[0]?a("span",{staticClass:"text-danger"},[t._v(t._s(r[0]))]):t._e()]}}],null,!0)})],1),a("div",{staticClass:"form-group col-md-6"},[a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors,s=e.classes;return[a("label",{attrs:{for:"email"}},[t._v("E-mail")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:s,attrs:{type:"email",id:"email",placeholder:"請輸入您的E-mail"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),r[0]?a("span",{staticClass:"text-danger"},[t._v(t._s(r[0]))]):t._e()]}}],null,!0)})],1)]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md"},[a("label",{attrs:{for:"payment"}},[t._v("付款方式")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.payment,expression:"form.payment"}],staticClass:"form-control",attrs:{id:"payment",required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"payment",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",disabled:""}},[t._v("請選擇付款方式")]),a("option",{attrs:{value:"WebATM"}},[t._v("WebATM")]),a("option",{attrs:{value:"ATM"}},[t._v("ATM")]),a("option",{attrs:{value:"CVS"}},[t._v("CVS")]),a("option",{attrs:{value:"Barcode"}},[t._v("Barcode")]),a("option",{attrs:{value:"Credit"}},[t._v("Credit")]),a("option",{attrs:{value:"ApplePay"}},[t._v("ApplePay")]),a("option",{attrs:{value:"GooglePay"}},[t._v("GooglePay")])])]),a("div",{staticClass:"form-group col-md"},[a("validation-provider",{attrs:{rules:"required|min:10"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors,s=e.classes;return[a("label",{attrs:{for:"tel"}},[t._v("電話")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tel,expression:"form.tel"}],staticClass:"form-control",class:s,attrs:{type:"tel",name:"電話",id:"tel",placeholder:"請輸入您的電話"},domProps:{value:t.form.tel},on:{input:function(e){e.target.composing||t.$set(t.form,"tel",e.target.value)}}}),r[0]?a("span",{staticClass:"text-danger"},[t._v(t._s(r[0]))]):t._e()]}}],null,!0)})],1)]),a("div",{staticClass:"form-group"},[a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors,s=e.classes;return[a("label",{attrs:{for:"address"}},[t._v("通訊地址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"form-control",class:s,attrs:{type:"text",name:"地址",id:"address",placeholder:"請輸入您的地址"},domProps:{value:t.form.address},on:{input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value)}}}),r[0]?a("span",{staticClass:"text-danger"},[t._v(t._s(r[0]))]):t._e()]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"message"}},[t._v("留言")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{id:"message",cols:"30",rows:"5",placeholder:"有什麼想和我們說的嗎？"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),a("div",{staticClass:"text-center mb-5"},[a("button",{staticClass:"btn btn-outline-info",attrs:{type:"button"},on:{click:function(e){return t.$router.push("shop/products/clothes")}}},[t._v("取消")]),a("button",{staticClass:"btn btn-primary text-white ml-3",attrs:{type:"submit",disabled:r}},[t._v("送出訂單")])])])]}}])})],1)])])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-3"},[a("h5",{staticClass:"card-text"},[t._v("商品配送須知")]),a("p",{staticClass:"card-text-secondary"},[t._v(" 配送時間約 3 ~ 5 工作天，配送範圍限於台北市、新北市、基隆市、桃園市、新竹市、台中市、彰化縣、嘉義縣、嘉義市、台南市、高雄市、屏東縣、宜蘭縣、花蓮縣，敬請見諒。 ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-3"},[a("h5",{staticClass:"card-text"},[t._v("退換貨資訊")]),a("p",{staticClass:"card-text-secondary"},[t._v(" 本商品為二手衣物，恕不提供鑑賞期。但若加入為會員，每月可享有 5 件商品退換貨服務。 ")])])}],o=(a("99af"),{data:function(){return{form:{name:"",email:"",tel:"",address:"",payment:"",message:""},total:0,amount:0,isLoading:!1}},methods:{createOrder:function(){var t=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/api/").concat("61d0f120-1ac2-427c-9a10-878a710b2b57","/ec/orders");this.$http.post(e,this.form).then((function(e){e.data.data.id&&t.$router.push({name:"CheckOut",params:{orderId:e.data.data.id}}),t.isLoading=!1})).catch((function(){t.isLoading=!1}))}},created:function(){this.total=this.$route.params.total,this.amount=this.$route.params.amount}}),i=o,n=(a("2d79"),a("2877")),l=Object(n["a"])(i,r,s,!1,null,"5c04c8fc",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-4aa0ab12.3b4d4a6c.js.map