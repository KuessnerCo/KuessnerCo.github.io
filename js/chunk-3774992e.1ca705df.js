(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3774992e"],{"1ddd":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[t._m(0),t._m(1),t.$vuetify.theme.dark?t._e():n("div",{staticClass:"whiteBox"})])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("canvas",{staticClass:"canvas"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"font-weight-thin",staticStyle:{position:"absolute","z-index":"2",top:"8%","margin-left":"37%"}},[n("span",{staticClass:"white--text",staticStyle:{"font-size":"3vw","font-family":"-apple-system, BlinkMacSystemFont, sans-serif"}},[t._v("Constantin Küssner "),n("br")]),n("span",{staticClass:"white--text low-Text d-flex justify-center",staticStyle:{"font-size":"2vw"}},[t._v("Software Engineer")]),n("div",{staticClass:"scroll-downs align-content-md-end",staticStyle:{position:"relative","margin-left":"48%","margin-top":"70%"}},[n("div",{staticClass:"mousey"},[n("div",{staticClass:"scroller "})])])])}],a=(n("99af"),{name:"Welcome",mounted:function(){var t=document.querySelector(".canvas"),e=(document.querySelector(".text"),t.getContext("2d"));function n(){requestAnimationFrame((function(){var n=window.devicePixelRatio;t.style.width=window.innerWidth+"px",t.style.height=window.innerHeight+"px",t.width=window.innerWidth*n,t.height=window.innerHeight*n,e.scale(n,n)}))}function i(t,e,n,i,a){var c=o(!0);function r(t,e,n,i,o){requestAnimationFrame((function(){s(t,e,n,i,o,c);var a={fromX:n,fromY:i,toX:n+1*(Math.random()>.5?o:0-o),toY:i+1*(Math.random()>.5?o:0-o),lineWidth:o};r(a.fromX,a.fromY,a.toX,a.toY,a.lineWidth)}))}r(t,e,n,i,a)}function o(t){return"rgba(".concat(255*Math.random(),", 0, ").concat(255*Math.random(),", ").concat(t?.2*Math.random():1,")")}function a(){e.clearRect(0,0,t.width,t.height)}function s(t,n,i,o,a,s){e.beginPath(),e.moveTo(t,n),e.lineTo(i,o),e.lineWidth=a,e.strokeStyle=s,e.lineCap="round",e.stroke()}document.addEventListener("mousemove",(function(t){i(t.clientX,t.clientY,t.clientX,t.clientY,4*Math.random())})),document.addEventListener("touchmove",(function(t){i(t.touches[0].clientX,t.touches[0].clientY,t.touches[0].clientX,t.touches[0].clientY,8*Math.random())})),n(),window.addEventListener("resize",(function(){a(),n()}))}}),s=a,c=(n("1f71"),n("2877")),r=Object(c["a"])(s,i,o,!1,null,"50d86d4d",null);e["default"]=r.exports},"1f71":function(t,e,n){"use strict";var i=n("5045"),o=n.n(i);o.a},5045:function(t,e,n){}}]);
//# sourceMappingURL=chunk-3774992e.1ca705df.js.map