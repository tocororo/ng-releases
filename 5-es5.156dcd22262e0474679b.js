function _defineProperties(t,n){for(var l=0;l<n.length;l++){var e=n[l];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function _createClass(t,n,l){return n&&_defineProperties(t.prototype,n),l&&_defineProperties(t,l),t}function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{TTih:function(t,n,l){"use strict";l.r(n);var e=l("8Y7J"),a=function t(){_classCallCheck(this,t)},c=l("pMnS"),s=l("iInd"),r=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}(),o=e.pb({encapsulation:0,styles:[[""]],data:{}});function u(t){return e.Nb(0,[(t()(),e.rb(0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e.qb(1,212992,null,0,s.p,[s.b,e.O,e.j,[8,null],e.h],null,null)],(function(t,n){t(n,1,0)}),null)}var i=e.nb("toco-help",r,(function(t){return e.Nb(0,[(t()(),e.rb(0,0,null,null,1,"toco-help",[],null,null,null,u,o)),e.qb(1,114688,null,0,r,[],null,null)],(function(t,n){t(n,1,0)}),null)}),{},{},[]),b=l("udNS"),p=l("ZcxY"),d=function(){function t(n,l,e){_classCallCheck(this,t),this.metadata=n,this.activatedRoute=l,this.transServ=e}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;null==this.src&&(this.src=""),null==this.title&&(this.title=""),this.activatedRoute.data.subscribe({next:function(n){n&&(t.src=n.src+"."+t.transServ.currentLang+".md",t.title=n.title,t.metadata.meta.updateTag({name:"DC.title",content:n.title}),t.metadata.meta.updateTag({name:"DC.description",content:n.src.substring(0,160)}),t.transServ.onLangChange.subscribe((function(l){t.src=n.src+"."+t.transServ.currentLang+".md"})))},error:function(t){console.log(t)},complete:function(){}})}}]),t}(),f=l("BmYd"),h=l("TSSN"),m=e.pb({encapsulation:0,styles:[[""]],data:{}});function g(t){return e.Nb(0,[(t()(),e.rb(0,0,null,null,1,"div",[["class","mat-h4"],["markdown",""],["style","margin: 2em;"]],null,null,null,b.b,b.a)),e.qb(1,4767744,null,0,p.a,[e.k,p.c],{src:[0,"src"]},null)],(function(t,n){t(n,1,0,n.component.src)}),null)}var k=e.nb("toco-static-pages",d,(function(t){return e.Nb(0,[(t()(),e.rb(0,0,null,null,1,"toco-static-pages",[],null,null,null,g,m)),e.qb(1,114688,null,0,d,[f.gb,s.a,h.j],null,null)],(function(t,n){t(n,1,0)}),null)}),{src:"src",title:"title"},{},[]),v=l("SVse"),C=l("IheW"),w=l("cUpR"),y={src:"assets/markdown/faq",title:"FAQ"},B={src:"assets/markdown/about",title:"Sobre Nosotros"},_={src:"assets/markdown/help",title:"Ayuda"},S={src:"assets/markdown/contact",title:"Contacto"},N={src:"assets/markdown/policy",title:"Pol\xedtica de Privacidad"},q=function t(){_classCallCheck(this,t)};l.d(n,"HelpModuleNgFactory",(function(){return P}));var P=e.ob(a,[],(function(t){return e.Ab([e.Bb(512,e.j,e.ab,[[8,[c.a,i,k]],[3,e.j],e.w]),e.Bb(4608,v.n,v.m,[e.t,[2,v.E]]),e.Bb(4608,C.c,C.c,[C.g]),e.Bb(4608,p.c,p.c,[e.A,[2,C.c],w.b,p.d]),e.Bb(1073742336,v.c,v.c,[]),e.Bb(1073742336,s.o,s.o,[[2,s.t],[2,s.k]]),e.Bb(1073742336,p.b,p.b,[]),e.Bb(1073742336,q,q,[]),e.Bb(1073742336,a,a,[]),e.Bb(1024,s.i,(function(){return[[{path:"",component:r,children:[{path:"faq",component:d,data:y},{path:"about",component:d,data:B},{path:"help",component:d,data:_},{path:"contact",component:d,data:S},{path:"policy",component:d,data:N}]}]]}),[]),e.Bb(256,p.d,{gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1},[])])}))}}]);