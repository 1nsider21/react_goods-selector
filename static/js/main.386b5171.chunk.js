(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(2),c=a.n(s),r=a(3),l=a(4),u=a(6),i=a(5),m=(a(12),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),d=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={status:""},e.saveHandler=function(t){e.setState({status:t})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state.status;return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Selected good: ".concat(t)),o.a.createElement("div",{className:"goods"},m.map((function(a){return o.a.createElement("button",{key:a,type:"button",className:a===t?"goods__item selected__goods":"goods__item",onClick:function(){return e.saveHandler(a)}},a)}))),o.a.createElement("button",{type:"button",className:"clear-button",onClick:function(){e.setState({status:""})}},"X"))}}]),a}(o.a.Component);c.a.render(o.a.createElement(d,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.386b5171.chunk.js.map