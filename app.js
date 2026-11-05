(()=>{var _i=(s,e,t)=>()=>{if(t)throw t[0];try{return s&&(e=s(s=0)),e}catch(n){throw t=[n],n}};var Jf=(s,e)=>()=>{try{return e||s((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};function Kn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function ih(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var nn,vr,Zo,Ft,pt,bn,nt,ko,jf,Kf,sh,Qf,ep,Rt,bt,ei,oa,Vn,tn,$o,Jr,rh,Vt,tp,np,$u,Jo,Zi,Lo,jo,ip,sp,yt,zn,Vo,Ko,fn,ea,ah,oh,la,Mr,lh,br,rp,jr,ap,Qo,xi,Ho,ch,Qt,Uo,Ju,Kr,el,tl,vi,nl,$t,St,_t,$i,op,ta,il,uh,hh,dh,pn,lp,Ss,ju,na,_r,cp,fh,ca,Mi,Xi,up,Go,hp,Ku,ws,ia,ua,ha,ph,kn,mh,gh,dp,sa,fp,pp,Es,Qu,mp,Mn,yr,bi,Tr,Bt,gp,Wo,_h,_p,Sn,Xo,yh,xh,qo,vh,Mh,yp,xp,vp,bh,Mp,bp,As,Sh,Sp,eh,dn,mr,bs,wh,Eh,ot,gr,No,Th,Ah,th,Qn,wp,sl,Sr,en,Ts,Ve,Ep,Tp,Ap,Cp,Rp,Pp,qi,Ji,Ch,Oo,Fo,rl,wr,kt,Ip,al,Dp,ol,yi,Yo,ll,Lp,Up,Np,xr,ra,Rh,Et,cl,Ph,Op,Fp,da,Ih,Bp,ul,hl,zp,kp,Vp,dl,Jt,Yi,Qr,Hp,nh,Gp,Bo,Er,Dh,Wp,aa,Xp,qp,zo,Ht,Yp,Zp,$p,Jp,jp,Kp,Qp,em,tm,nm,im,sm,rm,am,om,lm,cm,um,fl=_i(()=>{nn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},vr={duration:.5,overwrite:!1,delay:0},bn=1e8,nt=1/bn,ko=Math.PI*2,jf=ko/4,Kf=0,sh=Math.sqrt,Qf=Math.cos,ep=Math.sin,Rt=function(e){return typeof e=="string"},bt=function(e){return typeof e=="function"},ei=function(e){return typeof e=="number"},oa=function(e){return typeof e>"u"},Vn=function(e){return typeof e=="object"},tn=function(e){return e!==!1},$o=function(){return typeof window<"u"},Jr=function(e){return bt(e)||Rt(e)},rh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Vt=Array.isArray,tp=/random\([^)]+\)/g,np=/,\s*/g,$u=/(?:-?\.?\d|\.)+/gi,Jo=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Zi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Lo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,jo=/[+-]=-?[.\d]+/,ip=/[^,'"\[\]\s]+/gi,sp=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,fn={},ea={},oh=function(e){return(ea=Ss(e,fn))&&Ht},la=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Mr=function(e,t){return!t&&console.warn(e)},lh=function(e,t){return e&&(fn[e]=t)&&ea&&(ea[e]=t)||fn},br=function(){return 0},rp={suppressEvents:!0,isStart:!0,kill:!1},jr={suppressEvents:!0,kill:!1},ap={suppressEvents:!0},Qo={},xi=[],Ho={},Qt={},Uo={},Ju=30,Kr=[],el="",tl=function(e){var t=e[0],n,i;if(Vn(t)||bt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Kr.length;i--&&!Kr[i].targetTest(t););n=Kr[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new rl(e[i],n)))||e.splice(i,1);return e},vi=function(e){return e._gsap||tl(Sn(e))[0]._gsap},nl=function(e,t,n){return(n=e[t])&&bt(n)?e[t]():oa(n)&&e.getAttribute&&e.getAttribute(t)||n},$t=function(e,t){return(e=e.split(",")).forEach(t)||e},St=function(e){return Math.round(e*1e5)/1e5||0},_t=function(e){return Math.round(e*1e7)/1e7||0},$i=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},op=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},ta=function(){var e=xi.length,t=xi.slice(0),n,i;for(Ho={},xi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},il=function(e){return!!(e._initted||e._startAt||e.add)},uh=function(e,t,n,i){xi.length&&!Ft&&ta(),e.render(t,n,i||!!(Ft&&t<0&&il(e))),xi.length&&!Ft&&ta()},hh=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ip).length<2?t:Rt(e)?e.trim():e},dh=function(e){return e},pn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},lp=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ss=function(e,t){for(var n in t)e[n]=t[n];return e},ju=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Vn(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},na=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},_r=function(e){var t=e.parent||yt,n=e.keyframes?lp(Vt(e.keyframes)):pn;if(tn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},cp=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},fh=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},ca=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Mi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Xi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},up=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Go=function(e,t,n,i){return e._startAt&&(Ft?e._startAt.revert(jr):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},hp=function s(e){return!e||e._ts&&s(e.parent)},Ku=function(e){return e._repeat?ws(e._tTime,e=e.duration()+e._rDelay)*e:0},ws=function(e,t){var n=Math.floor(e=_t(e/t));return e&&n===e?n-1:n},ia=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ua=function(e){return e._end=_t(e._start+(e._tDur/Math.abs(e._ts||e._rts||nt)||0))},ha=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=_t(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ua(e),n._dirty||Xi(n,e)),e},ph=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ia(e.rawTime(),t),(!t._dur||Tr(0,t.totalDuration(),n)-t._tTime>nt)&&t.render(n,!0)),Xi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-nt}},kn=function(e,t,n,i){return t.parent&&Mi(t),t._start=_t((ei(n)?n:!n&&sa(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==yt?Mn(e,n,t):e._time)+t._delay),t._end=_t(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),fh(e,t,"_first","_last",e._sort?"_start":0),sa(t)||(e._recent=t),i||ph(e,t),e._ts<0&&ha(e,e._tTime),e},mh=function(e,t){return(fn.ScrollTrigger||la("scrollTrigger",t))&&fn.ScrollTrigger.create(t,e)},gh=function(e,t,n,i,r){if(ll(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Ft&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ch!==en.frame)return xi.push(e),e._lazy=[r,i],1},dp=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},sa=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},fp=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&dp(e)&&!(!e._initted&&sa(e))||(e._ts<0||e._dp._ts<0)&&!sa(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=Tr(0,e._tDur,t),u=ws(l,o),e._yoyo&&u&1&&(a=1-a),u!==ws(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Ft||i||e._zTime===nt||!t&&e._zTime){if(!e._initted&&gh(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?nt:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Go(e,t,n,!0),e._onUpdate&&!n&&dn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&dn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Mi(e,1),!n&&!Ft&&(dn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},pp=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Es=function(e,t,n,i){var r=e._repeat,a=_t(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:_t(a*(r+1)+e._rDelay*r):a,o>0&&!i&&ha(e,e._tTime=e._tDur*o),e.parent&&ua(e),n||Xi(e.parent,e),e},Qu=function(e){return e instanceof kt?Xi(e):Es(e,e._dur)},mp={_start:0,endTime:br,totalDuration:br},Mn=function s(e,t,n){var i=e.labels,r=e._recent||mp,a=e.duration()>=bn?r.endTime(!1):e._dur,o,l,c;return Rt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Vt(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},yr=function(e,t,n){var i=ei(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=tn(l.vars.inherit)&&l.parent;a.immediateRender=tn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new Et(t[0],a,t[r+1])},bi=function(e,t){return e||e===0?t(e):t},Tr=function(e,t,n){return n<e?e:n>t?t:n},Bt=function(e,t){return!Rt(e)||!(t=sp.exec(e))?"":t[1]},gp=function(e,t,n){return bi(n,function(i){return Tr(e,t,i)})},Wo=[].slice,_h=function(e,t){return e&&Vn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Vn(e[0]))&&!e.nodeType&&e!==zn},_p=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Rt(i)&&!t||_h(i,1)?(r=n).push.apply(r,Sn(i)):n.push(i)})||n},Sn=function(e,t,n){return pt&&!t&&pt.selector?pt.selector(e):Rt(e)&&!n&&(Vo||!Ts())?Wo.call((t||Ko).querySelectorAll(e),0):Vt(e)?_p(e,n):_h(e)?Wo.call(e,0):e?[e]:[]},Xo=function(e){return e=Sn(e)[0]||Mr("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Sn(t,n.querySelectorAll?n:n===e?Mr("Invalid scope")||Ko.createElement("div"):e)}},yh=function(e){return e.sort(function(){return .5-Math.random()})},xh=function(e){if(bt(e))return e;var t=Vn(e)?e:{each:e},n=qi(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return Rt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(d,f,_){var g=(_||t).length,m=a[g],p,x,M,y,A,T,E,C,v;if(!m){if(v=t.grid==="auto"?0:(t.grid||[1,bn])[1],!v){for(E=-bn;E<(E=_[v++].getBoundingClientRect().left)&&v<g;);v<g&&v--}for(m=a[g]=[],p=l?Math.min(v,g)*u-.5:i%v,x=v===bn?0:l?g*h/v-.5:i/v|0,E=0,C=bn,T=0;T<g;T++)M=T%v-p,y=x-(T/v|0),m[T]=A=c?Math.abs(c==="y"?y:M):sh(M*M+y*y),A>E&&(E=A),A<C&&(C=A);i==="random"&&yh(m),m.max=E-C,m.min=C,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(v>g?g-1:c?c==="y"?g/v:v:Math.max(v,g/v))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=Bt(t.amount||t.each)||0,n=n&&g<0?Pp(n):n}return g=(m[d]-m.min)/m.max||0,_t(m.b+(n?n(g):g)*m.v)+m.u}},qo=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=_t(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ei(n)?0:Bt(n))}},vh=function(e,t){var n=Vt(e),i,r;return!n&&Vn(e)&&(i=n=e.radius||bn,e.values?(e=Sn(e.values),(r=!ei(e[0]))&&(i*=i)):e=qo(e.increment)),bi(t,n?bt(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=bn,u=0,h=e.length,d,f;h--;)r?(d=e[h].x-o,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-o),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:a,r||u===a||ei(a)?u:u+Bt(a)}:qo(e))},Mh=function(e,t,n,i){return bi(Vt(e)?!t:n===!0?!!(n=0):!i,function(){return Vt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},yp=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},xp=function(e,t){return function(n){return e(parseFloat(n))+(t||Bt(n))}},vp=function(e,t,n){return Sh(e,t,0,1,n)},bh=function(e,t,n){return bi(n,function(i){return e[~~t(i)]})},Mp=function s(e,t,n){var i=t-e;return Vt(e)?bh(e,s(0,e.length),t):bi(n,function(r){return(i+(r-e)%i)%i+e})},bp=function s(e,t,n){var i=t-e,r=i*2;return Vt(e)?bh(e,s(0,e.length-1),t):bi(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},As=function(e){return e.replace(tp,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(np);return Mh(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Sh=function(e,t,n,i,r){var a=t-e,o=i-n;return bi(r,function(l){return n+((l-e)/a*o||0)})},Sp=function s(e,t,n,i){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var a=Rt(e),o={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Vt(e)&&!Vt(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(_){_*=h;var g=Math.min(d,~~_);return u[g](_-g)},n=t}else i||(e=Ss(Vt(e)?[]:{},e));if(!u){for(l in t)al.call(o,e,l,"get",t[l]);r=function(_){return hl(_,o)||(a?e.p:e)}}}return bi(n,r)},eh=function(e,t,n){var i=e.labels,r=bn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},dn=function(e,t,n){var i=e.vars,r=i[t],a=pt,o=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&xi.length&&ta(),o&&(pt=o),u=l?r.apply(c,l):r.call(c),pt=a,u},mr=function(e){return Mi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ft),e.progress()<1&&dn(e,"onInterrupt"),e},wh=[],Eh=function(e){if(e)if(e=!e.name&&e.default||e,$o()||e.headless){var t=e.name,n=bt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:br,render:hl,add:al,kill:kp,modifier:zp,rawVars:0},a={targetTest:0,get:0,getSetter:da,aliases:{},register:0};if(Ts(),e!==i){if(Qt[t])return;pn(i,pn(na(e,r),a)),Ss(i.prototype,Ss(r,na(e,a))),Qt[i.prop=t]=i,e.targetTest&&(Kr.push(i),Qo[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}lh(t,i),e.register&&e.register(Ht,i,Jt)}else wh.push(e)},ot=255,gr={aqua:[0,ot,ot],lime:[0,ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ot],navy:[0,0,128],white:[ot,ot,ot],olive:[128,128,0],yellow:[ot,ot,0],orange:[ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ot,0,0],pink:[ot,192,203],cyan:[0,ot,ot],transparent:[ot,ot,ot,0]},No=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ot+.5|0},Th=function(e,t,n){var i=e?ei(e)?[e>>16,e>>8&ot,e&ot]:0:gr.black,r,a,o,l,c,u,h,d,f,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),gr[e])i=gr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ot,i&ot,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ot,e&ot]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match($u),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=No(l+1/3,r,a),i[1]=No(l,r,a),i[2]=No(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(Jo),n&&i.length<4&&(i[3]=1),i}else i=e.match($u)||gr.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/ot,a=i[1]/ot,o=i[2]/ot,h=Math.max(r,a,o),d=Math.min(r,a,o),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===r?(a-o)/f+(a<o?6:0):h===a?(o-r)/f+2:(r-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Ah=function(e){var t=[],n=[],i=-1;return e.split(Qn).forEach(function(r){var a=r.match(Zi)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},th=function(e,t,n){var i="",r=(e+i).match(Qn),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!r)return e;if(r=r.map(function(d){return(d=Th(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Ah(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Qn,"1").split(Zi),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Qn),h=c.length-1;o<h;o++)i+=c[o]+r[o];return i+c[h]},Qn=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in gr)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),wp=/hsl[a]?\(/,sl=function(e){var t=e.join(" "),n;if(Qn.lastIndex=0,Qn.test(t))return n=wp.test(t),e[1]=th(e[1],n),e[0]=th(e[0],n,Ah(e[1])),!0},en=(function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,u,h,d,f,_=function g(m){var p=s()-i,x=m===!0,M,y,A,T;if((p>e||p<0)&&(n+=p-t),i+=p,A=i-n,M=A-a,(M>0||x)&&(T=++h.frame,d=A-h.time*1e3,h.time=A=A/1e3,a+=M+(M>=r?0:r-M),y=1),x||(l=c(g)),y)for(f=0;f<o.length;f++)o[f](A,d,T,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){ah&&(!Vo&&$o()&&(zn=Vo=window,Ko=zn.document||{},fn.gsap=Ht,(zn.gsapVersions||(zn.gsapVersions=[])).push(Ht.version),oh(ea||zn.GreenSockGlobals||!zn.gsap&&zn||{}),wh.forEach(Eh)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},Sr=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Sr=0,c=br},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){r=1e3/(m||240),a=h.time*1e3+r},add:function(m,p,x){var M=p?function(y,A,T,E){m(y,A,T,E),h.remove(M)}:m;return h.remove(m),o[x?"unshift":"push"](M),Ts(),M},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},h})(),Ts=function(){return!Sr&&en.wake()},Ve={},Ep=/^[\d.\-M][\d.\-,\s]/,Tp=/["']/g,Ap=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(Tp,"").trim():+c,i=l.substr(o+1).trim();return t},Cp=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Rp=function(e){var t=(e+"").split("("),n=Ve[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Ap(t[1])]:Cp(e).split(",").map(hh)):Ve._CE&&Ep.test(e)?Ve._CE("",e):n},Pp=function(e){return function(t){return 1-e(1-t)}},qi=function(e,t){return e&&(bt(e)?e:Ve[e]||Rp(e))||t},Ji=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return $t(e,function(o){Ve[o]=fn[o]=r,Ve[a=o.toLowerCase()]=n;for(var l in r)Ve[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ve[o+"."+l]=r[l]}),r},Ch=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Oo=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/ko*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*ep((u-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Ch(o);return r=ko/r,l.config=function(c,u){return s(e,c,u)},l},Fo=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Ch(n);return i.config=function(r){return s(e,r)},i};$t("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Ji(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ve.Linear.easeNone=Ve.none=Ve.Linear.easeIn;Ji("Elastic",Oo("in"),Oo("out"),Oo());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};Ji("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Ji("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Ji("Circ",function(s){return-(sh(1-s*s)-1)});Ji("Sine",function(s){return s===1?1:-Qf(s*jf)+1});Ji("Back",Fo("in"),Fo("out"),Fo());Ve.SteppedEase=Ve.steps=fn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-nt;return function(o){return((i*Tr(0,a,o)|0)+r)*n}}};vr.ease=Ve["quad.out"];$t("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return el+=s+","+s+"Params,"});rl=function(e,t){this.id=Kf++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:nl,this.set=t?t.getSetter:da},wr=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Es(this,+t.duration,1,1),this.data=t.data,pt&&(this._ctx=pt,pt.data.push(this)),Sr||en.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Es(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ts(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(ha(this,n),!r._dp||r.parent||ph(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&kn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===nt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),uh(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ku(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ku(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?ws(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-nt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?ia(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-nt?0:this._rts;var o=this.totalDuration();return(a!==this._rts<0||r>0&&r<o)&&this.totalTime(Tr(-Math.abs(this._delay),o,r),i!==!1),ua(this),up(this)},e.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Ts(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==nt,a;if(r)for(this._tTime-=nt,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=i+nt){r=!1;break}a=a._next}this.totalTime(i,r)}return this},e.startTime=function(n){if(arguments.length){this._start=_t(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&kn(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(tn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ia(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=ap);var i=Ft;return Ft=n,il(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ft=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Qu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Qu(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Mn(this,n),tn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,tn(i)),this._dur||(this._zTime=-nt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-nt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-nt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-nt)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(a){var o=bt(n)?n:dh,l=function(){var u=i.then;i.then=null,r&&r(),bt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){mr(this)},s})();pn(wr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-nt,_prom:0,_ps:!1,_rts:1});kt=(function(s){ih(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=tn(n.sortChildren),yt&&kn(n.parent||yt,Kn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&mh(Kn(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return yr(0,arguments,this),this},t.from=function(i,r,a){return yr(1,arguments,this),this},t.fromTo=function(i,r,a,o){return yr(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,_r(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Et(i,r,Mn(this,a),1),this},t.call=function(i,r,a){return kn(this,Et.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,l,c,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Et(i,a,Mn(this,l)),this},t.staggerFrom=function(i,r,a,o,l,c,u){return a.runBackwards=1,_r(a).immediateRender=tn(a.immediateRender),this.staggerTo(i,r,a,o,l,c,u)},t.staggerFromTo=function(i,r,a,o,l,c,u,h){return o.startAt=a,_r(o).immediateRender=tn(o.immediateRender),this.staggerTo(i,r,o,l,c,u,h)},t.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:_t(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,_,g,m,p,x,M,y,A,T,E;if(this!==yt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),d=u,y=this._start,M=this._ts,p=!M,h&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(d=_t(u%m),u===l?(g=this._repeat,d=c):(A=_t(u/m),g=~~A,g&&g===A&&(d=c,g--),d>c&&(d=c)),A=ws(this._tTime,m),!o&&this._tTime&&A!==g&&this._tTime-A*m-this._dur<=0&&(A=g),T&&g&1&&(d=c-d,E=1),g!==A&&!this._lock){var C=T&&A&1,v=C===(T&&g&1);if(g<A&&(C=!C),o=C?0:u%c?c:u,this._lock=1,this.render(o||(E?0:_t(g*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&dn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,A=g),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=pp(this,_t(o),_t(d)),x&&(u-=d-(d=x._start))),this._tTime=u,this._time=d,this._act=!!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!r&&!A&&(dn(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,a),d!==this._time||!this._ts&&!p){x=0,_&&(u+=this._zTime=-nt);break}}f=_}else{f=this._last;for(var b=i<0?i:d;f;){if(_=f._prev,(f._act||b<=f._end)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(b-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(b-f._start)*f._ts,r,a||Ft&&il(f)),d!==this._time||!this._ts&&!p){x=0,_&&(u+=this._zTime=b?-nt:nt);break}}f=_}}if(x&&!r&&(this.pause(),x.render(d>=o?0:-nt)._zTime=d>=o?1:-1,this._ts))return this._start=y,ua(this),this.render(i,r,a);this._onUpdate&&!r&&dn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Mi(this,1),!r&&!(i<0&&!o)&&(u||o||!l)&&(dn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(ei(r)||(r=Mn(this,r,i)),!(i instanceof wr)){if(Vt(i))return i.forEach(function(o){return a.add(o,r)}),this;if(Rt(i))return this.addLabel(i,r);if(bt(i))i=Et.delayedCall(0,i);else return this}return this!==i?kn(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-bn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Et?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return Rt(i)?this.removeLabel(i):bt(i)?this.killTweensOf(i):(i.parent===this&&ca(this,i),i===this._recent&&(this._recent=this._last),Xi(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=_t(en.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Mn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=Et.delayedCall(0,r||br,a);return o.data="isPause",this._hasPause=1,kn(this,o,Mn(this,i))},t.removePause=function(i){var r=this._first;for(i=Mn(this,i);r;)r._start===i&&r.data==="isPause"&&Mi(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)yi!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=Sn(i),l=this._first,c=ei(r),u;l;)l instanceof Et?op(l._targets,o)&&(c?(!yi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(o,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=Mn(a,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,_=Et.to(a,pn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||nt,onStart:function(){if(a.pause(),!f){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&Es(_,m,0,1).render(_._time,!0,!0),f=1}u&&u.apply(_,h||[])}},r));return d?_.render(0):_},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,pn({startAt:{time:Mn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),eh(this,Mn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),eh(this,Mn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+nt)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=_t(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return Xi(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Xi(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,l=bn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,kn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=_t(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Es(a,a===yt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(yt._ts&&(uh(yt,ia(i,yt)),ch=en.frame),en.frame>=Ju){Ju+=nn.autoSleep||120;var r=yt._first;if((!r||!r._ts)&&nn.autoSleep&&en._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||en.sleep()}}},e})(wr);pn(kt.prototype,{_lock:0,_hasPause:0,_forcing:0});Ip=function(e,t,n,i,r,a,o){var l=new Jt(this._pt,e,t,0,1,ul,null,r),c=0,u=0,h,d,f,_,g,m,p,x;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=As(i)),a&&(x=[n,i],a(x,e,t),n=x[0],i=x[1]),d=n.match(Lo)||[];h=Lo.exec(i);)_=h[0],g=i.substring(c,h.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?$i(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=Lo.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(jo.test(i)||p)&&(l.e=0),this._pt=l,l},al=function(e,t,n,i,r,a,o,l,c,u){bt(i)&&(i=i(r||0,e,a));var h=e[t],d=n!=="get"?n:bt(h)?c?e[t.indexOf("set")||!bt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=bt(h)?c?Op:Ph:cl,_;if(Rt(i)&&(~i.indexOf("random(")&&(i=As(i)),i.charAt(1)==="="&&(_=$i(d,i)+(Bt(d)||0),(_||_===0)&&(i=_))),!u||d!==i||Yo)return!isNaN(d*i)&&i!==""?(_=new Jt(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?Bp:Ih,0,f),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!h&&!(t in e)&&la(t,i),Ip.call(this,e,t,d,i,f,l||nn.stringFilter,c))},Dp=function(e,t,n,i,r){if(bt(e)&&(e=xr(e,r,t,n,i)),!Vn(e)||e.style&&e.nodeType||Vt(e)||rh(e))return Rt(e)?xr(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=xr(e[o],r,t,n,i);return a},ol=function(e,t,n,i,r,a){var o,l,c,u;if(Qt[e]&&(o=new Qt[e]).init(r,o.rawVars?t[e]:Dp(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Jt(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==bs))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},ll=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,x=p&&p.data==="nested"?p.vars.targets:m,M=e._overwrite==="auto"&&!Zo,y=e.timeline,A=i.easeReverse||h,T,E,C,v,b,P,B,F,G,I,z,Z,H;if(y&&(!d||!r)&&(r="none"),e._ease=qi(r,vr.ease),e._rEase=A&&(qi(A)||e._ease),e._from=!y&&!!i.runBackwards,e._from&&(e.ratio=1),!y||d&&!i.stagger){if(F=m[0]?vi(m[0]).harness:0,Z=F&&i[F.prop],T=na(i,Qo),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!f?g.render(-1,!0):g.revert(u&&_?jr:rp),g._lazy=0),a){if(Mi(e._startAt=Et.set(m,pn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&tn(l),startAt:null,delay:0,onUpdate:c&&function(){return dn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ft||!o&&!f)&&e._startAt.revert(jr),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(o=!1),C=pn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&tn(l),immediateRender:o,stagger:0,parent:p},T),Z&&(C[F.prop]=Z),Mi(e._startAt=Et.set(m,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ft?e._startAt.revert(jr):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,nt,nt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&tn(l)||l&&!_,E=0;E<m.length;E++){if(b=m[E],B=b._gsap||tl(m)[E]._gsap,e._ptLookup[E]=I={},Ho[B.id]&&xi.length&&ta(),z=x===m?E:x.indexOf(b),F&&(G=new F).init(b,Z||T,e,z,x)!==!1&&(e._pt=v=new Jt(e._pt,b,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(te){I[te]=v}),G.priority&&(P=1)),!F||Z)for(C in T)Qt[C]&&(G=ol(C,T,e,z,b,x))?G.priority&&(P=1):I[C]=v=al.call(e,b,C,"get",T[C],z,x,0,i.stringFilter);e._op&&e._op[E]&&e.kill(b,e._op[E]),M&&e._pt&&(yi=e,yt.killTweensOf(b,I,e.globalTime(t)),H=!e.parent,yi=0),e._pt&&l&&(Ho[B.id]=1)}P&&dl(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!H,d&&t<=0&&y.render(bn,!0,!0)},Lp=function(e,t,n,i,r,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Yo=1,e.vars[t]="+=0",ll(e,o),Yo=0,l?Mr(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=St(n)+Bt(h.e)),h.b&&(h.b=u.s+Bt(h.b))},Up=function(e,t){var n=e[0]?vi(e[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return t;r=Ss({},t);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},Np=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(Vt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},xr=function(e,t,n,i,r){return bt(e)?e.call(t,n,i,r):Rt(e)&&~e.indexOf("random(")?As(e):e},ra=el+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Rh={};$t(ra+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Rh[s]=1});ra=ra.split(",");Et=(function(s){ih(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:_r(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=i.parent||yt,x=(Vt(n)||rh(n)?ei(n[0]):"length"in i)?[n]:Sn(n),M,y,A,T,E,C,v,b;if(o._targets=x.length?tl(x):Mr("GSAP target "+n+" not found. https://gsap.com",!nn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||d||Jr(c)||Jr(u)){i=o.vars;var P=i.easeReverse||i.yoyoEase;if(M=o.timeline=new kt({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:x}),M.kill(),M.parent=M._dp=Kn(o),M._start=0,d||Jr(c)||Jr(u)){if(T=x.length,v=d&&xh(d),Vn(d))for(E in d)~ra.indexOf(E)&&(b||(b={}),b[E]=d[E]);for(y=0;y<T;y++)A=na(i,Rh),A.stagger=0,P&&(A.easeReverse=P),b&&Ss(A,b),C=x[y],A.duration=+xr(c,Kn(o),y,C,x),A.delay=(+xr(u,Kn(o),y,C,x)||0)-o._delay,!d&&T===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),M.to(C,A,v?v(y,C,x):0),M._ease=Ve.none;M.duration()?c=u=0:o.timeline=0}else if(_){_r(pn(M.vars.defaults,{ease:"none"})),M._ease=qi(_.ease||i.ease||"none");var B=0,F,G,I;if(Vt(_))_.forEach(function(z){return M.to(x,z,">")}),M.duration();else{A={};for(E in _)E==="ease"||E==="easeEach"||Np(E,_[E],A,_.easeEach);for(E in A)for(F=A[E].sort(function(z,Z){return z.t-Z.t}),B=0,y=0;y<F.length;y++)G=F[y],I={ease:G.e,duration:(G.t-(y?F[y-1].t:0))/100*c},I[E]=G.v,M.to(x,I,B),B+=I.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||o.duration(c=M.duration())}else o.timeline=0;return f===!0&&!Zo&&(yi=Kn(o),yt.killTweensOf(x),yi=0),kn(p,Kn(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!_&&o._start===_t(p._time)&&tn(h)&&hp(Kn(o))&&p.data!=="nested")&&(o._tTime=-nt,o.render(Math.max(0,-u)||0)),m&&mh(Kn(o),m),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-nt&&!u?l:i<nt?0:i,d,f,_,g,m,p,x,M;if(!c)fp(this,i,r,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,M=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,r,a);if(d=_t(h%g),h===l?(_=this._repeat,d=c):(m=_t(h/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),p=this._yoyo&&_&1,p&&(d=c-d),m=ws(this._tTime,g),d===o&&!a&&this._initted&&_===m)return this._tTime=h,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=a=1,this.render(_t(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(gh(this,u?i:d,a,r,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,r,a)}if(this._rEase){var y=d<o;if(y!==this._inv){var A=y?o:c-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=A?(y?-1:1)/A:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(d/c);if(this._from&&(this.ratio=x=1-x),this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&h&&!r&&!m&&(dn(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(x,f.d),f=f._next;M&&M.render(i<0?i:M._dur*M._ease(d/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Go(this,i,r,a),dn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&dn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Go(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Mi(this,1),!r&&!(u&&!o)&&(h||o||p)&&(dn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o,l){Sr||en.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||ll(this,c),u=this._ease(c/this._dur),Lp(this,i,r,a,o,u,c,l)?this.resetTo(i,r,a,o,1):(ha(this,0),this.parent||fh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?mr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ft),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,yi&&yi.vars.overwrite!==!0)._first||mr(this),this.parent&&a!==this.timeline.totalDuration()&&Es(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Sn(i):o,c=this._ptLookup,u=this._pt,h,d,f,_,g,m,p;if((!r||r==="all")&&cp(o,l))return r==="all"&&(this._pt=0),mr(this);for(h=this._op=this._op||[],r!=="all"&&(Rt(r)&&(g={},$t(r,function(x){return g[x]=1}),r=g),r=Up(o,r)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],r==="all"?(h[p]=r,_=d,f={}):(f=h[p]=h[p]||{},_=r);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&ca(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&u&&mr(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return yr(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return yr(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return yt.killTweensOf(i,r,a)},e})(wr);pn(Et.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});$t("staggerTo,staggerFrom,staggerFromTo",function(s){Et[s]=function(){var e=new kt,t=Wo.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});cl=function(e,t,n){return e[t]=n},Ph=function(e,t,n){return e[t](n)},Op=function(e,t,n,i){return e[t](i.fp,n)},Fp=function(e,t,n){return e.setAttribute(t,n)},da=function(e,t){return bt(e[t])?Ph:oa(e[t])&&e.setAttribute?Fp:cl},Ih=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Bp=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ul=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},hl=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},zp=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},kp=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ca(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Vp=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},dl=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},Jt=(function(){function s(t,n,i,r,a,o,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||Ih,this.d=l||this,this.set=c||cl,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Vp,this.m=n,this.mt=r,this.tween=i},s})();$t(el+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Qo[s]=1});fn.TweenMax=fn.TweenLite=Et;fn.TimelineLite=fn.TimelineMax=kt;yt=new kt({sortChildren:!1,defaults:vr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});nn.stringFilter=sl;Yi=[],Qr={},Hp=[],nh=0,Gp=0,Bo=function(e){return(Qr[e]||Hp).map(function(t){return t()})},Er=function(){var e=Date.now(),t=[];e-nh>2&&(Bo("matchMediaInit"),Yi.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=zn.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Bo("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),nh=e,Bo("matchMedia"))},Dh=(function(){function s(t,n){this.selector=n&&Xo(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Gp++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){bt(n)&&(r=i,i=n,n=bt);var a=this,o=function(){var c=pt,u=a.selector,h;return c&&c!==a&&c.data.push(a),r&&(a.selector=Xo(r)),pt=a,h=i.apply(a,arguments),bt(h)&&a._r.push(h),pt=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===bt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=pt;pt=null,n(this),pt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Et&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof kt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Et)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i){for(var a=Yi.length;a--;)Yi[a].id===this.id&&Yi.splice(a,1);this._mqs&&this._mqs.forEach(function(o){return o.removeListener?o.removeListener(Er):o.removeEventListener("change",Er)}),this._mqs=null}},e.revert=function(n){this.kill(n||{})},s})(),Wp=(function(){function s(t){this.contexts=[],this.scope=t,pt&&pt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){Vn(n)||(n={matches:n});var a=new Dh(0,r||this.scope),o=a.conditions={},l,c,u;pt&&!a.selector&&(a.selector=pt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=zn.matchMedia(n[c]),l&&(Yi.indexOf(a)<0&&Yi.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Er):l.addEventListener("change",Er),(a._mqs||(a._mqs=[])).push(l)));return u&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),aa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Eh(i)})},timeline:function(e){return new kt(e)},getTweensOf:function(e,t){return yt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Rt(e)&&(e=Sn(e)[0]);var r=vi(e||{}).get,a=n?dh:hh;return n==="native"&&(n=""),e&&(t?a((Qt[t]&&Qt[t].get||r)(e,t,n,i)):function(o,l,c){return a((Qt[o]&&Qt[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Sn(e),e.length>1){var i=e.map(function(u){return Ht.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var a=Qt[t],o=vi(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;bs._pt=0,h.init(e,n?u+n:u,bs,0,[e]),h.render(1,h),bs._pt&&hl(1,bs)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=Ht.to(e,pn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return yt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=qi(e.ease,vr.ease)),ju(vr,e||{})},config:function(e){return ju(nn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Qt[o]&&!fn[o]&&Mr(t+" effect requires "+o+" plugin.")}),Uo[t]=function(o,l,c){return n(Sn(o),pn(l||{},r),c)},a&&(kt.prototype[t]=function(o,l,c){return this.add(Uo[t](o,Vn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ve[e]=qi(t)},parseEase:function(e,t){return arguments.length?qi(e,t):Ve},getById:function(e){return yt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new kt(e),i,r;for(n.smoothChildTiming=tn(e.smoothChildTiming),yt.remove(n),n._dp=0,n._time=n._tTime=yt._time,i=yt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Et&&i.vars.onComplete===i._targets[0]))&&kn(n,i,i._start-i._delay),i=r;return kn(yt,n,0),n},context:function(e,t){return e?new Dh(e,t):pt},matchMedia:function(e){return new Wp(e)},matchMediaRefresh:function(){return Yi.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Er()},addEventListener:function(e,t){var n=Qr[e]||(Qr[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Qr[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Mp,wrapYoyo:bp,distribute:xh,random:Mh,snap:vh,normalize:vp,getUnit:Bt,clamp:gp,splitColor:Th,toArray:Sn,selector:Xo,mapRange:Sh,pipe:yp,unitize:xp,interpolate:Sp,shuffle:yh},install:oh,effects:Uo,ticker:en,updateRoot:kt.updateRoot,plugins:Qt,globalTimeline:yt,core:{PropTween:Jt,globals:lh,Tween:Et,Timeline:kt,Animation:wr,getCache:vi,_removeLinkedListItem:ca,reverting:function(){return Ft},context:function(e){return e&&pt&&(pt.data.push(e),e._ctx=pt),pt},suppressOverwrites:function(e){return Zo=e}}};$t("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return aa[s]=Et[s]});en.add(kt.updateRoot);bs=aa.to({},{duration:0});Xp=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},qp=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=Xp(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},zo=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(Rt(r)&&(l={},$t(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}qp(o,r)}}}},Ht=aa.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Ft?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},zo("roundProps",qo),zo("modifiers"),zo("snap",vh))||aa;Et.version=kt.version=Ht.version="3.15.1";ah=1;$o()&&Ts();Yp=Ve.Power0,Zp=Ve.Power1,$p=Ve.Power2,Jp=Ve.Power3,jp=Ve.Power4,Kp=Ve.Linear,Qp=Ve.Quad,em=Ve.Cubic,tm=Ve.Quart,nm=Ve.Quint,im=Ve.Strong,sm=Ve.Elastic,rm=Ve.Back,am=Ve.SteppedEase,om=Ve.Bounce,lm=Ve.Sine,cm=Ve.Expo,um=Ve.Circ});var Lh,Si,Rs,xl,es,hm,Uh,vl,dm,ni,Qi,Ps,Cs,Nh,Ml,fm,pm,Hn,ml,mm,gm,_m,ym,Gh,Wh,xm,vm,Mm,bm,Sm,wm,xt,sn,Em,Xh,Tm,qh,Yh,gl,mn,Oh,Is,_l,Fh,Bh,Zh,$h,Ei,wi,zh,Am,Ti,ti,Cm,kh,Rm,Pm,fa,Cr,Jh,jh,Vh,bl,yl,Rr,pa,pl,Im,ji,Ar,Ki,Kh,Dm,Lm,Hh,Um,Sl,Qh=_i(()=>{fl();dm=function(){return typeof window<"u"},ni={},Qi=180/Math.PI,Ps=Math.PI/180,Cs=Math.atan2,Nh=1e8,Ml=/([A-Z])/g,fm=/(left|right|width|margin|padding|x)/i,pm=/[\s,\(]\S/,Hn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ml=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},mm=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},gm=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},_m=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ym=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Gh=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Wh=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},xm=function(e,t,n){return e.style[t]=n},vm=function(e,t,n){return e.style.setProperty(t,n)},Mm=function(e,t,n){return e._gsap[t]=n},bm=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Sm=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},wm=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},xt="transform",sn=xt+"Origin",Em=function s(e,t){var n=this,i=this.target,r=i.style,a=i._gsap;if(e in ni&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Hn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=ti(i,o)}):this.tfm[e]=a.x?a[e]:ti(i,e),e===sn&&(this.tfm.zOrigin=a.zOrigin);else return Hn.transform.split(",").forEach(function(o){return s.call(n,o,t)});if(this.props.indexOf(xt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(sn,t,"")),e=xt}(r||t)&&this.props.push(e,t,r[e])},Xh=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Tm=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Ml,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=vl(),(!r||!r.isStart)&&!n[xt]&&(Xh(n),i.zOrigin&&n[sn]&&(n[sn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},qh=function(e,t){var n={target:e,props:[],revert:Tm,save:Em};return e._gsap||Ht.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},gl=function(e,t){var n=Si.createElementNS?Si.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Si.createElement(e);return n&&n.style?n:Si.createElement(e)},mn=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Ml,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Is(t)||t,1)||""},Oh="O,Moz,ms,Ms,Webkit".split(","),Is=function(e,t,n){var i=t||es,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Oh[a]+e in r););return a<0?null:(a===3?"ms":a>=0?Oh[a]:"")+e},_l=function(){dm()&&window.document&&(Lh=window,Si=Lh.document,Rs=Si.documentElement,es=gl("div")||{style:{}},hm=gl("div"),xt=Is(xt),sn=xt+"Origin",es.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Yh=!!Is("perspective"),vl=Ht.core.reverting,xl=1)},Fh=function(e){var t=e.ownerSVGElement,n=gl("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Rs.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Rs.removeChild(n),r},Bh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Zh=function(e){var t,n;try{t=e.getBBox()}catch{t=Fh(e),n=1}return t&&(t.width||t.height)||n||(t=Fh(e)),t&&!t.width&&!t.x&&!t.y?{x:+Bh(e,["x","cx","x1"])||0,y:+Bh(e,["y","cy","y1"])||0,width:0,height:0}:t},$h=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Zh(e))},Ei=function(e,t){if(t){var n=e.style,i;t in ni&&t!==sn&&(t=xt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Ml,"-$1").toLowerCase())):n.removeAttribute(t)}},wi=function(e,t,n,i,r,a){var o=new Jt(e._pt,t,n,0,1,a?Wh:Gh);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},zh={deg:1,rad:1,turn:1},Am={grid:1,flex:1},Ti=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=es.style,l=fm.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",_,g,m,p;if(i===a||!r||zh[i]||zh[a])return r;if(a!=="px"&&!d&&(r=s(e,t,n,"px")),p=e.getCTM&&$h(e),(f||a==="%")&&(ni[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],St(f?r/_*h:r/100*_);if(o[l?"width":"height"]=h+(d?a:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Si||!g.appendChild)&&(g=Si.body),m=g._gsap,m&&f&&m.width&&l&&m.time===en.time&&!m.uncache)return St(r/m.width*h);if(f&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=h+i,_=e[u],x?e.style[t]=x:Ei(e,t)}else(f||a==="%")&&!Am[mn(g,"display")]&&(o.position=mn(e,"position")),g===e&&(o.position="static"),g.appendChild(es),_=es[u],g.removeChild(es),o.position="absolute";return l&&f&&(m=vi(g),m.time=en.time,m.width=g[u]),St(d?_*r/h:_&&r?h/_*r:0)},ti=function(e,t,n,i){var r;return xl||_l(),t in Hn&&t!=="transform"&&(t=Hn[t],~t.indexOf(",")&&(t=t.split(",")[0])),ni[t]&&t!=="transform"?(r=Rr(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:pa(mn(e,sn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=fa[t]&&fa[t](e,t,n)||mn(e,t)||nl(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ti(e,t,r,n)+n:r},Cm=function(e,t,n,i){if(!n||n==="none"){var r=Is(t,e,1),a=r&&mn(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=mn(e,"borderTopColor"))}var o=new Jt(this._pt,e.style,t,0,1,ul),l=0,c=0,u,h,d,f,_,g,m,p,x,M,y,A;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=mn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=mn(e,t)||i,g?e.style[t]=g:Ei(e,t)),u=[n,i],sl(u),n=u[0],i=u[1],d=n.match(Zi)||[],A=i.match(Zi)||[],A.length){for(;h=Zi.exec(i);)m=h[0],x=i.substring(l,h.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(f=parseFloat(g)||0,y=g.substr((f+"").length),m.charAt(1)==="="&&(m=$i(f,m)+y),p=parseFloat(m),M=m.substr((p+"").length),l=Zi.lastIndex-M.length,M||(M=M||nn.units[t]||y,l===i.length&&(i+=M,o.e+=M)),y!==M&&(f=Ti(e,t,g,M)||0),o._pt={_next:o._pt,p:x||c===1?x:",",s:f,c:p-f,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Wh:Gh;return jo.test(i)&&(o.e=0),this._pt=o,o},kh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Rm=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=kh[n]||n,t[1]=kh[i]||i,t.join(" ")},Pm=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],ni[o]&&(l=1,o=o==="transformOrigin"?sn:xt),Ei(n,o);l&&(Ei(n,xt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Rr(n,1),a.uncache=1,Xh(i)))}},fa={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new Jt(e._pt,t,n,0,0,Pm);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},Cr=[1,0,0,1,0,0],Jh={},jh=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Vh=function(e){var t=mn(e,xt);return jh(t)?Cr:t.substr(7).match(Jo).map(St)},bl=function(e,t){var n=e._gsap||vi(e),i=e.style,r=Vh(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Cr:r):(r===Cr&&!e.offsetParent&&e!==Rs&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Rs.appendChild(e)),r=Vh(e),l?i.display=l:Ei(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Rs.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},yl=function(e,t,n,i,r,a){var o=e._gsap,l=r||bl(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],x=l[5],M=t.split(" "),y=parseFloat(M[0])||0,A=parseFloat(M[1])||0,T,E,C,v;n?l!==Cr&&(E=f*m-_*g)&&(C=y*(m/E)+A*(-g/E)+(g*x-m*p)/E,v=y*(-_/E)+A*(f/E)-(f*x-_*p)/E,y=C,A=v):(T=Zh(e),y=T.x+(~M[0].indexOf("%")?y/100*T.width:y),A=T.y+(~(M[1]||M[0]).indexOf("%")?A/100*T.height:A)),i||i!==!1&&o.smooth?(p=y-c,x=A-u,o.xOffset=h+(p*f+x*g)-p,o.yOffset=d+(p*_+x*m)-x):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=A,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[sn]="0px 0px",a&&(wi(a,o,"xOrigin",c,y),wi(a,o,"yOrigin",u,A),wi(a,o,"xOffset",h,o.xOffset),wi(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+A)},Rr=function(e,t){var n=e._gsap||new rl(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=mn(e,sn)||"0",u,h,d,f,_,g,m,p,x,M,y,A,T,E,C,v,b,P,B,F,G,I,z,Z,H,te,se,de,ye,Ie,k,j;return u=h=d=g=m=p=x=M=y=0,f=_=1,n.svg=!!(e.getCTM&&$h(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[xt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[xt]!=="none"?l[xt]:"")),i.scale=i.rotate=i.translate="none"),E=bl(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",Z=""):Z=!t&&e.getAttribute("data-svg-origin"),yl(e,Z||c,!!Z||n.originIsAbsolute,n.smooth!==!1,E)),A=n.xOrigin||0,T=n.yOrigin||0,E!==Cr&&(P=E[0],B=E[1],F=E[2],G=E[3],u=I=E[4],h=z=E[5],E.length===6?(f=Math.sqrt(P*P+B*B),_=Math.sqrt(G*G+F*F),g=P||B?Cs(B,P)*Qi:0,x=F||G?Cs(F,G)*Qi+g:0,x&&(_*=Math.abs(Math.cos(x*Ps))),n.svg&&(u-=A-(A*P+T*F),h-=T-(A*B+T*G))):(j=E[6],Ie=E[7],se=E[8],de=E[9],ye=E[10],k=E[11],u=E[12],h=E[13],d=E[14],C=Cs(j,ye),m=C*Qi,C&&(v=Math.cos(-C),b=Math.sin(-C),Z=I*v+se*b,H=z*v+de*b,te=j*v+ye*b,se=I*-b+se*v,de=z*-b+de*v,ye=j*-b+ye*v,k=Ie*-b+k*v,I=Z,z=H,j=te),C=Cs(-F,ye),p=C*Qi,C&&(v=Math.cos(-C),b=Math.sin(-C),Z=P*v-se*b,H=B*v-de*b,te=F*v-ye*b,k=G*b+k*v,P=Z,B=H,F=te),C=Cs(B,P),g=C*Qi,C&&(v=Math.cos(C),b=Math.sin(C),Z=P*v+B*b,H=I*v+z*b,B=B*v-P*b,z=z*v-I*b,P=Z,I=H),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=St(Math.sqrt(P*P+B*B+F*F)),_=St(Math.sqrt(z*z+j*j)),C=Cs(I,z),x=Math.abs(C)>2e-4?C*Qi:0,y=k?1/(k<0?-k:k):0),n.svg&&(Z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!jh(mn(e,xt)),Z&&e.setAttribute("transform",Z))),Math.abs(x)>90&&Math.abs(x)<270&&(r?(f*=-1,x+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=St(f),n.scaleY=St(_),n.rotation=St(g)+o,n.rotationX=St(m)+o,n.rotationY=St(p)+o,n.skewX=x+o,n.skewY=M+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[sn]=pa(c)),n.xOffset=n.yOffset=0,n.force3D=nn.force3D,n.renderTransform=n.svg?Dm:Yh?Kh:Im,n.uncache=0,n},pa=function(e){return(e=e.split(" "))[0]+" "+e[1]},pl=function(e,t,n){var i=Bt(t);return St(parseFloat(t)+parseFloat(Ti(e,"x",n+"px",i)))+i},Im=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Kh(e,t)},ji="0deg",Ar="0px",Ki=") ",Kh=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,x=n.target,M=n.zOrigin,y="",A=p==="auto"&&e&&e!==1||p===!0;if(M&&(h!==ji||u!==ji)){var T=parseFloat(u)*Ps,E=Math.sin(T),C=Math.cos(T),v;T=parseFloat(h)*Ps,v=Math.cos(T),a=pl(x,a,E*v*-M),o=pl(x,o,-Math.sin(T)*-M),l=pl(x,l,C*v*-M+M)}m!==Ar&&(y+="perspective("+m+Ki),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(A||a!==Ar||o!==Ar||l!==Ar)&&(y+=l!==Ar||A?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ki),c!==ji&&(y+="rotate("+c+Ki),u!==ji&&(y+="rotateY("+u+Ki),h!==ji&&(y+="rotateX("+h+Ki),(d!==ji||f!==ji)&&(y+="skew("+d+", "+f+Ki),(_!==1||g!==1)&&(y+="scale("+_+", "+g+Ki),x.style[xt]=y||"translate(0, 0)"},Dm=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,x=n.forceCSS,M=parseFloat(a),y=parseFloat(o),A,T,E,C,v;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ps,c*=Ps,A=Math.cos(l)*h,T=Math.sin(l)*h,E=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(u*=Ps,v=Math.tan(c-u),v=Math.sqrt(1+v*v),E*=v,C*=v,u&&(v=Math.tan(u),v=Math.sqrt(1+v*v),A*=v,T*=v)),A=St(A),T=St(T),E=St(E),C=St(C)):(A=h,C=d,T=E=0),(M&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(M=Ti(f,"x",a,"px"),y=Ti(f,"y",o,"px")),(_||g||m||p)&&(M=St(M+_-(_*A+g*E)+m),y=St(y+g-(_*T+g*C)+p)),(i||r)&&(v=f.getBBox(),M=St(M+i/100*v.width),y=St(y+r/100*v.height)),v="matrix("+A+","+T+","+E+","+C+","+M+","+y+")",f.setAttribute("transform",v),x&&(f.style[xt]=v)},Lm=function(e,t,n,i,r){var a=360,o=Rt(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Qi:1),c=l-i,u=i+c+"deg",h,d;return o&&(h=r.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Nh)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Nh)%a-~~(c/a)*a)),e._pt=d=new Jt(e._pt,t,n,i,c,mm),d.e=u,d.u="deg",e._props.push(n),d},Hh=function(e,t){for(var n in t)e[n]=t[n];return e},Um=function(e,t,n){var i=Hh({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,d,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[xt]=t,o=Rr(n,1),Ei(n,xt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[xt],a[xt]=t,o=Rr(n,1),a[xt]=c);for(l in ni)c=i[l],u=o[l],c!==u&&r.indexOf(l)<0&&(f=Bt(c),_=Bt(u),h=f!==_?Ti(n,l,c,_):parseFloat(c),d=parseFloat(u),e._pt=new Jt(e._pt,o,l,h,d-h,ml),e._pt.u=_||0,e._props.push(l));Hh(o,i)};$t("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});fa[e>1?"border"+s:s]=function(o,l,c,u,h){var d,f;if(arguments.length<4)return d=a.map(function(_){return ti(o,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},a.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,f,h)}});Sl={name:"css",register:_l,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,d,f,_,g,m,p,x,M,y,A,T,E,C,v;xl||_l(),this.styles=this.styles||qh(e),C=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Qt[g]&&ol(g,t,n,i,e,r)))){if(f=typeof u,_=fa[g],f==="function"&&(u=u.call(n,i,e,r),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=As(u)),_)_(this,e,g,u,n)&&(E=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Qn.lastIndex=0,Qn.test(c)||(m=Bt(c),p=Bt(u),p?m!==p&&(c=Ti(e,g,c,p)+p):m&&(u+=m)),this.add(o,"setProperty",c,u,i,r,0,0,g),a.push(g),C.push(g,0,o[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,r):l[g],Rt(c)&&~c.indexOf("random(")&&(c=As(c)),Bt(c+"")||c==="auto"||(c+=nn.units[g]||Bt(ti(e,g))||""),(c+"").charAt(1)==="="&&(c=ti(e,g))):c=ti(e,g),d=parseFloat(c),x=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),h=parseFloat(u),g in Hn&&(g==="autoAlpha"&&(d===1&&ti(e,"visibility")==="hidden"&&h&&(d=0),C.push("visibility",0,o.visibility),wi(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Hn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),M=g in ni,M){if(this.styles.save(g),v=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=mn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var b=e.style.perspective;e.style.perspective=u,u=mn(e,"perspective"),b?e.style.perspective=b:Ei(e,"perspective")}h=parseFloat(u)}if(y||(A=e._gsap,A.renderTransform&&!t.parseTransform||Rr(e,t.parseTransform),T=t.smoothOrigin!==!1&&A.smooth,y=this._pt=new Jt(this._pt,o,xt,0,1,A.renderTransform,A,0,-1),y.dep=1),g==="scale")this._pt=new Jt(this._pt,A,"scaleY",A.scaleY,(x?$i(A.scaleY,x+h):h)-A.scaleY||0,ml),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(sn,0,o[sn]),u=Rm(u),A.svg?yl(e,u,0,T,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==A.zOrigin&&wi(this,A,"zOrigin",A.zOrigin,p),wi(this,o,g,pa(c),pa(u)));continue}else if(g==="svgOrigin"){yl(e,u,1,T,0,this);continue}else if(g in Jh){Lm(this,A,g,d,x?$i(d,x+u):u);continue}else if(g==="smoothOrigin"){wi(this,A,"smooth",A.smooth,u);continue}else if(g==="force3D"){A[g]=u;continue}else if(g==="transform"){Um(this,u,e);continue}}else g in o||(g=Is(g)||g);if(M||(h||h===0)&&(d||d===0)&&!pm.test(u)&&g in o)m=(c+"").substr((d+"").length),h||(h=0),p=Bt(u)||(g in nn.units?nn.units[g]:m),m!==p&&(d=Ti(e,g,c,p)),this._pt=new Jt(this._pt,M?A:o,g,d,(x?$i(d,x+h):h)-d,!M&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?ym:ml),this._pt.u=p||0,M&&v!==u?(this._pt.b=c,this._pt.e=v,this._pt.r=_m):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=gm);else if(g in o)Cm.call(this,e,g,c,x?x+u:u);else if(g in e)this.add(e,g,c||e[g],x?x+u:u,i,r);else if(g!=="parseTransform"){la(g,u);continue}M||(g in o?C.push(g,0,o[g]):typeof e[g]=="function"?C.push(g,2,e[g]()):C.push(g,1,c||e[g])),a.push(g)}}E&&dl(this)},render:function(e,t){if(t.tween._time||!vl())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ti,aliases:Hn,getSetter:function(e,t,n){var i=Hn[t];return i&&i.indexOf(",")<0&&(t=i),t in ni&&t!==sn&&(e._gsap.x||ti(e,"x"))?n&&Uh===n?t==="scale"?bm:Mm:(Uh=n||{})&&(t==="scale"?Sm:wm):e.style&&!oa(e.style[t])?xm:~t.indexOf("-")?vm:da(e,t)},core:{_removeProperty:Ei,_getMatrix:bl}};Ht.utils.checkPrefix=Is;Ht.core.getStyleSaver=qh;(function(s,e,t,n){var i=$t(s+","+e+","+t,function(r){ni[r]=1});$t(e,function(r){nn.units[r]="deg",Jh[r]=1}),Hn[i[13]]=s+","+e,$t(n,function(r){var a=r.split(":");Hn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");$t("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){nn.units[s]="px"});Ht.registerPlugin(Sl)});var Pt,nM,wl=_i(()=>{fl();Qh();Pt=Ht.registerPlugin(Sl)||Ht,nM=Pt.core.Tween});function qr(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[s&255]+Gt[s>>8&255]+Gt[s>>16&255]+Gt[s>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function an(s,e,t){return Math.max(e,Math.min(t,s))}function vg(s,e){return(s%e+e)%e}function Al(s,e,t){return(1-t)*s+t*e}function Pr(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function rn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}function Sf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ja(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Mg(){let s=Ja("canvas");return s.style.display="block",s}function Fr(s){s in ud||(ud[s]=!0,console.warn(s))}function bg(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Sg(s){let e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function wg(s){let e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}function di(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}function Rl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Xc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Il(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ns.fromArray(s,r);let o=i.x*Math.abs(ns.x)+i.y*Math.abs(ns.y)+i.z*Math.abs(ns.z),l=e.dot(ns),c=t.dot(ns),u=n.dot(ns);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}function Wl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function Og(s,e,t,n,i,r,a,o){let l;if(e.side===qt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Fi,o),l===null)return null;Pa.copy(o),Pa.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Pa);return c<t.near||c>t.far?null:{distance:c,point:Pa.clone(),object:s}}function Ia(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Ta),s.getVertexPosition(l,Aa),s.getVertexPosition(c,Ca);let u=Og(s,e,t,n,Ta,Aa,Ca,Ad);if(u){let h=new L;Ui.getBarycoord(Ad,Ta,Aa,Ca,h),i&&(u.uv=Ui.getInterpolatedAttribute(i,o,l,c,h,new He)),r&&(u.uv1=Ui.getInterpolatedAttribute(r,o,l,c,h,new He)),a&&(u.normal=Ui.getInterpolatedAttribute(a,o,l,c,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new L,materialIndex:0};Ui.getNormal(Ta,Aa,Ca,d.normal),u.face=d,u.barycoord=h}return u}function sr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function jt(s){let e={};for(let t=0;t<s.length;t++){let n=sr(s[t]);for(let i in n)e[i]=n[i]}return e}function Fg(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ef(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}function Tf(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Gg(s){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(s.bindBuffer(c,o),h.length===0)s.bufferSubData(c,0,u);else{h.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<h.length;f++){let _=h[d],g=h[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,h[d]=g)}h.length=d+1;for(let f=0,_=h.length;f<_;f++){let g=h[f];s.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}function wy(s,e,t,n,i,r,a){let o=new ze(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function _(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?t:e).get(M)),M}function g(x){let M=!1,y=_(x);y===null?p(o,l):y&&y.isColor&&(p(y,1),M=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,M){let y=_(M);y&&(y.isCubeTexture||y.mapping===xo)?(u===void 0&&(u=new lt(new qn(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:sr(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),rs.copy(M.backgroundRotation),rs.x*=-1,rs.y*=-1,rs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Sy.makeRotationFromEuler(rs)),u.material.toneMapped=Ze.getTransfer(y.colorSpace)!==it,(h!==y||d!==y.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,f=s.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new lt(new rr(2,2),new Yn({name:"BackgroundMaterial",uniforms:sr(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(y.colorSpace)!==it,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,f=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,M){x.getRGB(La,Ef(s)),n.buffers.color.setClear(La.r,La.g,La.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(x,M=1){o.set(x),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:g,addToRenderList:m}}function Ey(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(b,P,B,F,G){let I=!1,z=h(F,B,P);r!==z&&(r=z,c(r.object)),I=f(b,F,B,G),I&&_(b,F,B,G),G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),(I||a)&&(a=!1,y(b,P,B,F),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return s.createVertexArray()}function c(b){return s.bindVertexArray(b)}function u(b){return s.deleteVertexArray(b)}function h(b,P,B){let F=B.wireframe===!0,G=n[b.id];G===void 0&&(G={},n[b.id]=G);let I=G[P.id];I===void 0&&(I={},G[P.id]=I);let z=I[F];return z===void 0&&(z=d(l()),I[F]=z),z}function d(b){let P=[],B=[],F=[];for(let G=0;G<t;G++)P[G]=0,B[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:F,object:b,attributes:{},index:null}}function f(b,P,B,F){let G=r.attributes,I=P.attributes,z=0,Z=B.getAttributes();for(let H in Z)if(Z[H].location>=0){let se=G[H],de=I[H];if(de===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(de=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(de=b.instanceColor)),se===void 0||se.attribute!==de||de&&se.data!==de.data)return!0;z++}return r.attributesNum!==z||r.index!==F}function _(b,P,B,F){let G={},I=P.attributes,z=0,Z=B.getAttributes();for(let H in Z)if(Z[H].location>=0){let se=I[H];se===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(se=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(se=b.instanceColor));let de={};de.attribute=se,se&&se.data&&(de.data=se.data),G[H]=de,z++}r.attributes=G,r.attributesNum=z,r.index=F}function g(){let b=r.newAttributes;for(let P=0,B=b.length;P<B;P++)b[P]=0}function m(b){p(b,0)}function p(b,P){let B=r.newAttributes,F=r.enabledAttributes,G=r.attributeDivisors;B[b]=1,F[b]===0&&(s.enableVertexAttribArray(b),F[b]=1),G[b]!==P&&(s.vertexAttribDivisor(b,P),G[b]=P)}function x(){let b=r.newAttributes,P=r.enabledAttributes;for(let B=0,F=P.length;B<F;B++)P[B]!==b[B]&&(s.disableVertexAttribArray(B),P[B]=0)}function M(b,P,B,F,G,I,z){z===!0?s.vertexAttribIPointer(b,P,B,G,I):s.vertexAttribPointer(b,P,B,F,G,I)}function y(b,P,B,F){g();let G=F.attributes,I=B.getAttributes(),z=P.defaultAttributeValues;for(let Z in I){let H=I[Z];if(H.location>=0){let te=G[Z];if(te===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(te=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(te=b.instanceColor)),te!==void 0){let se=te.normalized,de=te.itemSize,ye=e.get(te);if(ye===void 0)continue;let Ie=ye.buffer,k=ye.type,j=ye.bytesPerElement,fe=k===s.INT||k===s.UNSIGNED_INT||te.gpuType===Su;if(te.isInterleavedBufferAttribute){let ae=te.data,Ce=ae.stride,De=te.offset;if(ae.isInstancedInterleavedBuffer){for(let Be=0;Be<H.locationSize;Be++)p(H.location+Be,ae.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Be=0;Be<H.locationSize;Be++)m(H.location+Be);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let Be=0;Be<H.locationSize;Be++)M(H.location+Be,de/H.locationSize,k,se,Ce*j,(De+de/H.locationSize*Be)*j,fe)}else{if(te.isInstancedBufferAttribute){for(let ae=0;ae<H.locationSize;ae++)p(H.location+ae,te.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ae=0;ae<H.locationSize;ae++)m(H.location+ae);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let ae=0;ae<H.locationSize;ae++)M(H.location+ae,de/H.locationSize,k,se,de*j,de/H.locationSize*ae*j,fe)}}else if(z!==void 0){let se=z[Z];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(H.location,se);break;case 3:s.vertexAttrib3fv(H.location,se);break;case 4:s.vertexAttrib4fv(H.location,se);break;default:s.vertexAttrib1fv(H.location,se)}}}}x()}function A(){C();for(let b in n){let P=n[b];for(let B in P){let F=P[B];for(let G in F)u(F[G].object),delete F[G];delete P[B]}delete n[b]}}function T(b){if(n[b.id]===void 0)return;let P=n[b.id];for(let B in P){let F=P[B];for(let G in F)u(F[G].object),delete F[G];delete P[B]}delete n[b.id]}function E(b){for(let P in n){let B=n[P];if(B[b.id]===void 0)continue;let F=B[b.id];for(let G in F)u(F[G].object),delete F[G];delete B[b.id]}}function C(){v(),a=!0,r!==i&&(r=i,c(r.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:v,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function Ty(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)a(c[_],u[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*d[g];t.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ay(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==Un&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let C=E===Xr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==fi&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==ci&&!C)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:A,maxSamples:T}}function Cy(s){let e=this,t=null,n=0,i=!1,r=!1,a=new Dn,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||_===null||_.length===0||r&&!m)r?u(null):c();else{let x=r?0:n,M=x*4,y=p.clippingState||null;l.value=y,y=u(_,d,M,f);for(let A=0;A!==M;++A)y[A]=t[A];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,_){let g=h!==null?h.length:0,m=null;if(g!==0){if(m=l.value,_!==!0||m===null){let p=f+g*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,y=f;M!==g;++M,y+=4)a.copy(h[M]).applyMatrix4(x,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Ry(s){let e=new WeakMap;function t(a,o){return o===fc?a.mapping=Ks:o===pc&&(a.mapping=Qs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===fc||o===pc)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new $c(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function Py(s){let e=[],t=[],n=[],i=s,r=s-qs+1+Pd.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>s-qs?l=Pd[a-s+qs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,g=3,m=2,p=1,x=new Float32Array(g*_*f),M=new Float32Array(m*_*f),y=new Float32Array(p*_*f);for(let T=0;T<f;T++){let E=T%3*2/3-1,C=T>2?0:-1,v=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];x.set(v,g*_*T),M.set(d,m*_*T);let b=[T,T,T,T,T,T];y.set(b,p*_*T)}let A=new yn;A.setAttribute("position",new on(x,g)),A.setAttribute("uv",new on(M,m)),A.setAttribute("faceIndex",new on(y,p)),e.push(A),i>qs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ld(s,e,t){let n=new pi(s,e,t);return n.texture.mapping=xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ua(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Iy(s,e,t){let n=new Float32Array(cs),i=new L(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Ud(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Nd(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Ru(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Dy(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===fc||l===pc,u=l===Ks||l===Qs;if(c||u){let h=e.get(o),d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new ar(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let f=o.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new ar(s)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function i(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Ly(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Fr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Uy(s,e,t,n){let i={},r=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let _ in d.attributes)e.remove(d.attributes[_]);for(let _ in d.morphAttributes){let g=d.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}d.removeEventListener("dispose",a),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let _ in d)e.update(d[_],s.ARRAY_BUFFER);let f=h.morphAttributes;for(let _ in f){let g=f[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],s.ARRAY_BUFFER)}}function c(h){let d=[],f=h.index,_=h.attributes.position,g=0;if(f!==null){let x=f.array;g=f.version;for(let M=0,y=x.length;M<y;M+=3){let A=x[M+0],T=x[M+1],E=x[M+2];d.push(A,T,T,E,E,A)}}else if(_!==void 0){let x=_.array;g=_.version;for(let M=0,y=x.length/3-1;M<y;M+=3){let A=M+0,T=M+1,E=M+2;d.push(A,T,T,E,E,A)}}else return;let m=new(Sf(d)?no:to)(d,1);m.version=g;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Ny(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,_){_!==0&&(s.drawElementsInstanced(n,f,r,d*a,_),t.update(f,n,_))}function u(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];t.update(m,n,1)}function h(d,f,_,g){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,_);let p=0;for(let x=0;x<_;x++)p+=f[x]*g[x];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Oy(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Fy(s,e,t){let n=new WeakMap,i=new st;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let v=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],M=0;f===!0&&(M=1),_===!0&&(M=2),g===!0&&(M=3);let y=o.attributes.position.count*M,A=1;y>e.maxTextureSize&&(A=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*A*4*h),E=new Ka(T,y,A,h);E.type=ci,E.needsUpdate=!0;let C=M*4;for(let b=0;b<h;b++){let P=m[b],B=p[b],F=x[b],G=y*A*4*b;for(let I=0;I<P.count;I++){let z=I*C;f===!0&&(i.fromBufferAttribute(P,I),T[G+z+0]=i.x,T[G+z+1]=i.y,T[G+z+2]=i.z,T[G+z+3]=0),_===!0&&(i.fromBufferAttribute(B,I),T[G+z+4]=i.x,T[G+z+5]=i.y,T[G+z+6]=i.z,T[G+z+7]=0),g===!0&&(i.fromBufferAttribute(F,I),T[G+z+8]=i.x,T[G+z+9]=i.y,T[G+z+10]=i.z,T[G+z+11]=F.itemSize===4?i.w:1)}}d={count:h,texture:E,size:new He(y,A)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];let _=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function By(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}function ur(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Fd[i];if(r===void 0&&(r=new Float32Array(i),Fd[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function It(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Dt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Mo(s,e){let t=Bd[e];t===void 0&&(t=new Int32Array(e),Bd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function zy(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function ky(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2fv(this.addr,e),Dt(t,e)}}function Vy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;s.uniform3fv(this.addr,e),Dt(t,e)}}function Hy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4fv(this.addr,e),Dt(t,e)}}function Gy(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;Vd.set(n),s.uniformMatrix2fv(this.addr,!1,Vd),Dt(t,n)}}function Wy(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;kd.set(n),s.uniformMatrix3fv(this.addr,!1,kd),Dt(t,n)}}function Xy(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;zd.set(n),s.uniformMatrix4fv(this.addr,!1,zd),Dt(t,n)}}function qy(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Yy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2iv(this.addr,e),Dt(t,e)}}function Zy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;s.uniform3iv(this.addr,e),Dt(t,e)}}function $y(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4iv(this.addr,e),Dt(t,e)}}function Jy(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function jy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2uiv(this.addr,e),Dt(t,e)}}function Ky(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;s.uniform3uiv(this.addr,e),Dt(t,e)}}function Qy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4uiv(this.addr,e),Dt(t,e)}}function ex(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Od.compareFunction=bf,r=Od):r=Af,t.setTexture2D(e||r,i)}function tx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Rf,i)}function nx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Pf,i)}function ix(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Cf,i)}function sx(s){switch(s){case 5126:return zy;case 35664:return ky;case 35665:return Vy;case 35666:return Hy;case 35674:return Gy;case 35675:return Wy;case 35676:return Xy;case 5124:case 35670:return qy;case 35667:case 35671:return Yy;case 35668:case 35672:return Zy;case 35669:case 35673:return $y;case 5125:return Jy;case 36294:return jy;case 36295:return Ky;case 36296:return Qy;case 35678:case 36198:case 36298:case 36306:case 35682:return ex;case 35679:case 36299:case 36307:return tx;case 35680:case 36300:case 36308:case 36293:return nx;case 36289:case 36303:case 36311:case 36292:return ix}}function rx(s,e){s.uniform1fv(this.addr,e)}function ax(s,e){let t=ur(e,this.size,2);s.uniform2fv(this.addr,t)}function ox(s,e){let t=ur(e,this.size,3);s.uniform3fv(this.addr,t)}function lx(s,e){let t=ur(e,this.size,4);s.uniform4fv(this.addr,t)}function cx(s,e){let t=ur(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function ux(s,e){let t=ur(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function hx(s,e){let t=ur(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function dx(s,e){s.uniform1iv(this.addr,e)}function fx(s,e){s.uniform2iv(this.addr,e)}function px(s,e){s.uniform3iv(this.addr,e)}function mx(s,e){s.uniform4iv(this.addr,e)}function gx(s,e){s.uniform1uiv(this.addr,e)}function _x(s,e){s.uniform2uiv(this.addr,e)}function yx(s,e){s.uniform3uiv(this.addr,e)}function xx(s,e){s.uniform4uiv(this.addr,e)}function vx(s,e,t){let n=this.cache,i=e.length,r=Mo(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Af,r[a])}function Mx(s,e,t){let n=this.cache,i=e.length,r=Mo(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Rf,r[a])}function bx(s,e,t){let n=this.cache,i=e.length,r=Mo(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Pf,r[a])}function Sx(s,e,t){let n=this.cache,i=e.length,r=Mo(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Cf,r[a])}function wx(s){switch(s){case 5126:return rx;case 35664:return ax;case 35665:return ox;case 35666:return lx;case 35674:return cx;case 35675:return ux;case 35676:return hx;case 5124:case 35670:return dx;case 35667:case 35671:return fx;case 35668:case 35672:return px;case 35669:case 35673:return mx;case 5125:return gx;case 36294:return _x;case 36295:return yx;case 36296:return xx;case 35678:case 36198:case 36298:case 36306:case 35682:return vx;case 35679:case 36299:case 36307:return Mx;case 35680:case 36300:case 36308:case 36293:return bx;case 36289:case 36303:case 36311:case 36292:return Sx}}function Hd(s,e){s.seq.push(e),s.map[e.id]=e}function Ex(s,e,t){let n=s.name,i=n.length;for(Ql.lastIndex=0;;){let r=Ql.exec(n),a=Ql.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Hd(t,c===void 0?new Jc(o,s,e):new jc(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new Kc(o),Hd(t,h)),t=h}}}function Gd(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}function Cx(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Rx(s){Ze._getMatrix(Wd,Ze.workingColorSpace,s);let e=`mat3( ${Wd.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(s)){case vo:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Xd(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Cx(s.getShaderSource(e),a)}else return i}function Px(s,e){let t=Rx(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ix(s,e){let t;switch(e){case ig:t="Linear";break;case sg:t="Reinhard";break;case rg:t="Cineon";break;case ag:t="ACESFilmic";break;case lg:t="AgX";break;case bu:t="Neutral";break;case og:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Dx(){Ze.getLuminanceCoefficients(Na);let s=Na.x.toFixed(4),e=Na.y.toFixed(4),t=Na.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Br).join(`
`)}function Ux(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Nx(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Br(s){return s!==""}function qd(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Qc(s){return s.replace(Ox,Bx)}function Bx(s,e){let t=Fe[e];if(t===void 0){let n=Fx.get(e);if(n!==void 0)t=Fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Qc(t)}function Zd(s){return s.replace(zx,kx)}function kx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function $d(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vx(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===lf?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Mu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function Hx(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ks:case Qs:e="ENVMAP_TYPE_CUBE";break;case xo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gx(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Qs&&(e="ENVMAP_MODE_REFRACTION"),e}function Wx(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case cf:e="ENVMAP_BLENDING_MULTIPLY";break;case tg:e="ENVMAP_BLENDING_MIX";break;case ng:e="ENVMAP_BLENDING_ADD";break}return e}function Xx(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function qx(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Vx(t),c=Hx(t),u=Gx(t),h=Wx(t),d=Xx(t),f=Lx(t),_=Ux(r),g=i.createProgram(),m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Br).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Br).join(`
`),p.length>0&&(p+=`
`)):(m=[$d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),p=[$d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Oi?"#define TONE_MAPPING":"",t.toneMapping!==Oi?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Oi?Ix("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,Px("linearToOutputTexel",t.outputColorSpace),Dx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Br).join(`
`)),a=Qc(a),a=qd(a,t),a=Yd(a,t),o=Qc(o),o=qd(o,t),o=Yd(o,t),a=Zd(a),o=Zd(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===cd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=x+m+a,y=x+p+o,A=Gd(i,i.VERTEX_SHADER,M),T=Gd(i,i.FRAGMENT_SHADER,y);i.attachShader(g,A),i.attachShader(g,T),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(P){if(s.debug.checkShaderErrors){let B=i.getProgramInfoLog(g).trim(),F=i.getShaderInfoLog(A).trim(),G=i.getShaderInfoLog(T).trim(),I=!0,z=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(I=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,A,T);else{let Z=Xd(i,A,"vertex"),H=Xd(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+Z+`
`+H)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||G==="")&&(z=!1);z&&(P.diagnostics={runnable:I,programLog:B,vertexShader:{log:F,prefix:m},fragmentShader:{log:G,prefix:p}})}i.deleteShader(A),i.deleteShader(T),C=new Js(i,g),v=Nx(i,g)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let v;this.getAttributes=function(){return v===void 0&&E(this),v};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(g,Tx)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ax++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=T,this}function Zx(s,e,t,n,i,r,a){let o=new eo,l=new eu,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,b,P,B,F){let G=B.fog,I=F.geometry,z=v.isMeshStandardMaterial?B.environment:null,Z=(v.isMeshStandardMaterial?t:e).get(v.envMap||z),H=Z&&Z.mapping===xo?Z.image.height:null,te=_[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let se=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,de=se!==void 0?se.length:0,ye=0;I.morphAttributes.position!==void 0&&(ye=1),I.morphAttributes.normal!==void 0&&(ye=2),I.morphAttributes.color!==void 0&&(ye=3);let Ie,k,j,fe;if(te){let Qe=Gn[te];Ie=Qe.vertexShader,k=Qe.fragmentShader}else Ie=v.vertexShader,k=v.fragmentShader,l.update(v),j=l.getVertexShaderID(v),fe=l.getFragmentShaderID(v);let ae=s.getRenderTarget(),Ce=s.state.buffers.depth.getReversed(),De=F.isInstancedMesh===!0,Be=F.isBatchedMesh===!0,gt=!!v.map,qe=!!v.matcap,wt=!!Z,O=!!v.aoMap,xn=!!v.lightMap,Ge=!!v.bumpMap,We=!!v.normalMap,Te=!!v.displacementMap,ht=!!v.emissiveMap,Ee=!!v.metalnessMap,R=!!v.roughnessMap,S=v.anisotropy>0,V=v.clearcoat>0,K=v.dispersion>0,ee=v.iridescence>0,J=v.sheen>0,be=v.transmission>0,le=S&&!!v.anisotropyMap,pe=V&&!!v.clearcoatMap,Ye=V&&!!v.clearcoatNormalMap,ne=V&&!!v.clearcoatRoughnessMap,me=ee&&!!v.iridescenceMap,Ae=ee&&!!v.iridescenceThicknessMap,Re=J&&!!v.sheenColorMap,ge=J&&!!v.sheenRoughnessMap,Xe=!!v.specularMap,Oe=!!v.specularColorMap,ct=!!v.specularIntensityMap,D=be&&!!v.transmissionMap,oe=be&&!!v.thicknessMap,Y=!!v.gradientMap,Q=!!v.alphaMap,he=v.alphaTest>0,ce=!!v.alphaHash,Le=!!v.extensions,Mt=Oi;v.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Mt=s.toneMapping);let zt={shaderID:te,shaderType:v.type,shaderName:v.name,vertexShader:Ie,fragmentShader:k,defines:v.defines,customVertexShaderID:j,customFragmentShaderID:fe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Be,batchingColor:Be&&F._colorsTexture!==null,instancing:De,instancingColor:De&&F.instanceColor!==null,instancingMorph:De&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ae===null?s.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:cr,alphaToCoverage:!!v.alphaToCoverage,map:gt,matcap:qe,envMap:wt,envMapMode:wt&&Z.mapping,envMapCubeUVHeight:H,aoMap:O,lightMap:xn,bumpMap:Ge,normalMap:We,displacementMap:d&&Te,emissiveMap:ht,normalMapObjectSpace:We&&v.normalMapType===dg,normalMapTangentSpace:We&&v.normalMapType===Mf,metalnessMap:Ee,roughnessMap:R,anisotropy:S,anisotropyMap:le,clearcoat:V,clearcoatMap:pe,clearcoatNormalMap:Ye,clearcoatRoughnessMap:ne,dispersion:K,iridescence:ee,iridescenceMap:me,iridescenceThicknessMap:Ae,sheen:J,sheenColorMap:Re,sheenRoughnessMap:ge,specularMap:Xe,specularColorMap:Oe,specularIntensityMap:ct,transmission:be,transmissionMap:D,thicknessMap:oe,gradientMap:Y,opaque:v.transparent===!1&&v.blending===Ys&&v.alphaToCoverage===!1,alphaMap:Q,alphaTest:he,alphaHash:ce,combine:v.combine,mapUv:gt&&g(v.map.channel),aoMapUv:O&&g(v.aoMap.channel),lightMapUv:xn&&g(v.lightMap.channel),bumpMapUv:Ge&&g(v.bumpMap.channel),normalMapUv:We&&g(v.normalMap.channel),displacementMapUv:Te&&g(v.displacementMap.channel),emissiveMapUv:ht&&g(v.emissiveMap.channel),metalnessMapUv:Ee&&g(v.metalnessMap.channel),roughnessMapUv:R&&g(v.roughnessMap.channel),anisotropyMapUv:le&&g(v.anisotropyMap.channel),clearcoatMapUv:pe&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:ge&&g(v.sheenRoughnessMap.channel),specularMapUv:Xe&&g(v.specularMap.channel),specularColorMapUv:Oe&&g(v.specularColorMap.channel),specularIntensityMapUv:ct&&g(v.specularIntensityMap.channel),transmissionMapUv:D&&g(v.transmissionMap.channel),thicknessMapUv:oe&&g(v.thicknessMap.channel),alphaMapUv:Q&&g(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(We||S),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!I.attributes.uv&&(gt||Q),fog:!!G,useFog:v.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ce,skinning:F.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:ye,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Mt,decodeVideoTexture:gt&&v.map.isVideoTexture===!0&&Ze.getTransfer(v.map.colorSpace)===it,decodeVideoTextureEmissive:ht&&v.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(v.emissiveMap.colorSpace)===it,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ln,flipSided:v.side===qt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Le&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&v.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return zt.vertexUv1s=c.has(1),zt.vertexUv2s=c.has(2),zt.vertexUv3s=c.has(3),c.clear(),zt}function p(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let P in v.defines)b.push(P),b.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(x(b,v),M(b,v),b.push(s.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function x(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function M(v,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),v.push(o.mask)}function y(v){let b=_[v.type],P;if(b){let B=Gn[b];P=Bg.clone(B.uniforms)}else P=v.uniforms;return P}function A(v,b){let P;for(let B=0,F=u.length;B<F;B++){let G=u[B];if(G.cacheKey===b){P=G,++P.usedTimes;break}}return P===void 0&&(P=new qx(s,b,v,r),u.push(P)),P}function T(v){if(--v.usedTimes===0){let b=u.indexOf(v);u[b]=u[u.length-1],u.pop(),v.destroy()}}function E(v){l.remove(v)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:A,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:C}}function $x(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Jx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Jd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function jd(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,f,_,g,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function o(h,d,f,_,g,m){let p=a(h,d,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,d,f,_,g,m){let p=a(h,d,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||Jx),n.length>1&&n.sort(d||Jd),i.length>1&&i.sort(d||Jd)}function u(){for(let h=e,d=s.length;h<d;h++){let f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function jx(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new jd,s.set(n,[a])):i>=r.length?(a=new jd,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Kx(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ze};break;case"SpotLight":t={position:new L,direction:new L,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function Qx(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}function tv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function nv(s){let e=new Kx,t=Qx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let i=new L,r=new vt,a=new vt;function o(c){let u=0,h=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,x=0,M=0,y=0,A=0,T=0,E=0;c.sort(tv);for(let v=0,b=c.length;v<b;v++){let P=c[v],B=P.color,F=P.intensity,G=P.distance,I=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=B.r*F,h+=B.g*F,d+=B.b*F;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],F);E++}else if(P.isDirectionalLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Z=P.shadow,H=t.get(P);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=I,n.directionalShadowMatrix[f]=P.shadow.matrix,x++}n.directional[f]=z,f++}else if(P.isSpotLight){let z=e.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(B).multiplyScalar(F),z.distance=G,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[g]=z;let Z=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,Z.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[g]=Z.matrix,P.castShadow){let H=t.get(P);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=I,y++}g++}else if(P.isRectAreaLight){let z=e.get(P);z.color.copy(B).multiplyScalar(F),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=z,m++}else if(P.isPointLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){let Z=P.shadow,H=t.get(P);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=I,n.pointShadowMatrix[_]=P.shadow.matrix,M++}n.point[_]=z,_++}else if(P.isHemisphereLight){let z=e.get(P);z.skyColor.copy(P.color).multiplyScalar(F),z.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[p]=z,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==f||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==x||C.numPointShadows!==M||C.numSpotShadows!==y||C.numSpotMaps!==A||C.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,C.directionalLength=f,C.pointLength=_,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=x,C.numPointShadows=M,C.numSpotShadows=y,C.numSpotMaps=A,C.numLightProbes=E,n.version=ev++)}function l(c,u){let h=0,d=0,f=0,_=0,g=0,m=u.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){let M=c[p];if(M.isDirectionalLight){let y=n.directional[h];y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),h++}else if(M.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(M.isRectAreaLight){let y=n.rectArea[_];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let y=n.hemi[g];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function Kd(s){let e=new nv(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function iv(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new Kd(s),e.set(i,[o])):r>=a.length?(o=new Kd(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function av(s,e,t){let n=new Vr,i=new He,r=new He,a=new st,o=new nu({depthPacking:hg}),l=new iu,c={},u=t.maxTextureSize,h={[Fi]:qt,[qt]:Fi,[Ln]:Ln},d=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:sv,fragmentShader:rv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let _=new yn;_.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new lt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lf;let p=this.type;this.render=function(T,E,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let v=s.getRenderTarget(),b=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),B=s.state;B.setBlending(Ni),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let F=p!==li&&this.type===li,G=p===li&&this.type!==li;for(let I=0,z=T.length;I<z;I++){let Z=T[I],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let te=H.getFrameExtents();if(i.multiply(te),r.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/te.x),i.x=r.x*te.x,H.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/te.y),i.y=r.y*te.y,H.mapSize.y=r.y)),H.map===null||F===!0||G===!0){let de=this.type!==li?{minFilter:Nn,magFilter:Nn}:{};H.map!==null&&H.map.dispose(),H.map=new pi(i.x,i.y,de),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();let se=H.getViewportCount();for(let de=0;de<se;de++){let ye=H.getViewport(de);a.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),B.viewport(a),H.updateMatrices(Z,de),n=H.getFrustum(),y(E,C,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===li&&x(H,C),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(v,b,P)};function x(T,E){let C=e.update(g);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new pi(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(E,null,C,d,g,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(E,null,C,f,g,null)}function M(T,E,C,v){let b=null,P=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)b=P;else if(b=C.isPointLight===!0?l:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let B=b.uuid,F=E.uuid,G=c[B];G===void 0&&(G={},c[B]=G);let I=G[F];I===void 0&&(I=b.clone(),G[F]=I,E.addEventListener("dispose",A)),b=I}if(b.visible=E.visible,b.wireframe=E.wireframe,v===li?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:h[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let B=s.properties.get(b);B.light=C}return b}function y(T,E,C,v,b){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===li)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);let F=e.update(T),G=T.material;if(Array.isArray(G)){let I=F.groups;for(let z=0,Z=I.length;z<Z;z++){let H=I[z],te=G[H.materialIndex];if(te&&te.visible){let se=M(T,te,v,b);T.onBeforeShadow(s,T,E,C,F,se,H),s.renderBufferDirect(C,null,F,se,T,H),T.onAfterShadow(s,T,E,C,F,se,H)}}}else if(G.visible){let I=M(T,G,v,b);T.onBeforeShadow(s,T,E,C,F,I,null),s.renderBufferDirect(C,null,F,I,T,null),T.onAfterShadow(s,T,E,C,F,I,null)}}let B=T.children;for(let F=0,G=B.length;F<G;F++)y(B[F],E,C,v,b)}function A(T){T.target.removeEventListener("dispose",A);for(let C in c){let v=c[C],b=T.target.uuid;b in v&&(v[b].dispose(),delete v[b])}}}function lv(s,e){function t(){let D=!1,oe=new st,Y=null,Q=new st(0,0,0,0);return{setMask:function(he){Y!==he&&!D&&(s.colorMask(he,he,he,he),Y=he)},setLocked:function(he){D=he},setClear:function(he,ce,Le,Mt,zt){zt===!0&&(he*=Mt,ce*=Mt,Le*=Mt),oe.set(he,ce,Le,Mt),Q.equals(oe)===!1&&(s.clearColor(he,ce,Le,Mt),Q.copy(oe))},reset:function(){D=!1,Y=null,Q.set(-1,0,0,0)}}}function n(){let D=!1,oe=!1,Y=null,Q=null,he=null;return{setReversed:function(ce){if(oe!==ce){let Le=e.get("EXT_clip_control");oe?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT);let Mt=he;he=null,this.setClear(Mt)}oe=ce},getReversed:function(){return oe},setTest:function(ce){ce?ae(s.DEPTH_TEST):Ce(s.DEPTH_TEST)},setMask:function(ce){Y!==ce&&!D&&(s.depthMask(ce),Y=ce)},setFunc:function(ce){if(oe&&(ce=ov[ce]),Q!==ce){switch(ce){case ac:s.depthFunc(s.NEVER);break;case oc:s.depthFunc(s.ALWAYS);break;case lc:s.depthFunc(s.LESS);break;case js:s.depthFunc(s.LEQUAL);break;case cc:s.depthFunc(s.EQUAL);break;case uc:s.depthFunc(s.GEQUAL);break;case hc:s.depthFunc(s.GREATER);break;case dc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Q=ce}},setLocked:function(ce){D=ce},setClear:function(ce){he!==ce&&(oe&&(ce=1-ce),s.clearDepth(ce),he=ce)},reset:function(){D=!1,Y=null,Q=null,he=null,oe=!1}}}function i(){let D=!1,oe=null,Y=null,Q=null,he=null,ce=null,Le=null,Mt=null,zt=null;return{setTest:function(Qe){D||(Qe?ae(s.STENCIL_TEST):Ce(s.STENCIL_TEST))},setMask:function(Qe){oe!==Qe&&!D&&(s.stencilMask(Qe),oe=Qe)},setFunc:function(Qe,An,Jn){(Y!==Qe||Q!==An||he!==Jn)&&(s.stencilFunc(Qe,An,Jn),Y=Qe,Q=An,he=Jn)},setOp:function(Qe,An,Jn){(ce!==Qe||Le!==An||Mt!==Jn)&&(s.stencilOp(Qe,An,Jn),ce=Qe,Le=An,Mt=Jn)},setLocked:function(Qe){D=Qe},setClear:function(Qe){zt!==Qe&&(s.clearStencil(Qe),zt=Qe)},reset:function(){D=!1,oe=null,Y=null,Q=null,he=null,ce=null,Le=null,Mt=null,zt=null}}}let r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,x=null,M=null,y=null,A=null,T=null,E=new ze(0,0,0),C=0,v=!1,b=null,P=null,B=null,F=null,G=null,I=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,Z=0,H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),z=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),z=Z>=2);let te=null,se={},de=s.getParameter(s.SCISSOR_BOX),ye=s.getParameter(s.VIEWPORT),Ie=new st().fromArray(de),k=new st().fromArray(ye);function j(D,oe,Y,Q){let he=new Uint8Array(4),ce=s.createTexture();s.bindTexture(D,ce),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Le=0;Le<Y;Le++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(oe,0,s.RGBA,1,1,Q,0,s.RGBA,s.UNSIGNED_BYTE,he):s.texImage2D(oe+Le,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,he);return ce}let fe={};fe[s.TEXTURE_2D]=j(s.TEXTURE_2D,s.TEXTURE_2D,1),fe[s.TEXTURE_CUBE_MAP]=j(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[s.TEXTURE_2D_ARRAY]=j(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),fe[s.TEXTURE_3D]=j(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(s.DEPTH_TEST),a.setFunc(js),Ge(!1),We(ed),ae(s.CULL_FACE),O(Ni);function ae(D){u[D]!==!0&&(s.enable(D),u[D]=!0)}function Ce(D){u[D]!==!1&&(s.disable(D),u[D]=!1)}function De(D,oe){return h[D]!==oe?(s.bindFramebuffer(D,oe),h[D]=oe,D===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=oe),D===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=oe),!0):!1}function Be(D,oe){let Y=f,Q=!1;if(D){Y=d.get(oe),Y===void 0&&(Y=[],d.set(oe,Y));let he=D.textures;if(Y.length!==he.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let ce=0,Le=he.length;ce<Le;ce++)Y[ce]=s.COLOR_ATTACHMENT0+ce;Y.length=he.length,Q=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,Q=!0);Q&&s.drawBuffers(Y)}function gt(D){return _!==D?(s.useProgram(D),_=D,!0):!1}let qe={[ls]:s.FUNC_ADD,[Bm]:s.FUNC_SUBTRACT,[zm]:s.FUNC_REVERSE_SUBTRACT};qe[km]=s.MIN,qe[Vm]=s.MAX;let wt={[Hm]:s.ZERO,[Gm]:s.ONE,[Wm]:s.SRC_COLOR,[sc]:s.SRC_ALPHA,[Jm]:s.SRC_ALPHA_SATURATE,[Zm]:s.DST_COLOR,[qm]:s.DST_ALPHA,[Xm]:s.ONE_MINUS_SRC_COLOR,[rc]:s.ONE_MINUS_SRC_ALPHA,[$m]:s.ONE_MINUS_DST_COLOR,[Ym]:s.ONE_MINUS_DST_ALPHA,[jm]:s.CONSTANT_COLOR,[Km]:s.ONE_MINUS_CONSTANT_COLOR,[Qm]:s.CONSTANT_ALPHA,[eg]:s.ONE_MINUS_CONSTANT_ALPHA};function O(D,oe,Y,Q,he,ce,Le,Mt,zt,Qe){if(D===Ni){g===!0&&(Ce(s.BLEND),g=!1);return}if(g===!1&&(ae(s.BLEND),g=!0),D!==Fm){if(D!==m||Qe!==v){if((p!==ls||y!==ls)&&(s.blendEquation(s.FUNC_ADD),p=ls,y=ls),Qe)switch(D){case Ys:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case td:s.blendFunc(s.ONE,s.ONE);break;case nd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case id:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ys:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case td:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case nd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case id:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}x=null,M=null,A=null,T=null,E.set(0,0,0),C=0,m=D,v=Qe}return}he=he||oe,ce=ce||Y,Le=Le||Q,(oe!==p||he!==y)&&(s.blendEquationSeparate(qe[oe],qe[he]),p=oe,y=he),(Y!==x||Q!==M||ce!==A||Le!==T)&&(s.blendFuncSeparate(wt[Y],wt[Q],wt[ce],wt[Le]),x=Y,M=Q,A=ce,T=Le),(Mt.equals(E)===!1||zt!==C)&&(s.blendColor(Mt.r,Mt.g,Mt.b,zt),E.copy(Mt),C=zt),m=D,v=!1}function xn(D,oe){D.side===Ln?Ce(s.CULL_FACE):ae(s.CULL_FACE);let Y=D.side===qt;oe&&(Y=!Y),Ge(Y),D.blending===Ys&&D.transparent===!1?O(Ni):O(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let Q=D.stencilWrite;o.setTest(Q),Q&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ht(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ae(s.SAMPLE_ALPHA_TO_COVERAGE):Ce(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(D){b!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),b=D)}function We(D){D!==Nm?(ae(s.CULL_FACE),D!==P&&(D===ed?s.cullFace(s.BACK):D===Om?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ce(s.CULL_FACE),P=D}function Te(D){D!==B&&(z&&s.lineWidth(D),B=D)}function ht(D,oe,Y){D?(ae(s.POLYGON_OFFSET_FILL),(F!==oe||G!==Y)&&(s.polygonOffset(oe,Y),F=oe,G=Y)):Ce(s.POLYGON_OFFSET_FILL)}function Ee(D){D?ae(s.SCISSOR_TEST):Ce(s.SCISSOR_TEST)}function R(D){D===void 0&&(D=s.TEXTURE0+I-1),te!==D&&(s.activeTexture(D),te=D)}function S(D,oe,Y){Y===void 0&&(te===null?Y=s.TEXTURE0+I-1:Y=te);let Q=se[Y];Q===void 0&&(Q={type:void 0,texture:void 0},se[Y]=Q),(Q.type!==D||Q.texture!==oe)&&(te!==Y&&(s.activeTexture(Y),te=Y),s.bindTexture(D,oe||fe[D]),Q.type=D,Q.texture=oe)}function V(){let D=se[te];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ye(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(D){Ie.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Ie.copy(D))}function ge(D){k.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),k.copy(D))}function Xe(D,oe){let Y=c.get(oe);Y===void 0&&(Y=new WeakMap,c.set(oe,Y));let Q=Y.get(D);Q===void 0&&(Q=s.getUniformBlockIndex(oe,D.name),Y.set(D,Q))}function Oe(D,oe){let Q=c.get(oe).get(D);l.get(oe)!==Q&&(s.uniformBlockBinding(oe,Q,D.__bindingPointIndex),l.set(oe,Q))}function ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},te=null,se={},h={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,x=null,M=null,y=null,A=null,T=null,E=new ze(0,0,0),C=0,v=!1,b=null,P=null,B=null,F=null,G=null,Ie.set(0,0,s.canvas.width,s.canvas.height),k.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ae,disable:Ce,bindFramebuffer:De,drawBuffers:Be,useProgram:gt,setBlending:O,setMaterial:xn,setFlipSided:Ge,setCullFace:We,setLineWidth:Te,setPolygonOffset:ht,setScissorTest:Ee,activeTexture:R,bindTexture:S,unbindTexture:V,compressedTexImage2D:K,compressedTexImage3D:ee,texImage2D:me,texImage3D:Ae,updateUBOMapping:Xe,uniformBlockBinding:Oe,texStorage2D:Ye,texStorage3D:ne,texSubImage2D:J,texSubImage3D:be,compressedTexSubImage2D:le,compressedTexSubImage3D:pe,scissor:Re,viewport:ge,reset:ct}}function Qd(s,e,t,n){let i=cv(n);switch(t){case pf:return s*e;case gf:return s*e;case _f:return s*e*2;case yf:return s*e/i.components*i.byteLength;case Tu:return s*e/i.components*i.byteLength;case xf:return s*e*2/i.components*i.byteLength;case Au:return s*e*2/i.components*i.byteLength;case mf:return s*e*3/i.components*i.byteLength;case Un:return s*e*4/i.components*i.byteLength;case Cu:return s*e*4/i.components*i.byteLength;case Ha:case Ga:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Wa:case Xa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yc:case vc:return Math.max(s,16)*Math.max(e,8)/4;case _c:case xc:return Math.max(s,8)*Math.max(e,8)/2;case Mc:case bc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Sc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ic:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Dc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Uc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Nc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Oc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Fc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case qa:case Bc:case zc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case vf:case kc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Vc:case Hc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cv(s){switch(s){case fi:case hf:return{byteLength:1,components:1};case kr:case df:case Xr:return{byteLength:2,components:1};case wu:case Eu:return{byteLength:2,components:4};case ds:case Su:case ci:return{byteLength:4,components:1};case ff:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function uv(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,S){return f?new OffscreenCanvas(R,S):Ja("canvas")}function g(R,S,V){let K=1,ee=Ee(R);if((ee.width>V||ee.height>V)&&(K=V/Math.max(ee.width,ee.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let J=Math.floor(K*ee.width),be=Math.floor(K*ee.height);h===void 0&&(h=_(J,be));let le=S?_(J,be):h;return le.width=J,le.height=be,le.getContext("2d").drawImage(R,0,0,J,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+J+"x"+be+")."),le}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){s.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(R,S,V,K,ee=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=S;if(S===s.RED&&(V===s.FLOAT&&(J=s.R32F),V===s.HALF_FLOAT&&(J=s.R16F),V===s.UNSIGNED_BYTE&&(J=s.R8)),S===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.R8UI),V===s.UNSIGNED_SHORT&&(J=s.R16UI),V===s.UNSIGNED_INT&&(J=s.R32UI),V===s.BYTE&&(J=s.R8I),V===s.SHORT&&(J=s.R16I),V===s.INT&&(J=s.R32I)),S===s.RG&&(V===s.FLOAT&&(J=s.RG32F),V===s.HALF_FLOAT&&(J=s.RG16F),V===s.UNSIGNED_BYTE&&(J=s.RG8)),S===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.RG8UI),V===s.UNSIGNED_SHORT&&(J=s.RG16UI),V===s.UNSIGNED_INT&&(J=s.RG32UI),V===s.BYTE&&(J=s.RG8I),V===s.SHORT&&(J=s.RG16I),V===s.INT&&(J=s.RG32I)),S===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.RGB8UI),V===s.UNSIGNED_SHORT&&(J=s.RGB16UI),V===s.UNSIGNED_INT&&(J=s.RGB32UI),V===s.BYTE&&(J=s.RGB8I),V===s.SHORT&&(J=s.RGB16I),V===s.INT&&(J=s.RGB32I)),S===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),V===s.UNSIGNED_INT&&(J=s.RGBA32UI),V===s.BYTE&&(J=s.RGBA8I),V===s.SHORT&&(J=s.RGBA16I),V===s.INT&&(J=s.RGBA32I)),S===s.RGB&&V===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),S===s.RGBA){let be=ee?vo:Ze.getTransfer(K);V===s.FLOAT&&(J=s.RGBA32F),V===s.HALF_FLOAT&&(J=s.RGBA16F),V===s.UNSIGNED_BYTE&&(J=be===it?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function y(R,S){let V;return R?S===null||S===ds||S===er?V=s.DEPTH24_STENCIL8:S===ci?V=s.DEPTH32F_STENCIL8:S===kr&&(V=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ds||S===er?V=s.DEPTH_COMPONENT24:S===ci?V=s.DEPTH_COMPONENT32F:S===kr&&(V=s.DEPTH_COMPONENT16),V}function A(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Nn&&R.minFilter!==Wn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function T(R){let S=R.target;S.removeEventListener("dispose",T),C(S),S.isVideoTexture&&u.delete(S)}function E(R){let S=R.target;S.removeEventListener("dispose",E),b(S)}function C(R){let S=n.get(R);if(S.__webglInit===void 0)return;let V=R.source,K=d.get(V);if(K){let ee=K[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&v(R),Object.keys(K).length===0&&d.delete(V)}n.remove(R)}function v(R){let S=n.get(R);s.deleteTexture(S.__webglTexture);let V=R.source,K=d.get(V);delete K[S.__cacheKey],a.memory.textures--}function b(R){let S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let ee=0;ee<S.__webglFramebuffer[K].length;ee++)s.deleteFramebuffer(S.__webglFramebuffer[K][ee]);else s.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)s.deleteFramebuffer(S.__webglFramebuffer[K]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let V=R.textures;for(let K=0,ee=V.length;K<ee;K++){let J=n.get(V[K]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(V[K])}n.remove(R)}let P=0;function B(){P=0}function F(){let R=P;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function G(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function I(R,S){let V=n.get(R);if(R.isVideoTexture&&Te(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){let K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(V,R,S);return}}t.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+S)}function z(R,S){let V=n.get(R);if(R.version>0&&V.__version!==R.version){k(V,R,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+S)}function Z(R,S){let V=n.get(R);if(R.version>0&&V.__version!==R.version){k(V,R,S);return}t.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+S)}function H(R,S){let V=n.get(R);if(R.version>0&&V.__version!==R.version){j(V,R,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+S)}let te={[mc]:s.REPEAT,[us]:s.CLAMP_TO_EDGE,[gc]:s.MIRRORED_REPEAT},se={[Nn]:s.NEAREST,[cg]:s.NEAREST_MIPMAP_NEAREST,[ma]:s.NEAREST_MIPMAP_LINEAR,[Wn]:s.LINEAR,[El]:s.LINEAR_MIPMAP_NEAREST,[hs]:s.LINEAR_MIPMAP_LINEAR},de={[fg]:s.NEVER,[xg]:s.ALWAYS,[pg]:s.LESS,[bf]:s.LEQUAL,[mg]:s.EQUAL,[yg]:s.GEQUAL,[gg]:s.GREATER,[_g]:s.NOTEQUAL};function ye(R,S){if(S.type===ci&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Wn||S.magFilter===El||S.magFilter===ma||S.magFilter===hs||S.minFilter===Wn||S.minFilter===El||S.minFilter===ma||S.minFilter===hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,te[S.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,te[S.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,te[S.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,se[S.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,se[S.minFilter]),S.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,de[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Nn||S.minFilter!==ma&&S.minFilter!==hs||S.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ie(R,S){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",T));let K=S.source,ee=d.get(K);ee===void 0&&(ee={},d.set(K,ee));let J=G(S);if(J!==R.__cacheKey){ee[J]===void 0&&(ee[J]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ee[J].usedTimes++;let be=ee[R.__cacheKey];be!==void 0&&(ee[R.__cacheKey].usedTimes--,be.usedTimes===0&&v(S)),R.__cacheKey=J,R.__webglTexture=ee[J].texture}return V}function k(R,S,V){let K=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=s.TEXTURE_3D);let ee=Ie(R,S),J=S.source;t.bindTexture(K,R.__webglTexture,s.TEXTURE0+V);let be=n.get(J);if(J.version!==be.__version||ee===!0){t.activeTexture(s.TEXTURE0+V);let le=Ze.getPrimaries(Ze.workingColorSpace),pe=S.colorSpace===Li?null:Ze.getPrimaries(S.colorSpace),Ye=S.colorSpace===Li||le===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let ne=g(S.image,!1,i.maxTextureSize);ne=ht(S,ne);let me=r.convert(S.format,S.colorSpace),Ae=r.convert(S.type),Re=M(S.internalFormat,me,Ae,S.colorSpace,S.isVideoTexture);ye(K,S);let ge,Xe=S.mipmaps,Oe=S.isVideoTexture!==!0,ct=be.__version===void 0||ee===!0,D=J.dataReady,oe=A(S,ne);if(S.isDepthTexture)Re=y(S.format===tr,S.type),ct&&(Oe?t.texStorage2D(s.TEXTURE_2D,1,Re,ne.width,ne.height):t.texImage2D(s.TEXTURE_2D,0,Re,ne.width,ne.height,0,me,Ae,null));else if(S.isDataTexture)if(Xe.length>0){Oe&&ct&&t.texStorage2D(s.TEXTURE_2D,oe,Re,Xe[0].width,Xe[0].height);for(let Y=0,Q=Xe.length;Y<Q;Y++)ge=Xe[Y],Oe?D&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,ge.width,ge.height,me,Ae,ge.data):t.texImage2D(s.TEXTURE_2D,Y,Re,ge.width,ge.height,0,me,Ae,ge.data);S.generateMipmaps=!1}else Oe?(ct&&t.texStorage2D(s.TEXTURE_2D,oe,Re,ne.width,ne.height),D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ne.width,ne.height,me,Ae,ne.data)):t.texImage2D(s.TEXTURE_2D,0,Re,ne.width,ne.height,0,me,Ae,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Oe&&ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,oe,Re,Xe[0].width,Xe[0].height,ne.depth);for(let Y=0,Q=Xe.length;Y<Q;Y++)if(ge=Xe[Y],S.format!==Un)if(me!==null)if(Oe){if(D)if(S.layerUpdates.size>0){let he=Qd(ge.width,ge.height,S.format,S.type);for(let ce of S.layerUpdates){let Le=ge.data.subarray(ce*he/ge.data.BYTES_PER_ELEMENT,(ce+1)*he/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,ce,ge.width,ge.height,1,me,Le)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ge.width,ge.height,ne.depth,me,ge.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,Re,ge.width,ge.height,ne.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?D&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ge.width,ge.height,ne.depth,me,Ae,ge.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Y,Re,ge.width,ge.height,ne.depth,0,me,Ae,ge.data)}else{Oe&&ct&&t.texStorage2D(s.TEXTURE_2D,oe,Re,Xe[0].width,Xe[0].height);for(let Y=0,Q=Xe.length;Y<Q;Y++)ge=Xe[Y],S.format!==Un?me!==null?Oe?D&&t.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(s.TEXTURE_2D,Y,Re,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?D&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,ge.width,ge.height,me,Ae,ge.data):t.texImage2D(s.TEXTURE_2D,Y,Re,ge.width,ge.height,0,me,Ae,ge.data)}else if(S.isDataArrayTexture)if(Oe){if(ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,oe,Re,ne.width,ne.height,ne.depth),D)if(S.layerUpdates.size>0){let Y=Qd(ne.width,ne.height,S.format,S.type);for(let Q of S.layerUpdates){let he=ne.data.subarray(Q*Y/ne.data.BYTES_PER_ELEMENT,(Q+1)*Y/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,ne.width,ne.height,1,me,Ae,he)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,me,Ae,ne.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Re,ne.width,ne.height,ne.depth,0,me,Ae,ne.data);else if(S.isData3DTexture)Oe?(ct&&t.texStorage3D(s.TEXTURE_3D,oe,Re,ne.width,ne.height,ne.depth),D&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,me,Ae,ne.data)):t.texImage3D(s.TEXTURE_3D,0,Re,ne.width,ne.height,ne.depth,0,me,Ae,ne.data);else if(S.isFramebufferTexture){if(ct)if(Oe)t.texStorage2D(s.TEXTURE_2D,oe,Re,ne.width,ne.height);else{let Y=ne.width,Q=ne.height;for(let he=0;he<oe;he++)t.texImage2D(s.TEXTURE_2D,he,Re,Y,Q,0,me,Ae,null),Y>>=1,Q>>=1}}else if(Xe.length>0){if(Oe&&ct){let Y=Ee(Xe[0]);t.texStorage2D(s.TEXTURE_2D,oe,Re,Y.width,Y.height)}for(let Y=0,Q=Xe.length;Y<Q;Y++)ge=Xe[Y],Oe?D&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,me,Ae,ge):t.texImage2D(s.TEXTURE_2D,Y,Re,me,Ae,ge);S.generateMipmaps=!1}else if(Oe){if(ct){let Y=Ee(ne);t.texStorage2D(s.TEXTURE_2D,oe,Re,Y.width,Y.height)}D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,me,Ae,ne)}else t.texImage2D(s.TEXTURE_2D,0,Re,me,Ae,ne);m(S)&&p(K),be.__version=J.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function j(R,S,V){if(S.image.length!==6)return;let K=Ie(R,S),ee=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+V);let J=n.get(ee);if(ee.version!==J.__version||K===!0){t.activeTexture(s.TEXTURE0+V);let be=Ze.getPrimaries(Ze.workingColorSpace),le=S.colorSpace===Li?null:Ze.getPrimaries(S.colorSpace),pe=S.colorSpace===Li||be===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Ye=S.isCompressedTexture||S.image[0].isCompressedTexture,ne=S.image[0]&&S.image[0].isDataTexture,me=[];for(let Q=0;Q<6;Q++)!Ye&&!ne?me[Q]=g(S.image[Q],!0,i.maxCubemapSize):me[Q]=ne?S.image[Q].image:S.image[Q],me[Q]=ht(S,me[Q]);let Ae=me[0],Re=r.convert(S.format,S.colorSpace),ge=r.convert(S.type),Xe=M(S.internalFormat,Re,ge,S.colorSpace),Oe=S.isVideoTexture!==!0,ct=J.__version===void 0||K===!0,D=ee.dataReady,oe=A(S,Ae);ye(s.TEXTURE_CUBE_MAP,S);let Y;if(Ye){Oe&&ct&&t.texStorage2D(s.TEXTURE_CUBE_MAP,oe,Xe,Ae.width,Ae.height);for(let Q=0;Q<6;Q++){Y=me[Q].mipmaps;for(let he=0;he<Y.length;he++){let ce=Y[he];S.format!==Un?Re!==null?Oe?D&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,0,0,ce.width,ce.height,Re,ce.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,Xe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,0,0,ce.width,ce.height,Re,ge,ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,Xe,ce.width,ce.height,0,Re,ge,ce.data)}}}else{if(Y=S.mipmaps,Oe&&ct){Y.length>0&&oe++;let Q=Ee(me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,oe,Xe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ne){Oe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,me[Q].width,me[Q].height,Re,ge,me[Q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Xe,me[Q].width,me[Q].height,0,Re,ge,me[Q].data);for(let he=0;he<Y.length;he++){let Le=Y[he].image[Q].image;Oe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,0,0,Le.width,Le.height,Re,ge,Le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,Xe,Le.width,Le.height,0,Re,ge,Le.data)}}else{Oe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Re,ge,me[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Xe,Re,ge,me[Q]);for(let he=0;he<Y.length;he++){let ce=Y[he];Oe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,0,0,Re,ge,ce.image[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,Xe,Re,ge,ce.image[Q])}}}m(S)&&p(s.TEXTURE_CUBE_MAP),J.__version=ee.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function fe(R,S,V,K,ee,J){let be=r.convert(V.format,V.colorSpace),le=r.convert(V.type),pe=M(V.internalFormat,be,le,V.colorSpace),Ye=n.get(S),ne=n.get(V);if(ne.__renderTarget=S,!Ye.__hasExternalTextures){let me=Math.max(1,S.width>>J),Ae=Math.max(1,S.height>>J);ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,J,pe,me,Ae,S.depth,0,be,le,null):t.texImage2D(ee,J,pe,me,Ae,0,be,le,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),We(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,ee,ne.__webglTexture,0,Ge(S)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,ee,ne.__webglTexture,J),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ae(R,S,V){if(s.bindRenderbuffer(s.RENDERBUFFER,R),S.depthBuffer){let K=S.depthTexture,ee=K&&K.isDepthTexture?K.type:null,J=y(S.stencilBuffer,ee),be=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=Ge(S);We(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,le,J,S.width,S.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,le,J,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,J,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,R)}else{let K=S.textures;for(let ee=0;ee<K.length;ee++){let J=K[ee],be=r.convert(J.format,J.colorSpace),le=r.convert(J.type),pe=M(J.internalFormat,be,le,J.colorSpace),Ye=Ge(S);V&&We(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,pe,S.width,S.height):We(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ye,pe,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,pe,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ce(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(S.depthTexture);K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),I(S.depthTexture,0);let ee=K.__webglTexture,J=Ge(S);if(S.depthTexture.format===Zs)We(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0);else if(S.depthTexture.format===tr)We(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function De(R){let S=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let K=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){let ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",ee)};K.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=K}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ce(S.__webglFramebuffer,R)}else if(V){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=s.createRenderbuffer(),ae(S.__webglDepthbuffer[K],R,!1);else{let ee=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,J)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),ae(S.__webglDepthbuffer,R,!1);else{let K=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ee=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,ee)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(R,S,V){let K=n.get(R);S!==void 0&&fe(K.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&De(R)}function gt(R){let S=R.texture,V=n.get(R),K=n.get(S);R.addEventListener("dispose",E);let ee=R.textures,J=R.isWebGLCubeRenderTarget===!0,be=ee.length>1;if(be||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=S.version,a.memory.textures++),J){V.__webglFramebuffer=[];for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[le]=[];for(let pe=0;pe<S.mipmaps.length;pe++)V.__webglFramebuffer[le][pe]=s.createFramebuffer()}else V.__webglFramebuffer[le]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)V.__webglFramebuffer[le]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(be)for(let le=0,pe=ee.length;le<pe;le++){let Ye=n.get(ee[le]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&We(R)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let le=0;le<ee.length;le++){let pe=ee[le];V.__webglColorRenderbuffer[le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[le]);let Ye=r.convert(pe.format,pe.colorSpace),ne=r.convert(pe.type),me=M(pe.internalFormat,Ye,ne,pe.colorSpace,R.isXRRenderTarget===!0),Ae=Ge(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,me,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,V.__webglColorRenderbuffer[le])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),ae(V.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),ye(s.TEXTURE_CUBE_MAP,S);for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0)for(let pe=0;pe<S.mipmaps.length;pe++)fe(V.__webglFramebuffer[le][pe],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,pe);else fe(V.__webglFramebuffer[le],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(S)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let le=0,pe=ee.length;le<pe;le++){let Ye=ee[le],ne=n.get(Ye);t.bindTexture(s.TEXTURE_2D,ne.__webglTexture),ye(s.TEXTURE_2D,Ye),fe(V.__webglFramebuffer,R,Ye,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,0),m(Ye)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let le=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(le=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(le,K.__webglTexture),ye(le,S),S.mipmaps&&S.mipmaps.length>0)for(let pe=0;pe<S.mipmaps.length;pe++)fe(V.__webglFramebuffer[pe],R,S,s.COLOR_ATTACHMENT0,le,pe);else fe(V.__webglFramebuffer,R,S,s.COLOR_ATTACHMENT0,le,0);m(S)&&p(le),t.unbindTexture()}R.depthBuffer&&De(R)}function qe(R){let S=R.textures;for(let V=0,K=S.length;V<K;V++){let ee=S[V];if(m(ee)){let J=x(R),be=n.get(ee).__webglTexture;t.bindTexture(J,be),p(J),t.unbindTexture()}}}let wt=[],O=[];function xn(R){if(R.samples>0){if(We(R)===!1){let S=R.textures,V=R.width,K=R.height,ee=s.COLOR_BUFFER_BIT,J=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=n.get(R),le=S.length>1;if(le)for(let pe=0;pe<S.length;pe++)t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let pe=0;pe<S.length;pe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=s.STENCIL_BUFFER_BIT)),le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,be.__webglColorRenderbuffer[pe]);let Ye=n.get(S[pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ye,0)}s.blitFramebuffer(0,0,V,K,0,0,V,K,ee,s.NEAREST),l===!0&&(wt.length=0,O.length=0,wt.push(s.COLOR_ATTACHMENT0+pe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(wt.push(J),O.push(J),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,wt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),le)for(let pe=0;pe<S.length;pe++){t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,be.__webglColorRenderbuffer[pe]);let Ye=n.get(S[pe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,Ye,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let S=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Ge(R){return Math.min(i.maxSamples,R.samples)}function We(R){let S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Te(R){let S=a.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function ht(R,S){let V=R.colorSpace,K=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==cr&&V!==Li&&(Ze.getTransfer(V)===it?(K!==Un||ee!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function Ee(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.setTexture2D=I,this.setTexture2DArray=z,this.setTexture3D=Z,this.setTextureCube=H,this.rebindTextures=Be,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=xn,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=We}function hv(s,e){function t(n,i=Li){let r,a=Ze.getTransfer(i);if(n===fi)return s.UNSIGNED_BYTE;if(n===wu)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Eu)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ff)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===hf)return s.BYTE;if(n===df)return s.SHORT;if(n===kr)return s.UNSIGNED_SHORT;if(n===Su)return s.INT;if(n===ds)return s.UNSIGNED_INT;if(n===ci)return s.FLOAT;if(n===Xr)return s.HALF_FLOAT;if(n===pf)return s.ALPHA;if(n===mf)return s.RGB;if(n===Un)return s.RGBA;if(n===gf)return s.LUMINANCE;if(n===_f)return s.LUMINANCE_ALPHA;if(n===Zs)return s.DEPTH_COMPONENT;if(n===tr)return s.DEPTH_STENCIL;if(n===yf)return s.RED;if(n===Tu)return s.RED_INTEGER;if(n===xf)return s.RG;if(n===Au)return s.RG_INTEGER;if(n===Cu)return s.RGBA_INTEGER;if(n===Ha||n===Ga||n===Wa||n===Xa)if(a===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ha)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ha)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ga)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_c||n===yc||n===xc||n===vc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_c)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mc||n===bc||n===Sc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Mc||n===bc)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wc||n===Ec||n===Tc||n===Ac||n===Cc||n===Rc||n===Pc||n===Ic||n===Dc||n===Lc||n===Uc||n===Nc||n===Oc||n===Fc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ec)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ac)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ic)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Dc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qa||n===Bc||n===zc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===qa)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vf||n===kc||n===Vc||n===Hc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===qa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===kc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===er?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}function gv(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ef(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=e.get(p),M=x.envMap,y=x.envMapRotation;M&&(m.envMap.value=M,as.copy(y),as.x*=-1,as.y*=-1,as.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),m.envMapRotation.value.setFromMatrix4(mv.makeRotationFromEuler(as)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function _v(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){let y=M.program;n.uniformBlockBinding(x,y)}function c(x,M){let y=i[x.id];y===void 0&&(_(x),y=u(x),i[x.id]=y,x.addEventListener("dispose",m));let A=M.program;n.updateUBOMapping(x,A);let T=e.render.frame;r[x.id]!==T&&(d(x),r[x.id]=T)}function u(x){let M=h();x.__bindingPointIndex=M;let y=s.createBuffer(),A=x.__size,T=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,A,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,y),y}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let M=i[x.id],y=x.uniforms,A=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let T=0,E=y.length;T<E;T++){let C=Array.isArray(y[T])?y[T]:[y[T]];for(let v=0,b=C.length;v<b;v++){let P=C[v];if(f(P,T,v,A)===!0){let B=P.__offset,F=Array.isArray(P.value)?P.value:[P.value],G=0;for(let I=0;I<F.length;I++){let z=F[I],Z=g(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,B+G,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):(z.toArray(P.__data,G),G+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,M,y,A){let T=x.value,E=M+"_"+y;if(A[E]===void 0)return typeof T=="number"||typeof T=="boolean"?A[E]=T:A[E]=T.clone(),!0;{let C=A[E];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return A[E]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function _(x){let M=x.uniforms,y=0,A=16;for(let E=0,C=M.length;E<C;E++){let v=Array.isArray(M[E])?M[E]:[M[E]];for(let b=0,P=v.length;b<P;b++){let B=v[b],F=Array.isArray(B.value)?B.value:[B.value];for(let G=0,I=F.length;G<I;G++){let z=F[G],Z=g(z),H=y%A,te=H%Z.boundary,se=H+te;y+=te,se!==0&&A-se<Z.storage&&(y+=A-se),B.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=Z.storage}}}let T=y%A;return T>0&&(y+=A-T),x.__size=y,x.__cache={},this}function g(x){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){let M=x.target;M.removeEventListener("dispose",m);let y=a.indexOf(M.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function p(){for(let x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}function Fa(s,e,t,n,i,r){let a=s.geometry.attributes.position;if(lo.fromBufferAttribute(a,i),co.fromBufferAttribute(a,r),t.distanceSqToSegment(lo,co,ec,tf)>n)return;ec.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(ec);if(!(l<e.near||l>e.far))return{distance:l,point:tf.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}function Va(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function yv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Nm,ed,Om,lf,Mu,li,Fi,qt,Ln,Ni,Ys,td,nd,id,Fm,ls,Bm,zm,km,Vm,Hm,Gm,Wm,Xm,sc,rc,qm,Ym,Zm,$m,Jm,jm,Km,Qm,eg,ac,oc,lc,js,cc,uc,hc,dc,cf,tg,ng,Oi,ig,sg,rg,ag,og,lg,bu,uf,Ks,Qs,fc,pc,xo,mc,us,gc,Nn,cg,ma,Wn,El,hs,fi,hf,df,kr,Su,ds,ci,Xr,wu,Eu,er,ff,pf,mf,Un,gf,_f,Zs,tr,yf,Tu,xf,Au,Cu,Ha,Ga,Wa,Xa,_c,yc,xc,vc,Mc,bc,Sc,wc,Ec,Tc,Ac,Cc,Rc,Pc,Ic,Dc,Lc,Uc,Nc,Oc,Fc,qa,Bc,zc,vf,kc,Vc,Hc,Za,Gc,Tl,sd,rd,ad,ug,hg,Mf,dg,Li,En,cr,vo,it,Ds,od,fg,pg,mg,bf,gg,_g,yg,xg,ld,cd,ui,$a,Bi,Gt,Ya,Wc,He,Ne,Cl,ud,Ze,hd,dd,fd,pd,md,Ls,Xc,Eg,ja,Tg,Tn,st,qc,pi,Ka,Yc,zi,L,Pl,gd,fs,ii,Rn,ga,Us,Ns,Os,Ai,Ci,ts,Ir,_a,ya,ns,Ag,Dr,Dl,nr,si,Ll,xa,Ri,Ul,va,Nl,Qa,vt,Fs,Pn,Cg,Rg,Pi,Ma,gn,_d,yd,Xn,eo,Pg,xd,Bs,ri,ba,Lr,Ig,Dg,vd,Md,bd,Sd,Lg,zs,Ol,Yt,In,ai,Fl,oi,ks,Vs,wd,Bl,zl,kl,Vl,Hl,Gl,Ui,wf,Ii,Sa,ze,Wt,Ug,ki,ir,At,wa,on,to,no,Tt,Ng,wn,Xl,Hs,_n,Ur,Ut,yn,Ed,is,Ea,Td,Ta,Aa,Ca,ql,Ra,Ad,Pa,lt,qn,Bg,zg,kg,Yn,io,Di,Cd,Rd,Xt,Gs,Ws,Zc,so,$c,Yl,Vg,Hg,Dn,ss,Da,Vr,rr,Wg,Xg,qg,Yg,Zg,$g,Jg,jg,Kg,Qg,e0,t0,n0,i0,s0,r0,a0,o0,l0,c0,u0,h0,d0,f0,p0,m0,g0,_0,y0,x0,v0,M0,b0,S0,w0,E0,T0,A0,C0,R0,P0,I0,D0,L0,U0,N0,O0,F0,B0,z0,k0,V0,H0,G0,W0,X0,q0,Y0,Z0,$0,J0,j0,K0,Q0,e_,t_,n_,i_,s_,r_,a_,o_,l_,c_,u_,h_,d_,f_,p_,m_,g_,__,y_,x_,v_,M_,b_,S_,w_,E_,T_,A_,C_,R_,P_,I_,D_,L_,U_,N_,O_,F_,B_,z_,k_,V_,H_,G_,W_,X_,q_,Y_,Z_,$_,J_,j_,K_,Q_,ey,ty,ny,iy,sy,ry,ay,oy,ly,cy,uy,hy,dy,fy,py,my,gy,_y,yy,xy,vy,My,by,Fe,re,Gn,La,rs,Sy,ro,qs,Pd,cs,Zl,Id,$l,Jl,jl,Kl,os,Xs,Dd,ar,ao,Af,Od,Cf,Rf,Pf,Fd,Bd,zd,kd,Vd,Jc,jc,Kc,Ql,Js,Tx,Ax,Wd,Na,Ox,Fx,zx,Yx,eu,tu,ev,nu,iu,sv,rv,ov,su,hi,dv,zr,fv,pv,ru,au,as,mv,oo,or,Hr,lo,co,ef,Nr,Oa,ec,tf,ou,nf,sf,uo,ho,lu,Ba,za,tc,ka,fo,Gr,ps,lr,cu,uu,hu,On,ms,du,fu,pu,po,gs,mu,gu,xv,_u,Wr,mo,nc,rf,af,go,of,Or,ic,yu,_o,xu,yo,Pu,vv,Iu,Mv,bv,Sv,wv,Ev,Tv,Av,vu,mt,sM,bo=_i(()=>{Nm=0,ed=1,Om=2,lf=1,Mu=2,li=3,Fi=0,qt=1,Ln=2,Ni=0,Ys=1,td=2,nd=3,id=4,Fm=5,ls=100,Bm=101,zm=102,km=103,Vm=104,Hm=200,Gm=201,Wm=202,Xm=203,sc=204,rc=205,qm=206,Ym=207,Zm=208,$m=209,Jm=210,jm=211,Km=212,Qm=213,eg=214,ac=0,oc=1,lc=2,js=3,cc=4,uc=5,hc=6,dc=7,cf=0,tg=1,ng=2,Oi=0,ig=1,sg=2,rg=3,ag=4,og=5,lg=6,bu=7,uf=300,Ks=301,Qs=302,fc=303,pc=304,xo=306,mc=1e3,us=1001,gc=1002,Nn=1003,cg=1004,ma=1005,Wn=1006,El=1007,hs=1008,fi=1009,hf=1010,df=1011,kr=1012,Su=1013,ds=1014,ci=1015,Xr=1016,wu=1017,Eu=1018,er=1020,ff=35902,pf=1021,mf=1022,Un=1023,gf=1024,_f=1025,Zs=1026,tr=1027,yf=1028,Tu=1029,xf=1030,Au=1031,Cu=1033,Ha=33776,Ga=33777,Wa=33778,Xa=33779,_c=35840,yc=35841,xc=35842,vc=35843,Mc=36196,bc=37492,Sc=37496,wc=37808,Ec=37809,Tc=37810,Ac=37811,Cc=37812,Rc=37813,Pc=37814,Ic=37815,Dc=37816,Lc=37817,Uc=37818,Nc=37819,Oc=37820,Fc=37821,qa=36492,Bc=36494,zc=36495,vf=36283,kc=36284,Vc=36285,Hc=36286,Za=2300,Gc=2301,Tl=2302,sd=2400,rd=2401,ad=2402,ug=3200,hg=3201,Mf=0,dg=1,Li="",En="srgb",cr="srgb-linear",vo="linear",it="srgb",Ds=7680,od=519,fg=512,pg=513,mg=514,bf=515,gg=516,_g=517,yg=518,xg=519,ld=35044,cd="300 es",ui=2e3,$a=2001,Bi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ya=Math.PI/180,Wc=180/Math.PI;He=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(an(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ne=class s{constructor(e,t,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],_=n[8],g=i[0],m=i[3],p=i[6],x=i[1],M=i[4],y=i[7],A=i[2],T=i[5],E=i[8];return r[0]=a*g+o*x+l*A,r[3]=a*m+o*M+l*T,r[6]=a*p+o*y+l*E,r[1]=c*g+u*x+h*A,r[4]=c*m+u*M+h*T,r[7]=c*p+u*y+h*E,r[2]=d*g+f*x+_*A,r[5]=d*m+f*M+_*T,r[8]=d*p+f*y+_*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,_=t*h+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(o*n-i*a)*g,e[3]=d*g,e[4]=(u*t-i*l)*g,e[5]=(i*r-o*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Cl.makeScale(e,t)),this}rotate(e){return this.premultiply(Cl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Cl=new Ne;ud={};Ze={enabled:!0,workingColorSpace:cr,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===it&&(s.r=di(s.r),s.g=di(s.g),s.b=di(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===it&&(s.r=$s(s.r),s.g=$s(s.g),s.b=$s(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Li?vo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};hd=[.64,.33,.3,.6,.15,.06],dd=[.2126,.7152,.0722],fd=[.3127,.329],pd=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),md=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ze.define({[cr]:{primaries:hd,whitePoint:fd,transfer:vo,toXYZ:pd,fromXYZ:md,luminanceCoefficients:dd,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:hd,whitePoint:fd,transfer:it,toXYZ:pd,fromXYZ:md,luminanceCoefficients:dd,outputColorSpaceConfig:{drawingBufferColorSpace:En}}});Xc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ls===void 0&&(Ls=Ja("canvas")),Ls.width=e.width,Ls.height=e.height;let n=Ls.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ja("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=di(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(di(t[n]/255)*255):t[n]=di(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Eg=0,ja=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=qr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Rl(i[a].image)):r.push(Rl(i[a]))}else r=Rl(i);n.url=r}return t||(e.images[this.uuid]=n),n}};Tg=0,Tn=class s extends Bi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=us,i=us,r=Wn,a=hs,o=Un,l=fi,c=s.DEFAULT_ANISOTROPY,u=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=qr(),this.name="",this.source=new ja(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mc:e.x=e.x-Math.floor(e.x);break;case us:e.x=e.x<0?0:1;break;case gc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mc:e.y=e.y-Math.floor(e.y);break;case us:e.y=e.y<0?0:1;break;case gc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=uf;Tn.DEFAULT_ANISOTROPY=1;st=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,y=(f+1)/2,A=(p+1)/2,T=(u+d)/4,E=(h+g)/4,C=(_+m)/4;return M>y&&M>A?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=T/n,r=E/n):y>A?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=T/i,r=C/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=E/r,i=C/r),this.set(n,i,r,t),this}let x=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(h-g)/x,this.z=(d-u)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qc=class extends Bi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Tn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ja(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},pi=class extends qc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ka=class extends Tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Yc=class extends Tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},zi=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=r[a+0],f=r[a+1],_=r[a+2],g=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==d||c!==f||u!==_){let m=1-o,p=l*d+c*f+u*_+h*g,x=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let A=Math.sqrt(M),T=Math.atan2(A,p*x);m=Math.sin(m*T)/A,o=Math.sin(o*T)/A}let y=o*x;if(l=l*m+d*y,c=c*m+f*y,u=u*m+_*y,h=h*m+g*y,m===1-o){let A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],d=r[a+1],f=r[a+2],_=r[a+3];return e[t]=o*_+u*h+l*f-c*d,e[t+1]=l*_+u*d+c*h-o*f,e[t+2]=c*_+u*f+o*d-l*h,e[t+3]=u*_-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),d=l(n/2),f=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"YZX":this._x=d*u*h+c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h-d*f*_;break;case"XZY":this._x=d*u*h-c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>h){let f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>h){let f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(an(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=i+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pl.copy(this).projectOnVector(e),this.sub(Pl)}reflect(e){return this.sub(Pl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(an(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pl=new L,gd=new zi,fs=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(r,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ga.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ga.copy(n.boundingBox)),ga.applyMatrix4(e.matrixWorld),this.union(ga)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),_a.subVectors(this.max,Ir),Us.subVectors(e.a,Ir),Ns.subVectors(e.b,Ir),Os.subVectors(e.c,Ir),Ai.subVectors(Ns,Us),Ci.subVectors(Os,Ns),ts.subVectors(Us,Os);let t=[0,-Ai.z,Ai.y,0,-Ci.z,Ci.y,0,-ts.z,ts.y,Ai.z,0,-Ai.x,Ci.z,0,-Ci.x,ts.z,0,-ts.x,-Ai.y,Ai.x,0,-Ci.y,Ci.x,0,-ts.y,ts.x,0];return!Il(t,Us,Ns,Os,_a)||(t=[1,0,0,0,1,0,0,0,1],!Il(t,Us,Ns,Os,_a))?!1:(ya.crossVectors(Ai,Ci),t=[ya.x,ya.y,ya.z],Il(t,Us,Ns,Os,_a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ii=[new L,new L,new L,new L,new L,new L,new L,new L],Rn=new L,ga=new fs,Us=new L,Ns=new L,Os=new L,Ai=new L,Ci=new L,ts=new L,Ir=new L,_a=new L,ya=new L,ns=new L;Ag=new fs,Dr=new L,Dl=new L,nr=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ag.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dr.subVectors(e,this.center);let t=Dr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Dr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dr.copy(e.center).add(Dl)),this.expandByPoint(Dr.copy(e.center).sub(Dl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},si=new L,Ll=new L,xa=new L,Ri=new L,Ul=new L,va=new L,Nl=new L,Qa=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ll.copy(e).add(t).multiplyScalar(.5),xa.copy(t).sub(e).normalize(),Ri.copy(this.origin).sub(Ll);let r=e.distanceTo(t)*.5,a=-this.direction.dot(xa),o=Ri.dot(this.direction),l=-Ri.dot(xa),c=Ri.lengthSq(),u=Math.abs(1-a*a),h,d,f,_;if(u>0)if(h=a*l-o,d=a*o-l,_=r*u,h>=0)if(d>=-_)if(d<=_){let g=1/u;h*=g,d*=g,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ll).addScaledVector(xa,d),f}intersectSphere(e,t){si.subVectors(e.center,this.origin);let n=si.dot(this.direction),i=si.dot(si)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,n,i,r){Ul.subVectors(t,e),va.subVectors(n,e),Nl.crossVectors(Ul,va);let a=this.direction.dot(Nl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ri.subVectors(this.origin,e);let l=o*this.direction.dot(va.crossVectors(Ri,va));if(l<0)return null;let c=o*this.direction.dot(Ul.cross(Ri));if(c<0||l+c>a)return null;let u=-o*Ri.dot(Nl);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vt=class s{constructor(e,t,n,i,r,a,o,l,c,u,h,d,f,_,g,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,u,h,d,f,_,g,m)}set(e,t,n,i,r,a,o,l,c,u,h,d,f,_,g,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Fs.setFromMatrixColumn(e,0).length(),r=1/Fs.setFromMatrixColumn(e,1).length(),a=1/Fs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,f=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+_*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=_+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,_=c*u,g=c*h;t[0]=d+g*o,t[4]=_*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-_,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,_=c*u,g=c*h;t[0]=d-g*o,t[4]=-a*h,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,f=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=_*c-f,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-d*h,t[8]=_*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+_,t[10]=d-g*h}else if(e.order==="XZY"){let d=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=a*u,t[9]=f*h-_,t[2]=_*h-f,t[6]=o*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cg,e,Rg)}lookAt(e,t,n){let i=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Pi.crossVectors(n,gn),Pi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Pi.crossVectors(n,gn)),Pi.normalize(),Ma.crossVectors(gn,Pi),i[0]=Pi.x,i[4]=Ma.x,i[8]=gn.x,i[1]=Pi.y,i[5]=Ma.y,i[9]=gn.y,i[2]=Pi.z,i[6]=Ma.z,i[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],x=n[3],M=n[7],y=n[11],A=n[15],T=i[0],E=i[4],C=i[8],v=i[12],b=i[1],P=i[5],B=i[9],F=i[13],G=i[2],I=i[6],z=i[10],Z=i[14],H=i[3],te=i[7],se=i[11],de=i[15];return r[0]=a*T+o*b+l*G+c*H,r[4]=a*E+o*P+l*I+c*te,r[8]=a*C+o*B+l*z+c*se,r[12]=a*v+o*F+l*Z+c*de,r[1]=u*T+h*b+d*G+f*H,r[5]=u*E+h*P+d*I+f*te,r[9]=u*C+h*B+d*z+f*se,r[13]=u*v+h*F+d*Z+f*de,r[2]=_*T+g*b+m*G+p*H,r[6]=_*E+g*P+m*I+p*te,r[10]=_*C+g*B+m*z+p*se,r[14]=_*v+g*F+m*Z+p*de,r[3]=x*T+M*b+y*G+A*H,r[7]=x*E+M*P+y*I+A*te,r[11]=x*C+M*B+y*z+A*se,r[15]=x*v+M*F+y*Z+A*de,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+r*l*h-i*c*h-r*o*d+n*c*d+i*o*f-n*l*f)+g*(+t*l*f-t*c*d+r*a*d-i*a*f+i*c*u-r*l*u)+m*(+t*c*h-t*o*f-r*a*h+n*a*f+r*o*u-n*c*u)+p*(-i*o*u-t*l*h+t*o*d+i*a*h-n*a*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],_=e[12],g=e[13],m=e[14],p=e[15],x=h*m*c-g*d*c+g*l*f-o*m*f-h*l*p+o*d*p,M=_*d*c-u*m*c-_*l*f+a*m*f+u*l*p-a*d*p,y=u*g*c-_*h*c+_*o*f-a*g*f-u*o*p+a*h*p,A=_*h*l-u*g*l-_*o*d+a*g*d+u*o*m-a*h*m,T=t*x+n*M+i*y+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/T;return e[0]=x*E,e[1]=(g*d*r-h*m*r-g*i*f+n*m*f+h*i*p-n*d*p)*E,e[2]=(o*m*r-g*l*r+g*i*c-n*m*c-o*i*p+n*l*p)*E,e[3]=(h*l*r-o*d*r-h*i*c+n*d*c+o*i*f-n*l*f)*E,e[4]=M*E,e[5]=(u*m*r-_*d*r+_*i*f-t*m*f-u*i*p+t*d*p)*E,e[6]=(_*l*r-a*m*r-_*i*c+t*m*c+a*i*p-t*l*p)*E,e[7]=(a*d*r-u*l*r+u*i*c-t*d*c-a*i*f+t*l*f)*E,e[8]=y*E,e[9]=(_*h*r-u*g*r-_*n*f+t*g*f+u*n*p-t*h*p)*E,e[10]=(a*g*r-_*o*r+_*n*c-t*g*c-a*n*p+t*o*p)*E,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*f-t*o*f)*E,e[12]=A*E,e[13]=(u*g*i-_*h*i+_*n*d-t*g*d-u*n*m+t*h*m)*E,e[14]=(_*o*i-a*g*i-_*n*l+t*g*l+a*n*m-t*o*m)*E,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*d+t*o*d)*E,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,_=r*h,g=a*u,m=a*h,p=o*h,x=l*c,M=l*u,y=l*h,A=n.x,T=n.y,E=n.z;return i[0]=(1-(g+p))*A,i[1]=(f+y)*A,i[2]=(_-M)*A,i[3]=0,i[4]=(f-y)*T,i[5]=(1-(d+p))*T,i[6]=(m+x)*T,i[7]=0,i[8]=(_+M)*E,i[9]=(m-x)*E,i[10]=(1-(d+g))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Fs.set(i[0],i[1],i[2]).length(),a=Fs.set(i[4],i[5],i[6]).length(),o=Fs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Pn.copy(this);let c=1/r,u=1/a,h=1/o;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=h,Pn.elements[9]*=h,Pn.elements[10]*=h,t.setFromRotationMatrix(Pn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=ui){let l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),f,_;if(o===ui)f=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===$a)f=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=ui){let l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(a-r),d=(t+e)*c,f=(n+i)*u,_,g;if(o===ui)_=(a+r)*h,g=-2*h;else if(o===$a)_=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Fs=new L,Pn=new vt,Cg=new L(0,0,0),Rg=new L(1,1,1),Pi=new L,Ma=new L,gn=new L,_d=new vt,yd=new zi,Xn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(an(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-an(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(an(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _d.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_d,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yd.setFromEuler(this),this.setFromQuaternion(yd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xn.DEFAULT_ORDER="XYZ";eo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Pg=0,xd=new L,Bs=new zi,ri=new vt,ba=new L,Lr=new L,Ig=new L,Dg=new zi,vd=new L(1,0,0),Md=new L(0,1,0),bd=new L(0,0,1),Sd={type:"added"},Lg={type:"removed"},zs={type:"childadded",child:null},Ol={type:"childremoved",child:null},Yt=class s extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=qr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new L,t=new Xn,n=new zi,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new vt},normalMatrix:{value:new Ne}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(vd,e)}rotateY(e){return this.rotateOnAxis(Md,e)}rotateZ(e){return this.rotateOnAxis(bd,e)}translateOnAxis(e,t){return xd.copy(e).applyQuaternion(this.quaternion),this.position.add(xd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vd,e)}translateY(e){return this.translateOnAxis(Md,e)}translateZ(e){return this.translateOnAxis(bd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ba.copy(e):ba.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(Lr,ba,this.up):ri.lookAt(ba,Lr,this.up),this.quaternion.setFromRotationMatrix(ri),i&&(ri.extractRotation(i.matrixWorld),Bs.setFromRotationMatrix(ri),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sd),zs.child=e,this.dispatchEvent(zs),zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lg),Ol.child=e,this.dispatchEvent(Ol),Ol.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sd),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,e,Ig),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,Dg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Yt.DEFAULT_UP=new L(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;In=new L,ai=new L,Fl=new L,oi=new L,ks=new L,Vs=new L,wd=new L,Bl=new L,zl=new L,kl=new L,Vl=new st,Hl=new st,Gl=new st,Ui=class s{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),In.subVectors(e,t),i.cross(In);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){In.subVectors(i,t),ai.subVectors(n,t),Fl.subVectors(e,t);let a=In.dot(In),o=In.dot(ai),l=In.dot(Fl),c=ai.dot(ai),u=ai.dot(Fl),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-o*u)*d,_=(a*u-o*l)*d;return r.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(a,oi.y),l.addScaledVector(o,oi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Vl.setScalar(0),Hl.setScalar(0),Gl.setScalar(0),Vl.fromBufferAttribute(e,t),Hl.fromBufferAttribute(e,n),Gl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Vl,r.x),a.addScaledVector(Hl,r.y),a.addScaledVector(Gl,r.z),a}static isFrontFacing(e,t,n,i){return In.subVectors(n,t),ai.subVectors(e,t),In.cross(ai).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),In.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;ks.subVectors(i,n),Vs.subVectors(r,n),Bl.subVectors(e,n);let l=ks.dot(Bl),c=Vs.dot(Bl);if(l<=0&&c<=0)return t.copy(n);zl.subVectors(e,i);let u=ks.dot(zl),h=Vs.dot(zl);if(u>=0&&h<=u)return t.copy(i);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ks,a);kl.subVectors(e,r);let f=ks.dot(kl),_=Vs.dot(kl);if(_>=0&&f<=_)return t.copy(r);let g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Vs,o);let m=u*_-f*h;if(m<=0&&h-u>=0&&f-_>=0)return wd.subVectors(r,i),o=(h-u)/(h-u+(f-_)),t.copy(i).addScaledVector(wd,o);let p=1/(m+g+d);return a=g*p,o=d*p,t.copy(n).addScaledVector(ks,a).addScaledVector(Vs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},wf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},Sa={h:0,s:0,l:0};ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ze.workingColorSpace){if(e=vg(e,1),t=an(t,0,1),n=an(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Wl(a,r,e+1/3),this.g=Wl(a,r,e),this.b=Wl(a,r,e-1/3)}return Ze.toWorkingColorSpace(this,i),this}setStyle(e,t=En){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=En){let n=wf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return Ze.fromWorkingColorSpace(Wt.copy(this),e),Math.round(an(Wt.r*255,0,255))*65536+Math.round(an(Wt.g*255,0,255))*256+Math.round(an(Wt.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Wt.copy(this),t);let n=Wt.r,i=Wt.g,r=Wt.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=En){Ze.fromWorkingColorSpace(Wt.copy(this),e);let t=Wt.r,n=Wt.g,i=Wt.b;return e!==En?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+t,Ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(Sa);let n=Al(Ii.h,Sa.h,t),i=Al(Ii.s,Sa.s,t),r=Al(Ii.l,Sa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wt=new ze;ze.NAMES=wf;Ug=0,ki=class extends Bi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=qr(),this.name="",this.blending=Ys,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sc,this.blendDst=rc,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=od,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(n.blending=this.blending),this.side!==Fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sc&&(n.blendSrc=this.blendSrc),this.blendDst!==rc&&(n.blendDst=this.blendDst),this.blendEquation!==ls&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==od&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ir=class extends ki{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=cf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},At=new L,wa=new He,on=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ld,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wa.fromBufferAttribute(this,t),wa.applyMatrix3(e),this.setXY(t,wa.x,wa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Pr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pr(t,this.array)),t}setX(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pr(t,this.array)),t}setY(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pr(t,this.array)),t}setW(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array),i=rn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ld&&(e.usage=this.usage),e}},to=class extends on{constructor(e,t,n){super(new Uint16Array(e),t,n)}},no=class extends on{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Tt=class extends on{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ng=0,wn=new vt,Xl=new Yt,Hs=new L,_n=new fs,Ur=new fs,Ut=new L,yn=class s extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=qr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sf(e)?no:to)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ne().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,n){return wn.makeTranslation(e,t,n),this.applyMatrix4(wn),this}scale(e,t,n){return wn.makeScale(e,t,n),this.applyMatrix4(wn),this}lookAt(e){return Xl.lookAt(e),Xl.updateMatrix(),this.applyMatrix4(Xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Tt(n,3))}else{for(let n=0,i=t.count;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ur.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(_n.min,Ur.min),_n.expandByPoint(Ut),Ut.addVectors(_n.max,Ur.max),_n.expandByPoint(Ut)):(_n.expandByPoint(Ur.min),_n.expandByPoint(Ur.max))}_n.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Ut.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ut));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ut.fromBufferAttribute(o,c),l&&(Hs.fromBufferAttribute(e,c),Ut.add(Hs)),i=Math.max(i,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new L,l[C]=new L;let c=new L,u=new L,h=new L,d=new He,f=new He,_=new He,g=new L,m=new L;function p(C,v,b){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,v),h.fromBufferAttribute(n,b),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,v),_.fromBufferAttribute(r,b),u.sub(c),h.sub(c),f.sub(d),_.sub(d);let P=1/(f.x*_.y-_.x*f.y);isFinite(P)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(P),o[C].add(g),o[v].add(g),o[b].add(g),l[C].add(m),l[v].add(m),l[b].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let C=0,v=x.length;C<v;++C){let b=x[C],P=b.start,B=b.count;for(let F=P,G=P+B;F<G;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let M=new L,y=new L,A=new L,T=new L;function E(C){A.fromBufferAttribute(i,C),T.copy(A);let v=o[C];M.copy(v),M.sub(A.multiplyScalar(A.dot(v))).normalize(),y.crossVectors(T,v);let P=y.dot(l[C])<0?-1:1;a.setXYZW(C,M.x,M.y,M.z,P)}for(let C=0,v=x.length;C<v;++C){let b=x[C],P=b.start,B=b.count;for(let F=P,G=P+B;F<G;F+=3)E(e.getX(F+0)),E(e.getX(F+1)),E(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new L,r=new L,a=new L,o=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),f=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*u;for(let p=0;p<u;p++)d[_++]=c[f++]}return new on(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ed=new vt,is=new Qa,Ea=new nr,Td=new L,Ta=new L,Aa=new L,Ca=new L,ql=new L,Ra=new L,Ad=new L,Pa=new L,lt=class extends Yt{constructor(e=new yn,t=new ir){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Ra.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(ql.fromBufferAttribute(h,e),a?Ra.addScaledVector(ql,u):Ra.addScaledVector(ql.sub(t),u))}t.add(Ra)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(r),is.copy(e.ray).recast(e.near),!(Ea.containsPoint(is.origin)===!1&&(is.intersectSphere(Ea,Td)===null||is.origin.distanceToSquared(Td)>(e.far-e.near)**2))&&(Ed.copy(r).invert(),is.copy(e.ray).applyMatrix4(Ed),!(n.boundingBox!==null&&is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=a[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,A=M;y<A;y+=3){let T=o.getX(y),E=o.getX(y+1),C=o.getX(y+2);i=Ia(this,p,e,n,c,u,h,T,E,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let x=o.getX(m),M=o.getX(m+1),y=o.getX(m+2);i=Ia(this,a,e,n,c,u,h,x,M,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=a[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,A=M;y<A;y+=3){let T=y,E=y+1,C=y+2;i=Ia(this,p,e,n,c,u,h,T,E,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let x=m,M=m+1,y=m+2;i=Ia(this,a,e,n,c,u,h,x,M,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};qn=class s extends yn{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,f=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(h,2));function _(g,m,p,x,M,y,A,T,E,C,v){let b=y/E,P=A/C,B=y/2,F=A/2,G=T/2,I=E+1,z=C+1,Z=0,H=0,te=new L;for(let se=0;se<z;se++){let de=se*P-F;for(let ye=0;ye<I;ye++){let Ie=ye*b-B;te[g]=Ie*x,te[m]=de*M,te[p]=G,c.push(te.x,te.y,te.z),te[g]=0,te[m]=0,te[p]=T>0?1:-1,u.push(te.x,te.y,te.z),h.push(ye/E),h.push(1-se/C),Z+=1}}for(let se=0;se<C;se++)for(let de=0;de<E;de++){let ye=d+de+I*se,Ie=d+de+I*(se+1),k=d+(de+1)+I*(se+1),j=d+(de+1)+I*se;l.push(ye,Ie,j),l.push(Ie,k,j),H+=6}o.addGroup(f,H,v),f+=H,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};Bg={clone:sr,merge:jt},zg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yn=class extends ki{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zg,this.fragmentShader=kg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sr(e.uniforms),this.uniformsGroups=Fg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},io=class extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Di=new L,Cd=new He,Rd=new He,Xt=class extends io{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Wc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ya*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wc*2*Math.atan(Math.tan(Ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,t){return this.getViewBounds(e,Cd,Rd),t.subVectors(Rd,Cd)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ya*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Gs=-90,Ws=1,Zc=class extends Yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Xt(Gs,Ws,e,t);i.layers=this.layers,this.add(i);let r=new Xt(Gs,Ws,e,t);r.layers=this.layers,this.add(r);let a=new Xt(Gs,Ws,e,t);a.layers=this.layers,this.add(a);let o=new Xt(Gs,Ws,e,t);o.layers=this.layers,this.add(o);let l=new Xt(Gs,Ws,e,t);l.layers=this.layers,this.add(l);let c=new Xt(Gs,Ws,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===ui)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$a)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},so=class extends Tn{constructor(e,t,n,i,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ks,super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$c=class extends pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new so(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new qn(5,5,5),r=new Yn({name:"CubemapFromEquirect",uniforms:sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:Ni});r.uniforms.tEquirect.value=t;let a=new lt(i,r),o=t.minFilter;return t.minFilter===hs&&(t.minFilter=Wn),new Zc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},Yl=new L,Vg=new L,Hg=new Ne,Dn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Yl.subVectors(n,t).cross(Vg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Yl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Hg.getNormalMatrix(e),i=this.coplanarPoint(Yl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ss=new nr,Da=new L,Vr=class{constructor(e=new Dn,t=new Dn,n=new Dn,i=new Dn,r=new Dn,a=new Dn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ui){let n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],_=i[9],g=i[10],m=i[11],p=i[12],x=i[13],M=i[14],y=i[15];if(n[0].setComponents(l-r,d-c,m-f,y-p).normalize(),n[1].setComponents(l+r,d+c,m+f,y+p).normalize(),n[2].setComponents(l+a,d+u,m+_,y+x).normalize(),n[3].setComponents(l-a,d-u,m-_,y-x).normalize(),n[4].setComponents(l-o,d-h,m-g,y-M).normalize(),t===ui)n[5].setComponents(l+o,d+h,m+g,y+M).normalize();else if(t===$a)n[5].setComponents(o,h,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){return ss.center.set(0,0,0),ss.radius=.7071067811865476,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Da.x=i.normal.x>0?e.max.x:e.min.x,Da.y=i.normal.y>0?e.max.y:e.min.y,Da.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Da)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};rr=class s extends yn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,f=[],_=[],g=[],m=[];for(let p=0;p<u;p++){let x=p*d-a;for(let M=0;M<c;M++){let y=M*h-r;_.push(y,-x,0),g.push(0,0,1),m.push(M/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){let M=x+c*p,y=x+c*(p+1),A=x+1+c*(p+1),T=x+1+c*p;f.push(M,y,T),f.push(y,A,T)}this.setIndex(f),this.setAttribute("position",new Tt(_,3)),this.setAttribute("normal",new Tt(g,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Wg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$g=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,e0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,t0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,n0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,i0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,s0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,c0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,u0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,h0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,d0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,f0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,p0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,m0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,g0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v0="gl_FragColor = linearToOutputTexel( gl_FragColor );",M0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,b0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,S0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,w0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,E0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,A0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,C0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,R0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,I0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,D0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,U0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,O0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,F0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,B0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,z0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,V0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,H0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,G0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,W0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,X0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,q0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Y0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,J0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Q0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,i_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,a_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,l_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,c_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,d_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,f_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,p_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,m_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,__=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,x_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,v_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,T_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,A_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,C_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,R_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,I_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,D_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,L_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,N_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,F_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,B_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,k_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,V_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,H_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,G_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,J_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,j_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,K_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ey=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ty=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ny=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ry=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ay=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ly=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,py=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,my=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_y=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,My=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,by=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:Wg,alphahash_pars_fragment:Xg,alphamap_fragment:qg,alphamap_pars_fragment:Yg,alphatest_fragment:Zg,alphatest_pars_fragment:$g,aomap_fragment:Jg,aomap_pars_fragment:jg,batching_pars_vertex:Kg,batching_vertex:Qg,begin_vertex:e0,beginnormal_vertex:t0,bsdfs:n0,iridescence_fragment:i0,bumpmap_pars_fragment:s0,clipping_planes_fragment:r0,clipping_planes_pars_fragment:a0,clipping_planes_pars_vertex:o0,clipping_planes_vertex:l0,color_fragment:c0,color_pars_fragment:u0,color_pars_vertex:h0,color_vertex:d0,common:f0,cube_uv_reflection_fragment:p0,defaultnormal_vertex:m0,displacementmap_pars_vertex:g0,displacementmap_vertex:_0,emissivemap_fragment:y0,emissivemap_pars_fragment:x0,colorspace_fragment:v0,colorspace_pars_fragment:M0,envmap_fragment:b0,envmap_common_pars_fragment:S0,envmap_pars_fragment:w0,envmap_pars_vertex:E0,envmap_physical_pars_fragment:O0,envmap_vertex:T0,fog_vertex:A0,fog_pars_vertex:C0,fog_fragment:R0,fog_pars_fragment:P0,gradientmap_pars_fragment:I0,lightmap_pars_fragment:D0,lights_lambert_fragment:L0,lights_lambert_pars_fragment:U0,lights_pars_begin:N0,lights_toon_fragment:F0,lights_toon_pars_fragment:B0,lights_phong_fragment:z0,lights_phong_pars_fragment:k0,lights_physical_fragment:V0,lights_physical_pars_fragment:H0,lights_fragment_begin:G0,lights_fragment_maps:W0,lights_fragment_end:X0,logdepthbuf_fragment:q0,logdepthbuf_pars_fragment:Y0,logdepthbuf_pars_vertex:Z0,logdepthbuf_vertex:$0,map_fragment:J0,map_pars_fragment:j0,map_particle_fragment:K0,map_particle_pars_fragment:Q0,metalnessmap_fragment:e_,metalnessmap_pars_fragment:t_,morphinstance_vertex:n_,morphcolor_vertex:i_,morphnormal_vertex:s_,morphtarget_pars_vertex:r_,morphtarget_vertex:a_,normal_fragment_begin:o_,normal_fragment_maps:l_,normal_pars_fragment:c_,normal_pars_vertex:u_,normal_vertex:h_,normalmap_pars_fragment:d_,clearcoat_normal_fragment_begin:f_,clearcoat_normal_fragment_maps:p_,clearcoat_pars_fragment:m_,iridescence_pars_fragment:g_,opaque_fragment:__,packing:y_,premultiplied_alpha_fragment:x_,project_vertex:v_,dithering_fragment:M_,dithering_pars_fragment:b_,roughnessmap_fragment:S_,roughnessmap_pars_fragment:w_,shadowmap_pars_fragment:E_,shadowmap_pars_vertex:T_,shadowmap_vertex:A_,shadowmask_pars_fragment:C_,skinbase_vertex:R_,skinning_pars_vertex:P_,skinning_vertex:I_,skinnormal_vertex:D_,specularmap_fragment:L_,specularmap_pars_fragment:U_,tonemapping_fragment:N_,tonemapping_pars_fragment:O_,transmission_fragment:F_,transmission_pars_fragment:B_,uv_pars_fragment:z_,uv_pars_vertex:k_,uv_vertex:V_,worldpos_vertex:H_,background_vert:G_,background_frag:W_,backgroundCube_vert:X_,backgroundCube_frag:q_,cube_vert:Y_,cube_frag:Z_,depth_vert:$_,depth_frag:J_,distanceRGBA_vert:j_,distanceRGBA_frag:K_,equirect_vert:Q_,equirect_frag:ey,linedashed_vert:ty,linedashed_frag:ny,meshbasic_vert:iy,meshbasic_frag:sy,meshlambert_vert:ry,meshlambert_frag:ay,meshmatcap_vert:oy,meshmatcap_frag:ly,meshnormal_vert:cy,meshnormal_frag:uy,meshphong_vert:hy,meshphong_frag:dy,meshphysical_vert:fy,meshphysical_frag:py,meshtoon_vert:my,meshtoon_frag:gy,points_vert:_y,points_frag:yy,shadow_vert:xy,shadow_frag:vy,sprite_vert:My,sprite_frag:by},re={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Gn={basic:{uniforms:jt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:jt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ze(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:jt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:jt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:jt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new ze(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:jt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:jt([re.points,re.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:jt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:jt([re.common,re.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:jt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:jt([re.sprite,re.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:jt([re.common,re.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:jt([re.lights,re.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Gn.physical={uniforms:jt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};La={r:0,b:0,g:0},rs=new Xn,Sy=new vt;ro=class extends io{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},qs=4,Pd=[.125,.215,.35,.446,.526,.582],cs=20,Zl=new ro,Id=new ze,$l=null,Jl=0,jl=0,Kl=!1,os=(1+Math.sqrt(5))/2,Xs=1/os,Dd=[new L(-os,Xs,0),new L(os,Xs,0),new L(-Xs,0,os),new L(Xs,0,os),new L(0,os,-Xs),new L(0,os,Xs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],ar=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){$l=this._renderer.getRenderTarget(),Jl=this._renderer.getActiveCubeFace(),jl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($l,Jl,jl),this._renderer.xr.enabled=Kl,e.scissorTest=!1,Ua(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ks||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$l=this._renderer.getRenderTarget(),Jl=this._renderer.getActiveCubeFace(),jl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:Xr,format:Un,colorSpace:cr,depthBuffer:!1},i=Ld(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ld(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Py(r)),this._blurMaterial=Iy(r,e,t)}return i}_compileMaterial(e){let t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,Zl)}_sceneToCubeUV(e,t,n,i){let o=new Xt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Id),u.toneMapping=Oi,u.autoClear=!1;let f=new ir({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),_=new lt(new qn,f),g=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,g=!0):(f.color.copy(Id),g=!0);for(let p=0;p<6;p++){let x=p%3;x===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):x===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let M=this._cubeSize;Ua(i,x*M,p>2?M:0,M,M),u.setRenderTarget(i),g&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Ks||e.mapping===Qs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ud());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new lt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ua(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Zl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Dd[(i-r-1)%Dd.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new lt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*cs-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):cs;m>cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${cs}`);let p=[],x=0;for(let E=0;E<cs;++E){let C=E/g,v=Math.exp(-C*C/2);p.push(v),E===0?x+=v:E<m&&(x+=2*v)}for(let E=0;E<p.length;E++)p[E]=p[E]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-n;let y=this._sizeLods[i],A=3*y*(i>M-qs?i-M+qs:0),T=4*(this._cubeSize-y);Ua(t,A,T,3*y,2*y),l.setRenderTarget(t),l.render(h,Zl)}};ao=class extends Tn{constructor(e,t,n,i,r,a,o,l,c,u=Zs){if(u!==Zs&&u!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Zs&&(n=ds),n===void 0&&u===tr&&(n=er),super(null,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Nn,this.minFilter=l!==void 0?l:Nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Af=new Tn,Od=new ao(1,1),Cf=new Ka,Rf=new Yc,Pf=new so,Fd=[],Bd=[],zd=new Float32Array(16),kd=new Float32Array(9),Vd=new Float32Array(4);Jc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sx(t.type)}},jc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wx(t.type)}},Kc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Ql=/(\w+)(\])?(\[|\.)?/g;Js=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Ex(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};Tx=37297,Ax=0;Wd=new Ne;Na=new L;Ox=/^[ \t]*#include +<([\w\d./]+)>/gm;Fx=new Map;zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Yx=0,eu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new tu(e),t.set(e,n)),n}},tu=class{constructor(e){this.id=Yx++,this.code=e,this.usedTimes=0}};ev=0;nu=class extends ki{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ug,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},iu=class extends ki{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},sv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;ov={[ac]:oc,[lc]:hc,[cc]:dc,[js]:uc,[oc]:ac,[hc]:lc,[dc]:cc,[uc]:js};su=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},hi=class extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},dv={type:"move"},zr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new hi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},fv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ru=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new Tn,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Yn({vertexShader:fv,fragmentShader:pv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new rr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},au=class extends Bi{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,_=null,g=new ru,m=t.getContextAttributes(),p=null,x=null,M=[],y=[],A=new He,T=null,E=new Xt;E.viewport=new st;let C=new Xt;C.viewport=new st;let v=[E,C],b=new su,P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let j=M[k];return j===void 0&&(j=new zr,M[k]=j),j.getTargetRaySpace()},this.getControllerGrip=function(k){let j=M[k];return j===void 0&&(j=new zr,M[k]=j),j.getGripSpace()},this.getHand=function(k){let j=M[k];return j===void 0&&(j=new zr,M[k]=j),j.getHandSpace()};function F(k){let j=y.indexOf(k.inputSource);if(j===-1)return;let fe=M[j];fe!==void 0&&(fe.update(k.inputSource,k.frame,c||a),fe.dispatchEvent({type:k.type,data:k.inputSource}))}function G(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",I);for(let k=0;k<M.length;k++){let j=y[k];j!==null&&(y[k]=null,M[k].disconnect(j))}P=null,B=null,g.reset(),e.setRenderTarget(p),f=null,d=null,h=null,i=null,x=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",G),i.addEventListener("inputsourceschange",I),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(A),i.renderState.layers===void 0){let j={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,j),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new pi(f.framebufferWidth,f.framebufferHeight,{format:Un,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let j=null,fe=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=m.stencil?tr:Zs,fe=m.stencil?er:ds);let Ce={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(Ce),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new pi(d.textureWidth,d.textureHeight,{format:Un,type:fi,depthTexture:new ao(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ie.setContext(i),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function I(k){for(let j=0;j<k.removed.length;j++){let fe=k.removed[j],ae=y.indexOf(fe);ae>=0&&(y[ae]=null,M[ae].disconnect(fe))}for(let j=0;j<k.added.length;j++){let fe=k.added[j],ae=y.indexOf(fe);if(ae===-1){for(let De=0;De<M.length;De++)if(De>=y.length){y.push(fe),ae=De;break}else if(y[De]===null){y[De]=fe,ae=De;break}if(ae===-1)break}let Ce=M[ae];Ce&&Ce.connect(fe)}}let z=new L,Z=new L;function H(k,j,fe){z.setFromMatrixPosition(j.matrixWorld),Z.setFromMatrixPosition(fe.matrixWorld);let ae=z.distanceTo(Z),Ce=j.projectionMatrix.elements,De=fe.projectionMatrix.elements,Be=Ce[14]/(Ce[10]-1),gt=Ce[14]/(Ce[10]+1),qe=(Ce[9]+1)/Ce[5],wt=(Ce[9]-1)/Ce[5],O=(Ce[8]-1)/Ce[0],xn=(De[8]+1)/De[0],Ge=Be*O,We=Be*xn,Te=ae/(-O+xn),ht=Te*-O;if(j.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(ht),k.translateZ(Te),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),Ce[10]===-1)k.projectionMatrix.copy(j.projectionMatrix),k.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let Ee=Be+Te,R=gt+Te,S=Ge-ht,V=We+(ae-ht),K=qe*gt/R*Ee,ee=wt*gt/R*Ee;k.projectionMatrix.makePerspective(S,V,K,ee,Ee,R),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function te(k,j){j===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(j.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;let j=k.near,fe=k.far;g.texture!==null&&(g.depthNear>0&&(j=g.depthNear),g.depthFar>0&&(fe=g.depthFar)),b.near=C.near=E.near=j,b.far=C.far=E.far=fe,(P!==b.near||B!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,B=b.far),E.layers.mask=k.layers.mask|2,C.layers.mask=k.layers.mask|4,b.layers.mask=E.layers.mask|C.layers.mask;let ae=k.parent,Ce=b.cameras;te(b,ae);for(let De=0;De<Ce.length;De++)te(Ce[De],ae);Ce.length===2?H(b,E,C):b.projectionMatrix.copy(E.projectionMatrix),se(k,b,ae)};function se(k,j,fe){fe===null?k.matrix.copy(j.matrixWorld):(k.matrix.copy(fe.matrixWorld),k.matrix.invert(),k.matrix.multiply(j.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(j.projectionMatrix),k.projectionMatrixInverse.copy(j.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Wc*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(k){l=k,d!==null&&(d.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(b)};let de=null;function ye(k,j){if(u=j.getViewerPose(c||a),_=j,u!==null){let fe=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let ae=!1;fe.length!==b.cameras.length&&(b.cameras.length=0,ae=!0);for(let De=0;De<fe.length;De++){let Be=fe[De],gt=null;if(f!==null)gt=f.getViewport(Be);else{let wt=h.getViewSubImage(d,Be);gt=wt.viewport,De===0&&(e.setRenderTargetTextures(x,wt.colorTexture,d.ignoreDepthValues?void 0:wt.depthStencilTexture),e.setRenderTarget(x))}let qe=v[De];qe===void 0&&(qe=new Xt,qe.layers.enable(De),qe.viewport=new st,v[De]=qe),qe.matrix.fromArray(Be.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(Be.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(gt.x,gt.y,gt.width,gt.height),De===0&&(b.matrix.copy(qe.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ae===!0&&b.cameras.push(qe)}let Ce=i.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){let De=h.getDepthInformation(fe[0]);De&&De.isValid&&De.texture&&g.init(e,De,i.renderState)}}for(let fe=0;fe<M.length;fe++){let ae=y[fe],Ce=M[fe];ae!==null&&Ce!==void 0&&Ce.update(ae,j,c||a)}de&&de(k,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),_=null}let Ie=new Tf;Ie.setAnimationLoop(ye),this.setAnimationLoop=function(k){de=k},this.dispose=function(){}}},as=new Xn,mv=new vt;oo=class{constructor(e={}){let{canvas:t=Mg(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let _=new Uint32Array(4),g=new Int32Array(4),m=null,p=null,x=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=En,this.toneMapping=Oi,this.toneMappingExposure=1;let y=this,A=!1,T=0,E=0,C=null,v=-1,b=null,P=new st,B=new st,F=null,G=new ze(0),I=0,z=t.width,Z=t.height,H=1,te=null,se=null,de=new st(0,0,z,Z),ye=new st(0,0,z,Z),Ie=!1,k=new Vr,j=!1,fe=!1,ae=new vt,Ce=new vt,De=new L,Be=new st,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function wt(){return C===null?H:1}let O=n;function xn(w,U){return t.getContext(w,U)}try{let w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",ce,!1),O===null){let U="webgl2";if(O=xn(U,w),O===null)throw xn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ge,We,Te,ht,Ee,R,S,V,K,ee,J,be,le,pe,Ye,ne,me,Ae,Re,ge,Xe,Oe,ct,D;function oe(){Ge=new Ly(O),Ge.init(),Oe=new hv(O,Ge),We=new Ay(O,Ge,e,Oe),Te=new lv(O,Ge),We.reverseDepthBuffer&&d&&Te.buffers.depth.setReversed(!0),ht=new Oy(O),Ee=new $x,R=new uv(O,Ge,Te,Ee,We,Oe,ht),S=new Ry(y),V=new Dy(y),K=new Gg(O),ct=new Ey(O,K),ee=new Uy(O,K,ht,ct),J=new By(O,ee,K,ht),Re=new Fy(O,We,R),ne=new Cy(Ee),be=new Zx(y,S,V,Ge,We,ct,ne),le=new gv(y,Ee),pe=new jx,Ye=new iv(Ge),Ae=new wy(y,S,V,Te,J,f,l),me=new av(y,J,We),D=new _v(O,ht,We,Te),ge=new Ty(O,Ge,ht),Xe=new Ny(O,Ge,ht),ht.programs=be.programs,y.capabilities=We,y.extensions=Ge,y.properties=Ee,y.renderLists=pe,y.shadowMap=me,y.state=Te,y.info=ht}oe();let Y=new au(y,O);this.xr=Y,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let w=Ge.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ge.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(w){w!==void 0&&(H=w,this.setSize(z,Z,!1))},this.getSize=function(w){return w.set(z,Z)},this.setSize=function(w,U,W=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=w,Z=U,t.width=Math.floor(w*H),t.height=Math.floor(U*H),W===!0&&(t.style.width=w+"px",t.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(z*H,Z*H).floor()},this.setDrawingBufferSize=function(w,U,W){z=w,Z=U,H=W,t.width=Math.floor(w*W),t.height=Math.floor(U*W),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(de)},this.setViewport=function(w,U,W,q){w.isVector4?de.set(w.x,w.y,w.z,w.w):de.set(w,U,W,q),Te.viewport(P.copy(de).multiplyScalar(H).round())},this.getScissor=function(w){return w.copy(ye)},this.setScissor=function(w,U,W,q){w.isVector4?ye.set(w.x,w.y,w.z,w.w):ye.set(w,U,W,q),Te.scissor(B.copy(ye).multiplyScalar(H).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(w){Te.setScissorTest(Ie=w)},this.setOpaqueSort=function(w){te=w},this.setTransparentSort=function(w){se=w},this.getClearColor=function(w){return w.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(w=!0,U=!0,W=!0){let q=0;if(w){let N=!1;if(C!==null){let ie=C.texture.format;N=ie===Cu||ie===Au||ie===Tu}if(N){let ie=C.texture.type,ue=ie===fi||ie===ds||ie===kr||ie===er||ie===wu||ie===Eu,xe=Ae.getClearColor(),ve=Ae.getClearAlpha(),Pe=xe.r,Ue=xe.g,Me=xe.b;ue?(_[0]=Pe,_[1]=Ue,_[2]=Me,_[3]=ve,O.clearBufferuiv(O.COLOR,0,_)):(g[0]=Pe,g[1]=Ue,g[2]=Me,g[3]=ve,O.clearBufferiv(O.COLOR,0,g))}else q|=O.COLOR_BUFFER_BIT}U&&(q|=O.DEPTH_BUFFER_BIT),W&&(q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),pe.dispose(),Ye.dispose(),Ee.dispose(),S.dispose(),V.dispose(),J.dispose(),ct.dispose(),D.dispose(),be.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Vu),Y.removeEventListener("sessionend",Hu),Wi.stop()};function Q(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let w=ht.autoReset,U=me.enabled,W=me.autoUpdate,q=me.needsUpdate,N=me.type;oe(),ht.autoReset=w,me.enabled=U,me.autoUpdate=W,me.needsUpdate=q,me.type=N}function ce(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Le(w){let U=w.target;U.removeEventListener("dispose",Le),Mt(U)}function Mt(w){zt(w),Ee.remove(w)}function zt(w){let U=Ee.get(w).programs;U!==void 0&&(U.forEach(function(W){be.releaseProgram(W)}),w.isShaderMaterial&&be.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,W,q,N,ie){U===null&&(U=gt);let ue=N.isMesh&&N.matrixWorld.determinant()<0,xe=Yf(w,U,W,q,N);Te.setMaterial(q,ue);let ve=W.index,Pe=1;if(q.wireframe===!0){if(ve=ee.getWireframeAttribute(W),ve===void 0)return;Pe=2}let Ue=W.drawRange,Me=W.attributes.position,Je=Ue.start*Pe,ut=(Ue.start+Ue.count)*Pe;ie!==null&&(Je=Math.max(Je,ie.start*Pe),ut=Math.min(ut,(ie.start+ie.count)*Pe)),ve!==null?(Je=Math.max(Je,0),ut=Math.min(ut,ve.count)):Me!=null&&(Je=Math.max(Je,0),ut=Math.min(ut,Me.count));let dt=ut-Je;if(dt<0||dt===1/0)return;ct.setup(N,q,xe,W,ve);let Kt,je=ge;if(ve!==null&&(Kt=K.get(ve),je=Xe,je.setIndex(Kt)),N.isMesh)q.wireframe===!0?(Te.setLineWidth(q.wireframeLinewidth*wt()),je.setMode(O.LINES)):je.setMode(O.TRIANGLES);else if(N.isLine){let Se=q.linewidth;Se===void 0&&(Se=1),Te.setLineWidth(Se*wt()),N.isLineSegments?je.setMode(O.LINES):N.isLineLoop?je.setMode(O.LINE_LOOP):je.setMode(O.LINE_STRIP)}else N.isPoints?je.setMode(O.POINTS):N.isSprite&&je.setMode(O.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)je.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))je.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Se=N._multiDrawStarts,jn=N._multiDrawCounts,Ke=N._multiDrawCount,Cn=ve?K.get(ve).bytesPerElement:1,Ms=Ee.get(q).currentProgram.getUniforms();for(let hn=0;hn<Ke;hn++)Ms.setValue(O,"_gl_DrawID",hn),je.render(Se[hn]/Cn,jn[hn])}else if(N.isInstancedMesh)je.renderInstances(Je,dt,N.count);else if(W.isInstancedBufferGeometry){let Se=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,jn=Math.min(W.instanceCount,Se);je.renderInstances(Je,dt,jn)}else je.render(Je,dt)};function Qe(w,U,W){w.transparent===!0&&w.side===Ln&&w.forceSinglePass===!1?(w.side=qt,w.needsUpdate=!0,$r(w,U,W),w.side=Fi,w.needsUpdate=!0,$r(w,U,W),w.side=Ln):$r(w,U,W)}this.compile=function(w,U,W=null){W===null&&(W=w),p=Ye.get(W),p.init(U),M.push(p),W.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),w!==W&&w.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let q=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let ie=N.material;if(ie)if(Array.isArray(ie))for(let ue=0;ue<ie.length;ue++){let xe=ie[ue];Qe(xe,W,N),q.add(xe)}else Qe(ie,W,N),q.add(ie)}),M.pop(),p=null,q},this.compileAsync=function(w,U,W=null){let q=this.compile(w,U,W);return new Promise(N=>{function ie(){if(q.forEach(function(ue){Ee.get(ue).currentProgram.isReady()&&q.delete(ue)}),q.size===0){N(w);return}setTimeout(ie,10)}Ge.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let An=null;function Jn(w){An&&An(w)}function Vu(){Wi.stop()}function Hu(){Wi.start()}let Wi=new Tf;Wi.setAnimationLoop(Jn),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(w){An=w,Y.setAnimationLoop(w),w===null?Wi.stop():Wi.start()},Y.addEventListener("sessionstart",Vu),Y.addEventListener("sessionend",Hu),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(U),U=Y.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,U,C),p=Ye.get(w,M.length),p.init(U),M.push(p),Ce.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),k.setFromProjectionMatrix(Ce),fe=this.localClippingEnabled,j=ne.init(this.clippingPlanes,fe),m=pe.get(w,x.length),m.init(),x.push(m),Y.enabled===!0&&Y.isPresenting===!0){let ie=y.xr.getDepthSensingMesh();ie!==null&&Do(ie,U,-1/0,y.sortObjects)}Do(w,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(te,se),qe=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,qe&&Ae.addToRenderList(m,w),this.info.render.frame++,j===!0&&ne.beginShadows();let W=p.state.shadowsArray;me.render(W,w,U),j===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){let ie=U.cameras;if(N.length>0)for(let ue=0,xe=ie.length;ue<xe;ue++){let ve=ie[ue];Wu(q,N,w,ve)}qe&&Ae.render(w);for(let ue=0,xe=ie.length;ue<xe;ue++){let ve=ie[ue];Gu(m,w,ve,ve.viewport)}}else N.length>0&&Wu(q,N,w,U),qe&&Ae.render(w),Gu(m,w,U);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(y,w,U),ct.resetDefaultState(),v=-1,b=null,M.pop(),M.length>0?(p=M[M.length-1],j===!0&&ne.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Do(w,U,W,q){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||k.intersectsSprite(w)){q&&Be.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ce);let ue=J.update(w),xe=w.material;xe.visible&&m.push(w,ue,xe,W,Be.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||k.intersectsObject(w))){let ue=J.update(w),xe=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Be.copy(w.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Be.copy(ue.boundingSphere.center)),Be.applyMatrix4(w.matrixWorld).applyMatrix4(Ce)),Array.isArray(xe)){let ve=ue.groups;for(let Pe=0,Ue=ve.length;Pe<Ue;Pe++){let Me=ve[Pe],Je=xe[Me.materialIndex];Je&&Je.visible&&m.push(w,ue,Je,W,Be.z,Me)}}else xe.visible&&m.push(w,ue,xe,W,Be.z,null)}}let ie=w.children;for(let ue=0,xe=ie.length;ue<xe;ue++)Do(ie[ue],U,W,q)}function Gu(w,U,W,q){let N=w.opaque,ie=w.transmissive,ue=w.transparent;p.setupLightsView(W),j===!0&&ne.setGlobalState(y.clippingPlanes,W),q&&Te.viewport(P.copy(q)),N.length>0&&Zr(N,U,W),ie.length>0&&Zr(ie,U,W),ue.length>0&&Zr(ue,U,W),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Wu(w,U,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new pi(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?Xr:fi,minFilter:hs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));let ie=p.state.transmissionRenderTarget[q.id],ue=q.viewport||P;ie.setSize(ue.z,ue.w);let xe=y.getRenderTarget();y.setRenderTarget(ie),y.getClearColor(G),I=y.getClearAlpha(),I<1&&y.setClearColor(16777215,.5),y.clear(),qe&&Ae.render(W);let ve=y.toneMapping;y.toneMapping=Oi;let Pe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),j===!0&&ne.setGlobalState(y.clippingPlanes,q),Zr(w,W,q),R.updateMultisampleRenderTarget(ie),R.updateRenderTargetMipmap(ie),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Me=0,Je=U.length;Me<Je;Me++){let ut=U[Me],dt=ut.object,Kt=ut.geometry,je=ut.material,Se=ut.group;if(je.side===Ln&&dt.layers.test(q.layers)){let jn=je.side;je.side=qt,je.needsUpdate=!0,Xu(dt,W,q,Kt,je,Se),je.side=jn,je.needsUpdate=!0,Ue=!0}}Ue===!0&&(R.updateMultisampleRenderTarget(ie),R.updateRenderTargetMipmap(ie))}y.setRenderTarget(xe),y.setClearColor(G,I),Pe!==void 0&&(q.viewport=Pe),y.toneMapping=ve}function Zr(w,U,W){let q=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ie=w.length;N<ie;N++){let ue=w[N],xe=ue.object,ve=ue.geometry,Pe=q===null?ue.material:q,Ue=ue.group;xe.layers.test(W.layers)&&Xu(xe,U,W,ve,Pe,Ue)}}function Xu(w,U,W,q,N,ie){w.onBeforeRender(y,U,W,q,N,ie),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(y,U,W,q,w,ie),N.transparent===!0&&N.side===Ln&&N.forceSinglePass===!1?(N.side=qt,N.needsUpdate=!0,y.renderBufferDirect(W,U,q,N,w,ie),N.side=Fi,N.needsUpdate=!0,y.renderBufferDirect(W,U,q,N,w,ie),N.side=Ln):y.renderBufferDirect(W,U,q,N,w,ie),w.onAfterRender(y,U,W,q,N,ie)}function $r(w,U,W){U.isScene!==!0&&(U=gt);let q=Ee.get(w),N=p.state.lights,ie=p.state.shadowsArray,ue=N.state.version,xe=be.getParameters(w,N.state,ie,U,W),ve=be.getProgramCacheKey(xe),Pe=q.programs;q.environment=w.isMeshStandardMaterial?U.environment:null,q.fog=U.fog,q.envMap=(w.isMeshStandardMaterial?V:S).get(w.envMap||q.environment),q.envMapRotation=q.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Pe===void 0&&(w.addEventListener("dispose",Le),Pe=new Map,q.programs=Pe);let Ue=Pe.get(ve);if(Ue!==void 0){if(q.currentProgram===Ue&&q.lightsStateVersion===ue)return Yu(w,xe),Ue}else xe.uniforms=be.getUniforms(w),w.onBeforeCompile(xe,y),Ue=be.acquireProgram(xe,ve),Pe.set(ve,Ue),q.uniforms=xe.uniforms;let Me=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Me.clippingPlanes=ne.uniform),Yu(w,xe),q.needsLights=$f(w),q.lightsStateVersion=ue,q.needsLights&&(Me.ambientLightColor.value=N.state.ambient,Me.lightProbe.value=N.state.probe,Me.directionalLights.value=N.state.directional,Me.directionalLightShadows.value=N.state.directionalShadow,Me.spotLights.value=N.state.spot,Me.spotLightShadows.value=N.state.spotShadow,Me.rectAreaLights.value=N.state.rectArea,Me.ltc_1.value=N.state.rectAreaLTC1,Me.ltc_2.value=N.state.rectAreaLTC2,Me.pointLights.value=N.state.point,Me.pointLightShadows.value=N.state.pointShadow,Me.hemisphereLights.value=N.state.hemi,Me.directionalShadowMap.value=N.state.directionalShadowMap,Me.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Me.spotShadowMap.value=N.state.spotShadowMap,Me.spotLightMatrix.value=N.state.spotLightMatrix,Me.spotLightMap.value=N.state.spotLightMap,Me.pointShadowMap.value=N.state.pointShadowMap,Me.pointShadowMatrix.value=N.state.pointShadowMatrix),q.currentProgram=Ue,q.uniformsList=null,Ue}function qu(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=Js.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Yu(w,U){let W=Ee.get(w);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function Yf(w,U,W,q,N){U.isScene!==!0&&(U=gt),R.resetTextureUnits();let ie=U.fog,ue=q.isMeshStandardMaterial?U.environment:null,xe=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:cr,ve=(q.isMeshStandardMaterial?V:S).get(q.envMap||ue),Pe=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ue=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Me=!!W.morphAttributes.position,Je=!!W.morphAttributes.normal,ut=!!W.morphAttributes.color,dt=Oi;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(dt=y.toneMapping);let Kt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,je=Kt!==void 0?Kt.length:0,Se=Ee.get(q),jn=p.state.lights;if(j===!0&&(fe===!0||w!==b)){let vn=w===b&&q.id===v;ne.setState(q,w,vn)}let Ke=!1;q.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==jn.state.version||Se.outputColorSpace!==xe||N.isBatchedMesh&&Se.batching===!1||!N.isBatchedMesh&&Se.batching===!0||N.isBatchedMesh&&Se.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Se.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Se.instancing===!1||!N.isInstancedMesh&&Se.instancing===!0||N.isSkinnedMesh&&Se.skinning===!1||!N.isSkinnedMesh&&Se.skinning===!0||N.isInstancedMesh&&Se.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Se.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Se.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Se.instancingMorph===!1&&N.morphTexture!==null||Se.envMap!==ve||q.fog===!0&&Se.fog!==ie||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==ne.numPlanes||Se.numIntersection!==ne.numIntersection)||Se.vertexAlphas!==Pe||Se.vertexTangents!==Ue||Se.morphTargets!==Me||Se.morphNormals!==Je||Se.morphColors!==ut||Se.toneMapping!==dt||Se.morphTargetsCount!==je)&&(Ke=!0):(Ke=!0,Se.__version=q.version);let Cn=Se.currentProgram;Ke===!0&&(Cn=$r(q,U,N));let Ms=!1,hn=!1,fr=!1,ft=Cn.getUniforms(),Bn=Se.uniforms;if(Te.useProgram(Cn.program)&&(Ms=!0,hn=!0,fr=!0),q.id!==v&&(v=q.id,hn=!0),Ms||b!==w){Te.buffers.depth.getReversed()?(ae.copy(w.projectionMatrix),Sg(ae),wg(ae),ft.setValue(O,"projectionMatrix",ae)):ft.setValue(O,"projectionMatrix",w.projectionMatrix),ft.setValue(O,"viewMatrix",w.matrixWorldInverse);let mi=ft.map.cameraPosition;mi!==void 0&&mi.setValue(O,De.setFromMatrixPosition(w.matrixWorld)),We.logarithmicDepthBuffer&&ft.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ft.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,hn=!0,fr=!0)}if(N.isSkinnedMesh){ft.setOptional(O,N,"bindMatrix"),ft.setOptional(O,N,"bindMatrixInverse");let vn=N.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),ft.setValue(O,"boneTexture",vn.boneTexture,R))}N.isBatchedMesh&&(ft.setOptional(O,N,"batchingTexture"),ft.setValue(O,"batchingTexture",N._matricesTexture,R),ft.setOptional(O,N,"batchingIdTexture"),ft.setValue(O,"batchingIdTexture",N._indirectTexture,R),ft.setOptional(O,N,"batchingColorTexture"),N._colorsTexture!==null&&ft.setValue(O,"batchingColorTexture",N._colorsTexture,R));let pr=W.morphAttributes;if((pr.position!==void 0||pr.normal!==void 0||pr.color!==void 0)&&Re.update(N,W,Cn),(hn||Se.receiveShadow!==N.receiveShadow)&&(Se.receiveShadow=N.receiveShadow,ft.setValue(O,"receiveShadow",N.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Bn.envMap.value=ve,Bn.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&U.environment!==null&&(Bn.envMapIntensity.value=U.environmentIntensity),hn&&(ft.setValue(O,"toneMappingExposure",y.toneMappingExposure),Se.needsLights&&Zf(Bn,fr),ie&&q.fog===!0&&le.refreshFogUniforms(Bn,ie),le.refreshMaterialUniforms(Bn,q,H,Z,p.state.transmissionRenderTarget[w.id]),Js.upload(O,qu(Se),Bn,R)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Js.upload(O,qu(Se),Bn,R),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ft.setValue(O,"center",N.center),ft.setValue(O,"modelViewMatrix",N.modelViewMatrix),ft.setValue(O,"normalMatrix",N.normalMatrix),ft.setValue(O,"modelMatrix",N.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let vn=q.uniformsGroups;for(let mi=0,gi=vn.length;mi<gi;mi++){let Zu=vn[mi];D.update(Zu,Cn),D.bind(Zu,Cn)}}return Cn}function Zf(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function $f(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,U,W){Ee.get(w.texture).__webglTexture=U,Ee.get(w.depthTexture).__webglTexture=W;let q=Ee.get(w);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){let W=Ee.get(w);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,W=0){C=w,T=U,E=W;let q=!0,N=null,ie=!1,ue=!1;if(w){let ve=Ee.get(w);if(ve.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(O.FRAMEBUFFER,null),q=!1;else if(ve.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(ve.__hasExternalTextures)R.rebindTextures(w,Ee.get(w.texture).__webglTexture,Ee.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Me=w.depthTexture;if(ve.__boundDepthTexture!==Me){if(Me!==null&&Ee.has(Me)&&(w.width!==Me.image.width||w.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}let Pe=w.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ue=!0);let Ue=Ee.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?N=Ue[U][W]:N=Ue[U],ie=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?N=Ee.get(w).__webglMultisampledFramebuffer:Array.isArray(Ue)?N=Ue[W]:N=Ue,P.copy(w.viewport),B.copy(w.scissor),F=w.scissorTest}else P.copy(de).multiplyScalar(H).floor(),B.copy(ye).multiplyScalar(H).floor(),F=Ie;if(Te.bindFramebuffer(O.FRAMEBUFFER,N)&&q&&Te.drawBuffers(w,N),Te.viewport(P),Te.scissor(B),Te.setScissorTest(F),ie){let ve=Ee.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,ve.__webglTexture,W)}else if(ue){let ve=Ee.get(w.texture),Pe=U||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,ve.__webglTexture,W||0,Pe)}v=-1},this.readRenderTargetPixels=function(w,U,W,q,N,ie,ue){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ee.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ue!==void 0&&(xe=xe[ue]),xe){Te.bindFramebuffer(O.FRAMEBUFFER,xe);try{let ve=w.texture,Pe=ve.format,Ue=ve.type;if(!We.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-q&&W>=0&&W<=w.height-N&&O.readPixels(U,W,q,N,Oe.convert(Pe),Oe.convert(Ue),ie)}finally{let ve=C!==null?Ee.get(C).__webglFramebuffer:null;Te.bindFramebuffer(O.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(w,U,W,q,N,ie,ue){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Ee.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ue!==void 0&&(xe=xe[ue]),xe){let ve=w.texture,Pe=ve.format,Ue=ve.type;if(!We.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-q&&W>=0&&W<=w.height-N){Te.bindFramebuffer(O.FRAMEBUFFER,xe);let Me=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Me),O.bufferData(O.PIXEL_PACK_BUFFER,ie.byteLength,O.STREAM_READ),O.readPixels(U,W,q,N,Oe.convert(Pe),Oe.convert(Ue),0);let Je=C!==null?Ee.get(C).__webglFramebuffer:null;Te.bindFramebuffer(O.FRAMEBUFFER,Je);let ut=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await bg(O,ut,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Me),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ie),O.deleteBuffer(Me),O.deleteSync(ut),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,W=0){w.isTexture!==!0&&(Fr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);let q=Math.pow(2,-W),N=Math.floor(w.image.width*q),ie=Math.floor(w.image.height*q),ue=U!==null?U.x:0,xe=U!==null?U.y:0;R.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,ue,xe,N,ie),Te.unbindTexture()},this.copyTextureToTexture=function(w,U,W=null,q=null,N=0){w.isTexture!==!0&&(Fr("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,w=arguments[1],U=arguments[2],N=arguments[3]||0,W=null);let ie,ue,xe,ve,Pe,Ue,Me,Je,ut,dt=w.isCompressedTexture?w.mipmaps[N]:w.image;W!==null?(ie=W.max.x-W.min.x,ue=W.max.y-W.min.y,xe=W.isBox3?W.max.z-W.min.z:1,ve=W.min.x,Pe=W.min.y,Ue=W.isBox3?W.min.z:0):(ie=dt.width,ue=dt.height,xe=dt.depth||1,ve=0,Pe=0,Ue=0),q!==null?(Me=q.x,Je=q.y,ut=q.z):(Me=0,Je=0,ut=0);let Kt=Oe.convert(U.format),je=Oe.convert(U.type),Se;U.isData3DTexture?(R.setTexture3D(U,0),Se=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(R.setTexture2DArray(U,0),Se=O.TEXTURE_2D_ARRAY):(R.setTexture2D(U,0),Se=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);let jn=O.getParameter(O.UNPACK_ROW_LENGTH),Ke=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Cn=O.getParameter(O.UNPACK_SKIP_PIXELS),Ms=O.getParameter(O.UNPACK_SKIP_ROWS),hn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,dt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,dt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ve),O.pixelStorei(O.UNPACK_SKIP_ROWS,Pe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ue);let fr=w.isDataArrayTexture||w.isData3DTexture,ft=U.isDataArrayTexture||U.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let Bn=Ee.get(w),pr=Ee.get(U),vn=Ee.get(Bn.__renderTarget),mi=Ee.get(pr.__renderTarget);Te.bindFramebuffer(O.READ_FRAMEBUFFER,vn.__webglFramebuffer),Te.bindFramebuffer(O.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let gi=0;gi<xe;gi++)fr&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ee.get(w).__webglTexture,N,Ue+gi),w.isDepthTexture?(ft&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ee.get(U).__webglTexture,N,ut+gi),O.blitFramebuffer(ve,Pe,ie,ue,Me,Je,ie,ue,O.DEPTH_BUFFER_BIT,O.NEAREST)):ft?O.copyTexSubImage3D(Se,N,Me,Je,ut+gi,ve,Pe,ie,ue):O.copyTexSubImage2D(Se,N,Me,Je,ut+gi,ve,Pe,ie,ue);Te.bindFramebuffer(O.READ_FRAMEBUFFER,null),Te.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ft?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(Se,N,Me,Je,ut,ie,ue,xe,Kt,je,dt.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(Se,N,Me,Je,ut,ie,ue,xe,Kt,dt.data):O.texSubImage3D(Se,N,Me,Je,ut,ie,ue,xe,Kt,je,dt):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,N,Me,Je,ie,ue,Kt,je,dt.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,N,Me,Je,dt.width,dt.height,Kt,dt.data):O.texSubImage2D(O.TEXTURE_2D,N,Me,Je,ie,ue,Kt,je,dt);O.pixelStorei(O.UNPACK_ROW_LENGTH,jn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ke),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Cn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ms),O.pixelStorei(O.UNPACK_SKIP_IMAGES,hn),N===0&&U.generateMipmaps&&O.generateMipmap(Se),Te.unbindTexture()},this.copyTextureToTexture3D=function(w,U,W=null,q=null,N=0){return w.isTexture!==!0&&(Fr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,q=arguments[1]||null,w=arguments[2],U=arguments[3],N=arguments[4]||0),Fr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,W,q,N)},this.initRenderTarget=function(w){Ee.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),Te.unbindTexture()},this.resetState=function(){T=0,E=0,C=null,Te.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}},or=class extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Hr=class extends ki{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},lo=new L,co=new L,ef=new vt,Nr=new Qa,Oa=new nr,ec=new L,tf=new L,ou=class extends Yt{constructor(e=new yn,t=new Hr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)lo.fromBufferAttribute(t,i-1),co.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=lo.distanceTo(co);e.setAttribute("lineDistance",new Tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(i),Oa.radius+=r,e.ray.intersectsSphere(Oa)===!1)return;ef.copy(i).invert(),Nr.copy(e.ray).applyMatrix4(ef);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let g=f,m=_-1;g<m;g+=c){let p=u.getX(g),x=u.getX(g+1),M=Fa(this,e,Nr,l,p,x);M&&t.push(M)}if(this.isLineLoop){let g=u.getX(_-1),m=u.getX(f),p=Fa(this,e,Nr,l,g,m);p&&t.push(p)}}else{let f=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let g=f,m=_-1;g<m;g+=c){let p=Fa(this,e,Nr,l,g,g+1);p&&t.push(p)}if(this.isLineLoop){let g=Fa(this,e,Nr,l,_-1,f);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};nf=new L,sf=new L,uo=class extends ou{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)nf.fromBufferAttribute(t,i),sf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+nf.distanceTo(sf);e.setAttribute("lineDistance",new Tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ho=class s extends yn{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let u=[],h=[],d=[],f=[],_=0,g=[],m=n/2,p=0;x(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Tt(h,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(f,2));function x(){let y=new L,A=new L,T=0,E=(t-e)/n;for(let C=0;C<=r;C++){let v=[],b=C/r,P=b*(t-e)+e;for(let B=0;B<=i;B++){let F=B/i,G=F*l+o,I=Math.sin(G),z=Math.cos(G);A.x=P*I,A.y=-b*n+m,A.z=P*z,h.push(A.x,A.y,A.z),y.set(I,E,z).normalize(),d.push(y.x,y.y,y.z),f.push(F,1-b),v.push(_++)}g.push(v)}for(let C=0;C<i;C++)for(let v=0;v<r;v++){let b=g[v][C],P=g[v+1][C],B=g[v+1][C+1],F=g[v][C+1];(e>0||v!==0)&&(u.push(b,P,F),T+=3),(t>0||v!==r-1)&&(u.push(P,B,F),T+=3)}c.addGroup(p,T,0),p+=T}function M(y){let A=_,T=new He,E=new L,C=0,v=y===!0?e:t,b=y===!0?1:-1;for(let B=1;B<=i;B++)h.push(0,m*b,0),d.push(0,b,0),f.push(.5,.5),_++;let P=_;for(let B=0;B<=i;B++){let G=B/i*l+o,I=Math.cos(G),z=Math.sin(G);E.x=v*z,E.y=m*b,E.z=v*I,h.push(E.x,E.y,E.z),d.push(0,b,0),T.x=I*.5+.5,T.y=z*.5*b+.5,f.push(T.x,T.y),_++}for(let B=0;B<i;B++){let F=A+B,G=P+B;y===!0?u.push(G,G+1,F):u.push(G+1,G,F),C+=3}c.addGroup(p,C,y===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},lu=class s extends yn{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),c(n),u(),this.setAttribute("position",new Tt(r,3)),this.setAttribute("normal",new Tt(r.slice(),3)),this.setAttribute("uv",new Tt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let M=new L,y=new L,A=new L;for(let T=0;T<t.length;T+=3)f(t[T+0],M),f(t[T+1],y),f(t[T+2],A),l(M,y,A,x)}function l(x,M,y,A){let T=A+1,E=[];for(let C=0;C<=T;C++){E[C]=[];let v=x.clone().lerp(y,C/T),b=M.clone().lerp(y,C/T),P=T-C;for(let B=0;B<=P;B++)B===0&&C===T?E[C][B]=v:E[C][B]=v.clone().lerp(b,B/P)}for(let C=0;C<T;C++)for(let v=0;v<2*(T-C)-1;v++){let b=Math.floor(v/2);v%2===0?(d(E[C][b+1]),d(E[C+1][b]),d(E[C][b])):(d(E[C][b+1]),d(E[C+1][b+1]),d(E[C+1][b]))}}function c(x){let M=new L;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(x),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function u(){let x=new L;for(let M=0;M<r.length;M+=3){x.x=r[M+0],x.y=r[M+1],x.z=r[M+2];let y=m(x)/2/Math.PI+.5,A=p(x)/Math.PI+.5;a.push(y,1-A)}_(),h()}function h(){for(let x=0;x<a.length;x+=6){let M=a[x+0],y=a[x+2],A=a[x+4],T=Math.max(M,y,A),E=Math.min(M,y,A);T>.9&&E<.1&&(M<.2&&(a[x+0]+=1),y<.2&&(a[x+2]+=1),A<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,M){let y=x*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function _(){let x=new L,M=new L,y=new L,A=new L,T=new He,E=new He,C=new He;for(let v=0,b=0;v<r.length;v+=9,b+=6){x.set(r[v+0],r[v+1],r[v+2]),M.set(r[v+3],r[v+4],r[v+5]),y.set(r[v+6],r[v+7],r[v+8]),T.set(a[b+0],a[b+1]),E.set(a[b+2],a[b+3]),C.set(a[b+4],a[b+5]),A.copy(x).add(M).add(y).divideScalar(3);let P=m(A);g(T,b+0,x,P),g(E,b+2,M,P),g(C,b+4,y,P)}}function g(x,M,y,A){A<0&&x.x===1&&(a[M]=x.x-1),y.x===0&&y.z===0&&(a[M]=A/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}},Ba=new L,za=new L,tc=new L,ka=new Ui,fo=class extends yn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(Ya*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let _=0;_<l;_+=3){a?(c[0]=a.getX(_),c[1]=a.getX(_+1),c[2]=a.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);let{a:g,b:m,c:p}=ka;if(g.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),ka.getNormal(tc),h[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,h[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,h[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let x=0;x<3;x++){let M=(x+1)%3,y=h[x],A=h[M],T=ka[u[x]],E=ka[u[M]],C=`${y}_${A}`,v=`${A}_${y}`;v in d&&d[v]?(tc.dot(d[v].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(E.x,E.y,E.z)),d[v]=null):C in d||(d[C]={index0:c[x],index1:c[M],normal:tc.clone()})}}for(let _ in d)if(d[_]){let{index0:g,index1:m}=d[_];Ba.fromBufferAttribute(o,g),za.fromBufferAttribute(o,m),f.push(Ba.x,Ba.y,Ba.z),f.push(za.x,za.y,za.z)}this.setAttribute("position",new Tt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Gr=class s extends lu{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},ps=class extends ki{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mf,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};lr=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},cu=class extends lr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sd,endingEnd:sd}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case rd:r=e,o=2*t-n;break;case ad:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case rd:a=e,l=2*n-t;break;case ad:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,p=-d*m+2*d*g-d*_,x=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,M=(-1-f)*m+(1.5+f)*g+.5*_,y=f*m-f*g;for(let A=0;A!==o;++A)r[A]=p*a[u+A]+x*a[c+A]+M*a[l+A]+y*a[h+A];return r}},uu=class extends lr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}},hu=class extends lr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},On=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Va(t,this.TimeBufferType),this.values=Va(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Va(e.times,Array),values:Va(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new hu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new uu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Za:t=this.InterpolantFactoryMethodDiscrete;break;case Gc:t=this.InterpolantFactoryMethodLinear;break;case Tl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Za;case this.InterpolantFactoryMethodLinear:return Gc;case this.InterpolantFactoryMethodSmooth:return Tl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&yv(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Tl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{let h=o*n,d=h-n,f=h+n;for(let _=0;_!==n;++_){let g=t[h+_];if(g!==t[d+_]||g!==t[f+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=Gc;ms=class extends On{constructor(e,t,n){super(e,t,n)}};ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=Za;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;du=class extends On{};du.prototype.ValueTypeName="color";fu=class extends On{};fu.prototype.ValueTypeName="number";pu=class extends lr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let u=c+o;c!==u;c+=4)zi.slerpFlat(r,0,a,c-o,a,c,l);return r}},po=class extends On{InterpolantFactoryMethodLinear(e){return new pu(this.times,this.values,this.getValueSize(),e)}};po.prototype.ValueTypeName="quaternion";po.prototype.InterpolantFactoryMethodSmooth=void 0;gs=class extends On{constructor(e,t,n){super(e,t,n)}};gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Za;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;mu=class extends On{};mu.prototype.ValueTypeName="vector";gu=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],_=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null}}},xv=new gu,_u=class{constructor(e){this.manager=e!==void 0?e:xv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};_u.DEFAULT_MATERIAL_NAME="__DEFAULT";Wr=class extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},mo=class extends Wr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},nc=new vt,rf=new L,af=new L,go=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vr,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;rf.setFromMatrixPosition(e.matrixWorld),t.position.copy(rf),af.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(af),t.updateMatrixWorld(),nc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(nc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},of=new vt,Or=new L,ic=new L,yu=class extends go{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Or.setFromMatrixPosition(e.matrixWorld),n.position.copy(Or),ic.copy(n.position),ic.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ic),n.updateMatrixWorld(),i.makeTranslation(-Or.x,-Or.y,-Or.z),of.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(of)}},_o=class extends Wr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new yu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},xu=class extends go{constructor(){super(new ro(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yo=class extends Wr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new xu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Pu="\\[\\]\\.:\\/",vv=new RegExp("["+Pu+"]","g"),Iu="[^"+Pu+"]",Mv="[^"+Pu.replace("\\.","")+"]",bv=/((?:WC+[\/:])*)/.source.replace("WC",Iu),Sv=/(WCOD+)?/.source.replace("WCOD",Mv),wv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Iu),Ev=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Iu),Tv=new RegExp("^"+bv+Sv+wv+Ev+"$"),Av=["material","materials","bones","map"],vu=class{constructor(e,t,n){let i=n||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},mt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(vv,"")}static parseTrackName(e){let t=Tv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Av.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mt.Composite=vu;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];sM=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170")});function Du(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new yn,c=0;for(let u=0;u<s.length;++u){let h=s[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0,h=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let _=0;_<f.count;++_)h.push(f.getX(_)+u);u+=s[d].attributes.position.count}l.setIndex(h)}for(let u in r){let h=If(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in a){let h=a[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let g=0;g<a[u].length;++g)f.push(a[u][g][d]);let _=If(f);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(_)}}return l}function If(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let u=s[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let a=new e(r),o=new on(a,t,n),l=0;for(let c=0;c<s.length;++c){let u=s[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let d=0,f=u.count;d<f;d++)for(let _=0;_<t;_++){let g=u.getComponent(d,_);o.setComponent(d+h,_,g)}}else a.set(u.array,l);l+=u.count*t}return i!==void 0&&(o.gpuType=i),o}var Df=_i(()=>{bo()});function hr(s){let e=new ir;return e.color.setScalar(s),e}var So,Lf=_i(()=>{bo();So=class extends or{constructor(){super();let e=new qn;e.deleteAttribute("uv");let t=new ps({side:qt}),n=new ps,i=new _o(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new lt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new lt(e,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new lt(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let l=new lt(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new lt(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let u=new lt(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let h=new lt(e,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);let d=new lt(e,hr(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new lt(e,hr(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let _=new lt(e,hr(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);let g=new lt(e,hr(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);let m=new lt(e,hr(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new lt(e,hr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}}});function at(s,e,t=0,n={}){return _s.has(s)||_s.set(s,{name:s,stage:e,baseY:t,parts:new Map,edges:[],opt:n}),_s.get(s)}function $(s,e,t,n,i,r,a,o,l=!0){let c=new qn(Math.abs(r),Math.abs(a),Math.abs(o));return c.translate(t+r/2,n+a/2-s.baseY,i+o/2),s.parts.has(e)||s.parts.set(e,[]),s.parts.get(e).push(c),l&&s.edges.push(c),c}function Lt(s,e,t,n,i,r,a,o="y",l=10,c=!1){let u=new ho(r,r,a,l);o==="x"&&u.rotateZ(Math.PI/2),o==="z"&&u.rotateX(Math.PI/2),u.translate(t,n-s.baseY,i),s.parts.has(e)||s.parts.set(e,[]),s.parts.get(e).push(u),c&&s.edges.push(u)}function Eo(s,e,t,n=!0){t.translate(0,-s.baseY,0),s.parts.has(e)||s.parts.set(e,[]),s.parts.get(e).push(t),n&&s.edges.push(t)}function Uu(s,e,t,n,i,r,a,o=[],l=wo){let c=t,u=[...o].sort((h,d)=>h[0]-d[0]);for(let[h,d,f,_]of u){h>c&&$(s,e,c,r,i-l/2,h-c,a,l),_>0&&$(s,e,h,r,i-l/2,d,_,l);let g=_+f;g<a&&$(s,e,h,r+g,i-l/2,d,a-g,l),c=h+d}c<n&&$(s,e,c,r,i-l/2,n-c,a,l)}function Uf(s,e,t,n,i,r,a,o=[],l=wo){let c=t,u=[...o].sort((h,d)=>d[0]-h[0]);for(let[h,d,f,_]of u){h<c&&$(s,e,i-l/2,r,h,l,a,c-h),_>0&&$(s,e,i-l/2,r,h-d,l,_,d);let g=_+f;g<a&&$(s,e,i-l/2,r+g,h-d,l,a-g,d),c=h-d}c>n&&$(s,e,i-l/2,r,n,l,a,c-n)}function Pv(){let s=at("terreno",0);Eo(s,we(16777215,{vertexColors:!0}),Hv(-28,-22,et+42,40,7309903,.12),!1);let e=at("calle",0);$(e,X.asphalt,-28,-.32,9.2,et+54,.3,8,!1),$(e,X.curb,-28,-.3,7.6,et+54,.32,1.6);let t=at("maleza",0);for(let l=0;l<46;l++){let c=-6+l*37%100/100*(et+12),u=-16+l*53%100/100*22,h=.35+l*17%10/22,d=new Gr(h,0);d.translate(c,h*.6,u),Eo(t,l%3?X.grassDark:X.grass,d,!1)}let n=at("despalme",1);$(n,X.soil,-1.5,-.32,-12.8,et+3,.3,19.6,!1);let i=at("trazo",2),r=[0,_e,2*_e,3*_e,et],a=[Zt.G,Zt.F,Zt.E,Zt.D,Zt.C];for(let l of r)for(let c of[1.2,-tt-1.2])$(i,X.stake,l-.04,0,c-.04,.08,.6,.08);for(let l of a)for(let c of[-1.2,et+1.2])$(i,X.stake,c-.04,0,l-.04,.08,.6,.08);for(let l of r)$(i,X.frame,l-.008,.45,-tt-1.2,.016,.016,tt+2.4,!1);for(let l of a)$(i,X.frame,-1.2,.45,l-.008,et+2.4,.016,.016,!1);let o=at("excavacion",3);$(o,X.soilDark,-.6,-.31,-tt-.6,et+1.2,.04,tt+1.2,!1);for(let l=0;l<4;l++)$(o,X.soil,et+2+l*.6,0,-4-l*1.4,1.4-l*.2,.9-l*.15,1.6,!1)}function Iv(){let s=at("acero_cim",4);for(let t=0;t<=et+.01;t+=.3)$(s,X.rebar,t-.006,-.18,-tt-.1,.012,.012,tt+.2,!1);for(let t=.1;t>=-tt-.1;t-=.3)$(s,X.rebar,-.1,-.17,t,et+.2,.012,.012,!1);let e=at("losa_cim",5,-.3);$(e,X.concrete,-.15,-.3,-tt-.15,et+.3,.3,tt+.3),$(e,X.concreteDark,0,-.06,-tt-1.6,et,.06,1.6-.12)}function Dv(s){let e=s*$e,t=$e-.12,n=at("muros"+s,6+s*2,e),i=[],r=[];for(let l=0;l<Fn;l++){let c=l*_e,u=l===0||l===3,h=l%2===1,d=g=>h?c+_e-g:c+g;if(s===0){let g=h?d(.25)-.9:d(.25);i.push([g,.9,2.1,0]),i.push([h?d(1.35)-1.4:d(1.35),1.4,1.2,.9]),r.push([h?d(.3)-.8:d(.3),.8,2.1,0]),r.push([h?d(1.4)-1.2:d(1.4),1.2,1,1])}else if(u)i.push([c+_e/2-.6,1.2,s===2?2.1:1.5,s===2?0:.9]),r.push([c+_e/2-.6,1.2,1.2,1]);else{let g=s===1;i.push([c+.35,_e-.7,g?2.1:1.3,g?0:.9]),r.push([c+_e/2-.6,1.2,1.2,1])}let f=g=>Uu(n,X.block,c+wo/2,c+_e-wo/2,g,e,t,[[h?c+_e-1.15:c+.35,.8,2.1,0]]);s===0||f(Zt.F),f(Zt.D);let _=h?c+_e-1.3:c+1.3;Uf(n,X.block,Zt.F,Zt.D,_,e,t,[[Zt.E+.05,.7,2.1,0]])}Uu(n,X.block,0,et,Lu,e,t,i),Uu(n,X.block,0,et,ys,e,t,r);for(let l=0;l<=Fn;l++)Uf(n,X.block,Lu,ys,l*_e,e,t);for(let l=0;l<=Fn;l++)for(let c of[Lu,Zt.F,Zt.D,ys])$(n,X.concrete,l*_e-.08,e,c-.08,.16,t,.16,!1);if(s<2)for(let l=0;l<Fn;l++){let c=l%2===1,u=l*_e,h=c?u+_e-1.25:u+.08,d=14,f=(Zt.F-Zt.D)/d;for(let _=0;_<d;_++)$(n,X.concreteDark,h,e+_*$e/d,Zt.F-(_+1)*f,1.17,$e/d,f,!1)}let a=at("losa"+(s+1),7+s*2,e+$e-.12);$(a,X.concrete,-.06,e+$e-.12,-tt-.06,et+.12,.12,tt+.12);let o=at("cimbra"+(s+1),7+s*2,e);for(let l=.6;l<et;l+=1.2)for(let c=-.8;c>-tt;c-=1.5)$(o,X.wood,l,e,c,.08,$e-.14,.08,!1)}function Lv(){let s=at("pretil",12,rt);$(s,X.block,-.06,rt,-.06,et+.12,.5,.12),$(s,X.block,-.06,rt,-tt-.06,et+.12,.5,.12),$(s,X.block,-.06,rt,-tt,.12,.5,tt),$(s,X.block,et-.06,rt,-tt,.12,.5,tt);let e=at("impermeable",14,rt);$(e,X.roof,.06,rt,-tt+.06,et-.12,.03,tt-.12,!1);let t=at("ecotec",14,rt);for(let n=0;n<Fn;n++){let i=n*_e+_e/2;Lt(t,X.tinaco,i-.5,rt+.62,-6.2,.55,1.2,"y",16,!1),$(t,X.tinaco,i-1.05,rt+1.22,-6.75,1.1,.05,1.1,!1);let r=new qn(1.1,.06,1.7);r.rotateX(-.6),r.translate(i+.55,rt+.75,-3.6),Eo(t,X.solar,r),Lt(t,X.steel,i+.55,rt+1.15,-3,.16,1.15,"x",10)}}function Uv(){let s=at("acabados",13),e=.014;$(s,X.white,-e,0,-tt,e,rt+.5,tt,!1),$(s,X.white,et,0,-tt,e,rt+.5,tt,!1),$(s,X.white,0,0,ys-e-.06,et,rt+.5,e,!1),$(s,X.white,0,0,.06,et,$e,e,!1),$(s,X.white,0,$e,.06,_e,rt+.5-$e,e,!1),$(s,X.white,3*_e,$e,.06,_e,rt+.5-$e,e,!1),$(s,X.gray,_e,$e-.05,.08,2*_e,rt+.55-$e,.04);for(let t=_e;t<=3*_e+.01;t+=.6)$(s,X.frame,t,$e,.121,.01,rt+.5-$e,.005,!1);for(let t=$e;t<=rt+.5;t+=.6)$(s,X.frame,_e,t,.121,2*_e,.01,.005,!1);$(s,X.white,_e+.4,2*$e-.12,0,2*_e-.8,.12,.55);for(let t of[0,3*_e])$(s,X.white,t+.2,$e-.02,.08,_e-.4,.14,.12),$(s,X.white,t+.5,2*$e-.02,0,_e-1,.1,.6)}function Nv(){let s=at("canceleria",13),e=(n,i,r,a,o,l)=>{if($(s,X.frame,n,i,r-.03,a,o,.03),$(s,$n,n+.04,i+.04,r-.02,a-.08,o-.08,.01,!1),$(s,X.frame,n+a/2-.02,i,r-.035,.04,o,.04,!1),l)for(let c=i+.12;c<i+o;c+=.16)$(s,X.bars,n+.02,c,r+.01,a-.04,.025,.025,!1)},t=(n,i,r,a,o=.5)=>{for(let l of[.15,.4,.65,.9])$(s,X.rail,n,i+l,r+o-.02,a,.03,.03,!1);for(let l of[n,n+a-.03])$(s,X.rail,l,i,r,.03,.95,o,!1)};for(let n=0;n<Fn;n++){let i=n*_e,r=n%2===1,a=n===0||n===3,o=c=>r?i+_e-c:i+c,l=r?o(.25)-.9:o(.25);$(s,X.door,l,0,0,.9,2.1,.05),$(s,X.frame,l+.75,1,.05,.05,.05,.03,!1),e(r?o(1.35)-1.4:o(1.35),.9,.06,1.4,1.2,!0),a?(e(i+_e/2-.6,$e+.9,.09,1.2,1.5,!0),e(i+_e/2-.6,2*$e,.09,1.2,2.1,!1),t(i+_e/2-.75,2*$e+.1,.1,1.5)):(e(i+.35,$e,.1,_e-.7,2.1,!1),t(i+.3,$e+.05,.12,_e-.6),e(i+.35,2*$e+.9,.1,_e-.7,1.3,n===2));for(let c of[1,2])e(i+_e/2-.6,c*$e+1,ys-.07,1.2,1.2,!1);e(r?o(1.4)-1.2:o(1.4),1,ys-.07,1.2,1,!0)}}function Ov(){let s=at("instalaciones",11);for(let e=0;e<Fn;e++){let t=e*_e,n=e%2===1,i=n?t+_e-1.45:t+1.45;Lt(s,X.water,i,rt/2+.3,-6.3,.07,rt+.6);for(let r of[0,1,2])Lt(s,X.water,t+_e/2,r*$e+.5,-6.3,.06,_e-.4,"x");Lt(s,X.water,t+_e/2,.5,-8,.06,3.4,"z"),Lt(s,X.drain,i+.2,rt/2,-6.6,.11,rt),Lt(s,X.drain,i+.2,-.15,-3.3,.11,6.6,"z"),$(s,X.concreteDark,i-.1,-.3,.3,.6,.32,.6);for(let r of[0,1,2])$(s,X.power,t+.15,r*$e+2.3,-tt+.3,.06,.06,tt-.6,!1),$(s,X.power,t+.15,r*$e+.3,-.2,.06,2,.06,!1);$(s,X.steel,t+.2,1.4,.07,.25,.35,.12),Lt(s,X.power,t+.33,.6,.15,.05,1.2)}}function Fv(){let s=at("exterior",15);for(let r=0;r<Fn;r++){let a=r*_e;for(let o=0;o<6;o++)for(let l of[.15,1.55])$(s,X.pad,a+l,0,.4+o*1.15,1.25,.03,.75,!1)}let e=(r,a)=>{Lt(s,X.wood,r,1,a,.04,2);for(let o=0;o<3;o++){let l=new Gr(.45-o*.08,0);l.translate(r+(o-1)*.15,2+o*.35,a),Eo(s,X.grassDark,l,!1)}};e(_e*1-.3,1.6),e(_e*3-.3,1.6);let t=at("auto",15),n=_e+.8,i=1;$(t,X.car,n,.25,i,1.85,.75,4.4),$(t,X.car,n+.1,1,i+.9,1.65,.6,2.6),$(t,$n,n+.12,1.05,i+.88,1.61,.5,2.64,!1),$(t,X.red,n+.05,.75,i+4.38,1.75,.12,.03,!1);for(let[r,a]of[[0,.8],[0,3.5],[1.85,.8],[1.85,3.5]])Lt(t,X.tire,n+r,.35,i+a,.35,.24,"x",14)}function Bv(){let s=at("tractor",99,0),e=Zn-3,t=-2;for(let M of[0,2.05]){$(s,X.tire,e+M,0,t-3.4,.55,.95,3.4);for(let y=0;y<12;y++)$(s,X.black,e+M-.01,0,t-3.35+y*.28,.57,.08,.12,!1)}$(s,X.yellow,e+.45,.7,t-3.2,1.7,1,3),$(s,X.yellow,e+.6,1.7,t-1.6,1.4,.4,1.3),$(s,X.yellowDark,e+.5,1.7,t-3.2,1.6,1.5,1.5),$(s,$n,e+.55,2.05,t-3.15,1.5,.95,1.4,!1),$(s,X.black,e+.45,3.2,t-3.25,1.7,.06,1.6,!1),$(s,X.black,e+1.1,1.7,t-.6,.12,.7,.12,!1),$(s,X.yellowDark,e-.45,.05,t+.55,3.5,1.2,.25),$(s,X.steel,e-.45,0,t+.7,3.5,.12,.2,!1),$(s,X.yellowDark,e+.2,.6,t-.1,.15,.25,.75,!1),$(s,X.yellowDark,e+2.15,.6,t-.1,.15,.25,.75,!1),$(s,X.yellowDark,e+.8,.3,t-4.1,1,.4,.7),$(s,X.steel,e+1.2,-.2,t-4.4,.15,.9,.15,!1);let n=at("paneles",99,0),i=(M,y,A,T,E)=>{for(let C=0;C<T;C++)$(n,M,y,.12+C*E,A,1.22,E-.004,2.44,C%4===0);$(n,X.wood,y,0,A,1.22,.12,2.44)};i(X.gyp,Zn+5,-3,18,.0127*2),i(X.cem,Zn+7,-3,14,.0127*2),i(X.osb,Zn+9,-3,16,.015*2);let r=Zn+5,a=-6.5;for(let M=0;M<=8;M++)$(n,X.steel,r+M*.61,0,a,.04,2.44,.09,!1);$(n,X.steel,r,0,a,4.92,.04,.09,!1),$(n,X.steel,r,2.4,a,4.92,.04,.09,!1),$(n,X.gyp,r+1.22,0,a+.1,1.22,2.44,.0127),$(n,X.cem,r+2.46,0,a+.1,1.22,2.44,.0127),$(n,X.osb,r+3.7,0,a+.1,1.22,2.44,.015);let o=at("patio",99,0);$(o,we(14077112),Zn-7,-.32,-17,35,.3,24,!1);let l=at("volteo",99,0),c=Zn+13,u=-1;for(let[M,y]of[[0,.8],[0,3.4],[0,4.6],[2.3,.8],[2.3,3.4],[2.3,4.6]])Lt(l,X.tire,c+M,.5,u-y,.5,.35,"x",14);$(l,X.steel,c+.15,.6,u-5.6,2,.3,5.5),$(l,X.red,c,.9,u-1.6,2.3,1.8,1.6),$(l,$n,c+.05,1.8,u-.05,2.2,.75,.06,!1),$(l,X.steel,c+.05,1,u-5.7,2.2,1.3,3.9),$(l,X.soil,c+.2,2.1,u-5.5,1.9,.35,3.5,!1);let h=at("lowboy",99,0),d=Zn+22,f=.5;$(h,X.blue,d,.9,f-2.2,2.4,2.1,2.2),$(h,$n,d+.05,2,f-.05,2.3,.8,.06,!1),$(h,X.steel,d+.3,.6,f-5,1.8,.35,3);for(let M of[.9,3.6,4.6])for(let y of[0,2.4])Lt(h,X.tire,d+y,.5,f-M,.5,.35,"x",14);$(h,X.black,d+.1,.55,f-15.5,2.2,.25,9.8),$(h,X.black,d+.1,.8,f-5.8,2.2,.4,1.2);for(let M of[13.4,14.4,15.2])for(let y of[0,2.4])Lt(h,X.tire,d+y,.45,f-M,.45,.3,"x",12);let _=d+.35,g=f-8;for(let[M,y,A]of[[0,0,.55],[1.7,0,.55],[0,-3,.75],[1.7,-3,.75]])Lt(h,X.tire,_+M,.8+A,g+y,A,.4,"x",14);$(h,X.yellow,_,1.3,g-3.6,1.7,.9,3.8),$(h,X.yellowDark,_+.1,2.2,g-3.5,1.5,1.5,1.5),$(h,$n,_+.15,2.4,g-3.45,1.4,1.2,1.4,!1),$(h,X.yellowDark,_-.1,1.1,g+.4,1.9,.8,.25),$(h,X.yellowDark,_+.75,1.8,g-4.9,.2,.2,1.4,!1),$(h,X.yellowDark,_+.75,1.8,g-4.9,.2,1.8,.2,!1);let m=at("generador",99,0),p=Zn-6,x=-12;$(m,X.black,p,0,x,2.2,.15,1),$(m,X.green,p+.05,.15,x+.05,2.1,1.2,.9),$(m,X.steel,p+1.6,.4,x+.96,.4,.5,.03,!1);for(let M=0;M<6;M++)$(m,X.black,p+.2+M*.15,.5,x+.96,.08,.6,.02,!1);Lt(m,X.black,p+.4,1.55,x+.5,.06,.4),$(m,X.steel,p+3.2,0,x+.2,.6,1.1,.25),$(m,X.power,p+2.2,.03,x+.45,1,.03,.04,!1)}function zv(){let s=at("muebles",14);for(let e=0;e<Fn;e++){let t=e*_e,n=e%2===1,i=(a,o,l,c,u,h,d,f=!0)=>$(s,a,n?t+_e-o-u:t+o,l,c,u,h,d,f),r=(a,o,l,c,u,h)=>Lt(s,a,n?t+_e-o:t+o,l,c,u,h,"y",14,!0);i(Nt.sofa,2.1,0,-.7,.75,.45,-1.8),i(Nt.sofa,2.65,.45,-.7,.2,.4,-1.8),r(Nt.table,1,.75,-2.55,.45,.05),r(Nt.table,1,.37,-2.55,.06,.74);for(let[a,o]of[[.55,0],[-.55,0],[0,.55],[0,-.55]])i(Nt.table,1+a-.17,0,-2.55+o+.17,.34,.45,-.34);i(Nt.counter,2.25,0,-7.25,.6,.9,-2.3),i(X.black,2.3,.9,-7.5,.5,.03,-.55,!1),i(Nt.fridge,.15,0,-9.2,.7,1.7,-.6),i(Nt.porcelain,2.35,0,-6.35,.4,.42,-.55),i(Nt.porcelain,2.38,.42,-6.8,.34,.35,-.12),i(Nt.porcelain,1.55,.65,-6.75,.45,.15,-.3);for(let a of[1,2]){let o=a*$e;for(let[l,c]of[[-1,-3],[-7.4,-9.4]])i(Nt.bed,.9,o,l,1.4,.45,c-l),i(Nt.blanket,.9,o+.45,l-.5,1.4,.05,c-l+.5,!1),i(Nt.pillow,1,o+.45,l-.08,1.2,.12,-.35,!1);i(Nt.closet,.15,o,-3.25,1.1,2.1,.5),i(Nt.closet,2.3,o,-7.2,.6,2.1,-1),i(Nt.porcelain,2.35,o,-5.35,.4,.42,-.55),i(Nt.porcelain,1.55,o+.65,-6.75,.45,.15,-.3),i(Nt.porcelain,1.4,o,-5.25,.8,.06,-.8),i($n,1.4,o,-6.05,.8,1.9,.02,!1)}}}function kv(){let s=at("fachada_det",13);for(let e=0;e<Fn;e++){let t=e*_e,n=e%2===1,i=e===0||e===3,r=l=>n?t+_e-l:t+l,a=n?r(.25)-.9:r(.25);for(let l=.25;l<2;l+=.22)$(s,X.bars,a+.03,l,.06,.84,.03,.03,!1);$(s,X.bars,a-.04,0,.04,.04,2.14,.04,!1),$(s,X.bars,a+.9,0,.04,.04,2.14,.04,!1),Lt(s,X.yellow,a+.45,2.3,.12,.07,.12,"z",10),$(s,X.black,n?a-.4:a+1.1,1.75,.06,.3,.2,.02,!1);let o=n?r(1.35)-1.4:r(1.35);$(s,X.white,o-.05,.84,0,1.5,.06,.16,!1),i&&$(s,X.white,t+_e/2-.65,$e+.84,.06,1.3,.06,.16,!1),Lt(s,X.steel,t+.35,rt/2,ys-.2,.05,rt)}$(s,X.gray,_e,rt+.55,.06,_e-.18,.3,.1),$(s,X.gray,2*_e+.18,rt+.55,.06,_e-.18,.3,.1),$(s,X.concreteDark,0,0,.06,et,.08,.05,!1)}function Vv(){let s=at("calle_det",0);for(let e=-26;e<et+26;e+=3)$(s,X.white,e,-.015,13.1,1.6,.01,.15,!1);for(let e of[-7,et+6])Lt(s,X.steel,e,3.2,8.3,.07,6.4,"y",8,!0),$(s,X.steel,e-.04,6.3,8.3,.08,.08,1.4,!1),$(s,X.black,e-.2,6.2,9.4,.4,.1,.5,!1)}function Hv(s,e,t,n,i,r){let a=new rr(t,n,Math.round(t/1.5),Math.round(n/1.5));a.rotateX(-Math.PI/2),a.translate(s+t/2,-.03,e+n/2);let o=new ze(i),l=[],c=a.attributes.position;for(let u=0;u<c.count;u++){let h=c.getX(u),d=c.getZ(u),_=1+(Math.sin(h*.7+d*.3)*.5+Math.sin(h*.23-d*.61)*.5+Math.sin(h*1.7+d*1.3)*.25)*r;l.push(o.r*_,o.g*_,o.b*_)}return a.setAttribute("color",new Tt(l,3)),a}function Nf(s,e){let t=new oo({canvas:s,antialias:!0,alpha:!0,powerPreference:"high-performance"}),n=Math.min(window.devicePixelRatio||1,matchMedia("(max-width: 1100px)").matches?1.5:1.75);t.setPixelRatio(n),t.shadowMap.enabled=!0,t.shadowMap.type=Mu,t.localClippingEnabled=!0,t.toneMapping=bu,t.toneMappingExposure=.88;let i=new or;i.background=null;let r=new Xt(32,1,.5,400),a=new ar(t);i.environment=a.fromScene(new So,.04).texture,i.add(new mo(16774888,7300696,.4));let o=new yo(16771527,2.9);o.position.set(-18,30,22),o.castShadow=!0,o.shadow.mapSize.set(...matchMedia("(max-width: 800px)").matches?[2048,2048]:[4096,4096]),o.shadow.normalBias=.02,Object.assign(o.shadow.camera,{left:-30,right:60,top:30,bottom:-30,near:1,far:120}),o.shadow.bias=-4e-4,o.target.position.set(18,0,-5),i.add(o,o.target),Pv(),Iv();for(let I of[0,1,2])Dv(I);Lv(),Uv(),Nv(),Ov(),Fv(),Bv(),zv(),kv(),Vv();let l=new Hr({color:Rv,transparent:!0,opacity:.62}),c=new Dn(new L(0,-1,0),1e4),u=new Set;for(let I of _s.values()){let z=new hi;z.position.y=I.baseY;for(let[Z,H]of I.parts){let te=new lt(Du(H),Z);te.castShadow=!["terreno","calle","calle_det","despalme","excavacion","patio"].includes(I.name),te.receiveShadow=!0,z.add(te),u.add(Z)}if(I.edges.length){let Z=new uo(new fo(Du(I.edges.map(H=>H.clone())),30),l);z.add(Z)}I.obj=z,i.add(z)}let h=new hi;for(let I of["losa_cim","muros0","muros1","muros2","losa1","losa2","losa3","pretil","impermeable","ecotec","acabados","canceleria","fachada_det","exterior"]){let z=_s.get(I).obj.clone();z.visible=!0,z.scale.y=1,h.add(z)}h.position.x=-(et+.3),h.visible=!1,i.add(h),_s.set("vecinos",{name:"vecinos",stage:15,obj:h,parts:new Map,edges:[],opt:{}});for(let I of[...u,l])I.clippingPlanes=[c];let d={stage:-1,xray:0,shake:0,cutKind:null},f={maleza:I=>I<1,despalme:I=>I>=1&&I<15,excavacion:I=>I>=3&&I<6,trazo:I=>I>=2&&I<5,acero_cim:I=>I===4},_=null;function g(I,{xray:z=!1,cut:Z=null,yard:H=!0}={}){let te=I>=d.stage,se=[];for(let k of _s.values()){let j=k.stage<=I;k.stage===99&&(j=H),f[k.name]&&(j=f[k.name](I)),k.name.startsWith("cimbra")&&(j=k.stage===I),k.name==="vecinos"&&(j=I===15&&!z&&!Z);let fe=k.obj.userData.on;k.obj.userData.on=j,Pt.killTweensOf(k.obj.scale),j&&!fe?(k.obj.visible=!0,te&&k.stage>0&&k.stage<99&&k.name!=="vecinos"&&d.stage>=0?se.push(k):k.obj.scale.y=1):!j&&fe?!te&&k.stage>0&&k.stage<99?Pt.to(k.obj.scale,{y:.001,duration:.45,ease:"power2.in",onComplete:()=>{k.obj.visible=!1}}):k.obj.visible=!1:(k.obj.visible=j,j&&(k.obj.scale.y=1))}se.sort((k,j)=>k.stage-j.stage);let de=Math.min(.3,1.6/Math.max(1,se.length));se.forEach((k,j)=>{k.obj.scale.y=.001,Pt.to(k.obj.scale,{y:1,duration:1.1,delay:j*de,ease:"power3.out"})}),Pt.to(d,{xray:z?1:0,duration:.8,onUpdate:p,overwrite:!0});let ye=Z?Z.y!=null?"y":"x":null;_&&_.kill(),_=Pt.timeline();let Ie={y:12,x:6};if(d.cutKind&&d.cutKind!==ye){let k=d.cutKind;_.to(c,{constant:k==="y"?Ie.y:Ie.x,duration:.7,ease:"power2.in"}),_.add(()=>{c.normal.set(0,-1,0),c.constant=1e4,o.castShadow=!0})}ye&&d.cutKind!==ye&&_.add(()=>{o.castShadow=!1,ye==="y"?(c.normal.set(0,-1,0),c.constant=Ie.y):(c.normal.set(1,0,0),c.constant=Ie.x)}),ye&&_.to(c,{constant:ye==="y"?Z.y:-Z.x,duration:1.2,ease:"power2.inOut"}),d.cutKind=ye,d.stage=I}let m=[X.block,X.white,X.gray,X.concrete,X.door,X.frame,X.bars,X.rail,X.roof,$n];function p(){for(let I of m)I.transparent=d.xray>.01||I===$n,I.opacity=I===$n?.55*(1-d.xray*.7):1-d.xray*.86,I.depthWrite=d.xray<.5;l.opacity=.62*(1-d.xray*.6)}let x={tx:6,ty:3,tz:-5,az:.8,r:38,h:24,fov:32};function M(I,z=1.6){let[Z,H,te]=I.pos,[se,de,ye]=I.tgt,Ie=Math.atan2(te-ye,Z-se);for(;Ie-x.az>Math.PI;)Ie-=Math.PI*2;for(;Ie-x.az<-Math.PI;)Ie+=Math.PI*2;let k=Math.hypot(Z-se,te-ye);if(z<.05){Object.assign(x,{tx:se,ty:de,tz:ye,az:Ie,r:k,h:H,fov:I.fov||32});return}let j=Math.min(10,Math.abs(Ie-x.az)*4+Math.hypot(se-x.tx,ye-x.tz)*.15);Pt.to(x,{tx:se,ty:de,tz:ye,az:Ie,r:k,fov:I.fov||32,duration:z,ease:"power2.inOut",overwrite:!0});let fe=x.h;Pt.fromTo(x,{h:fe},{h:H,duration:z,ease:"power2.inOut",onUpdate(){let ae=this.progress();x.h=fe+(H-fe)*Pt.parseEase("power2.inOut")(ae)+Math.sin(Math.PI*ae)*j}})}let y=new L,A=0,T=null;s.addEventListener("pointerdown",I=>{I.pointerType!=="touch"&&(T={x:I.clientX,o:A})}),addEventListener("pointerup",()=>{T=null}),addEventListener("pointermove",I=>{T&&(A=T.o+(I.clientX-T.x)*.006)});let E={off:0,offY:0},C=(I,z=0,Z=1.2)=>Pt.to(E,{off:I,offY:z,duration:Z,ease:"power2.inOut",overwrite:!0}),v=1,b=1;function P(){let I=s.getBoundingClientRect();v=I.width,b=I.height,t.setSize(I.width,I.height,!1),r.aspect=I.width/Math.max(1,I.height),r.updateProjectionMatrix()}addEventListener("resize",P),P();let B=performance.now();function F(I){let z=Math.min(.1,(I-B)/1e3);B=I,T||(A*=Math.pow(.08,z)),y.set(x.tx,x.ty,x.tz);let Z=x.az+A+Math.sin(I/4e3)*.015;r.position.set(x.tx+Math.cos(Z)*x.r,x.h,x.tz+Math.sin(Z)*x.r),d.shake>.001&&(r.position.x+=Math.sin(I*.045)*Math.sin(I*.0031)*.12*d.shake,r.position.y+=Math.sin(I*.061)*.05*d.shake),r.fov=x.fov,r.setViewOffset(v,b,-E.off,E.offY,v,b),r.lookAt(y),t.render(i,r),e&&e(r),requestAnimationFrame(F)}return requestAnimationFrame(F),{setStage:g,setCamera:M,setShake:I=>Pt.to(d,{shake:I?1:0,duration:.6}),setOffset:C,resize:P,camera:r,renderer:t,YARD:Zn}}var _e,Fn,et,tt,$e,wo,Lu,ys,rt,Zt,Rv,we,X,$n,_s,Zn,Nt,Of=_i(()=>{bo();Df();wl();Lf();_e=2.994,Fn=4,et=_e*Fn,tt=9.885,$e=2.62,wo=.12,Lu=0,ys=-tt,rt=$e*3,Zt={G:0,F:-3.3,E:-5.16,D:-7.02,C:-tt},Rv=1911631,we=(s,e={})=>new ps({color:s,roughness:.86,metalness:0,side:Ln,envMapIntensity:.3,...e}),X={soil:we(11569758),soilDark:we(9202245),grass:we(10337130),grassDark:we(8364372),concrete:we(13223098),concreteDark:we(11117463),rebar:we(10115644),block:we(12170411),white:we(16250094),gray:we(4869719),glass:we(3622490),frame:we(2237996),rail:we(1974566),bars:we(15921906),door:we(15789282),roof:we(11818303),tinaco:we(2829099),solar:we(3100550),asphalt:we(7106420),curb:we(14275785),pad:we(14209734),wood:we(13081179),stake:we(14725978),water:we(3112417),drain:we(9277331),power:we(15906565),gas:we(14706223),yellow:we(15774499),yellowDark:we(12946191),black:we(2763306),steel:we(9080985),red:we(13123886),blue:we(3104158),gyp:we(15855593),cem:we(12106943),osb:we(14264411),tire:we(2039583),car:we(5922665),green:we(4160846)},$n=we(5994646,{transparent:!0,opacity:.55,roughness:.06,metalness:.25,envMapIntensity:1.4});for(let[s,e,t]of[["steel",.38,.65],["car",.32,.35],["frame",.45,.2],["rail",.45,.25],["solar",.18,.4],["tinaco",.5,0],["yellow",.5,.05],["yellowDark",.55,.05],["red",.45,.1],["blue",.45,.1],["green",.5,.05],["gray",.55,.05],["door",.6,0],["tire",.9,0],["asphalt",.95,0],["water",.4,.1],["power",.5,0],["drain",.5,.1]])Object.assign(X[s],{roughness:e,metalness:t});_s=new Map;Zn=32;Nt={sofa:we(7176089),bed:we(15328472),pillow:we(16777215),blanket:we(10466248),closet:we(13612170),porcelain:we(16514043),counter:we(9146262),fridge:we(14672870),table:we(10976079)}});var Co,ln,Nu,ke,Vi,Ct,To,dr,cn,Ao,Gv,Wv,Ff,Bf,zf=_i(()=>{Co={Eduardo:"Eduardo Alberto \xC1lvarez Velasco",Jorge:"Jorge De la Rosa Aguirre",Miguel:"Miguel \xC1ngel Guti\xE9rrez Montoya",David:"David Morales P\xE9rez",Daniel:"Daniel Israel Medina S\xE1nchez",Diego:"Diego Maximiliano Montiel Montes"},ln=32,Nu={hero:{pos:[27,15,25],tgt:[6,3,-5]},front:{pos:[6,5,24],tgt:[6,4,-4]},frontLow:{pos:[-9,8,29],tgt:[6,5,-3],fov:34},site:{pos:[34,30,34],tgt:[7,0,-4]},top:{pos:[6,40,5],tgt:[6,0,-5],fov:30},plan:{pos:[6,30,3],tgt:[6,0,-5.2],fov:32},side:{pos:[-20,9,-2],tgt:[6,3,-5]},back:{pos:[-6,12,-30],tgt:[6,3,-5]},roof:{pos:[18,20,8],tgt:[6,7.5,-5]},xray:{pos:[22,13,16],tgt:[6,3.5,-5]},ground:{pos:[22,9,14],tgt:[6,0,-5]},section:{pos:[-15,8,-5],tgt:[6,3.8,-5],fov:38},tractor:{pos:[ln-10,5,8],tgt:[ln-2,1.2,-3]},panels:{pos:[ln+18,9,9],tgt:[ln+8,.8,-3.5]},panelWall:{pos:[ln+7.5,3.4,3.8],tgt:[ln+7.5,1.2,-6.5]},volteo:{pos:[ln+7,5,9],tgt:[ln+14,1.4,-3.5]},lowboy:{pos:[ln+33,9,9],tgt:[ln+23,1.5,-7]},gen:{pos:[ln-13,4.5,-5],tgt:[ln-5,.8,-11.5]},yard:{pos:[ln+8,26,26],tgt:[ln+9,0,-6]}},ke=(...s)=>`<ol class="rows">${s.map(([e,t],n)=>`<li style="--i:${n}"><b>${e}</b>${t?`<span>${t}</span>`:""}</li>`).join("")}</ol>`,Vi=(...s)=>`<div class="cotas">${s.map(([e,t,n],i)=>`<div style="--i:${i}"><b>${e}<i>${t||""}</i></b><span>${n}</span></div>`).join("")}</div>`,Ct=s=>`<p>${s}</p>`,To=(s,e,t)=>`<table><thead><tr>${s.map(n=>`<th>${n}</th>`).join("")}</tr></thead><tbody>${e.map(n=>`<tr>${n.map(i=>`<td>${i}</td>`).join("")}</tr>`).join("")}</tbody>${t?`<tfoot><tr>${t.map(n=>`<td>${n}</td>`).join("")}</tr></tfoot>`:""}</table>`,dr=(s,e)=>`<figure class="pl"><img src="${s}" alt="${e}" decoding="async"><figcaption>${e}</figcaption></figure>`,cn=s=>`<p class="src">${s}</p>`,Ao=(...s)=>`<ol class="steps">${s.map((e,t)=>`<li style="--i:${t}">${e}</li>`).join("")}</ol>`,Gv=[["Limpieza, despalme y trazo",0,1],["Excavaci\xF3n y cimentaci\xF3n",1,2],["Muros y losa PB",3,3],["Muros y losa nivel 1",6,3],["Muros, losa y pretil nivel 2",9,3],["Instalaciones",5,9],["Aplanados e impermeabilizaci\xF3n",11,4],["Canceler\xEDa, pisos y pintura",13,4],["Exteriores, limpieza y entrega",17,2]],Wv=()=>`<div class="gantt">${Gv.map(([s,e,t],n)=>`<div class="g" style="--i:${n}"><span>${s}</span><i style="--s:${e};--d:${t}"></i></div>`).join("")}<div class="gx">${Array.from({length:19},(s,e)=>`<span>${e+1}</span>`).join("")}</div></div>`,Ff=[{id:"portada",sec:"Inicio",code:"00",who:"Eduardo",t:40,stage:15,cam:"hero",cover:!0,title:"Cu\xE1druplex<br>Ceiba Plus 4R",kicker:"Vivienda de inter\xE9s social tipo Infonavit \xB7 con balc\xF3n",body:Ct("Proyecto de evidencia \xB7 Recursos de la Construcci\xF3n")+`<p class="team">${Object.values(Co).join(" \xB7 ")}</p>`,say:"Buenos d\xEDas, Ingeniera, buenos d\xEDas, compa\xF1eros. Somos el Equipo 2: Eduardo, Jorge, Miguel, Daniel, Diego y David. Hoy les presentamos el proyecto de una vivienda de inter\xE9s social tipo Infonavit: el cu\xE1druplex Ceiba Plus 4R con balc\xF3n. Lo que ven es una maqueta 3D que hicimos con las medidas de los planos; a lo largo de la exposici\xF3n la vamos a ir construyendo desde el terreno vac\xEDo hasta la entrega."},{id:"ruta",sec:"Inicio",code:"00",who:"Eduardo",t:30,stage:15,cam:"site",title:"La ruta de la obra",kicker:"Etapas del proyecto de evidencia",body:Ao("Investigaci\xF3n","Desarrollo","Planeaci\xF3n \xB7 estudios previos","Planeaci\xF3n \xB7 cuantificaci\xF3n","Dise\xF1o","Construcci\xF3n","Operaci\xF3n","Mantenimiento","Rehabilitaci\xF3n")+Ct("Al final, en una segunda parte, cada integrante presenta un material o equipo."),say:"Vamos a seguir las etapas del proyecto de evidencia: investigaci\xF3n, desarrollo, planeaci\xF3n con estudios previos y cuantificaci\xF3n, dise\xF1o, construcci\xF3n, operaci\xF3n, mantenimiento y rehabilitaci\xF3n. Despu\xE9s, en la segunda parte, cada uno presenta un material o un equipo de construcci\xF3n."},{id:"inv",sec:"01 \xB7 Investigaci\xF3n",code:"I-01",who:"Eduardo",t:10,stage:0,cam:"site",chap:"01",title:"Investigaci\xF3n",kicker:"Identificar la necesidad",say:"Empezamos con la investigaci\xF3n."},{id:"necesidad",sec:"01 \xB7 Investigaci\xF3n",code:"I-02",who:"Eduardo",t:60,stage:0,cam:"ground",title:"Faltan viviendas adecuadas",kicker:"Planteamiento del problema",body:Vi(["8.9","M","viviendas en rezago habitacional (CONAVI, 2023)"],["1.8","M","viviendas nuevas, meta 2024\u20132030"])+Ct("El rezago son viviendas con materiales precarios, hacinamiento o sin servicios. A eso se suma la demanda de las familias nuevas, que necesitan casa cerca de su trabajo y a un precio que puedan pagar.")+cn("Gobierno de M\xE9xico, Programa de Vivienda y Regularizaci\xF3n (presentaci\xF3n, oct. 2024), con datos de CONAVI."),say:"La necesidad es clara: seg\xFAn datos de la CONAVI de 2023, en M\xE9xico hay cerca de 8.9 millones de viviendas en rezago habitacional, es decir, casas con materiales precarios, hacinamiento o sin servicios. Adem\xE1s, cada a\xF1o se forman familias nuevas que necesitan d\xF3nde vivir, cerca de su trabajo y a un precio que puedan pagar. Por eso el gobierno se propuso construir 1.8 millones de viviendas entre 2024 y 2030."},{id:"infonavit",sec:"01 \xB7 Investigaci\xF3n",code:"I-03",who:"Eduardo",t:60,stage:0,cam:"site",title:"\xBFPor qu\xE9 existen las casas Infonavit?",kicker:"Antecedentes",body:ke(["1972","El 24 de abril se publica la Ley del Infonavit; el instituto opera desde el 1 de mayo."],["Tripartito","Lo dirigen trabajadores, patrones y gobierno."],["5 %","Del salario lo aporta el patr\xF3n a la subcuenta de vivienda del trabajador."],["Cr\xE9dito","Con ese ahorro el trabajador compra, construye o mejora su casa."])+cn("Ley del Infonavit, DOF 24-04-1972 (art. 29: aportaci\xF3n del 5 %); Infonavit, Historia."),say:"\xBFPor qu\xE9 existen las casas Infonavit? El Instituto del Fondo Nacional de la Vivienda para los Trabajadores naci\xF3 en 1972: su ley se public\xF3 el 24 de abril y empez\xF3 a operar el 1 de mayo. Es tripartito, porque lo dirigen trabajadores, patrones y gobierno. Cada patr\xF3n aporta el 5 % del salario a la subcuenta de vivienda del trabajador, y con ese ahorro el trabajador obtiene un cr\xE9dito para comprar, construir o mejorar su casa. Las desarrolladoras construyen fraccionamientos como este pensando en esos cr\xE9ditos."},{id:"porque",sec:"01 \xB7 Investigaci\xF3n",code:"I-04",who:"Eduardo",t:60,stage:15,cam:"top",title:"\xBFPor qu\xE9 un cu\xE1druplex?",kicker:"Cuatro viviendas en un solo edificio",body:Vi(["4","","viviendas"],["3","","niveles cada una"],["2.99","m","de frente por casa"])+ke(["Menos terreno","Cuatro casas en 12 m de frente por 9.9 m de fondo."],["Muros compartidos","Cinco muros medianeros en lugar de ocho muros de colindancia."],["Instalaciones juntas","Ba\xF1os y cocinas alineados: menos tuber\xEDa."],["Obra en serie","Un solo prototipo que se repite en todo el fraccionamiento."]),say:"\xBFY por qu\xE9 un cu\xE1druplex? Porque mete cuatro viviendas en un solo edificio. Cada casa mide apenas 2.99 metros de frente y crece hacia arriba, en tres niveles. Con eso se aprovecha mejor el terreno: las cuatro caben en unos 12 metros de frente. Los muros entre casas se comparten, los ba\xF1os y cocinas quedan alineados para usar menos tuber\xEDa, y el mismo prototipo se repite en todo el fraccionamiento, lo que abarata y acelera la obra."},{id:"adecuada",sec:"01 \xB7 Investigaci\xF3n",code:"I-05",who:"Eduardo",t:50,stage:15,cam:"frontLow",title:"Una vivienda adecuada",kicker:"Los 7 elementos que usa CONAVI (ONU-H\xE1bitat)",body:Ao("Seguridad de la tenencia","Servicios e infraestructura","Asequibilidad","Habitabilidad","Accesibilidad","Ubicaci\xF3n","Adecuaci\xF3n cultural")+cn("CONAVI (2019), Criterios t\xE9cnicos para una vivienda adecuada."),say:"Pero no basta con construir barato. La CONAVI retoma de ONU-H\xE1bitat siete elementos de una vivienda adecuada: seguridad en la tenencia, servicios, que se pueda pagar, que sea habitable, accesible, bien ubicada y adecuada a la cultura de quien la habita. Con esos criterios vamos a revisar el proyecto."},{id:"innovacion",sec:"01 \xB7 Investigaci\xF3n",code:"I-06",who:"Eduardo",t:40,stage:15,cam:"roof",title:"Tecnolog\xEDa que ya se usa",kicker:"Innovaci\xF3n",body:ke(["Ecotecnias","Calentador solar, focos LED, regaderas y WC ahorradores."],["Hipoteca Verde","Programa del Infonavit que financia esas ecotecnias."],["Sistemas ligeros","Paneles de yeso y de cemento para muros sin carga."])+cn("Infonavit, Hipoteca Verde."),say:"En la investigaci\xF3n tambi\xE9n se revisa qu\xE9 tecnolog\xEDa existe. En vivienda de inter\xE9s social se usan ecotecnias, como el calentador solar que ven en la azotea, focos LED y muebles de ba\xF1o ahorradores; el Infonavit las financia con su programa Hipoteca Verde. Y existen sistemas ligeros, como los paneles de yeso y de cemento, que veremos en la parte de materiales. Le paso la palabra a Jorge."},{id:"des",sec:"02 \xB7 Desarrollo",code:"D-01",who:"Jorge",t:10,stage:15,cam:"plan",mode:"planta",chap:"02",title:"Desarrollo",kicker:"De la necesidad a una propuesta",say:"Gracias, Eduardo. Ahora el desarrollo."},{id:"programa",sec:"02 \xB7 Desarrollo",code:"D-02",who:"Jorge",t:60,stage:15,cam:"plan",mode:"planta",title:"Programa arquitect\xF3nico",kicker:"Una casa de 3 niveles \xB7 4 rec\xE1maras",body:To(["Nivel","Espacios"],[["Planta baja","Sala-comedor, cocina, \xBD ba\xF1o, escalera y patio de servicio"],["Nivel 1","Rec\xE1maras 1 y 2, ba\xF1o completo"],["Nivel 2","Rec\xE1maras 3 y 4, ba\xF1o completo, balc\xF3n"]])+Vi(["\u2248 89","m\xB2","construidos por vivienda"],["\u2248 355","m\xB2","el cu\xE1druplex"]),say:"En el desarrollo se convierte la necesidad en una propuesta. Cada vivienda tiene tres niveles. En planta baja est\xE1n la sala-comedor, la cocina, medio ba\xF1o, la escalera y el patio de servicio. En el nivel 1, dos rec\xE1maras y un ba\xF1o completo, y en el nivel 2 otras dos rec\xE1maras, otro ba\xF1o y el balc\xF3n. Medimos los planos: son unos 89 metros cuadrados construidos por vivienda y unos 355 en todo el cu\xE1druplex."},{id:"modelos",sec:"02 \xB7 Desarrollo",code:"D-03",who:"Jorge",t:50,stage:15,cam:"front",title:"Modelos A y B",kicker:"B \xB7 A \xB7 A \xB7 B",body:ke(["Modelo B","Las casas de los extremos: fachada blanca, balc\xF3n en el \xFAltimo nivel."],["Modelo A","Las dos del centro: recubrimiento gris y balc\xF3n corrido en el nivel 1."],["En espejo","Cada par se refleja para juntar escaleras, ba\xF1os y bajantes."]),say:"Los planos marcan dos modelos: B, A, A, B. Las casas de los extremos son el modelo B, con fachada blanca y balc\xF3n en el \xFAltimo nivel. Las dos del centro son el modelo A, con el recubrimiento gris y un balc\xF3n en el nivel 1. Cada par est\xE1 en espejo, para que las escaleras, los ba\xF1os y las bajantes queden juntos."},{id:"sistema",sec:"02 \xB7 Desarrollo",code:"D-04",who:"Jorge",t:70,stage:9,cam:"hero",title:"Sistema constructivo",kicker:"Propuesta del equipo",body:ke(["Cimentaci\xF3n","Losa de cimentaci\xF3n de concreto armado."],["Muros","Mamposter\xEDa confinada: block de concreto con castillos y dalas."],["Entrepisos y azotea","Losa maciza de concreto de 12 cm."],["Alternativa","Muros divisorios ligeros de tablaroca."])+cn("Los planos que tenemos son arquitect\xF3nicos y de instalaciones; el sistema estructural es una propuesta y se confirma con el estudio de suelos y la memoria de c\xE1lculo."),say:"Luego se elige el sistema constructivo. Los planos que tenemos son arquitect\xF3nicos y de instalaciones, no estructurales, as\xED que esto es una propuesta del equipo, t\xEDpica de este tipo de vivienda: losa de cimentaci\xF3n, muros de mamposter\xEDa confinada, es decir, block de concreto con castillos y dalas, y losas macizas de concreto de 12 cent\xEDmetros en entrepisos y azotea. Como alternativa, los muros divisorios que no cargan pueden ser de tablaroca."},{id:"lab",sec:"02 \xB7 Desarrollo",code:"D-05",who:"Jorge",t:50,stage:9,cam:"frontLow",title:"Pruebas y modelos a escala",kicker:"Laboratorio",body:ke(["Cilindros de concreto","Se ensayan a compresi\xF3n a 7, 14 y 28 d\xEDas (NMX-C-083)."],["Block","Resistencia y absorci\xF3n de las piezas (NMX-C-404 / NMX-C-441)."],["Acero","Varilla corrugada con certificado (NMX-B-506)."],["Maqueta","Esta maqueta 3D es nuestro modelo a escala del proyecto."]),say:"En el desarrollo tambi\xE9n entran las pruebas de laboratorio. Del concreto se toman cilindros que se ensayan a compresi\xF3n a los 7, 14 y 28 d\xEDas; al block se le revisa la resistencia y la absorci\xF3n, y la varilla debe llegar con su certificado de calidad. Y como modelo a escala, hicimos esta maqueta 3D a partir de los planos."},{id:"ep",sec:"03 \xB7 Planeaci\xF3n",code:"P-01",who:"Jorge",t:10,stage:0,cam:"site",chap:"03",title:"Estudios previos",kicker:"Planeaci\xF3n",say:"Ahora la planeaci\xF3n, empezando por los estudios previos."},{id:"localizacion",sec:"03 \xB7 Planeaci\xF3n",code:"P-02",who:"Jorge",t:50,stage:0,cam:"site",title:"Localizaci\xF3n y uso de suelo",kicker:"Estudio previo",body:ke(["Localizaci\xF3n","Lote dentro de un fraccionamiento de vivienda en serie, con calle al frente."],["Uso de suelo","Habitacional, que permita varias viviendas por lote."],["Tr\xE1mites","Alineamiento y n\xFAmero oficial, licencia de construcci\xF3n y de uso de suelo."])+dr("img/foto3.jpg","El prototipo construido en un fraccionamiento (foto del equipo)"),say:"El primer estudio es la localizaci\xF3n y el uso de suelo. El prototipo se construye dentro de un fraccionamiento, con la calle al frente, como ven en la foto. El municipio tiene que autorizar un uso de suelo habitacional que permita varias viviendas por lote, y antes de construir se tramitan el alineamiento y n\xFAmero oficial, y las licencias de uso de suelo y de construcci\xF3n."},{id:"factibilidad",sec:"03 \xB7 Planeaci\xF3n",code:"P-03",who:"Jorge",t:50,stage:15,cam:"xray",mode:"xray",title:"Factibilidades",kicker:"Agua, drenaje y energ\xEDa",body:ke(["Agua potable","El organismo operador del municipio confirma que puede dar el servicio."],["Drenaje","Descarga del alba\xF1al a la red municipal."],["Energ\xEDa","CFE: los planos indican acometida subterr\xE1nea y un medidor por vivienda."]),say:"Despu\xE9s vienen las factibilidades: el organismo de agua del municipio debe confirmar que puede dar agua potable y recibir el drenaje, y la CFE que puede dar energ\xEDa. En los planos se ve que la acometida de la CFE es subterr\xE1nea y que cada vivienda tiene su propio medidor."},{id:"mercado",sec:"03 \xB7 Planeaci\xF3n",code:"P-04",who:"Jorge",t:50,stage:15,cam:"front",title:"Mercado y beneficios",kicker:"\xBFPara qui\xE9n es?",body:ke(["Mercado","Trabajadores con cr\xE9dito Infonavit, familias de 4 a 6 personas."],["Beneficio social","Casa propia con 4 rec\xE1maras en poco terreno."],["Beneficio econ\xF3mico","Obra en serie: menor costo por vivienda."]),say:"El estudio de mercado define para qui\xE9n es la vivienda: trabajadores con cr\xE9dito Infonavit y familias de cuatro a seis personas, que necesitan cuatro rec\xE1maras. El beneficio esperado es social, porque es casa propia en poco terreno, y econ\xF3mico, porque la obra en serie baja el costo de cada vivienda. Miguel sigue con los estudios t\xE9cnicos."},{id:"suelos",sec:"03 \xB7 Planeaci\xF3n",code:"P-05",who:"Miguel",t:70,stage:5,cam:"ground",title:"Mec\xE1nica de suelos",kicker:"\xBFAguanta el terreno?",body:ke(["Sondeos","Pozos a cielo abierto y muestras del terreno."],["Laboratorio","Tipo de suelo, humedad y capacidad de carga."],["Resultado","Define el tipo de cimentaci\xF3n; aqu\xED proponemos losa de cimentaci\xF3n."])+Ct("Sin este estudio no se puede asegurar qu\xE9 cimentaci\xF3n lleva el edificio: puede haber asentamientos y grietas."),say:"Gracias, Jorge. El estudio de mec\xE1nica de suelos dice si el terreno aguanta. Se hacen sondeos o pozos a cielo abierto, se sacan muestras y en el laboratorio se obtiene el tipo de suelo, su humedad y su capacidad de carga. Con eso se decide la cimentaci\xF3n. Nosotros proponemos una losa de cimentaci\xF3n, que reparte el peso en toda el \xE1rea, pero sin el estudio no se puede asegurar; si se elige mal aparecen asentamientos y grietas."},{id:"estructural",sec:"03 \xB7 Planeaci\xF3n",code:"P-06",who:"Miguel",t:70,stage:9,cam:"section",mode:"corte",title:"Dise\xF1o estructural y por sismo",kicker:"Estudio previo",body:ke(["Cargas","Peso propio, muros, muebles y personas en 3 niveles."],["Sismo","Se dise\xF1a seg\xFAn la zona s\xEDsmica del sitio (Manual de Obras Civiles de CFE)."],["Muros confinados","Castillos y dalas amarran los muros para que trabajen juntos."])+cn("CFE, Manual de Dise\xF1o de Obras Civiles, Dise\xF1o por sismo (2015); reglamento de construcci\xF3n del municipio."),say:"El dise\xF1o estructural calcula las cargas: el peso de las losas y muros, los muebles y las personas en los tres niveles. Y el dise\xF1o por sismo depende de la zona s\xEDsmica del sitio, seg\xFAn el Manual de Obras Civiles de la CFE y el reglamento del municipio. En mamposter\xEDa confinada, los castillos y las dalas amarran los muros para que trabajen juntos durante un sismo."},{id:"instal",sec:"03 \xB7 Planeaci\xF3n",code:"P-07",who:"Miguel",t:60,stage:11,cam:"xray",mode:"xray",title:"Estudio de instalaciones",kicker:"Lo que dicen los planos",body:Vi(["3,540","W","carga instalada, modelo A"],["5,220","W","carga futura"],["27.47","A","demanda al 60 %"])+Ct("Cada vivienda tiene un centro de carga con 4 circuitos de 20 A: planta baja, nivel 1, nivel 2 y lavadora."),say:"El estudio de instalaciones ya viene en los planos. La carga el\xE9ctrica instalada es de 3,540 watts en el modelo A y 3,480 en el modelo B; con crecimiento futuro llegar\xEDa a 5,220 watts, y la demanda calculada al 60 % es de 27.47 amperes. Cada casa tiene un centro de carga con cuatro circuitos de 20 amperes: uno por nivel y uno para la lavadora."},{id:"vial",sec:"03 \xB7 Planeaci\xF3n",code:"P-08",who:"Miguel",t:70,stage:15,cam:"site",title:"Vial, ambiental y pavimentos",kicker:"Estudios previos",body:ke(["Estudio vial","Calle local del fraccionamiento y un caj\xF3n de estacionamiento por casa."],["Impacto ambiental","Manejo de residuos de obra, polvo y ruido; \xE1rboles en cada frente."],["Pavimentos","Calle de asfalto; cajones con placas de concreto y pasto que dejan infiltrar el agua."]),say:"El estudio vial revisa los accesos: el cu\xE1druplex da a una calle local y cada casa tiene su caj\xF3n de estacionamiento. El impacto ambiental cuida los residuos de obra, el polvo y el ruido, y en las fotos se ve un \xE1rbol en cada frente. Y la estructura de pavimentos: la calle es de asfalto, y los cajones tienen placas de concreto con pasto, que dejan que el agua de lluvia se infiltre."},{id:"cuant",sec:"04 \xB7 Cuantificaci\xF3n",code:"C-01",who:"Miguel",t:10,stage:9,cam:"hero",chap:"04",title:"Cuantificaci\xF3n",kicker:"Planeaci\xF3n",say:"Ahora la cuantificaci\xF3n."},{id:"insumos",sec:"04 \xB7 Cuantificaci\xF3n",code:"C-02",who:"Miguel",t:50,stage:9,cam:"hero",title:"Los insumos",kicker:"Lo que se necesita para construir",body:ke(["Materiales","Concreto, acero, block, mortero, tuber\xEDa, cable, canceler\xEDa."],["Mano de obra","Alba\xF1iles, fierreros, carpinteros de cimbra, plomeros, electricistas."],["Maquinaria y equipo","Tractor, retroexcavadora, revolvedora, vibrador, generador."]),say:"Los insumos son todo lo que interviene en la obra: los materiales, la mano de obra y la maquinaria. Materiales como concreto, acero y block; mano de obra como alba\xF1iles, fierreros y plomeros; y equipo como el tractor, la revolvedora o el generador."},{id:"explosion",sec:"04 \xB7 Cuantificaci\xF3n",code:"C-03",who:"Miguel",t:70,stage:10,cam:"site",title:"Explosi\xF3n de insumos",kicker:"Estimaci\xF3n del equipo con las medidas de los planos",body:To(["Concepto","Cantidad","Insumos"],[["Concreto f'c 250","\u2248 81 m\xB3","cemento \u2248 620 bultos \xB7 arena \u2248 42 m\xB3 \xB7 grava \u2248 55 m\xB3"],["Acero de refuerzo","\u2248 7.6 t","varilla y malla"],["Muros de block 12\xD720\xD740","\u2248 676 m\xB2","\u2248 8,450 piezas \xB7 8 m\xB3 de mortero"],["Aplanados","\u2248 1,350 m\xB2","cemento \u2248 175 bultos \xB7 arena \u2248 31 m\xB3"]],["Total cu\xE1druplex","","\u2248 850 bultos de cemento \xB7 82 m\xB3 de arena"])+cn("Proporciones por m\xB3: concreto 7.6 bultos, 0.52 m\xB3 de arena, 0.68 m\xB3 de grava; block 12.5 piezas por m\xB2. Cantidades aproximadas, sin desperdicio."),say:"La explosi\xF3n de insumos descompone cada concepto en sus materiales. Con las medidas de los planos estimamos unos 81 metros c\xFAbicos de concreto, que se convierten en unos 620 bultos de cemento, 42 metros c\xFAbicos de arena y 55 de grava; unas 7.6 toneladas de acero; unos 676 metros cuadrados de muro, que son unas 8,450 piezas de block; y los aplanados. En total, unos 850 bultos de cemento para todo el cu\xE1druplex, o sea unos 212 por vivienda. Son cantidades aproximadas, sin desperdicio. Daniel sigue con el dise\xF1o."},{id:"dis",sec:"05 \xB7 Dise\xF1o",code:"A-01",who:"Daniel",t:10,stage:15,cam:"front",chap:"05",title:"Dise\xF1o",kicker:"Planos, renders y especificaciones",say:"Gracias, Miguel. Pasamos al dise\xF1o."},{id:"render",sec:"05 \xB7 Dise\xF1o",code:"A-02",who:"Daniel",t:50,stage:15,cam:"hero",title:"Renders",kicker:"Maqueta 3D del equipo",body:Ct("Modelamos el cu\xE1druplex en 3D con las cotas de los planos: 4 frentes de 2.994 m, 9.885 m de fondo y 3 niveles de 2.62 m.")+dr("img/foto2.jpg","La obra terminada (foto del equipo)"),say:"Para el dise\xF1o hicimos los renders con esta maqueta 3D. La armamos con las cotas de los planos: cuatro frentes de 2.994 metros, 9.885 de fondo y tres niveles de 2.62. Si la comparan con la foto, coinciden la franja gris del centro, los balcones y la herrer\xEDa de las ventanas."},{id:"planos",sec:"05 \xB7 Dise\xF1o",code:"A-03",who:"Daniel",t:70,stage:15,cam:"front",title:"Planos arquitect\xF3nicos",kicker:"Fachadas",body:dr("img/plano_fachadas.jpg","Fachada principal, posterior y lateral")+Ct("La fachada principal muestra el orden B \xB7 A \xB7 A \xB7 B y los tres niveles; la posterior, las ventanas de rec\xE1maras y el patio de servicio."),say:"Estos son los planos arquitect\xF3nicos. Arriba est\xE1 la fachada principal, con los modelos B, A, A, B y los tres niveles. En medio, la fachada posterior, donde est\xE1n las ventanas de las rec\xE1maras y las puertas al patio de servicio. Y abajo la fachada lateral, que muestra el perfil del edificio."},{id:"plantas",sec:"05 \xB7 Dise\xF1o",code:"A-04",who:"Daniel",t:70,stage:15,cam:"plan",mode:"planta",title:"Plantas y cortes",kicker:"C\xF3mo se reparte cada casa",body:dr("img/plano_plantas.jpg","Planta baja, plantas de niveles 1-2 y azotea")+Ct("La maqueta est\xE1 cortada a 1.3 m, como se dibuja una planta arquitect\xF3nica."),say:"Las plantas arquitect\xF3nicas son cortes horizontales a una altura de 1.3 metros, como el que estamos haciendo en la maqueta. Se ven la cocina al fondo, el medio ba\xF1o y la escalera al centro y la sala-comedor al frente. Los cortes, en cambio, son verticales, y muestran las alturas, la escalera y c\xF3mo se apilan las rec\xE1maras."},{id:"hidro",sec:"05 \xB7 Dise\xF1o",code:"IH-01",who:"Daniel",t:60,stage:15,cam:"xray",mode:"xray",title:"Instalaci\xF3n hidrosanitaria",kicker:"Rayos X de la maqueta",body:ke(["Agua potable","Del tinaco baja la tuber\xEDa a ba\xF1os y cocina (azul)."],["Sanitaria","Bajantes junto a los ba\xF1os y alba\xF1al hacia el frente (gris)."],["Ba\xF1os alineados","Los de nivel 1 y 2 est\xE1n uno sobre otro."])+dr("img/plano_hidro.jpg","Plano hidrosanitario de planta baja y ba\xF1os"),say:"Con rayos X vemos la instalaci\xF3n hidrosanitaria. En azul, el agua baja del tinaco a los ba\xF1os y a la cocina. En gris, las bajantes sanitarias, junto a los ba\xF1os, que llevan las aguas negras al alba\xF1al y de ah\xED a la red municipal. Los ba\xF1os del nivel 1 y del nivel 2 est\xE1n uno encima del otro para usar una sola bajante."},{id:"electrica",sec:"05 \xB7 Dise\xF1o",code:"IE-01",who:"Daniel",t:70,stage:15,cam:"xray",mode:"xray",title:"Instalaci\xF3n el\xE9ctrica",kicker:"Diagrama unifilar por vivienda",body:To(["","Modelo A","Modelo B"],[["Carga instalada","3,540 W \xB7 31.05 A","3,480 W \xB7 30.52 A"],["Carga futura","5,220 W \xB7 45.78 A","5,220 W \xB7 45.78 A"],["Demanda al 60 %","3,132 W \xB7 27.47 A","3,132 W \xB7 27.47 A"]])+Ct("Acometida subterr\xE1nea de CFE \u2192 medidor \u2192 interruptor de 4 circuitos de 20 A (PB, N-1, N-2 y lavadora)."),say:"La instalaci\xF3n el\xE9ctrica viene en el diagrama unifilar de cada vivienda. Empieza en la acometida subterr\xE1nea de la CFE, pasa por el medidor y llega a un interruptor de cuatro circuitos de 20 amperes. La carga instalada es de 3,540 watts en el modelo A y 3,480 en el B, y la demanda que se calcula, al 60 %, es de 3,132 watts, unos 27.5 amperes."},{id:"especificaciones",sec:"05 \xB7 Dise\xF1o",code:"A-05",who:"Daniel",t:70,stage:15,cam:"frontLow",title:"Especificaciones y memoria descriptiva",kicker:"Lo que se pide por escrito",body:ke(["Concreto","f'c = 250 kg/cm\xB2 en losas y cimentaci\xF3n."],["Acero","Varilla corrugada fy = 4,200 kg/cm\xB2."],["Muros","Block de concreto 12\xD720\xD740 cm, junteado con mortero cemento-arena 1:4."],["Acabados","Aplanado y pintura blanca; recubrimiento gris en la fachada central; impermeabilizante en azotea."],["Memoria","Describe el proyecto, \xE1reas, sistema constructivo y materiales."]),say:"Las especificaciones dicen con qu\xE9 calidad se construye: concreto de 250 kilogramos por cent\xEDmetro cuadrado en losas y cimentaci\xF3n, varilla de 4,200, muros de block de 12 por 20 por 40 junteados con mortero 1 a 4, y acabados como el aplanado y la pintura blanca, el recubrimiento gris del centro y el impermeabilizante de la azotea. La memoria descriptiva junta todo eso por escrito: el proyecto, las \xE1reas, el sistema y los materiales. Le paso la palabra a Diego."},{id:"con",sec:"06 \xB7 Construcci\xF3n",code:"E-01",who:"Diego",t:10,stage:0,cam:"site",chap:"06",yard:!0,title:"Construcci\xF3n",kicker:"Ejecuci\xF3n f\xEDsica",say:"Gracias, Daniel. Ahora vamos a construirlo."},{id:"despalme",sec:"06 \xB7 Construcci\xF3n",code:"E-02",who:"Diego",t:40,stage:1,cam:"site",yard:!0,title:"Limpieza y despalme",kicker:"Paso 1",body:Ct("Se retira la maleza y la capa vegetal (despalme), que no sirve para cimentar. Aqu\xED trabaja el tractor."),say:"Primero se limpia el terreno: se quita la maleza y la capa vegetal, a lo que se le llama despalme, porque esa tierra no sirve para cimentar. Aqu\xED trabaja el tractor, que veremos en la parte de materiales."},{id:"trazo",sec:"06 \xB7 Construcci\xF3n",code:"E-03",who:"Diego",t:40,stage:2,cam:"top",title:"Trazo y nivelaci\xF3n",kicker:"Paso 2",body:Ct("Se pasan los ejes del plano al terreno con estaci\xF3n total o cinta, estacas e hilos, y se fija el nivel de referencia."),say:"Luego viene el trazo: los ejes del plano, del 1 al 9 y de la A a la H, se marcan en el terreno con estacas e hilos, usando estaci\xF3n total o cinta, y se fija el nivel de referencia. Un error aqu\xED mueve toda la casa."},{id:"cimentacion",sec:"06 \xB7 Construcci\xF3n",code:"E-04",who:"Diego",t:60,stage:5,cam:"ground",title:"Excavaci\xF3n y cimentaci\xF3n",kicker:"Pasos 3 y 4",body:ke(["Excavaci\xF3n","Se rebaja el terreno y se compacta."],["Armado","Se coloca la parrilla de acero de la losa de cimentaci\xF3n."],["Colado","Concreto premezclado, vibrado y curado."]),say:"Despu\xE9s se excava y se compacta el fondo. Se arma la parrilla de acero de la losa de cimentaci\xF3n y se cuela con concreto premezclado, que se vibra para que no queden huecos y se cura con agua varios d\xEDas para que alcance su resistencia."},{id:"murospb",sec:"06 \xB7 Construcci\xF3n",code:"E-05",who:"Diego",t:50,stage:6,cam:"hero",title:"Muros de planta baja",kicker:"Paso 5",body:Ct("Se levantan los muros de block a plomo y a nivel, con castillos en las esquinas y cruces. Arriba se cuela una dala que los amarra."),say:"Sobre la cimentaci\xF3n se levantan los muros de planta baja, revisando que queden a plomo y a nivel. En las esquinas y los cruces van castillos de concreto, y arriba una dala que amarra todos los muros."},{id:"losas",sec:"06 \xB7 Construcci\xF3n",code:"E-06",who:"Diego",t:50,stage:10,cam:"hero",title:"Losas y niveles superiores",kicker:"Pasos 6 a 8",body:Ct("Se cimbra con puntales y triplay, se arma y se cuela la losa; sobre ella se repiten muros y losa hasta la azotea y el pretil."),say:"Para la losa se cimbra con puntales y triplay, se arma el acero y se cuela. Encima se repite el ciclo: muros del nivel 1, losa, muros del nivel 2 y la losa de azotea con su pretil."},{id:"acabados",sec:"06 \xB7 Construcci\xF3n",code:"E-07",who:"Diego",t:50,stage:14,cam:"hero",title:"Instalaciones y acabados",kicker:"Pasos 9 y 10",body:Ct("Se meten tuber\xEDas y cables y se prueban antes de taparlos. Despu\xE9s: aplanados, impermeabilizante, recubrimiento, canceler\xEDa, pisos y pintura."),say:"Con la estructura lista se meten las tuber\xEDas y los cables, y se prueban antes de taparlos, porque una fuga despu\xE9s obliga a romper. Luego vienen los acabados: aplanados, impermeabilizante, el recubrimiento gris, la canceler\xEDa, los pisos y la pintura."},{id:"entrega",sec:"06 \xB7 Construcci\xF3n",code:"E-08",who:"Diego",t:30,stage:15,cam:"front",title:"Exteriores y entrega",kicker:"Paso 11",body:dr("img/foto1.jpg","Cajones con placas y pasto, \xE1rboles al frente (foto del equipo)"),say:"Al final se hacen los cajones con placas de concreto y pasto, se plantan los \xE1rboles, se limpia y se revisa todo antes de entregar."},{id:"programa_obra",sec:"06 \xB7 Construcci\xF3n",code:"E-09",who:"Diego",t:70,stage:15,cam:"site",title:"Programa de obra",kicker:"Propuesta del equipo \xB7 un cu\xE1druplex en \u2248 19 semanas",body:Wv()+cn("Duraciones estimadas por el equipo; las actividades se traslapan por frentes de trabajo."),say:"Todo esto se organiza en el programa de obra. Nuestra propuesta es de unas 19 semanas por cu\xE1druplex. La limpieza y el trazo toman una semana, la cimentaci\xF3n dos, y cada nivel unas tres. Las instalaciones avanzan en paralelo desde la semana 6, y los acabados se traslapan con los \xFAltimos niveles. En un fraccionamiento se trabaja en serie: mientras un edificio est\xE1 en acabados, el siguiente ya est\xE1 en muros. David sigue con el cat\xE1logo y el presupuesto."},{id:"catalogo",sec:"06 \xB7 Construcci\xF3n",code:"E-10",who:"David",t:60,stage:15,cam:"hero",title:"Cat\xE1logo de conceptos",kicker:"Cada trabajo con su unidad",body:To(["Clave","Concepto","Unidad"],[["PRE-01","Limpieza, despalme y trazo","m\xB2"],["CIM-01","Losa de cimentaci\xF3n f'c 250","m\xB3"],["ALB-01","Muro de block 12\xD720\xD740","m\xB2"],["EST-01","Losa maciza 12 cm","m\xB2"],["INS-01","Salida hidr\xE1ulica / el\xE9ctrica","salida"],["ACA-01","Aplanado y pintura","m\xB2"]]),say:"Gracias, Diego. El cat\xE1logo de conceptos es la lista de todos los trabajos de la obra, cada uno con su clave, su descripci\xF3n y su unidad: metros cuadrados de limpieza y de muro, metros c\xFAbicos de cimentaci\xF3n, salidas hidr\xE1ulicas y el\xE9ctricas, metros cuadrados de aplanado y pintura. Con \xE9l se cotiza y se paga lo que se avanza."},{id:"presupuesto",sec:"06 \xB7 Construcci\xF3n",code:"E-11",who:"David",t:70,stage:15,cam:"site",title:"Presupuesto",kicker:"Estimaci\xF3n param\xE9trica 2026",body:Vi(["\u2248 3.37","M$","el cu\xE1druplex"],["\u2248 843","mil $","por vivienda"],["1,283","$/m\xB2","solo mano de obra (IMSS)"])+Ct("355 m\xB2 \xD7 \u2248 $9,500/m\xB2 de construcci\xF3n de inter\xE9s social, sin terreno, urbanizaci\xF3n, licencias ni utilidad.")+cn("Costo de mano de obra: IMSS, DOF 06-02-2026, casa habitaci\xF3n de inter\xE9s social. Costo total por m\xB2: referencias comerciales 2026 ($8,000\u201313,000/m\xB2)."),say:"Para el presupuesto hicimos una estimaci\xF3n param\xE9trica. Si 355 metros cuadrados se construyen a unos 9,500 pesos por metro cuadrado, que es un valor de referencia de 2026 para inter\xE9s social, el cu\xE1druplex cuesta unos 3.37 millones de pesos, unos 843 mil por vivienda, sin contar terreno, urbanizaci\xF3n, licencias ni utilidad. Como dato oficial, el IMSS public\xF3 en febrero de 2026 que la mano de obra de una casa de inter\xE9s social cuesta 1,283 pesos por metro cuadrado."},{id:"normas",sec:"06 \xB7 Construcci\xF3n",code:"E-12",who:"David",t:70,stage:15,cam:"frontLow",title:"Normatividad y reglamentos",kicker:"Lo que aplica a esta obra",body:ke(["Reglamento de construcci\xF3n","Del municipio: licencias, seguridad estructural y por sismo."],["C\xF3digo de Edificaci\xF3n de Vivienda","CONAVI, 2017."],["NOM-001-SEDE-2012","Instalaciones el\xE9ctricas."],["NOM-031-STPS-2011","Seguridad en obras de construcci\xF3n."],["NOM-020-ENER-2011","Envolvente de edificios de uso habitacional."],["NMX-C-404 \xB7 NMX-B-506 \xB7 NMX-C-155","Block, varilla y concreto premezclado."]),say:"La normatividad que aplica empieza por el reglamento de construcci\xF3n del municipio y el C\xF3digo de Edificaci\xF3n de Vivienda de la CONAVI. Adem\xE1s, la NOM-001-SEDE de instalaciones el\xE9ctricas, la NOM-031-STPS de seguridad en obras de construcci\xF3n y la NOM-020-ENER, que limita la ganancia de calor de la envolvente de las viviendas. Y las normas mexicanas de calidad del block, de la varilla y del concreto premezclado."},{id:"op",sec:"07 \xB7 Operaci\xF3n",code:"O-01",who:"David",t:60,stage:15,cam:"front",chap:"07",title:"Operaci\xF3n",kicker:"Puesta en funcionamiento",body:ke(["Pruebas","Hermeticidad de tuber\xEDas, circuitos y servicios conectados."],["Entrega","Acta de entrega, escrituras y cr\xE9dito Infonavit."],["Vivir la casa","Contrato de luz y agua por vivienda; un caj\xF3n por casa."]),say:"Pasamos a la operaci\xF3n, que es cuando la obra empieza a funcionar. Antes de entregar se prueban las tuber\xEDas y los circuitos y se conectan los servicios. Luego se firma el acta de entrega y las escrituras con el cr\xE9dito Infonavit, y cada familia contrata su luz y su agua, porque cada vivienda tiene su medidor."},{id:"mant",sec:"08 \xB7 Mantenimiento",code:"M-01",who:"David",t:70,stage:15,cam:"roof",chap:"08",title:"Mantenimiento",kicker:"Manual y garant\xEDas",body:ke(["Manual del propietario","Qu\xE9 revisar y cada cu\xE1ndo."],["Garant\xEDas (LFPC art. 73 Qu\xE1ter)","5 a\xF1os estructura \xB7 3 a\xF1os impermeabilizaci\xF3n \xB7 1 a\xF1o lo dem\xE1s."],["Rutina","Impermeabilizar, limpiar tinaco y bajantes, revisar el calentador solar, pintar."])+cn("Ley Federal de Protecci\xF3n al Consumidor, art. 73 Qu\xE1ter."),say:"Para el mantenimiento, la constructora entrega un manual del propietario. Por ley, el art\xEDculo 73 Qu\xE1ter de la Ley Federal de Protecci\xF3n al Consumidor, la garant\xEDa m\xEDnima es de 5 a\xF1os en la estructura, 3 en la impermeabilizaci\xF3n y 1 a\xF1o en lo dem\xE1s. La rutina es reimpermeabilizar la azotea, lavar el tinaco, limpiar bajantes, revisar el calentador solar y pintar."},{id:"rehab",sec:"09 \xB7 Rehabilitaci\xF3n",code:"R-01",who:"David",t:70,stage:15,cam:"section",mode:"corte",quake:!0,chap:"09",title:"Rehabilitaci\xF3n",kicker:"Fen\xF3menos naturales",body:ke(["Sismo","Revisar grietas en muros, castillos y losas; reforzar con malla y mortero o encamisado."],["Hundimiento","Nivelar y reparar grietas; vigilar la cimentaci\xF3n."],["Inundaci\xF3n","Desazolvar drenaje, secar muros y cambiar instalaciones da\xF1adas."],["Lluvias y granizo","Reparar impermeabilizante y tinacos."]),say:"Y la rehabilitaci\xF3n es lo que se hace cuando un fen\xF3meno natural da\xF1a la obra. Despu\xE9s de un sismo se revisan grietas en muros, castillos y losas, y se refuerzan con malla y mortero o con encamisado. Con hundimientos, se renivela y se vigila la cimentaci\xF3n. Despu\xE9s de una inundaci\xF3n se desazolva el drenaje, se secan los muros y se cambian las instalaciones da\xF1adas. Y con lluvias y granizo se repara el impermeabilizante. Eduardo cierra."},{id:"cierre",sec:"Cierre",code:"99",who:"Eduardo",t:50,stage:15,cam:"hero",title:"Conclusi\xF3n",kicker:"De una necesidad a 4 hogares",body:Ct("Investigar, desarrollar, planear, dise\xF1ar y construir bien convierte 118 m\xB2 de terreno en 4 viviendas seguras de 4 rec\xE1maras.")+Ct("Ahora, la segunda parte: materiales y equipos."),say:"Para cerrar: el cu\xE1druplex muestra que, si se investiga, se planea, se dise\xF1a y se construye bien, en unos 118 metros cuadrados de terreno caben cuatro viviendas seguras de cuatro rec\xE1maras. Eso es lo que busca la vivienda de inter\xE9s social: que sea barata, s\xED, pero tambi\xE9n segura, habitable y duradera. Ahora pasamos a la segunda parte: materiales y equipos."},{id:"mat",sec:"Materiales y equipos",code:"MQ-00",who:"Eduardo",t:20,stage:15,cam:"yard",yard:!0,chap:"M",title:"Materiales y equipos",kicker:"Segunda parte \xB7 20 minutos",body:Ao("Tractores \xB7 Eduardo","Paneles de yeso \xB7 Jorge","Paneles de cemento \xB7 Miguel","Paneles aglomerados de madera \xB7 Daniel","Transporte de materiales y de maquinaria \xB7 Diego","Generadores de energ\xEDa \xB7 David"),say:"En la segunda parte cada uno presenta un material o equipo, en este orden: tractores, paneles de yeso, paneles de cemento, aglomerados de madera, transporte de materiales y de maquinaria, y generadores de energ\xEDa. Empiezo yo con los tractores."},{id:"tractor1",sec:"Materiales \xB7 Tractores",code:"MQ-01",who:"Eduardo",t:60,stage:15,cam:"tractor",yard:!0,title:"Tractores",kicker:"Equipo \xB7 Eduardo",body:ke(["Qu\xE9 es","M\xE1quina de empuje con hoja frontal; puede llevar desgarrador (ripper) atr\xE1s."],["Tipos","De orugas (cadenas) y de neum\xE1ticos."],["En esta obra","Desmonte, despalme, cortes y nivelaci\xF3n de plataformas del fraccionamiento."]),say:"El tractor es una m\xE1quina de empuje: tiene una hoja al frente para mover tierra y puede llevar atr\xE1s un desgarrador, o ripper, para romper suelo duro. Hay tractores de orugas, que son los de cadenas, y de neum\xE1ticos. En un fraccionamiento como este se usan para el desmonte, el despalme, los cortes y la nivelaci\xF3n de las plataformas donde se desplantan los edificios."},{id:"tractor2",sec:"Materiales \xB7 Tractores",code:"MQ-02",who:"Eduardo",t:70,stage:15,cam:"tractor",yard:!0,title:"Un ejemplo: Cat D6",kicker:"Ficha t\xE9cnica",body:Vi(["136","kW","\u2248 182 hp (D6N)"],["\u2248 16.8","t","peso de operaci\xF3n (XL)"],["\u2248 18.3","t","versi\xF3n LGP"])+ke(["Orugas","M\xE1s tracci\xF3n y menos presi\xF3n sobre suelos blandos."],["Neum\xE1ticos","M\xE1s velocidad entre frentes de obra; menos da\xF1o al pavimento."])+cn("Caterpillar, ficha t\xE9cnica D6N."),say:"Un ejemplo es el Caterpillar D6, muy usado en M\xE9xico. El modelo D6N tiene un motor de 136 kilowatts, unos 182 caballos, y pesa unas 16.8 toneladas, o 18.3 en la versi\xF3n para suelos blandos. Los de orugas tienen m\xE1s tracci\xF3n y reparten mejor el peso en suelo blando; los de neum\xE1ticos son m\xE1s r\xE1pidos para moverse entre frentes y maltratan menos el pavimento."},{id:"tractor3",sec:"Materiales \xB7 Tractores",code:"MQ-03",who:"Eduardo",t:50,stage:15,cam:"tractor",yard:!0,title:"Uso seguro y costo",kicker:"Lo que hay que considerar",body:ke(["Operador","Capacitado; nadie se acerca al radio de giro ni a la hoja."],["Seguridad","NOM-031-STPS-2011: se\xF1alizaci\xF3n, alarma de reversa y equipo de protecci\xF3n."],["Traslado","No circula por calle: se lleva en cama baja (lo explica Diego)."],["Costo","Se cobra por hora de trabajo, con operador y combustible."]),say:"Para usarlo con seguridad se necesita un operador capacitado y nadie debe acercarse al radio de giro ni a la hoja; la NOM-031 de la STPS pide se\xF1alizaci\xF3n, alarma de reversa y equipo de protecci\xF3n. El tractor no puede circular por la calle, as\xED que se transporta en una cama baja, como explicar\xE1 Diego. Y normalmente se renta por hora, con operador y combustible. Le paso la palabra a Jorge."},{id:"yeso1",sec:"Materiales \xB7 Paneles de yeso",code:"MQ-04",who:"Jorge",t:60,stage:15,cam:"panels",yard:!0,title:"Paneles de yeso",kicker:"Material \xB7 Jorge",body:ke(["Qu\xE9 es","N\xFAcleo de yeso entre dos caras de papel (tablaroca)."],["Medida",'1.22 \xD7 2.44 m; espesor com\xFAn 12.7 mm (\xBD").'],["Peso","\u2248 8 kg/m\xB2 el regular; \u2248 10 kg/m\xB2 el resistente al fuego."])+cn("USG M\xE9xico, fichas t\xE9cnicas Tablaroca (regular, antimoho y Firecode)."),say:"El panel de yeso, que mucha gente conoce como tablaroca, es un n\xFAcleo de yeso entre dos caras de papel. Viene en hojas de 1.22 por 2.44 metros, y el espesor m\xE1s com\xFAn es de 12.7 mil\xEDmetros, media pulgada. Es ligero: unos 8 kilos por metro cuadrado el regular y unos 10 el resistente al fuego."},{id:"yeso2",sec:"Materiales \xB7 Paneles de yeso",code:"MQ-05",who:"Jorge",t:70,stage:15,cam:"panelWall",yard:!0,title:"Tipos y sistema",kicker:"C\xF3mo se instala",body:ke(["Regular","Muros y plafones interiores secos."],["Resistente a la humedad","Ba\xF1os y cocinas, sin contacto directo con agua."],["Resistente al fuego","Tipo X o C, con n\xFAcleo reforzado."],["Sistema","Bastidor de canales y postes met\xE1licos a 61 o 40.6 cm, tornillos, cinta y compuesto."]),say:"Hay paneles regulares para muros y plafones interiores, resistentes a la humedad para ba\xF1os y cocinas, y resistentes al fuego, los tipo X o C. Se instalan sobre un bastidor de canales y postes met\xE1licos, separados a 61 o a 40.6 cent\xEDmetros, como el que ven en la maqueta; se atornillan, y las juntas se tapan con cinta y compuesto."},{id:"yeso3",sec:"Materiales \xB7 Paneles de yeso",code:"MQ-06",who:"Jorge",t:70,stage:15,cam:"panelWall",yard:!0,title:"Ventajas y l\xEDmites",kicker:"En la vivienda",body:ke(["Ventajas","R\xE1pido, limpio, ligero y sin tiempo de secado; facilita meter instalaciones."],["L\xEDmites","No es estructural, no va a la intemperie y se da\xF1a con el agua."],["En el cu\xE1druplex","Muros divisorios ligeros, closets y plafones."]),say:"Sus ventajas son que se instala r\xE1pido, en seco y sin esperar secado, pesa poco y por dentro se pueden pasar tuber\xEDas y cables. Sus l\xEDmites: no carga, no va al exterior y se da\xF1a con el agua. En un cu\xE1druplex servir\xEDa para muros divisorios que no cargan, closets y plafones. Sigue Miguel."},{id:"cem1",sec:"Materiales \xB7 Paneles de cemento",code:"MQ-07",who:"Miguel",t:60,stage:15,cam:"panels",yard:!0,title:"Paneles de cemento",kicker:"Material \xB7 Miguel",body:ke(["Qu\xE9 es","Cemento portland con agregados ligeros, reforzado con malla de fibra de vidrio (por ejemplo Durock)."],["Medida","1.22 \xD7 2.44 m; 12.7 mm de espesor."],["Peso","\u2248 13 kg/m\xB2 (Durock Forte)."])+cn("USG M\xE9xico, ficha t\xE9cnica Durock Forte."),say:"El panel de cemento est\xE1 hecho de cemento portland con agregados ligeros y reforzado con malla de fibra de vidrio; el m\xE1s conocido es el Durock. Tambi\xE9n mide 1.22 por 2.44 metros y 12.7 mil\xEDmetros, pero pesa m\xE1s que el de yeso: unos 13 kilos por metro cuadrado."},{id:"cem2",sec:"Materiales \xB7 Paneles de cemento",code:"MQ-08",who:"Miguel",t:70,stage:15,cam:"panelWall",yard:!0,title:"D\xF3nde se usa",kicker:"Exterior y zonas h\xFAmedas",body:ke(["Fachadas","Muros exteriores ligeros y bardas."],["Ba\xF1os","Base para azulejo en regaderas."],["No le afecta el agua","No se pudre ni se deforma, a diferencia del yeso."],["Cuidado","No dejarlo a la intemperie sin recubrir m\xE1s de 90 d\xEDas."]),say:"Como no le afecta el agua, se usa en fachadas, bardas y muros exteriores ligeros, y como base para el azulejo en las regaderas. A diferencia del yeso, no se pudre ni se deforma con la humedad. El fabricante pide no dejarlo a la intemperie sin recubrir m\xE1s de 90 d\xEDas."},{id:"cem3",sec:"Materiales \xB7 Paneles de cemento",code:"MQ-09",who:"Miguel",t:70,stage:15,cam:"panelWall",yard:!0,title:"C\xF3mo se instala",kicker:"Sistema",body:Ao("Bastidor met\xE1lico galvanizado","Tornillos especiales para cemento","Cinta de malla de fibra de vidrio en juntas","Basecoat y acabado final")+Ct("En el cu\xE1druplex: muros h\xFAmedos de ba\xF1o o un cuarto extra en la azotea."),say:"Se instala sobre un bastidor met\xE1lico galvanizado, con tornillos especiales; las juntas llevan cinta de malla de fibra de vidrio y todo se cubre con basecoat antes del acabado. En el cu\xE1druplex se podr\xEDa usar en los muros h\xFAmedos de los ba\xF1os o para una ampliaci\xF3n ligera. Sigue Daniel."},{id:"mad1",sec:"Materiales \xB7 Aglomerados de madera",code:"MQ-10",who:"Daniel",t:60,stage:15,cam:"panels",yard:!0,title:"Paneles aglomerados de madera",kicker:"Material \xB7 Daniel",body:ke(["Aglomerado (MDP)","Part\xEDculas de madera prensadas con resina."],["OSB","Hojuelas orientadas en capas cruzadas: m\xE1s resistente."],["MDF","Fibras finas: superficie lisa para muebles."])+Vi(["590\u2013680","kg/m\xB3","MDP (Masisa)"],["\u2248 600","kg/m\xB3","OSB (EN 300)"]),say:"Los paneles aglomerados de madera se hacen con restos de madera prensados con resina. El aglomerado o MDP usa part\xEDculas; el OSB, hojuelas largas orientadas en capas cruzadas, que lo hacen m\xE1s resistente; y el MDF, fibras finas que dejan una superficie lisa. Su densidad ronda los 600 kilos por metro c\xFAbico."},{id:"mad2",sec:"Materiales \xB7 Aglomerados de madera",code:"MQ-11",who:"Daniel",t:70,stage:15,cam:"panelWall",yard:!0,title:"Usos en la obra",kicker:"Temporales y definitivos",body:ke(["OSB","Cubiertas y muros de bodegas y casetas de obra, tapiales y protecciones."],["MDP / MDF","Closets, cocinas integrales, puertas y muebles de ba\xF1o."],["Formato","1.22 \xD7 2.44 m, en espesores de 9 a 18 mm."]),say:"En la obra, el OSB se usa para lo temporal: bodegas, casetas, tapiales y protecciones. El MDP y el MDF se usan en lo definitivo de la vivienda: closets, cocinas integrales, puertas y muebles de ba\xF1o. Tambi\xE9n vienen en hojas de 1.22 por 2.44, en espesores de 9 a 18 mil\xEDmetros."},{id:"mad3",sec:"Materiales \xB7 Aglomerados de madera",code:"MQ-12",who:"Daniel",t:70,stage:15,cam:"panelWall",yard:!0,title:"Ventajas y cuidados",kicker:"Aprovechan la madera",body:ke(["Ventajas","Usa residuos de madera, es barato y f\xE1cil de cortar."],["Cuidado","La humedad lo hincha; se sella y se protege."],["Clasificaci\xF3n","Se elige seg\xFAn su clase de uso: interior, humedad o exterior."]),say:"Su ventaja es que aprovecha residuos de madera, es barato y f\xE1cil de cortar. Su cuidado principal es la humedad, que lo hincha, as\xED que se sella y se elige seg\xFAn su clase: para interior, para humedad o para exterior. Sigue Diego con el transporte."},{id:"trans1",sec:"Materiales \xB7 Transporte",code:"MQ-13",who:"Diego",t:60,stage:15,cam:"volteo",yard:!0,title:"Transporte de materiales",kicker:"Equipo \xB7 Diego",body:ke(["Cami\xF3n de volteo","Arena, grava y tierra: cajas de 7 y 14 m\xB3."],["Olla revolvedora","Concreto premezclado (NMX-C-155)."],["Plataforma o torton","Block, varilla, paneles y cemento en tarimas."])+Ct("Para el cu\xE1druplex: \u2248 12 viajes de olla de 7 m\xB3 y \u2248 20 de volteo de arena y grava."),say:"El transporte de materiales se hace con distintos camiones: el de volteo lleva arena, grava y tierra, con cajas de 7 o de 14 metros c\xFAbicos; la olla revolvedora trae el concreto premezclado; y los camiones de plataforma o torton llevan block, varilla, paneles y cemento en tarimas. Para nuestro cu\xE1druplex ser\xEDan unos 12 viajes de olla de 7 metros c\xFAbicos y unos 20 viajes de volteo con arena y grava."},{id:"trans2",sec:"Materiales \xB7 Transporte",code:"MQ-14",who:"Diego",t:70,stage:15,cam:"lowboy",yard:!0,title:"Transporte de maquinaria",kicker:"Cama baja",body:ke(["Tractocami\xF3n + cama baja","Plataforma baja para subir tractores y retroexcavadoras."],["Carga indivisible","Si excede pesos y medidas: permiso especial (NOM-040-SCT-2-2012)."],["Pesos y medidas","NOM-012-SCT-2-2017 en caminos federales."]),say:"La maquinaria se transporta en tractocami\xF3n con cama baja, una plataforma muy baja para que suban el tractor o la retroexcavadora. Los pesos y medidas en carreteras federales los regula la NOM-012 de la SCT, y si la m\xE1quina es una carga indivisible que los excede, se necesita un permiso especial seg\xFAn la NOM-040 de la SCT."},{id:"trans3",sec:"Materiales \xB7 Transporte",code:"MQ-15",who:"Diego",t:70,stage:15,cam:"lowboy",yard:!0,title:"Log\xEDstica en obra",kicker:"Que llegue a tiempo",body:ke(["Programaci\xF3n","El material llega seg\xFAn el programa de obra, no antes."],["Acceso","Calles y radios de giro libres; horarios del municipio."],["Maniobras","Banderero, carga asegurada y descarga en zona firme."]),say:"La log\xEDstica es clave: el material debe llegar seg\xFAn el programa de obra, para no acumularlo ni dejar parada a la cuadrilla. Se revisan los accesos, los radios de giro y los horarios que permite el municipio, y en cada maniobra hay un banderero, la carga va asegurada y se descarga en terreno firme. Sigue David."},{id:"gen1",sec:"Materiales \xB7 Generadores",code:"MQ-16",who:"David",t:60,stage:15,cam:"gen",yard:!0,title:"Generadores de energ\xEDa",kicker:"Equipo \xB7 David",body:ke(["Qu\xE9 es","Motor (di\xE9sel o gasolina) acoplado a un alternador: produce electricidad."],["Por qu\xE9 en obra","Al inicio no hay acometida de CFE."],["Alimenta","Revolvedora, vibrador, cortadoras, soldadora, bombas e iluminaci\xF3n."]),say:"El generador, o planta de luz, es un motor de di\xE9sel o gasolina acoplado a un alternador que produce electricidad. En la obra se usa porque al principio todav\xEDa no hay acometida de la CFE, y con \xE9l funcionan la revolvedora, el vibrador, las cortadoras, la soldadora, las bombas y la iluminaci\xF3n."},{id:"gen2",sec:"Materiales \xB7 Generadores",code:"MQ-17",who:"David",t:70,stage:15,cam:"gen",yard:!0,title:"\xBFDe qu\xE9 tama\xF1o?",kicker:"Ejemplo de 30 kVA",body:Vi(["30","kVA","\u2248 24 kW con FP 0.8"],["\u2248 5.6","L/h","di\xE9sel al 75 % de carga"],["\u2248 28","h","con un tanque de 190 L"])+cn("Aggreko, ficha del generador di\xE9sel de 30 kVA."),say:"El tama\xF1o se elige sumando la potencia de los equipos que van a funcionar al mismo tiempo. Un generador de 30 kVA da unos 24 kilowatts; trabajando al 75 % gasta unos 5.6 litros de di\xE9sel por hora, as\xED que un tanque de 190 litros dura unas 28 horas."},{id:"gen3",sec:"Materiales \xB7 Generadores",code:"MQ-18",who:"David",t:70,stage:15,cam:"gen",yard:!0,title:"Uso seguro",kicker:"Normas",body:ke(["Tierra f\xEDsica","Conexi\xF3n a tierra y protecciones (NOM-001-SEDE-2012)."],["Ruido","Equipo insonorizado y lejos de vecinos (NOM-081-SEMARNAT-1994)."],["Combustible","Cargar con el motor apagado; ventilaci\xF3n y extintor."])+Ct("Con esto terminamos. \xBFPreguntas?"),say:"Para usarlo con seguridad, el generador se conecta a tierra f\xEDsica y lleva protecciones, como pide la NOM-001-SEDE; se coloca lejos de las casas y, si se puede, insonorizado, por el ruido que regula la NOM-081 de SEMARNAT; y se le pone combustible con el motor apagado, en un lugar ventilado y con extintor. Con esto terminamos la exposici\xF3n. Muchas gracias, \xBFtienen alguna pregunta?"}],Bf=["C\xE1mara de Diputados. Ley del Instituto del Fondo Nacional de la Vivienda para los Trabajadores. DOF 24-04-1972, \xFAltima reforma 2024.","Infonavit. Historia del Instituto; Hipoteca Verde. infonavit.org.mx","Gobierno de M\xE9xico (2024). Programa de Vivienda y Regularizaci\xF3n 2024\u20132030 (presentaci\xF3n, 14-oct-2024), con datos de CONAVI.","CONAVI (2019). Criterios t\xE9cnicos para una vivienda adecuada. gob.mx/conavi","CONAVI (2017). C\xF3digo de Edificaci\xF3n de Vivienda, 3.\xAA edici\xF3n.","IMSS. Acuerdo ACDO.AS2.HCT.270126/9.P.DIR, costos de mano de obra por m\xB2 de construcci\xF3n privada. DOF 06-02-2026.","CFE (2015). Manual de Dise\xF1o de Obras Civiles: Dise\xF1o por sismo.","NOM-001-SEDE-2012 Instalaciones el\xE9ctricas; NOM-031-STPS-2011 Construcci\xF3n, condiciones de seguridad; NOM-020-ENER-2011 Envolvente de edificios para uso habitacional.","NOM-012-SCT-2-2017 Pesos y dimensiones m\xE1ximas; NOM-040-SCT-2-2012 Objetos indivisibles de gran peso y/o volumen. DOF.","NOM-081-SEMARNAT-1994 L\xEDmites de ruido de fuentes fijas.","NMX-C-083 (compresi\xF3n de cilindros), NMX-C-404 y NMX-C-441 (piezas de mamposter\xEDa), NMX-B-506 (varilla), NMX-C-155 (concreto premezclado). ONNCCE / CANACERO.","Ley Federal de Protecci\xF3n al Consumidor, art. 73 Qu\xE1ter (garant\xEDas de vivienda).","Caterpillar. Ficha t\xE9cnica tractor de cadenas D6N.","USG M\xE9xico. Fichas t\xE9cnicas Tablaroca (regular, antimoho, Firecode) y Durock Forte.","Masisa M\xE9xico. Ficha t\xE9cnica tableros MDP; EGGER. Ficha t\xE9cnica OSB 3 (EN 300).","Aggreko. Generador di\xE9sel de 30 kVA, ficha de consumo.","Planos del prototipo: Vivienda Tipo Cu\xE1druplex Ceiba Plus 4R c/Balc\xF3n (fachadas, plantas, cortes, instalaciones hidrosanitaria y el\xE9ctrica).","Fotograf\xEDas del prototipo construido, tomadas por el equipo."]});var Yv=Jf(()=>{wl();Of();zf();var un=(s,e=document)=>e.querySelector(s),Hi=[...Ff,{id:"fuentes",sec:"Fuentes",code:"REF",who:"David",t:10,stage:15,cam:"site",title:"Fuentes",kicker:"Referencias",body:`<ol class="refs">${Bf.map(s=>`<li>${s}</li>`).join("")}</ol>`,say:"(Diapositiva de consulta con las fuentes.)"}],Fu=Hi.length,Xv=un("#gl"),xs=Nf(Xv),Ot=un("#sheet"),kf=un("#cover"),Vf=un("#chap"),Xf=un("#ruler");Xf.innerHTML=Hi.map((s,e)=>`<i class="${s.chap?"major":""}" title="${s.title.replace(/<[^>]+>/g," ")}"></i>`).join("");var qf=[...Xf.children];qf.forEach((s,e)=>s.addEventListener("click",()=>vs(e)));var Hf=0,qv=Hi.map(s=>{let e=Hf;return Hf+=s.t,e}),Bu=s=>`${Math.floor(s/60)}:${String(Math.round(s%60)).padStart(2,"0")}`,zu=()=>innerWidth<=1100&&innerHeight>innerWidth;function ku(){let s=Ot.querySelector(".body"),e=()=>Ot.scrollHeight>Ot.clientHeight||s&&(s.scrollHeight>s.clientHeight+1||s.scrollWidth>s.clientWidth+2);Ot.classList.remove("wide"),Ot.classList.add("measuring");let t=1;for(Ot.style.setProperty("--fit",t);e()&&t>.84;)Ot.style.setProperty("--fit",t-=.04);if(e()&&!zu())for(Ot.classList.add("wide"),t=1,Ot.style.setProperty("--fit",t);e()&&t>.7;)Ot.style.setProperty("--fit",t-=.04);for(;e()&&t>.56;)Ot.style.setProperty("--fit",t-=.04);Ot.classList.remove("measuring")}var Gi=-1;function vs(s,e=!1){if(s=Math.max(0,Math.min(Fu-1,s)),s===Gi)return;let t=s>Gi?1:-1;Gi=s;let n=Hi[s];history.replaceState(null,"","#"+(s+1)),xs.setStage(n.stage,{xray:n.mode==="xray",cut:n.mode==="planta"?{y:1.3}:n.mode==="corte"?{x:1.6}:null,yard:!!n.yard||n.stage<2});let i=!zu()&&!n.cover&&!(n.chap&&!n.body),r=Nu[n.cam]||Nu.hero;xs.setCamera(i?{...r,fov:(r.fov||32)*1.16}:r,e?.01:1.7),xs.setShake(!!n.quake),document.body.dataset.mode=n.mode||"";let a=!!n.cover,o=!!n.chap&&!n.body;document.body.classList.toggle("is-cover",a),document.body.classList.toggle("is-chap",o),a&&(kf.innerHTML=`<p class="kick">${n.kicker}</p><h1>${n.title}</h1>${n.body}`,Pt.fromTo(kf.children,{y:30,opacity:0},{y:0,opacity:1,stagger:.08,duration:.9,ease:"power3.out"})),o&&(Vf.innerHTML=`<span class="num">${n.chap}</span><div><p class="kick">${n.kicker}</p><h2>${n.title}</h2></div>`,Pt.fromTo(Vf.children,{x:40*t,opacity:0},{x:0,opacity:1,stagger:.1,duration:.8,ease:"power3.out"})),!a&&!o&&(Ot.innerHTML=`<header><span>${n.code}</span><span>${n.sec}</span></header><p class="kick">${n.kicker||""}</p><h2>${n.title}</h2><div class="body">${n.body||""}</div>`,ku(),Ot.querySelectorAll("img").forEach(u=>{u.complete||u.addEventListener("load",ku,{once:!0})}),Pt.fromTo(Ot,{clipPath:"inset(0 0 100% 0)"},{clipPath:"inset(0 0 0% 0)",duration:.7,ease:"power2.out"}),Pt.fromTo(Ot.querySelectorAll("header, .kick, h2, .body > *"),{y:18,opacity:0},{y:0,opacity:1,stagger:.06,duration:.6,delay:.15,ease:"power3.out"}),Ot.querySelectorAll(".gantt i").forEach((u,h)=>Pt.fromTo(u,{scaleX:0},{scaleX:1,duration:.7,delay:.4+h*.07,ease:"power2.out"})));let l=!zu(),c=Ot.getBoundingClientRect().top||innerHeight*.6;!l||o?xs.setOffset(0,0,e?.01:1.2):a?xs.setOffset(innerWidth*.24,0,e?.01:1.2):xs.setOffset(0,(innerHeight-c)/2-innerHeight*.02,e?.01:1.2),un("#tb-code").textContent=n.code,un("#tb-sec").textContent=n.sec,un("#tb-who").textContent=Co[n.who]||n.who,un("#tb-n").textContent=`${s+1} / ${Fu}`,qf.forEach((u,h)=>u.classList.toggle("on",h<=s)),un("#notes").innerHTML=`<b>${Co[n.who]||n.who} \xB7 ${Bu(n.t)}</b><p>${n.say}</p>${Hi[s+1]?`<small>Sigue: ${Hi[s+1].title.replace(/<br>/g," ")} \xB7 ${Hi[s+1].who}</small>`:""}`}var Po=()=>vs(Gi+1),Io=()=>vs(Gi-1);addEventListener("keydown",s=>{["ArrowRight","ArrowDown","PageDown"," "].includes(s.key)?(s.preventDefault(),Po()):["ArrowLeft","ArrowUp","PageUp"].includes(s.key)?(s.preventDefault(),Io()):s.key==="Home"?vs(0):s.key==="End"?vs(Fu-1):s.key==="n"||s.key==="N"?document.body.classList.toggle("show-notes"):s.key==="t"||s.key==="T"?document.body.classList.toggle("show-clock"):(s.key==="f"||s.key==="F")&&(document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()).catch(()=>{})});var Gf=0,Ro=0;addEventListener("wheel",s=>{s.preventDefault();let e=performance.now();e<Gf||(Ro+=s.deltaY,Math.abs(Ro)>40&&(Ro>0?Po():Io(),Ro=0,Gf=e+750))},{passive:!1});var Yr=null;addEventListener("touchstart",s=>{s.target.closest("button, #ruler")||(Yr={x:s.touches[0].clientX,y:s.touches[0].clientY,t:performance.now()})},{passive:!0});addEventListener("touchend",s=>{if(!Yr)return;let e=s.changedTouches[0].clientX-Yr.x,t=s.changedTouches[0].clientY-Yr.y;Math.max(Math.abs(e),Math.abs(t))>40&&((Math.abs(e)>Math.abs(t)?e:t)<0?Po:Io)(),Yr=null},{passive:!0});un("#next").addEventListener("click",Po);un("#prev").addEventListener("click",Io);var Ou=null;setInterval(()=>{if(!document.body.classList.contains("show-clock"))return;Ou===null&&(Ou=performance.now());let s=(performance.now()-Ou)/1e3,e=qv[Gi]||0;un("#clock").innerHTML=`${Bu(s)} <small>plan ${Bu(e)} \xB7 ${s>e+30?"atrasado":s<e-30?"adelantado":"a tiempo"}</small>`},500);document.fonts&&document.fonts.ready.then(()=>{document.body.classList.contains("is-cover")||ku()});Hi.forEach(s=>(s.body||"").replace(/src="([^"]+)"/g,(e,t)=>{new Image().src=t}));var Wf=0;addEventListener("resize",()=>{xs.resize(),clearTimeout(Wf),Wf=setTimeout(()=>{let s=Gi;Gi=-1,vs(s,!0)},150)});vs(Math.max(0,(parseInt(location.hash.slice(1))||1)-1),!0);Pt.to("#loader",{opacity:0,duration:.6,delay:.3,onComplete:()=>un("#loader").remove()})});Yv();})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.1
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
