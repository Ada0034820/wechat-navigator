(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e1fae7b4"],{"25f0":function(e,t,n){"use strict";var r=n("e330"),o=n("5e77").PROPER,c=n("6eeb"),a=n("825a"),u=n("3a9b"),i=n("577e"),s=n("d039"),f=n("ad6d"),l="toString",d=RegExp.prototype,p=d[l],b=r(f),m=s((function(){return"/a/b"!=p.call({source:"a",flags:"b"})})),h=o&&p.name!=l;(m||h)&&c(RegExp.prototype,l,(function(){var e=a(this),t=i(e.source),n=e.flags,r=i(void 0===n&&u(d,e)&&!("flags"in d)?b(e):n);return"/"+t+"/"+r}),{unsafe:!0})},"53ae":function(e,t,n){"use strict";n("9d30")},7156:function(e,t,n){var r=n("1626"),o=n("861d"),c=n("d2bb");e.exports=function(e,t,n){var a,u;return c&&r(a=t.constructor)&&a!==n&&o(u=a.prototype)&&u!==n.prototype&&c(e,u),e}},"8cb1":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o={class:"share-page"},c={key:0},a=Object(r["createElementVNode"])("p",null,"规则：长按二维码2秒->分享到微信群",-1),u=Object(r["createElementVNode"])("p",null,"只要两名用户通过您分享的二维码打开平台即可完成新手任务！",-1),i={key:0,id:"canvas"},s=["src"],f={key:1};function l(e,t,n,l,d,p){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",o,[e.scan<2?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",c,[Object(r["createElementVNode"])("h3",null," 请在24小时内完成新手任务：还有 "+Object(r["toDisplayString"])(e.hour)+" 时 "+Object(r["toDisplayString"])(e.min)+" 分 "+Object(r["toDisplayString"])(e.sec)+" 秒 到期 ",1),a,u,Object(r["createElementVNode"])("p",null,"状态: "+Object(r["toDisplayString"])(e.scan)+" 人已扫描您分享的二维码进入",1),e.downloadImg?(Object(r["openBlock"])(),Object(r["createElementBlock"])("img",{key:1,src:e.downloadImg,alt:"加载中..."},null,8,s)):(Object(r["openBlock"])(),Object(r["createElementBlock"])("canvas",i))])):(Object(r["openBlock"])(),Object(r["createElementBlock"])("h3",f,"您已完成分享任务！点击下面链接和密码获取2022前端开发高级教程"))])}var d=n("5530"),p=n("1da1"),b=(n("d3b7"),n("d9e2"),n("25f0"),n("96cf"),n("6c02")),m=n("ec26"),h=n("d055"),g=n.n(h),v=n("8454"),w=n("da71"),E={name:"index",components:{},setup:function(){var e=Object(b["c"])(),t=(Object(r["ref"])(null),e.query,null),n=Object(r["reactive"])({info:null,hour:0,min:0,sec:0,scan:0,downloadImg:""});Object(r["onMounted"])((function(){c()})),Object(r["onBeforeUnmount"])((function(){window.clearInterval(t)}));var o=function(e){var t=(new Date).getTime(),r=(e-t)/1e3;n.hour=parseInt(r/60/60),n.min=parseInt(r/60%60),n.sec=parseInt(r%60),console.log(n.hour,n.min,n.sec)},c=function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(){var r,u,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(window.document.title="以为您生成分享二维码",r=localStorage.getItem("shareId"),r){e.next=9;break}return r=Object(m["a"])(),e.next=6,a.addFrontEndShareId(r);case 6:u=e.sent,e.next=16;break;case 9:return e.next=11,a.getFrontEndShareIdInfo(r);case 11:if(u=e.sent,u.shareId){e.next=16;break}return localStorage.removeItem("shareId"),c(),e.abrupt("return");case 16:if(i=u,n.scan=i.scan,!(n.scan>=2)){e.next=20;break}return e.abrupt("return");case 20:if(s=i.startTime+864e5,!(s<=(new Date).getTime())){e.next=25;break}return localStorage.removeItem("shareId"),c(),e.abrupt("return");case 25:o(s),t=window.setInterval((function(){o(s)}),1e3),g.a.toDataURL(w["b"]+"/wxproject1/#/frontEndHelpPage?helpId="+r).then((function(e){console.log(e);var t=document.getElementById("canvas"),r=t.getContext("2d"),o=new Image;o.setAttribute("crossOrigin","anonymous"),o.onload=function(c){t.width=300,t.height=400,r.drawImage(o,0,0,o.width,o.height,0,0,300,400);var a=new Image;a.onload=function(e){r.drawImage(a,0,0,a.width,a.height,10,85,270,270),n.downloadImg=t.toDataURL("image/png")},a.src=e},o.src=w["b"]+"/system/templete.jpg"})).catch((function(e){console.error(e)}));case 28:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a={addFrontEndShareId:function(e){return new Promise((function(t){var n=new FormData;n.append("shareId",e),Object(v["a"])(n,(function(e){}),(function(n){localStorage.setItem("shareId",e),t(n)}))}),(function(e){}))},getFrontEndShareIdInfo:function(e){return new Promise((function(t){Object(v["c"])({},(function(e){throw new Error(e.toString())}),(function(e){t(e)}),{method:"get",params:{shareId:e}})}),(function(e){e()}))}};return Object(d["a"])(Object(d["a"])({},Object(r["toRefs"])(n)),a)}},j=(n("53ae"),n("6b0d")),I=n.n(j);const O=I()(E,[["render",l]]);t["default"]=O},"9d30":function(e,t,n){},ab36:function(e,t,n){var r=n("861d"),o=n("9112");e.exports=function(e,t){r(t)&&"cause"in t&&o(e,"cause",t.cause)}},b980:function(e,t,n){var r=n("d039"),o=n("5c6c");e.exports=!r((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",o(1,7)),7!==e.stack)}))},c770:function(e,t,n){var r=n("e330"),o=r("".replace),c=function(e){return String(Error(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,u=a.test(c);e.exports=function(e,t){if(u&&"string"==typeof e)while(t--)e=o(e,a,"");return e}},d9e2:function(e,t,n){var r=n("23e7"),o=n("da84"),c=n("2ba4"),a=n("e5cb"),u="WebAssembly",i=o[u],s=7!==Error("e",{cause:7}).cause,f=function(e,t){var n={};n[e]=a(e,t,s),r({global:!0,forced:s},n)},l=function(e,t){if(i&&i[e]){var n={};n[e]=a(u+"."+e,t,s),r({target:u,stat:!0,forced:s},n)}};f("Error",(function(e){return function(t){return c(e,this,arguments)}})),f("EvalError",(function(e){return function(t){return c(e,this,arguments)}})),f("RangeError",(function(e){return function(t){return c(e,this,arguments)}})),f("ReferenceError",(function(e){return function(t){return c(e,this,arguments)}})),f("SyntaxError",(function(e){return function(t){return c(e,this,arguments)}})),f("TypeError",(function(e){return function(t){return c(e,this,arguments)}})),f("URIError",(function(e){return function(t){return c(e,this,arguments)}})),l("CompileError",(function(e){return function(t){return c(e,this,arguments)}})),l("LinkError",(function(e){return function(t){return c(e,this,arguments)}})),l("RuntimeError",(function(e){return function(t){return c(e,this,arguments)}}))},e391:function(e,t,n){var r=n("577e");e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},e5cb:function(e,t,n){"use strict";var r=n("d066"),o=n("1a2d"),c=n("9112"),a=n("3a9b"),u=n("d2bb"),i=n("e893"),s=n("7156"),f=n("e391"),l=n("ab36"),d=n("c770"),p=n("b980"),b=n("c430");e.exports=function(e,t,n,m){var h=m?2:1,g=e.split("."),v=g[g.length-1],w=r.apply(null,g);if(w){var E=w.prototype;if(!b&&o(E,"cause")&&delete E.cause,!n)return w;var j=r("Error"),I=t((function(e,t){var n=f(m?t:e,void 0),r=m?new w(e):new w;return void 0!==n&&c(r,"message",n),p&&c(r,"stack",d(r.stack,2)),this&&a(E,this)&&s(r,this,I),arguments.length>h&&l(r,arguments[h]),r}));if(I.prototype=E,"Error"!==v&&(u?u(I,j):i(I,j,{name:!0})),i(I,w),!b)try{E.name!==v&&c(E,"name",v),E.constructor=I}catch(O){}return I}}}}]);
//# sourceMappingURL=chunk-e1fae7b4.bd04e14f.js.map