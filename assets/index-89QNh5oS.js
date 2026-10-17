(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,O=1029,k=1030,A=1031,j=1033,M=33776,N=33777,P=33778,F=33779,I=35840,ee=35841,L=35842,te=35843,ne=36196,re=37492,R=37496,ie=37488,z=37489,ae=37490,oe=37491,se=37808,ce=37809,le=37810,ue=37811,de=37812,fe=37813,pe=37814,me=37815,he=37816,ge=37817,_e=37818,ve=37819,ye=37820,be=37821,xe=36492,Se=36494,Ce=36495,we=36283,Te=36284,Ee=36285,De=36286,Oe=2300,B=2301,ke=2302,Ae=2303,je=2400,V=2401,Me=2402,H=3200,Ne=`srgb`,Pe=`srgb-linear`,Fe=`linear`,Ie=`srgb`,Le=7680,Re=35044,ze=35048,Be=2e3;function Ve(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function He(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ue(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function We(){let e=Ue(`canvas`);return e.style.display=`block`,e}var Ge={};function Ke(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function qe(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function U(...e){e=qe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function W(...e){e=qe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Je(...e){let t=e.join(` `);t in Ge||(Ge[t]=!0,U(...e))}function Ye(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Xe={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},Ze=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Qe=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),$e=1234567,et=Math.PI/180,tt=180/Math.PI;function nt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Qe[e&255]+Qe[e>>8&255]+Qe[e>>16&255]+Qe[e>>24&255]+`-`+Qe[t&255]+Qe[t>>8&255]+`-`+Qe[t>>16&15|64]+Qe[t>>24&255]+`-`+Qe[n&63|128]+Qe[n>>8&255]+`-`+Qe[n>>16&255]+Qe[n>>24&255]+Qe[r&255]+Qe[r>>8&255]+Qe[r>>16&255]+Qe[r>>24&255]).toLowerCase()}function G(e,t,n){return Math.max(t,Math.min(n,e))}function rt(e,t){return(e%t+t)%t}function it(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function at(e,t,n){return e===t?0:(n-e)/(t-e)}function ot(e,t,n){return(1-n)*e+n*t}function st(e,t,n,r){return ot(e,t,1-Math.exp(-n*r))}function ct(e,t=1){return t-Math.abs(rt(e,t*2)-t)}function lt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function ut(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function dt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function ft(e,t){return e+Math.random()*(t-e)}function pt(e){return e*(.5-Math.random())}function mt(e){e!==void 0&&($e=e);let t=$e+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ht(e){return e*et}function gt(e){return e*tt}function _t(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function vt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function yt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function bt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:U(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function xt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function St(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Ct={DEG2RAD:et,RAD2DEG:tt,generateUUID:nt,clamp:G,euclideanModulo:rt,mapLinear:it,inverseLerp:at,lerp:ot,damp:st,pingpong:ct,smoothstep:lt,smootherstep:ut,randInt:dt,randFloat:ft,randFloatSpread:pt,seededRandom:mt,degToRad:ht,radToDeg:gt,isPowerOfTwo:_t,ceilPowerOfTwo:vt,floorPowerOfTwo:yt,setQuaternionFromProperEuler:bt,normalize:St,denormalize:xt},K=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=G(this.x,e.x,t.x),this.y=G(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=G(this.x,e,t),this.y=G(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(G(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(G(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},wt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:U(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(G(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Et.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Et.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=G(this.x,e.x,t.x),this.y=G(this.y,e.y,t.y),this.z=G(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=G(this.x,e,t),this.y=G(this.y,e,t),this.z=G(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(G(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Tt.copy(this).projectOnVector(e),this.sub(Tt)}reflect(e){return this.sub(Tt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(G(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Tt=new q,Et=new wt,J=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Je(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Dt.makeScale(e,t)),this}rotate(e){return Je(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Dt.makeRotation(-e)),this}translate(e,t){return Je(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Dt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Dt=new J,Ot=new J().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kt=new J().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function At(){let e={enabled:!0,workingColorSpace:Pe,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Mt(e.r),e.g=Mt(e.g),e.b=Mt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Nt(e.r),e.g=Nt(e.g),e.b=Nt(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Fe:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Je(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Je(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Pe]:{primaries:t,whitePoint:r,transfer:Fe,toXYZ:Ot,fromXYZ:kt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:r,transfer:Ie,toXYZ:Ot,fromXYZ:kt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),e}var jt=At();function Mt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Nt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Pt,Ft=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Pt===void 0&&(Pt=Ue(`canvas`)),Pt.width=e.width,Pt.height=e.height;let t=Pt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Pt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ue(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Mt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Mt(t[e]/255)*255):t[e]=Mt(t[e]);return{data:t,width:e.width,height:e.height}}return U(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},It=0,Lt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:It++}),this.uuid=nt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Rt(r[t].image)):e.push(Rt(r[t]))}else e=Rt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Rt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Ft.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(U(`Texture: Unable to serialize Texture.`),{})}var zt=0,Bt=new q,Vt=class r extends Ze{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zt++}),this.uuid=nt(),this.name=``,this.source=new Lt(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new J,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Bt).x}get height(){return this.source.getSize(Bt).y}get depth(){return this.source.getSize(Bt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){U(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){U(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Vt.DEFAULT_IMAGE=null,Vt.DEFAULT_MAPPING=300,Vt.DEFAULT_ANISOTROPY=1;var Ht=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=G(this.x,e.x,t.x),this.y=G(this.y,e.y,t.y),this.z=G(this.z,e.z,t.z),this.w=G(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=G(this.x,e,t),this.y=G(this.y,e,t),this.z=G(this.z,e,t),this.w=G(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(G(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ut=class extends Ze{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t),this.textures=[];let r=new Vt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Lt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Wt=class extends Ut{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Gt=class extends Vt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Kt=class extends Vt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Y=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/qt.setFromMatrixColumn(e,0).length(),i=1/qt.setFromMatrixColumn(e,1).length(),a=1/qt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yt,e,Xt)}lookAt(e,t,n){let r=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),Zt.crossVectors(n,$t),Zt.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),Zt.crossVectors(n,$t)),Zt.normalize(),Qt.crossVectors($t,Zt),r[0]=Zt.x,r[4]=Qt.x,r[8]=$t.x,r[1]=Zt.y,r[5]=Qt.y,r[9]=$t.y,r[2]=Zt.z,r[6]=Qt.z,r[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],I=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*I,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*I,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*I,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=qt.set(r[0],r[1],r[2]).length(),o=qt.set(r[4],r[5],r[6]).length(),s=qt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Jt.copy(this);let c=1/a,l=1/o,u=1/s;return Jt.elements[0]*=c,Jt.elements[1]*=c,Jt.elements[2]*=c,Jt.elements[4]*=l,Jt.elements[5]*=l,Jt.elements[6]*=l,Jt.elements[8]*=u,Jt.elements[9]*=u,Jt.elements[10]*=u,t.setFromRotationMatrix(Jt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Be,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Be,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},qt=new q,Jt=new Y,Yt=new q(0,0,0),Xt=new q(1,1,1),Zt=new q,Qt=new q,$t=new q,en=new Y,tn=new wt,nn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(G(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-G(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(G(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-G(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(G(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-G(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:U(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return en.makeRotationFromQuaternion(e),this.setFromRotationMatrix(en,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tn.setFromEuler(this),this.setFromQuaternion(tn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};nn.DEFAULT_ORDER=`XYZ`;var rn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},an=0,on=new q,sn=new wt,cn=new Y,ln=new q,un=new q,dn=new q,fn=new wt,pn=new q(1,0,0),mn=new q(0,1,0),hn=new q(0,0,1),gn={type:`added`},_n={type:`removed`},vn={type:`childadded`,child:null},yn={type:`childremoved`,child:null},bn=class e extends Ze{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:an++}),this.uuid=nt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new q,n=new nn,r=new wt,i=new q(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Y},normalMatrix:{value:new J}}),this.matrix=new Y,this.matrixWorld=new Y,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return sn.setFromAxisAngle(e,t),this.quaternion.multiply(sn),this}rotateOnWorldAxis(e,t){return sn.setFromAxisAngle(e,t),this.quaternion.premultiply(sn),this}rotateX(e){return this.rotateOnAxis(pn,e)}rotateY(e){return this.rotateOnAxis(mn,e)}rotateZ(e){return this.rotateOnAxis(hn,e)}translateOnAxis(e,t){return on.copy(e).applyQuaternion(this.quaternion),this.position.add(on.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pn,e)}translateY(e){return this.translateOnAxis(mn,e)}translateZ(e){return this.translateOnAxis(hn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ln.copy(e):ln.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),un.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(un,ln,this.up):cn.lookAt(ln,un,this.up),this.quaternion.setFromRotationMatrix(cn),r&&(cn.extractRotation(r.matrixWorld),sn.setFromRotationMatrix(cn),this.quaternion.premultiply(sn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(W(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gn),vn.child=e,this.dispatchEvent(vn),vn.child=null):W(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_n),yn.child=e,this.dispatchEvent(yn),yn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gn),vn.child=e,this.dispatchEvent(vn),vn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(un,e,dn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(un,fn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};bn.DEFAULT_UP=new q(0,1,0),bn.DEFAULT_MATRIX_AUTO_UPDATE=!0,bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xn=class extends bn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Sn={type:`move`},Cn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new xn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},wn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},En={h:0,s:0,l:0};function Dn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var X=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ne){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,jt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=jt.workingColorSpace){return this.r=e,this.g=t,this.b=n,jt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=jt.workingColorSpace){if(e=rt(e,1),t=G(t,0,1),n=G(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Dn(i,r,e+1/3),this.g=Dn(i,r,e),this.b=Dn(i,r,e-1/3)}return jt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ne){function n(t){t!==void 0&&parseFloat(t)<1&&U(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:U(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);U(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ne){let n=wn[e.toLowerCase()];return n===void 0?U(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mt(e.r),this.g=Mt(e.g),this.b=Mt(e.b),this}copyLinearToSRGB(e){return this.r=Nt(e.r),this.g=Nt(e.g),this.b=Nt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ne){return jt.workingToColorSpace(On.copy(this),e),Math.round(G(On.r*255,0,255))*65536+Math.round(G(On.g*255,0,255))*256+Math.round(G(On.b*255,0,255))}getHexString(e=Ne){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=jt.workingColorSpace){jt.workingToColorSpace(On.copy(this),t);let n=On.r,r=On.g,i=On.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=jt.workingColorSpace){return jt.workingToColorSpace(On.copy(this),t),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=Ne){jt.workingToColorSpace(On.copy(this),e);let t=On.r,n=On.g,r=On.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Tn),this.setHSL(Tn.h+e,Tn.s+t,Tn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tn),e.getHSL(En);let n=ot(Tn.h,En.h,t),r=ot(Tn.s,En.s,t),i=ot(Tn.l,En.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},On=new X;X.NAMES=wn;var kn=class extends bn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},An=new q,jn=new q,Mn=new q,Nn=new q,Pn=new q,Fn=new q,In=new q,Ln=new q,Rn=new q,zn=new q,Bn=new Ht,Vn=new Ht,Hn=new Ht,Un=class e{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),An.subVectors(e,t),r.cross(An);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){An.subVectors(r,t),jn.subVectors(n,t),Mn.subVectors(e,t);let a=An.dot(An),o=An.dot(jn),s=An.dot(Mn),c=jn.dot(jn),l=jn.dot(Mn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Nn)!==null&&Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Nn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Nn.x),s.addScaledVector(a,Nn.y),s.addScaledVector(o,Nn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Bn.setScalar(0),Vn.setScalar(0),Hn.setScalar(0),Bn.fromBufferAttribute(e,t),Vn.fromBufferAttribute(e,n),Hn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Bn,i.x),a.addScaledVector(Vn,i.y),a.addScaledVector(Hn,i.z),a}static isFrontFacing(e,t,n,r){return An.subVectors(n,t),jn.subVectors(e,t),An.cross(jn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),An.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Pn.subVectors(r,n),Fn.subVectors(i,n),Ln.subVectors(e,n);let s=Pn.dot(Ln),c=Fn.dot(Ln);if(s<=0&&c<=0)return t.copy(n);Rn.subVectors(e,r);let l=Pn.dot(Rn),u=Fn.dot(Rn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Pn,a);zn.subVectors(e,i);let f=Pn.dot(zn),p=Fn.dot(zn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Fn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return In.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(In,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Pn,a).addScaledVector(Fn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Wn=class{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Kn):Kn.fromBufferAttribute(r,t),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),qn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),qn.copy(e.boundingBox)),qn.applyMatrix4(e.matrixWorld),this.union(qn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(er),tr.subVectors(this.max,er),Jn.subVectors(e.a,er),Yn.subVectors(e.b,er),Xn.subVectors(e.c,er),Zn.subVectors(Yn,Jn),Qn.subVectors(Xn,Yn),$n.subVectors(Jn,Xn);let t=[0,-Zn.z,Zn.y,0,-Qn.z,Qn.y,0,-$n.z,$n.y,Zn.z,0,-Zn.x,Qn.z,0,-Qn.x,$n.z,0,-$n.x,-Zn.y,Zn.x,0,-Qn.y,Qn.x,0,-$n.y,$n.x,0];return!ir(t,Jn,Yn,Xn,tr)||(t=[1,0,0,0,1,0,0,0,1],!ir(t,Jn,Yn,Xn,tr))?!1:(nr.crossVectors(Zn,Qn),t=[nr.x,nr.y,nr.z],ir(t,Jn,Yn,Xn,tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Gn=[new q,new q,new q,new q,new q,new q,new q,new q],Kn=new q,qn=new Wn,Jn=new q,Yn=new q,Xn=new q,Zn=new q,Qn=new q,$n=new q,er=new q,tr=new q,nr=new q,rr=new q;function ir(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){rr.fromArray(e,a);let o=i.x*Math.abs(rr.x)+i.y*Math.abs(rr.y)+i.z*Math.abs(rr.z),s=t.dot(rr),c=n.dot(rr),l=r.dot(rr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var ar=new q,or=new K,sr=0,cr=class extends Ze{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Re,this.updateRanges=[],this.gpuType=h,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)or.fromBufferAttribute(this,t),or.applyMatrix3(e),this.setXY(t,or.x,or.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ar.fromBufferAttribute(this,t),ar.applyMatrix3(e),this.setXYZ(t,ar.x,ar.y,ar.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ar.fromBufferAttribute(this,t),ar.applyMatrix4(e),this.setXYZ(t,ar.x,ar.y,ar.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ar.fromBufferAttribute(this,t),ar.applyNormalMatrix(e),this.setXYZ(t,ar.x,ar.y,ar.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ar.fromBufferAttribute(this,t),ar.transformDirection(e),this.setXYZ(t,ar.x,ar.y,ar.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xt(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xt(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xt(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),r=St(r,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},lr=class extends cr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},ur=class extends cr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},dr=class extends cr{constructor(e,t,n){super(new Float32Array(e),t,n)}},fr=new Wn,pr=new q,mr=new q,hr=class{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?fr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pr.subVectors(e,this.center);let t=pr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(pr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pr.copy(e.center).add(mr)),this.expandByPoint(pr.copy(e.center).sub(mr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},gr=0,_r=new Y,vr=new bn,yr=new q,br=new Wn,xr=new Wn,Sr=new q,Cr=class e extends Ze{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gr++}),this.uuid=nt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ve(e)?ur:lr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new J().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return _r.makeRotationFromQuaternion(e),this.applyMatrix4(_r),this}rotateX(e){return _r.makeRotationX(e),this.applyMatrix4(_r),this}rotateY(e){return _r.makeRotationY(e),this.applyMatrix4(_r),this}rotateZ(e){return _r.makeRotationZ(e),this.applyMatrix4(_r),this}translate(e,t,n){return _r.makeTranslation(e,t,n),this.applyMatrix4(_r),this}scale(e,t,n){return _r.makeScale(e,t,n),this.applyMatrix4(_r),this}lookAt(e){return vr.lookAt(e),vr.updateMatrix(),this.applyMatrix4(vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new dr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&U(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){W(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];br.setFromBufferAttribute(n),this.morphTargetsRelative?(Sr.addVectors(this.boundingBox.min,br.min),this.boundingBox.expandByPoint(Sr),Sr.addVectors(this.boundingBox.max,br.max),this.boundingBox.expandByPoint(Sr)):(this.boundingBox.expandByPoint(br.min),this.boundingBox.expandByPoint(br.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&W(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){W(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new q,1/0);return}if(e){let n=this.boundingSphere.center;if(br.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];xr.setFromBufferAttribute(n),this.morphTargetsRelative?(Sr.addVectors(br.min,xr.min),br.expandByPoint(Sr),Sr.addVectors(br.max,xr.max),br.expandByPoint(Sr)):(br.expandByPoint(xr.min),br.expandByPoint(xr.max))}br.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Sr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Sr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Sr.fromBufferAttribute(a,t),o&&(yr.fromBufferAttribute(e,t),Sr.add(yr)),r=Math.max(r,n.distanceToSquared(Sr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&W(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){W(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new cr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new q,s[e]=new q;let c=new q,l=new q,u=new q,d=new K,f=new K,p=new K,m=new q,h=new q;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new q,y=new q,b=new q,x=new q;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new cr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new q,i=new q,a=new q,o=new q,s=new q,c=new q,l=new q,u=new q;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Sr.fromBufferAttribute(e,t),Sr.normalize(),e.setXYZ(t,Sr.x,Sr.y,Sr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new cr(a,r,i)}if(this.index===null)return U(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},wr=new q,Tr=new q,Er=new J,Dr=class{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=wr.subVectors(n,t).cross(Tr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(wr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Er.getNormalMatrix(e),r=this.coplanarPoint(wr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Or=0,kr=class extends Ze{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Or++}),this.uuid=nt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new X(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Le,this.stencilZFail=Le,this.stencilZPass=Le,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){U(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){U(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new X().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Dr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new K().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new K().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Ar=new q,jr=new q,Mr=new q,Nr=new q,Pr=class{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ar.copy(this.origin).addScaledVector(this.direction,t),Ar.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){jr.copy(e).add(t).multiplyScalar(.5),Mr.copy(t).sub(e).normalize(),Nr.copy(this.origin).sub(jr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Mr),o=Nr.dot(this.direction),s=-Nr.dot(Mr),c=Nr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(jr).addScaledVector(Mr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ar.subVectors(e.center,this.origin);let n=Ar.dot(this.direction),r=Ar.dot(Ar)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ar)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,F=C/w,I=1/w,ee=T-P*D,L=E-F*D,te=O-P*A,ne=k-F*A,re=j-P*N,R=M-F*N,ie=re*ne-R*te,z=ee*R-L*re,ae=te*L-ne*ee;if(r){if(ie<0||z<0||ae<0)return null}else if((ie<0||z<0||ae<0)&&(ie>0||z>0||ae>0))return null;let oe=ie+z+ae;if(oe===0)return null;let se=I*(ie*D+z*A+ae*N);return(oe>0?se<0:se>0)?null:this.at(se/oe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fr=class extends kr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new X(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ir=new Y,Lr=new Pr,Rr=new hr,zr=new q,Br=new q,Vr=new q,Hr=new q,Ur=new q,Wr=new q,Gr=new q,Kr=new q,qr=class extends bn{constructor(e=new Cr,t=new Fr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Wr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Ur.fromBufferAttribute(s,e),a?Wr.addScaledVector(Ur,r):Wr.addScaledVector(Ur.sub(t),r))}t.add(Wr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(i),Lr.copy(e.ray).recast(e.near),!(Rr.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(Rr,zr)===null||Lr.origin.distanceToSquared(zr)>(e.far-e.near)**2))&&(Ir.copy(i).invert(),Lr.copy(e.ray).applyMatrix4(Ir),(n.boundingBox===null||Lr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Lr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Yr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Yr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Yr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Yr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Jr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Kr.copy(s),Kr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Kr);return l<n.near||l>n.far?null:{distance:l,point:Kr.clone(),object:e}}function Yr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Br),e.getVertexPosition(c,Vr),e.getVertexPosition(l,Hr);let u=Jr(e,t,n,r,Br,Vr,Hr,Gr);if(u){let e=new q;Un.getBarycoord(Gr,Br,Vr,Hr,e),i&&(u.uv=Un.getInterpolatedAttribute(i,s,c,l,e,new K)),a&&(u.uv1=Un.getInterpolatedAttribute(a,s,c,l,e,new K)),o&&(u.normal=Un.getInterpolatedAttribute(o,s,c,l,e,new q),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new q,materialIndex:0};Un.getNormal(Br,Vr,Hr,t.normal),u.face=t,u.barycoord=e}return u}var Xr=class extends Vt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Zr=class extends cr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Qr=new Y,$r=new Y,ei=[],ti=new Wn,ni=new Y,ri=new qr,ii=new hr,ai=class extends qr{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,ni)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qr),ti.copy(e.boundingBox).applyMatrix4(Qr),this.boundingBox.union(ti)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qr),ii.copy(e.boundingSphere).applyMatrix4(Qr),this.boundingSphere.union(ii)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ri.geometry=this.geometry,ri.material=this.material,ri.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ii.copy(this.boundingSphere),ii.applyMatrix4(n),e.ray.intersectsSphere(ii)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Qr),$r.multiplyMatrices(n,Qr),ri.matrixWorld=$r,ri.raycast(e,ei);for(let e=0,n=ei.length;e<n;e++){let n=ei[e];n.instanceId=i,n.object=this,t.push(n)}ei.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Zr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xr(new Float32Array(r*this.count),r,this.count,D,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},oi=new hr,si=new K(.5,.5),ci=new q,li=class{constructor(e=new Dr,t=new Dr,n=new Dr,r=new Dr,i=new Dr,a=new Dr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Be,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(e){return oi.center.set(0,0,0),oi.radius=.7071067811865476+si.distanceTo(e.center),oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ci.x=r.normal.x>0?e.max.x:e.min.x,ci.y=r.normal.y>0?e.max.y:e.min.y,ci.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ci)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ui=class extends kr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new X(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},di=new q,fi=new q,pi=new Y,mi=new Pr,hi=new hr,gi=new q,_i=new q,vi=class extends bn{constructor(e=new Cr,t=new ui){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)di.fromBufferAttribute(t,e-1),fi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=di.distanceTo(fi);e.setAttribute(`lineDistance`,new dr(n,1))}else U(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hi.copy(n.boundingSphere),hi.applyMatrix4(r),hi.radius+=i,e.ray.intersectsSphere(hi)===!1)return;pi.copy(r).invert(),mi.copy(e.ray).applyMatrix4(pi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=yi(this,e,mi,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=yi(this,e,mi,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=yi(this,e,mi,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=yi(this,e,mi,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function yi(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(di.fromBufferAttribute(s,i),fi.fromBufferAttribute(s,a),n.distanceSqToSegment(di,fi,gi,_i)>r)return;gi.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(gi);if(!(c<t.near||c>t.far))return{distance:c,point:_i.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var bi=class extends Vt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},xi=class extends Vt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Si=class extends Vt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ci=class extends Si{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},wi=class extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ti=class e extends Cr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new dr(c,3)),this.setAttribute(`normal`,new dr(l,3)),this.setAttribute(`uv`,new dr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new q;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ei=class e extends Cr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new q,l=new K;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new dr(a,3)),this.setAttribute(`normal`,new dr(o,3)),this.setAttribute(`uv`,new dr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Di=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){U(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new K:new q);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new q,r=[],i=[],a=[],o=new q,s=new Y;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new q)}i[0]=new q,a[0]=new q;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(G(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(G(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Oi=class extends Di{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new K){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ki=class extends Oi{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Ai(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var ji=new q,Mi=new q,Ni=new Ai,Pi=new Ai,Fi=new Ai,Ii=class extends Di{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new q){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Mi.subVectors(r[0],r[1]).add(r[0]),c=Mi);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(ji.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=ji),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Ni.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Pi.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Fi.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Ni.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Pi.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Fi.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Ni.calc(s),Pi.calc(s),Fi.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new q().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Li(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Ri(e,t){let n=1-e;return n*n*t}function zi(e,t){return 2*(1-e)*e*t}function Bi(e,t){return e*e*t}function Vi(e,t,n,r){return Ri(e,t)+zi(e,n)+Bi(e,r)}function Hi(e,t){let n=1-e;return n*n*n*t}function Ui(e,t){let n=1-e;return 3*n*n*e*t}function Wi(e,t){return 3*(1-e)*e*e*t}function Gi(e,t){return e*e*e*t}function Ki(e,t,n,r,i){return Hi(e,t)+Ui(e,n)+Wi(e,r)+Gi(e,i)}var qi=class extends Di{constructor(e=new K,t=new K,n=new K,r=new K){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ki(e,r.x,i.x,a.x,o.x),Ki(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ji=class extends Di{constructor(e=new q,t=new q,n=new q,r=new q){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new q){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ki(e,r.x,i.x,a.x,o.x),Ki(e,r.y,i.y,a.y,o.y),Ki(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Yi=class extends Di{constructor(e=new K,t=new K){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new K){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xi=class extends Di{constructor(e=new q,t=new q){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new q){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zi=class extends Di{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Vi(e,r.x,i.x,a.x),Vi(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qi=class extends Di{constructor(e=new q,t=new q,n=new q){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new q){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Vi(e,r.x,i.x,a.x),Vi(e,r.y,i.y,a.y),Vi(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$i=class extends Di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new K){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Li(o,s.x,c.x,l.x,u.x),Li(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new K().fromArray(n))}return this}},ea=Object.freeze({__proto__:null,ArcCurve:ki,CatmullRomCurve3:Ii,CubicBezierCurve:qi,CubicBezierCurve3:Ji,EllipseCurve:Oi,LineCurve:Yi,LineCurve3:Xi,QuadraticBezierCurve:Zi,QuadraticBezierCurve3:Qi,SplineCurve:$i}),ta=class extends Di{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new ea[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new ea[n.type]().fromJSON(n))}return this}},na=class extends ta{constructor(e){super(),this.type=`Path`,this.currentPoint=new K,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Yi(this.currentPoint.clone(),new K(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Zi(this.currentPoint.clone(),new K(e,t),new K(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new qi(this.currentPoint.clone(),new K(e,t),new K(n,r),new K(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new $i([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Oi(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ra=class extends na{constructor(e){super(e),this.uuid=nt(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new na().fromJSON(n))}return this}};function ia(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=aa(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=fa(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return sa(a,o,n,s,c,l,0),o}function aa(e,t,n,r,i){let a;if(i===Ia(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Na(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Na(i/r|0,e[i],e[i+1],a);return a&&Ta(a,a.next)&&(Pa(a),a=a.next),a}function oa(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(Ta(n,n.next)||wa(n.prev,n,n.next)===0)){if(Pa(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function sa(e,t,n,r,i,a,o){if(!e)return;!o&&a&&_a(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?la(e,r,i,a):ca(e)){t.push(c.i,e.i,l.i),Pa(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=ua(oa(e),t),sa(e,t,n,r,i,a,2)):o===2&&da(e,t,n,r,i,a):sa(oa(e),t,n,r,i,a,1);break}}}function ca(e){let t=e.prev,n=e,r=e.next;if(wa(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Sa(i,s,a,c,o,l,m.x,m.y)&&wa(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function la(e,t,n,r){let i=e.prev,a=e,o=e.next;if(wa(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=ya(p,m,t,n,r),v=ya(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Sa(s,u,c,d,l,f,y.x,y.y)&&wa(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Sa(s,u,c,d,l,f,b.x,b.y)&&wa(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Sa(s,u,c,d,l,f,y.x,y.y)&&wa(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Sa(s,u,c,d,l,f,b.x,b.y)&&wa(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function ua(e,t){let n=e;do{let r=n.prev,i=n.next.next;!Ta(r,i)&&Ea(r,n,n.next,i)&&Aa(r,i)&&Aa(i,r)&&(t.push(r.i,n.i,i.i),Pa(n),Pa(n.next),n=e=i),n=n.next}while(n!==e);return oa(n)}function da(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Ca(o,e)){let s=Ma(o,e);o=oa(o,o.next),s=oa(s,s.next),sa(o,t,n,r,i,a,0),sa(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function fa(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=aa(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(ba(o))}i.sort(pa);for(let e=0;e<i.length;e++)n=ma(i[e],n);return n}function pa(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function ma(e,t){let n=ha(e,t);if(!n)return t;let r=Ma(n,e);return oa(r,r.next),oa(n,n.next)}function ha(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Ta(e,n))return n;do{if(Ta(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&xa(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Aa(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&ga(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function ga(e,t){return wa(e.prev,e,t.prev)<0&&wa(t.next,e,e.next)<0}function _a(e,t,n,r){let i=e;do i.z===0&&(i.z=ya(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,va(i)}function va(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function ya(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function ba(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function xa(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Sa(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&xa(e,t,n,r,i,a,o,s)}function Ca(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!ka(e,t)&&(Aa(e,t)&&Aa(t,e)&&ja(e,t)&&(wa(e.prev,e,t.prev)||wa(e,t.prev,t))||Ta(e,t)&&wa(e.prev,e,e.next)>0&&wa(t.prev,t,t.next)>0)}function wa(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Ta(e,t){return e.x===t.x&&e.y===t.y}function Ea(e,t,n,r){let i=Oa(wa(e,t,n)),a=Oa(wa(e,t,r)),o=Oa(wa(n,r,e)),s=Oa(wa(n,r,t));return!!(i!==a&&o!==s||i===0&&Da(e,n,t)||a===0&&Da(e,r,t)||o===0&&Da(n,e,r)||s===0&&Da(n,t,r))}function Da(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Oa(e){return e>0?1:e<0?-1:0}function ka(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Ea(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Aa(e,t){return wa(e.prev,e,e.next)<0?wa(e,t,e.next)>=0&&wa(e,e.prev,t)>=0:wa(e,t,e.prev)<0||wa(e,e.next,t)<0}function ja(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Ma(e,t){let n=Fa(e.i,e.x,e.y),r=Fa(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Na(e,t,n,r){let i=Fa(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Pa(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Fa(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ia(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var La=class{static triangulate(e,t,n=2){return ia(e,t,n)}},Ra=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];za(e),Ba(n,e);let a=e.length;t.forEach(za);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Ba(n,t[e]);let o=La.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function za(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Ba(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Va=class e extends Cr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new dr(p,3)),this.setAttribute(`normal`,new dr(m,3)),this.setAttribute(`uv`,new dr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Ha=class e extends Cr{constructor(e=new ra([new K(0,.5),new K(-.5,-.5),new K(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new dr(r,3)),this.setAttribute(`normal`,new dr(i,3)),this.setAttribute(`uv`,new dr(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;Ra.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];Ra.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=Ra.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Ua(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function Ua(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}function Wa(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Ka(i))i.isRenderTargetTexture?(U(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Ka(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Ga(e){let t={};for(let n=0;n<e.length;n++){let r=Wa(e[n]);for(let e in r)t[e]=r[e]}return t}function Ka(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function qa(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ja(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}var Ya={clone:Wa,merge:Ga},Xa=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Za=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qa=class extends kr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xa,this.fragmentShader=Za,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wa(e.uniforms),this.uniformsGroups=qa(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new X().setHex(r.value);break;case`v2`:this.uniforms[n].value=new K().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new q().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Ht().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new J().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Y().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},$a=class extends Qa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},eo=class extends kr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=H,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},to=class extends kr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function no(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function ro(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var io=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},ao=class extends io{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:je,endingEnd:je}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case V:i=e,o=2*t-n;break;case Me:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case V:a=e,s=2*n-t;break;case Me:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},oo=class extends io{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},so=class extends io{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},co=class extends io{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=fo(n,t,g,y,r);i[p]=lo(x,o,_,b,m)}return i}};function lo(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function uo(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function fo(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=lo(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=uo(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var po=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=no(t,this.TimeBufferType),this.values=no(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:no(e.times,Array),values:no(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),ro(e.settings)&&(n.settings={inTangents:no(e.settings.inTangents,Array),outTangents:no(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new so(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ao(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new co(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Oe:t=this.InterpolantFactoryMethodDiscrete;break;case B:t=this.InterpolantFactoryMethodLinear;break;case ke:t=this.InterpolantFactoryMethodSmooth;break;case Ae:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return U(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oe;case this.InterpolantFactoryMethodLinear:return B;case this.InterpolantFactoryMethodSmooth:return ke;case this.InterpolantFactoryMethodBezier:return Ae}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;ro(this.settings)&&(mo(this.settings.inTangents,e),mo(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(W(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(W(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){W(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){W(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&He(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){W(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ke,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,ro(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function mo(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}po.prototype.ValueTypeName=``,po.prototype.TimeBufferType=Float32Array,po.prototype.ValueBufferType=Float32Array,po.prototype.DefaultInterpolation=B;var ho=class extends po{constructor(e,t,n){super(e,t,n)}};ho.prototype.ValueTypeName=`bool`,ho.prototype.ValueBufferType=Array,ho.prototype.DefaultInterpolation=Oe,ho.prototype.InterpolantFactoryMethodLinear=void 0,ho.prototype.InterpolantFactoryMethodSmooth=void 0;var go=class extends po{constructor(e,t,n,r){super(e,t,n,r)}};go.prototype.ValueTypeName=`color`;var _o=class extends po{constructor(e,t,n,r){super(e,t,n,r)}};_o.prototype.ValueTypeName=`number`;var vo=class extends io{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)wt.slerpFlat(i,0,a,c-o,a,c,s);return i}},yo=class extends po{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new vo(this.times,this.values,this.getValueSize(),e)}};yo.prototype.ValueTypeName=`quaternion`,yo.prototype.InterpolantFactoryMethodSmooth=void 0;var bo=class extends po{constructor(e,t,n){super(e,t,n)}};bo.prototype.ValueTypeName=`string`,bo.prototype.ValueBufferType=Array,bo.prototype.DefaultInterpolation=Oe,bo.prototype.InterpolantFactoryMethodLinear=void 0,bo.prototype.InterpolantFactoryMethodSmooth=void 0;var xo=class extends po{constructor(e,t,n,r){super(e,t,n,r)}};xo.prototype.ValueTypeName=`vector`;var So={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Co(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Co(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Co(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var wo=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},To=class{constructor(e){this.manager=e===void 0?wo:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};To.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var Eo={},Do=class extends Error{constructor(e,t){super(e),this.response=t}},Oo=class extends To{constructor(e){super(e),this.mimeType=``,this.responseType=``,this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=So.get(`file:${e}`);if(i!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0);return}if(Eo[e]!==void 0){Eo[e].push({onLoad:t,onProgress:n,onError:r});return}Eo[e]=[],Eo[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`,signal:typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&U(`FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=Eo[e],r=t.body.getReader(),i=t.headers.get(`X-File-Size`)||t.headers.get(`Content-Length`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}},t=>{e.error(t)})}}});return new Response(c)}throw new Do(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===``)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{So.add(`file:${e}`,t);let n=Eo[e];delete Eo[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=Eo[e];if(n===void 0)throw this.manager.itemError(e),t;delete Eo[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},ko=new q,Ao=new wt,jo=new q,Mo=class extends bn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Y,this.projectionMatrix=new Y,this.projectionMatrixInverse=new Y,this.coordinateSystem=Be,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ko,Ao,jo),jo.x===1&&jo.y===1&&jo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ko,Ao,jo.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ko,Ao,jo),jo.x===1&&jo.y===1&&jo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ko,Ao,jo.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},No=new q,Po=new K,Fo=new K,Io=class extends Mo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=tt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(et*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tt*2*Math.atan(Math.tan(et*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){No.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(No.x,No.y).multiplyScalar(-e/No.z),No.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(No.x,No.y).multiplyScalar(-e/No.z)}getViewSize(e,t){return this.getViewBounds(e,Po,Fo),t.subVectors(Fo,Po)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(et*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Lo=class extends Mo{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ro=class extends Cr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},zo=-90,Bo=1,Vo=class extends bn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Io(zo,Bo,e,t);r.layers=this.layers,this.add(r);let i=new Io(zo,Bo,e,t);i.layers=this.layers,this.add(i);let a=new Io(zo,Bo,e,t);a.layers=this.layers,this.add(a);let o=new Io(zo,Bo,e,t);o.layers=this.layers,this.add(o);let s=new Io(zo,Bo,e,t);s.layers=this.layers,this.add(s);let c=new Io(zo,Bo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ho=class extends Io{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Uo=`\\[\\]\\.:\\/`,Wo=RegExp(`[\\[\\]\\.:\\/]`,`g`),Go=`[^\\[\\]\\.:\\/]`,Ko=`[^`+Uo.replace(`\\.`,``)+`]`,qo=`((?:WC+[\\/:])*)`.replace(`WC`,Go),Jo=`(WCOD+)?`.replace(`WCOD`,Ko),Yo=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Go),Xo=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Go),Zo=RegExp(`^`+qo+Jo+Yo+Xo+`$`),Qo=[`material`,`materials`,`bones`,`map`],$o=class{constructor(e,t,n){let r=n||es.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},es=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Wo,``)}static parseTrackName(e){let t=Zo.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Qo.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){U(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){W(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){W(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){W(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){W(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){W(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){W(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){W(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;W(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){W(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){W(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};es.Composite=$o,es.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},es.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},es.prototype.GetterByBindingType=[es.prototype._getValue_direct,es.prototype._getValue_array,es.prototype._getValue_arrayElement,es.prototype._getValue_toArray],es.prototype.SetterByBindingTypeAndVersioning=[[es.prototype._setValue_direct,es.prototype._setValue_direct_setNeedsUpdate,es.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[es.prototype._setValue_array,es.prototype._setValue_array_setNeedsUpdate,es.prototype._setValue_array_setMatrixWorldNeedsUpdate],[es.prototype._setValue_arrayElement,es.prototype._setValue_arrayElement_setNeedsUpdate,es.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[es.prototype._setValue_fromArray,es.prototype._setValue_fromArray_setNeedsUpdate,es.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ts=new Y,ns=class{constructor(e,t,n=0,r=1/0){this.ray=new Pr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new rn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):W(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return ts.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ts),this}intersectObject(e,t=!0,n=[]){return is(e,this,n,t),n.sort(rs),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)is(e[r],this,n,t);return n.sort(rs),n}};function rs(e,t){return e.distance-t.distance}function is(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)is(r[e],t,n,!0)}}(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var as=new K,os=class{constructor(e=new K(1/0,1/0),t=new K(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=as.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,as).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ss=class{constructor(){this.type=`ShapePath`,this.color=new X,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new na,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,i,a){return this.currentPath.bezierCurveTo(e,t,n,r,i,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(e,t){let n=!1,r=t.length;for(let i=0,a=r-1;i<r;a=i++){let r=t[i],o=t[a];r.y>e.y!=o.y>e.y&&e.x<(o.x-r.x)*(e.y-r.y)/(o.y-r.y)+r.x&&(n=!n)}return n}function t(t,n){let r=n.getCenter(new K);if(e(r,t))return r;let i=r.y,a=[],o=t.length;for(let e=0;e<o;e++){let n=t[e],r=t[(e+1)%o];if(n.y>i!=r.y>i){let e=n.x+(i-n.y)*(r.x-n.x)/(r.y-n.y);a.push(e)}}return a.length>1&&(a.sort((e,t)=>e-t),r.x=(a[0]+a[1])/2),r}let n=this.userData.style&&this.userData.style.fillRule||`nonzero`;n!==`nonzero`&&n!==`evenodd`&&(U(`Fill-rule "`+n+`" is not supported, falling back to "nonzero".`),n=`nonzero`);let r=n===`nonzero`?(e=>e!==0):(e=>!!(e&1)),i=[];for(let e of this.subPaths){let n=e.getPoints();if(n.length<3)continue;let r=Ra.area(n);if(r===0)continue;let a=new os;for(let e=0;e<n.length;e++)a.expandByPoint(n[e]);i.push({subPath:e,points:n,boundingBox:a,interiorPoint:t(n,a),absArea:Math.abs(r),winding:r<0?-1:1,container:null,exclude:!1,role:null})}i.sort((e,t)=>t.absArea-e.absArea);for(let t=0;t<i.length;t++){let n=i[t],a=0;for(let r=t-1;r>=0;r--){let t=i[r];if(t.boundingBox.containsBox(n.boundingBox)&&e(n.interiorPoint,t.points)){n.container=t.exclude?t.container:t,a=t.winding,n.winding+=a;break}}r(n.winding)===r(a)&&(n.exclude=!0)}for(let e of i)e.exclude||(e.role=e.container===null||e.container.role===`hole`?`outer`:`hole`);let a=[],o=new Map;for(let e of i){if(e.exclude||e.role!==`outer`)continue;let t=new ra;t.curves=e.subPath.curves,a.push(t),o.set(e,t)}for(let e of i){if(e.exclude||e.role!==`hole`)continue;let t=o.get(e.container);if(!t)continue;let n=new na;n.curves=e.subPath.curves,t.holes.push(n)}return a}};function cs(e,t,n,r){let i=ls(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case O:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case j:return e*t*4/i.components*i.byteLength;case M:case N:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case P:case F:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ee:case te:return Math.max(e,16)*Math.max(t,8)/4;case I:case L:return Math.max(e,8)*Math.max(t,8)/2;case ne:case re:case ie:case z:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case R:case ae:case oe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ce:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case le:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ue:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case de:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case fe:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case pe:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case me:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case he:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case _e:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ve:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case ye:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case be:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case xe:case Se:case Ce:return Math.ceil(e/4)*Math.ceil(t/4)*16;case we:case Te:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ee:case De:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function ls(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?U(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function us(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function ds(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var fs={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},Z={common:{diffuse:{value:new X(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new J},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new J}},envmap:{envMap:{value:null},envMapRotation:{value:new J},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new J}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new J}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new J},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new J},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new J},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new J}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new J}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new J}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new X(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new X(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0},uvTransform:{value:new J}},sprite:{diffuse:{value:new X(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new J},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0}}},ps={basic:{uniforms:Ga([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.fog]),vertexShader:fs.meshbasic_vert,fragmentShader:fs.meshbasic_frag},lambert:{uniforms:Ga([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new X(0)},envMapIntensity:{value:1}}]),vertexShader:fs.meshlambert_vert,fragmentShader:fs.meshlambert_frag},phong:{uniforms:Ga([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new X(0)},specular:{value:new X(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:fs.meshphong_vert,fragmentShader:fs.meshphong_frag},standard:{uniforms:Ga([Z.common,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.roughnessmap,Z.metalnessmap,Z.fog,Z.lights,{emissive:{value:new X(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fs.meshphysical_vert,fragmentShader:fs.meshphysical_frag},toon:{uniforms:Ga([Z.common,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.gradientmap,Z.fog,Z.lights,{emissive:{value:new X(0)}}]),vertexShader:fs.meshtoon_vert,fragmentShader:fs.meshtoon_frag},matcap:{uniforms:Ga([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,{matcap:{value:null}}]),vertexShader:fs.meshmatcap_vert,fragmentShader:fs.meshmatcap_frag},points:{uniforms:Ga([Z.points,Z.fog]),vertexShader:fs.points_vert,fragmentShader:fs.points_frag},dashed:{uniforms:Ga([Z.common,Z.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fs.linedashed_vert,fragmentShader:fs.linedashed_frag},depth:{uniforms:Ga([Z.common,Z.displacementmap]),vertexShader:fs.depth_vert,fragmentShader:fs.depth_frag},normal:{uniforms:Ga([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,{opacity:{value:1}}]),vertexShader:fs.meshnormal_vert,fragmentShader:fs.meshnormal_frag},sprite:{uniforms:Ga([Z.sprite,Z.fog]),vertexShader:fs.sprite_vert,fragmentShader:fs.sprite_frag},background:{uniforms:{uvTransform:{value:new J},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fs.background_vert,fragmentShader:fs.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new J}},vertexShader:fs.backgroundCube_vert,fragmentShader:fs.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fs.cube_vert,fragmentShader:fs.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fs.equirect_vert,fragmentShader:fs.equirect_frag},distance:{uniforms:Ga([Z.common,Z.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fs.distance_vert,fragmentShader:fs.distance_frag},shadow:{uniforms:Ga([Z.lights,Z.fog,{color:{value:new X(0)},opacity:{value:1}}]),vertexShader:fs.shadow_vert,fragmentShader:fs.shadow_frag}};ps.physical={uniforms:Ga([ps.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new J},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new J},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new J},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new J},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new J},sheen:{value:0},sheenColor:{value:new X(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new J},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new J},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new J},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new J},attenuationDistance:{value:0},attenuationColor:{value:new X(0)},specularColor:{value:new X(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new J},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new J},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new J}}]),vertexShader:fs.meshphysical_vert,fragmentShader:fs.meshphysical_frag};var ms={r:0,b:0,g:0},hs=new Y,gs=new J;gs.set(-1,0,0,0,1,0,0,0,1);function _s(e,t,n,r,i,a){let o=new X(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new qr(new Ti(1,1,1),new Qa({name:`BackgroundCubeMaterial`,uniforms:Wa(ps.backgroundCube.uniforms),vertexShader:ps.backgroundCube.vertexShader,fragmentShader:ps.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(hs.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(gs),l.material.toneMapped=jt.getTransfer(i.colorSpace)!==Ie,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new qr(new Va(2,2),new Qa({name:`BackgroundMaterial`,uniforms:Wa(ps.background.uniforms),vertexShader:ps.background.vertexShader,fragmentShader:ps.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=jt.getTransfer(i.colorSpace)!==Ie,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(ms,Ja(e)),n.buffers.color.setClear(ms.r,ms.g,ms.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function vs(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function ys(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function bs(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(U(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&U(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function xs(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Dr,s=new J,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Ss=4,Cs=6,ws=20,Ts=256,Es=new Lo,Ds=new X,Os=null,ks=0,As=0,js=!1,Ms=new q,Ns=new q,Ps=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Ms}=i;Os=this._renderer.getRenderTarget(),ks=this._renderer.getActiveCubeFace(),As=this._renderer.getActiveMipmapLevel(),js=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Os,ks,As),this._renderer.xr.enabled=js,e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Os=this._renderer.getRenderTarget(),ks=this._renderer.getActiveCubeFace(),As=this._renderer.getActiveMipmapLevel(),js=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:g,format:w,colorSpace:Pe,depthBuffer:!1},r=Is(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Is(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Fs(r)),this._blurMaterial=zs(r,e,t),this._ggxMaterial=Rs(r,e,t)}return r}_compileMaterial(e){let t=new qr(new Cr,e);this._renderer.compile(t,Es)}_sceneToCubeUV(e,t,n,r,i){let a=new Io(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Ds),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qr(new Ti,new Fr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Ds),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Ls(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vs()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bs());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Ls(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Es)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Ss?n-d+Ss:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Ls(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Es),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Ls(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Es)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Ls(t,3*l*(r>this._lodMax-Ss?r-this._lodMax+Ss:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Es)}};function Fs(e){let t=[],n=[],r=e,i=e-Ss+1+Cs;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Ns.set(1,r,n):e===1?Ns.set(-n,1,-r):e===2?Ns.set(-n,r,1):e===3?Ns.set(-1,r,-n):e===4?Ns.set(-n,-1,r):Ns.set(n,r,-1),Ns.toArray(l,(e*6+t)*3)}}let u=new Cr;u.setAttribute(`position`,new cr(c,3)),u.setAttribute(`outputDirection`,new cr(l,3)),n.push(new qr(u,null)),r>Ss&&r--}return{lodMeshes:n,sizeLods:t}}function Is(e,t,n){let r=new Wt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Ls(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Rs(e,t,n){return new Qa({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Ts,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function zs(e,t,n){return new Qa({name:`SphericalGaussianBlur`,defines:{SAMPLES:ws,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Hs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Bs(){return new Qa({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Hs(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Vs(){return new Qa({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Hs(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Us=class extends Wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new bi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ti(5,5,5),i=new Qa({name:`CubemapFromEquirect`,uniforms:Wa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new qr(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new Vo(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Ws(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Us(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Ps(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Ps(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Gs(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Je(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Ks(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?ur:lr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function qs(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Js(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:W(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Ys(e,t,n){let r=new WeakMap,i=new Ht;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new Gt(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new K(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Xs(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Zs={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Qs(e,t,n,r,i,a){let o=new Wt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Cr;l.setAttribute(`position`,new dr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new dr([0,2,0,0,2,0],2));let u=new $a({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new qr(l,u),f=new Lo(-1,1,1,-1,0,1),p=null,m=null,h=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new Wt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new Wt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},jt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Zs[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var $s=new Vt,ec=new Si(1,1),tc=new Gt,nc=new Kt,rc=new bi,ic=[],ac=[],oc=new Float32Array(16),sc=new Float32Array(9),cc=new Float32Array(4);function lc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ic[i];if(a===void 0&&(a=new Float32Array(i),ic[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function uc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function dc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function fc(e,t){let n=ac[t];n===void 0&&(n=new Int32Array(t),ac[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function pc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function mc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(uc(n,t))return;e.uniform2fv(this.addr,t),dc(n,t)}}function hc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(uc(n,t))return;e.uniform3fv(this.addr,t),dc(n,t)}}function gc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(uc(n,t))return;e.uniform4fv(this.addr,t),dc(n,t)}}function _c(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(uc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),dc(n,t)}else{if(uc(n,r))return;cc.set(r),e.uniformMatrix2fv(this.addr,!1,cc),dc(n,r)}}function vc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(uc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),dc(n,t)}else{if(uc(n,r))return;sc.set(r),e.uniformMatrix3fv(this.addr,!1,sc),dc(n,r)}}function yc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(uc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),dc(n,t)}else{if(uc(n,r))return;oc.set(r),e.uniformMatrix4fv(this.addr,!1,oc),dc(n,r)}}function bc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function xc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(uc(n,t))return;e.uniform2iv(this.addr,t),dc(n,t)}}function Sc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(uc(n,t))return;e.uniform3iv(this.addr,t),dc(n,t)}}function Cc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(uc(n,t))return;e.uniform4iv(this.addr,t),dc(n,t)}}function wc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Tc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(uc(n,t))return;e.uniform2uiv(this.addr,t),dc(n,t)}}function Ec(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(uc(n,t))return;e.uniform3uiv(this.addr,t),dc(n,t)}}function Dc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(uc(n,t))return;e.uniform4uiv(this.addr,t),dc(n,t)}}function Oc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(ec.compareFunction=n.isReversedDepthBuffer()?518:515,a=ec):a=$s,n.setTexture2D(t||a,i)}function kc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||nc,i)}function Ac(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||rc,i)}function jc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||tc,i)}function Mc(e){switch(e){case 5126:return pc;case 35664:return mc;case 35665:return hc;case 35666:return gc;case 35674:return _c;case 35675:return vc;case 35676:return yc;case 5124:case 35670:return bc;case 35667:case 35671:return xc;case 35668:case 35672:return Sc;case 35669:case 35673:return Cc;case 5125:return wc;case 36294:return Tc;case 36295:return Ec;case 36296:return Dc;case 35678:case 36198:case 36298:case 36306:case 35682:return Oc;case 35679:case 36299:case 36307:return kc;case 35680:case 36300:case 36308:case 36293:return Ac;case 36289:case 36303:case 36311:case 36292:return jc}}function Nc(e,t){e.uniform1fv(this.addr,t)}function Pc(e,t){let n=lc(t,this.size,2);e.uniform2fv(this.addr,n)}function Fc(e,t){let n=lc(t,this.size,3);e.uniform3fv(this.addr,n)}function Ic(e,t){let n=lc(t,this.size,4);e.uniform4fv(this.addr,n)}function Lc(e,t){let n=lc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Rc(e,t){let n=lc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function zc(e,t){let n=lc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Bc(e,t){e.uniform1iv(this.addr,t)}function Vc(e,t){e.uniform2iv(this.addr,t)}function Hc(e,t){e.uniform3iv(this.addr,t)}function Uc(e,t){e.uniform4iv(this.addr,t)}function Wc(e,t){e.uniform1uiv(this.addr,t)}function Gc(e,t){e.uniform2uiv(this.addr,t)}function Kc(e,t){e.uniform3uiv(this.addr,t)}function qc(e,t){e.uniform4uiv(this.addr,t)}function Jc(e,t,n){let r=this.cache,i=t.length,a=fc(n,i);uc(r,a)||(e.uniform1iv(this.addr,a),dc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?ec:$s;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Yc(e,t,n){let r=this.cache,i=t.length,a=fc(n,i);uc(r,a)||(e.uniform1iv(this.addr,a),dc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||nc,a[e])}function Xc(e,t,n){let r=this.cache,i=t.length,a=fc(n,i);uc(r,a)||(e.uniform1iv(this.addr,a),dc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||rc,a[e])}function Zc(e,t,n){let r=this.cache,i=t.length,a=fc(n,i);uc(r,a)||(e.uniform1iv(this.addr,a),dc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||tc,a[e])}function Qc(e){switch(e){case 5126:return Nc;case 35664:return Pc;case 35665:return Fc;case 35666:return Ic;case 35674:return Lc;case 35675:return Rc;case 35676:return zc;case 5124:case 35670:return Bc;case 35667:case 35671:return Vc;case 35668:case 35672:return Hc;case 35669:case 35673:return Uc;case 5125:return Wc;case 36294:return Gc;case 36295:return Kc;case 36296:return qc;case 35678:case 36198:case 36298:case 36306:case 35682:return Jc;case 35679:case 36299:case 36307:return Yc;case 35680:case 36300:case 36308:case 36293:return Xc;case 36289:case 36303:case 36311:case 36292:return Zc}}var $c=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Mc(t.type)}},el=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qc(t.type)}},tl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},nl=/(\w+)(\])?(\[|\.)?/g;function rl(e,t){e.seq.push(t),e.map[t.id]=t}function il(e,t,n){let r=e.name,i=r.length;for(nl.lastIndex=0;;){let a=nl.exec(r),o=nl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){rl(n,l===void 0?new $c(s,e,t):new el(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new tl(s),rl(n,e)),n=e}}}var al=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);il(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function ol(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var sl=37297,cl=0;function ll(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var ul=new J;function dl(e){jt._getMatrix(ul,jt.workingColorSpace,e);let t=`mat3( ${ul.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(e)){case Fe:return[t,`LinearTransferOETF`];case Ie:return[t,`sRGBTransferOETF`];default:return U(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function fl(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+ll(e.getShaderSource(t),r)}return i}function pl(e,t){let n=dl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var ml={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function hl(e,t){let n=ml[t];return n===void 0?(U(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var gl=new q;function _l(){return jt.getLuminanceCoefficients(gl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${gl.x.toFixed(4)}, ${gl.y.toFixed(4)}, ${gl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function vl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(xl).join(`
`)}function yl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function bl(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function xl(e){return e!==``}function Sl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var wl=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tl(e){return e.replace(wl,Dl)}var El=new Map;function Dl(e,t){let n=fs[t];if(n===void 0){let e=El.get(t);if(e!==void 0)n=fs[e],U(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Tl(n)}var Ol=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kl(e){return e.replace(Ol,Al)}function Al(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function jl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Ml={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Nl(e){return Ml[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Pl={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Fl(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Pl[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Il={302:`ENVMAP_MODE_REFRACTION`};function Ll(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Il[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Rl={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function zl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Rl[e.combine]||`ENVMAP_BLENDING_NONE`}function Bl(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Vl(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Nl(n),l=Fl(n),u=Ll(n),d=zl(n),f=Bl(n),p=vl(n),m=yl(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(xl).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(xl).join(`
`),_.length>0&&(_+=`
`)):(g=[jl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(xl).join(`
`),_=[jl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:fs.tonemapping_pars_fragment,n.toneMapping===0?``:hl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,fs.colorspace_pars_fragment,pl(`linearToOutputTexel`,n.outputColorSpace),_l(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(xl).join(`
`)),o=Tl(o),o=Sl(o,n),o=Cl(o,n),s=Tl(s),s=Sl(s,n),s=Cl(s,n),o=kl(o),s=kl(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=ol(i,i.VERTEX_SHADER,y),S=ol(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=fl(i,x,`vertex`),n=fl(i,S,`fragment`);W(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):U(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new al(i,h),T=bl(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,sl)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=cl++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Hl=0,Ul=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Wl(e),t.set(e,n)),n}},Wl=class{constructor(e){this.id=Hl++,this.code=e,this.usedTimes=0}};function Gl(e){return e===1030||e===37490||e===36285}function Kl(e,t,n,r,i,a){let o=new rn,s=new Ul,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&U(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=ps[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,P=h.isBatchedMesh===!0,F=!!i.map,I=!!i.matcap,ee=!!x,L=!!i.aoMap,te=!!i.lightMap,ne=!!i.bumpMap&&i.wireframe===!1,re=!!i.normalMap,R=!!i.displacementMap,ie=!!i.emissiveMap,z=!!i.metalnessMap,ae=!!i.roughnessMap,oe=i.anisotropy>0,se=i.clearcoat>0,ce=i.dispersion>0,le=i.retroreflectivity>0,ue=i.iridescence>0,de=i.sheen>0,fe=i.transmission>0,pe=oe&&!!i.anisotropyMap,me=se&&!!i.clearcoatMap,he=se&&!!i.clearcoatNormalMap,ge=se&&!!i.clearcoatRoughnessMap,_e=ue&&!!i.iridescenceMap,ve=ue&&!!i.iridescenceThicknessMap,ye=de&&!!i.sheenColorMap,be=de&&!!i.sheenRoughnessMap,xe=!!i.specularMap,Se=!!i.specularColorMap,Ce=!!i.specularIntensityMap,we=fe&&!!i.transmissionMap,Te=fe&&!!i.thicknessMap,Ee=!!i.gradientMap,De=!!i.alphaMap,Oe=i.alphaTest>0,B=!!i.alphaHash,ke=!!i.extensions,Ae=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ae=e.toneMapping);let je={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:P,batchingColor:P&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:jt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:F,matcap:I,envMap:ee,envMapMode:ee&&x.mapping,envMapCubeUVHeight:S,aoMap:L,lightMap:te,bumpMap:ne,normalMap:re,displacementMap:R,emissiveMap:ie,normalMapObjectSpace:re&&i.normalMapType===1,normalMapTangentSpace:re&&i.normalMapType===0,packedNormalMap:re&&i.normalMapType===0&&Gl(i.normalMap.format),metalnessMap:z,roughnessMap:ae,anisotropy:oe,anisotropyMap:pe,clearcoat:se,clearcoatMap:me,clearcoatNormalMap:he,clearcoatRoughnessMap:ge,dispersion:ce,retroreflection:le,iridescence:ue,iridescenceMap:_e,iridescenceThicknessMap:ve,sheen:de,sheenColorMap:ye,sheenRoughnessMap:be,specularMap:xe,specularColorMap:Se,specularIntensityMap:Ce,transmission:fe,transmissionMap:we,thicknessMap:Te,gradientMap:Ee,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:De,alphaTest:Oe,alphaHash:B,combine:i.combine,mapUv:F&&m(i.map.channel),aoMapUv:L&&m(i.aoMap.channel),lightMapUv:te&&m(i.lightMap.channel),bumpMapUv:ne&&m(i.bumpMap.channel),normalMapUv:re&&m(i.normalMap.channel),displacementMapUv:R&&m(i.displacementMap.channel),emissiveMapUv:ie&&m(i.emissiveMap.channel),metalnessMapUv:z&&m(i.metalnessMap.channel),roughnessMapUv:ae&&m(i.roughnessMap.channel),anisotropyMapUv:pe&&m(i.anisotropyMap.channel),clearcoatMapUv:me&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:he&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:be&&m(i.sheenRoughnessMap.channel),specularMapUv:xe&&m(i.specularMap.channel),specularColorMapUv:Se&&m(i.specularColorMap.channel),specularIntensityMapUv:Ce&&m(i.specularIntensityMap.channel),transmissionMapUv:we&&m(i.transmissionMap.channel),thicknessMapUv:Te&&m(i.thicknessMap.channel),alphaMapUv:De&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(re||oe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(F||De),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&re===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ae,decodeVideoTexture:F&&i.map.isVideoTexture===!0&&jt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ie&&i.emissiveMap.isVideoTexture===!0&&jt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:ke&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(ke&&i.extensions.multiDraw===!0||P)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=ps[t];n=Ya.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Vl(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function ql(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Jl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Yl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Xl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Jl),r.length>1&&r.sort(t||Yl),i.length>1&&i.sort(t||Yl)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Zl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Xl,e.set(t,[i])):n>=r.length?(i=new Xl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Ql(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new q,color:new X};break;case`SpotLight`:n={position:new q,direction:new q,color:new X,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new q,color:new X,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new q,skyColor:new X,groundColor:new X};break;case`RectAreaLight`:n={color:new X,position:new q,halfWidth:new q,halfHeight:new q}}return e[t.id]=n,n}}}function $l(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var eu=0;function tu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function nu(e){let t=new Ql,n=$l(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new q);let i=new q,a=new Y,o=new Y;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(tu);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Z.LTC_FLOAT_1,r.rectAreaLTC2=Z.LTC_FLOAT_2):(r.rectAreaLTC1=Z.LTC_HALF_1,r.rectAreaLTC2=Z.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=eu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function ru(e){let t=new nu(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function iu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new ru(e),t.set(n,[a])):r>=i.length?(a=new ru(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var au=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ou=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,su=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],cu=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],lu=new Y,uu=new q,du=new q;function fu(e,t,n){let i=new li,a=new K,s=new K,c=new Ht,l=new eo,u=new to,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new Qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:au,fragmentShader:ou}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new Cr;y.setAttribute(`position`,new cr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new qr(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(U(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){U(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){U(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Wt(a.x,a.y,{format:k,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Si(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new Us(a.x),p.map.depthTexture=new Ci(a.x,m)):(p.map=new Wt(a.x,a.y),p.map.depthTexture=new Si(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),uu.setFromMatrixPosition(d.matrixWorld),e.position.copy(uu),du.copy(e.position),du.add(su[t]),e.up.copy(cu[t]),e.lookAt(du),e.updateMatrixWorld(),n.makeTranslation(-uu.x,-uu.y,-uu.z),lu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(lu,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new Wt(a.x,a.y,{format:k,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)E(c[e],r,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function pu(e,t){function n(){let t=!1,n=new Ht,r=null,i=new Ht(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?z(e.DEPTH_TEST):ae(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Xe[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?z(e.STENCIL_TEST):ae(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new X(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let I=null,ee={},L=e.getParameter(e.SCISSOR_BOX),te=e.getParameter(e.VIEWPORT),ne=new Ht().fromArray(L),re=new Ht().fromArray(te);function R(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ie={};ie[e.TEXTURE_2D]=R(e.TEXTURE_2D,e.TEXTURE_2D,1),ie[e.TEXTURE_CUBE_MAP]=R(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[e.TEXTURE_2D_ARRAY]=R(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ie[e.TEXTURE_3D]=R(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),z(e.DEPTH_TEST),o.setFunc(3),pe(!1),me(1),z(e.CULL_FACE),de(0);function z(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ae(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function oe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function se(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ce(t){return h!==t&&(e.useProgram(t),h=t,!0)}let le={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};le[103]=e.MIN,le[104]=e.MAX;let ue={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function de(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(ae(e.BLEND),g=!1);return}if(g===!1&&(z(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:W(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:W(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:W(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:W(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(le[n],le[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ue[r],ue[i],ue[o],ue[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function fe(t,n){t.side===2?ae(e.CULL_FACE):z(e.CULL_FACE);let r=t.side===1;n&&(r=!r),pe(r),t.blending===1&&t.transparent===!1?de(0):de(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ge(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?z(e.SAMPLE_ALPHA_TO_COVERAGE):ae(e.SAMPLE_ALPHA_TO_COVERAGE)}function pe(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function me(t){t===0?ae(e.CULL_FACE):(z(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function he(t){t!==k&&(N&&e.lineWidth(t),k=t)}function ge(t,n,r){t?(z(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ae(e.POLYGON_OFFSET_FILL)}function _e(t){t?z(e.SCISSOR_TEST):ae(e.SCISSOR_TEST)}function ve(t){t===void 0&&(t=e.TEXTURE0+M-1),I!==t&&(e.activeTexture(t),I=t)}function ye(t,n,r){r===void 0&&(r=I===null?e.TEXTURE0+M-1:I);let i=ee[r];i===void 0&&(i={type:void 0,texture:void 0},ee[r]=i),(i.type!==t||i.texture!==n)&&(I!==r&&(e.activeTexture(r),I=r),e.bindTexture(t,n||ie[t]),i.type=t,i.texture=n)}function be(){let t=ee[I];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function xe(){try{e.compressedTexImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Se(){try{e.compressedTexImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ce(){try{e.texSubImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function we(){try{e.texSubImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Te(){try{e.compressedTexSubImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ee(){try{e.compressedTexSubImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function De(){try{e.texStorage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Oe(){try{e.texStorage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function B(){try{e.texImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function ke(){try{e.texImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ae(t){return d[t]===void 0?e.getParameter(t):d[t]}function je(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function V(t){ne.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ne.copy(t))}function Me(t){re.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),re.copy(t))}function H(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ne(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Pe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},I=null,ee={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new X(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ne.set(0,0,e.canvas.width,e.canvas.height),re.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:z,disable:ae,bindFramebuffer:oe,drawBuffers:se,useProgram:ce,setBlending:de,setMaterial:fe,setFlipSided:pe,setCullFace:me,setLineWidth:he,setPolygonOffset:ge,setScissorTest:_e,activeTexture:ve,bindTexture:ye,unbindTexture:be,compressedTexImage2D:xe,compressedTexImage3D:Se,texImage2D:B,texImage3D:ke,pixelStorei:je,getParameter:Ae,updateUBOMapping:H,uniformBlockBinding:Ne,texStorage2D:De,texStorage3D:Oe,texSubImage2D:Ce,texSubImage3D:we,compressedTexSubImage2D:Te,compressedTexSubImage3D:Ee,scissor:V,viewport:Me,reset:Pe}}function mu(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new K,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Ue(`canvas`)}function T(e,t,n){let r=1,i=Ae(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),U(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&U(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function D(e){return e.generateMipmaps}function O(e){l.generateMipmap(e)}function k(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function A(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];U(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||U(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?Fe:jt.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function j(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,U(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function M(e,t){return D(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function N(e){let t=e.target;t.removeEventListener(`dispose`,N),F(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function P(e){let t=e.target;t.removeEventListener(`dispose`,P),ee(t)}function F(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&I(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function I(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function ee(e){let t=f.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),f.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=f.get(n[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(n[e])}f.remove(e)}let L=0;function te(){L=0}function ne(){return L}function re(e){L=e}function R(){let e=L;return e>=p.maxTextures&&U(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),L+=1,e}function ie(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function z(e,t){let n=f.get(e);if(e.isVideoTexture&&B(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)U(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)U(`WebGLRenderer: Texture marked for update but image is incomplete`);else{he(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function ae(e,t){let n=f.get(e);if(e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){he(n,e,t);return}e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t)}function oe(e,t){let n=f.get(e);if(e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){he(n,e,t);return}d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function se(e,t){let n=f.get(e);if(e.isCubeDepthTexture!==!0&&e.version>0&&n.__version!==e.version){ge(n,e,t);return}d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let ce={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},le={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},ue={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function de(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&U(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,ce[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,ce[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,ce[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,le[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,le[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,ue[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function fe(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,N));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=ie(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&I(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function pe(e,t,n){return Math.floor(Math.floor(e/n)/t)}function me(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=pe(r.start,t.width,4),c=pe(n.start,t.width,4);r.start<=o+1&&s===c&&pe(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function he(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=fe(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=jt.getPrimaries(jt.workingColorSpace),n=t.colorSpace===``?null:jt.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=T(t.image,!1,p.maxTextureSize);e=ke(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=A(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);de(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=M(t,e);if(t.isDepthTexture)u=j(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&me(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=cs(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=cs(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=Ae(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=Ae(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);D(t)&&O(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function ge(e,t,n){if(t.image.length!==6)return;let r=fe(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=jt.getPrimaries(jt.workingColorSpace),o=t.colorSpace===``?null:jt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=T(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=ke(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=A(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=M(t,h);de(l.TEXTURE_CUBE_MAP,t);let C;if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=Ae(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}D(t)&&O(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function _e(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=A(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),Oe(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,De(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function ve(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=j(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;Oe(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,De(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,De(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=A(i.internalFormat,a,o,i.normalized,i.colorSpace);Oe(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,De(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,De(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function ye(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);if(i.__renderTarget=t,(!i.__webglTexture||t.depthTexture.image.width!==t.width||t.depthTexture.image.height!==t.height)&&(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),r){if(i.__webglInit===void 0&&(i.__webglInit=!0,t.depthTexture.addEventListener(`dispose`,N)),i.__webglTexture===void 0){i.__webglTexture=l.createTexture(),d.bindTexture(l.TEXTURE_CUBE_MAP,i.__webglTexture),de(l.TEXTURE_CUBE_MAP,t.depthTexture);let e=m.convert(t.depthTexture.format),n=m.convert(t.depthTexture.type),r;t.depthTexture.format===1026?r=l.DEPTH_COMPONENT24:t.depthTexture.format===1027&&(r=l.DEPTH24_STENCIL8);for(let i=0;i<6;i++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,r,t.width,t.height,0,e,n,null)}}else z(t.depthTexture,0);let a=i.__webglTexture,o=De(t),s=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,c=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)Oe(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else if(t.depthTexture.format===1027)Oe(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function be(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)ye(t.__webglFramebuffer[n],e,n);else{let n=e.texture.mipmaps;n&&n.length>0?ye(t.__webglFramebuffer[0],e,0):ye(t.__webglFramebuffer,e,0)}}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),ve(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else{let n=e.texture.mipmaps;if(n&&n.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),ve(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}}d.bindFramebuffer(l.FRAMEBUFFER,null)}function xe(e,t,n){let r=f.get(e);t!==void 0&&_e(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&be(e)}function Se(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,P);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&Oe(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=A(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=De(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),ve(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),de(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)_e(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else _e(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);D(t)&&O(l.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),de(o,r),_e(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),D(r)&&O(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),de(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)_e(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else _e(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);D(t)&&O(i),d.unbindTexture()}e.depthBuffer&&be(e)}function Ce(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(D(r)){let t=k(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),O(t),d.unbindTexture()}}}let we=[],Te=[];function Ee(e){if(e.samples>0){if(Oe(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer);let c=e.texture.mipmaps;c&&c.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(we.length=0,Te.length=0,we.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&(we.push(a),Te.push(a),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,Te)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,we))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function De(e){return Math.min(p.maxSamples,e.samples)}function Oe(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function B(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function ke(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(jt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&U(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):W(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ae(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=R,this.resetTextureUnits=te,this.getTextureUnits=ne,this.setTextureUnits=re,this.setTexture2D=z,this.setTexture2DArray=ae,this.setTexture3D=oe,this.setTextureCube=se,this.rebindTextures=xe,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function hu(e,t){function n(n,r=``){let i,a=jt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var gu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_u=`
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

}`,vu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new wi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Qa({vertexShader:gu,fragmentShader:_u,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qr(new Va(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yu=class extends Ze{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new vu,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],O=new K,k=null,A=null,j=new Io;j.viewport=new Ht;let M=new Io;M.viewport=new Ht;let N=[j,M],P=new Ho,F=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new Cn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new Cn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new Cn,C[e]=t),t.getHandSpace()};function ee(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function L(){r.removeEventListener(`select`,ee),r.removeEventListener(`selectstart`,ee),r.removeEventListener(`selectend`,ee),r.removeEventListener(`squeeze`,ee),r.removeEventListener(`squeezestart`,ee),r.removeEventListener(`squeezeend`,ee),r.removeEventListener(`end`,L),r.removeEventListener(`inputsourceschange`,te);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}F=null,I=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&U(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&U(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,ee),r.addEventListener(`selectstart`,ee),r.addEventListener(`selectend`,ee),r.addEventListener(`squeeze`,ee),r.addEventListener(`squeezestart`,ee),r.addEventListener(`squeezeend`,ee),r.addEventListener(`end`,L),r.addEventListener(`inputsourceschange`,te),b.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Wt(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new Si(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Wt(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),se.setContext(r),se.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function te(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let ne=new q,re=new q;function R(e,t,n){ne.setFromMatrixPosition(t.matrixWorld),re.setFromMatrixPosition(n.matrixWorld);let r=ne.distanceTo(re),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ie(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),P.near=M.near=j.near=t,P.far=M.far=j.far=n,(F!==P.near||I!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),F=P.near,I=P.far),P.layers.mask=e.layers.mask|6,j.layers.mask=P.layers.mask&-5,M.layers.mask=P.layers.mask&-3;let i=e.parent,a=P.cameras;ie(P,i);for(let e=0;e<a.length;e++)ie(a[e],i);a.length===2?R(P,j,M):P.projectionMatrix.copy(j.projectionMatrix),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),z(e,P,i)};function z(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=tt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(P)},this.getCameraTexture=function(e){return v[e]};let ae=null;function oe(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==P.cameras.length&&(P.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=N[n];o===void 0&&(o=new Io,o.layers.enable(n),o.viewport=new Ht,N[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(P.matrix.copy(o.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),i===!0&&P.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new wi,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ae&&ae(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let se=new us;se.setAnimationLoop(oe),this.setAnimationLoop=function(e){ae=e},this.dispose=function(){}}},bu=new Y,xu=new J;xu.set(-1,0,0,0,1,0,0,0,1);function Su(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Ja(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(bu.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(xu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Cu(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return W(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?U(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):U(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var wu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Tu=null;function Eu(){return Tu===null&&(Tu=new Xr(wu,16,16,k,g),Tu.name=`DFG_LUT`,Tu.minFilter=o,Tu.magFilter=o,Tu.wrapS=t,Tu.wrapT=t,Tu.generateMipmaps=!1,Tu.needsUpdate=!0),Tu}var Du=class{constructor(e={}){let{canvas:t=We(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([j,A,O]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D=new q,k=null,M=null,N=[],P=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,ee=!1,L=null,te=null,ne=null,re=null;this._outputColorSpace=Ne;let R=0,ie=0,z=null,ae=-1,oe=null,se=new Ht,ce=new Ht,le=null,ue=new X(0),de=0,fe=t.width,pe=t.height,me=1,he=null,ge=null,_e=new Ht(0,0,fe,pe),ve=new Ht(0,0,fe,pe),ye=!1,be=new li,xe=!1,Se=!1,Ce=new Y,we=new q,Te=new Ht,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},De=!1;function Oe(){return z===null?me:1}let B=n;function ke(e,n){return t.getContext(e,n)}let Ae,je,V,Me,H,Pe,Fe,Ie,Le,Re,ze,Ve,He,Ue,Ge,qe,Je,Xe,Ze,Qe,$e,et,tt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,rt,!1),t.addEventListener(`webglcontextrestored`,it,!1),t.addEventListener(`webglcontextcreationerror`,at,!1),B===null){let t=`webgl2`;if(B=ke(t,e),B===null)throw ke(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}nt()}catch(e){throw t.removeEventListener(`webglcontextlost`,rt,!1),t.removeEventListener(`webglcontextrestored`,it,!1),t.removeEventListener(`webglcontextcreationerror`,at,!1),W(`WebGLRenderer: `+e.message),e}function nt(){Ae=new Gs(B),Ae.init(),$e=new hu(B,Ae),je=new bs(B,Ae,e,$e),V=new pu(B,Ae),je.reversedDepthBuffer&&h&&V.buffers.depth.setReversed(!0),te=B.createFramebuffer(),ne=B.createFramebuffer(),re=B.createFramebuffer(),Me=new Js(B),H=new ql,Pe=new mu(B,Ae,V,H,je,$e,Me),Fe=new Ws(I),Ie=new ds(B),et=new vs(B,Ie),Le=new Ks(B,Ie,Me,et),Re=new Xs(B,Le,Ie,et,Me),Xe=new Ys(B,je,Pe),Ge=new xs(H),ze=new Kl(I,Fe,Ae,je,et,Ge),Ve=new Su(I,H),He=new Zl,Ue=new iu(Ae),Je=new _s(I,Fe,V,Re,x,s),qe=new fu(I,Re,je),tt=new Cu(B,Me,je,V),Ze=new ys(B,Ae,Me),Qe=new qs(B,Ae,Me),Me.programs=ze.programs,I.capabilities=je,I.extensions=Ae,I.properties=H,I.renderLists=He,I.shadowMap=qe,I.state=V,I.info=Me}S!==1009&&(F=new Qs(S,t.width,t.height,o,r,i));let G=new yu(I,B);this.xr=G,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let e=Ae.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ae.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(e){e!==void 0&&(me=e,this.setSize(fe,pe,!1))},this.getSize=function(e){return e.set(fe,pe)},this.setSize=function(e,n,r=!0){if(G.isPresenting){U(`WebGLRenderer: Can't change size while VR device is presenting.`);return}fe=e,pe=n,t.width=Math.floor(e*me),t.height=Math.floor(n*me),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(fe*me,pe*me).floor()},this.setDrawingBufferSize=function(e,n,r){fe=e,pe=n,me=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009){W(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){U(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}F.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(se)},this.getViewport=function(e){return e.copy(_e)},this.setViewport=function(e,t,n,r){e.isVector4?_e.set(e.x,e.y,e.z,e.w):_e.set(e,t,n,r),V.viewport(se.copy(_e).multiplyScalar(me).round())},this.getScissor=function(e){return e.copy(ve)},this.setScissor=function(e,t,n,r){e.isVector4?ve.set(e.x,e.y,e.z,e.w):ve.set(e,t,n,r),V.scissor(ce.copy(ve).multiplyScalar(me).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(e){V.setScissorTest(ye=e)},this.setOpaqueSort=function(e){he=e},this.setTransparentSort=function(e){ge=e},this.getClearColor=function(e){return e.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(z!==null){let t=z.texture.format;e=C.has(t)}if(e){let e=z.texture.type,t=w.has(e),n=Je.getClearColor(),r=Je.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,B.clearBufferuiv(B.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,B.clearBufferiv(B.COLOR,0,E))}else r|=B.COLOR_BUFFER_BIT}t&&(r|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&B.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),L=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,rt,!1),t.removeEventListener(`webglcontextrestored`,it,!1),t.removeEventListener(`webglcontextcreationerror`,at,!1),Je.dispose(),He.dispose(),Ue.dispose(),H.dispose(),Fe.dispose(),Re.dispose(),et.dispose(),tt.dispose(),ze.dispose(),G.dispose(),G.removeEventListener(`sessionstart`,ft),G.removeEventListener(`sessionend`,pt),mt.stop()};function rt(e){e.preventDefault(),Ke(`WebGLRenderer: Context Lost.`),ee=!0}function it(){Ke(`WebGLRenderer: Context Restored.`),ee=!1;let e=Me.autoReset,t=qe.enabled,n=qe.autoUpdate,r=qe.needsUpdate,i=qe.type;nt(),Me.autoReset=e,qe.enabled=t,qe.autoUpdate=n,qe.needsUpdate=r,qe.type=i}function at(e){W(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ot(e){let t=e.target;t.removeEventListener(`dispose`,ot),st(t)}function st(e){ct(e),H.remove(e)}function ct(e){let t=H.get(e).programs;t!==void 0&&(t.forEach(function(e){ze.releaseProgram(e)}),e.isShaderMaterial&&ze.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ee);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=K(e,t,n,r,i);V.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Le.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;et.setup(i,r,s,n,c);let h,g=Ze;if(c!==null&&(h=Ie.get(c),g=Qe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(V.setLineWidth(r.wireframeLinewidth*Oe()),g.setMode(B.LINES)):g.setMode(B.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),V.setLineWidth(e*Oe()),i.isLineSegments?g.setMode(B.LINES):i.isLineLoop?g.setMode(B.LINE_LOOP):g.setMode(B.LINE_STRIP)}else i.isPoints?g.setMode(B.POINTS):i.isSprite&&g.setMode(B.TRIANGLES);if(i.isBatchedMesh){if(Ae.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ie.get(c).bytesPerElement:1,o=H.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(B,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function lt(e,t,n,r){L!==null&&e.isNodeMaterial&&L.setObject(r,e),xe===!0&&Ge.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,bt(e,t,r),e.side=0,e.needsUpdate=!0,bt(e,t,r),e.side=2):bt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),L!==null&&L.renderStart(e,t,n),M=Ue.get(n),M.init(t),P.push(M),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(M.pushLight(e),e.castShadow&&M.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(M.pushLight(e),e.castShadow&&M.pushShadow(e))}),M.setupLights(),L!==null&&L.updateLights(M.state.lightsArray),Se=this.localClippingEnabled,xe=Ge.init(this.clippingPlanes,Se),xe===!0&&Ge.setGlobalState(this.clippingPlanes,t),L!==null&&qe.render(M.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];lt(o,n,t,e),r.add(o)}else lt(i,n,t,e),r.add(i)}}),M=P.pop(),L!==null&&L.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=H.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Ae.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ut=null;function dt(e){ut&&ut(e)}function ft(){mt.stop()}function pt(){mt.start()}let mt=new us;mt.setAnimationLoop(dt),typeof self<`u`&&mt.setContext(self),this.setAnimationLoop=function(e){ut=e,G.setAnimationLoop(e),e===null?mt.stop():mt.start()},G.addEventListener(`sessionstart`,ft),G.addEventListener(`sessionend`,pt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){W(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ee===!0)return;L!==null&&L.renderStart(e,t);let n=G.enabled===!0&&G.isPresenting===!0,r=F!==null&&(z===null||n)&&F.begin(I,z);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(G.cameraAutoUpdate===!0&&G.updateCamera(t),t=G.getCamera()),e.isScene===!0&&e.onBeforeRender(I,e,t,z),M=Ue.get(e,P.length),M.init(t),M.state.textureUnits=Pe.getTextureUnits(),P.push(M),Ce.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),be.setFromProjectionMatrix(Ce,Be,t.reversedDepth),Se=this.localClippingEnabled,xe=Ge.init(this.clippingPlanes,Se),k=He.get(e,N.length),k.init(),N.push(k),G.enabled===!0&&G.isPresenting===!0){let e=I.xr.getDepthSensingMesh();e!==null&&ht(e,t,-1/0,I.sortObjects)}ht(e,t,0,I.sortObjects),k.finish(),L!==null&&L.updateLights(M.state.lightsArray),I.sortObjects===!0&&k.sort(he,ge),De=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,De&&Je.addToRenderList(k,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xe===!0&&Ge.beginShadows();let i=M.state.shadowsArray;if(qe.render(i,e,t),xe===!0&&Ge.endShadows(),(r&&F.hasRenderPass())===!1){let n=k.opaque,r=k.transmissive;if(M.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];_t(n,r,e,a)}De&&Je.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];gt(k,e,n,n.viewport)}}else r.length>0&&_t(n,r,e,t),De&&Je.render(e),gt(k,e,t)}z!==null&&ie===0&&(Pe.updateMultisampleRenderTarget(z),Pe.updateRenderTargetMipmap(z)),r&&F.end(I),e.isScene===!0&&e.onAfterRender(I,e,t),et.resetDefaultState(),ae=-1,oe=null,P.pop(),P.length>0?(M=P[P.length-1],Pe.setTextureUnits(M.state.textureUnits),xe===!0&&Ge.setGlobalState(I.clippingPlanes,M.state.camera)):M=null,N.pop(),k=N.length>0?N[N.length-1]:null,L!==null&&L.renderEnd()};function ht(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)M.pushLightProbeGrid(e);else if(e.isLight)M.pushLight(e),e.castShadow&&M.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(be)){r&&Te.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ce);let i=Re.update(e),a=e.material;a.visible&&k.push(e,i,a,n,Te.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(be))){let i=Re.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Te.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Te.copy(e.boundingSphere.center)),Te.applyMatrix4(e.matrixWorld).applyMatrix4(Ce)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&k.push(e,i,c,n,Te.z,s,t)}}else a.visible&&k.push(e,i,a,n,Te.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)ht(i[e],t,n,r)}function gt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;M.setupLightsView(n),xe===!0&&Ge.setGlobalState(I.clippingPlanes,n),r&&V.viewport(se.copy(r)),i.length>0&&vt(i,t,n),a.length>0&&vt(a,t,n),o.length>0&&vt(o,t,n),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function _t(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[r.id]===void 0){let e=Ae.has(`EXT_color_buffer_half_float`)||Ae.has(`EXT_color_buffer_float`);M.state.transmissionRenderTarget[r.id]=new Wt(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,je.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:jt.workingColorSpace})}let a=M.state.transmissionRenderTarget[r.id],o=r.viewport||se;a.setSize(o.z*I.transmissionResolutionScale,o.w*I.transmissionResolutionScale);let s=I.getRenderTarget(),u=I.getActiveCubeFace(),d=I.getActiveMipmapLevel();I.setRenderTarget(a),I.getClearColor(ue),de=I.getClearAlpha(),de<1&&I.setClearColor(16777215,.5),I.clear(),De&&Je.render(n);let f=I.toneMapping;I.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),M.setupLightsView(r),xe===!0&&Ge.setGlobalState(I.clippingPlanes,r),vt(e,n,r),Pe.updateMultisampleRenderTarget(a),Pe.updateRenderTargetMipmap(a),Ae.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,yt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Pe.updateMultisampleRenderTarget(a),Pe.updateRenderTargetMipmap(a))}I.setRenderTarget(s,u,d),I.setClearColor(ue,de),p!==void 0&&(r.viewport=p),I.toneMapping=f}function vt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&yt(o,t,n,s,l,c)}}function yt(e,t,n,r,i,a){L!==null&&i.isNodeMaterial&&L.setObject(e,i),e.onBeforeRender(I,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(I,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,I.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,I.renderBufferDirect(n,t,r,i,e,a),i.side=2):I.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(I,t,n,r,i,a)}function bt(e,t,n){t.isScene!==!0&&(t=Ee);let r=H.get(e),i=M.state.lights,a=M.state.shadowsArray,o=i.state.version,s=ze.getParameters(e,i.state,a,t,n,M.state.lightProbeGridArray),c=ze.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Fe.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ot),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return St(e,s),d}else s.uniforms=ze.getUniforms(e),L!==null&&e.isNodeMaterial&&L.build(e,n,s),e.onBeforeCompile(s,I),d=ze.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ge.uniform),St(e,s),r.needsLights=Tt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=M.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function xt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=al.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function St(e,t){let n=H.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Ct(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function K(e,t,n,r,i){t.isScene!==!0&&(t=Ee),Pe.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=z===null?I.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:jt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Fe.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(h=I.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=H.get(r),y=M.state.lights;if(xe===!0&&(Se===!0||e!==oe)){let t=e===oe&&r.id===ae;Ge.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ge.numPlanes||v.numIntersection!==Ge.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=M.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=bt(r,t,i),L&&r.isNodeMaterial&&L.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(V.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==ae&&(ae=r.id,C=!0),v.needsLights){let e=Ct(M.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||oe!==e){V.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(B,`projectionMatrix`,e.projectionMatrix),T.setValue(B,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(B,we.setFromMatrixPosition(e.matrixWorld)),je.logarithmicDepthBuffer&&T.setValue(B,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(B,`isOrthographic`,e.isOrthographicCamera===!0),oe!==e&&(oe=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(B,`sunShadowMap`,y.state.sunShadowMap,Pe),y.state.directionalShadowMap.length>0&&T.setValue(B,`directionalShadowMap`,y.state.directionalShadowMap,Pe),y.state.spotShadowMap.length>0&&T.setValue(B,`spotShadowMap`,y.state.spotShadowMap,Pe),y.state.pointShadowMap.length>0&&T.setValue(B,`pointShadowMap`,y.state.pointShadowMap,Pe)),i.isSkinnedMesh){T.setOptional(B,i,`bindMatrix`),T.setOptional(B,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(B,`boneTexture`,e.boneTexture,Pe))}i.isBatchedMesh&&(T.setOptional(B,i,`batchingTexture`),T.setValue(B,`batchingTexture`,i._matricesTexture,Pe),T.setOptional(B,i,`batchingIdTexture`),T.setValue(B,`batchingIdTexture`,i._indirectTexture,Pe),T.setOptional(B,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(B,`batchingColorTexture`,i._colorsTexture,Pe));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&Xe.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(B,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=Eu()),C){if(T.setValue(B,`toneMappingExposure`,I.toneMappingExposure),v.needsLights&&wt(E,w),a&&r.fog===!0&&Ve.refreshFogUniforms(E,a),Ve.refreshMaterialUniforms(E,r,me,pe,M.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}al.upload(B,xt(v),E,Pe)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(al.upload(B,xt(v),E,Pe),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(B,`center`,i.center),T.setValue(B,`modelViewMatrix`,i.modelViewMatrix),T.setValue(B,`normalMatrix`,i.normalMatrix),T.setValue(B,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];tt.update(n,x),tt.bind(n,x)}}return x}function wt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Tt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return ie},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(e,t,n){let r=H.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),H.get(e.texture).__webglTexture=t,H.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=H.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){z=e,R=t,ie=n;let r=null,i=!1,a=!1;if(e){let o=H.get(e);if(o.__useDefaultFramebuffer!==void 0){V.bindFramebuffer(B.FRAMEBUFFER,o.__webglFramebuffer),se.copy(e.viewport),ce.copy(e.scissor),le=e.scissorTest,V.viewport(se),V.scissor(ce),V.setScissorTest(le),ae=-1;return}if(o.__webglFramebuffer===void 0)Pe.setupRenderTarget(e);else if(o.__hasExternalTextures)Pe.rebindTextures(e,H.get(e.texture).__webglTexture,H.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&H.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Pe.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=H.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Pe.useMultisampledRTT(e)===!1?H.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,se.copy(e.viewport),ce.copy(e.scissor),le=e.scissorTest}else se.copy(_e).multiplyScalar(me).floor(),ce.copy(ve).multiplyScalar(me).floor(),le=ye;if(n!==0&&(r=te),V.bindFramebuffer(B.FRAMEBUFFER,r)&&V.drawBuffers(e,r),V.viewport(se),V.scissor(ce),V.setScissorTest(le),i){let r=H.get(e.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=H.get(e.textures[t]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=H.get(e.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,t.__webglTexture,n)}ae=-1};function Et(e){let t=H.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=je.textureFormatReadable(e.format),t.__typeReadable=je.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=H.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){V.bindFramebuffer(B.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+s);let u=Et(o);if(u.__formatReadable===!1){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&B.readPixels(t,n,r,i,$e.convert(c),$e.convert(l),a)}finally{let e=z===null?null:H.get(z).__webglFramebuffer;V.bindFramebuffer(B.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=H.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){V.bindFramebuffer(B.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+s);let d=Et(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,f),B.bufferData(B.PIXEL_PACK_BUFFER,a.byteLength,B.STREAM_READ),B.readPixels(t,n,r,i,$e.convert(l),$e.convert(u),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let p=z===null?null:H.get(z).__webglFramebuffer;V.bindFramebuffer(B.FRAMEBUFFER,p);let m=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Ye(B,m,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,f),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,a),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(f),B.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Pe.setTexture2D(e,0),B.copyTexSubImage2D(B.TEXTURE_2D,n,0,0,o,s,i,a),V.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=$e.convert(t.format),_=$e.convert(t.type),v;t.isData3DTexture?(Pe.setTexture3D(t,0),v=B.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Pe.setTexture2DArray(t,0),v=B.TEXTURE_2D_ARRAY):(Pe.setTexture2D(t,0),v=B.TEXTURE_2D),V.activeTexture(B.TEXTURE0),V.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,t.flipY),V.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),V.pixelStorei(B.UNPACK_ALIGNMENT,t.unpackAlignment);let y=V.getParameter(B.UNPACK_ROW_LENGTH),b=V.getParameter(B.UNPACK_IMAGE_HEIGHT),x=V.getParameter(B.UNPACK_SKIP_PIXELS),S=V.getParameter(B.UNPACK_SKIP_ROWS),C=V.getParameter(B.UNPACK_SKIP_IMAGES);V.pixelStorei(B.UNPACK_ROW_LENGTH,h.width),V.pixelStorei(B.UNPACK_IMAGE_HEIGHT,h.height),V.pixelStorei(B.UNPACK_SKIP_PIXELS,l),V.pixelStorei(B.UNPACK_SKIP_ROWS,u),V.pixelStorei(B.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=H.get(e),r=H.get(t),h=H.get(n.__renderTarget),g=H.get(r.__renderTarget);V.bindFramebuffer(B.READ_FRAMEBUFFER,h.__webglFramebuffer),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,H.get(e).__webglTexture,i,d+n),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,H.get(t).__webglTexture,a,m+n)),B.blitFramebuffer(l,u,o,s,f,p,o,s,B.DEPTH_BUFFER_BIT,B.NEAREST);V.bindFramebuffer(B.READ_FRAMEBUFFER,null),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||H.has(e)){let n=H.get(e),r=H.get(t);V.bindFramebuffer(B.READ_FRAMEBUFFER,ne),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,re);for(let e=0;e<c;e++)w?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,n.__webglTexture,i),T?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,r.__webglTexture,a),i===0?T?B.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):B.copyTexSubImage2D(v,a,f,p,l,u,o,s):B.blitFramebuffer(l,u,o,s,f,p,o,s,B.COLOR_BUFFER_BIT,B.NEAREST);V.bindFramebuffer(B.READ_FRAMEBUFFER,null),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?B.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?B.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):B.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):B.texSubImage2D(B.TEXTURE_2D,a,f,p,o,s,g,_,h);V.pixelStorei(B.UNPACK_ROW_LENGTH,y),V.pixelStorei(B.UNPACK_IMAGE_HEIGHT,b),V.pixelStorei(B.UNPACK_SKIP_PIXELS,x),V.pixelStorei(B.UNPACK_SKIP_ROWS,S),V.pixelStorei(B.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&B.generateMipmap(v),V.unbindTexture()},this.initRenderTarget=function(e){H.get(e).__webglFramebuffer===void 0&&Pe.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Pe.setTextureCube(e,0):e.isData3DTexture?Pe.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Pe.setTexture2DArray(e,0):Pe.setTexture2D(e,0),V.unbindTexture()},this.resetState=function(){R=0,ie=0,z=null,V.reset(),et.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Be}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(e),t.unpackColorSpace=jt._getUnpackColorSpace()}};function Ou(e,t,n,r,i=64,a=null){e.sort((e,t)=>e.priority===t.priority?e.price-t.price:e.priority-t.priority),n.clear(),a&&(a.length=0);let o=0,s=t.array;for(let t=0;t<e.length;t++){let c=e[t],l=Math.floor(c.minX/i),u=Math.floor(c.maxX/i),d=Math.floor(c.minY/i),f=Math.floor(c.maxY/i),p=!1;checkLoop:for(let e=l;e<=u;e++)for(let t=d;t<=f;t++){let r=n.get((e&65535)<<16|t&65535);if(r)for(let e=0;e<r.length;e++){let t=r[e];if(c.minX<t.maxX&&c.maxX>t.minX&&c.minY<t.maxY&&c.maxY>t.minY){p=!0;break checkLoop}}}if(s[c.index]=+!p,!p){a&&a.push(c);for(let e=l;e<=u;e++)for(let t=d;t<=f;t++){let i=(e&65535)<<16|t&65535,a=n.get(i);a||(a=r[o++]||(r.push([]),r[o-1]),a.length=0,n.set(i,a)),a.push(c)}}}t.needsUpdate=!0}var ku=class e{static VERTEX_SHADER=`
        attribute vec4 aUVOffset;
        attribute float aVisible;
        attribute vec2 aWorldSize;
        attribute float aRotation;

        uniform vec2 uViewportSize;
        uniform float uMode;
        uniform float uWorldScale;

        varying vec2 vUv;
        varying vec4 vUVData;

        void main() {
            vUv = uv;
            vUVData = aUVOffset;

            if (aVisible < 0.5) {
                gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
                return;
            }

            float cosR = cos(aRotation);
            float sinR = sin(aRotation);
            mat2 rot = mat2(cosR, -sinR, sinR, cosR);

            if (uMode > 1.5) {
                vec4 viewOrigin = modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
                vec2 localOffset = (position.xy * aWorldSize * uWorldScale) * rot;
                gl_Position = projectionMatrix * vec4(viewOrigin.xy + localOffset, viewOrigin.z, 1.0);
            } else {
                vec4 clipPos = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
                vec2 ndcOffset = (((position.xy * aWorldSize) * rot) / uViewportSize) * 2.0;
                gl_Position = vec4(clipPos.xy + ndcOffset * clipPos.w, clipPos.z, clipPos.w);
            }
        }
    `;static FRAGMENT_SHADER=`
        uniform sampler2D map;
        uniform float uOpacity;
        varying vec2 vUv;
        varying vec4 vUVData;

        void main() {
            vec2 scaledUv = clamp(vUv, 0.001, 0.999) * vUVData.zw + vUVData.xy;
            vec4 texColor = texture2D(map, scaledUv);
            if (texColor.a < 0.05) discard;
            gl_FragColor = vec4(texColor.rgb, texColor.a * uOpacity);
        }
    `;static DEFAULT_FONT_FAMILY=`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;constructor({scene:e,camera:t,renderer:n,isMobile:r=!1}){this.scene=e,this.camera=t,this.renderer=n,this.isMobile=!!r,this.layers=new Map,this._drawingBufferSize=new K,this._projPos=new q,this._viewProjMatrix=new Y,this._dummyMatrix=new Y,this.sharedGeometry=new Va(1,1),this._collisionFrameCounter=0,this._candidatePool=[],this._activeCandidates=[],this._spatialGrid=new Map,this._bucketPool=[],this._measureCtx=document.createElement(`canvas`).getContext(`2d`)}setMobileMode(e){this.isMobile=!!e}registerLayer(e,t={}){let n=t.generateMipmaps??!0;this.layers.set(e,{config:{isWorldSprite:t.isWorldSprite??!1,enableCollision:t.enableCollision??!1,renderOrder:t.renderOrder??50,minZoomDistance:t.minZoomDistance??0,maxZoomDistance:t.maxZoomDistance??1/0,priority:t.priority||1,drawCell:t.drawCell||null,enableZoomDamping:t.enableZoomDamping??!1,maxScreenScale:t.maxScreenScale??2,canvasFontPx:t.canvasFontPx||64,generateMipmaps:n,minFilter:t.minFilter||(n?1008:1006),magFilter:t.magFilter||1006},items:[],mesh:null,capacity:0,atlasTexture:null,knownUniqueItems:new Map,isBuilt:!1,dataDirty:!1,visible:!0,opacity:1,uvLookup:new Map})}_drawDefaultText(t,n,r,i,a=24){t.fillStyle=n.textColor||`#000000`,t.font=`500 ${a}px ${e.DEFAULT_FONT_FAMILY}`,t.textAlign=`center`,t.textBaseline=`middle`,t.fillText(n.text,r/2,i/2)}setLayerData(e,t=[]){let n=this.layers.get(e);n&&(n.items=t,n.dataDirty=!0,t.length===0&&n.mesh&&(n.mesh.count=0,n.mesh.visible=!1))}_getItemKey(e){return`${e.text}__${e.textColor||`#000000`}`}_ensureLayerAtlas(n){let{items:r,config:i,knownUniqueItems:a}=n,o=i.canvasFontPx||64,s=!1;for(let e=0;e<r.length;e++){let t=this._getItemKey(r[e]);a.has(t)||(a.set(t,r[e]),s=!0)}if(n.atlasTexture&&!s)return;let c=Array.from(a.values());if(c.length===0)return;this._measureCtx.font=`500 ${o}px ${e.DEFAULT_FONT_FAMILY}`;let l=o,u=o,d=new Map,f=Math.max(4,Math.ceil(o*.25));for(let e=0;e<c.length;e++){let t=c[e],n=Math.max(Math.ceil(this._measureCtx.measureText(t.text).width)+f,o);d.set(this._getItemKey(t),n/o),n>l&&(l=n)}let p=Math.max(1,Math.ceil(Math.sqrt(c.length))),m=Math.ceil(c.length/p),h=p*l,g=m*u,_=document.createElement(`canvas`);_.width=h,_.height=g;let v=_.getContext(`2d`);n.uvLookup.clear();let y=.5/h,b=.5/g;for(let e=0;e<c.length;e++){let t=c[e],r=e%p,a=Math.floor(e/p),s=r*l,f=a*u,g=this._getItemKey(t),_=d.get(g)??l/u,x=_*u,S=(l-x)/2;n.uvLookup.set(g,{uMin:(s+S)/h+y,vMin:1-(a+1)/m+b,uScale:Math.max(1e-4,x/h-y*2),vScale:1/m-b*2,cellAspect:_}),v.save(),v.translate(s,f),i.drawCell?i.drawCell(v,t,l,u):this._drawDefaultText(v,t,l,u,o),v.restore()}n.atlasTexture&&n.atlasTexture.dispose();let x=new xi(_);x.colorSpace=Ne,x.wrapS=t,x.wrapT=t,x.generateMipmaps=!!i.generateMipmaps,x.minFilter=i.minFilter,x.magFilter=i.magFilter,x.generateMipmaps&&this.renderer?.capabilities?.getMaxAnisotropy&&(x.anisotropy=Math.min(4,this.renderer.capabilities.getMaxAnisotropy())),n.atlasTexture=x,n.mesh?.material?.uniforms?.map&&(n.mesh.material.uniforms.map.value=n.atlasTexture)}_syncLayerMesh(t){let{items:n,config:r}=t,i=n?n.length:0;if(i===0){t.mesh&&(t.mesh.count=0,t.mesh.visible=!1),t.dataDirty=!1;return}let a=!!r.isWorldSprite;this._ensureLayerAtlas(t),this.renderer.getDrawingBufferSize(this._drawingBufferSize);let o=this.renderer.getPixelRatio();if(!t.mesh||i>t.capacity){t.mesh&&=(this.scene.remove(t.mesh),t.mesh.material.dispose(),t.mesh.geometry.dispose(),null),t.capacity=Math.max(i,Math.ceil(i*1.5),256);let n=new Qa({vertexShader:e.VERTEX_SHADER,fragmentShader:e.FRAGMENT_SHADER,uniforms:{map:{value:t.atlasTexture},uViewportSize:{value:this._drawingBufferSize.clone()},uMode:{value:a?2:0},uOpacity:{value:t.opacity??1},uWorldScale:{value:1}},transparent:!0,depthTest:!1,depthWrite:!1,side:2}),o=this.sharedGeometry.clone(),s=new Zr(new Float32Array(t.capacity*4),4),c=new Zr(new Float32Array(t.capacity),1),l=new Zr(new Float32Array(t.capacity*2),2),u=new Zr(new Float32Array(t.capacity),1);s.setUsage(ze),c.setUsage(ze),l.setUsage(ze),u.setUsage(ze),o.setAttribute(`aUVOffset`,s),o.setAttribute(`aVisible`,c),o.setAttribute(`aWorldSize`,l),o.setAttribute(`aRotation`,u),t.mesh=new ai(o,n,t.capacity),t.mesh.instanceMatrix.setUsage(ze),t.mesh.renderOrder=r.renderOrder,t.mesh.frustumCulled=!1,this.scene.add(t.mesh)}t.mesh.count=i,t.mesh.visible=t.visible,t.mesh.material.uniforms.map.value=t.atlasTexture;let s=t.mesh.geometry,c=s.getAttribute(`aUVOffset`),l=s.getAttribute(`aVisible`),u=s.getAttribute(`aWorldSize`),d=s.getAttribute(`aRotation`),f=c.array,p=l.array,m=u.array,h=d.array,g=t.uvLookup.values().next().value;for(let e=0;e<i;e++){let i=n[e],s=t.uvLookup.get(this._getItemKey(i))||g,c=e*4;if(f[c]=s.uMin,f[c+1]=s.vMin,f[c+2]=s.uScale,f[c+3]=s.vScale,p[e]=+!r.enableCollision,a){let t=i.worldHeight||i.fontSize||i.effectiveHeight||2;m[e*2]=t*s.cellAspect,m[e*2+1]=t}else{let t=Math.round((i.fontSize||i.effectiveHeight||8)*o);m[e*2]=Math.round(t*s.cellAspect),m[e*2+1]=t}h[e]=i.rotation||0,this._dummyMatrix.makeTranslation(i.x,i.y,i.z||.4),t.mesh.setMatrixAt(e,this._dummyMatrix)}c.needsUpdate=!0,l.needsUpdate=!0,u.needsUpdate=!0,d.needsUpdate=!0,t.mesh.instanceMatrix.needsUpdate=!0,t.isBuilt=!0,t.dataDirty=!1}setItemTextColor(){}setLayerVisible(e,t){let n=this.layers.get(e);n&&(n.visible=t,n.mesh&&(n.mesh.visible=t&&n.items.length>0))}setLayerOpacity(e,t){let n=this.layers.get(e);n&&(n.opacity=t,n.mesh?.material.uniforms?.uOpacity&&(n.mesh.material.uniforms.uOpacity.value=t))}handleResize(){this.renderer.getDrawingBufferSize(this._drawingBufferSize);for(let e of this.layers.values())e.mesh?.material.uniforms?.uViewportSize&&e.mesh.material.uniforms.uViewportSize.value.copy(this._drawingBufferSize)}update(e,t=null,n=!1,r=null){this.renderer.getDrawingBufferSize(this._drawingBufferSize);let i=Math.max(1,this.renderer.getPixelRatio()||1),a=this._drawingBufferSize.x/i,o=this._drawingBufferSize.y/i;if(a===0||o===0)return;this._collisionFrameCounter++;let s=!1;for(let c of this.layers.values()){let{config:l,items:u}=c,d=e>=l.minZoomDistance&&e<=l.maxZoomDistance;if(!c.visible||!d||u.length===0){c.mesh&&(c.mesh.visible=!1);continue}let f=!1;if((!c.isBuilt||c.dataDirty)&&(this._syncLayerMesh(c),f=!0),!c.mesh)continue;c.mesh.visible=!0;let p=c.mesh.material.uniforms;if(p.uViewportSize.value.copy(this._drawingBufferSize),p.uOpacity&&(p.uOpacity.value=c.opacity??1),p.uWorldScale){if(!this.isMobile&&l.enableZoomDamping&&r>0&&e>0&&e<r){let t=r/e;p.uWorldScale.value=Math.min(l.maxScreenScale||2,Math.sqrt(t))/t}else p.uWorldScale.value=1}if(l.isWorldSprite||!l.enableCollision||n&&this._collisionFrameCounter%3!=0&&!f)continue;s||=(this.camera.updateMatrixWorld(),this._viewProjMatrix.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),!0);let m=c.mesh.geometry.getAttribute(`aVisible`),h=m.array,g=c.mesh.geometry.getAttribute(`aWorldSize`),_=this._activeCandidates;_.length=0;let v=0,y=t!==null&&t.size>0;for(let e=0;e<u.length;e++){let n=u[e];if(y&&n.sectionName&&!t.has(n.sectionName)){h[e]=0;continue}if(this._projPos.set(n.x,n.y,n.z||.4).applyMatrix4(this._viewProjMatrix),this._projPos.z<-1||this._projPos.z>1||Math.abs(this._projPos.x)>1.1||Math.abs(this._projPos.y)>1.1){h[e]=0;continue}let r=(this._projPos.x*.5+.5)*a,s=(-this._projPos.y*.5+.5)*o,c=(g?g.getX(e):24)/i*.5+2,d=(g?g.getY(e):14)/i*.5+2,f=this._candidatePool[v++];f||(f={index:0,priority:1,price:0,minX:0,maxX:0,minY:0,maxY:0},this._candidatePool.push(f)),f.index=e,f.priority=n.priority??l.priority??1,f.price=n.price||0,f.minX=r-c,f.maxX=r+c,f.minY=s-d,f.maxY=s+d,_.push(f)}Ou(_,m,this._spatialGrid,this._bucketPool)}}dispose(){for(let e of this.layers.values())e.atlasTexture?.dispose(),e.mesh&&(this.scene.remove(e.mesh),e.mesh.material.dispose(),e.mesh.geometry.dispose()),e.knownUniqueItems.clear();this.layers.clear(),this._candidatePool.length=0,this._activeCandidates.length=0,this._spatialGrid.clear(),this._bucketPool.length=0,this.sharedGeometry.dispose()}},Au=class e{static REF_BUFFER_HEIGHT=900;static DESKTOP_SCALE=1;static MOBILE_SCALE=2.5;static VERTEX_SHADER=`
        attribute vec4 aUVOffset;
        attribute float aVisible;
        attribute float aBadgeVerticalOffset;

        uniform vec2 uViewportSize;
        uniform vec2 uBadgeScreenSize;

        varying vec2 vUv;
        varying vec4 vUVData;

        void main() {
            vUv = uv;
            vUVData = aUVOffset;

            if (aVisible < 0.5) {
                gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
                return;
            }

            vec4 clipPos = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
            vec2 screenPos = floor(((clipPos.xy / clipPos.w * 0.5 + 0.5) * uViewportSize) + 0.5);
            vec2 pixelOffset = vec2(
                floor(position.x * uBadgeScreenSize.x + 0.5),
                floor((position.y + 0.5) * uBadgeScreenSize.y + aBadgeVerticalOffset + 0.5)
            );
            vec2 ndcPos = ((screenPos + pixelOffset) / uViewportSize) * 2.0 - 1.0;
            gl_Position = vec4(ndcPos * clipPos.w, clipPos.z, clipPos.w);
        }
    `;static FRAGMENT_SHADER=`
        uniform sampler2D map;
        uniform float uOpacity;
        varying vec2 vUv;
        varying vec4 vUVData;

        void main() {
            vec4 texColor = texture2D(map, vUv * vUVData.zw + vUVData.xy);
            if (texColor.a < 0.05) discard;
            gl_FragColor = vec4(texColor.rgb, texColor.a * uOpacity);
        }
    `;constructor({scene:e,camera:t,renderer:n,options:r={}}){this.scene=e,this.camera=t,this.renderer=n,this.screenSize=r.screenSize?{...r.screenSize}:{w:60,h:29},this.verticalOffset=r.verticalOffset??8,this.isMobile=!!r.isMobile,this.renderOrder=r.renderOrder??60,this.priority=r.priority??1,this.oversample=r.oversample??1,this.items=[],this.mesh=null,this._capacity=0,this.atlasTexture=null,this.isBuilt=!1,this._dataDirty=!1,this.visible=!0,this.opacity=1,this._lastDpr=1,this._lastPhysicalW=0,this._lastPhysicalH=0,this._drawingBufferSize=new K,this._projPos=new q,this._viewProjMatrix=new Y,this._dummyMatrix=new Y,this.sharedGeometry=new Va(1,1),this.uvLookup=new Map,this._knownUniqueItems=new Map,this._collisionFrameCounter=0,this._candidatePool=[],this._activeCandidates=[],this._visibleCandidates=[],this._spatialGrid=new Map,this._bucketPool=[],this._bgStampCanvas=null,this._bgStampW=0,this._bgStampH=0,this._bgStampScale=0}setMobileMode(e){let t=!!e;this.isMobile!==t&&(this.isMobile=t,this.handleResize())}_getBadgeMetrics(){this.renderer.getDrawingBufferSize(this._drawingBufferSize);let t=Math.max(1,this._drawingBufferSize.x),n=Math.max(1,this._drawingBufferSize.y),r=Math.max(1,this.renderer.getPixelRatio()||1),i=this.isMobile?e.MOBILE_SCALE:e.DESKTOP_SCALE,a=Math.max(.05,n/e.REF_BUFFER_HEIGHT*i),o=Math.max(1,Math.round(this.screenSize.w*a)),s=Math.max(1,Math.round(this.screenSize.h*a)),c=Math.round((this.verticalOffset||0)*a);return{bufW:t,bufH:n,dpr:r,resScale:a,physicalW:o,physicalH:s,physicalOffset:c,screenW:t/r,screenH:n/r,cssW:o/r,cssH:s/r,cssOffset:c/r}}_ensureBadgeStamp(e,t,n){let r=Math.max(2,Math.round(e)),i=Math.max(2,Math.round(t));if(this._bgStampCanvas&&this._bgStampW===r&&this._bgStampH===i&&this._bgStampScale===n)return this._bgStampCanvas;this._bgStampCanvas||=document.createElement(`canvas`),this._bgStampCanvas.width=r,this._bgStampCanvas.height=i,this._bgStampW=r,this._bgStampH=i,this._bgStampScale=n;let a=this._bgStampCanvas.getContext(`2d`);a.clearRect(0,0,r,i);let o=Math.round(4.2*n),s=Math.round(3*n),c=Math.round(7.8*n),l=Math.round(3.6*n),u=Math.round(4.2*n),d=o,f=s,p=Math.max(1,r-o*2),m=Math.max(1,i-s*2-l),h=Math.round(r/2);return a.shadowColor=`rgba(15, 23, 42, 0.16)`,a.shadowBlur=Math.round(4.8*n),a.shadowOffsetX=0,a.shadowOffsetY=Math.round(1.8*n),a.fillStyle=`#ffffff`,a.beginPath(),a.moveTo(d+u,f),a.lineTo(d+p-u,f),a.arcTo(d+p,f,d+p,f+u,u),a.lineTo(d+p,f+m-u),a.arcTo(d+p,f+m,d+p-u,f+m,u),a.lineTo(h+c/2,f+m),a.lineTo(h,f+m+l),a.lineTo(h-c/2,f+m),a.lineTo(d+u,f+m),a.arcTo(d,f+m,d,f+m-u,u),a.lineTo(d,f+u),a.arcTo(d,f,d+u,f,u),a.closePath(),a.fill(),this._bgStampCanvas}_drawPriceBadge(e,t,n,r,i,a){if(!a||a.width===0||a.height===0)return;let o=Math.round(3*i),s=Math.round(3.6*i),c=r-o*2-s,l=Math.round(n/2);e.drawImage(a,0,0),e.fillStyle=`#0f172a`,e.font=`500 ${Math.max(1,Math.round(12*i))}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(t.text,l,o+c/2+Math.round(.6*i))}setData(e=[]){this.items=e,this._dataDirty=!0,this._visibleCandidates.length=0,e.length===0&&this.mesh&&(this.mesh.count=0,this.mesh.visible=!1)}setVisible(e){this.visible=e,this.mesh&&(this.mesh.visible=e&&this.items.length>0)}setOpacity(e){this.opacity=e,this.mesh?.material.uniforms?.uOpacity&&(this.mesh.material.uniforms.uOpacity.value=e)}_ensureAtlas(e,n,r,i){let a=!1;for(let e=0;e<this.items.length;e++){let t=this.items[e];this._knownUniqueItems.has(t.text)||(this._knownUniqueItems.set(t.text,t),a=!0)}if(this.atlasTexture&&!a&&r===this._lastDpr&&e===this._lastPhysicalW&&n===this._lastPhysicalH)return!1;this._lastDpr=r,this._lastPhysicalW=e,this._lastPhysicalH=n;let s=Array.from(this._knownUniqueItems.values());if(s.length===0)return!1;let l=Math.max(.1,i*this.oversample),u=Math.max(2,Math.round(e*this.oversample)),d=Math.max(2,Math.round(n*this.oversample)),f=Math.max(1,Math.ceil(Math.sqrt(s.length))),p=Math.max(1,Math.ceil(s.length/f)),m=this._ensureBadgeStamp(u,d,l),h=document.createElement(`canvas`);h.width=Math.max(2,f*u),h.height=Math.max(2,p*d);let g=h.getContext(`2d`);this.uvLookup.clear();for(let e=0;e<s.length;e++){let t=s[e],n=e%f,r=Math.floor(e/f);this.uvLookup.set(t.text,{uMin:n/f,vMin:1-(r+1)/p,uScale:1/f,vScale:1/p}),g.save(),g.translate(n*u,r*d),this._drawPriceBadge(g,t,u,d,l,m),g.restore()}this.atlasTexture&&this.atlasTexture.dispose();let _=new xi(h);return _.colorSpace=Ne,_.wrapS=t,_.wrapT=t,_.generateMipmaps=!0,_.minFilter=c,_.magFilter=o,this.renderer?.capabilities?.getMaxAnisotropy&&(_.anisotropy=Math.min(4,this.renderer.capabilities.getMaxAnisotropy())),this.atlasTexture=_,this.mesh?.material?.uniforms?.map&&(this.mesh.material.uniforms.map.value=this.atlasTexture),!0}_syncMeshData(t,n,r,i,a){let o=this.items.length;if(o===0){this.mesh&&(this.mesh.count=0,this.mesh.visible=!1),this._dataDirty=!1;return}if(this._ensureAtlas(t,n,i,a),!this.mesh||o>this._capacity){this.mesh&&=(this.scene.remove(this.mesh),this.mesh.material.dispose(),this.mesh.geometry.dispose(),null),this._capacity=Math.max(o,Math.ceil(o*1.5),256);let r=new Qa({vertexShader:e.VERTEX_SHADER,fragmentShader:e.FRAGMENT_SHADER,uniforms:{map:{value:this.atlasTexture},uViewportSize:{value:this._drawingBufferSize.clone()},uBadgeScreenSize:{value:new K(t,n)},uOpacity:{value:this.opacity??1}},transparent:!0,depthTest:!1,depthWrite:!1,side:2}),i=this.sharedGeometry.clone(),a=new Zr(new Float32Array(this._capacity*4),4),s=new Zr(new Float32Array(this._capacity),1),c=new Zr(new Float32Array(this._capacity),1);a.setUsage(ze),s.setUsage(ze),c.setUsage(ze),i.setAttribute(`aUVOffset`,a),i.setAttribute(`aVisible`,s),i.setAttribute(`aBadgeVerticalOffset`,c),this.mesh=new ai(i,r,this._capacity),this.mesh.instanceMatrix.setUsage(ze),this.mesh.renderOrder=this.renderOrder,this.mesh.frustumCulled=!1,this.scene.add(this.mesh)}this.mesh.count=o,this.mesh.visible=this.visible,this.mesh.material.uniforms.map.value=this.atlasTexture;let s=this.mesh.geometry,c=s.getAttribute(`aUVOffset`),l=s.getAttribute(`aVisible`),u=s.getAttribute(`aBadgeVerticalOffset`),d=c.array,f=l.array,p=u.array,m=this.uvLookup.values().next().value;for(let e=0;e<o;e++){let t=this.items[e],n=this.uvLookup.get(t.text)||m,i=e*4;d[i]=n.uMin,d[i+1]=n.vMin,d[i+2]=n.uScale,d[i+3]=n.vScale,f[e]=0,p[e]=t.type===`row`||t.type===`seat`?0:r,this._dummyMatrix.makeTranslation(t.x,t.y,t.z||.4),this.mesh.setMatrixAt(e,this._dummyMatrix)}c.needsUpdate=!0,l.needsUpdate=!0,u.needsUpdate=!0,this.mesh.instanceMatrix.needsUpdate=!0,this.isBuilt=!0,this._dataDirty=!1}handleResize(){let{physicalW:e,physicalH:t,dpr:n}=this._getBadgeMetrics();this.mesh?.material.uniforms?.uViewportSize&&(this.mesh.material.uniforms.uViewportSize.value.copy(this._drawingBufferSize),this.mesh.material.uniforms.uBadgeScreenSize.value.set(e,t)),(n!==this._lastDpr||e!==this._lastPhysicalW||t!==this._lastPhysicalH)&&(this._dataDirty=!0)}hitTestBadge(e,t,n=0){if(!this.visible||!this.mesh||!this.mesh.visible)return null;let r=this._visibleCandidates,i=r.length;if(i===0)return null;let{physicalW:a,dpr:o}=this._getBadgeMetrics(),s=a/(this.screenSize.w||60)/o,c=4.2*s,l=3*s;for(let n=i-1;n>=0;n--){let i=r[n];if(e>=i.minX+c&&e<=i.maxX-c&&t>=i.minY+l&&t<=i.maxY)return this.items[i.index]}if(n>0){let a=null,o=1/0;for(let s=i-1;s>=0;s--){let i=r[s],u=i.minX+c-n,d=i.maxX-c+n,f=i.minY+l-n,p=i.maxY+n;if(e>=u&&e<=d&&t>=f&&t<=p){let n=(i.minX+i.maxX)*.5,r=(i.minY+i.maxY)*.5,s=(e-n)*(e-n)+(t-r)*(t-r);s<o&&(o=s,a=this.items[i.index])}}return a}return null}update(e=null,t=!1){if(!this.visible||this.items.length===0){this.mesh&&(this.mesh.visible=!1),this._visibleCandidates.length=0;return}let{bufW:n,bufH:r,physicalW:i,physicalH:a,physicalOffset:o,dpr:s,resScale:c,screenW:l,screenH:u,cssW:d,cssH:f,cssOffset:p}=this._getBadgeMetrics();if(n<=4||r<=4||l<=4||u<=4||i<=2||a<=2){this.mesh&&(this.mesh.visible=!1),this._visibleCandidates.length=0;return}(s!==this._lastDpr||i!==this._lastPhysicalW||a!==this._lastPhysicalH)&&(this._dataDirty=!0),this._collisionFrameCounter++;let m=!1;if((!this.isBuilt||this._dataDirty)&&(this._syncMeshData(i,a,o,s,c),m=!0),!this.mesh)return;this.mesh.visible=!0;let h=this.mesh.material.uniforms;if(h.uViewportSize.value.copy(this._drawingBufferSize),h.uBadgeScreenSize.value.set(i,a),h.uOpacity&&(h.uOpacity.value=this.opacity??1),t&&this._collisionFrameCounter%3!=0&&!m)return;this.camera.updateMatrixWorld(),this._viewProjMatrix.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse);let g=this.mesh.geometry.getAttribute(`aVisible`),_=g.array,v=d/2,y=this._activeCandidates;y.length=0;let b=0,x=e!==null&&e.size>0;for(let t=0;t<this.items.length;t++){let n=this.items[t];if(x&&n.sectionName&&!e.has(n.sectionName)){_[t]=0;continue}if(this._projPos.set(n.x,n.y,n.z||.4).applyMatrix4(this._viewProjMatrix),this._projPos.z<-1||this._projPos.z>1||Math.abs(this._projPos.x)>1.1||Math.abs(this._projPos.y)>1.1){_[t]=0;continue}let r=(this._projPos.x*.5+.5)*l,i=(-this._projPos.y*.5+.5)*u,a=n.type===`row`||n.type===`seat`?0:p,o=this._candidatePool[b++];o||(o={index:0,priority:1,price:0,minX:0,maxX:0,minY:0,maxY:0},this._candidatePool.push(o)),o.index=t,o.priority=n.priority??this.priority??1,o.price=n.price||0,o.minX=r-v,o.maxX=r+v,o.minY=i-f-a,o.maxY=i-a,y.push(o)}Ou(y,g,this._spatialGrid,this._bucketPool,64,this._visibleCandidates)}dispose(){this.atlasTexture?.dispose(),this.mesh&&=(this.scene.remove(this.mesh),this.mesh.material.dispose(),this.mesh.geometry.dispose(),null),this.items=[],this._capacity=0,this.uvLookup.clear(),this._knownUniqueItems.clear(),this._candidatePool.length=0,this._activeCandidates.length=0,this._visibleCandidates.length=0,this._spatialGrid.clear(),this._bucketPool.length=0,this._bgStampCanvas=null,this.sharedGeometry.dispose()}},ju=e=>{let t=/^#?([0-9a-f]{6})$/i.exec(String(e||``).trim()),n=t?parseInt(t[1],16):988970;return new q((n>>16&255)/255,(n>>8&255)/255,(n&255)/255)},Mu=class e{static REF_BUFFER_HEIGHT=900;static DESKTOP_SCALE=1;static MOBILE_SCALE=2.5;static MAX_TEXT_CHARS=24;static MARGIN_X=4.2;static MARGIN_TOP=3;static TIP_W=7.8;static TIP_H=3.6;static RADIUS=4.2;static SHADOW_BLUR=4.8;static SHADOW_Y=1.8;static FONT_PX=12;static TEXT_PAD_X=9;static FONT_FAMILY=`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;static VERTEX_SHADER=`
        attribute vec3 aAnchor;
        attribute vec4 aRect;      // x, y, w, h in design units, relative to the anchor
        attribute vec4 aUV;        // u, v, uScale, vScale
        attribute float aKind;     // 0 hidden, 1 background slice (snap both edges), 2 glyph (snap origin)
        attribute float aHover;    // 1 = active badge (hovered or selected listing): black box, white text

        uniform vec2 uViewportSize;
        uniform float uScale;      // physical px per design unit
        uniform float uActiveStampU; // horizontal offset of the black stamp in the atlas (UV units)

        varying vec2 vUv;
        varying float vHover;
        varying float vGlyph;

        void main() {
            // Background slices of an active badge read the black stamp next to the white one
            float stampShift = aKind < 1.5 ? aHover * uActiveStampU : 0.0;
            vUv = aUV.xy + uv * aUV.zw + vec2(stampShift, 0.0);
            vHover = aHover;
            vGlyph = aKind > 1.5 ? 1.0 : 0.0;
            if (aKind < 0.5) {
                gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
                return;
            }
            vec4 clipPos = projectionMatrix * modelViewMatrix * vec4(aAnchor, 1.0);
            vec2 screenPos = floor(((clipPos.xy / clipPos.w * 0.5 + 0.5) * uViewportSize) + 0.5);
            vec2 t = position.xy + 0.5;
            vec2 p0 = floor(aRect.xy * uScale + 0.5);
            vec2 p1 = aKind < 1.5 ? floor((aRect.xy + aRect.zw) * uScale + 0.5) : p0 + aRect.zw * uScale;
            vec2 ndcPos = ((screenPos + mix(p0, p1, t)) / uViewportSize) * 2.0 - 1.0;
            gl_Position = vec4(ndcPos * clipPos.w, clipPos.z, clipPos.w);
        }
    `;static FRAGMENT_SHADER=`
        uniform sampler2D map;
        uniform float uOpacity;
        uniform vec3 uTextColor;
        uniform vec3 uActiveTextColor;
        varying vec2 vUv;
        varying float vHover;
        varying float vGlyph;

        void main() {
            vec4 texColor = texture2D(map, vUv);
            if (vGlyph > 0.5) {
                // Glyphs are coverage masks: same stroke weight for dark-on-white and white-on-black
                if (texColor.a < 0.02) discard;
                gl_FragColor = vec4(mix(uTextColor, uActiveTextColor, vHover), texColor.a * uOpacity);
                return;
            }
            if (texColor.a < 0.05) discard;
            gl_FragColor = vec4(texColor.rgb, texColor.a * uOpacity);
        }
    `;constructor({scene:t,camera:n,renderer:r,options:i={}}){this.scene=t,this.camera=n,this.renderer=r,this.screenSize=i.screenSize?{...i.screenSize}:{w:60,h:29},this.verticalOffset=i.verticalOffset??8,this.isMobile=!!i.isMobile,this.renderOrder=i.renderOrder??60,this.priority=i.priority??1,this.oversample=i.oversample??1,this.textColor=i.textColor||`#0f172a`,this.activeTextColor=i.activeTextColor||`#ffffff`,this.activeBoxColor=i.activeBoxColor||`#0f0f10`,this.items=[],this.visible=!0,this.opacity=1,this.mesh=null,this._capacity=0,this._instanceCount=0,this._dataDirty=!1,this.isBuilt=!1,this.atlasTexture=null,this._atlasScale=0,this._glyphs=new Map,this._knownChars=new Set,this._slices=null,this._measureCtx=null,this._badgeWidth=new Float32Array,this._badgeInstStart=new Uint32Array,this._badgeInstCount=new Uint16Array,this._badgeVis={array:new Float32Array,needsUpdate:!1},this._badgeVisPrev=new Float32Array,this._instKind=new Float32Array,this._drawingBufferSize=new K,this._projPos=new q,this._viewProjMatrix=new Y,this._baseGeometry=new Va(1,1),this._candidatePool=[],this._activeCandidates=[],this._visibleCandidates=[],this._spatialGrid=new Map,this._bucketPool=[],this._lastDpr=1,this._lastResScale=0,this._activeKeys=new Set,this.keyOf=t=>e.defaultKeyOf(t),this._collisionFrameCounter=0}setMobileMode(e){let t=!!e;this.isMobile!==t&&(this.isMobile=t,this.handleResize())}_getBadgeMetrics(){this.renderer.getDrawingBufferSize(this._drawingBufferSize);let t=Math.max(1,this._drawingBufferSize.x),n=Math.max(1,this._drawingBufferSize.y),r=Math.max(1,this.renderer.getPixelRatio()||1),i=this.isMobile?e.MOBILE_SCALE:e.DESKTOP_SCALE;return{bufW:t,bufH:n,dpr:r,resScale:Math.max(.05,n/e.REF_BUFFER_HEIGHT*i),screenW:t/r,screenH:n/r}}_textOf(t){let n=Array.from(String(t?.text??``));return n.length>e.MAX_TEXT_CHARS?n.slice(0,e.MAX_TEXT_CHARS):n}_font(t){return`500 ${Math.max(1,Math.round(e.FONT_PX*t))}px ${e.FONT_FAMILY}`}_collectChars(){let e=!1;for(let t=0;t<this.items.length;t++)for(let n of this._textOf(this.items[t]))this._knownChars.has(n)||(this._knownChars.add(n),e=!0);return e}_drawStamp(t,n,r,i,a,o,s=`#ffffff`){let c=e,l=c.MARGIN_X*o,u=c.MARGIN_TOP*o,d=c.TIP_W*o,f=c.TIP_H*o,p=c.RADIUS*o,m=n+l,h=r+u,g=Math.max(1,i-l*2),_=Math.max(1,a-c.MARGIN_TOP*2*o-f),v=n+i/2;t.save(),t.shadowColor=`rgba(15, 23, 42, 0.16)`,t.shadowBlur=c.SHADOW_BLUR*o,t.shadowOffsetX=0,t.shadowOffsetY=c.SHADOW_Y*o,t.fillStyle=s,t.beginPath(),t.moveTo(m+p,h),t.lineTo(m+g-p,h),t.arcTo(m+g,h,m+g,h+p,p),t.lineTo(m+g,h+_-p),t.arcTo(m+g,h+_,m+g-p,h+_,p),t.lineTo(v+d/2,h+_),t.lineTo(v,h+_+f),t.lineTo(v-d/2,h+_),t.lineTo(m+p,h+_),t.arcTo(m,h+_,m,h+_-p,p),t.lineTo(m,h+p),t.arcTo(m,h,m+p,h,p),t.closePath(),t.fill(),t.restore()}_ensureAtlas(n){let r=this._collectChars(),i=Math.max(.1,n*this.oversample);if(this.atlasTexture&&!r&&Math.abs(i-this._atlasScale)<1e-6)return!1;this._atlasScale=i;let a=e,s=this.screenSize.w,l=this.screenSize.h,u=Math.ceil(s*i),d=Math.ceil(l*i);this._measureCtx||=document.createElement(`canvas`).getContext(`2d`);let f=this._measureCtx;f.font=this._font(i);let p=Array.from(this._knownChars).map(e=>{let t=Math.max(1,f.measureText(e).width);return{ch:e,advancePx:t,cellW:Math.ceil(t)+8}}),m=u+8,h=Math.max(m*2+4,Math.min(2048,Math.ceil(Math.sqrt(p.length+6)*(d+4)))),g=m*2+4,_=0,v=d+4,y=[];for(let e of p)g+e.cellW>h&&g>0&&(g=0,_+=v,v=d+4),y.push({...e,px:g,py:_}),g+=e.cellW+4;let b=Math.max(2,h),x=Math.max(2,_+v),S=document.createElement(`canvas`);S.width=b,S.height=x;let C=S.getContext(`2d`);this._drawStamp(C,4,0,u,d,i,`#ffffff`),this._drawStamp(C,4+m,0,u,d,i,this.activeBoxColor),this._activeStampU=m/b;let w=l-a.MARGIN_TOP*2-a.TIP_H,T=(a.MARGIN_TOP+w/2+.6)*i;C.fillStyle=`#ffffff`,C.font=this._font(i),C.textAlign=`left`,C.textBaseline=`middle`;let E=(e,t,n,r)=>({u:e/b,v:1-(t+r)/x,us:n/b,vs:r/x});this._glyphs.clear();for(let e of y)C.fillText(e.ch,e.px+4,e.py+T),this._glyphs.set(e.ch,{...E(e.px,e.py,e.cellW,d),advance:e.advancePx/i,cellW:e.cellW/i,leftPad:4/i});let D=a.MARGIN_X+a.RADIUS+1,O=a.TIP_W/2+a.SHADOW_BLUR,k=D+Math.max(1,(s/2-O-D)/2),A=e=>4+e*i;this._slices={capW:D,tipHalf:O,left:E(A(0),0,D*i,d),right:E(A(s-D),0,D*i,d),tip:E(A(s/2-O),0,O*2*i,d),body:E(A(k)-.5,0,1,d)},this.atlasTexture?.dispose();let j=new xi(S);return j.colorSpace=``,j.wrapS=t,j.wrapT=t,j.generateMipmaps=!0,j.minFilter=c,j.magFilter=o,this.renderer?.capabilities?.getMaxAnisotropy&&(j.anisotropy=Math.min(4,this.renderer.capabilities.getMaxAnisotropy())),this.atlasTexture=j,this.mesh&&(this.mesh.material.uniforms.map.value=j,this.mesh.material.uniforms.uActiveStampU.value=this._activeStampU),!0}setData(e=[]){this.items=Array.isArray(e)?e:[],this._dataDirty=!0,this._visibleCandidates.length=0,this.items.length===0&&this.mesh&&(this.mesh.geometry.instanceCount=0,this.mesh.visible=!1)}setVisible(e){this.visible=e,this.mesh&&(this.mesh.visible=e&&this.items.length>0)}setOpacity(e){this.opacity=e,this.mesh?.material.uniforms?.uOpacity&&(this.mesh.material.uniforms.uOpacity.value=e)}_ensureCapacity(t){if(this.mesh&&t<=this._capacity)return;this.mesh&&=(this.scene.remove(this.mesh),this.mesh.material.dispose(),this.mesh.geometry.dispose(),null),this._capacity=Math.max(t,Math.ceil(t*1.5),1024);let n=this._capacity,r=new Ro;r.index=this._baseGeometry.index,r.setAttribute(`position`,this._baseGeometry.getAttribute(`position`)),r.setAttribute(`uv`,this._baseGeometry.getAttribute(`uv`));let i=e=>{let t=new Zr(new Float32Array(n*e),e);return t.setUsage(ze),t};r.setAttribute(`aAnchor`,i(3)),r.setAttribute(`aRect`,i(4)),r.setAttribute(`aUV`,i(4)),r.setAttribute(`aKind`,i(1)),r.setAttribute(`aHover`,i(1)),r.instanceCount=0;let a=new Qa({vertexShader:e.VERTEX_SHADER,fragmentShader:e.FRAGMENT_SHADER,uniforms:{map:{value:this.atlasTexture},uViewportSize:{value:this._drawingBufferSize.clone()},uScale:{value:1},uOpacity:{value:this.opacity??1},uActiveStampU:{value:this._activeStampU||0},uTextColor:{value:ju(this.textColor)},uActiveTextColor:{value:ju(this.activeTextColor)}},transparent:!0,depthTest:!1,depthWrite:!1,side:2});this.mesh=new qr(r,a),this.mesh.renderOrder=this.renderOrder,this.mesh.frustumCulled=!1,this.mesh.matrixAutoUpdate=!1,this.mesh.raycast=()=>{},this.scene.add(this.mesh),this._instKind=new Float32Array(n)}_syncMeshData(t){let n=this.items,r=n.length;if(r===0){this.mesh&&(this.mesh.geometry.instanceCount=0,this.mesh.visible=!1),this._dataDirty=!1;return}this._ensureAtlas(t);let i=e,a=this.screenSize.w,o=this.screenSize.h,s=this._slices;if(this._badgeWidth.length<r){let e=Math.ceil(r*1.5);this._badgeWidth=new Float32Array(e),this._badgeInstStart=new Uint32Array(e),this._badgeInstCount=new Uint16Array(e),this._badgeVis={array:new Float32Array(e),needsUpdate:!1},this._badgeVisPrev=new Float32Array(e)}let c=0,l=Array(r);for(let e=0;e<r;e++){let t=this._textOf(n[e]);l[e]=t;let r=0;for(let e of t)r+=this._glyphs.get(e)?.advance||0;this._badgeWidth[e]=Math.max(a,Math.ceil(r+i.TEXT_PAD_X*2)),this._badgeInstStart[e]=c,this._badgeInstCount[e]=5+t.length,c+=5+t.length}this._ensureCapacity(c),this.mesh.material.uniforms.map.value=this.atlasTexture;let u=this.mesh.geometry,d=u.getAttribute(`aAnchor`).array,f=u.getAttribute(`aRect`).array,p=u.getAttribute(`aUV`).array,m=u.getAttribute(`aKind`).array,h=this._instKind,g=0,_=(e,t,n,r,i,a)=>{d[g*3]=e.x,d[g*3+1]=e.y,d[g*3+2]=e.z||.4,f[g*4]=n,f[g*4+1]=t,f[g*4+2]=r,f[g*4+3]=o,p[g*4]=i.u,p[g*4+1]=i.v,p[g*4+2]=i.us,p[g*4+3]=i.vs,h[g]=a,m[g]=0,g++};for(let e=0;e<r;e++){let t=n[e],r=t.type===`row`||t.type===`seat`?0:this.verticalOffset,i=this._badgeWidth[e]/2,a=Math.max(0,i-s.tipHalf-s.capW);_(t,r,-i,s.capW,s.left,1),_(t,r,-i+s.capW,a,s.body,1),_(t,r,-s.tipHalf,s.tipHalf*2,s.tip,1),_(t,r,s.tipHalf,a,s.body,1),_(t,r,i-s.capW,s.capW,s.right,1);let o=0;for(let t of l[e])o+=this._glyphs.get(t)?.advance||0;let c=-o/2;for(let n of l[e]){let e=this._glyphs.get(n);if(!e){_(t,r,0,0,s.body,0);continue}_(t,r,c-e.leftPad,e.cellW,e,2),c+=e.advance}this._badgeVis.array[e]=0,this._badgeVisPrev[e]=0}this._writeActive(),this._instanceCount=c,u.instanceCount=c,u.getAttribute(`aAnchor`).needsUpdate=!0,u.getAttribute(`aRect`).needsUpdate=!0,u.getAttribute(`aUV`).needsUpdate=!0,u.getAttribute(`aKind`).needsUpdate=!0,this.mesh.visible=this.visible,this.isBuilt=!0,this._dataDirty=!1}static defaultKeyOf(e){return e?e.type===`group`?`group|${e.groupId}`:e.type===`seat`?`seat|${e.sectionName}|${e.row}|${e.seat}`:e.type===`row`?`row|${e.sectionName}|${e.row}`:`section|${e.sectionName}`:``}_writeActive(){if(!this.mesh)return;let e=this.mesh.geometry.getAttribute(`aHover`),t=e.array,n=this._activeKeys;for(let e=0;e<this.items.length;e++){let r=n.size>0&&n.has(this.keyOf(this.items[e]))?1:0,i=this._badgeInstStart[e];t.fill(r,i,i+this._badgeInstCount[e])}e.needsUpdate=!0}setActiveKeys(e){let t=e instanceof Set?e:new Set(e||[]);return t.size===this._activeKeys.size&&[...t].every(e=>this._activeKeys.has(e))?!1:(this._activeKeys=new Set(t),this.isBuilt&&this._writeActive(),!0)}_applyBadgeVisibility(){let e=this.mesh.geometry.getAttribute(`aKind`),t=e.array,n=this._badgeVis.array,r=this._badgeVisPrev,i=!1;for(let e=0;e<this.items.length;e++){let a=+(n[e]>.5);if(a===r[e])continue;r[e]=a;let o=this._badgeInstStart[e],s=o+this._badgeInstCount[e];for(let e=o;e<s;e++)t[e]=a?this._instKind[e]:0;i=!0}i&&(e.needsUpdate=!0)}handleResize(){let{resScale:e,dpr:t}=this._getBadgeMetrics();this.mesh&&(this.mesh.material.uniforms.uViewportSize.value.copy(this._drawingBufferSize),this.mesh.material.uniforms.uScale.value=e),(t!==this._lastDpr||Math.abs(e-this._lastResScale)>1e-6)&&(this._dataDirty=!0)}hitTestBadge(t,n,r=0){if(!this.visible||!this.mesh||!this.mesh.visible)return null;let i=this._visibleCandidates;if(i.length===0)return null;let{resScale:a,dpr:o}=this._getBadgeMetrics(),s=a/o,c=e.MARGIN_X*s,l=e.MARGIN_TOP*s;for(let e=i.length-1;e>=0;e--){let r=i[e];if(t>=r.minX+c&&t<=r.maxX-c&&n>=r.minY+l&&n<=r.maxY)return this.items[r.index]}if(r>0){let e=null,a=1/0;for(let o=i.length-1;o>=0;o--){let s=i[o];if(t>=s.minX+c-r&&t<=s.maxX-c+r&&n>=s.minY+l-r&&n<=s.maxY+r){let r=(s.minX+s.maxX)*.5,i=(s.minY+s.maxY)*.5,o=(t-r)*(t-r)+(n-i)*(n-i);o<a&&(a=o,e=this.items[s.index])}}return e}return null}update(e=null,t=!1){if(!this.visible||this.items.length===0){this.mesh&&(this.mesh.visible=!1),this._visibleCandidates.length=0;return}let{bufW:n,bufH:r,dpr:i,resScale:a,screenW:o,screenH:s}=this._getBadgeMetrics();if(n<=4||r<=4||o<=4||s<=4){this.mesh&&(this.mesh.visible=!1),this._visibleCandidates.length=0;return}(i!==this._lastDpr||Math.abs(a-this._lastResScale)>1e-6)&&(this._lastDpr=i,this._lastResScale=a,this._dataDirty=!0),this._collisionFrameCounter++;let c=!1;if((!this.isBuilt||this._dataDirty)&&(this._syncMeshData(a),c=!0),!this.mesh)return;this.mesh.visible=!0;let l=this.mesh.material.uniforms;if(l.uViewportSize.value.copy(this._drawingBufferSize),l.uScale.value=a,l.uOpacity.value=this.opacity??1,(this.opacity??1)<.02&&!c||t&&this._collisionFrameCounter%3!=0&&!c)return;this.camera.updateMatrixWorld(),this._viewProjMatrix.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse);let u=a/i,d=this.screenSize.h*u,f=this.verticalOffset*u,p=this._badgeVis.array,m=this._activeCandidates;m.length=0;let h=0,g=e!==null&&e.size>0;for(let t=0;t<this.items.length;t++){let n=this.items[t];if(g&&n.sectionName&&!e.has(n.sectionName)){p[t]=0;continue}if(this._projPos.set(n.x,n.y,n.z||.4).applyMatrix4(this._viewProjMatrix),this._projPos.z<-1||this._projPos.z>1||Math.abs(this._projPos.x)>1.1||Math.abs(this._projPos.y)>1.1){p[t]=0;continue}let r=(this._projPos.x*.5+.5)*o,i=(-this._projPos.y*.5+.5)*s,a=n.type===`row`||n.type===`seat`?0:f,c=this._badgeWidth[t]*u/2,l=this._candidatePool[h++];l||(l={index:0,priority:1,price:0,minX:0,maxX:0,minY:0,maxY:0},this._candidatePool.push(l)),l.index=t,l.priority=n.priority??this.priority??1,l.price=n.price||0,l.minX=r-c,l.maxX=r+c,l.minY=i-d-a,l.maxY=i-a,m.push(l)}Ou(m,this._badgeVis,this._spatialGrid,this._bucketPool,64,this._visibleCandidates),this._applyBadgeVisibility()}dispose(){this.atlasTexture?.dispose(),this.atlasTexture=null,this.mesh&&=(this.scene.remove(this.mesh),this.mesh.material.dispose(),this.mesh.geometry.dispose(),null),this.items=[],this._capacity=0,this._glyphs.clear(),this._knownChars.clear(),this._candidatePool.length=0,this._activeCandidates.length=0,this._visibleCandidates.length=0,this._spatialGrid.clear(),this._bucketPool.length=0,this._baseGeometry.dispose()}},Nu=class e{constructor({container:t,domElement:n,camera:r,getActiveSection:i,onRenderRequest:a,onControlsChange:o}){this.container=t,this.domElement=n||t,this.camera=r,this.getActiveSection=i||(()=>null),this.onRenderRequest=a||(()=>{}),this.onControlsChange=o||(()=>{}),this.isDisposed=!1,this.target=new q(0,0,0),this.controls={target:this.target,enabled:!0,minDistance:20,maxDistance:1e3,update:()=>{},dispose:()=>{}},this.defaultCameraPos=new q(0,0,1e3),this.defaultControlsTarget=new q(0,0,0),this.cameraCenterPoint=null,this._baseSectionCenter=null,this._baseCamOffset=null,this.isSeatViewActive=!1,this.durationScale=1,this.smoothCamera=!0,this._animationsDisabled=!1,this._panSamples=[],this._inertia={active:!1,vx:0,vy:0,last:0},this.glideTapSpeed=.3,this._tapStoppedMotion=!1,this._zoomAnim={active:!1,pending:1,x:0,y:0,tau:90,last:0},this._seatViewPos=new q,this._seatViewBaseForward=new q,this._savedSectionGroup=null,this.cachedGeomSize=new q(800,600,0),this.minDistance=15,this.trackpadPan=!0,this.isMac=e.detectMac(),this._trackpadUntil=0,this.adaptiveDurations=!0,this._cachedRect=null,this.groundPlane=new Dr(new q(0,0,1),0),this.raycaster=new ns,this.planeIntersectPoint=new q,this.anim={active:!1,cancelable:!0,startPos:new q,endPos:new q,startTarget:new q,endTarget:new q,startUp:new q,endUp:new q,startTime:0,duration:650,onComplete:null},this._activePointers=new Map,this._isPanning=!1,this._panStartCamPos=new q,this._panStartTarget=new q,this._initialTouchDistance=0,this._initialTouchCenter=new K,this._lastPinchCenter=new K,this._vCamUp=new q,this._vCamRight=new q,this._vPanX=new q,this._vPanY=new q,this._tempNDC=new K,this._tempPinchCenter=new K,this._tempLookOffset=new q,this._tempRotatedForward=new q,this._yUp=new q(0,1,0),this._zUp=new q(0,0,1),this._bindEvents()}_bindEvents(){this._onPointerDown=e=>this._handlePointerDown(e),this._onPointerMove=e=>this._handlePointerMove(e),this._onPointerUp=e=>this._handlePointerUp(e),this._onScroll=()=>{this._cachedRect=null},this._onWheel=e=>{e.preventDefault(),this.isSeatViewActive||this.handleWheel(e)},this.domElement.addEventListener(`pointerdown`,this._onPointerDown),window.addEventListener(`pointermove`,this._onPointerMove),window.addEventListener(`pointerup`,this._onPointerUp),window.addEventListener(`pointercancel`,this._onPointerUp),window.addEventListener(`scroll`,this._onScroll,{passive:!0,capture:!0}),this.container.addEventListener(`wheel`,this._onWheel,{passive:!1}),this._gestureScale=1,this._onGestureStart=e=>{e.preventDefault(),this._gestureScale=e.scale||1},this._onGestureChange=e=>{e.preventDefault();let t=e.scale||1;if(this.isDisposed||this.isSeatViewActive||this.isTransitioning()||this._activePointers.size>0){this._gestureScale=t;return}let n=Ct.clamp(this._gestureScale/t,.5,2);this._gestureScale=t,this.anim.active&&this.stopAnimation(!1),this.stopMotion(),this.zoomAtPoint(e.clientX,e.clientY,n),this._scheduleSpringBack()},this.container.addEventListener(`gesturestart`,this._onGestureStart,{passive:!1}),this.container.addEventListener(`gesturechange`,this._onGestureChange,{passive:!1})}cancelGestures(){this._activePointers.clear(),this._isPanning=!1,this._initialTouchDistance=0}_getContainerRect(){return(!this._cachedRect||this._cachedRect.width<=0||this._cachedRect.height<=0)&&(this._cachedRect=(this.domElement||this.container).getBoundingClientRect()),this._cachedRect}_getGroundIntersection(e,t,n){let r=this._getContainerRect();return this._tempNDC.set((e-r.left)/(r.width||1)*2-1,-((t-r.top)/(r.height||1))*2+1),this.raycaster.setFromCamera(this._tempNDC,this.camera),this.raycaster.ray.intersectPlane(this.groundPlane,n)}_handlePointerDown(e){if(this.isDisposed||this.isSeatViewActive)return;if(this._cachedRect=(this.domElement||this.container).getBoundingClientRect(),this.anim.active){if(!this.anim.cancelable)return;this.stopAnimation(!1)}let t=this.isMotionActive(),n=this._inertia.active?Math.hypot(this._inertia.vx,this._inertia.vy):0;if(this._tapStoppedMotion=n>this.glideTapSpeed,this.stopMotion(),t&&this.onMotionInterrupted?.(),this._activePointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),this._activePointers.size===1)this._isPanning=!0,this._panStartCamPos.copy(this.camera.position),this._panStartTarget.copy(this.target);else if(this._activePointers.size===2){this._isPanning=!1;let[e,t]=this._activePointers.values();this._initialTouchDistance=Math.hypot(e.x-t.x,e.y-t.y),this._initialTouchCenter.set((e.x+t.x)/2,(e.y+t.y)/2),this._lastPinchCenter.copy(this._initialTouchCenter)}}_handlePointerMove(e){if(this.isDisposed||this.isSeatViewActive||this.isTransitioning()||this.anim.active||!this._activePointers.has(e.pointerId))return;let t=this._activePointers.get(e.pointerId),n=e.clientX-t.x,r=e.clientY-t.y;if(t.x=e.clientX,t.y=e.clientY,this._activePointers.size===2){let[e,t]=this._activePointers.values(),n=Math.hypot(e.x-t.x,e.y-t.y),r=this._tempPinchCenter.set((e.x+t.x)/2,(e.y+t.y)/2);this._initialTouchDistance>0&&n>0&&(this.zoomAtPoint(r.x,r.y,this._initialTouchDistance/n),this._initialTouchDistance=n);let i=r.x-this._lastPinchCenter.x,a=r.y-this._lastPinchCenter.y;this._lastPinchCenter.copy(r),(i!==0||a!==0)&&this._applyCameraOrientedPan(i,a);return}if(this._isPanning&&this._activePointers.size===1&&(n!==0||r!==0)&&(this._applyCameraOrientedPan(n,r),this._motionEnabled())){let e=performance.now();for(this._panSamples.push({t:e,dx:n,dy:r});this._panSamples.length>0&&e-this._panSamples[0].t>100;)this._panSamples.shift()}}_applyCameraOrientedPan(e,t){if(this.isSeatViewActive)return;let n=this.domElement.clientHeight||Math.floor(this._getContainerRect().height)||this.container.clientHeight||1,r=Ct.degToRad(this.camera.fov),i=2*Math.tan(r/2)*this.camera.position.distanceTo(this.target)/n;this._vCamRight.set(1,0,0).applyQuaternion(this.camera.quaternion),this._vPanX.set(this._vCamRight.x,this._vCamRight.y,0),this._vPanX.lengthSq()>1e-4?this._vPanX.normalize():this._vPanX.set(1,0,0),this._vCamUp.set(0,1,0).applyQuaternion(this.camera.quaternion),this._vPanY.set(this._vCamUp.x,this._vCamUp.y,0),this._vPanY.lengthSq()>1e-4?this._vPanY.normalize():this._vPanY.set(0,1,0);let a=this.getActiveSection()?1/Math.sin(Ct.degToRad(48)):1,o=-e*i,s=t*i*a,c=this._vPanX.x*o+this._vPanY.x*s,l=this._vPanX.y*o+this._vPanY.y*s,{softX:u,softY:d,give:f}=this._panLimits(i),p=this._rubberBand(this.target.x,c,u,f),m=this._rubberBand(this.target.y,l,d,f);this.camera.position.x+=p-this.target.x,this.camera.position.y+=m-this.target.y,this.target.x=p,this.target.y=m,this.onControlsChange(),this.onRenderRequest()}_panLimits(e=null){let t=Math.max(this.cachedGeomSize.x,100),n=Math.max(this.cachedGeomSize.y,100),r=t*.55,i=n*.55,a=e;if(!(a>0)){let e=this.domElement.clientHeight||this._getContainerRect().height||600;a=2*Math.tan(Ct.degToRad(this.camera.fov||45)/2)*this.camera.position.distanceTo(this.target)/e}let o=this.domElement.clientWidth||this._getContainerRect().width||800;return{softX:r,softY:i,give:Math.min(o*a*.25,Math.max(t,n)*.35)}}_rubberBand(e,t,n,r){let i=e+t,a=Math.abs(i)-n;if(a<=0||r<=0||Math.sign(t)!==Math.sign(i))return i;let o=Math.max(0,Math.abs(e)-n),s=Math.max(0,1-o/r)*.5,c=Math.abs(e)<=n?n+Math.min(a*.5,r):Math.abs(e)+Math.abs(t)*s;return Math.sign(i)*Math.min(c,n+r)}_isOverstretched(){let{softX:e,softY:t}=this._panLimits();return Math.abs(this.target.x)>e+.01||Math.abs(this.target.y)>t+.01}springBack(){if(this.isDisposed||this.isSeatViewActive||this.anim.active||this._activePointers.size>0||!this._isOverstretched())return!1;let{softX:e,softY:t}=this._panLimits(),n=Ct.clamp(this.target.x,-e,e),r=Ct.clamp(this.target.y,-t,t);return this.panTo(n,r,280),!0}_scheduleSpringBack(){clearTimeout(this._springTimer),this._springTimer=setTimeout(()=>{this._springTimer=null,this.isMotionActive()||this.springBack()},160)}_handlePointerUp(e){this.isDisposed||this.isSeatViewActive||!this._activePointers||(this._activePointers.delete(e.pointerId),this.isTransitioning()||this._activePointers.size===0?(this._isPanning&&this._activePointers.size===0&&!this.springBack()&&this._startInertia(),this._isPanning=!1,this._initialTouchDistance=0,this._panSamples.length=0):this._activePointers.size===1&&(this._isPanning=!0,this._panStartCamPos.copy(this.camera.position),this._panStartTarget.copy(this.target)))}getMaxZ(){let e=this.defaultCameraPos.z||this.calculateBestFitZoom(this.cachedGeomSize);return this.getActiveSection()?e*Math.sin(Ct.degToRad(48)):e}zoomAtPoint(e,t,n){if(this.isSeatViewActive)return;let r=this.getMaxZ(),i=this.camera.position.z;if(n>1&&i>=r-.05)return;let a=this.getActiveSection()?this.minDistance*Math.sin(Ct.degToRad(48)):this.minDistance;if(n<1&&i<=a+.05)return;let o=Ct.clamp(i*n,a,r),s=o/i;if(!(Math.abs(s-1)<5e-5)){if(this.getActiveSection())this._tempLookOffset.subVectors(this.camera.position,this.target).multiplyScalar(s),this.camera.position.copy(this.target).add(this._tempLookOffset),this._baseCamOffset&&this._baseCamOffset.copy(this._tempLookOffset);else{if(!this._getGroundIntersection(e,t,this.planeIntersectPoint))return;let n=1-s;this.camera.position.x+=(this.planeIntersectPoint.x-this.camera.position.x)*n,this.camera.position.y+=(this.planeIntersectPoint.y-this.camera.position.y)*n,this.camera.position.z=o,this.target.x+=(this.planeIntersectPoint.x-this.target.x)*n,this.target.y+=(this.planeIntersectPoint.y-this.target.y)*n}this.onControlsChange(),this.onRenderRequest()}}static detectMac(){try{let e=globalThis.navigator,t=e?.userAgentData?.platform||e?.platform||e?.userAgent||``;return/mac/i.test(t)&&!/iphone|ipad|ipod/i.test(t)&&!((e?.maxTouchPoints||0)>1)}catch{return!1}}_isTrackpadScroll(e){let t=performance.now();return e.deltaMode===0&&(Math.abs(e.deltaX)>.01||!Number.isInteger(e.deltaY))&&(this._trackpadUntil=t+300),t<this._trackpadUntil}handleWheel(e){if(this.isDisposed||this.isSeatViewActive)return;if(this.anim.active){if(!this.anim.cancelable)return;this.stopAnimation(!1)}if(this.trackpadPan&&this.isMac){if(e.ctrlKey&&e.deltaMode===0&&Math.abs(e.deltaY)<50){this.stopMotion();let t=Ct.clamp(Math.exp(e.deltaY*.01),.5,2);this.zoomAtPoint(e.clientX,e.clientY,t),this._scheduleSpringBack();return}if(!e.ctrlKey&&this._isTrackpadScroll(e)){this.stopMotion(),this._applyCameraOrientedPan(-e.deltaX,-e.deltaY),this._scheduleSpringBack();return}}if(e.deltaY>0&&this.camera.position.z>=this.getMaxZ()-.1)return;let t=e.deltaMode===1?20:e.deltaMode===2?600:1,n=Ct.clamp(Math.exp(e.deltaY*t*.0015),.75,1.35);this._motionEnabled()?this._queueZoom(e.clientX,e.clientY,n,90):this.zoomAtPoint(e.clientX,e.clientY,n)}setMinDistance(e){let t=Number(e);Number.isFinite(t)&&t>0&&(this.minDistance=t)}setCameraCenterPoint(e){this.cameraCenterPoint=e?(this.cameraCenterPoint||new q).copy(e):null}easeInOutCubic(e){return e<.5?4*e*e*e:1-(-2*e+2)**3/2}_getFitDistanceForBounds(e,t,n,r=.95,i=30){let a=Ct.degToRad(this.camera.fov||45),o=2*Math.atan(Math.tan(a/2)*Math.max(n,.1)),s=t/r/(2*Math.tan(a/2)),c=e/r/(2*Math.tan(o/2));return Math.max(s,c,i)}calculateBestFitZoom(e){let t=this._getContainerRect(),n=this.domElement.clientWidth||Math.floor(t.width)||this.container.clientWidth||window.innerWidth||390,r=this.domElement.clientHeight||Math.floor(t.height)||this.container.clientHeight||(window.innerWidth<=768?Math.floor((window.innerHeight||800)*.5):window.innerHeight||600),i=e?.x>0?e.x:this.cachedGeomSize.x||800,a=e?.y>0?e.y:this.cachedGeomSize.y||600;return this._getFitDistanceForBounds(i,a,n/r,.9,30)}setupSceneFit(e=null){if(e?.isVector3&&e.x>0&&e.y>0)this.cachedGeomSize.copy(e);else if(e?.isBox3||e?.isObject3D){let t=e.isBox3?e:new Wn().setFromObject(e),n=new q;t.getSize(n),n.x>0&&n.y>0&&this.cachedGeomSize.copy(n)}this._cachedRect=(this.domElement||this.container).getBoundingClientRect();let t=this.calculateBestFitZoom(this.cachedGeomSize);this.camera.up.set(0,1,0),this.camera.position.set(0,0,t),this.target.set(0,0,0),this.controls.minDistance=20,this.controls.maxDistance=t,this.defaultCameraPos.set(0,0,t),this.defaultControlsTarget.set(0,0,0),this.onControlsChange(),this.onRenderRequest()}fitToScreen(e=!1,t=600,n=null){let r=this.calculateBestFitZoom(this.cachedGeomSize),i=new q(0,0,r),a=new q(0,0,0);this.defaultCameraPos.copy(i),this.defaultControlsTarget.copy(a),this.controls.maxDistance=r,e?(this.anim.active&&this.stopAnimation(!1,!0),this.camera.position.copy(i),this.camera.up.copy(this._yUp),this.target.copy(a),this.camera.lookAt(a),this.onControlsChange(),this.onRenderRequest(),n?.()):this.animateCameraTo(i,a,this._yUp,t,()=>{this.target.copy(a),n?.()},!0)}resize(e=null,t=!1,n=0,r=0){this._cachedRect=(this.domElement||this.container).getBoundingClientRect();let i=n||this.domElement.clientWidth||Math.floor(this._cachedRect.width)||this.container.clientWidth||0,a=r||this.domElement.clientHeight||Math.floor(this._cachedRect.height)||this.container.clientHeight||0;if(i===0||a===0)return;let o=this.camera.aspect||i/a;this._wasAtFit=Math.abs(this.camera.position.z-(this.defaultCameraPos.z||0))<5&&Math.abs(this.target.x)<5&&Math.abs(this.target.y)<5,this.camera.aspect=i/a,this.camera.updateProjectionMatrix();let s=Math.min(1,o)/Math.min(1,this.camera.aspect);!this.anim.active&&!this.isSeatViewActive&&Number.isFinite(s)&&Math.abs(s-1)>.01&&(this._tempLookOffset.subVectors(this.camera.position,this.target).multiplyScalar(s),this.camera.position.copy(this.target).add(this._tempLookOffset),this._baseCamOffset&&this._baseCamOffset.multiplyScalar(s)),e?.x>0&&e?.y>0&&this.cachedGeomSize.copy(e);let c=this.calculateBestFitZoom(this.cachedGeomSize);if(this.defaultCameraPos.z,this.defaultCameraPos.set(0,0,c),this.defaultControlsTarget.set(0,0,0),this.controls.maxDistance=c,this.isSeatViewActive||t&&!this.anim.active){this.camera.up.set(0,0,1),this.camera.lookAt(this.target),this.onControlsChange(),this.onRenderRequest();return}!t&&!this.anim.active&&(this.camera.up.set(0,1,0),(this._wasAtFit||this.camera.position.z>c)&&(this.camera.position.set(0,0,c),this.target.set(0,0,0)),this.camera.lookAt(this.target),this.onControlsChange(),this.onRenderRequest())}isTransitioning(){return!(!this.anim.active||this.anim.cancelable)}stopAnimation(e=!1,t=!1){if(!this.anim.active||!t&&!this.anim.cancelable)return;this.anim.active=!1,this.anim.cancelable=!0;let n=this.anim.onComplete;this.anim.onComplete=null,e&&typeof n==`function`&&n()}_durationFor(e,t,n,r){let i=Math.max(0,Number(r)||0);if(!this.adaptiveDurations||i<=240)return i;let a=Math.max(.001,this.camera.position.distanceTo(this.target)),o=Math.max(.001,e.distanceTo(t)),s=2*Math.tan(Ct.degToRad(this.camera.fov||45)/2)*Math.min(a,o),c=this.target.distanceTo(t)/Math.max(s,.001),l=Math.abs(Math.log(o/a))/Math.log(4),u=this._angle(this.camera.up,n)/(Math.PI/2),d=Ct.clamp(Math.max(c/1.5,l,u),0,1);return Math.round(240+(i-240)*Math.sqrt(d))}_angle(e,t){let n=Math.hypot(e.x,e.y,e.z),r=Math.hypot(t.x,t.y,t.z);return n>0&&r>0?Math.acos(Ct.clamp((e.x*t.x+e.y*t.y+e.z*t.z)/(n*r),-1,1)):0}animateCameraTo(e,t,n,r=650,i=null,a=!0){this.anim.active&&this.stopAnimation(!1,!0),this.stopMotion(),clearTimeout(this._springTimer),this._angle(this.camera.up,n)>.01&&(a=!1),a||this.cancelGestures(),r=this._durationFor(e,t,n,r),this.anim.cancelable=a,this.anim.startPos.copy(this.camera.position),this.anim.startTarget.copy(this.target),this.anim.startUp.copy(this.camera.up),this.anim.endPos.copy(e),this.anim.endTarget.copy(t),this.anim.endUp.copy(n),this.anim.startTime=performance.now(),this.anim.duration=Math.max(0,(Number(r)||0)*this.durationScale),this.anim.onComplete=i,this.anim.active=!0,this.onAnimationStart?.(this.anim),this.onRenderRequest()}_animateTo3DRadialTarget(e,t,n,r,i){let a=this.cameraCenterPoint?this.cameraCenterPoint.x:0,o=this.cameraCenterPoint?this.cameraCenterPoint.y:0,s=new K(e.x-a,e.y-o);s.length()>.001?s.normalize():s.set(0,-1);let c=Ct.degToRad(48),l=t*Math.cos(c),u=new q(e.x+s.x*l,e.y+s.y*l,t*Math.sin(c)),d=new q(e.x,e.y,0);this._baseSectionCenter=(this._baseSectionCenter||new q).copy(d),this._baseCamOffset=(this._baseCamOffset||new q).subVectors(u,d),this.animateCameraTo(u,d,this._zUp,n,r,i)}activate3DView(e,t=600,n=null,r=!0,i=null){if(!e)return;let a=new Wn().setFromObject(e),o=new q;a.getSize(o);let s=e.userData?.center?e.userData.center.clone():a.getCenter(new q),c=Ct.degToRad(this.camera.fov),l=2*Math.atan(Math.tan(c/2)*Math.max(this.camera.aspect||1,.1)),u=Math.max(Math.max(o.x,o.y)/.72/(2*Math.tan(Math.min(c,l)/2)),50),d=s;if(i?.point){d=new q(Number(i.point.x)||0,Number(i.point.y)||0,0);let e=this.camera.position.distanceTo(this.target);i.keepDistance&&e>u*.7&&e<u*1.45&&(u=e)}this._animateTo3DRadialTarget(d,u,t,n,r)}focusSectionIn2DView(e,t=600,n=null,r=null){if(!e)return;let i=new Wn().setFromObject(e);if(i.isEmpty())return;let a=new q;i.getSize(a);let o=e.userData?.center?e.userData.center.clone():i.getCenter(new q),s=this._getFitDistanceForBounds(a.x,a.y,this.camera.aspect||1,.72,50),c=(this.defaultCameraPos.z||1200)/3.15,l=Math.min(s,c);if(r?.point){o=new q(Number(r.point.x)||0,Number(r.point.y)||0,0);let e=this.camera.position.z;r.keepDistance&&e>l*.7&&e<l*1.45&&(l=e)}this._baseSectionCenter=null,this._baseCamOffset=null,this.animateCameraTo(new q(o.x,o.y,l),new q(o.x,o.y,0),this._yUp,t,n,!0)}activateSeatView(e,t=null,n=650,r=null){let i=t?.userData?.center||e;if(!i)return;this._savedSectionGroup=t,this.isSeatViewActive=!0,this.cancelGestures();let a=this.cameraCenterPoint?this.cameraCenterPoint.x:0,o=this.cameraCenterPoint?this.cameraCenterPoint.y:0,s=new K(a-i.x,o-i.y);s.length()>.001?s.normalize():s.set(0,1);let c=(i.z||0)+75,l=Ct.degToRad(30),u=l+Ct.degToRad((this.camera.fov||45)*.5)*.55,d=c/Math.tan(u),f=Math.max(20,d),p=new q(i.x-s.x*f,i.y-s.y*f,c),m=new q(s.x*Math.cos(l),s.y*Math.cos(l),-Math.sin(l)).normalize(),h=p.clone().addScaledVector(m,450);this._seatViewPos.copy(p),this._seatViewBaseForward.copy(m),this.animateCameraTo(p,h,this._zUp,n,()=>{this.target.copy(h),r?.()},!1)}setSeatViewYaw(e=0){if(this.isSeatViewActive){if(this._tempRotatedForward.copy(this._seatViewBaseForward).applyAxisAngle(this._zUp,e),this.anim.active){this.anim.endTarget.copy(this._seatViewPos).addScaledVector(this._tempRotatedForward,450),this.onRenderRequest();return}this.camera.position.copy(this._seatViewPos),this.target.copy(this._seatViewPos).addScaledVector(this._tempRotatedForward,450),this.camera.up.set(0,0,1),this.camera.lookAt(this.target),this.onControlsChange(),this.onRenderRequest()}}exitSeatView(e=600,t=null){this.isSeatViewActive=!1;let n=this._savedSectionGroup;this._savedSectionGroup=null,n?this.activate3DView(n,e,t,!1):this._baseSectionCenter?this.refocusFieldCenter(e,t):this.resetTo2DTopView(e,t,!1)}rotateCameraAroundSection(e=0){if(this.isSeatViewActive){this.setSeatViewYaw(e);return}if((!this._baseSectionCenter||!this._baseCamOffset)&&(this._baseSectionCenter=(this._baseSectionCenter||new q).copy(this.target),this._baseCamOffset=(this._baseCamOffset||new q).subVectors(this.camera.position,this.target)),this.anim.active){if(!this.anim.cancelable)return;this.stopAnimation(!1)}let t=Math.cos(e),n=Math.sin(e);this.camera.position.set(this._baseSectionCenter.x+this._baseCamOffset.x*t-this._baseCamOffset.y*n,this._baseSectionCenter.y+this._baseCamOffset.x*n+this._baseCamOffset.y*t,this._baseSectionCenter.z+this._baseCamOffset.z),this.target.copy(this._baseSectionCenter),this.camera.up.set(0,0,1),this.camera.lookAt(this._baseSectionCenter),this.onControlsChange(),this.onRenderRequest()}refocusFieldCenter(e=600,t=null){if(this.anim.active){if(!this.anim.cancelable)return;this.stopAnimation(!1)}let n=(this.cameraCenterPoint||new q(0,0,0)).clone(),r=this.camera.position.clone();this._baseSectionCenter=(this._baseSectionCenter||new q).copy(n),this._baseCamOffset=(this._baseCamOffset||new q).subVectors(r,n),this.animateCameraTo(r,n,this._zUp,e,()=>{this.target.copy(n),t?.()},!0)}focusElementIn3DView(e,t=`seat`,n=500,r=null){if(!e||this.isSeatViewActive)return;typeof t==`number`&&(r=n,n=t,t=`seat`);let i=t===`row`?110:42;this._animateTo3DRadialTarget(e,i,n,r,!0)}frameDistance({width:e=0,unit:t=0,kind:n=`seat`}={}){let r=t>0?t:2,i=Math.max(n===`row`?e*1.15:e*2.2,r*24),a=this.camera.aspect||1,o=this._getFitDistanceForBounds(i,i*.6,a,1,this.minDistance),s=(this.defaultCameraPos.z||1200)/3.15;return Ct.clamp(o,Math.min(this.minDistance,s),s)}isZoomNear(e){let t=this.camera.position.distanceTo(this.target);return t>e*.7&&t<e*1.45}isWorldPointsVisible(e,t=.1){if(!e?.length)return!1;this.camera.updateMatrixWorld();let n=1-t,r=new q;for(let t of e)if(r.set(Number(t.x)||0,Number(t.y)||0,Number(t.z)||0).project(this.camera),!(r.z>-1&&r.z<1)||Math.abs(r.x)>n||Math.abs(r.y)>n)return!1;return!0}panTo(e,t,n=450,r=null){if(this.isSeatViewActive)return;let i=(Number(e)||0)-this.target.x,a=(Number(t)||0)-this.target.y;if(Math.abs(i)<1e-6&&Math.abs(a)<1e-6){r?.();return}let o=this.camera.position.clone();o.x+=i,o.y+=a;let s=this.target.clone();s.x+=i,s.y+=a,this._baseSectionCenter&&this._baseSectionCenter.set(s.x,s.y,this._baseSectionCenter.z),this.animateCameraTo(o,s,this.camera.up.clone(),n,r,!0)}frameTarget(e,{width:t=0,unit:n=0,kind:r=`seat`,mode:i=`3d`,keepZoom:a=null}={},o=550,s=null){if(!e||this.isSeatViewActive)return;let c=this.frameDistance({width:t,unit:n,kind:r}),l=this.camera.position.distanceTo(this.target);(a??(r!==`row`&&!this.anim.active&&this.isZoomNear(c)))&&l>0&&(c=l);let u=new q(Number(e.x)||0,Number(e.y)||0,0);i===`2d`?this.flyTo2DView(u.x,u.y,c,o,s):this._animateTo3DRadialTarget(u,c,o,s,!0)}unTiltTo2DTopView(e=600,t=null,n=null,r=!0){let i=this.defaultCameraPos.z||this.calculateBestFitZoom(this.cachedGeomSize),a=n??i/3.05,o=this.target.clone(),s=new q(o.x,o.y,o.z+a);this._baseSectionCenter=null,this._baseCamOffset=null,this.animateCameraTo(s,o,this._yUp,e,()=>{this.target.copy(o),this.camera.up.set(0,1,0),t?.()},r)}focusCategoryIn2DView(e,t=600,n=null){if(!e?.length)return;let r=new Wn;if(e.forEach(e=>r.expandByObject(e)),r.isEmpty())return;let i=e.length===1&&e[0].userData?.center?e[0].userData.center.clone():r.getCenter(new q),a=r.getSize(new q),o=this._getFitDistanceForBounds(a.x,a.y,this.camera.aspect,.72,100);this.animateCameraTo(new q(i.x,i.y,o),new q(i.x,i.y,0),this._yUp,t,n,!0)}resetTo2DTopView(e=600,t=null,n=!0){let r=this.calculateBestFitZoom(this.cachedGeomSize);this._baseSectionCenter=null,this._baseCamOffset=null,this.animateCameraTo(new q(0,0,r),new q(0,0,0),this._yUp,e,()=>{this.target.set(0,0,0),this.camera.up.set(0,1,0),t?.()},n)}flyTo2DView(e,t,n,r=600,i=null){let a=Math.max(this.cachedGeomSize.x*.9,100),o=Math.max(this.cachedGeomSize.y*.9,100),s=Ct.clamp(Number(e)||0,-a,a),c=Ct.clamp(Number(t)||0,-o,o),l=this.defaultCameraPos.z||this.calculateBestFitZoom(this.cachedGeomSize),u=Ct.clamp(Number(n)||l,Math.min(this.minDistance,l),l);this._baseSectionCenter=null,this._baseCamOffset=null,this.animateCameraTo(new q(s,c,u),new q(s,c,0),this._yUp,r,()=>{this.camera.up.set(0,1,0),i?.()})}stepZoom(e){if(this.isSeatViewActive)return;if(this.anim.active){if(!this.anim.cancelable)return;this.stopAnimation(!1)}let t=this._getContainerRect(),n=t.left+t.width/2,r=t.top+t.height/2;this._motionEnabled()?this._queueZoom(n,r,e,120):this.zoomAtPoint(n,r,e)}zoomTowards(e,t,n){if(!(this.isDisposed||this.isSeatViewActive)){if(this.anim.active){if(!this.anim.cancelable)return;this.stopAnimation(!1)}this._motionEnabled()?this._queueZoom(e,t,n,120):this.zoomAtPoint(e,t,n)}}_motionEnabled(){return this.smoothCamera&&!this._animationsDisabled&&!this.isSeatViewActive}setAnimationsDisabled(e){this._animationsDisabled=!!e,this.durationScale=+!this._animationsDisabled,this._animationsDisabled&&this.stopMotion()}setSmoothCamera(e){this.smoothCamera=!!e,this.smoothCamera||this.stopMotion()}consumeTapStoppedMotion(){let e=this._tapStoppedMotion;return this._tapStoppedMotion=!1,e}isMotionActive(){return this._inertia.active||this._zoomAnim.active}stopMotion(){this._inertia.active=!1,this._zoomAnim.active=!1,this._zoomAnim.pending=1,this._panSamples.length=0}_startInertia(){let e=this._panSamples;if(!this._motionEnabled()||e.length<2)return;let t=performance.now(),n=e[e.length-1];if(t-n.t>50)return;let r=e[0],i=Math.max(16,n.t-r.t),a=0,o=0;for(let t=1;t<e.length;t++)a+=e[t].dx,o+=e[t].dy;let s=a/i,c=o/i,l=Math.hypot(s,c);if(l<.4)return;let u=2.5;l>u&&(s*=u/l,c*=u/l),this._inertia.vx=s,this._inertia.vy=c,this._inertia.last=t,this._inertia.active=!0,this.onRenderRequest()}_stepInertia(e){let t=this._inertia,n=Math.min(50,Math.max(0,e-t.last));if(t.last=e,n===0)return!0;let r=this.target.x,i=this.target.y;this._applyCameraOrientedPan(t.vx*n,t.vy*n);let a=Math.exp(-n/160);return t.vx*=a,t.vy*=a,(Math.hypot(t.vx,t.vy)<.05||this.target.x===r&&this.target.y===i||this._isOverstretched())&&(t.active=!1,this._scheduleSpringBack()),t.active}_queueZoom(e,t,n,r){let i=this._zoomAnim;i.active||(i.pending=1,i.last=performance.now()),i.pending=Ct.clamp(i.pending*n,.2,5),i.x=e,i.y=t,i.tau=r,i.active=!0,this.onRenderRequest()}_stepZoom(e){let t=this._zoomAnim,n=Math.min(50,Math.max(0,e-t.last));if(t.last=e,n===0)return!0;let r=1-Math.exp(-n/t.tau),i=t.pending**+r,a=Math.abs(Math.log(t.pending))<.003;a&&(i=t.pending);let o=this.camera.position.distanceTo(this.target);this.zoomAtPoint(t.x,t.y,i);let s=this.camera.position.distanceTo(this.target);return t.pending/=i,(a||Math.abs(s-o)<1e-6)&&(t.active=!1,t.pending=1,this._scheduleSpringBack()),t.active}update(){if(this._inertia.active||this._zoomAnim.active){let e=performance.now();this.anim.active||this.isSeatViewActive?this.stopMotion():(this._inertia.active&&this._stepInertia(e),this._zoomAnim.active&&this._stepZoom(e))}if(!this.anim.active)return!1;let e=this.anim.duration>0?Math.min(1,(performance.now()-this.anim.startTime)/this.anim.duration):1,t=this.easeInOutCubic(e);if(this.camera.position.lerpVectors(this.anim.startPos,this.anim.endPos,t),this.target.lerpVectors(this.anim.startTarget,this.anim.endTarget,t),this.camera.up.lerpVectors(this.anim.startUp,this.anim.endUp,t).normalize(),this.camera.lookAt(this.target),e>=1){this.anim.active=!1,this.anim.cancelable=!0,this.camera.position.copy(this.anim.endPos),this.target.copy(this.anim.endTarget),this.camera.up.copy(this.anim.endUp),this.camera.lookAt(this.target);let e=this.anim.onComplete;this.anim.onComplete=null,e?.()}return!0}getDistance(){return this.camera.position.distanceTo(this.target)}isAnimating(){return this.anim.active}dispose(){this.isDisposed||(this.isDisposed=!0,clearTimeout(this._springTimer),this.stopAnimation(!1,!0),this.cancelGestures(),this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),window.removeEventListener(`pointermove`,this._onPointerMove),window.removeEventListener(`pointerup`,this._onPointerUp),window.removeEventListener(`pointercancel`,this._onPointerUp),window.removeEventListener(`scroll`,this._onScroll,{capture:!0}),this.container.removeEventListener(`wheel`,this._onWheel),this.container.removeEventListener(`gesturestart`,this._onGestureStart),this.container.removeEventListener(`gesturechange`,this._onGestureChange))}},Pu=class{constructor({container:e,getCategoryColor:t,onRenderRequest:n}){this.container=e,this.getCategoryColor=t||(()=>11904232),this.onRenderRequest=n||(()=>{}),this.baseWidth=150,this.baseHeight=115,this.baseMarginLeft=20,this.baseMarginTop=20,this.isMobile=!1,this.width=this.baseWidth,this.height=this.baseHeight,this.marginLeft=this.baseMarginLeft,this.marginTop=this.baseMarginTop,this.activeSectionName=null,this.sectionMeshes=Object.create(null),this.bgPlane=null,this._lastSectionGroups=null,this.hudScene=new kn,this.hudCamera=new Lo(0,this.container.clientWidth,this.container.clientHeight,0,-1e3,1e3),this.containerGroup=new xn,this.hudScene.add(this.containerGroup),this.venueGroup=new xn,this.initHUD()}setMobileMode(e){let t=!!e;if(this.isMobile===t)return;this.isMobile=t;let n=this.isMobile?.45:1;this.width=Math.round(this.baseWidth*n),this.height=Math.round(this.baseHeight*n),this.marginLeft=this.isMobile?10:this.baseMarginLeft,this.marginTop=this.isMobile?10:this.baseMarginTop,this._rebuildBackground(),this.updatePosition(),this._lastSectionGroups&&(this.setup(this._lastSectionGroups),this.activeSectionName&&this.updateHighlight(this.activeSectionName,this._lastSectionGroups)),this.onRenderRequest()}_rebuildBackground(){this.bgPlane&&=(this.containerGroup.remove(this.bgPlane),this.bgPlane.geometry&&this.bgPlane.geometry.dispose(),this.bgPlane.material&&(Array.isArray(this.bgPlane.material)?this.bgPlane.material.forEach(e=>e.dispose()):this.bgPlane.material.dispose()),null);let e=this.width,t=this.height,n=this.isMobile?5:16,r=new ra,i=e/2,a=t/2;r.moveTo(-i+n,-a),r.lineTo(i-n,-a),r.absarc(i-n,-a+n,n,-Math.PI/2,0,!1),r.lineTo(i,a-n),r.absarc(i-n,a-n,n,0,Math.PI/2,!1),r.lineTo(-i+n,a),r.absarc(-i+n,a-n,n,Math.PI/2,Math.PI,!1),r.lineTo(-i,-a+n),r.absarc(-i+n,-a+n,n,Math.PI,Math.PI*1.5,!1);let o=new Ha(r),s=new Fr({color:16777215,depthTest:!1,depthWrite:!1});this.bgPlane=new qr(o,s),this.bgPlane.position.set(0,0,-2),this.containerGroup.add(this.bgPlane)}initHUD(){this._rebuildBackground(),this.containerGroup.add(this.venueGroup),this.updatePosition()}updatePosition(){let e=this.container.clientHeight||1;this.containerGroup.position.set(this.marginLeft+this.width/2,e-this.marginTop-this.height/2,0)}_clearVenueGroup(){if(this.venueGroup){for(;this.venueGroup.children.length>0;)this.venueGroup.remove(this.venueGroup.children[0]);this.sectionMeshes=Object.create(null)}}_sharedMaterials(){if(!this._inactiveMaterial){let e={side:2,depthTest:!1,depthWrite:!1};this._inactiveMaterial=new Fr({...e,color:new X(13751771)}),this._activeMaterial=new Fr({...e,color:new X(13751771)})}return{inactive:this._inactiveMaterial,active:this._activeMaterial}}setup(e){if(!this.venueGroup||!e)return;this._lastSectionGroups=e,this._clearVenueGroup();let t=new Wn;for(let n of Object.values(e))n.children.forEach(e=>{e.userData&&e.userData.isRowGroup||e.isMesh&&e.userData&&e.userData.section&&(e.geometry.boundingBox||e.geometry.computeBoundingBox(),t.union(e.geometry.boundingBox))});if(t.isEmpty())return;let n=new q,r=new q;t.getCenter(n),t.getSize(r);let i=.82,a=this.width*i/r.x,o=this.height*i/r.y,s=Math.min(a,o),{inactive:c}=this._sharedMaterials();for(let[t,r]of Object.entries(e))this.sectionMeshes[t]=[],r.children.forEach(e=>{if(!(e.userData&&e.userData.isRowGroup)&&e.isMesh&&e.userData&&e.userData.section){let r=new qr(e.geometry,c);r.renderOrder=5,r.position.set(-n.x,-n.y,0),this.venueGroup.add(r),this.sectionMeshes[t].push(r)}});this.venueGroup.scale.set(s,-s,1),this.venueGroup.position.set(0,0,0)}updateHighlight(e,t){if(this.activeSectionName=e,!this.venueGroup)return;let n=e&&t&&t[e]||null,r=n&&n.userData?n.userData.categoryName:null,i=r?this.getCategoryColor(r):this.getCategoryColor(null),{inactive:a,active:o}=this._sharedMaterials();o.color.set(i??11904232);for(let[t,n]of Object.entries(this.sectionMeshes)){let r=!!(e&&t===e);for(let e=0;e<n.length;e++){let t=n[e];t.material=r?o:a,t.renderOrder=r?20:5}}this.onRenderRequest()}resize(e,t){this.hudCamera.left=0,this.hudCamera.right=e,this.hudCamera.top=t,this.hudCamera.bottom=0,this.hudCamera.updateProjectionMatrix(),this.updatePosition()}isMinimapArea(e,t,n){let r=n.getBoundingClientRect(),i=e-r.left,a=t-r.top;return i>=this.marginLeft&&i<=this.marginLeft+this.width&&a>=this.marginTop&&a<=this.marginTop+this.height}render(e){e.clearDepth(),e.render(this.hudScene,this.hudCamera)}dispose(){this._clearVenueGroup(),this._inactiveMaterial?.dispose(),this._activeMaterial?.dispose(),this._inactiveMaterial=null,this._activeMaterial=null,this.bgPlane&&=(this.containerGroup.remove(this.bgPlane),this.bgPlane.geometry&&this.bgPlane.geometry.dispose(),this.bgPlane.material&&(Array.isArray(this.bgPlane.material)?this.bgPlane.material.forEach(e=>e.dispose()):this.bgPlane.material.dispose()),null),this.hudScene.remove(this.containerGroup),this.sectionMeshes=Object.create(null)}};function Fu(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Cr,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Iu(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Iu(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Iu(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new cr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var Lu=Ne,Ru=class e extends To{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit=`px`}load(e,t,n,r){let i=this,a=new Oo(i.manager);a.setPath(i.path),a.setRequestHeader(i.requestHeader),a.setWithCredentials(i.withCredentials),a.load(e,function(n){try{t(i.parse(n))}catch(t){r?r(t):console.error(t),i.manager.itemError(e)}},n,r)}parse(e){let t=this;function n(e,t){if(e.nodeType!==1)return;e.hasAttribute(`filter`)&&console.warn(`THREE.SVGLoader: Filters are not supported.`);let a=b(e),o=!1,p=null;switch(e.nodeName){case`svg`:t=m(e,t);break;case`style`:i(e);break;case`g`:t=m(e,t);break;case`path`:t=m(e,t),e.hasAttribute(`d`)&&(p=r(e));break;case`rect`:t=m(e,t),p=s(e);break;case`polygon`:t=m(e,t),p=c(e);break;case`polyline`:t=m(e,t),p=l(e);break;case`circle`:t=m(e,t),p=u(e);break;case`ellipse`:t=m(e,t),p=d(e);break;case`line`:t=m(e,t),p=f(e);break;case`defs`:o=!0;break;case`use`:t=m(e,t);let a=(e.getAttributeNS(`http://www.w3.org/1999/xlink`,`href`)||``).substring(1),h=e.viewportElement.getElementById(a);h?n(h,t):console.warn(`SVGLoader: 'use node' references non-existent node id: `+a)}if(p){t.fill!==void 0&&t.fill!==`none`&&!t.fill.startsWith(`url`)&&p.color.setStyle(t.fill,Lu),C(p,ne),A.push(p);let n=Object.assign({},t);n.strokeWidth=t.strokeWidth*O(ne),p.userData={node:e,style:n,transform:ne.clone(),gradients:M}}let h=e.childNodes;for(let e=0;e<h.length;e++){let r=h[e];o&&r.nodeName!==`style`&&r.nodeName!==`defs`||n(r,t)}a&&(N.pop(),N.length>0?ne.copy(N[N.length-1]):ne.identity())}function r(e){let t=new ss,n=new K,r=new K,i=new K,o=!0,s=!1,c=e.getAttribute(`d`);if(c===``||c===`none`)return null;let l=c.match(/[a-df-z][^a-df-z]*/gi);for(let e=0,c=l.length;e<c;e++){let c=l[e],u=c.charAt(0),d=c.slice(1).trim();o===!0&&(s=!0,o=!1);let f;switch(u){case`M`:f=g(d);for(let e=0,a=f.length;e<a;e+=2)n.x=f[e+0],n.y=f[e+1],r.x=n.x,r.y=n.y,e===0?t.moveTo(n.x,n.y):t.lineTo(n.x,n.y),e===0&&i.copy(n);break;case`H`:f=g(d);for(let e=0,a=f.length;e<a;e++)n.x=f[e],r.x=n.x,r.y=n.y,t.lineTo(n.x,n.y),e===0&&s===!0&&i.copy(n);break;case`V`:f=g(d);for(let e=0,a=f.length;e<a;e++)n.y=f[e],r.x=n.x,r.y=n.y,t.lineTo(n.x,n.y),e===0&&s===!0&&i.copy(n);break;case`L`:f=g(d);for(let e=0,a=f.length;e<a;e+=2)n.x=f[e+0],n.y=f[e+1],r.x=n.x,r.y=n.y,t.lineTo(n.x,n.y),e===0&&s===!0&&i.copy(n);break;case`C`:f=g(d);for(let e=0,a=f.length;e<a;e+=6)t.bezierCurveTo(f[e+0],f[e+1],f[e+2],f[e+3],f[e+4],f[e+5]),r.x=f[e+2],r.y=f[e+3],n.x=f[e+4],n.y=f[e+5],e===0&&s===!0&&i.copy(n);break;case`S`:f=g(d);for(let e=0,a=f.length;e<a;e+=4)t.bezierCurveTo(h(n.x,r.x),h(n.y,r.y),f[e+0],f[e+1],f[e+2],f[e+3]),r.x=f[e+0],r.y=f[e+1],n.x=f[e+2],n.y=f[e+3],e===0&&s===!0&&i.copy(n);break;case`Q`:f=g(d);for(let e=0,a=f.length;e<a;e+=4)t.quadraticCurveTo(f[e+0],f[e+1],f[e+2],f[e+3]),r.x=f[e+0],r.y=f[e+1],n.x=f[e+2],n.y=f[e+3],e===0&&s===!0&&i.copy(n);break;case`T`:f=g(d);for(let e=0,a=f.length;e<a;e+=2){let a=h(n.x,r.x),o=h(n.y,r.y);t.quadraticCurveTo(a,o,f[e+0],f[e+1]),r.x=a,r.y=o,n.x=f[e+0],n.y=f[e+1],e===0&&s===!0&&i.copy(n)}break;case`A`:f=g(d,[3,4],7);for(let e=0,o=f.length;e<o;e+=7){if(f[e+5]==n.x&&f[e+6]==n.y)continue;let o=n.clone();n.x=f[e+5],n.y=f[e+6],r.x=n.x,r.y=n.y,a(t,f[e],f[e+1],f[e+2],f[e+3],f[e+4],o,n),e===0&&s===!0&&i.copy(n)}break;case`m`:f=g(d);for(let e=0,a=f.length;e<a;e+=2)n.x+=f[e+0],n.y+=f[e+1],r.x=n.x,r.y=n.y,e===0?t.moveTo(n.x,n.y):t.lineTo(n.x,n.y),e===0&&i.copy(n);break;case`h`:f=g(d);for(let e=0,a=f.length;e<a;e++)n.x+=f[e],r.x=n.x,r.y=n.y,t.lineTo(n.x,n.y),e===0&&s===!0&&i.copy(n);break;case`v`:f=g(d);for(let e=0,a=f.length;e<a;e++)n.y+=f[e],r.x=n.x,r.y=n.y,t.lineTo(n.x,n.y),e===0&&s===!0&&i.copy(n);break;case`l`:f=g(d);for(let e=0,a=f.length;e<a;e+=2)n.x+=f[e+0],n.y+=f[e+1],r.x=n.x,r.y=n.y,t.lineTo(n.x,n.y),e===0&&s===!0&&i.copy(n);break;case`c`:f=g(d);for(let e=0,a=f.length;e<a;e+=6)t.bezierCurveTo(n.x+f[e+0],n.y+f[e+1],n.x+f[e+2],n.y+f[e+3],n.x+f[e+4],n.y+f[e+5]),r.x=n.x+f[e+2],r.y=n.y+f[e+3],n.x+=f[e+4],n.y+=f[e+5],e===0&&s===!0&&i.copy(n);break;case`s`:f=g(d);for(let e=0,a=f.length;e<a;e+=4)t.bezierCurveTo(h(n.x,r.x),h(n.y,r.y),n.x+f[e+0],n.y+f[e+1],n.x+f[e+2],n.y+f[e+3]),r.x=n.x+f[e+0],r.y=n.y+f[e+1],n.x+=f[e+2],n.y+=f[e+3],e===0&&s===!0&&i.copy(n);break;case`q`:f=g(d);for(let e=0,a=f.length;e<a;e+=4)t.quadraticCurveTo(n.x+f[e+0],n.y+f[e+1],n.x+f[e+2],n.y+f[e+3]),r.x=n.x+f[e+0],r.y=n.y+f[e+1],n.x+=f[e+2],n.y+=f[e+3],e===0&&s===!0&&i.copy(n);break;case`t`:f=g(d);for(let e=0,a=f.length;e<a;e+=2){let a=h(n.x,r.x),o=h(n.y,r.y);t.quadraticCurveTo(a,o,n.x+f[e+0],n.y+f[e+1]),r.x=a,r.y=o,n.x+=f[e+0],n.y+=f[e+1],e===0&&s===!0&&i.copy(n)}break;case`a`:f=g(d,[3,4],7);for(let e=0,o=f.length;e<o;e+=7){if(f[e+5]==0&&f[e+6]==0)continue;let o=n.clone();n.x+=f[e+5],n.y+=f[e+6],r.x=n.x,r.y=n.y,a(t,f[e],f[e+1],f[e+2],f[e+3],f[e+4],o,n),e===0&&s===!0&&i.copy(n)}break;case`Z`:case`z`:t.currentPath.autoClose=!0,t.currentPath.curves.length>0&&(n.copy(i),t.currentPath.currentPoint.copy(n),o=!0);break;default:console.warn(c)}s=!1}return t}function i(e){if(e.sheet&&e.sheet.cssRules&&e.sheet.cssRules.length)for(let t=0;t<e.sheet.cssRules.length;t++){let n=e.sheet.cssRules[t];if(n.type!==1)continue;let r=n.selectorText.split(/,/gm).filter(Boolean).map(e=>e.trim());for(let e=0;e<r.length;e++){let t=Object.fromEntries(Object.entries(n.style).filter(([,e])=>e!==``));j[r[e]]=Object.assign(j[r[e]]||{},t)}}}function a(e,t,n,r,i,a,s,c){if(t==0||n==0){e.lineTo(c.x,c.y);return}r=r*Math.PI/180,t=Math.abs(t),n=Math.abs(n);let l=(s.x-c.x)/2,u=(s.y-c.y)/2,d=Math.cos(r)*l+Math.sin(r)*u,f=-Math.sin(r)*l+Math.cos(r)*u,p=t*t,m=n*n,h=d*d,g=f*f,_=h/p+g/m;if(_>1){let e=Math.sqrt(_);t=e*t,n=e*n,p=t*t,m=n*n}let v=p*g+m*h,y=(p*m-v)/v,b=Math.sqrt(Math.max(0,y));i===a&&(b=-b);let x=b*t*f/n,S=-b*n*d/t,C=Math.cos(r)*x-Math.sin(r)*S+(s.x+c.x)/2,w=Math.sin(r)*x+Math.cos(r)*S+(s.y+c.y)/2,T=o(1,0,(d-x)/t,(f-S)/n),E=o((d-x)/t,(f-S)/n,(-d-x)/t,(-f-S)/n)%(Math.PI*2);e.currentPath.absellipse(C,w,t,n,T,T+E,a===0,r)}function o(e,t,n,r){let i=e*n+t*r,a=Math.sqrt(e*e+t*t)*Math.sqrt(n*n+r*r),o=Math.acos(Math.max(-1,Math.min(1,i/a)));return e*r-t*n<0&&(o=-o),o}function s(e){let t=y(e.getAttribute(`x`)||0),n=y(e.getAttribute(`y`)||0),r=y(e.getAttribute(`rx`)||e.getAttribute(`ry`)||0),i=y(e.getAttribute(`ry`)||e.getAttribute(`rx`)||0),a=y(e.getAttribute(`width`)),o=y(e.getAttribute(`height`)),s=.448084975506,c=new ss;return c.moveTo(t+r,n),c.lineTo(t+a-r,n),(r!==0||i!==0)&&c.bezierCurveTo(t+a-r*s,n,t+a,n+i*s,t+a,n+i),c.lineTo(t+a,n+o-i),(r!==0||i!==0)&&c.bezierCurveTo(t+a,n+o-i*s,t+a-r*s,n+o,t+a-r,n+o),c.lineTo(t+r,n+o),(r!==0||i!==0)&&c.bezierCurveTo(t+r*s,n+o,t,n+o-i*s,t,n+o-i),c.lineTo(t,n+i),(r!==0||i!==0)&&c.bezierCurveTo(t,n+i*s,t+r*s,n,t+r,n),c}function c(e){function t(e,t,n){let a=y(t),o=y(n);i===0?r.moveTo(a,o):r.lineTo(a,o),i++}let n=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,r=new ss,i=0;return e.getAttribute(`points`).replace(n,t),r.currentPath.autoClose=!0,r}function l(e){function t(e,t,n){let a=y(t),o=y(n);i===0?r.moveTo(a,o):r.lineTo(a,o),i++}let n=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,r=new ss,i=0;return e.getAttribute(`points`).replace(n,t),r.currentPath.autoClose=!1,r}function u(e){let t=y(e.getAttribute(`cx`)||0),n=y(e.getAttribute(`cy`)||0),r=y(e.getAttribute(`r`)||0),i=new na;i.absarc(t,n,r,0,Math.PI*2);let a=new ss;return a.subPaths.push(i),a}function d(e){let t=y(e.getAttribute(`cx`)||0),n=y(e.getAttribute(`cy`)||0),r=y(e.getAttribute(`rx`)||0),i=y(e.getAttribute(`ry`)||0),a=new na;a.absellipse(t,n,r,i,0,Math.PI*2);let o=new ss;return o.subPaths.push(a),o}function f(e){let t=y(e.getAttribute(`x1`)||0),n=y(e.getAttribute(`y1`)||0),r=y(e.getAttribute(`x2`)||0),i=y(e.getAttribute(`y2`)||0),a=new ss;return a.moveTo(t,n),a.lineTo(r,i),a.currentPath.autoClose=!1,a}function p(e){let t=e.querySelectorAll(`linearGradient, radialGradient`),n=[`x1`,`y1`,`x2`,`y2`,`cx`,`cy`,`r`,`fx`,`fy`,`gradientUnits`,`gradientTransform`,`spreadMethod`],r={};for(let e of t){let t=e.getAttribute(`id`);if(!t)continue;let i={type:e.nodeName===`radialGradient`?`radialGradient`:`linearGradient`,attrs:{},stops:null,href:null},a=e.getAttributeNS(`http://www.w3.org/1999/xlink`,`href`)||e.getAttribute(`href`)||``;a.startsWith(`#`)&&(i.href=a.substring(1));for(let t of n)e.hasAttribute(t)&&(i.attrs[t]=e.getAttribute(t));let o=e.querySelectorAll(`stop`);if(o.length>0){i.stops=[];for(let e of o){let t=e.getAttribute(`stop-color`);!t&&e.style&&(t=e.style[`stop-color`]),t||=`#000`;let n=e.getAttribute(`stop-opacity`);(n===null||n===``)&&e.style&&(n=e.style[`stop-opacity`]),n=n===null||n===``||n===void 0?1:Math.max(0,Math.min(1,parseFloat(n)));let r=Math.max(0,Math.min(1,parseFloat(e.getAttribute(`offset`)||`0`)));i.stops.push({offset:r,color:t,opacity:n})}}r[t]=i}function i(e,t){let n=r[e];if(!n||t.has(e))return n;if(t.add(e),n.href&&r[n.href]){let e=i(n.href,t);if(e){n.stops||=e.stops;for(let t in e.attrs)t in n.attrs||(n.attrs[t]=e.attrs[t])}}return n}for(let e in r)i(e,new Set);for(let e in r){let t=r[e],n=t.attrs,i=n.gradientUnits===`userSpaceOnUse`?`userSpaceOnUse`:`objectBoundingBox`,a={type:t.type,gradientUnits:i,spreadMethod:n.spreadMethod===`reflect`||n.spreadMethod===`repeat`?n.spreadMethod:`pad`,gradientTransform:null,stops:(t.stops||[]).slice().sort((e,t)=>e.offset-t.offset)};n.gradientTransform&&(a.gradientTransform=new J,S(n.gradientTransform,a.gradientTransform));function o(e){return typeof e==`string`?e.endsWith(`%`)?parseFloat(e)/100:y(e):0}if(t.type===`linearGradient`)a.x1=n.x1===void 0?0:o(n.x1),a.y1=n.y1===void 0?0:o(n.y1),a.x2=n.x2===void 0?+(i===`objectBoundingBox`):o(n.x2),a.y2=n.y2===void 0?0:o(n.y2);else{let e=i===`objectBoundingBox`?.5:0,t=i===`objectBoundingBox`?.5:0;a.cx=n.cx===void 0?e:o(n.cx),a.cy=n.cy===void 0?e:o(n.cy),a.r=n.r===void 0?t:o(n.r),a.fx=n.fx===void 0?a.cx:o(n.fx),a.fy=n.fy===void 0?a.cy:o(n.fy)}M[e]=a}}function m(e,t){t=Object.assign({},t);let n={};if(e.hasAttribute(`class`)){let t=e.getAttribute(`class`).split(/\s/).filter(Boolean).map(e=>e.trim());for(let e=0;e<t.length;e++)n=Object.assign(n,j[`.`+t[e]])}e.hasAttribute(`id`)&&(n=Object.assign(n,j[`#`+e.getAttribute(`id`)]));function r(r,i,a){a===void 0&&(a=function(e){return e}),e.hasAttribute(r)&&(t[i]=a(e.getAttribute(r))),n[i]&&(t[i]=a(n[i])),e.style&&e.style[r]!==``&&(t[i]=a(e.style[r]))}function i(e){return Math.max(0,Math.min(1,y(e)))}function a(e){return Math.max(0,y(e))}return r(`fill`,`fill`),r(`fill-opacity`,`fillOpacity`,i),r(`fill-rule`,`fillRule`),r(`opacity`,`opacity`,i),r(`stroke`,`stroke`),r(`stroke-opacity`,`strokeOpacity`,i),r(`stroke-width`,`strokeWidth`,a),r(`stroke-linejoin`,`strokeLineJoin`),r(`stroke-linecap`,`strokeLineCap`),r(`stroke-miterlimit`,`strokeMiterLimit`,a),r(`visibility`,`visibility`),t}function h(e,t){return e-(t-e)}function g(e,t,n){if(typeof e!=`string`)throw TypeError(`Invalid input: `+typeof e);let r={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},i=0,a=!0,o=``,s=``,c=[];function l(e,t,n){let r=SyntaxError(`Unexpected character "`+e+`" at index `+t+`.`);throw r.partial=n,r}function u(){o!==``&&(s===``?c.push(Number(o)):c.push(Number(o)*10**Number(s))),o=``,s=``}let d,f=e.length;for(let p=0;p<f;p++){if(d=e[p],Array.isArray(t)&&t.includes(c.length%n)&&r.FLAGS.test(d)){i=1,o=d,u();continue}if(i===0){if(r.WHITESPACE.test(d))continue;if(r.DIGIT.test(d)||r.SIGN.test(d)){i=1,o=d;continue}if(r.POINT.test(d)){i=2,o=d;continue}r.COMMA.test(d)&&(a&&l(d,p,c),a=!0)}if(i===1){if(r.DIGIT.test(d)){o+=d;continue}if(r.POINT.test(d)){o+=d,i=2;continue}if(r.EXP.test(d)){i=3;continue}r.SIGN.test(d)&&o.length===1&&r.SIGN.test(o[0])&&l(d,p,c)}if(i===2){if(r.DIGIT.test(d)){o+=d;continue}if(r.EXP.test(d)){i=3;continue}r.POINT.test(d)&&o[o.length-1]===`.`&&l(d,p,c)}if(i===3){if(r.DIGIT.test(d)){s+=d;continue}if(r.SIGN.test(d)){if(s===``){s+=d;continue}s.length===1&&r.SIGN.test(s)&&l(d,p,c)}}r.WHITESPACE.test(d)?(u(),i=0,a=!1):r.COMMA.test(d)?(u(),i=0,a=!0):r.SIGN.test(d)?(u(),i=1,o=d):r.POINT.test(d)?(u(),i=2,o=d):l(d,p,c)}return u(),c}let _=[`mm`,`cm`,`in`,`pt`,`pc`,`px`],v={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:12,pc:1,px:-1},px:{px:1}};function y(e){let n=`px`;if(typeof e==`string`||e instanceof String)for(let t=0,r=_.length;t<r;t++){let r=_[t];if(e.endsWith(r)){n=r,e=e.substring(0,e.length-r.length);break}}let r;return n===`px`&&t.defaultUnit!==`px`?r=v.in[t.defaultUnit]/t.defaultDPI:(r=v[n][t.defaultUnit],r<0&&(r=v[n].in*t.defaultDPI)),r*parseFloat(e)}function b(e){if(!(e.hasAttribute(`transform`)||e.nodeName===`use`&&(e.hasAttribute(`x`)||e.hasAttribute(`y`))))return null;let t=x(e);return N.length>0&&t.premultiply(N[N.length-1]),ne.copy(t),N.push(t),t}function x(e){let t=new J;if(e.nodeName===`use`&&(e.hasAttribute(`x`)||e.hasAttribute(`y`))){let n=y(e.getAttribute(`x`)||0),r=y(e.getAttribute(`y`)||0);t.makeTranslation(n,r)}return e.hasAttribute(`transform`)&&S(e.getAttribute(`transform`),t),t}function S(e,t){let n=P,r=e.split(`)`);for(let e=r.length-1;e>=0;e--){let i=r[e].trim();if(i===``)continue;let a=i.indexOf(`(`),o=i.length;if(a>0&&a<o){let e=i.slice(0,a),r=g(i.slice(a+1));switch(n.identity(),e){case`translate`:if(r.length>=1){let e=r[0],t=0;r.length>=2&&(t=r[1]),n.makeTranslation(e,t)}break;case`rotate`:if(r.length>=1){let e=0,t=0,i=0;e=r[0]*Math.PI/180,r.length>=3&&(t=r[1],i=r[2]),F.makeTranslation(-t,-i),I.makeRotation(e),ee.multiplyMatrices(I,F),F.makeTranslation(t,i),n.multiplyMatrices(F,ee)}break;case`scale`:if(r.length>=1){let e=r[0],t=e;r.length>=2&&(t=r[1]),n.makeScale(e,t)}break;case`skewX`:r.length===1&&n.set(1,Math.tan(r[0]*Math.PI/180),0,0,1,0,0,0,1);break;case`skewY`:r.length===1&&n.set(1,0,0,Math.tan(r[0]*Math.PI/180),1,0,0,0,1);break;case`matrix`:r.length===6&&n.set(r[0],r[2],r[4],r[1],r[3],r[5],0,0,1)}t.premultiply(n)}}return t}function C(e,t){function n(e){te.set(e.x,e.y,1).applyMatrix3(t),e.set(te.x,te.y)}function r(e){let n=e.xRadius,r=e.yRadius,i=Math.cos(e.aRotation),a=Math.sin(e.aRotation),o=new q(n*i,n*a,0),s=new q(-r*a,r*i,0),c=o.applyMatrix3(t),l=s.applyMatrix3(t),u=P.set(c.x,l.x,0,c.y,l.y,0,0,0,1),d=F.copy(u).invert(),f=I.copy(d).transpose().multiply(d).elements,p=k(f[0],f[1],f[4]),m=Math.sqrt(p.rt1),h=Math.sqrt(p.rt2);if(e.xRadius=1/m,e.yRadius=1/h,e.aRotation=Math.atan2(p.sn,p.cs),!((e.aEndAngle-e.aStartAngle)%(2*Math.PI)<2**-52)){let n=F.set(m,0,0,0,h,0,0,0,1),r=I.set(p.cs,p.sn,0,-p.sn,p.cs,0,0,0,1),i=n.multiply(r).multiply(u),a=e=>{let{x:t,y:n}=new q(Math.cos(e),Math.sin(e),0).applyMatrix3(i);return Math.atan2(n,t)};e.aStartAngle=a(e.aStartAngle),e.aEndAngle=a(e.aEndAngle),w(t)&&(e.aClockwise=!e.aClockwise)}}function i(e){let n=E(t),r=D(t);e.xRadius*=n,e.yRadius*=r;let i=n>2**-52?Math.atan2(t.elements[1],t.elements[0]):Math.atan2(-t.elements[3],t.elements[4]);e.aRotation+=i,w(t)&&(e.aStartAngle*=-1,e.aEndAngle*=-1,e.aClockwise=!e.aClockwise)}let a=e.subPaths;for(let e=0,o=a.length;e<o;e++){let o=a[e].curves;for(let e=0;e<o.length;e++){let a=o[e];a.isLineCurve?(n(a.v1),n(a.v2)):a.isCubicBezierCurve?(n(a.v0),n(a.v1),n(a.v2),n(a.v3)):a.isQuadraticBezierCurve?(n(a.v0),n(a.v1),n(a.v2)):a.isEllipseCurve&&(L.set(a.aX,a.aY),n(L),a.aX=L.x,a.aY=L.y,T(t)?r(a):i(a))}}}function w(e){let t=e.elements;return t[0]*t[4]-t[1]*t[3]<0}function T(e){let t=e.elements,n=t[0]*t[3]+t[1]*t[4];if(n===0)return!1;let r=E(e),i=D(e);return Math.abs(n/(r*i))>2**-52}function E(e){let t=e.elements;return Math.sqrt(t[0]*t[0]+t[1]*t[1])}function D(e){let t=e.elements;return Math.sqrt(t[3]*t[3]+t[4]*t[4])}function O(e){let t=e.elements,n=t[0]*t[4]-t[1]*t[3];return Math.sqrt(Math.abs(n))}function k(e,t,n){let r,i,a,o,s,c=e+n,l=e-n,u=Math.sqrt(l*l+4*t*t);return c>0?(r=.5*(c+u),s=1/r,i=e*s*n-t*s*t):c<0?i=.5*(c-u):(r=.5*u,i=-.5*u),a=l>0?l+u:l-u,Math.abs(a)>2*Math.abs(t)?(s=-2*t/a,o=1/Math.sqrt(1+s*s),a=s*o):Math.abs(t)===0?(a=1,o=0):(s=-.5*a/t,a=1/Math.sqrt(1+s*s),o=s*a),l>0&&(s=a,a=-o,o=s),{rt1:r,rt2:i,cs:a,sn:o}}let A=[],j={},M={},N=[],P=new J,F=new J,I=new J,ee=new J,L=new K,te=new q,ne=new J,re=new DOMParser().parseFromString(e,`image/svg+xml`);return p(re),n(re.documentElement,{fill:`#000`,fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:`miter`,strokeLineCap:`butt`,strokeMiterLimit:4}),{paths:A,gradients:M,xml:re.documentElement}}static createFillMaterial(e){let t=e.userData.style;if(t.fill===void 0||t.fill===`none`)return null;let n=e.color,r=null,i=zu.exec(t.fill);i&&(r=Bu(e.userData.gradients&&e.userData.gradients[i[1]],e));let a=new Fr({opacity:t.fillOpacity*(t.opacity||1),transparent:!0,side:2,depthWrite:!1});return r===null?a.color=n:a.map=r,a}static createStrokeMaterial(e){let t=e.userData.style;return t.stroke===void 0||t.stroke===`none`?null:(zu.test(t.stroke)&&console.warn(`THREE.SVGLoader: Gradient strokes are not supported.`),new Fr({color:new X().setStyle(t.stroke,Lu),opacity:t.strokeOpacity*(t.opacity||1),transparent:!0,side:2,depthWrite:!1}))}static createShapes(e){return console.warn(`SVGLoader: createShapes() is deprecated. Use shapePath.toShapes() instead.`),e.toShapes()}static getStrokeStyle(e,t,n,r,i){return e=e===void 0?1:e,t=t===void 0?`#000`:t,n=n===void 0?`miter`:n,r=r===void 0?`butt`:r,i=i===void 0?4:i,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:r,strokeMiterLimit:i}}static pointsToStroke(t,n,r,i){let a=[],o=[],s=[];if(e.pointsToStrokeWithBuffers(t,n,r,i,a,o,s)===0)return null;let c=new Cr;return c.setAttribute(`position`,new dr(a,3)),c.setAttribute(`normal`,new dr(o,3)),c.setAttribute(`uv`,new dr(s,2)),c}static pointsToStrokeWithBuffers(e,t,n,r,i,a,o,s){let c=new K,l=new K,u=new K,d=new K,f=new K,p=new K,m=new K,h=new K,g=new K,_=new K,v=new K,y=new K,b=new K,x=new K,S=new K,C=new K,w=new K;n=n===void 0?12:n,r=r===void 0?.001:r,s=s===void 0?0:s,e=ce(e);let T=e.length;if(T<2)return 0;let E=e[0].equals(e[T-1]),D,O=e[0],k,A=t.strokeWidth/2,j=1/(T-1),M=0,N,P,F,I,ee=!1,L=0,te=s*3,ne=s*2;re(e[0],e[1],c).multiplyScalar(A),h.copy(e[0]).sub(c),g.copy(e[0]).add(c),_.copy(h),v.copy(g);for(let n=1;n<T;n++){D=e[n],k=n===T-1?E?e[1]:void 0:e[n+1];let r=c;if(re(O,D,r),u.copy(r).multiplyScalar(A),y.copy(D).sub(u),b.copy(D).add(u),N=M+j,P=!1,k!==void 0){re(D,k,l),u.copy(l).multiplyScalar(A),x.copy(D).sub(u),S.copy(D).add(u),F=!0,u.subVectors(k,O),r.dot(u)<0&&(F=!1),n===1&&(ee=F),u.subVectors(k,D),u.normalize();let e=Math.abs(r.dot(u));if(e>2**-52){let n=A/e;u.multiplyScalar(-n),d.subVectors(D,O),f.copy(d).setLength(n).add(u),C.copy(f).negate();let r=f.length(),i=d.length();d.divideScalar(i),p.subVectors(k,D);let a=p.length();if(p.divideScalar(a),d.dot(C)<i&&p.dot(C)<a&&(P=!0),w.copy(f).add(D),C.add(D),P){let e=F?g:h,t=(w.x-e.x)*(C.y-e.y)-(w.y-e.y)*(C.x-e.x);(F&&t<0||!F&&t>0)&&C.copy(e)}switch(I=!1,P?F?(S.copy(C),b.copy(C)):(x.copy(C),y.copy(C)):z(),t.strokeLineJoin){case`bevel`:ae(F,P,N);break;case`round`:oe(F,P),F?ie(D,y,x,N,0):ie(D,S,b,N,1);break;default:let e=A*t.strokeMiterLimit/r;if(e<1){if(t.strokeLineJoin!==`miter-clip`){ae(F,P,N);break}oe(F,P),F?(p.subVectors(w,y).multiplyScalar(e).add(y),m.subVectors(w,x).multiplyScalar(e).add(x),R(y,N,0),R(p,N,0),R(D,N,.5),R(D,N,.5),R(p,N,0),R(m,N,0),R(D,N,.5),R(m,N,0),R(x,N,0)):(p.subVectors(w,b).multiplyScalar(e).add(b),m.subVectors(w,S).multiplyScalar(e).add(S),R(b,N,1),R(p,N,1),R(D,N,.5),R(D,N,.5),R(p,N,1),R(m,N,1),R(D,N,.5),R(m,N,1),R(S,N,1))}else P?(F?(R(g,M,1),R(h,M,0),R(w,N,0),R(g,M,1),R(w,N,0),R(C,N,1)):(R(g,M,1),R(h,M,0),R(w,N,1),R(h,M,0),R(C,N,0),R(w,N,1)),F?x.copy(w):S.copy(w)):F?(R(y,N,0),R(w,N,0),R(D,N,.5),R(D,N,.5),R(w,N,0),R(x,N,0)):(R(b,N,1),R(w,N,1),R(D,N,.5),R(D,N,.5),R(w,N,1),R(S,N,1)),I=!0}}else z()}else z();!E&&n===T-1&&se(e[0],_,v,F,!0,M),M=N,O=D,h.copy(x),g.copy(S)}if(!E)se(D,y,b,F,!1,N);else if(P&&i){let e=w,t=C;ee!==F&&(e=C,t=w),F?(I||ee)&&(t.toArray(i,0),t.toArray(i,9),I&&e.toArray(i,3)):(I||!ee)&&(t.toArray(i,3),t.toArray(i,9),I&&e.toArray(i,0))}if(i){let e=[new K,new K,new K],t=s*3;for(let n=t;n<te;n+=9)e[0].set(i[n],i[n+1]),e[1].set(i[n+3],i[n+4]),e[2].set(i[n+6],i[n+7]),Ra.area(e)<0&&(i[n+3]=e[0].x,i[n+4]=e[0].y)}return L;function re(e,t,n){return n.subVectors(t,e),n.set(-n.y,n.x).normalize()}function R(e,t,n){i&&(i[te]=e.x,i[te+1]=e.y,i[te+2]=0,a&&(a[te]=0,a[te+1]=0,a[te+2]=1),te+=3,o&&(o[ne]=t,o[ne+1]=n,ne+=2)),L+=3}function ie(e,t,r,i,a){c.copy(t).sub(e).normalize(),l.copy(r).sub(e).normalize();let o=Math.PI,s=c.dot(l);Math.abs(s)<1&&(o=Math.abs(Math.acos(s))),o/=n,u.copy(t);for(let t=0,r=n-1;t<r;t++)d.copy(u).rotateAround(e,o),R(u,i,a),R(d,i,a),R(e,i,.5),u.copy(d);R(u,i,a),R(r,i,a),R(e,i,.5)}function z(){R(g,M,1),R(h,M,0),R(y,N,0),R(g,M,1),R(y,N,0),R(b,N,1)}function ae(e,t,n){t?e?(R(g,M,1),R(h,M,0),R(y,N,0),R(g,M,1),R(y,N,0),R(C,N,1),R(y,n,0),R(x,n,0),R(C,n,.5)):(R(g,M,1),R(h,M,0),R(b,N,1),R(h,M,0),R(C,N,0),R(b,N,1),R(b,n,1),R(C,n,0),R(S,n,1)):e?(R(y,n,0),R(x,n,0),R(D,n,.5)):(R(b,n,1),R(S,n,0),R(D,n,.5))}function oe(e,t){t&&(e?(R(g,M,1),R(h,M,0),R(y,N,0),R(g,M,1),R(y,N,0),R(C,N,1),R(y,M,0),R(D,N,.5),R(C,N,1),R(D,N,.5),R(x,M,0),R(C,N,1)):(R(g,M,1),R(h,M,0),R(b,N,1),R(h,M,0),R(C,N,0),R(b,N,1),R(b,M,1),R(C,N,0),R(D,N,.5),R(D,N,.5),R(C,N,0),R(S,M,1)))}function se(e,n,r,a,s,f){switch(t.strokeLineCap){case`round`:s?ie(e,r,n,f,.5):ie(e,n,r,f,.5);break;case`square`:if(s)c.subVectors(n,e),l.set(c.y,-c.x),u.addVectors(c,l).add(e),d.subVectors(l,c).add(e),a?(u.toArray(i,3),d.toArray(i,0),d.toArray(i,9)):(u.toArray(i,3),o[7]===1?d.toArray(i,9):u.toArray(i,9),d.toArray(i,0));else{c.subVectors(r,e),l.set(c.y,-c.x),u.addVectors(c,l).add(e),d.subVectors(l,c).add(e);let t=i.length;a?(u.toArray(i,t-3),d.toArray(i,t-6),d.toArray(i,t-12)):(d.toArray(i,t-6),u.toArray(i,t-3),d.toArray(i,t-12))}}}function ce(e){let t=!1;for(let n=1,i=e.length-1;n<i;n++)if(e[n].distanceTo(e[n+1])<r){t=!0;break}if(!t)return e;let n=[];n.push(e[0]);for(let t=1,i=e.length-1;t<i;t++)e[t].distanceTo(e[t+1])>=r&&n.push(e[t]);return n.push(e[e.length-1]),n}}},zu=/^\s*url\(\s*(?:["']\s*)?#([^)'"\s]+)(?:\s*["'])?\s*\)\s*$/;function Bu(r,i,a=256){if(!r||!Array.isArray(r.stops)||r.stops.length===0)return null;let o=i.userData.transform,s=r.gradientUnits===`objectBoundingBox`,c=null;if(s&&(c=Vu(i,o),c===null))return null;function l(e,t,n){n.set(e,t,1),r.gradientTransform&&n.applyMatrix3(r.gradientTransform),s&&n.set(c.minX+n.x*c.width,c.minY+n.y*c.height,1),o&&n.applyMatrix3(o)}let u=document.createElement(`canvas`),d;if(r.type===`linearGradient`){u.width=a,u.height=1;let e=u.getContext(`2d`),t=e.createLinearGradient(0,0,a,0);Hu(t,r.stops),e.fillStyle=t,e.fillRect(0,0,a,1);let n=new q,i=new q;l(r.x1,r.y1,n),l(r.x2,r.y2,i);let o=i.x-n.x,s=i.y-n.y,c=o*o+s*s||1e-20,f=o/c,p=s/c,m=-(f*n.x+p*n.y);d=new J().set(f,p,m,0,0,.5,0,0,1)}else{let e=r.cx,t=r.cy,n=r.fx,i=r.fy,l=r.r;if(r.gradientTransform){let a=new q;a.set(e,t,1).applyMatrix3(r.gradientTransform),e=a.x,t=a.y,a.set(n,i,1).applyMatrix3(r.gradientTransform),n=a.x,i=a.y}if(s&&(e=c.minX+e*c.width,t=c.minY+t*c.height,n=c.minX+n*c.width,i=c.minY+i*c.height,l*=Math.sqrt((c.width*c.width+c.height*c.height)/2)),l<=0)return null;u.width=a,u.height=a;let f=u.getContext(`2d`),p=e-l,m=t-l,h=2*l,g=a/h;f.setTransform(g,0,0,g,-p*g,-m*g);let _=f.createRadialGradient(n,i,0,e,t,l);Hu(_,r.stops),f.fillStyle=_,f.fillRect(p,m,h,h);let v=o?o.clone().invert():new J;d=new J().set(1/h,0,-p/h,0,1/h,-m/h,0,0,1).multiply(v)}let f=new xi(u);f.colorSpace=Lu,f.flipY=!1,f.matrixAutoUpdate=!1,f.matrix=d;let p=r.spreadMethod===`reflect`?n:r.spreadMethod===`repeat`?e:t;return f.wrapS=p,f.wrapT=p,f}function Vu(e,t){let n=t?t.clone().invert():null,r=new K,i=new os;for(let t of e.subPaths)for(let e of t.getPoints())r.copy(e),n&&r.applyMatrix3(n),i.expandByPoint(r);return i.isEmpty()?null:{minX:i.min.x,minY:i.min.y,width:i.max.x-i.min.x,height:i.max.y-i.min.y}}function Hu(e,t){let n=new X;for(let r of t){let t=r.color;if(r.opacity<1){n.setStyle(r.color,Lu);let e=/rgb\(([^)]+)\)/.exec(n.getStyle(Lu));e&&(t=`rgba(${e[1]},${r.opacity})`)}e.addColorStop(Math.max(0,Math.min(1,r.offset)),t)}}function Uu(e){let t=e.geometry,n=t?.attributes?.position;if(!n){let t=new q;return new Wn().setFromObject(e).getCenter(t),{x:t.x,y:t.y,area:1}}let r=t.index,i=(r?r.count:n.count)/3,a=0,o=0,s=0,c=e=>{let t=e*3;return r?[r.getX(t),r.getX(t+1),r.getX(t+2)]:[t,t+1,t+2]};for(let e=0;e<i;e++){let[t,r,i]=c(e),l=n.getX(t),u=n.getY(t),d=n.getX(r),f=n.getY(r),p=n.getX(i),m=n.getY(i),h=.5*Math.abs((d-l)*(m-u)-(p-l)*(f-u));h<=1e-6||(o+=(l+d+p)/3*h,s+=(u+f+m)/3*h,a+=h)}if(a<=1e-6){let t=new q;return new Wn().setFromObject(e).getCenter(t),{x:t.x,y:t.y,area:1}}let l=o/a,u=s/a,d=1/0,f=-1/0,p=1/0,m=-1/0;for(let e=0;e<i;e++){let[t,r,i]=c(e),a=[n.getX(t),n.getX(r),n.getX(i)],o=[n.getY(t),n.getY(r),n.getY(i)];for(let e=0;e<3;e++){let t=(e+1)%3,n=a[e],r=o[e],i=a[t],s=o[t];if(n<=l+2&&i>=l-2||i<=l+2&&n>=l-2){let e=i-n;if(Math.abs(e)>1e-4){let t=(l-n)/e;if(t>=0&&t<=1){let e=r+t*(s-r);e<d&&(d=e),e>f&&(f=e)}}}if(r<=u+2&&s>=u-2||s<=u+2&&r>=u-2){let e=s-r;if(Math.abs(e)>1e-4){let t=(u-r)/e;if(t>=0&&t<=1){let e=n+t*(i-n);e<p&&(p=e),e>m&&(m=e)}}}}}t.boundingBox||t.computeBoundingBox();let h=t.boundingBox,g=!h||h.max.x-h.min.x>=h.max.y-h.min.y;if(g&&f>d+5){let e=(u-d)/(f-d);(e<.35||e>.65)&&(u=(d+f)*.5)}else if(!g&&m>p+5){let e=(l-p)/(m-p);(e<.35||e>.65)&&(l=(p+m)*.5)}return{x:l,y:u,area:a}}var Wu={crimson:{selected:{fill:13383465,text:`#000000`},deep:{fill:14375245,text:`#000000`},hover:{fill:14975095,text:`#000000`},available:{fill:15642023,text:`#000000`},noListing:{fill:16109516,text:`#000000`},seatBase:{fill:15979986,text:`#000000`},seatActive:{fill:13383465,text:`#000000`}},rust:{selected:{fill:13397289,text:`#000000`},deep:{fill:14387277,text:`#000000`},hover:{fill:14984311,text:`#000000`},available:{fill:15648423,text:`#000000`},noListing:{fill:16113100,text:`#000000`},seatBase:{fill:15982544,text:`#000000`},seatActive:{fill:13397289,text:`#000000`}},amber:{selected:{fill:13411113,text:`#000000`},deep:{fill:14399565,text:`#000000`},hover:{fill:14993783,text:`#000000`},available:{fill:15654567,text:`#000000`},noListing:{fill:16116684,text:`#000000`},seatBase:{fill:15984589,text:`#000000`},seatActive:{fill:13411113,text:`#000000`}},olive:{selected:{fill:12504105,text:`#000000`},deep:{fill:13622093,text:`#000000`},hover:{fill:14410871,text:`#000000`},available:{fill:15265447,text:`#000000`},noListing:{fill:15857100,text:`#000000`},seatBase:{fill:15659981,text:`#000000`},seatActive:{fill:12504105,text:`#000000`}},lime:{selected:{fill:8965161,text:`#000000`},deep:{fill:10541901,text:`#000000`},hover:{fill:11986039,text:`#000000`},available:{fill:13889191,text:`#000000`},noListing:{fill:15005132,text:`#000000`},seatBase:{fill:14480333,text:`#000000`},seatActive:{fill:8965161,text:`#000000`}},green:{selected:{fill:2739309,text:`#000000`},deep:{fill:5102472,text:`#000000`},hover:{fill:7857316,text:`#000000`},available:{fill:11005636,text:`#000000`},noListing:{fill:13432285,text:`#000000`},seatBase:{fill:13497310,text:`#000000`},seatActive:{fill:2739309,text:`#000000`}},teal:{selected:{fill:2735820,text:`#000000`},deep:{fill:5099483,text:`#000000`},hover:{fill:7855076,text:`#000000`},available:{fill:11004398,text:`#000000`},noListing:{fill:13431285,text:`#000000`},seatBase:{fill:13496563,text:`#000000`},seatActive:{fill:2735820,text:`#000000`}},cerulean:{selected:{fill:2721996,text:`#000000`},deep:{fill:5087451,text:`#000000`},hover:{fill:7845604,text:`#000000`},available:{fill:10998766,text:`#000000`},noListing:{fill:13427957,text:`#000000`},seatBase:{fill:13493235,text:`#000000`},seatActive:{fill:2721996,text:`#000000`}},indigo:{selected:{fill:3615180,text:`#000000`},deep:{fill:5852635,text:`#000000`},hover:{fill:8419300,text:`#000000`},available:{fill:11446254,text:`#000000`},noListing:{fill:13618421,text:`#000000`},seatBase:{fill:14013171,text:`#000000`},seatActive:{fill:3615180,text:`#000000`}},purple:{selected:{fill:10693068,text:`#000000`},deep:{fill:12078555,text:`#000000`},hover:{fill:13203428,text:`#000000`},available:{fill:14591982,text:`#000000`},noListing:{fill:15453429,text:`#000000`},seatBase:{fill:15520499,text:`#000000`},seatActive:{fill:10693068,text:`#000000`}}},Gu=Object.keys(Wu),Ku={mutedFill:15857145,mutedStroke:14870768,mutedText:`#94A3B8`,mutedSeatFill:14870768,selectedStroke:0,hoveredStroke:1976635,defaultStroke:16777215,rowGuideLine:13358561,rowGuideActive:0,seatFallbackBase:14870768,seatTextDark:`#000000`,seatTextLight:`#000000`},qu={},Ju={},Yu={},Xu=new X(16777215),Zu=new X,Qu=new X,$u=new X,ed=.75,td=.55;for(let e of Gu){let t=Wu[e],n=t.noListing.fill;Zu.setHex(n),qu[e]=Xu.clone().lerp(Zu,.44999999999999996).getHex(),Qu.setHex(t.available.fill),$u.setHex(t.hover.fill);let r=Qu.clone().lerp($u,ed).getHex();t.seatListed={fill:r,text:`#000000`},Ju[e]=r,Zu.setHex(t.noListing.fill);let i=Zu.clone().lerp(Qu,td).getHex();t.sectionSelectedRow={fill:i,text:`#000000`},Yu[e]=i}var nd=[`selected`,`hover`,`available`,`noListing`,`seatBase`,`seatListed`,`sectionSelectedRow`];function rd(e,t){return typeof e!=`string`||!e||e===`__proto__`||!t||!nd.every(e=>Number.isInteger(t[e]?.fill))?!1:(Wu[e]={...t,deep:t.deep||t.hover,seatActive:t.seatActive||t.selected},Ju[e]=t.seatListed.fill,Yu[e]=t.sectionSelectedRow.fill,qu[e]=t.inactiveSeat?.fill??Xu.clone().lerp(Zu.setHex(t.noListing.fill),.44999999999999996).getHex(),Gu.includes(e)||Gu.push(e),!0)}function id(e){return typeof e==`string`&&Object.hasOwn(Wu,e)}function ad(e,{hasListing:t=!0,isHighlighted:n=!0,isSelected:r=!1,isHovered:i=!1,isSectionSelected:a=!1,entityType:o=`section`}={}){if(!n)return{fill:o===`seat`?Ku.mutedSeatFill:Ku.mutedFill,stroke:Ku.mutedStroke,textColor:Ku.mutedText};let s=id(e)?Wu[e]:Wu[Gu[0]];if(r)return{fill:s.selected.fill,stroke:Ku.selectedStroke,textColor:s.selected.text||`#FFFFFF`};if(i)return{fill:s.hover.fill,stroke:Ku.hoveredStroke,textColor:s.hover.text||`#FFFFFF`};if(!t){let t;return t=o===`seat`?s.seatBase.fill:o===`row`&&a?s.sectionSelectedRow?s.sectionSelectedRow.fill:Yu[e]||s.noListing.fill:s.noListing.fill,{fill:t,stroke:Ku.defaultStroke,textColor:Ku.seatTextDark}}return o===`seat`?{fill:s.seatListed?s.seatListed.fill:s.available.fill,stroke:Ku.defaultStroke,textColor:Ku.seatTextDark}:{fill:s.available.fill,stroke:Ku.defaultStroke,textColor:s.available.text||Ku.seatTextDark}}function od(e){if(e==null)return``;let t=String(e).trim();return t===``?``:/^\d+$/.test(t)?t.replace(/^0+(?=\d)/,``):t.toUpperCase()}function sd(e){return e==null?``:String(e).trim().replace(/^.*_/,``).toUpperCase()}var cd=class{constructor(e=[]){this._exact=new Map,this._lower=new Map,this._short=new Map,this._ambiguous=new Set,this._cache=new Map;for(let t of e){let e=String(t);this._exact.set(e,e);let n=e.trim().toLowerCase();this._addAlias(this._lower,n,e);let r=sd(e);r&&this._addAlias(this._short,r,e)}}_addAlias(e,t,n){let r=e.get(t);r===void 0?e.set(t,n):r!==n&&(e.set(t,null),e===this._short&&this._ambiguous.add(t))}get ambiguousAliases(){return Array.from(this._ambiguous)}get size(){return this._exact.size}resolve(e){if(e==null)return null;let t=String(e);if(this._cache.has(t))return this._cache.get(t);let n=this._exact.get(t)??null;if(n===null){let e=t.trim();if(n=this._exact.get(e)??this._lower.get(e.toLowerCase())??null,n===null){let t=sd(e),r=this._short.get(t),i=!e.includes(`_`)||/^(sec|section)_/i.test(e);r&&i&&(n=r)}}return this._cache.size>5e3&&this._cache.clear(),this._cache.set(t,n),n}};function ld(e,t){let n=String(e),r=[],i=n.length;for(let e=0;e<t;e++){let e=n.lastIndexOf(`:`,i-1);if(e<=0)return null;r.unshift(n.slice(e+1,i)),i=e}return{section:n.slice(0,i),ids:r}}function ud(e){if(e==null||e===``)return null;let t=typeof e==`number`?e:Number(e);return Number.isFinite(t)&&t>=0?t:null}var dd=typeof MessageChannel<`u`?new MessageChannel:null,fd=[];dd&&(dd.port1.onmessage=()=>{let e=fd.shift();e&&e()});var pd=()=>typeof globalThis<`u`&&globalThis.scheduler?.yield?globalThis.scheduler.yield():dd?new Promise(e=>{fd.push(e),dd.port2.postMessage(null)}):new Promise(e=>setTimeout(e,0)),md=e=>String(e).replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`),hd=e=>{let t=Error(e);return t.code=`invalid_svg`,t},gd=class e{static _parseSvgDocument(t,n=`SVG`){e._assertSvgText(t,n);let r=new DOMParser().parseFromString(t,`image/svg+xml`);return e._validateSvgDocument(r,n),r}static _assertSvgText(e,t=`SVG`){if(typeof e!=`string`||e.trim().length===0)throw hd(`${t} is empty.`)}static _validateSvgDocument(e,t=`SVG`){if(!e||e.getElementsByTagName(`parsererror`).length>0)throw hd(`${t} is not well-formed XML.`);let n=e.documentElement;if(!n||n.tagName.toLowerCase()!==`svg`)throw hd(`${t} has no <svg> root element.`)}static _loadRowsSinglePass(e){let t;try{t=new Ru().parse(e)}catch{return null}let n=t?.paths||[],r=null,i=new Map;for(let e=0;e<n.length;e++){let t=n[e]?.userData?.node;t&&(r||=t.ownerDocument||null,t.ownerDocument===r&&i.set(t,n[e]))}return!r||typeof r.querySelectorAll!=`function`?null:{xmlDoc:r,pathByNode:i}}static _extractInheritedProp(e,t,n,r,i,a){let o=e=>{if(!e||typeof e.getAttribute!=`function`)return null;let t=e.getAttribute(`style`);if(t){let e=t.match(n);if(e){let t=i(e[1],e[0]);if(t!==null)return t}}for(let t=0;t<r.length;t++){let n=e.getAttribute(r[t]);if(n){let e=i(n,n);if(e!==null)return e}}return null};if(t){let e=o(t);if(e!==null)return e}let s=e;for(;s&&s.tagName&&s.tagName.toLowerCase()!==`svg`;){let e=o(s);if(e!==null)return e;s=s.parentElement}return a}static _parseFontSize(t,n=null,r=14){return e._extractInheritedProp(t,n,/font-size\s*:\s*([\d.]+)(?:px|pt)?/i,[`font-size`],(e,t)=>{let n=parseFloat(e);return t.toLowerCase().endsWith(`pt`)&&(n*=1.333333),!isNaN(n)&&n>0?n:null},r)}static _parseTransformString(e){let t=new Y().identity();if(!e||typeof e!=`string`)return t;let n=/([a-zA-Z]+)\s*\(([^)]+)\)/g,r;for(;(r=n.exec(e))!==null;){let e=r[1].toLowerCase(),n=r[2].trim().split(/[\s,]+/).map(parseFloat).filter(e=>!isNaN(e)),i=new Y().identity();if(e===`matrix`&&n.length>=6){let[e,t,r,a,o,s]=n;i.set(e,r,0,o,t,a,0,s,0,0,1,0,0,0,0,1)}else if(e===`translate`&&n.length>=1)i.makeTranslation(n[0],n.length>1?n[1]:0,0);else if(e===`rotate`&&n.length>=1){let e=n[0]*Math.PI/180;if(n.length>=3){let[t,r]=[n[1],n[2]];i.makeTranslation(t,r,0).multiply(new Y().makeRotationZ(e)).multiply(new Y().makeTranslation(-t,-r,0))}else i.makeRotationZ(e)}else e===`scale`&&n.length>=1&&i.makeScale(n[0],n.length>1?n[1]:n[0],1);t.multiply(i)}return t}static _getCumulativeTransform(t){let n=[],r=t;for(;r&&r.tagName&&r.tagName.toLowerCase()!==`svg`;){let t=r.getAttribute(`transform`);t&&n.unshift(e._parseTransformString(t)),r=r.parentElement}let i=new Y().identity();for(let e=0;e<n.length;e++)i.multiply(n[e]);return i}static _isIdentity(e){let t=e.elements;return t[0]===1&&t[1]===0&&t[4]===0&&t[5]===1&&t[12]===0&&t[13]===0}static _parseTextElementData(t){let n=t.querySelector(`tspan`),r=(t.textContent||``).trim().replace(/\s+/g,` `);if(!r)return null;let i=e._parseFontSize(t,n,14),a=n?.hasAttribute(`x`)?parseFloat(n.getAttribute(`x`)):NaN,o=n?.hasAttribute(`y`)?parseFloat(n.getAttribute(`y`)):NaN;(isNaN(a)||isNaN(o))&&(a=parseFloat(t.getAttribute(`x`)),o=parseFloat(t.getAttribute(`y`)));let s=e._getCumulativeTransform(t),c=s.elements,l=Math.hypot(c[0],c[1]),u=Math.hypot(c[4],c[5]),d=i*(u>0?u:l>0?l:1),f=Math.atan2(c[1],c[0]),p=e._extractInheritedProp(t,n,/text-anchor\s*:\s*([^;]+)/i,[`text-anchor`],e=>e.trim().toLowerCase(),`start`),m=e._extractInheritedProp(t,n,/(?:dominant-baseline|alignment-baseline)\s*:\s*([^;]+)/i,[`dominant-baseline`,`alignment-baseline`],e=>e.trim().toLowerCase(),`alphabetic`),h=r.length*d*.55,g=p===`start`?h/2:p===`end`?-h/2:0,_=-d*.35;m===`central`||m===`middle`||m===`mathematical`?_=0:m===`hanging`||m===`text-before-edge`||m===`top`||m===`text-top`?_=d*.35:(m===`ideographic`||m===`bottom`||m===`text-bottom`||m===`text-after-edge`)&&(_=-d*.5);let v=new q((isNaN(a)?0:a)+g,(isNaN(o)?0:o)+_,0).applyMatrix4(s);return{text:r,fontSize:d,x:v.x,y:v.y,rotation:f}}static _calculateOptimalWorldFontHeight(e){let t=document.createElement(`canvas`).getContext(`2d`);t.font=`500 100px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;let n=t.measureText(`000`).width/100,r=e*.7;return Math.min(r/n,r)}static _disposeAbortedGroup(e,t){e&&e.traverse(e=>{e.geometry&&e.geometry!==t&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.dispose()):e.material.dispose())}),t?.dispose()}static _parsePathD(e,t){if(typeof Ru.parsePathData==`function`)return Ru.parsePathData(e);if(typeof t.parsePathData==`function`)return t.parsePathData(e);let n=`<svg xmlns="http://www.w3.org/2000/svg"><path d="${md(e)}"/></svg>`;return t.parse(n).paths[0]||null}static async parseRows(t,n=null,r={},i=null){let a=i||r?.signal||null;e._assertSvgText(t,`Rows SVG`);let o=r?.singlePass!==!1,s=r?.seats!==!1,c=o?e._loadRowsSinglePass(t):null,l;c?(e._validateSvgDocument(c.xmlDoc,`Rows SVG`),l=c.xmlDoc):l=e._parseSvgDocument(t,`Rows SVG`);let u=c?c.pathByNode:null,d=!!c,f=new xn;f.renderOrder=30;let p=[],m=[],h=Object.create(null),g=new Map,_=new Map,v=Array.from(l.querySelectorAll(`[data-rows]`)),y=new Y,b=new Ru,x=l.querySelector(`[data-rows] [data-row] path`),S=x?parseFloat(x.getAttribute(`stroke-width`)):NaN,C=!isNaN(S)&&S>0?S:3,w=C*.4,T=C*.7,E=new Ei(T/2,16),D=!1,O=C*1.045,k=C*.5,A=e._calculateOptimalWorldFontHeight(T),j=performance.now()+8;for(let t=0;t<v.length;t++){if(a?.aborted)return e._disposeAbortedGroup(f,E),null;let r=v[t],i=(r.getAttribute(`data-rows`)||``).trim();if(!i)continue;if(h[i]){console.warn(`[VenueSvgParser] Duplicate data-rows="${i}" ignored.`);continue}let o=new xn,c=new Wn;o.userData={sectionName:i,isSectionRowGroup:!0,localBox:c},f.add(o),h[i]=o;let l=r.querySelectorAll(`[data-row]`),m=[],x=[],S=[],M=0,N=0;for(let t=0;t<l.length;t++){if(performance.now()>=j){if(await pd(),a?.aborted)return x.forEach(e=>e.dispose()),e._disposeAbortedGroup(f,E),null;j=performance.now()+8}let r=l[t],h=(r.getAttribute(`data-row`)||``).trim(),g=r.getAttribute(`data-seat-start`),v=r.getAttribute(`data-seat-end`),y=(r.getAttribute(`data-seat-direction`)||`ltr`).toLowerCase(),D=new xn;D.userData={isRow:!0,section:i,row:h,seatStart:g,seatEnd:v,seatDirection:y,polylines:[],halfWidth:0};let P=`${i}:${od(h)}`,F={group:D,userData:D.userData,seatIndices:[],vertexStart:0,vertexCount:0};_.has(P)?console.warn(`[VenueSvgParser] Duplicate row "${h}" in section "${i}".`):_.set(P,F);let I=r.querySelectorAll(`path`),ee=[],L=[];for(let t=0;t<I.length;t++){let n=I[t];if(n.hasAttribute(`data-seat`)||n.hasAttribute(`data-seat-id`))continue;let r=n.getAttribute(`d`);if(!r)continue;let i=n.getAttribute(`stroke`)||`#94A3B8`,a=parseFloat(n.getAttribute(`stroke-width`))||C,o=null;if(u)o=u.get(n)||null;else try{o=e._parsePathD(r,b)}catch{o=null}let s=Math.max(a,.8)/2;s>D.userData.halfWidth&&(D.userData.halfWidth=s);let c=o?o.subPaths:[];for(let e=0;e<c.length;e++){let t=c[e];L.push(t);let n=t.getPoints();if(!n||n.length<2)continue;let r=new Float32Array(n.length*2);for(let e=0;e<n.length;e++)r[e*2]=n[e].x,r[e*2+1]=n[e].y;D.userData.polylines.push(r);try{let e=Ru.pointsToStroke(n,{strokeWidth:Math.max(a,.8),strokeColor:i,strokeLineJoin:`round`,strokeLineCap:`round`,strokeMiterLimit:10});e&&ee.push(e)}catch{}}}if(s&&(g!==null||v!==null)&&L.length>0)for(let e=0;e<L.length;e++){let t=L[e],n=t.getLength();if(!(n>0))continue;let r=Math.max(1,Math.floor(Math.max(0,n-k)/O));for(let e=0;e<r;e++){let a=Math.min(1,Math.max(0,(k+(e+.5)*O)/n)),o=t.getPointAt(a),s=new q(o.x,o.y,.22);m.push({section:i,row:h,seat:String(y===`rtl`?r-e:e+1),baseColorHex:Ku.seatFallbackBase,visualCenter:s,matrixTranslation:s,diameter:T,effectiveLabelWorldHeight:A,labelIndex:-1})}}if(ee.length>0){let e=ee.length===1?ee[0]:Fu(ee,!1);if(ee.length>1&&ee.forEach(e=>e.dispose()),e){let t=e.attributes.position.count,n=(e.index?e.index.count:t)/3;if(F.vertexStart=M,F.vertexCount=t,S.push({startFace:N,endFace:N+n,row:h,section:i,seatStart:g,seatEnd:v,seatDirection:y,rowData:D.userData}),M+=t,N+=n,x.push(e),e.computeBoundingBox(),e.boundingBox){let t=e.boundingBox.getCenter(new q);t.z=.2,D.userData.visualCenter=t,D.userData.box=e.boundingBox.clone(),c.union(e.boundingBox)}}}o.add(D);let te=r.querySelectorAll(`text`);for(let t=0;t<te.length;t++){let r=te[t],a=(r.textContent||``).trim();if(!a)continue;let o=r.querySelector(`tspan`),s=parseFloat(r.getAttribute(`x`)??o?.getAttribute(`x`)),c=parseFloat(r.getAttribute(`y`)??o?.getAttribute(`y`)),l=new q(isNaN(s)?0:s,isNaN(c)?0:c,.3);if(d){let t=e._getCumulativeTransform(r);e._isIdentity(t)||(l.applyMatrix4(t),l.z=.3)}n&&l.applyMatrix4(n),p.push({text:a.slice(0,32),type:`row`,sectionName:i,row:h,textColor:Ku.seatTextDark||`#000000`,fontSize:w,worldWidth:w,worldHeight:w,rowThickness:C,x:l.x,y:l.y,z:.3,rotation:0})}}if(x.length>0){let e=x.length===1?x[0]:Fu(x,!1);if(x.length>1&&x.forEach(e=>e.dispose()),e){let t=e.attributes.position.count,n=new Float32Array(t*3);for(let e=0;e<t;e++)n[e*3]=.58,n[e*3+1]=.64,n[e*3+2]=.72;e.setAttribute(`color`,new dr(n,3));let r=new qr(e,new Fr({vertexColors:!0,side:2,depthTest:!0,depthWrite:!0,transparent:!1}));r.position.z=.2,r.renderOrder=30,r.matrixAutoUpdate=!1,r.updateMatrix(),r.userData={isMergedSectionLines:!0,section:i,rowRanges:S},o.add(r),o.userData.mergedLineMesh=r}}if(m.length>0){D=!0;let e=new ai(E,new Fr({side:2,depthTest:!0,depthWrite:!0,transparent:!1}),m.length);e.position.z=.22,e.renderOrder=32,e.matrixAutoUpdate=!1,e.updateMatrix();let t=Array(m.length);for(let n=0;n<m.length;n++){let r=m[n];y.makeTranslation(r.matrixTranslation.x,r.matrixTranslation.y,0),e.setMatrixAt(n,y);let i={instanceIndex:n,instancedMesh:e,section:r.section,row:r.row,seat:r.seat,baseColorHex:r.baseColorHex,visualCenter:r.visualCenter,diameter:r.diameter,effectiveLabelWorldHeight:r.effectiveLabelWorldHeight,labelIndex:-1};t[n]=i;let a=`${r.section}:${od(r.row)}:${od(r.seat)}`;g.has(a)||g.set(a,i),_.get(`${r.section}:${od(r.row)}`)?.seatIndices.push(n)}e.userData={isSeatInstancedMesh:!0,section:i,seatMetadata:t},o.add(e),o.userData.seatInstancedMesh=e}}return D||E.dispose(),{rowsGroup:f,sectionRowGroups:h,rowWorldTexts:p,seatWorldTexts:m,seatsRegistry:g,rowsRegistry:_}}static parse(t,n={}){let{getCategoryColor:r=()=>11904232}=n,i=Object.create(null),a=[],o=e._parseSvgDocument(t,`SVG`),s=o.getElementById(`camera-center-point`),c=o.documentElement,l=0,u=0,d=0,f=0,p=!1;if(c){let e=c.getAttribute(`viewBox`);if(e){let t=e.trim().split(/[\s,]+/).map(parseFloat);t.length===4&&t.every(e=>!isNaN(e))&&t[2]>0&&t[3]>0&&([l,u,d,f]=t,p=!0)}if(!p){let e=parseFloat(c.getAttribute(`width`)),t=parseFloat(c.getAttribute(`height`));!isNaN(e)&&!isNaN(t)&&e>0&&t>0&&(d=e,f=t,p=!0)}}let m=[];o.querySelectorAll(`text`).forEach(t=>{let n=e._parseTextElementData(t);n&&m.push({...n,text:n.text.slice(0,64),sectionName:t.closest(`[data-section]`)?.getAttribute(`data-section`)?.trim()||null,categoryName:t.closest(`[data-category]`)?.getAttribute(`data-category`)?.trim()||null})}),o.querySelectorAll(`text, tspan`).forEach(e=>e.remove());let h=new Ru().parse(new XMLSerializer().serializeToString(o)),g=new xn;g.scale.set(1,-1,1);let _=null;for(let e of h.paths){let t=e.userData.node;if(!_&&t&&(t.id===`camera-center-point`||t.closest?.(`#camera-center-point`))){let t=e.toShapes(!0);if(t.length>0){let e=new Ha(t[0]);e.computeBoundingBox(),e.boundingBox&&(_=e.boundingBox.getCenter(new q)),e.dispose()}else{let t=e.subPaths?.[0]?.getPoints();t?.length>0&&(_=new q(t[0].x,t[0].y,0))}}let n=t?.closest(`[data-category]`)?.getAttribute(`data-category`)?.trim()||null,o=t?.closest(`[data-section]`)?.getAttribute(`data-section`)?.trim()||null;if(!o&&(e.userData.style.fill===`none`||t?.getAttribute(`fill`)===`none`)&&e.userData.style.stroke&&e.userData.style.stroke!==`none`){let n=e.userData.style.stroke||`#ffffff`,r=parseFloat(t?.getAttribute(`stroke-width`))||1.2;for(let t of e.subPaths){let e=t.getPoints();if(!e||e.length<2)continue;let i=null;try{let t=Ru.pointsToStroke(e,{strokeWidth:Math.max(r,1),strokeColor:n,strokeLineJoin:`round`,strokeLineCap:`round`,strokeMiterLimit:10});t&&(i=new qr(t,new Fr({color:new X(n),side:2,depthTest:!0,depthWrite:!0,transparent:!1})))}catch{}i||=new vi(new Cr().setFromPoints(e),new ui({color:new X(n),depthTest:!0,depthWrite:!0,transparent:!1})),i.position.z=.05,i.renderOrder=10,i.matrixAutoUpdate=!1,i.updateMatrix(),g.add(i)}continue}let s=n?r(n):e.color?e.color.getHex():11904232,c=s!==void 0&&!isNaN(s)?s:11904232;o&&!i[o]&&(i[o]=new xn,i[o].userData={isSection:!0,sectionName:o,categoryName:n,polygons:[],box:new Wn,center:null},g.add(i[o]),n&&a.push({section:o,category:n}));let l=new Fr({color:c,side:2,depthWrite:!0,depthTest:!0,transparent:!1});for(let t of e.toShapes(!0)){let e=new Ha(t);e.computeBoundingBox();let r=new qr(e,l);if(r.userData={section:o,category:n},o){r.position.z=.1,r.renderOrder=20,r.matrixAutoUpdate=!1,r.updateMatrix(),i[o].add(r);let t=Uu(r),n=e.boundingBox?e.boundingBox.clone():new Wn;i[o].userData.polygons.push({visualCenter:{x:t.x,y:t.y},area:t.area,boundingBox:n}),i[o].userData.box.union(n)}else r.position.z=0,r.renderOrder=10,r.matrixAutoUpdate=!1,r.updateMatrix(),g.add(r)}}let v=new q;if(p)v.set(d,f,0),g.position.set(-(l+d/2),u+f/2,0);else{let e=new Wn().setFromObject(g),t=e.getCenter(new q);e.getSize(v),g.position.set(-t.x,-t.y,0)}g.updateMatrixWorld(!0),!_&&s&&(_=s.tagName.toLowerCase()===`rect`?new q((parseFloat(s.getAttribute(`x`))||0)+(parseFloat(s.getAttribute(`width`))||0)/2,(parseFloat(s.getAttribute(`y`))||0)+(parseFloat(s.getAttribute(`height`))||0)/2,0):new q(parseFloat(s.getAttribute(`cx`)??s.getAttribute(`x`))||0,parseFloat(s.getAttribute(`cy`)??s.getAttribute(`y`))||0,0));let y=null;if(_){let e=_.clone().applyMatrix4(g.matrixWorld);y=new q(e.x,e.y,0)}for(let e of Object.values(i)){let t=e.userData.polygons||[];if(t.length>0){let n=t[0];for(let e=1;e<t.length;e++)t[e].area>n.area&&(n=t[e]);let r=new q(n.visualCenter.x,n.visualCenter.y,0).applyMatrix4(g.matrixWorld);e.userData.center=new q(r.x,r.y,0)}else if(e.userData.box&&!e.userData.box.isEmpty()){let t=e.userData.box.getCenter(new q).applyMatrix4(g.matrixWorld);e.userData.center=new q(t.x,t.y,0)}}return{svgGroup:g,sectionGroups:i,uniqueSections:a,svgGeomSize:v,finalWorldTexts:m.map(e=>{let t=new q(e.x,e.y,0).applyMatrix4(g.matrixWorld);return{text:e.text,category:e.categoryName,sectionName:e.sectionName,textColor:Ku.seatTextDark,fontSize:e.fontSize,worldHeight:e.fontSize,worldWidth:e.fontSize,effectiveHeight:e.fontSize,x:t.x,y:t.y,z:e.sectionName?.4:.35,rotation:-e.rotation,priority:e.sectionName?2:1}}),cameraCenterPoint:y}}},_d=137.508,vd=Object.freeze({selected:{l:.66,c:.13},seatHover:{l:.715,c:.12},deep:{l:.74,c:.11},hover:{l:.8,c:.095},seatListed:{l:.82,c:.09},available:{l:.87,c:.07},sectionSelectedRow:{l:.9,c:.055},noListing:{l:.93,c:.035},seatBase:{l:.94,c:.03},inactiveSeat:{l:.955,c:.02}}),yd=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4,bd=e=>e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055;function xd(e,t,n){let r=e+.3963377774*t+.2158037573*n,i=e-.1055613458*t-.0638541728*n,a=e-.0894841775*t-1.291485548*n,o=r**3,s=i**3,c=a**3;return[4.0767416621*o-3.3077115913*s+.2309699292*c,-1.2684380046*o+2.6097574011*s-.3413193965*c,-.0041960863*o-.7034186147*s+1.707614701*c]}function Sd(e,t,n){let r=Math.cbrt(.4122214708*e+.5363325363*t+.0514459929*n),i=Math.cbrt(.2119034982*e+.6806995451*t+.1073969566*n),a=Math.cbrt(.0883024619*e+.2817188376*t+.6299787005*n);return[.2104542553*r+.793617785*i-.0040720468*a,1.9779984951*r-2.428592205*i+.4505937099*a,.0259040371*r+.7827717662*i-.808675766*a]}var Cd=e=>e.every(e=>e>=-1e-4&&e<=1.0001);function wd(e,t,n){let r=n*Math.PI/180,i=t,a=xd(e,i*Math.cos(r),i*Math.sin(r));for(let t=0;t<40&&!Cd(a);t++)i*=.92,a=xd(e,i*Math.cos(r),i*Math.sin(r));let[o,s,c]=a.map(e=>Math.round(Math.min(1,Math.max(0,bd(Math.min(1,Math.max(0,e)))))*255));return o<<16|s<<8|c}function Td(e){let[t,n,r]=Sd(yd((e>>16&255)/255),yd((e>>8&255)/255),yd((e&255)/255)),i=Math.hypot(n,r),a=Math.atan2(r,n)*180/Math.PI;return a<0&&(a+=360),{l:t,c:i,h:a}}function Ed(e){if(typeof e==`number`&&Number.isInteger(e)&&e>=0&&e<=16777215)return e;if(typeof e!=`string`)return null;let t=e.trim().match(/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!t)return null;let n=t[1].length===3?t[1].split(``).map(e=>e+e).join(``):t[1];return parseInt(n,16)}function Dd(e,t=1){let n=n=>wd(n.l,n.c*t,e),r=e=>({fill:n(e),text:`#000000`});return{selected:r(vd.selected),deep:r(vd.deep),hover:r(vd.hover),available:r(vd.available),noListing:r(vd.noListing),seatBase:r(vd.seatBase),seatActive:r(vd.selected),seatHover:r(vd.seatHover),seatListed:r(vd.seatListed),sectionSelectedRow:r(vd.sectionSelectedRow),inactiveSeat:r(vd.inactiveSeat)}}function Od(e){let t=Ed(e);if(t===null)return null;let{c:n,h:r}=Td(t),i=Dd(r,Math.max(.15,Math.min(2.5,n/vd.available.c)));return i.available={fill:t,text:`#000000`},i}function kd(e,{startHue:t=12}={}){let n=[...new Set([...e].map(String))].sort((e,t)=>e.localeCompare(t)),r=new Map;return n.forEach((e,n)=>r.set(e,(t+n*_d)%360)),r}function Ad(e){return`#`+e.toString(16).padStart(6,`0`)}function jd(e,t=e=>String(e).trim()){if(!e||typeof e!=`object`)return null;let n=(e,t=e=>String(e).trim())=>{if(!e)return null;let n=(typeof e==`string`?[e]:[...e]).map(t).filter(Boolean);return n.length?new Set(n):null},r=n(e.categories),i=n(e.sections,e=>t(String(e))),a=Math.floor(Number(e.quantity)),o=Number.isFinite(a)&&a>1?Math.min(a,99):1,s=!!e.together&&o>1,c=null,l=null;if(Array.isArray(e.price)){let t=ud(e.price[0]),n=ud(e.price[1]);c=t,l=n,t!==null&&n!==null&&t>n&&(c=n,l=t)}return!r&&!i&&o===1&&c===null&&l===null?null:Object.freeze({categories:r,sections:i,quantity:o,together:s,minPrice:c,maxPrice:l})}function Md(e,t){return!t||!(t.categories&&!t.categories.has(e.category)||t.sections&&(!e.section||!t.sections.has(e.section))||e.quantity<t.quantity||t.together&&!e.together||t.minPrice!==null&&e.price<t.minPrice||t.maxPrice!==null&&e.price>t.maxPrice)}function Nd(e){return e?{categories:e.categories?[...e.categories]:[],sections:e.sections?[...e.sections]:[],quantity:e.quantity,together:e.together,price:[e.minPrice,e.maxPrice]}:null}function Pd(){return{count:0,tickets:0,minPrice:null,maxPrice:null,maxTogether:0,quantityMask:0,listingIds:[]}}function Fd(e,t){e.count++,e.tickets+=t.quantity,(e.minPrice===null||t.price<e.minPrice)&&(e.minPrice=t.price),(e.maxPrice===null||t.price>e.maxPrice)&&(e.maxPrice=t.price);let n=t.together?t.quantity:1;n>e.maxTogether&&(e.maxTogether=n),e.quantityMask|=1<<Math.min(t.quantity,8)-1,e.listingIds.push(t.id)}function Id(e){if(!e)return null;let t=[];for(let n=1;n<=8;n++)e.quantityMask&1<<n-1&&t.push(n);return Object.freeze({count:e.count,tickets:e.tickets,minPrice:e.minPrice,maxPrice:e.maxPrice,maxTogether:e.maxTogether,quantities:t})}var Ld=class e{constructor({canonSection:e=e=>String(e).trim(),categoryOf:t=()=>null}={}){this.canonSection=e,this.categoryOf=t,this.clear()}clear(){this.listings=[],this.sections=new Map,this.rows=new Map,this.seats=new Map,this.categories=new Map,this.groups=new Map,this.seatGroup=new Map,this.rejected=0}_normalizeListing(e,t){if(!e||typeof e!=`object`)return null;let n=ud(e.price);if(n===null)return null;let r=e.section===null||e.section===void 0?``:String(e.section).trim(),i=r?this.canonSection(r):``,a=e.row===null||e.row===void 0||String(e.row).trim()===``?null:od(e.row),o=[];Array.isArray(e.seats)?o=e.seats.map(od).filter(Boolean):e.seat!==null&&e.seat!==void 0&&String(e.seat).trim()!==``&&(o=[od(e.seat)]),a===null&&(o=[]);let s=Number.isFinite(Number(e.quantity))?Math.floor(Number(e.quantity)):0;s<1&&(s=Math.max(1,o.length));let c=e.together===void 0||e.together===null?s>1:!!e.together,l=e.category?String(e.category).trim():i?this.categoryOf(i):null;return{id:e.id!==void 0&&e.id!==null?String(e.id):`#${t}`,section:i,row:a,seats:o,quantity:s,together:c,price:n,category:l||null}}setListings(e){this.clear();let t=0;for(let n of e||[]){let e=this._normalizeListing(n,t++);if(!e){this.rejected++;continue}this.listings.push(e),this._addListing(e)}return this}_addListing(e){let t=(t,n)=>{let r=t.get(n);r||(r=Pd(),t.set(n,r)),Fd(r,e)};if(e.category&&t(this.categories,e.category),!e.section||(t(this.sections,e.section),e.row===null))return;let n=`${e.section}:${e.row}`;t(this.rows,n);for(let r of e.seats)t(this.seats,`${n}:${r}`);if(e.together&&e.seats.length>=2){let t=e.seats.map(e=>`${n}:${e}`),r=e.id;this.groups.has(r)&&(r=`${e.id}#${this.groups.size}`);let i=Object.freeze({id:r,section:e.section,row:e.row,rowKey:n,seats:Object.freeze([...e.seats]),seatKeys:Object.freeze(t),quantity:e.quantity,price:e.price,total:e.price*e.quantity,category:e.category});this.groups.set(r,i);for(let e of t){let t=this.seatGroup.get(e);(t===void 0||i.price<this.groups.get(t).price)&&this.seatGroup.set(e,r)}}}getGroup(e){return e==null?null:this.groups.get(String(e))||null}getGroupOfSeat(e){let t=this.seatGroup.get(e);return t===void 0?null:this.groups.get(t)}reindex({canonSection:e,categoryOf:t}={}){e&&(this.canonSection=e),t&&(this.categoryOf=t);let n=this._raw;return n?this.setListings(n):this}load(e){return this._raw=Array.from(e||[]),this.setListings(this._raw)}getSection(e){return Id(this.sections.get(e))}getRow(e){return Id(this.rows.get(e))}getSeat(e){return Id(this.seats.get(e))}getCategory(e){return Id(this.categories.get(e))}subset(t){let n=new e({canonSection:this.canonSection,categoryOf:this.categoryOf});return n.setListings(this.listings.filter(t)),n}minPriceMaps(){let e=e=>{let t=new Map;for(let[n,r]of e)t.set(n,r.minPrice);return t};return{sections:e(this.sections),rows:e(this.rows),seats:e(this.seats)}}},Rd=class e{static MAX_QUERY_CELLS=4096;constructor(e){this.cellSize=Math.max(1e-6,e),this.inv=1/this.cellSize,this.cells=new Map,this.coords=[],this.ids=[]}get size(){return this.ids.length}_key(e,t){return(e&65535)<<16|t&65535}_insert(e,t,n,r,i){let a=Math.floor(t*this.inv),o=Math.floor(r*this.inv),s=Math.floor(n*this.inv),c=Math.floor(i*this.inv);for(let t=a;t<=o;t++)for(let n=s;n<=c;n++){let r=this._key(t,n),i=this.cells.get(r);i||this.cells.set(r,i=[]),i.push(e)}}addPoint(e,t,n,r){let i=this.ids.length;this.ids.push(e),this.coords.push(t,n,t,n,r),this._insert(i,t-r,n-r,t+r,n+r)}addSegment(e,t,n,r,i,a){let o=this.ids.length;this.ids.push(e),this.coords.push(t,n,r,i,a),this._insert(o,Math.min(t,r)-a,Math.min(n,i)-a,Math.max(t,r)+a,Math.max(n,i)+a)}_distance(e,t,n){let r=e*5,i=this.coords[r],a=this.coords[r+1],o=this.coords[r+2],s=this.coords[r+3],c=this.coords[r+4],l=o-i,u=s-a,d=l*l+u*u,f=0;d>0&&(f=Math.max(0,Math.min(1,((t-i)*l+(n-a)*u)/d)));let p=i+f*l-t,m=a+f*u-n;return Math.sqrt(p*p+m*m)-c}nearest(t,n,r=0,i=null){if(!Number.isFinite(t)||!Number.isFinite(n)||this.ids.length===0)return null;let a=Number.isFinite(r)?Math.max(0,r):0,o=Math.floor((t-a)*this.inv),s=Math.floor((t+a)*this.inv),c=Math.floor((n-a)*this.inv),l=Math.floor((n+a)*this.inv),u=null,d=1/0,f=e=>{let r=this._distance(e,t,n);if(r>a||r>=d)return;let o=this.ids[e];(!i||i(o))&&(d=r,u=o)};if((s-o+1)*(l-c+1)>e.MAX_QUERY_CELLS)for(let e=0;e<this.ids.length;e++)f(e);else for(let e=o;e<=s;e++)for(let t=c;t<=l;t++){let n=this.cells.get(this._key(e,t));if(n)for(let e=0;e<n.length;e++)f(n[e])}return u===null?null:{id:u,distance:d}}},zd=128,Bd=64,Vd=64,Hd=e=>{if(e==null||typeof e!=`string`&&typeof e!=`number`)return null;let t=String(e).replace(/[\u0000-\u001f\u007f]/g,``).trim();return t?t.slice(0,zd):null},Ud=e=>{if(e==null||e===``)return null;let t=Number(e);return Number.isFinite(t)?t:null},Wd=e=>{if(e==null)return[];let t=Array.isArray(e)?e:[e],n=[];for(let e of t){let t=Hd(e);if(t&&!n.includes(t)&&n.push(t),n.length>=Bd)break}return n},Gd=(e,t)=>{let n=10**t;return Math.round(e*n)/n};function Kd(e){if(!e||typeof e!=`object`)return null;let t=Hd(e.section),n=Hd(e.row),r=Hd(e.seat??(Array.isArray(e.seats)?e.seats[0]:null)),i=Hd(e.groupId);switch(e.type){case`group`:return i?{type:`group`,groupId:i,...t?{section:t}:{},...t&&n?{row:n}:{},...t&&n&&r?{seat:r}:{}}:null;case`seat`:return t&&n&&r?{type:`seat`,section:t,row:n,seat:r}:null;case`row`:return t&&n?{type:`row`,section:t,row:n}:null;case`section`:return t?{type:`section`,section:t}:null;default:return null}}function qd(e){if(!e||typeof e!=`object`)return null;let t=Wd(e.categories),n=Wd(e.sections),r=Math.floor(Ud(e.quantity)??1);r>=1||(r=1),r=Math.min(r,99);let i=!!e.together&&r>1,a=null,o=null;if(Array.isArray(e.price)&&(a=Ud(e.price[0]),o=Ud(e.price[1]),a!==null&&a<0&&(a=null),o!==null&&o<0&&(o=null),a!==null&&o!==null&&a>o&&([a,o]=[o,a])),!t.length&&!n.length&&r===1&&a===null&&o===null)return null;let s={};return t.length&&(s.categories=t),n.length&&(s.sections=n),r>1&&(s.quantity=r),i&&(s.together=!0),(a!==null||o!==null)&&(s.price=[a,o]),s}function Jd(e){if(!e||typeof e!=`object`)return null;let t=Ud(e.x),n=Ud(e.y),r=Ud(e.zoom);return t===null||n===null||r===null||r<=0?null:{x:Gd(t,1),y:Gd(n,1),zoom:Gd(Math.min(r,Vd),2)}}function Yd(e){let t=e&&typeof e==`object`?e:{};return{v:1,selection:Kd(t.selection),filter:qd(t.filter),view:Jd(t.view)}}function Xd(e){return!e||!e.selection&&!e.filter&&!e.view}function Zd(e,{params:t=new URLSearchParams,prefix:n=``,includeView:r=!0}={}){let i=e=>n+e;for(let e of[`sec`,`row`,`seat`,`grp`,`cat`,`fsec`,`qty`,`tog`,`pmin`,`pmax`,`view`])t.delete(i(e));let a=Yd(e),o=a.selection;o&&(o.section&&t.set(i(`sec`),o.section),o.row&&t.set(i(`row`),o.row),o.seat&&t.set(i(`seat`),o.seat),o.type===`group`&&t.set(i(`grp`),o.groupId));let s=a.filter;if(s){for(let e of s.categories||[])t.append(i(`cat`),e);for(let e of s.sections||[])t.append(i(`fsec`),e);s.quantity>1&&t.set(i(`qty`),String(s.quantity)),s.together&&t.set(i(`tog`),`1`),s.price?.[0]!==null&&s.price?.[0]!==void 0&&t.set(i(`pmin`),String(s.price[0])),s.price?.[1]!==null&&s.price?.[1]!==void 0&&t.set(i(`pmax`),String(s.price[1]))}return r&&a.view&&!o&&t.set(i(`view`),`${a.view.x},${a.view.y},${a.view.zoom}`),t}function Qd(e,{prefix:t=``}={}){let n;try{n=typeof e==`string`?new URLSearchParams(e):e}catch{return Yd(null)}if(!n||typeof n.get!=`function`)return Yd(null);let r=e=>t+e,i=e=>n.get(r(e)),a=i(`sec`),o=i(`row`),s=i(`seat`),c=i(`grp`),l=null;c?l={type:`group`,groupId:c,section:a,row:o,seat:s}:a&&o&&s?l={type:`seat`,section:a,row:o,seat:s}:a&&o?l={type:`row`,section:a,row:o}:a&&(l={type:`section`,section:a});let u={categories:n.getAll(r(`cat`)),sections:n.getAll(r(`fsec`)),quantity:i(`qty`),together:i(`tog`)===`1`,price:[i(`pmin`),i(`pmax`)]},d=null,f=i(`view`);if(f){let[e,t,n]=f.split(`,`);d={x:e,y:t,zoom:n}}return Yd({selection:l,filter:u,view:d})}var $d=class e{constructor(e){this.svgGroup=e,this.layers=[],this.hiddenMaterials=new Set,this.drawCallsSaved=0,this._build()}static _isMergeable(e){return e.isMesh&&!e.isInstancedMesh&&e.material&&!Array.isArray(e.material)&&e.material.isMeshBasicMaterial&&!e.material.transparent&&!e.material.map&&e.geometry?.attributes?.position}_build(){let t=this.svgGroup;t.updateMatrixWorld(!0);let n=new Map,r=new Y,i=new Y().copy(t.matrixWorld).invert(),a=[];for(let n of t.children)if(e._isMergeable(n))a.push({mesh:n,parent:null});else if(n.userData?.isSection)for(let t of n.children)e._isMergeable(t)&&a.push({mesh:t,parent:n});for(let e of a){let t=`${e.mesh.renderOrder}`,r=n.get(t);r||n.set(t,r=[]),r.push(e)}for(let[,e]of n){if(e.length<2)continue;let n=0,a=0;for(let t of e){let e=t.mesh.geometry,r=e.attributes.position.count;n+=r,a+=e.index?e.index.count:r}let o=new Float32Array(n*3),s=new Float32Array(n*4),c=new(n>65535?Uint32Array:Uint16Array)(a),l=[],u=0,d=0;for(let t of e){let e=t.mesh.geometry,n=e.attributes.position,a=n.count;r.multiplyMatrices(i,t.mesh.matrixWorld);let s=r.elements;for(let e=0;e<a;e++){let t=n.getX(e),r=n.getY(e),i=n.getZ(e),a=(u+e)*3;o[a]=s[0]*t+s[4]*r+s[8]*i+s[12],o[a+1]=s[1]*t+s[5]*r+s[9]*i+s[13],o[a+2]=s[2]*t+s[6]*r+s[10]*i+s[14]}if(e.index){let t=e.index.array;for(let e=0;e<t.length;e++)c[d+e]=t[e]+u;d+=t.length}else{for(let e=0;e<a;e++)c[d+e]=u+e;d+=a}l.push({mesh:t.mesh,parent:t.parent,start:u,count:a,r:-1,g:-1,b:-1,shown:null}),u+=a}let f=new Cr;f.setAttribute(`position`,new cr(o,3));let p=new cr(s,4);f.setAttribute(`color`,p),f.setIndex(new cr(c,1)),f.computeBoundingSphere(),f.computeBoundingBox();let m=e[0].mesh,h=new qr(f,new Fr({vertexColors:!0,side:2,depthTest:!0,depthWrite:!0,transparent:!1,alphaTest:.5}));h.renderOrder=m.renderOrder,h.matrixAutoUpdate=!1,h.frustumCulled=!1,h.raycast=()=>{},h.userData={isMergedSurfaces:!0},t.add(h);for(let t of e)this.hiddenMaterials.add(t.mesh.material);this.layers.push({mesh:h,items:l,colors:s,attr:p}),this.drawCallsSaved+=e.length-1}for(let e of this.hiddenMaterials)e.visible=!1;this.sync(!0)}sync(e=!1){let t=!1;for(let n of this.layers){let r=!1,i=n.colors;for(let t of n.items){let n=t.mesh,a=n.material,o=n.visible&&(!t.parent||t.parent.visible)&&a.colorWrite!==!1,s=a.color;if(!e&&o===t.shown&&s.r===t.r&&s.g===t.g&&s.b===t.b)continue;t.shown=o,t.r=s.r,t.g=s.g,t.b=s.b;let c=+!!o,l=(t.start+t.count)*4;for(let e=t.start*4;e<l;e+=4)i[e]=s.r,i[e+1]=s.g,i[e+2]=s.b,i[e+3]=c;r=!0}r&&(n.attr.needsUpdate=!0,t=!0)}return t}dispose(){for(let e of this.hiddenMaterials)e.visible=!0;this.hiddenMaterials.clear();for(let e of this.layers)e.mesh.parent?.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose();this.layers=[]}},ef=.21,tf=16,nf=(()=>{let e=[],t=[{radiusFactor:.45,count:8},{radiusFactor:1,count:12}];for(let n=0;n<t.length;n++){let{radiusFactor:r,count:i}=t[n];for(let t=0;t<i;t++){let n=t/i*Math.PI*2;e.push({dx:Math.cos(n)*r,dy:Math.sin(n)*r,distFactor:r})}}return e})(),rf=26214400,af=e=>`€${e}`,of=()=>Object.create(null);function sf(e){return e?typeof e==`string`?[e]:typeof e[Symbol.iterator]==`function`?e:[]:[]}var cf=class e extends EventTarget{static MOBILE_BREAKPOINT=768;static MOBILE_TOUCH_RADIUS_PX=20;static MOBILE_BADGE_SLOP_PX=10;static DOUBLE_CLICK_MS=350;static DOUBLE_TAP_MS=300;static DOUBLE_TAP_SLOP_PX=30;static LONG_PRESS_MS=450;static LONG_PRESS_SLOP_PX=10;static detectIsMobile(t=null){return!!(typeof window<`u`&&(window.matchMedia&&window.matchMedia(`(max-width: ${e.MOBILE_BREAKPOINT}px)`).matches||window.innerWidth>0&&window.innerWidth<=e.MOBILE_BREAKPOINT)||t&&t.clientWidth>0&&t.clientWidth<=e.MOBILE_BREAKPOINT)}constructor(t={}){super();let{container:n,disable3D:r=!1,isMobile:i,maxPixelRatio:a=2,formatPrice:o=af,formatGroupPrice:s=null,maxSvgBytes:c=rf,singlePassRows:l=!0,loadSeats:u=!0,trackpadPan:d=!0,gridPicking:f=!0,mergeSectionMeshes:p=!0,badgeMode:m=`glyph`,shareableState:h=!0,disableAnimations:g=!1,smoothCamera:_=!0,seatHitScale:v=1.1,glideTapSpeed:y=300,frameFilterResults:b=!0,doubleTapZoom:x=!0,longPressPreview:S=!0,zoomToSelection:C=!0}=t;if(!n)throw Error(`A main container element is required.`);this.container=n,this.disable3D=!!r,this._explicitMobileOverride=typeof i==`boolean`?i:null,this.isMobile=this._explicitMobileOverride??e.detectIsMobile(n),this.maxPixelRatio=Math.max(1,Number(a)||2),this.formatPrice=typeof o==`function`?o:af,this.formatGroupPrice=typeof s==`function`?s:e=>`${e.quantity}× ${this.formatPrice(e.price)}`,this.maxSvgBytes=Math.max(1024,Number(c)||rf),this.singlePassRows=l!==!1,this.loadSeats=u!==!1,this.gridPicking=f!==!1,this.seatHitScale=Number.isFinite(Number(v))?Math.min(2,Math.max(.7,Number(v))):1.1,this.frameFilterResults=b!==!1,this.doubleTapZoom=x!==!1,this.longPressPreview=S!==!1,this.zoomToSelection=C!==!1,this._lastFramedFilterKey=``,this._stateViewAppliedAt=0,this._lastTap=null,this._longPress=null,this._previewHover=!1,this.mergeSectionMeshes=p!==!1,this.badgeMode=m===`legacy`?`legacy`:`glyph`,this._mergedSurfaces=null,this.shareableState=h!==!1,this._pendingState=null,this._rowsExpected=!0,this._stateChangeTimeout=null,this._lastStateJson=``,this._lastCameraStateKey=``,this._pickGrids=null,this.showPrices=!0,this.isMapVisible=!0,this.isDisposed=!1,this._isContextLost=!1,this.currentViewMode=`2d`,this.categoryKeyMap=of(),this._resolver=new cd([]),this._rawSections=[],this._rawRows=[],this._rawSeats=[],this._rawSectionPrices=null,this._rawRowPrices=null,this._rawSeatPrices=null,this.sectionsWithListings=new Set,this.rowsWithListings=new Set,this.seatsWithListings=new Set,this._sectionPrices=new Map,this._rowPrices=new Map,this._seatPrices=new Map,this._baseInventoryIndex=null,this._inventoryIndex=null,this._filter=null,this._filterSections=null,this.highlightedSections=null,this._dirtyRowSections=new Set,this._allRowWorldTexts=[],this.scene=new kn,this.scene.background=new X(`#ffffff`);let w=this.container.getBoundingClientRect(),T=Math.max(1,Math.floor(w.width||this.container.clientWidth||1)),E=Math.max(1,Math.floor(w.height||this.container.clientHeight||250));this.camera=new Io(45,T/E,1,1e4),this.renderer=new Du({antialias:!0,powerPreference:`high-performance`}),this.renderer.setPixelRatio(this._getPixelRatio()),this.renderer.autoClear=!1,this.renderer.domElement.style.display=`block`,this.renderer.domElement.style.touchAction=`none`,this._applyIntegerCanvasSize(T,E),this.container.appendChild(this.renderer.domElement),this._cachedCanvasRect=null,this.cameraController=new Nu({container:this.container,domElement:this.renderer.domElement,camera:this.camera,getActiveSection:()=>this._tiltedSection(),onRenderRequest:()=>this.triggerRender(),onControlsChange:()=>{this.needsRaycast=!0,this.triggerRender()}}),this.controls=this.cameraController.controls,this.cameraAnim=this.cameraController.anim,this.defaultCameraPos=this.cameraController.defaultCameraPos,this.defaultControlsTarget=this.cameraController.defaultControlsTarget,this.labelManager=new ku({scene:this.scene,camera:this.camera,renderer:this.renderer,isMobile:this.isMobile}),this.initLabelLayers();let D=this.badgeMode===`legacy`?Au:Mu;this.badgeManager=new D({scene:this.scene,camera:this.camera,renderer:this.renderer,options:{screenSize:{w:60,h:29},verticalOffset:7,oversample:2,renderOrder:60,priority:1,isMobile:this.isMobile}}),this.minimap=new Pu({container:this.container,getCategoryColor:e=>this.getCategoryColor(e),onRenderRequest:()=>this.triggerRender()}),this.isMobile&&this.minimap.setMobileMode(!0),this.currentSvgGroup=null,this.rowsGroup=null,this.sectionGroups=of(),this.sectionRowGroups=of(),this.seatsRegistry=new Map,this.rowsRegistry=new Map,this.svgGeomSize=new q,this.cameraCenterPoint=null,this._activeSection=null,this._activeRow=null,this._selectedSeats=new Map,this._selection=null,this._selectionBatchDepth=0,this._selectionSource=`api`,this._hoveredSeatKeys=new Set,this.hoveredSectionGroup=null,this._hoveredRow=null,this._hoveredSeat=null,this._lastDispatchedHoverKey=null,this.lockedSectionGroup=null,this.isExternalHoverActive=!1,this.raycaster=new ns,this.mouse=new K(-9999,-9999),this._tempSampleNDC=new K,this._pickInvMatrix=new Y,this._pickRay=new Pr,this._pickPlane=new Dr(new q(0,0,1),-.21),this._pickLocal=new q,this._pickEdge=new q,this.lastPointerScreenPos={x:-9999,y:-9999},this._lastPointerType=`mouse`,this.needsRaycast=!1,this.isRenderRequested=!1,this.renderRafId=null,this._lastLODState=`section`,this._lastSeatLabelsSignature=``,this._lastRowLabelsSignature=``,this._lastBadgesSignature=``,this._sectionDetailBadgeCache=new Map,this.pointerDownPos={x:0,y:0},this._pointerDownOnCanvas=!1,this._activePointerCount=0,this._badgePointerDownHit=null,this._visibleSectionsSet=new Set,this._lastYawDragTime=0,this._frustum=new li,this._projScreenMatrix=new Y,this.cameraController.onAnimationStart=e=>this._revealForCameraMove(e),this._tempWorldBox=new Wn,this._tempColor=new X,this._tempCoordVector=new q,this._batchListingTimeout=null,this._rowsAbortController=null,this._lodTransitionTimeout=null,this._panDebounceTimeout=null,this._backgroundSelectTimeout=null,this._lastPanUpdateTime=0,this._loadToken=0,this._boundPointerMove=this._onPointerMove.bind(this),this._boundPointerDown=this._onPointerDown.bind(this),this._boundPointerUp=this._onPointerUp.bind(this),this._boundPointerCancel=this._onPointerCancel.bind(this),this._boundPointerLeave=this._onPointerLeave.bind(this),this._boundScroll=()=>{this._cachedCanvasRect=null},this._boundContextLost=this._onContextLost.bind(this),this._boundContextRestored=this._onContextRestored.bind(this),this.bindEvents(),this.cameraController.setSmoothCamera(_!==!1),this.cameraController.trackpadPan=d!==!1,this._hoveredBadgeKey=null,this.badgeManager&&(this.badgeManager.keyOf=e=>this._badgeKeyOf(e)),Number.isFinite(Number(y))&&Number(y)>=0&&(this.cameraController.glideTapSpeed=Number(y)/1e3),this.cameraController.onMotionInterrupted=()=>{this.isDisposed||(this.badgeManager.update(this._visibleSectionsSet,!1),this.needsRaycast=!0,this.triggerRender())},this.setDisableAnimations(g===!0),this.triggerRender()}setDisableAnimations(e){this.animationsDisabled=!!e,this.cameraController.setAnimationsDisabled(this.animationsDisabled)}_badgeKeyOf(e){if(!e)return``;let t=this._canon(e.sectionName);return e.type===`group`?`group|${e.groupId}`:e.type===`seat`?`seat|${t}|${od(e.row)}|${od(e.seat)}`:e.type===`row`?`row|${t}|${od(e.row)}`:`section|${t}`}_activeBadgeKeys(){let e=this._activeBadgeKeySet||=new Set;e.clear();let t=(e,t,n)=>{let r=this.getSeatGroup(e,t,n);return r?`group|${r.id}`:`seat|${this._canon(e)}|${od(t)}|${od(n)}`},n=this._selection;n&&(n.type===`group`?e.add(`group|${n.groupId}`):n.type===`seat`?e.add(t(n.section,n.row,n.seats?.[0])):n.type===`row`?e.add(`row|${n.section}|${od(n.row)}`):e.add(`section|${n.section}`));let r=this._lockedBadgeTarget;r&&(r.row!==null&&r.row!==void 0&&r.seat!==null&&r.seat!==void 0?e.add(t(r.section,r.row,r.seat)):r.row!==null&&r.row!==void 0?e.add(`row|${r.section}|${od(r.row)}`):e.add(`section|${r.section}`)),this._hoveredBadgeKey&&e.add(this._hoveredBadgeKey),this._hoveredSeat?e.add(t(this._hoveredSeat.section,this._hoveredSeat.row,this._hoveredSeat.seat)):this._hoveredRow&&e.add(`row|${this._canon(this._hoveredRow.section)}|${od(this._hoveredRow.row)}`);let i=this.hoveredSectionGroup?.userData?.sectionName;return i&&e.add(`section|${i}`),e}setZoomToSelection(e){this.isDisposed||(this.zoomToSelection=e!==!1)}_selectionMovesCamera(){return this.zoomToSelection||this.is3DAvailable()}_tiltedSection(){return this.is3DAvailable()&&(this.currentViewMode===`3d`||this.currentViewMode===`seatView`)&&this._viewSection||null}_isSectionViewShowing(e){return!e||this._viewSection!==e?!1:this.is3DAvailable()?this.currentViewMode===`3d`:this.currentViewMode===`2d`}_rowHasSeatListings(e,t){let n=this.rowsRegistry?.get(this._rowKey(e,t)),r=this.sectionRowGroups?.[this._canon(e)]?.userData?.seatInstancedMesh?.userData?.seatMetadata;if(!n?.seatIndices?.length||!r)return!1;for(let t of n.seatIndices){let n=r[t];if(n&&this._seatPrices.has(n.key||this._seatKeyOf(e,n.row,n.seat)))return!0}return!1}_sectionWorldPoints(e){let t=e?.userData?.worldBox;return!t||t.isEmpty?.()?null:[{x:t.min.x,y:t.min.y},{x:t.max.x,y:t.min.y},{x:t.min.x,y:t.max.y},{x:t.max.x,y:t.max.y}]}_selectionExtent(e){let t=this.currentSvgGroup?.matrixWorld;if(!e||!t?.elements)return null;let n=Math.hypot(t.elements[0],t.elements[1])||1,r=(e,n,r=.22)=>new q(e,n,r).applyMatrix4(t);if(e.type===`seat`||e.type===`group`){let t=(e.seats||[]).map(t=>this.seatsRegistry.get(this._seatKeyOf(e.section,e.row,t))).filter(e=>e?.visualCenter);if(t.length===0)return null;let i=1/0,a=1/0,o=-1/0,s=-1/0,c=0,l=0,u=[];for(let e of t){let{x:t,y:n}=e.visualCenter;c+=t,l+=n,t<i&&(i=t),t>o&&(o=t),n<a&&(a=n),n>s&&(s=n),u.push(r(t,n))}let d=(t[0].diameter||2)*n;return{center:r(c/t.length,l/t.length),width:Math.hypot(o-i,s-a)*n+d,unit:d,kind:t.length>1?`group`:`seat`,points:u}}if(e.type===`row`){let t=this.rowsRegistry.get(this._rowKey(e.section,e.row)),i=t?.userData?.box,a=t?.userData?.visualCenter;if(!a)return null;let o=0,s=0,c=[r(a.x,a.y)];if(i&&!i.isEmpty()){let e=i.max.x-i.min.x,t=i.max.y-i.min.y;o=Math.max(e,t)*n,s=Math.min(e,t)*n*.7,c=[r(i.min.x,i.min.y),r(i.max.x,i.min.y),r(i.min.x,i.max.y),r(i.max.x,i.max.y)]}return{center:r(a.x,a.y),width:o,unit:s,kind:`row`,points:c}}return null}_revealPlan(e,t){return!e?.length||!t||this.cameraController.isWorldPointsVisible(e,.08)?null:{kind:`pan`,center:t}}_planCameraMove(e,t=`api`){if(!e?.section||!this.currentSvgGroup)return null;let n=this.findSectionGroup(e.section);if(!n)return null;let r=this.cameraController,i=this.is3DAvailable(),a=this._isSectionViewShowing(n),o=e.type===`section`?null:this._selectionExtent(e),s=o?.points||this._sectionWorldPoints(n),c=o?.center||n.userData?.worldBox?.getCenter?.(new q)||null;return t===`listing`?this.zoomToSelection&&i?{kind:`seatView`,group:n,row:e.row??null,seat:e.seats?.[0]??e.seat??null}:i?a?null:{kind:`section`,group:n}:this.zoomToSelection&&!a?{kind:`section`,group:n}:this._revealPlan(this._sectionWorldPoints(n),c):r.isSeatViewActive?null:this.zoomToSelection?e.type===`section`?{kind:`section`,group:n}:e.type===`row`&&!this._rowHasSeatListings(e.section,e.row)?{kind:`section`,group:n,focus:o?{point:o.center,keepDistance:a}:null}:o?{kind:`frame`,group:n,extent:o,keepZoom:!(i&&!this._tiltedSection())&&o.kind!==`row`&&!r.anim?.active&&r.isZoomNear(r.frameDistance(o))}:i&&!a?{kind:`section`,group:n}:null:i?a?null:{kind:`section`,group:n}:this._revealPlan(s,c)}_applyCameraMove(e){if(!e||this.isDisposed)return!1;let t=this.cameraController,n=()=>{this._updateSectionCoverageAndRowsVisibility(),this._scheduleLODLabelsAndPrices(),this.triggerRender()},r=this.is3DAvailable(),i=e.group?.userData?.sectionName,a=()=>{let t=r?`3d`:`2d`,n=this.currentViewMode!==t||this._viewSection!==e.group;this._prepareSectionView(e.group,i,t),n&&this.emit(`viewModeChange`,{mode:t,section:i})};switch(e.kind){case`section`:return r?this.activate3DView(e.group,e.focus||null):this.focusSectionIn2DView(e.group,e.focus||null),!0;case`seatView`:return this.activateSeatView({sectionName:i,row:e.row,seat:e.seat}),!0;case`markView`:return a(),this.triggerRender(),!1;case`frame`:return a(),t.frameTarget(e.extent.center,{width:e.extent.width,unit:e.extent.unit,kind:e.extent.kind,mode:r?`3d`:`2d`,keepZoom:e.keepZoom},550,n),n(),!0;case`pan`:return t.panTo(e.center.x,e.center.y,450,n),this.triggerRender(),!0;default:return!1}}_moveCameraFor(e,t=`api`){return this._applyCameraMove(this._planCameraMove(e,t))}setTrackpadPan(e){this.cameraController.trackpadPan=e!==!1}setSmoothCamera(e){this.cameraController.setSmoothCamera(e)}get hudScene(){return this.minimap?.hudScene}get hudCamera(){return this.minimap?.hudCamera}get minimapContainerGroup(){return this.minimap?.containerGroup}get minimapVenueGroup(){return this.minimap?.venueGroup}get minimapWidth(){return this.minimap?.width??150}get minimapHeight(){return this.minimap?.height??115}get minimapMarginLeft(){return this.minimap?.marginLeft??20}get minimapMarginTop(){return this.minimap?.marginTop??20}_getPixelRatio(){let e=typeof window<`u`&&window.devicePixelRatio||1;return Math.min(e,this.maxPixelRatio)}_applyIntegerCanvasSize(e,t){let n=Math.max(1,Math.floor(e)),r=Math.max(1,Math.floor(t));this.renderer.setPixelRatio(this._getPixelRatio()),this.renderer.setSize(n,r,!1);let i=this.renderer.domElement.style,a=`${n}px`,o=`${r}px`;i.width=a,i.height=o,i.minWidth=a,i.maxWidth=a,i.minHeight=o,i.maxHeight=o}_isTouchOrMobileInteraction(e=null){return!!(this.isMobile||(e||this._lastPointerType)===`touch`)}_getCanvasRect(){return(!this._cachedCanvasRect||this._cachedCanvasRect.width<=0||this._cachedCanvasRect.height<=0)&&(this._cachedCanvasRect=this.renderer.domElement.getBoundingClientRect()),this._cachedCanvasRect}_canon(e){return e==null?``:this._resolver.resolve(e)??String(e).trim()}_rowKey(e,t){return`${this._canon(e)}:${od(t)}`}_seatKeyOf(e,t,n){return`${this._canon(e)}:${od(t)}:${od(n)}`}_cleanSectionId(e){return this._canon(e)}_invalidateBadgeCache(){this._lastBadgesSignature=``,this._sectionDetailBadgeCache.clear()}_invalidateVisuals(){this._lastBadgesSignature=``,this._lastSeatLabelsSignature=``,this._lastRowLabelsSignature=``,this.applySectionStates(),this._refreshRowLabels(),this._refreshSeatLabels(),this.setPrices(),this.triggerRender()}_highlightSignature(){return this.highlightedSections?Array.from(this.highlightedSections).sort().join(`,`):`__ALL__`}isSectionHighlighted(e){return this.highlightedSections?e==null||e===``?!1:this.highlightedSections.has(this._canon(e)):!0}highlightSections(e=null,{focus:t=!1}={}){if(!e){this.clearHighlight();return}let n=new Set,r=[];for(let t of sf(e)){let e=String(t??``).trim();if(!e)continue;let i=this._canon(e);n.add(i);let a=this.sectionGroups[i];a&&!r.includes(a)&&r.push(a)}if(n.size===0){this.clearHighlight();return}this._setHighlightSet(n),t&&r.length>0&&(r.length===1?this.is3DAvailable()?this.activate3DView(r[0]):this.focusSectionIn2DView(r[0]):this.focusSectionsIn2DView(r))}_setHighlightSet(e){let t=this._highlightSignature();if(this.highlightedSections=e,this._highlightSignature()===t)return;let n=this.hoveredSectionGroup?.userData?.sectionName;if(n&&!this.isSectionHighlighted(n)&&(this.hoveredSectionGroup=null),this._hoveredRow&&!this.isSectionHighlighted(this._hoveredRow.section)){let e=this._hoveredRow;this._hoveredRow=null,this._updateRowHoverState(e,null)}if(this._hoveredSeat&&!this.isSectionHighlighted(this._hoveredSeat.section)){let e=this._hoveredSeat;this._hoveredSeat=null,this._updateSeatHoverState(e,null)}this.needsRaycast=!0,this._invalidateVisuals()}highlightCategory(e,{focus:t=!1}={}){if(!e){this.clearHighlight();return}let n=new Set;for(let t of sf(e)){let e=String(t??``).trim();e&&n.add(e)}if(n.size===0){this.clearHighlight();return}let r=[],i=[];for(let[e,t]of Object.entries(this.sectionGroups))n.has(t.userData?.categoryName)&&(r.push(e),i.push(t));if(r.length===0){this.clearHighlight();return}this.highlightSections(r,{focus:!1}),t&&i.length>0&&this.focusSectionsIn2DView(i)}clearHighlight({resetCamera:e=!1}={}){this._setHighlightSet(this._filterSections?new Set(this._filterSections):null),e&&this.resetTo2DTopView()}_hasRowListing(e,t){return this.rowsWithListings.size!==0&&this.rowsWithListings.has(this._rowKey(e,t))}_hasSeatListing(e,t,n){return this.seatsWithListings.size!==0&&this.seatsWithListings.has(this._seatKeyOf(e,t,n))}_getSectionPrice(e){return this._sectionPrices.get(this._canon(e))??null}_getRowPrice(e,t){return this._rowPrices.get(this._rowKey(e,t))??null}_getSeatPrice(e,t,n){return this._seatPrices.get(this._seatKeyOf(e,t,n))??null}findSectionGroup(e){if(e==null||e===``)return null;let t=this._resolver.resolve(e);return t&&this.sectionGroups[t]||null}setAllowMultipleSeatSelection(){e._warnedMultiSelect||(e._warnedMultiSelect=!0,console.warn(`[VenueMapEngine] setAllowMultipleSeatSelection is deprecated and has no effect; seats sold together are selected as one group.`))}isTransitioning(){return!!this.cameraController?.isTransitioning()}isSeatViewActive(){return!!this.cameraController?.isSeatViewActive}_applyMobileMode(e){let t=!!e;if(this.isMobile!==t){if(this.isMobile=t,this.labelManager?.setMobileMode(t),this.badgeManager?.setMobileMode(t),this.minimap?.setMobileMode(t),t&&(this.currentViewMode===`3d`||this.currentViewMode===`seatView`||this.cameraController?.isSeatViewActive)){this.cameraController&&(this.cameraController.isSeatViewActive=!1,this.cameraController._savedSectionGroup=null),this.resetTo2DTopView();return}this.triggerRender()}}setMobileMode(e){this.isDisposed||(this._explicitMobileOverride=typeof e==`boolean`?e:!!e,this._applyMobileMode(this._explicitMobileOverride))}setMinimapMobileMode(e){this.setMobileMode(e)}getSelection(){return this._selection}_selectionKey(e){return e?[e.type,e.section,e.row?od(e.row):``,e.groupId||``,(e.seats||[]).map(od).join(`,`)].join(`|`):``}_batchSelection(e,t=`api`){let n=this._selection,r=this._selectionBatchDepth===0;r&&(this._selectionSource=t),this._selectionBatchDepth++;try{return e()}finally{this._selectionBatchDepth--,r&&(this._emitSelectionChange(n,this._selection,this._selectionSource),this._selectionSource=`api`)}}_emitSelectionChange(e,t,n){this._selectionKey(e)!==this._selectionKey(t)&&(n!==`state`&&n!==`load`&&n!==`filter`&&this._pendingState?.selection&&(this._pendingState={...this._pendingState,selection:null}),this.emit(`selectionChange`,{selection:t,previous:e,source:n}),this._scheduleStateChange())}_commitSelection(e){let t=e?Object.freeze({...e,...e.seats?{seats:Object.freeze([...e.seats])}:{}}):null,n=this._selection;this._selectionKey(n)!==this._selectionKey(t)&&(this._selection=t,this._selectionBatchDepth===0&&this._emitSelectionChange(n,t,this._selectionSource))}get activeSection(){return this._activeSection}set activeSection(e){let t=this._activeSection;if(t===e)return;this._activeSection=e,e||(this._viewSection=null);let n=t?.userData?.sectionName,r=e?.userData?.sectionName;e?this._selection?.section!==r&&(this.activeRow=null,this._replaceSelectedSeats(new Map),this._commitSelection({type:`section`,section:r})):(this.activeRow=null,this._replaceSelectedSeats(new Map),this._commitSelection(null)),t&&this._updateSectionColor(t),e&&this._updateSectionColor(e),this.rowsGroup&&(n&&this.applyRowStates(n),r&&this.applyRowStates(r)),this._scheduleLODLabelsAndPrices(),this.emit(`activeSectionChange`,{activeSection:r||null}),this.triggerRender()}get activeRow(){return this._activeRow}set activeRow(e){let t=this._activeRow,n=e?{...e,section:this._canon(e.section),row:String(e.row)}:null;if(!this._isSameElement(t,n)){if(this._activeRow=n,n)this._replaceSelectedSeats(new Map),this._commitSelection({type:`row`,section:n.section,row:n.row});else if(this._selection?.type===`row`){let e=this._activeSection?.userData?.sectionName;this._commitSelection(e?{type:`section`,section:e}:null)}if(this.rowsGroup){let e=new Set([t?.section,n?.section,this.activeSection?.userData?.sectionName].filter(Boolean));for(let t of e)this.applyRowStates(t)}this.emit(`activeRowChange`,{activeRow:this._activeRow}),this.triggerRender()}}get selectedSeats(){return Array.from(this._selectedSeats.values())}get activeSeat(){let e=this.selectedSeats;return e.length>0?e[e.length-1]:null}set activeSeat(e){e?this.selectSeat(e.section,e.row,e.seat,{focus:!1}):this.clearSelectedSeats()}_getSeatKey(e){return e?.section?this._seatKeyOf(e.section,e.row,e.seat):``}_normalizeSeatInfo(e){return{section:this._canon(e.section),row:String(e.row),seat:String(e.seat)}}isSeatSelected(e){return!!(e&&this._selectedSeats.has(this._getSeatKey(e)))}getSeatGroup(e,t,n){return this._inventoryIndex?.getGroupOfSeat(this._seatKeyOf(e,t,n))||null}getGroup(e){return this._inventoryIndex?.getGroup(e)||null}_repaintSeatKey(e){let t=this.seatsRegistry.get(e);if(!t?.instancedMesh)return null;let n=t.section,r=this.isSectionHighlighted(n),i=this._seatHex(this._sectionCategoryKey(n),r,this.seatsWithListings.has(e),r&&this._selectedSeats.has(e),r&&this._hoveredSeatKeys.has(e));return this._tempColor.setHex(i),t.instancedMesh.setColorAt(t.instanceIndex,this._tempColor),t.instancedMesh.instanceColor&&(t.instancedMesh.instanceColor.needsUpdate=!0),n}_repaintSeatKeys(e){let t=new Set;for(let n of e){let e=this._repaintSeatKey(n);e&&t.add(e)}for(let e of t)this._repaintGroupLinks(e)}_replaceSelectedSeats(e){let t=Array.from(this._selectedSeats.keys());if(!(t.length!==e.size||t.some(t=>!e.has(t))))return!1;let n=this._selectedSeats.size>0;this._selectedSeats=new Map(e),this._repaintSeatKeys([...t,...e.keys()]);let r=this.activeSection?.userData?.sectionName;return n!==this._selectedSeats.size>0&&this.rowsGroup&&r&&this.applyRowStates(r),this.activeSection&&this._updateSectionColor(this.activeSection),this.emit(`activeSeatChange`,{activeSeat:this.activeSeat}),this.emit(`selectedSeatsChange`,{selectedSeats:this.selectedSeats}),this.triggerRender(),!0}_setHoveredSeatKeys(e){let t=new Set(e),n=this._hoveredSeatKeys;n.size===t.size&&[...n].every(e=>t.has(e))||(this._hoveredSeatKeys=t,this._repaintSeatKeys([...n,...t]),this.triggerRender())}clearSelectedSeats(){this._selectedSeats.size!==0&&this._batchSelection(()=>{this._replaceSelectedSeats(new Map);let e=this._activeSection?.userData?.sectionName;(this._selection?.type===`seat`||this._selection?.type===`group`)&&this._commitSelection(e?{type:`section`,section:e}:null)})}_seatSelectionFor(e,t,n){let r=this._canon(e),i=this._inventoryIndex?.getGroupOfSeat(this._seatKeyOf(r,t,n));return i?this._groupSelection(i):{type:`seat`,section:r,row:String(t),seats:[String(n)]}}_groupSelection(e){return{type:`group`,section:e.section,row:e.row,seats:[...e.seats],groupId:e.id}}_applySeatSelection(e){let t=this.sectionGroups[e.section];if(!t||!this.isSectionHighlighted(e.section))return!1;this.activeSection=t,this.updateMinimapHighlight(e.section),this.activeRow=null;let n=new Map;for(let t of e.seats){let r={section:e.section,row:String(e.row),seat:String(t)};n.set(this._getSeatKey(r),r)}return this._replaceSelectedSeats(n),this._commitSelection(e),!0}_seatSelectionCenter(e){let t=0,n=0,r=0;for(let i of e.seats||[]){let a=this.seatsRegistry.get(this._seatKeyOf(e.section,e.row,i));if(!a?.visualCenter)continue;let o=a.visualCenter.clone().applyMatrix4(this.currentSvgGroup.matrixWorld);t+=o.x,n+=o.y,r++}return r>0?new q(t/r,n/r,0):null}toggleSeatSelection(e){e?.section&&(this.isSeatSelected(e)?this.clearSelectedSeats():this.selectSeat(e.section,e.row,e.seat,{focus:!1}))}_isSameElement(e,t){if(!e&&!t)return!0;if(!e||!t||this._canon(e.section)!==this._canon(t.section)||od(e.row)!==od(t.row))return!1;let n=e.seat!==void 0&&e.seat!==null,r=t.seat!==void 0&&t.seat!==null;return n||r?n&&r&&od(e.seat)===od(t.seat):!0}_seatHex(e,t,n,r,i){if(!t)return Ku.mutedSeatFill;if(i&&!r){let t=id(e)?Wu[e]:Wu[Gu[0]],n=t?.seatHover?.fill??t?.deep?.fill;if(n!=null)return n}if(r||i){let t=ad(e,{hasListing:!0,isHighlighted:!0,isSelected:r,isHovered:!r&&i,entityType:`seat`});return t.fill??t.stroke}if(n){let t=ad(e,{hasListing:!0,isHighlighted:!0,entityType:`seat`});return t.fill??(Ju[e]||t.stroke)}return qu[e]||qu[Gu[0]]||15857145}_rowHex(e,t,n,r,i,a){if(!t||r||i){let n=ad(e,{hasListing:t,isHighlighted:t,isSelected:t&&r,isHovered:t&&!r&&i,entityType:`row`});return n.fill??n.stroke??14870768}let o=ad(e,{hasListing:n,isHighlighted:!0,isSectionSelected:a,entityType:`row`});return o.fill??o.stroke??14870768}_sectionCategoryKey(e){return this.getCategoryKey(this.sectionGroups[e]?.userData?.categoryName)}_isSectionSelectedOnly(e){let t=this.activeSection?.userData?.sectionName;return!(!t||this._activeRow||this._selectedSeats.size!==0||t!==e)}_resolveSeatOrRowHex(e,t,n,r,{isSelected:i=!1,isHovered:a=!1}={}){let o=this._canon(t),s=this.isSectionHighlighted(o),c=this._sectionCategoryKey(o);return e===`seat`?this._seatHex(c,s,this._hasSeatListing(o,n,r),i,a):this._rowHex(c,s,this._hasRowListing(o,n),i,a,this._isSectionSelectedOnly(o))}_paintRowVertices(e,t,n){if(!e||!t||t.vertexCount<=0)return!1;this._tempColor.setHex(n);let r=e.array,i=t.vertexStart+t.vertexCount;for(let e=t.vertexStart;e<i;e++)r[e*3]=this._tempColor.r,r[e*3+1]=this._tempColor.g,r[e*3+2]=this._tempColor.b;return!0}_isActiveRow(e,t){return!!(this._activeRow&&this._rowKey(this._activeRow.section,this._activeRow.row)===this._rowKey(e,t))}_applyElementStyle(e,t,n){if(!this.rowsGroup||!e?.section)return;let r=this._canon(e.section);if(t===`seat`)this._repaintSeatKeys([this._seatKeyOf(r,e.row,e.seat)]);else if(t===`row`){let t=this.rowsRegistry.get(this._rowKey(r,e.row)),i=this.sectionRowGroups[r]?.userData?.mergedLineMesh?.geometry?.getAttribute(`color`),a=this._resolveSeatOrRowHex(`row`,r,e.row,null,{isSelected:n});this._paintRowVertices(i,t,a)&&(i.needsUpdate=!0)}}_refreshRowLabels(){if(!this._allRowWorldTexts||this._allRowWorldTexts.length===0)return;let e=this._highlightSignature();if(this._lastRowLabelsSignature===e)return;if(this._lastRowLabelsSignature=e,!this.highlightedSections){this.labelManager.setLayerData(`rowTexts`,this._allRowWorldTexts);return}let t=this._allRowWorldTexts.filter(e=>this.isSectionHighlighted(e.sectionName));this.labelManager.setLayerData(`rowTexts`,t)}_refreshSeatLabels(){if(!this.rowsGroup?.visible){this._lastSeatLabelsSignature!==`__EMPTY__`&&(this._lastSeatLabelsSignature=`__EMPTY__`,this.labelManager.setLayerData(`seatTexts`,[]));return}let e=(this._visibleSectionsSet.size>0?Array.from(this._visibleSectionsSet):this.activeSection?.userData?.sectionName?[this.activeSection.userData.sectionName]:[]).filter(e=>this.isSectionHighlighted(e));if(e.length===0){this._lastSeatLabelsSignature!==`__EMPTY__`&&(this._lastSeatLabelsSignature=`__EMPTY__`,this.labelManager.setLayerData(`seatTexts`,[]));return}let t=e.sort().join(`,`);if(this._lastSeatLabelsSignature===t)return;this._lastSeatLabelsSignature=t;let n=[],r=this.currentSvgGroup?.matrixWorld||null;for(let t=0;t<e.length;t++){let i=e[t],a=this.sectionRowGroups[i]?.userData?.seatInstancedMesh;if(!a?.visible||!a.userData?.seatMetadata)continue;let o=a.userData.seatMetadata;for(let e=0;e<o.length;e++){let t=o[e],a=t.key||this._seatKeyOf(i,t.row,t.seat),s=t.rowKey||this._rowKey(i,t.row);if((this.seatsWithListings.has(a)||this.rowsWithListings.has(s))&&t.visualCenter){t.worldPos||(t.worldPos=t.visualCenter.clone(),r&&t.worldPos.applyMatrix4(r)),t.labelIndex=n.length;let e=t.effectiveLabelWorldHeight||(t.diameter||2.4)*.75;n.push({text:String(t.seat),type:`seat`,sectionName:i,row:t.row,seat:String(t.seat),textColor:`#0F172A`,x:t.worldPos.x,y:t.worldPos.y,z:.24,worldWidth:e,worldHeight:e,rotation:0})}else t.labelIndex=-1}}this.labelManager.setLayerData(`seatTexts`,n)}initLabelLayers(){this.labelManager.registerLayer(`rowTexts`,{isWorldSprite:!0,renderOrder:40,enableCollision:!1,minZoomDistance:0,maxZoomDistance:8e3,canvasFontPx:32,generateMipmaps:!0,minFilter:c,magFilter:o}),this.labelManager.registerLayer(`seatTexts`,{isWorldSprite:!0,renderOrder:45,enableCollision:!1,minZoomDistance:0,maxZoomDistance:3500,canvasFontPx:44,generateMipmaps:!0,minFilter:c,magFilter:o}),this.labelManager.registerLayer(`svgTexts`,{isWorldSprite:!0,renderOrder:50,enableCollision:!1,minZoomDistance:0,maxZoomDistance:8e3,enableZoomDamping:!0,maxScreenScale:1,canvasFontPx:32,generateMipmaps:!1,minFilter:o,magFilter:o})}is3DAvailable(){return!this.disable3D&&!this.isMobile&&!!this.cameraCenterPoint}set3dDisabled(e){this.isDisposed||(this.disable3D=!!e,!this.is3DAvailable()&&(this.currentViewMode===`3d`||this.currentViewMode===`seatView`)&&this.resetTo2DTopView())}setCameraYaw(e){!this.isDisposed&&this._tiltedSection()&&(this._lastYawDragTime=performance.now(),this.cameraController.isSeatViewActive?(this.cameraController.setSeatViewYaw(e),this.triggerRender()):this.cameraController.rotateCameraAroundSection(e),this._scheduleTrailingPanUpdate())}refocusFieldCenter(e=600){!this.isDisposed&&this.is3DAvailable()&&(this.cameraController.refocusFieldCenter(e,()=>{this._updateSectionCoverageAndRowsVisibility(),this._scheduleLODLabelsAndPrices(),this.triggerRender()}),this.triggerRender())}emit(e,t={}){this.dispatchEvent(new CustomEvent(e,{detail:t}))}on(e,t){this.addEventListener(e,t)}off(e,t){this.removeEventListener(e,t)}_emitError(e,t,n={}){let r=Error(t);return r.code=e,this.emit(`error`,{code:e,message:t,error:r,...n}),r}getCategories(){let e=new Set;for(let t of Object.values(this.sectionGroups)){let n=t.userData?.categoryName;n&&e.add(n)}return[...e].sort((e,t)=>e.localeCompare(t))}setCategoryColors(e={}){let t=e&&typeof e==`object`?Object.entries(e):[],n=new Set(this.getCategories());for(let[e]of t)n.add(String(e));let r=of(),i=kd(n);for(let e of n){let t=`pastel:${e}`;rd(t,Dd(i.get(e))),r[e]=t}for(let[e,n]of t){if(typeof n!=`string`&&typeof n!=`number`)continue;if(typeof n==`string`&&!n.startsWith(`#`)&&id(n)){r[e]=n;continue}let t=Od(n);if(!t){console.warn(`[VenueMapEngine] setCategoryColors: "${n}" for "${e}" is not a palette key or hex color; using the generated pastel.`);continue}let i=`custom:${e}`;rd(i,t),r[e]=i}this.categoryKeyMap=r,this.applySectionStates(),this.minimap&&this.setupMinimap(),this._invalidateVisuals?.(),this.emit(`categoryColorsChange`,{colors:this.getAllCategoryColors()})}getLegend(){let e=new Set(this.getCategories());for(let t of Object.keys(this.categoryKeyMap))e.add(t);if(this._baseInventoryIndex)for(let t of this._baseInventoryIndex.categories.keys())e.add(t);return[...e].sort((e,t)=>e.localeCompare(t)).map(e=>{let t=this.getCategoryColor(e),n=this._inventoryIndex?.getCategory(e)||null,r=this._baseInventoryIndex?.getCategory(e)||null;return{category:e,color:t,cssColor:Ad(t),count:n?.count??0,totalCount:r?.count??0,minPrice:n?.minPrice??null,maxTogether:n?.maxTogether??0}})}getCategoryKey(e){if(e!=null&&Object.hasOwn(this.categoryKeyMap,e)){let t=this.categoryKeyMap[e];if(id(t))return t}return Gu[0]}getCategoryColor(e){return(Wu[this.getCategoryKey(e)]||Wu[Gu[0]]).available?.fill??11904232}getAllCategoryColors(){let e={};for(let t of Object.keys(this.categoryKeyMap))e[t]=this.getCategoryColor(t);return e}initMinimapHUD(){this.minimap.initHUD()}updateHUDPosition(){this.minimap.updatePosition()}setupMinimap(){this.minimap.setup(this.sectionGroups)}updateMinimapHighlight(e){this.minimap.updateHighlight(e?this._canon(e):null,this.sectionGroups)}calculateBestFitZoom(e){return this.cameraController.calculateBestFitZoom(e)}resize(){if(this.isDisposed)return;let t=this.container.getBoundingClientRect(),n=Math.floor(t.width||this.container.clientWidth||0),r=Math.floor(t.height||this.container.clientHeight||0);if(n<=0||r<=0)return;let i=n,a=r;this._explicitMobileOverride===null&&this._applyMobileMode(e.detectIsMobile(this.container)),this._applyIntegerCanvasSize(i,a),this._cachedCanvasRect=this.renderer.domElement.getBoundingClientRect(),this.cameraController.resize(this.svgGeomSize,!!this._tiltedSection(),i,a),this.minimap.resize(i,a),this.labelManager.handleResize(),this.badgeManager.handleResize(),this.needsRaycast=!0,this.triggerRender()}getScreenCoordinates(e,t,n=0){this._tempCoordVector.set(e,t,n).project(this.camera);let r=this._getCanvasRect(),i=(this._tempCoordVector.x+1)*r.width/2,a=(-this._tempCoordVector.y+1)*r.height/2;return{x:i,y:a,clientX:r.left+i,clientY:r.top+a}}_hoverDetailLevel(){return!!(this.rowsGroup?.visible||this.cameraController.isSeatViewActive)}_dispatchHoverEvent(e){let t=this._hoverDetailLevel(),n=e?`${e.type}:${e.section||``}:${e.row||``}:${e.seat||``}:${e.groupId||``}:${+!!t}`:null;if(this._lastHoverData=e||null,this._lastDispatchedHoverKey===n)return;this._lastDispatchedHoverKey=n;let r=this._getCanvasRect(),i=this.lastPointerScreenPos.x,a=this.lastPointerScreenPos.y,o=null,s=null;e?.type===`seat`&&e.section?s=this.getSeatGroup(e.section,e.row,e.seat):e?.type===`group`&&(s=this.getGroup(e.groupId)),e?.section&&(o=e.type===`seat`?this.getInventory(e.section,e.row,e.seat):e.type===`row`?this.getInventory(e.section,e.row):this.getInventory(e.section)),this.emit(`hover`,{...e||{type:null},preview:!!(this._previewHover&&e),detailLevel:t,stats:o,group:s,clientX:i,clientY:a,offsetX:i-r.left,offsetY:a-r.top})}_updateSeatHoverState(e,t){let n=[];if(t&&this.isSectionHighlighted(t.section)){let e=this._getSeatKey(t),r=this._inventoryIndex?.getGroupOfSeat(e);n=r?r.seatKeys:[e]}this._setHoveredSeatKeys(n)}_updateRowHoverState(e,t){if(this._isSameElement(e,t))return;let n=(e,t)=>{if(!e)return;let n=this._canon(e.section),r=this.rowsRegistry.get(this._rowKey(n,e.row)),i=this.sectionRowGroups[n]?.userData?.mergedLineMesh?.geometry?.getAttribute(`color`);if(!i||!r)return;let a=this._isActiveRow(n,e.row),o=this._resolveSeatOrRowHex(`row`,n,e.row,null,{isSelected:a,isHovered:t&&!a});this._paintRowVertices(i,r,o)&&(i.needsUpdate=!0)};n(e,!1),n(t,!0)}_disposeGroupLinks(){for(let e of Object.values(this.sectionRowGroups)){let t=e?.userData?.groupLinkMesh;t&&(e.remove(t),t.geometry?.dispose(),t.material?.dispose(),delete e.userData.groupLinkMesh)}}_rebuildGroupLinks(){if(this._disposeGroupLinks(),!this.rowsGroup||!this._inventoryIndex||this._inventoryIndex.groups.size===0)return;let e=new Map,t=0,n=0;for(let r of this._inventoryIndex.groups.values()){let i=[];for(let e of r.seatKeys){let t=this.seatsRegistry.get(e);t?.visualCenter&&i.push({key:e,rec:t})}if(i.length<r.seatKeys.length&&t++,!(i.length<2)){i.sort((e,t)=>e.rec.instanceIndex-t.rec.instanceIndex);for(let t=0;t<i.length-1;t++){let a=i[t],o=i[t+1];if(o.rec.instanceIndex-a.rec.instanceIndex!==1){n++;continue}let s=e.get(r.section);s||e.set(r.section,s=[]),s.push({a,b:o,groupId:r.id})}}}let r=new Y,i=new q;for(let[t,n]of e){let e=this.sectionRowGroups[t];if(!e||n.length===0)continue;let a=new ai(new Va(1,1),new Fr({side:2,depthTest:!0,depthWrite:!0,transparent:!1}),n.length);for(let e=0;e<n.length;e++){let t=n[e].a.rec.visualCenter,o=n[e].b.rec.visualCenter,s=o.x-t.x,c=o.y-t.y,l=Math.hypot(s,c),u=(n[e].a.rec.diameter||1.4)*.45;r.makeRotationZ(Math.atan2(c,s)),r.scale(i.set(l,u,1)),r.setPosition((t.x+o.x)/2,(t.y+o.y)/2,0),a.setMatrixAt(e,r)}a.instanceMatrix.needsUpdate=!0,a.position.z=.21,a.renderOrder=31,a.matrixAutoUpdate=!1,a.updateMatrix(),a.userData={isGroupLinks:!0,section:t,links:n.map(e=>({keyA:e.a.key,keyB:e.b.key,groupId:e.groupId}))},e.add(a),e.userData.groupLinkMesh=a,this._repaintGroupLinks(t)}(t>0||n>0)&&console.warn(`[VenueMapEngine] Seat groups: ${t} group(s) reference seats missing from the map, ${n} gap(s) between non-adjacent seats.`),this.triggerRender()}_repaintGroupLinks(e){let t=this.sectionRowGroups[e]?.userData?.groupLinkMesh;if(!t)return;let n=t.userData.links,r=this.isSectionHighlighted(e),i=this._sectionCategoryKey(e);for(let e=0;e<n.length;e++){let a=n[e].keyA,o=this._seatHex(i,r,!0,r&&this._selectedSeats.has(a),r&&this._hoveredSeatKeys.has(a));this._tempColor.setHex(o),t.setColorAt(e,this._tempColor)}t.instanceColor&&(t.instanceColor.needsUpdate=!0)}applyRowStates(e=null){if(!this.sectionRowGroups)return;let t=e?[this._canon(e)]:Object.keys(this.sectionRowGroups),n=this._activeRow?this._rowKey(this._activeRow.section,this._activeRow.row):null,r=this._hoveredRow?this._rowKey(this._hoveredRow.section,this._hoveredRow.row):null;for(let e=0;e<t.length;e++){let i=t[e],a=this.sectionRowGroups[i];if(!a)continue;this._dirtyRowSections.delete(i);let o=this.isSectionHighlighted(i),s=this._sectionCategoryKey(i),c=this._isSectionSelectedOnly(i),l=a.userData?.mergedLineMesh,u=l?.geometry?.getAttribute(`color`);if(u){let e=!1,t=l.userData.rowRanges||[];for(let a=0;a<t.length;a++){let l=t[a],d=l.key||=`${i}:${od(l.row)}`,f=this.rowsRegistry.get(d),p=this._rowHex(s,o,this.rowsWithListings.has(d),o&&d===n,o&&d===r,c);this._paintRowVertices(u,f,p)&&(e=!0)}e&&(u.needsUpdate=!0)}let d=a.userData?.seatInstancedMesh,f=d?.userData?.seatMetadata;if(d&&f){for(let e=0;e<f.length;e++){let t=f[e],n=t.key||=`${i}:${od(t.row)}:${od(t.seat)}`,r=this.seatsWithListings.has(n);t.hasActiveListing=r,t.isInteractive=o&&r;let a=this._seatHex(s,o,r,o&&this._selectedSeats.has(n),o&&this._hoveredSeatKeys.has(n));t.baseColorHex=a,this._tempColor.setHex(a),d.setColorAt(e,this._tempColor)}d.instanceColor&&(d.instanceColor.needsUpdate=!0)}this._repaintGroupLinks(i)}}_updateSectionColor(e){let t=e?.userData?.sectionName;if(!t)return;let n=this.getCategoryKey(e.userData?.categoryName),r=this.isSectionHighlighted(t),i=r&&e===this.activeSection&&!this.activeRow&&this._selectedSeats.size===0,a=r&&e===this.hoveredSectionGroup,o=ad(n,{hasListing:i||a||this.sectionsWithListings.has(t),isHighlighted:r,isSelected:i,isHovered:a,entityType:`section`});for(let t=0;t<e.children.length;t++){let n=e.children[t];n.isMesh&&n.userData?.section&&n.material&&n.material.color.setHex(o.fill)}}applySectionStates(){for(let e of Object.values(this.sectionGroups))this._updateSectionColor(e);if(this.sectionRowGroups)for(let e of Object.keys(this.sectionRowGroups))this._dirtyRowSections.add(e);if(this.rowsGroup?.visible){if(this._visibleSectionsSet.size>0)for(let e of this._visibleSectionsSet)this.applyRowStates(e);else this.applyRowStates()}this.triggerRender()}_deferListingUpdate(){this._lastSeatLabelsSignature=``,this._invalidateBadgeCache(),!this._batchListingTimeout&&(this._batchListingTimeout=setTimeout(()=>{if(this._batchListingTimeout=null,!this.isDisposed){if(this._refreshSeatLabels(),this.sectionRowGroups)for(let e of Object.keys(this.sectionRowGroups))this._dirtyRowSections.add(e);if(this.rowsGroup?.visible){if(this._visibleSectionsSet.size>0)for(let e of this._visibleSectionsSet)this.applyRowStates(e);else this.applyRowStates()}this.triggerRender()}},16))}_normalizeSectionSet(e){let t=new Set;for(let n of e){let e=String(n??``).trim();e&&t.add(this._canon(e))}return t}_normalizeKeySet(e,t){let n=new Set;for(let r of e){let e=ld(r,t);if(!e)continue;let i=this._canon(e.section);n.add([i,...e.ids.map(od)].join(`:`))}return n}_normalizePriceMap(e,t){let n=new Map;if(!e)return n;let r=e instanceof Map?e.entries():Object.entries(e);for(let[e,i]of r){let r=ud(i);if(r===null)continue;let a;if(t===0)a=this._canon(e);else{let n=ld(e,t);if(!n)continue;a=[this._canon(n.section),...n.ids.map(od)].join(`:`)}if(!a)continue;let o=n.get(a);(o===void 0||r<o)&&n.set(a,r)}return n}_renormalizeInventory(){if(this._baseInventoryIndex){this._baseInventoryIndex.reindex({canonSection:e=>this._canon(e),categoryOf:e=>this.sectionGroups[e]?.userData?.categoryName||null}),this._refreshFilterState({emit:!1});return}this.sectionsWithListings=this._normalizeSectionSet(this._rawSections),this.rowsWithListings=this._normalizeKeySet(this._rawRows,1),this.seatsWithListings=this._normalizeKeySet(this._rawSeats,2),this._sectionPrices=this._normalizePriceMap(this._rawSectionPrices,0),this._rowPrices=this._normalizePriceMap(this._rawRowPrices,1),this._seatPrices=this._normalizePriceMap(this._rawSeatPrices,2),this._invalidateBadgeCache()}setInventory(e){if(this.isDisposed)return{listings:0,rejected:0};this._baseInventoryIndex||=new Ld({canonSection:e=>this._canon(e),categoryOf:e=>this.sectionGroups[e]?.userData?.categoryName||null});let t=this._baseInventoryIndex;t.load(sf(e));let n={listings:t.listings.length,rejected:t.rejected};return n.rejected>0&&console.warn(`[VenueMapEngine] setInventory: ${n.rejected} listing(s) ignored (missing or invalid price).`),this.emit(`inventoryChange`,{...n,sections:t.sections.size,rows:t.rows.size,seats:t.seats.size}),this._refreshFilterState({emit:!!this._filter}),this._retryPendingState(),n}setFilter(e,{frame:t=!0}={}){return this.isDisposed?this.getFilterResult():(this._filter=jd(e,e=>this._canon(e)),this._refreshFilterState({emit:!0}),this._filter?t&&this.frameFilterResults&&this._frameFilterResult():this._lastFramedFilterKey=``,this.getFilterResult())}_frameFilterResult(){let e=this._filterSections;if(!e||e.size===0||!this.currentSvgGroup||this._selection||this.activeSection||this.lockedSectionGroup||this.cameraController.isSeatViewActive||this._stateViewAppliedAt&&performance.now()-this._stateViewAppliedAt<3e3)return;let t=Object.keys(this.sectionGroups).length;if(t===0||e.size>=t*.85)return;let n=Array.from(e).sort().join(`|`);if(n===this._lastFramedFilterKey)return;this._lastFramedFilterKey=n;let r=1/0,i=1/0,a=-1/0,o=-1/0;for(let t of e){let e=this.sectionGroups[t]?.userData?.worldBox;e&&(e.min.x<r&&(r=e.min.x),e.max.x>a&&(a=e.max.x),e.min.y<i&&(i=e.min.y),e.max.y>o&&(o=e.max.y))}if(!(a>r&&o>i))return;let s=this.defaultCameraPos.z||1200,c=Math.min(s,this.cameraController._getFitDistanceForBounds(a-r,o-i,this.camera.aspect||1,.8,60));this.cameraController.flyTo2DView((r+a)/2,(i+o)/2,c,600,()=>{this._updateSectionCoverageAndRowsVisibility(),this.setPrices(),this.triggerRender()}),this.triggerRender()}clearFilter(){return this.setFilter(null)}getFilter(){return Nd(this._filter)}getFilterResult(){let e=this._inventoryIndex,t=this._filterSections?[...this._filterSections]:Object.keys(this.sectionGroups);if(!e)return{sections:t,listingIds:[],count:0,tickets:0,minPrice:null,groups:0};let n=0,r=null;for(let t of e.listings)n+=t.quantity,(r===null||t.price<r)&&(r=t.price);return{sections:t,listingIds:e.listings.map(e=>e.id),count:e.listings.length,tickets:n,minPrice:r,groups:e.groups.size}}_sectionsOfCategory(e){let t=[];for(let[n,r]of Object.entries(this.sectionGroups))r.userData?.categoryName===e&&t.push(n);return t}_refreshFilterState({emit:e=!0}={}){let t=this._filter,n=this._baseInventoryIndex;if(n&&(this._inventoryIndex=t?n.subset(e=>Md(e,t)):n,this._applyInventoryIndex()),!t)this._filterSections=null;else if(n){let e=new Set(this._inventoryIndex.sections.keys());for(let n of this._inventoryIndex.listings)if(!n.section&&n.category)for(let r of this._sectionsOfCategory(n.category))(!t.sections||t.sections.has(r))&&e.add(r);this._filterSections=e}else{let e=new Set;for(let[n,r]of Object.entries(this.sectionGroups))(!t.categories||t.categories.has(r.userData?.categoryName))&&(!t.sections||t.sections.has(n))&&e.add(n);this._filterSections=e}this._setHighlightSet(this._filterSections?new Set(this._filterSections):null),this._rebuildGroupLinks(),this._dropFilteredSelection(),this.applySectionStates(),this._deferListingUpdate(),this.setPrices(),e&&(this.emit(`filterChange`,{filter:this.getFilter(),result:this.getFilterResult()}),this._scheduleStateChange())}_dropFilteredSelection(){let e=this._selection;if(e){if(!this.isSectionHighlighted(e.section)){this._batchSelection(()=>{this.activeSection=null,this.activeRow=null,this._replaceSelectedSeats(new Map),this._commitSelection(null)},`filter`);return}(e.type===`group`?this._inventoryIndex?.getGroup(e.groupId):e.type!==`seat`||this.seatsWithListings.has(this._seatKeyOf(e.section,e.row,e.seats[0])))||this._batchSelection(()=>{this._replaceSelectedSeats(new Map),this._commitSelection({type:`section`,section:e.section})},`filter`)}}_applyInventoryIndex(){let e=this._inventoryIndex;if(!e)return;this.sectionsWithListings=new Set(e.sections.keys()),this.rowsWithListings=new Set(e.rows.keys()),this.seatsWithListings=new Set(e.seats.keys());let t=e.minPriceMaps();this._sectionPrices=t.sections,this._rowPrices=t.rows,this._seatPrices=t.seats,this._invalidateBadgeCache()}_leaveInventoryMode(){this._baseInventoryIndex&&(this._rawSections=Array.from(this.sectionsWithListings),this._rawRows=Array.from(this.rowsWithListings),this._rawSeats=Array.from(this.seatsWithListings),this._rawSectionPrices=new Map(this._sectionPrices),this._rawRowPrices=new Map(this._rowPrices),this._rawSeatPrices=new Map(this._seatPrices),this._inventoryIndex=null,this._baseInventoryIndex=null,this._rebuildGroupLinks())}getInventory(e,t=null,n=null){if(e==null||e===``)return null;let r=t!=null&&t!==``,i=r&&n!=null&&n!==``;if(this._inventoryIndex)return i?this._inventoryIndex.getSeat(this._seatKeyOf(e,t,n)):r?this._inventoryIndex.getRow(this._rowKey(e,t)):this._inventoryIndex.getSection(this._canon(e));let a,o;return i?(a=this._hasSeatListing(e,t,n),o=this._getSeatPrice(e,t,n)):r?(a=this._hasRowListing(e,t),o=this._getRowPrice(e,t)):(a=this.sectionsWithListings.has(this._canon(e)),o=this._getSectionPrice(e)),!a&&o===null?null:Object.freeze({count:null,tickets:null,minPrice:o,maxPrice:null,maxTogether:null,quantities:[]})}getCategoryInventory(e){return!this._inventoryIndex||e==null?null:this._inventoryIndex.getCategory(String(e))}setAvailableSections(e){this.isDisposed||(this._leaveInventoryMode(),this._rawSections=Array.from(sf(e)),this.sectionsWithListings=this._normalizeSectionSet(this._rawSections),this.applySectionStates())}setAvailableRows(e){this.isDisposed||(this._leaveInventoryMode(),this._rawRows=Array.from(sf(e)),this.rowsWithListings=this._normalizeKeySet(this._rawRows,1),this._deferListingUpdate())}setAvailableSeats(e){this.isDisposed||(this._leaveInventoryMode(),this._rawSeats=Array.from(sf(e)),this.seatsWithListings=this._normalizeKeySet(this._rawSeats,2),this._deferListingUpdate())}updateActiveSections(e){this.setAvailableSections(e)}updateActiveRows(e){this.setAvailableRows(e)}updateActiveSeats(e){this.setAvailableSeats(e)}getAvailableRowsBySection(){let e={};if(!this.sectionRowGroups)return e;for(let[t,n]of Object.entries(this.sectionRowGroups)){let r=new Set;(n.userData?.mergedLineMesh?.userData?.rowRanges||[]).forEach(e=>r.add(e.row)),e[t]=Array.from(r)}return e}getSeatLayout(){let e={};if(!this.sectionRowGroups)return e;let t=(e,t)=>{let n=Number(e),r=Number(t);return Number.isFinite(n)&&Number.isFinite(r)?n-r:String(e).localeCompare(String(t))};for(let[n,r]of Object.entries(this.sectionRowGroups)){let i={};for(let e of r.userData?.mergedLineMesh?.userData?.rowRanges||[])e.row!==void 0&&e.row!==null&&!i[e.row]&&(i[e.row]=[]);for(let e of r.userData?.seatInstancedMesh?.userData?.seatMetadata||[])e.row!==void 0&&e.row!==null&&e.seat!==void 0&&e.seat!==null&&(i[e.row]||=[]).push(String(e.seat));for(let e of Object.keys(i))i[e]=[...new Set(i[e])].sort(t);e[n]=i}return e}setHoveredSection(e){let t=e?.userData?.sectionName;if(t&&!this.isSectionHighlighted(t)&&(e=null),this.hoveredSectionGroup===e)return;let n=this.hoveredSectionGroup;this.hoveredSectionGroup=e,this._updateSectionColor(n),this._updateSectionColor(e),this.triggerRender()}_clearHoverStates(){if(this._hoveredSeat=null,this._hoveredSeatKeys.size>0&&this._setHoveredSeatKeys([]),this._hoveredRow){let e=this._hoveredRow;this._hoveredRow=null,this._updateRowHoverState(e,null)}}setExternalHover({sectionName:e=null,categoryName:t=null,row:n=null,seat:r=null,groupId:i=null}={}){if(this.isDisposed||this.lockedSectionGroup||this.cameraController.isSeatViewActive)return;if(this.loadSeats===!1){if(i!=null){let r=this.getGroup(i);r&&(e=r.section,n=r.row,t=null),i=null}r=null}if(i!=null){let e=this.getGroup(i);if(!e||!this.isSectionHighlighted(e.section)){this.clearExternalHover();return}if(this.isExternalHoverActive=!0,this.setHoveredSection(this.sectionGroups[e.section]||null),this._hoveredRow){let e=this._hoveredRow;this._hoveredRow=null,this._updateRowHoverState(e,null)}this._hoveredSeat={section:e.section,row:e.row,seat:e.seats[0]},this._setHoveredSeatKeys(e.seatKeys),this.triggerRender();return}if(e&&!this.isSectionHighlighted(e)){this.clearExternalHover();return}let a=e?this._canon(e):null;if(this.isExternalHoverActive=!!(e||t||n||r),this.setHoveredSection(a?this.sectionGroups[a]||null:this.activeSection),a&&n!=null){let e={section:a,row:String(n)};if(this._updateRowHoverState(this._hoveredRow,e),this._hoveredRow=e,r!=null){let e={section:a,row:String(n),seat:String(r)},t=this._hoveredSeat;this._hoveredSeat=e,this._updateSeatHoverState(t,e)}else if(this._hoveredSeat){let e=this._hoveredSeat;this._hoveredSeat=null,this._updateSeatHoverState(e,null)}}else this._clearHoverStates();this.triggerRender()}clearExternalHover(){this.isDisposed||this.lockedSectionGroup||this.cameraController.isSeatViewActive||(this.isExternalHoverActive=!1,this._clearHoverStates(),this.setHoveredSection(this.activeSection),this.needsRaycast=!0,this.triggerRender())}_getSectionDetailBadges(e,t){let n=this._sectionDetailBadgeCache.get(e);if(n)return n;n=[];let r=new Set,i=new Set;if(this._inventoryIndex&&this.currentSvgGroup)for(let t of this._inventoryIndex.groups.values()){if(t.section!==e)continue;let a=this._seatSelectionCenter(t);if(a){for(let e of t.seatKeys)i.add(e);r.add(t.row),n.push({x:a.x,y:a.y,z:.5,text:this.formatGroupPrice(t),price:t.price,type:`group`,groupId:t.id,sectionName:e,row:t.row,priority:1})}}let a=t.userData?.seatInstancedMesh;if(a?.userData?.seatMetadata){let t=a.userData.seatMetadata;for(let a=0;a<t.length;a++){let o=t[a];if(o.key&&i.has(o.key))continue;let s=this._seatPrices.get(o.key||this._seatKeyOf(e,o.row,o.seat))??null;s!==null&&o.visualCenter&&(o.worldPos||=o.visualCenter.clone().applyMatrix4(this.currentSvgGroup.matrixWorld),n.push({x:o.worldPos.x,y:o.worldPos.y,z:.5,text:this.formatPrice(s),price:s,type:`seat`,sectionName:e,row:o.row,seat:o.seat,priority:1}),r.add(od(o.row)))}}for(let i=0;i<t.children.length;i++){let a=t.children[i].userData;if(!a?.isRow)continue;let o=a.row;if(r.has(od(o)))continue;let s=this._getRowPrice(e,o);s!==null&&a.visualCenter&&(a.worldPos||=a.visualCenter.clone().applyMatrix4(this.currentSvgGroup.matrixWorld),n.push({x:a.worldPos.x,y:a.worldPos.y,z:.5,text:this.formatPrice(s),price:s,type:`row`,sectionName:e,row:o,priority:2}))}return this._sectionDetailBadgeCache.set(e,n),n}setPrices(e=null,t=null,n=null){if(this.isDisposed)return;let r=!!(e||t||n);if(r&&(this._leaveInventoryMode(),e&&typeof e==`object`&&!(e instanceof Map)&&(`sections`in e||`rows`in e||`seats`in e)?(e.sections&&(this._rawSectionPrices=e.sections),e.rows&&(this._rawRowPrices=e.rows),e.seats&&(this._rawSeatPrices=e.seats)):(e&&(this._rawSectionPrices=e),t&&(this._rawRowPrices=t),n&&(this._rawSeatPrices=n)),this._sectionPrices=this._normalizePriceMap(this._rawSectionPrices,0),this._rowPrices=this._normalizePriceMap(this._rawRowPrices,1),this._seatPrices=this._normalizePriceMap(this._rawSeatPrices,2),this._invalidateBadgeCache()),!this.currentSvgGroup)return;let i=this.camera.position.distanceTo(this.controls.target),a=(this.defaultCameraPos.z||1200)/Math.max(i,1),o=!!this.rowsGroup&&(this.cameraController.isSeatViewActive||a>=3),s=this._highlightSignature(),c=``;if(c=o?`detail|${this._visibleSectionsSet.size>0?Array.from(this._visibleSectionsSet).sort().join(`,`):`__ALL__`}|${s}`:`section|${s}`,!r&&this._lastBadgesSignature===c){this.badgeManager.setVisible(this.showPrices),this.triggerRender();return}this._lastBadgesSignature=c;let l=[];if(o)for(let[e,t]of Object.entries(this.sectionRowGroups)){if(!t?.visible||!this.isSectionHighlighted(e)||this._visibleSectionsSet.size>0&&!this._visibleSectionsSet.has(e))continue;let n=this._getSectionDetailBadges(e,t);for(let e=0;e<n.length;e++)l.push(n[e])}else for(let[e,t]of Object.entries(this.sectionGroups)){let n=this._sectionPrices.get(e);if(n===void 0||!this.isSectionHighlighted(e))continue;let r=t?.userData?.center;r&&l.push({x:r.x,y:r.y,z:.5,text:this.formatPrice(n),price:n,type:`section`,sectionName:e,priority:1})}this.badgeManager.setData(l),this.badgeManager.setVisible(this.showPrices),this.triggerRender()}renderPriceBadges(e=null,t=null,n=null){this.setPrices(e,t,n)}setPricesVisible(e){this.isDisposed||(this.showPrices=!!e,this.badgeManager.setVisible(this.showPrices),this.triggerRender())}easeInOutCubic(e){return this.cameraController.easeInOutCubic(e)}animateCameraTo(e,t,n,r=650,i=null){this.isDisposed||this.cameraController.animateCameraTo(e,t,n,r,i,!0)}_prepareSectionView(e,t,n){this.currentViewMode=n,this.activeSection=e,this._viewSection=e,this.updateMinimapHighlight(t),e.visible=!0,this._visibilitySnapshot=null;let r=this.sectionRowGroups[this._canon(t)];r&&(r.visible=!0),this.rowsGroup&&(this.rowsGroup.visible=!0),this.renderer.domElement.style.cursor=`default`}activate3DView(e,t=null){if(this.isDisposed||!e)return;if(!this.is3DAvailable()){this.focusSectionIn2DView(e,t);return}let n=this.currentViewMode!==`3d`&&this.currentViewMode!==`seatView`,r=e.userData?.sectionName;this._prepareSectionView(e,r,`3d`),this.emit(`viewModeChange`,{mode:`3d`,section:r}),this.cameraController.activate3DView(e,600,()=>{this._updateSectionCoverageAndRowsVisibility(),this._scheduleLODLabelsAndPrices(),this.triggerRender()},!n,t),this._updateSectionCoverageAndRowsVisibility(),this._scheduleLODLabelsAndPrices(),this.triggerRender()}activateSeatView({sectionName:e=null,row:t=null,seat:n=null,worldPos:r=null}={}){if(this.isDisposed)return;let i=this.findSectionGroup(e)||(e?null:this.activeSection);if(!i)return;if(!this.is3DAvailable()){this.focusSectionIn2DView(i);return}let a=i.userData?.sectionName||e;this._prepareSectionView(i,a,`seatView`);let o=r?.isVector3?r.clone():null;o||=i.userData?.center?i.userData.center.clone():new Wn().setFromObject(i).getCenter(new q),this.emit(`viewModeChange`,{mode:`seatView`,section:a,row:t,seat:n}),this.cameraController.activateSeatView(o,i,650,()=>{this._updateSectionCoverageAndRowsVisibility(),this._scheduleLODLabelsAndPrices(),this.triggerRender()}),this._updateSectionCoverageAndRowsVisibility(),this._scheduleLODLabelsAndPrices(),this.triggerRender()}exitSeatView(e=600){if(!this.isDisposed&&this.cameraController.isSeatViewActive){if(!this.is3DAvailable()){this.cameraController.isSeatViewActive=!1,this.cameraController._savedSectionGroup=null,this.resetTo2DTopView();return}this.currentViewMode=`3d`,this.emit(`viewModeChange`,{mode:`3d`,section:this.activeSection?.userData?.sectionName||null}),this.cameraController.exitSeatView(e,()=>{this._updateSectionCoverageAndRowsVisibility(),this._scheduleLODLabelsAndPrices(),this.triggerRender()}),this.triggerRender()}}_frameSelection(e,t=`api`){return!e||e.type===`section`?!1:this._moveCameraFor(e,typeof t==`string`?t:`api`)}focusElementIn3DView(e,t=`seat`){!this.isDisposed&&e&&this.is3DAvailable()&&!this.cameraController.isSeatViewActive&&(this.cameraController.focusElementIn3DView(e,t,500,()=>{this._updateSectionCoverageAndRowsVisibility(),this._scheduleLODLabelsAndPrices(),this.triggerRender()}),this.triggerRender())}focusSectionIn2DView(e,t=null){if(this.isDisposed||!e)return;let n=e.userData?.sectionName;this._prepareSectionView(e,n,`2d`),this.emit(`viewModeChange`,{mode:`2d`,section:n}),this.cameraController.focusSectionIn2DView(e,600,()=>{this._updateSectionCoverageAndRowsVisibility(),this._scheduleLODLabelsAndPrices(),this.triggerRender()},t),this._updateSectionCoverageAndRowsVisibility(),this._scheduleLODLabelsAndPrices(),this.triggerRender()}focusSectionsIn2DView(e,t=600){!this.isDisposed&&e?.length&&(this.currentViewMode=`2d`,this.activeSection=null,this.updateMinimapHighlight(null),this.cameraController.focusCategoryIn2DView(e,t,()=>{this._updateSectionCoverageAndRowsVisibility(),this._scheduleLODLabelsAndPrices(),this.triggerRender()}),this.setPrices(),this.triggerRender())}focusCategoryIn2DView(e){if(this.isDisposed)return;let t=Object.values(this.sectionGroups).filter(t=>t.userData?.categoryName===e);t.length&&(this.currentViewMode=`2d`,this.activeSection=null,this.updateMinimapHighlight(null),this.emit(`viewModeChange`,{mode:`category`,category:e}),this.cameraController.focusCategoryIn2DView(t,600),this.setPrices())}unTiltTo2DTopView(e=600){if(this.isDisposed)return;let t=this.currentViewMode===`3d`||this.currentViewMode!==`2d`;this.currentViewMode=`2d`,this.activeSection=null,this.activeRow=null,this.clearSelectedSeats(),this.updateMinimapHighlight(null),this.renderer.domElement.style.cursor=`default`,this.emit(`viewModeChange`,{mode:`2d`});let n=(this.defaultCameraPos.z||1200)/3.05;this.cameraController.unTiltTo2DTopView(e,()=>{this._updateSectionCoverageAndRowsVisibility(),this.setPrices(),this.triggerRender()},n,!t),this.triggerRender()}resetTo2DTopView(){if(this.isDisposed)return;let e=this.currentViewMode===`3d`||this.currentViewMode===`seatView`;this.currentViewMode=`2d`,this.activeSection=null,this.activeRow=null,this.clearSelectedSeats(),this.updateMinimapHighlight(null),this.rowsGroup&&(this.rowsGroup.visible=!1,this._visibilitySnapshot=null,this.labelManager.setLayerVisible(`rowTexts`,!1),this.labelManager.setLayerVisible(`seatTexts`,!1),this.labelManager.setLayerVisible(`svgTexts`,!0),this.labelManager.setLayerOpacity(`svgTexts`,1)),this._setAllSectionsSurfaceWrite(!0),this.renderer.domElement.style.cursor=`default`,this.emit(`viewModeChange`,{mode:`2d`}),this.cameraController.resetTo2DTopView(600,()=>{this._updateSectionCoverageAndRowsVisibility(),this.setPrices(),this.triggerRender()},!e),this.triggerRender()}stepZoom(e){this.isDisposed||this.cameraController.stepZoom(e)}lockSection(e,t=null,n=null){if(this.isDisposed)return;let r=this.findSectionGroup(e);if(!r)return;this.lockedSectionGroup=r;let i=r.userData?.sectionName||e;this._lockedBadgeTarget={section:i,row:t,seat:n},this._moveCameraFor({type:n==null?t==null?`section`:`row`:`seat`,section:i,row:t,seats:n==null?void 0:[String(n)],seat:n},`listing`),this.setHoveredSection(r)}unlockSection(){this.isDisposed||(this.lockedSectionGroup=null,this._lockedBadgeTarget=null,this.isExternalHoverActive=!1,this.cameraController.isSeatViewActive?this.exitSeatView():this.setHoveredSection(this.activeSection),this.renderer.domElement.style.cursor=`default`)}select(e,{focus:t=!0,source:n=`api`}={}){if(this.isDisposed||!e)return!1;if(this.loadSeats===!1&&(e.type===`seat`||e.type===`group`)){let t=e.type===`group`?this._inventoryIndex?.getGroup(e.groupId):null,n=t?t.section:e.section,r=t?t.row:e.row;if(!n||r==null)return!1;e={type:`row`,section:n,row:r}}switch(e.type){case`section`:return this._batchSelection(()=>this._selectSectionInternal(e.section,t),n);case`row`:return this._batchSelection(()=>this._selectRowInternal(e.section,e.row,t),n);case`seat`:return this._batchSelection(()=>this._selectSeatInternal(e.section,e.row,e.seat,t),n);case`group`:return this._batchSelection(()=>this._selectGroupInternal(e.groupId,t),n);default:return!1}}selectSection(e,{focus:t=!0}={}){return this.select({type:`section`,section:e},{focus:t})}selectRow(e,t,{focus:n=!0}={}){return this.select({type:`row`,section:e,row:t},{focus:n})}selectSeat(e,t,n,{focus:r=!0}={}){return this.select({type:`seat`,section:e,row:t,seat:n},{focus:r})}selectGroup(e,{focus:t=!0}={}){return this.select({type:`group`,groupId:e},{focus:t})}_selectSectionInternal(e,t){let n=this.findSectionGroup(e);if(!n)return!1;let r=n.userData?.sectionName;return this.isSectionHighlighted(r)?(this.activeSection=n,this.activeRow=null,this._replaceSelectedSeats(new Map),this._commitSelection({type:`section`,section:r}),this.updateMinimapHighlight(r),(!t||!this._moveCameraFor({type:`section`,section:r},this._selectionSource))&&this.triggerRender(),!0):!1}_selectRowInternal(e,t,n,r={}){if(!this.isSectionHighlighted(e))return!1;let i=this.findSectionGroup(e);if(!i)return!1;let a=i.userData.sectionName;return this.activeSection=i,this.updateMinimapHighlight(a),this.activeRow={...r,section:a,row:String(t)},n&&this._moveCameraFor({type:`row`,section:a,row:String(t)},this._selectionSource),!0}_selectSeatInternal(e,t,n,r){return this.findSectionGroup(e)?this._selectSeatSelection(this._seatSelectionFor(e,t,n),r):!1}_selectGroupInternal(e,t){let n=this._inventoryIndex?.getGroup(e);return n?this._selectSeatSelection(this._groupSelection(n),t):!1}_selectSeatSelection(e,t){return this._applySeatSelection(e)?(t&&this._moveCameraFor(e,this._selectionSource),!0):!1}clearSelection(){this.isDisposed||(this._batchSelection(()=>{this.activeSection=null,this.activeRow=null,this._replaceSelectedSeats(new Map),this._commitSelection(null)}),this.is3DAvailable()?this.unTiltTo2DTopView():(this.applySectionStates(),this.setPrices(),this.triggerRender()))}getState(){if(!this.shareableState)return null;let e=this._selection,t=null;e?(t={type:e.type,section:e.section},e.row!==void 0&&e.row!==null&&(t.row=String(e.row)),(e.type===`seat`||e.type===`group`)&&e.seats?.length&&(t.seat=String(e.seats[0])),e.type===`group`&&(t.groupId=e.groupId)):this._pendingState?.selection&&(t=this._pendingState.selection);let n=this._filter?Nd(this._filter):this._pendingState?.filter||null,r=t&&this._selectionMovesCamera()?null:this._pendingState?.view||this._getViewState();return Yd({selection:t,filter:n,view:r})}_getViewState(){if(!this.currentSvgGroup||this.currentViewMode!==`2d`||this.cameraController.isSeatViewActive||this.activeSection&&this._selectionMovesCamera())return null;let e=this.controls?.target,t=this.cameraController.getDistance();return!e||!(t>0)?null:{x:e.x,y:e.y,zoom:(this.defaultCameraPos.z||1200)/t}}setState(e,{animate:t=!0}={}){if(this.isDisposed||!this.shareableState)return{filter:!1,selection:!1,view:!1};let n=Yd(e);return this._pendingState={selection:n.selection,filter:n.filter,view:n.selection&&this._selectionMovesCamera()?null:n.view,hadSelection:!!n.selection,animate:t,filterApplied:!1,viewApplied:!!n.selection&&this._selectionMovesCamera()},this._applyPendingState()}_retryPendingState(){this._pendingState&&this.currentSvgGroup&&this._applyPendingState()}_applyPendingState(){let e=this._pendingState,t={filter:!1,selection:!1,view:!1};if(!e)return t;if(!this.currentSvgGroup)return t.selection=e.selection?`pending`:!1,t;let n=e.animate===!1?0:600;if(e.filterApplied||(e.filterApplied=!0,this.setFilter(e.filter,{frame:!1}),t.filter=!0),e.selection){let r=this._applyStateSelection(e.selection,n);t.selection=r,r!==`pending`&&(e.selection=null)}return e.viewApplied||=(!e.hadSelection&&this._selection&&this._clearSelectionForView(),e.view&&(this._applyView(e.view,n),this._stateViewAppliedAt=performance.now(),t.view=!0),!0),!e.selection&&e.viewApplied&&(this._pendingState=null),this._scheduleStateChange(),t}_applyStateSelection(e,t){let n={focus:!0,source:`state`},r=this.getGroup(e.groupId)?.section||e.section||null,i=r?this.findSectionGroup(r):null,a=()=>!this._stateDataComplete()&&`pending`,o=()=>{if(!this.rowsGroup)return this._rowsExpected?`wait`:!1;if(this.loadSeats===!1){let t=e.type===`group`?this.getGroup(e.groupId):null,r=t?t.row:e.row;return r==null?!1:e.type===`group`&&!t&&!this._baseInventoryIndex&&!e.row?`wait`:this.rowsRegistry.has(this._rowKey(e.section,r))&&this.select({type:`row`,section:e.section,row:r},n)}if(e.type===`group`){if(this.select({type:`group`,groupId:e.groupId},n))return!0;if(!this._baseInventoryIndex)return`wait`}return(e.type===`seat`||e.type===`group`)&&e.section&&e.row&&e.seat&&this.seatsRegistry.has(this._seatKeyOf(e.section,e.row,e.seat))&&this.select({type:`seat`,section:e.section,row:e.row,seat:e.seat},n)?!0:e.type===`row`&&this.rowsRegistry.has(this._rowKey(e.section,e.row))&&this.select({type:`row`,section:e.section,row:e.row},n)},s=this.cameraController.durationScale;t===0&&(this.cameraController.durationScale=0);try{return this._batchSelection(()=>{if(!i||this._selection?.section!==i.userData.sectionName&&!this.select({type:`section`,section:r},n))return a();if(e.type===`section`)return!0;let t=o();return t===!0?!0:t===`wait`?`pending`:a()},`state`)}finally{this.cameraController.durationScale=s}}_stateDataComplete(){let e=!!this.rowsGroup||!this._rowsExpected;return!!this.currentSvgGroup&&e&&!!this._baseInventoryIndex}_clearSelectionForView(){this._batchSelection(()=>{this.activeSection=null,this.activeRow=null,this._replaceSelectedSeats(new Map),this._commitSelection(null)},`state`),this.currentViewMode!==`2d`&&(this.currentViewMode=`2d`,this.updateMinimapHighlight(null),this.emit(`viewModeChange`,{mode:`2d`}))}_applyView(e,t=600){let n=this.defaultCameraPos.z||1200;this.cameraController.flyTo2DView(e.x,e.y,n/e.zoom,t,()=>{this._updateSectionCoverageAndRowsVisibility(),this.setPrices(),this.triggerRender()}),this.triggerRender()}_scheduleStateChange(){!this.isDisposed&&this.shareableState&&(clearTimeout(this._stateChangeTimeout),this._stateChangeTimeout=setTimeout(()=>{if(this._stateChangeTimeout=null,this.isDisposed)return;let e=this.getState(),t=JSON.stringify(e);t!==this._lastStateJson&&(this._lastStateJson=t,this.emit(`stateChange`,{state:e}))},350))}_cameraStateKey(){let e=this.controls?.target,t=this.camera.position;return e?`${e.x.toFixed(1)},${e.y.toFixed(1)},${t.x.toFixed(1)},${t.y.toFixed(1)},${t.z.toFixed(1)}`:``}_disposeObjectTree(e){e&&e.traverse(e=>{e.geometry?.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>{e.map?.dispose(),e.dispose()})})}_clearRowsGroup(){this.rowsGroup&&((this.rowsGroup.parent||this.scene).remove(this.rowsGroup),this._disposeObjectTree(this.rowsGroup),this.rowsGroup=null,this.sectionRowGroups=of(),this.seatsRegistry.clear(),this.rowsRegistry.clear(),this._pickGrids=null,this._dirtyRowSections.clear(),this._allRowWorldTexts=[],this._lastRowLabelsSignature=``,this._invalidateBadgeCache())}_canonicalizeRows(e){let t=of(),n=[];for(let[r,i]of Object.entries(e.sectionRowGroups)){let e=this._resolver.resolve(r);e||n.push(r);let a=e||String(r).trim();if(t[a]){console.warn(`[VenueMapEngine] Rows for section "${r}" map to "${a}", which already has rows; ignoring duplicate.`);continue}i.userData.sectionName=a;let o=i.userData.mergedLineMesh;if(o){o.userData.section=a;for(let e of o.userData.rowRanges||[])e.section=a}let s=i.userData.seatInstancedMesh;if(s){s.userData.section=a;for(let e of s.userData.seatMetadata||[])e.section=a,e.rowKey=`${a}:${od(e.row)}`,e.key=`${e.rowKey}:${od(e.seat)}`}if(o)for(let e of o.userData.rowRanges||[])e.key=`${a}:${od(e.row)}`;for(let e of i.children)e.userData?.isRow&&(e.userData.section=a);t[a]=i}let r=new Map;for(let t of e.rowsRegistry.values()){let e=this._rowKey(t.userData.section,t.userData.row);r.has(e)||r.set(e,t)}let i=new Map;for(let t of e.seatsRegistry.values()){let e=this._seatKeyOf(t.section,t.row,t.seat);i.has(e)||i.set(e,t)}let a=(e.rowWorldTexts||[]).map(e=>({...e,sectionName:this._canon(e.sectionName)}));return n.length>0&&console.warn(`[VenueMapEngine] ${n.length} row group(s) reference sections not found in the main map:`,n.slice(0,10)),{sectionRowGroups:t,rowsRegistry:r,seatsRegistry:i,rowWorldTexts:a,unknownSections:n}}async loadRowsSVGString(e){if(this.isDisposed)return;this._rowsAbortController?.abort(),this._rowsAbortController=new AbortController;let t=this._rowsAbortController.signal;if(this._clearRowsGroup(),!this.currentSvgGroup)return;if(typeof e!=`string`||e.length===0)throw this._emitError(`invalid_svg`,`Rows SVG is empty or not a string.`,{source:`rows`});if(e.length>this.maxSvgBytes)throw this._emitError(`svg_too_large`,`Rows SVG exceeds ${this.maxSvgBytes} bytes.`,{source:`rows`});this.currentSvgGroup.updateMatrixWorld(!0);let n=this.currentSvgGroup.matrixWorld,r;try{r=await gd.parseRows(e,n,{singlePass:this.singlePassRows,seats:this.loadSeats},t)}catch(e){throw this._emitError(e?.code||`invalid_svg`,e?.message||`Failed to parse rows SVG.`,{source:`rows`,cause:e})}if(!r||this.isDisposed||t.aborted){r?.rowsGroup&&this._disposeObjectTree(r.rowsGroup);return}let i=this._canonicalizeRows(r);this.rowsGroup=r.rowsGroup,this.sectionRowGroups=i.sectionRowGroups,this.seatsRegistry=i.seatsRegistry,this.rowsRegistry=i.rowsRegistry,this._allRowWorldTexts=i.rowWorldTexts,this.currentSvgGroup.add(this.rowsGroup),this.currentSvgGroup.updateMatrixWorld(!0);for(let[e,t]of Object.entries(this.sectionRowGroups)){let r=this.sectionGroups[e]?.userData?.box||t.userData?.localBox;r&&!r.isEmpty()&&(t.userData.worldBox=r.clone().applyMatrix4(n),t.userData.worldBox.min.z=-10,t.userData.worldBox.max.z=10)}this._lastSeatLabelsSignature=``,this._lastRowLabelsSignature=``,this._invalidateBadgeCache(),this._pickGrids=this.gridPicking?this._buildPickGrids():null,this._rebuildGroupLinks(),this.applyRowStates(),this._refreshRowLabels(),this._updateSectionCoverageAndRowsVisibility(),this._refreshSeatLabels(),this.setPrices(),this.triggerRender(),this._updateZoomLimits(),this._retryPendingState(),this.emit(`rowsLoaded`,{sectionsWithRows:Object.keys(this.sectionRowGroups),availableRowsBySection:this.getAvailableRowsBySection(),unknownSections:i.unknownSections})}async loadSVGString(e){if(this.isDisposed)return;if(typeof e!=`string`||e.length===0)throw this._emitError(`invalid_svg`,`SVG is empty or not a string.`,{source:`main`});if(e.length>this.maxSvgBytes)throw this._emitError(`svg_too_large`,`SVG exceeds ${this.maxSvgBytes} bytes.`,{source:`main`});let t;try{t=gd.parse(e,{getCategoryColor:e=>this.getCategoryColor(e)})}catch(e){throw this._emitError(e?.code||`invalid_svg`,e?.message||`Failed to parse SVG.`,{source:`main`,cause:e})}if(this._loadToken++,this._invalidateBadgeCache(),this.highlightedSections=null,this.badgeManager.setData([]),this.labelManager.setLayerData(`svgTexts`,[]),this.labelManager.setLayerData(`rowTexts`,[]),this.labelManager.setLayerData(`seatTexts`,[]),this._rowsAbortController?.abort(),this._rowsAbortController=null,this._clearRowsGroup(),this._activeSection=null,this._activeRow=null,this._selectedSeats.clear(),this._hoveredSeatKeys=new Set,this.hoveredSectionGroup=null,this._hoveredRow=null,this._hoveredSeat=null,this._lastDispatchedHoverKey=null,this._selection){let e=this._selection;this._selection=null,this.emit(`selectionChange`,{selection:null,previous:e,source:`load`})}this._disposeMergedSurfaces(),this.currentSvgGroup&&=(this.scene.remove(this.currentSvgGroup),this._disposeObjectTree(this.currentSvgGroup),null),this.currentSvgGroup=t.svgGroup,this.sectionGroups=t.sectionGroups,this._resolver=new cd(Object.keys(this.sectionGroups)),this._resolver.ambiguousAliases.length>0&&console.warn(`[VenueMapEngine] Short section aliases shared by several sections (use full names for these):`,this._resolver.ambiguousAliases),this._renormalizeInventory(),this.svgGeomSize.copy(t.svgGeomSize),this.cameraCenterPoint=t.cameraCenterPoint,this.scene.add(this.currentSvgGroup),this.currentSvgGroup.updateMatrixWorld(!0),this._buildMergedSurfaces();for(let e of Object.values(this.sectionGroups))e.userData?.box&&!e.userData.box.isEmpty()&&(e.userData.worldBox=e.userData.box.clone().applyMatrix4(this.currentSvgGroup.matrixWorld),e.userData.worldBox.min.z=-10,e.userData.worldBox.max.z=10);this.labelManager.setLayerData(`svgTexts`,t.finalWorldTexts),this.setupMinimap(),this.cameraController.setCameraCenterPoint(this.cameraCenterPoint),this.cameraController.setupSceneFit(this.svgGeomSize),this._updateZoomLimits(),this.currentViewMode=`2d`,this.activeSection=null,this.lockedSectionGroup=null,this.emit(`loaded`,{sections:t.uniqueSections,categories:[...new Set(t.uniqueSections.map(e=>e.category).filter(Boolean))],ambiguousAliases:this._resolver.ambiguousAliases}),this.applySectionStates(),this.setPrices(),this.triggerRender(),this._retryPendingState()}_buildMergedSurfaces(){if(this.mergeSectionMeshes&&this.currentSvgGroup)try{this._mergedSurfaces=new $d(this.currentSvgGroup)}catch(e){console.warn(`[VenueMapEngine] Merged section meshes unavailable, drawing per section:`,e),this._mergedSurfaces?.dispose(),this._mergedSurfaces=null,this.currentSvgGroup.traverse(e=>{e.isMesh&&e.material&&!Array.isArray(e.material)&&(e.material.visible=!0)})}}_disposeMergedSurfaces(){this._mergedSurfaces?.dispose(),this._mergedSurfaces=null}async _fetchText(e,{signal:t,timeoutMs:n=2e4}={}){let r=new AbortController,i=()=>r.abort();t&&(t.aborted?r.abort():t.addEventListener(`abort`,i,{once:!0}));let a=setTimeout(()=>r.abort(),n);try{let t=await fetch(e,{signal:r.signal});if(!t.ok)throw Error(`HTTP ${t.status} loading ${e}`);let n=Number(t.headers.get(`content-length`));if(Number.isFinite(n)&&n>this.maxSvgBytes)throw Error(`${e} exceeds ${this.maxSvgBytes} bytes.`);return await t.text()}finally{clearTimeout(a),t?.removeEventListener(`abort`,i)}}async loadSVGUrl(e,t=null,n={}){if(this.isDisposed)return;let r=t&&typeof t==`object`?null:t,i=t&&typeof t==`object`?t:n,a=++this._loadToken,o;try{o=await this._fetchText(e,i)}catch(t){throw this._emitError(`load_failed`,t?.message||`Failed to load SVG.`,{source:`main`,url:e,cause:t})}if(a!==this._loadToken||this.isDisposed)return;this._rowsExpected=!!r,await this.loadSVGString(o);let s=this._loadToken;if(r)try{let e=await this._fetchText(r,i);if(s!==this._loadToken||this.isDisposed)return;await this.loadRowsSVGString(e)}catch(e){console.error(`[VenueMapEngine] Failed to load secondary rows SVG:`,e),this._rowsExpected=!1,this.emit(`rowsLoadError`,{error:e}),this._retryPendingState()}}_scheduleLODLabelsAndPrices(){this._lodTransitionTimeout&&clearTimeout(this._lodTransitionTimeout),this._lodTransitionTimeout=setTimeout(()=>{this._lodTransitionTimeout=null,!this.isDisposed&&(this._refreshRowLabels(),this._refreshSeatLabels(),this.setPrices(),this.triggerRender())},16)}_scheduleTrailingPanUpdate(){this._panDebounceTimeout&&clearTimeout(this._panDebounceTimeout),this._panDebounceTimeout=setTimeout(()=>{this._panDebounceTimeout=null,this._lastPanUpdateTime=performance.now(),this.isDisposed||(this._refreshSeatLabels(),this.setPrices(),this.triggerRender())},140)}_triggerPanLabelsUpdate(){if(performance.now()-(this._lastYawDragTime||0)<150){this._scheduleTrailingPanUpdate();return}this._refreshSeatLabels();let e=performance.now(),t=e-this._lastPanUpdateTime;t>=120?(this._lastPanUpdateTime=e,this._panDebounceTimeout&&=(clearTimeout(this._panDebounceTimeout),null),this.setPrices(),this.triggerRender()):this._panDebounceTimeout||=setTimeout(()=>{this._panDebounceTimeout=null,this._lastPanUpdateTime=performance.now(),this.isDisposed||(this._refreshSeatLabels(),this.setPrices(),this.triggerRender())},120-t)}_setSectionMeshSurfaceWrite(e,t){for(let n=0;n<e.children.length;n++){let r=e.children[n];r.isMesh&&r.userData?.section&&r.material&&(r.material.colorWrite!==t&&(r.material.colorWrite=t),r.material.depthWrite!==t&&(r.material.depthWrite=t))}}_setAllSectionsSurfaceWrite(e){for(let t of Object.values(this.sectionGroups))t.visible=!0,this._setSectionMeshSurfaceWrite(t,e)}_visibilityInputsChanged(){let e=this._visibilitySnapshot;if(!e)return!0;this.camera.updateMatrixWorld();let t=this.camera.matrixWorld.elements,n=this.camera.projectionMatrix.elements,r=this.controls?.target;for(let r=0;r<16;r++)if(e.values[r]!==t[r]||e.values[16+r]!==n[r])return!0;if(r&&(e.values[32]!==r.x||e.values[33]!==r.y||e.values[34]!==r.z)||e.seatView!==!!this.cameraController?.isSeatViewActive||e.rowsVisible!==!!this.rowsGroup?.visible||e.sectionGroups!==this.sectionGroups||e.sectionRowGroups!==this.sectionRowGroups||e.rowsGroup!==this.rowsGroup)return!0;if(this._dirtyRowSections.size>0){for(let e of this._visibleSectionsSet)if(this._dirtyRowSections.has(e))return!0}return!1}_storeVisibilitySnapshot(){let e=this._visibilitySnapshot||={values:new Float64Array(35)},t=this.camera.matrixWorld.elements,n=this.camera.projectionMatrix.elements;for(let r=0;r<16;r++)e.values[r]=t[r],e.values[16+r]=n[r];let r=this.controls?.target;r&&(e.values[32]=r.x,e.values[33]=r.y,e.values[34]=r.z),e.seatView=!!this.cameraController?.isSeatViewActive,e.sectionGroups=this.sectionGroups,e.sectionRowGroups=this.sectionRowGroups,e.rowsGroup=this.rowsGroup,e.rowsVisible=!!this.rowsGroup?.visible}_revealForCameraMove(e){if(!e||!this.currentSvgGroup||!this.rowsGroup?.visible||e.duration<=0)return;let t=this._revealCamera||=this.camera.clone();t.fov=this.camera.fov,t.aspect=this.camera.aspect,t.near=this.camera.near,t.far=this.camera.far,t.updateProjectionMatrix();let n=[],r=new q,i=new q,a=new q;for(let o of[.5,1]){r.lerpVectors(e.startPos,e.endPos,o),i.lerpVectors(e.startTarget,e.endTarget,o),a.lerpVectors(e.startUp,e.endUp,o).normalize(),t.position.copy(r),t.up.copy(a),t.lookAt(i),t.updateMatrixWorld();let s=new li;s.setFromProjectionMatrix(new Y().multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse)),n.push(s)}let o=!1;for(let[e,t]of Object.entries(this.sectionGroups)){let r=this.sectionRowGroups[e];if(!r||t.visible&&r.visible)continue;let i=t.userData?.worldBox;i&&n.some(e=>e.intersectsBox(i))&&(this._dirtyRowSections.has(e)&&this.applyRowStates(e),r.visible=!0,t.visible=!0,this._setSectionMeshSurfaceWrite(t,!1),r.userData?.seatInstancedMesh&&(r.userData.seatInstancedMesh.visible=!0),r.userData?.mergedLineMesh&&(r.userData.mergedLineMesh.visible=!0),this._visibleSectionsSet.add(e),o=!0)}o&&(this._visibilitySnapshot=null)}_updateSectionCoverageAndRowsVisibility(){this.camera.updateMatrixWorld(),this._updateSectionCoverageAndRowsVisibilityPass(),this._storeVisibilitySnapshot()}_updateSectionCoverageAndRowsVisibilityPass(){let e=new Set(this._visibleSectionsSet);this._visibleSectionsSet.clear();let t=this.camera.position.distanceTo(this.controls.target),n=(this.defaultCameraPos.z||1200)/Math.max(t,1),r=!!this.rowsGroup&&(this.cameraController.isSeatViewActive||n>=3),i=r?`detail`:`section`,a=this._lastLODState!==i;if(this._lastLODState=i,!r){this.rowsGroup?.visible&&(this.rowsGroup.visible=!1),this.labelManager.setLayerVisible(`rowTexts`,!1),this.labelManager.setLayerVisible(`seatTexts`,!1),this.labelManager.setLayerVisible(`svgTexts`,!0),this.labelManager.setLayerOpacity(`svgTexts`,1),this._setAllSectionsSurfaceWrite(!0),a&&this.setPrices();return}this.rowsGroup.visible=!0,this.labelManager.setLayerVisible(`rowTexts`,!0),this.labelManager.setLayerVisible(`seatTexts`,!0),this.labelManager.setLayerVisible(`svgTexts`,!0),this.labelManager.setLayerOpacity(`svgTexts`,.4),this.camera.updateMatrixWorld(),this._projScreenMatrix.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),this._frustum.setFromProjectionMatrix(this._projScreenMatrix);let o=!1;for(let[t,n]of Object.entries(this.sectionGroups)){let r=this.sectionRowGroups[t];if(!r){n.visible=!0,this._setSectionMeshSurfaceWrite(n,!0);continue}let i=!0;if(n.userData?.worldBox?i=this._frustum.intersectsBox(n.userData.worldBox):n.userData?.box&&!n.userData.box.isEmpty()&&(this._tempWorldBox.copy(n.userData.box).applyMatrix4(this.currentSvgGroup.matrixWorld),i=this._frustum.intersectsBox(this._tempWorldBox)),!i){r.visible=!1,n.visible=!1,e.has(t)&&(o=!0);continue}this._visibleSectionsSet.add(t),e.has(t)||(o=!0),this._dirtyRowSections.has(t)&&this.applyRowStates(t),r.visible=!0,n.visible=!0,this._setSectionMeshSurfaceWrite(n,!1),r.userData?.seatInstancedMesh&&(r.userData.seatInstancedMesh.visible=!0),r.userData?.mergedLineMesh&&(r.userData.mergedLineMesh.visible=!0)}a?(this._refreshRowLabels(),this._refreshSeatLabels(),this._scheduleLODLabelsAndPrices()):o&&this._triggerPanLabelsUpdate()}_raycastRowsAndSeats(){if(!this.rowsGroup?.visible)return null;let e=[];for(let[t,n]of Object.entries(this.sectionRowGroups)){if(!n?.visible||!this.isSectionHighlighted(t))continue;let r=n.userData?.worldBox;if(r&&!this.raycaster.ray.intersectsBox(r))continue;e.push(n);let i=n.userData?.seatInstancedMesh;if(i?.visible){let e=this.raycaster.intersectObject(i,!1);for(let t=0;t<e.length;t++){let n=e[t],r=i.userData?.seatMetadata?.[n.instanceId];if(r&&this.isSectionHighlighted(r.section)&&r.isInteractive)return{intersection:n,data:{isSeat:!0,section:r.section,row:r.row,seat:r.seat,visualCenter:r.visualCenter},isSeat:!0,isRow:!1}}}}for(let t=0;t<e.length;t++){let n=e[t].userData?.mergedLineMesh;if(!n?.visible)continue;let r=this.raycaster.intersectObject(n,!1);for(let e=0;e<r.length;e++){let t=r[e];if(t.faceIndex===void 0)continue;let i=n.userData.rowRanges||[];for(let e=0;e<i.length;e++){let n=i[e];if(this.isSectionHighlighted(n.section)&&t.faceIndex>=n.startFace&&t.faceIndex<n.endFace){if(!this._hasRowListing(n.section,n.row))continue;return{intersection:t,data:{isRow:!0,section:n.section,row:n.row,seatStart:n.seatStart,seatEnd:n.seatEnd,seatDirection:n.seatDirection},isSeat:!1,isRow:!0}}}}}return null}_buildPickGrids(){let e=[],t=[],n=0,r=0;for(let e of Object.values(this.sectionRowGroups)){let t=e.userData?.seatInstancedMesh?.userData?.seatMetadata;if(t?.length){n=(t[0].diameter||0)/.7,r=1;break}for(let t of e.userData?.mergedLineMesh?.userData?.rowRanges||[]){let e=t.rowData?.halfWidth;if(e>0&&(n+=e*2,r++),r>=16)break}}let i=r>0?n/r:3,a=new Rd(Math.max(i*2,.001)),o=new Rd(Math.max(i*4,.001));for(let n of Object.values(this.sectionRowGroups)){let r=n.userData?.seatInstancedMesh,s=r?.userData?.seatMetadata||[];for(let t=0;t<s.length;t++){let o=s[t],c=o.visualCenter;if(!c)continue;let l=e.length;e.push({container:n,mesh:r,meta:o});let u=o.diameter||i*.7,d=u/.7;a.addPoint(l,c.x,c.y,Math.max(u/2,(this.seatHitScale||1.1)*d/2))}let c=n.userData?.mergedLineMesh;for(let e of c?.userData?.rowRanges||[]){let r=e.rowData?.polylines;if(!r?.length)continue;let a=e.rowData.halfWidth||i/2,s=t.length;t.push({container:n,mesh:c,range:e});for(let e of r)for(let t=0;t+3<e.length;t+=2)o.addSegment(s,e[t],e[t+1],e[t+2],e[t+3],a)}}return{seats:a,rows:o,seatRefs:e,rowRefs:t,unit:i>0?i:3}}_ndcToRowsPlane(e,t){let n=this.currentSvgGroup;if(!n)return null;this.raycaster.setFromCamera(e,this.camera),this._pickInvMatrix.copy(n.matrixWorld).invert(),this._pickRay.copy(this.raycaster.ray).applyMatrix4(this._pickInvMatrix);let r=this._pickRay.intersectPlane(this._pickPlane,t);return r&&Number.isFinite(r.x)&&Number.isFinite(r.y)?r:null}_isPointerOnMap(){return Math.abs(this.mouse.x)<=1.05&&Math.abs(this.mouse.y)<=1.05}_pickRowsAndSeatsFromGrid(t,n,r){let i=this._pickGrids;if(!i||!this.rowsGroup?.visible||!this._isPointerOnMap())return null;let a=this._ndcToRowsPlane(this.mouse,this._pickLocal);if(!a)return null;let o=0;if(r){let r=this._getCanvasRect();if(r.width>0&&r.height>0){let i=e.MOBILE_TOUCH_RADIUS_PX;this._tempSampleNDC.set((t+i)/r.width*2-1,-(n/r.height)*2+1);let s=this._ndcToRowsPlane(this._tempSampleNDC,this._pickEdge);s&&(o=Math.max(o,s.distanceTo(a))),this._tempSampleNDC.set(t/r.width*2-1,-((n+i)/r.height)*2+1);let c=this._ndcToRowsPlane(this._tempSampleNDC,this._pickEdge);c&&(o=Math.max(o,c.distanceTo(a)))}o=Math.min(Number.isFinite(o)?o:0,i.unit*tf)}this.raycaster.setFromCamera(this.mouse,this.camera);let s=i.seats.size>0?i.seats.nearest(a.x,a.y,o,e=>{let t=i.seatRefs[e];return t.meta.isInteractive&&t.container.visible&&t.mesh.visible&&this.isSectionHighlighted(t.meta.section)}):null;if(s){let e=i.seatRefs[s.id].meta;return{intersection:{point:this._pickWorldPoint(e.visualCenter.x,e.visualCenter.y)},data:{isSeat:!0,section:e.section,row:e.row,seat:e.seat,visualCenter:e.visualCenter},isSeat:!0,isRow:!1}}let c=i.rows.size>0?i.rows.nearest(a.x,a.y,o,e=>{let t=i.rowRefs[e],n=t.range;return t.container.visible&&t.mesh.visible&&this.isSectionHighlighted(n.section)&&this._hasRowListing(n.section,n.row)}):null;if(c){let e=i.rowRefs[c.id].range,t=(e.rowData?.halfWidth||0)*.4,n=i.seats.size>0&&t>0?i.seats.nearest(a.x,a.y,o+t,t=>{let n=i.seatRefs[t].meta;return n.isInteractive&&n.section===e.section&&od(n.row)===od(e.row)}):null;if(n){let e=i.seatRefs[n.id].meta;return{intersection:{point:this._pickWorldPoint(e.visualCenter.x,e.visualCenter.y)},data:{isSeat:!0,section:e.section,row:e.row,seat:e.seat,visualCenter:e.visualCenter},isSeat:!0,isRow:!1}}return{intersection:{point:this._pickWorldPoint(a.x,a.y)},data:{isRow:!0,section:e.section,row:e.row,seatStart:e.seatStart,seatEnd:e.seatEnd,seatDirection:e.seatDirection},isSeat:!1,isRow:!0}}return null}_pickWorldPoint(e,t){return new q(e,t,ef).applyMatrix4(this.currentSvgGroup.matrixWorld)}_raycastRowsAndSeatsWithProximity(t,n,r=!1){if(!this.rowsGroup?.visible)return null;if(this._pickGrids)return this._pickRowsAndSeatsFromGrid(t,n,r);this.raycaster.setFromCamera(this.mouse,this.camera);let i=this._raycastRowsAndSeats();if(!r||i?.isSeat)return i;let a=this._getCanvasRect();if(a.width<=0||a.height<=0)return i;let o=e.MOBILE_TOUCH_RADIUS_PX,s=i;for(let e=0;e<nf.length;e++){let r=nf[e],i=t+r.dx*o,c=n+r.dy*o;this._tempSampleNDC.set(i/a.width*2-1,-(c/a.height)*2+1),this.raycaster.setFromCamera(this._tempSampleNDC,this.camera);let l=this._raycastRowsAndSeats();if(l){if(l.isSeat)return this.raycaster.setFromCamera(this.mouse,this.camera),l;!s&&l.isRow&&(s=l)}}return this.raycaster.setFromCamera(this.mouse,this.camera),s}_raycastSectionSurface(){let e=[];for(let[t,n]of Object.entries(this.sectionGroups))if(this.isSectionHighlighted(t)&&n.visible&&(!n.userData?.worldBox||this.raycaster.ray.intersectsBox(n.userData.worldBox)))for(let t=0;t<n.children.length;t++){let r=n.children[t];r.isMesh&&r.userData?.section&&r.visible&&r.raycast(this.raycaster,e)}return e.length===0?null:(e.sort((e,t)=>e.distance-t.distance),e[0].object.parent||null)}_resolveHitTarget(t,n,r=!1){let i=r?e.MOBILE_BADGE_SLOP_PX:0;if(this.showPrices&&this.badgeManager){let e=this._hitTestBadge(t,n,i);if(e&&this.isSectionHighlighted(e.sectionName)){let t=this.findSectionGroup(e.sectionName);return{source:`badge`,type:e.type,section:this._canon(e.sectionName),sectionGroup:t,category:t?.userData?.categoryName||null,row:e.row===void 0?void 0:String(e.row),seat:e.seat===void 0?void 0:String(e.seat),price:e.price??null,badge:e}}}let a=this._raycastRowsAndSeatsWithProximity(t,n,r);if(a&&this.isSectionHighlighted(a.data.section)){let e=a.data,t=this.findSectionGroup(e.section);return{source:`geometry`,type:a.isSeat?`seat`:`row`,section:e.section,sectionGroup:t,category:t?.userData?.categoryName||null,row:String(e.row),seat:a.isSeat?String(e.seat):void 0,seatStart:e.seatStart,seatEnd:e.seatEnd,seatDirection:e.seatDirection,price:a.isSeat?this._getSeatPrice(e.section,e.row,e.seat):this._getRowPrice(e.section,e.row),point:a.intersection?.point||null}}this.raycaster.setFromCamera(this.mouse,this.camera);let o=this._raycastSectionSurface();if(o&&this.isSectionHighlighted(o.userData?.sectionName)){let e=o.userData.sectionName;return{source:`geometry`,type:`section`,section:e,sectionGroup:o,category:o.userData.categoryName||null,price:this._getSectionPrice(e)}}return null}updateRaycasterCoords(e,t){let n=this._getCanvasRect();return n.width<=0||n.height<=0?!1:(this.mouse.x=(e-n.left)/n.width*2-1,this.mouse.y=-((t-n.top)/n.height)*2+1,!0)}isMinimapArea(e,t){return!!(this._tiltedSection()&&this.minimap.isMinimapArea(e,t,this.renderer.domElement))}_emitSeatSelect(e,t){let n=!!(this._selection&&this._selectionKey(this._selection)===this._selectionKey(e));this.emit(`select`,{type:e.type,section:e.section,row:e.row,seat:t?.seat??e.seats?.[0],seats:e.seats,groupId:e.groupId||null,group:e.groupId?this.getGroup(e.groupId):null,selected:n,selectedSeats:this.selectedSeats})}_isDoubleClickOnSelection(t){let n=this._lastPointerSelect;return!!(n&&n.key===t&&performance.now()-n.t<e.DOUBLE_CLICK_MS)}_rememberPointerSelect(e){this._lastPointerSelect={key:e,t:performance.now()}}_pointerSelectRow(e){let t=e.section,n=String(e.row),r=this._selectionKey({type:`row`,section:t,row:n}),i=r===this._selectionKey(this._selection);if(!(i&&this._isDoubleClickOnSelection(r))){if(i){this._batchSelection(()=>{this.activeRow=null},`pointer`),this._lastPointerSelect=null,this.emit(`select`,{type:`row`,section:t,row:n,selected:!1}),this._moveCameraFor({type:`section`,section:t},`pointer`);return}this._batchSelection(()=>this._selectRowInternal(t,n,!1,{seatStart:e.seatStart,seatEnd:e.seatEnd,seatDirection:e.seatDirection}),`pointer`),this._rememberPointerSelect(r),this.emit(`select`,{type:`row`,section:t,row:n,selected:!0}),this._moveCameraFor({type:`row`,section:t,row:n},`pointer`)}}_pointerSelectSeat(e,t,n,r=null){let i=this._seatSelectionFor(e,t,n),a=this._selectionKey(i),o=a===this._selectionKey(this._selection);o&&this._isDoubleClickOnSelection(a)||(o?this._lastPointerSelect=null:this._rememberPointerSelect(a),this._batchSelection(()=>{o?(this._replaceSelectedSeats(new Map),this._commitSelection({type:`section`,section:i.section})):this._applySeatSelection(i)},`pointer`),this._emitSeatSelect(i,{seat:String(n)}),this._moveCameraFor(o?{type:`section`,section:i.section}:i,`pointer`))}_badgeSelectSeats(e,t){this._batchSelection(()=>this._applySeatSelection(e),`badge`),this._emitSeatSelect(e,{seat:t}),this._moveCameraFor(e,`badge`)}_triggerBadgeSelection(e){if(this.cameraController.isSeatViewActive)return!1;if(this.cameraController.cancelGestures(),!this.isSectionHighlighted(e.sectionName))return!0;let t=this._canon(e.sectionName);if(e.type===`group`&&e.groupId){let t=this.getGroup(e.groupId);return t&&this._badgeSelectSeats(this._groupSelection(t),t.seats[0]),!0}if(e.type===`seat`&&e.seat!==void 0&&e.row!==void 0)return this._badgeSelectSeats(this._seatSelectionFor(t,String(e.row),String(e.seat)),String(e.seat)),!0;if(e.type===`row`&&e.row!==void 0)return this.select({type:`row`,section:t,row:e.row},{source:`badge`}),this.emit(`select`,{type:`row`,section:t,row:String(e.row)}),!0;if(e.type===`section`&&t){this.select({type:`section`,section:t},{source:`badge`});let e=this.sectionGroups[t];return this.emit(`select`,{type:`section`,section:t,category:e?.userData?.categoryName||null}),!0}return!1}handleMapSelection(e,t,n=!1){if(this.isDisposed||this.cameraController.isSeatViewActive||this.lockedSectionGroup||this.isMinimapArea(e,t)||!this.updateRaycasterCoords(e,t))return;let r=this._getCanvasRect(),i=!!(this.isMobile||n),a=this._resolveHitTarget(e-r.left,t-r.top,i);if(a){if(a.source===`badge`){this._triggerBadgeSelection(a.badge);return}if(a.type===`seat`){this._pointerSelectSeat(a.section,a.row,a.seat,a.point);return}if(a.type===`row`){this._pointerSelectRow(a);return}if(a.type===`section`&&a.sectionGroup){this.select({type:`section`,section:a.section},{source:`pointer`}),this.emit(`select`,{type:`section`,section:a.section,category:a.category});return}}this._tiltedSection()?(this._batchSelection(()=>this.unTiltTo2DTopView(600),`pointer`),clearTimeout(this._backgroundSelectTimeout),this._backgroundSelectTimeout=setTimeout(()=>{this._backgroundSelectTimeout=null,this.isDisposed||this.emit(`select`,{type:`background`})},0),this.triggerRender()):(this._batchSelection(()=>{this.activeSection=null,this.activeRow=null,this._replaceSelectedSeats(new Map),this._commitSelection(null)},`pointer`),this.updateMinimapHighlight(null),this.applySectionStates(),this.setPrices(),this.emit(`select`,{type:`background`}),this.triggerRender())}_handleDoubleTap(t){if(!this.doubleTapZoom)return!1;let n=performance.now(),r=this._lastTap;return r&&n-r.t<e.DOUBLE_TAP_MS&&Math.hypot(t.clientX-r.x,t.clientY-r.y)<e.DOUBLE_TAP_SLOP_PX&&!this.cameraController.isAnimating()&&!this.cameraController.isSeatViewActive?(this._lastTap=null,this.cameraController.zoomTowards(t.clientX,t.clientY,.5),this.triggerRender(),!0):(this._lastTap={t:n,x:t.clientX,y:t.clientY},!1)}_startLongPress(t){if(this._endLongPress(),!this.longPressPreview||t.pointerType!==`touch`||this._activePointerCount>1)return;let n={x:t.clientX,y:t.clientY,shown:!1,timer:null};n.timer=setTimeout(()=>{if(!(this.isDisposed||this._longPress!==n||this._activePointerCount!==1)&&!(this.cameraController.isAnimating()||this.cameraController.isMotionActive())){n.shown=!0,this._previewHover=!0,this.lastPointerScreenPos.x=n.x,this.lastPointerScreenPos.y=n.y,this.updateRaycasterCoords(n.x,n.y)&&(this.needsRaycast=!0,this._lastDispatchedHoverKey=null,this.triggerRender());try{navigator.vibrate?.(8)}catch{}}},e.LONG_PRESS_MS),this._longPress=n}_endLongPress(){let e=this._longPress;e&&(clearTimeout(e.timer),this._longPress=null,e.shown&&(this._previewHover=!1,this.needsRaycast=!1,this._resetPointerHover(),this.triggerRender()))}_resetPointerHover(){this._hoveredBadgeKey&&(this._hoveredBadgeKey=null,this.triggerRender()),this.lockedSectionGroup||(this.setHoveredSection(this.activeSection),this._clearHoverStates(),this.renderer.domElement.style.cursor=`default`,this._dispatchHoverEvent(null))}_onPointerMove(t){if(this.isTransitioning()||this.cameraController.isSeatViewActive)return;t.pointerType&&(this._lastPointerType=t.pointerType);let n=this._longPress;if(n&&Math.hypot(t.clientX-n.x,t.clientY-n.y)>e.LONG_PRESS_SLOP_PX&&this._endLongPress(),this.lastPointerScreenPos.x=t.clientX,this.lastPointerScreenPos.y=t.clientY,!(this._isTouchOrMobileInteraction(t.pointerType)&&this._activePointerCount>0)){if(this.isMinimapArea(t.clientX,t.clientY)){this.mouse.set(-9999,-9999),this.needsRaycast=!1,this._resetPointerHover(),this.triggerRender();return}this.updateRaycasterCoords(t.clientX,t.clientY)&&(this.needsRaycast=!0,this.triggerRender())}}_onPointerDown(t){if(this.cameraController.isSeatViewActive)return;t.pointerType&&(this._lastPointerType=t.pointerType),this._cachedCanvasRect=this.renderer.domElement.getBoundingClientRect(),this._activePointerCount++,this._pointerDownOnCanvas=!0,this.pointerDownPos.x=t.clientX,this.pointerDownPos.y=t.clientY,this._startLongPress(t);let n=this._cachedCanvasRect,r=this._isTouchOrMobileInteraction(t.pointerType)?e.MOBILE_BADGE_SLOP_PX:0,i=this.showPrices?this._hitTestBadge(t.clientX-n.left,t.clientY-n.top,r):null;this._badgePointerDownHit=i&&this.isSectionHighlighted(i.sectionName)?i:null}_onPointerCancel(){this._endLongPress(),this._activePointerCount=Math.max(0,this._activePointerCount-1),this._badgePointerDownHit=null,this._pointerDownOnCanvas=!1,this.cameraController?.cancelGestures(),this._activePointerCount===0&&this._triggerPanLabelsUpdate()}_onPointerUp(t){let n=this._pointerDownOnCanvas;if(this._pointerDownOnCanvas=!1,this.cameraController.isSeatViewActive){this._activePointerCount=0,this._badgePointerDownHit=null;return}t.pointerType&&(this._lastPointerType=t.pointerType),this._activePointerCount=Math.max(0,this._activePointerCount-1),this._activePointerCount===0&&this._triggerPanLabelsUpdate();let r=!!this._longPress?.shown;if(this._endLongPress(),r){this._badgePointerDownHit=null;return}let i=this.cameraController.consumeTapStoppedMotion?.();if(!n||i){this._badgePointerDownHit=null;return}let a=this._isTouchOrMobileInteraction(t.pointerType),o=a?16:12,s=a?14:8,c=a?e.MOBILE_BADGE_SLOP_PX:0,l=Math.abs(t.clientX-this.pointerDownPos.x),u=Math.abs(t.clientY-this.pointerDownPos.y);if(t.pointerType===`touch`&&l<=s&&u<=s&&this._handleDoubleTap(t)){this._badgePointerDownHit=null;return}if(l<=o&&u<=o&&this.showPrices){let e=this._getCanvasRect(),n=this._hitTestBadge(t.clientX-e.left,t.clientY-e.top,c)||this._badgePointerDownHit,r=n&&this.isSectionHighlighted(n.sectionName)?n:null;if(r){this._badgePointerDownHit=null,this._triggerBadgeSelection(r);return}}this._badgePointerDownHit=null,l<=s&&u<=s&&this.handleMapSelection(t.clientX,t.clientY,a)}_onPointerLeave(){this.mouse.set(-9999,-9999),this.needsRaycast=!1,this._activePointerCount=0,this._badgePointerDownHit=null,!this.isTransitioning()&&!this.cameraController.isSeatViewActive&&(this._triggerPanLabelsUpdate(),this._resetPointerHover(),this.triggerRender())}_onContextLost(e){e.preventDefault(),this._isContextLost=!0,this.renderRafId&&cancelAnimationFrame(this.renderRafId),this.renderRafId=null,this.isRenderRequested=!1,this.emit(`contextLost`,{})}_onContextRestored(){this._isContextLost=!1,this._invalidateBadgeCache(),this._lastSeatLabelsSignature=``,this._lastRowLabelsSignature=``,this.emit(`contextRestored`,{}),this.resize(),this.triggerRender()}bindEvents(){let e=this.renderer.domElement;e.addEventListener(`pointermove`,this._boundPointerMove,{passive:!0}),e.addEventListener(`pointerdown`,this._boundPointerDown,{passive:!0}),e.addEventListener(`pointerup`,this._boundPointerUp),e.addEventListener(`pointercancel`,this._boundPointerCancel),e.addEventListener(`pointerleave`,this._boundPointerLeave),e.addEventListener(`webglcontextlost`,this._boundContextLost,!1),e.addEventListener(`webglcontextrestored`,this._boundContextRestored,!1),window.addEventListener(`scroll`,this._boundScroll,{passive:!0,capture:!0})}unbindEvents(){let e=this.renderer.domElement;e.removeEventListener(`pointermove`,this._boundPointerMove),e.removeEventListener(`pointerdown`,this._boundPointerDown),e.removeEventListener(`pointerup`,this._boundPointerUp),e.removeEventListener(`pointercancel`,this._boundPointerCancel),e.removeEventListener(`pointerleave`,this._boundPointerLeave),e.removeEventListener(`webglcontextlost`,this._boundContextLost,!1),e.removeEventListener(`webglcontextrestored`,this._boundContextRestored,!1),window.removeEventListener(`scroll`,this._boundScroll,{capture:!0})}setMapVisible(e){this.isDisposed||(this.isMapVisible=!!e,this.isMapVisible&&(this.resize(),this.triggerRender()))}triggerRender(){!this.isDisposed&&!this._isContextLost&&!this.isRenderRequested&&(this.isRenderRequested=!0,this.renderRafId=requestAnimationFrame(()=>this.renderLoop()))}_updateBadgeFade(){let e=performance.now(),t=Math.min(64,Math.max(0,e-(this._badgeFadeAt||e)));this._badgeFadeAt=e;let n=this.cameraController.anim,r=n.active&&n.duration>=380&&this.cameraController.durationScale>0?0:1,i=this._badgeFade??1;i!==r&&(i=r===0?Math.max(0,i-t/120):Math.min(1,i+t/180),this._badgeFade=i,this.badgeManager.setOpacity?.(i),this.triggerRender())}_updateZoomLimits(){let e=this.cameraController,t=this.currentSvgGroup?.matrixWorld;if(!e||!t?.elements)return;let n=Math.hypot(t.elements[0],t.elements[1])||1,r=0;if(this.seatsRegistry?.size){for(let e of this.seatsRegistry.values())if(e?.diameter>0){r=e.diameter*n/.7;break}}if(!r&&this.rowsRegistry?.size){let e=[];for(let t of this.rowsRegistry.values()){let r=t?.userData?.box;if(r&&!r.isEmpty()&&e.push(Math.min(r.max.x-r.min.x,r.max.y-r.min.y)*n),e.length>=64)break}e.sort((e,t)=>e-t),r=e.length?e[Math.floor(e.length/2)]:0}let i=r>0?r*10:Math.max(this.svgGeomSize?.x||0,this.svgGeomSize?.y||0)/10;if(!(i>0))return;let a=(this.camera.fov||45)*Math.PI/180,o=this.defaultCameraPos.z||1200,s=i/(2*Math.tan(a/2));e.setMinDistance(Math.min(Math.max(s,2),o*.5))}_hitTestBadge(e,t,n=0){return(this._badgeFade??1)<.5?null:this.badgeManager.hitTestBadge(e,t,n)}renderLoop(){if(this.isRenderRequested=!1,this.isDisposed||this._isContextLost)return;let e=this.cameraController.update();if(this.shareableState&&this.currentSvgGroup){let e=this._cameraStateKey();e!==this._lastCameraStateKey&&(this._lastCameraStateKey=e,this._scheduleStateChange())}let t=this.cameraController.isMotionActive(),n=performance.now()-(this._lastYawDragTime||0)<150,r=e||n||t;(e||t)&&(this.needsRaycast=!0,this.triggerRender()),this.currentSvgGroup&&(!e||this.activeSection||this.cameraController.isSeatViewActive)&&this._visibilityInputsChanged()&&this._updateSectionCoverageAndRowsVisibility(),this._lastHoverData&&this._lastDispatchedHoverKey&&this._hoverDetailLevel()!==this._lastDispatchedHoverKey.endsWith(`:1`)&&this._dispatchHoverEvent(this._lastHoverData);let i=this.cameraController.getDistance();if(this.labelManager.update(i,this._visibleSectionsSet,r,this.defaultCameraPos.z||1200),this._updateBadgeFade(),this.badgeManager.setActiveKeys?.(this._activeBadgeKeys()),this.badgeManager.update(this._visibleSectionsSet,r),!r&&this.needsRaycast&&!this._isPointerOnMap()&&(this.needsRaycast=!1),!r&&this.needsRaycast&&this.currentSvgGroup&&!this.isExternalHoverActive&&!this.lockedSectionGroup&&!this.cameraController.isSeatViewActive){this.needsRaycast=!1;let e=this._getCanvasRect(),t=this._resolveHitTarget(this.lastPointerScreenPos.x-e.left,this.lastPointerScreenPos.y-e.top,this._isTouchOrMobileInteraction());if(t){this.renderer.domElement.style.cursor=`pointer`;let e=t.source===`badge`?this._badgeKeyOf(t.badge):null;if(e!==this._hoveredBadgeKey&&(this._hoveredBadgeKey=e,this.triggerRender()),t.type===`seat`){let e={section:t.section,row:t.row,seat:t.seat};if(this._hoveredRow){let e=this._hoveredRow;this._hoveredRow=null,this._updateRowHoverState(e,null)}if(!this._isSameElement(this._hoveredSeat,e)){let t=this._hoveredSeat;this._hoveredSeat=e,this.setHoveredSection(this.activeSection),this._updateSeatHoverState(t,e)}this._dispatchHoverEvent({type:`seat`,section:t.section,category:t.category,row:t.row,seat:t.seat,price:t.price})}else if(t.type===`row`){let e={section:t.section,row:t.row};if(this._hoveredSeat){let e=this._hoveredSeat;this._hoveredSeat=null,this._updateSeatHoverState(e,null)}if(!this._isSameElement(this._hoveredRow,e)){let t=this._hoveredRow;this._hoveredRow=e,this.setHoveredSection(this.activeSection),this._updateRowHoverState(t,e)}this._dispatchHoverEvent({type:`row`,section:t.section,category:t.category,row:t.row,price:t.price})}else if(t.type===`group`&&t.badge?.groupId){let e=this.getGroup(t.badge.groupId);if(e){if(this._hoveredRow){let e=this._hoveredRow;this._hoveredRow=null,this._updateRowHoverState(e,null)}this._hoveredSeat={section:e.section,row:e.row,seat:e.seats[0]},this._setHoveredSeatKeys(e.seatKeys),this.setHoveredSection(this.activeSection),this._dispatchHoverEvent({type:`group`,section:e.section,category:t.category,row:e.row,groupId:e.id,price:e.price})}}else t.type===`section`&&(this._clearHoverStates(),t.sectionGroup&&this.setHoveredSection(t.sectionGroup),this._dispatchHoverEvent({type:`section`,section:t.section,category:t.category,price:t.price}))}else this._resetPointerHover()}this.isMapVisible&&(this._mergedSurfaces?.sync(),this.renderer.clear(),this.renderer.info.reset(),this.renderer.render(this.scene,this.camera),this._tiltedSection()&&this.minimap.render(this.renderer))}dispose(){this.isDisposed||(this.isDisposed=!0,this._rowsAbortController?.abort(),this._rowsAbortController=null,clearTimeout(this._lodTransitionTimeout),clearTimeout(this._panDebounceTimeout),clearTimeout(this._batchListingTimeout),clearTimeout(this._backgroundSelectTimeout),clearTimeout(this._stateChangeTimeout),this._pendingState=null,this._longPress&&clearTimeout(this._longPress.timer),this._longPress=null,this.renderRafId&&cancelAnimationFrame(this.renderRafId),this.unbindEvents(),this.cameraController.dispose(),this.labelManager.dispose(),this.badgeManager.dispose(),this.minimap.dispose(),this._clearRowsGroup(),this._disposeMergedSurfaces(),this.currentSvgGroup&&=(this.scene.remove(this.currentSvgGroup),this._disposeObjectTree(this.currentSvgGroup),null),this._disposeObjectTree(this.scene),this._hoveredSeatKeys=new Set,this._selection=null,this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement?.parentNode?.removeChild(this.renderer.domElement),this.sectionGroups=of(),this._visibleSectionsSet.clear(),this._dirtyRowSections.clear(),this._allRowWorldTexts=[],this._sectionDetailBadgeCache.clear(),this._activeSection=null,this._activeRow=null,this._selectedSeats.clear(),this.hoveredSectionGroup=null,this._hoveredRow=null,this._hoveredSeat=null,this._lastDispatchedHoverKey=null,this.lockedSectionGroup=null,this.sectionsWithListings.clear(),this.rowsWithListings.clear(),this.seatsWithListings.clear(),this._sectionPrices.clear(),this._rowPrices.clear(),this._seatPrices.clear(),this._baseInventoryIndex?.clear(),this._baseInventoryIndex=null,this._inventoryIndex=null,this._filter=null,this._filterSections=null,this.highlightedSections=null)}},lf=class{constructor({container:e,disable3D:t=!1,formatPrice:n,formatGroupPrice:r,categoryColors:i=null,onSelectionChange:a=null,onFilterChange:o=null,onLoaded:s=null,onSelect:c=null,onHover:l=null,onViewModeChange:u=null,onRowsLoaded:d=null,onRowsLoadError:f=null,onActiveRowChange:p=null,onActiveSeatChange:m=null,onSelectedSeatsChange:h=null,onInventoryChange:g=null,onError:_=null,onStateChange:v=null,singlePassRows:y=!0,gridPicking:b=!0,mergeSectionMeshes:x=!0,badgeMode:S=`glyph`,shareableState:C=!0,disableAnimations:w=!1,smoothCamera:T=!0,glideTapSpeed:E=300,seatHitScale:D=1.1,frameFilterResults:O=!0,doubleTapZoom:k=!0,longPressPreview:A=!0,zoomToSelection:j=!0,loadSeats:M=!0,trackpadPan:N=!0}={}){this.container=e,this.engine=new cf({container:e,disable3D:t,formatPrice:n,formatGroupPrice:r,singlePassRows:y,gridPicking:b,mergeSectionMeshes:x,badgeMode:S,shareableState:C,disableAnimations:w,smoothCamera:T,glideTapSpeed:E,seatHitScale:D,frameFilterResults:O,doubleTapZoom:k,longPressPreview:A,zoomToSelection:j,loadSeats:M,trackpadPan:N}),this.onLoaded=s,this.onSelect=c,this.onSelectionChange=a,this.onFilterChange=o,this.categoryColors=i,this.onHover=l,this.onViewModeChange=u,this.onRowsLoaded=d,this.onRowsLoadError=f,this.onActiveRowChange=p,this.onActiveSeatChange=m,this.onSelectedSeatsChange=h,this.onInventoryChange=g,this.onError=_,this.onStateChange=v,this._setupInternalListeners(),this._setupResizeObserver()}_setupResizeObserver(){typeof ResizeObserver<`u`&&this.container?(this._resizeObserver=new ResizeObserver(()=>this.resize()),this._resizeObserver.observe(this.container)):(this._onWindowResize=()=>this.resize(),window.addEventListener(`resize`,this._onWindowResize))}_setupInternalListeners(){this.engine.on(`loaded`,e=>{let{sections:t,categories:n}=e.detail;this.engine.setCategoryColors(this.categoryColors||{}),this.onLoaded?.({sections:t,categories:n,mapInstance:this})}),this.engine.on(`select`,e=>{typeof this.onSelect==`function`&&requestAnimationFrame(()=>this.onSelect(e.detail))});for(let[e,t]of[[`selectionChange`,`onSelectionChange`],[`filterChange`,`onFilterChange`],[`hover`,`onHover`],[`viewModeChange`,`onViewModeChange`],[`rowsLoaded`,`onRowsLoaded`],[`rowsLoadError`,`onRowsLoadError`],[`activeRowChange`,`onActiveRowChange`],[`activeSeatChange`,`onActiveSeatChange`],[`selectedSeatsChange`,`onSelectedSeatsChange`],[`inventoryChange`,`onInventoryChange`],[`error`,`onError`],[`stateChange`,`onStateChange`]])this.engine.on(e,e=>this[t]?.(e.detail))}loadSVGString(e){return this.engine.loadSVGString(e)}loadSVGUrl(e,t=null,n={}){return this.engine.loadSVGUrl(e,t,n)}loadRowsSVGString(e){return this.engine.loadRowsSVGString(e)}getSelection(){return this.engine?.getSelection()??null}select(e,t={}){return this.engine.select(e,t)}selectGroup(e,t={}){return this.engine.selectGroup(e,t)}getGroup(e){return this.engine.getGroup(e)}getSeatGroup(e,t,n){return this.engine.getSeatGroup(e,t,n)}setAllowMultipleSeatSelection(e){this.engine?.setAllowMultipleSeatSelection(e)}selectSection(e,t={}){return this.engine.selectSection(e,t)}selectRow(e,t,n={}){return this.engine.selectRow(e,t,n)}selectSeat(e,t,n,r={}){return this.engine.selectSeat(e,t,n,r)}toggleSeatSelection(e){this.engine.toggleSeatSelection(e)}get selectedSeats(){return this.engine.selectedSeats}isSeatSelected(e){return this.engine.isSeatSelected(e)}clearSelectedSeats(){this.engine.clearSelectedSeats()}clearSelection(){this.engine.clearSelection()}focusCategory(e){this.engine.focusCategoryIn2DView(e)}lockSection(e,t=null,n=null){this.engine.lockSection(e,t,n)}unlockSection(){this.engine.unlockSection()}activateSeatView(e={}){this.engine?.activateSeatView(e)}exitSeatView(e=600){this.engine?.exitSeatView(e)}isSeatViewActive(){return!!this.engine?.isSeatViewActive()}is3DAvailable(){return!!this.engine?.is3DAvailable()}refocusFieldCenter(e=600){this.engine?.refocusFieldCenter(e)}setCameraYaw(e){this.engine?.setCameraYaw(e)}zoomIn(e=.65){this.engine.stepZoom(e)}zoomOut(e=1.45){this.engine.stepZoom(e)}unTiltTo2DTopView(e=600){this.engine?.unTiltTo2DTopView(e)}resetView(){this.engine.resetTo2DTopView()}resize(){this.engine?.resize()}setMapVisible(e){this.engine.setMapVisible(e)}setVisible(e){this.setMapVisible(e)}setPricesVisible(e){this.engine.setPricesVisible(e)}setMinimapMobileMode(e){this.engine?.setMinimapMobileMode(e)}hoverSection(e,t=null){this.engine.setExternalHover({sectionName:e,categoryName:t})}hoverRow(e,t,n=null){this.engine.setExternalHover({sectionName:e,row:t,categoryName:n})}hoverSeat(e,t,n,r=null){this.engine.setExternalHover({sectionName:e,row:t,seat:n,categoryName:r})}hoverGroup(e){this.engine.setExternalHover({groupId:e})}hoverCategory(e){this.engine.setExternalHover({categoryName:e})}clearHover(){this.engine.clearExternalHover()}highlightSections(e,t={}){this.engine.highlightSections(e,t)}highlightCategory(e,t={}){this.engine.highlightCategory(e,t)}clearHighlight(e={}){this.engine.clearHighlight(e)}isSectionHighlighted(e){return!!this.engine?.isSectionHighlighted(e)}setFilter(e,t={}){return this.engine.setFilter(e,t)}clearFilter(){return this.engine.clearFilter()}getFilter(){return this.engine.getFilter()}getFilterResult(){return this.engine.getFilterResult()}getLegend(){return this.engine.getLegend()}setCategoryColors(e){this.categoryColors=e,this.engine.setCategoryColors(e)}setInventory(e){return this.engine.setInventory(e)}getInventory(e,t=null,n=null){return this.engine.getInventory(e,t,n)}getCategoryInventory(e){return this.engine.getCategoryInventory(e)}setAvailableSections(e){this.engine.setAvailableSections(e)}setAvailableRows(e){this.engine.setAvailableRows(e)}setAvailableSeats(e){this.engine.setAvailableSeats(e)}updateActiveSections(e){this.setAvailableSections(e)}updateActiveRows(e){this.setAvailableRows(e)}updateActiveSeats(e){this.setAvailableSeats(e)}setPrices(e,t=null,n=null){this.engine.setPrices(e,t,n)}renderPriceBadges(e,t=null,n=null){this.setPrices(e,t,n)}getState(){return this.engine?.getState()??null}setState(e,t={}){return this.engine.setState(e,t)}setDisableAnimations(e){this.engine?.setDisableAnimations(e)}setSmoothCamera(e){this.engine?.setSmoothCamera(e)}setZoomToSelection(e){this.engine?.setZoomToSelection(e)}setTrackpadPan(e){this.engine?.setTrackpadPan(e)}getScreenCoordinates(e,t,n=0){return this.engine.getScreenCoordinates(e,t,n)}getAvailableRowsBySection(){return this.engine.getAvailableRowsBySection?.()||{}}getSeatLayout(){return this.engine.getSeatLayout?.()||{}}getCategoryColor(e){return this.engine.getCategoryColor(e)}getAllCategoryColors(){return this.engine.getAllCategoryColors()}getSectionsByCategory(e){return Object.entries(this.engine.sectionGroups||{}).filter(([,t])=>t.userData?.categoryName===e).map(([e])=>e)}getCategoryForSection(e){return(this.engine.findSectionGroup?.(e))?.userData?.categoryName||null}dispose(){this._resizeObserver?.disconnect(),this._resizeObserver=null,this._onWindowResize&&=(window.removeEventListener(`resize`,this._onWindowResize),null),this.engine?.dispose(),this.engine=null}},uf=class{constructor(e,t=null,n=null){if(this.canvas=e,this.hintEl=t,this.containerEl=n||e.parentElement,this.isInteractive=!0,this.onYawChange=null,this.gl=e.getContext(`webgl2`,{antialias:!0,alpha:!1,premultipliedAlpha:!1}),!this.gl){console.error(`WebGL 2 not supported for panorama preview`);return}let r=(e,t,n)=>{let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.error(e.getShaderInfoLog(r)),e.deleteShader(r),null)},i=this.gl;this.program=i.createProgram(),this.vs=r(i,i.VERTEX_SHADER,`#version 300 es
        in vec2 a_pos;
        void main() {
            gl_Position = vec4(a_pos, 0.0, 1.0);
        }`),this.fs=r(i,i.FRAGMENT_SHADER,`#version 300 es
        precision highp float;
        out vec4 fragColor;

        uniform sampler2D u_pano;
        uniform vec2 u_resolution;
        uniform float u_yaw;
        uniform float u_fov;
        uniform float u_pano_hfov;
        uniform float u_pano_vfov;

        void main() {
            vec2 screenPos = (gl_FragCoord.xy / u_resolution) * 2.0 - 1.0;
            float screenAspect = u_resolution.x / max(u_resolution.y, 1.0);

            float f = 1.0 / tan(u_fov * 0.5);
            vec3 ray = normalize(vec3(screenPos.x, screenPos.y / screenAspect, -f));

            float cy = cos(u_yaw);
            float sy = sin(u_yaw);
            ray = vec3(ray.x * cy + ray.z * sy, ray.y, -ray.x * sy + ray.z * cy);

            float u = (atan(ray.x, -ray.z) / u_pano_hfov) + 0.5;
            float v = (atan(ray.y, length(vec2(ray.x, ray.z))) / u_pano_vfov) + 0.5;

            if (u < 0.0 || u > 1.0 || v < 0.0 || v > 1.0) {
                fragColor = vec4(0.08, 0.12, 0.20, 1.0);
            } else {
                fragColor = texture(u_pano, vec2(u, v));
            }
        }`),i.attachShader(this.program,this.vs),i.attachShader(this.program,this.fs),i.linkProgram(this.program),i.useProgram(this.program),this.vao=i.createVertexArray(),i.bindVertexArray(this.vao),this.posBuffer=i.createBuffer(),i.bindBuffer(i.ARRAY_BUFFER,this.posBuffer),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),i.STATIC_DRAW);let a=i.getAttribLocation(this.program,`a_pos`);i.enableVertexAttribArray(a),i.vertexAttribPointer(a,2,i.FLOAT,!1,0,0),this.uResLoc=i.getUniformLocation(this.program,`u_resolution`),this.uYawLoc=i.getUniformLocation(this.program,`u_yaw`),this.uFovLoc=i.getUniformLocation(this.program,`u_fov`),this.uPanoHfovLoc=i.getUniformLocation(this.program,`u_pano_hfov`),this.uPanoVfovLoc=i.getUniformLocation(this.program,`u_pano_vfov`),this.PHOTO_HFOV=Math.PI,this.fov=90*Math.PI/180,this.photoVfov=90*Math.PI/180,this.yaw=0,this._cachedCssWidth=600,this._cachedCssHeight=340,this._needsResize=!0,this._dragRafId=null,this.hintAnimId=null,this._hintTimerId=null,this.hintDismissed=!1,this.texture=i.createTexture(),i.bindTexture(i.TEXTURE_2D,this.texture),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),this._setupInteractions()}_clampYaw(){let e=Math.max(0,(this.PHOTO_HFOV-this.fov)*.5);this.yaw=Math.max(-e,Math.min(e,this.yaw))}_clearHintTimers(){this.hintAnimId&&=(cancelAnimationFrame(this.hintAnimId),null),this._hintTimerId&&=(clearTimeout(this._hintTimerId),null)}resetYaw(){this.dismissHint(),this.setYaw(0)}setYaw(e){this.yaw=e,this._clampYaw(),this.onYawChange?.(this.yaw),this.render()}dismissHint(){this._clearHintTimers(),this.hintEl&&!this.hintDismissed&&(this.hintDismissed=!0,this.hintEl.classList.add(`dismissed`),this._hintTimerId=setTimeout(()=>{this.hintEl&&this.hintDismissed&&(this.hintEl.style.display=`none`)},550))}playHintAnimation(){if(!this.isInteractive)return;this._clearHintTimers(),this.hintDismissed=!1,this.hintEl&&(this.hintEl.style.display=`flex`,this.hintEl.classList.remove(`dismissed`),this._hintTimerId=setTimeout(()=>this.hintEl?.classList.add(`is-visible`),50));let e=Math.min(.2,(this.PHOTO_HFOV-this.fov)*.5),t=performance.now(),n=2100,r=i=>{let a=i-t;if(a>=n){this.setYaw(0),this.hintAnimId=null,this._hintTimerId=setTimeout(()=>this.dismissHint(),1500);return}let o=a/n;this.yaw=Math.sin(o*Math.PI*2)*e*(1-o*.3),this._clampYaw(),this.onYawChange?.(this.yaw),this.render(),this.hintAnimId=requestAnimationFrame(r)};this.hintAnimId=requestAnimationFrame(r)}_setupInteractions(){let e=!1,t=0;typeof ResizeObserver<`u`&&this.containerEl&&(this._ro=new ResizeObserver(e=>{let t=e[0]?.contentRect;t&&t.width>0&&t.height>0&&(this._cachedCssWidth=t.width,this._cachedCssHeight=t.height,this._needsResize=!0,this.render())}),this._ro.observe(this.containerEl)),this._onPointerDown=n=>{this.isInteractive&&(n.stopPropagation(),this.dismissHint(),e=!0,t=n.clientX,this._cachedCssWidth=this.canvas.clientWidth||this.containerEl?.clientWidth||600,this.canvas.setPointerCapture(n.pointerId))},this._onPointerMove=n=>{if(!e||!this.isInteractive)return;n.stopPropagation();let r=n.clientX-t;r!==0&&(t=n.clientX,this.yaw-=r*(this.fov/Math.max(this._cachedCssWidth,1)),this._clampYaw(),this._dragRafId||=requestAnimationFrame(()=>{this._dragRafId=null,this.onYawChange?.(this.yaw),this.render()}))},this._stopDrag=t=>{e&&t?.pointerId&&this.canvas.hasPointerCapture(t.pointerId)&&this.canvas.releasePointerCapture(t.pointerId),e=!1},this._onWheel=e=>{e.preventDefault(),e.stopPropagation()},this.canvas.addEventListener(`pointerdown`,this._onPointerDown),window.addEventListener(`pointermove`,this._onPointerMove,{passive:!0}),window.addEventListener(`pointerup`,this._stopDrag),window.addEventListener(`pointercancel`,this._stopDrag),this.canvas.addEventListener(`wheel`,this._onWheel,{passive:!1}),this.containerEl&&this.containerEl!==this.canvas&&this.containerEl.addEventListener(`wheel`,this._onWheel,{passive:!1})}loadTexture(e,t=!0){if(!this.gl)return;this.isInteractive=t,this._clearHintTimers();let n=t?`grab`:`default`;this.containerEl&&(this.containerEl.style.cursor=n),this.canvas&&(this.canvas.style.cursor=n);let r=(e.naturalWidth||e.width||1)/(e.naturalHeight||e.height||1);this.photoVfov=Math.max(this.PHOTO_HFOV/Math.max(r,.1),65*Math.PI/180),this.yaw=0,this.fov=90*Math.PI/180;let i=this.gl;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!0),i.bindTexture(i.TEXTURE_2D,this.texture),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,e),this._clampYaw(),this._needsResize=!0,this.onYawChange?.(this.yaw),requestAnimationFrame(()=>{this.resize(),this.render(),this.isInteractive?this.playHintAnimation():(this.dismissHint(),this.hintEl&&(this.hintEl.style.display=`none`))})}resize(){if(!this.gl)return!1;let e=this.canvas.clientWidth||this.containerEl?.clientWidth||this._cachedCssWidth||600,t=this.canvas.clientHeight||this.containerEl?.clientHeight||this._cachedCssHeight||340;this._cachedCssWidth=e,this._cachedCssHeight=t;let n=Math.min(window.devicePixelRatio||1,2),r=Math.floor(e*n),i=Math.floor(t*n);return r>0&&i>0&&((this.canvas.width!==r||this.canvas.height!==i)&&(this.canvas.width=r,this.canvas.height=i,this.gl.viewport(0,0,r,i)),this._clampYaw(),this._needsResize=!1,!0)}render(){if(!this.gl)return;this._needsResize&&this.resize();let e=this.gl;e.useProgram(this.program),e.bindVertexArray(this.vao),e.uniform2f(this.uResLoc,this.canvas.width||600,this.canvas.height||340),e.uniform1f(this.uYawLoc,this.yaw),e.uniform1f(this.uFovLoc,this.fov),e.uniform1f(this.uPanoHfovLoc,this.PHOTO_HFOV),e.uniform1f(this.uPanoVfovLoc,this.photoVfov),e.drawArrays(e.TRIANGLES,0,6)}dispose(){this.dismissHint(),this._dragRafId&&cancelAnimationFrame(this._dragRafId),this._ro?.disconnect(),this.canvas.removeEventListener(`pointerdown`,this._onPointerDown),window.removeEventListener(`pointermove`,this._onPointerMove),window.removeEventListener(`pointerup`,this._stopDrag),window.removeEventListener(`pointercancel`,this._stopDrag),this.canvas.removeEventListener(`wheel`,this._onWheel),this.containerEl&&this.containerEl!==this.canvas&&this.containerEl.removeEventListener(`wheel`,this._onWheel);let e=this.gl;e&&(this.texture&&e.deleteTexture(this.texture),this.posBuffer&&e.deleteBuffer(this.posBuffer),this.vao&&e.deleteVertexArray(this.vao),this.program&&(this.vs&&e.deleteShader(this.vs),this.fs&&e.deleteShader(this.fs),e.deleteProgram(this.program)))}},df=`venueMapDemoSettings.v1`,ff=[{title:`Map & view`,items:[{key:`zoomToSelection`,label:`Zoom to selection`,hint:`Zoom in to the selected row, seat or listing. Off: no zoom; with 3D on, a selection still tilts into its section.`,type:`toggle`,default:!0},{key:`view3D`,label:`3D section view`,hint:`Selecting a section tilts into 3D. Off: 2D only.`,type:`toggle`,default:!0},{key:`rowsAndSeats`,label:`Rows & seats`,hint:`Load the rows/seats layer (zoom in to see it). Off: sections only.`,type:`toggle`,default:!0},{key:`seats`,label:`Seats`,hint:`Build seats from the rows layer. Off: sections and rows only (seat listings show on their row).`,type:`toggle`,default:!0},{key:`seatViewPhotos`,label:`Seat-view photos`,hint:`Photo in the section tooltip (overview only). Default map only.`,type:`toggle`,default:!0},{key:`shareableState`,label:`Shareable links`,hint:`The URL mirrors selection, filter and view.`,type:`toggle`,default:!0}]},{title:`Interaction`,items:[{key:`animations`,label:`Camera animations`,hint:`Off: every camera move is instant.`,type:`toggle`,default:!0},{key:`smoothCamera`,label:`Glide & smooth zoom`,hint:`Pan inertia after a flick, eased wheel and button zoom.`,type:`toggle`,default:!0},{key:`trackpadPan`,label:`Mac trackpad: scroll pans`,hint:`macOS only: two-finger scroll moves the map, pinch zooms. Windows/Linux: the wheel always zooms.`,type:`toggle`,default:!0},{key:`frameFilterResults`,label:`Frame filter results`,hint:`After a filter change, glide to the matching sections.`,type:`toggle`,default:!0},{key:`doubleTapZoom`,label:`Double-tap zoom (phones)`,hint:`Second quick tap zooms in at the finger.`,type:`toggle`,default:!0},{key:`longPressPreview`,label:`Long-press preview (phones)`,hint:`Hold to preview without selecting.`,type:`toggle`,default:!0},{key:`seatHitScale`,label:`Seat hit area`,hint:`× row thickness (seats are drawn at 0.7).`,type:`number`,min:.7,max:2,step:.1,default:1.1},{key:`glideTapSpeed`,label:`Glide tap speed`,hint:`px/s. Faster glide: a tap only stops the map.`,type:`number`,min:0,max:2e3,step:50,default:300}]},{title:`Performance (switch off only to compare)`,items:[{key:`gridPicking`,label:`Grid picking`,hint:`Fast seat/row picking. Off: old raycasting.`,type:`toggle`,default:!0},{key:`mergeSectionMeshes`,label:`Merged section meshes`,hint:`Fewer draw calls for sections.`,type:`toggle`,default:!0},{key:`singlePassRows`,label:`Single-pass rows parsing`,hint:`Faster rows loading, applies SVG transforms.`,type:`toggle`,default:!0},{key:`badgeMode`,label:`Price tags`,hint:`Glyph: fit their text, black active look.`,type:`select`,options:[[`glyph`,`Glyph (new)`],[`legacy`,`Legacy`]],default:`glyph`},{key:`maxPixelRatio`,label:`Max pixel ratio`,hint:`Sharper on high-DPI screens, more GPU work.`,type:`select`,options:[[`1`,`1`],[`1.5`,`1.5`],[`2`,`2`]],default:`2`}]}],pf=ff.flatMap(e=>e.items),mf=Object.fromEntries(pf.map(e=>[e.key,e.default]));function hf(e){let t={...mf};if(!e||typeof e!=`object`)return t;for(let n of pf){let r=e[n.key];n.type===`toggle`&&typeof r==`boolean`?t[n.key]=r:n.type===`number`&&Number.isFinite(Number(r))?t[n.key]=Math.min(n.max,Math.max(n.min,Number(r))):n.type===`select`&&n.options.some(([e])=>e===String(r))&&(t[n.key]=String(r))}return t}function gf(){try{return hf(JSON.parse(localStorage.getItem(df)||`null`))}catch{return{...mf}}}function _f(e){try{localStorage.setItem(df,JSON.stringify(e))}catch{}}var vf=gf(),yf=`https://honeybadger7846.github.io/thumbnail/Default.jpg`,bf=`https://honeybadger7846.github.io/panoramic/Default.jpg`,xf=`#29CCA2`,Sf=document.getElementById(`map-container`),Cf=document.getElementById(`map-section-panel`),wf=document.getElementById(`ctrl-mode-2d`),Tf=document.getElementById(`btn-toggle-map`),Ef=document.getElementById(`btn-toggle-map-label`),Df=document.getElementById(`resizer-divider`),Of=document.getElementById(`sidebar-panel`),kf=document.getElementById(`page-body`),Af=document.getElementById(`toggle-prices-checkbox`),jf=document.getElementById(`categories-container`),Mf=document.getElementById(`cat-scroll-left`),Nf=document.getElementById(`cat-scroll-right`),Pf=document.getElementById(`detail-view`),Ff=document.getElementById(`back-to-list-btn`),If=document.getElementById(`panorama-container`),Lf=document.getElementById(`pano-loading`),Rf=document.getElementById(`pano-gl-canvas`),zf=document.getElementById(`pano-drag-hint`),Bf=document.getElementById(`dt-photo-caption`),Vf=document.getElementById(`upload-modal`);document.getElementById(`multiple-seat-selection-checkbox`)?.closest(`label`)?.remove(),document.getElementById(`multi-select-pill`)?.remove();function Q(e,t={},...n){let r=document.createElement(e);t.className&&(r.className=t.className),t.text!==void 0&&t.text!==null&&(r.textContent=String(t.text)),t.style&&Object.assign(r.style,t.style);for(let e of n)e!=null&&e!==!1&&r.appendChild(typeof e==`string`?document.createTextNode(e):e);return r}function Hf(e,t=xf){return typeof e==`string`&&/^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i.test(e.trim())?e.trim():t}function Uf(e){let t=Number(e);return Number.isFinite(t)?`€${Math.round(t*100)/100}`:``}function Wf(e){if(e==null)return``;let t=String(e).trim();return/^\d+$/.test(t)?t.replace(/^0+(?=\d)/,``):t.toUpperCase()}function Gf(e){if(!e?.length)return``;if(e.length===1)return e[0];let t=e.map(Number);return t.every(Number.isInteger)&&t.every((e,n)=>n===0||e===t[n-1]+1)?`${e[0]}–${e[e.length-1]}`:e.join(`, `)}function Kf(e,t,n=`#94a3b8`){e&&e.replaceChildren(Q(`div`,{text:t,style:{padding:`24px`,textAlign:`center`,color:n,fontSize:`13.5px`}}))}var $=null,qf=Rf?new uf(Rf,zf,If):null;qf&&(qf.onYawChange=e=>{$&&!$.engine?.isTransitioning?.()&&$.setCameraYaw(e)});var Jf=document.createElement(`div`);Jf.id=`venue-map-tooltip`,Object.assign(Jf.style,{position:`fixed`,top:`0px`,left:`0px`,pointerEvents:`none`,zIndex:`9999`,padding:`5px 11px`,background:`#ffffff`,color:`#334155`,borderRadius:`8px`,fontSize:`11px`,fontWeight:`500`,lineHeight:`1.3`,textAlign:`center`,boxShadow:`0 4px 12px -2px rgba(0, 0, 0, 0.1), 0 2px 5px -1px rgba(0, 0, 0, 0.04)`,border:`1px solid rgba(0, 0, 0, 0.06)`,display:`none`,whiteSpace:`nowrap`,willChange:`transform`,fontFamily:`system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`}),document.body.appendChild(Jf);var Yf=!1,Xf=120,Zf=30,Qf=0,$f=0,ep=null,tp=`2d`;function np(){Yf=!1,Jf.style.display=`none`,ep&&=(cancelAnimationFrame(ep),null)}function rp(){if(ep=null,!Yf)return;let e=Qf+10,t=$f+10;e+Xf>window.innerWidth-8&&(e=Qf-Xf-10),t+Zf>window.innerHeight-8&&(t=$f-Zf-10),Jf.style.transform=`translate3d(${e}px, ${t}px, 0)`}window.addEventListener(`pointermove`,e=>{Yf&&(Qf=e.clientX,$f=e.clientY,ep||=requestAnimationFrame(rp))},{passive:!0});var ip=[],ap=[],op=new Set,sp={quantity:1,together:!1,minPrice:null,maxPrice:null},cp=null,lp=(()=>{if(!vf.shareableState)return null;try{return Qd(window.location.search)}catch{return null}})();if(lp?.filter){let e=lp.filter;(e.categories||[]).forEach(e=>op.add(e)),sp.quantity=e.quantity||1,sp.together=!!e.together&&sp.quantity>1,sp.minPrice=e.price?.[0]??null,sp.maxPrice=e.price?.[1]??null}var up=null;function dp(e){vf.shareableState&&e&&(clearTimeout(up),up=setTimeout(()=>{try{let t=Zd(e,{params:new URLSearchParams(window.location.search)}).toString(),n=`${window.location.pathname}${t?`?${t}`:``}${window.location.hash}`;n!==`${window.location.pathname}${window.location.search}${window.location.hash}`&&window.history.replaceState(window.history.state,``,n)}catch{}},150))}var fp=25,pp=fp;function mp(e){if(!e)return``;let t=String(e).trim(),n=t.lastIndexOf(`_`);return(n===-1?t:t.substring(n+1)).toUpperCase()}function hp(e){return e?String(e).replace(/-/g,` `).toLowerCase().replace(/\b\w/g,e=>e.toUpperCase()):`Standard`}function gp(e){let t=e.category||(e.section?$?.getCategoryForSection(e.section):null);if(e.type===`category`||tp===`category`){let e=t?$?.getCategoryInventory(t):null;return{count:e?.count??0,minPrice:e?.minPrice??null}}let n=e.stats;if(n?.count)return{count:n.count,minPrice:n.minPrice};if(e.type===`section`&&t){let e=$?.getCategoryInventory(t);if(e?.count)return{count:e.count,minPrice:e.minPrice}}return{count:0,minPrice:null}}function _p(){return!!($?.engine?.isMobile||window.innerWidth<=768)}function vp(){let e=window.innerWidth<=768;$?.setMinimapMobileMode(e),e&&np()}function yp(){$&&$.setInventory(ip.map(e=>({id:e.id,section:e.section,row:e.row,seats:e.seats,quantity:e.quantity,together:e.together,price:e.price,category:e.category})))}var bp=new Map,xp=new Map;function Sp(e){if(!e)return yf;let t=bp.get(e)||bp.get(mp(e))||mp(e);return t?`https://honeybadger7846.github.io/thumbnail/${Ip(t)}.jpg`:yf}function Cp(e,t,n=null){let r=Sp(e);xp.get(r)===`failed`&&(r=yf);let i=Q(`img`,{style:{display:`block`,objectFit:`cover`,background:`#f1f5f9`,...t}});return i.alt=`View from the section`,i.decoding=`async`,i.onload=()=>{xp.set(i.src,`ok`),n?.()},i.onerror=()=>{xp.set(i.src,`failed`),i.src===yf?(i.style.display=`none`,n?.()):i.src=yf},i.src=r,i}function wp(){Yf&&(Xf=Jf.offsetWidth||Xf,Zf=Jf.offsetHeight||Zf,rp())}function Tp(){return Dm.kind==="default"}function Ep(e,t=null,n=null){let r=e.map(e=>Q(`div`,{text:e}));t&&r.push(Q(`div`,{text:t,style:{color:`#94a3b8`,fontSize:`10px`}})),vf.seatViewPhotos&&Tp()&&n&&r.unshift(Cp(n,{width:`200px`,height:`112px`,borderRadius:`6px`,margin:`2px auto 6px`},wp)),Jf.replaceChildren(...r)}function Dp(e){let t=e.section?String(e.section).trim():``,n=e.detailLevel?null:t||null,r=mp(t),i=e.category||(t?$?.getCategoryForSection(t):null),a=i?hp(i):``;if(e.group){let t=e.group;Ep([`Section ${mp(t.section)} · Row ${t.row} · Seats ${Gf(t.seats)}`,`${t.quantity} seats together · ${Uf(t.price)} each (${Uf(t.total)} total)`],null,n);return}let{count:o,minPrice:s}=gp(e),c=r?`Section ${r}`:a||`Tickets`;if(e.type===`seat`?c=`Section ${r} · Row ${e.row} · Seat ${e.seat}`:e.type===`row`?c=`Section ${r} · Row ${e.row}`:(e.type===`category`||tp===`category`)&&(c=a||c),o>0){let t=[c,`${o} listing${o===1?``:`s`} available${s===null?``:` from ${Uf(s)}`}.`],r=e.stats?.maxTogether||0;e.type!==`seat`&&r>=2&&t.push(`Up to ${r} seats together`),Ep(t,null,n)}else Ep([c],`Sold out`,n)}function Op(e){if(!e){ym(Wp());return}switch(e.type){case`section`:Yp(e.section);break;case`row`:Xp(e.section,e.row);break;case`seat`:Zp(e.section,e.row,e.seats[0]);break;case`group`:Qp(e.groupId)}}var kp=null;function Ap(){if($)return $;let e=vf;return $=new lf({container:Sf,disable3D:!e.view3D,maxPixelRatio:Number(e.maxPixelRatio),disableAnimations:!e.animations,smoothCamera:e.smoothCamera,frameFilterResults:e.frameFilterResults,doubleTapZoom:e.doubleTapZoom,longPressPreview:e.longPressPreview,zoomToSelection:e.zoomToSelection,loadSeats:e.seats,trackpadPan:e.trackpadPan,seatHitScale:e.seatHitScale,glideTapSpeed:e.glideTapSpeed,gridPicking:e.gridPicking,mergeSectionMeshes:e.mergeSectionMeshes,singlePassRows:e.singlePassRows,badgeMode:e.badgeMode,onLoaded:({sections:e})=>{Dm.kind===`custom`?Em=e||[]:wm(e)},onSelectionChange:({selection:e})=>Op(e),onHover:e=>{if(_p()&&!e?.preview||!e?.type||Pf.classList.contains(`active`)){np();return}Dp(e),Yf=!0,Jf.style.display=`block`,Xf=Jf.offsetWidth||120,Zf=Jf.offsetHeight||30,e.clientX!==void 0&&e.clientY!==void 0&&(Qf=e.clientX,$f=e.clientY,rp())},onViewModeChange:({mode:e})=>{tp=e,wf.style.display=e===`3d`||e===`category`||e===`seatView`?`flex`:`none`},onError:e=>console.error(`[demo] Map error:`,e?.code,e?.message),shareableState:e.shareableState,onStateChange:({state:e})=>dp(e)}),window.ResizeObserver&&Sf&&!kp&&(kp=new ResizeObserver(()=>{vp(),Fp()}),kp.observe(Sf)),vp(),$}Af.addEventListener(`change`,e=>$?.setPricesVisible(e.target.checked)),document.getElementById(`ctrl-zoom-in`).addEventListener(`click`,e=>{e.stopPropagation(),$?.zoomIn(.65)}),document.getElementById(`ctrl-zoom-out`).addEventListener(`click`,e=>{e.stopPropagation(),$?.zoomOut(1.45)}),document.getElementById(`ctrl-reset-view`).addEventListener(`click`,e=>{e.stopPropagation(),Vp(),$p(!0),$?.resetView()}),wf.addEventListener(`click`,e=>{e.stopPropagation(),Vp(),$p(!0),$?.unTiltTo2DTopView(600)});var jp=window.innerWidth>768;Tf.addEventListener(`click`,e=>{e.stopPropagation(),jp=!jp,Cf.classList.toggle(`is-visible`,jp),Ef.textContent=jp?`Hide Map`:`Show Map`,$&&(jp?setTimeout(()=>$.setMapVisible(!0),40):$.setMapVisible(!1))});var Mp=!1;Df.addEventListener(`pointerdown`,e=>{Mp=!0,Df.classList.add(`dragging`),document.body.classList.add(`is-resizing`),Df.setPointerCapture(e.pointerId)}),window.addEventListener(`pointermove`,e=>{if(!Mp)return;let t=kf.getBoundingClientRect(),n=Math.min(500,Math.max(320,t.width-320)),r=Math.max(n,t.width*.75);Of.style.width=`${Math.min(Math.max(t.right-e.clientX,n),r)}px`,Pp()});function Np(e){Mp&&(Mp=!1,Df.classList.remove(`dragging`),document.body.classList.remove(`is-resizing`),e?.pointerId&&Df.hasPointerCapture(e.pointerId)&&Df.releasePointerCapture(e.pointerId),Pp())}window.addEventListener(`pointerup`,Np),window.addEventListener(`pointercancel`,Np);function Pp(){if(!Pf||!Of)return;if(window.innerWidth<=768){Pf.style.width=`100vw`;return}let e=Of.getBoundingClientRect().width+(Df?Df.getBoundingClientRect().width:0);e>0&&(Pf.style.width=`${e}px`)}window.addEventListener(`resize`,()=>{Pp(),vp(),Fp(),window.innerWidth>768?(jp=!0,Cf.classList.remove(`is-visible`),Ef.textContent=`Hide Map`,$?.setMapVisible(!0)):Cf.classList.contains(`is-visible`)||(jp=!1,Ef.textContent=`Show Map`,$?.setMapVisible(!1))});function Fp(){if(!jf)return;let e=jf.scrollWidth-jf.clientWidth;Mf.style.display=e>2&&jf.scrollLeft>4?`flex`:`none`,Nf.style.display=e>2&&jf.scrollLeft<e-4?`flex`:`none`}jf.addEventListener(`scroll`,Fp,{passive:!0}),Mf.addEventListener(`click`,e=>{e.stopPropagation(),jf.scrollBy({left:-220,behavior:`smooth`})}),Nf.addEventListener(`click`,e=>{e.stopPropagation(),jf.scrollBy({left:220,behavior:`smooth`})});function Ip(e){return encodeURIComponent(String(e).trim())}function Lp(e){return e.quantity<=1?`1 ticket`:e.together?`${e.quantity} seats together`:`${e.quantity} tickets (not together)`}function Rp(e){let t=e.displayCategoryName;return e.displaySectionName&&(t+=` · Section ${e.displaySectionName}`),e.row&&(t+=` · Row ${e.row}`),e.seats.length===1?t+=` · Seat ${e.seats[0]}`:e.seats.length>1&&(t+=` · Seats ${Gf(e.seats)}`),t}function zp(e){np(),Pp(),Pf.classList.add(`active`);let t=document.getElementById(`dt-multi-seats-container`),n=document.getElementById(`dt-multi-seats-list`),r=document.getElementById(`dt-multi-seats-count`),i=document.getElementById(`dt-seats-together-feature`);document.getElementById(`dt-cat`).textContent=e.displayCategoryName;let a=e.displayCategoryName;e.section&&(a+=` · Section ${e.displaySectionName}`),e.row&&(a+=` · Row ${e.row}`),document.getElementById(`dt-cat-desc`).textContent=a,i&&(i.textContent=Lp(e)),t&&n&&(e.seats.length>1?(t.classList.add(`is-visible`),r&&(r.textContent=`${e.seats.length} tickets`),n.replaceChildren(...e.seats.map(t=>Q(`div`,{className:`dt-multi-seat-item`},Q(`div`,{className:`dt-multi-seat-left`},Q(`span`,{text:`Sec ${e.displaySectionName}`,style:{fontWeight:`700`,color:`#111827`}}),Q(`span`,{text:`· Row ${e.row}`,style:{color:`#64748b`}}),Q(`span`,{text:`· Seat ${t}`,style:{color:`#0f172a`,fontWeight:`700`}})),Q(`span`,{className:`dt-multi-seat-price`,text:Uf(e.price)}))))):(t.classList.remove(`is-visible`),n.replaceChildren()));let o=document.getElementById(`dt-math-qty`);o&&(o.textContent=String(e.quantity)),document.getElementById(`dt-price`).textContent=Uf(e.price),document.getElementById(`dt-total`).textContent=Uf(e.price*e.quantity);let s=Tp();If.style.display=s?``:`none`,Bf.style.display=s?`block`:`none`,s&&Bp(e),$&&e.section&&$.lockSection(e.section,e.row,e.seats[0]??null)}function Bp(e){let t=e.displaySectionName||e.displayCategoryName||``,n=[bf];if(t){Bf.textContent=e.section?`Representative view from Section ${t}`:`Representative view from ${t}`,Bf.style.display=`block`;let r=Ip(t);n=[`https://honeybadger7846.github.io/panoramic/${r}.jpg`,`https://honeybadger7846.github.io/panoramic/${r}.jpeg`,bf]}else Bf.textContent=`Representative view`,Bf.style.display=`block`;Lf.style.display=`flex`,Lf.textContent=`Loading View...`,Rf.style.display=`none`,zf&&(zf.style.display=`none`,zf.classList.remove(`is-visible`,`dismissed`));let r=0,i=()=>{if(r>=n.length){Rf.style.display=`none`,Lf.style.display=`flex`,Lf.textContent=`View not available for this selection`;return}let e=n[r++],t=new Image;t.crossOrigin=`anonymous`,t.onload=async()=>{try{await t.decode?.()}catch{}if(Lf.style.display=`none`,Rf.style.display=`block`,qf){let n=!(e===bf||e.endsWith(`/Default.jpg`));requestAnimationFrame(()=>qf.loadTexture(t,n))}},t.onerror=i,t.src=e};i()}function Vp(){Pf.classList.contains(`active`)&&(Pf.classList.remove(`active`),qf?.dismissHint(),$?.unlockSection())}Ff.addEventListener(`click`,e=>{e.stopPropagation(),Vp()}),window.addEventListener(`pointerdown`,e=>{Pf.classList.contains(`active`)&&!Pf.contains(e.target)&&!e.target.closest(`.ticket-card`)&&Vp()});function Hp(){if(!$)return;let e=$.setFilter({categories:[...op],quantity:sp.quantity,together:sp.together,price:[sp.minPrice,sp.maxPrice]});cp=$.getFilter()?new Set(e.listingIds):null,sm()}function Up(e){return!(e.quantity<sp.quantity||sp.together&&sp.quantity>1&&!e.together||sp.minPrice!==null&&e.price<sp.minPrice||sp.maxPrice!==null&&e.price>sp.maxPrice)}function Wp(){return cp?ip.filter(e=>cp.has(e.id)):ip}function Gp(){Hp(),em(),Op($?.getSelection()??null)}function Kp(e){let t=document.getElementById(`listing-count-header`);t&&(t.textContent=e)}function qp(e){op.has(e)?op.delete(e):op.add(e),$?.clearHover(),Gp()}function Jp(e,t){return e.section===t||e.cleanSec&&e.cleanSec===mp(t)}function Yp(e){if(!e){ym(Wp());return}let t=$?.getCategoryForSection(e)||null;ym(Wp().filter(n=>Jp(n,e)||!n.section&&n.category===t))}function Xp(e,t){let n=Wf(t),r=Wp().filter(t=>Jp(t,e)),i=r.filter(e=>e.rowKey===n);ym(i.length>0?i:r),Kp(i.length>0?`${i.length} listings in Row ${t}`:`${r.length} listings in Section ${mp(e)} (Row ${t} sold out)`)}function Zp(e,t,n){let r=Wf(t),i=Wf(n),a=Wp().filter(t=>Jp(t,e)&&t.rowKey===r&&t.seatKeys.includes(i));ym(a),Kp(`Seat ${n} · Row ${t} (${a.length} listing${a.length===1?``:`s`})`)}function Qp(e){let t=ip.filter(t=>t.id===e);ym(t);let n=t[0];n&&Kp(`${n.quantity} seats together · Row ${n.row} · Seats ${Gf(n.seats)}`)}function $p(e=!1){$?.clearHover(),$?.clearSelectedSeats(),e&&(op.clear(),Object.assign(sp,{quantity:1,together:!1,minPrice:null,maxPrice:null}),um()),Gp()}function em(){if(!jf||!$)return;let e=new Map;for(let t of ip)Up(t)&&e.set(t.category,(e.get(t.category)||0)+1);let t=$.getLegend().filter(e=>e.totalCount>0).map(t=>{let n=t.category,r=Q(`div`,{className:`cat-pill${op.has(n)?` active`:``}`});r.dataset.category=n,r.addEventListener(`mouseenter`,()=>{op.size===0&&$?.highlightCategory(n)}),r.addEventListener(`mouseleave`,()=>{$?.clearHighlight(),$?.clearHover()}),r.addEventListener(`click`,e=>{e.stopPropagation(),qp(n)});let i=e.get(n)||0,a=Q(`div`,{className:`cat-dot`,style:{background:t.cssColor}});return r.append(a,document.createTextNode(` ${hp(n)} (${i})`)),r});jf.replaceChildren(...t),requestAnimationFrame(Fp)}var tm=document.getElementById(`qty-badge-btn`),nm=document.getElementById(`qty-badge-main-text`),rm=document.getElementById(`qty-badge-sub-text`),im=document.getElementById(`filter-single-btn`),am=null,om=null;function sm(){if(!nm||!rm)return;let e=sp.quantity;nm.textContent=e>1?`${e} Tickets`:`Any qty`,rm.textContent=e>1?sp.together?`TOGETHER`:`ANY SEATS`:`TICKETS`}var cm={card:{position:`fixed`,zIndex:`2000`,width:`280px`,padding:`16px`,background:`#ffffff`,border:`1px solid #e5e7eb`,borderRadius:`14px`,boxShadow:`0 12px 32px -8px rgba(15,23,42,0.22)`,fontFamily:`inherit`,fontSize:`13px`,color:`#111827`,display:`none`},label:{fontSize:`11px`,fontWeight:`800`,letterSpacing:`0.5px`,color:`#64748b`,margin:`0 0 8px`},qtyRow:{display:`grid`,gridTemplateColumns:`repeat(5, 1fr)`,gap:`6px`,marginBottom:`14px`},qtyBtn:{height:`34px`,borderRadius:`10px`,border:`1px solid #e5e7eb`,borderColor:`#e5e7eb`,background:`#fff`,color:`#111827`,fontWeight:`700`,cursor:`pointer`},qtyBtnActive:{background:`#111827`,color:`#fff`,borderColor:`#111827`},toggleRow:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:`14px`,gap:`8px`},priceRow:{display:`flex`,alignItems:`center`,gap:`8px`,marginBottom:`16px`},input:{width:`100%`,height:`34px`,border:`1px solid #e5e7eb`,borderRadius:`10px`,padding:`0 10px`,fontWeight:`600`,fontSize:`13px`},footer:{display:`flex`,gap:`8px`},reset:{flex:`1`,height:`36px`,borderRadius:`18px`,border:`1px solid #d1d5db`,background:`#fff`,fontWeight:`700`,cursor:`pointer`},done:{flex:`1`,height:`36px`,borderRadius:`18px`,border:`none`,background:`#29CCA2`,color:`#000`,fontWeight:`800`,cursor:`pointer`}};function lm(){let e=[1,2,3,4,5,6,7,8].map(e=>{let t=Q(`button`,{text:e===1?`Any`:String(e),style:cm.qtyBtn});return t.type=`button`,t.addEventListener(`click`,()=>{sp.quantity=e,e===1?sp.together=!1:om.togetherTouched||(sp.together=!0),um(),Gp()}),{q:e,b:t}}),t=Q(`input`);t.type=`checkbox`,t.style.accentColor=`#29CCA2`,t.style.width=`18px`,t.style.height=`18px`,t.addEventListener(`change`,()=>{om.togetherTouched=!0,sp.together=t.checked,um(),Gp()});let n=(e,t)=>{let n=Q(`input`,{style:cm.input});return n.type=`number`,n.min=`0`,n.inputMode=`numeric`,n.placeholder=e,n.addEventListener(`input`,()=>{let e=n.value===``?null:Number(n.value);sp[t]=Number.isFinite(e)&&e>=0?e:null,Gp()}),n},r=n(`Min €`,`minPrice`),i=n(`Max €`,`maxPrice`),a=Q(`button`,{text:`Reset`,style:cm.reset});a.type=`button`,a.addEventListener(`click`,()=>{Object.assign(sp,{quantity:1,together:!1,minPrice:null,maxPrice:null}),om.togetherTouched=!1,um(),Gp()});let o=Q(`button`,{text:`Show tickets`,style:cm.done});o.type=`button`,o.addEventListener(`click`,()=>fm());let s=Q(`label`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,fontWeight:`700`,cursor:`pointer`}},t,Q(`span`,{text:`Seated together`})),c=Q(`div`,{style:cm.card},Q(`div`,{text:`TICKETS`,style:cm.label}),Q(`div`,{style:cm.qtyRow},...e.map(e=>e.b)),Q(`div`,{style:cm.toggleRow},s),Q(`div`,{text:`PRICE PER TICKET`,style:cm.label}),Q(`div`,{style:cm.priceRow},r,Q(`span`,{text:`–`,style:{color:`#94a3b8`}}),i),Q(`div`,{style:cm.footer},a,o));c.setAttribute(`role`,`dialog`),c.setAttribute(`aria-label`,`Ticket filters`),c.addEventListener(`pointerdown`,e=>e.stopPropagation()),document.body.appendChild(c),am=c,om={qtyButtons:e,together:t,togetherLabel:s,minInput:r,maxInput:i,togetherTouched:!1},um()}function um(){if(!om)return;for(let{q:e,b:t}of om.qtyButtons)Object.assign(t.style,cm.qtyBtn,e===sp.quantity?cm.qtyBtnActive:{});let e=sp.quantity>1;om.together.disabled=!e,om.together.checked=e&&sp.together,om.togetherLabel.style.opacity=e?`1`:`0.45`,document.activeElement!==om.minInput&&(om.minInput.value=sp.minPrice??``),document.activeElement!==om.maxInput&&(om.maxInput.value=sp.maxPrice??``),sm()}function dm(e){am||lm(),um(),am.style.display=`block`;let t=e.getBoundingClientRect(),n=am.offsetWidth||280,r=Math.max(8,Math.min(window.innerWidth-n-8,t.right-n));am.style.left=`${r}px`,am.style.top=`${Math.min(window.innerHeight-am.offsetHeight-8,t.bottom+8)}px`}function fm(){am&&(am.style.display=`none`)}for(let e of[tm,im])e?.addEventListener(`pointerdown`,e=>e.stopPropagation()),e?.addEventListener(`click`,e=>{e.stopPropagation(),am?.style.display===`block`?fm():dm(e.currentTarget)});window.addEventListener(`pointerdown`,()=>fm()),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&fm()}),sm();function pm(e,t){let n=Q(`img`,{className:`card-thumb`});return n.alt=t,n.loading=`lazy`,n.src=e?`https://honeybadger7846.github.io/thumbnail/${Ip(e)}.jpg`:yf,n.onerror=()=>{n.src===yf?n.style.display=`none`:n.src=yf},n}function mm(e,t){return Q(`div`,{className:`buy-btn-wrap`},Q(`button`,{className:`buy-btn`},Q(`span`,{className:`buy-btn-text`,text:`BUY ${Uf(e)}`})),Q(`span`,{className:`buy-btn-badge`,text:t}))}function hm(e){let t=$?.getSelection?.();return t?t.type===`group`?t.groupId===e.id:t.type===`seat`&&e.seats.length===1&&Jp(e,t.section)&&e.rowKey===Wf(t.row)&&e.seatKeys[0]===Wf(t.seats[0]):!1}function gm(e){let t=e.together&&e.seats.length>1,n=Q(`div`,{className:`ticket-card${hm(e)?` is-selected`:``}`});n.dataset.section=e.section||``,n.dataset.category=e.category||``,e.row&&(n.dataset.row=e.row),n.addEventListener(`click`,t=>{t.stopPropagation(),!e.section&&!op.has(e.category)&&qp(e.category),zp(e)}),n.addEventListener(`mouseenter`,()=>{$&&(t?$.hoverGroup(e.id):e.section&&e.row&&e.seats.length===1?$.hoverSeat(e.section,e.row,e.seats[0],e.category):e.section&&e.row?$.hoverRow(e.section,e.row,e.category):e.section?$.hoverSection(e.section,e.category):e.category&&op.size===0&&$.highlightCategory(e.category))}),n.addEventListener(`mouseleave`,()=>{$?.clearHover(),!e.section&&e.category&&op.size===0&&$?.clearHighlight()});let r=Q(`div`,{className:`card-meta-row`});e.quantity>1&&r.append(Q(`span`,{className:`seller-tag`,text:e.together?`👥 ${e.quantity} together`:`${e.quantity} tickets`})),e.isIndividual?r.append(Q(`span`,{text:`👤 Individual Seller`}),Q(`span`,{text:`•`}),Q(`span`,{text:`📱 M-ticket`})):(r.append(Q(`span`,{className:`seller-rating`,text:`★ ${e.ratingScore} (${e.ratingCount})`})),e.isTrusted&&r.append(Q(`span`,{className:`seller-tag`,text:`Trusted Seller`})),r.append(Q(`span`,{text:`•`}),Q(`span`,{text:`🎫 E-ticket`})));let i=t?Q(`div`,{className:`multi-seat-chips`},...e.seats.map(e=>Q(`span`,{className:`seat-chip`,text:`Seat ${e}`}))):null,a=e.hasShield?Q(`div`,{className:`badge-green`},Q(`span`,{text:`🛡`}),` ${e.shieldText}`):null;return n.append(Q(`div`,{className:`card-color`,style:{background:Hf(e.colorString)}}),Q(`div`,{className:`card-content`},Q(`div`,{className:`card-top-row`},Tp()?pm(e.displaySectionName||e.displayCategoryName,`Stand View`):null,Q(`div`,{className:`card-info`},Q(`h3`,{text:Rp(e)}),i,r,a)),mm(e.price,`EACH`))),n}function _m(){let e=document.getElementById(`ticket-list-container`);document.getElementById(`show-more-wrap`)?.remove();let t=Math.min(pp+fp,ap.length),n=document.createDocumentFragment();for(let e=pp;e<t;e++)n.appendChild(gm(ap[e]));e.appendChild(n),pp=t,pp<ap.length&&vm(e)}function vm(e){let t=Q(`button`,{className:`btn-show-more`,text:`SHOW MORE`});t.addEventListener(`click`,_m);let n=Q(`div`,{className:`show-more-container`},t);n.id=`show-more-wrap`,e.appendChild(n)}function ym(e){ap=e||[],pp=fp;let t=document.getElementById(`ticket-list-container`);if(t.replaceChildren(),Kp(`${ap.length} listings`),ap.length===0){t.appendChild(Q(`div`,{text:`No tickets match the selected filter.`,style:{padding:`40px 20px`,textAlign:`center`,color:`#94a3b8`}}));return}let n=document.createDocumentFragment(),r=Math.min(pp,ap.length);for(let e=0;e<r;e++)n.appendChild(gm(ap[e]));t.appendChild(n),ap.length>pp&&vm(t)}function bm(e,t=120){if(e==null)return null;let n=String(e).trim();return n?n.slice(0,t):null}var xm=800;function Sm(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);let n=t>>>0;return()=>{n=n+1831565813>>>0;let e=n;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Cm(e,t,n){let r=Sm(String(n)),i=e=>e[Math.floor(r()*e.length)],a=(e,t)=>e+Math.floor(r()*(t-e+1)),o=e=>Math.max(15,Math.round(e)),s=[],c=new Set;for(let t of e||[]){let e=t?.section;e&&!c.has(e)&&(c.add(e),s.push({section:e,category:t.category||`standard`}))}if(!s.length)return[];let l=[...new Set(s.map(e=>e.category))],u=new Map,d=l.map((e,t)=>45+(l.length>1?t/(l.length-1):.5)*330);for(let e of l)u.set(e,d.splice(Math.floor(r()*d.length),1)[0]);let f=Math.max(2,Math.min(7,Math.round(xm/s.length))),p=[],m=0,h=e=>{m++,p.push({id:`G${String(m).padStart(4,`0`)}`,ratingCount:a(40,900),ratingScore:(4+r()*.9).toFixed(1),...e})};for(let{section:e,category:n}of s){if(p.length>=xm)break;if(r()<.12)continue;let s=u.get(n)*(.85+r()*.3),c=t?.[e]||{},l=Object.keys(c),d=l.filter(e=>c[e].length>0),m=a(1,f),g=new Set,_=e=>{let t=l.indexOf(e);return l.length>1&&t>=0?1.2-.35*(t/(l.length-1)):1};for(let t=0;t<m;t++){let t={section:e,category:n},u=r();if(d.length&&u<.75){let e=i(d),n=c[e],l=o(s*_(e)*(.9+r()*.2)),f=u<.4?1:a(2,4),p=a(0,Math.max(0,n.length-f)),m=n.slice(p,p+f);if(!m.length||m.some(t=>g.has(`${e}:${t}`)))continue;m.forEach(t=>g.add(`${e}:${t}`)),m.length===1?h({...t,row:e,seat:m[0],quantity:1,price:l}):h({...t,row:e,seats:m,quantity:m.length,together:!0,price:l})}else if(l.length&&u<.92){let e=i(l),n=a(1,4);h({...t,row:e,quantity:n,together:n>1&&r()<.7,price:o(s*_(e)*(.9+r()*.15))})}else{let e=a(1,6);h({...t,quantity:e,together:e>1&&r()<.6,price:o(s*(.85+r()*.15))})}}}let g=new Map;for(let e of p){let t=g.get(e.category);(!t||e.price<t.price)&&g.set(e.category,e)}for(let e of g.values())e.hasShield=!0;return p}async function wm(e=[]){ip=[];let t=document.getElementById(`ticket-list-container`),n=Dm.kind===`custom`,r=[];if(n)r=Cm(e,$?.getSeatLayout?.()||{},Dm.name||`custom`);else try{let e=await fetch(`./listings.json`);if(!e.ok)throw Error(`HTTP ${e.status}`);let t=await e.json();r=Array.isArray(t)?t:Array.isArray(t?.listings)?t.listings:[]}catch(e){console.error(`Error fetching listings.json:`,e),Kf(t,`Error loading listings: ${e.message}`,`#ef4444`);return}if(!r.length){yp(),Kf(t,n?`No sections found in this map.`:`No listings found in listings.json.`);return}for(let t=0;t<r.length;t++){let n=r[t];if(!n||typeof n!=`object`)continue;let i=bm(n.section),a=i?mp(i):null,o=bm(n.category);if(!o&&i&&(o=$?.getCategoryForSection(i)||null,!o&&e?.length)){let t=e.find(e=>e.section===i||mp(e.section)===a);t&&(o=t.category)}o||=`standard`;let s=Number(n.price);if(!Number.isFinite(s)||s<0)continue;let c=Hf(n.colorString||n.color,null);if(!c&&$){let e=$.getCategoryColor(o);c=`#`+(typeof e==`number`&&Number.isFinite(e)?e:15509666).toString(16).padStart(6,`0`)}c||=xf;let l=bm(n.row,16),u=Array.isArray(n.seats)?n.seats.map(e=>bm(e,16)).filter(Boolean):bm(n.seat,16)?[bm(n.seat,16)]:[];l||(u=[]);let d=Math.floor(Number(n.quantity)),f=Number.isFinite(d)&&d>=1?d:Math.max(1,u.length);ip.push({id:bm(n.id,64)||`L${t}`,section:i,cleanSec:a,row:l,rowKey:l===null?null:Wf(l),seats:u,seatKeys:u.map(Wf),quantity:f,together:n.together===void 0?f>1:!!n.together,category:o,price:s,colorString:c,isIndividual:!!n.isIndividual,isTrusted:n.isTrusted===void 0||!!n.isTrusted,hasShield:!!n.hasShield,shieldText:bm(n.shieldText)||`Lowest category price`,ratingCount:Number.isFinite(Number(n.ratingCount))?Number(n.ratingCount):120,ratingScore:bm(n.ratingScore,8)||`4.8`,displaySectionName:bm(n.displaySectionName,32)||a,displayCategoryName:bm(n.displayCategoryName,64)||hp(o)})}bp.clear();for(let e of ip){if(!e.section||!e.displaySectionName)continue;bp.has(e.section)||bp.set(e.section,e.displaySectionName);let t=mp(e.section);bp.has(t)||bp.set(t,e.displaySectionName)}yp(),Gp()}var Tm=26214400,Em=[],Dm={kind:`default`};function Om(e){let t=Ap();return e.kind===`custom`?(Em=[],t.loadSVGString(e.mainText).then(async()=>{if(e.rowsText&&vf.rowsAndSeats)try{await t.loadRowsSVGString(e.rowsText)}catch(e){console.error(`Error processing rows SVG:`,e)}$===t&&await wm(Em)}).catch(e=>{console.error(`Error processing SVG map:`,e),alert(`Failed to parse the SVG. Please check the file.`)})):t.loadSVGUrl(`./map.svg`,vf.rowsAndSeats?`./map-rows.svg`:null).catch(e=>console.error(`Error loading default SVG map:`,e))}function km(e,{keepState:t=!1}={}){let n=t&&$?$.getState():null;Vp(),np(),$&&=($.dispose(),null),Dm=e,Ap(),n&&!Xd(n)&&$.setState(n,{animate:!1}),Om(e)}function Am(e){return new Promise((t,n)=>{if(!e){t(null);return}if(!e.name.toLowerCase().endsWith(`.svg`)&&e.type!==`image/svg+xml`){n(Error(`${e.name}: please choose an SVG file.`));return}if(e.size>Tm){n(Error(`${e.name}: too large (max 25 MB).`));return}let r=new FileReader;r.onload=e=>t(String(e.target.result||``)),r.onerror=()=>n(Error(`${e.name}: could not be read.`)),r.readAsText(e)})}var jm={overlay:{position:`fixed`,inset:`0`,background:`rgba(17, 24, 39, 0.6)`,backdropFilter:`blur(6px)`,display:`none`,alignItems:`center`,justifyContent:`center`,zIndex:`10000`,padding:`16px`},card:{background:`#ffffff`,borderRadius:`16px`,width:`100%`,maxWidth:`560px`,maxHeight:`92vh`,display:`flex`,flexDirection:`column`,boxShadow:`0 20px 40px rgba(0, 0, 0, 0.25)`,fontFamily:`system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`,color:`#111827`},header:{padding:`18px 22px 12px`,borderBottom:`1px solid #eef2f7`},body:{padding:`6px 22px 12px`,overflowY:`auto`},footer:{padding:`12px 22px 16px`,borderTop:`1px solid #eef2f7`,display:`flex`,gap:`8px`,justifyContent:`flex-end`,flexWrap:`wrap`},groupTitle:{fontSize:`11px`,fontWeight:`700`,letterSpacing:`0.05em`,textTransform:`uppercase`,color:`#64748b`,margin:`16px 0 6px`},row:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`12px`,padding:`7px 0`,borderBottom:`1px solid #f3f5f9`},label:{fontSize:`13.5px`,fontWeight:`600`},hint:{fontSize:`11.5px`,color:`#6b7280`,marginTop:`1px`},button:{height:`36px`,padding:`0 14px`,borderRadius:`9px`,border:`1px solid #e5e7eb`,background:`#fff`,color:`#111827`,fontWeight:`600`,fontSize:`13px`,cursor:`pointer`},primary:{background:`#29CCA2`,borderColor:`#29CCA2`,color:`#fff`},input:{width:`84px`,height:`32px`,borderRadius:`8px`,border:`1px solid #d1d5db`,padding:`0 8px`,fontSize:`13px`}},Mm=null;function Nm(){let e=Q(`div`,{style:jm.overlay});e.setAttribute(`role`,`dialog`),e.setAttribute(`aria-modal`,`true`),e.setAttribute(`aria-label`,`Map settings`),e.addEventListener(`pointerdown`,t=>{t.target===e&&Fm()});let t=new Map,n={main:null,rows:null},r=Q(`input`);r.type=`radio`,r.name=`vm-source`,r.value=`default`;let i=Q(`input`);i.type=`radio`,i.name=`vm-source`,i.value=`custom`;for(let e of[r,i])e.style.accentColor=`#29CCA2`;let a=Q(`input`);a.type=`file`,a.accept=`.svg,image/svg+xml`;let o=Q(`input`);o.type=`file`,o.accept=`.svg,image/svg+xml`;let s=Q(`div`,{style:{fontSize:`11.5px`,color:`#6b7280`,marginTop:`4px`}}),c=()=>{let e=[];n.main&&e.push(`Map: ${n.main.name}`),n.rows&&e.push(`Rows: ${n.rows.name}`),s.textContent=e.length?e.join(` · `):`No file chosen yet.`};a.addEventListener(`change`,()=>{n.main=a.files?.[0]||null,n.main&&(i.checked=!0),c()}),o.addEventListener(`change`,()=>{n.rows=o.files?.[0]||null,c()});let l=(e,t)=>Q(`label`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,fontSize:`12.5px`,marginTop:`6px`}},Q(`span`,{text:e,style:{flex:`0 0 72px`,whiteSpace:`nowrap`,color:`#374151`,fontWeight:`600`}}),t),u=Q(`div`,{style:{margin:`6px 0 0 24px`,padding:`10px 12px`,border:`1px dashed #d1d5db`,borderRadius:`10px`,background:`#f8fafc`}},l(`Map SVG`,a),l(`Rows SVG`,o),Q(`div`,{text:`Rows SVG is optional (rows and seats layer). Applying wipes the current map; listings are generated from the map and seat views are off.`,style:{fontSize:`11px`,color:`#9ca3af`,marginTop:`6px`}}),s);u.addEventListener(`dragover`,e=>{e.preventDefault(),u.style.borderColor=`#29CCA2`}),u.addEventListener(`dragleave`,()=>{u.style.borderColor=`#d1d5db`}),u.addEventListener(`drop`,async e=>{e.preventDefault(),u.style.borderColor=`#d1d5db`;let t=Array.from(e.dataTransfer?.files||[]).slice(0,2);for(let e of t){let t=/rows/i.test(e.name);try{t||=(await e.slice(0,2e5).text()).includes(`data-rows`)}catch{}t?n.rows=e:n.main=e}n.main&&(i.checked=!0),c()});let d=Q(`div`,{},Q(`div`,{text:`Map`,style:jm.groupTitle}),Q(`label`,{style:{display:`flex`,gap:`8px`,alignItems:`center`,fontSize:`13.5px`,fontWeight:`600`,padding:`4px 0`}},r,`Default map`),Q(`label`,{style:{display:`flex`,gap:`8px`,alignItems:`center`,fontSize:`13.5px`,fontWeight:`600`,padding:`4px 0`}},i,`Upload a map`),u),f=Q(`div`);for(let e of ff){f.appendChild(Q(`div`,{text:e.title,style:jm.groupTitle}));for(let n of e.items){let e;if(n.type===`toggle`)e=Q(`input`),e.type=`checkbox`,Object.assign(e.style,{width:`18px`,height:`18px`,accentColor:`#29CCA2`,flexShrink:`0`});else if(n.type===`number`)e=Q(`input`,{style:jm.input}),e.type=`number`,e.min=String(n.min),e.max=String(n.max),e.step=String(n.step);else{e=Q(`select`,{style:{...jm.input,width:`120px`}});for(let[t,r]of n.options){let n=Q(`option`,{text:r});n.value=t,e.appendChild(n)}}e.id=`vm-setting-${n.key}`,t.set(n.key,e);let r=Q(`label`,{style:{flex:`1`,minWidth:`0`}},Q(`div`,{text:n.label,style:jm.label}),Q(`div`,{text:n.hint,style:jm.hint}));r.htmlFor=e.id,f.appendChild(Q(`div`,{style:jm.row},r,e))}}let p=e=>{for(let n of pf){let r=t.get(n.key);n.type===`toggle`?r.checked=!!e[n.key]:r.value=String(e[n.key])}},m=()=>{let e={};for(let n of pf){let r=t.get(n.key);e[n.key]=n.type===`toggle`?r.checked:n.type===`number`?Number(r.value):r.value}return hf(e)},h=Q(`button`,{text:`Reset to defaults`,style:{...jm.button,marginRight:`auto`}}),g=Q(`button`,{text:`Cancel`,style:jm.button}),_=Q(`button`,{text:`Apply & reload map`,style:{...jm.button,...jm.primary}});h.addEventListener(`click`,()=>p(mf)),g.addEventListener(`click`,Fm),_.addEventListener(`click`,async()=>{let e=m(),t={kind:`default`};if(i.checked){if(!n.main&&Dm.kind!==`custom`){alert(`Choose a map SVG to upload, or pick the default map.`);return}try{t=n.main?{kind:`custom`,name:n.main.name,mainText:await Am(n.main),rowsText:await Am(n.rows)}:Dm}catch(e){alert(e.message);return}}let r=t===Dm||t.kind==="default"&&Dm.kind==="default";vf=e,_f(e),n.main=null,n.rows=null,a.value=``,o.value=``,c(),Fm(),km(t,{keepState:r&&e.shareableState})});let v=Q(`div`,{style:jm.card},Q(`div`,{style:jm.header},Q(`div`,{text:`Map settings`,style:{fontSize:`17px`,fontWeight:`700`}}),Q(`div`,{text:`Alt + Shift + S toggles this panel. Settings are remembered in this browser.`,style:{fontSize:`12px`,color:`#6b7280`,marginTop:`2px`}})),Q(`div`,{style:jm.body},d,f),Q(`div`,{style:jm.footer},h,g,_));return e.appendChild(v),document.body.appendChild(e),{overlay:e,open(){p(vf),(Dm.kind===`custom`?i:r).checked=!0,c(),e.style.display=`flex`,_.focus()},close(){e.style.display=`none`}}}function Pm(){Mm||=Nm(),Mm.open()}function Fm(){Mm?.close()}function Im(){return!!(Mm&&Mm.overlay.style.display!==`none`)}window.addEventListener(`keydown`,e=>{if(e.altKey&&e.shiftKey&&!e.ctrlKey&&!e.metaKey&&e.code===`KeyS`){let t=e.target;if(t&&(t.tagName===`INPUT`||t.tagName===`TEXTAREA`||t.isContentEditable)&&!Im())return;e.preventDefault(),Im()?Fm():Pm()}else e.key===`Escape`&&Im()&&Fm()}),Vf?.remove(),Ap(),lp&&!Xd(lp)&&$.setState(lp,{animate:!1}),Om(Dm);try{new URLSearchParams(window.location.search).has(`settings`)&&Pm()}catch{}