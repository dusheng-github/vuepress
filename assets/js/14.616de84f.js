(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{387:function(t,a,e){},418:function(t,a,e){"use strict";e(387)},442:function(t,a,e){"use strict";e.r(a);var n={name:"form",mounted(){setTimeout(this.onSubmit,1e3)},data:()=>({form:{name:"myfirst",duration:"5",timingFunction:"linear",delay:"1",count:"infinite",direction:"alternate"},show:!0,rules:{name:[{type:"required",required:!0,message:"请输入动画名称",trigger:"blur"}],duration:[{type:"required",required:!0,message:"请输入动画运行时间",trigger:"blur"}],delay:[{type:"required",required:!0,message:"请输入动画延迟时间",trigger:"blur"}]}}),methods:{onSubmit(){this.$refs.form.validate(t=>{});const{name:t,duration:a,timingFunction:e,delay:n,count:s,direction:r}=this.form;this.$refs.animate.style.setProperty("--a",`${t} ${a}s ${e} ${n}s ${s} ${r}`)},reset(){this.form=this.$options.data().form,this.onSubmit()}}},s=(e(418),e(30)),r=Object(s.a)(n,(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"动画属性介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动画属性介绍"}},[t._v("#")]),t._v(" 动画属性介绍")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性  ")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("animation")]),t._v(" "),a("td",[t._v("所有动画属性的简写属性。")])]),t._v(" "),a("tr",[a("td",[t._v("animation-name")]),t._v(" "),a("td",[t._v("规定 @keyframes 动画的名称")])]),t._v(" "),a("tr",[a("td",[t._v("animation-duration")]),t._v(" "),a("td",[t._v("规定动画完成一个周期所花费的秒或毫秒。默认是 0。")])]),t._v(" "),a("tr",[a("td",[t._v("animation-timing-function")]),t._v(" "),a("td",[t._v('规定动画的速度曲线。默认是 "ease"。')])]),t._v(" "),a("tr",[a("td",[t._v("animation-fill-mode")]),t._v(" "),a("td",[t._v("规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。")])]),t._v(" "),a("tr",[a("td",[t._v("animation-delay")]),t._v(" "),a("td",[t._v("规定动画何时开始。默认是 0。如果是负数, 这表示动画从n秒的地方开始")])]),t._v(" "),a("tr",[a("td",[t._v("animation-iteration-count")]),t._v(" "),a("td",[t._v("规定动画被播放的次数。默认是 1。")])]),t._v(" "),a("tr",[a("td",[t._v("animation-direction")]),t._v(" "),a("td",[t._v('规定动画是否在下一周期逆向地播放。默认是 "normal"。')])]),t._v(" "),a("tr",[a("td",[t._v("animation-play-state")]),t._v(" "),a("td",[t._v('规定动画是否正在运行或暂停。默认是 "running"。')])])])]),t._v(" "),a("DemoContainer",{attrs:{title:"示例： 动画演示"}},[a("div",{staticStyle:{height:"400px",display:"flex","justify-content":"space-between"}},[a("div",{staticStyle:{width:"60%"}},[a("div",{ref:"animate",staticClass:"animate"})]),t._v(" "),t.show?a("div",{staticClass:"control",staticStyle:{width:"500px"}},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"180px",size:"mini",rules:t.rules}},[a("el-form-item",{attrs:{label:"name"}},[a("el-input",{model:{value:t.form.name,callback:function(a){t.$set(t.form,"name",a)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"duration"}},[a("el-input",{attrs:{type:"number"},model:{value:t.form.duration,callback:function(a){t.$set(t.form,"duration",a)},expression:"form.duration"}},[a("template",{slot:"append"},[t._v("s")])],2)],1),t._v(" "),a("el-form-item",{attrs:{label:"timing-function"}},[a("el-select",{attrs:{placeholder:"请选择播放速度曲线"},model:{value:t.form.timingFunction,callback:function(a){t.$set(t.form,"timingFunction",a)},expression:"form.timingFunction"}},[a("el-option",{attrs:{label:"ease",value:"ease"}}),t._v(" "),a("el-option",{attrs:{label:"ease-in",value:"ease-in"}}),t._v(" "),a("el-option",{attrs:{label:"ease-out",value:"ease-out"}}),t._v(" "),a("el-option",{attrs:{label:"ease-in-out",value:"ease-in-out"}}),t._v(" "),a("el-option",{attrs:{label:"linear",value:"linear"}}),t._v(" "),a("el-option",{attrs:{label:"cubic-bezier函数",value:"cubic-bezier"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"delay"}},[a("el-input",{attrs:{type:"number"},model:{value:t.form.delay,callback:function(a){t.$set(t.form,"delay",a)},expression:"form.delay"}},[a("template",{slot:"append"},[t._v("s")])],2)],1),t._v(" "),a("el-form-item",{attrs:{label:"iteration-count"}},[a("el-select",{attrs:{placeholder:"请选择动画被播放的次数"},model:{value:t.form.count,callback:function(a){t.$set(t.form,"count",a)},expression:"form.count"}},[a("el-option",{attrs:{label:"1",value:1}}),t._v(" "),a("el-option",{attrs:{label:"2",value:2}}),t._v(" "),a("el-option",{attrs:{label:"infinite",value:"infinite"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"direction"}},[a("el-select",{attrs:{placeholder:"请选择是否循环交替反向播放动画"},model:{value:t.form.direction,callback:function(a){t.$set(t.form,"direction",a)},expression:"form.direction"}},[a("el-option",{attrs:{label:"normal",value:"normal"}}),t._v(" "),a("el-option",{attrs:{label:"reverse",value:"reverse"}}),t._v(" "),a("el-option",{attrs:{label:"alternate",value:"alternate"}}),t._v(" "),a("el-option",{attrs:{label:"alternate-reverse",value:"alternate-reverse"}}),t._v(" "),a("el-option",{attrs:{label:"initial",value:"initial"}}),t._v(" "),a("el-option",{attrs:{label:"inherit",value:"inherit"}})],1)],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.onSubmit}},[t._v("执行")]),t._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:t.reset}},[t._v("重置")])],1)],1)],1):t._e()])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".animate")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("relative"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" myfirst 5s linear 1s infinite alternate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" myfirst")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("0%")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("25%")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("yellow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("50%")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("75%")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("100%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])],1)}),[],!1,null,null,null);a.default=r.exports}}]);