(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1202:function(e,a,t){"use strict";t.r(a);var n=t(227),c=t(228),s=t(230),r=t(229),l=t(231),o=t(3),m=t.n(o),i=t(980),u=t(997),p=t(998),d=t(953),b=t(954),f=t(999),E=t(1131),g=t(1132),N=t(1e3),j=t(1133),y=t(907),h=t(35),O=t(100),v=t(112),w=t.n(v),R=t(884),M=t.n(R),T=t(885),k={tag:T.l,className:w.a.string,cssModule:w.a.object},x=function(e){var a=e.className,t=e.cssModule,n=e.tag,c=Object(O.a)(e,["className","cssModule","tag"]),s=Object(T.h)(M()(a,"card-footer"),t);return m.a.createElement(n,Object(h.a)({},c,{className:s}))};x.propTypes=k,x.defaultProps={tag:"div"};var C=x,P=function(e){function a(){return Object(n.a)(this,a),Object(s.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(l.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return m.a.createElement("div",{className:"app flex-row align-items-center"},m.a.createElement(i.a,null,m.a.createElement(u.a,{className:"justify-content-center"},m.a.createElement(p.a,{md:"9",lg:"7",xl:"6"},m.a.createElement(d.a,{className:"mx-4"},m.a.createElement(b.a,{className:"p-4"},m.a.createElement(f.a,null,m.a.createElement("h1",null,"Register"),m.a.createElement("p",{className:"text-muted"},"Create your account"),m.a.createElement(E.a,{className:"mb-3"},m.a.createElement(g.a,{addonType:"prepend"},m.a.createElement(N.a,null,m.a.createElement("i",{className:"icon-user"}))),m.a.createElement(j.a,{type:"text",placeholder:"Username",autoComplete:"username"})),m.a.createElement(E.a,{className:"mb-3"},m.a.createElement(g.a,{addonType:"prepend"},m.a.createElement(N.a,null,"@")),m.a.createElement(j.a,{type:"text",placeholder:"Email",autoComplete:"email"})),m.a.createElement(E.a,{className:"mb-3"},m.a.createElement(g.a,{addonType:"prepend"},m.a.createElement(N.a,null,m.a.createElement("i",{className:"icon-lock"}))),m.a.createElement(j.a,{type:"password",placeholder:"Password",autoComplete:"new-password"})),m.a.createElement(E.a,{className:"mb-4"},m.a.createElement(g.a,{addonType:"prepend"},m.a.createElement(N.a,null,m.a.createElement("i",{className:"icon-lock"}))),m.a.createElement(j.a,{type:"password",placeholder:"Repeat password",autoComplete:"new-password"})),m.a.createElement(y.a,{color:"success",block:!0},"Create Account"))),m.a.createElement(C,{className:"p-4"},m.a.createElement(u.a,null,m.a.createElement(p.a,{xs:"12",sm:"6"},m.a.createElement(y.a,{className:"btn-facebook mb-1",block:!0},m.a.createElement("span",null,"facebook"))),m.a.createElement(p.a,{xs:"12",sm:"6"},m.a.createElement(y.a,{className:"btn-twitter mb-1",block:!0},m.a.createElement("span",null,"twitter"))))))))))}}]),a}(o.Component);a.default=P},953:function(e,a,t){"use strict";var n=t(35),c=t(100),s=t(3),r=t.n(s),l=t(112),o=t.n(l),m=t(884),i=t.n(m),u=t(885),p={tag:u.l,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},d=function(e){var a=e.className,t=e.cssModule,s=e.color,l=e.body,o=e.inverse,m=e.outline,p=e.tag,d=e.innerRef,b=Object(c.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(u.h)(i()(a,"card",!!o&&"text-white",!!l&&"card-body",!!s&&(m?"border":"bg")+"-"+s),t);return r.a.createElement(p,Object(n.a)({},b,{className:f,ref:d}))};d.propTypes=p,d.defaultProps={tag:"div"},a.a=d},954:function(e,a,t){"use strict";var n=t(35),c=t(100),s=t(3),r=t.n(s),l=t(112),o=t.n(l),m=t(884),i=t.n(m),u=t(885),p={tag:u.l,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},d=function(e){var a=e.className,t=e.cssModule,s=e.innerRef,l=e.tag,o=Object(c.a)(e,["className","cssModule","innerRef","tag"]),m=Object(u.h)(i()(a,"card-body"),t);return r.a.createElement(l,Object(n.a)({},o,{className:m,ref:s}))};d.propTypes=p,d.defaultProps={tag:"div"},a.a=d},999:function(e,a,t){"use strict";var n=t(35),c=t(100),s=t(890),r=t(63),l=t(3),o=t.n(l),m=t(112),i=t.n(m),u=t(884),p=t.n(u),d=t(885),b={children:i.a.node,inline:i.a.bool,tag:d.l,innerRef:i.a.oneOfType([i.a.object,i.a.func,i.a.string]),className:i.a.string,cssModule:i.a.object},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.submit=t.submit.bind(Object(s.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.inline,r=e.tag,l=e.innerRef,m=Object(c.a)(e,["className","cssModule","inline","tag","innerRef"]),i=Object(d.h)(p()(a,!!s&&"form-inline"),t);return o.a.createElement(r,Object(n.a)({},m,{ref:l,className:i}))},a}(l.Component);f.propTypes=b,f.defaultProps={tag:"form"},a.a=f}}]);
//# sourceMappingURL=32.14b4b894.chunk.js.map