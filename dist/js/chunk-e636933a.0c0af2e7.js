(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e636933a"],{"1dde":function(t,s,a){var i=a("d039"),e=a("b622"),r=a("2d00"),o=e("species");t.exports=function(t){return r>=51||!i((function(){var s=[],a=s.constructor={};return a[o]=function(){return{foo:1}},1!==s[t](Boolean).foo}))}},"2fb8":function(t,s,a){},"4c53":function(t,s,a){"use strict";var i=a("23e7"),e=a("857a"),r=a("af03");i({target:"String",proto:!0,forced:r("sub")},{sub:function(){return e(this,"sub","","")}})},"4de4":function(t,s,a){"use strict";var i=a("23e7"),e=a("b727").filter,r=a("1dde"),o=a("ae40"),n=r("filter"),c=o("filter");i({target:"Array",proto:!0,forced:!n||!c},{filter:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}})},"5ce8":function(t,s,a){"use strict";var i=a("ab68"),e=a.n(i);e.a},8418:function(t,s,a){"use strict";var i=a("c04e"),e=a("9bf2"),r=a("5c6c");t.exports=function(t,s,a){var o=i(s);o in t?e.f(t,o,r(0,a)):t[o]=a}},"84e3":function(t,s,a){"use strict";var i=a("9b8c"),e=a.n(i);e.a},"857a":function(t,s,a){var i=a("1d80"),e=/"/g;t.exports=function(t,s,a,r){var o=String(i(t)),n="<"+s;return""!==a&&(n+=" "+a+'="'+String(r).replace(e,"&quot;")+'"'),n+">"+o+"</"+s+">"}},"99af":function(t,s,a){"use strict";var i=a("23e7"),e=a("d039"),r=a("e8b5"),o=a("861d"),n=a("7b0b"),c=a("50c4"),l=a("8418"),u=a("65f0"),d=a("1dde"),f=a("b622"),h=a("2d00"),v=f("isConcatSpreadable"),m=9007199254740991,p="Maximum allowed index exceeded",b=h>=51||!e((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),C=d("concat"),g=function(t){if(!o(t))return!1;var s=t[v];return void 0!==s?!!s:r(t)},x=!b||!C;i({target:"Array",proto:!0,forced:x},{concat:function(t){var s,a,i,e,r,o=n(this),d=u(o,0),f=0;for(s=-1,i=arguments.length;s<i;s++)if(r=-1===s?o:arguments[s],g(r)){if(e=c(r.length),f+e>m)throw TypeError(p);for(a=0;a<e;a++,f++)a in r&&l(d,f,r[a])}else{if(f>=m)throw TypeError(p);l(d,f++,r)}return d.length=f,d}})},"9b8c":function(t,s,a){},"9d1d":function(t,s,a){"use strict";var i=a("2fb8"),e=a.n(i);e.a},a3d5:function(t,s,a){"use strict";var i=a("e078"),e=a.n(i);e.a},ab68:function(t,s,a){},af03:function(t,s,a){var i=a("d039");t.exports=function(t){return i((function(){var s=""[t]('"');return s!==s.toLowerCase()||s.split('"').length>3}))}},afe5:function(t,s,a){},cc43:function(t,s,a){"use strict";var i=a("afe5"),e=a.n(i);e.a},d717:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},t._l(t.columnsData,(function(s){return a("div",{key:s.id,staticClass:"col-md-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"inner"},[a("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getColumn(s.id)}}},[a("img",{staticClass:"card-img-top",attrs:{src:s.img,alt:s.id}})])]),a("div",{staticClass:"card-body text-left px-0"},[a("div",{staticClass:"card-title"},[a("h3",{staticClass:"text-muted"},[t._v(t._s(s.title))])]),a("div",{staticClass:"card-text text-left h5"},[a("p",{staticClass:"text-muted"},[t._v(t._s(s.time))])])])])])})),0)},e=[],r={data:function(){return{columnsData:[{id:"second-hand-clothes-recycle",title:"二手衣大揭密！你家的衣服都去哪裡了？",time:"2020/08/04",img:"https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"},{id:"fashion-problem",title:"快時尚：從衣櫃到垃圾桶",time:"2020/08/25",img:"https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"},{id:"Shimokitazawa",title:"下北澤攻略！日本古著聖地",time:"2020/06/09",img:"https://images.unsplash.com/photo-1504583557080-9d04d0ba1304?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"}]}},methods:{getColumn:function(t){this.$router.push({name:"Column",params:{id:t}})}}},o=r,n=(a("a3d5"),a("2877")),c=Object(n["a"])(o,i,e,!1,null,"1361f088",null);s["a"]=c.exports},e078:function(t,s,a){},e915:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}}),t._l(t.products,(function(s){return a("div",{key:s.id,staticClass:"col-md-3 col-6 mb-3"},[a("div",{staticClass:"card"},[a("div",{staticClass:"inner"},[a("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getDetail(s.id)}}},[s.imageUrl[0]?a("img",{staticClass:"card-img-top",attrs:{src:s.imageUrl[0],alt:s.title+"產品照"}}):a("img",{staticClass:"card-img-top",attrs:{src:"https://hexschool-api.s3.us-west-2.amazonaws.com/custom/stCMCKGgvom5yjuAR3JlMHaHML7K8RaRl0ak6fIWbJGG1sgjj6AWb6ArORptKxaVrLdzggBHcMAgoS2CyN5WaXYsmSjtVOqQAtGzwyV5EKWZeJKb0rbuyKdDOjTvdNBW.png"}})]),a("button",{staticClass:"wish",attrs:{type:"button"},on:{click:function(a){return t.addToWishList(s)}}},[!0===s.isAddedToWishList?a("div",[a("i",{staticClass:"fas fa-heart text-primary"})]):a("div",[a("i",{staticClass:"far fa-heart text-muted"})])]),a("button",{staticClass:"see-more",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.getDetail(s.id)}}},[a("i",{staticClass:"fas fa-search"},[t._v(" see more")])])]),a("div",{staticClass:"card-body px-0"},[a("div",{staticClass:"card-title d-flex mb-0"},[a("div",{staticClass:"mr-auto"},[a("button",{staticClass:"p-0",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.getDetail(s.id)}}},[a("h5",{staticClass:"text-left text-muted"},[t._v(t._s(s.title))])])])]),a("div",{staticClass:"price-style card-text text-left my-0"},[a("span",{staticClass:"mr-2"},[t._v(" NT."+t._s(s.price)+" ")]),0!=s.origin_price?a("span",{staticClass:"line-through text-muted"},[t._v(" NT."+t._s(s.origin_price)+" ")]):t._e()])])])])}))],2)},e=[],r=(a("99af"),a("4de4"),a("4160"),a("4c53"),a("159b"),{props:["number","para","sub","alsoLike"],data:function(){return{products:[],wishList:[],isLoading:!1}},methods:{getProducts:function(){var t=this;this.isLoading=!0;var s="".concat("https://course-ec-api.hexschool.io/api/").concat("61d0f120-1ac2-427c-9a10-878a710b2b57","/ec/products?paged=50");this.$http.get(s).then((function(s){t.number?t.products=s.data.data.filter((function(t){return"banner"!==t.category})).filter((function(s,a){return a<t.number})):t.para?t.products=s.data.data.filter((function(s){return s.category===t.para})):t.sub?t.products=s.data.data.filter((function(s){return s.options.subCategory===t.sub})):t.alsoLike&&(t.products=s.data.data.filter((function(s){return s.id!==t.alsoLike.id&&s.category===t.alsoLike.category})).sort((function(){return Math.random()-.5})).filter((function(t,s){return s<4}))),t.products.forEach((function(s){t.$set(s,"isAddedToWishList",!1),t.wishList.forEach((function(a){s.id===a.id&&t.$set(s,"isAddedToWishList",!0)}))})),t.isLoading=!1}))},getDetail:function(t){this.$router.push({name:"Product",params:{id:t}})},addToWishList:function(t){var s=this;this.products.forEach((function(a){a.id===t.id&&s.$set(a,"isAddedToWishList",!a.isAddedToWishList)})),this.$bus.$emit("wishListUpdate",t)}},watch:{"alsoLike.id":{handler:function(){this.getProducts()}}},created:function(){var t=this;this.$bus.$emit("getWishList"),this.$bus.$on("wishListInfo",(function(s){t.wishList=s}))},beforeMount:function(){var t=this;this.$bus.$emit("getWishList"),this.$bus.$on("wishListInfo",(function(s){t.wishList=s}))},mounted:function(){var t=this;this.$bus.$on("switchStatus",(function(s){t.products.forEach((function(a){a.id===s&&t.$set(a,"isAddedToWishList",!1)}))})),this.getProducts()},beforeDestroy:function(){this.$bus.$off("wishListInfo"),this.$bus.$off("updateStatus"),this.$bus.$off("switchStatus")}}),o=r,n=(a("9d1d"),a("2877")),c=Object(n["a"])(o,i,e,!1,null,"971a3ab2",null);s["a"]=c.exports},eae1:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}}),a("div",{staticClass:"mb-5"},[a("Banner",{staticClass:"top-margin"})],1),a("div",{staticClass:"mb-5"},[a("div",{staticClass:"container"},[a("h2",{staticClass:"h3 text-muted text-left mb-3"},[t._v("Category")]),a("Carousel")],1)]),a("div",{staticClass:"mb-5"},[a("div",{staticClass:"container"},[a("h2",{staticClass:"h3 text-muted text-left mb-3"},[t._v("New Arrival")]),a("ProductCard",{attrs:{number:t.number}})],1)]),a("div",{staticClass:"mb-5"},[a("div",{staticClass:"container"},[a("h2",{staticClass:"h3 text-muted text-left mb-3"},[t._v("Column")]),a("ColumnCard")],1)]),a("div",{staticClass:"mb-5"},[a("div",{staticClass:"container"},[a("h2",{staticClass:"h3 text-muted text-left mb-3"},[t._v("About")]),a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"col-md-6 text-left d-flex align-items-center"},[a("div",[a("p",{staticClass:"pb-3"},[t._v(" 一件衣服，一個故事。我們試圖透過不同的活動、資訊的傳遞，讓大家以交換、 購買二手衣取代購買新衣、以共同擁有衣物取代堆積大量個人閒置衣物、以品質與溫度代替大 量廉價的衣物消費。 ")]),a("button",{staticClass:"btn btn-outline-dark btn-block",attrs:{type:"button"},on:{click:function(s){return t.$router.push("/shop/about")}}},[t._v("關於我們")])])])])])])],1)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-md-6 margin-control"},[a("img",{staticClass:"img-fluid",attrs:{src:"https://images.unsplash.com/photo-1525562723836-dca67a71d5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",alt:"about us"}})])}],r=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"carousel slide",attrs:{id:"carouselControls","data-ride":"carousel"}},[a("div",{staticClass:"carousel-inner"},[a("div",{staticClass:"carousel-item bg-cover active",staticStyle:{backgroundImage:"url('https://images.unsplash.com/photo-1498551077033-6749074b4737?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1939&q=80')"}},[a("div",{staticClass:"text1 text-left text-white"},[a("h5",[t._v("風格，無可 取代")]),a("p",[t._v("my clothes, my soul")])]),a("div",{staticClass:"text2 text-left"},[a("h5",[t._v("vatta")]),a("p",[t._v("Daily Life")]),a("p",[t._v("Collection")])])]),a("div",{staticClass:"carousel-item bg-cover",staticStyle:{backgroundImage:"url('https://images.unsplash.com/photo-1514904242691-805227244b5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')"}},[a("div",{staticClass:"text3 text-left text-white"},[a("div",{staticClass:"d-flex"},[a("div",{staticClass:"mr-auto"},[a("h5",[t._v("探索，"),a("span",{staticClass:"more-text"},[t._v(" 每個")])]),a("p",[t._v("Second hand, ")])]),a("div",[a("h5",[t._v("生活細節")]),a("p",[t._v("Second life")])])])]),a("div",{staticClass:"text2 text-left"},[a("h5",[t._v("vatta")]),a("p",[t._v("Daily Life")]),a("p",[t._v("Collection")])])]),a("div",{staticClass:"carousel-item bg-cover",staticStyle:{backgroundImage:"url('https://images.unsplash.com/photo-1449122824462-6d4449f197d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"}},[a("div",{staticClass:"text4 text-left text-white"},[a("h5",[t._v("駕 馭")]),a("h5",[t._v("自 己")]),a("div",{staticClass:"d-flex"},[a("h5",{staticClass:"mr-5"},[t._v("的")]),a("h5",[t._v("不馴")])]),a("p",[t._v("for life, for self")])]),a("div",{staticClass:"text2 text-left"},[a("h5",[t._v("vatta")]),a("p",[t._v("Daily Life")]),a("p",[t._v("Collection")])])])]),a("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselControls",role:"button","data-slide":"prev"}},[a("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[t._v("Previous")])]),a("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselControls",role:"button","data-slide":"next"}},[a("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[t._v("Next")])])])])}],n={data:function(){return{}}},c=n,l=(a("5ce8"),a("2877")),u=Object(l["a"])(c,r,o,!1,null,"193c1158",null),d=u.exports,f=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"carousel slide",attrs:{id:"carousel","data-ride":"carousel"}},[a("div",{staticClass:"carousel-inner"},t._l(t.texts,(function(s,i){return a("div",{key:i,staticClass:"carousel-item",class:{active:0==i}},[a("div",{staticClass:"carousel-control"},[a("div",{staticClass:"bg-cover",style:"background-image: url("+s.img+")"}),a("div",{staticClass:"text-left"},[a("h2",{staticClass:"letter-spacing"},[t._v(t._s(s.title))]),a("div",{staticClass:"category-intro"},[a("p",{staticClass:"mb-3"},[t._v(t._s(s.intro))]),a("button",{staticClass:"btn btn-outline-dark btn-block",attrs:{type:"button"},on:{click:function(a){return t.switchPath(s.name)}}},[t._v("see more")])])])])])})),0),t._m(0),t._m(1)])])},h=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"carousel-control-prev",attrs:{href:"#carousel",role:"button","data-slide":"prev"}},[a("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[t._v("Previous")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"carousel-control-next",attrs:{href:"#carousel",role:"button","data-slide":"next"}},[a("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[t._v("Next")])])}],v={data:function(){return{texts:[{img:"https://images.unsplash.com/photo-1520591799316-6b30425429aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",title:"Clothes",name:"clothes",intro:"慵懶的午後，想要穿得隨興可愛，生活過得簡簡單單。來看看各式 T恤、薄長袖與襯衫，每件衣服都勾起一種生活想像"},{img:"https://images.unsplash.com/photo-1475178626620-a4d074967452?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",title:"Pants",name:"pants",intro:"為自己定義時尚，穿上自己風格。透過穿搭，再次認識自己"},{img:"https://images.unsplash.com/photo-1509182469511-7f0b50bfa63e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",title:"Skirt",name:"skirt",intro:"善待自己，為每個努力又勇於展現自信的妳加油。用相連的裙擺，串聯每個回憶角落"}]}},methods:{switchPath:function(t){this.$router.push({name:"Products",params:{category:t}})}}},m=v,p=(a("cc43"),Object(l["a"])(m,f,h,!1,null,"4678e132",null)),b=p.exports,C=a("e915"),g=a("d717"),x={components:{Banner:d,Carousel:b,ProductCard:C["a"],ColumnCard:g["a"]},data:function(){return{windowWidth:window.innerWidth,number:0,isLoading:!1}},created:function(){this.windowWidth>=768?this.number=8:this.number=6}},_=x,y=(a("84e3"),Object(l["a"])(_,i,e,!1,null,"02b8ea41",null));s["default"]=y.exports}}]);
//# sourceMappingURL=chunk-e636933a.0c0af2e7.js.map