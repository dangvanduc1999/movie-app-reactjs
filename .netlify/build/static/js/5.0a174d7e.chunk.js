(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[5],{117:function(e,i,t){},118:function(e,i,t){},122:function(e,i,t){},123:function(e,i,t){},129:function(e,i,t){"use strict";t.r(i);var s=t(1),c=t(2),n=t(3),a=t(12),r=t(97),l=t.n(r),o=t(15),d=t(39),j=(t(117),t(5)),b=t(0);var h=function(e){var i=e.props,t=Object(s.useContext)(a.a).dispatch,c=Object(d.useStateIfMounted)(!1),r=Object(n.a)(c,2),l=r[0],h=r[1],m=i.overview,u=i.title,O=i.backdrop_path,v=i.poster_path,p=Object(s.useCallback)((function(){window.innerWidth<=739&&h(!0)}),[h]),f=Object(s.useCallback)((function(){window.innerHeight<610&&h(!1)}),[h]);Object(s.useEffect)((function(){p(),f()}),[p,f]),window.addEventListener("resize",p),window.addEventListener("resize",f);var x={backgroundImage:"url(".concat(l?v:O,")")};return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"wrapper",children:Object(b.jsx)("div",{className:"container-main",style:x,children:Object(b.jsx)("div",{className:"grid wide",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col l-12 m-12 c-12",children:Object(b.jsx)("div",{className:"main  ",children:Object(b.jsxs)("div",{className:"main__infor",children:[Object(b.jsxs)("div",{className:"main__tag",children:[Object(b.jsx)("i",{className:"fab logo-icon fa-typo3"}),Object(b.jsx)("p",{className:"logo-tag",children:"TopMovie"})]}),Object(b.jsx)("h1",{className:"main__tittle",children:u}),Object(b.jsx)("p",{className:"main__describer",children:m}),Object(b.jsx)("div",{className:"main__btn",children:Object(b.jsx)(o.a,{buttonStyle:"btn--outline",buttonSize:"btn--medium",text:"PLAY",onclick:function(){t({type:j.b}),t({type:j.c,payload:i})}})})]})})})})})})})})},m=t(22);function u(e){var i=e.className,t=e.style,s=e.onClick;return Object(b.jsx)("div",{className:i,style:Object(c.a)(Object(c.a)({},t),{},{display:"none"}),onClick:s})}var O={dots:!1,infinite:!0,slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:6e3,pauseOnHover:!0,responsive:[{breakpoint:1025,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0}},{breakpoint:739,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:1,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1}}]},v={fade:!0,infinite:!0,speed:600,slidesToShow:1,slidesToScroll:1,nextArrow:Object(b.jsx)(u,{}),prevArrow:Object(b.jsx)(u,{}),appendDots:function(e){return Object(b.jsx)("div",{children:Object(b.jsxs)("ul",{style:{margin:"0px"},children:[" ",e," "]})})},responsive:[{breakpoint:1025,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,initialSlide:1}},{breakpoint:480,settings:{dots:!0,slidesToShow:1,slidesToScroll:1,nextArrow:Object(b.jsx)(u,{}),prevArrow:Object(b.jsx)(u,{})}}]},p=t(23);t(118);var f=function(){var e=Object(s.useContext)(a.a).state,i=Object(s.useState)(null),t=Object(n.a)(i,2),r=t[0],o=t[1],d=Object(s.useState)(null),j=Object(n.a)(d,2),u=j[0],f=j[1],x=Object(s.useMemo)((function(){return[]}),[]),g=Object(s.useMemo)((function(){return[]}),[]);Object(s.useEffect)((function(){o(x),f(g)}),[x,g]);var _=e.data.filter((function(e){return"home"===e.type}));return Object(b.jsxs)("section",{className:"home__topmovie panel ",children:[Object(b.jsx)(l.a,Object(c.a)(Object(c.a)({},v),{},{className:"home__wrapper",asNavFor:u,ref:function(e){return x=e},children:_.map((function(e,i){return Object(b.jsx)(h,{props:e},i)}))})),Object(b.jsx)("div",{className:"home__small-slider-wrapper",children:Object(b.jsx)("div",{className:"grid wide xyz",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col l-12",children:Object(b.jsx)(l.a,Object(c.a)(Object(c.a)({},O),{},{asNavFor:r,ref:function(e){return g=e},swipeToSlide:!0,focusOnSelect:!0,className:"home__slide-children",children:_.map((function(e,i){return Object(b.jsx)(m.a,{props:e,isChangeSize:!1},i)}))}))})})})}),e.play?Object(b.jsx)(p.a,{props:e.currentMovie}):Object(b.jsx)(b.Fragment,{})]})},x=t.p+"static/media/live_img.b1eead8e.png",g=t(119),_=t.n(g),y=(t(122),t(95)),N=t(94),w=t(100);y.b.registerPlugin(w.a);var S=function(){var e=Object(s.useRef)(null),i=Object(s.useRef)(null),t=Object(s.useRef)(null);return Object(s.useEffect)((function(){var s,c,n,a,r,l=null===(s=t)||void 0===s?void 0:s.children[0],o=null===(c=t)||void 0===c?void 0:c.children[1],d=null===(n=t)||void 0===n?void 0:n.children[2].children[0],j=null===(a=t)||void 0===a?void 0:a.children[2].children[1].children[0],b=null===(r=t)||void 0===r?void 0:r.children[2].children[1].children[1],h=new N.d({scrollTrigger:{trigger:[l,o,d,j.children,b.children,i,i.children],start:"top 50%",end:"top 30%"}});y.a.to(e,0,{css:{visibility:"visible"}}),h.from(i,1.2,{y:1e3,opacity:0,ease:N.b.easeOut},"start").from(i.firstElementChild,2,{scale:1.4,ease:N.b.easeOut},.2).from(l,1,{y:44,opacity:0,ease:N.b.easeOut,delay:.8},.15,"start").from(o,1,{y:44,opacity:0,ease:N.b.easeOut,delay:.8},.15,"start").from(d,{y:20,opacity:0,ease:N.b.easeOut},1.2).from(j.children,{y:20,opacity:0,ease:N.b.easeOut},1.4).from(b.children,{y:20,opacity:0,ease:N.b.easeOut},1.6)}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("section",{className:"home__live-area panel ",ref:function(i){e=i},children:Object(b.jsx)("div",{className:"grid wide",children:Object(b.jsxs)("div",{className:"row home__live-area-wrapper no-gutters",children:[Object(b.jsxs)("div",{className:"col l-5 m-12 c-12 home__live-content-left",ref:function(e){t=e},children:[Object(b.jsx)("span",{className:"home__live-sub-title",children:"online streaming"}),Object(b.jsx)("h2",{className:"home__live-title",children:"live movie & Tv shows for friends & Family"}),Object(b.jsxs)("div",{className:"home__live-content",children:[Object(b.jsx)("p",{children:"Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration."}),Object(b.jsxs)("div",{className:"live-fact-wrap",children:[Object(b.jsx)("div",{className:"resolution",children:Object(b.jsx)("h2",{children:"hd 4k"})}),Object(b.jsxs)("div",{className:"active__customer",children:[Object(b.jsxs)("h4",{children:[Object(b.jsx)(_.a,{start:0,end:20,duration:2.75})," K+"]}),Object(b.jsx)("p",{children:"active customer"})]})]})]})]}),Object(b.jsx)("div",{className:"col l-7 m-12 c-12",id:"col-img",children:Object(b.jsx)("div",{className:"home__live-movie-image",ref:function(e){i=e},children:Object(b.jsx)("img",{src:x,alt:""})})})]})})})})},T=t.p+"static/media/image1.24c49c2c.jpg";t(123);y.b.registerPlugin(w.a);var k=function(){var e=Object(s.useRef)(null),i=Object(s.useRef)(null);return Object(s.useEffect)((function(){new N.d({scrollTrigger:{trigger:e,start:"top 80%",end:"top 50%"}}).from([e.children[0],e.children[1],e.children[2],e.children[3],e.children[4]],{opacity:0,duration:1.2,y:100,stagger:.1},"start").from(e.children[5],{opacity:0,duration:1,delay:.8},"-=1").from(i,{y:100,opacity:0,duration:1,ease:N.b.easeOut},"start").from(i.children,{scale:1.4,duration:1,ease:N.b.easeOut},"-=1")}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("section",{className:"home__siteMovie ",children:Object(b.jsx)("div",{className:"grid wide ",children:Object(b.jsxs)("div",{className:"row no-gutters",children:[Object(b.jsxs)("div",{className:"col l-6 m-12 c-12 home__siteMovie-content",ref:function(i){return e=i},children:[Object(b.jsx)("h2",{className:"home__siteMovie-tittle",children:"bailey"}),Object(b.jsx)("span",{children:"4.2(imdb)"}),Object(b.jsxs)("div",{className:"home__siteMovie-tagPoint",children:[Object(b.jsx)("span",{className:"home__siteMovie-tag",children:"15+"})," ",Object(b.jsx)("p",{children:"2hr:30mins"})]}),Object(b.jsx)("h3",{children:"movie of the years"}),Object(b.jsx)("p",{className:"home__siteMovie-describer",children:"Baileys Irish Cream is an Irish cream liqueur an alcoholic beverage flavoured with cream, cocoa, and Irish whiskey made by Diageo at Republic of Ireland and in Mallusk, Northern Ireland."}),Object(b.jsx)(o.a,{text:"PLAY",buttonSize:"btn--medium",buttonStyle:"btn--primary"})]}),Object(b.jsx)("div",{className:"col l-6 home__siteMovie-imgcontainer ",children:Object(b.jsx)("div",{className:"home__siteMovie-imgWrap",children:Object(b.jsx)("div",{className:"home__siteMovie-img",ref:function(e){return i=e},children:Object(b.jsx)("img",{src:T,alt:""})})})})]})})})})},M=Object(s.lazy)((function(){return t.e(7).then(t.bind(null,127))})),C=Object(s.lazy)((function(){return t.e(8).then(t.bind(null,128))}));i.default=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)(f,{}),Object(b.jsx)(S,{}),Object(b.jsx)(k,{}),Object(b.jsxs)(s.Suspense,{fallback:Object(b.jsx)("div",{children:"Loading"}),children:[Object(b.jsx)(M,{}),Object(b.jsx)(C,{})]})]})})}}}]);
//# sourceMappingURL=5.0a174d7e.chunk.js.map