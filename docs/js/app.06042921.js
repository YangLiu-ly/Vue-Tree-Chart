(function(e){function t(t){for(var n,i,d=t[0],s=t[1],l=t[2],p=0,f=[];p<d.length;p++)i=d[p],r[i]&&f.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);c&&c(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,d=1;d<a.length;d++){var s=a[d];0!==r[s]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Vue-Tree-Chart/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var c=s;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("31c5"),r=a.n(n);r.a},"1e86":function(e,t,a){"use strict";var n=a("e66a"),r=a.n(n);r.a},"31c5":function(e,t,a){var n=a("5fc7");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=a("499e").default;r("f155f63c",n,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("label",[e._v("\n    切换为横向\n    "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.landscape,expression:"landscape"}],attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(e.landscape)?e._i(e.landscape,"1")>-1:e.landscape},on:{change:function(t){var a=e.landscape,n=t.target,r=!!n.checked;if(Array.isArray(a)){var o="1",i=e._i(a,o);n.checked?i<0&&(e.landscape=a.concat([o])):i>-1&&(e.landscape=a.slice(0,i).concat(a.slice(i+1)))}else e.landscape=r}}})]),a("TreeChart",{class:{landscape:e.landscape.length},attrs:{json:e.data},on:{"click-node":e.clickNode}}),e._m(0)],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"foot"},[a("p",[e._v("© 2018 - 3018 Author\n          "),a("a",{attrs:{href:"https://refined-x.com/",target:"_blank"}},[e._v("雅X共赏")])])])}],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.treeData.name?a("table",[a("tr",[a("td",{class:{parentLevel:e.treeData.children,extend:e.treeData.children&&e.treeData.extend},attrs:{colspan:e.treeData.children?2*e.treeData.children.length:1}},[a("div",{class:{node:!0,hasMate:e.treeData.mate}},[a("div",{staticClass:"person",on:{click:function(t){e.$emit("click-node",e.treeData)}}},[a("div",{staticClass:"avat"},[a("img",{attrs:{src:e.treeData.image_url}})]),a("div",{staticClass:"name"},[e._v(e._s(e.treeData.name))])]),e.treeData.mate?a("div",{staticClass:"person",on:{click:function(t){e.$emit("click-node",e.treeData.mate)}}},[a("div",{staticClass:"avat"},[a("img",{attrs:{src:e.treeData.mate.image_url}})]),a("div",{staticClass:"name"},[e._v(e._s(e.treeData.mate.name))])]):e._e()]),e.treeData.children?a("div",{staticClass:"extend_handle",on:{click:function(t){e.toggleExtend(e.treeData)}}}):e._e()])]),e.treeData.children&&e.treeData.extend?a("tr",e._l(e.treeData.children,function(t,n){return a("td",{key:n,staticClass:"childLevel",attrs:{colspan:"2"}},[a("TreeChart",{attrs:{json:t},on:{"click-node":function(t){e.$emit("click-node",t)}}})],1)})):e._e()]):e._e()},d=[],s=(a("ac6a"),{name:"TreeChart",props:["json"],data:function(){return{treeData:{}}},watch:{json:{handler:function(e){var t=function e(t){return t.extend=void 0===t.extend||!!t.extend,Array.isArray(t.children)&&t.children.forEach(function(t){e(t)}),t};e&&(this.treeData=t(e))},immediate:!0}},methods:{toggleExtend:function(e){e.extend=!e.extend,this.$forceUpdate()}}}),l=s,c=(a("1e86"),a("2877")),p=Object(c["a"])(l,i,d,!1,null,"4f0d12e6",null);p.options.__file="TreeChart.vue";var f=p.exports,h={name:"app",components:{TreeChart:f},data:function(){return{landscape:[],data:{name:"root",image_url:"https://static.refined-x.com/avat.jpg",children:[{name:"children1",image_url:"https://static.refined-x.com/avat1.jpg"},{name:"children2",image_url:"https://static.refined-x.com/avat2.jpg",mate:{name:"mate",image_url:"https://static.refined-x.com/avat3.jpg"},children:[{name:"grandchild",image_url:"https://static.refined-x.com/avat.jpg"},{name:"grandchild2",image_url:"https://static.refined-x.com/avat1.jpg"},{name:"grandchild3",image_url:"https://static.refined-x.com/avat2.jpg"}]}]}}},methods:{clickNode:function(e){console.log(e)}}},m=h,u=(a("034f"),Object(c["a"])(m,r,o,!1,null,null,null));u.options.__file="App.vue";var v=u.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(v)}}).$mount("#app")},"5fc7":function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,"\n#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;margin-top:60px\n}\n#app .avat{border-radius:2em;border-width:2px\n}\n#app .name{font-weight:700\n}\n.foot{position:fixed;left:0;bottom:0;width:100%;background:#333;padding:24px;overflow:hidden;color:#999;font-size:14px;text-align:center\n}\n.foot a{color:#fff;margin:0 .5em\n}",""])},"6d35":function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,'\ntable[data-v-4f0d12e6]{border-collapse:separate!important;border-spacing:0!important\n}\ntd[data-v-4f0d12e6]{position:relative;vertical-align:top;padding:0 0 50px 0;text-align:center\n}\n.extend_handle[data-v-4f0d12e6]{position:absolute;left:50%;bottom:30px;width:10px;height:10px;padding:10px;-webkit-transform:translate3d(-15px,0,0);transform:translate3d(-15px,0,0);cursor:pointer\n}\n.extend_handle[data-v-4f0d12e6]:before{content:"";display:block;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;border:2px solid;border-color:#ccc #ccc transparent transparent;-webkit-transform:rotate(135deg);transform:rotate(135deg);-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;-webkit-transition:-webkit-transform .3s ease;transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease\n}\n.extend_handle[data-v-4f0d12e6]:hover:before{border-color:#333 #333 transparent transparent\n}\n.extend .extend_handle[data-v-4f0d12e6]:before{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)\n}\n.extend[data-v-4f0d12e6]:after{content:"";position:absolute;left:50%;bottom:15px;height:15px;border-left:2px solid #ccc;-webkit-transform:translate3d(-1px,0,0);transform:translate3d(-1px,0,0)\n}\n.childLevel[data-v-4f0d12e6]:before{content:"";position:absolute;left:50%;bottom:100%;height:15px;border-left:2px solid #ccc;-webkit-transform:translate3d(-1px,0,0);transform:translate3d(-1px,0,0)\n}\n.childLevel[data-v-4f0d12e6]:after{content:"";position:absolute;left:0;right:0;top:-15px;border-top:2px solid #ccc\n}\n.childLevel[data-v-4f0d12e6]:first-child:before,.childLevel[data-v-4f0d12e6]:last-child:before{display:none\n}\n.childLevel[data-v-4f0d12e6]:first-child:after{left:50%;height:15px;border:2px solid;border-color:#ccc transparent transparent #ccc;border-radius:6px 0 0 0;-webkit-transform:translate3d(1px,0,0);transform:translate3d(1px,0,0)\n}\n.childLevel[data-v-4f0d12e6]:last-child:after{right:50%;height:15px;border:2px solid;border-color:#ccc #ccc transparent transparent;border-radius:0 6px 0 0;-webkit-transform:translate3d(-1px,0,0);transform:translate3d(-1px,0,0)\n}\n.childLevel:first-child.childLevel[data-v-4f0d12e6]:last-child:after{left:auto;border-radius:0;border-color:transparent #ccc transparent transparent;-webkit-transform:translate3d(1px,0,0);transform:translate3d(1px,0,0)\n}\n.node[data-v-4f0d12e6]{width:13em;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center\n}\n.node[data-v-4f0d12e6],.node .person[data-v-4f0d12e6]{position:relative;display:inline-block\n}\n.node .person[data-v-4f0d12e6]{z-index:2;width:6em;overflow:hidden\n}\n.node .person .avat[data-v-4f0d12e6]{display:block;width:4em;height:4em;margin:auto;overflow:hidden;background:#fff;border:1px solid #ccc;-webkit-box-sizing:border-box;box-sizing:border-box\n}\n.node .person .avat img[data-v-4f0d12e6]{width:100%;height:100%\n}\n.node .person .name[data-v-4f0d12e6]{height:2em;line-height:2em;overflow:hidden;width:100%\n}\n.node.hasMate[data-v-4f0d12e6]:after{content:"";position:absolute;left:2em;right:2em;top:2em;border-top:2px solid #ccc;z-index:1\n}\n.node.hasMate .person[data-v-4f0d12e6]:last-child{margin-left:1em\n}\n.landscape[data-v-4f0d12e6]{-webkit-transform:rotate(-90deg);transform:rotate(-90deg);padding:0 4em\n}\n.landscape .node[data-v-4f0d12e6]{text-align:left;height:8em;width:8em\n}\n.landscape .person[data-v-4f0d12e6]{position:relative;-webkit-transform:rotate(90deg);transform:rotate(90deg);padding-left:4.5em;height:4em;top:4em;left:-1em\n}\n.landscape .person .avat[data-v-4f0d12e6]{position:absolute;left:0\n}\n.landscape .person .name[data-v-4f0d12e6]{height:4em;line-height:4em\n}\n.landscape .hasMate[data-v-4f0d12e6]{position:relative\n}\n.landscape .hasMate .person[data-v-4f0d12e6]{position:absolute\n}\n.landscape .hasMate .person[data-v-4f0d12e6]:first-child{left:auto;right:-4em\n}\n.landscape .hasMate .person[data-v-4f0d12e6]:last-child{left:-4em;margin-left:0\n}',""])},e66a:function(e,t,a){var n=a("6d35");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=a("499e").default;r("7832dc40",n,!0,{sourceMap:!1,shadowMode:!1})}});
//# sourceMappingURL=app.06042921.js.map