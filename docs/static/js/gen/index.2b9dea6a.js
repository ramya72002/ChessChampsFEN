(()=>{"use strict";var r={1713:function(r,e,t){var n=t(737),o=t(6919),i=t(5981),u=t(1019);let f=new URL(location.href).searchParams,a=f.get("fen")||"8/8/8/8/8/8/8/8",c=(0,n.D_)({size:l("size"),set:s("set"),knightOffset:l("knightOffset"),pattern:s("pattern"),bg:s("bg"),border:s("border"),blackWhite:f.has("blackWhite"),w:l("w"),h:l("h")});function s(r){return f.get(r)||void 0}function l(r){let e=f.get(r);return e?Number(e):void 0}let{w:v,h}=(0,o.A1)(a)||c,b=(0,o.S3)(a,v,h);c.w=v,c.h=h,(0,u.$)("../assets",c,i.u).then(()=>(0,i.i)(b,c))}},e={};function t(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return r[n](i,i.exports,t),i.exports}t.m=r,t.d=function(r,e){for(var n in e)t.o(e,n)&&!t.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:e[n]})},t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},(()=>{var r=[];t.O=function(e,n,o,i){if(n){i=i||0;for(var u=r.length;u>0&&r[u-1][2]>i;u--)r[u]=r[u-1];r[u]=[n,o,i];return}for(var f=1/0,u=0;u<r.length;u++){for(var n=r[u][0],o=r[u][1],i=r[u][2],a=!0,c=0;c<n.length;c++)(!1&i||f>=i)&&Object.keys(t.O).every(function(r){return t.O[r](n[c])})?n.splice(c--,1):(a=!1,i<f&&(f=i));if(a){r.splice(u--,1);var s=o();void 0!==s&&(e=s)}}return e}})(),t.rv=function(){return"1.2.3"},(()=>{var r={421:0};t.O.j=function(e){return 0===r[e]};var e=function(e,n){var o,i,u=n[0],f=n[1],a=n[2],c=0;if(u.some(function(e){return 0!==r[e]})){for(o in f)t.o(f,o)&&(t.m[o]=f[o]);if(a)var s=a(t)}for(e&&e(n);c<u.length;c++)i=u[c],t.o(r,i)&&r[i]&&r[i][0](),r[i]=0;return t.O(s)},n=self.webpackChunkfen_tool=self.webpackChunkfen_tool||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),t.ruid="bundler=rspack@1.2.3";var n=t.O(void 0,["557"],function(){return t(1713)});n=t.O(n)})();