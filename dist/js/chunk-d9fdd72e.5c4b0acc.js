(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d9fdd72e"],{cd85:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"fixed-bottom"},[n("marquee-text",{staticClass:"marquee bottom",attrs:{repeat:10}},t._l(t.rates,function(e,r){return n("span",{key:e,attrs:{value:r}},[t._v("\n         "+t._s(e.location.location)+"  -- "+t._s(e.morning.buying)+"/"+t._s(e.morning.selling)+"  "),n("img",{attrs:{width:"20",src:"../../../img/"+e.morning.currency+".svg"}}),t._v(" "+t._s(e.morning.currency)+"     \n       ")])}),0),t._m(0)],1)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"marquee bottom"},[n("iframe",{attrs:{src:"//www.exchangerates.org.uk/widget/ER-LRTICKER.php?w=1400&s=3&mc=NGN&mbg=191919&bs=yes&bc=141413&f=verdana&fs=12px&fc=FFFFFF&lc=F7F7F7&lhc=FE9A00&vc=FE9A00&vcu=008000&vcd=FF0000&",width:"1400",height:"30",frameborder:"0",scrolling:"no",marginwidth:"0",marginheight:"0"}})])}],a=n("0150"),c=n.n(a),o=n("d345"),i=new o["a"],u={components:{MarqueeText:c.a},data:function(){return{rates:[]}},methods:{getRates:function(){var t=this;i.getScrollRates().then(function(e){t.rates=e.result,console.log("scrollrate",t.rates.morning.buying)}).catch(function(t){console.log("scrool",t)})}},mounted:function(){this.getRates()}},l=u,g=(n("d81f"),n("2877")),m=Object(g["a"])(l,r,s,!1,null,"fad86798",null);e["default"]=m.exports},ce16:function(t,e,n){},d81f:function(t,e,n){"use strict";var r=n("ce16"),s=n.n(r);s.a}}]);
//# sourceMappingURL=chunk-d9fdd72e.5c4b0acc.js.map