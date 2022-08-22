(function(){"use strict";var e={3215:function(e,t,n){var r=n(9242),c=n(3396);const s={class:"w-screen h-screen overflow-x-hidden bg-grandient-ang px-8 2xl:px-48 xl:px-24"};function o(e,t,n,r,o,l){const i=(0,c.up)("TopBarComp"),a=(0,c.up)("MainBarComp"),u=(0,c.up)("router-view");return(0,c.wg)(),(0,c.iD)(c.HY,null,[(0,c.Wm)(i),(0,c._)("main",s,[(0,c.Wm)(a,{page:r.watchlist,onSearch:t[0]||(t[0]=e=>r.filter=e)},null,8,["page"]),(0,c.Wm)(u,null,{default:(0,c.w5)((({Component:e})=>[((0,c.wg)(),(0,c.j4)((0,c.LL)(e),{page:r.watchlist,onUpdate:r.updateWatchlistStatus},null,40,["page","onUpdate"]))])),_:1})])],64)}var l=n(4870);const i={class:"w-full fixed flex justify-between items-center bg-[#192841] h-12 2xl:px-48 xl:px-24 top-0 p-7 sm:p-8"},a=["src"];function u(e,t,r,s,o,l){return(0,c.wg)(),(0,c.iD)("nav",i,[(0,c._)("img",{src:n(3258),alt:"logo",class:"w-28 sm:w-36"},null,8,a)])}var p={data(){return{}}},f=n(89);const m=(0,f.Z)(p,[["render",u]]);var v=m;const w={class:"w-full flex flex-col justify-center items-center pt-14 sm:pt-16"},x={class:"w-full flex flex-col sm:flex-row sm:justify-between text-center pt-10 pb-4"};function d(e,t,n,r,s,o){const l=(0,c.up)("NavComp");return(0,c.wg)(),(0,c.iD)("section",w,[(0,c._)("div",x,[(0,c.Wm)(l)])])}var g=n(7139);const h={class:"w-full sm:w-1/3 flex flex-col justify-center sm:order-1"},y={class:"flex flex-col"},_={class:"flex items-center"},b=(0,c.Uk)("Watchlist"),C=(0,c.Uk)("Currencies");function j(e,t,n,r,s,o){const l=(0,c.up)("router-link");return(0,c.wg)(),(0,c.iD)("div",h,[(0,c._)("div",y,[(0,c._)("div",_,[(0,c.Wm)(l,{class:(0,g.C_)(`${"/"===r.currentRoute?r.style.activeTxt:r.style.inactiveTxt} w-1/2 sm:hover:bg-[#21406C]`),onClick:o.ToggleActive,to:"/"},{default:(0,c.w5)((()=>[b])),_:1},8,["class","onClick"]),(0,c.Wm)(l,{class:(0,g.C_)(`${"cryptocurrencies"===r.currentRoute?r.style.activeTxt:r.style.inactiveTxt} w-1/2 sm:hover:bg-[#21406C]`),onClick:o.ToggleActive,to:"/cryptocurrencies"},{default:(0,c.w5)((()=>[C])),_:1},8,["class","onClick"])]),(0,c._)("div",{class:(0,g.C_)("relative h-1.5 bg-[#3C516F] flex flex-row")},[(0,c._)("div",{class:(0,g.C_)(`absolute ${r.position} h-full w-1/2 bg-[#6BA6FF] ${e.watchlistActive?r.style.left:r.style.right} transition-all`)},null,2)],2)])])}var k=n(2483),T={name:"NavComp",setup(){const e={activeTxt:"text-white font-bold",inactiveTxt:"text-[#DCDCDC] font-light"},t=(0,c.Fl)((()=>(0,k.tv)().currentRoute.value.name)),n=(0,c.Fl)((()=>"/"===t.value?"left-0":"inset-x-1/2"));return{style:e,currentRoute:t,position:n}},methods:{ToggleActive(){this.watchlistActive=!this.watchlistActive}}};const D=(0,f.Z)(T,[["render",j]]);var O=D,W={name:"WatchList",props:["page"],components:{NavComp:O}};const F=(0,f.Z)(W,[["render",d]]);var L=F,S=n(6265),R=n.n(S);const A=R().create({baseURL:"https://api-crypto-currency-tracker.herokuapp.com/api",headers:{"Content-Type":"application/json"}});var N=A;function z(e){return JSON.parse(localStorage.getItem(e))}function Z(e){localStorage.setItem("list",JSON.stringify(e))}const H=async e=>{const{data:t}=await N.get(e);return Z(t),t};var U={name:"App",components:{TopBarComp:v,MainBarComp:L},setup(){const e=H("/coins"),t=(0,l.iH)(null),n=(0,l.iH)("");function r(e){t.value=e}return(0,c.bv)(e),{watchlist:t,filter:n,updateWatchlistStatus:r}},watch:{filter(){console.log(this.filter)}}};const B=(0,f.Z)(U,[["render",o]]);var $=B;function M(e,t,n,r,s,o){const l=(0,c.up)("TableComp");return(0,c.wg)(),(0,c.j4)(l)}const P=(0,c._)("div",{class:"sm:invisible"},[(0,c._)("p",{class:"text-xs text-gray-400 text-right pb-1"},"🡠 Scroll Left")],-1),Y={class:"flex flex-row sm:justify-around bg-[#202A44] text-white items-center rounded-lg py-2 mb-1"},I=(0,c._)("p",null,"Name",-1),J=[I],K={class:"w-5/6 flex sm:justify-around whitespace-nowrap overflow-x-scroll no-scrollbar"};function E(e,t,n,r,s,o){const l=(0,c.up)("TableRowComp");return(0,c.wg)(),(0,c.iD)(c.HY,null,[P,(0,c._)("section",null,[(0,c._)("div",Y,[(0,c._)("div",{class:"min-w-[35%] text-center sm:min-w-[12%]",onScroll:t[0]||(t[0]=t=>e.console.log("scrollou"))},J,32),(0,c._)("div",K,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(r.propNames,(e=>((0,c.wg)(),(0,c.iD)("div",{key:e,class:"min-w-[50%] text-center sm:min-w-[12%]"},[(0,c._)("p",null,(0,g.zw)(e),1)])))),128))])]),((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(r.currentList,(e=>((0,c.wg)(),(0,c.j4)(l,{key:e.id,coin:e},null,8,["coin"])))),128))])],64)}const V={class:"flex flex-row sm:justify-around bg-[#27445C] text-white items-center rounded-lg h-10 mb-1"},q={class:"min-w-[35%] h-full text-center text-xs sm:min-w-[12%] flex justify-end items-center"},G={class:"flex flex-row items-center justify-center w-full"},Q=["src"],X={class:"text-left w-14 sm:w-20"},ee=(0,c._)("br",null,null,-1),te={class:"w-5/6 flex h-10 sm:justify-around whitespace-nowrap overflow-x-scroll no-scrollbar"},ne={class:"min-w-[50%] h-full text-center text-xs sm:min-w-[12%] flex justify-center items-center"},re={class:"min-w-[50%] h-full text-center text-xs sm:min-w-[12%] flex justify-center items-center"},ce={class:"min-w-[50%] h-full text-center text-xs sm:min-w-[12%] flex justify-center items-center"},se={class:"min-w-[50%] h-full text-center text-xs sm:min-w-[12%] flex justify-center items-center"},oe={class:"min-w-[50%] h-full text-center text-xs sm:min-w-[12%] flex justify-center items-center"},le=(0,c._)("div",{class:"min-w-[50%] h-full text-center text-xs sm:min-w-[12%] flex justify-center items-center"},[(0,c._)("p")],-1),ie=(0,c._)("div",{class:"min-w-[50%] h-full text-center text-xs sm:min-w-[12%] flex justify-center items-center"},[(0,c._)("p")],-1);function ae(e,t,n,r,s,o){return(0,c.wg)(),(0,c.iD)("div",V,[(0,c._)("div",q,[(0,c._)("div",G,[(0,c._)("img",{src:n.coin.image,class:"w-5 pr-1",alt:""},null,8,Q),(0,c._)("p",X,[(0,c.Uk)((0,g.zw)(n.coin.name)+" ",1),ee,(0,c._)("sup",null,(0,g.zw)(n.coin.symbol),1)])])]),(0,c._)("div",te,[(0,c._)("div",ne,[(0,c._)("p",null,(0,g.zw)(n.coin.price_change_percentage_1h_in_currency),1)]),(0,c._)("div",re,[(0,c._)("p",null,(0,g.zw)(r.formCurrency.format(n.coin.current_price)),1)]),(0,c._)("div",ce,[(0,c._)("p",null,(0,g.zw)(r.formCurrency.format(n.coin.market_cap)),1)]),(0,c._)("div",se,[(0,c._)("p",null,(0,g.zw)(r.formCurrency.format(n.coin.total_volume)),1)]),(0,c._)("div",oe,[(0,c._)("p",null,(0,g.zw)(n.coin.price_change_percentage_24h),1)]),le,ie])])}const ue=new Intl.NumberFormat("id",{style:"currency",currency:"USD",minimumFractionDigits:2});var pe=ue,fe={props:["coin"],setup(){return{formCurrency:pe}}};const me=(0,f.Z)(fe,[["render",ae]]);var ve=me,we={name:"TableComp",components:{TableRowComp:ve},setup(){const e=["Last Hour","Price","Market Cap","Volume","Last Day","Search","Watchlist"];console.log((0,k.tv)().currentRoute.value.name);const t=(0,c.Fl)((()=>z("list"))),n=(0,c.Fl)((()=>(0,k.tv)().currentRoute.value.name)),r=(0,c.Fl)((()=>"/"===n.value?t.value.filter((e=>e.favorite)):t.value));return{list:t,propNames:e,currentList:r,currentRoute:n}},methods:{log(){console.log(this.list)},getList:z}};const xe=(0,f.Z)(we,[["render",E]]);var de=xe,ge={name:"CryptCurrencies",props:["page"],emits:["update"],components:{TableComp:de},mounted(){this.$emit("update",!1)}};const he=(0,f.Z)(ge,[["render",M]]);var ye=he;function _e(e,t,n,r,s,o){const l=(0,c.up)("TableComp");return(0,c.wg)(),(0,c.j4)(l,{page:n.page},null,8,["page"])}var be={name:"WatchList",props:["page","price"],emits:["update"],components:{TableComp:de},mounted(){}};const Ce=(0,f.Z)(be,[["render",_e]]);var je=Ce;const ke=[{path:"/",name:"/",component:je},{path:"/cryptocurrencies",name:"cryptocurrencies",component:ye}],Te=(0,k.p7)({history:(0,k.PO)("/crypto-currency-tracker/"),routes:ke});var De=Te;(0,r.ri)($).use(De).mount("#app")},3258:function(e,t,n){e.exports=n.p+"img/logo-cct.86d9b7ad.svg"}},t={};function n(r){var c=t[r];if(void 0!==c)return c.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,r,c,s){if(!r){var o=1/0;for(u=0;u<e.length;u++){r=e[u][0],c=e[u][1],s=e[u][2];for(var l=!0,i=0;i<r.length;i++)(!1&s||o>=s)&&Object.keys(n.O).every((function(e){return n.O[e](r[i])}))?r.splice(i--,1):(l=!1,s<o&&(o=s));if(l){e.splice(u--,1);var a=c();void 0!==a&&(t=a)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[r,c,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/crypto-currency-tracker/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var c,s,o=r[0],l=r[1],i=r[2],a=0;if(o.some((function(t){return 0!==e[t]}))){for(c in l)n.o(l,c)&&(n.m[c]=l[c]);if(i)var u=i(n)}for(t&&t(r);a<o.length;a++)s=o[a],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(u)},r=self["webpackChunkcrypto_currency_tracker"]=self["webpackChunkcrypto_currency_tracker"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3215)}));r=n.O(r)})();
//# sourceMappingURL=app.3171a45f.js.map