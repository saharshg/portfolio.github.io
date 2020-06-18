(this["webpackJsonpsaharsh-goyal-portfolio"]=this["webpackJsonpsaharsh-goyal-portfolio"]||[]).push([[0],{49:function(e,t,a){e.exports=a(60)},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),c=a.n(o),l=a(92),i=a(82),s=a(40),m=a(90),u=a(91),h=a(42),g=a(6),d=a(83),p=a(95),f=a(84),E=a(63),v="#b03aa7",b="#e4bbdf",w=Object(i.a)((function(e){return{title:{marginLeft:"15px",fontFamily:"Helvetica Neue"},avatar:{height:e.spacing(7),width:e.spacing(7),marginRight:0}}})),y=function(){var e=w();return r.a.createElement("div",{className:e.root},r.a.createElement(d.a,{position:"absolute",id:"back-to-top-anchor",style:{backgroundColor:v,minHeight:"100px",justifyContent:"center",alignItems:"center"}},r.a.createElement(f.a,{disableGutters:!0,style:{flexGrow:1,width:"100%",justifyContent:"space-evenly"}},r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"}},r.a.createElement(p.a,{alt:"Saharsh Goyal",src:"/images/photo.jpg",className:e.avatar}),r.a.createElement(E.a,{variant:"h6",className:e.title},"Saharsh Goyal")))))},k=a(88),j=a(93),x=a(89),I=a(41),S=a(94),N=a(85),C=a(87),O=a(86),B=Object(i.a)((function(e){return{root:{maxWidth:345},media:{height:0,padding:60}}}));function H(e){var t=e.thumbnail,a=e.title,n=void 0===a?"":a,o=e.content,c=void 0===o?"":o,l=e.link,i=B();return r.a.createElement(N.a,{className:i.root},r.a.createElement(S.a,{onClick:function(){window.open(l,"_blank")}},r.a.createElement(O.a,{className:i.media,image:t,title:n}),r.a.createElement(C.a,null,r.a.createElement(E.a,{gutterBottom:!0,variant:"h5",component:"h2"},n),r.a.createElement(E.a,{variant:"body2",color:"textSecondary",component:"p"},function(e){var t=document.createElement("div");return t.innerHTML=e,e=t.innerText}(c).slice(0,100)+"..."))))}var R=function(){var e=Object(n.useState)([]),t=Object(I.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@saharshgoyal").then((function(e){return e.json()})).then((function(e){var t=e.feed.image,a=e.feed.link,n=e.items.filter((function(e){return e.categories.length>0})),r=[];n.forEach((function(e,n){e.avatar=t,e.profilelink=a,r.push(e)})),o(r),console.log(r)}))}),[]),r.a.createElement(j.a,{pt:5},r.a.createElement(k.a,{container:!0,spacing:3},a.map((function(e,t){return r.a.createElement(k.a,{key:t,item:!0,xs:12,sm:6,md:6,lg:4},r.a.createElement(H,e))}))))},_=Object(i.a)({about:{"& a:link":{color:b},"& a:visited":{color:"orangered"}},logo:{width:"20px",height:"20px"}}),G=function(){var e=_();return r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement(j.a,{pt:25,pr:1,pl:1,className:e.about},r.a.createElement(E.a,{variant:"h3"},"Hi! I'm Saharsh"," ",r.a.createElement("span",{role:"img","aria-label":"Hi, I'm Saharsh!"},"\ud83d\udc4b")),r.a.createElement(j.a,{pt:5},r.a.createElement(E.a,{variant:"h5",gutterBottom:!0,paragraph:!0},"I'm a software engineer. I was born in 1995 and grew up in Indore, India. After graduating High School, I went to SVITS where I graduated with a Bachelor's degree in Computer Science Engineering."),r.a.createElement(E.a,{variant:"h5",gutterBottom:!0,paragraph:!0},"I've built web and mobile apps under various domains including Banking, Real-estate, E-commerce, CRM systems, Accouting/Finance, etc. focused mainly on UI Development using"," ",r.a.createElement(x.a,{target:"_blank",href:"https://reactjs.org/"},"React",r.a.createElement("img",{src:"/images/react-logo.svg",alt:"react logo",className:e.logo})),","," ",r.a.createElement(x.a,{target:"_blank",href:"https://reactnative.dev/"},"React Native")," ","and"," ",r.a.createElement(x.a,{target:"_blank",href:"https://github.com/getify/You-Dont-Know-JS"},"Javascript",r.a.createElement("img",{src:"/images/js-logo.svg",alt:"js logo",className:e.logo})),".")),r.a.createElement(R,null)))},J=Object(i.a)((function(){return{root:{backgroundColor:"whitesmoke",height:"100%"}}})),W=Object(s.a)({}),F=function(){var e=J();return r.a.createElement(h.a,null,r.a.createElement(m.a,{theme:W,className:e.root},r.a.createElement(y,null),r.a.createElement(u.a,{maxWidth:"md"},r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/"},r.a.createElement(G,null))))))},M=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null),r.a.createElement(F,null))};a(59),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.b74196bf.chunk.js.map