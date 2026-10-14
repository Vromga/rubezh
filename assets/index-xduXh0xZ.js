var Td=Object.defineProperty;var Ad=(i,t,e)=>t in i?Td(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var $=(i,t,e)=>Ad(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gc="170",Rd=0,Gc=1,Cd=2,fh=1,Pd=2,ei=3,wi=0,rn=1,Ae=2,Mi=0,Vi=1,qe=2,Wc=3,Xc=4,Ld=5,Fi=100,Id=101,Dd=102,Ud=103,Nd=104,kd=200,Fd=201,Od=202,zd=203,vo=204,_o=205,Bd=206,Hd=207,Vd=208,Gd=209,Wd=210,Xd=211,$d=212,qd=213,Yd=214,yo=0,xo=1,Mo=2,Ms=3,bo=4,So=5,wo=6,Eo=7,ph=0,jd=1,Kd=2,bi=0,Jd=1,Zd=2,Qd=3,tu=4,eu=5,nu=6,iu=7,mh=300,bs=301,Ss=302,To=303,Ao=304,ya=306,Ro=1e3,Bi=1001,Co=1002,Nn=1003,su=1004,yr=1005,Gn=1006,Aa=1007,Hi=1008,hi=1009,gh=1010,vh=1011,sr=1012,vc=1013,Xi=1014,ii=1015,dr=1016,_c=1017,yc=1018,ws=1020,_h=35902,yh=1021,xh=1022,Un=1023,Mh=1024,bh=1025,_s=1026,Es=1027,Sh=1028,xc=1029,wh=1030,Mc=1031,bc=1033,ia=33776,sa=33777,ra=33778,aa=33779,Po=35840,Lo=35841,Io=35842,Do=35843,Uo=36196,No=37492,ko=37496,Fo=37808,Oo=37809,zo=37810,Bo=37811,Ho=37812,Vo=37813,Go=37814,Wo=37815,Xo=37816,$o=37817,qo=37818,Yo=37819,jo=37820,Ko=37821,oa=36492,Jo=36494,Zo=36495,Eh=36283,Qo=36284,tc=36285,ec=36286,ru=3200,au=3201,Th=0,ou=1,xi="",Mn="srgb",Is="srgb-linear",xa="linear",fe="srgb",Yi=7680,$c=519,cu=512,lu=513,hu=514,Ah=515,du=516,uu=517,fu=518,pu=519,nc=35044,qc="300 es",si=2e3,ha=2001;class Ds{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ca=Math.PI/180,ic=180/Math.PI;function Si(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function Ve(i,t,e){return Math.max(t,Math.min(e,i))}function mu(i,t){return(i%t+t)%t}function Ra(i,t,e){return(1-e)*i+e*t}function Vn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const gu={DEG2RAD:ca};class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,n,s,r,a,o,c,l){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],x=s[1],y=s[4],_=s[7],C=s[2],T=s[5],R=s[8];return r[0]=a*v+o*x+c*C,r[3]=a*m+o*y+c*T,r[6]=a*p+o*_+c*R,r[1]=l*v+h*x+u*C,r[4]=l*m+h*y+u*T,r[7]=l*p+h*_+u*R,r[2]=d*v+f*x+g*C,r[5]=d*m+f*y+g*T,r[8]=d*p+f*_+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*l-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ca.makeScale(t,e)),this}rotate(t){return this.premultiply(Ca.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ca.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ca=new Xt;function Rh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function da(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vu(){const i=da("canvas");return i.style.display="block",i}const Yc={};function Zs(i){i in Yc||(Yc[i]=!0,console.warn(i))}function _u(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function yu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function xu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ie={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===fe&&(i.r=ci(i.r),i.g=ci(i.g),i.b=ci(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===fe&&(i.r=ys(i.r),i.g=ys(i.g),i.b=ys(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===xi?xa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const jc=[.64,.33,.3,.6,.15,.06],Kc=[.2126,.7152,.0722],Jc=[.3127,.329],Zc=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qc=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[Is]:{primaries:jc,whitePoint:Jc,transfer:xa,toXYZ:Zc,fromXYZ:Qc,luminanceCoefficients:Kc,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:jc,whitePoint:Jc,transfer:fe,toXYZ:Zc,fromXYZ:Qc,luminanceCoefficients:Kc,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}});let ji;class Mu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ji===void 0&&(ji=da("canvas")),ji.width=t.width,ji.height=t.height;const n=ji.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=da("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ci(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ci(e[n]/255)*255):e[n]=ci(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bu=0;class Ch{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=Si(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Pa(s[a].image)):r.push(Pa(s[a]))}else r=Pa(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Pa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Su=0;class an extends Ds{constructor(t=an.DEFAULT_IMAGE,e=an.DEFAULT_MAPPING,n=Bi,s=Bi,r=Gn,a=Hi,o=Un,c=hi,l=an.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=Si(),this.name="",this.source=new Ch(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ro:t.x=t.x-Math.floor(t.x);break;case Bi:t.x=t.x<0?0:1;break;case Co:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ro:t.y=t.y-Math.floor(t.y);break;case Bi:t.y=t.y<0?0:1;break;case Co:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=mh;an.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,s=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,_=(f+1)/2,C=(p+1)/2,T=(h+d)/4,R=(u+v)/4,L=(g+m)/4;return y>_&&y>C?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=T/n,r=R/n):_>C?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=L/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=R/r,s=L/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-v)/x,this.z=(d-h)/x,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wu extends Ds{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new an(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ch(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $i extends wu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ph extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Eu extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ei{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==d||l!==f||h!==g){let m=1-o;const p=c*d+l*f+h*g+u*v,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const C=Math.sqrt(y),T=Math.atan2(C,p*x);m=Math.sin(m*T)/C,o=Math.sin(o*T)/C}const _=o*x;if(c=c*m+d*_,l=l*m+f*_,h=h*m+g*_,u=u*m+v*_,m===1-o){const C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-o*f,t[e+2]=l*g+h*f+o*d-c*u,t[e+3]=h*g-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ve(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return La.copy(this).projectOnVector(t),this.sub(La)}reflect(t){return this.sub(La.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const La=new A,tl=new Ei;class ur{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,An):An.fromBufferAttribute(r,a),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xr.copy(n.boundingBox)),xr.applyMatrix4(t.matrixWorld),this.union(xr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bs),Mr.subVectors(this.max,Bs),Ki.subVectors(t.a,Bs),Ji.subVectors(t.b,Bs),Zi.subVectors(t.c,Bs),fi.subVectors(Ji,Ki),pi.subVectors(Zi,Ji),Ri.subVectors(Ki,Zi);let e=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Ri.z,Ri.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Ri.z,0,-Ri.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Ri.y,Ri.x,0];return!Ia(e,Ki,Ji,Zi,Mr)||(e=[1,0,0,0,1,0,0,0,1],!Ia(e,Ki,Ji,Zi,Mr))?!1:(br.crossVectors(fi,pi),e=[br.x,br.y,br.z],Ia(e,Ki,Ji,Zi,Mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Kn=[new A,new A,new A,new A,new A,new A,new A,new A],An=new A,xr=new ur,Ki=new A,Ji=new A,Zi=new A,fi=new A,pi=new A,Ri=new A,Bs=new A,Mr=new A,br=new A,Ci=new A;function Ia(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ci.fromArray(i,r);const o=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),c=t.dot(Ci),l=e.dot(Ci),h=n.dot(Ci);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Tu=new ur,Hs=new A,Da=new A;class fr{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Tu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Hs.subVectors(t,this.center);const e=Hs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Hs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Da.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Hs.copy(t.center).add(Da)),this.expandByPoint(Hs.copy(t.center).sub(Da))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new A,Ua=new A,Sr=new A,mi=new A,Na=new A,wr=new A,ka=new A;class Sc{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ua.copy(t).add(e).multiplyScalar(.5),Sr.copy(e).sub(t).normalize(),mi.copy(this.origin).sub(Ua);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Sr),o=mi.dot(this.direction),c=-mi.dot(Sr),l=mi.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ua).addScaledVector(Sr,d),f}intersectSphere(t,e){Jn.subVectors(t.center,this.origin);const n=Jn.dot(this.direction),s=Jn.dot(Jn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,n,s,r){Na.subVectors(e,t),wr.subVectors(n,t),ka.crossVectors(Na,wr);let a=this.direction.dot(ka),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;mi.subVectors(this.origin,t);const c=o*this.direction.dot(wr.crossVectors(mi,wr));if(c<0)return null;const l=o*this.direction.dot(Na.cross(mi));if(l<0||c+l>a)return null;const h=-o*mi.dot(ka);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(t,e,n,s,r,a,o,c,l,h,u,d,f,g,v,m){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,d,f,g,v,m)}set(t,e,n,s,r,a,o,c,l,h,u,d,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Qi.setFromMatrixColumn(t,0).length(),r=1/Qi.setFromMatrixColumn(t,1).length(),a=1/Qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,v=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-v*l,e[9]=-o*c,e[2]=v-d*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,v=l*u;e[0]=d+v*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=v+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,v=l*u;e[0]=d-v*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,v=o*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+v,e[1]=c*u,e[5]=v*l+d,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,f=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=a*c,f=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+v,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Au,t,Ru)}lookAt(t,e,n){const s=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),gi.crossVectors(n,hn),gi.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),gi.crossVectors(n,hn)),gi.normalize(),Er.crossVectors(hn,gi),s[0]=gi.x,s[4]=Er.x,s[8]=hn.x,s[1]=gi.y,s[5]=Er.y,s[9]=hn.y,s[2]=gi.z,s[6]=Er.z,s[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],x=n[3],y=n[7],_=n[11],C=n[15],T=s[0],R=s[4],L=s[8],w=s[12],b=s[1],P=s[5],V=s[9],z=s[13],q=s[2],K=s[6],X=s[10],tt=s[14],W=s[3],dt=s[7],_t=s[11],Pt=s[15];return r[0]=a*T+o*b+c*q+l*W,r[4]=a*R+o*P+c*K+l*dt,r[8]=a*L+o*V+c*X+l*_t,r[12]=a*w+o*z+c*tt+l*Pt,r[1]=h*T+u*b+d*q+f*W,r[5]=h*R+u*P+d*K+f*dt,r[9]=h*L+u*V+d*X+f*_t,r[13]=h*w+u*z+d*tt+f*Pt,r[2]=g*T+v*b+m*q+p*W,r[6]=g*R+v*P+m*K+p*dt,r[10]=g*L+v*V+m*X+p*_t,r[14]=g*w+v*z+m*tt+p*Pt,r[3]=x*T+y*b+_*q+C*W,r[7]=x*R+y*P+_*K+C*dt,r[11]=x*L+y*V+_*X+C*_t,r[15]=x*w+y*z+_*tt+C*Pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*f-n*c*f)+v*(+e*c*f-e*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+m*(+e*l*u-e*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-s*o*h-e*c*u+e*o*d+s*a*u-n*a*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],x=u*m*l-v*d*l+v*c*f-o*m*f-u*c*p+o*d*p,y=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,_=h*v*l-g*u*l+g*o*f-a*v*f-h*o*p+a*u*p,C=g*u*c-h*v*c-g*o*d+a*v*d+h*o*m-a*u*m,T=e*x+n*y+s*_+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return t[0]=x*R,t[1]=(v*d*r-u*m*r-v*s*f+n*m*f+u*s*p-n*d*p)*R,t[2]=(o*m*r-v*c*r+v*s*l-n*m*l-o*s*p+n*c*p)*R,t[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*f-n*c*f)*R,t[4]=y*R,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*R,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*p-e*c*p)*R,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*f+e*c*f)*R,t[8]=_*R,t[9]=(g*u*r-h*v*r-g*n*f+e*v*f+h*n*p-e*u*p)*R,t[10]=(a*v*r-g*o*r+g*n*l-e*v*l-a*n*p+e*o*p)*R,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*f-e*o*f)*R,t[12]=C*R,t[13]=(h*v*s-g*u*s+g*n*d-e*v*d-h*n*m+e*u*m)*R,t[14]=(g*o*s-a*v*s-g*n*c+e*v*c+a*n*m-e*o*m)*R,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*d+e*o*d)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,v=a*h,m=a*u,p=o*u,x=c*l,y=c*h,_=c*u,C=n.x,T=n.y,R=n.z;return s[0]=(1-(v+p))*C,s[1]=(f+_)*C,s[2]=(g-y)*C,s[3]=0,s[4]=(f-_)*T,s[5]=(1-(d+p))*T,s[6]=(m+x)*T,s[7]=0,s[8]=(g+y)*R,s[9]=(m-x)*R,s[10]=(1-(d+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Qi.set(s[0],s[1],s[2]).length();const a=Qi.set(s[4],s[5],s[6]).length(),o=Qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Rn.copy(this);const l=1/r,h=1/a,u=1/o;return Rn.elements[0]*=l,Rn.elements[1]*=l,Rn.elements[2]*=l,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=u,Rn.elements[9]*=u,Rn.elements[10]*=u,e.setFromRotationMatrix(Rn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=si){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(o===si)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ha)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=si){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*l,f=(n+s)*h;let g,v;if(o===si)g=(a+r)*u,v=-2*u;else if(o===ha)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qi=new A,Rn=new ve,Au=new A(0,0,0),Ru=new A(1,1,1),gi=new A,Er=new A,hn=new A,el=new ve,nl=new Ei;class kn{constructor(t=0,e=0,n=0,s=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return el.makeRotationFromQuaternion(t),this.setFromRotationMatrix(el,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nl.setFromEuler(this),this.setFromQuaternion(nl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class Lh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Cu=0;const il=new A,ts=new Ei,Zn=new ve,Tr=new A,Vs=new A,Pu=new A,Lu=new Ei,sl=new A(1,0,0),rl=new A(0,1,0),al=new A(0,0,1),ol={type:"added"},Iu={type:"removed"},es={type:"childadded",child:null},Fa={type:"childremoved",child:null};class De extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new A,e=new kn,n=new Ei,s=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new Xt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.multiply(ts),this}rotateOnWorldAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.premultiply(ts),this}rotateX(t){return this.rotateOnAxis(sl,t)}rotateY(t){return this.rotateOnAxis(rl,t)}rotateZ(t){return this.rotateOnAxis(al,t)}translateOnAxis(t,e){return il.copy(t).applyQuaternion(this.quaternion),this.position.add(il.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sl,t)}translateY(t){return this.translateOnAxis(rl,t)}translateZ(t){return this.translateOnAxis(al,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Tr.copy(t):Tr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Vs,Tr,this.up):Zn.lookAt(Tr,Vs,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),ts.setFromRotationMatrix(Zn),this.quaternion.premultiply(ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ol),es.child=t,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Iu),Fa.child=t,this.dispatchEvent(Fa),Fa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ol),es.child=t,this.dispatchEvent(es),es.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,t,Pu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,Lu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}De.DEFAULT_UP=new A(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new A,Qn=new A,Oa=new A,ti=new A,ns=new A,is=new A,cl=new A,za=new A,Ba=new A,Ha=new A,Va=new me,Ga=new me,Wa=new me;class bn{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Cn.subVectors(t,e),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Cn.subVectors(s,e),Qn.subVectors(n,e),Oa.subVectors(t,e);const a=Cn.dot(Cn),o=Cn.dot(Qn),c=Cn.dot(Oa),l=Qn.dot(Qn),h=Qn.dot(Oa),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ti.x),c.addScaledVector(a,ti.y),c.addScaledVector(o,ti.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Va.setScalar(0),Ga.setScalar(0),Wa.setScalar(0),Va.fromBufferAttribute(t,e),Ga.fromBufferAttribute(t,n),Wa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Va,r.x),a.addScaledVector(Ga,r.y),a.addScaledVector(Wa,r.z),a}static isFrontFacing(t,e,n,s){return Cn.subVectors(n,e),Qn.subVectors(t,e),Cn.cross(Qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Cn.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return bn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return bn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ns.subVectors(s,n),is.subVectors(r,n),za.subVectors(t,n);const c=ns.dot(za),l=is.dot(za);if(c<=0&&l<=0)return e.copy(n);Ba.subVectors(t,s);const h=ns.dot(Ba),u=is.dot(Ba);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(ns,a);Ha.subVectors(t,r);const f=ns.dot(Ha),g=is.dot(Ha);if(g>=0&&f<=g)return e.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(is,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return cl.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(cl,o);const p=1/(m+v+d);return a=v*p,o=d*p,e.copy(n).addScaledVector(ns,a).addScaledVector(is,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ih={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function Xa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=mu(t,1),e=Ve(e,0,1),n=Ve(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Xa(a,r,t+1/3),this.g=Xa(a,r,t),this.b=Xa(a,r,t-1/3)}return ie.toWorkingColorSpace(this,s),this}setStyle(t,e=Mn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Mn){const n=Ih[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ci(t.r),this.g=ci(t.g),this.b=ci(t.b),this}copyLinearToSRGB(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mn){return ie.fromWorkingColorSpace(Xe.copy(this),t),Math.round(Ve(Xe.r*255,0,255))*65536+Math.round(Ve(Xe.g*255,0,255))*256+Math.round(Ve(Xe.b*255,0,255))}getHexString(t=Mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Xe.copy(this),e);const n=Xe.r,s=Xe.g,r=Xe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=Mn){ie.fromWorkingColorSpace(Xe.copy(this),t);const e=Xe.r,n=Xe.g,s=Xe.b;return t!==Mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(vi),this.setHSL(vi.h+t,vi.s+e,vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vi),t.getHSL(Ar);const n=Ra(vi.h,Ar.h,e),s=Ra(vi.s,Ar.s,e),r=Ra(vi.l,Ar.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xe=new Ht;Ht.NAMES=Ih;let Du=0;class Ti extends Ds{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=Si(),this.name="",this.blending=Vi,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vo,this.blendDst=_o,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vo&&(n.blendSrc=this.blendSrc),this.blendDst!==_o&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$c&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xe extends Ti{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new A,Rr=new ht;class cn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=nc,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Rr.fromBufferAttribute(this,e),Rr.applyMatrix3(t),this.setXY(e,Rr.x,Rr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==nc&&(t.usage=this.usage),t}}class Dh extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Uh extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class re extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Uu=0;const _n=new ve,$a=new De,ss=new A,dn=new ur,Gs=new ur,He=new A;class Ue extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rh(t)?Uh:Dh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return $a.lookAt(t),$a.updateMatrix(),this.applyMatrix4($a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ur);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Gs.setFromBufferAttribute(o),this.morphTargetsRelative?(He.addVectors(dn.min,Gs.min),dn.expandByPoint(He),He.addVectors(dn.max,Gs.max),dn.expandByPoint(He)):(dn.expandByPoint(Gs.min),dn.expandByPoint(Gs.max))}dn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)He.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(He));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)He.fromBufferAttribute(o,l),c&&(ss.fromBufferAttribute(t,l),He.add(ss)),s=Math.max(s,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new A,c[L]=new A;const l=new A,h=new A,u=new A,d=new ht,f=new ht,g=new ht,v=new A,m=new A;function p(L,w,b){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,b),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),o[L].add(v),o[w].add(v),o[b].add(v),c[L].add(m),c[w].add(m),c[b].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let L=0,w=x.length;L<w;++L){const b=x[L],P=b.start,V=b.count;for(let z=P,q=P+V;z<q;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const y=new A,_=new A,C=new A,T=new A;function R(L){C.fromBufferAttribute(s,L),T.copy(C);const w=o[L];y.copy(w),y.sub(C.multiplyScalar(C.dot(w))).normalize(),_.crossVectors(T,w);const P=_.dot(c[L])<0?-1:1;a.setXYZW(L,y.x,y.y,y.z,P)}for(let L=0,w=x.length;L<w;++L){const b=x[L],P=b.start,V=b.count;for(let z=P,q=P+V;z<q;z+=3)R(t.getX(z+0)),R(t.getX(z+1)),R(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new A,r=new A,a=new A,o=new A,c=new A,l=new A,h=new A,u=new A;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new cn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ue,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ll=new ve,Pi=new Sc,Cr=new fr,hl=new A,Pr=new A,Lr=new A,Ir=new A,qa=new A,Dr=new A,dl=new A,Ur=new A;class I extends De{constructor(t=new Ue,e=new xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Dr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(qa.fromBufferAttribute(u,t),a?Dr.addScaledVector(qa,h):Dr.addScaledVector(qa.sub(e),h))}e.add(Dr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(r),Pi.copy(t.ray).recast(t.near),!(Cr.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Cr,hl)===null||Pi.origin.distanceToSquared(hl)>(t.far-t.near)**2))&&(ll.copy(r).invert(),Pi.copy(t.ray).applyMatrix4(ll),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,C=y;_<C;_+=3){const T=o.getX(_),R=o.getX(_+1),L=o.getX(_+2);s=Nr(this,p,t,n,l,h,u,T,R,L),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const x=o.getX(m),y=o.getX(m+1),_=o.getX(m+2);s=Nr(this,a,t,n,l,h,u,x,y,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,C=y;_<C;_+=3){const T=_,R=_+1,L=_+2;s=Nr(this,p,t,n,l,h,u,T,R,L),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const x=m,y=m+1,_=m+2;s=Nr(this,a,t,n,l,h,u,x,y,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Nu(i,t,e,n,s,r,a,o){let c;if(t.side===rn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===wi,o),c===null)return null;Ur.copy(o),Ur.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ur);return l<e.near||l>e.far?null:{distance:l,point:Ur.clone(),object:i}}function Nr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Pr),i.getVertexPosition(c,Lr),i.getVertexPosition(l,Ir);const h=Nu(i,t,e,n,Pr,Lr,Ir,dl);if(h){const u=new A;bn.getBarycoord(dl,Pr,Lr,Ir,u),s&&(h.uv=bn.getInterpolatedAttribute(s,o,c,l,u,new ht)),r&&(h.uv1=bn.getInterpolatedAttribute(r,o,c,l,u,new ht)),a&&(h.normal=bn.getInterpolatedAttribute(a,o,c,l,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new A,materialIndex:0};bn.getNormal(Pr,Lr,Ir,d.normal),h.face=d,h.barycoord=u}return h}class wn extends Ue{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(u,2));function g(v,m,p,x,y,_,C,T,R,L,w){const b=_/R,P=C/L,V=_/2,z=C/2,q=T/2,K=R+1,X=L+1;let tt=0,W=0;const dt=new A;for(let _t=0;_t<X;_t++){const Pt=_t*P-z;for(let Yt=0;Yt<K;Yt++){const ge=Yt*b-V;dt[v]=ge*x,dt[m]=Pt*y,dt[p]=q,l.push(dt.x,dt.y,dt.z),dt[v]=0,dt[m]=0,dt[p]=T>0?1:-1,h.push(dt.x,dt.y,dt.z),u.push(Yt/R),u.push(1-_t/L),tt+=1}}for(let _t=0;_t<L;_t++)for(let Pt=0;Pt<R;Pt++){const Yt=d+Pt+K*_t,ge=d+Pt+K*(_t+1),j=d+(Pt+1)+K*(_t+1),st=d+(Pt+1)+K*_t;c.push(Yt,ge,st),c.push(ge,j,st),W+=6}o.addGroup(f,W,w),f+=W,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ts(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ze(i){const t={};for(let e=0;e<i.length;e++){const n=Ts(i[e]);for(const s in n)t[s]=n[s]}return t}function ku(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const Fu={clone:Ts,merge:Ze};var Ou=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends Ti{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ou,this.fragmentShader=zu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=ku(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class kh extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=si}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new A,ul=new ht,fl=new ht;class pn extends kh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ic*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ca*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ic*2*Math.atan(Math.tan(ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_i.x,_i.y).multiplyScalar(-t/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-t/_i.z)}getViewSize(t,e){return this.getViewBounds(t,ul,fl),e.subVectors(fl,ul)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ca*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const rs=-90,as=1;class Bu extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new pn(rs,as,t,e);s.layers=this.layers,this.add(s);const r=new pn(rs,as,t,e);r.layers=this.layers,this.add(r);const a=new pn(rs,as,t,e);a.layers=this.layers,this.add(a);const o=new pn(rs,as,t,e);o.layers=this.layers,this.add(o);const c=new pn(rs,as,t,e);c.layers=this.layers,this.add(c);const l=new pn(rs,as,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Fh extends an{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:bs,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Hu extends $i{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Fh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new wn(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Mi});r.uniforms.tEquirect.value=e;const a=new I(s,r),o=e.minFilter;return e.minFilter===Hi&&(e.minFilter=Gn),new Bu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Ya=new A,Vu=new A,Gu=new Xt;class Ni{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ya.subVectors(n,e).cross(Vu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ya),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Gu.getNormalMatrix(t),s=this.coplanarPoint(Ya).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new fr,kr=new A;class wc{constructor(t=new Ni,e=new Ni,n=new Ni,s=new Ni,r=new Ni,a=new Ni){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=si){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],x=s[13],y=s[14],_=s[15];if(n[0].setComponents(c-r,d-l,m-f,_-p).normalize(),n[1].setComponents(c+r,d+l,m+f,_+p).normalize(),n[2].setComponents(c+a,d+h,m+g,_+x).normalize(),n[3].setComponents(c-a,d-h,m-g,_-x).normalize(),n[4].setComponents(c-o,d-u,m-v,_-y).normalize(),e===si)n[5].setComponents(c+o,d+u,m+v,_+y).normalize();else if(e===ha)n[5].setComponents(o,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(t){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(t.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(kr.x=s.normal.x>0?t.max.x:t.min.x,kr.y=s.normal.y>0?t.max.y:t.min.y,kr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(kr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Oh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Wu(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class Ma extends Ue{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const x=p*d-a;for(let y=0;y<l;y++){const _=y*u-r;g.push(_,-x,0),v.push(0,0,1),m.push(y/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){const y=x+l*p,_=x+l*(p+1),C=x+1+l*(p+1),T=x+1+l*p;f.push(y,_,T),f.push(_,C,T)}this.setIndex(f),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(v,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ma(t.width,t.height,t.widthSegments,t.heightSegments)}}var Xu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$u=`#ifdef USE_ALPHAHASH
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
#endif`,qu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ju=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ku=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ju=`#ifdef USE_AOMAP
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
#endif`,Zu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qu=`#ifdef USE_BATCHING
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
#endif`,tf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ef=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rf=`#ifdef USE_IRIDESCENCE
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
#endif`,af=`#ifdef USE_BUMPMAP
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
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mf=`#define PI 3.141592653589793
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
} // validated`,gf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vf=`vec3 transformedNormal = objectNormal;
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
#endif`,_f=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tf=`#ifdef USE_ENVMAP
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
#endif`,Af=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rf=`#ifdef USE_ENVMAP
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
#endif`,Cf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,If=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Df=`#ifdef USE_GRADIENTMAP
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
}`,Uf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ff=`uniform bool receiveShadow;
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
#endif`,Of=`#ifdef USE_ENVMAP
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
#endif`,zf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gf=`PhysicalMaterial material;
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
#endif`,Wf=`struct PhysicalMaterial {
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
}`,Xf=`
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
#endif`,$f=`#if defined( RE_IndirectDiffuse )
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
#endif`,qf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ep=`#if defined( USE_POINTS_UV )
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
#endif`,np=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ip=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ap=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,op=`#ifdef USE_MORPHTARGETS
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
#endif`,cp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pp=`#ifdef USE_NORMALMAP
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
#endif`,mp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_p=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ep=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pp=`float getShadowMask() {
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
}`,Lp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ip=`#ifdef USE_SKINNING
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
#endif`,Dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Up=`#ifdef USE_SKINNING
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
#endif`,Np=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Op=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zp=`#ifdef USE_TRANSMISSION
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
#endif`,Bp=`#ifdef USE_TRANSMISSION
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
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$p=`uniform sampler2D t2D;
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
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`#include <common>
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
}`,Zp=`#if DEPTH_PACKING == 3200
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
}`,Qp=`#define DISTANCE
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
}`,tm=`#define DISTANCE
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
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`uniform float scale;
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
}`,sm=`uniform vec3 diffuse;
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
}`,rm=`#include <common>
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
}`,am=`uniform vec3 diffuse;
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
}`,om=`#define LAMBERT
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
}`,cm=`#define LAMBERT
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
}`,lm=`#define MATCAP
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
}`,hm=`#define MATCAP
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
}`,dm=`#define NORMAL
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
}`,um=`#define NORMAL
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
}`,fm=`#define PHONG
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
}`,pm=`#define PHONG
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
}`,mm=`#define STANDARD
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
}`,gm=`#define STANDARD
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
}`,vm=`#define TOON
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
}`,_m=`#define TOON
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
}`,ym=`uniform float size;
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
}`,xm=`uniform vec3 diffuse;
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
}`,Mm=`#include <common>
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
}`,bm=`uniform vec3 color;
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
}`,Sm=`uniform float rotation;
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
}`,wm=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:Xu,alphahash_pars_fragment:$u,alphamap_fragment:qu,alphamap_pars_fragment:Yu,alphatest_fragment:ju,alphatest_pars_fragment:Ku,aomap_fragment:Ju,aomap_pars_fragment:Zu,batching_pars_vertex:Qu,batching_vertex:tf,begin_vertex:ef,beginnormal_vertex:nf,bsdfs:sf,iridescence_fragment:rf,bumpmap_pars_fragment:af,clipping_planes_fragment:of,clipping_planes_pars_fragment:cf,clipping_planes_pars_vertex:lf,clipping_planes_vertex:hf,color_fragment:df,color_pars_fragment:uf,color_pars_vertex:ff,color_vertex:pf,common:mf,cube_uv_reflection_fragment:gf,defaultnormal_vertex:vf,displacementmap_pars_vertex:_f,displacementmap_vertex:yf,emissivemap_fragment:xf,emissivemap_pars_fragment:Mf,colorspace_fragment:bf,colorspace_pars_fragment:Sf,envmap_fragment:wf,envmap_common_pars_fragment:Ef,envmap_pars_fragment:Tf,envmap_pars_vertex:Af,envmap_physical_pars_fragment:Of,envmap_vertex:Rf,fog_vertex:Cf,fog_pars_vertex:Pf,fog_fragment:Lf,fog_pars_fragment:If,gradientmap_pars_fragment:Df,lightmap_pars_fragment:Uf,lights_lambert_fragment:Nf,lights_lambert_pars_fragment:kf,lights_pars_begin:Ff,lights_toon_fragment:zf,lights_toon_pars_fragment:Bf,lights_phong_fragment:Hf,lights_phong_pars_fragment:Vf,lights_physical_fragment:Gf,lights_physical_pars_fragment:Wf,lights_fragment_begin:Xf,lights_fragment_maps:$f,lights_fragment_end:qf,logdepthbuf_fragment:Yf,logdepthbuf_pars_fragment:jf,logdepthbuf_pars_vertex:Kf,logdepthbuf_vertex:Jf,map_fragment:Zf,map_pars_fragment:Qf,map_particle_fragment:tp,map_particle_pars_fragment:ep,metalnessmap_fragment:np,metalnessmap_pars_fragment:ip,morphinstance_vertex:sp,morphcolor_vertex:rp,morphnormal_vertex:ap,morphtarget_pars_vertex:op,morphtarget_vertex:cp,normal_fragment_begin:lp,normal_fragment_maps:hp,normal_pars_fragment:dp,normal_pars_vertex:up,normal_vertex:fp,normalmap_pars_fragment:pp,clearcoat_normal_fragment_begin:mp,clearcoat_normal_fragment_maps:gp,clearcoat_pars_fragment:vp,iridescence_pars_fragment:_p,opaque_fragment:yp,packing:xp,premultiplied_alpha_fragment:Mp,project_vertex:bp,dithering_fragment:Sp,dithering_pars_fragment:wp,roughnessmap_fragment:Ep,roughnessmap_pars_fragment:Tp,shadowmap_pars_fragment:Ap,shadowmap_pars_vertex:Rp,shadowmap_vertex:Cp,shadowmask_pars_fragment:Pp,skinbase_vertex:Lp,skinning_pars_vertex:Ip,skinning_vertex:Dp,skinnormal_vertex:Up,specularmap_fragment:Np,specularmap_pars_fragment:kp,tonemapping_fragment:Fp,tonemapping_pars_fragment:Op,transmission_fragment:zp,transmission_pars_fragment:Bp,uv_pars_fragment:Hp,uv_pars_vertex:Vp,uv_vertex:Gp,worldpos_vertex:Wp,background_vert:Xp,background_frag:$p,backgroundCube_vert:qp,backgroundCube_frag:Yp,cube_vert:jp,cube_frag:Kp,depth_vert:Jp,depth_frag:Zp,distanceRGBA_vert:Qp,distanceRGBA_frag:tm,equirect_vert:em,equirect_frag:nm,linedashed_vert:im,linedashed_frag:sm,meshbasic_vert:rm,meshbasic_frag:am,meshlambert_vert:om,meshlambert_frag:cm,meshmatcap_vert:lm,meshmatcap_frag:hm,meshnormal_vert:dm,meshnormal_frag:um,meshphong_vert:fm,meshphong_frag:pm,meshphysical_vert:mm,meshphysical_frag:gm,meshtoon_vert:vm,meshtoon_frag:_m,points_vert:ym,points_frag:xm,shadow_vert:Mm,shadow_frag:bm,sprite_vert:Sm,sprite_frag:wm},at={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Hn={basic:{uniforms:Ze([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Ze([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Ht(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Ze([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Ze([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Ze([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Ht(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Ze([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Ze([at.points,at.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Ze([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Ze([at.common,at.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Ze([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Ze([at.sprite,at.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Ze([at.common,at.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Ze([at.lights,at.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Hn.physical={uniforms:Ze([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const Fr={r:0,b:0,g:0},Ii=new kn,Em=new ve;function Tm(i,t,e,n,s,r,a){const o=new Ht(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?e:t).get(y)),y}function v(x){let y=!1;const _=g(x);_===null?p(o,c):_&&_.isColor&&(p(_,1),y=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,y){const _=g(y);_&&(_.isCubeTexture||_.mapping===ya)?(h===void 0&&(h=new I(new wn(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Ts(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ii.copy(y.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Em.makeRotationFromEuler(Ii)),h.material.toneMapped=ie.getTransfer(_.colorSpace)!==fe,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new I(new Ma(2,2),new $n({name:"BackgroundMaterial",uniforms:Ts(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ie.getTransfer(_.colorSpace)!==fe,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,y){x.getRGB(Fr,Nh(i)),n.buffers.color.setClear(Fr.r,Fr.g,Fr.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),c=y,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(o,c)},render:v,addToRenderList:m}}function Am(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(b,P,V,z,q){let K=!1;const X=u(z,V,P);r!==X&&(r=X,l(r.object)),K=f(b,z,V,q),K&&g(b,z,V,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,_(b,P,V,z),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,P,V){const z=V.wireframe===!0;let q=n[b.id];q===void 0&&(q={},n[b.id]=q);let K=q[P.id];K===void 0&&(K={},q[P.id]=K);let X=K[z];return X===void 0&&(X=d(c()),K[z]=X),X}function d(b){const P=[],V=[],z=[];for(let q=0;q<e;q++)P[q]=0,V[q]=0,z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:V,attributeDivisors:z,object:b,attributes:{},index:null}}function f(b,P,V,z){const q=r.attributes,K=P.attributes;let X=0;const tt=V.getAttributes();for(const W in tt)if(tt[W].location>=0){const _t=q[W];let Pt=K[W];if(Pt===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(Pt=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(Pt=b.instanceColor)),_t===void 0||_t.attribute!==Pt||Pt&&_t.data!==Pt.data)return!0;X++}return r.attributesNum!==X||r.index!==z}function g(b,P,V,z){const q={},K=P.attributes;let X=0;const tt=V.getAttributes();for(const W in tt)if(tt[W].location>=0){let _t=K[W];_t===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(_t=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(_t=b.instanceColor));const Pt={};Pt.attribute=_t,_t&&_t.data&&(Pt.data=_t.data),q[W]=Pt,X++}r.attributes=q,r.attributesNum=X,r.index=z}function v(){const b=r.newAttributes;for(let P=0,V=b.length;P<V;P++)b[P]=0}function m(b){p(b,0)}function p(b,P){const V=r.newAttributes,z=r.enabledAttributes,q=r.attributeDivisors;V[b]=1,z[b]===0&&(i.enableVertexAttribArray(b),z[b]=1),q[b]!==P&&(i.vertexAttribDivisor(b,P),q[b]=P)}function x(){const b=r.newAttributes,P=r.enabledAttributes;for(let V=0,z=P.length;V<z;V++)P[V]!==b[V]&&(i.disableVertexAttribArray(V),P[V]=0)}function y(b,P,V,z,q,K,X){X===!0?i.vertexAttribIPointer(b,P,V,q,K):i.vertexAttribPointer(b,P,V,z,q,K)}function _(b,P,V,z){v();const q=z.attributes,K=V.getAttributes(),X=P.defaultAttributeValues;for(const tt in K){const W=K[tt];if(W.location>=0){let dt=q[tt];if(dt===void 0&&(tt==="instanceMatrix"&&b.instanceMatrix&&(dt=b.instanceMatrix),tt==="instanceColor"&&b.instanceColor&&(dt=b.instanceColor)),dt!==void 0){const _t=dt.normalized,Pt=dt.itemSize,Yt=t.get(dt);if(Yt===void 0)continue;const ge=Yt.buffer,j=Yt.type,st=Yt.bytesPerElement,Tt=j===i.INT||j===i.UNSIGNED_INT||dt.gpuType===vc;if(dt.isInterleavedBufferAttribute){const ut=dt.data,Ft=ut.stride,Vt=dt.offset;if(ut.isInstancedInterleavedBuffer){for(let jt=0;jt<W.locationSize;jt++)p(W.location+jt,ut.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let jt=0;jt<W.locationSize;jt++)m(W.location+jt);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let jt=0;jt<W.locationSize;jt++)y(W.location+jt,Pt/W.locationSize,j,_t,Ft*st,(Vt+Pt/W.locationSize*jt)*st,Tt)}else{if(dt.isInstancedBufferAttribute){for(let ut=0;ut<W.locationSize;ut++)p(W.location+ut,dt.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let ut=0;ut<W.locationSize;ut++)m(W.location+ut);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let ut=0;ut<W.locationSize;ut++)y(W.location+ut,Pt/W.locationSize,j,_t,Pt*st,Pt/W.locationSize*ut*st,Tt)}}else if(X!==void 0){const _t=X[tt];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(W.location,_t);break;case 3:i.vertexAttrib3fv(W.location,_t);break;case 4:i.vertexAttrib4fv(W.location,_t);break;default:i.vertexAttrib1fv(W.location,_t)}}}}x()}function C(){L();for(const b in n){const P=n[b];for(const V in P){const z=P[V];for(const q in z)h(z[q].object),delete z[q];delete P[V]}delete n[b]}}function T(b){if(n[b.id]===void 0)return;const P=n[b.id];for(const V in P){const z=P[V];for(const q in z)h(z[q].object),delete z[q];delete P[V]}delete n[b.id]}function R(b){for(const P in n){const V=n[P];if(V[b.id]===void 0)continue;const z=V[b.id];for(const q in z)h(z[q].object),delete z[q];delete V[b.id]}}function L(){w(),a=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function Rm(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Cm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Un&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const L=R===dr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==hi&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ii&&!L)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:C,maxSamples:T}}function Pm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Ni,o=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const x=r?0:n,y=x*4;let _=p.clippingState||null;c.value=_,_=h(g,d,y,f);for(let C=0;C!==y;++C)_[C]=e[C];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=f;y!==v;++y,_+=4)a.copy(u[y]).applyMatrix4(x,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Lm(i){let t=new WeakMap;function e(a,o){return o===To?a.mapping=bs:o===Ao&&(a.mapping=Ss),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===To||o===Ao)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Hu(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class zh extends kh{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const gs=4,pl=[.125,.215,.35,.446,.526,.582],Oi=20,ja=new zh,ml=new Ht;let Ka=null,Ja=0,Za=0,Qa=!1;const ki=(1+Math.sqrt(5))/2,os=1/ki,gl=[new A(-ki,os,0),new A(ki,os,0),new A(-os,0,ki),new A(os,0,ki),new A(0,ki,-os),new A(0,ki,os),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class sc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ka=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ka,Ja,Za),this._renderer.xr.enabled=Qa,t.scissorTest=!1,Or(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bs||t.mapping===Ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ka=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:dr,format:Un,colorSpace:Is,depthBuffer:!1},s=vl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Im(r)),this._blurMaterial=Dm(r,t,e)}return s}_compileMaterial(t){const e=new I(this._lodPlanes[0],t);this._renderer.compile(e,ja)}_sceneToCubeUV(t,e,n,s){const o=new pn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ml),h.toneMapping=bi,h.autoClear=!1;const f=new xe({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new I(new wn,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(ml),v=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):x===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const y=this._cubeSize;Or(s,x*y,p>2?y:0,y,y),h.setRenderTarget(s),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===bs||t.mapping===Ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_l());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new I(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Or(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ja)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=gl[(s-r-1)%gl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new I(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Oi-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Oi;m>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Oi}`);const p=[];let x=0;for(let R=0;R<Oi;++R){const L=R/v,w=Math.exp(-L*L/2);p.push(w),R===0?x+=w:R<m&&(x+=2*w)}for(let R=0;R<p.length;R++)p[R]=p[R]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const _=this._sizeLods[s],C=3*_*(s>y-gs?s-y+gs:0),T=4*(this._cubeSize-_);Or(e,C,T,3*_,2*_),c.setRenderTarget(e),c.render(u,ja)}}function Im(i){const t=[],e=[],n=[];let s=i;const r=i-gs+1+pl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-gs?c=pl[a-i+gs-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,x=new Float32Array(v*g*f),y=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let T=0;T<f;T++){const R=T%3*2/3-1,L=T>2?0:-1,w=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];x.set(w,v*g*T),y.set(d,m*g*T);const b=[T,T,T,T,T,T];_.set(b,p*g*T)}const C=new Ue;C.setAttribute("position",new cn(x,v)),C.setAttribute("uv",new cn(y,m)),C.setAttribute("faceIndex",new cn(_,p)),t.push(C),s>gs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function vl(i,t,e){const n=new $i(i,t,e);return n.texture.mapping=ya,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Or(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Dm(i,t,e){const n=new Float32Array(Oi),s=new A(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function _l(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function yl(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Ec(){return`

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
	`}function Um(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===To||c===Ao,h=c===bs||c===Ss;if(l||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new sc(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new sc(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Nm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Zs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function km(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const x=f.array;v=f.version;for(let y=0,_=x.length;y<_;y+=3){const C=x[y+0],T=x[y+1],R=x[y+2];d.push(C,T,T,R,R,C)}}else if(g!==void 0){const x=g.array;v=g.version;for(let y=0,_=x.length/3-1;y<_;y+=3){const C=y+0,T=y+1,R=y+2;d.push(C,T,T,R,R,C)}}else return;const m=new(Rh(d)?Uh:Dh)(d,1);m.version=v;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Fm(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*v[x];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Om(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function zm(i,t,e){const n=new WeakMap,s=new me;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let b=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",b)};var f=b;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let C=o.attributes.position.count*_,T=1;C>t.maxTextureSize&&(T=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const R=new Float32Array(C*T*4*u),L=new Ph(R,C,T,u);L.type=ii,L.needsUpdate=!0;const w=_*4;for(let P=0;P<u;P++){const V=p[P],z=x[P],q=y[P],K=C*T*4*P;for(let X=0;X<V.count;X++){const tt=X*w;g===!0&&(s.fromBufferAttribute(V,X),R[K+tt+0]=s.x,R[K+tt+1]=s.y,R[K+tt+2]=s.z,R[K+tt+3]=0),v===!0&&(s.fromBufferAttribute(z,X),R[K+tt+4]=s.x,R[K+tt+5]=s.y,R[K+tt+6]=s.z,R[K+tt+7]=0),m===!0&&(s.fromBufferAttribute(q,X),R[K+tt+8]=s.x,R[K+tt+9]=s.y,R[K+tt+10]=s.z,R[K+tt+11]=q.itemSize===4?s.w:1)}}d={count:u,texture:L,size:new ht(C,T)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Bm(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class Bh extends an{constructor(t,e,n,s,r,a,o,c,l,h=_s){if(h!==_s&&h!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===_s&&(n=Xi),n===void 0&&h===Es&&(n=ws),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Nn,this.minFilter=c!==void 0?c:Nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Hh=new an,xl=new Bh(1,1),Vh=new Ph,Gh=new Eu,Wh=new Fh,Ml=[],bl=[],Sl=new Float32Array(16),wl=new Float32Array(9),El=new Float32Array(4);function Us(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ml[s];if(r===void 0&&(r=new Float32Array(s),Ml[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ba(i,t){let e=bl[t];e===void 0&&(e=new Int32Array(t),bl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Hm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function Gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function Wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function Xm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(ze(e,n))return;El.set(n),i.uniformMatrix2fv(this.addr,!1,El),Be(e,n)}}function $m(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(ze(e,n))return;wl.set(n),i.uniformMatrix3fv(this.addr,!1,wl),Be(e,n)}}function qm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(ze(e,n))return;Sl.set(n),i.uniformMatrix4fv(this.addr,!1,Sl),Be(e,n)}}function Ym(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function Km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function Jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function Zm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function t0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function e0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function n0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(xl.compareFunction=Ah,r=xl):r=Hh,e.setTexture2D(t||r,s)}function i0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Gh,s)}function s0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Wh,s)}function r0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Vh,s)}function a0(i){switch(i){case 5126:return Hm;case 35664:return Vm;case 35665:return Gm;case 35666:return Wm;case 35674:return Xm;case 35675:return $m;case 35676:return qm;case 5124:case 35670:return Ym;case 35667:case 35671:return jm;case 35668:case 35672:return Km;case 35669:case 35673:return Jm;case 5125:return Zm;case 36294:return Qm;case 36295:return t0;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return n0;case 35679:case 36299:case 36307:return i0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return r0}}function o0(i,t){i.uniform1fv(this.addr,t)}function c0(i,t){const e=Us(t,this.size,2);i.uniform2fv(this.addr,e)}function l0(i,t){const e=Us(t,this.size,3);i.uniform3fv(this.addr,e)}function h0(i,t){const e=Us(t,this.size,4);i.uniform4fv(this.addr,e)}function d0(i,t){const e=Us(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function u0(i,t){const e=Us(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function f0(i,t){const e=Us(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function p0(i,t){i.uniform1iv(this.addr,t)}function m0(i,t){i.uniform2iv(this.addr,t)}function g0(i,t){i.uniform3iv(this.addr,t)}function v0(i,t){i.uniform4iv(this.addr,t)}function _0(i,t){i.uniform1uiv(this.addr,t)}function y0(i,t){i.uniform2uiv(this.addr,t)}function x0(i,t){i.uniform3uiv(this.addr,t)}function M0(i,t){i.uniform4uiv(this.addr,t)}function b0(i,t,e){const n=this.cache,s=t.length,r=ba(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Hh,r[a])}function S0(i,t,e){const n=this.cache,s=t.length,r=ba(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Gh,r[a])}function w0(i,t,e){const n=this.cache,s=t.length,r=ba(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Wh,r[a])}function E0(i,t,e){const n=this.cache,s=t.length,r=ba(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Vh,r[a])}function T0(i){switch(i){case 5126:return o0;case 35664:return c0;case 35665:return l0;case 35666:return h0;case 35674:return d0;case 35675:return u0;case 35676:return f0;case 5124:case 35670:return p0;case 35667:case 35671:return m0;case 35668:case 35672:return g0;case 35669:case 35673:return v0;case 5125:return _0;case 36294:return y0;case 36295:return x0;case 36296:return M0;case 35678:case 36198:case 36298:case 36306:case 35682:return b0;case 35679:case 36299:case 36307:return S0;case 35680:case 36300:case 36308:case 36293:return w0;case 36289:case 36303:case 36311:case 36292:return E0}}class A0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=a0(e.type)}}class R0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=T0(e.type)}}class C0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const to=/(\w+)(\])?(\[|\.)?/g;function Tl(i,t){i.seq.push(t),i.map[t.id]=t}function P0(i,t,e){const n=i.name,s=n.length;for(to.lastIndex=0;;){const r=to.exec(n),a=to.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Tl(e,l===void 0?new A0(o,i,t):new R0(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new C0(o),Tl(e,u)),e=u}}}class la{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);P0(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Al(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const L0=37297;let I0=0;function D0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Rl=new Xt;function U0(i){ie._getMatrix(Rl,ie.workingColorSpace,i);const t=`mat3( ${Rl.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case xa:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Cl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+D0(i.getShaderSource(t),a)}else return s}function N0(i,t){const e=U0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function k0(i,t){let e;switch(t){case Jd:e="Linear";break;case Zd:e="Reinhard";break;case Qd:e="Cineon";break;case tu:e="ACESFilmic";break;case nu:e="AgX";break;case iu:e="Neutral";break;case eu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const zr=new A;function F0(){ie.getLuminanceCoefficients(zr);const i=zr.x.toFixed(4),t=zr.y.toFixed(4),e=zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function z0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function B0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Qs(i){return i!==""}function Pl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ll(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const H0=/^[ \t]*#include +<([\w\d./]+)>/gm;function rc(i){return i.replace(H0,G0)}const V0=new Map;function G0(i,t){let e=qt[t];if(e===void 0){const n=V0.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return rc(e)}const W0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Il(i){return i.replace(W0,X0)}function X0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Dl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function $0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===fh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Pd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ei&&(t="SHADOWMAP_TYPE_VSM"),t}function q0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bs:case Ss:t="ENVMAP_TYPE_CUBE";break;case ya:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Y0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ss:t="ENVMAP_MODE_REFRACTION";break}return t}function j0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ph:t="ENVMAP_BLENDING_MULTIPLY";break;case jd:t="ENVMAP_BLENDING_MIX";break;case Kd:t="ENVMAP_BLENDING_ADD";break}return t}function K0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function J0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=$0(e),l=q0(e),h=Y0(e),u=j0(e),d=K0(e),f=O0(e),g=z0(r),v=s.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qs).join(`
`),p.length>0&&(p+=`
`)):(m=[Dl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),p=[Dl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bi?"#define TONE_MAPPING":"",e.toneMapping!==bi?qt.tonemapping_pars_fragment:"",e.toneMapping!==bi?k0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,N0("linearToOutputTexel",e.outputColorSpace),F0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qs).join(`
`)),a=rc(a),a=Pl(a,e),a=Ll(a,e),o=rc(o),o=Pl(o,e),o=Ll(o,e),a=Il(a),o=Il(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+m+a,_=x+p+o,C=Al(s,s.VERTEX_SHADER,y),T=Al(s,s.FRAGMENT_SHADER,_);s.attachShader(v,C),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(P){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(v).trim(),z=s.getShaderInfoLog(C).trim(),q=s.getShaderInfoLog(T).trim();let K=!0,X=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,C,T);else{const tt=Cl(s,C,"vertex"),W=Cl(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+tt+`
`+W)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(z===""||q==="")&&(X=!1);X&&(P.diagnostics={runnable:K,programLog:V,vertexShader:{log:z,prefix:m},fragmentShader:{log:q,prefix:p}})}s.deleteShader(C),s.deleteShader(T),L=new la(s,v),w=B0(s,v)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,L0)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=I0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=T,this}let Z0=0;class Q0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new tg(t),e.set(t,n)),n}}class tg{constructor(t){this.id=Z0++,this.code=t,this.usedTimes=0}}function eg(i,t,e,n,s,r,a){const o=new Lh,c=new Q0,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,b,P,V,z){const q=V.fog,K=z.geometry,X=w.isMeshStandardMaterial?V.environment:null,tt=(w.isMeshStandardMaterial?e:t).get(w.envMap||X),W=tt&&tt.mapping===ya?tt.image.height:null,dt=g[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const _t=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Pt=_t!==void 0?_t.length:0;let Yt=0;K.morphAttributes.position!==void 0&&(Yt=1),K.morphAttributes.normal!==void 0&&(Yt=2),K.morphAttributes.color!==void 0&&(Yt=3);let ge,j,st,Tt;if(dt){const de=Hn[dt];ge=de.vertexShader,j=de.fragmentShader}else ge=w.vertexShader,j=w.fragmentShader,c.update(w),st=c.getVertexShaderID(w),Tt=c.getFragmentShaderID(w);const ut=i.getRenderTarget(),Ft=i.state.buffers.depth.getReversed(),Vt=z.isInstancedMesh===!0,jt=z.isBatchedMesh===!0,Re=!!w.map,ee=!!w.matcap,Le=!!tt,k=!!w.aoMap,gn=!!w.lightMap,Zt=!!w.bumpMap,Qt=!!w.normalMap,Ut=!!w.displacementMap,Me=!!w.emissiveMap,Dt=!!w.metalnessMap,E=!!w.roughnessMap,M=w.anisotropy>0,F=w.clearcoat>0,J=w.dispersion>0,Q=w.iridescence>0,Y=w.sheen>0,At=w.transmission>0,ft=M&&!!w.anisotropyMap,yt=F&&!!w.clearcoatMap,ne=F&&!!w.clearcoatNormalMap,nt=F&&!!w.clearcoatRoughnessMap,xt=Q&&!!w.iridescenceMap,Nt=Q&&!!w.iridescenceThicknessMap,Ot=Y&&!!w.sheenColorMap,Mt=Y&&!!w.sheenRoughnessMap,te=!!w.specularMap,$t=!!w.specularColorMap,_e=!!w.specularIntensityMap,D=At&&!!w.transmissionMap,lt=At&&!!w.thicknessMap,G=!!w.gradientMap,Z=!!w.alphaMap,gt=w.alphaTest>0,pt=!!w.alphaHash,Gt=!!w.extensions;let Pe=bi;w.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Pe=i.toneMapping);const Ge={shaderID:dt,shaderType:w.type,shaderName:w.name,vertexShader:ge,fragmentShader:j,defines:w.defines,customVertexShaderID:st,customFragmentShaderID:Tt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:jt,batchingColor:jt&&z._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&z.instanceColor!==null,instancingMorph:Vt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Is,alphaToCoverage:!!w.alphaToCoverage,map:Re,matcap:ee,envMap:Le,envMapMode:Le&&tt.mapping,envMapCubeUVHeight:W,aoMap:k,lightMap:gn,bumpMap:Zt,normalMap:Qt,displacementMap:d&&Ut,emissiveMap:Me,normalMapObjectSpace:Qt&&w.normalMapType===ou,normalMapTangentSpace:Qt&&w.normalMapType===Th,metalnessMap:Dt,roughnessMap:E,anisotropy:M,anisotropyMap:ft,clearcoat:F,clearcoatMap:yt,clearcoatNormalMap:ne,clearcoatRoughnessMap:nt,dispersion:J,iridescence:Q,iridescenceMap:xt,iridescenceThicknessMap:Nt,sheen:Y,sheenColorMap:Ot,sheenRoughnessMap:Mt,specularMap:te,specularColorMap:$t,specularIntensityMap:_e,transmission:At,transmissionMap:D,thicknessMap:lt,gradientMap:G,opaque:w.transparent===!1&&w.blending===Vi&&w.alphaToCoverage===!1,alphaMap:Z,alphaTest:gt,alphaHash:pt,combine:w.combine,mapUv:Re&&v(w.map.channel),aoMapUv:k&&v(w.aoMap.channel),lightMapUv:gn&&v(w.lightMap.channel),bumpMapUv:Zt&&v(w.bumpMap.channel),normalMapUv:Qt&&v(w.normalMap.channel),displacementMapUv:Ut&&v(w.displacementMap.channel),emissiveMapUv:Me&&v(w.emissiveMap.channel),metalnessMapUv:Dt&&v(w.metalnessMap.channel),roughnessMapUv:E&&v(w.roughnessMap.channel),anisotropyMapUv:ft&&v(w.anisotropyMap.channel),clearcoatMapUv:yt&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:ne&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&v(w.sheenRoughnessMap.channel),specularMapUv:te&&v(w.specularMap.channel),specularColorMapUv:$t&&v(w.specularColorMap.channel),specularIntensityMapUv:_e&&v(w.specularIntensityMap.channel),transmissionMapUv:D&&v(w.transmissionMap.channel),thicknessMapUv:lt&&v(w.thicknessMap.channel),alphaMapUv:Z&&v(w.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Qt||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!K.attributes.uv&&(Re||Z),fog:!!q,useFog:w.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ft,skinning:z.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:Yt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pe,decodeVideoTexture:Re&&w.map.isVideoTexture===!0&&ie.getTransfer(w.map.colorSpace)===fe,decodeVideoTextureEmissive:Me&&w.emissiveMap.isVideoTexture===!0&&ie.getTransfer(w.emissiveMap.colorSpace)===fe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ae,flipSided:w.side===rn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Gt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&w.extensions.multiDraw===!0||jt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ge.vertexUv1s=l.has(1),Ge.vertexUv2s=l.has(2),Ge.vertexUv3s=l.has(3),l.clear(),Ge}function p(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)b.push(P),b.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(x(b,w),y(b,w),b.push(i.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function x(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function y(w,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),w.push(o.mask)}function _(w){const b=g[w.type];let P;if(b){const V=Hn[b];P=Fu.clone(V.uniforms)}else P=w.uniforms;return P}function C(w,b){let P;for(let V=0,z=h.length;V<z;V++){const q=h[V];if(q.cacheKey===b){P=q,++P.usedTimes;break}}return P===void 0&&(P=new J0(i,b,w,r),h.push(P)),P}function T(w){if(--w.usedTimes===0){const b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function R(w){c.remove(w)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:C,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:L}}function ng(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ig(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ul(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Nl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,v,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function o(u,d,f,g,v,m){const p=a(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,v,m){const p=a(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||ig),n.length>1&&n.sort(d||Ul),s.length>1&&s.sort(d||Ul)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function sg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Nl,i.set(n,[a])):s>=r.length?(a=new Nl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function rg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new Ht};break;case"SpotLight":e={position:new A,direction:new A,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function ag(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let og=0;function cg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function lg(i){const t=new rg,e=ag(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);const s=new A,r=new ve,a=new ve;function o(l){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,x=0,y=0,_=0,C=0,T=0,R=0;l.sort(cg);for(let w=0,b=l.length;w<b;w++){const P=l[w],V=P.color,z=P.intensity,q=P.distance,K=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=V.r*z,u+=V.g*z,d+=V.b*z;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],z);R++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const tt=P.shadow,W=e.get(P);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=P.shadow.matrix,x++}n.directional[f]=X,f++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(V).multiplyScalar(z),X.distance=q,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[v]=X;const tt=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,tt.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[v]=tt.matrix,P.castShadow){const W=e.get(P);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=K,_++}v++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(V).multiplyScalar(z),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=X,m++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const tt=P.shadow,W=e.get(P);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,W.shadowCameraNear=tt.camera.near,W.shadowCameraFar=tt.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=X,g++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(z),X.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[p]=X,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==x||L.numPointShadows!==y||L.numSpotShadows!==_||L.numSpotMaps!==C||L.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,L.directionalLength=f,L.pointLength=g,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=x,L.numPointShadows=y,L.numSpotShadows=_,L.numSpotMaps=C,L.numLightProbes=R,n.version=og++)}function c(l,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const y=l[p];if(y.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(y.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:n}}function kl(i){const t=new lg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function hg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new kl(i),t.set(s,[o])):r>=a.length?(o=new kl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class dg extends Ti{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ru,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ug extends Ti{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const fg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pg=`uniform sampler2D shadow_pass;
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
}`;function mg(i,t,e){let n=new wc;const s=new ht,r=new ht,a=new me,o=new dg({depthPacking:au}),c=new ug,l={},h=e.maxTextureSize,u={[wi]:rn,[rn]:wi,[Ae]:Ae},d=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:fg,fragmentShader:pg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ue;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new I(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fh;let p=this.type;this.render=function(T,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const w=i.getRenderTarget(),b=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Mi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const z=p!==ei&&this.type===ei,q=p===ei&&this.type!==ei;for(let K=0,X=T.length;K<X;K++){const tt=T[K],W=tt.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const dt=W.getFrameExtents();if(s.multiply(dt),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/dt.x),s.x=r.x*dt.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/dt.y),s.y=r.y*dt.y,W.mapSize.y=r.y)),W.map===null||z===!0||q===!0){const Pt=this.type!==ei?{minFilter:Nn,magFilter:Nn}:{};W.map!==null&&W.map.dispose(),W.map=new $i(s.x,s.y,Pt),W.map.texture.name=tt.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const _t=W.getViewportCount();for(let Pt=0;Pt<_t;Pt++){const Yt=W.getViewport(Pt);a.set(r.x*Yt.x,r.y*Yt.y,r.x*Yt.z,r.y*Yt.w),V.viewport(a),W.updateMatrices(tt,Pt),n=W.getFrustum(),_(R,L,W.camera,tt,this.type)}W.isPointLightShadow!==!0&&this.type===ei&&x(W,L),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,b,P)};function x(T,R){const L=t.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new $i(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,L,d,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,L,f,v,null)}function y(T,R,L,w){let b=null;const P=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)b=P;else if(b=L.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const V=b.uuid,z=R.uuid;let q=l[V];q===void 0&&(q={},l[V]=q);let K=q[z];K===void 0&&(K=b.clone(),q[z]=K,R.addEventListener("dispose",C)),b=K}if(b.visible=R.visible,b.wireframe=R.wireframe,w===ei?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:u[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const V=i.properties.get(b);V.light=L}return b}function _(T,R,L,w,b){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===ei)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const z=t.update(T),q=T.material;if(Array.isArray(q)){const K=z.groups;for(let X=0,tt=K.length;X<tt;X++){const W=K[X],dt=q[W.materialIndex];if(dt&&dt.visible){const _t=y(T,dt,w,b);T.onBeforeShadow(i,T,R,L,z,_t,W),i.renderBufferDirect(L,null,z,_t,T,W),T.onAfterShadow(i,T,R,L,z,_t,W)}}}else if(q.visible){const K=y(T,q,w,b);T.onBeforeShadow(i,T,R,L,z,K,null),i.renderBufferDirect(L,null,z,K,T,null),T.onAfterShadow(i,T,R,L,z,K,null)}}const V=T.children;for(let z=0,q=V.length;z<q;z++)_(V[z],R,L,w,b)}function C(T){T.target.removeEventListener("dispose",C);for(const L in l){const w=l[L],b=T.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}const gg={[yo]:xo,[Mo]:wo,[bo]:Eo,[Ms]:So,[xo]:yo,[wo]:Mo,[Eo]:bo,[So]:Ms};function vg(i,t){function e(){let D=!1;const lt=new me;let G=null;const Z=new me(0,0,0,0);return{setMask:function(gt){G!==gt&&!D&&(i.colorMask(gt,gt,gt,gt),G=gt)},setLocked:function(gt){D=gt},setClear:function(gt,pt,Gt,Pe,Ge){Ge===!0&&(gt*=Pe,pt*=Pe,Gt*=Pe),lt.set(gt,pt,Gt,Pe),Z.equals(lt)===!1&&(i.clearColor(gt,pt,Gt,Pe),Z.copy(lt))},reset:function(){D=!1,G=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,lt=!1,G=null,Z=null,gt=null;return{setReversed:function(pt){if(lt!==pt){const Gt=t.get("EXT_clip_control");lt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);const Pe=gt;gt=null,this.setClear(Pe)}lt=pt},getReversed:function(){return lt},setTest:function(pt){pt?ut(i.DEPTH_TEST):Ft(i.DEPTH_TEST)},setMask:function(pt){G!==pt&&!D&&(i.depthMask(pt),G=pt)},setFunc:function(pt){if(lt&&(pt=gg[pt]),Z!==pt){switch(pt){case yo:i.depthFunc(i.NEVER);break;case xo:i.depthFunc(i.ALWAYS);break;case Mo:i.depthFunc(i.LESS);break;case Ms:i.depthFunc(i.LEQUAL);break;case bo:i.depthFunc(i.EQUAL);break;case So:i.depthFunc(i.GEQUAL);break;case wo:i.depthFunc(i.GREATER);break;case Eo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=pt}},setLocked:function(pt){D=pt},setClear:function(pt){gt!==pt&&(lt&&(pt=1-pt),i.clearDepth(pt),gt=pt)},reset:function(){D=!1,G=null,Z=null,gt=null,lt=!1}}}function s(){let D=!1,lt=null,G=null,Z=null,gt=null,pt=null,Gt=null,Pe=null,Ge=null;return{setTest:function(de){D||(de?ut(i.STENCIL_TEST):Ft(i.STENCIL_TEST))},setMask:function(de){lt!==de&&!D&&(i.stencilMask(de),lt=de)},setFunc:function(de,En,Yn){(G!==de||Z!==En||gt!==Yn)&&(i.stencilFunc(de,En,Yn),G=de,Z=En,gt=Yn)},setOp:function(de,En,Yn){(pt!==de||Gt!==En||Pe!==Yn)&&(i.stencilOp(de,En,Yn),pt=de,Gt=En,Pe=Yn)},setLocked:function(de){D=de},setClear:function(de){Ge!==de&&(i.clearStencil(de),Ge=de)},reset:function(){D=!1,lt=null,G=null,Z=null,gt=null,pt=null,Gt=null,Pe=null,Ge=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,x=null,y=null,_=null,C=null,T=null,R=new Ht(0,0,0),L=0,w=!1,b=null,P=null,V=null,z=null,q=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,tt=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=tt>=1):W.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=tt>=2);let dt=null,_t={};const Pt=i.getParameter(i.SCISSOR_BOX),Yt=i.getParameter(i.VIEWPORT),ge=new me().fromArray(Pt),j=new me().fromArray(Yt);function st(D,lt,G,Z){const gt=new Uint8Array(4),pt=i.createTexture();i.bindTexture(D,pt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<G;Gt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(lt+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return pt}const Tt={};Tt[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),Tt[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Tt[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ut(i.DEPTH_TEST),a.setFunc(Ms),Zt(!1),Qt(Gc),ut(i.CULL_FACE),k(Mi);function ut(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Ft(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Vt(D,lt){return u[D]!==lt?(i.bindFramebuffer(D,lt),u[D]=lt,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=lt),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function jt(D,lt){let G=f,Z=!1;if(D){G=d.get(lt),G===void 0&&(G=[],d.set(lt,G));const gt=D.textures;if(G.length!==gt.length||G[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,Gt=gt.length;pt<Gt;pt++)G[pt]=i.COLOR_ATTACHMENT0+pt;G.length=gt.length,Z=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,Z=!0);Z&&i.drawBuffers(G)}function Re(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const ee={[Fi]:i.FUNC_ADD,[Id]:i.FUNC_SUBTRACT,[Dd]:i.FUNC_REVERSE_SUBTRACT};ee[Ud]=i.MIN,ee[Nd]=i.MAX;const Le={[kd]:i.ZERO,[Fd]:i.ONE,[Od]:i.SRC_COLOR,[vo]:i.SRC_ALPHA,[Wd]:i.SRC_ALPHA_SATURATE,[Vd]:i.DST_COLOR,[Bd]:i.DST_ALPHA,[zd]:i.ONE_MINUS_SRC_COLOR,[_o]:i.ONE_MINUS_SRC_ALPHA,[Gd]:i.ONE_MINUS_DST_COLOR,[Hd]:i.ONE_MINUS_DST_ALPHA,[Xd]:i.CONSTANT_COLOR,[$d]:i.ONE_MINUS_CONSTANT_COLOR,[qd]:i.CONSTANT_ALPHA,[Yd]:i.ONE_MINUS_CONSTANT_ALPHA};function k(D,lt,G,Z,gt,pt,Gt,Pe,Ge,de){if(D===Mi){v===!0&&(Ft(i.BLEND),v=!1);return}if(v===!1&&(ut(i.BLEND),v=!0),D!==Ld){if(D!==m||de!==w){if((p!==Fi||_!==Fi)&&(i.blendEquation(i.FUNC_ADD),p=Fi,_=Fi),de)switch(D){case Vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qe:i.blendFunc(i.ONE,i.ONE);break;case Wc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qe:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Wc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}x=null,y=null,C=null,T=null,R.set(0,0,0),L=0,m=D,w=de}return}gt=gt||lt,pt=pt||G,Gt=Gt||Z,(lt!==p||gt!==_)&&(i.blendEquationSeparate(ee[lt],ee[gt]),p=lt,_=gt),(G!==x||Z!==y||pt!==C||Gt!==T)&&(i.blendFuncSeparate(Le[G],Le[Z],Le[pt],Le[Gt]),x=G,y=Z,C=pt,T=Gt),(Pe.equals(R)===!1||Ge!==L)&&(i.blendColor(Pe.r,Pe.g,Pe.b,Ge),R.copy(Pe),L=Ge),m=D,w=!1}function gn(D,lt){D.side===Ae?Ft(i.CULL_FACE):ut(i.CULL_FACE);let G=D.side===rn;lt&&(G=!G),Zt(G),D.blending===Vi&&D.transparent===!1?k(Mi):k(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const Z=D.stencilWrite;o.setTest(Z),Z&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Me(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):Ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(D){b!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),b=D)}function Qt(D){D!==Rd?(ut(i.CULL_FACE),D!==P&&(D===Gc?i.cullFace(i.BACK):D===Cd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ft(i.CULL_FACE),P=D}function Ut(D){D!==V&&(X&&i.lineWidth(D),V=D)}function Me(D,lt,G){D?(ut(i.POLYGON_OFFSET_FILL),(z!==lt||q!==G)&&(i.polygonOffset(lt,G),z=lt,q=G)):Ft(i.POLYGON_OFFSET_FILL)}function Dt(D){D?ut(i.SCISSOR_TEST):Ft(i.SCISSOR_TEST)}function E(D){D===void 0&&(D=i.TEXTURE0+K-1),dt!==D&&(i.activeTexture(D),dt=D)}function M(D,lt,G){G===void 0&&(dt===null?G=i.TEXTURE0+K-1:G=dt);let Z=_t[G];Z===void 0&&(Z={type:void 0,texture:void 0},_t[G]=Z),(Z.type!==D||Z.texture!==lt)&&(dt!==G&&(i.activeTexture(G),dt=G),i.bindTexture(D,lt||Tt[D]),Z.type=D,Z.texture=lt)}function F(){const D=_t[dt];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function At(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Nt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ot(D){ge.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),ge.copy(D))}function Mt(D){j.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),j.copy(D))}function te(D,lt){let G=l.get(lt);G===void 0&&(G=new WeakMap,l.set(lt,G));let Z=G.get(D);Z===void 0&&(Z=i.getUniformBlockIndex(lt,D.name),G.set(D,Z))}function $t(D,lt){const Z=l.get(lt).get(D);c.get(lt)!==Z&&(i.uniformBlockBinding(lt,Z,D.__bindingPointIndex),c.set(lt,Z))}function _e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},dt=null,_t={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,x=null,y=null,_=null,C=null,T=null,R=new Ht(0,0,0),L=0,w=!1,b=null,P=null,V=null,z=null,q=null,ge.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ut,disable:Ft,bindFramebuffer:Vt,drawBuffers:jt,useProgram:Re,setBlending:k,setMaterial:gn,setFlipSided:Zt,setCullFace:Qt,setLineWidth:Ut,setPolygonOffset:Me,setScissorTest:Dt,activeTexture:E,bindTexture:M,unbindTexture:F,compressedTexImage2D:J,compressedTexImage3D:Q,texImage2D:xt,texImage3D:Nt,updateUBOMapping:te,uniformBlockBinding:$t,texStorage2D:ne,texStorage3D:nt,texSubImage2D:Y,texSubImage3D:At,compressedTexSubImage2D:ft,compressedTexSubImage3D:yt,scissor:Ot,viewport:Mt,reset:_e}}function Fl(i,t,e,n){const s=_g(n);switch(e){case yh:return i*t;case Mh:return i*t;case bh:return i*t*2;case Sh:return i*t/s.components*s.byteLength;case xc:return i*t/s.components*s.byteLength;case wh:return i*t*2/s.components*s.byteLength;case Mc:return i*t*2/s.components*s.byteLength;case xh:return i*t*3/s.components*s.byteLength;case Un:return i*t*4/s.components*s.byteLength;case bc:return i*t*4/s.components*s.byteLength;case ia:case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ra:case aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lo:case Do:return Math.max(i,16)*Math.max(t,8)/4;case Po:case Io:return Math.max(i,8)*Math.max(t,8)/2;case Uo:case No:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case zo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Go:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Wo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case $o:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case qo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case jo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ko:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case oa:case Jo:case Zo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Eh:case Qo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case tc:case ec:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _g(i){switch(i){case hi:case gh:return{byteLength:1,components:1};case sr:case vh:case dr:return{byteLength:2,components:1};case _c:case yc:return{byteLength:2,components:4};case Xi:case vc:case ii:return{byteLength:4,components:1};case _h:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function yg(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ht,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,M){return f?new OffscreenCanvas(E,M):da("canvas")}function v(E,M,F){let J=1;const Q=Dt(E);if((Q.width>F||Q.height>F)&&(J=F/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Y=Math.floor(J*Q.width),At=Math.floor(J*Q.height);u===void 0&&(u=g(Y,At));const ft=M?g(Y,At):u;return ft.width=Y,ft.height=At,ft.getContext("2d").drawImage(E,0,0,Y,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+At+")."),ft}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){i.generateMipmap(E)}function x(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(E,M,F,J,Q=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Y=M;if(M===i.RED&&(F===i.FLOAT&&(Y=i.R32F),F===i.HALF_FLOAT&&(Y=i.R16F),F===i.UNSIGNED_BYTE&&(Y=i.R8)),M===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.R8UI),F===i.UNSIGNED_SHORT&&(Y=i.R16UI),F===i.UNSIGNED_INT&&(Y=i.R32UI),F===i.BYTE&&(Y=i.R8I),F===i.SHORT&&(Y=i.R16I),F===i.INT&&(Y=i.R32I)),M===i.RG&&(F===i.FLOAT&&(Y=i.RG32F),F===i.HALF_FLOAT&&(Y=i.RG16F),F===i.UNSIGNED_BYTE&&(Y=i.RG8)),M===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RG8UI),F===i.UNSIGNED_SHORT&&(Y=i.RG16UI),F===i.UNSIGNED_INT&&(Y=i.RG32UI),F===i.BYTE&&(Y=i.RG8I),F===i.SHORT&&(Y=i.RG16I),F===i.INT&&(Y=i.RG32I)),M===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),F===i.UNSIGNED_INT&&(Y=i.RGB32UI),F===i.BYTE&&(Y=i.RGB8I),F===i.SHORT&&(Y=i.RGB16I),F===i.INT&&(Y=i.RGB32I)),M===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),F===i.UNSIGNED_INT&&(Y=i.RGBA32UI),F===i.BYTE&&(Y=i.RGBA8I),F===i.SHORT&&(Y=i.RGBA16I),F===i.INT&&(Y=i.RGBA32I)),M===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),M===i.RGBA){const At=Q?xa:ie.getTransfer(J);F===i.FLOAT&&(Y=i.RGBA32F),F===i.HALF_FLOAT&&(Y=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Y=At===fe?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function _(E,M){let F;return E?M===null||M===Xi||M===ws?F=i.DEPTH24_STENCIL8:M===ii?F=i.DEPTH32F_STENCIL8:M===sr&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Xi||M===ws?F=i.DEPTH_COMPONENT24:M===ii?F=i.DEPTH_COMPONENT32F:M===sr&&(F=i.DEPTH_COMPONENT16),F}function C(E,M){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Nn&&E.minFilter!==Gn?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function T(E){const M=E.target;M.removeEventListener("dispose",T),L(M),M.isVideoTexture&&h.delete(M)}function R(E){const M=E.target;M.removeEventListener("dispose",R),b(M)}function L(E){const M=n.get(E);if(M.__webglInit===void 0)return;const F=E.source,J=d.get(F);if(J){const Q=J[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(E),Object.keys(J).length===0&&d.delete(F)}n.remove(E)}function w(E){const M=n.get(E);i.deleteTexture(M.__webglTexture);const F=E.source,J=d.get(F);delete J[M.__cacheKey],a.memory.textures--}function b(E){const M=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let Q=0;Q<M.__webglFramebuffer[J].length;Q++)i.deleteFramebuffer(M.__webglFramebuffer[J][Q]);else i.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)i.deleteFramebuffer(M.__webglFramebuffer[J]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const F=E.textures;for(let J=0,Q=F.length;J<Q;J++){const Y=n.get(F[J]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(F[J])}n.remove(E)}let P=0;function V(){P=0}function z(){const E=P;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),P+=1,E}function q(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function K(E,M){const F=n.get(E);if(E.isVideoTexture&&Ut(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){const J=E.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(F,E,M);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+M)}function X(E,M){const F=n.get(E);if(E.version>0&&F.__version!==E.version){j(F,E,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+M)}function tt(E,M){const F=n.get(E);if(E.version>0&&F.__version!==E.version){j(F,E,M);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+M)}function W(E,M){const F=n.get(E);if(E.version>0&&F.__version!==E.version){st(F,E,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+M)}const dt={[Ro]:i.REPEAT,[Bi]:i.CLAMP_TO_EDGE,[Co]:i.MIRRORED_REPEAT},_t={[Nn]:i.NEAREST,[su]:i.NEAREST_MIPMAP_NEAREST,[yr]:i.NEAREST_MIPMAP_LINEAR,[Gn]:i.LINEAR,[Aa]:i.LINEAR_MIPMAP_NEAREST,[Hi]:i.LINEAR_MIPMAP_LINEAR},Pt={[cu]:i.NEVER,[pu]:i.ALWAYS,[lu]:i.LESS,[Ah]:i.LEQUAL,[hu]:i.EQUAL,[fu]:i.GEQUAL,[du]:i.GREATER,[uu]:i.NOTEQUAL};function Yt(E,M){if(M.type===ii&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Gn||M.magFilter===Aa||M.magFilter===yr||M.magFilter===Hi||M.minFilter===Gn||M.minFilter===Aa||M.minFilter===yr||M.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,dt[M.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,dt[M.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,dt[M.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,_t[M.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,_t[M.minFilter]),M.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Pt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Nn||M.minFilter!==yr&&M.minFilter!==Hi||M.type===ii&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ge(E,M){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",T));const J=M.source;let Q=d.get(J);Q===void 0&&(Q={},d.set(J,Q));const Y=q(M);if(Y!==E.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Q[Y].usedTimes++;const At=Q[E.__cacheKey];At!==void 0&&(Q[E.__cacheKey].usedTimes--,At.usedTimes===0&&w(M)),E.__cacheKey=Y,E.__webglTexture=Q[Y].texture}return F}function j(E,M,F){let J=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=i.TEXTURE_3D);const Q=ge(E,M),Y=M.source;e.bindTexture(J,E.__webglTexture,i.TEXTURE0+F);const At=n.get(Y);if(Y.version!==At.__version||Q===!0){e.activeTexture(i.TEXTURE0+F);const ft=ie.getPrimaries(ie.workingColorSpace),yt=M.colorSpace===xi?null:ie.getPrimaries(M.colorSpace),ne=M.colorSpace===xi||ft===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let nt=v(M.image,!1,s.maxTextureSize);nt=Me(M,nt);const xt=r.convert(M.format,M.colorSpace),Nt=r.convert(M.type);let Ot=y(M.internalFormat,xt,Nt,M.colorSpace,M.isVideoTexture);Yt(J,M);let Mt;const te=M.mipmaps,$t=M.isVideoTexture!==!0,_e=At.__version===void 0||Q===!0,D=Y.dataReady,lt=C(M,nt);if(M.isDepthTexture)Ot=_(M.format===Es,M.type),_e&&($t?e.texStorage2D(i.TEXTURE_2D,1,Ot,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Ot,nt.width,nt.height,0,xt,Nt,null));else if(M.isDataTexture)if(te.length>0){$t&&_e&&e.texStorage2D(i.TEXTURE_2D,lt,Ot,te[0].width,te[0].height);for(let G=0,Z=te.length;G<Z;G++)Mt=te[G],$t?D&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,Mt.width,Mt.height,xt,Nt,Mt.data):e.texImage2D(i.TEXTURE_2D,G,Ot,Mt.width,Mt.height,0,xt,Nt,Mt.data);M.generateMipmaps=!1}else $t?(_e&&e.texStorage2D(i.TEXTURE_2D,lt,Ot,nt.width,nt.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,xt,Nt,nt.data)):e.texImage2D(i.TEXTURE_2D,0,Ot,nt.width,nt.height,0,xt,Nt,nt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){$t&&_e&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Ot,te[0].width,te[0].height,nt.depth);for(let G=0,Z=te.length;G<Z;G++)if(Mt=te[G],M.format!==Un)if(xt!==null)if($t){if(D)if(M.layerUpdates.size>0){const gt=Fl(Mt.width,Mt.height,M.format,M.type);for(const pt of M.layerUpdates){const Gt=Mt.data.subarray(pt*gt/Mt.data.BYTES_PER_ELEMENT,(pt+1)*gt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,pt,Mt.width,Mt.height,1,xt,Gt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,Mt.width,Mt.height,nt.depth,xt,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Ot,Mt.width,Mt.height,nt.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,Mt.width,Mt.height,nt.depth,xt,Nt,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,Ot,Mt.width,Mt.height,nt.depth,0,xt,Nt,Mt.data)}else{$t&&_e&&e.texStorage2D(i.TEXTURE_2D,lt,Ot,te[0].width,te[0].height);for(let G=0,Z=te.length;G<Z;G++)Mt=te[G],M.format!==Un?xt!==null?$t?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,Mt.width,Mt.height,xt,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,G,Ot,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?D&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,Mt.width,Mt.height,xt,Nt,Mt.data):e.texImage2D(i.TEXTURE_2D,G,Ot,Mt.width,Mt.height,0,xt,Nt,Mt.data)}else if(M.isDataArrayTexture)if($t){if(_e&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Ot,nt.width,nt.height,nt.depth),D)if(M.layerUpdates.size>0){const G=Fl(nt.width,nt.height,M.format,M.type);for(const Z of M.layerUpdates){const gt=nt.data.subarray(Z*G/nt.data.BYTES_PER_ELEMENT,(Z+1)*G/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,nt.width,nt.height,1,xt,Nt,gt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,xt,Nt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,nt.width,nt.height,nt.depth,0,xt,Nt,nt.data);else if(M.isData3DTexture)$t?(_e&&e.texStorage3D(i.TEXTURE_3D,lt,Ot,nt.width,nt.height,nt.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,xt,Nt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,nt.width,nt.height,nt.depth,0,xt,Nt,nt.data);else if(M.isFramebufferTexture){if(_e)if($t)e.texStorage2D(i.TEXTURE_2D,lt,Ot,nt.width,nt.height);else{let G=nt.width,Z=nt.height;for(let gt=0;gt<lt;gt++)e.texImage2D(i.TEXTURE_2D,gt,Ot,G,Z,0,xt,Nt,null),G>>=1,Z>>=1}}else if(te.length>0){if($t&&_e){const G=Dt(te[0]);e.texStorage2D(i.TEXTURE_2D,lt,Ot,G.width,G.height)}for(let G=0,Z=te.length;G<Z;G++)Mt=te[G],$t?D&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,xt,Nt,Mt):e.texImage2D(i.TEXTURE_2D,G,Ot,xt,Nt,Mt);M.generateMipmaps=!1}else if($t){if(_e){const G=Dt(nt);e.texStorage2D(i.TEXTURE_2D,lt,Ot,G.width,G.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Nt,nt)}else e.texImage2D(i.TEXTURE_2D,0,Ot,xt,Nt,nt);m(M)&&p(J),At.__version=Y.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function st(E,M,F){if(M.image.length!==6)return;const J=ge(E,M),Q=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);const Y=n.get(Q);if(Q.version!==Y.__version||J===!0){e.activeTexture(i.TEXTURE0+F);const At=ie.getPrimaries(ie.workingColorSpace),ft=M.colorSpace===xi?null:ie.getPrimaries(M.colorSpace),yt=M.colorSpace===xi||At===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const ne=M.isCompressedTexture||M.image[0].isCompressedTexture,nt=M.image[0]&&M.image[0].isDataTexture,xt=[];for(let Z=0;Z<6;Z++)!ne&&!nt?xt[Z]=v(M.image[Z],!0,s.maxCubemapSize):xt[Z]=nt?M.image[Z].image:M.image[Z],xt[Z]=Me(M,xt[Z]);const Nt=xt[0],Ot=r.convert(M.format,M.colorSpace),Mt=r.convert(M.type),te=y(M.internalFormat,Ot,Mt,M.colorSpace),$t=M.isVideoTexture!==!0,_e=Y.__version===void 0||J===!0,D=Q.dataReady;let lt=C(M,Nt);Yt(i.TEXTURE_CUBE_MAP,M);let G;if(ne){$t&&_e&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,te,Nt.width,Nt.height);for(let Z=0;Z<6;Z++){G=xt[Z].mipmaps;for(let gt=0;gt<G.length;gt++){const pt=G[gt];M.format!==Un?Ot!==null?$t?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt,0,0,pt.width,pt.height,Ot,pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt,te,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt,0,0,pt.width,pt.height,Ot,Mt,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt,te,pt.width,pt.height,0,Ot,Mt,pt.data)}}}else{if(G=M.mipmaps,$t&&_e){G.length>0&&lt++;const Z=Dt(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,te,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(nt){$t?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,xt[Z].width,xt[Z].height,Ot,Mt,xt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,te,xt[Z].width,xt[Z].height,0,Ot,Mt,xt[Z].data);for(let gt=0;gt<G.length;gt++){const Gt=G[gt].image[Z].image;$t?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt+1,0,0,Gt.width,Gt.height,Ot,Mt,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt+1,te,Gt.width,Gt.height,0,Ot,Mt,Gt.data)}}else{$t?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ot,Mt,xt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,te,Ot,Mt,xt[Z]);for(let gt=0;gt<G.length;gt++){const pt=G[gt];$t?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt+1,0,0,Ot,Mt,pt.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt+1,te,Ot,Mt,pt.image[Z])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),Y.__version=Q.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function Tt(E,M,F,J,Q,Y){const At=r.convert(F.format,F.colorSpace),ft=r.convert(F.type),yt=y(F.internalFormat,At,ft,F.colorSpace),ne=n.get(M),nt=n.get(F);if(nt.__renderTarget=M,!ne.__hasExternalTextures){const xt=Math.max(1,M.width>>Y),Nt=Math.max(1,M.height>>Y);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,Y,yt,xt,Nt,M.depth,0,At,ft,null):e.texImage2D(Q,Y,yt,xt,Nt,0,At,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Qt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,Q,nt.__webglTexture,0,Zt(M)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,Q,nt.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(E,M,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),M.depthBuffer){const J=M.depthTexture,Q=J&&J.isDepthTexture?J.type:null,Y=_(M.stencilBuffer,Q),At=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=Zt(M);Qt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,Y,M.width,M.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,Y,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Y,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,E)}else{const J=M.textures;for(let Q=0;Q<J.length;Q++){const Y=J[Q],At=r.convert(Y.format,Y.colorSpace),ft=r.convert(Y.type),yt=y(Y.internalFormat,At,ft,Y.colorSpace),ne=Zt(M);F&&Qt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,yt,M.width,M.height):Qt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,yt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,yt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ft(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(M.depthTexture);J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K(M.depthTexture,0);const Q=J.__webglTexture,Y=Zt(M);if(M.depthTexture.format===_s)Qt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(M.depthTexture.format===Es)Qt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Vt(E){const M=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==E.depthTexture){const J=E.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=J}if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ft(M.__webglFramebuffer,E)}else if(F){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=i.createRenderbuffer(),ut(M.__webglDepthbuffer[J],E,!1);else{const Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ut(M.__webglDepthbuffer,E,!1);else{const J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function jt(E,M,F){const J=n.get(E);M!==void 0&&Tt(J.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Vt(E)}function Re(E){const M=E.texture,F=n.get(E),J=n.get(M);E.addEventListener("dispose",R);const Q=E.textures,Y=E.isWebGLCubeRenderTarget===!0,At=Q.length>1;if(At||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=M.version,a.memory.textures++),Y){F.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[ft]=[];for(let yt=0;yt<M.mipmaps.length;yt++)F.__webglFramebuffer[ft][yt]=i.createFramebuffer()}else F.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let ft=0;ft<M.mipmaps.length;ft++)F.__webglFramebuffer[ft]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(At)for(let ft=0,yt=Q.length;ft<yt;ft++){const ne=n.get(Q[ft]);ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Qt(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ft=0;ft<Q.length;ft++){const yt=Q[ft];F.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ft]);const ne=r.convert(yt.format,yt.colorSpace),nt=r.convert(yt.type),xt=y(yt.internalFormat,ne,nt,yt.colorSpace,E.isXRRenderTarget===!0),Nt=Zt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,xt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,F.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Yt(i.TEXTURE_CUBE_MAP,M);for(let ft=0;ft<6;ft++)if(M.mipmaps&&M.mipmaps.length>0)for(let yt=0;yt<M.mipmaps.length;yt++)Tt(F.__webglFramebuffer[ft][yt],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,yt);else Tt(F.__webglFramebuffer[ft],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(M)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let ft=0,yt=Q.length;ft<yt;ft++){const ne=Q[ft],nt=n.get(ne);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),Yt(i.TEXTURE_2D,ne),Tt(F.__webglFramebuffer,E,ne,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),m(ne)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ft=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,J.__webglTexture),Yt(ft,M),M.mipmaps&&M.mipmaps.length>0)for(let yt=0;yt<M.mipmaps.length;yt++)Tt(F.__webglFramebuffer[yt],E,M,i.COLOR_ATTACHMENT0,ft,yt);else Tt(F.__webglFramebuffer,E,M,i.COLOR_ATTACHMENT0,ft,0);m(M)&&p(ft),e.unbindTexture()}E.depthBuffer&&Vt(E)}function ee(E){const M=E.textures;for(let F=0,J=M.length;F<J;F++){const Q=M[F];if(m(Q)){const Y=x(E),At=n.get(Q).__webglTexture;e.bindTexture(Y,At),p(Y),e.unbindTexture()}}}const Le=[],k=[];function gn(E){if(E.samples>0){if(Qt(E)===!1){const M=E.textures,F=E.width,J=E.height;let Q=i.COLOR_BUFFER_BIT;const Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(E),ft=M.length>1;if(ft)for(let yt=0;yt<M.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let yt=0;yt<M.length;yt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[yt]);const ne=n.get(M[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,F,J,0,0,F,J,Q,i.NEAREST),c===!0&&(Le.length=0,k.length=0,Le.push(i.COLOR_ATTACHMENT0+yt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Le.push(Y),k.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,k)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Le))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let yt=0;yt<M.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,At.__webglColorRenderbuffer[yt]);const ne=n.get(M[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,ne,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const M=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Zt(E){return Math.min(s.maxSamples,E.samples)}function Qt(E){const M=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ut(E){const M=a.render.frame;h.get(E)!==M&&(h.set(E,M),E.update())}function Me(E,M){const F=E.colorSpace,J=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==Is&&F!==xi&&(ie.getTransfer(F)===fe?(J!==Un||Q!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}function Dt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=V,this.setTexture2D=K,this.setTexture2DArray=X,this.setTexture3D=tt,this.setTextureCube=W,this.rebindTextures=jt,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=gn,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=Qt}function xg(i,t){function e(n,s=xi){let r;const a=ie.getTransfer(s);if(n===hi)return i.UNSIGNED_BYTE;if(n===_c)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_h)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gh)return i.BYTE;if(n===vh)return i.SHORT;if(n===sr)return i.UNSIGNED_SHORT;if(n===vc)return i.INT;if(n===Xi)return i.UNSIGNED_INT;if(n===ii)return i.FLOAT;if(n===dr)return i.HALF_FLOAT;if(n===yh)return i.ALPHA;if(n===xh)return i.RGB;if(n===Un)return i.RGBA;if(n===Mh)return i.LUMINANCE;if(n===bh)return i.LUMINANCE_ALPHA;if(n===_s)return i.DEPTH_COMPONENT;if(n===Es)return i.DEPTH_STENCIL;if(n===Sh)return i.RED;if(n===xc)return i.RED_INTEGER;if(n===wh)return i.RG;if(n===Mc)return i.RG_INTEGER;if(n===bc)return i.RGBA_INTEGER;if(n===ia||n===sa||n===ra||n===aa)if(a===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Po||n===Lo||n===Io||n===Do)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Po)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Lo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Io)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Do)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Uo||n===No||n===ko)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Uo||n===No)return a===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ko)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fo||n===Oo||n===zo||n===Bo||n===Ho||n===Vo||n===Go||n===Wo||n===Xo||n===$o||n===qo||n===Yo||n===jo||n===Ko)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ho)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Go)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$o)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ko)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oa||n===Jo||n===Zo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===oa)return a===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Eh||n===Qo||n===tc||n===ec)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===oa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===tc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ec)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Mg extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class et extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bg={type:"move"};class eo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bg)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new et;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Sg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wg=`
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

}`;class Eg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new an,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new $n({vertexShader:Sg,fragmentShader:wg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new I(new Ma(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tg extends Ds{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const v=new Eg,m=e.getContextAttributes();let p=null,x=null;const y=[],_=[],C=new ht;let T=null;const R=new pn;R.viewport=new me;const L=new pn;L.viewport=new me;const w=[R,L],b=new Mg;let P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let st=y[j];return st===void 0&&(st=new eo,y[j]=st),st.getTargetRaySpace()},this.getControllerGrip=function(j){let st=y[j];return st===void 0&&(st=new eo,y[j]=st),st.getGripSpace()},this.getHand=function(j){let st=y[j];return st===void 0&&(st=new eo,y[j]=st),st.getHandSpace()};function z(j){const st=_.indexOf(j.inputSource);if(st===-1)return;const Tt=y[st];Tt!==void 0&&(Tt.update(j.inputSource,j.frame,l||a),Tt.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",K);for(let j=0;j<y.length;j++){const st=_[j];st!==null&&(_[j]=null,y[j].disconnect(st))}P=null,V=null,v.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,x=null,ge.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",q),s.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){const st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new $i(f.framebufferWidth,f.framebufferHeight,{format:Un,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,Tt=null,ut=null;m.depth&&(ut=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?Es:_s,Tt=m.stencil?ws:Xi);const Ft={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Ft),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new $i(d.textureWidth,d.textureHeight,{format:Un,type:hi,depthTexture:new Bh(d.textureWidth,d.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ge.setContext(s),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(j){for(let st=0;st<j.removed.length;st++){const Tt=j.removed[st],ut=_.indexOf(Tt);ut>=0&&(_[ut]=null,y[ut].disconnect(Tt))}for(let st=0;st<j.added.length;st++){const Tt=j.added[st];let ut=_.indexOf(Tt);if(ut===-1){for(let Vt=0;Vt<y.length;Vt++)if(Vt>=_.length){_.push(Tt),ut=Vt;break}else if(_[Vt]===null){_[Vt]=Tt,ut=Vt;break}if(ut===-1)break}const Ft=y[ut];Ft&&Ft.connect(Tt)}}const X=new A,tt=new A;function W(j,st,Tt){X.setFromMatrixPosition(st.matrixWorld),tt.setFromMatrixPosition(Tt.matrixWorld);const ut=X.distanceTo(tt),Ft=st.projectionMatrix.elements,Vt=Tt.projectionMatrix.elements,jt=Ft[14]/(Ft[10]-1),Re=Ft[14]/(Ft[10]+1),ee=(Ft[9]+1)/Ft[5],Le=(Ft[9]-1)/Ft[5],k=(Ft[8]-1)/Ft[0],gn=(Vt[8]+1)/Vt[0],Zt=jt*k,Qt=jt*gn,Ut=ut/(-k+gn),Me=Ut*-k;if(st.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Me),j.translateZ(Ut),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ft[10]===-1)j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const Dt=jt+Ut,E=Re+Ut,M=Zt-Me,F=Qt+(ut-Me),J=ee*Re/E*Dt,Q=Le*Re/E*Dt;j.projectionMatrix.makePerspective(M,F,J,Q,Dt,E),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function dt(j,st){st===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(st.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let st=j.near,Tt=j.far;v.texture!==null&&(v.depthNear>0&&(st=v.depthNear),v.depthFar>0&&(Tt=v.depthFar)),b.near=L.near=R.near=st,b.far=L.far=R.far=Tt,(P!==b.near||V!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,V=b.far),R.layers.mask=j.layers.mask|2,L.layers.mask=j.layers.mask|4,b.layers.mask=R.layers.mask|L.layers.mask;const ut=j.parent,Ft=b.cameras;dt(b,ut);for(let Vt=0;Vt<Ft.length;Vt++)dt(Ft[Vt],ut);Ft.length===2?W(b,R,L):b.projectionMatrix.copy(R.projectionMatrix),_t(j,b,ut)};function _t(j,st,Tt){Tt===null?j.matrix.copy(st.matrixWorld):(j.matrix.copy(Tt.matrixWorld),j.matrix.invert(),j.matrix.multiply(st.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ic*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let Pt=null;function Yt(j,st){if(h=st.getViewerPose(l||a),g=st,h!==null){const Tt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let ut=!1;Tt.length!==b.cameras.length&&(b.cameras.length=0,ut=!0);for(let Vt=0;Vt<Tt.length;Vt++){const jt=Tt[Vt];let Re=null;if(f!==null)Re=f.getViewport(jt);else{const Le=u.getViewSubImage(d,jt);Re=Le.viewport,Vt===0&&(t.setRenderTargetTextures(x,Le.colorTexture,d.ignoreDepthValues?void 0:Le.depthStencilTexture),t.setRenderTarget(x))}let ee=w[Vt];ee===void 0&&(ee=new pn,ee.layers.enable(Vt),ee.viewport=new me,w[Vt]=ee),ee.matrix.fromArray(jt.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(jt.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(Re.x,Re.y,Re.width,Re.height),Vt===0&&(b.matrix.copy(ee.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ut===!0&&b.cameras.push(ee)}const Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){const Vt=u.getDepthInformation(Tt[0]);Vt&&Vt.isValid&&Vt.texture&&v.init(t,Vt,s.renderState)}}for(let Tt=0;Tt<y.length;Tt++){const ut=_[Tt],Ft=y[Tt];ut!==null&&Ft!==void 0&&Ft.update(ut,st,l||a)}Pt&&Pt(j,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}const ge=new Oh;ge.setAnimationLoop(Yt),this.setAnimationLoop=function(j){Pt=j},this.dispose=function(){}}}const Di=new kn,Ag=new ve;function Rg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Nh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,x,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),y=x.envMap,_=x.envMapRotation;y&&(m.envMap.value=y,Di.copy(_),Di.x*=-1,Di.y*=-1,Di.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),m.envMapRotation.value.setFromMatrix4(Ag.makeRotationFromEuler(Di)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Cg(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,y){const _=y.program;n.uniformBlockBinding(x,_)}function l(x,y){let _=s[x.id];_===void 0&&(g(x),_=h(x),s[x.id]=_,x.addEventListener("dispose",m));const C=y.program;n.updateUBOMapping(x,C);const T=t.render.frame;r[x.id]!==T&&(d(x),r[x.id]=T)}function h(x){const y=u();x.__bindingPointIndex=y;const _=i.createBuffer(),C=x.__size,T=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=s[x.id],_=x.uniforms,C=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,R=_.length;T<R;T++){const L=Array.isArray(_[T])?_[T]:[_[T]];for(let w=0,b=L.length;w<b;w++){const P=L[w];if(f(P,T,w,C)===!0){const V=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let K=0;K<z.length;K++){const X=z[K],tt=v(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,V+q,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,q),q+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,y,_,C){const T=x.value,R=y+"_"+_;if(C[R]===void 0)return typeof T=="number"||typeof T=="boolean"?C[R]=T:C[R]=T.clone(),!0;{const L=C[R];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return C[R]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(x){const y=x.uniforms;let _=0;const C=16;for(let R=0,L=y.length;R<L;R++){const w=Array.isArray(y[R])?y[R]:[y[R]];for(let b=0,P=w.length;b<P;b++){const V=w[b],z=Array.isArray(V.value)?V.value:[V.value];for(let q=0,K=z.length;q<K;q++){const X=z[q],tt=v(X),W=_%C,dt=W%tt.boundary,_t=W+dt;_+=dt,_t!==0&&C-_t<tt.storage&&(_+=C-_t),V.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=_,_+=tt.storage}}}const T=_%C;return T>0&&(_+=C-T),x.__size=_,x.__cache={},this}function v(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const _=a.indexOf(y.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Pg{constructor(t={}){const{canvas:e=vu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const x=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mn,this.toneMapping=bi,this.toneMappingExposure=1;const _=this;let C=!1,T=0,R=0,L=null,w=-1,b=null;const P=new me,V=new me;let z=null;const q=new Ht(0);let K=0,X=e.width,tt=e.height,W=1,dt=null,_t=null;const Pt=new me(0,0,X,tt),Yt=new me(0,0,X,tt);let ge=!1;const j=new wc;let st=!1,Tt=!1;const ut=new ve,Ft=new ve,Vt=new A,jt=new me,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function Le(){return L===null?W:1}let k=n;function gn(S,U){return e.getContext(S,U)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gc}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),k===null){const U="webgl2";if(k=gn(U,S),k===null)throw gn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Zt,Qt,Ut,Me,Dt,E,M,F,J,Q,Y,At,ft,yt,ne,nt,xt,Nt,Ot,Mt,te,$t,_e,D;function lt(){Zt=new Nm(k),Zt.init(),$t=new xg(k,Zt),Qt=new Cm(k,Zt,t,$t),Ut=new vg(k,Zt),Qt.reverseDepthBuffer&&d&&Ut.buffers.depth.setReversed(!0),Me=new Om(k),Dt=new ng,E=new yg(k,Zt,Ut,Dt,Qt,$t,Me),M=new Lm(_),F=new Um(_),J=new Wu(k),_e=new Am(k,J),Q=new km(k,J,Me,_e),Y=new Bm(k,Q,J,Me),Ot=new zm(k,Qt,E),nt=new Pm(Dt),At=new eg(_,M,F,Zt,Qt,_e,nt),ft=new Rg(_,Dt),yt=new sg,ne=new hg(Zt),Nt=new Tm(_,M,F,Ut,Y,f,c),xt=new mg(_,Y,Qt),D=new Cg(k,Me,Qt,Ut),Mt=new Rm(k,Zt,Me),te=new Fm(k,Zt,Me),Me.programs=At.programs,_.capabilities=Qt,_.extensions=Zt,_.properties=Dt,_.renderLists=yt,_.shadowMap=xt,_.state=Ut,_.info=Me}lt();const G=new Tg(_,k);this.xr=G,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const S=Zt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Zt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(S){S!==void 0&&(W=S,this.setSize(X,tt,!1))},this.getSize=function(S){return S.set(X,tt)},this.setSize=function(S,U,B=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=S,tt=U,e.width=Math.floor(S*W),e.height=Math.floor(U*W),B===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(X*W,tt*W).floor()},this.setDrawingBufferSize=function(S,U,B){X=S,tt=U,W=B,e.width=Math.floor(S*B),e.height=Math.floor(U*B),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(Pt)},this.setViewport=function(S,U,B,H){S.isVector4?Pt.set(S.x,S.y,S.z,S.w):Pt.set(S,U,B,H),Ut.viewport(P.copy(Pt).multiplyScalar(W).round())},this.getScissor=function(S){return S.copy(Yt)},this.setScissor=function(S,U,B,H){S.isVector4?Yt.set(S.x,S.y,S.z,S.w):Yt.set(S,U,B,H),Ut.scissor(V.copy(Yt).multiplyScalar(W).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(S){Ut.setScissorTest(ge=S)},this.setOpaqueSort=function(S){dt=S},this.setTransparentSort=function(S){_t=S},this.getClearColor=function(S){return S.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(S=!0,U=!0,B=!0){let H=0;if(S){let N=!1;if(L!==null){const it=L.texture.format;N=it===bc||it===Mc||it===xc}if(N){const it=L.texture.type,mt=it===hi||it===Xi||it===sr||it===ws||it===_c||it===yc,bt=Nt.getClearColor(),St=Nt.getClearAlpha(),zt=bt.r,Wt=bt.g,wt=bt.b;mt?(g[0]=zt,g[1]=Wt,g[2]=wt,g[3]=St,k.clearBufferuiv(k.COLOR,0,g)):(v[0]=zt,v[1]=Wt,v[2]=wt,v[3]=St,k.clearBufferiv(k.COLOR,0,v))}else H|=k.COLOR_BUFFER_BIT}U&&(H|=k.DEPTH_BUFFER_BIT),B&&(H|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),yt.dispose(),ne.dispose(),Dt.dispose(),M.dispose(),F.dispose(),Y.dispose(),_e.dispose(),D.dispose(),At.dispose(),G.dispose(),G.removeEventListener("sessionstart",Nc),G.removeEventListener("sessionend",kc),Ai.stop()};function Z(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const S=Me.autoReset,U=xt.enabled,B=xt.autoUpdate,H=xt.needsUpdate,N=xt.type;lt(),Me.autoReset=S,xt.enabled=U,xt.autoUpdate=B,xt.needsUpdate=H,xt.type=N}function pt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Gt(S){const U=S.target;U.removeEventListener("dispose",Gt),Pe(U)}function Pe(S){Ge(S),Dt.remove(S)}function Ge(S){const U=Dt.get(S).programs;U!==void 0&&(U.forEach(function(B){At.releaseProgram(B)}),S.isShaderMaterial&&At.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,B,H,N,it){U===null&&(U=Re);const mt=N.isMesh&&N.matrixWorld.determinant()<0,bt=Sd(S,U,B,H,N);Ut.setMaterial(H,mt);let St=B.index,zt=1;if(H.wireframe===!0){if(St=Q.getWireframeAttribute(B),St===void 0)return;zt=2}const Wt=B.drawRange,wt=B.attributes.position;let se=Wt.start*zt,ye=(Wt.start+Wt.count)*zt;it!==null&&(se=Math.max(se,it.start*zt),ye=Math.min(ye,(it.start+it.count)*zt)),St!==null?(se=Math.max(se,0),ye=Math.min(ye,St.count)):wt!=null&&(se=Math.max(se,0),ye=Math.min(ye,wt.count));const be=ye-se;if(be<0||be===1/0)return;_e.setup(N,H,bt,B,St);let on,ae=Mt;if(St!==null&&(on=J.get(St),ae=te,ae.setIndex(on)),N.isMesh)H.wireframe===!0?(Ut.setLineWidth(H.wireframeLinewidth*Le()),ae.setMode(k.LINES)):ae.setMode(k.TRIANGLES);else if(N.isLine){let Rt=H.linewidth;Rt===void 0&&(Rt=1),Ut.setLineWidth(Rt*Le()),N.isLineSegments?ae.setMode(k.LINES):N.isLineLoop?ae.setMode(k.LINE_LOOP):ae.setMode(k.LINE_STRIP)}else N.isPoints?ae.setMode(k.POINTS):N.isSprite&&ae.setMode(k.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ae.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Zt.get("WEBGL_multi_draw"))ae.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Rt=N._multiDrawStarts,jn=N._multiDrawCounts,oe=N._multiDrawCount,Tn=St?J.get(St).bytesPerElement:1,qi=Dt.get(H).currentProgram.getUniforms();for(let ln=0;ln<oe;ln++)qi.setValue(k,"_gl_DrawID",ln),ae.render(Rt[ln]/Tn,jn[ln])}else if(N.isInstancedMesh)ae.renderInstances(se,be,N.count);else if(B.isInstancedBufferGeometry){const Rt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,jn=Math.min(B.instanceCount,Rt);ae.renderInstances(se,be,jn)}else ae.render(se,be)};function de(S,U,B){S.transparent===!0&&S.side===Ae&&S.forceSinglePass===!1?(S.side=rn,S.needsUpdate=!0,_r(S,U,B),S.side=wi,S.needsUpdate=!0,_r(S,U,B),S.side=Ae):_r(S,U,B)}this.compile=function(S,U,B=null){B===null&&(B=S),p=ne.get(B),p.init(U),y.push(p),B.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),S!==B&&S.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const H=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const it=N.material;if(it)if(Array.isArray(it))for(let mt=0;mt<it.length;mt++){const bt=it[mt];de(bt,B,N),H.add(bt)}else de(it,B,N),H.add(it)}),y.pop(),p=null,H},this.compileAsync=function(S,U,B=null){const H=this.compile(S,U,B);return new Promise(N=>{function it(){if(H.forEach(function(mt){Dt.get(mt).currentProgram.isReady()&&H.delete(mt)}),H.size===0){N(S);return}setTimeout(it,10)}Zt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let En=null;function Yn(S){En&&En(S)}function Nc(){Ai.stop()}function kc(){Ai.start()}const Ai=new Oh;Ai.setAnimationLoop(Yn),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(S){En=S,G.setAnimationLoop(S),S===null?Ai.stop():Ai.start()},G.addEventListener("sessionstart",Nc),G.addEventListener("sessionend",kc),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(U),U=G.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,U,L),p=ne.get(S,y.length),p.init(U),y.push(p),Ft.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),j.setFromProjectionMatrix(Ft),Tt=this.localClippingEnabled,st=nt.init(this.clippingPlanes,Tt),m=yt.get(S,x.length),m.init(),x.push(m),G.enabled===!0&&G.isPresenting===!0){const it=_.xr.getDepthSensingMesh();it!==null&&Ta(it,U,-1/0,_.sortObjects)}Ta(S,U,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(dt,_t),ee=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,ee&&Nt.addToRenderList(m,S),this.info.render.frame++,st===!0&&nt.beginShadows();const B=p.state.shadowsArray;xt.render(B,S,U),st===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){const it=U.cameras;if(N.length>0)for(let mt=0,bt=it.length;mt<bt;mt++){const St=it[mt];Oc(H,N,S,St)}ee&&Nt.render(S);for(let mt=0,bt=it.length;mt<bt;mt++){const St=it[mt];Fc(m,S,St,St.viewport)}}else N.length>0&&Oc(H,N,S,U),ee&&Nt.render(S),Fc(m,S,U);L!==null&&(E.updateMultisampleRenderTarget(L),E.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(_,S,U),_e.resetDefaultState(),w=-1,b=null,y.pop(),y.length>0?(p=y[y.length-1],st===!0&&nt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Ta(S,U,B,H){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||j.intersectsSprite(S)){H&&jt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ft);const mt=Y.update(S),bt=S.material;bt.visible&&m.push(S,mt,bt,B,jt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||j.intersectsObject(S))){const mt=Y.update(S),bt=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),jt.copy(S.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),jt.copy(mt.boundingSphere.center)),jt.applyMatrix4(S.matrixWorld).applyMatrix4(Ft)),Array.isArray(bt)){const St=mt.groups;for(let zt=0,Wt=St.length;zt<Wt;zt++){const wt=St[zt],se=bt[wt.materialIndex];se&&se.visible&&m.push(S,mt,se,B,jt.z,wt)}}else bt.visible&&m.push(S,mt,bt,B,jt.z,null)}}const it=S.children;for(let mt=0,bt=it.length;mt<bt;mt++)Ta(it[mt],U,B,H)}function Fc(S,U,B,H){const N=S.opaque,it=S.transmissive,mt=S.transparent;p.setupLightsView(B),st===!0&&nt.setGlobalState(_.clippingPlanes,B),H&&Ut.viewport(P.copy(H)),N.length>0&&vr(N,U,B),it.length>0&&vr(it,U,B),mt.length>0&&vr(mt,U,B),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function Oc(S,U,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new $i(1,1,{generateMipmaps:!0,type:Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float")?dr:hi,minFilter:Hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const it=p.state.transmissionRenderTarget[H.id],mt=H.viewport||P;it.setSize(mt.z,mt.w);const bt=_.getRenderTarget();_.setRenderTarget(it),_.getClearColor(q),K=_.getClearAlpha(),K<1&&_.setClearColor(16777215,.5),_.clear(),ee&&Nt.render(B);const St=_.toneMapping;_.toneMapping=bi;const zt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),st===!0&&nt.setGlobalState(_.clippingPlanes,H),vr(S,B,H),E.updateMultisampleRenderTarget(it),E.updateRenderTargetMipmap(it),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let wt=0,se=U.length;wt<se;wt++){const ye=U[wt],be=ye.object,on=ye.geometry,ae=ye.material,Rt=ye.group;if(ae.side===Ae&&be.layers.test(H.layers)){const jn=ae.side;ae.side=rn,ae.needsUpdate=!0,zc(be,B,H,on,ae,Rt),ae.side=jn,ae.needsUpdate=!0,Wt=!0}}Wt===!0&&(E.updateMultisampleRenderTarget(it),E.updateRenderTargetMipmap(it))}_.setRenderTarget(bt),_.setClearColor(q,K),zt!==void 0&&(H.viewport=zt),_.toneMapping=St}function vr(S,U,B){const H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,it=S.length;N<it;N++){const mt=S[N],bt=mt.object,St=mt.geometry,zt=H===null?mt.material:H,Wt=mt.group;bt.layers.test(B.layers)&&zc(bt,U,B,St,zt,Wt)}}function zc(S,U,B,H,N,it){S.onBeforeRender(_,U,B,H,N,it),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(_,U,B,H,S,it),N.transparent===!0&&N.side===Ae&&N.forceSinglePass===!1?(N.side=rn,N.needsUpdate=!0,_.renderBufferDirect(B,U,H,N,S,it),N.side=wi,N.needsUpdate=!0,_.renderBufferDirect(B,U,H,N,S,it),N.side=Ae):_.renderBufferDirect(B,U,H,N,S,it),S.onAfterRender(_,U,B,H,N,it)}function _r(S,U,B){U.isScene!==!0&&(U=Re);const H=Dt.get(S),N=p.state.lights,it=p.state.shadowsArray,mt=N.state.version,bt=At.getParameters(S,N.state,it,U,B),St=At.getProgramCacheKey(bt);let zt=H.programs;H.environment=S.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(S.isMeshStandardMaterial?F:M).get(S.envMap||H.environment),H.envMapRotation=H.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,zt===void 0&&(S.addEventListener("dispose",Gt),zt=new Map,H.programs=zt);let Wt=zt.get(St);if(Wt!==void 0){if(H.currentProgram===Wt&&H.lightsStateVersion===mt)return Hc(S,bt),Wt}else bt.uniforms=At.getUniforms(S),S.onBeforeCompile(bt,_),Wt=At.acquireProgram(bt,St),zt.set(St,Wt),H.uniforms=bt.uniforms;const wt=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(wt.clippingPlanes=nt.uniform),Hc(S,bt),H.needsLights=Ed(S),H.lightsStateVersion=mt,H.needsLights&&(wt.ambientLightColor.value=N.state.ambient,wt.lightProbe.value=N.state.probe,wt.directionalLights.value=N.state.directional,wt.directionalLightShadows.value=N.state.directionalShadow,wt.spotLights.value=N.state.spot,wt.spotLightShadows.value=N.state.spotShadow,wt.rectAreaLights.value=N.state.rectArea,wt.ltc_1.value=N.state.rectAreaLTC1,wt.ltc_2.value=N.state.rectAreaLTC2,wt.pointLights.value=N.state.point,wt.pointLightShadows.value=N.state.pointShadow,wt.hemisphereLights.value=N.state.hemi,wt.directionalShadowMap.value=N.state.directionalShadowMap,wt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,wt.spotShadowMap.value=N.state.spotShadowMap,wt.spotLightMatrix.value=N.state.spotLightMatrix,wt.spotLightMap.value=N.state.spotLightMap,wt.pointShadowMap.value=N.state.pointShadowMap,wt.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Wt,H.uniformsList=null,Wt}function Bc(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=la.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Hc(S,U){const B=Dt.get(S);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function Sd(S,U,B,H,N){U.isScene!==!0&&(U=Re),E.resetTextureUnits();const it=U.fog,mt=H.isMeshStandardMaterial?U.environment:null,bt=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Is,St=(H.isMeshStandardMaterial?F:M).get(H.envMap||mt),zt=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Wt=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),wt=!!B.morphAttributes.position,se=!!B.morphAttributes.normal,ye=!!B.morphAttributes.color;let be=bi;H.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(be=_.toneMapping);const on=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ae=on!==void 0?on.length:0,Rt=Dt.get(H),jn=p.state.lights;if(st===!0&&(Tt===!0||S!==b)){const vn=S===b&&H.id===w;nt.setState(H,S,vn)}let oe=!1;H.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==jn.state.version||Rt.outputColorSpace!==bt||N.isBatchedMesh&&Rt.batching===!1||!N.isBatchedMesh&&Rt.batching===!0||N.isBatchedMesh&&Rt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Rt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Rt.instancing===!1||!N.isInstancedMesh&&Rt.instancing===!0||N.isSkinnedMesh&&Rt.skinning===!1||!N.isSkinnedMesh&&Rt.skinning===!0||N.isInstancedMesh&&Rt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Rt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Rt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Rt.instancingMorph===!1&&N.morphTexture!==null||Rt.envMap!==St||H.fog===!0&&Rt.fog!==it||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==nt.numPlanes||Rt.numIntersection!==nt.numIntersection)||Rt.vertexAlphas!==zt||Rt.vertexTangents!==Wt||Rt.morphTargets!==wt||Rt.morphNormals!==se||Rt.morphColors!==ye||Rt.toneMapping!==be||Rt.morphTargetsCount!==ae)&&(oe=!0):(oe=!0,Rt.__version=H.version);let Tn=Rt.currentProgram;oe===!0&&(Tn=_r(H,U,N));let qi=!1,ln=!1,Os=!1;const Se=Tn.getUniforms(),On=Rt.uniforms;if(Ut.useProgram(Tn.program)&&(qi=!0,ln=!0,Os=!0),H.id!==w&&(w=H.id,ln=!0),qi||b!==S){Ut.buffers.depth.getReversed()?(ut.copy(S.projectionMatrix),yu(ut),xu(ut),Se.setValue(k,"projectionMatrix",ut)):Se.setValue(k,"projectionMatrix",S.projectionMatrix),Se.setValue(k,"viewMatrix",S.matrixWorldInverse);const di=Se.map.cameraPosition;di!==void 0&&di.setValue(k,Vt.setFromMatrixPosition(S.matrixWorld)),Qt.logarithmicDepthBuffer&&Se.setValue(k,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Se.setValue(k,"isOrthographic",S.isOrthographicCamera===!0),b!==S&&(b=S,ln=!0,Os=!0)}if(N.isSkinnedMesh){Se.setOptional(k,N,"bindMatrix"),Se.setOptional(k,N,"bindMatrixInverse");const vn=N.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Se.setValue(k,"boneTexture",vn.boneTexture,E))}N.isBatchedMesh&&(Se.setOptional(k,N,"batchingTexture"),Se.setValue(k,"batchingTexture",N._matricesTexture,E),Se.setOptional(k,N,"batchingIdTexture"),Se.setValue(k,"batchingIdTexture",N._indirectTexture,E),Se.setOptional(k,N,"batchingColorTexture"),N._colorsTexture!==null&&Se.setValue(k,"batchingColorTexture",N._colorsTexture,E));const zs=B.morphAttributes;if((zs.position!==void 0||zs.normal!==void 0||zs.color!==void 0)&&Ot.update(N,B,Tn),(ln||Rt.receiveShadow!==N.receiveShadow)&&(Rt.receiveShadow=N.receiveShadow,Se.setValue(k,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(On.envMap.value=St,On.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(On.envMapIntensity.value=U.environmentIntensity),ln&&(Se.setValue(k,"toneMappingExposure",_.toneMappingExposure),Rt.needsLights&&wd(On,Os),it&&H.fog===!0&&ft.refreshFogUniforms(On,it),ft.refreshMaterialUniforms(On,H,W,tt,p.state.transmissionRenderTarget[S.id]),la.upload(k,Bc(Rt),On,E)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(la.upload(k,Bc(Rt),On,E),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Se.setValue(k,"center",N.center),Se.setValue(k,"modelViewMatrix",N.modelViewMatrix),Se.setValue(k,"normalMatrix",N.normalMatrix),Se.setValue(k,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const vn=H.uniformsGroups;for(let di=0,ui=vn.length;di<ui;di++){const Vc=vn[di];D.update(Vc,Tn),D.bind(Vc,Tn)}}return Tn}function wd(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Ed(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,U,B){Dt.get(S.texture).__webglTexture=U,Dt.get(S.depthTexture).__webglTexture=B;const H=Dt.get(S);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||Zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){const B=Dt.get(S);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,B=0){L=S,T=U,R=B;let H=!0,N=null,it=!1,mt=!1;if(S){const St=Dt.get(S);if(St.__useDefaultFramebuffer!==void 0)Ut.bindFramebuffer(k.FRAMEBUFFER,null),H=!1;else if(St.__webglFramebuffer===void 0)E.setupRenderTarget(S);else if(St.__hasExternalTextures)E.rebindTextures(S,Dt.get(S.texture).__webglTexture,Dt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const wt=S.depthTexture;if(St.__boundDepthTexture!==wt){if(wt!==null&&Dt.has(wt)&&(S.width!==wt.image.width||S.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(S)}}const zt=S.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(mt=!0);const Wt=Dt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Wt[U])?N=Wt[U][B]:N=Wt[U],it=!0):S.samples>0&&E.useMultisampledRTT(S)===!1?N=Dt.get(S).__webglMultisampledFramebuffer:Array.isArray(Wt)?N=Wt[B]:N=Wt,P.copy(S.viewport),V.copy(S.scissor),z=S.scissorTest}else P.copy(Pt).multiplyScalar(W).floor(),V.copy(Yt).multiplyScalar(W).floor(),z=ge;if(Ut.bindFramebuffer(k.FRAMEBUFFER,N)&&H&&Ut.drawBuffers(S,N),Ut.viewport(P),Ut.scissor(V),Ut.setScissorTest(z),it){const St=Dt.get(S.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+U,St.__webglTexture,B)}else if(mt){const St=Dt.get(S.texture),zt=U||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,St.__webglTexture,B||0,zt)}w=-1},this.readRenderTargetPixels=function(S,U,B,H,N,it,mt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Dt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&mt!==void 0&&(bt=bt[mt]),bt){Ut.bindFramebuffer(k.FRAMEBUFFER,bt);try{const St=S.texture,zt=St.format,Wt=St.type;if(!Qt.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-H&&B>=0&&B<=S.height-N&&k.readPixels(U,B,H,N,$t.convert(zt),$t.convert(Wt),it)}finally{const St=L!==null?Dt.get(L).__webglFramebuffer:null;Ut.bindFramebuffer(k.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(S,U,B,H,N,it,mt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Dt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&mt!==void 0&&(bt=bt[mt]),bt){const St=S.texture,zt=St.format,Wt=St.type;if(!Qt.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-H&&B>=0&&B<=S.height-N){Ut.bindFramebuffer(k.FRAMEBUFFER,bt);const wt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,wt),k.bufferData(k.PIXEL_PACK_BUFFER,it.byteLength,k.STREAM_READ),k.readPixels(U,B,H,N,$t.convert(zt),$t.convert(Wt),0);const se=L!==null?Dt.get(L).__webglFramebuffer:null;Ut.bindFramebuffer(k.FRAMEBUFFER,se);const ye=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await _u(k,ye,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,wt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,it),k.deleteBuffer(wt),k.deleteSync(ye),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,U=null,B=0){S.isTexture!==!0&&(Zs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);const H=Math.pow(2,-B),N=Math.floor(S.image.width*H),it=Math.floor(S.image.height*H),mt=U!==null?U.x:0,bt=U!==null?U.y:0;E.setTexture2D(S,0),k.copyTexSubImage2D(k.TEXTURE_2D,B,0,0,mt,bt,N,it),Ut.unbindTexture()},this.copyTextureToTexture=function(S,U,B=null,H=null,N=0){S.isTexture!==!0&&(Zs("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,S=arguments[1],U=arguments[2],N=arguments[3]||0,B=null);let it,mt,bt,St,zt,Wt,wt,se,ye;const be=S.isCompressedTexture?S.mipmaps[N]:S.image;B!==null?(it=B.max.x-B.min.x,mt=B.max.y-B.min.y,bt=B.isBox3?B.max.z-B.min.z:1,St=B.min.x,zt=B.min.y,Wt=B.isBox3?B.min.z:0):(it=be.width,mt=be.height,bt=be.depth||1,St=0,zt=0,Wt=0),H!==null?(wt=H.x,se=H.y,ye=H.z):(wt=0,se=0,ye=0);const on=$t.convert(U.format),ae=$t.convert(U.type);let Rt;U.isData3DTexture?(E.setTexture3D(U,0),Rt=k.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(E.setTexture2DArray(U,0),Rt=k.TEXTURE_2D_ARRAY):(E.setTexture2D(U,0),Rt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,U.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,U.unpackAlignment);const jn=k.getParameter(k.UNPACK_ROW_LENGTH),oe=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Tn=k.getParameter(k.UNPACK_SKIP_PIXELS),qi=k.getParameter(k.UNPACK_SKIP_ROWS),ln=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,be.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,be.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,St),k.pixelStorei(k.UNPACK_SKIP_ROWS,zt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Wt);const Os=S.isDataArrayTexture||S.isData3DTexture,Se=U.isDataArrayTexture||U.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const On=Dt.get(S),zs=Dt.get(U),vn=Dt.get(On.__renderTarget),di=Dt.get(zs.__renderTarget);Ut.bindFramebuffer(k.READ_FRAMEBUFFER,vn.__webglFramebuffer),Ut.bindFramebuffer(k.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let ui=0;ui<bt;ui++)Os&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Dt.get(S).__webglTexture,N,Wt+ui),S.isDepthTexture?(Se&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Dt.get(U).__webglTexture,N,ye+ui),k.blitFramebuffer(St,zt,it,mt,wt,se,it,mt,k.DEPTH_BUFFER_BIT,k.NEAREST)):Se?k.copyTexSubImage3D(Rt,N,wt,se,ye+ui,St,zt,it,mt):k.copyTexSubImage2D(Rt,N,wt,se,ye+ui,St,zt,it,mt);Ut.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Se?S.isDataTexture||S.isData3DTexture?k.texSubImage3D(Rt,N,wt,se,ye,it,mt,bt,on,ae,be.data):U.isCompressedArrayTexture?k.compressedTexSubImage3D(Rt,N,wt,se,ye,it,mt,bt,on,be.data):k.texSubImage3D(Rt,N,wt,se,ye,it,mt,bt,on,ae,be):S.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,N,wt,se,it,mt,on,ae,be.data):S.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,N,wt,se,be.width,be.height,on,be.data):k.texSubImage2D(k.TEXTURE_2D,N,wt,se,it,mt,on,ae,be);k.pixelStorei(k.UNPACK_ROW_LENGTH,jn),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,oe),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Tn),k.pixelStorei(k.UNPACK_SKIP_ROWS,qi),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ln),N===0&&U.generateMipmaps&&k.generateMipmap(Rt),Ut.unbindTexture()},this.copyTextureToTexture3D=function(S,U,B=null,H=null,N=0){return S.isTexture!==!0&&(Zs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,H=arguments[1]||null,S=arguments[2],U=arguments[3],N=arguments[4]||0),Zs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,U,B,H,N)},this.initRenderTarget=function(S){Dt.get(S).__webglFramebuffer===void 0&&E.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?E.setTextureCube(S,0):S.isData3DTexture?E.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?E.setTexture2DArray(S,0):E.setTexture2D(S,0),Ut.unbindTexture()},this.resetState=function(){T=0,R=0,L=null,Ut.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}class Xh extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Lg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=nc,this.updateRanges=[],this.version=0,this.uuid=Si()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Je=new A;class ua{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Vn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new cn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ua(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class $h extends Ti{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let cs;const Ws=new A,ls=new A,hs=new A,ds=new ht,Xs=new ht,qh=new ve,Br=new A,$s=new A,Hr=new A,Ol=new ht,no=new ht,zl=new ht;class Ig extends De{constructor(t=new $h){if(super(),this.isSprite=!0,this.type="Sprite",cs===void 0){cs=new Ue;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Lg(e,5);cs.setIndex([0,1,2,0,2,3]),cs.setAttribute("position",new ua(n,3,0,!1)),cs.setAttribute("uv",new ua(n,2,3,!1))}this.geometry=cs,this.material=t,this.center=new ht(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ls.setFromMatrixScale(this.matrixWorld),qh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),hs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ls.multiplyScalar(-hs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Vr(Br.set(-.5,-.5,0),hs,a,ls,s,r),Vr($s.set(.5,-.5,0),hs,a,ls,s,r),Vr(Hr.set(.5,.5,0),hs,a,ls,s,r),Ol.set(0,0),no.set(1,0),zl.set(1,1);let o=t.ray.intersectTriangle(Br,$s,Hr,!1,Ws);if(o===null&&(Vr($s.set(-.5,.5,0),hs,a,ls,s,r),no.set(0,1),o=t.ray.intersectTriangle(Br,Hr,$s,!1,Ws),o===null))return;const c=t.ray.origin.distanceTo(Ws);c<t.near||c>t.far||e.push({distance:c,point:Ws.clone(),uv:bn.getInterpolation(Ws,Br,$s,Hr,Ol,no,zl,new ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Vr(i,t,e,n,s,r){ds.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Xs.x=r*ds.x-s*ds.y,Xs.y=s*ds.x+r*ds.y):Xs.copy(ds),i.copy(t),i.x+=Xs.x,i.y+=Xs.y,i.applyMatrix4(qh)}class Sa extends Ti{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const fa=new A,pa=new A,Bl=new ve,qs=new Sc,Gr=new fr,io=new A,Hl=new A;class Yh extends De{constructor(t=new Ue,e=new Sa){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)fa.fromBufferAttribute(e,s-1),pa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=fa.distanceTo(pa);t.setAttribute("lineDistance",new re(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(s),Gr.radius+=r,t.ray.intersectsSphere(Gr)===!1)return;Bl.copy(s).invert(),qs.copy(t.ray).applyMatrix4(Bl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=l){const p=h.getX(v),x=h.getX(v+1),y=Wr(this,t,qs,c,p,x);y&&e.push(y)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(f),p=Wr(this,t,qs,c,v,m);p&&e.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=l){const p=Wr(this,t,qs,c,v,v+1);p&&e.push(p)}if(this.isLineLoop){const v=Wr(this,t,qs,c,g-1,f);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Wr(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(fa.fromBufferAttribute(a,s),pa.fromBufferAttribute(a,r),e.distanceSqToSegment(fa,pa,io,Hl)>n)return;io.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(io);if(!(c<t.near||c>t.far))return{distance:c,point:Hl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Vl=new A,Gl=new A;class jh extends Yh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Vl.fromBufferAttribute(e,s),Gl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Vl.distanceTo(Gl);t.setAttribute("lineDistance",new re(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Dg extends Ti{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Wl=new ve,ac=new Sc,Xr=new fr,$r=new A;class Ug extends De{constructor(t=new Ue,e=new Dg){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(s),Xr.radius+=r,t.ray.intersectsSphere(Xr)===!1)return;Wl.copy(s).invert(),ac.copy(t.ray).applyMatrix4(Wl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,v=f;g<v;g++){const m=l.getX(g);$r.fromBufferAttribute(u,m),Xl($r,m,c,s,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,v=f;g<v;g++)$r.fromBufferAttribute(u,g),Xl($r,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Xl(i,t,e,n,s,r,a){const o=ac.distanceSqToPoint(i);if(o<e){const c=new A;ac.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Ng extends an{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new ht:new A);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new A,s=[],r=[],a=[],o=new A,c=new ve;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new A)}r[0]=new A,a[0]=new A;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ve(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ve(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Tc extends qn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new ht){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class kg extends Tc{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ac(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const qr=new A,so=new Ac,ro=new Ac,ao=new Ac;class Fg extends qn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new A){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(qr.subVectors(s[0],s[1]).add(s[0]),l=qr);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(qr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=qr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),so.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,v,m),ro.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,v,m),ao.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(so.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),ro.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ao.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(so.calc(c),ro.calc(c),ao.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function $l(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function Og(i,t){const e=1-i;return e*e*t}function zg(i,t){return 2*(1-i)*i*t}function Bg(i,t){return i*i*t}function tr(i,t,e,n){return Og(i,t)+zg(i,e)+Bg(i,n)}function Hg(i,t){const e=1-i;return e*e*e*t}function Vg(i,t){const e=1-i;return 3*e*e*i*t}function Gg(i,t){return 3*(1-i)*i*i*t}function Wg(i,t){return i*i*i*t}function er(i,t,e,n,s){return Hg(i,t)+Vg(i,e)+Gg(i,n)+Wg(i,s)}class Kh extends qn{constructor(t=new ht,e=new ht,n=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ht){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(er(t,s.x,r.x,a.x,o.x),er(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Xg extends qn{constructor(t=new A,e=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new A){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(er(t,s.x,r.x,a.x,o.x),er(t,s.y,r.y,a.y,o.y),er(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Jh extends qn{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $g extends qn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zh extends qn{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(tr(t,s.x,r.x,a.x),tr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qg extends qn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(tr(t,s.x,r.x,a.x),tr(t,s.y,r.y,a.y),tr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qh extends qn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set($l(o,c.x,l.x,h.x,u.x),$l(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ht().fromArray(s))}return this}}var ql=Object.freeze({__proto__:null,ArcCurve:kg,CatmullRomCurve3:Fg,CubicBezierCurve:Kh,CubicBezierCurve3:Xg,EllipseCurve:Tc,LineCurve:Jh,LineCurve3:$g,QuadraticBezierCurve:Zh,QuadraticBezierCurve3:qg,SplineCurve:Qh});class Yg extends qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ql[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ql[s.type]().fromJSON(s))}return this}}class jg extends Yg{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Jh(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Zh(this.currentPoint.clone(),new ht(t,e),new ht(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Kh(this.currentPoint.clone(),new ht(t,e),new ht(n,s),new ht(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Qh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){const l=new Tc(t,e,n,s,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Rc extends Ue{constructor(t=[new ht(0,-.5),new ht(.5,0),new ht(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ve(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/e,u=new A,d=new ht,f=new A,g=new A,v=new A;let m=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(g)}for(let x=0;x<=e;x++){const y=n+x*h*s,_=Math.sin(y),C=Math.cos(y);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*_,u.y=t[T].y,u.z=t[T].x*C,a.push(u.x,u.y,u.z),d.x=x/e,d.y=T/(t.length-1),o.push(d.x,d.y);const R=c[3*T+0]*_,L=c[3*T+1],w=c[3*T+0]*C;l.push(R,L,w)}}for(let x=0;x<e;x++)for(let y=0;y<t.length-1;y++){const _=y+x*t.length,C=_,T=_+t.length,R=_+t.length+1,L=_+1;r.push(C,T,L),r.push(R,L,T)}this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("uv",new re(o,2)),this.setAttribute("normal",new re(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rc(t.points,t.segments,t.phiStart,t.phiLength)}}class Gi extends Rc{constructor(t=1,e=1,n=4,s=8){const r=new jg;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Gi(t.radius,t.length,t.capSegments,t.radialSegments)}}class Qe extends Ue{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new A,h=new ht;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(o,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qe(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Lt extends Ue{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;x(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(f,2));function x(){const _=new A,C=new A;let T=0;const R=(e-t)/n;for(let L=0;L<=r;L++){const w=[],b=L/r,P=b*(e-t)+t;for(let V=0;V<=s;V++){const z=V/s,q=z*c+o,K=Math.sin(q),X=Math.cos(q);C.x=P*K,C.y=-b*n+m,C.z=P*X,u.push(C.x,C.y,C.z),_.set(K,R,X).normalize(),d.push(_.x,_.y,_.z),f.push(z,1-b),w.push(g++)}v.push(w)}for(let L=0;L<s;L++)for(let w=0;w<r;w++){const b=v[w][L],P=v[w+1][L],V=v[w+1][L+1],z=v[w][L+1];(t>0||w!==0)&&(h.push(b,P,z),T+=3),(e>0||w!==r-1)&&(h.push(P,V,z),T+=3)}l.addGroup(p,T,0),p+=T}function y(_){const C=g,T=new ht,R=new A;let L=0;const w=_===!0?t:e,b=_===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,m*b,0),d.push(0,b,0),f.push(.5,.5),g++;const P=g;for(let V=0;V<=s;V++){const q=V/s*c+o,K=Math.cos(q),X=Math.sin(q);R.x=w*X,R.y=m*b,R.z=w*K,u.push(R.x,R.y,R.z),d.push(0,b,0),T.x=K*.5+.5,T.y=X*.5*b+.5,f.push(T.x,T.y),g++}for(let V=0;V<s;V++){const z=C+V,q=P+V;_===!0?h.push(q,q+1,z):h.push(q+1,q,z),L+=3}l.addGroup(p,L,_===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class In extends Lt{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new In(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pr extends Ue{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const y=new A,_=new A,C=new A;for(let T=0;T<e.length;T+=3)f(e[T+0],y),f(e[T+1],_),f(e[T+2],C),c(y,_,C,x)}function c(x,y,_,C){const T=C+1,R=[];for(let L=0;L<=T;L++){R[L]=[];const w=x.clone().lerp(_,L/T),b=y.clone().lerp(_,L/T),P=T-L;for(let V=0;V<=P;V++)V===0&&L===T?R[L][V]=w:R[L][V]=w.clone().lerp(b,V/P)}for(let L=0;L<T;L++)for(let w=0;w<2*(T-L)-1;w++){const b=Math.floor(w/2);w%2===0?(d(R[L][b+1]),d(R[L+1][b]),d(R[L][b])):(d(R[L][b+1]),d(R[L+1][b+1]),d(R[L+1][b]))}}function l(x){const y=new A;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(x),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function h(){const x=new A;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];const _=m(x)/2/Math.PI+.5,C=p(x)/Math.PI+.5;a.push(_,1-C)}g(),u()}function u(){for(let x=0;x<a.length;x+=6){const y=a[x+0],_=a[x+2],C=a[x+4],T=Math.max(y,_,C),R=Math.min(y,_,C);T>.9&&R<.1&&(y<.2&&(a[x+0]+=1),_<.2&&(a[x+2]+=1),C<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,y){const _=x*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function g(){const x=new A,y=new A,_=new A,C=new A,T=new ht,R=new ht,L=new ht;for(let w=0,b=0;w<r.length;w+=9,b+=6){x.set(r[w+0],r[w+1],r[w+2]),y.set(r[w+3],r[w+4],r[w+5]),_.set(r[w+6],r[w+7],r[w+8]),T.set(a[b+0],a[b+1]),R.set(a[b+2],a[b+3]),L.set(a[b+4],a[b+5]),C.copy(x).add(y).add(_).divideScalar(3);const P=m(C);v(T,b+0,x,P),v(R,b+2,y,P),v(L,b+4,_,P)}}function v(x,y,_,C){C<0&&x.x===1&&(a[y]=x.x-1),_.x===0&&_.z===0&&(a[y]=C/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pr(t.vertices,t.indices,t.radius,t.details)}}class Cc extends pr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Cc(t.radius,t.detail)}}class zi extends pr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new zi(t.radius,t.detail)}}class nr extends pr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new nr(t.radius,t.detail)}}class Ns extends Ue{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],h=[];let u=t;const d=(e-t)/s,f=new A,g=new ht;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<s;v++){const m=v*(n+1);for(let p=0;p<n;p++){const x=p+m,y=x,_=x+n+1,C=x+n+2,T=x+1;o.push(y,_,T),o.push(_,C,T)}}this.setIndex(o),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ns(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class vt extends Ue{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new A,d=new A,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const x=[],y=p/n;let _=0;p===0&&a===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let C=0;C<=e;C++){const T=C/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(T+_,1-y),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const y=h[p][x+1],_=h[p][x],C=h[p+1][x],T=h[p+1][x+1];(p!==0||a>0)&&f.push(y,_,T),(p!==n-1||c<Math.PI)&&f.push(_,C,T)}this.setIndex(f),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(v,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Fe extends Ue{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new A,u=new A,d=new A;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const v=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,x=(s+1)*f+g;a.push(v,m,x),a.push(m,p,x)}this.setIndex(a),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fe(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class tn extends Ti{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Th,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Pc extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class td extends Pc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const oo=new ve,Yl=new A,jl=new A;class ed{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wc,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Yl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yl),jl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jl),e.updateMatrixWorld(),oo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Kl=new ve,Ys=new A,co=new A;class Kg extends ed{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new me(2,1,1,1),new me(0,1,1,1),new me(3,1,1,1),new me(1,1,1,1),new me(3,0,1,1),new me(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ys.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ys),co.copy(n.position),co.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(co),n.updateMatrixWorld(),s.makeTranslation(-Ys.x,-Ys.y,-Ys.z),Kl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kl)}}class nd extends Pc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Kg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Jg extends ed{constructor(){super(new zh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zg extends Pc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new Jg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Qg extends jh{constructor(t=10,e=10,n=4473924,s=8947848){n=new Ht(n),s=new Ht(s);const r=e/2,a=t/e,o=t/2,c=[],l=[];for(let d=0,f=0,g=-o;d<=e;d++,g+=a){c.push(-o,0,g,o,0,g),c.push(g,0,-o,g,0,o);const v=d===r?n:s;v.toArray(l,f),f+=3,v.toArray(l,f),f+=3,v.toArray(l,f),f+=3,v.toArray(l,f),f+=3}const h=new Ue;h.setAttribute("position",new re(c,3)),h.setAttribute("color",new re(l,3));const u=new Sa({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gc);class tv extends Xh{constructor(){super();const t=new wn;t.deleteAttribute("uv");const e=new tn({side:rn}),n=new tn,s=new nd(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new I(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new I(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new I(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const c=new I(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new I(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new I(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new I(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new I(t,us(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new I(t,us(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new I(t,us(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const v=new I(t,us(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const m=new I(t,us(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new I(t,us(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function us(i){const t=new xe;return t.color.setScalar(i),t}const O=(i=0,t=0,e=0)=>({x:i,y:t,z:e}),ct=i=>({x:i.x,y:i.y,z:i.z}),le=(i,t)=>({x:i.x+t.x,y:i.y+t.y,z:i.z+t.z}),ke=(i,t)=>({x:i.x-t.x,y:i.y-t.y,z:i.z-t.z}),he=(i,t)=>({x:i.x*t,y:i.y*t,z:i.z*t}),fn=(i,t)=>i.x*t.x+i.y*t.y+i.z*t.z,id=i=>Math.hypot(i.x,i.y,i.z),ue=(i,t)=>id(ke(i,t)),fs=(i,t)=>Math.hypot(i.x-t.x,i.z-t.z),Ce=i=>{const t=id(i);return t<1e-9?O(0,0,1):he(i,1/t)};function ev(i,t){const e=Math.cos(t),n=Math.sin(t);return{x:e*i.x+n*i.z,y:i.y,z:-n*i.x+e*i.z}}function lo(i){for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return i}function ho(i,t,e,n){const s=ke(e,i),r=fn(s,t);if(r<0)return null;const a=fn(s,s)-r*r;if(a>n*n)return null;const o=Math.sqrt(n*n-a);return Math.max(r-o,.05)}function nv(i,t,e,n,s){const r=ke(n,e),a=ke(i,e),o=fn(t,t),c=fn(t,r),l=fn(r,r),h=fn(t,a),u=fn(r,a),d=o*l-c*c,f=Math.max(0,Math.min(1,d>1e-9?(o*u-c*h)/d:0)),g=Math.max(0,(fn(le(e,he(r,f)),t)-fn(i,t))/o),v=le(i,he(t,g)),m=le(e,he(r,f));return ue(v,m)<=s?Math.max(g,.05):null}const js={heatUp:30,cool:22,resume:35,range:14,tick:.1},ps={cooldown:6,hop:2.6,dmg:28,falloff:.85,cone:.2},Jl={period:.45,range:9};function iv(i,t,e){const n=i.laserState;if(!n)return;const s=!!e.laser&&!n.over&&i.jam<=0;if(n.beam=null,!s){n.heat=Math.max(0,n.heat-js.cool*t),n.over&&n.heat<=js.resume&&(n.over=!1),n.acc=0;return}n.heat+=js.heatUp*t,n.heat>=100&&(n.heat=100,n.over=!0,i.events.push({type:"overheat"}));const r=Ce(e.camDir),a=le(le(e.camPos,he(r,.45)),O(0,-.14,0)),o=i.pick(e.camPos,r),c=o?o.t:js.range;if(n.beam={from:a,to:le(e.camPos,he(r,c))},n.acc+=t,n.acc<js.tick)return;const l=n.dps*n.acc;if(n.acc=0,!o)return;const h=le(e.camPos,he(r,o.t));if(o.bolt){i.bolts=i.bolts.filter(u=>u!==o.bolt),i.events.push({type:"boltShot",pos:ct(o.bolt.pos)});return}if(o.mine){i.mines=i.mines.filter(u=>u!==o.mine),i.events.push({type:"boltShot",pos:ct(o.mine.pos)});return}if(o.tether){o.tether.hp-=l,o.tether.hp<=0&&i.cutTether(o.tether,h);return}if(o.enemy){const u=o.enemy,d=u.parts.find(v=>v.def.kind==="shield"&&v.alive);if(d){i.damage(u,d,l*2,h);return}const f=le(e.camPos,he(r,fn(ke(u.pos,e.camPos),r))),g=i.nearestPart(u,f);i.damage(u,g,g.def.kind==="armor"?l*2:l,h,!0)}}function sv(i,t,e){var h;const n=i.teslaState;if(!n)return;n.cd=Math.max(0,n.cd-t);const s=!!e.tesla&&!n.held;if(n.held=!!e.tesla,!s||n.cd>0||i.jam>0)return;const r=Ce(e.camDir);let a=((h=i.pick(e.camPos,r))==null?void 0:h.enemy)??null;if(!a){let u=Math.cos(ps.cone);for(const d of i.enemies){if(!i.targetable(d))continue;const f=fn(Ce(ke(d.pos,e.camPos)),r);f>u&&(u=f,a=d)}}if(!a){n.cd=.4;return}n.cd=ps.cooldown;const o=[le(e.camPos,O(0,-.15,0))],c=new Set;let l=a;for(let u=0;u<n.links&&l;u++){c.add(l.id),o.push(ct(l.pos)),i.damage(l,i.nearestPart(l,l.pos),ps.dmg*ps.falloff**u,l.pos,!0),l.stun=Math.max(l.stun,.4);let d=null,f=ps.hop;for(const g of i.enemies){if(c.has(g.id)||!i.targetable(g))continue;const v=ue(g.pos,l.pos);v<f&&(f=v,d=g)}l=d}i.events.push({type:"tesla",points:o})}function rv(i,t){const e=i.droneState;if(!e)return;e.ang+=t*1.1;const n=i.player.pos;if(e.pos=O(n.x+Math.sin(i.front+Math.sin(e.ang)*.9)*.9,n.y+.35+Math.sin(e.ang*2)*.08,n.z+Math.cos(i.front+Math.sin(e.ang)*.9)*.9),e.cd-=t,e.cd>0||i.jam>0)return;const s=i.enemies.filter(o=>i.targetable(o)&&o.state!=="emerge"&&ue(o.pos,n)<Jl.range),a=s.filter(o=>o.cargoId!==null).sort((o,c)=>ue(o.pos,n)-ue(c.pos,n))[0]??s.sort((o,c)=>ue(o.pos,n)-ue(c.pos,n))[0];a&&(e.cd=Jl.period,i.quiet=!0,i.damage(a,i.nearestPart(a,a.pos),e.dmg,a.pos),i.quiet=!1,i.events.push({type:"droneShot",from:ct(e.pos),to:ct(a.pos)}))}const Ln={layers:[3,4,5],open:14,volley:6,swarm:22,nodeR:4.2,arc:150*Math.PI/180},Zl=[["scout","spark","spider"],["moth","scout","spider"]],uo=["Мара: Ядро под щитом. Узлы вокруг тебя питают его — сбей их все!","Мара: щит пал! Бей по Ядру, пока не поднялся новый слой!","Мара: новый слой щита. Узлов больше — ищи их по сторонам."];function Ql(i,t,e){const n=i.player.pos;for(let s=0;s<e;s++){const r=i.front-Ln.arc/2+Ln.arc*(s+.5)/e,a=O(n.x+Math.sin(r)*Ln.nodeR,n.y+(s%2?.7:-.1),n.z+Math.cos(r)*Ln.nodeR),o=i.spawn("node",-1,a);o.owner=t.id,o.beamTo=t.id,o.fireCd=4+s*1.3}}function av(i,t,e,n){t.orbitAng+=.08*n;const s=i.hoverPoint(t,7,.9);i.flyTo(t,s,Math.min(e,ue(t.pos,s)+.05),n,0),i.faceTo(t,i.player.pos,n);const r=i.enemies.filter(a=>a.owner===t.id&&!a.dead);if(t.cycle===0?(Ql(i,t,Ln.layers[0]),t.cycle=1,t.shielded=!0,t.blinkCd=Ln.swarm/2,i.events.push({type:"message",text:uo[0]})):t.shielded&&r.length===0?(t.shielded=!1,t.phaseT=0,i.events.push({type:"message",text:uo[1]}),i.events.push({type:"shake",power:.6})):t.shielded||(t.phaseT+=n,t.phaseT>=Ln.open&&(Ql(i,t,Ln.layers[Math.min(t.cycle,Ln.layers.length-1)]),t.cycle++,t.shielded=!0,i.events.push({type:"message",text:uo[2]}))),t.shielded||(t.fireCd-=n),t.fireCd<=.8&&t.fireCd+n>.8&&i.events.push({type:"telegraph",enemyId:t.id,pos:ct(t.pos)}),t.fireCd<=0){t.fireCd=Ln.volley;for(const a of[-1,0,1]){const o=le(i.player.pos,O(a*.35,0,0));i.bolts.push({id:i.nextId++,pos:ct(t.pos),vel:he(Ce(ke(o,t.pos)),rr),life:8,from:ct(t.pos)})}i.events.push({type:"boltFired",from:ct(t.pos)})}t.blinkCd-=n,t.blinkCd<=0&&(t.blinkCd=Ln.swarm,Zl[t.cycle%Zl.length].forEach((o,c)=>i.pending.push({at:i.time+un.lead,enemy:o,lane:c+1,portalId:null})),i.events.push({type:"message",text:"Мара: Ядро открывает все порталы разом! Воры идут к грузу!"}))}function ov(i,t,e){i.faceTo(t,i.player.pos,e),t.pos=O(t.pos.x,t.pos.y+Math.sin(t.t*1.3+t.id)*.06*e,t.pos.z),t.fireCd-=e,t.fireCd<=.7&&t.fireCd+e>.7&&i.events.push({type:"telegraph",enemyId:t.id,pos:ct(t.pos)}),t.fireCd<=0&&(t.fireCd=11,i.bolts.push({id:i.nextId++,pos:ct(t.pos),vel:he(Ce(ke(i.player.pos,t.pos)),rr*.9),life:8,from:ct(t.pos)}),i.events.push({type:"boltFired",from:ct(t.pos)}))}const oc={period:6,reel:.7,hp:24},th={period:7,maxBrood:6},eh={period:5,dist:4.5},nh={step:1.1,reach:.7},ms={volley:5,volleyFast:3.5,tractor:12,reel:.35,tetherHp:30,summon:12},sd=(i,t)=>i.parts.some(e=>e.def.kind===t&&e.alive);function wa(i,t,e,n){t.fireCd<=e&&t.fireCd+n>e&&i.events.push({type:"telegraph",enemyId:t.id,pos:ct(t.pos)})}function ma(i,t,e,n,s,r,a=.15){t.orbitAng+=a*r;const o=i.hoverPoint(t,e,n);i.flyTo(t,o,Math.min(s,ue(t.pos,o)*2+.05),r,0),i.faceTo(t,i.player.pos,r)}function rd(i,t,e){const n=i.nearestIdleCargo(t.pos);return n?(n.state="carried",t.cargoId=n.id,i.tethers.push({id:i.nextId++,enemyId:t.id,cargoId:n.id,hp:e}),i.events.push({type:"tether",enemyId:t.id,cargoId:n.id}),i.events.push({type:"cargoGrabbed",cargoId:n.id,pos:ct(n.pos)}),!0):!1}function cv(i,t,e,n){if(!sd(t,"grabber")){t.state="flee";return}if(t.state==="reel"){ma(i,t,5.5,1.2,e*.3,n,0),i.tethers.some(s=>s.enemyId===t.id)||(t.state=t.cargoId!==null?"carry":"harpoon");return}ma(i,t,5.5,1.2,e,n),t.fireCd-=n,wa(i,t,1,n),t.fireCd<=0&&(t.fireCd=oc.period,rd(i,t,oc.hp)&&(t.state="reel"))}function lv(i,t){for(const e of[...i.tethers]){const n=i.tetherEnds(e),s=i.enemies.find(l=>l.id===e.enemyId),r=i.cargoOf(e.cargoId);if(!n||!s||!r){i.tethers=i.tethers.filter(l=>l!==e);continue}const a=s.def.behavior==="reaper"?ms.reel:oc.reel,o=ke(n[0],r.pos),c=ue(n[0],r.pos);r.pos=le(r.pos,he(Ce(o),Math.min(c,a*t))),!(c>.4)&&(i.tethers=i.tethers.filter(l=>l!==e),s.def.behavior==="reaper"?(r.state="lost",i.stats.cargoLost++,s.cargoId=null,i.events.push({type:"cargoLost",cargoId:r.id,pos:ct(r.pos)})):s.state="carry")}}function hv(i,t,e,n){if(ma(i,t,6.5,1.6,e,n,.1),t.fireCd-=n,wa(i,t,1.2,n),t.fireCd>0)return;t.fireCd=th.period;const s=t.parts.filter(o=>o.def.kind==="sensor"&&o.alive).length,r=i.enemies.filter(o=>o.def.id==="scout"&&!o.dead).length,a=Math.min(s+1,th.maxBrood-r);if(!(s===0||a<=0)){for(let o=0;o<a;o++){const c=i.spawn("scout",-1,le(t.pos,O((o-(a-1)/2)*.35,-.3,0)));c.t=.4}i.events.push({type:"brood",pos:ct(t.pos),n:a})}}function dv(i,t,e,n){const s=t.parts.find(a=>a.def.kind==="weapon"&&a.alive);if(!s){t.state="flee";return}if(ma(i,t,eh.dist,.5,e,n,.25),t.fireCd-=n,wa(i,t,1,n),t.fireCd>0)return;t.fireCd=eh.period;const r=i.partWorld(t,s);i.bolts.push({id:i.nextId++,pos:r,vel:he(Ce(ke(i.player.pos,r)),ad.speed),life:6,from:ct(r),acid:!0}),i.events.push({type:"boltFired",from:ct(r)})}function uv(i,t,e,n){const s=i.nearestIdleCargo(t.pos);if(!s){t.state="flee";return}i.flyTo(t,s.pos,e,n),t.phaseT+=n,t.phaseT>=nh.step&&(t.phaseT=0,i.events.push({type:"shake",power:.3})),fs(t.pos,s.pos)<nh.reach&&(s.state="lost",i.stats.cargoLost++,i.events.push({type:"cargoLost",cargoId:s.id,pos:ct(s.pos)}),i.events.push({type:"explosion",pos:ct(s.pos),size:.8}),i.events.push({type:"shake",power:1}))}const fv=["","Мара: трюм открылся — он тянет груз лучом! Перебей луч или разбей трюм.","Мара: он вызывает тяжёлых! Держись, Жнец почти разбит."];function pv(i,t,e,n){const s=i.hoverPoint(t,6,0);s.y=i.floorY+2.6,t.orbitAng+=.12*n,i.flyTo(t,s,Math.min(e,ue(t.pos,s)+.05),n,0),i.faceTo(t,i.player.pos,n);const r=t.hp/t.def.hp,a=r>.66?0:r>.33?1:2;if(a>t.cycle&&(t.cycle=a,i.events.push({type:"message",text:fv[a]}),i.events.push({type:"shake",power:.6})),t.fireCd-=n,wa(i,t,.8,n),t.fireCd<=0){t.fireCd=a===2?ms.volleyFast:ms.volley;const o=t.parts.filter(l=>l.def.kind==="weapon"&&l.alive),c=o.length?o.map(l=>i.partWorld(t,l)):[ct(t.pos)];c.forEach((l,h)=>{const u=le(i.player.pos,O((h-(c.length-1)/2)*.3,0,0));i.bolts.push({id:i.nextId++,pos:l,vel:he(Ce(ke(u,l)),rr),life:8,from:ct(l)})}),i.events.push({type:"boltFired",from:ct(t.pos)})}a>=1&&sd(t,"grabber")&&!i.tethers.some(o=>o.enemyId===t.id)&&(t.phaseT+=n,t.phaseT>=ms.tractor&&(t.phaseT=0,rd(i,t,ms.tetherHp))),a===2&&(t.blinkCd-=n,t.blinkCd<=0&&(t.blinkCd=ms.summon,(i.time%2<1?["crab","scout"]:["harpooner","scout"]).forEach((c,l)=>i.pending.push({at:i.time+un.lead+l*.6,enemy:c,portalId:null}))))}const ih=5;function mv(i,t,e,n=[],s){const r=i.arc??Math.PI/3,a=i.hMin??.4,o=i.hMax??2.7;let c=O(),l=-1;for(let h=0;h<8;h++){const u=s===void 0?e():(s%ih+.5+(e()-.5)*.6)/ih,d=i.yaw-r/2+r*u,f=i.rMin+e()*(i.rMax-i.rMin),g=O(i.center.x+Math.sin(d)*f,t+a+e()*(o-a),i.center.z+Math.cos(d)*f),v=n.length?Math.min(...n.map(m=>ue(g,m))):1/0;if(v>=1.6)return g;v>l&&(l=v,c=g)}return c}function gv(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const vv={rate:9,damage:8,spread:.012,heatPerShot:4,cooling:20,resumeAt:45,aimAssist:1.4},fo=100,rr=1.6,_v=8,ad={damage:5,speed:1.4},yv=12,yi={lockTime:.6,speed0:3,speed1:8,turn:5,damage:45,splash:1.3,splashDamage:22,life:5},Yr={height:1.6,period:3.5,gravity:3,blast:.6},xv={chance:.06},jr={stun:3,cone:.75,range:16,reveal:4},sh={period:7,time:3.5},rh={rate:10,reach:1.6},Kr={period:3.5,dist:2.2,warn:.6},Jr={hide:4.5,attack:3.5,volleys:[1,2]},un={lead:1.8,open:.6,close:.5,linger:1.2,enter:.5};class Mv{constructor(t){$(this,"time",0);$(this,"events",[]);$(this,"player",{pos:O(),hull:fo,maxHull:fo});$(this,"floorY");$(this,"cargo",[]);$(this,"portals",[]);$(this,"enemies",[]);$(this,"bolts",[]);$(this,"rockets",[]);$(this,"mines",[]);$(this,"tethers",[]);$(this,"rocketState",null);$(this,"empState",null);$(this,"laserState",null);$(this,"teslaState",null);$(this,"droneState",null);$(this,"quiet",!1);$(this,"jam",0);$(this,"rocketHeld",!1);$(this,"empHeld",!1);$(this,"weapon",{heat:0,overheated:!1,cd:0});$(this,"stats",{kills:0,crystals:0,cores:0,shots:0,hits:0,cargoLost:0,cargoTotal:0});$(this,"regen",0);$(this,"killsBy",{});$(this,"seen",new Set);$(this,"flak");$(this,"waveIdx",-1);$(this,"phase","intermission");$(this,"result",null);$(this,"rng");$(this,"nextId",1);$(this,"pending",[]);$(this,"phaseT",2);$(this,"waves");$(this,"defs");$(this,"front");$(this,"zone");var n,s,r,a,o;this.rng=gv(t.seed),this.floorY=t.floorY,this.player.pos=ct(t.player),this.zone=t.zone,this.waves=t.waves,this.defs=t.enemyDefs,this.front=t.front??0,this.regen=t.regen??0,this.flak={...vv,...t.flak??{}},(n=t.weapons)!=null&&n.rockets&&(this.rocketState={ammo:t.weapons.rockets.ammo,lockT:0,lockId:null,locked:!1}),(s=t.weapons)!=null&&s.emp&&(this.empState={cd:0,cooldown:t.weapons.emp.cooldown}),(r=t.weapons)!=null&&r.laser&&(this.laserState={dps:t.weapons.laser.dps,heat:0,over:!1,acc:0,beam:null}),(a=t.weapons)!=null&&a.tesla&&(this.teslaState={cd:0,links:t.weapons.tesla.links,held:!1}),(o=t.weapons)!=null&&o.drone&&(this.droneState={dmg:t.weapons.drone.damage,cd:1,pos:ct(t.player),ang:0});const e=t.maxHull??fo;this.player.hull=e,this.player.maxHull=e,t.cargo.forEach((c,l)=>this.cargo.push({id:l+1,kind:l%2===0?"colonist":"crystal",pos:ct(c),state:"idle",vy:0})),this.stats.cargoTotal=this.cargo.length}get waveCount(){return this.waves.length}drain(){const t=this.events;return this.events=[],t}update(t,e){if(!this.result){t=Math.min(t,.1),this.time+=t,this.player.pos=ct(e.camPos),this.jam=Math.max(0,this.jam-t),this.regen>0&&(this.player.hull=Math.min(this.player.maxHull,this.player.hull+this.regen*t)),this.updateWeapon(t,e),this.updateRockets(t,e),this.updateEmp(t,e),iv(this,t,e),sv(this,t,e),rv(this,t),this.updateWaves(t);for(const n of this.enemies)n.dead||this.stepEnemy(n,t);this.updatePortals(t),lv(this,t),this.updateBolts(t),this.updateMines(t),this.updateCargo(t),this.enemies=this.enemies.filter(n=>!n.dead),this.checkEnd()}}updateWeapon(t,e){const n=this.weapon;if(n.cd=Math.max(0,n.cd-t),e.firing&&!n.overheated||(n.heat=Math.max(0,n.heat-this.flak.cooling*t),n.overheated&&n.heat<=this.flak.resumeAt&&(n.overheated=!1,this.events.push({type:"cooled"}))),e.firing&&!n.overheated){for(;n.cd<=0;)if(n.cd+=1/this.flak.rate,this.shoot(e.camPos,Ce(e.camDir)),n.heat+=this.flak.heatPerShot,n.heat>=100){n.heat=100,n.overheated=!0,this.events.push({type:"overheat"});break}}}pick(t,e){let n=1/0,s=null,r=null,a=null,o=null;for(const c of this.enemies){if(!this.targetable(c))continue;const l=ho(t,e,c.pos,c.def.radius*(c.def.scale??1)*this.flak.aimAssist);l!==null&&l<n&&(n=l,s=c,r=null)}for(const c of this.bolts){const l=ho(t,e,c.pos,.2);l!==null&&l<n&&(n=l,r=c,s=null)}for(const c of this.mines){const l=ho(t,e,c.pos,.2);l!==null&&l<n&&(n=l,a=c,r=null,s=null)}for(const c of this.tethers){const l=this.tetherEnds(c);if(!l)continue;const h=nv(t,e,l[0],l[1],.12);h!==null&&h<n&&(n=h,o=c,a=null,r=null,s=null)}return s||r||a||o?{enemy:s,bolt:r,mine:a,tether:o,t:n}:null}shoot(t,e){this.stats.shots++;const n=Ce(le(e,O((this.rng()-.5)*this.flak.spread*2,(this.rng()-.5)*this.flak.spread*2,(this.rng()-.5)*this.flak.spread*2))),s=this.pick(t,n),r=(s==null?void 0:s.t)??1/0,a=(s==null?void 0:s.enemy)??null,o=(s==null?void 0:s.bolt)??null,c=(s==null?void 0:s.mine)??null,l=(s==null?void 0:s.tether)??null;if(l){const h=le(t,he(n,r));this.events.push({type:"shot",origin:ct(t),end:h,hit:!0}),this.stats.hits++,l.hp-=this.flak.damage,l.hp<=0&&this.cutTether(l,h);return}if(c){this.mines=this.mines.filter(h=>h!==c),this.events.push({type:"boltShot",pos:ct(c.pos)}),this.events.push({type:"shot",origin:ct(t),end:ct(c.pos),hit:!0}),this.stats.hits++;return}if(o){this.bolts=this.bolts.filter(h=>h!==o),this.events.push({type:"boltShot",pos:ct(o.pos)}),this.events.push({type:"shot",origin:ct(t),end:ct(o.pos),hit:!0}),this.stats.hits++;return}if(a){const h=a,u=le(t,he(n,fn(ke(h.pos,t),n))),d=this.nearestPart(h,u),f=le(t,he(n,r));this.events.push({type:"shot",origin:ct(t),end:f,hit:!0}),this.stats.hits++,this.damage(h,d,this.flak.damage,f);return}this.events.push({type:"shot",origin:ct(t),end:le(t,he(n,10)),hit:!1})}tetherEnds(t){const e=this.enemies.find(r=>r.id===t.enemyId&&!r.dead),n=this.cargoOf(t.cargoId);if(!e||!n)return null;const s=e.parts.find(r=>r.def.kind==="grabber"&&r.alive)??e.parts[0];return[this.partWorld(e,s),le(n.pos,O(0,.12,0))]}cutTether(t,e){this.tethers=this.tethers.filter(s=>s!==t);const n=this.enemies.find(s=>s.id===t.enemyId);n&&n.cargoId===t.cargoId&&(this.dropCargo(n),n.state==="reel"&&(n.state=n.def.behavior==="reaper"?"reaper":"harpoon"),n.fireCd=Math.max(n.fireCd,3)),this.events.push({type:"tetherCut",pos:ct(e)})}targetable(t){return!t.dead&&t.cloak<.6}partWorld(t,e){return le(t.pos,ev(he(e.def.off,t.def.scale??1),t.yaw))}nearestPart(t,e){let n=t.parts[0],s=1/0;for(const r of t.parts){if(!r.alive)continue;const a=ue(this.partWorld(t,r),e)-r.def.r*(t.def.scale??1);a<s&&(s=a,n=r)}return n}damage(t,e,n,s,r=!1){if(t.shielded){this.events.push({type:"enemyHit",enemyId:t.id,partId:"shield",point:s,weak:!1});return}const a=t.parts.find(l=>l.def.kind==="shield"&&l.alive);if(a&&!r&&(e=a),e.def.kind==="shield"){e.hp-=n,this.events.push({type:"enemyHit",enemyId:t.id,partId:e.def.id,point:s,weak:!1}),e.alive&&e.hp<=0&&(e.alive=!1,this.events.push({type:"partDestroyed",enemyId:t.id,partId:e.def.id,point:this.partWorld(t,e)}));return}const o=e.def.kind,c=o==="sensor"?2:o==="armor"?.5:1;t.hp-=n*c,e.hp-=n,this.events.push({type:"enemyHit",enemyId:t.id,partId:e.def.id,point:s,weak:o==="sensor",quiet:this.quiet}),e.alive&&e.hp<=0&&o!=="core"&&(e.alive=!1,this.events.push({type:"partDestroyed",enemyId:t.id,partId:e.def.id,point:this.partWorld(t,e)}),this.onPartDestroyed(t,e)),t.hp<=0&&this.kill(t,!0)}onPartDestroyed(t,e){if(e.def.kind==="grabber"){for(const n of this.tethers.filter(s=>s.enemyId===t.id))this.cutTether(n,this.partWorld(t,e));this.dropCargo(t),(t.state==="seek"||t.state==="carry")&&(t.state="flee")}e.def.kind==="weapon"&&t.def.behavior==="shooter"&&(t.state="attack"),e.def.kind==="weapon"&&(t.def.behavior==="bomber"||t.def.behavior==="jammer"||t.def.behavior==="repair")&&(t.state="flee",t.beamTo=null),e.def.id==="veil"&&(t.noCloak=!0,this.events.push({type:"cloakBroken",enemyId:t.id}))}kill(t,e){if(t.dead)return;t.dead=!0;for(const s of this.tethers.filter(r=>r.enemyId===t.id))this.cutTether(s,t.pos);this.dropCargo(t),t.def.blast&&this.blast(t);for(const s of this.enemies)s.owner===t.id&&!s.dead&&this.kill(s,e);e&&(this.stats.kills++,this.killsBy[t.def.id]=(this.killsBy[t.def.id]??0)+1,this.stats.crystals+=t.def.reward,t.elite&&(this.stats.cores+=1),t.def.cls==="B"&&(this.stats.cores+=3));const n=t.def.cls==="L"?.5:t.def.cls==="M"?.9:1.4;this.events.push({type:"enemyKilled",enemyId:t.id,pos:ct(t.pos),reward:e?t.def.reward:0,defId:t.def.id,byPlayer:e}),this.events.push({type:"explosion",pos:ct(t.pos),size:n})}blast(t){const e=t.def.blast;for(const n of this.enemies)n===t||n.dead||ue(n.pos,t.pos)>e.r||this.damage(n,this.nearestPart(n,t.pos),e.dmg,t.pos,!0);ue(this.player.pos,t.pos)<e.r&&this.hurt(Math.round(e.dmg/3),t.pos),this.events.push({type:"explosion",pos:ct(t.pos),size:e.r*1.1}),e.dmg>=30&&this.events.push({type:"shake",power:.7})}updateWaves(t){if(this.phase==="done")return;if(this.phase==="intermission"){this.phaseT-=t,this.phaseT<=0&&this.startWave(this.waveIdx+1);return}for(const n of this.pending)n.portalId===null&&this.time>=n.at-un.lead&&(n.portalId=this.openPortal("in",null,n.lane,!!this.defs[n.enemy].walk).id);const e=this.pending.filter(n=>this.time>=n.at);this.pending=this.pending.filter(n=>this.time<n.at);for(const n of e)this.spawn(n.enemy,n.portalId??-1);this.pending.length===0&&this.enemies.length===0&&(this.events.push({type:"waveClear",index:this.waveIdx}),this.waveIdx>=this.waves.length-1?(this.phase="done",this.finish("win","waves")):(this.phase="intermission",this.phaseT=5))}startWave(t){this.waveIdx=t,this.phase="wave";const e=this.waves[t];this.pending=e.spawns.map(n=>({at:this.time+2.5+n.t,enemy:n.enemy,lane:n.portal,portalId:null})),this.events.push({type:"waveStart",index:t,total:this.waves.length,name:e.name}),this.events.push({type:"message",text:e.hint})}spawn(t,e=-1,n){let s=this.defs[t];const r=s.cls==="L"&&!n&&this.rng()<xv.chance;r&&(s={...s,hp:s.hp*2,reward:s.reward*3,name:`${s.name} · элита`}),this.seen.add(t);let a,o=-1;if(n)a=ct(n);else{let l=this.portals.find(h=>h.id===e&&h.kind==="in");l||(l=this.openPortal("in",null,void 0,!!s.walk),l.state="open"),l.closeAt=this.time+un.linger,o=l.id,a=s.walk?O(l.pos.x,this.floorY-.4,l.pos.z):ct(l.pos)}const c={id:this.nextId++,def:s,pos:a,vel:O(),yaw:0,hp:s.hp,parts:s.parts.map(l=>({def:l,hp:l.hp,alive:!0})),state:"emerge",t:0,portal:o,cargoId:null,targetCargo:null,fireCd:2+this.rng(),orbitAng:this.rng()*Math.PI*2,falling:!1,dead:!1,stun:0,exitId:null,cloak:0,reveal:0,noCloak:!1,blinkCd:Kr.period*(.6+.4*this.rng()),beamTo:null,phaseT:0,cycle:0,shielded:!1,owner:null,elite:r};return c.yaw=Math.atan2(this.player.pos.x-c.pos.x,this.player.pos.z-c.pos.z),this.enemies.push(c),c}stepEnemy(t,e){if(t.t+=e,this.updateCloak(t,e),t.stun>0&&!t.falling){t.stun-=e;return}if(t.state==="emerge"){const a=Ce(ke(this.player.pos,t.pos));if(t.pos=le(t.pos,he(O(a.x,0,a.z),.9*e)),t.def.walk&&(t.pos.y=Math.min(this.floorY+t.def.walk,t.pos.y+(t.def.walk+.4)*e/.7)),t.t>=.7){const o={shooter:"orbit",kamikaze:"attack",bomber:"bomb",jammer:"jam",repair:"repair",boss:"boss",harpoon:"harpoon",hive:"hive",acid:"acid",stomper:"stomp",reaper:"reaper",core:"core",node:"node"};t.state=o[t.def.behavior]??"seek"}return}const n=t.parts.filter(a=>a.def.kind==="engine"),s=n.filter(a=>!a.alive).length;if(n.length>0&&s===n.length&&(t.falling=!0),t.falling&&t.def.walk){t.pos.y-=e*.6,t.pos.y<=this.floorY+.08&&this.kill(t,!0);return}if(t.falling){t.vel.y-=5*e,t.pos.x+=t.vel.x*.4*e,t.pos.z+=t.vel.z*.4*e,t.pos.y+=t.vel.y*e,(t.pos.y<=this.floorY+.08||t.vel.y<-6)&&this.kill(t,t.def.cls==="B"||!!t.def.walk);return}let r=t.def.speed*(1-(n.length?.45*(s/n.length):0));if(t.def.behavior==="thief"&&!t.def.buff){const a=this.enemies.find(o=>o.def.buff&&!o.dead&&o.state!=="emerge");a&&(r*=1+a.def.buff)}switch(t.state){case"seek":this.stepSeek(t,r,e);break;case"carry":this.stepCarry(t,r*.85,e);break;case"flee":this.stepFlee(t,r,e);break;case"attack":this.stepAttack(t,r,e);break;case"orbit":this.stepOrbit(t,r,e);break;case"bomb":this.stepBomb(t,r,e);break;case"jam":this.stepJam(t,r,e);break;case"repair":this.stepRepair(t,r,e);break;case"boss":this.stepBoss(t,r,e);break;case"harpoon":case"reel":cv(this,t,r,e);break;case"hive":hv(this,t,r,e);break;case"acid":dv(this,t,r,e);break;case"stomp":uv(this,t,r,e);break;case"reaper":pv(this,t,r,e);break;case"core":av(this,t,r,e);break;case"node":ov(this,t,e);break}}flyTo(t,e,n,s,r=.4){t.def.walk&&(e=O(e.x,this.floorY+t.def.walk,e.z),r=0);const a=Ce(ke(e,t.pos)),o=O(a.z,0,-a.x),c=Math.sin(t.t*3+t.id)*r*n,l=le(he(a,n),he(o,c));if(t.vel=l,t.pos=le(t.pos,he(l,s)),Math.hypot(l.x,l.z)>.05){const u=Math.atan2(l.x,l.z);t.yaw+=lo(u-t.yaw)*Math.min(1,s*6)}}cargoOf(t){return t===null?void 0:this.cargo.find(e=>e.id===t)}stepSeek(t,e,n){let s=this.cargoOf(t.targetCargo);if((!s||s.state!=="idle")&&(s=this.nearestIdleCargo(t.pos),t.targetCargo=s?s.id:null),!s){t.state="flee";return}const r=O(s.pos.x,s.pos.y+.4,s.pos.z);this.tryBlink(t,r,n),this.flyTo(t,r,e,n,t.def.zigzag??.4),fs(t.pos,r)<(t.def.walk?.35:.22)&&(t.def.walk||Math.abs(t.pos.y-r.y)<.25)&&(s.state="carried",t.cargoId=s.id,t.state="carry",t.phaseT=0,this.events.push({type:"cargoGrabbed",cargoId:s.id,pos:ct(s.pos)}))}stepLatch(t,e){const n=this.cargoOf(t.cargoId);if(!n){t.state="flee";return}t.pos=O(n.pos.x,n.pos.y+.14,n.pos.z),t.phaseT+=e;const s=t.def.latch;t.phaseT>=s-1&&t.phaseT-e<s-1&&this.events.push({type:"telegraph",enemyId:t.id,pos:ct(t.pos)}),!(t.phaseT<s)&&(n.state="lost",this.stats.cargoLost++,this.events.push({type:"cargoLost",cargoId:n.id,pos:ct(n.pos)}),this.events.push({type:"blink",enemyId:t.id,from:ct(t.pos),to:ct(t.pos)}),t.cargoId=null,t.dead=!0,this.events.push({type:"enemyEscaped",enemyId:t.id}))}stepCarry(t,e,n){if(t.def.latch){this.stepLatch(t,n);return}const s=this.exitFor(t),r=s.pos;if(this.tryBlink(t,r,n),this.flyTo(t,r,e,n,t.def.zigzag?t.def.zigzag/2:.15),(t.def.walk?fs(t.pos,r):ue(t.pos,r))<un.enter&&s.state!=="opening"){this.closePortal(s);const a=this.cargoOf(t.cargoId);a&&(a.state="lost",this.stats.cargoLost++,this.events.push({type:"cargoLost",cargoId:a.id,pos:ct(r)})),t.cargoId=null,t.dead=!0,this.events.push({type:"enemyEscaped",enemyId:t.id})}}stepFlee(t,e,n){const s=this.exitFor(t),r=s.pos;this.flyTo(t,r,e*1.3,n,.2),(t.def.walk?fs(t.pos,r):ue(t.pos,r))<un.enter&&s.state!=="opening"&&(this.closePortal(s),t.dead=!0,this.events.push({type:"enemyEscaped",enemyId:t.id}))}stepAttack(t,e,n){if(this.flyTo(t,this.player.pos,e,n,.5),ue(t.pos,this.player.pos)<.45){const s=t.def.contactDamage??yv;this.hurt(s,t.pos),t.dead=!0,this.events.push({type:"enemyKilled",enemyId:t.id,pos:ct(t.pos),reward:0,defId:t.def.id,byPlayer:!1}),this.events.push({type:"explosion",pos:ct(t.pos),size:s>12?1.2:.8})}}stepOrbit(t,e,n){const s=this.player.pos;t.orbitAng+=.25*n;const r=this.front+Math.sin(t.orbitAng)*.5,a=O(s.x+Math.sin(r)*3.5,s.y+.4+Math.sin(t.t)*.3,s.z+Math.cos(r)*3.5);if(this.flyTo(t,a,Math.min(e,ue(t.pos,a)*2+.05),n,0),t.yaw+=lo(Math.atan2(s.x-t.pos.x,s.z-t.pos.z)-t.yaw)*Math.min(1,n*4),t.fireCd-=n,t.fireCd<=.7&&t.fireCd+n>.7&&this.events.push({type:"telegraph",enemyId:t.id,pos:ct(t.pos)}),t.fireCd<=0){t.fireCd=4;const o=Ce(ke(s,t.pos));this.bolts.push({id:this.nextId++,pos:ct(t.pos),vel:he(o,rr),life:5,from:ct(t.pos)}),this.events.push({type:"boltFired",from:ct(t.pos)})}}stepBomb(t,e,n){let s=this.cargoOf(t.targetCargo);if((!s||s.state!=="idle")&&(s=this.nearestIdleCargo(t.pos),t.targetCargo=s?s.id:null),!s){t.state="flee";return}const r=O(s.pos.x,s.pos.y+Yr.height,s.pos.z);if(this.flyTo(t,r,Math.min(e,ue(t.pos,r)*2+.05),n,.1),!(fs(t.pos,r)>.4)&&(t.fireCd-=n,t.fireCd<=.7&&t.fireCd+n>.7&&this.events.push({type:"telegraph",enemyId:t.id,pos:ct(t.pos)}),t.fireCd<=0)){t.fireCd=Yr.period;const a=O(t.pos.x,t.pos.y-.2,t.pos.z);this.mines.push({id:this.nextId++,pos:a,vy:0}),this.events.push({type:"mineDropped",pos:ct(a)})}}updateCloak(t,e){t.reveal=Math.max(0,t.reveal-e);let n=0;if(t.def.cloak&&!t.noCloak&&t.state!=="emerge"&&!t.falling&&t.reveal<=0&&t.cargoId===null)if(t.def.behavior==="boss")n=t.state==="boss"&&t.phaseT<Jr.hide?1:0;else{t.phaseT+=e;const r=t.def.cloak.hidden+t.def.cloak.shown;n=t.phaseT%r<t.def.cloak.hidden?1:0}const s=Math.min(1,e*2.5);t.cloak+=(n-t.cloak)*s,Math.abs(n-t.cloak)<.01&&(t.cloak=n)}tryBlink(t,e,n){if(!t.def.blink)return;const s=t.def.hop??Kr;if(t.blinkCd-=n,t.blinkCd<=Kr.warn&&t.blinkCd+n>Kr.warn&&this.events.push({type:"telegraph",enemyId:t.id,pos:ct(t.pos)}),t.blinkCd>0)return;t.blinkCd=s.period;const r=ke(e,t.pos),a=Math.hypot(r.x,r.y,r.z);if(a<.6)return;const o=ct(t.pos);t.pos=le(t.pos,he(Ce(r),Math.min(s.dist,a-.4))),this.events.push({type:"blink",enemyId:t.id,from:o,to:ct(t.pos)})}hoverPoint(t,e,n){const s=this.player.pos,r=this.front+Math.sin(t.orbitAng)*.5;return O(s.x+Math.sin(r)*e,s.y+n+Math.sin(t.t*.9)*.2,s.z+Math.cos(r)*e)}faceTo(t,e,n){t.yaw+=lo(Math.atan2(e.x-t.pos.x,e.z-t.pos.z)-t.yaw)*Math.min(1,n*4)}stepJam(t,e,n){t.orbitAng+=.2*n;const s=this.hoverPoint(t,5,.7);this.flyTo(t,s,Math.min(e,ue(t.pos,s)*2+.05),n,0),this.faceTo(t,this.player.pos,n),t.fireCd-=n,t.fireCd<=1&&t.fireCd+n>1&&this.events.push({type:"telegraph",enemyId:t.id,pos:ct(t.pos)}),t.fireCd<=0&&(t.fireCd=sh.period,this.jam=sh.time,this.events.push({type:"jam",pos:ct(t.pos)}))}stepRepair(t,e,n){let s,r=1;for(const o of this.enemies){if(o===t||o.dead||o.def.behavior==="repair")continue;const c=o.hp/o.def.hp;c<r-.001&&(r=c,s=o)}if(!s){t.beamTo=null,t.orbitAng+=.15*n;const o=this.hoverPoint(t,6,1);this.flyTo(t,o,Math.min(e,ue(t.pos,o)*2+.05),n,0),this.faceTo(t,this.player.pos,n);return}const a=le(s.pos,O(0,.8,0));this.flyTo(t,a,Math.min(e*1.2,ue(t.pos,a)*2+.05),n,.1),this.faceTo(t,s.pos,n),ue(t.pos,s.pos)<rh.reach?(t.beamTo=s.id,s.hp=Math.min(s.def.hp,s.hp+rh.rate*n)):t.beamTo=null}stepBoss(t,e,n){const s=t.noCloak?2:Jr.hide;t.phaseT===0&&(t.orbitAng=(this.rng()-.5)*2,t.cycle%2===1&&((t.hp<t.def.hp/2?["jammer","grabber","scout"]:t.cycle%4===1?["jammer","scout"]:["ghost","scout"]).forEach((c,l)=>this.pending.push({at:this.time+un.lead+l*.6,enemy:c,portalId:null})),this.events.push({type:"message",text:"Мара: Сборщик зовёт подмогу!"}))),t.phaseT+=n;const r=this.hoverPoint(t,5.5,.8);this.flyTo(t,r,Math.min(e,ue(t.pos,r)*1.5+.05),n,0),this.faceTo(t,this.player.pos,n);const a=t.phaseT-s;if(a>=0){a-n<0&&this.events.push({type:"telegraph",enemyId:t.id,pos:ct(t.pos)});const o=t.parts.filter(c=>c.def.kind==="weapon"&&c.alive);for(const c of Jr.volleys)if(a>=c&&a-n<c){const l=Math.max(1,o.length);for(let h=0;h<l;h++){const u=o[h]?this.partWorld(t,o[h]):ct(t.pos),d=le(this.player.pos,O((h-(l-1)/2)*.25,0,0));this.bolts.push({id:this.nextId++,pos:u,vel:he(Ce(ke(d,u)),rr*1.2),life:6,from:ct(u)})}this.events.push({type:"boltFired",from:ct(t.pos)})}a>=Jr.attack&&(t.phaseT=0,t.cycle++)}}updateMines(t){for(const n of this.mines)n.vy-=Yr.gravity*t,n.pos=O(n.pos.x,n.pos.y+n.vy*t,n.pos.z);const e=this.mines.filter(n=>n.pos.y<=this.floorY);this.mines=this.mines.filter(n=>n.pos.y>this.floorY);for(const n of e){const s=O(n.pos.x,this.floorY,n.pos.z);let r=0;for(const a of this.cargo)a.state==="idle"&&fs(a.pos,s)<Yr.blast&&(a.state="lost",this.stats.cargoLost++,r++,this.events.push({type:"cargoLost",cargoId:a.id,pos:ct(a.pos)}));this.events.push({type:"explosion",pos:s,size:.7}),this.events.push({type:"mineBlast",pos:s,destroyed:r})}}nearestIdleCargo(t){let e,n=1/0;for(const s of this.cargo){if(s.state!=="idle")continue;const r=ue(t,s.pos);r<n&&(n=r,e=s)}return e}openPortal(t,e,n,s=!1){const r=this.portals.map(l=>l.pos),a=mv(s?{...this.zone,rMin:Math.min(this.zone.rMin,6),rMax:Math.min(this.zone.rMax,7.5)}:this.zone,this.floorY,this.rng,r,n);s&&(a.y=this.floorY+.02);const o=t==="in"?this.time+un.lead+un.linger+1:1/0,c={id:this.nextId++,pos:a,kind:t,state:"opening",t:0,owner:e,closeAt:o,floor:s};return this.portals.push(c),this.events.push({type:"portalOpen",id:c.id,pos:ct(a),kind:t}),c}closePortal(t){t.state!=="closing"&&(t.state="closing",t.t=0,this.events.push({type:"portalClose",id:t.id,kind:t.kind}))}exitFor(t){let e=this.portals.find(n=>n.id===t.exitId&&n.state!=="closing");return e||(e=this.openPortal("out",t.id,void 0,!!t.def.walk),t.exitId=e.id),e}updatePortals(t){for(const e of this.portals)if(e.t+=t,e.state==="opening"&&e.t>=un.open&&(e.state="open",e.t=0),e.state!=="closing"&&(e.kind==="in"&&this.time>=e.closeAt&&this.closePortal(e),e.kind==="out")){const n=this.enemies.find(s=>s.id===e.owner);(!n||n.dead||n.falling||n.state!=="carry"&&n.state!=="flee")&&this.closePortal(e)}this.portals=this.portals.filter(e=>!(e.state==="closing"&&e.t>=un.close))}dropCargo(t){const e=this.cargoOf(t.cargoId);t.cargoId=null,e&&e.state==="carried"&&(e.state="falling",e.vy=0,this.events.push({type:"cargoDropped",cargoId:e.id,pos:ct(e.pos)}))}updateRockets(t,e){var s;const n=this.rocketState;if(n){const r=!!e.rocket&&this.jam<=0;if(this.jam>0&&(n.locked=!1,n.lockId=null,n.lockT=0),r&&n.ammo>0){const a=this.pick(e.camPos,Ce(e.camDir)),o=((s=a==null?void 0:a.enemy)==null?void 0:s.id)??null;o!==null&&o===n.lockId?(n.lockT+=t,!n.locked&&n.lockT>=yi.lockTime&&(n.locked=!0,this.events.push({type:"lockOn",enemyId:o}))):n.locked||(n.lockId=o,n.lockT=0)}if(!r&&this.rocketHeld){const a=n.locked?this.enemies.find(o=>o.id===n.lockId&&!o.dead):void 0;if(a&&n.ammo>0){n.ammo--;const o=le(e.camPos,O(0,-.15,0));this.rockets.push({id:this.nextId++,pos:o,vel:he(Ce(e.camDir),yi.speed0),target:a.id,life:yi.life}),this.events.push({type:"rocketFired",from:ct(o)})}n.lockId=null,n.lockT=0,n.locked=!1}n.locked&&!this.enemies.some(a=>a.id===n.lockId&&!a.dead)&&(n.locked=!1,n.lockId=null,n.lockT=0),this.rocketHeld=r}for(const r of this.rockets){r.life-=t;const a=this.enemies.find(h=>h.id===r.target&&!h.dead),o=Math.min(yi.speed1,Math.hypot(r.vel.x,r.vel.y,r.vel.z)+8*t);let c=Ce(r.vel);if(a){const h=Ce(ke(a.pos,r.pos));c=Ce(le(c,he(ke(h,c),Math.min(1,yi.turn*t))))}r.vel=he(c,o),r.pos=le(r.pos,he(r.vel,t)),(a&&ue(r.pos,a.pos)<a.def.radius*(a.def.scale??1)+.15||r.life<=0)&&(r.life=0,this.explodeRocket(r.pos,a??null))}this.rockets=this.rockets.filter(r=>r.life>0)}explodeRocket(t,e){if(this.events.push({type:"explosion",pos:ct(t),size:1.1}),e&&!e.dead){const n=e.parts.find(s=>s.def.kind==="core")??e.parts[0];this.damage(e,n,yi.damage,t,!0)}for(const n of this.enemies)n.dead||n===e||ue(n.pos,t)<yi.splash&&this.damage(n,this.nearestPart(n,t),yi.splashDamage,t,!0)}updateEmp(t,e){const n=this.empState;if(!n)return;n.cd=Math.max(0,n.cd-t);const s=!!e.emp&&!this.empHeld;if(this.empHeld=!!e.emp,!s||n.cd>0||this.jam>0)return;n.cd=n.cooldown;const r=Ce(e.camDir);let a=0;for(const o of this.enemies){if(o.dead)continue;const c=ke(o.pos,e.camPos);Math.hypot(c.x,c.y,c.z)<jr.range&&fn(Ce(c),r)>Math.cos(jr.cone)&&(o.stun=jr.stun,o.reveal=jr.reveal,a++)}for(const o of[...this.bolts,...this.mines])this.events.push({type:"boltShot",pos:ct(o.pos)});this.bolts=[],this.mines=[],this.events.push({type:"emp",pos:ct(e.camPos),stunned:a})}updateBolts(t){for(const e of this.bolts)e.pos=le(e.pos,he(e.vel,t)),e.life-=t,ue(e.pos,this.player.pos)<.35&&(e.life=0,this.hurt(e.acid?ad.damage:_v,e.from),e.acid&&this.events.push({type:"acidHit"}));this.bolts=this.bolts.filter(e=>e.life>0)}updateCargo(t){for(const e of this.cargo)if(e.state==="carried"){const n=this.enemies.find(s=>s.cargoId===e.id&&!s.dead);if(n&&!this.tethers.some(s=>s.cargoId===e.id))if(n.def.push){const s=Ce(O(n.vel.x,0,n.vel.z));e.pos=O(n.pos.x+s.x*.22,this.floorY,n.pos.z+s.z*.22)}else n.def.latch?e.pos=O(e.pos.x,this.floorY,e.pos.z):e.pos=n.def.walk?O(n.pos.x,n.pos.y+.3,n.pos.z):O(n.pos.x,n.pos.y-.4,n.pos.z)}else e.state==="falling"&&(e.vy-=6*t,e.pos.y+=e.vy*t,e.pos.y<=this.floorY&&(e.pos.y=this.floorY,e.state="idle"))}repair(t){return this.phase!=="intermission"||this.result||this.player.hull>=this.player.maxHull?!1:(this.player.hull=Math.min(this.player.maxHull,this.player.hull+t),!0)}shiftFloor(t){this.floorY+=t;for(const e of this.cargo)e.state==="idle"&&(e.pos=O(e.pos.x,e.pos.y+t,e.pos.z));for(const e of this.portals)e.floor&&(e.pos=O(e.pos.x,e.pos.y+t,e.pos.z))}hurt(t,e){this.result||(this.player.hull=Math.max(0,this.player.hull-t),this.events.push({type:"playerHit",from:ct(e),dmg:t,hull:this.player.hull}),this.player.hull<=0&&this.finish("lose","hull"))}checkEnd(){if(this.result)return;this.cargo.some(e=>e.state!=="lost")||this.finish("lose","cargo")}finish(t,e){this.result||(this.result=t,this.events.push({type:"end",result:t,reason:e}))}}const we=1.8,Lc={scout:{id:"scout",name:"Жук-скаут",cls:"L",hp:20,speed:.9,radius:.3,behavior:"thief",reward:3,scale:we,parts:[{id:"body",kind:"core",hp:9999,off:O(0,0,0),r:.14},{id:"wingL",kind:"engine",hp:8,off:O(-.17,.03,0),r:.1},{id:"wingR",kind:"engine",hp:8,off:O(.17,.03,0),r:.1}]},spark:{id:"spark",name:"Искра",cls:"L",hp:14,speed:1.1,radius:.28,behavior:"thief",reward:4,scale:we,blast:{r:.9,dmg:14},parts:[{id:"body",kind:"core",hp:9999,off:O(0,0,0),r:.12},{id:"fin",kind:"engine",hp:6,off:O(0,0,-.2),r:.1}]},grabber:{id:"grabber",name:"Хваталка",cls:"M",hp:70,speed:.6,radius:.42,behavior:"thief",reward:12,scale:we,parts:[{id:"body",kind:"core",hp:9999,off:O(0,0,0),r:.2},{id:"head",kind:"sensor",hp:12,off:O(0,.02,.28),r:.12},{id:"arm",kind:"grabber",hp:26,off:O(0,-.25,.05),r:.14},{id:"thrL",kind:"engine",hp:16,off:O(-.28,0,-.05),r:.12},{id:"thrR",kind:"engine",hp:16,off:O(.28,0,-.05),r:.12}]},shield:{id:"shield",name:"Щитоносец",cls:"M",hp:60,speed:.45,radius:.42,behavior:"kamikaze",reward:16,scale:we,contactDamage:22,parts:[{id:"body",kind:"core",hp:9999,off:O(0,0,0),r:.2},{id:"shield",kind:"shield",hp:120,off:O(0,0,.3),r:.36},{id:"jet",kind:"engine",hp:30,off:O(0,-.05,-.25),r:.12}]},bomber:{id:"bomber",name:"Бомбардир",cls:"M",hp:55,speed:.6,radius:.45,behavior:"bomber",reward:15,scale:we,parts:[{id:"body",kind:"core",hp:9999,off:O(0,0,0),r:.25},{id:"bay",kind:"weapon",hp:20,off:O(0,-.12,0),r:.14},{id:"eye",kind:"sensor",hp:10,off:O(0,.02,.32),r:.1},{id:"jetL",kind:"engine",hp:15,off:O(-.36,0,0),r:.11},{id:"jetR",kind:"engine",hp:15,off:O(.36,0,0),r:.11}]},shooter:{id:"shooter",name:"Стрелок",cls:"M",hp:50,speed:.7,radius:.38,behavior:"shooter",reward:14,scale:we,parts:[{id:"body",kind:"core",hp:9999,off:O(0,0,0),r:.2},{id:"plateL",kind:"armor",hp:14,off:O(-.2,.05,0),r:.12},{id:"plateR",kind:"armor",hp:14,off:O(.2,.05,0),r:.12},{id:"gun",kind:"weapon",hp:18,off:O(0,-.08,.32),r:.12},{id:"rotor",kind:"engine",hp:20,off:O(0,.2,0),r:.2}]},jammer:{id:"jammer",name:"Глушитель",cls:"M",hp:45,speed:.7,radius:.4,behavior:"jammer",reward:14,scale:we,parts:[{id:"body",kind:"core",hp:9999,off:O(0,0,0),r:.18},{id:"dish",kind:"weapon",hp:18,off:O(0,.2,.04),r:.15},{id:"engL",kind:"engine",hp:14,off:O(-.24,-.04,0),r:.1},{id:"engR",kind:"engine",hp:14,off:O(.24,-.04,0),r:.1}]},repair:{id:"repair",name:"Ремонтник",cls:"M",hp:50,speed:.75,radius:.38,behavior:"repair",reward:16,scale:we,parts:[{id:"body",kind:"core",hp:9999,off:O(0,0,0),r:.17},{id:"emitter",kind:"weapon",hp:16,off:O(0,-.14,.16),r:.1},{id:"rotor",kind:"engine",hp:18,off:O(0,.18,0),r:.18}]},jumper:{id:"jumper",name:"Прыгун",cls:"M",hp:35,speed:.6,radius:.32,behavior:"thief",reward:12,scale:we,blink:!0,parts:[{id:"body",kind:"core",hp:9999,off:O(0,0,0),r:.14},{id:"core",kind:"sensor",hp:8,off:O(0,.02,.12),r:.07},{id:"finL",kind:"engine",hp:10,off:O(-.17,0,-.04),r:.09},{id:"finR",kind:"engine",hp:10,off:O(.17,0,-.04),r:.09}]},ghost:{id:"ghost",name:"Призрак",cls:"H",hp:80,speed:.55,radius:.42,behavior:"thief",reward:22,scale:we,cloak:{hidden:4,shown:2.2},parts:[{id:"body",kind:"core",hp:9999,off:O(0,0,0),r:.22},{id:"veil",kind:"sensor",hp:18,off:O(0,.18,-.05),r:.1},{id:"claw",kind:"grabber",hp:24,off:O(0,-.24,.05),r:.12},{id:"engL",kind:"engine",hp:22,off:O(-.26,0,-.08),r:.1},{id:"engR",kind:"engine",hp:22,off:O(.26,0,-.08),r:.1}]},collector:{id:"collector",name:"Сборщик",cls:"B",hp:600,speed:.5,radius:.8,behavior:"boss",reward:150,scale:we*1.4,cloak:{hidden:5,shown:3.5},parts:[{id:"body",kind:"core",hp:9999,off:O(0,0,0),r:.45},{id:"veil",kind:"sensor",hp:80,off:O(0,.32,0),r:.16},{id:"gunL",kind:"weapon",hp:90,off:O(-.42,-.12,.28),r:.13},{id:"gunR",kind:"weapon",hp:90,off:O(.42,-.12,.28),r:.13},{id:"engL",kind:"engine",hp:140,off:O(-.55,.05,-.2),r:.16},{id:"engR",kind:"engine",hp:140,off:O(.55,.05,-.2),r:.16}]},crab:{id:"crab",name:"Танк-краб",cls:"H",hp:150,speed:.45,radius:.5,behavior:"thief",reward:26,scale:we,walk:.22,parts:[{id:"body",kind:"core",hp:9999,off:O(0,0,0),r:.25},{id:"shell",kind:"shield",hp:90,off:O(0,.1,.2),r:.3},{id:"claw",kind:"grabber",hp:40,off:O(.18,0,.3),r:.12},{id:"legL",kind:"engine",hp:35,off:O(-.3,-.12,0),r:.12},{id:"legR",kind:"engine",hp:35,off:O(.3,-.12,0),r:.12}]},harpooner:{id:"harpooner",name:"Гарпунщик",cls:"H",hp:90,speed:.55,radius:.45,behavior:"harpoon",reward:24,scale:we,parts:[{id:"body",kind:"core",hp:9999,off:O(0,0,0),r:.22},{id:"gun",kind:"grabber",hp:30,off:O(0,-.12,.28),r:.12},{id:"engL",kind:"engine",hp:25,off:O(-.3,.02,-.05),r:.11},{id:"engR",kind:"engine",hp:25,off:O(.3,.02,-.05),r:.11}]},hive:{id:"hive",name:"Рой-матка",cls:"H",hp:140,speed:.4,radius:.6,behavior:"hive",reward:30,scale:we,parts:[{id:"body",kind:"core",hp:9999,off:O(0,0,0),r:.3},{id:"sacL",kind:"sensor",hp:30,off:O(-.26,-.16,.05),r:.13},{id:"sacR",kind:"sensor",hp:30,off:O(.26,-.16,.05),r:.13},{id:"rotor",kind:"engine",hp:40,off:O(0,.3,0),r:.22}]},sapper:{id:"sapper",name:"Сапёр",cls:"H",hp:90,speed:.35,radius:.45,behavior:"kamikaze",reward:20,scale:we,contactDamage:35,blast:{r:1.6,dmg:40},parts:[{id:"body",kind:"core",hp:9999,off:O(0,0,0),r:.26},{id:"charge",kind:"sensor",hp:25,off:O(0,.02,.26),r:.12},{id:"jetL",kind:"engine",hp:25,off:O(-.28,0,-.1),r:.1},{id:"jetR",kind:"engine",hp:25,off:O(.28,0,-.1),r:.1}]},spitter:{id:"spitter",name:"Кислотник",cls:"H",hp:75,speed:.6,radius:.42,behavior:"acid",reward:22,scale:we,parts:[{id:"body",kind:"core",hp:9999,off:O(0,0,0),r:.22},{id:"mouth",kind:"weapon",hp:22,off:O(0,-.06,.26),r:.11},{id:"wingL",kind:"engine",hp:20,off:O(-.28,.06,-.04),r:.12},{id:"wingR",kind:"engine",hp:20,off:O(.28,.06,-.04),r:.12}]},leviathan:{id:"leviathan",name:"Левиафан",cls:"H",hp:320,speed:.28,radius:.9,behavior:"stomper",reward:45,scale:we*1.5,walk:.6,parts:[{id:"body",kind:"core",hp:9999,off:O(0,0,0),r:.42},{id:"head",kind:"sensor",hp:60,off:O(0,.12,.48),r:.17},{id:"legFL",kind:"engine",hp:60,off:O(-.42,-.3,.3),r:.14},{id:"legFR",kind:"engine",hp:60,off:O(.42,-.3,.3),r:.14},{id:"legBL",kind:"engine",hp:60,off:O(-.42,-.3,-.3),r:.14},{id:"legBR",kind:"engine",hp:60,off:O(.42,-.3,-.3),r:.14}]},reaper:{id:"reaper",name:"Жнец",cls:"B",hp:800,speed:.4,radius:1,behavior:"reaper",reward:250,scale:we*1.5,parts:[{id:"body",kind:"core",hp:9999,off:O(0,0,0),r:.55},{id:"hold",kind:"grabber",hp:160,off:O(0,-.3,0),r:.25},{id:"gunL",kind:"weapon",hp:120,off:O(-.55,-.1,.35),r:.14},{id:"gunR",kind:"weapon",hp:120,off:O(.55,-.1,.35),r:.14},{id:"engL",kind:"engine",hp:220,off:O(-.72,.1,-.35),r:.18},{id:"engR",kind:"engine",hp:220,off:O(.72,.1,-.35),r:.18}]},spider:{id:"spider",name:"Паук-крадун",cls:"L",hp:22,speed:.8,radius:.3,behavior:"thief",reward:5,scale:we,walk:.1,parts:[{id:"body",kind:"core",hp:9999,off:O(0,0,0),r:.12},{id:"legL",kind:"engine",hp:8,off:O(-.14,-.03,0),r:.09},{id:"legR",kind:"engine",hp:8,off:O(.14,-.03,0),r:.09}]},moth:{id:"moth",name:"Мотылёк",cls:"L",hp:10,speed:.9,radius:.3,behavior:"thief",reward:5,scale:we,zigzag:1.6,buff:.25,parts:[{id:"body",kind:"core",hp:9999,off:O(0,0,0),r:.08},{id:"wingL",kind:"engine",hp:5,off:O(-.14,.02,0),r:.11},{id:"wingR",kind:"engine",hp:5,off:O(.14,.02,0),r:.11}]},roller:{id:"roller",name:"Болтун",cls:"L",hp:30,speed:.55,radius:.3,behavior:"thief",reward:6,scale:we,walk:.12,push:!0,parts:[{id:"body",kind:"core",hp:9999,off:O(0,0,0),r:.13},{id:"hatch",kind:"sensor",hp:8,off:O(0,.11,0),r:.07},{id:"sideL",kind:"armor",hp:30,off:O(-.11,0,0),r:.08},{id:"sideR",kind:"armor",hp:30,off:O(.11,0,0),r:.08}]},tick:{id:"tick",name:"Клещ",cls:"L",hp:18,speed:.5,radius:.26,behavior:"thief",reward:6,scale:we,blink:!0,hop:{period:1.6,dist:1.4},latch:5,parts:[{id:"body",kind:"core",hp:9999,off:O(0,0,0),r:.1},{id:"legs",kind:"engine",hp:10,off:O(0,-.06,0),r:.1}]},hunter:{id:"hunter",name:"Охотник",cls:"M",hp:70,speed:.5,radius:.42,behavior:"thief",reward:14,scale:we,walk:.38,parts:[{id:"body",kind:"core",hp:9999,off:O(0,0,0),r:.17},{id:"head",kind:"sensor",hp:15,off:O(0,.2,.04),r:.09},{id:"arm",kind:"grabber",hp:25,off:O(.16,-.02,.1),r:.08},{id:"legL",kind:"engine",hp:25,off:O(-.09,-.24,0),r:.09},{id:"legR",kind:"engine",hp:25,off:O(.09,-.24,0),r:.09}]},node:{id:"node",name:"Узел щита",cls:"M",hp:70,speed:0,radius:.36,behavior:"node",reward:10,scale:we,parts:[{id:"body",kind:"core",hp:9999,off:O(0,0,0),r:.18},{id:"eye",kind:"sensor",hp:20,off:O(0,0,.14),r:.07}]},nexus:{id:"nexus",name:"Хор-Ядро",cls:"B",hp:700,speed:.3,radius:1,behavior:"core",reward:400,scale:we*1.5,parts:[{id:"body",kind:"core",hp:9999,off:O(0,0,0),r:.6}]}},bv=[{name:"Первый Разлом",hint:"Мара: жуки идут за грузом. Короткими очередями — зенитка греется.",spawns:[0,1.6,3.2,4.8].map(i=>({t:i,enemy:"scout"}))},{name:"Искры",hint:"Мара: искры — шустрые воришки. Сбитая искра взрывается и задевает соседей.",spawns:[{t:0,enemy:"scout"},{t:1.2,enemy:"spark"},{t:2.4,enemy:"scout"},{t:3.6,enemy:"spark"},{t:4.8,enemy:"scout"},{t:6,enemy:"scout"}]},{name:"Хваталки",hint:"Мара: хваталка тяжёлая. Бей по руке — груз упадёт.",spawns:[{t:0,enemy:"grabber"},{t:2,enemy:"scout"},{t:3,enemy:"scout"},{t:5,enemy:"grabber"},{t:6,enemy:"scout"}]},{name:"Огонь на поражение",hint:"Мара: стрелок бьёт сгустками. Сгусток можно сбить!",spawns:[{t:0,enemy:"shooter"},{t:2,enemy:"spark"},{t:3,enemy:"spark"},{t:4,enemy:"scout"},{t:5.5,enemy:"spark"},{t:7,enemy:"scout"}]},{name:"Последний натиск",hint:"Мара: всё сразу. Держись, Оператор.",spawns:[{t:0,enemy:"shooter"},{t:1,enemy:"grabber"},{t:2,enemy:"spark"},{t:3,enemy:"spark"},{t:4,enemy:"scout"},{t:5,enemy:"scout"},{t:6,enemy:"grabber"},{t:7.5,enemy:"spark"},{t:9,enemy:"scout"}]}],Sv=[{name:"Разведка боем",hint:"Мара: Хор перешёл от разведки к сбору. Не дай им зацепиться за груз.",spawns:[0,1,2,3,4,5].map(i=>({t:i,enemy:"scout"}))},{name:"Хваталки",hint:"Мара: две хваталки сразу. Руки — их слабое место.",spawns:[{t:0,enemy:"grabber"},{t:1.5,enemy:"grabber"},{t:3,enemy:"scout"},{t:4,enemy:"scout"}]},{name:"Щиты",hint:"Мара: щитоносец! Зенитка в лоб его не берёт — разбей щит или пусти ракету.",spawns:[{t:0,enemy:"shield"},{t:1,enemy:"spark"},{t:2,enemy:"spark"},{t:4,enemy:"shield"},{t:5,enemy:"spark"}]},{name:"Перекрёстный огонь",hint:"Мара: два стрелка. Сгустки сбиваются — следи за красными стрелками.",spawns:[{t:0,enemy:"shooter"},{t:2,enemy:"shooter"},{t:4,enemy:"scout"},{t:5,enemy:"scout"}]},{name:"Бомбардиры",hint:"Мара: бомбардир сбрасывает мины на груз. Мины сбиваются в воздухе!",spawns:[{t:0,enemy:"bomber"},{t:3,enemy:"scout"},{t:4,enemy:"scout"},{t:6,enemy:"bomber"}]},{name:"Сбор урожая",hint:"Мара: они идут за всем сразу.",spawns:[{t:0,enemy:"grabber"},{t:1,enemy:"scout"},{t:2,enemy:"scout"},{t:3,enemy:"grabber"},{t:4,enemy:"spark"},{t:5,enemy:"spark"},{t:6,enemy:"scout"}]},{name:"Огневой вал",hint:"Мара: стрелки прикрывают воров. Сначала воры — груз важнее.",spawns:[{t:0,enemy:"shooter"},{t:1,enemy:"grabber"},{t:2,enemy:"scout"},{t:3,enemy:"spark"},{t:4,enemy:"shooter"},{t:5,enemy:"scout"},{t:6,enemy:"spark"}]},{name:"Последний сбор",hint:"Мара: финальная волна сектора. Держись!",spawns:[{t:0,enemy:"grabber"},{t:.5,enemy:"shooter"},{t:1.5,enemy:"shield"},{t:2.5,enemy:"scout"},{t:3.5,enemy:"bomber"},{t:4.5,enemy:"spark"},{t:5.5,enemy:"scout"},{t:6.5,enemy:"shooter"},{t:7.5,enemy:"spark"},{t:8.5,enemy:"grabber"}]}],wv=[{name:"Сумерки",hint:"Мара: ночью Хор тише. Прыгун мерцает перед скачком — лови момент.",spawns:[{t:0,enemy:"scout"},{t:1,enemy:"jumper"},{t:3,enemy:"scout"},{t:4.5,enemy:"jumper"}]},{name:"Помехи",hint:"Мара: глушитель! Его импульс отключает ракеты и ЭМИ. Сбивай антенну.",spawns:[{t:0,enemy:"jammer"},{t:1.5,enemy:"shooter"},{t:3,enemy:"scout"},{t:4,enemy:"scout"}]},{name:"Ремонт",hint:"Мара: ремонтник чинит своих. Его — первым, иначе всё зря.",spawns:[{t:0,enemy:"shield"},{t:1,enemy:"repair"},{t:2.5,enemy:"grabber"},{t:4,enemy:"spark"}]},{name:"Скачки",hint:"Мара: три прыгуна. Они уходят рывками — не жди, пока доберутся до груза.",spawns:[{t:0,enemy:"jumper"},{t:1.2,enemy:"jumper"},{t:2.4,enemy:"jumper"},{t:4,enemy:"scout"},{t:5,enemy:"scout"}]},{name:"Призраки",hint:"Мара: призрак невидим, только дрожит воздух. ЭМИ его проявит — или жди, пока сам покажется.",spawns:[{t:0,enemy:"ghost"},{t:2,enemy:"scout"},{t:3,enemy:"scout"},{t:5,enemy:"ghost"}]},{name:"Признание",hint:"Мара: …я должна сказать. Я была частью Хора. Сбежала, когда поняла, что они «собирают» людей.",spawns:[{t:0,enemy:"jammer"},{t:1,enemy:"ghost"},{t:2,enemy:"repair"},{t:3,enemy:"grabber"},{t:4.5,enemy:"jumper"}]},{name:"Глухая ночь",hint:"Мара: я знаю их тактику изнутри. Сейчас пойдут все сразу.",spawns:[{t:0,enemy:"shooter"},{t:1,enemy:"jumper"},{t:2,enemy:"ghost"},{t:3,enemy:"jammer"},{t:4,enemy:"spark"},{t:5,enemy:"repair"},{t:6,enemy:"shield"},{t:7,enemy:"scout"}]},{name:"Сборщик",hint:"Мара: Сборщик. Невидим, но выдаёт себя, когда стреляет. Генератор сверху — его слабость.",spawns:[{t:0,enemy:"collector"},{t:3,enemy:"scout"},{t:5,enemy:"scout"}]}],Ev=[{name:"Спуск",hint:"Мара: танк-краб лезет из пола. Панцирь спереди держит зенитку — ракету в него или бей по ногам, когда панцирь треснет.",spawns:[{t:0,enemy:"crab"},{t:2,enemy:"scout"},{t:3.5,enemy:"scout"}]},{name:"Гарпуны",hint:"Мара: гарпунщик тянет груз тросом. Перебей трос очередью — груз упадёт.",spawns:[{t:0,enemy:"harpooner"},{t:1.5,enemy:"grabber"},{t:3,enemy:"scout"},{t:4,enemy:"scout"}]},{name:"Улей",hint:"Мара: рой-матка выпускает жуков. Мешки-инкубаторы снизу — лопни их, и выводок кончится.",spawns:[{t:0,enemy:"hive"},{t:2,enemy:"shooter"},{t:4,enemy:"spark"}]},{name:"Сапёры",hint:"Мара: сапёр несёт огромный заряд. Сбей его издалека — взрыв заденет соседей.",spawns:[{t:0,enemy:"sapper"},{t:1,enemy:"spark"},{t:2,enemy:"spark"},{t:3.5,enemy:"sapper"},{t:5,enemy:"shield"}]},{name:"Кислота",hint:"Мара: кислотник плюётся в стекло — пятна мешают видеть. Плевок можно сбить, а лучше рот.",spawns:[{t:0,enemy:"spitter"},{t:1.5,enemy:"jumper"},{t:3,enemy:"scout"},{t:4.5,enemy:"spitter"}]},{name:"Шаги",hint:"Мара: Левиафан! Он давит груз. Ноги — его слабость: без ног он рухнет.",spawns:[{t:0,enemy:"leviathan"},{t:3,enemy:"scout"},{t:5,enemy:"scout"}]},{name:"Тяжёлая смена",hint:"Мара: все тяжёлые сразу. Сначала тросы и воры — груз важнее.",spawns:[{t:0,enemy:"crab"},{t:3,enemy:"harpooner"},{t:7,enemy:"spitter"},{t:10,enemy:"sapper"},{t:14,enemy:"hive"}]},{name:"Жнец",hint:"Мара: Жнец пробил потолок! Пушки, трюм и двигатели — бей по частям.",spawns:[{t:0,enemy:"reaper"},{t:3,enemy:"scout"},{t:5,enemy:"spark"}]}],Tv=[{name:"По ту сторону",hint:"Мара: мы на их корабле — Хор затаскивает груз сюда. Пауки ползут по полу, мотыльки ускоряют остальных воров.",spawns:[{t:0,enemy:"spider"},{t:1,enemy:"moth"},{t:2,enemy:"spider"},{t:3.5,enemy:"scout"},{t:4.5,enemy:"spider"}]},{name:"Клещи",hint:"Мара: клещ прыжками добирается до груза и прилипает. Сбей его за 5 секунд — груз не пострадает.",spawns:[{t:0,enemy:"tick"},{t:1.5,enemy:"tick"},{t:3,enemy:"moth"},{t:4,enemy:"scout"}]},{name:"Болтуны",hint:"Мара: болтун катит груз по полу к порталу. Бока бронированы — бей в люк сверху.",spawns:[{t:0,enemy:"roller"},{t:2,enemy:"spider"},{t:3.5,enemy:"roller"},{t:5,enemy:"spark"}]},{name:"Охотники",hint:"Мара: охотник уносит груз пешком. Голова-сенсор — двойной урон, руку можно отстрелить.",spawns:[{t:0,enemy:"hunter"},{t:2,enemy:"moth"},{t:3,enemy:"hunter"},{t:5,enemy:"tick"}]},{name:"Конвейер",hint:"Мара: Хор тащит всё подряд. Воры с грузом — в первую очередь.",spawns:[{t:0,enemy:"grabber"},{t:1,enemy:"spider"},{t:2,enemy:"moth"},{t:3,enemy:"jumper"},{t:4.5,enemy:"roller"},{t:6,enemy:"crab"},{t:7.5,enemy:"tick"}]},{name:"Охрана корабля",hint:"Мара: охрана Ядра. Глушитель и ремонтник — первыми.",spawns:[{t:0,enemy:"jammer"},{t:1.5,enemy:"repair"},{t:3,enemy:"shooter"},{t:4.5,enemy:"ghost"},{t:6,enemy:"harpooner"},{t:8,enemy:"spider"}]},{name:"Последний рубеж",hint:"Мара: всё, что у них осталось. Держись, Оператор-7.",spawns:[{t:0,enemy:"hunter"},{t:1.5,enemy:"spitter"},{t:3,enemy:"moth"},{t:4.5,enemy:"sapper"},{t:6,enemy:"roller"},{t:7.5,enemy:"bomber"},{t:9,enemy:"tick"},{t:10.5,enemy:"scout"}]},{name:"Хор-Ядро",hint:"Мара: Ядро. Это сердце Хора. Узлы щита — вокруг тебя, по сторонам. Сбей их и бей в Ядро.",spawns:[{t:0,enemy:"nexus"}]}],ri=[{id:1,name:"Гостиная",title:"Первый Разлом",boss:!1,waves:bv,briefing:"Разлом открылся у тебя дома. Это разведчики Хора — мелкие, но цепкие. Расставь груз перед собой и не дай утащить его в порталы."},{id:2,name:"Кухня",title:"Сбор урожая",boss:!1,waves:Sv,briefing:"Хор перешёл от разведки к сбору. Хваталки поднимают груз манипулятором — отстрели руку, и груз упадёт целым. Стрелков бей первыми, пока не разбили стекло.",recommend:"rockets"},{id:3,name:"Спальня",title:"Тишина",boss:!0,waves:wv,briefing:"Ночь. Хор пришёл тихо: невидимки, прыгуны, глушители. Глушитель отключает доп. оружие — сбивай его первым. Призраков проявляет ЭМИ. В конце — Сборщик.",recommend:"emp"},{id:4,name:"Подвал",title:"Глубокий Разлом",boss:!0,waves:Ev,briefing:"Разлом ушёл вглубь. Хор подогнал тяжёлую технику: она лезет прямо из пола. Тросы гарпунов перебиваются, кислоту на стекле переживёшь. В конце — Жнец, корабль-тягач.",recommend:"rockets"},{id:5,name:"Орбита",title:"Ядро",boss:!0,waves:Tv,briefing:"Портал ведёт на корабль Хора. Здесь все их машины — и Хор-Ядро, сердце флота. Его щит питают узлы вокруг тебя: сбей их, и Ядро откроется. Это последний бой.",recommend:"emp"}],Bn=[{id:"flak",name:"Зенитка",icon:"⁂",price:0,ready:!0,desc:"Спаренная автоматическая пушка. Держи «ОГОНЬ» — очередь; перегревается.",best:"лёгкие цели, сгустки"},{id:"rockets",name:"Ракеты «Копьё»",icon:"R",price:250,ready:!0,desc:"Держи кнопку ракет и прицел на цели 0,6 с — захват. Отпусти — самонаводящаяся ракета, урон по площади.",best:"хваталки, стрелки, группы"},{id:"emp",name:"ЭМИ-импульс",icon:"◎",price:300,ready:!0,desc:"Оглушает всех врагов в поле зрения и сбивает сгустки.",best:"рой, стрелки"},{id:"laser",name:"Лазер «Луч»",icon:"≈",price:400,ready:!0,desc:"Держи кнопку — непрерывный луч по прицелу. Режет броню и щиты, сжигает сгустки и тросы. Свой перегрев.",best:"броня, щиты, тяжёлые"},{id:"tesla",name:"Молния «Тесла»",icon:"ϟ",price:450,ready:!0,desc:"Коснись — молния бьёт в цель у прицела и перескакивает на соседей (3–6 звеньев), на миг оглушая их. Перезарядка 6 с.",best:"рой, мелочь"},{id:"drone",name:"Дрон «Оса»",icon:"✦",price:500,ready:!0,unlockSector:3,desc:"Помощник кружит рядом и сам стреляет — первым делом по ворам с грузом. Помехи глушителя его выключают.",best:"воры, мелочь"}],ks=[{key:"flak.damage",group:"flak",name:"Урон",values:[8,10,12,14,16,18],costs:[120,200,320,480,700],fmt:i=>`${i} за попадание`},{key:"flak.rate",group:"flak",name:"Скорострельность",values:[9,10.5,12,13.5,15,16.5],costs:[90,160,260,400,600],fmt:i=>`${i} выстр/с`},{key:"flak.cooling",group:"flak",name:"Охлаждение",values:[20,25,30,36,42,50],costs:[60,120,200,320,480],fmt:i=>`${i} ед/с`},{key:"flak.spread",group:"flak",name:"Кучность",values:[.012,.01,.0085,.007,.006,.005],costs:[50,100,180,280,420],fmt:i=>`разброс ${(i*57.3).toFixed(2)}°`},{key:"rockets.ammo",group:"weap",requires:"rockets",name:"Ракеты: боезапас",values:[4,5,6,7,8,10],costs:[120,200,320,480,700],fmt:i=>`${i} за бой`},{key:"emp.cooldown",group:"weap",requires:"emp",name:"ЭМИ: перезарядка",values:[18,15,13,11,9,7],costs:[120,200,320,480,700],fmt:i=>`${i} с`},{key:"laser.power",group:"weap",requires:"laser",name:"Лазер: мощность",values:[40,48,56,64,72,85],costs:[140,220,340,500,720],fmt:i=>`${i} урона/с`},{key:"tesla.links",group:"weap",requires:"tesla",name:"Тесла: звенья",values:[3,4,4,5,5,6],costs:[140,220,340,500,720],fmt:i=>`${i} целей`},{key:"drone.damage",group:"weap",requires:"drone",name:"Дрон: урон",values:[6,7,8,9,10,12],costs:[140,220,340,500,720],fmt:i=>`${i} за выстрел`},{key:"flak.incendiary",group:"flak",currency:"cores",name:"◈ Зажигательные снаряды",values:[1,1.2,1.4,1.6],costs:[2,3,5],fmt:i=>`урон ×${i}`},{key:"hull.regen",group:"hull",currency:"cores",name:"◈ Самозаживление стекла",values:[0,.4,.8,1.2],costs:[2,3,5],fmt:i=>i?`+${i} корпуса/с`:"нет"},{key:"hull.armor",group:"hull",name:"Броня стекла",values:[100,115,130,145,160,180],costs:[100,180,300,460,680],fmt:i=>`корпус ${i}`}],Ui=[{n:1,name:"Жук-скаут",cls:"L",enemyId:"scout",desc:"Летит к ближайшему грузу, хватает и уносит в портал.",weak:"Крылья: сбей одно — замедлится, оба — упадёт."},{n:2,name:"Искра",cls:"L",enemyId:"spark",desc:"Самый быстрый воришка: хватает груз и мчится к порталу.",weak:"Сбитая взрывается и задевает соседей. Без стабилизатора падает."},{n:3,name:"Паук-крадун",cls:"L",enemyId:"spider",desc:"Ползёт по полу к грузу и утаскивает его в портал в полу.",weak:"Тонкие ноги: без них еле ползёт."},{n:4,name:"Мотылёк",cls:"L",enemyId:"moth",desc:"Мечется зигзагом; пока жив, остальные воры летят быстрее.",weak:"Хрупкий — одна очередь. Трудно поймать в прицел."},{n:5,name:"Болтун",cls:"L",enemyId:"roller",desc:"Катится шаром по полу и толкает груз к порталу.",weak:"Бока бронированы — бей в люк сверху."},{n:6,name:"Клещ",cls:"L",enemyId:"tick",desc:"Прыжками добирается до груза, прилипает и через 5 с исчезает вместе с ним.",weak:"Сбей, пока сидит на грузе, — груз не пострадает."},{n:7,name:"Охотник",cls:"M",enemyId:"hunter",desc:"Двуногий шагоход: уносит груз пешком.",weak:"Голова-сенсор — двойной урон; рука роняет груз."},{n:8,name:"Хваталка",cls:"M",enemyId:"grabber",desc:"Подлетает к грузу и поднимает его манипулятором. Медленная, но крепкая.",weak:"Рука — груз упадёт целым. Глаз-сенсор — двойной урон."},{n:9,name:"Стрелок",cls:"M",enemyId:"shooter",desc:"Висит перед тобой и стреляет сгустками в стекло.",weak:"Пушка — без неё идёт на таран. Сгустки можно сбить."},{n:10,name:"Щитоносец",cls:"M",enemyId:"shield",desc:"Медленно идёт на таран, закрыт фронтальным щитом. Таран сильнее искры.",weak:"Ракеты пробивают щит; щит можно разбить очередями."},{n:11,name:"Бомбардир",cls:"M",enemyId:"bomber",desc:"Зависает над грузом и сбрасывает мины — мина у груза уничтожает его.",weak:"Мины сбиваются в воздухе; отсек с минами — без него улетает."},{n:12,name:"Глушитель",cls:"M",enemyId:"jammer",desc:"Висит впереди и раз в 7 с бьёт импульсом помех: ракеты и ЭМИ отключаются на 3,5 с.",weak:"Антенна-тарелка — без неё улетает."},{n:13,name:"Ремонтник",cls:"M",enemyId:"repair",desc:"Летит к самому побитому союзнику и чинит его лучом.",weak:"Излучатель снизу. Сбивать первым."},{n:14,name:"Прыгун",cls:"M",enemyId:"jumper",desc:"Вор, который рывками телепортируется к грузу и к порталу.",weak:"Мерцает перед прыжком; ядро спереди — двойной урон."},{n:15,name:"Танк-краб",cls:"H",enemyId:"crab",desc:"Лезет из пола и ползёт к грузу; панцирь спереди держит зенитку. Груз уносит на спине.",weak:"Ракеты пробивают панцирь; ноги и клешня — уязвимы."},{n:16,name:"Гарпунщик",cls:"H",enemyId:"harpooner",desc:"Висит поодаль и тянет груз гарпуном, потом уносит в портал.",weak:"Трос перебивается очередью; гарпун-пушка снизу."},{n:17,name:"Рой-матка",cls:"H",enemyId:"hive",desc:"Держится далеко и каждые 7 с выпускает жуков.",weak:"Мешки-инкубаторы снизу: лопнут оба — выводок кончится."},{n:18,name:"Сапёр",cls:"H",enemyId:"sapper",desc:"Медленно летит к стеклу с огромным зарядом; таран — 35 урона.",weak:"Сбей издалека: взрыв бьёт по соседям. Заряд спереди — двойной урон."},{n:19,name:"Кислотник",cls:"H",enemyId:"spitter",desc:"Плюёт кислотой в стекло — пятна мешают видеть.",weak:"Плевок сбивается; без рта улетает."},{n:20,name:"Призрак",cls:"H",enemyId:"ghost",desc:"Невидимый вор: виден лишь пару секунд, с грузом — проявляется.",weak:"ЭМИ снимает невидимость; генератор сверху — и он больше не скроется."},{n:21,name:"Левиафан",cls:"H",enemyId:"leviathan",desc:"Гигант из пола: идёт к грузу и давит его; шаги трясут экран.",weak:"Ноги: без всех четырёх рухнет. Голова — двойной урон."},{n:22,name:"Жнец",cls:"B",enemyId:"reaper",desc:"Босс подвала: корабль-тягач. Залпы, луч-захват груза в трюм, вызов тяжёлых.",weak:"Пушки, трюм (останавливает луч) и двигатели — отдельные цели."},{n:23,name:"Сборщик",cls:"B",enemyId:"collector",desc:"Босс спальни: скрыт и меняет позицию, проявляется ради залпа, зовёт подмогу.",weak:"Генератор невидимости сверху (двойной урон); пушки по бокам."},{n:24,name:"Хор-Ядро",cls:"B",enemyId:"nexus",desc:"Сердце флота Хора. Щит держится, пока живы узлы вокруг тебя. Открывает все порталы разом.",weak:"Узлы щита: сбей все — Ядро открыто 14 секунд."}],od="rubezh.save.v1";function cd(){return{v:1,crystals:0,cores:0,sectors:{},unlocked:1,owned:["flak"],loadout:[null,null],upgrades:{},seen:{},settings:{cracks:1,lefty:!1,vibration:!0,volume:.6,cockpit:!0,lowfx:!1},kits:0}}function ld(){try{return window.localStorage}catch{return null}}function Av(i=ld()){const t=cd();if(!i)return t;try{const e=i.getItem(od);if(e){const s=JSON.parse(e);return{...t,...s,settings:{...t.settings,...s.settings??{}}}}const n=Number(i.getItem("rubezh.crystals")??0);n>0&&(t.crystals=n)}catch{}return t}function Ea(i,t=ld()){try{t==null||t.setItem(od,JSON.stringify(i))}catch{}}function ar(i,t){return i.upgrades[t]??0}function nn(i,t){const e=ks.find(n=>n.key===t);return e.values[Math.min(ar(i,t),e.values.length-1)]}function Ic(i,t){const e=ks.find(s=>s.key===t),n=ar(i,t);return n<e.costs.length?e.costs[n]:null}function Dc(i,t){const e=Ic(i,t),n=ks.find(s=>s.key===t);return e!==null&&(n.currency==="cores"?i.cores:i.crystals)>=e}function Rv(i,t){const e=Ic(i,t);return e===null||!Dc(i,t)?!1:(ks.find(n=>n.key===t).currency==="cores"?i.cores-=e:i.crystals-=e,i.upgrades[t]=ar(i,t)+1,!0)}function Cv(i,t){const e=Bn.find(s=>s.id===t);if(!e||i.owned.includes(t)||i.crystals<e.price||e.unlockSector&&i.unlocked<e.unlockSector)return!1;i.crystals-=e.price,i.owned.push(t);const n=i.loadout.indexOf(null);return n>=0&&e.ready&&(i.loadout[n]=t),!0}function Pv(i){return{damage:nn(i,"flak.damage")*nn(i,"flak.incendiary"),rate:nn(i,"flak.rate"),cooling:nn(i,"flak.cooling"),spread:nn(i,"flak.spread")}}function Lv(i){const t=e=>i.loadout.includes(e)&&i.owned.includes(e)&&!!Bn.find(n=>n.id===e&&n.ready);return{...t("rockets")?{rockets:{ammo:nn(i,"rockets.ammo")}}:{},...t("emp")?{emp:{cooldown:nn(i,"emp.cooldown")}}:{},...t("laser")?{laser:{dps:nn(i,"laser.power")}}:{},...t("tesla")?{tesla:{links:nn(i,"tesla.links")}}:{},...t("drone")?{drone:{damage:nn(i,"drone.damage")}}:{}}}function Iv(i){return nn(i,"hull.armor")}function Dv(i){return nn(i,"hull.regen")}function Uv(i,t,e,n){return i?1+(t>=e?1:0)+(n>=.6?1:0):0}function hd(i,t){var r,a;const e=i.sectors[t.sector],n=t.win&&!(e&&e.stars>0),s=t.win?n?60*t.sector:15*t.sector:0;if(i.crystals+=t.crystals+s,i.cores+=t.cores??0,i.sectors[t.sector]={stars:Math.max((e==null?void 0:e.stars)??0,t.stars),bestWave:Math.max((e==null?void 0:e.bestWave)??0,t.wavesDone)},t.win){const o=ri.find(c=>c.id===t.sector+1);o&&(i.unlocked=Math.max(i.unlocked,o.id))}for(const o of t.seen)(r=i.seen)[o]??(r[o]={kills:0,first:`Сектор ${t.sector}`});for(const[o,c]of Object.entries(t.kills))(a=i.seen)[o]??(a[o]={kills:0,first:`Сектор ${t.sector}`}),i.seen[o].kills+=c;return{bonus:s,firstWin:n}}const ni={price:60,max:3,heal:35};function Nv(i){return i.kits>=ni.max||i.crystals<ni.price?!1:(i.crystals-=ni.price,i.kits++,!0)}const ah=["Разломы стабилизируются. Хор вернётся — будь готов.","Хваталки любят кристаллы. Береги их.","Стрелки бьют по стеклу. Сгустки можно сбить зениткой.","Чем больше груза спасёшь, тем больше звёзд.","Ангар открыт. Улучшения не помешают."],kv={scout:"e-scout",spark:"e-spark",grabber:"e-grabber",shooter:"e-shooter",shield:"e-shield",bomber:"e-bomber",jammer:"e-jammer",repair:"e-repair",jumper:"e-jumper",ghost:"e-ghost",collector:"e-collector",crab:"e-crab",harpooner:"e-harpooner",hive:"e-hive",sapper:"e-sapper",spitter:"e-spitter",leviathan:"e-leviathan",reaper:"e-reaper",spider:"e-spider",moth:"e-moth",roller:"e-roller",tick:"e-tick",hunter:"e-hunter",nexus:"e-nexus",node:"e-nexus"},Zr=(i,t="eicon")=>`<svg class="${t}" viewBox="0 0 60 40"><use href="#${i?kv[i]??"e-unknown":"e-unknown"}"/></svg>`,Qr=i=>i.id==="rockets"?'<svg class="wicon" viewBox="0 0 24 24"><use href="#w-rocket"/></svg>':`<span class="wicon">${i.icon}</span>`,Fv=i=>`<span class="stars">${"★".repeat(i)}<span class="off">${"★".repeat(3-i)}</span></span>`,Ov=(i,t)=>`<span class="pips">${"●".repeat(i)}<span class="o">${"●".repeat(t-i)}</span></span>`,zv=i=>i.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);class Bv{constructor(t,e,n){$(this,"arStatus","Проверяю AR…");$(this,"arOk",!1);$(this,"camOk",!1);$(this,"cur","menu");$(this,"sector",1);$(this,"sel","");$(this,"tab","flak");$(this,"mara",ah[Math.floor(Math.random()*ah.length)]);this.root=t,this.save=e,this.hooks=n,t.addEventListener("click",s=>this.onClick(s)),t.addEventListener("input",s=>this.onInput(s))}show(t=this.cur,e){this.cur=t,t==="briefing"&&typeof e=="number"&&(this.sector=e),(t==="arsenal"||t==="bestiary")&&typeof e=="string"&&(this.sel=e),this.root.style.display="",this.root.innerHTML=this.render(),this.root.scrollTop=0}hide(){this.root.style.display="none"}persist(){Ea(this.save)}nextSector(){const t=ri.filter(e=>e.waves&&e.id<=this.save.unlocked);return t.find(e=>{var n;return!((n=this.save.sectors[e.id])!=null&&n.stars)})??t[t.length-1]}top(t,e,n=""){return`<div class="s-top">${e?`<button class="pill" data-go="${e}">‹ Назад</button>`:""}<span class="s-title">${t}</span>${n}
      <span class="grow"></span><span class="pill gem">${this.save.crystals}</span><span class="pill core">${this.save.cores}</span></div>`}render(){switch(this.cur){case"splash":return this.splash();case"menu":return this.menu();case"campaign":return this.campaign();case"briefing":return this.briefing();case"arsenal":return this.arsenal();case"hangar":return this.hangar();case"bestiary":return this.bestiary();case"ending":return this.ending();case"settings":return this.settings()}}splash(){return setTimeout(()=>{this.cur==="splash"&&this.show("menu")},2600),`<div class="splash" data-go="menu">
      <svg class="splash-crack" viewBox="0 0 200 90" preserveAspectRatio="none"><g stroke="#fff" stroke-width=".35" fill="none" opacity=".85"><path d="M100 45 L88 30 L80 12 M100 45 L118 36 L140 30 L160 18 M100 45 L110 60 L108 80 M100 45 L82 52 L60 58 L40 70 M100 45 L96 62 L88 75"/><path d="M92 38 L108 40 L106 52 L94 51Z" stroke-width=".2"/></g></svg>
      <div class="splash-glow"></div>
      <svg class="splash-bug" viewBox="0 0 60 40"><use href="#e-scout"/></svg>
      <div class="logo splash-logo">ПОСЛЕДНИЙ РУБЕЖ</div>
      <div class="mute splash-tap">коснись, чтобы продолжить</div>
    </div>`}menu(){var e;const t=this.nextSector();return`<div class="s-bg menu-bg"><div class="portal-deco"></div></div>
      <div class="s-top"><span class="grow"></span><span class="pill gem">${this.save.crystals}</span><span class="pill core">${this.save.cores}</span><button class="pill" data-go="settings">⚙</button></div>
      <div class="menu-main">
        <div class="logo">ПОСЛЕДНИЙ<br>РУБЕЖ</div>
        <div class="mute">Оператор-7 · пройдено секторов: ${Object.values(this.save.sectors).filter(n=>n.stars>0).length} из 5</div>
        <button class="btn big" data-go="briefing" data-arg="${t.id}">▶ В БОЙ · Сектор ${t.id} «${t.name}»</button>
        <div class="row wrap">
          <button class="btn ghost" data-go="campaign">Кампания</button>
          <button class="btn ghost" data-go="arsenal">Арсенал</button>
          <button class="btn ghost" data-go="hangar">Ангар</button>
          <button class="btn ghost" data-go="bestiary">Бестиарий</button>
          ${(e=this.save.sectors[5])!=null&&e.stars?'<button class="btn ghost" data-go="ending">Финал</button>':""}
        </div>
        <div class="small mute">${zv(this.arStatus)}</div>
      </div>
      <div class="mara-line card"><div class="mara"></div><div><b class="accent">Мара</b><br>«${this.mara}»</div></div>`}campaign(){const t=ri.map(e=>{const n=e.id<=this.save.unlocked&&e.waves,s=this.save.sectors[e.id],r=n&&e.id===this.nextSector().id;return`<div class="card sector ${n?"":"locked"} ${r?"current":""}" ${n?`data-go="briefing" data-arg="${e.id}"`:""}>
        <div class="${r?"accent":"mute"}">Сектор ${e.id}${r?" · сейчас":""}</div>
        <b class="sname">${e.name}</b><div class="mute small">«${e.title}»${e.boss?" · босс":""}</div>
        <div class="sector-pic">${n?'<div class="portal-mini"></div>':'<svg class="lockic" viewBox="0 0 24 24"><use href="#i-lock"/></svg>'}</div>
        ${n?`${Fv((s==null?void 0:s.stars)??0)}<div class="mute small">${s?`рекорд: волна ${s.bestWave}/${e.waves.length}`:`${e.waves.length} волн`}</div>`:`<div class="mute small">${e.waves?`пройди сектор ${e.id-1}`:"в разработке"}</div>`}
      </div>`}).join("");return`<div class="s-bg"></div>${this.top("КАМПАНИЯ","menu")}<div class="sectors">${t}</div>`}briefing(){const t=ri.find(o=>o.id===this.sector),n=[...new Set(t.waves.flatMap(o=>o.spawns.map(c=>c.enemy)))].map(o=>{const c=Ui.find(l=>l.enemyId===o);return`<div class="threat">${Zr(o)}<div><span class="tag ${(c==null?void 0:c.cls)??"L"}">${(c==null?void 0:c.cls)??""}</span> ${Lc[o].name}</div></div>`}).join(""),s=Bn.filter(o=>o.id!=="flak"&&this.save.owned.includes(o.id)&&o.ready),r=o=>{const c=this.save.loadout[o],l=Bn.find(h=>h.id===c);return l?`<div class="card wrow on" data-act="slot" data-arg="${o}">${Qr(l)}<div class="grow"><b>${l.name}</b><div class="mute small">слот ${o+1} · коснись, чтобы сменить</div></div></div>`:`<div class="card wrow dashed" ${s.length?`data-act="slot" data-arg="${o}"`:'data-go="arsenal"'}><span class="wicon mute">+</span><div class="grow mute">${s.length?"Пустой слот — выбрать":"Доп. оружие — купи в Арсенале"}</div><span class="mute small">слот ${o+1}</span></div>`},a=t.recommend?Bn.find(o=>o.id===t.recommend):null;return`<div class="s-bg brief-bg"></div>${this.top(`СЕКТОР ${t.id} · ${t.name.toUpperCase()}`,"campaign")}
      <div class="brief">
        <div class="card pad col">
          <div class="row top"><div class="mara"></div><div><b class="accent">Мара</b><p>«${t.briefing}»</p></div></div>
          <div class="mute">Угрозы сектора</div><div class="threats">${n}</div>
          <div class="mute small push">${t.waves.length} волн · груз: 3–5 · за первое прохождение <span class="gem">${60*t.id}</span></div>
        </div>
        <div class="card pad col">
          <b>Вооружение</b>
          <div class="card wrow">${Qr(Bn[0])}<div class="grow"><b>Зенитка</b><div class="mute small">урон ${nn(this.save,"flak.damage")} · ${nn(this.save,"flak.rate")} выстр/с</div></div></div>
          ${r(0)}${r(1)}
          ${a&&!this.save.owned.includes(a.id)?`<div class="small ok">Мара советует: ${a.name}${a.ready?"":" (скоро)"}</div>`:""}
          ${this.arOk||!this.camOk?`<button class="btn big push" data-act="ar" ${this.arOk?"":"disabled"}>Подготовить комнату ›</button>`:'<button class="btn big push" data-act="cam">Камера + гироскоп ›</button>'}
          ${this.arOk&&this.camOk?'<button class="btn ghost" data-act="cam">Камера + гироскоп (без AR)</button>':""}
          <button class="btn ghost" data-act="demo">Тест без камеры</button>
        </div>
      </div>`}arsenal(){const t=Bn.find(a=>a.id===this.sel)??Bn[1],e=Bn.map(a=>{const o=this.save.owned.includes(a.id),c=a.unlockSector&&this.save.unlocked<a.unlockSector,l=a.id==="flak"?`<span class="ok">ур. ${ar(this.save,"flak.damage")+1}</span>`:o?'<span class="ok">куплено</span>':c?`<span class="mute">сектор ${a.unlockSector}</span>`:`<span class="gem">${a.price}</span>`;return`<div class="card wrow ${a.id===t.id?"on":""} ${c?"locked":""}" data-go="arsenal" data-arg="${a.id}">${Qr(a)}<b class="grow">${a.name}</b>${l}</div>`}).join(""),n=this.save.owned.includes(t.id),s=t.unlockSector&&this.save.unlocked<t.unlockSector,r=n?t.id==="flak"?'<button class="btn" data-go="hangar">Улучшить в Ангаре ›</button>':'<button class="btn" disabled>Куплено</button>':s?`<button class="btn" disabled>Откроется в секторе ${t.unlockSector}</button>`:`<button class="btn big" data-act="buyw" data-arg="${t.id}" ${this.save.crystals<t.price?"disabled":""}>Купить · ◆ ${t.price}</button>`;return`<div class="s-bg"></div>${this.top("АРСЕНАЛ","menu")}
      <div class="split"><div class="col list">${e}</div>
        <div class="card pad col">
          <div class="row"><span class="wbig">${Qr(t)}</span><div><b class="sname">${t.name}</b>${t.ready?"":'<div class="tag M">скоро в бою</div>'}</div></div>
          <div class="mute">${t.desc}</div>
          <div>Лучше против: <b>${t.best}</b></div>
          <div class="push">${r}</div>
        </div></div>`}hangar(){const t=ks.filter(r=>r.group===this.tab&&(!r.requires||this.save.owned.includes(r.requires))),e=(t.length?"":'<div class="card pad mute">Купи доп. оружие в Арсенале — здесь появятся его улучшения.</div>')+t.map(r=>{const a=ar(this.save,r.key),o=r.costs.length,c=Ic(this.save,r.key),l=r.values[a],h=c!==null?r.values[a+1]:null;return`<div class="card urow"><div class="grow"><b>${r.name}</b><div class="mute small">${r.fmt(l)}${h!==null?` → ${r.fmt(h)}`:""}</div></div>
        ${Ov(a,o)}${c===null?'<button class="btn" disabled>МАКС</button>':`<button class="btn" data-act="buyu" data-arg="${r.key}" ${Dc(this.save,r.key)?"":"disabled"}>${r.currency==="cores"?"◈":"◆"} ${c}</button>`}</div>`}).join("")+(this.tab==="hull"?`<div class="card urow"><div class="grow"><b>Ремкомплект</b><div class="mute small">между волнами: +${ni.heal} корпуса и трещины затягиваются · в запасе ${this.save.kits}/${ni.max}</div></div>
        <button class="btn" data-act="buykit" ${this.save.kits>=ni.max||this.save.crystals<ni.price?"disabled":""}>◆ ${ni.price}</button></div>`:""),n=`<div class="tabs"><span class="${this.tab==="flak"?"on":""}" data-act="tab" data-arg="flak">Зенитка</span><span class="${this.tab==="weap"?"on":""}" data-act="tab" data-arg="weap">Оружие</span><span class="${this.tab==="hull"?"on":""}" data-act="tab" data-arg="hull">Корпус</span></div>`,s=this.tab==="weap"?'<svg viewBox="0 0 24 24" class="hpic" style="max-width:40%"><use href="#w-rocket"/></svg><div class="mute">ДОП. ОРУЖИЕ</div>':this.tab==="flak"?'<svg viewBox="0 0 120 80" class="hpic"><g fill="#2a323c" stroke="#5a6878" stroke-width=".6"><rect x="20" y="44" width="80" height="16" rx="3"/><rect x="34" y="34" width="20" height="12" rx="2"/><rect x="66" y="34" width="20" height="12" rx="2"/></g><g fill="#7b8794"><rect x="41" y="8" width="5" height="28" rx="2"/><rect x="74" y="8" width="5" height="28" rx="2"/></g><rect x="30" y="50" width="60" height="2" fill="#38e1ff"/></svg><div class="mute">ЗЕНИТКА</div>':`<svg viewBox="0 0 120 80" class="hpic"><path d="M10 10 H110 V70 H10Z" fill="#9ef1" stroke="#38e1ff" stroke-width="1.5"/><path d="M60 40 L48 26 M60 40 L76 30 M60 40 L66 58 M60 40 L44 50" stroke="#fff8" stroke-width=".8"/></svg><div class="mute">БРОНЯ СТЕКЛА · корпус ${nn(this.save,"hull.armor")}</div>`;return`<div class="s-bg"></div>${this.top("АНГАР","menu",n)}
      <div class="split"><div class="card pad center col">${s}</div><div class="col list">${e}</div></div>`}ending(){const t=this.save.ending,e=t?t==="close"?`<p>«Разломы закрываются один за другим. В комнатах снова тихо — просто комнаты.»</p>
           <p>«Колонисты возвращаются домой. Я… остаюсь с той стороны. Не грусти, Оператор-7. Ты сделал то, ради чего тебя звали Рубежом.»</p>
           <p class="accent">Связь потеряна. Земля свободна.</p>`:`<p>«Технология Ядра у нас. Энергия, щиты, порталы — всё, чем Хор нас „инвентаризировал“.»</p>
           <p>«Один Разлом остаётся открытым. Пусть Хор знает: теперь за ним следят с этой стороны. Я рядом, Оператор-7. Мы только начали.»</p>
           <p class="accent">Рубеж стоит. Разлом под охраной.</p>`:`<p>«Ядро разбито. Флот Хора ослеп — без него Разломы держатся на честном слове. Я могу сделать одно из двух, Оператор.»</p>
         <p>«Схлопнуть все Разломы разом. Хор никогда не найдёт дорогу обратно — и я тоже: часть меня останется по ту сторону.»</p>
         <p>«Или оставить один Разлом открытым и забрать технологию Ядра. С ней Земля перестанет быть чьим-то складом. Но дверь будет открыта в обе стороны.»</p>
         <div class="row wrap"><button class="btn big" data-act="ending" data-arg="close">Закрыть Разломы</button>
         <button class="btn big ghost" data-act="ending" data-arg="take">Забрать технологию</button></div>`;return`<div class="s-bg menu-bg"><div class="portal-deco"></div></div>${this.top("ФИНАЛ","menu")}
      <div class="card pad col" style="max-width:44em;margin:0 auto">
        <div class="row top"><div class="mara"></div><div><b class="accent">Мара</b>${e}</div></div>
        ${t?`<div class="mute small">Спасибо за игру! Сектора можно перепройти на три звезды, а в Бестиарии — открыть всех ${Ui.length}.</div>
        <div class="row wrap"><button class="btn" data-go="menu">В меню</button><button class="btn ghost" data-act="ending" data-arg="">Выбрать заново</button></div>`:""}
      </div>`}bestiary(){const t=o=>!!(o.enemyId&&this.save.seen[o.enemyId]),e=Ui.filter(t).length,n=Ui.find(o=>String(o.n)===this.sel)??Ui.find(t)??Ui[0],s=Ui.map(o=>`<div class="card cell ${String(o.n)===String(n.n)?"on":""}" data-go="bestiary" data-arg="${o.n}">
      ${Zr(t(o)?o.enemyId:void 0)}<span class="tag ${o.cls}">${t(o)?o.name:o.cls}</span></div>`).join(""),a=t(n)?`<div class="pic">${Zr(n.enemyId,"eicon big")}</div>
         <div class="row"><b class="sname">${n.name}</b><span class="tag ${n.cls}">${{L:"лёгкий",M:"средний",H:"тяжёлый",B:"босс"}[n.cls]}</span></div>
         <div class="mute">${n.desc}</div><div><span class="warn">Слабое место:</span> ${n.weak}</div>
         <div class="mute small push">Сбито: <b>${this.save.seen[n.enemyId].kills}</b> · впервые: ${this.save.seen[n.enemyId].first}</div>`:`<div class="pic">${Zr(void 0,"eicon big")}</div><b class="sname">???</b><div class="mute">Ещё не встречен. Класс: <span class="tag ${n.cls}">${n.cls}</span></div>`;return`<div class="s-bg"></div>${this.top("БЕСТИАРИЙ","menu",`<span class="mute">открыто ${e} / 24</span>`)}
      <div class="split wide"><div class="grid24">${s}</div><div class="card pad col">${a}</div></div>`}settings(){const t=this.save.settings,e=(s,r,a)=>`<label class="row"><span class="grow">${a}</span><input type="checkbox" data-set="${s}" ${r?"checked":""}></label>`,n=(s,r,a)=>`<label class="col">${a}<input type="range" min="0" max="100" value="${Math.round(r*100)}" data-set="${s}"></label>`;return`<div class="s-bg"></div>${this.top("НАСТРОЙКИ","menu")}
      <div class="cols3">
        <div class="card pad col"><b class="accent">Управление</b>${e("lefty",t.lefty,"Левша (кнопки слева)")}${e("vibration",t.vibration,"Вибрация")}</div>
        <div class="card pad col"><b class="accent">Звук</b>${n("volume",t.volume,"Громкость")}</div>
        <div class="card pad col"><b class="accent">Экран</b>${n("cracks",t.cracks,"Сила трещин")}${e("cockpit",t.cockpit,"Каркас кабины")}${e("lowfx",t.lowfx,"Слабые эффекты (меньше вспышек и тряски)")}
          <button class="btn ghost danger push" data-act="reset">Сбросить прогресс</button></div>
      </div>`}onClick(t){const e=t.target.closest("[data-go],[data-act]");if(!e||e.disabled)return;const n=e.dataset.arg;if(e.dataset.go){const s=e.dataset.go;this.show(s,s==="briefing"&&n?Number(n):n);return}switch(e.dataset.act){case"ar":this.hooks.startAR(this.sector);break;case"cam":this.hooks.startCam(this.sector);break;case"demo":this.hooks.startDemo(this.sector);break;case"buyw":n&&Cv(this.save,n)&&(this.persist(),this.show());break;case"buyu":n&&Rv(this.save,n)&&(this.persist(),this.show());break;case"buykit":Nv(this.save)&&(this.persist(),this.show());break;case"tab":this.tab=n,this.show();break;case"ending":this.save.ending=n==="close"||n==="take"?n:void 0,this.persist(),this.show();break;case"slot":{const s=Number(n),a=[null,...Bn.filter(c=>c.id!=="flak"&&c.ready&&this.save.owned.includes(c.id)).map(c=>c.id).filter(c=>!this.save.loadout.includes(c)||this.save.loadout[s]===c)],o=a.indexOf(this.save.loadout[s]);this.save.loadout[s]=a[(o+1)%a.length],this.persist(),this.show();break}case"reset":if(confirm("Сбросить весь прогресс? Кристаллы, улучшения и сектора пропадут.")){const s=this.save.settings;this.save={...cd(),settings:s},this.persist(),this.show("menu")}break}}onInput(t){const e=t.target,n=e.dataset.set;if(!n)return;const s=this.save.settings;s[n]=e.type==="checkbox"?e.checked:Number(e.value)/100,this.persist(),this.hooks.onSettings()}}class Hv{constructor(){$(this,"ctx",null);$(this,"master",null);$(this,"noiseBuf",null);$(this,"lastShot",0);$(this,"volume",.6);$(this,"lis",{x:0,y:0,z:0,dx:0,dz:1});$(this,"pan",0);$(this,"att",1)}listen(t,e){const n=Math.hypot(e.x,e.z)||1;this.lis={x:t.x,y:t.y,z:t.z,dx:e.x/n,dz:e.z/n}}at(t){const e=this.lis,n=t.x-e.x,s=t.z-e.z,r=Math.hypot(n,s,t.y-e.y)||1,a=-e.dz,o=e.dx;return this.pan=Math.max(-1,Math.min(1,(n*a+s*o)/Math.hypot(n,s||1e-6))),this.att=Math.max(.35,Math.min(1,3/r)),queueMicrotask(()=>{this.pan=0,this.att=1}),this}route(t){if(!(!this.ctx||!this.master))if(this.pan!==0&&this.ctx.createStereoPanner){const e=this.ctx.createStereoPanner();e.pan.value=this.pan,t.connect(e).connect(this.master)}else t.connect(this.master)}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}unlock(){if(this.ctx){this.ctx.resume();return}const t=window.AudioContext??window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.volume,this.master.connect(this.ctx.destination);const e=this.ctx.sampleRate;this.noiseBuf=this.ctx.createBuffer(1,e,e);const n=this.noiseBuf.getChannelData(0);for(let s=0;s<e;s++)n[s]=Math.random()*2-1}noise(t,e,n,s,r="lowpass",a){if(!this.ctx||!this.master||!this.noiseBuf)return;const o=this.ctx.currentTime,c=this.ctx.createBufferSource();c.buffer=this.noiseBuf;const l=this.ctx.createBiquadFilter();l.type=r,l.frequency.setValueAtTime(e,o),l.Q.value=n,a&&l.frequency.exponentialRampToValueAtTime(a,o+t);const h=this.ctx.createGain();h.gain.setValueAtTime(s*this.att,o),h.gain.exponentialRampToValueAtTime(.001,o+t),c.connect(l).connect(h),this.route(h),c.start(o,Math.random()*.5,t)}tone(t,e,n,s,r="square"){if(!this.ctx||!this.master)return;const a=this.ctx.currentTime,o=this.ctx.createOscillator();o.type=r,o.frequency.setValueAtTime(t,a),o.frequency.exponentialRampToValueAtTime(e,a+n);const c=this.ctx.createGain();c.gain.setValueAtTime(s*this.att,a),c.gain.exponentialRampToValueAtTime(.001,a+n),o.connect(c),this.route(c),o.start(a),o.stop(a+n)}shot(){const t=performance.now();t-this.lastShot<60||(this.lastShot=t,this.tone(520,120,.07,.08),this.noise(.06,3e3,.7,.12,"highpass"))}hit(){this.tone(900,500,.04,.06,"triangle")}partBreak(){this.noise(.18,1800,1,.3,"bandpass"),this.tone(300,80,.15,.1,"sawtooth")}explosion(t){this.noise(.5+t*.5,900,.5,.5,"lowpass",80),this.tone(110,35,.4+t*.2,.3,"sine")}glass(t){this.noise(.25,6e3,1,.4*t+.15,"highpass"),this.tone(2200,1400,.3,.07+t*.05,"triangle"),this.noise(.5,4e3,6,.1,"bandpass")}alarm(){this.tone(700,500,.25,.12,"sawtooth")}portal(t="in"){t==="in"?this.tone(90,260,.9,.12,"sine"):this.tone(320,140,.7,.1,"sawtooth")}jam(){this.tone(160,900,.5,.08,"square"),this.noise(.4,2500,1,.15,"bandpass")}repair(){this.tone(300,900,.6,.08,"sine"),this.tone(450,1350,.6,.05,"triangle")}zap(){this.noise(.35,3e3,2,.25,"bandpass",600),this.tone(1800,200,.3,.08,"sawtooth")}pew(){this.tone(1400,900,.05,.03,"square")}laserHum(){this.tone(220,240,.12,.035,"sawtooth")}blink(){this.tone(1200,300,.15,.06,"sine")}portalClose(){this.tone(400,60,.35,.08,"sine")}overheat(){this.noise(.5,2500,1,.2,"highpass"),this.tone(300,120,.4,.1,"sawtooth")}lock(){this.tone(1200,1200,.08,.1,"square"),setTimeout(()=>this.tone(1600,1600,.1,.1,"square"),90)}rocket(){this.noise(.6,1200,.8,.35,"bandpass",300),this.tone(200,600,.4,.08,"sawtooth")}emp(){this.tone(60,900,.5,.25,"sine"),this.noise(.6,5e3,2,.2,"highpass")}steal(){this.tone(500,900,.25,.1,"sine")}lost(){this.tone(400,90,.7,.2,"sawtooth")}win(){[0,.15,.3].forEach((t,e)=>setTimeout(()=>this.tone(440*1.25**(e*2),440*1.25**(e*2)*1.01,.4,.15,"triangle"),t*1e3))}}const Ks=new A;function yn(i,t,e,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Ks.copy(t),Ks[n]=0,Ks.normalize();const l=.5*a/(a+o),h=1-Ks.angleTo(i)/c;return Math.sign(Ks[e])===1?h*l:o/(a+o)+l+l*(1-h)}class Vv extends wn{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new A,c=new A,l=new A(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new A,v=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(o.fromArray(h,m),c.copy(o),c.x-=Math.sign(c.x)*v,c.y-=Math.sign(c.y)*v,c.z-=Math.sign(c.z)*v,c.normalize(),h[m+0]=l.x*Math.sign(o.x)+c.x*r,h[m+1]=l.y*Math.sign(o.y)+c.y*r,h[m+2]=l.z*Math.sign(o.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=yn(g,c,"z","y",r,n),d[p+1]=1-yn(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),d[p+0]=1-yn(g,c,"z","y",r,n),d[p+1]=1-yn(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),d[p+0]=1-yn(g,c,"x","z",r,t),d[p+1]=yn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[p+0]=1-yn(g,c,"x","z",r,t),d[p+1]=1-yn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[p+0]=1-yn(g,c,"x","y",r,t),d[p+1]=1-yn(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),d[p+0]=yn(g,c,"x","y",r,t),d[p+1]=1-yn(g,c,"y","x",r,e);break}}}const Gv=6976642,Wv=2041133,Bt=16726831;function rt(i,t=0,e=0,n=.6,s=.45){return new tn({color:i,emissive:t,emissiveIntensity:e,metalness:n,roughness:s})}const ot=(i=Gv)=>rt(i,0,0,.85,.3),Kt=()=>rt(Wv,0,0,.6,.55),oh={color:new Ht(10475775),k:.45};function Xv(i){i.onBeforeCompile=t=>{t.uniforms.rimColor={value:oh.color},t.uniforms.rimK={value:oh.k},t.fragmentShader=`uniform vec3 rimColor;
uniform float rimK;
`+t.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      float rimF = pow(1.0 - clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0), 2.5);
      totalEmissiveRadiance += rimColor * rimF * rimK;`)},i.customProgramCacheKey=()=>"rim"}function $v(i,t){t.traverse(e=>{const n=e.material;n&&n.isMeshStandardMaterial&&(Xv(n),i.mats.push({mat:n,color:n.color.clone(),emissive:n.emissive.clone(),ei:n.emissiveIntensity}))})}function Ct(i,t,e,n,s=0){const r=Math.min(s||Math.min(i,t,e)*.18,Math.min(i,t,e)/2-5e-4);return new I(r>.002?new Vv(i,t,e,2,r):new wn(i,t,e),n)}let ta=null;function qv(){if(ta)return ta;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),ta=new Ng(i),ta}function Te(i,t,e=.85){const n=new Ig(new $h({map:qv(),color:i,transparent:!0,opacity:e,blending:qe,depthWrite:!1}));return n.scale.setScalar(t),n}function Pn(i,t){const e=new et,n=rt(i,i,2.5,0,.3),s=Te(i,t*7,.7);return e.add(new I(new vt(t,8,6),n),s),{obj:e,set:r=>{n.emissiveIntensity=.4+r*2.6,s.material.opacity=.15+r*.6}}}function zn(i,t,e=!1){const n=new et,s=new I(new Lt(i*.8,i,t,14,1,!0),Kt());s.material.side=Ae;const r=new I(new Fe(i*.95,i*.18,6,16).rotateX(Math.PI/2),ot(9082275));r.position.y=t/2;const a=new et,o=new I(new In(i*.75,t*1.3,10).rotateX(Math.PI),rt(10479359,3386111,2.6,0,.3));o.position.y=-t*.95;const c=Te(5618687,i*6,.9);return c.position.y=-t*.7,a.add(o,c),a.userData.fx=!0,n.add(s,r,a),e&&(n.rotation.x=Math.PI/2),{obj:n,flame:a}}function Yv(i){const t={group:new et,parts:{},mats:[],anim:()=>{}},e=(n,s)=>{const r=i.parts.find(a=>a.id===n);return s.position.set(r.off.x,r.off.y,r.off.z),t.group.add(s),t.parts[n]=s,s};if(i.id==="scout"){const n=new et,s=new I(new vt(.1,20,14),ot());s.scale.set(1,.7,1.5);const r=Ct(.006,.075,.28,Kt());r.position.y=.035;const a=new I(new vt(.085,14,10),Kt());a.scale.set(1,.5,1.4),a.position.y=-.03;const o=new I(new Fe(.034,.01,8,16),ot(10134963));o.position.set(0,.01,.142);const c=new I(new vt(.028,12,10),rt(Bt,Bt,2.4,0,.2));c.position.set(0,.01,.14);const l=Te(Bt,.16,.7);l.position.set(0,.01,.17);const h=new I(new In(.03,.12,8),Kt());h.rotation.x=-Math.PI/2,h.position.set(0,0,-.18);const u=new I(new Lt(.003,.003,.09,4),Kt());u.position.set(-.03,.08,.08),u.rotation.set(.6,0,.3);const d=u.clone();d.position.x=.03,d.rotation.z=-.3,n.add(s,r,a,o,c,l,h,u,d);const f=[];for(const x of[-1,1])for(const y of[-.06,0,.06]){const _=new I(new Lt(.004,.003,.08,4),Kt());_.position.set(x*.07,-.05,y),_.rotation.z=x*.7,n.add(_),f.push(_)}e("body",n);const g=()=>new tn({color:8381439,emissive:2271999,emissiveIntensity:.9,metalness:.1,roughness:.15,transparent:!0,opacity:.75,side:Ae}),v=x=>{const y=new et,_=new I(new Qe(.1,16),g());_.scale.set(1,.45,1),_.rotation.x=-Math.PI/2;const C=Ct(.16,.004,.006,Kt());return y.add(_,C),y.position.x=x*0,y},m=v(-1),p=v(1);e("wingL",m),e("wingR",p),t.anim=x=>{const y=Math.sin(x*40)*.5;m.rotation.z=y,p.rotation.z=-y,f.forEach((_,C)=>{_.rotation.x=Math.sin(x*6+C)*.25})}}else if(i.id==="spark"){const n=new et,s=rt(16747050,16733440,1.8,.2,.3),r=new I(new zi(.085,2),s),a=new I(new zi(.11,0),new tn({color:10134963,metalness:.9,roughness:.3,wireframe:!0})),o=Te(16738832,.5,.8);n.add(r,a,o);for(let h=0;h<10;h++){const u=new I(new In(.02,.1,6),ot(9082275)),d=new A(Math.sin(h*2.4),Math.cos(h*1.7),Math.sin(h*3.1)).normalize();u.position.copy(d.clone().multiplyScalar(.12)),u.quaternion.setFromUnitVectors(new A(0,1,0),d),n.add(u)}e("body",n);const c=new et;c.add(Ct(.02,.14,.1,ot()));const l=zn(.03,.06,!0);l.obj.position.z=-.04,c.add(l.obj),e("fin",c),t.anim=h=>{n.rotation.y=h*3,a.rotation.x=h*2;const u=.5+.5*Math.sin(h*14);s.emissiveIntensity=1.2+u*1.2,o.material.opacity=.45+u*.45,l.flame.scale.y=.8+Math.sin(h*40)*.25}}else if(i.id==="grabber"){const n=new et;n.add(Ct(.36,.16,.42,ot(),.04));const s=Ct(.24,.05,.3,ot(9051930),.02);s.position.y=.09;const r=Ct(.37,.025,.06,rt(16761130,5583616,.3,.3,.5),.008);r.position.set(0,.02,.15);const a=Ct(.2,.05,.3,Kt());a.position.y=-.09;const o=[];for(const C of[-.12,-.06,0]){const T=Ct(.12,.008,.02,rt(3346688,16729088,1.2,0,.5));T.position.set(0,.118,C),o.push(T)}const c=Pn(16722474,.012);c.obj.position.set(-.17,.06,-.2);const l=Pn(2817898,.012);l.obj.position.set(.17,.06,-.2),n.add(s,r,a,...o,c.obj,l.obj),e("body",n);const h=new et,u=new I(new vt(.09,16,12),ot()),d=new I(new vt(.075,16,10,-.9,1.8,.9,1),rt(Bt,Bt,2.2,.1,.15));d.scale.setScalar(1.08);const f=Te(Bt,.3,.6);f.position.z=.08,h.add(u,d,f),e("head",h);const g=new et,v=new I(new Lt(.02,.025,.3,10),ot(9082275)),m=new I(new vt(.035,10,8),Kt());m.position.y=.15;const p=new I(new Lt(.035,.035,.03,12),Kt());p.position.y=-.15;const x=Ct(.02,.12,.05,ot(11911116));x.position.set(-.06,-.2,0),x.rotation.z=.35;const y=Ct(.02,.12,.05,ot(11911116));y.position.set(.06,-.2,0),y.rotation.z=-.35,g.add(v,m,p,x,y),e("arm",g);const _=[];for(const C of["thrL","thrR"]){const T=zn(.075,.2);_.push(T.flame),e(C,T.obj)}t.anim=C=>{g.rotation.z=Math.sin(C*2.2)*.12;const T=Math.sin(C*3)*.3;x.rotation.z=.35+T,y.rotation.z=-.35-T,_.forEach((R,L)=>{R.scale.y=.85+Math.sin(C*35+L)*.2}),c.set(Math.sin(C*5)>.6?1:0),l.set(Math.sin(C*5+2)>.6?1:0)}}else if(i.id==="shield"){const n=new et;n.add(Ct(.3,.26,.34,ot(),.05));const s=Ct(.32,.12,.08,ot(4871522),.02);s.position.set(0,-.04,.15);const r=new I(new vt(.045,12,10),rt(Bt,Bt,2.4,0,.2));r.position.set(0,.05,.17);const a=Te(Bt,.22,.7);a.position.set(0,.05,.2);const o=new I(new Lt(.05,.05,.05,12),rt(1127236,3727871,1.8,.2,.3));o.position.set(0,.15,0),n.add(s,r,a,o),e("body",n);const c=new tn({color:3727871,emissive:1747199,emissiveIntensity:.9,transparent:!0,opacity:.45,side:Ae,metalness:.1,roughness:.2}),l=new I(new vt(.42,24,14,Math.PI*.2,Math.PI*.6,Math.PI*.2,Math.PI*.6),c);l.rotation.y=-Math.PI/2,l.position.z=-.12;const h=new I(new vt(.425,12,6,Math.PI*.2,Math.PI*.6,Math.PI*.2,Math.PI*.6),new xe({color:10482687,wireframe:!0,transparent:!0,opacity:.35}));h.rotation.y=-Math.PI/2,h.position.z=-.12;const u=new I(new Fe(.34,.012,6,30),rt(10482687,3727871,1.5,0));u.position.z=.02;const d=new et;d.add(l,h,u),e("shield",d);const f=zn(.09,.16,!0);e("jet",f.obj),t.anim=g=>{c.opacity=.38+Math.sin(g*6)*.08,f.flame.scale.y=.8+Math.sin(g*30)*.2}}else if(i.id==="bomber"){const n=new I(new vt(.32,28,14),ot());n.scale.set(1,.32,1);const s=new I(new vt(.12,16,10,0,Math.PI*2,0,Math.PI/2),rt(2240576,1122867,.4,.3,.1));s.position.y=.06;const r=new I(new Fe(.3,.015,6,36).rotateX(Math.PI/2),rt(16756794,16746496,1.4,0)),a=[],o=new et;o.add(n,s,r);for(let d=0;d<6;d++){const f=Pn(16756794,.012),g=d/6*Math.PI*2;f.obj.position.set(Math.sin(g)*.31,0,Math.cos(g)*.31),o.add(f.obj),a.push(f)}e("body",o);const c=new et;c.add(Ct(.2,.08,.2,Kt()));const l=[];for(const d of[-.05,.05]){const f=rt(16756794,16737792,1.5,0),g=new I(new vt(.035,10,8),f);g.position.set(d,-.05,0),c.add(g),l.push(f)}e("bay",c);const h=new et;h.add(new I(new vt(.055,12,10),rt(Bt,Bt,2.4,0,.2)),Te(Bt,.25,.7)),e("eye",h);const u=[];for(const d of["jetL","jetR"]){const f=zn(.065,.1);u.push(f.flame),e(d,f.obj)}t.anim=d=>{r.rotation.y=d*2,a.forEach((f,g)=>f.set(Math.max(0,Math.cos(d*4-g*1.05)))),u.forEach((f,g)=>{f.scale.y=.85+Math.sin(d*33+g)*.2})},t.charge=d=>{for(const f of l)f.emissiveIntensity=1.5+d*4}}else if(i.id==="shooter"){const n=new et,s=new I(new vt(.2,20,14),ot());s.scale.set(1,.8,1);const r=new I(new Fe(.2,.012,6,30).rotateX(Math.PI/2),Kt()),a=new I(new vt(.035,10,8),rt(Bt,Bt,2.2,0,.2));a.position.set(0,.09,.15);const o=Pn(16722474,.012);o.obj.position.set(0,.17,-.05),n.add(s,r,a,o.obj),e("body",n);for(const[y,_]of[["plateL",-1],["plateR",1]]){const C=new et,T=Ct(.05,.22,.34,ot(5661039),.015),R=Ct(.055,.03,.3,Kt());R.position.y=.05;const L=R.clone();L.position.y=-.05,C.add(T,R,L),C.rotation.z=_*-.25,e(y,C)}const c=new et,l=new I(new Lt(.035,.045,.3,12),Kt());l.rotation.x=Math.PI/2;const h=[];for(const y of[-.06,0,.06]){const _=new I(new Fe(.048,.01,6,14),rt(5578768,16724770,.4,.3,.4));_.position.z=y,h.push(_)}const u=rt(3342336,Bt,.2,0),d=new I(new vt(.045,10,8),u);d.position.z=.16;const f=Te(Bt,.3,0);f.position.z=.18,c.add(l,...h,d,f),e("gun",c);const g=new et,v=new I(new Lt(.05,.05,.04,12),Kt()),m=new I(new Qe(.24,32).rotateX(-Math.PI/2),new xe({color:11187394,transparent:!0,opacity:.18,side:Ae,depthWrite:!1})),p=Ct(.46,.01,.05,ot(8950432)),x=Ct(.05,.01,.46,ot(8950432));g.add(v,m,p,x),e("rotor",g),t.anim=y=>{g.rotation.y=y*30,o.set(Math.sin(y*4)>.7?1:0)},t.charge=y=>{u.emissiveIntensity=.2+y*3,f.material.opacity=y*.9;for(const _ of h)_.material.emissiveIntensity=.4+y*2.5}}else if(i.id==="jammer"){const n=new et,s=new I(new Lt(.17,.2,.12,24),ot()),r=new I(new Fe(.19,.015,6,28).rotateX(Math.PI/2),rt(6160288,2293623,1.4,0)),a=new I(new vt(.035,10,8),rt(Bt,Bt,2.4,0,.2));a.position.set(0,0,.18);const o=Te(Bt,.18,.6);o.position.set(0,0,.2),n.add(s,r,a,o),e("body",n);const c=new et,l=new I(new Lt(.012,.015,.1,6),Kt());l.position.y=-.05;const h=new I(new vt(.13,18,8,0,Math.PI*2,0,Math.PI/2.6),ot(10134963));h.material.side=Ae,h.rotation.x=Math.PI,h.position.y=.06;const u=new I(new vt(.025,8,6),rt(6160288,2293623,2.4,0));u.position.y=.03;const d=Te(6160288,.2,.6);d.position.y=.03,c.add(l,h,u,d),e("dish",c);const f=[];for(const g of["engL","engR"]){const v=zn(.055,.1);f.push(v.flame),e(g,v.obj)}t.anim=g=>{c.rotation.y=g*1.5,r.rotation.z=g,f.forEach((v,m)=>{v.scale.y=.85+Math.sin(g*33+m)*.2})},t.charge=g=>{u.material.emissiveIntensity=2.4+g*5,d.material.opacity=.6+g*.4,d.scale.setScalar(.2+g*.5)}}else if(i.id==="repair"){const n=new et,s=new I(new vt(.16,18,12),ot(13226716));s.scale.set(1,.8,1.1);const r=rt(4063114,2293623,1.6,0,.4),a=Ct(.1,.03,.012,r,.004);a.position.set(0,.02,.172);const o=Ct(.03,.1,.012,r,.004);o.position.set(0,.02,.172);const c=Pn(4063114,.012);c.obj.position.set(0,.13,-.05),n.add(s,a,o,c.obj),e("body",n);const l=new et,h=new I(new Lt(.025,.035,.08,10).rotateX(Math.PI/2),Kt()),u=new I(new vt(.025,8,6),rt(4063114,2293623,2.5,0));u.position.z=.045,l.add(h,u),e("emitter",l);const d=new et;d.add(new I(new Lt(.035,.035,.04,10),Kt())),d.add(new I(new Qe(.2,28).rotateX(-Math.PI/2),new xe({color:11187394,transparent:!0,opacity:.16,side:Ae,depthWrite:!1})));for(let f=0;f<3;f++){const g=Ct(.4,.008,.04,ot(8950432));g.rotation.y=f*Math.PI/3,d.add(g)}e("rotor",d),t.anim=f=>{d.rotation.y=f*28,c.set(Math.sin(f*3)>.5?1:0)}}else if(i.id==="jumper"){const n=new et,s=new I(new nr(.13,0),ot(8219304));s.scale.set(1,.7,1.3);const r=Ct(.012,.06,.24,Kt());r.position.y=-.07,n.add(s,r),e("body",n);const a=rt(13144319,10502399,2.4,0,.2),o=new et;o.add(new I(new nr(.045,0),a),Te(11758591,.3,.7)),e("core",o);for(const[c,l]of[["finL",-1],["finR",1]]){const h=new et,u=Ct(.16,.012,.08,ot(6049658),.004);u.rotation.z=l*.3;const d=Pn(11758591,.01);d.obj.position.x=l*.08,h.add(u,d.obj),e(c,h)}t.anim=c=>{o.rotation.y=c*4,a.emissiveIntensity=1.8+Math.sin(c*9)*.8},t.charge=c=>{a.emissiveIntensity=2+c*6,o.scale.setScalar(1+c*.6)}}else if(i.id==="ghost"){const n=new et,s=new I(new vt(.22,24,12),rt(2765894,661552,.4,.9,.18));s.scale.set(1.4,.35,1.1);const r=Ct(.04,.05,.36,ot(4871528),.01);r.position.y=.06;const a=[];for(const g of[-.07,.07]){const v=new I(new vt(.022,8,6),rt(8381439,3727871,2.5,0));v.position.set(g,.02,.22),a.push(v)}n.add(s,r,...a),e("body",n);const o=new et,c=rt(1127236,3727871,2,.2,.2);o.add(new I(new Lt(.06,.08,.06,12),c),Te(3727871,.3,.6)),e("veil",o);const l=new et,h=new I(new Lt(.015,.015,.2,6),Kt()),u=Ct(.015,.08,.04,ot(11911116));u.position.set(-.04,-.12,0),u.rotation.z=.4;const d=Ct(.015,.08,.04,ot(11911116));d.position.set(.04,-.12,0),d.rotation.z=-.4,l.add(h,u,d),e("claw",l);const f=[];for(const g of["engL","engR"]){const v=zn(.05,.1,!0);f.push(v.flame),e(g,v.obj)}t.anim=g=>{c.emissiveIntensity=1.5+Math.sin(g*7)*.8,f.forEach((v,m)=>{v.scale.y=.8+Math.sin(g*30+m)*.2})}}else if(i.id==="collector"){const n=new et,s=ot(5923954),r=new I(new vt(.5,36,16),s);r.scale.set(1,.3,.85);const a=new I(new Fe(.47,.025,8,48).rotateX(Math.PI/2),rt(2232368,11758591,1.2,.4,.3));a.scale.set(1,.85,1);const o=new I(new Lt(.22,.28,.1,24),Kt());o.position.y=-.14;const c=new I(new Qe(.16,24).rotateX(Math.PI/2),rt(1706032,10502399,1.6,0,.3));c.position.y=-.195;const l=Te(10502399,.8,.5);l.position.y=-.22;const h=new I(new vt(.07,14,10),rt(Bt,Bt,2.6,0,.2));h.position.set(0,0,.42);const u=Te(Bt,.4,.7);u.position.set(0,0,.46);const d=[];n.add(r,a,o,c,l,h,u);for(let y=0;y<10;y++){const _=Pn(11758591,.016),C=y/10*Math.PI*2;_.obj.position.set(Math.sin(C)*.48,.02,Math.cos(C)*.41),n.add(_.obj),d.push(_)}for(const y of[-1,1]){const _=Ct(.04,.12,.3,ot(4871522),.012);_.position.set(y*.2,.12,-.2),_.rotation.z=y*-.3,n.add(_)}e("body",n);const f=new et,g=rt(1127236,3727871,2.2,.2,.2),v=new I(new vt(.15,18,10,0,Math.PI*2,0,Math.PI/2),rt(2240576,663616,.5,.3,.08)),m=new I(new Fe(.1,.02,8,24).rotateX(Math.PI/2),g);m.position.y=.05,f.add(v,m,Te(3727871,.5,.5)),e("veil",f);const p=[];for(const y of["gunL","gunR"]){const _=new et;_.add(Ct(.12,.1,.16,ot(4871522),.02));const C=new I(new Lt(.03,.04,.24,12).rotateX(Math.PI/2),Kt());C.position.z=.16;const T=rt(3342336,Bt,.3,0),R=new I(new vt(.035,8,6),T);R.position.z=.28,_.add(C,R),p.push(T),e(y,_)}const x=[];for(const y of["engL","engR"]){const _=new et,C=new I(new Gi(.1,.22,6,14).rotateX(Math.PI/2),ot(6976642)),T=zn(.09,.12,!0);T.obj.position.z=-.2,x.push(T.flame),_.add(C,T.obj),e(y,_)}t.anim=y=>{m.rotation.z=y*2,g.emissiveIntensity=1.8+Math.sin(y*6)*.8,d.forEach((_,C)=>_.set(Math.max(0,Math.cos(y*3-C*.63)))),x.forEach((_,C)=>{_.scale.y=.85+Math.sin(y*28+C)*.2})},t.charge=y=>{for(const _ of p)_.emissiveIntensity=.3+y*4}}else if(i.id==="crab"){const n=new et,s=ot(8018490),r=new I(new vt(.26,22,12),s);r.scale.set(1.3,.45,1);const a=Ct(.06,.05,.4,ot(5914664),.015);a.position.y=.1;const o=[];for(const v of[-.07,.07]){const m=new et,p=new I(new Lt(.01,.012,.08,6),Kt());p.position.y=.04;const x=new I(new vt(.02,8,6),rt(Bt,Bt,2.4,0,.2));x.position.y=.09,m.add(p,x),m.position.set(v,.08,.2),n.add(m),o.push(m)}n.add(r,a),e("body",n);const c=new et,l=new I(new vt(.32,20,10,-Math.PI*.35,Math.PI*.7,Math.PI*.25,Math.PI*.4),ot(10122312));l.material.side=Ae,l.position.z=-.2,c.add(l),e("shell",c);const h=new et,u=new I(new Lt(.03,.035,.18,8).rotateX(Math.PI/2),ot(8018490)),d=Ct(.05,.03,.12,ot(10122312));d.position.set(.03,0,.12),d.rotation.y=-.3;const f=Ct(.05,.03,.12,ot(10122312));f.position.set(-.03,0,.12),f.rotation.y=.3,h.add(u,d,f),e("claw",h);const g=[];for(const[v,m]of[["legL",-1],["legR",1]]){const p=new et;for(let x=0;x<3;x++){const y=new et,_=new I(new Lt(.015,.02,.18,6),ot(5914664));_.rotation.z=m*1,_.position.x=m*.07;const C=new I(new Lt(.012,.008,.16,6),Kt());C.position.set(m*.15,-.07,0),C.rotation.z=m*-.4,y.add(_,C),y.position.z=(x-1)*.12,p.add(y),g.push(y)}e(v,p)}t.anim=v=>{g.forEach((m,p)=>{m.rotation.x=Math.sin(v*8+p*1.7)*.35}),o.forEach((m,p)=>{m.rotation.z=Math.sin(v*2+p)*.2}),d.rotation.y=-.3-Math.sin(v*3)*.15,f.rotation.y=.3+Math.sin(v*3)*.15}}else if(i.id==="harpooner"){const n=new et,s=ot(6253432),r=new I(new Gi(.13,.26,6,16).rotateX(Math.PI/2),s),a=new I(new vt(.07,12,8,0,Math.PI*2,0,Math.PI/2),rt(Bt,Bt,2,.2,.2));a.rotation.x=Math.PI/2,a.position.z=.24;const o=Ct(.02,.12,.16,ot(9082275));o.position.set(0,.14,-.1);const c=Pn(16756794,.012);c.obj.position.set(0,.2,-.12),n.add(r,a,o,c.obj),e("body",n);const l=new et,h=new I(new Lt(.06,.06,.06,14).rotateZ(Math.PI/2),Kt()),u=new I(new Lt(.025,.03,.2,10).rotateX(Math.PI/2),ot(10134963));u.position.z=.1;const d=new I(new In(.03,.07,6).rotateX(Math.PI/2),ot(13686494));d.position.z=.22,l.add(h,u,d),e("gun",l);const f=[];for(const g of["engL","engR"]){const v=zn(.06,.12);f.push(v.flame),e(g,v.obj)}t.anim=g=>{h.rotation.x=g*2,c.set(Math.sin(g*4)>.6?1:0),f.forEach((v,m)=>{v.scale.y=.85+Math.sin(g*31+m)*.2})},t.charge=g=>{d.scale.setScalar(1+g*.5)}}else if(i.id==="hive"){const n=new et,s=new I(new vt(.3,24,14),rt(6969898,3351040,.3,.4,.5));s.scale.set(1,.75,1);const r=new I(new zi(.305,1),new tn({color:16763210,emissive:16751130,emissiveIntensity:.5,wireframe:!0,metalness:.3,roughness:.6}));r.scale.set(1,.75,1);const a=new I(new vt(.05,10,8),rt(Bt,Bt,2.4,0,.2));a.position.set(0,.02,.28),n.add(s,r,a),e("body",n);const o=[];for(const l of["sacL","sacR"]){const h=new tn({color:16765562,emissive:16751130,emissiveIntensity:.8,roughness:.3,metalness:0,transparent:!0,opacity:.85}),u=new et,d=new I(new vt(.12,14,10),h);d.scale.y=1.25,u.add(d,Te(16755251,.35,.5)),o.push(h),e(l,u)}const c=new et;c.add(new I(new Lt(.04,.04,.05,10),Kt())),c.add(new I(new Qe(.3,28).rotateX(-Math.PI/2),new xe({color:11187394,transparent:!0,opacity:.15,side:Ae,depthWrite:!1})));for(let l=0;l<4;l++){const h=Ct(.58,.008,.05,ot(8950432));h.rotation.y=l*Math.PI/4,c.add(h)}e("rotor",c),t.anim=l=>{c.rotation.y=l*24,o.forEach((h,u)=>{h.emissiveIntensity=.6+Math.sin(l*3+u)*.3})},t.charge=l=>{for(const h of o)h.emissiveIntensity=.8+l*3}}else if(i.id==="sapper"){const n=new et,s=new I(new Lt(.2,.2,.42,20).rotateX(Math.PI/2),ot(6978106)),r=[];for(const d of[-.14,0,.14]){const f=new I(new Fe(.205,.015,6,24),rt(16761130,5583616,.4,.3,.5));f.position.z=d,r.push(f)}const a=Ct(.12,.05,.005,rt(1118481,0,0,0,.6));a.position.set(0,.12,.215),n.add(s,...r,a),e("body",n);const o=rt(16724736,16720384,2,0,.3),c=new et,l=new I(new vt(.1,14,10,0,Math.PI*2,0,Math.PI/2),o);l.rotation.x=Math.PI/2;const h=Te(16724736,.5,.6);c.add(l,h),e("charge",c);const u=[];for(const d of["jetL","jetR"]){const f=zn(.05,.1,!0);u.push(f.flame),e(d,f.obj)}t.anim=d=>{const f=Math.sin(d*10)>0?1:0;o.emissiveIntensity=.8+f*2.5,h.material.opacity=.2+f*.6,u.forEach((g,v)=>{g.scale.y=.8+Math.sin(d*30+v)*.2})}}else if(i.id==="spitter"){const n=new et,s=new I(new vt(.2,18,12),ot(4872776));s.scale.set(1.1,.8,1.2);const r=new tn({color:9109306,emissive:4508672,emissiveIntensity:.9,roughness:.25,metalness:0,transparent:!0,opacity:.85}),a=new I(new vt(.13,16,12),r);a.position.set(0,.1,-.08);const o=Te(9109306,.45,.45);o.position.copy(a.position);const c=[-.08,.08].map(f=>{const g=new I(new vt(.025,8,6),rt(13172573,9109306,2.4,0));return g.position.set(f,.07,.2),g});n.add(s,a,o,...c),e("body",n);const l=new et,h=new I(new Fe(.06,.02,8,16),ot(2765862)),u=new I(new vt(.035,10,8),rt(9109306,4508672,2,0));l.add(h,u),e("mouth",l);const d=[];for(const[f,g]of[["wingL",-1],["wingR",1]]){const v=new I(new Qe(.14,14),new tn({color:10145904,emissive:3364130,emissiveIntensity:.6,transparent:!0,opacity:.6,side:Ae}));v.scale.set(1,.5,1),v.rotation.x=-Math.PI/2,v.position.x=g*.02;const m=new et;m.add(v),d.push(m),e(f,m)}t.anim=f=>{a.scale.setScalar(1+Math.sin(f*2.5)*.08),d.forEach((g,v)=>{g.rotation.z=Math.sin(f*34+v*Math.PI)*.5})},t.charge=f=>{r.emissiveIntensity=.9+f*2.5,u.scale.setScalar(1+f)}}else if(i.id==="leviathan"){const n=new et,s=Ct(.8,.3,.7,ot(5266022),.08),r=Ct(.5,.12,.45,ot(3818060),.04);r.position.y=.2;const a=[];for(const f of[-.15,0,.15]){const g=Ct(.08,.01,.3,rt(3346688,16729088,1.4,0,.5));g.position.set(f,.265,0),a.push(g)}const o=[];for(const[f,g]of[[-.38,.33],[.38,.33],[-.38,-.33],[.38,-.33]]){const v=Pn(16730682,.018);v.obj.position.set(f,.12,g),n.add(v.obj),o.push(v)}n.add(s,r,...a),e("body",n);const c=new et,l=Ct(.26,.18,.22,ot(6318710),.04),h=new I(new Qe(.06,16),rt(16773824,16769152,3,0));h.position.z=.112;const u=Te(16769152,.6,.7);u.position.z=.14,c.add(l,h,u),e("head",c);const d=[];for(const f of["legFL","legFR","legBL","legBR"]){const g=f.endsWith("L")?-1:1,v=new et,m=new I(new vt(.07,10,8),Kt()),p=new I(new Lt(.045,.05,.3,8),ot(6976642));p.position.set(g*.1,.05,0),p.rotation.z=g*-.8;const x=new I(new Lt(.035,.025,.36,8),ot(4871522));x.position.set(g*.22,-.16,0),x.rotation.z=g*.25;const y=new I(new Lt(.06,.07,.03,10),Kt());y.position.set(g*.26,-.33,0),v.add(m,p,x,y),d.push(v),e(f,v)}t.anim=f=>{d.forEach((g,v)=>{g.rotation.x=Math.sin(f*2.8+(v%2?Math.PI:0)+(v>1?Math.PI:0))*.25}),n.position.y=Math.abs(Math.sin(f*2.8))*.02,o.forEach((g,v)=>g.set(Math.sin(f*3+v)>.5?1:0))}}else if(i.id==="reaper"){const n=new et,s=ot(4870750),r=Ct(1.2,.26,.9,s,.08),a=Ct(.4,.18,.3,ot(5923954),.05);a.position.set(0,.2,.2);const o=new I(new wn(.34,.06,.02),rt(2228224,Bt,2,.2,.1));o.position.set(0,.22,.355);const c=new I(new In(.3,.4,4).rotateX(Math.PI/2).rotateZ(Math.PI/4),s);c.scale.set(1.6,.6,1),c.position.z=.6;const l=[];for(const x of[-.3,-.1,.1]){const y=Ct(1.24,.04,.05,ot(6976642));y.position.set(0,.13,x),l.push(y)}const h=[];for(let x=0;x<8;x++){const y=Pn(16730682,.02);y.obj.position.set(-.58+x%4*.39,-.02,x<4?.46:-.46),n.add(y.obj),h.push(y)}n.add(r,a,o,c,...l),e("body",n);const u=new et,d=Ct(.42,.1,.42,Kt()),f=rt(666176,3727871,1.5,0,.3),g=new I(new Qe(.16,24).rotateX(Math.PI/2),f);g.position.y=-.051;const v=Te(3727871,.9,.45);v.position.y=-.1,u.add(d,g,v),e("hold",u);const m=[];for(const x of["gunL","gunR"]){const y=new et;y.add(Ct(.16,.12,.2,ot(3818060),.03));for(const T of[-.035,.035]){const R=new I(new Lt(.022,.028,.3,10).rotateX(Math.PI/2),Kt());R.position.set(T,0,.2),y.add(R)}const _=rt(3342336,Bt,.3,0),C=new I(new vt(.04,8,6),_);C.position.z=.36,y.add(C),m.push(_),e(x,y)}const p=[];for(const x of["engL","engR"]){const y=new et;y.add(new I(new Lt(.15,.17,.4,16).rotateX(Math.PI/2),ot(5923954)));const _=zn(.13,.16,!0);_.obj.position.z=-.25,p.push(_.flame),y.add(_.obj),e(x,y)}t.anim=x=>{h.forEach((y,_)=>y.set(Math.max(0,Math.cos(x*3-_*.8)))),p.forEach((y,_)=>{y.scale.y=.9+Math.sin(x*26+_)*.2}),f.emissiveIntensity=1.2+Math.sin(x*5)*.5},t.charge=x=>{for(const y of m)y.emissiveIntensity=.3+x*4}}else if(i.id==="spider"){const n=new et,s=new I(new vt(.09,16,12),ot(3817288));s.scale.set(1,.75,1.25),s.position.z=-.08;const r=new I(new vt(.03,8,6),rt(Bt,Bt,1.8,0));r.scale.set(1,.4,1.4),r.position.set(0,.06,-.08);const a=new I(new vt(.06,14,10),ot(4870234));a.position.z=.05;const o=[-.025,0,.025].map(l=>{const h=new I(new vt(.01,6,4),rt(Bt,Bt,2.5,0));return h.position.set(l,.025,.1),h});n.add(s,r,a,...o),e("body",n);const c=[];for(const[l,h]of[["legL",-1],["legR",1]]){const u=new et;for(let d=0;d<4;d++){const f=new et,g=new I(new Lt(.006,.008,.1,5),ot(5922922));g.rotation.z=h*1.1,g.position.set(h*.04,.025,0);const v=new I(new Lt(.005,.003,.11,5),Kt());v.position.set(h*.09,-.02,0),v.rotation.z=h*-.35,f.add(g,v),f.position.z=.06-d*.045,f.rotation.y=h*(.5-d*.33),u.add(f),c.push(f)}e(l,u)}t.anim=l=>{c.forEach((h,u)=>{h.rotation.x=Math.sin(l*16+u*1.3)*.3})}}else if(i.id==="moth"){const n=new et,s=new I(new Gi(.025,.1,4,10).rotateX(Math.PI/2),rt(6969978,0,0,.2,.8)),r=[-1,1].map(c=>{const l=new I(new Lt(.002,.002,.07,4),Kt());return l.position.set(c*.015,.03,.08),l.rotation.set(.7,0,c*-.4),l});n.add(s,...r),e("body",n);const a=[];for(const[c,l]of[["wingL",-1],["wingR",1]]){const h=new et,u=new tn({color:13678847,emissive:9067263,emissiveIntensity:.9,transparent:!0,opacity:.8,side:Ae,roughness:.6}),d=new I(new Qe(.11,18),u);d.scale.set(1,.75,1),d.rotation.x=-Math.PI/2,d.position.x=l*.02;const f=new I(new Qe(.03,12),rt(16769162,16756794,2,0));f.material.side=Ae,f.rotation.x=-Math.PI/2,f.position.set(l*.03,.002,0),h.add(d,f),a.push(h),e(c,h)}const o=Te(11766527,.5,.4);n.add(o),t.anim=c=>{a.forEach((l,h)=>{l.rotation.z=Math.sin(c*22+h*Math.PI)*.8}),o.material.opacity=.3+Math.sin(c*5)*.15}}else if(i.id==="roller"){const n=new et,s=new et,r=ot(6967360);s.add(new I(new vt(.12,20,14),r));for(let l=0;l<3;l++){const h=new I(new Fe(.122,.008,6,28),rt(16756794,5583616,.6,.3,.4));h.rotation.y=l*Math.PI/3,s.add(h)}n.add(s),e("body",n);const a=new et,o=new I(new Lt(.05,.055,.025,14),ot(9082275)),c=new I(new vt(.02,8,6),rt(Bt,Bt,2.4,0));c.position.y=.015,a.add(o,c),e("hatch",a);for(const l of["sideL","sideR"]){const h=new I(new Lt(.06,.06,.03,14).rotateZ(Math.PI/2),ot(4871522));e(l,h)}t.anim=l=>{s.rotation.x=l*6}}else if(i.id==="tick"){const n=new et,s=new I(new vt(.08,16,10),rt(5909034,2099208,.3,.5,.35));s.scale.set(1,.5,1.2);const r=new I(new vt(.06,12,8,0,Math.PI*2,0,Math.PI/2),ot(8010298));r.scale.set(1,.5,1.1),r.position.y=.02;const a=new I(new In(.015,.06,6).rotateX(Math.PI/2),Kt());a.position.z=.1;const o=new I(new vt(.012,6,4),rt(16747050,16738816,2.5,0));o.position.set(0,.03,.07),n.add(s,r,a,o),e("body",n);const c=new et,l=[];for(let h=0;h<6;h++){const u=h<3?-1:1,d=new I(new Lt(.007,.004,.08,5),Kt());d.position.set(u*.07,0,.04-h%3*.04),d.rotation.z=u*1.1,c.add(d),l.push(d)}e("legs",c),t.anim=h=>{l.forEach((u,d)=>{u.rotation.x=Math.sin(h*12+d)*.4})},t.charge=h=>{o.material.emissiveIntensity=2.5+h*5,n.scale.setScalar(1+h*.15)}}else if(i.id==="hunter"){const n=new et,s=Ct(.22,.18,.18,ot(5923954),.04),r=Ct(.16,.14,.08,ot(3818060),.02);r.position.z=-.12;const a=Pn(16730682,.012);a.obj.position.set(0,.06,-.17),n.add(s,r,a.obj),e("body",n);const o=new et,c=Ct(.12,.08,.1,ot(6976642),.03),l=Ct(.1,.025,.01,rt(Bt,Bt,2.2,.2,.2),.005);l.position.z=.052,o.add(c,l),e("head",o);const h=new et,u=new I(new Lt(.02,.02,.16,8),ot(9082275));u.position.y=-.06;const d=Ct(.05,.04,.05,ot(11911116));d.position.y=-.15,h.add(u,d),e("arm",h);const f=[];for(const g of["legL","legR"]){const v=new et,m=new I(new Lt(.03,.035,.16,8),ot(6976642));m.position.y=.06,m.rotation.x=.3;const p=new I(new Lt(.025,.02,.17,8),ot(4871522));p.position.set(0,-.08,.02),p.rotation.x=-.3;const x=Ct(.06,.02,.1,Kt());x.position.set(0,-.16,.03),v.add(m,p,x),f.push(v),e(g,v)}t.anim=g=>{f.forEach((v,m)=>{v.rotation.x=Math.sin(g*5+m*Math.PI)*.4}),n.position.y=Math.abs(Math.sin(g*5))*.015,a.set(Math.sin(g*4)>.5?1:0)}}else if(i.id==="node"){const n=new et,s=rt(13144319,10502399,1.8,.1,.15),r=new I(new nr(.13,0),s);r.scale.set(.8,1.5,.8);const a=[];for(let c=0;c<2;c++){const l=new I(new Fe(.17+c*.04,.01,6,28),ot(10134963));a.push(l),n.add(l)}n.add(r,Te(11758591,.7,.5)),e("body",n);const o=new I(new vt(.035,10,8),rt(Bt,Bt,2.5,0));e("eye",o),t.anim=c=>{r.rotation.y=c*1.5,a[0].rotation.x=c*1.2,a[1].rotation.y=c*.9,s.emissiveIntensity=1.5+Math.sin(c*4)*.5},t.charge=c=>{o.material.emissiveIntensity=2.5+c*5}}else if(i.id==="nexus"){const n=new et,s=rt(16734928,11545343,1.6,.2,.25),r=new I(new zi(.4,3),s),a=new I(new zi(.47,1),new tn({color:10134963,metalness:.9,roughness:.3,wireframe:!0})),o=[];for(let l=0;l<3;l++){const h=new et;h.add(new I(new Fe(.62+l*.1,.02,8,64),ot(5923954)));for(let u=0;u<8;u++){const d=new I(new In(.03,.12,6),ot(9082275)),f=u/8*Math.PI*2;d.position.set(Math.cos(f)*(.62+l*.1),Math.sin(f)*(.62+l*.1),0),d.rotation.z=f-Math.PI/2,h.add(d)}h.rotation.set(l*1.1,l*.7,0),o.push(h),n.add(h)}const c=new I(new vt(.1,14,10),rt(Bt,Bt,3,0));c.position.z=.38,n.add(r,a,c,Te(13660415,2.2,.45)),e("body",n),t.anim=l=>{o.forEach((u,d)=>{u.rotation.x+=.004*(d+1),u.rotation.y+=.006*(3-d)}),a.rotation.y=-l*.3;const h=1+Math.sin(l*3)*.04;r.scale.setScalar(h),s.emissiveIntensity=1.3+Math.sin(l*3)*.5}}return $v(t,t.group),t}function jv(){const i=new et,t=Ct(.09,.03,.09,ot(14213352),.012),e=new I(new vt(.012,8,6),rt(3727871,3727871,2.5,0));e.position.z=.05;const n=new I(new Lt(.006,.006,.05,6).rotateX(Math.PI/2),Kt());n.position.set(0,-.02,.04),i.add(t,e,n,Te(3727871,.12,.6));const s=[];for(const[r,a]of[[-.07,-.07],[.07,-.07],[-.07,.07],[.07,.07]]){const o=Ct(.07,.008,.012,Kt());o.position.set(r/2,0,a/2),o.rotation.y=Math.atan2(a,r);const c=new I(new Qe(.035,16).rotateX(-Math.PI/2),new xe({color:11187394,transparent:!0,opacity:.35,side:Ae,depthWrite:!1}));c.position.set(r,.012,a),i.add(o,c),s.push(c)}return i.userData.anim=r=>{s.forEach((a,o)=>{a.rotation.y=r*40+o}),i.position.y+=0},i}function Kv(){const i=new et,t=new I(new Lt(.025,.025,.24,10).rotateX(Math.PI/2),rt(13161182,0,0,.5)),e=new I(new In(.025,.07,10).rotateX(Math.PI/2).translate(0,0,.155),rt(16734778,16724736,.6,.2)),n=new I(new Lt(.027,.027,.02,10).rotateX(Math.PI/2).translate(0,0,.04),rt(1127236,3727871,1.5,0));i.add(t,e,n);for(let s=0;s<4;s++){const r=new I(new wn(.004,.05,.05),rt(8095636));r.position.set(0,0,-.1),r.rotation.z=s*Math.PI/2,r.translateY(.035),i.add(r)}return i}function dd(i){const t=new et,e=new I(new Lt(.13,.15,.025,28),rt(2765888,0,0,.8,.35));e.position.y=.012;const n=new I(new Fe(.135,.008,8,32).rotateX(Math.PI/2),rt(4514047,2280703,2,0));n.position.y=.026;const s=new I(new Ns(.15,.24,32).rotateX(-Math.PI/2),new xe({color:3727871,transparent:!0,opacity:.25,depthWrite:!1,blending:qe}));s.position.y=.004,t.add(e,n,s);const r=new et;if(r.position.y=.026,i==="colonist"){const a=rt(15265266,0,0,.1,.55),o=rt(16747050,3346688,.2,.2,.5),c=rt(2764856,0,0,.4,.6),l=new et;for(const y of[-.028,.028]){const _=new I(new Gi(.022,.1,4,10),a);_.position.set(y,.085,0);const C=Ct(.04,.03,.06,c,.01);C.position.set(y,.015,.008),l.add(_,C)}const h=Ct(.1,.12,.06,a,.022);h.position.y=.21;const u=Ct(.104,.015,.064,o,.005);u.position.y=.155;const d=Ct(.04,.025,.006,rt(3727871,2280703,1.6,0),.004);d.position.set(0,.235,.032);const f=Ct(.08,.1,.04,rt(12108492,0,0,.4,.45),.012);f.position.set(0,.22,-.048);const g=new I(new vt(.006,6,4),rt(6160288,6160288,2.5,0));g.position.set(.025,.25,-.07);const v=[];for(const y of[-1,1]){const _=new et,C=new I(new Gi(.018,.09,4,8),a);C.position.y=-.055;const T=new I(new vt(.019,8,6),c);T.position.y=-.115,_.add(C,T),_.position.set(y*.066,.26,0),_.rotation.z=y*.12,l.add(_),v.push(_)}const m=new I(new vt(.048,18,14),a);m.position.y=.315;const p=new I(new vt(.042,16,10,-1,2,1,1),rt(16760896,5583616,.4,1,.08));p.position.set(0,.315,.012);const x=new I(new Lt(.002,.002,.05,4),c);x.position.set(.03,.36,-.02),l.add(h,u,d,f,g,m,p,x),r.add(l),t.userData.arms=v}else{const a=new I(new Cc(.09,0),rt(3817286,0,0,.2,.9));a.scale.set(1.3,.45,1.1),a.position.y=.03,r.add(a);const o=rt(6160288,2293623,1.3,.1,.12),c=[[0,0,.2,0,0],[.04,.02,.13,.35,.2],[-.045,.01,.15,-.4,-.1],[.01,-.045,.11,.1,-.45],[-.02,.045,.1,-.2,.4]];for(const[h,u,d,f,g]of c){const v=new et,m=new I(new Lt(.022,.026,d,6),o);m.position.y=d/2;const p=new I(new In(.022,.04,6),o);p.position.y=d+.02,v.add(m,p),v.position.set(h,.04,u),v.rotation.set(g,0,f),r.add(v)}const l=Te(6160288,.45,.55);l.position.y=.14,r.add(l),t.userData.spin=!0}return t.add(r),t.userData.hold=r,t}const Jv="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",Zv=`
varying vec2 vUv; uniform float time; uniform float power; uniform vec3 cDark; uniform vec3 cLight; uniform float dir;
void main(){
  vec2 p = vUv - 0.5; float r = length(p) * 2.0; if (r > 1.0) discard;
  float a = atan(p.y, p.x);
  float sw = 0.5 + 0.5 * sin(a * 5.0 + dir * time * 4.0 - r * 11.0);
  float sw2 = 0.5 + 0.5 * sin(a * 3.0 - dir * time * 2.5 + r * 7.0);
  vec3 c = mix(cDark, cLight, sw * (1.0 - r * 0.35));
  c = mix(c, cLight * 1.4, sw2 * 0.25);
  // яркий ободок и тёмный «зрачок» в центре
  c += cLight * smoothstep(0.7, 0.98, r) * 0.9;
  c *= 0.35 + 0.65 * smoothstep(0.0, 0.45, r);
  c += power * cLight * 0.7;
  float alpha = (0.65 + 0.35 * sw) * (1.0 - smoothstep(0.9, 1.0, r));
  gl_FragColor = vec4(c, alpha);
}`;function Qv(i="in"){const t=i==="in"?{dark:new Ht(.12,0,.3),light:new Ht(.72,.3,1),ring:11758591,glow:10502399}:{dark:new Ht(.3,.03,0),light:new Ht(1,.42,.12),ring:16738858,glow:16726544},e=new et,n=new $n({vertexShader:Jv,fragmentShader:Zv,transparent:!0,side:Ae,depthWrite:!1,uniforms:{time:{value:0},power:{value:0},cDark:{value:t.dark},cLight:{value:t.light},dir:{value:i==="in"?1:-1}}}),s=new I(new Qe(.55,48),n),r=new I(new Fe(.56,.035,10,48),rt(t.ring,t.glow,2.2,0)),a=new I(new Ns(.58,.8,48),new xe({color:t.glow,transparent:!0,opacity:.22,side:Ae,depthWrite:!1,blending:qe})),o=new et;for(let c=0;c<6;c++){const l=new I(new Fe(.66,.018,6,10,Math.PI/6),rt(t.ring,t.glow,2.5,0));l.rotation.z=c*Math.PI/3,o.add(l)}return e.add(s,r,a,o),{group:e,spin:o,shader:n}}class t_{constructor(){$(this,"group",new et);$(this,"barrels",[]);$(this,"next",0);const t=new tn({color:3818834,metalness:.85,roughness:.3}),e=new tn({color:1711910,metalness:.6,roughness:.5}),n=new tn({color:1127236,emissive:3727871,emissiveIntensity:1.2});for(const r of[-1,1]){const a=new et;a.position.set(.075*r,-.062,-.1),a.scale.setScalar(.55),a.rotation.y=r*.035,a.rotation.x=.06;const o=new et,c=new I(new wn(.05,.04,.12).translate(0,0,-.03),e),l=new I(new Lt(.008,.011,.3,12).rotateX(Math.PI/2).translate(0,0,-.22),t),h=new I(new Lt(.016,.016,.08,12).rotateX(Math.PI/2).translate(0,0,-.11),t),u=new I(new Lt(.013,.013,.035,10).rotateX(Math.PI/2).translate(0,0,-.37),e),d=new I(new wn(.004,.004,.09).translate(0,.022,-.03),n),f=new De;f.position.z=-.39;const g=new I(new vt(.03,10,8),new xe({color:16760928,transparent:!0,opacity:.9,blending:qe,depthWrite:!1}));g.position.z=-.41,g.scale.set(1,1,2),g.visible=!1,o.add(c,l,h,u,d,f,g),a.add(o),this.group.add(a),this.barrels.push({slide:o,tip:f,flash:g,kick:0,flashT:0})}const s=new nd(16755285,0,.8);s.position.set(0,-.05,-.4),this.group.add(s),this.group.userData.light=s}follow(t){t.getWorldPosition(this.group.position),t.getWorldQuaternion(this.group.quaternion),this.group.updateMatrixWorld(!0)}fire(){const t=this.barrels[this.next];return this.next=(this.next+1)%this.barrels.length,t.kick=1,t.flashT=.045,t.flash.visible=!0,t.flash.rotation.z=Math.random()*Math.PI,this.group.userData.light.intensity=.4,t.tip.getWorldPosition(new A)}update(t){for(const n of this.barrels)n.kick=Math.max(0,n.kick-t*14),n.slide.position.z=.03*n.kick,n.flashT-=t,n.flashT<=0&&(n.flash.visible=!1);const e=this.group.userData.light;e.intensity=Math.max(0,e.intensity-t*30)}}const e_=`
attribute float size; attribute vec4 col; varying vec4 vCol; uniform float scale;
void main(){ vCol = col; vec4 mv = modelViewMatrix * vec4(position,1.0);
  gl_PointSize = size * scale / max(-mv.z, 0.1); gl_Position = projectionMatrix * mv; }`,n_=`
varying vec4 vCol;
void main(){ float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard;
  gl_FragColor = vec4(vCol.rgb, vCol.a * smoothstep(0.5, 0.1, d)); }`;class ch{constructor(t,e){$(this,"points");$(this,"n");$(this,"pos");$(this,"col");$(this,"size");$(this,"vel");$(this,"life");$(this,"maxLife");$(this,"size0");$(this,"grow");$(this,"grav");$(this,"base");$(this,"next",0);this.n=t,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*4),this.size=new Float32Array(t),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t).fill(1),this.size0=new Float32Array(t),this.grow=new Float32Array(t),this.grav=new Float32Array(t),this.base=new Float32Array(t*4);const n=new Ue;n.setAttribute("position",new cn(this.pos,3)),n.setAttribute("col",new cn(this.col,4)),n.setAttribute("size",new cn(this.size,1));const s=new $n({vertexShader:e_,fragmentShader:n_,transparent:!0,depthWrite:!1,blending:e?qe:Vi,uniforms:{scale:{value:900}}});this.points=new Ug(n,s),this.points.frustumCulled=!1}spawn(t,e,n,s,r,a=0,o=0){const c=this.next;this.next=(this.next+1)%this.n,this.pos.set([t.x,t.y,t.z],c*3),this.vel.set([e.x,e.y,e.z],c*3),this.life[c]=n,this.maxLife[c]=n,this.base.set(s,c*4),this.size0[c]=r,this.grow[c]=a,this.grav[c]=o}update(t){for(let n=0;n<this.n;n++){if(this.life[n]<=0){this.size[n]=0;continue}this.life[n]-=t;const s=Math.max(0,this.life[n]/this.maxLife[n]);this.vel[n*3+1]-=this.grav[n]*t;for(let r=0;r<3;r++)this.pos[n*3+r]+=this.vel[n*3+r]*t;this.size0[n]+=this.grow[n]*t,this.size[n]=this.life[n]>0?this.size0[n]:0,this.col[n*4]=this.base[n*4],this.col[n*4+1]=this.base[n*4+1],this.col[n*4+2]=this.base[n*4+2],this.col[n*4+3]=this.base[n*4+3]*s}const e=this.points.geometry;e.getAttribute("position").needsUpdate=!0,e.getAttribute("col").needsUpdate=!0,e.getAttribute("size").needsUpdate=!0}}const Js={gravity:7,minLife:1.1,maxLife:1.9,max:70},Ie=(i=1)=>(Math.random()-.5)*2*i,ea=new A;class i_{constructor(){$(this,"root",new et);$(this,"glow",new ch(500,!0));$(this,"smoke",new ch(300,!1));$(this,"debris",[]);$(this,"flashes",[]);$(this,"tracers",[]);$(this,"flashGeo",new vt(1,12,8));$(this,"arcs",[]);$(this,"intensity",1);this.root.add(this.smoke.points,this.glow.points);const t=new Lt(.004,.004,1,5).rotateX(Math.PI/2).translate(0,0,.5);for(let e=0;e<14;e++){const n=new I(t,new xe({color:10092526,transparent:!0,blending:qe,depthWrite:!1}));n.visible=!1,this.root.add(n),this.tracers.push({mesh:n,life:0})}}setPixelScale(t){this.glow.points.material.uniforms.scale.value=t,this.smoke.points.material.uniforms.scale.value=t}arc(t,e=10479871){for(let n=0;n<2;n++){const s=[];for(let a=0;a<t.length-1;a++){const o=t[a],c=t[a+1],l=7;for(let h=0;h<l;h++){const u=o.clone().lerp(c,h/l);h>0&&u.add(new A(Ie(.12),Ie(.12),Ie(.12))),s.push(u)}}s.push(t[t.length-1].clone());const r=new Yh(new Ue().setFromPoints(s),new Sa({color:n?16777215:e,transparent:!0,opacity:1,blending:qe,depthWrite:!1}));this.root.add(r),this.arcs.push({line:r,life:.3})}for(const n of t.slice(1))this.sparks(n,6,[.6,.9,1])}tracer(t,e){const n=this.tracers.find(s=>s.life<=0)??this.tracers[0];n.life=.09,n.mesh.visible=!0,n.mesh.position.copy(t),n.mesh.lookAt(e),n.mesh.scale.set(1,1,t.distanceTo(e))}sparks(t,e=6,n=[1,.75,.3]){e=Math.max(1,Math.round(e*this.intensity));for(let s=0;s<e;s++)this.glow.spawn(t,ea.set(Ie(1.4),Ie(1.4)+.4,Ie(1.4)),.35+Math.random()*.3,[...n,1],.03,0,3)}smokePuff(t,e=.12){this.intensity<1&&Math.random()>this.intensity||this.smoke.spawn(t,ea.set(Ie(.1),.25+Math.random()*.2,Ie(.1)),1.2,[.18,.18,.2,.55],e,.12)}fire(t){this.glow.spawn(t,ea.set(Ie(.15),.35,Ie(.15)),.5,[1,.45+Math.random()*.3,.1,.9],.09,-.08)}explosion(t,e){const n=Math.floor(24*e)+8;for(let r=0;r<n;r++){const a=new A(Ie(1),Ie(1),Ie(1)).normalize().multiplyScalar((.8+Math.random()*1.8)*e);this.glow.spawn(t,a,.5+Math.random()*.5,[1,.5+Math.random()*.4,.1,1],.1*e+.04,0,1)}for(let r=0;r<8*e+3;r++)this.smoke.spawn(t,ea.set(Ie(.6),Ie(.6)+.2,Ie(.6)).multiplyScalar(e),1.6,[.15,.15,.16,.6],.2*e+.1,.25);const s=new I(this.flashGeo,new xe({color:16764006,transparent:!0,blending:qe,depthWrite:!1}));s.position.copy(t),this.root.add(s),this.flashes.push({mesh:s,life:.25,max:.25,size:.25*e+.1})}empWave(t,e=6741503,n=9){const s=new I(this.flashGeo,new xe({color:e,transparent:!0,blending:qe,depthWrite:!1,side:Ae,wireframe:!0}));s.position.copy(t),this.root.add(s),this.flashes.push({mesh:s,life:.7,max:.7,size:n})}detach(t,e,n=1){const s=t.clone(!0);t.getWorldPosition(s.position),t.getWorldQuaternion(s.quaternion),t.getWorldScale(s.scale);const r=[];s.traverse(o=>{if(o.isSprite||o.userData.fx){o.visible=!1;return}const c=o.material;if(!c||!o.isMesh)return;const l=c.clone();l.isMeshStandardMaterial&&(l.color.multiplyScalar(.45),l.emissive.setRGB(.6,.18,.02),l.emissiveIntensity=.6),l.transparent=!0,l.depthWrite=!1,o.material=l,r.push(l)}),this.root.add(s),this.debris.length>=Js.max&&this.removeDebris(this.debris.shift());const a=Js.minLife+Math.random()*(Js.maxLife-Js.minLife);this.debris.push({obj:s,vel:e.clone().multiplyScalar(1.1*n).add(new A(Ie(.6),.3+Math.random()*.6,Ie(.6))),spin:new A(Ie(6),Ie(6),Ie(6)),life:a,max:a,mats:r,burn:0}),t.visible=!1}removeDebris(t){this.root.remove(t.obj);for(const e of t.mats)e.dispose()}update(t){this.glow.update(t),this.smoke.update(t);for(const e of this.debris){e.life-=t,e.vel.y-=Js.gravity*t,e.obj.position.addScaledVector(e.vel,t),e.obj.rotation.x+=e.spin.x*t,e.obj.rotation.y+=e.spin.y*t,e.obj.rotation.z+=e.spin.z*t;const n=Math.max(0,e.life/e.max);for(const s of e.mats)s.opacity=Math.min(1,n*1.6);for(n<.4&&e.obj.scale.multiplyScalar(Math.max(.01,1-t*1.5)),e.burn+=t*(6+14*n);e.burn>1;)e.burn-=1,Math.random()<n?this.fire(e.obj.position):this.smokePuff(e.obj.position,.07)}this.debris=this.debris.filter(e=>e.life>0?!0:(this.removeDebris(e),!1));for(const e of this.flashes){e.life-=t;const n=1-e.life/e.max;e.mesh.scale.setScalar(e.size*(.3+n*1.4)),e.mesh.material.opacity=Math.max(0,1-n)}this.flashes=this.flashes.filter(e=>e.life>0?!0:(this.root.remove(e.mesh),e.mesh.material.dispose(),!1));for(const e of this.arcs)e.life-=t,e.line.material.opacity=Math.max(0,e.life/.3);this.arcs=this.arcs.filter(e=>e.life>0?!0:(this.root.remove(e.line),e.line.geometry.dispose(),e.line.material.dispose(),!1));for(const e of this.tracers)e.life<=0||(e.life-=t,e.mesh.material.opacity=Math.max(0,e.life/.09),e.life<=0&&(e.mesh.visible=!1))}}const Ee=i=>new A(i.x,i.y,i.z),s_=new vt(1,32,20),na=new Lt(.012,.012,1,6,1,!0).translate(0,.5,0).rotateX(Math.PI/2);class r_{constructor(t){$(this,"root",new et);$(this,"fx",new i_);$(this,"world");$(this,"enemies",new Map);$(this,"cargo",new Map);$(this,"portals",new Map);$(this,"boltMeshes",new Map);$(this,"boltGeo",new vt(.07,10,8));$(this,"boltMat",new xe({color:16724770}));$(this,"rocketMeshes",new Map);$(this,"mineMeshes",new Map);$(this,"acidMat",new xe({color:9109306}));$(this,"tetherMeshes",new Map);$(this,"tetherMat",new xe({color:14213868}));$(this,"beamMat",new xe({color:3727871,transparent:!0,opacity:.55,blending:qe,depthWrite:!1}));$(this,"mineGeo",new vt(.06,10,8));$(this,"mineMat",new xe({color:16752672}));$(this,"t",0);$(this,"laserBeam");$(this,"laserCore");$(this,"drone",null);$(this,"humT",0);$(this,"onLaserHum");this.world=t,this.root.add(this.fx.root),this.laserBeam=new I(na,new xe({color:16726634,transparent:!0,opacity:.55,blending:qe,depthWrite:!1})),this.laserCore=new I(na,new xe({color:16777215,transparent:!0,opacity:.9,blending:qe,depthWrite:!1})),this.laserBeam.visible=this.laserCore.visible=!1,this.root.add(this.laserBeam,this.laserCore),t.droneState&&(this.drone=jv(),this.root.add(this.drone)),this.root.add(new td(16777215,4477030,1.1));const e=new Zg(16777215,2);e.position.set(2,4,1),this.root.add(e);for(const n of t.cargo){const s=dd(n.kind);s.position.copy(Ee(n.pos)),this.root.add(s),this.cargo.set(n.id,s)}}handle(t){for(const e of t)switch(e.type){case"shot":e.hit&&this.fx.sparks(Ee(e.end),5);break;case"enemyHit":{const n=this.enemies.get(e.enemyId);n&&(n.flash=.08),this.fx.sparks(Ee(e.point),e.weak?10:4,e.weak?[1,.3,.2]:[1,.8,.4]);break}case"partDestroyed":{const n=this.enemies.get(e.enemyId),s=n==null?void 0:n.view.parts[e.partId];if(n&&s){const r=Ee(e.point).sub(n.view.group.position).normalize();this.fx.detach(s,r),this.fx.explosion(Ee(e.point),.3)}break}case"enemyKilled":{const n=this.enemies.get(e.enemyId);if(n){for(const[s,r]of Object.entries(n.view.parts)){if(!r.visible)continue;const a=s==="body"?new A:r.position.clone().normalize();this.fx.detach(r,a,s==="body"?.3:1)}this.dropView(e.enemyId)}break}case"enemyEscaped":{this.dropView(e.enemyId);break}case"explosion":this.fx.explosion(Ee(e.pos),e.size);break;case"boltShot":this.fx.explosion(Ee(e.pos),.25);break;case"emp":this.fx.empWave(Ee(e.pos));break;case"jam":this.fx.empWave(Ee(e.pos),6160288,6);break;case"blink":this.fx.sparks(Ee(e.from),12,[.75,.45,1]),this.fx.sparks(Ee(e.to),12,[.75,.45,1]);break;case"tesla":this.fx.arc(e.points.map(Ee));break;case"droneShot":this.fx.tracer(Ee(e.from),Ee(e.to)),this.fx.sparks(Ee(e.to),3,[1,.9,.4]);break;case"tetherCut":this.fx.sparks(Ee(e.pos),14,[1,.9,.6]);break;case"brood":this.fx.sparks(Ee(e.pos),18,[1,.75,.25]);break;case"cloakBroken":{const n=this.enemies.get(e.enemyId);n&&this.fx.sparks(n.view.group.position,16,[.3,.85,1]);break}case"telegraph":{const n=this.enemies.get(e.enemyId);n&&(n.charge=.7);break}case"portalOpen":this.fx.sparks(Ee(e.pos),14,e.kind==="in"?[.8,.4,1]:[1,.35,.15]);break;case"portalClose":{const n=this.portals.get(e.id);n&&this.fx.sparks(n.group.position,10,e.kind==="in"?[.8,.4,1]:[1,.35,.15]);break}case"cargoLost":this.fx.sparks(Ee(e.pos),14,[.6,.4,1]);break}}sync(t){this.t+=t;const e=this.world;this.syncPortals();const n=new Set;for(const o of e.enemies){n.add(o.id);let c=this.enemies.get(o.id);if(!c){const d=Yv(o.def);if(o.elite)for(const g of d.mats)g.emissive.setHex(16763210),g.ei=Math.max(g.ei,.45);this.root.add(d.group);const f=[];d.group.traverse(g=>{const v=g.material;v&&f.push({m:v,opacity:v.opacity,transparent:v.transparent})}),c={view:d,flash:0,smoke:0,fire:0,charge:0,spawnT:0,fade:f,vis:1},this.enemies.set(o.id,c),this.fx.sparks(Ee(o.pos),8,[.8,.4,1])}const l=c.view.group;l.position.set(o.pos.x,o.pos.y,o.pos.z),l.rotation.y=o.yaw,o.falling&&(l.rotation.z+=t*6,l.rotation.x+=t*3),o.stun>0&&(l.position.x+=Math.sin(this.t*40+o.id)*.01,Math.random()<t*12&&this.fx.sparks(l.position,2,[.4,.85,1])),c.spawnT+=t;const h=Math.min(1,c.spawnT/.7);l.scale.setScalar((.2+.8*(1-Math.pow(1-h,3)))*(o.def.scale??1));const u=o.hp/o.def.hp;c.flash=Math.max(0,c.flash-t);for(const d of c.view.mats)d.mat.color.copy(d.color).multiplyScalar(.45+.55*u),d.mat.emissive.copy(d.emissive),d.mat.emissiveIntensity=d.ei,c.flash>0?(d.mat.emissive.setRGB(1,1,1),d.mat.emissiveIntensity=1.2):o.stun>0?(d.mat.emissive.setRGB(.3,.8,1),d.mat.emissiveIntensity=.6+Math.sin(this.t*25)*.4):u<.34&&(d.mat.emissive.lerp(new Ht(16720384),.6),d.mat.emissiveIntensity=Math.max(d.ei,.5+Math.sin(this.t*12)*.3));if(this.applyCloak(c,o.cloak,t),this.syncBeam(c,o.beamTo,o.def.id==="node"?13660415:4063114),this.syncBubble(c,o.shielded,o.def.radius*(o.def.scale??1)*1.15),c.flash<=0&&c.view.anim(this.t+o.id),c.view.charge&&(c.charge=Math.max(0,c.charge-t),c.view.charge(c.charge/.7)),u<.66)for(c.smoke+=t*(u<.34?14:7);c.smoke>1;)c.smoke-=1,this.fx.smokePuff(l.position.clone().add(new A((Math.random()-.5)*.15,.1,(Math.random()-.5)*.15)));if(u<.34){for(c.fire+=t*18;c.fire>1;)c.fire-=1,this.fx.fire(l.position.clone().add(new A((Math.random()-.5)*.2,.05,(Math.random()-.5)*.2)));Math.random()<t*4&&this.fx.sparks(l.position,3)}}for(const o of[...this.enemies.keys()])n.has(o)||this.dropView(o);for(const o of e.cargo){const c=this.cargo.get(o.id);c.visible=o.state!=="lost",c.position.set(o.pos.x,o.pos.y,o.pos.z);const l=c.userData.hold;if(c.userData.spin)l.position.y=.026+Math.sin(this.t*2+o.id)*.01,l.rotation.y=this.t*.8+o.id;else{l.rotation.y=Math.atan2(e.player.pos.x-o.pos.x,e.player.pos.z-o.pos.z);const h=c.userData.arms,u=o.state==="carried"||o.state==="falling";h.forEach((d,f)=>{const g=f?1:-1;d.rotation.z=u?g*(2.4+Math.sin(this.t*14+f*Math.PI)*.5):g*(.12+Math.sin(this.t*1.5+o.id)*.04)})}for(const h of c.children)h!==l&&(h.visible=o.state==="idle");c.scale.setScalar(o.state==="carried"?.9:1)}const s=new Set;for(const o of e.bolts){s.add(o.id);let c=this.boltMeshes.get(o.id);c||(c=new I(this.boltGeo,o.acid?this.acidMat:this.boltMat),this.root.add(c),this.boltMeshes.set(o.id,c)),c.position.set(o.pos.x,o.pos.y,o.pos.z),c.scale.setScalar((o.acid?1.3:1)+Math.sin(this.t*30)*.2),this.fx.sparks(c.position,1,o.acid?[.55,1,.2]:[1,.2,.1])}for(const[o,c]of this.boltMeshes)s.has(o)||(this.root.remove(c),this.boltMeshes.delete(o));const r=new Set;for(const o of e.mines){r.add(o.id);let c=this.mineMeshes.get(o.id);c||(c=new I(this.mineGeo,this.mineMat),this.root.add(c),this.mineMeshes.set(o.id,c)),c.position.set(o.pos.x,o.pos.y,o.pos.z),c.scale.setScalar(1+Math.sin(this.t*20)*.25),Math.random()<t*20&&this.fx.sparks(c.position,1,[1,.6,.1])}for(const[o,c]of this.mineMeshes)r.has(o)||(this.root.remove(c),this.mineMeshes.delete(o));const a=new Set;for(const o of e.rockets){a.add(o.id);let c=this.rocketMeshes.get(o.id);c||(c=Kv(),this.root.add(c),this.rocketMeshes.set(o.id,c)),c.position.set(o.pos.x,o.pos.y,o.pos.z),c.lookAt(o.pos.x+o.vel.x,o.pos.y+o.vel.y,o.pos.z+o.vel.z);const l=c.position.clone().addScaledVector(new A(o.vel.x,o.vel.y,o.vel.z).normalize(),-.2);this.fx.fire(l),this.fx.smokePuff(l,.07)}for(const[o,c]of this.rocketMeshes)a.has(o)||(this.root.remove(c),this.rocketMeshes.delete(o));this.syncTethers(),this.syncArms(t),this.fx.update(t)}syncArms(t){var s,r;const e=((s=this.world.laserState)==null?void 0:s.beam)??null;if(this.laserBeam.visible=this.laserCore.visible=!!e,e){const a=Ee(e.from),o=Ee(e.to);for(const[c,l]of[[this.laserBeam,2.4+Math.sin(this.t*50)*.6],[this.laserCore,.8]])c.position.copy(a),c.lookAt(o),c.scale.set(l,l,a.distanceTo(o));Math.random()<t*30&&this.fx.sparks(o,2,[1,.4,.5]),this.humT-=t,this.humT<=0&&(this.humT=.11,(r=this.onLaserHum)==null||r.call(this))}const n=this.world.droneState;if(n&&this.drone){this.drone.position.set(n.pos.x,n.pos.y,n.pos.z);const a=this.world.player.pos;this.drone.rotation.y=Math.atan2(n.pos.x-a.x,n.pos.z-a.z)+Math.PI,this.drone.userData.anim(this.t),this.drone.visible=this.world.jam<=0||Math.sin(this.t*30)>0}}syncTethers(){var e;const t=new Set;for(const n of this.world.tethers){const s=this.world.tetherEnds(n);if(!s)continue;t.add(n.id);const r=((e=this.world.enemies.find(h=>h.id===n.enemyId))==null?void 0:e.def.behavior)==="reaper";let a=this.tetherMeshes.get(n.id);a||(a=new I(na,r?this.beamMat:this.tetherMat),this.root.add(a),this.tetherMeshes.set(n.id,a));const o=Ee(s[0]),c=Ee(s[1]);a.position.copy(o),a.lookAt(c);const l=r?6+Math.sin(this.t*20)*1.5:1.4;a.scale.set(l,l,o.distanceTo(c))}for(const[n,s]of this.tetherMeshes)t.has(n)||(this.root.remove(s),this.tetherMeshes.delete(n))}dropView(t){const e=this.enemies.get(t);e&&(this.root.remove(e.view.group),e.beam&&this.root.remove(e.beam),e.bubble&&this.root.remove(e.bubble),this.enemies.delete(t))}applyCloak(t,e,n){const s=1-e*.93;if(!(Math.abs(s-t.vis)<.002)){t.vis=s;for(const r of t.fade){const a=s<.999||r.transparent;r.m.transparent!==a&&(r.m.transparent=a,r.m.needsUpdate=!0),r.m.opacity=r.opacity*s,r.m.depthWrite=s>.95&&!r.transparent}e>.6&&Math.random()<n*6&&this.fx.sparks(t.view.group.position,1,[.5,.8,1])}}syncBubble(t,e,n){if(!e){t.bubble&&(t.bubble.visible=!1);return}t.bubble||(t.bubble=new I(s_,new xe({color:13660415,transparent:!0,opacity:.18,blending:qe,depthWrite:!1,wireframe:!0})),this.root.add(t.bubble)),t.bubble.visible=!0,t.bubble.position.copy(t.view.group.position),t.bubble.scale.setScalar(n*(1+Math.sin(this.t*4)*.03)),t.bubble.rotation.y=this.t*.4,t.bubble.material.opacity=.15+Math.sin(this.t*6)*.05}syncBeam(t,e,n=4063114){const s=e===null?void 0:this.enemies.get(e);if(!s){t.beam&&(t.beam.visible=!1);return}t.beam||(t.beam=new I(na,new xe({color:n,transparent:!0,opacity:.8,blending:qe,depthWrite:!1})),this.root.add(t.beam));const r=t.view.group.position,a=s.view.group.position;t.beam.visible=!0,t.beam.position.copy(r),t.beam.lookAt(a),t.beam.scale.set(1+Math.sin(this.t*30)*.4,1+Math.sin(this.t*30)*.4,r.distanceTo(a)),Math.random()<.3&&this.fx.sparks(a,1,[.3,1,.5])}syncPortals(){const t=this.world,e=t.player.pos,n=new Set;for(const s of t.portals){n.add(s.id);let r=this.portals.get(s.id);r||(r=Qv(s.kind),r.group.position.copy(Ee(s.pos)),s.floor?r.group.rotation.x=-Math.PI/2:r.group.lookAt(e.x,s.pos.y,e.z),this.root.add(r.group),this.portals.set(s.id,r));const a=a_(s),o=Math.min(1.9,Math.max(1,Math.hypot(s.pos.x-e.x,s.pos.z-e.z)/3.5));r.group.scale.setScalar(Math.max(.001,a*o*(1+Math.sin(this.t*9+s.id)*.03))),r.spin.rotation.z=this.t*(s.kind==="in"?1.5:-2.2),r.shader.uniforms.time.value=this.t,r.shader.uniforms.power.value=s.state==="opening"?1-a:s.state==="closing"?.8:.15+Math.sin(this.t*6)*.1}for(const[s,r]of this.portals)n.has(s)||(this.root.remove(r.group),this.portals.delete(s))}}function a_(i){if(i.state==="opening"){const t=Math.min(1,i.t/un.open),e=1.7;return 1+(e+1)*Math.pow(t-1,3)+e*Math.pow(t-1,2)}if(i.state==="closing"){const t=Math.min(1,i.t/un.close);return t<.25?1+t*.6:1.15*(1-t)/.75}return 1}class o_{constructor(t){this.root=t}splat(){const t=2+Math.floor(Math.random()*3),e=20+Math.random()*60,n=25+Math.random()*45;for(let s=0;s<t;s++){const r=document.createElement("i"),a=18+Math.random()*22;r.style.left=`${e+(Math.random()-.5)*22}%`,r.style.top=`${n+(Math.random()-.5)*18}%`,r.style.width=r.style.height=`${a}vmin`,this.root.appendChild(r),r.addEventListener("animationend",()=>r.remove()),r.addEventListener("beforexrselect",o=>o.preventDefault()),r.addEventListener("pointerdown",o=>{o.preventDefault(),r.classList.add("wipe")})}}clear(){this.root.innerHTML=""}}class c_{constructor(t){$(this,"ctx");$(this,"cracks",[]);$(this,"hull",1);$(this,"strength",1);this.canvas=t,this.ctx=t.getContext("2d"),this.resize(),addEventListener("resize",()=>this.resize())}resize(){const t=Math.min(devicePixelRatio||1,2);this.canvas.width=Math.floor(innerWidth*t),this.canvas.height=Math.floor(innerHeight*t),this.redraw()}reset(){this.cracks=[],this.hull=1,this.canvas.classList.remove("shatter"),this.redraw()}hit(t,e,n){const s=this.canvas.width,r=this.canvas.height,a=t*s,o=e*r,c=Math.min(s,r)*(.11+.17*n),l=5+Math.floor(Math.random()*5),h=Math.random()*Math.PI*2,u=s/innerWidth,d=[],f=[];for(let m=0;m<l;m++){let p=h+m/l*Math.PI*2+(Math.random()-.5)*.5,x=a,y=o;const _=5+Math.floor(Math.random()*3),C=c/_*(.8+Math.random()*.5),T=[[x,y]];for(let R=0;R<_;R++){p+=(Math.random()-.5)*.5;const L=x+Math.cos(p)*C,w=y+Math.sin(p)*C,b=(2.2-R/_*1.4)*u;if(d.push({x1:x,y1:y,x2:L,y2:w,w:b}),x=L,y=w,T.push([x,y]),R>=1&&Math.random()<.3){let P=p+(Math.random()<.5?-1:1)*(.5+Math.random()*.5),V=x,z=y;for(let q=0;q<2+Math.floor(Math.random()*2);q++){P+=(Math.random()-.5)*.4;const K=V+Math.cos(P)*C*.55,X=z+Math.sin(P)*C*.55;d.push({x1:V,y1:z,x2:K,y2:X,w:.9*u}),V=K,z=X}}}f.push(T)}const g=[],v=n>.6?[2,3,5]:[2,4];for(const m of v)for(let p=0;p<l;p++){if(Math.random()<.2)continue;const x=f[p][Math.min(m,f[p].length-1)],y=f[(p+1)%l][Math.min(m,f[(p+1)%l].length-1)];d.push({x1:x[0],y1:x[1],x2:y[0],y2:y[1],w:1*u}),(m===4||m===5)&&g.push({pts:[[a,o],x,y],dark:Math.random()<.5})}this.cracks.push({cx:a,cy:o,r:c,segs:d,chips:g}),this.cracks.length>18&&this.cracks.shift(),this.redraw()}heal(t){const e=Math.round(this.cracks.length*Math.max(0,1-t));this.cracks=this.cracks.slice(this.cracks.length-e),this.hull=t,this.canvas.classList.remove("healing"),this.canvas.offsetWidth,this.canvas.classList.add("healing"),this.redraw()}setHull(t){this.hull=t,this.redraw()}shatter(){for(let t=0;t<7;t++)this.hit(.1+Math.random()*.8,.15+Math.random()*.7,1);this.canvas.classList.add("shatter")}redraw(){const{ctx:t,canvas:e}=this;if(t.clearRect(0,0,e.width,e.height),!(this.strength<=0)){t.save(),t.globalAlpha=this.strength,t.lineCap="round",t.lineJoin="round";for(const n of this.cracks){const s=t.createRadialGradient(n.cx,n.cy,0,n.cx,n.cy,n.r*.35);if(s.addColorStop(0,"rgba(255,255,255,0.4)"),s.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=s,t.beginPath(),t.arc(n.cx,n.cy,n.r*.35,0,Math.PI*2),t.fill(),this.hull<.67)for(const r of n.chips)t.beginPath(),t.moveTo(r.pts[0][0],r.pts[0][1]),t.lineTo(r.pts[1][0],r.pts[1][1]),t.lineTo(r.pts[2][0],r.pts[2][1]),t.closePath(),t.fillStyle=r.dark&&this.hull<.34?"rgba(0,0,0,0.38)":"rgba(255,255,255,0.07)",t.fill();for(const[r,a,o]of[["rgba(0,0,0,0.55)",1.5,1.5],["rgba(255,255,255,0.9)",0,0]]){t.strokeStyle=r;for(const c of n.segs)t.lineWidth=c.w+o,t.beginPath(),t.moveTo(c.x1+a,c.y1+a),t.lineTo(c.x2+a,c.y2+a),t.stroke()}}t.restore()}}}const l_=`
<svg class="cockpit" viewBox="0 0 1600 900" preserveAspectRatio="none" aria-hidden="true">
  <defs>
    <linearGradient id="ck-m" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2f3b49"/><stop offset="1" stop-color="#121820"/></linearGradient>
    <linearGradient id="ck-s" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#10151c"/><stop offset=".7" stop-color="#2b3644"/><stop offset="1" stop-color="#3e4c5d"/></linearGradient>
    <linearGradient id="ck-s2" x1="1" y1="0" x2="0" y2="0"><stop offset="0" stop-color="#10151c"/><stop offset=".7" stop-color="#2b3644"/><stop offset="1" stop-color="#3e4c5d"/></linearGradient>
    <linearGradient id="ck-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".07"/><stop offset=".35" stop-color="#fff" stop-opacity="0"/><stop offset=".6" stop-color="#9ef" stop-opacity=".04"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#ck-g)"/>
  <path d="M0 0H1600V46C1200 92 400 92 0 46Z" fill="url(#ck-m)" stroke="#55677b" stroke-width="2"/>
  <path d="M0 0H70L170 900H0Z" fill="url(#ck-s)" stroke="#55677b" stroke-width="2"/>
  <path d="M1600 0H1530L1430 900H1600Z" fill="url(#ck-s2)" stroke="#55677b" stroke-width="2"/>
  <path d="M0 735C380 772 600 790 800 790S1220 772 1600 735V900H0Z" fill="url(#ck-m)" stroke="#55677b" stroke-width="2"/>
  <path d="M560 790C620 760 980 760 1040 790L1060 900H540Z" fill="#0d1218" stroke="#38e1ff55" stroke-width="2"/>
  <g fill="#38e1ff"><circle cx="640" cy="830" r="5"/><circle cx="670" cy="830" r="5" fill="#5dffa0"/><circle cx="930" cy="830" r="5" fill="#ffb03a"/><circle cx="960" cy="830" r="5" class="blink"/></g>
  <g stroke="#38e1ff66" stroke-width="2" fill="none"><path d="M700 860H900"/><path d="M720 875H880"/></g>
  <g fill="#6a7c90"><circle cx="40" cy="120" r="4"/><circle cx="62" cy="330" r="4"/><circle cx="85" cy="540" r="4"/><circle cx="1560" cy="120" r="4"/><circle cx="1538" cy="330" r="4"/><circle cx="1515" cy="540" r="4"/></g>
</svg>`,kt=(i,t)=>i.querySelector(t);class h_{constructor(t){$(this,"firing",!1);$(this,"held",new Set);$(this,"pressed",new Set);$(this,"onPause");$(this,"onResume");$(this,"onQuit");$(this,"onFloor");$(this,"onRepair");$(this,"msgT",0);$(this,"arrows",new Map);$(this,"slots",[]);this.root=t,t.innerHTML=`
      ${l_}
      <div class="night"></div>
      <div class="space"></div>
      <div class="dmg"></div>
      <div class="bossbar" style="display:none"><b></b><div class="bar"><i></i></div></div>
      <div class="jammed" style="display:none">ПОМЕХИ · доп. оружие отключено</div>
      <div class="lockbox" data-b><i></i><span></span></div>
      <div class="top" data-b><span class="pill pause tap">‖</span><span class="pill wave"></span><span class="pill enemies"></span>
        <span class="pill cargo"></span><span class="pill gems"></span>
        <div class="bar hull"><i></i></div></div>
      <div class="cross" data-b></div>
      <div class="msg"></div>
      <div class="banner"></div>
      <div class="heat" data-b>ЗЕНИТКА<div class="bar"><i></i></div></div>
      <div class="fire tap" data-b>ОГОНЬ</div>
      <div class="slot tap" data-w="rockets" style="display:none"><svg viewBox="0 0 24 24"><use href="#w-rocket"/></svg><span class="ammo"></span><i class="ring"></i></div>
      <div class="slot tap" data-w="emp" style="display:none"><b>◎</b><span>ЭМИ</span><i class="cd"></i></div>
      <div class="slot tap" data-w="laser" style="display:none"><b>≈</b><span>ЛАЗЕР</span><i class="cd"></i></div>
      <div class="slot tap" data-w="tesla" style="display:none"><b>ϟ</b><span>ТЕСЛА</span><i class="cd"></i></div>
      <div class="slot passive" data-w="drone" style="display:none"><b>✦</b><span>ОСА</span></div>
      <div class="arrows"></div>
      <div class="repairbtn tap" style="display:none">✚ РЕМОНТ <span></span></div>
      <div class="panel tap" data-p style="display:none"></div>
      <div class="end" style="display:none"></div>
      <div class="end pausebox" style="display:none"><div class="card"><h2>ПАУЗА</h2><div class="pinfo"></div>
        <div class="col"><button class="resume">Продолжить</button>
        <div class="row floorrow"><span class="small">Пол съехал?</span><button class="ghost fup">Пол выше</button><button class="ghost fdown">Пол ниже</button></div>
        <button class="ghost quit">Выйти в меню</button></div></div></div>`,kt(t,".pause").addEventListener("click",()=>{var r;return(r=this.onPause)==null?void 0:r.call(this)}),kt(t,".resume").addEventListener("click",()=>{var r;return(r=this.onResume)==null?void 0:r.call(this)}),kt(t,".quit").addEventListener("click",()=>{var r;return(r=this.onQuit)==null?void 0:r.call(this)}),kt(t,".fup").addEventListener("click",()=>{var r;return(r=this.onFloor)==null?void 0:r.call(this,.05)}),kt(t,".fdown").addEventListener("click",()=>{var r;return(r=this.onFloor)==null?void 0:r.call(this,-.05)}),kt(t,".repairbtn").addEventListener("click",()=>{var r;return(r=this.onRepair)==null?void 0:r.call(this)});for(const r of t.querySelectorAll(".tap, .panel, .end"))r.addEventListener("beforexrselect",a=>a.preventDefault());const e=kt(t,".fire"),n=r=>{r.preventDefault(),this.firing=!0,e.classList.add("on")},s=()=>{this.firing=!1,e.classList.remove("on")};e.addEventListener("pointerdown",n),e.addEventListener("pointerup",s),e.addEventListener("pointercancel",s),e.addEventListener("pointerleave",s),e.addEventListener("contextmenu",r=>r.preventDefault());for(const r of t.querySelectorAll(".slot.tap")){const a=r.dataset.w;r.addEventListener("pointerdown",c=>{c.preventDefault(),this.held.add(a),this.pressed.add(a),r.classList.add("on")});const o=()=>{this.held.delete(a),r.classList.remove("on")};r.addEventListener("pointerup",o),r.addEventListener("pointercancel",o),r.addEventListener("pointerleave",o)}}get rocketHeld(){return this.held.has("rockets")}isHeld(t){return this.held.has(t)}slotEl(t){return kt(this.root,`.slot[data-w="${t}"]`)}showBattle(t){for(const e of this.root.querySelectorAll("[data-b], .msg, .arrows"))e.style.display=t?"":"none";for(const e of this.root.querySelectorAll(".slot"))e.style.display=t&&this.slots.includes(e.dataset.w)?"":"none";t||(this.firing=!1,this.setBoss(null),this.setRepair(null),this.setNight(!1),this.setSpace(!1),this.setJam(!1))}showPrep(t){const e=kt(this.root,".panel");e.style.display="",e.innerHTML=`<p>${t.cam?`Держи телефон на уровне груди. Наведи оранжевый кружок на пол перед собой и коснись экрана — там встанет груз (${t.min}–${t.max}). Поставлено: <b>${t.count}</b>`:t.floorFound?`Фиолетовый веер — сектор порталов. Ставь груз в нём, касаясь пола (${t.min}–${t.max}). Поставлено: <b>${t.count}</b>`:"Наведи камеру на пол в 1–2 м и слегка поводи. Не нашёл? Коснись экрана или нажми «Авто» — поставлю на глаз."}</p>
      <div class="row"><button class="ghost auto">Авто</button><button class="go" ${t.count<t.min?"disabled":""}>В БОЙ</button></div>`,kt(e,".auto").onclick=t.onAuto,kt(e,".go").onclick=t.onStart}hidePrep(){kt(this.root,".panel").style.display="none"}update(t,e){const n=this.root;kt(n,".wave").textContent=`ВОЛНА ${Math.max(1,t.wave+1)}/${t.waves}`,kt(n,".enemies").textContent=`врагов: ${t.left}`,kt(n,".cargo").innerHTML=t.cargo.map((r,a)=>`<span class="ic ${t.kind[a]} ${r==="lost"?"lost":""}"></span>`).join(""),kt(n,".gems").textContent=`◆ ${t.crystals}`;const s=kt(n,".hull");kt(s,"i").style.width=`${t.hull}%`,s.classList.toggle("low",t.hull<34),kt(n,".dmg").classList.toggle("danger",t.hull<34&&t.hull>0),kt(n,".heat i").style.width=`${t.heat}%`,kt(n,".heat .bar").classList.toggle("over",t.overheated),kt(n,".fire").classList.toggle("hot",t.overheated),kt(n,".fire").textContent=t.overheated?"ОСТЫВАЕТ":"ОГОНЬ",this.msgT>0&&(this.msgT-=e,this.msgT<=0&&kt(n,".msg").classList.remove("on"))}say(t,e=5e3){const n=kt(this.root,".msg");n.textContent=t,n.classList.add("on"),this.msgT=e}banner(t){const e=kt(this.root,".banner");e.textContent=t,e.classList.remove("on"),e.offsetWidth,e.classList.add("on")}hitMarker(t){const e=kt(this.root,".cross");e.classList.add("hit"),e.classList.toggle("weak",t),setTimeout(()=>e.classList.remove("hit"),80)}setLock(t){const e=kt(this.root,".lockbox");if(kt(this.root,".cross").classList.toggle("lock",t!==null),!t){e.classList.remove("on");return}const s=Math.max(36,Math.min(260,t.size));e.classList.add("on"),e.classList.toggle("locking",t.state==="locking"),e.classList.toggle("locked",t.state==="locked"),e.style.left=`${t.x*100}%`,e.style.top=`${t.y*100}%`,e.style.width=e.style.height=`${s}px`,kt(e,"span").textContent=t.label}damageFlash(){const t=kt(this.root,".dmg");t.classList.add("on"),setTimeout(()=>t.classList.remove("on"),120)}setIndicators(t){const e=kt(this.root,".arrows"),n=new Set;for(const s of t){n.add(s.id);let r=this.arrows.get(s.id);r||(r=document.createElement("div"),r.className="arrow",r.style.position="absolute",e.appendChild(r),this.arrows.set(s.id,r)),r.classList.toggle("danger",s.danger);let a=s.x,o=s.y;s.behind&&(a=-a,o=-o,Math.abs(a)<.05&&Math.abs(o)<.05&&(o=-1));const c=Math.max(Math.abs(a)/.9,Math.abs(o)/.8,1e-4),l=a/c,h=o/c;r.style.left=`${(.5+l*.5)*100}%`,r.style.top=`${(.5-h*.5)*100}%`,r.style.transform=`rotate(${Math.atan2(a,o)*180/Math.PI}deg)`}for(const[s,r]of this.arrows)n.has(s)||(r.remove(),this.arrows.delete(s))}setSlots(t){this.slots=t;for(const e of this.root.querySelectorAll(".slot")){const n=t.indexOf(e.dataset.w);e.style.display=n>=0?"":"none",e.classList.toggle("s0",n===0),e.classList.toggle("s1",n===1)}this.held.clear(),this.pressed.clear()}takePress(t){const e=this.pressed.has(t);return this.pressed.delete(t),e}takeEmp(){return this.takePress("emp")}setRepair(t){const e=kt(this.root,".repairbtn");e.style.display=t?"":"none",t&&(kt(e,"span").textContent=`×${t}`)}setBoss(t){const e=kt(this.root,".bossbar");if(e.style.display=t?"":"none",!t)return;const n=t.shielded?" · ЩИТ: сбей узлы":t.hidden?" · СКРЫТ":"";kt(e,"b").textContent=t.name.toUpperCase()+n,kt(e,"i").style.width=`${Math.max(0,t.frac)*100}%`,e.classList.toggle("hidden",t.hidden||!!t.shielded)}setNight(t){kt(this.root,".night").classList.toggle("on",t)}setSpace(t){kt(this.root,".space").classList.toggle("on",t)}setJam(t){kt(this.root,".jammed").style.display=t?"":"none";for(const e of this.root.querySelectorAll(".slot"))e.classList.toggle("jam",t)}updateSlots(t){if(t.rockets&&this.slots.includes("rockets")){const n=this.slotEl("rockets");kt(n,".ammo").textContent=`×${t.rockets.ammo}`,n.classList.toggle("empty",t.rockets.ammo<=0),n.classList.toggle("locked",t.rockets.locked),kt(n,".ring").style.setProperty("--k",`${Math.round(t.rockets.lock*100)}%`)}const e=(n,s)=>{if(s===void 0||!this.slots.includes(n))return;const r=this.slotEl(n);r.classList.toggle("cooling",s>0),kt(r,".cd").style.setProperty("--k",`${Math.round(s*100)}%`)};e("emp",t.emp),e("tesla",t.tesla),t.laser&&this.slots.includes("laser")&&(e("laser",t.laser.over?t.laser.heat/100:0),this.slotEl("laser").classList.toggle("hotbar",!t.laser.over&&t.laser.heat>60))}showPause(t,e=""){const n=kt(this.root,".pausebox");n.style.display=t?"":"none",kt(n,".pinfo").textContent=e,t&&(this.firing=!1)}setCockpit(t){kt(this.root,".cockpit").style.display=t?"":"none"}showEnd(t,e){this.firing=!1;const n=kt(this.root,".end");n.style.display="";const s=t.win?"СЕКТОР ОЧИЩЕН":t.reason==="hull"?"СВЯЗЬ ПОТЕРЯНА":"ГРУЗ УТАЩИЛИ",r=t.win?`Сектор ${t.sector} · ${t.sectorName}`:`Сектор ${t.sector} · дошёл до волны ${t.wave}/${t.waves}`,a=t.win?"":t.reason==="hull"?"Мара: сбивай сгустки и тараны раньше — и укрепи стекло в Ангаре.":"Мара: сначала воры с грузом — их видно по лучу. Хваталке бей по руке.";n.innerHTML=`<div class="card endcard"><h2 class="${t.win?"win":"lose"}">${s}</h2>
      <div class="mute">${r}</div>
      <div class="stars">${"★".repeat(t.stars)}<span class="off">${"★".repeat(3-t.stars)}</span></div>
      <div class="endgrid">
        <table><tr><td>Сбито</td><td><b>${t.kills}</b></td></tr>
        <tr><td>Груз спасён</td><td><b>${t.cargoSaved}/${t.cargoTotal}</b></td></tr>
        <tr><td>Корпус</td><td><b>${t.hullLeft}%</b></td></tr>
        <tr><td>Точность</td><td><b>${t.accuracy}%</b></td></tr></table>
        <div class="col"><div class="reward">◆ ${t.crystals+t.bonus}${t.cores?` · ◈ ${t.cores}`:""}${t.bonus?`<div class="small mute">из них бонус за сектор ${t.bonus}</div>`:""}</div>
        ${t.newEnemies.length?`<button class="ghost" data-c="bestiary">Новые враги: ${t.newEnemies.join(", ")} ›</button>`:""}</div>
      </div>
      ${a?`<div class="advice">${a}</div>`:""}
      <div class="row">
        ${t.canUpgrade?'<button class="gold" data-c="hangar">Можно улучшить ›</button>':'<button class="ghost" data-c="hangar">Ангар</button>'}
        <span class="grow"></span><button class="ghost" data-c="retry">${t.win?"Повторить":"Ещё раз"}</button>
        ${t.win&&t.final?'<button class="gold" data-c="ending">Финал ›</button>':`<button data-c="${t.win&&t.hasNext?"next":"menu"}">${t.win&&t.hasNext?"Дальше ›":"В меню"}</button>`}
      </div></div>`;for(const o of n.querySelectorAll("[data-c]"))o.onclick=()=>e(o.dataset.c)}hideEnd(){kt(this.root,".end").style.display="none",this.showPause(!1)}}const Fs=i=>document.getElementById(i),cc=3,ud=5,fd=1.4,d_=Math.max(1,Math.min(10,Number(new URLSearchParams(location.search).get("fast"))||1)),Oe=new Pg({antialias:!0,alpha:!0});Oe.setClearColor(0,0);Oe.setPixelRatio(Math.min(devicePixelRatio,2));Oe.xr.enabled=!0;const je=new Xh;je.environment=new sc(Oe).fromScene(new tv,.04).texture;je.environmentIntensity=.9;const en=new pn(70,innerWidth/innerHeight,.05,60);en.position.set(0,fd,0);const ai=Fs("ov"),Et=new h_(Fs("hud")),Wi=new c_(Fs("cracks")),pd=new o_(Fs("acid")),ce=new Hv,Jt=new Bv(Fs("screens"),Av(),{startAR:i=>void m_(i),startCam:i=>void y_(i),startDemo:i=>vd(i),onSettings:()=>Uc()});let Ye=1,mr=!1,lc=null,lh=!1,ir=null;function Uc(){const i=Jt.save.settings;document.body.classList.toggle("lefty",i.lefty),Et.setCockpit(i.cockpit),Wi.strength=i.cracks,ce.setVolume(i.volume),document.body.classList.toggle("lowfx",i.lowfx),mn&&(mn.fx.intensity=i.lowfx?.35:1)}let Fn="demo",sn="menu",$e=null,or=null,It=null,mn=null;const cr=new t_;let po=0,As=0,Rs=0,lr=!1,hc=!1,dc=!1,uc=!1,fc=!1,pc=0,xs="",md=0;const u_=new URLSearchParams(location.search).has("debug");document.addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("dblclick",i=>i.preventDefault(),{passive:!1});for(const i of["gesturestart","gesturechange"])document.addEventListener(i,t=>t.preventDefault(),{passive:!1});document.addEventListener("touchstart",i=>{i.touches.length>1&&sn!=="menu"&&i.preventDefault()},{passive:!1});let hh=0;document.addEventListener("touchend",i=>{const t=performance.now();t-hh<350&&sn!=="menu"&&i.preventDefault(),hh=t},{passive:!1});addEventListener("error",i=>{xs=String(i.message)});addEventListener("unhandledrejection",i=>{xs=String(i.reason)});const Ke=new I(new Ns(.08,.11,32).rotateX(-Math.PI/2),new xe({color:3727871}));Ke.matrixAutoUpdate=!1;Ke.visible=!1;const Wn=new I(new Ns(.08,.11,32).rotateX(-Math.PI/2),new xe({color:16756794,transparent:!0,opacity:.8}));Wn.visible=!1;const f_=1,gr=new td(16777215,4477030,2.2),mo=Math.PI/3,oi=new et;{const i=new I(new Qe(3,32,-Math.PI/2-mo/2,mo).rotateX(-Math.PI/2),new xe({color:11758591,transparent:!0,opacity:.16,depthWrite:!1,side:Ae})),t=new jh(new Ue().setFromPoints([0,1].flatMap(e=>{const n=(e?1:-1)*mo/2;return[new A(0,0,0),new A(Math.sin(n)*3,0,Math.cos(n)*3)]})),new Sa({color:13999103,transparent:!0,opacity:.8}));oi.add(i,t)}const Sn=[];let Xn=null,Cs="";function ga(){const i=`${Sn.length}|${Ke.visible||Xn!==null}`;i!==Cs&&(Cs=i,Et.showPrep({count:Sn.length,max:ud,min:cc,floorFound:Xn!==null,cam:Fn==="cam",onStart:()=>yd(),onAuto:()=>p_()}))}function Ps(i,t=!0){if(Sn.length>=ud)return;if(t&&(Fn==="ar"||Fn==="cam")){const n=li();if(Math.hypot(i.x-n.pos.x,i.z-n.pos.z)<f_){Et.say("Слишком близко — поставь груз подальше, в 1–3 м.",2e3);return}}const e=dd(Sn.length%2===0?"colonist":"crystal");e.position.set(i.x,i.y,i.z),je.add(e),Sn.push({pos:i,obj:e})}const va=1.3;function _a(i,t){const e=i.dir.clone();if(e.y>-.15)return null;const n=Xn?i.pos.y-Xn.y:va,s=-n/e.y;return s<.8||s>6?null:O(i.pos.x+e.x*s,i.pos.y-n,i.pos.z+e.z*s)}function p_(){if(!Ke.visible&&!Xn){const e=li(),n=new A(e.dir.x,0,e.dir.z).normalize(),s=Math.max(0,cc-Sn.length);for(let r=0;r<s;r++){const a=(r-(s-1)/2)*.6,o=n.clone().applyAxisAngle(new A(0,1,0),a).multiplyScalar(1.8);Ps(O(e.pos.x+o.x,e.pos.y-va,e.pos.z+o.z))}Cs="";return}const i=Ke.visible?O(...new A().setFromMatrixPosition(Ke.matrix).toArray()):Xn;if(!i)return;const t=Math.max(0,cc-Sn.length);for(let e=0;e<t;e++){const n=e/Math.max(1,t)*Math.PI*2+.5;Ps(O(i.x+Math.cos(n)*.6,i.y,i.z+Math.sin(n)*.6))}Cs=""}function li(){if(Fn==="ar"&&Oe.xr.isPresenting){const t=Oe.xr.getCamera(),e=new A,n=new A;return t.getWorldPosition(e),t.getWorldDirection(n),{pos:e,dir:n,view:t.cameras[0]??t}}Fn==="cam"&&Ls.ok?en.quaternion.setFromAxisAngle(g_,As).multiply(Ls.q):en.rotation.set(Rs,As,0,"YXZ"),en.updateMatrixWorld(!0);const i=new A;return en.getWorldDirection(i),{pos:en.position.clone(),dir:i,view:en}}function mc(i,t){const e=new A(t.x,t.y,t.z).applyMatrix4(i.matrixWorldInverse);if(e.z>=0)return{x:e.x,y:e.y,behind:!0};const n=e.applyMatrix4(i.projectionMatrix);return{x:n.x,y:n.y,behind:!1}}async function m_(i){Ye=i,ce.unlock();try{$e=await navigator.xr.requestSession("immersive-ar",{requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay","local-floor"],domOverlay:{root:ai}})}catch(e){Jt.arStatus=`Не удалось запустить AR: ${String(e)}`,Jt.show();return}Fn="ar",document.documentElement.classList.add("ar"),document.body.style.background="transparent",document.documentElement.style.background="transparent",Oe.setSize(innerWidth,innerHeight),document.body.appendChild(Oe.domElement),Jt.hide(),ai.classList.add("on"),await Oe.xr.setSession($e);const t=await $e.requestReferenceSpace("viewer");try{or=await $e.requestHitTestSource({space:t,entityTypes:["plane","point"]})??null}catch{try{or=await $e.requestHitTestSource({space:t})??null}catch(e){xs=`hit-test: ${String(e)}`}}$e.addEventListener("end",()=>E_()),$e.addEventListener("select",()=>{if(sn==="prep")if(Ke.visible)Ps(O(...new A().setFromMatrixPosition(Ke.matrix).toArray()));else{const e=li(),n=_a(e);n?Ps(n):Et.say("Наведи камеру на пол перед собой.",1800)}}),je.add(Ke,Wn,gr,oi),Et.showBattle(!1),sn="prep",Cs="",ga()}const g_=new A(0,1,0),Ls={q:new Ei,ok:!1},dh=new kn,v_=new Ei(-Math.sqrt(.5),0,0,Math.sqrt(.5)),__=new Ei;let xn=null,vs=null;function gd(i){var n;if(i.alpha===null||i.beta===null||i.gamma===null)return;const t=gu.DEG2RAD,e=(((n=screen.orientation)==null?void 0:n.angle)??window.orientation??0)*t;dh.set(i.beta*t,i.alpha*t,-i.gamma*t,"YXZ"),Ls.q.setFromEuler(dh).multiply(v_).multiply(__.setFromAxisAngle(new A(0,0,1),-e)),Ls.ok=!0}async function y_(i){Ye=i,ce.unlock();const t=window.DeviceOrientationEvent,e=t!=null&&t.requestPermission?t.requestPermission().catch(()=>"denied"):Promise.resolve("granted");try{vs=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"environment"}},audio:!1})}catch(s){Jt.arStatus=`Нет доступа к камере: ${String(s)}`,Jt.show();return}const n=await e==="granted";Ls.ok=!1,addEventListener("deviceorientation",gd),xn=document.createElement("video"),xn.id="camfeed",xn.setAttribute("playsinline",""),xn.muted=!0,xn.autoplay=!0,xn.srcObject=vs,document.body.prepend(xn),xn.play().catch(()=>{}),Fn="cam",document.body.classList.add("cam"),Jt.hide(),document.body.appendChild(Oe.domElement),Oe.setSize(innerWidth,innerHeight),en.fov=62,en.aspect=innerWidth/innerHeight,en.updateProjectionMatrix(),As=0,Rs=-.5,_d(),ai.classList.add("on"),je.add(Wn,gr,oi),Et.showBattle(!1),sn="prep",Cs="",ga(),n||Et.say("Нет доступа к датчикам движения — поворачивай вид свайпом.",5e3)}function x_(){if(Fn!=="cam"||sn!=="prep")return;const i=_a(li());i?Ps(i):Et.say("Наведи камеру на пол перед собой.",1800)}function M_(){removeEventListener("deviceorientation",gd),vs==null||vs.getTracks().forEach(i=>i.stop()),vs=null,xn==null||xn.remove(),xn=null,Ls.ok=!1,document.body.classList.remove("cam"),en.fov=70,en.updateProjectionMatrix()}function vd(i){Ye=i,ce.unlock(),Fn="demo",document.body.classList.add("demo"),Jt.hide(),document.body.appendChild(Oe.domElement),Oe.setSize(innerWidth,innerHeight),document.body.style.background="radial-gradient(ellipse at 50% 80%, #2b3a4d, #0a0e14 75%)",ir=new Qg(12,24,3727871,1854044),je.add(ir),ai.classList.add("on"),As=0,Rs=0;const t=[[0,2],[2,.6],[-2,.6],[1.3,-1.6],[-1.3,-1.6]];for(const[e,n]of t)Ps(O(e,0,n));je.add(gr),yd(),_d()}function _d(){if(lh)return;lh=!0;const i=Oe.domElement;let t=null,e=0;i.addEventListener("pointerdown",n=>{t={x:n.clientX,y:n.clientY},e=0}),addEventListener("pointerup",()=>{t&&e<12&&x_(),t=null}),addEventListener("pointermove",n=>{t&&(e+=Math.abs(n.clientX-t.x)+Math.abs(n.clientY-t.y),As-=(n.clientX-t.x)*.006,Rs=Math.max(-1.2,Math.min(1.2,Rs-(n.clientY-t.y)*.006)),t={x:n.clientX,y:n.clientY})}),addEventListener("keydown",n=>{n.code==="Space"&&(lr=!0),n.code==="KeyR"&&(hc=!0),n.code==="KeyE"&&(dc=!0),n.code==="KeyF"&&(uc=!0),n.code==="KeyT"&&(fc=!0)}),addEventListener("keyup",n=>{n.code==="Space"&&(lr=!1),n.code==="KeyR"&&(hc=!1),n.code==="KeyF"&&(uc=!1)}),addEventListener("resize",()=>{Oe.setSize(innerWidth,innerHeight),en.aspect=innerWidth/innerHeight,en.updateProjectionMatrix()})}function yd(){const i=li(),t=Sn.map(h=>h.pos),e=t.reduce((h,u)=>h+u.y,0)/t.length,n=Math.max(...t.map(h=>Math.hypot(h.x-i.pos.x,h.z-i.pos.z))),s=Math.min(12,Math.max(9,n+6)),r=Math.atan2(i.dir.x,i.dir.z),a=Date.now()&65535,o={center:O(i.pos.x,i.pos.y,i.pos.z),yaw:r,rMin:s-2,rMax:s},c=ri.find(h=>h.id===Ye);It=new Mv({seed:a,floorY:e,player:O(i.pos.x,i.pos.y,i.pos.z),cargo:t,zone:o,waves:c.waves,enemyDefs:Lc,front:r,flak:Pv(Jt.save),maxHull:Iv(Jt.save),weapons:Lv(Jt.save),regen:Dv(Jt.save)});const l={rockets:It.rocketState,emp:It.empState,laser:It.laserState,tesla:It.teslaState,drone:It.droneState};Et.setSlots(Jt.save.loadout.filter(h=>!!h&&!!l[h]));for(const h of Sn)je.remove(h.obj);Sn.length=0,je.remove(Ke,Wn,gr,oi),mn=new r_(It),mn.onLaserHum=()=>ce.laserHum(),je.add(mn.root),je.add(cr.group),Wi.reset(),Et.hidePrep(),Et.hideEnd(),Et.showBattle(!0),Uc(),mr=!1,hr=!1,Dn.length=0,sn="battle",Et.setNight(Ye===3||Ye===4),Et.setSpace(Ye===5),pd.clear(),Et.say("Мара: порталы откроются перед тобой. Стрелки по краям подскажут, откуда угроза.",6e3)}const Dn=[];let hr=!1;function b_(i,t){var n,s,r;const e=It;for(const a of i)switch(a.type){case"shot":{ce.shot(),mn.fx.tracer(cr.fire(),new A(a.end.x,a.end.y,a.end.z));break}case"enemyHit":a.quiet||(Et.hitMarker(a.weak),ce.hit());break;case"partDestroyed":ce.partBreak();break;case"explosion":ce.at(a.pos).explosion(a.size);break;case"playerHit":{const o=Math.min(1,a.dmg/12),c=mc(t.view,a.from);let l=(c.x+1)/2,h=(1-c.y)/2;c.behind&&(l=.15+Math.random()*.7,h=.85),l=Math.min(.9,Math.max(.1,l+(Math.random()-.5)*.08)),h=Math.min(.9,Math.max(.12,h+(Math.random()-.5)*.08)),Wi.hit(l,h,o),Wi.setHull(a.hull/e.player.maxHull),Et.damageFlash(),ce.glass(o),Jt.save.settings.vibration&&((n=navigator.vibrate)==null||n.call(navigator,o>.8?[60,30,90]:40)),a.hull<=0&&Wi.shatter();break}case"boltFired":ce.at(a.from).alarm(),Dn.push({id:`b${Math.random()}`,pos:a.from,ttl:1.2,danger:!0});break;case"telegraph":ce.at(a.pos).alarm(),Dn.push({id:`t${a.enemyId}`,pos:a.pos,ttl:.9,danger:!0});break;case"portalOpen":ce.at(a.pos).portal(a.kind),Dn.push({id:`p${a.id}`,pos:a.pos,ttl:2.5,danger:a.kind==="out"});break;case"portalClose":ce.portalClose();break;case"cargoGrabbed":ce.steal(),Et.say("Груз похищают! Сбей вора!",2500);break;case"cargoDropped":Et.say("Груз упал — цел.",2e3);break;case"cargoLost":ce.lost(),Et.say("Груз потерян!",2500);break;case"waveStart":Et.banner(`ВОЛНА ${a.index+1} — ${a.name.toUpperCase()}`);break;case"waveClear":Et.say("Волна отбита. Передышка.",3e3);break;case"message":Et.say(a.text,6e3);break;case"lockOn":ce.lock();break;case"mineDropped":ce.alarm(),Et.say("Мина! Сбей её в воздухе!",1800);break;case"mineBlast":a.destroyed&&Et.say("Мина уничтожила груз!",2500);break;case"rocketFired":ce.rocket();break;case"emp":ce.emp(),Et.say(a.stunned?`ЭМИ: оглушено ${a.stunned}`:"ЭМИ: никого в зоне",1500),Jt.save.settings.vibration&&((s=navigator.vibrate)==null||s.call(navigator,80));break;case"overheat":ce.overheat(),Et.say("Перегрев зенитки!",1800);break;case"jam":ce.at(a.pos).jam(),Dn.push({id:`j${Math.random()}`,pos:a.pos,ttl:1.5,danger:!0}),Jt.save.settings.vibration&&((r=navigator.vibrate)==null||r.call(navigator,[30,30,30]));break;case"blink":ce.blink();break;case"tesla":ce.zap();break;case"droneShot":ce.pew();break;case"cloakBroken":Et.say("Генератор невидимости разбит — больше не скроется!",2500);break;case"tether":ce.alarm(),Et.say("Трос! Перебей его очередью!",2e3);break;case"tetherCut":Et.say("Трос перебит — груз падает.",1800);break;case"acidHit":pd.splat(),ce.glass(.3);break;case"brood":Et.say(`Матка выпустила жуков: ${a.n}`,1500);break;case"shake":S_(a.power);break;case"end":w_(a);break}}function S_(i){var t;!Jt.save.settings.cracks||Jt.save.settings.lowfx||(ai.classList.remove("shake","big"),ai.offsetWidth,ai.classList.add("shake"),i>.6&&ai.classList.add("big"),Jt.save.settings.vibration&&((t=navigator.vibrate)==null||t.call(navigator,Math.round(30+i*90))))}function w_(i){if(hr)return;hr=!0;const t=It,e=i.result==="win";e&&ce.win();const n=Jt.save,s=ri.find(d=>d.id===Ye),r=t.cargo.filter(d=>d.state!=="lost").length,a=Uv(e,r,t.stats.cargoTotal,t.player.hull/t.player.maxHull),o=new Set(Object.keys(n.seen)),c=hd(n,{sector:Ye,win:e,crystals:t.stats.crystals,cores:t.stats.cores,stars:a,wavesDone:e?t.waveCount:Math.max(0,t.waveIdx),kills:t.killsBy,seen:[...t.seen]});Ea(n);const l=[...t.seen].filter(d=>!o.has(d)).map(d=>Lc[d].name),h=ks.some(d=>Dc(n,d.key)&&(!d.requires||n.owned.includes(d.requires))),u=ri.find(d=>d.id===Ye+1);setTimeout(()=>{sn="end",Et.showBattle(!1),Et.showEnd({win:e,reason:i.reason,kills:t.stats.kills,crystals:t.stats.crystals,cores:t.stats.cores,accuracy:t.stats.shots?Math.round(t.stats.hits/t.stats.shots*100):0,cargoSaved:r,cargoTotal:t.stats.cargoTotal,hullLeft:Math.round(t.player.hull/t.player.maxHull*100),stars:a,bonus:c.bonus,sector:Ye,sectorName:s.name,wave:Math.max(1,t.waveIdx+1),waves:t.waveCount,newEnemies:l,canUpgrade:h,hasNext:!!(u&&u.waves),final:Ye===ri[ri.length-1].id},d=>xd(d))},e?800:3e3)}function xd(i){const t={next:{name:"briefing",arg:Ye+1},retry:{name:"briefing",arg:Ye},hangar:{name:"hangar"},bestiary:{name:"bestiary"},ending:{name:"ending"},menu:{name:"menu"}};lc=t[i]??t.menu,Md(),$e?$e.end():bd()}function Md(){mn&&je.remove(mn.root),je.remove(cr.group,Ke,Wn,gr,oi);for(const i of Sn)je.remove(i.obj);Sn.length=0,ir&&(je.remove(ir),ir=null),It=null,mn=null,mr=!1,lr=!1,Dn.length=0,Xn=null,Ke.visible=!1,Wn.visible=!1,Et.hideEnd(),Et.hidePrep(),Et.showBattle(!1),Wi.reset(),sn="menu"}function E_(){$e=null,or=null,Md(),bd()}function bd(){ai.classList.remove("on"),document.documentElement.classList.remove("ar"),document.body.classList.remove("demo"),M_(),document.body.style.background="",document.documentElement.style.background="",Oe.domElement.remove();const i=lc??{name:"menu"};lc=null,Jt.show(i.name,i.arg)}Et.onPause=()=>{if(sn!=="battle"||hr)return;mr=!0;const i=It;Et.showPause(!0,`Сектор ${Ye} · волна ${Math.max(1,i.waveIdx+1)}/${i.waveCount} · корпус ${Math.round(i.player.hull/i.player.maxHull*100)}%`)};Et.onResume=()=>{mr=!1,Et.showPause(!1)};Et.onFloor=i=>{It==null||It.shiftFloor(i),Et.say(i>0?"Пол поднят на 5 см":"Пол опущен на 5 см",1200)};Et.onRepair=()=>{const i=It,t=Jt.save;!i||t.kits<=0||!i.repair(ni.heal)||(t.kits--,Ea(t),Wi.heal(i.player.hull/i.player.maxHull),ce.repair(),Et.say(`Ремонт: корпус ${Math.round(i.player.hull/i.player.maxHull*100)}%`,1800))};Et.onQuit=()=>{It&&!hr&&(hd(Jt.save,{sector:Ye,win:!1,crystals:It.stats.crystals,stars:0,wavesDone:Math.max(0,It.waveIdx),kills:It.killsBy,seen:[...It.seen]}),Ea(Jt.save)),xd("menu")};function T_(){var t;const i=Fs("diag");if(Fn!=="ar"||sn==="battle"&&!u_&&!xs){i.textContent="";return}i.textContent=`AR кадров:${pc} hit:${md} blend:${($e==null?void 0:$e.environmentBlendMode)??"-"} overlay:${((t=$e==null?void 0:$e.domOverlayState)==null?void 0:t.type)??"нет"}${xs?` ОШИБКА:${xs}`:""}`}Oe.setAnimationLoop((i,t)=>{t&&pc++,pc%15===0&&T_();const e=Math.min(.05,po?(i-po)/1e3:.016);if(po=i,sn==="prep"&&t&&or){const n=t.getHitTestResults(or),s=li();Ke.visible=!1;for(const o of n){const c=o.getPose(Oe.xr.getReferenceSpace());if(!c)continue;md++;const l=c.transform.matrix,h=O(l[12],l[13],l[14]);if(!(s.pos.y-h.y<.5)){Ke.visible=!0,Ke.matrix.makeTranslation(h.x,h.y,h.z),Xn=h;break}}const r=Ke.visible?null:_a(s);Wn.visible=!!r,r&&Wn.position.set(r.x,r.y,r.z),ga();const a=Xn?Xn.y:s.pos.y-va;oi.position.set(s.pos.x,a+.01,s.pos.z),oi.rotation.y=Math.atan2(s.dir.x,s.dir.z)}if(sn==="prep"&&Fn==="cam"){const n=li(),s=_a(n);Wn.visible=!!s,s&&Wn.position.set(s.x,s.y,s.z),oi.position.set(n.pos.x,n.pos.y-va+.01,n.pos.z),oi.rotation.y=Math.atan2(n.dir.x,n.dir.z),ga()}if(sn==="battle"&&It&&mn&&!mr){const n=li(),s=Et.firing||lr;cr.follow(n.view),ce.listen(n.pos,n.dir),cr.update(e);const r=Et.rocketHeld||hc,a=Et.takeEmp()||dc,o=Et.isHeld("laser")||uc,c=Et.takePress("tesla")||fc;dc=!1,fc=!1;for(let v=0;v<d_;v++){It.update(e,{firing:s,rocket:r,emp:a&&v===0,laser:o,tesla:c&&v===0,camPos:O(n.pos.x,n.pos.y,n.pos.z),camDir:O(n.dir.x,n.dir.y,n.dir.z)});const m=It.drain();mn.handle(m),b_(m,n)}mn.sync(e),mn.fx.setPixelScale(innerHeight*Math.min(devicePixelRatio,2)*.5*n.view.projectionMatrix.elements[5]);const l=[];for(const v of Dn)v.ttl-=e;for(let v=Dn.length-1;v>=0;v--)Dn[v].ttl<=0&&Dn.splice(v,1);for(const v of Dn){const m=mc(n.view,v.pos);!m.behind&&Math.abs(m.x)<.85&&Math.abs(m.y)<.8||l.push({id:v.id,x:m.x,y:m.y,behind:m.behind,danger:v.danger})}Et.setIndicators(l);const h=It.pick(O(n.pos.x,n.pos.y,n.pos.z),O(n.dir.x,n.dir.y,n.dir.z));if(h!=null&&h.enemy){const v=h.enemy,m=mc(n.view,v.pos),p=n.pos.distanceTo(new A(v.pos.x,v.pos.y,v.pos.z)),x=v.def.radius*(v.def.scale??1)*2/p*innerHeight*.5*n.view.projectionMatrix.elements[5],y=It.rocketState,_=y&&r&&y.lockId===v.id,C=_?y.locked?"ЗАХВАТ! Отпусти — пуск":`захват ${Math.round(Math.min(1,y.lockT/.6)*100)}%`:`${v.def.name} · ${p.toFixed(1)} м`;Et.setLock({x:(m.x+1)/2,y:(1-m.y)/2,size:x*1.3,label:C,state:_?y.locked?"locked":"locking":void 0})}else Et.setLock(null);const u=It.rocketState,d=It.teslaState,f=It.laserState;Et.updateSlots({rockets:u?{ammo:u.ammo,lock:u.locked?1:Math.min(1,u.lockT/.6),locked:u.locked}:void 0,emp:It.empState?It.empState.cd/It.empState.cooldown:void 0,tesla:d?d.cd/ps.cooldown:void 0,laser:f?{heat:f.heat,over:f.over}:void 0}),Et.setRepair(It.phase==="intermission"&&It.player.hull<It.player.maxHull&&Jt.save.kits>0?Jt.save.kits:null),Et.setJam(It.jam>0&&!!(It.rocketState||It.empState||It.laserState||It.teslaState||It.droneState));const g=It.enemies.find(v=>v.def.cls==="B");Et.setBoss(g?{name:g.def.name,frac:g.hp/g.def.hp,hidden:g.cloak>.6,shielded:g.shielded}:null),Et.update({wave:It.waveIdx,waves:It.waveCount,left:It.enemies.length,hull:It.player.hull,heat:It.weapon.heat,overheated:It.weapon.overheated,cargo:It.cargo.map(v=>v.state==="lost"?"lost":"ok"),kind:It.cargo.map(v=>v.kind),crystals:It.stats.crystals},e*1e3)}sn!=="menu"&&Oe.render(je,en)});Uc();Jt.show("splash");var uh;Jt.camOk=!!((uh=navigator.mediaDevices)!=null&&uh.getUserMedia);const go="Играем через камеру и гироскоп (пол не распознаётся, груз ставится «на глаз»).";navigator.xr?navigator.xr.isSessionSupported("immersive-ar").then(i=>{Jt.arOk=i,Jt.arStatus=i?"AR готов. Встань посреди комнаты.":`AR не поддерживается (нужны «Google Play Services for AR»). ${go}`,Jt.show()}).catch(()=>{Jt.arStatus=`Не удалось проверить AR. ${go}`,Jt.show()}):(Jt.arStatus=Jt.camOk?`AR в этом браузере нет. ${go}`:"Камера недоступна. Можно играть «Тест без камеры».",Jt.show());window.__rubezh={get world(){return It},startDemo:(i=1)=>vd(i),screens:Jt,camDir:()=>li().dir.toArray().map(i=>+i.toFixed(2)),aimAt(i){if(lr=i!==null,!i)return;const t=i.x-0,e=i.y-fd,n=i.z-0;As=Math.atan2(-t,-n),Rs=Math.atan2(e,Math.hypot(t,n))}};
