(this.webpackJsonpLelangAja=this.webpackJsonpLelangAja||[]).push([[13],{493:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n="http://10.10.13.71:8845"},494:function(e,t,a){"use strict";a.d(t,"h",(function(){return n})),a.d(t,"k",(function(){return r})),a.d(t,"a",(function(){return c})),a.d(t,"g",(function(){return l})),a.d(t,"i",(function(){return s})),a.d(t,"b",(function(){return o})),a.d(t,"d",(function(){return i})),a.d(t,"c",(function(){return u})),a.d(t,"f",(function(){return m})),a.d(t,"e",(function(){return d})),a.d(t,"j",(function(){return f}));var n=1,r=2,c=3,l=5,s=6,o=7,u=8,i=9,m=10,d=11,f=12},496:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={Authorization:"Bearer ".concat(localStorage.getItem("@token"))}},504:function(e,t,a){"use strict";var n=a(2),r=a.n(n),c=a(524),l=a(525),s=a(526);t.a=function(e){for(var t=e.totalPages,a=e.getData,n=[],o=function(e){n.push(r.a.createElement(c.a,null,r.a.createElement(l.a,{onClick:function(){return a(e)}},e+1)))},u=0;u<t;u++)o(u);return r.a.createElement("nav",null,r.a.createElement(s.a,null,r.a.createElement(c.a,null,r.a.createElement(l.a,{previous:!0,tag:"button"},"Prev")),n.map((function(e){return e})),r.a.createElement(c.a,null,r.a.createElement(l.a,{next:!0,tag:"button"},"Next"))))}},524:function(e,t,a){"use strict";var n=a(19),r=a(49),c=a(2),l=a.n(c),s=a(61),o=a.n(s),u=a(489),i=a.n(u),m=a(490),d={active:o.a.bool,children:o.a.node,className:o.a.string,cssModule:o.a.object,disabled:o.a.bool,tag:m.m},f=function(e){var t=e.active,a=e.className,c=e.cssModule,s=e.disabled,o=e.tag,u=Object(r.a)(e,["active","className","cssModule","disabled","tag"]),d=Object(m.i)(i()(a,"page-item",{active:t,disabled:s}),c);return l.a.createElement(o,Object(n.a)({},u,{className:d}))};f.propTypes=d,f.defaultProps={tag:"li"},t.a=f},525:function(e,t,a){"use strict";var n=a(19),r=a(49),c=a(2),l=a.n(c),s=a(61),o=a.n(s),u=a(489),i=a.n(u),m=a(490),d={"aria-label":o.a.string,children:o.a.node,className:o.a.string,cssModule:o.a.object,next:o.a.bool,previous:o.a.bool,first:o.a.bool,last:o.a.bool,tag:m.m},f=function(e){var t,a=e.className,c=e.cssModule,s=e.next,o=e.previous,u=e.first,d=e.last,f=e.tag,p=Object(r.a)(e,["className","cssModule","next","previous","first","last","tag"]),b=Object(m.i)(i()(a,"page-link"),c);o?t="Previous":s?t="Next":u?t="First":d&&(t="Last");var g,h=e["aria-label"]||t;o?g="\u2039":s?g="\u203a":u?g="\xab":d&&(g="\xbb");var E=e.children;return E&&Array.isArray(E)&&0===E.length&&(E=null),p.href||"a"!==f||(f="button"),(o||s||u||d)&&(E=[l.a.createElement("span",{"aria-hidden":"true",key:"caret"},E||g),l.a.createElement("span",{className:"sr-only",key:"sr"},h)]),l.a.createElement(f,Object(n.a)({},p,{className:b,"aria-label":h}),E)};f.propTypes=d,f.defaultProps={tag:"a"},t.a=f},526:function(e,t,a){"use strict";var n=a(19),r=a(49),c=a(2),l=a.n(c),s=a(61),o=a.n(s),u=a(489),i=a.n(u),m=a(490),d={children:o.a.node,className:o.a.string,listClassName:o.a.string,cssModule:o.a.object,size:o.a.string,tag:m.m,listTag:m.m,"aria-label":o.a.string},f=function(e){var t,a=e.className,c=e.listClassName,s=e.cssModule,o=e.size,u=e.tag,d=e.listTag,f=e["aria-label"],p=Object(r.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),b=Object(m.i)(i()(a),s),g=Object(m.i)(i()(c,"pagination",((t={})["pagination-"+o]=!!o,t)),s);return l.a.createElement(u,{className:b,"aria-label":f},l.a.createElement(d,Object(n.a)({},p,{className:g})))};f.propTypes=d,f.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"},t.a=f},549:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return m}));var n=a(499),r=a.n(n),c=a(500),l=a(501),s=a.n(l),o=a(493),u=a(496),i=function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,s.a.get("".concat(o.a,"/users?page=").concat(t,"&size=10"),{headers:u.a});case 3:return a=e.sent,n=a.data,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("".concat(o.a,"/users?page=0&size=10000"),{headers:u.a});case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},551:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(151),r=a(152),c=a(154),l=a(153),s=a(2),o=a.n(s),u=a(594),i=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).generateTableRows=function(){var t=e.props.histories,a=t.sort((function(e,t){return t.bidAmount-e.bidAmount})),n=o.a.createElement("tr",null,o.a.createElement("td",{colSpan:"6",className:"table-warning text-center"},o.a.createElement("strong",null,o.a.createElement("em",null,"Data Still Empty"))));return t.length>0&&(n=a.map((function(e,t){return o.a.createElement("tr",{key:t},o.a.createElement("td",{className:"text-center"},t+1),o.a.createElement("td",{className:"text-center"},e.amount),o.a.createElement("td",{className:"text-center"},e.txrDate),o.a.createElement("td",{className:"text-center"},e.type))}))),n},e}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(u.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{className:"text-center"},"No."),o.a.createElement("th",{className:"text-center"},"Amount"),o.a.createElement("th",{className:"text-center"},"Room Number"),o.a.createElement("th",{className:"text-center"},"Date Transaction"),o.a.createElement("th",{className:"text-center"},"Type Transaction"))),o.a.createElement("tbody",null,this.generateTableRows())))}}]),a}(s.Component)},793:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return I}));var n=a(151),r=a(152),c=a(154),l=a(153),s=a(2),o=a.n(s),u=a(531),i=a(532),m=a(533),d=a(497),f=a(505),p=a(508),b=a(495),g=a(494),h={id:"",username:"",password:"",email:"",role:"",profile:{},wallet:{}},E={users:[],form:Object(b.a)({},h),disabled:!1,isLoading:!1,search:"",totalPages:0};function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case g.h:return Object(b.a)(Object(b.a)({},e),{},{users:e.users.concat([Object(b.a)({},n)])});case g.k:return Object(b.a)(Object(b.a)({},e),{},{users:e.users.map((function(e){return e.id===n.id?Object(b.a)({},n):e}))});case g.a:return Object(b.a)(Object(b.a)({},e),{},{user:e.users.filter((function(e){return e.id!==n}))});case g.b:var r=e.users.find((function(e){return e.id===n}));return Object(b.a)(Object(b.a)({},e),{},{form:r});case g.g:return Object(b.a)(Object(b.a)({},e),{},{form:Object(b.a)({},h)});case g.f:var c=n.inputName,l=n.inputValue,s=Object(b.a)({},e.form);return s[c]=l,Object(b.a)(Object(b.a)({},e),{},{form:Object(b.a)({},s)});case g.i:return Object(b.a)(Object(b.a)({},e),{},{seacrh:n});case g.c:return Object(b.a)(Object(b.a)({},e),{},{users:Object(p.a)(n),isLoading:!1});case g.d:return Object(b.a)(Object(b.a)({},e),{},{isLoading:!0});case g.j:return Object(b.a)(Object(b.a)({},e),{},{totalPages:n});default:return Object(b.a)({},e)}}var v=a(530),O=a(774),N=a(510),y=a(593),x=a(534),D=a(780),k=a(567),w=a(594),C=a(792),T=a(778),M=a(779),P=a(781),A=a(549),S=a(504),z=a(551),L=a(155),R=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).getDataAll=function(){Object(A.a)().then((function(e){r.setState({tempUsers:e.content})}))},r.getData=function(e){var t=r.props,a=t.fetchData,n=t.fetchComplete,c=t.setTotalPages;a(),Object(A.b)(e).then((function(e){n(e.content),c(e.totalPages),console.log(e)})).catch((function(e){console.log(e)}))},r.handleDetail=function(e){(0,r.props.detailData)(e),r.toggleModal()},r.handleDelete=function(e){r.props.deleteData},r.toggleModal=function(){r.setState({modal:!r.state.modal})},r.generateTableRows=function(){var e=r.props,t=e.users,a=e.isLoading,n=r.state.msearch&&r.state.msearch.length>0?r.state.tempUsers.filter((function(e){return!!e.username.toLowerCase().includes(r.state.msearch.toLowerCase())&&e})):t,c=o.a.createElement("tr",null,o.a.createElement("td",{colSpan:"6",className:"table-warning text-center"},o.a.createElement("strong",null,o.a.createElement("em",null,"Data Still Empty"))));return n.length>0&&(c=o.a.createElement("tr",null,o.a.createElement("td",{colSpan:"6",className:"table-warning text-center"},o.a.createElement(O.a,{color:"danger"}))),a||(c=n.map((function(e,t){return o.a.createElement("tr",{key:t},o.a.createElement("td",{className:"text-center"},t+1),o.a.createElement("td",{className:"text-center"},e.username),o.a.createElement("td",{className:"text-center"},e.email),o.a.createElement("td",{className:"text-center"},e.dateRegister),o.a.createElement("td",{className:"text-center"},o.a.createElement(L.Link,{to:{pathname:"/userdetail",user:e}},o.a.createElement(N.a,{size:"sm",color:"secondary"},"Detail"))),o.a.createElement("td",{className:"text-center"},o.a.createElement(N.a,{size:"sm",color:"danger",onClick:function(){return r.handleDelete(e.id)}},"Delete")))})))),c},r.state={modal:!1,number:0,msearch:"",tempUsers:[]},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.getData(0),this.getDataAll()}},{key:"render",value:function(){var e=this,t=this.props,a=t.form,n=t.totalPages;return console.log(this.state.msearch),o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement(y.a,null,o.a.createElement("i",{className:"icon-people"})," Data User"),o.a.createElement(x.a,null,o.a.createElement(D.a,{row:!0},o.a.createElement(i.a,{xs:"12",md:"12"},o.a.createElement(k.a,{className:"text-center",type:"text",id:"search-input",name:"search-input",value:this.state.seacrh,onChange:function(t){return e.setState({msearch:t.target.value})},placeholder:"Search Data"}))),o.a.createElement(w.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{className:"text-center"},"No."),o.a.createElement("th",{className:"text-center"},"Username"),o.a.createElement("th",{className:"text-center"},"Email"),o.a.createElement("th",{className:"text-center"},"Registered"),o.a.createElement("th",Object(v.a)({className:"text-center",colSpan:"2"},"className","text-center"),"Action"))),o.a.createElement("tbody",null,this.generateTableRows())),o.a.createElement(S.a,{totalPages:n,getData:this.getData})),o.a.createElement(C.a,{isOpen:this.state.modal,toggle:this.toggleModal,className:"modal-info"+this.props.className},o.a.createElement(T.a,{toggle:this.toggleModal},o.a.createElement("strong",null,"User Detail")),o.a.createElement(M.a,null,o.a.createElement(z.a,{form:a})),o.a.createElement(P.a,null,o.a.createElement(N.a,{color:"secondary",onClick:this.toggleModal},"Cancel"))))}}]),a}(s.Component);var U=Object(d.b)((function(e){return Object(b.a)({},e)}),(function(e){return{detailData:function(t){return e({type:g.b,payload:t})},deleteData:function(t){return e({type:g.a,payload:t})},fetchData:function(){return e({type:g.d})},fetchComplete:function(t){return e({type:g.c,payload:t})},setTotalPages:function(t){return e({type:g.j,payload:t})},handlePageChanges:function(t){return e({type:g.e,payload:t})}}}))(R),I=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=Object(f.b)(j);return o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement(d.a,{store:e},o.a.createElement(u.a,null,o.a.createElement(i.a,null,o.a.createElement(m.a,null,o.a.createElement(U,null))))))}}]),a}(s.Component)}}]);
//# sourceMappingURL=13.dcc45921.chunk.js.map