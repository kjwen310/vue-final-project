(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ce63904"],{"0ce2":function(t,a,e){"use strict";var i=e("e2c4"),s=e.n(i);s.a},1799:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"my-3"},[e("nav",{attrs:{"aria-label":"navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.emitPages(t.pages.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(a,i){return e("li",{key:i,staticClass:"page-item",class:{active:a===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.emitPages(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.emitPages(t.pages.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},s=[],n={props:{pages:{type:Object,default:function(){return{}}}},data:function(){return{}},methods:{emitPages:function(t){this.$emit("emitPages",t)}}},c=n,r=e("2877"),o=Object(r["a"])(c,i,s,!1,null,null,null);a["a"]=o.exports},b06d:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("table",{staticClass:"table"},[t._m(0),t.orders.length?e("tbody",t._l(t.orders,(function(a,i){return e("tr",{key:i,class:{"text-secondary":!a.is_paid}},[e("td",[t._v(t._s(a.created.datetime))]),e("td",[e("ul",{staticClass:"list-unstyled"},t._l(a.products,(function(a,i){return e("li",{key:i},[t._v(" "+t._s(a.product.title)+" 數量："+t._s(a.quantity)+" "+t._s(a.product.unit)+" ")])})),0)]),e("td",[t._v(t._s(a.payment))]),e("td",{staticClass:"text-right"},[t._v(t._s(a.amount))]),e("td",[e("div",{staticClass:"custom-control custom-switch"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.paid,expression:"item.paid"}],staticClass:"custom-control-input",attrs:{id:a.id,type:"checkbox"},domProps:{checked:Array.isArray(a.paid)?t._i(a.paid,null)>-1:a.paid},on:{change:[function(e){var i=a.paid,s=e.target,n=!!s.checked;if(Array.isArray(i)){var c=null,r=t._i(i,c);s.checked?r<0&&t.$set(a,"paid",i.concat([c])):r>-1&&t.$set(a,"paid",i.slice(0,r).concat(i.slice(r+1)))}else t.$set(a,"paid",n)},function(e){return t.setOrderPaid(a)}]}}),e("label",{staticClass:"custom-control-label",attrs:{for:a.id}},[a.paid?e("strong",{staticClass:"text-paid"},[t._v("已付款")]):e("span",{staticClass:"text-muted"},[t._v("尚未付款")])])])])])})),0):t._e()]),e("pagination",{attrs:{pages:t.pagination},on:{emitPages:t.getOrders}})],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("下單時間")]),e("th",[t._v("購買商品")]),e("th",[t._v("付款方式")]),e("th",[t._v("應付金額")]),e("th",[t._v("是否付款")])])])}],n=(e("99af"),e("1799")),c={components:{pagination:n["a"]},data:function(){return{orders:{user:{}},isNew:!1,pagination:{},isLoading:!1,uuid:"61d0f120-1ac2-427c-9a10-878a710b2b57",apiPath:"https://course-ec-api.hexschool.io/api/"}},created:function(){this.getOrders()},methods:{getOrders:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var e="".concat(this.apiPath).concat(this.uuid,"/admin/ec/orders?page=").concat(a);this.$http.get(e).then((function(a){t.orders=a.data.data,t.pagination=a.data.meta.pagination,t.isLoading=!1})).catch((function(a){t.isLoading=!1,console.log(a)}))},setOrderPaid:function(t){var a=this,e="".concat(this.apiPath).concat(this.uuid,"/admin/ec/orders/").concat(t.id,"/paid");t.paid||(e="".concat(this.apiPath).concat(this.uuid,"/admin/ec/orders/").concat(t.id,"/unpaid")),this.$http.patch(e,t.id).then((function(){a.getOrders()}))}}},r=c,o=(e("0ce2"),e("2877")),d=Object(o["a"])(r,i,s,!1,null,"5fd158b4",null);a["default"]=d.exports},e2c4:function(t,a,e){}}]);
//# sourceMappingURL=chunk-7ce63904.4b749e47.js.map