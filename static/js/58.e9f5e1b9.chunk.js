(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1157:function(e,a,t){"use strict";t.r(a);var n=t(227),c=t(228),s=t(230),r=t(229),l=t(231),m=t(3),o=t.n(m),i=t(900),d=(t(899),t(232)),u=t(888),p=t.n(u),b=function(e){function a(){var e,t;Object(n.a)(this,a);for(var c=arguments.length,l=new Array(c),m=0;m<c;m++)l[m]=arguments[m];return(t=Object(s.a)(this,(e=Object(r.a)(a)).call.apply(e,[this].concat(l)))).state={posts:[]},t}return Object(l.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://jsonplaceholder.typicode.com/posts").then(function(a){e.setState({posts:a.data})})}},{key:"render",value:function(){var e=[{Header:"No",accessor:"userId"},{Header:"First Name",accessor:"id"},{Header:"Last name",accessor:"title"},{Header:"Actions",Cell:function(e){return o.a.createElement("span",{className:""},o.a.createElement(d.Link,null,o.a.createElement("button",{className:"btn btn-primary"},o.a.createElement("i",{class:"icon-file-text"}))),o.a.createElement("button",{className:"btn btn-success ml-2"},o.a.createElement("i",{class:"icon-pencil"})),o.a.createElement("button",{className:"btn btn-danger ml-2"},o.a.createElement("i",{class:"icon-trash"})))}}];return o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement("div",{className:"border bg-white"},o.a.createElement("div",{className:"card "},o.a.createElement("div",{className:"card-header"},o.a.createElement("h3",null,"ATTENDANCE"))),o.a.createElement("div",{className:"card-body "},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-5 offset-md-7 col-sm-12"},o.a.createElement("div",{className:"showComponentSearchBox"},o.a.createElement("input",{type:"text",placeholder:"Search by name",className:"float-left py-1 px-2"}),o.a.createElement("button",{className:"btn btn-primary float-right py-1"},o.a.createElement("i",{class:"icon-search mr-2"}))))),o.a.createElement(i.a,{columns:e,data:this.state.posts,defaultPageSize:5,noDataText:"",className:"mt-5"}))))}}]),a}(m.Component);a.default=b}}]);
//# sourceMappingURL=58.e9f5e1b9.chunk.js.map