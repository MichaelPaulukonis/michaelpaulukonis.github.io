import{_ as g,a as d,b as f}from"./pagination.12d079e2.js";import b from"./ContentQuery.e2e719ac.js";import{a as x}from"./chevronDown.8b1e5a53.js";import{a1 as y,o as c,b as h,V as o,D as _,C,u as a,c as B,q as P}from"./entry.fb7881e6.js";import{q as k}from"./query.4f594473.js";import"./nuxt-link.cc5e8f13.js";/* empty css                       */import"./utils.629df51e.js";import"./index.36486552.js";/* empty css                    */const S={__name:"index",async setup(w){let t,e;const{data:n}=([t,e]=y(async()=>C("content-/blog",async()=>{const s=await k("/blog").only("headline").find();return Math.ceil(s.length/6)})),t=await t,e(),t);return(s,q)=>{const r=g,m=d,i=b,l=f,p=x;return c(),h("main",null,[o(r),o(p,{class:"pt-0-important",id:"main"},{default:_(()=>[o(i,{path:"/blog",only:["headline","excerpt","date","tags","_path","image"],sort:{date:-1},limit:6},{default:_(({data:u})=>[o(m,{data:u},null,8,["data"])]),_:1}),a(n)>1?(c(),B(l,{key:0,class:"mt-8",currentPage:1,totalPages:a(n),nextPage:a(n)>1,baseUrl:"/blog/",pageUrl:"/blog/page/"},null,8,["totalPages","nextPage"])):P("",!0)]),_:1})])}}};export{S as default};
