'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('./index-6b8189f0.js');
var Checkbox = require('./Checkbox.js');
var Link = require('./Link.js');
var NormalizedHtml = require('./NormalizedHtml.js');
require('./extends-214be52a.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./defineProperty-754b29ce.js');
require('styled-components');
require('./react-spring-web.esm-b5843e07.js');
require('react-dom');
require('./FocusVisible.js');
require('./springs.js');
require('./Theme.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');
require('./constants.js');
require('./ButtonBase.js');
require('./keycodes.js');
require('./css.js');
require('./text-styles.js');
require('./font.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function e(){return (e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}return t}).apply(this,arguments)}const n=["children","options"],r=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce((t,e)=>(t[e.toLowerCase()]=e,t),{for:"htmlFor"}),o={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},c=["style","script"],a=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,u=/mailto:/i,i=/\n{2,}$/,l=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,s=/^ *> ?/gm,_=/^ {2,}\n/,f=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,d=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,p=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,g=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,m=/^(?:\n *)*\n/,y=/\r\n?/g,h=/^\[\^([^\]]+)](:.*)\n/,k=/^\[\^([^\]]+)]/,x=/\f/g,b=/^\s*?\[(x|\s)\]/,v=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,S=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,$=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,w=/&([a-z]+);/g,z=/^<!--[\s\S]*?(?:-->)/,E=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,A=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,R=/^\{.*\}$/,I=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,M=/^<([^ >]+@[^ >]+)>/,O=/^<([^ >]+:\/[^ >]+)>/,B=/ *\n+$/,L=/(?:^|\n)( *)$/,T=/-([a-z])?/gi,j=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,C=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,D=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,N=/^\[([^\]]*)\] ?\[([^\]]*)\]/,Z=/(\[|\])/g,F=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,P=/\t/g,G=/^ *\| */,H=/(^ *\||\| *$)/g,q=/ *$/,U=/^ *:-+: *$/,V=/^ *:-+ *$/,W=/^ *-+: *$/,Q=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,X=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,J=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,K=/^\\([^0-9A-Za-z\s])/,Y=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,tt=/^\n+/,et=/^([ \t]*)/,nt=/\\([^0-9A-Z\s])/gi,rt=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +"),ot=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +[^\\n]*(?:\\n(?!\\1(?:[*+-]|\\d+\\.) )[^\\n]*)*(\\n|$)","gm"),ct=new RegExp("^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) (?!(?:[*+-]|\\d+\\.) ))\\n*|\\s*\\n*$)"),at="(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",ut=new RegExp("^\\[("+at+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),it=new RegExp("^!\\[("+at+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),lt=[l,p,d,v,S,z,ot,ct,j],st=[...lt,/^[^\n]+(?:  \n|\n{2,})/,$,A];function _t(t){return t.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function ft(t){return W.test(t)?"right":U.test(t)?"center":V.test(t)?"left":null}function dt(t,e,n){const r=n.t;n.t=!0;const o=e(t.trim(),n);n.t=r;let c=[[]];return o.forEach(function(t,e){"tableSeparator"===t.type?0!==e&&e!==o.length-1&&c.push([]):("text"!==t.type||null!=o[e+1]&&"tableSeparator"!==o[e+1].type||(t.content=t.content.replace(q,"")),c[c.length-1].push(t));}),c}function pt(t,e,n){n.o=!0;const r=dt(t[1],e,n),o=t[2].replace(H,"").split("|").map(ft),c=function(t,e,n){return t.trim().split("\n").map(function(t){return dt(t,e,n)})}(t[3],e,n);return n.o=!1,{align:o,cells:c,header:r,type:"table"}}function gt(t,e){return null==t.align[e]?{}:{textAlign:t.align[e]}}function mt(t){return function(e,n){return n.o?t.exec(e):null}}function yt(t){return function(e,n){return n.o||n.u?t.exec(e):null}}function ht(t){return function(e,n){return n.o||n.u?null:t.exec(e)}}function kt(t){return function(e){return t.exec(e)}}function xt(t,e,n){if(e.o||e.u)return null;if(n&&!n.endsWith("\n"))return null;let r="";t.split("\n").every(t=>!lt.some(e=>e.test(t))&&(r+=t+"\n",t.trim()));const o=r.trimEnd();return ""==o?null:[r,o]}function bt(t){try{if(decodeURIComponent(t).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch(t){return null}return t}function vt(t){return t.replace(nt,"$1")}function St(t,e,n){const r=n.o||!1,o=n.u||!1;n.o=!0,n.u=!0;const c=t(e,n);return n.o=r,n.u=o,c}function $t(t,e,n){const r=n.o||!1,o=n.u||!1;n.o=!1,n.u=!0;const c=t(e,n);return n.o=r,n.u=o,c}function wt(t,e,n){return n.o=!1,t(e+"\n\n",n)}const zt=(t,e,n)=>({content:St(e,t[1],n)});function Et(){return {}}function At(){return null}function Rt(...t){return t.filter(Boolean).join(" ")}function It(t,e,n){let r=t;const o=e.split(".");for(;o.length&&(r=r[o[0]],void 0!==r);)o.shift();return r||n}var Mt;function Ot(n,H={}){H.overrides=H.overrides||{},H.slugify=H.slugify||_t,H.namedCodesToUnicode=H.namedCodesToUnicode?e({},o,H.namedCodesToUnicode):o;const q=H.createElement||React__namespace.createElement;function U(t,n,...r){const o=It(H.overrides,`${t}.props`,{});return q(function(t,e){const n=It(e,t);return n?"function"==typeof n||"object"==typeof n&&"render"in n?n:It(e,`${t}.component`,t):t}(t,H.overrides),e({},n,o,{className:Rt(null==n?void 0:n.className,o.className)||void 0}),...r)}function V(e){let n=!1;H.forceInline?n=!0:H.forceBlock||(n=!1===F.test(e));const r=dt(ft(n?e:`${e.trimEnd().replace(tt,"")}\n\n`,{o:n}));for(;"string"==typeof r[r.length-1]&&!r[r.length-1].trim();)r.pop();if(null===H.wrapper)return r;const o=H.wrapper||(n?"span":"div");let c;if(r.length>1||H.forceWrapper)c=r;else {if(1===r.length)return c=r[0],"string"==typeof c?U("span",{key:"outer"},c):c;c=null;}return React__namespace.createElement(o,{key:"outer"},c)}function W(e){const n=e.match(a);return n?n.reduce(function(e,n,o){const c=n.indexOf("=");if(-1!==c){const a=function(t){return -1!==t.indexOf("-")&&null===t.match(E)&&(t=t.replace(T,function(t,e){return e.toUpperCase()})),t}(n.slice(0,c)).trim(),u=function(t){const e=t[0];return ('"'===e||"'"===e)&&t.length>=2&&t[t.length-1]===e?t.slice(1,-1):t}(n.slice(c+1).trim()),i=r[a]||a,l=e[i]=function(t,e){return "style"===t?e.split(/;\s?/).reduce(function(t,e){const n=e.slice(0,e.indexOf(":"));return t[n.replace(/(-[a-z])/g,t=>t[1].toUpperCase())]=e.slice(n.length+1).trim(),t},{}):"href"===t?bt(e):(e.match(R)&&(e=e.slice(1,e.length-1)),"true"===e||"false"!==e&&e)}(a,u);"string"==typeof l&&($.test(l)||A.test(l))&&(e[i]=React__namespace.cloneElement(V(l.trim()),{key:o}));}else "style"!==n&&(e[r[n]||n]=!0);return e},{}):void 0}const nt=[],at={},lt={blockQuote:{i:ht(l),l:Mt.HIGH,_:(t,e,n)=>({content:e(t[0].replace(s,""),n)}),p:(t,e,n)=>U("blockquote",{key:n.g},e(t.content,n))},breakLine:{i:kt(_),l:Mt.HIGH,_:Et,p:(t,e,n)=>U("br",{key:n.g})},breakThematic:{i:ht(f),l:Mt.HIGH,_:Et,p:(t,e,n)=>U("hr",{key:n.g})},codeBlock:{i:ht(p),l:Mt.MAX,_:t=>({content:t[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}),p:(t,e,n)=>U("pre",{key:n.g},U("code",{className:t.lang?`lang-${t.lang}`:""},t.content))},codeFenced:{i:ht(d),l:Mt.MAX,_:t=>({content:t[3],lang:t[2]||void 0,type:"codeBlock"})},codeInline:{i:yt(g),l:Mt.LOW,_:t=>({content:t[2]}),p:(t,e,n)=>U("code",{key:n.g},t.content)},footnote:{i:ht(h),l:Mt.MAX,_:t=>(nt.push({footnote:t[2],identifier:t[1]}),{}),p:At},footnoteReference:{i:mt(k),l:Mt.HIGH,_:t=>({content:t[1],target:`#${H.slugify(t[1])}`}),p:(t,e,n)=>U("a",{key:n.g,href:bt(t.target)},U("sup",{key:n.g},t.content))},gfmTask:{i:mt(b),l:Mt.HIGH,_:t=>({completed:"x"===t[1].toLowerCase()}),p:(t,e,n)=>U("input",{checked:t.completed,key:n.g,readOnly:!0,type:"checkbox"})},heading:{i:ht(v),l:Mt.HIGH,_:(t,e,n)=>({content:St(e,t[2],n),id:H.slugify(t[2]),level:t[1].length}),p:(t,e,n)=>(t.tag=`h${t.level}`,U(t.tag,{id:t.id,key:n.g},e(t.content,n)))},headingSetext:{i:ht(S),l:Mt.MAX,_:(t,e,n)=>({content:St(e,t[1],n),level:"="===t[2]?1:2,type:"heading"})},htmlComment:{i:kt(z),l:Mt.HIGH,_:()=>({}),p:At},image:{i:yt(it),l:Mt.HIGH,_:t=>({alt:t[1],target:vt(t[2]),title:t[3]}),p:(t,e,n)=>U("img",{key:n.g,alt:t.alt||void 0,title:t.title||void 0,src:bt(t.target)})},link:{i:mt(ut),l:Mt.LOW,_:(t,e,n)=>({content:$t(e,t[1],n),target:vt(t[2]),title:t[3]}),p:(t,e,n)=>U("a",{key:n.g,href:bt(t.target),title:t.title},e(t.content,n))},linkAngleBraceStyleDetector:{i:mt(O),l:Mt.MAX,_:t=>({content:[{content:t[1],type:"text"}],target:t[1],type:"link"})},linkBareUrlDetector:{i:(t,e)=>e.m?null:mt(I)(t,e),l:Mt.MAX,_:t=>({content:[{content:t[1],type:"text"}],target:t[1],title:void 0,type:"link"})},linkMailtoDetector:{i:mt(M),l:Mt.MAX,_(t){let e=t[1],n=t[1];return u.test(n)||(n="mailto:"+n),{content:[{content:e.replace("mailto:",""),type:"text"}],target:n,type:"link"}}},list:{i(t,e,n){const r=L.exec(n);return !r||!e.h&&e.o?null:ct.exec(t=r[1]+t)},l:Mt.HIGH,_(t,e,n){const r=t[2],o=r.length>1,c=o?+r:void 0,a=t[0].replace(i,"\n").match(ot);let u=!1;return {items:a.map(function(t,r){const o=rt.exec(t)[0].length,c=new RegExp("^ {1,"+o+"}","gm"),i=t.replace(c,"").replace(rt,""),l=r===a.length-1,s=-1!==i.indexOf("\n\n")||l&&u;u=s;const _=n.o,f=n.h;let d;n.h=!0,s?(n.o=!1,d=i.replace(B,"\n\n")):(n.o=!0,d=i.replace(B,""));const p=e(d,n);return n.o=_,n.h=f,p}),ordered:o,start:c}},p:(t,e,n)=>U(t.ordered?"ol":"ul",{key:n.g,start:t.start},t.items.map(function(t,r){return U("li",{key:r},e(t,n))}))},newlineCoalescer:{i:ht(m),l:Mt.LOW,_:Et,p:()=>"\n"},paragraph:{i:xt,l:Mt.LOW,_:zt,p:(t,e,n)=>U("p",{key:n.g},e(t.content,n))},ref:{i:mt(C),l:Mt.MAX,_:t=>(at[t[1]]={target:t[2],title:t[4]},{}),p:At},refImage:{i:yt(D),l:Mt.MAX,_:t=>({alt:t[1]||void 0,ref:t[2]}),p:(t,e,n)=>U("img",{key:n.g,alt:t.alt,src:bt(at[t.ref].target),title:at[t.ref].title})},refLink:{i:mt(N),l:Mt.MAX,_:(t,e,n)=>({content:e(t[1],n),fallbackContent:e(t[0].replace(Z,"\\$1"),n),ref:t[2]}),p:(t,e,n)=>at[t.ref]?U("a",{key:n.g,href:bt(at[t.ref].target),title:at[t.ref].title},e(t.content,n)):U("span",{key:n.g},e(t.fallbackContent,n))},table:{i:ht(j),l:Mt.HIGH,_:pt,p:(t,e,n)=>U("table",{key:n.g},U("thead",null,U("tr",null,t.header.map(function(r,o){return U("th",{key:o,style:gt(t,o)},e(r,n))}))),U("tbody",null,t.cells.map(function(r,o){return U("tr",{key:o},r.map(function(r,o){return U("td",{key:o,style:gt(t,o)},e(r,n))}))})))},tableSeparator:{i:function(t,e){return e.t?G.exec(t):null},l:Mt.HIGH,_:function(){return {type:"tableSeparator"}},p:()=>" | "},text:{i:kt(Y),l:Mt.MIN,_:t=>({content:t[0].replace(w,(t,e)=>H.namedCodesToUnicode[e]?H.namedCodesToUnicode[e]:t)}),p:t=>t.content},textBolded:{i:yt(Q),l:Mt.MED,_:(t,e,n)=>({content:e(t[2],n)}),p:(t,e,n)=>U("strong",{key:n.g},e(t.content,n))},textEmphasized:{i:yt(X),l:Mt.LOW,_:(t,e,n)=>({content:e(t[2],n)}),p:(t,e,n)=>U("em",{key:n.g},e(t.content,n))},textEscaped:{i:yt(K),l:Mt.HIGH,_:t=>({content:t[1],type:"text"})},textStrikethroughed:{i:yt(J),l:Mt.LOW,_:zt,p:(t,e,n)=>U("del",{key:n.g},e(t.content,n))}};!0!==H.disableParsingRawHTML&&(lt.htmlBlock={i:kt($),l:Mt.HIGH,_(t,e,n){const[,r]=t[3].match(et),o=new RegExp(`^${r}`,"gm"),a=t[3].replace(o,""),u=(i=a,st.some(t=>t.test(i))?wt:St);var i;const l=t[1].toLowerCase(),s=-1!==c.indexOf(l);n.m=n.m||"a"===l;const _=s?t[3]:u(e,a,n);return n.m=!1,{attrs:W(t[2]),content:_,noInnerParse:s,tag:s?l:t[1]}},p:(t,n,r)=>U(t.tag,e({key:r.g},t.attrs),t.noInnerParse?t.content:n(t.content,r))},lt.htmlSelfClosing={i:kt(A),l:Mt.HIGH,_:t=>({attrs:W(t[2]||""),tag:t[1]}),p:(t,n,r)=>U(t.tag,e({},t.attrs,{key:r.g}))});const ft=function(t){let e=Object.keys(t);function n(r,o){let c=[],a="";for(;r;){let u=0;for(;u<e.length;){const i=e[u],l=t[i],s=l.i(r,o,a);if(s){const t=s[0];r=r.substring(t.length);const e=l._(s,n,o);null==e.type&&(e.type=i),c.push(e),a=t;break}u++;}}return c}return e.sort(function(e,n){let r=t[e].l,o=t[n].l;return r!==o?r-o:e<n?-1:1}),function(t,e){return n(function(t){return t.replace(y,"\n").replace(x,"").replace(P,"    ")}(t),e)}}(lt),dt=(Ot=function(t){return function(e,n,r){return t[e.type].p(e,n,r)}}(lt),function t(e,n={}){if(Array.isArray(e)){const r=n.g,o=[];let c=!1;for(let r=0;r<e.length;r++){n.g=r;const a=t(e[r],n),u="string"==typeof a;u&&c?o[o.length-1]+=a:null!==a&&o.push(a),c=u;}return n.g=r,o}return Ot(e,t,n)});var Ot;const Bt=V(n);return nt.length?U("div",null,Bt,U("footer",{key:"footer"},nt.map(function(t){return U("div",{id:H.slugify(t.identifier),key:t.identifier},t.identifier,dt(ft(t.footnote,{o:!0})))}))):Bt}!function(t){t[t.MAX=0]="MAX",t[t.HIGH=1]="HIGH",t[t.MED=2]="MED",t[t.LOW=3]="LOW",t[t.MIN=4]="MIN";}(Mt||(Mt={}));var MarkdownToJsx = e=>{let{children:r,options:o}=e,c=function(t,e){if(null==t)return {};var n,r,o={},c=Object.keys(t);for(r=0;r<c.length;r++)e.indexOf(n=c[r])>=0||(o[n]=t[n]);return o}(e,n);return React__namespace.cloneElement(Ot(r,o),c)};

function CustomInput(props) {
  props = { ...props
  };

  if (props.type === 'checkbox') {
    delete props.type;
    return /*#__PURE__*/React__default["default"].createElement(Checkbox["default"], props);
  }

  return /*#__PURE__*/React__default["default"].createElement("input", props);
}

CustomInput.propTypes = {
  type: index.PropTypes.string
};

function Markdown(_ref) {
  let {
    allowHtml,
    className,
    content,
    markdownToJsxOptions,
    normalized,
    style,
    ...props
  } = _ref;
  const markdownToJsxOptionsBase = {
    disableParsingRawHTML: !allowHtml,
    overrides: {
      a: Link["default"],
      input: CustomInput
    }
  };
  const markdown = /*#__PURE__*/React__default["default"].createElement("div", {
    className: className,
    style: style
  }, /*#__PURE__*/React__default["default"].createElement(MarkdownToJsx, {
    options: markdownToJsxOptions ? markdownToJsxOptions(markdownToJsxOptionsBase) : markdownToJsxOptionsBase
  }, content));
  return normalized ? /*#__PURE__*/React__default["default"].createElement(NormalizedHtml["default"], null, markdown) : markdown;
}

Markdown.propTypes = {
  allowHtml: index.PropTypes.bool,
  className: index.PropTypes.string,
  content: index.PropTypes.string.isRequired,
  markdownToJsxOptions: index.PropTypes.func,
  normalized: index.PropTypes.bool,
  style: index.PropTypes.object
};
Markdown.defaultProps = {
  normalized: false
};

exports["default"] = Markdown;
//# sourceMappingURL=Markdown.js.map
