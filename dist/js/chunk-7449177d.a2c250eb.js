(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7449177d"],{"02f4":function(t,e,a){var s=a("4588"),i=a("be13");t.exports=function(t){return function(e,a){var r,n,c=String(i(e)),l=s(a),o=c.length;return l<0||l>=o?t?"":void 0:(r=c.charCodeAt(l),r<55296||r>56319||l+1===o||(n=c.charCodeAt(l+1))<56320||n>57343?t?c.charAt(l):r:t?c.slice(l,l+2):n-56320+(r-55296<<10)+65536)}}},"035d":function(t,e,a){t.exports=a.p+"img/tech (2).188fa1a5.jpg"},"0390":function(t,e,a){"use strict";var s=a("02f4")(!0);t.exports=function(t,e,a){return e+(a?s(t,e).length:1)}},"06ba":function(t,e,a){t.exports=a.p+"img/sbsc.ea72f3a9.png"},"0bfb":function(t,e,a){"use strict";var s=a("cb7c");t.exports=function(){var t=s(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"107b":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"tabs"},[a("ul",{staticClass:"nav nav-tabs ad_tabs"},t._l(t.tabs,function(e){return a("li",{key:e,staticClass:"nav-item pr-3"},[a("a",{staticClass:"nav-link pb-3",class:{active:e.isActive},attrs:{href:e.href},on:{click:function(a){return t.selectTab(e)}}},[t._v(t._s(e.name))])])}),0)]),a("div",{staticClass:"tabs-details"},[t._t("default")],2)])},i=[],r=(a("ac6a"),{name:"tabs",data:function(){return{tabs:[]}},mounted:function(){var t=this;this.tabs=this.$children,this.$nextTick(function(){t.selectTab(t.tabs[0])}),this.selectTab(this.tabs[1])},created:function(){},methods:{selectTab:function(t){this.tabs.forEach(function(e){e.isActive=e.href==t.href})}}}),n=r,c=a("2877"),l=Object(c["a"])(n,s,i,!1,null,null,null);e["a"]=l.exports},"214f":function(t,e,a){"use strict";a("b0c5");var s=a("2aba"),i=a("32e9"),r=a("79e5"),n=a("be13"),c=a("2b4c"),l=a("520a"),o=c("species"),u=!r(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();t.exports=function(t,e,a){var v=c(t),p=!r(function(){var e={};return e[v]=function(){return 7},7!=""[t](e)}),d=p?!r(function(){var e=!1,a=/a/;return a.exec=function(){return e=!0,null},"split"===t&&(a.constructor={},a.constructor[o]=function(){return a}),a[v](""),!e}):void 0;if(!p||!d||"replace"===t&&!u||"split"===t&&!f){var h=/./[v],g=a(n,v,""[t],function(t,e,a,s,i){return e.exec===l?p&&!i?{done:!0,value:h.call(e,a,s)}:{done:!0,value:t.call(a,e,s)}:{done:!1}}),b=g[0],m=g[1];s(String.prototype,t,b),i(RegExp.prototype,v,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}}},3399:function(t,e,a){t.exports=a.p+"img/youtube.3e6182b7.svg"},"520a":function(t,e,a){"use strict";var s=a("0bfb"),i=RegExp.prototype.exec,r=String.prototype.replace,n=i,c="lastIndex",l=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[c]||0!==e[c]}(),o=void 0!==/()??/.exec("")[1],u=l||o;u&&(n=function(t){var e,a,n,u,f=this;return o&&(a=new RegExp("^"+f.source+"$(?!\\s)",s.call(f))),l&&(e=f[c]),n=i.call(f,t),l&&n&&(f[c]=f.global?n.index+n[0].length:e),o&&n&&n.length>1&&r.call(n[0],a,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(n[u]=void 0)}),n}),t.exports=n},"5f1b":function(t,e,a){"use strict";var s=a("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var r=a.call(t,e);if("object"!==typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==s(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"71a4":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"about",staticStyle:{"margin-top":"+60px"}},[t._m(0),a("section",{attrs:{id:"history"}},[a("div",{staticClass:"container py-5"},[a("div",{staticClass:"row"},[t._m(1),a("tabs",{staticClass:"col-lg-12"},t._l(t.historyrates,function(t,e){return a("historytab",{key:t.id,attrs:{name:t.location,rate:t,selected:0===e}})}),1)],1)])]),t._m(2),t._m(3)])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"top-head"},[a("div",{staticClass:"container py-5"},[a("p",{staticClass:"w-48 pt-5"},[t._v("Historic Rates")]),a("b",{staticClass:"w-1p"},[t._v("Home  ")]),a("b",{staticClass:"p-17"},[t._v("/  Historic Rates")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-6 col-xs-12"},[a("p",{staticClass:"p-19"},[t._v("Market Historical FX Rates Graph")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{attrs:{id:"signup"}},[s("div",{staticClass:"container mt-5"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-4 col-xs-12 py-4"},[s("p",{staticClass:"p-17"},[t._v("Sign up for daily parallel market FX rates")]),s("p",{staticClass:"w-14"},[t._v("We’ll not spam you. Promise!")]),s("input",{staticClass:"g form-control mb-3",attrs:{type:"email",placeholder:"yourmail@email.com"}}),s("button",{staticClass:"btn btn-green"},[t._v("Send Me Rates")])]),s("div",{staticClass:"col-lg-4 col-xs-12 py-4"},[s("p",{staticClass:"p-17"},[t._v("Contact Us")]),s("div",{staticClass:"d-flex row"},[s("div",{staticClass:"py-1 px-3"},[s("i",{staticClass:"fas fa-map-marker-alt",staticStyle:{color:"#008752","font-size":"18px"}})]),s("div",{staticClass:"py-1 px-3 w-14"},[t._v("\n                4, Oluwaleyimu Street, P.O.Box 15750,\n                "),s("br"),t._v("Ikeja, Lagos, Nigeria.\n              ")])]),s("div",{staticClass:"d-flex row"},[s("div",{staticClass:"py-1 px-3"},[s("i",{staticClass:"fas fa-phone-alt",staticStyle:{color:"#008752","font-size":"18px"}})]),s("div",{staticClass:"py-1 px-3 w-14"},[t._v("\n                080-23202255, 081-3843 0600,\n                "),s("br"),t._v("070-84009851, 080-34612197,\n                "),s("br"),t._v("080-88981824\n              ")])])]),s("div",{staticClass:"col-lg-4 col-xs-12 py-4"},[s("p",{staticClass:"p-17"},[t._v("Follow Us On")]),s("div",{staticClass:"d-flex row px-2"},[s("a",{staticClass:"p-2",attrs:{href:"#"}},[s("i",{staticClass:"fab fa-facebook-f",staticStyle:{color:"#fff"}})]),s("a",{staticClass:"p-2",attrs:{href:"#"}},[s("i",{staticClass:"fab fa-twitter",staticStyle:{color:"#fff"}})]),s("a",{staticClass:"p-2",attrs:{href:"#"}},[s("i",{staticClass:"fab fa-google-plus-g",staticStyle:{color:"#fff"}})]),s("a",{staticClass:"p-2",attrs:{href:"#"}},[s("i",{staticClass:"fab fa-instagram",staticStyle:{color:"#fff"}})]),s("a",{staticClass:"p-2 w-14",attrs:{href:"#"}},[s("img",{attrs:{src:a("3399"),alt:""}})])])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer pt-3 pb-5 mb-4"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col col-xs-12"},[s("p",{staticClass:"p-14"},[t._v("© 2019 All right reserved.")])]),s("div",{staticClass:"ml-auto col col-xs-12"},[s("p",{staticClass:"p-14 text-right"},[t._v("\n              Powered by ABCON\n              "),s("img",{staticClass:"mx-2",staticStyle:{height:"30px"},attrs:{src:a("8d4a")}}),t._v("\n              Technical Partners:\n              "),s("img",{staticClass:"mx-2",staticStyle:{height:"30px"},attrs:{src:a("06ba")}}),s("img",{staticClass:"mx-2",staticStyle:{height:"30px"},attrs:{src:a("035d")}})])])])])])}],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}]},[t._t("default"),a("div",{staticClass:"table-responsive-md"},[a("table",{staticClass:"table red1"},[t._m(0),a("tbody",t._l(t.getValues(),function(e,s){return a("tr",{key:e,attrs:{value:s}},[a("td",[t._v(t._s(e.date))]),e.value.morning?a("td",{staticStyle:{color:"rgb(0, 122, 255)","font-weight":"bolder"}},[t._v(t._s(e.value.morning.buyingRate)+" /"+t._s(e.value.morning.sellingRate))]):a("td",[t._v(" ")]),e.value.afternoon?a("td",{staticStyle:{color:"rgb(255, 156, 0)","font-weight":"bolder"}},[t._v(t._s(e.value.afternoon.buyingRate)+" /"+t._s(e.value.afternoon.sellingRate))]):a("td",[t._v(" ")]),e.value.evening?a("td",{staticStyle:{color:"rgb(240, 0, 66)","font-weight":"bolder"}},[t._v(t._s(e.value.evening.buyingRate)+" /"+t._s(e.value.evening.sellingRate))]):a("td",[t._v(" ")]),a("td",[a("img",t._b({attrs:{width:"13"}},"img","../../img/"+e.currency+".svg",!1)),t._v("\n            "+t._s(e.currency)+"\n          ")])])}),0)])])],2)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("th",[t._v("DATE")]),a("th",[t._v("MORNING")]),a("th",[t._v("MIDDAY")]),a("th",[t._v("EVENING")]),a("th",[t._v("CURRENCY")])])}],c=(a("7f7f"),a("a481"),{name:"tab",props:{name:{required:!0},selected:{default:!1},rate:{}},data:function(){return{vv:{},isActive:!1}},computed:{href:function(){return"#"+this.name.toLowerCase().replace(/ /g,"-")}},methods:{getCurrencies:function(){console.log("get_currencies",this.rate.dates.data);var t=this.rate.dates.data,e=t.map(function(t){return{date:t.date,row:t.value}});return this.vv=e,console.log(e,"<====valhist"),e},getValues:function(){var t=this.getCurrencies();console.log("values123 ====> ",t);var e=[];return t.map(function(t){var a=t.date,s=t.row;for(var i in s)s.hasOwnProperty(i)&&e.push({date:a,currency:i,value:s[i]});console.log("newValues=====>",e)}),e}},mounted:function(){this.isActive=this.selected,this.getCurrencies(),console.log("rate========>",rate)}}),l=c,o=a("2877"),u=Object(o["a"])(l,r,n,!1,null,null,null),f=u.exports,v=a("107b"),p={components:{historytab:f,tabs:v["a"]},data:function(){return{}},computed:{historyrates:function(){return console.log("computed =====>historyrates",this.$store.state.historicalRates),this.$store.state.historicalRates}},mounted:function(){this.$store.dispatch("fetchHistoricalRatesApi")}},d=p,h=Object(o["a"])(d,s,i,!1,null,null,null);e["default"]=h.exports},"8d4a":function(t,e,a){t.exports=a.p+"img/abcon.28f7ec42.png"},a481:function(t,e,a){"use strict";var s=a("cb7c"),i=a("4bf8"),r=a("9def"),n=a("4588"),c=a("0390"),l=a("5f1b"),o=Math.max,u=Math.min,f=Math.floor,v=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,d=function(t){return void 0===t?t:String(t)};a("214f")("replace",2,function(t,e,a,h){return[function(s,i){var r=t(this),n=void 0==s?void 0:s[e];return void 0!==n?n.call(s,r,i):a.call(String(r),s,i)},function(t,e){var i=h(a,t,this,e);if(i.done)return i.value;var f=s(t),v=String(this),p="function"===typeof e;p||(e=String(e));var b=f.global;if(b){var m=f.unicode;f.lastIndex=0}var C=[];while(1){var x=l(f,v);if(null===x)break;if(C.push(x),!b)break;var _=String(x[0]);""===_&&(f.lastIndex=c(v,r(f.lastIndex),m))}for(var y="",S=0,w=0;w<C.length;w++){x=C[w];for(var L=String(x[0]),R=o(u(n(x.index),v.length),0),E=[],T=1;T<x.length;T++)E.push(d(x[T]));var k=x.groups;if(p){var A=[L].concat(E,R,v);void 0!==k&&A.push(k);var $=String(e.apply(void 0,A))}else $=g(L,v,R,E,k,e);R>=S&&(y+=v.slice(S,R)+$,S=R+L.length)}return y+v.slice(S)}];function g(t,e,s,r,n,c){var l=s+t.length,o=r.length,u=p;return void 0!==n&&(n=i(n),u=v),a.call(c,u,function(a,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,s);case"'":return e.slice(l);case"<":c=n[i.slice(1,-1)];break;default:var u=+i;if(0===u)return a;if(u>o){var v=f(u/10);return 0===v?a:v<=o?void 0===r[v-1]?i.charAt(1):r[v-1]+i.charAt(1):a}c=r[u-1]}return void 0===c?"":c})}})},ac6a:function(t,e,a){for(var s=a("cadf"),i=a("0d58"),r=a("2aba"),n=a("7726"),c=a("32e9"),l=a("84f2"),o=a("2b4c"),u=o("iterator"),f=o("toStringTag"),v=l.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=i(p),h=0;h<d.length;h++){var g,b=d[h],m=p[b],C=n[b],x=C&&C.prototype;if(x&&(x[u]||c(x,u,v),x[f]||c(x,f,b),l[b]=v,m))for(g in s)x[g]||r(x,g,s[g],!0)}},b0c5:function(t,e,a){"use strict";var s=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:s!==/./.exec},{exec:s})}}]);
//# sourceMappingURL=chunk-7449177d.a2c250eb.js.map