(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d5810e8"],{"0bf6":function(t,a,s){"use strict";var i=s("98d2"),c=s.n(i);c.a},"3b85":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),s("nav",{attrs:{"aria-label":"breadcrumb"}},[s("ol",{staticClass:"breadcrumb"},[s("li",{staticClass:"breadcrumb-item"},[s("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.$router.push("/")}}},[t._v("首頁")])]),s("li",{staticClass:"breadcrumb-item active"},[t._v(" 購物車 ")])])]),s("div",{staticClass:"mb-5"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6 col-md-8 cart-list bg-light py-3"},[0===t.cart.length?s("div",{staticClass:"card p-2"},[t._m(0)]):t._l(t.cart,(function(a,i){return s("div",{key:i,staticClass:"card mb-2 px-2 pt-2 pb-4"},[s("button",{staticClass:"close btn-block text-right p-0",attrs:{type:"button","aria-label":"Close"},on:{click:function(s){return t.deleteCartProduct(a.product.id)}}},[s("span",{staticClass:"mr-1",attrs:{"aria-hidden":"true"}},[t._v("×")])]),s("div",{staticClass:"card-body d-flex py-0"},[s("div",{staticClass:"mr-5"},[s("a",{attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.getDetail(a.product.id)}}},[s("img",{staticClass:"rounded d-block",attrs:{src:a.product.imageUrl[0],alt:a.product.title}})])]),s("div",{staticClass:"text-left py-2"},[s("div",{staticClass:"d-flex"},[s("h5",{staticClass:"mr-auto"},[t._v(t._s(a.product.title))]),s("span",[t._v(t._s("NT."+a.product.price))])]),s("ul",[s("li",{staticClass:"card-text"},[t._v(t._s("- 數量：1"+a.product.unit))]),s("li",{staticClass:"card-text"},[t._v(t._s("- 內容："+a.product.content))])])])])])})),0!==t.cart.length?s("div",{staticClass:"text-right my-4 mr-2"},[s("a",{staticClass:"delete-all",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.deleteAllCart(a)}}},[t._v("刪除全部商品")])]):t._e()],2),s("div",{staticClass:"col-md-4 cart-info bg-light py-3"},[s("div",{staticClass:"card text-left"},[s("h3",{staticClass:"card-header"},[t._v("購物車資訊")]),s("div",{staticClass:"card-body"},[s("div",{staticClass:"d-flex mb-3"},[s("div",{staticClass:"card-text mr-auto"},[t._v("商品數量")]),s("div",{staticClass:"card-text"},[t._v(t._s(t.cart.length+"件"))])]),s("div",{staticClass:"d-flex mb-3"},[s("div",{staticClass:"card-text mr-auto"},[t._v("金額小計")]),s("div",{staticClass:"card-text"},[t._v(t._s("NT."+t.cartTotal))])]),t._m(1),s("hr"),s("div",{staticClass:"d-flex mb-5"},[s("div",{staticClass:"card-text-total mr-auto"},[t._v("總計")]),0===t.cart.length?s("div",{staticClass:"price-style"},[t._v("NT.0")]):s("div",{staticClass:"price-style"},[t._v(t._s("NT."+t.cartTotal))])]),s("button",{staticClass:"btn btn-primary btn-block text-white",class:{disabled:0===t.cart.length},on:{click:t.switchPath}},[t._v("前往結帳")])])])])])])],1)},c=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card-body d-flex align-items-center py-0"},[s("div",{staticClass:"mr-5"},[s("img",{staticClass:"rounded d-block m-4",attrs:{src:"https://hexschool-api.s3.us-west-2.amazonaws.com/custom/BEsLDtsR4xR9fSivNCvRwFQz87a4kJIWjVVHUN3kt83cnnJhAn71b7w59KbS7SNrkYVcSo1EDDc0BqOvpiDipAcuGqLBTyRYCpoW6ejj1VEpXk6q8yqIN3rDsCu2gjiT.png",alt:"default picture"}})]),s("div",{staticClass:"text-left py-2"},[s("div",{staticClass:"d-flex"},[s("h5",[t._v("購物車內沒有商品！")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"d-flex mb-3"},[s("div",{staticClass:"card-text mr-auto"},[t._v("運費小計")]),s("div",{staticClass:"card-text"},[t._v("NT.0")])])}],e=(s("99af"),s("4160"),s("159b"),{data:function(){return{cart:[],cartTotal:0,isLoading:!1,uuid:"61d0f120-1ac2-427c-9a10-878a710b2b57",apiPath:"https://course-ec-api.hexschool.io/api/"}},methods:{getCart:function(){var t=this;this.isLoading=!0;var a="".concat(this.apiPath).concat(this.uuid,"/ec/shopping");this.$http.get(a).then((function(a){t.cartTotal=0,t.cart=a.data.data,t.cart.forEach((function(a){t.cartTotal+=a.product.price})),t.isLoading=!1})).catch((function(){t.isLoading=!1}))},deleteCartProduct:function(t){var a=this;this.isLoading=!0;var s="".concat(this.apiPath).concat(this.uuid,"/ec/shopping/").concat(t);this.$http.delete(s).then((function(){a.isLoading=!1,a.getCart()})).catch((function(){a.isLoading=!1}))},deleteAllCart:function(){var t=this,a="".concat(this.apiPath).concat(this.uuid,"/ec/shopping/all/product");this.$http.delete(a).then((function(){t.isLoading=!1,t.getCart()})).catch((function(){t.isLoading=!1}))},getDetail:function(t){this.$router.push({name:"Product",params:{id:t}})},switchPath:function(){this.$router.push({name:"Order",params:{total:this.cartTotal,amount:this.cart.length}})}},created:function(){this.getCart()}}),r=e,l=(s("0bf6"),s("2877")),n=Object(l["a"])(r,i,c,!1,null,"2617d7f2",null);a["default"]=n.exports},"98d2":function(t,a,s){}}]);
//# sourceMappingURL=chunk-7d5810e8.fa6b104d.js.map