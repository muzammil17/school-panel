(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1178:function(e,a,t){"use strict";t.r(a);var l=t(227),c=t(228),n=t(230),s=t(229),o=t(231),r=t(3),m=t.n(r),i=t(232),d=t(887),u=t(886),E=function(e){function a(){var e,t;Object(l.a)(this,a);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(t=Object(n.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(o)))).state={data:{},loading:!0},t}return Object(o.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(d.a)("event/"+this.props.match.params.eventId,"get").then(function(a){console.log(a.data),e.setState({data:a.data.event,id:a.data.event.id,loading:!1})}).catch(function(e){console.log(e.response)})}},{key:"render",value:function(){var e=this.state,a=e.data;return e.loading?m.a.createElement("p",null,"loading..."):m.a.createElement("div",{className:"animated fadeIn"},m.a.createElement("div",{className:"card "},m.a.createElement("div",{className:"card-header"},m.a.createElement("h2",{className:"float-left"},"EVENT"),m.a.createElement("span",{className:"float-right mt-2"},m.a.createElement(i.Link,{color:"primary",to:{pathname:"/editEvent/"+this.state.id,state:{search:this.state.id}}},"Edit"))),m.a.createElement("div",{className:"card-body"},a.thumbnail&&m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:" col-6 col-sm-3 "},m.a.createElement("img",{src:u.b+a.thumbnail,style:{height:150}}))),m.a.createElement("hr",null)),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:" col-6 col-sm-3 "},m.a.createElement("span",{className:"bold"},"Title")),m.a.createElement("div",{className:"col-sm-4 col-8"},m.a.createElement("span",{className:"float-left "},a.name))),m.a.createElement("hr",null),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:" col-6 col-sm-3 "},m.a.createElement("span",{className:"bold"},"Date")),m.a.createElement("div",{className:"col-sm-4 col-8"},m.a.createElement("span",{className:"float-left "},a.Edate))),m.a.createElement("hr",null),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:" col-6 col-sm-3 "},m.a.createElement("span",{className:"bold"},"Venue")),m.a.createElement("div",{className:"col-sm-4 col-8"},m.a.createElement("span",{className:"float-left "},a.venue))),m.a.createElement("hr",null),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:" col-4 col-sm-3 "},m.a.createElement("span",{className:"bold"},"Details")),m.a.createElement("div",{className:"col-sm-8 col-8"},m.a.createElement("span",{className:"float-left "},a.details," "))))))}}]),a}(r.Component);a.default=E},886:function(e,a,t){"use strict";t.d(a,"a",function(){return l}),t.d(a,"b",function(){return c});var l="http://school.mictronicx.com/backend/public/api/",c="http://school.mictronicx.com/backend/public/"},887:function(e,a,t){"use strict";t.d(a,"a",function(){return s});var l=t(888),c=t.n(l),n=t(886);function s(e,a,t){console.log(n.a+e);var l=localStorage.getItem("token");return console.log(l),console.log("bearer ".concat(l)),"get"===a||"Get"===a||"delete"===a||"Delete"===a?c()({method:a,url:n.a+e,params:t,headers:{Authorization:"Bearer ".concat(l)},config:{headers:{"Content-Type":"application/json"}}}):c()({method:a,url:n.a+e,data:t,headers:{Authorization:"Bearer ".concat(l)},config:{headers:{"Content-Type":"application/json"}}})}}}]);
//# sourceMappingURL=41.61c8bc4f.chunk.js.map