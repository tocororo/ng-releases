"use strict";(self.webpackChunksceiba_ui=self.webpackChunksceiba_ui||[]).push([[382],{1994:(k,h,_)=>{_.d(h,{Y:()=>S});var t=_(5879),l=_(6814),g=_(3814),d=_(2296),C=_(2596),m=_(617),s=_(5195),p=_(5986);function u(a,r){if(1&a){const e=t.EpF();t.TgZ(0,"mat-checkbox",7),t.NdJ("change",function(){const i=t.CHM(e).$implicit,c=t.oxw(3).$implicit,f=t.oxw();return t.KtG(f.selectionChange(c.key,i))}),t._uU(1),t.qZA()}if(2&a){const e=r.$implicit,o=t.oxw(3).$implicit,n=t.oxw();t.Q6J("checked",n.isSelected(o.key,e)),t.xp6(1),t.AsE(" ",e.key," (",e.doc_count,") ")}}function E(a,r){if(1&a&&(t.ynx(0),t.YNc(1,u,2,3,"mat-checkbox",6),t.BQk()),2&a){const e=t.oxw(2).$implicit,o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.aggregations[e.key].buckets)}}function x(a,r){if(1&a){const e=t.EpF();t.TgZ(0,"mat-checkbox",9),t.NdJ("change",function(){const i=t.CHM(e).$implicit,c=t.oxw(3).$implicit,f=t.oxw();return t.KtG(f.selectionChange(c.key,i))}),t._uU(1),t.qZA()}if(2&a){const e=r.$implicit,o=t.oxw(3).$implicit,n=t.oxw();t.Q6J("checked",n.isSelected(o.key,e)),t.xp6(1),t.AsE(" ",e.key," (",e.doc_count,") ")}}function y(a,r){if(1&a&&(t.ynx(0),t.YNc(1,x,2,3,"mat-checkbox",8),t.BQk()),2&a){const e=t.oxw(2).$implicit,o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.aggregations[e.key].buckets)}}function A(a,r){if(1&a){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",10),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2).$implicit,i=t.oxw();return t.KtG(i.moreKeysClick(n.key))}),t.TgZ(2,"mat-icon"),t._uU(3,"add"),t.qZA()(),t.BQk()}if(2&a){const e=t.oxw(2).$implicit;t.xp6(1),t.Q6J("value",e)}}function T(a,r){if(1&a){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",11),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2).$implicit,i=t.oxw();return t.KtG(i.moreKeysClick(n.key))}),t.TgZ(2,"mat-icon"),t._uU(3,"add"),t.qZA()(),t.BQk()}if(2&a){const e=t.oxw(2).$implicit;t.xp6(1),t.Q6J("value",e)}}function O(a,r){if(1&a&&(t.TgZ(0,"mat-card",2)(1,"mat-card-header")(2,"mat-card-title",3),t._uU(3),t.qZA()(),t.TgZ(4,"mat-card-content",4),t.YNc(5,E,2,1,"ng-container",5),t.YNc(6,y,2,1,"ng-container",5),t.qZA(),t.TgZ(7,"mat-card-actions"),t.YNc(8,A,4,1,"ng-container",5),t.YNc(9,T,4,1,"ng-container",5),t.qZA()()),2&a){const e=t.oxw().$implicit,o=t.oxw();t.xp6(3),t.Oqu(e.sp),t.xp6(2),t.Q6J("ngIf",o.aggregations[e.key].disabled),t.xp6(1),t.Q6J("ngIf",!o.aggregations[e.key].disabled),t.xp6(2),t.Q6J("ngIf",o.aggregations[e.key].disabled),t.xp6(1),t.Q6J("ngIf",!o.aggregations[e.key].disabled)}}function U(a,r){if(1&a&&(t.ynx(0),t.YNc(1,O,10,5,"mat-card",1),t.BQk()),2&a){const e=r.$implicit,o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.aggregations[e.key].buckets&&0!=o.aggregations[e.key].buckets.length)}}let S=(()=>{class a{constructor(){this.aggregations={},this.selectedAggr={},this.keySelect=new t.vpe,this.moreKeys=new t.vpe,this.modal_open=new t.vpe,this.keys=[]}ngOnInit(){for(const e in this.aggregations)this.aggregations.hasOwnProperty(e)&&this.keys.push({key:e,sp:this._translate(e)})}_translate(e){switch(e){case"status":return"Estado";case"country":return"Pa\xeds";case"state":return"Provincia (Estado)";case"types":return"Tipos";default:return this.aggregations[e].label}}isSelected(e,o){if(this.selectedAggr.hasOwnProperty(e))for(let n=0;n<this.selectedAggr[e].length;n++)if(this.selectedAggr[e][n]==o.key)return!0;return!1}selectionChange(e,o){this.selectedAggr.hasOwnProperty(e)||(this.selectedAggr[e]=[]),this.selectedAggr[e].find(n=>n==o.key)?this.selectedAggr[e]=this.selectedAggr[e].filter(n=>n!=o.key):this.selectedAggr[e].push(o.key),this.keySelect.emit(this.selectedAggr)}moreKeysClick(e){console.log(e),this.moreKeys.emit(e)}static#t=this.\u0275fac=function(o){return new(o||a)};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["seiba-ui-search-aggregations"]],inputs:{aggregations:"aggregations",selectedAggr:"selectedAggr"},outputs:{keySelect:"keySelect",moreKeys:"moreKeys",modal_open:"modal_open"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],["class","m-1",4,"ngIf"],[1,"m-1"],[1,"text-capitalize"],["fxLayout","column"],[4,"ngIf"],["class","text-capitalize","disabled","",3,"checked","change",4,"ngFor","ngForOf"],["disabled","",1,"text-capitalize",3,"checked","change"],["class","text-capitalize",3,"checked","change",4,"ngFor","ngForOf"],[1,"text-capitalize",3,"checked","change"],["mat-button","","matTooltip","More...","disabled","",3,"value","click"],["mat-button","","matTooltip","More...",3,"value","click"]],template:function(o,n){1&o&&t.YNc(0,U,2,1,"ng-container",0),2&o&&t.Q6J("ngForOf",n.keys)},dependencies:[l.sg,l.O5,g.xw,d.lW,C.gM,m.Hw,s.a8,s.hq,s.dn,s.dk,s.n5,p.oG],styles:[".m-1[_ngcontent-%COMP%]{margin:1em}.text-capitalize[_ngcontent-%COMP%]{text-transform:capitalize!important}"]})}return a})()},2066:(k,h,_)=>{_.d(h,{v:()=>r});var t=_(5879),l=_(6223),g=_(6814),d=_(3814),C=_(7509),m=_(2296),s=_(2032),p=_(4170),u=_(9515);const E=function(){return{"width.%":100}};function x(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"mat-form-field",4)(1,"mat-label"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"input",5),t.NdJ("ngModelChange",function(c){t.CHM(n);const f=t.oxw();return t.KtG(f.query=c)})("keyup.enter",function(){t.CHM(n);const c=t.oxw();return t.KtG(c.riseQuery())}),t.ALo(5,"translate"),t.qZA()()}if(2&e){const n=t.oxw();t.s9C("appearance",n.appearance),t.Q6J("color",n.inputColor)("ngStyle",t.DdM(12,E)),t.xp6(2),t.Oqu(t.lcZ(3,8,"TOCO_SEARCH_QUERY_INPUT.INPUT_SEARCH_LABEL")),t.xp6(2),t.s9C("placeholder",t.lcZ(5,10,"TOCO_SEARCH_QUERY_INPUT.INPUT_SEARCH_PLACEHOLDER")),t.Q6J("ngModel",n.query)("value",n.query)("formControl",n.queryCtrl)}}const y=function(e){return{"width.%":e}};function A(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"mat-form-field",6)(1,"mat-label"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"input",7),t.NdJ("keyup.enter",function(){t.CHM(n);const c=t.oxw();return t.KtG(c.riseQuery())}),t.ALo(5,"translate"),t.qZA()()}if(2&e){const n=t.oxw();t.Q6J("ngStyle",t.VKq(9,y,n.width)),t.xp6(2),t.Oqu(t.lcZ(3,5,"TOCO_SEARCH_QUERY_INPUT.INPUT_SEARCH_LABEL")),t.xp6(2),t.s9C("placeholder",t.lcZ(5,7,"TOCO_SEARCH_QUERY_INPUT.INPUT_SEARCH_PLACEHOLDER")),t.Q6J("value",n.query)("formControl",n.queryCtrl)}}const T=function(){return{height:"59.5px","margin-left":"1em"}};function O(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){t.CHM(n);const c=t.oxw();return t.KtG(c.riseQuery())}),t._uU(1),t.ALo(2,"translate"),t.qZA()}if(2&e){const n=t.oxw();t.s9C("color",n.buttonColor),t.Q6J("ngStyle",t.DdM(5,T)),t.xp6(1),t.hij(" ",t.lcZ(2,3,"TOCO_SEARCH_QUERY_INPUT.BUTTON_SEARCH")," ")}}const U=function(){return{"margin-left":"1em"}};function S(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){t.CHM(n);const c=t.oxw();return t.KtG(c.riseQuery())}),t._uU(1),t.ALo(2,"translate"),t.qZA()}if(2&e){const n=t.oxw();t.s9C("color",n.buttonColor),t.Q6J("ngStyle",t.DdM(5,U)),t.xp6(1),t.hij(" ",t.lcZ(2,3,"TOCO_SEARCH_QUERY_INPUT.BUTTON_SEARCH")," ")}}const a=function(e){return{"align-items":"center","width.%":e}};let r=(()=>{class e{constructor(){this.query="",this.minWordCount=3,this.appearance="outline",this.inputColor="",this.buttonColor="primary",this.showButton=!0,this.width=100,this.queryChange=new t.vpe,this.queryCtrl=new l.p4,this.hasQuery=!1}ngOnInit(){this.hasQuery=""!=this.query}clearQuery(){this.query="",this.queryCtrl.setValue(""),this.riseQuery()}riseQuery(){this.hasQuery=""!=this.query,this.queryChange.emit(this.queryCtrl.value?this.queryCtrl.value:"")}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["sceiba-ui-search-query-input"]],inputs:{query:"query",minWordCount:"minWordCount",appearance:"appearance",inputColor:"inputColor",buttonColor:"buttonColor",showButton:"showButton",width:"width"},outputs:{queryChange:"queryChange"},decls:5,vars:7,consts:[["fxLayout","row",3,"ngStyle"],[3,"appearance","color","ngStyle",4,"ngIf"],[3,"ngStyle",4,"ngIf"],["mat-raised-button","",3,"color","ngStyle","click",4,"ngIf"],[3,"appearance","color","ngStyle"],["matInput","","type","search",3,"placeholder","ngModel","value","formControl","ngModelChange","keyup.enter"],[3,"ngStyle"],["matInput","","type","search",3,"placeholder","value","formControl","keyup.enter"],["mat-raised-button","",3,"color","ngStyle","click"]],template:function(i,c){1&i&&(t.TgZ(0,"div",0),t.YNc(1,x,6,13,"mat-form-field",1),t.YNc(2,A,6,11,"mat-form-field",2),t.YNc(3,O,3,6,"button",3),t.YNc(4,S,3,6,"button",3),t.qZA()),2&i&&(t.Q6J("ngStyle",t.VKq(5,a,c.width)),t.xp6(1),t.Q6J("ngIf","outline"==c.appearance),t.xp6(1),t.Q6J("ngIf","outline"!=c.appearance),t.xp6(1),t.Q6J("ngIf",c.showButton&&"outline"==c.appearance),t.xp6(1),t.Q6J("ngIf",c.showButton&&"outline"!=c.appearance))},dependencies:[g.O5,g.PC,d.xw,C.Zl,l.Fj,l.JJ,l.oH,m.lW,s.Nt,p.KE,p.hX,u.X$]})}return e})()},6729:(k,h,_)=>{_.d(h,{C:()=>p});var t=_(6814),l=_(1447),g=_(6223),d=_(9515),C=_(6208),m=_(3887),s=_(5879);let p=(()=>{class u{static#t=this.\u0275fac=function(y){return new(y||u)};static#e=this.\u0275mod=s.oAB({type:u});static#n=this.\u0275inj=s.cJS({imports:[t.ez,l.o9,g.UX,d.aw,C.f,m.IR2,m.t8n]})}return u})()}}]);