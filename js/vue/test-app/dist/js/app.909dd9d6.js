(function(t){function e(e){for(var o,u,l=e[0],a=e[1],i=e[2],p=0,d=[];p<l.length;p++)u=l[p],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&d.push(r[u][0]),r[u]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);s&&s(e);while(d.length)d.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,l=1;l<n.length;l++){var a=n[l];0!==r[a]&&(o=!1)}o&&(c.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},r={app:0},c=[];function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var i=0;i<l.length;i++)e(l[i]);var s=a;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("TestAppParent",[t._v("AAA")]),n("test-app-parent",[t._v("bbb")]),n("br"),n("hr"),n("br"),n("TestAppButtons"),n("br"),n("hr"),n("br"),n("SlotTest",[n("h2",{attrs:{slot:"slot1"},slot:"slot1"},[t._v("Slot 1 Content")]),n("p",[t._v("Classic Content")]),n("template",{slot:"slot2"},[n("h4",[t._v("Slot 2 Content")])])],2),n("br"),n("hr"),n("br"),n("TodoList",{attrs:{id:"todoList",todos:t.todos},scopedSlots:t._u([{key:"default",fn:function(e){return[e.todo.complete?n("span",[t._v("✔️")]):t._e(),n("span",[t._v(t._s(e.todo.text))])]}}])}),n("br"),n("hr"),n("br"),n("DynamicComponentsSection")],1)},c=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Parent")]),n("TestAppChild",t._b({attrs:{user:t.account}},"TestAppChild",t.obj,!1))],1)},l=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v(t._s(t.user.name))]),n("p",[t._v(t._s(t.user.email))]),n("p",[t._v(t._s(t.id)+" | "+t._s(t.title))])])},i=[],s=(n("a9e3"),{name:"TestAppChild",props:{id:Number,title:String,user:Object}}),p=s,d=n("2877"),f=Object(d["a"])(p,a,i,!1,null,"415de2ac",null),m=f.exports,h={name:"TestAppParent",components:{TestAppChild:m},data:function(){return{account:{name:"barbagianni",email:"barbagianni3030@email.net"},obj:{id:777,title:"BYE BYE YESTERDAY"}}}},_=h,b=Object(d["a"])(_,u,l,!1,null,null,null),v=b.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Total Clicks: "+t._s(t.totalClicks))]),n("h4",[t._v("This button has been clicked "+t._s(t.currentButtonClicks)+" times")]),n("CounterButton",{on:{"add-click":function(e){return t.increaseClickValues(e)}}}),n("CounterButton",{on:{"add-click":function(e){return t.increaseClickValues(e)}}}),n("CounterButton",{on:{"add-click":function(e){return t.increaseClickValues(e)}}})],1)},k=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{on:{click:function(e){t.propagatePropValues(t.$emit("add-click",t.count))}}},[t._v("Counter: "+t._s(t.count))])])},x=[],T={name:"CounterButton",data:function(){return{count:0}},methods:{propagatePropValues:function(){this.count++}}},g=T,j=Object(d["a"])(g,y,x,!1,null,"d966c13c",null),A=j.exports,O={name:"TestAppButtons",data:function(){return{totalClicks:0,currentButtonClicks:0}},methods:{increaseClickValues:function(t){this.totalClicks++,this.currentButtonClicks=t}},components:{CounterButton:A}},P=O,E=Object(d["a"])(P,C,k,!1,null,"f01d4632",null),S=E.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",[t._t("slot1")],2),n("main",[t._t("default")],2),n("footer",[t._t("slot2",[t._v("Copyright (c) - 2020")])],2)])},w=[],B={name:"SlotTest"},D=B,V=Object(d["a"])(D,$,w,!1,null,null,null),L=V.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",t._l(t.todos,(function(e){return n("li",{key:e.id},[t._t("default",[t._v(" "+t._s(e.text)+" "),e.complete?n("span",[t._v("✔️")]):t._e()],{todo:e})],2)})),0)])},H=[],R={name:"TodoList",props:["todos"]},Y=R,N=Object(d["a"])(Y,M,H,!1,null,null,null),J=N.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Dynamic Components")]),t._l(t.tabs,(function(e){return n("button",{key:e,on:{click:function(n){t.currentTab=e}}},[t._v(" "+t._s(e.component.name)+" ")])})),n(t.currentTab.component,{tag:"component"})],2)},W=[],F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("Archive Component")])},K=[],q={name:"ArchiveTab"},z=q,G=Object(d["a"])(z,F,K,!1,null,null,null),I=G.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("Home Component")])},X=[],Z={name:"HomeTab"},tt=Z,et=Object(d["a"])(tt,Q,X,!1,null,null,null),nt=et.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("Posts Component")]),n("label",[t._v("Posts/Authors "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.isChecked,expression:"isChecked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isChecked)?t._i(t.isChecked,null)>-1:t.isChecked},on:{change:function(e){var n=t.isChecked,o=e.target,r=!!o.checked;if(Array.isArray(n)){var c=null,u=t._i(n,c);o.checked?u<0&&(t.isChecked=n.concat([c])):u>-1&&(t.isChecked=n.slice(0,u).concat(n.slice(u+1)))}else t.isChecked=r}}})]),n("keep-alive",[n(t.selectedComponent,{tag:"component"})],1)],1)},rt=[],ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h4",[t._v("Authors")]),n("button",{on:{click:function(e){t.count++}}},[t._v("Count: "+t._s(t.count))])])},ut=[],lt={name:"AuthorsCount",data:function(){return{count:0}}},at=lt,it=Object(d["a"])(at,ct,ut,!1,null,null,null),st=it.exports,pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h4",[t._v("Posts")]),n("button",{on:{click:function(e){t.count++}}},[t._v("Count: "+t._s(t.count))])])},dt=[],ft={name:"PostsCount",data:function(){return{count:0}}},mt=ft,ht=Object(d["a"])(mt,pt,dt,!1,null,null,null),_t=ht.exports,bt={name:"PostsTab",components:{CountAuthors:st,CountPosts:_t},data:function(){return{isChecked:!1}},computed:{selectedComponent:function(){return this.isChecked?st:_t}}},vt=bt,Ct=Object(d["a"])(vt,ot,rt,!1,null,null,null),kt=Ct.exports,yt={name:"DynamicComponentsSection",data:function(){return{tabs:[{name:"Home",component:nt},{name:"Posts",component:kt},{name:"Archive",component:I}],currentTab:{}}},created:function(){this.currentTab=this.tabs[0]}},xt=yt,Tt=Object(d["a"])(xt,U,W,!1,null,"d1caf4b8",null),gt=Tt.exports,jt={components:{DynamicComponentsSection:gt,TodoList:J,SlotTest:L,TestAppParent:v,TestAppButtons:S},data:function(){return{todos:[{id:1,text:"Buy a new monitor",complete:!0},{id:2,text:"Play Rebirth of the Night on the serer",complete:!1},{id:3,text:"Fix a bug in Roots",complete:!0},{id:4,text:"Learn more Vue.js stuff",complete:!0},{id:5,text:"Learn more Kotlin Concepts",complete:!1},{id:6,text:"Watch Run with the Wind",complete:!1}]}}},At=jt,Ot=(n("034f"),Object(d["a"])(At,r,c,!1,null,null,null)),Pt=Ot.exports;o["a"].config.productionTip=!1,o["a"].config.errorHandler=function(t,e,n){alert(t+"#"+e+"#"+n)},new o["a"]({render:function(t){return t(Pt)},beforeCreate:function(){alert("beforeCreate")},created:function(){alert("created")},beforeMount:function(){alert("beforeMount")},mounted:function(){alert("mounted")},beforeUpdate:function(){alert("beforeUpdate")},updated:function(){alert("updated")},beforeDestroy:function(){alert("beforeDestroy")},destroyed:function(){alert("destroyed")}}).$mount("#app"),console.log(o["a"].version)},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.909dd9d6.js.map