import{a as $,_ as k}from"./chevronDown.8b1e5a53.js";import{a as b,o as s,c as B,D as o,e,G as L,b as d,S as y,U as P,V as n,t as p,u as w,q as N,m as S,a2 as l,a3 as m,W as h,X as _}from"./entry.fb7881e6.js";import{_ as v}from"./nuxt-link.cc5e8f13.js";/* empty css                       */const U={},q=e("div",{class:"border-t-2 pt-8 border-typography_primary flex flex-col md:flex-row items-center md:justify-between md:text-right mb-6 md:mb-8"},[e("ol",{itemscope:"",itemtype:"https://schema.org/BreadcrumbList",class:"blog-breadcrumb"},[e("li",{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"},[e("a",{itemprop:"item",href:"/"},[e("span",{itemprop:"name"},"Home")]),e("meta",{itemprop:"position",content:"1"})]),e("span",null,"/"),e("li",{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"},[e("span",{itemprop:"name"},"Blog"),e("meta",{itemprop:"position",content:"2"})])])],-1),I=e("h1",{class:"font-bold mb-4 md:mb-6 text-h3 leading-h3 md:text-h1 md:leading-h1 text-center md:text-left"},"Blog",-1),D=e("p",{class:"mb-3 md:w-8/12 md:text-lg md:leading-lg text-center md:text-left"}," So, this will be a blog, of sorts. Again. Maybe. I feel confidently ambivalent about this, I think. ",-1),V=e("div",{class:"border-t-2 mt-8 border-typography_primary flex flex-col md:flex-row items-center md:justify-between md:text-right"},null,-1);function C(t,a){const i=$;return s(),B(i,{id:"blog",class:"text-typography_primary"},{default:o(()=>[q,I,D,V]),_:1})}const O=b(U,[["render",C]]),A={class:"grid grid-cols-10 gap-4 text-typography_primary"},E={class:"wrapper"},M={class:"text-h3 leading-h3 font-semibold mb-2 group-hover:text-brand_primary"},j={class:"text-sm leading-sm mb-4 text-typography_primary/75 dark:text-typography_primary_dark/75"},T={key:0,class:"w-full md:w-7/12 text-h3 leading-h3 font-bold dark:text-white"},Q={__name:"list",props:{data:{type:Array,required:!0},message:{type:String,default:"There are no posts right now, but stay tuned for newer releases in the future."}},setup(t){const{$formatDate:a}=L();return(i,x)=>{const g=v;return s(),d(y,null,[e("ul",A,[(s(!0),d(y,null,P(t.data,r=>(s(),d("li",{key:r._path,class:"col-span-full md:col-span-5 relative rounded-md border-2 border-typography_primary hover:border-brand_primary group"},[n(g,{to:r._path+"/",class:"p-4 block relative"},{default:o(()=>[e("div",E,[e("header",null,[e("h2",M,p(r.headline),1),e("p",j,p(w(a)(r.date)),1),e("p",null,p(r.excerpt),1)])])]),_:2},1032,["to"])]))),128))]),t.data.length==0?(s(),d("p",T,p(t.message),1)):N("",!0)],64)}}},z={class:"pagination-list text-typography_primary"},F={class:"pagination-extra"},G={class:"pagination-extra"},H={__name:"pagination",props:{currentPage:{type:Number,required:!0},totalPages:{type:Number,required:!0},nextPage:{type:Boolean,required:!0},baseUrl:{type:String,required:!0},pageUrl:{type:String,required:!0}},setup(t){const a=t,i=r=>`${a.pageUrl}${r}/`,x=[Math.max(1,a.currentPage-1),a.currentPage,Math.min(a.totalPages,a.currentPage+1)],g=S(()=>a.currentPage===2?a.baseUrl:`${a.pageUrl}${a.currentPage-1}/`);return(r,R)=>{const f=k,u=v;return s(),d("div",z,[l(n(u,{class:"pagination-item pagination-icon",to:w(g)},{default:o(()=>[n(f,{class:"transform rotate-90 h-6 w-6",width:"24",height:"24"})]),_:1},8,["to"]),[[m,t.currentPage>1]]),n(u,{class:_(["pagination-item",t.currentPage===1?"active":""]),to:t.baseUrl},{default:o(()=>[h("1")]),_:1},8,["class","to"]),l(e("span",F," ... ",512),[[m,t.currentPage>2]]),(s(),d(y,null,P(x,c=>l(n(u,{key:c,class:_(["pagination-item",t.currentPage===c?"active":""]),to:i(c)},{default:o(()=>[h(p(c),1)]),_:2},1032,["class","to"]),[[m,c!==1&&c!==t.totalPages]])),64)),l(e("span",G," ... ",512),[[m,t.currentPage<t.totalPages-1]]),l(n(u,{class:_(["pagination-item",t.currentPage===t.totalPages?"active":""]),to:i(t.totalPages)},{default:o(()=>[h(p(t.totalPages),1)]),_:1},8,["class","to"]),[[m,t.totalPages>1]]),l(n(u,{class:"pagination-item pagination-icon",to:i(t.currentPage+1)},{default:o(()=>[n(f,{class:"transform -rotate-90 h-6 w-6",width:"24",height:"24"})]),_:1},8,["to"]),[[m,t.currentPage<t.totalPages]])])}}},Y=b(H,[["__scopeId","data-v-1dac4ff8"]]);export{O as _,Q as a,Y as b};
