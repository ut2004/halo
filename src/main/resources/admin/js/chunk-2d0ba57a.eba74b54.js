(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ba57a"],{3799:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a-row",{attrs:{gutter:12}},[n("a-col",{style:{"padding-bottom":"12px"},attrs:{xl:10,lg:10,md:10,sm:24,xs:24}},[n("a-card",{attrs:{title:t.title,bodyStyle:{padding:"16px"}}},[n("a-form",{attrs:{layout:"horizontal"}},[n("a-form-item",{attrs:{label:"网站名称："}},[n("a-input",{model:{value:t.link.name,callback:function(e){t.$set(t.link,"name",e)},expression:"link.name"}})],1),n("a-form-item",{attrs:{label:"网站地址：",help:"* 需要加上 http://"}},[n("a-input",{model:{value:t.link.url,callback:function(e){t.$set(t.link,"url",e)},expression:"link.url"}})],1),n("a-form-item",{attrs:{label:"Logo："}},[n("a-input",{model:{value:t.link.logo,callback:function(e){t.$set(t.link,"logo",e)},expression:"link.logo"}})],1),n("a-form-item",{attrs:{label:"分组："}},[n("a-auto-complete",{attrs:{dataSource:t.teams,allowClear:""},model:{value:t.link.team,callback:function(e){t.$set(t.link,"team",e)},expression:"link.team"}})],1),n("a-form-item",{attrs:{label:"排序编号："}},[n("a-input",{attrs:{type:"number"},model:{value:t.link.priority,callback:function(e){t.$set(t.link,"priority",e)},expression:"link.priority"}})],1),n("a-form-item",{attrs:{label:"描述："}},[n("a-input",{attrs:{type:"textarea",autoSize:{minRows:5}},model:{value:t.link.description,callback:function(e){t.$set(t.link,"description",e)},expression:"link.description"}})],1),n("a-form-item",["create"===t.formType?n("a-button",{attrs:{type:"primary"},on:{click:t.handleSaveClick}},[t._v("保存")]):n("a-button-group",[n("a-button",{attrs:{type:"primary"},on:{click:t.handleSaveClick}},[t._v("更新")]),"update"===t.formType?n("a-button",{attrs:{type:"dashed"},on:{click:t.handleAddLink}},[t._v("返回添加")]):t._e()],1)],1)],1)],1)],1),n("a-col",{style:{"padding-bottom":"12px"},attrs:{xl:14,lg:14,md:14,sm:24,xs:24}},[n("a-card",{attrs:{title:"所有友情链接",bodyStyle:{padding:"16px"}}},[t.isMobile()?n("a-list",{attrs:{itemLayout:"vertical",size:"large",dataSource:t.links,loading:t.loading},scopedSlots:t._u([{key:"renderItem",fn:function(e,a){return n("a-list-item",{key:a},[n("template",{slot:"actions"},[n("a-dropdown",{attrs:{placement:"topLeft",trigger:["click"]}},[n("span",[n("a-icon",{attrs:{type:"bars"}})],1),n("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[n("a-menu-item",[n("a",{attrs:{href:"javascript:;"},on:{click:function(n){return t.handleEditLink(e.id)}}},[t._v("编辑")])]),n("a-menu-item",[n("a-popconfirm",{attrs:{title:"你确定要删除【"+e.name+"】链接？",okText:"确定",cancelText:"取消"},on:{confirm:function(n){return t.handleDeleteLink(e.id)}}},[n("a",{attrs:{href:"javascript:;"}},[t._v("删除")])])],1)],1)],1)],1),n("template",{slot:"extra"},[n("span",[t._v("\n                "+t._s(e.team)+"\n              ")])]),n("a-list-item-meta",[n("template",{slot:"description"},[t._v("\n                "+t._s(e.description)+"\n              ")]),n("span",{staticStyle:{"max-width":"300px",display:"block","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"},attrs:{slot:"title"},slot:"title"},[t._v("\n                "+t._s(e.name)+"\n              ")])],2),n("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.url))])],2)}}],null,!1,365927485)}):n("a-table",{attrs:{columns:t.columns,dataSource:t.links,loading:t.loading,rowKey:function(t){return t.id},scrollToFirstRowOnChange:!0},scopedSlots:t._u([{key:"url",fn:function(e){return[n("a",{attrs:{target:"_blank",href:e}},[t._v(t._s(e))])]}},{key:"name",fn:function(e){return n("ellipsis",{attrs:{length:15,tooltip:""}},[t._v(t._s(e))])}},{key:"action",fn:function(e,a){return n("span",{},[n("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.handleEditLink(a.id)}}},[t._v("编辑")]),n("a-divider",{attrs:{type:"vertical"}}),n("a-popconfirm",{attrs:{title:"你确定要删除【"+a.name+"】链接？",okText:"确定",cancelText:"取消"},on:{confirm:function(e){return t.handleDeleteLink(a.id)}}},[n("a",{attrs:{href:"javascript:;"}},[t._v("删除")])])],1)}}])})],1)],1)],1),n("div",{staticStyle:{position:"fixed",bottom:"30px",right:"30px"}},[n("a-button",{attrs:{type:"primary",shape:"circle",icon:"setting",size:"large"},on:{click:function(e){t.optionFormVisible=!0}}})],1),n("a-modal",{attrs:{title:"页面设置",afterClose:t.onOptionFormClose},model:{value:t.optionFormVisible,callback:function(e){t.optionFormVisible=e},expression:"optionFormVisible"}},[n("template",{slot:"footer"},[n("a-button",{key:"submit",attrs:{type:"primary"},on:{click:function(e){return t.handleSaveOptions()}}},[t._v("保存")])],1),n("a-form",{attrs:{layout:"vertical"}},[n("a-form-item",{attrs:{label:"页面标题：",help:"* 需要主题进行适配"}},[n("a-input",{model:{value:t.options.links_title,callback:function(e){t.$set(t.options,"links_title",e)},expression:"options.links_title"}})],1)],1)],2)],1)},i=[],o=(n("8e6e"),n("ac6a"),n("456d"),n("7f7f"),n("bd86")),l=(n("b54a"),n("2f62")),r=n("ac0d"),s=n("482b"),c=n("9efd"),d="/api/admin/links",u={listAll:function(){return Object(c["a"])({url:"".concat(d),method:"get"})},create:function(t){return Object(c["a"])({url:d,data:t,method:"post"})},get:function(t){return Object(c["a"])({url:"".concat(d,"/").concat(t),method:"get"})},getByParse:function(t){return Object(c["a"])({url:"".concat(d,"/parse"),params:{url:t},method:"get"})},update:function(t,e){return Object(c["a"])({url:"".concat(d,"/").concat(t),data:e,method:"put"})},delete:function(t){return Object(c["a"])({url:"".concat(d,"/").concat(t),method:"delete"})},listTeams:function(){return Object(c["a"])({url:"".concat(d,"/teams"),method:"get"})}},p=u;function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var k=[{title:"名称",dataIndex:"name",ellipsis:!0,scopedSlots:{customRender:"name"}},{title:"网址",dataIndex:"url",ellipsis:!0,scopedSlots:{customRender:"url"}},{title:"分组",ellipsis:!0,dataIndex:"team"},{title:"排序",dataIndex:"priority"},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],h={mixins:[r["a"],r["b"]],data:function(){return{formType:"create",optionFormVisible:!1,data:[],loading:!1,columns:k,links:[],link:{},teams:[],options:[]}},computed:{title:function(){return this.link.id?"修改友情链接":"添加友情链接"}},created:function(){this.loadLinks(),this.loadTeams(),this.loadFormOptions()},methods:f({},Object(l["b"])(["loadOptions"]),{loadLinks:function(){var t=this;this.loading=!0,p.listAll().then((function(e){t.links=e.data.data,t.loading=!1}))},loadTeams:function(){var t=this;p.listTeams().then((function(e){t.teams=e.data.data}))},loadFormOptions:function(){var t=this;s["a"].listAll().then((function(e){t.options=e.data.data}))},handleSaveClick:function(){this.createOrUpdateLink()},handleAddLink:function(){this.formType="create",this.link={}},handleEditLink:function(t){var e=this;p.get(t).then((function(t){e.link=t.data.data,e.formType="update"}))},handleDeleteLink:function(t){var e=this;p.delete(t).then((function(t){e.$message.success("删除成功！"),e.loadLinks(),e.loadTeams()}))},handleParseUrl:function(){var t=this;p.getByParse(this.link.url).then((function(e){t.link=e.data.data}))},createOrUpdateLink:function(){var t=this;this.link.name?this.link.url?(this.link.id?p.update(this.link.id,this.link).then((function(e){t.$message.success("更新成功！"),t.loadLinks(),t.loadTeams()})):p.create(this.link).then((function(e){t.$message.success("保存成功！"),t.loadLinks(),t.loadTeams()})),this.handleAddLink()):this.$notification["error"]({message:"提示",description:"网站地址不能为空！"}):this.$notification["error"]({message:"提示",description:"网站名称不能为空！"})},handleSaveOptions:function(){var t=this;s["a"].save(this.options).then((function(e){t.loadFormOptions(),t.loadOptions(),t.$message.success("保存成功！"),t.optionFormVisible=!1}))},onOptionFormClose:function(){this.optionFormVisible=!1}})},b=h,v=n("2877"),y=Object(v["a"])(b,a,i,!1,null,null,null);e["default"]=y.exports}}]);