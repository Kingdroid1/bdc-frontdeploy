(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13e521be"],{"11ce":function(t,e,n){},c372:function(t,e,n){"use strict";var r=n("11ce"),s=n.n(r);s.a},cd85:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"fixed-bottom"},[n("marquee-text",{staticClass:"marquee bottom",attrs:{repeat:10}},t._l(t.rates,function(e,r){return n("span",{key:e,attrs:{value:r}},[t._v("\n         "+t._s(e.location)+"  -- "+t._s(e.morning.buying)+"/"+t._s(e.morning.selling)+"  "),n("img",{attrs:{width:"20",src:"../../../img/"+e.morning.currency+".svg"}}),t._v(" "+t._s(e.morning.currency)+"     \n       ")])}),0),t._m(0)],1)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"marquee bottom"},[n("iframe",{attrs:{src:"//www.exchangerates.org.uk/widget/ER-LRTICKER.php?w=1400&s=3&mc=NGN&mbg=191919&bs=yes&bc=141413&f=verdana&fs=12px&fc=FFFFFF&lc=F7F7F7&lhc=FE9A00&vc=FE9A00&vcu=008000&vcd=FF0000&",width:"1400",height:"30",frameborder:"0",scrolling:"no",marginwidth:"0",marginheight:"0"}})])}],c=n("0150"),a=n.n(c),o=n("d345"),i=new o["a"],u={components:{MarqueeText:a.a},data:function(){return{rates:[]}},methods:{getRates:function(){var t=this;i.getScrollRates().then(function(e){t.rates=e.result,console.log("scrollrate",t.rates)}).catch(function(t){console.log("scrool",t)})}},mounted:function(){this.getRates()}},l=u,m=(n("c372"),n("2877")),g=Object(m["a"])(l,r,s,!1,null,"513718f6",null);e["default"]=g.exports}}]);
//# sourceMappingURL=chunk-13e521be.70eac3ba.js.map