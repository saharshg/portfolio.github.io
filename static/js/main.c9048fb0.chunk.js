(this["webpackJsonpsaharsh-goyal-portfolio"]=this["webpackJsonpsaharsh-goyal-portfolio"]||[]).push([[0],{73:function(e,t,a){e.exports=a(86)},85:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),l=a.n(o),c=(a(78),a(79),a(28)),i=a(67),s=a(110),m=a(120),u=a(123),p=a(119),h=a(122),d=a(121),f=a(66),g=a.n(f),b=a(53),E=a(33),y=a(7),w=a(114),k=a(124),v=a(111),j=a(116),O=a(41),x=a(127),C=a(40),S=a(115),N=a(61),B=a.n(N),T=[{title:"Home",link:"/"},{title:"Blogs",link:"/blogs"},{title:"About",link:"/about"}],_=a(68),z=function(e,t){switch(t.type){case"SET_MODE":return Object(_.a)({},e,{mode:t.mode});default:return e}},D=Object(n.createContext)(),I=function(e){var t=e.children,a="dark",o=(new Date).getHours();o<19&&o>=5&&(a="light");var l={mode:a},i=Object(n.useReducer)(z,l),s=Object(c.a)(i,2),m=s[0],u=s[1];return r.a.createElement(D.Provider,{value:{appState:m,dispatch:u}},t)},M=a(125),G=a(113),H=a(112),q=a(126),R=a(60),J=a.n(R),L=Object(s.a)((function(e){return{closeButton:{alignSelf:"flex-end"},list:{display:"flex",flexDirection:"column",justifyContent:"space-evenly",height:"100%"},dialog:{backgroundColor:"red"},backdrop:function(t){var a=t.mode;return{height:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-start",zIndex:e.zIndex.drawer+1,color:"#fff",backgroundColor:"light"===a?"darkviolet":"blueviolet"}},actionButtons:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},title:{marginLeft:"15px",fontFamily:"Helvetica Neue",cursor:"pointer"}}})),W=function(e){var t=e.openMenu,a=e.toggleMenu,o=e.mode,l=(e.handleTheme,Object(y.f)()),c=L({mode:o});return Object(n.useEffect)((function(){return t&&(window.onscroll=function(){return window.scrollTo(0,0)}),function(){return window.onscroll=function(){}}}),[t]),r.a.createElement(M.a,{className:c.backdrop,open:t},r.a.createElement("div",{className:c.actionButtons},r.a.createElement(O.a,{variant:"h6",className:c.title,color:"secondary"},"SG"),r.a.createElement(v.a,{edge:"start",color:"inherit",onClick:a,"aria-label":"close",className:c.closeButton},r.a.createElement(J.a,null))),r.a.createElement(H.a,{className:c.list},T.map((function(e){return r.a.createElement(q.a,{button:!0,key:e.title,onClick:function(){l.push(e.link),a()}},r.a.createElement(G.a,{primary:e.title}))}))))},F=Object(s.a)((function(e){return{appBar:{boxShadow:"none"},title:{marginLeft:"15px",fontFamily:"Helvetica Neue",cursor:"pointer"},avatar:{marginTop:e.spacing(2),height:e.spacing(10),width:e.spacing(10),marginRight:0,cursor:"pointer"}}})),P=function(){var e=Object(n.useContext)(D),t=e.appState,a=e.dispatch,o=t.mode,l=Object(C.a)(),i=Object(w.a)(l.breakpoints.down("sm")),s=Object(y.f)(),m=F({mode:o}),p=Object(n.useState)(!1),h=Object(c.a)(p,2),d=h[0],f=h[1],g=function(){return a({type:"SET_MODE",mode:"light"===o?"dark":"light"})},b=function(){return f(!d)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{position:"static",id:"back-to-top-anchor",className:m.appBar},r.a.createElement(S.a,{style:{flexGrow:1,width:"100%",justifyContent:"space-between"}},r.a.createElement(k.a,{checked:"dark"===o,onChange:g,name:"mode",inputProps:{"aria-label":"change mode"}}),r.a.createElement(u.a,{style:{display:"flex"}},i?r.a.createElement(v.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:b},r.a.createElement(B.a,null)):T.map((function(e){var t=e.title,a=e.link;return t!==T[0].title?r.a.createElement(j.a,{key:t,onClick:function(){return s.push(a)}},t):null})),!i&&r.a.createElement(O.a,{variant:"h6",onClick:function(){return s.push("/")},className:m.title,color:"secondary"},"SG")))),r.a.createElement(W,{toggleMenu:b,openMenu:d,mode:o,handleTheme:g}))},Q=a(117),A=a(118),V=Object(s.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}}));function $(e){var t=e.children,a=V(),n=Object(Q.a)({});return r.a.createElement(A.a,{timeout:1e3,in:n},r.a.createElement("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:a.root},t))}var K=a(63),U=a.n(K),X=a(64),Y=a.n(X),Z=a(65),ee=a.n(Z),te=a(62),ae=a.n(te),ne=Object(s.a)((function(e){return{contact:{justifyContent:"center",display:"flex",color:"light"===e.type?"darkmagenta":"darkviolet"},links:{border:"1px solid darkmagenta",display:"flex",paddingTop:e.spacing(1),justifyContent:"space-evenly",borderTopLeftRadius:"100px",borderTopRightRadius:"100px",backgroundColor:"#191970"}}})),re=function(){var e=ne(),t=Object(w.a)((function(e){return e.breakpoints.down("sm")}));return r.a.createElement(u.a,null,t&&r.a.createElement(p.a,{container:!0,className:e.links},r.a.createElement(p.a,{item:!0},r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://twitter.com/saharshg10?ref_src=twsrc%5Etfw","data-show-count":"false"},r.a.createElement(ae.a,{color:"secondary"}))),r.a.createElement(p.a,{item:!0},r.a.createElement("a",{href:"https://github.com/saharshg",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(U.a,{color:"secondary"}))),r.a.createElement(p.a,{item:!0},r.a.createElement("a",{href:"https://www.linkedin.com/in/saharsh-goyal-22b1b4113/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(Y.a,{color:"secondary"}))),r.a.createElement(p.a,{item:!0},r.a.createElement("a",{href:"mailto:contact@saharshgoyal.com",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(ee.a,{color:"secondary"})))))},oe=Object(n.lazy)((function(){return Promise.all([a.e(3),a.e(7)]).then(a.bind(null,156))})),le=Object(n.lazy)((function(){return a.e(5).then(a.bind(null,153))})),ce=Object(n.lazy)((function(){return a.e(4).then(a.bind(null,155))})),ie=Object(n.lazy)((function(){return a.e(6).then(a.bind(null,154))})),se=function(e){var t="#000";return"light"===e&&(t="#f0f8ff"),Object(i.a)({palette:{primary:{main:t},background:{default:t},type:e},typography:{fontSize:16}})},me=Object(s.a)({about:{"& a:link":{color:"#e4bbdf"},"& a:visited":{color:"orangered"}},body:{position:"relative",minHeight:"100vh"},content:{justifyContent:"center",paddingBottom:"2rem"},footer:{position:"fixed",bottom:0,width:"100%"}}),ue=function(){var e=me(),t=Object(n.useContext)(D).appState.mode,a=Object(n.useState)(se("light")),o=Object(c.a)(a,2),l=o[0],i=o[1];return Object(n.useEffect)((function(){i(se("light"===t?"light":"dark"))}),[t]),r.a.createElement(E.a,null,r.a.createElement(b.a,null,r.a.createElement("title",null,"Saharsh Goyal"),r.a.createElement("meta",{name:"title",content:"Saharsh Goyal"}),r.a.createElement("meta",{name:"description",content:"I help people to grow their businesses with quality software."}),r.a.createElement("meta",{name:"keywords",content:"saharsh goyal, portfolio, developer, software engineer, react, react-native, javascript"}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:url",content:"https://saharshgoyal.com/"}),r.a.createElement("meta",{property:"og:title",content:"Saharsh Goyal"}),r.a.createElement("meta",{property:"og:description",content:"I help people to grow their businesses with quality software."}),r.a.createElement("meta",{property:"og:image",content:"https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"}),r.a.createElement("meta",{property:"og:image:width",content:"1200"}),r.a.createElement("meta",{property:"og:image:height",content:"628"}),r.a.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{property:"twitter:url",content:"https://saharshgoyal.com/"}),r.a.createElement("meta",{property:"twitter:title",content:"Saharsh Goyal"}),r.a.createElement("meta",{property:"twitter:description",content:"I help people to grow their businesses with quality software."}),r.a.createElement("meta",{property:"twitter:image",content:"https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"})),r.a.createElement(m.a,{theme:l},r.a.createElement(d.a,null),r.a.createElement(u.a,{className:e.body},r.a.createElement(P,null),r.a.createElement(p.a,{container:!0,className:e.content},r.a.createElement(p.a,{item:!0,xs:10,sm:8,md:6},r.a.createElement(u.a,{className:e.about},r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(y.c,null,r.a.createElement(y.a,{path:"/about"},r.a.createElement(ie,null)),r.a.createElement(y.a,{path:"/blogs/:blog"},r.a.createElement(ce,null)),r.a.createElement(y.a,{path:"/blogs"},r.a.createElement(le,null)),r.a.createElement(y.a,{path:"/"},r.a.createElement(oe,null))))))),r.a.createElement(u.a,{className:e.footer},r.a.createElement(re,null))),r.a.createElement($,null,r.a.createElement(h.a,{color:"secondary",size:"small","aria-label":"scroll back to top"},r.a.createElement(g.a,null)))))};a(85),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(I,null,r.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[73,1,2]]]);
//# sourceMappingURL=main.c9048fb0.chunk.js.map