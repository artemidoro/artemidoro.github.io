import{P as u,Q as p,T as f,U as a,V as c,Y as m,ta as C}from"./chunk-AGIFSZZA.js";var D=null;function h(){return D}function Te(n){D||(D=n)}var F=class{},y=new f("DocumentToken"),S=(()=>{let t=class t{historyGo(e){throw new Error("Not implemented")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=u({token:t,factory:()=>(()=>c(I))(),providedIn:"platform"});let n=t;return n})();var I=(()=>{let t=class t extends S{constructor(){super(),this._doc=c(y),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return h().getBaseHref(this._doc)}onPopState(e){let i=h().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=h().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=u({token:t,factory:()=>(()=>new t)(),providedIn:"platform"});let n=t;return n})();function v(n,t){if(n.length==0)return t;if(t.length==0)return n;let s=0;return n.endsWith("/")&&s++,t.startsWith("/")&&s++,s==2?n+t.substring(1):s==1?n+t:n+"/"+t}function E(n){let t=n.match(/#|\?|$/),s=t&&t.index||n.length,e=s-(n[s-1]==="/"?1:0);return n.slice(0,e)+n.slice(s)}function o(n){return n&&n[0]!=="?"?"?"+n:n}var g=(()=>{let t=class t{historyGo(e){throw new Error("Not implemented")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=u({token:t,factory:()=>(()=>c(B))(),providedIn:"root"});let n=t;return n})(),M=new f("appBaseHref"),B=(()=>{let t=class t extends g{constructor(e,i){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??c(y).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return v(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+o(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,d){let l=this.prepareExternalUrl(r+o(d));this._platformLocation.pushState(e,i,l)}replaceState(e,i,r,d){let l=this.prepareExternalUrl(r+o(d));this._platformLocation.replaceState(e,i,l)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}};t.\u0275fac=function(i){return new(i||t)(a(S),a(M,8))},t.\u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})();var L=(()=>{let t=class t{constructor(e){this._subject=new C,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=T(E(w(i))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+o(i))}normalize(e){return t.stripTrailingSlash(R(this._basePath,w(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+o(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+o(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)})),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i,complete:r})}};t.normalizeQueryParams=o,t.joinWithSlash=v,t.stripTrailingSlash=E,t.\u0275fac=function(i){return new(i||t)(a(g))},t.\u0275prov=u({token:t,factory:()=>O(),providedIn:"root"});let n=t;return n})();function O(){return new L(a(g))}function R(n,t){if(!n||!t.startsWith(n))return t;let s=t.substring(n.length);return s===""||["/",";","?","#"].includes(s[0])?s:t}function w(n){return n.replace(/\/index.html$/,"")}function T(n){if(new RegExp("^(https?:)?//").test(n)){let[,s]=n.split(/\/\/[^\/]+/);return s}return n}function Pe(n,t){t=encodeURIComponent(t);for(let s of n.split(";")){let e=s.indexOf("="),[i,r]=e==-1?[s,""]:[s.slice(0,e),s.slice(e+1)];if(i.trim()===t)return decodeURIComponent(r)}return null}var ke=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=m({type:t}),t.\u0275inj=p({});let n=t;return n})(),P="browser",k="server";function xe(n){return n===P}function Ne(n){return n===k}var A=class{};export{h as a,Te as b,F as c,y as d,L as e,Pe as f,ke as g,P as h,xe as i,Ne as j,A as k};
