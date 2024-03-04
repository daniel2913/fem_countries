"use strict";(self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[]).push([[260],{260:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var r=n(474),a=n(581);function l(e){var t=e.name,n=e.population,l=e.region,o=e.capital,u=e.flags;return r.createElement("article",{className:"country-card"},r.createElement(a.N_,{to:"/".concat(t.common)},r.createElement("img",{loading:"lazy",src:u.png,alt:u.alt}),r.createElement("div",{className:"description"},r.createElement("h2",{className:"country-name"},t.official),r.createElement("p",null,r.createElement("span",null,"Population: "),n),r.createElement("p",null,r.createElement("span",null,"Region: "),l),r.createElement("p",null,r.createElement("span",null,"Capital: "),o.join(", ")))))}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,u=[],c=!0,i=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=l.call(n)).done)&&(u.push(r.value),u.length!==t);c=!0);}catch(e){i=!0,a=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(i)throw a}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e){var t=o(r.useState(0),2),n=t[0],a=t[1],l=o(r.useState(e.values.includes(e.defaultValue)?e.defaultValue:e.values[0]),2),u=l[0],c=l[1],i=r.useRef(null);return r.useEffect((function(){return e.onChange(u)}),[u,e.onChange]),r.createElement("div",{className:"customselect-container ".concat(e.className)},r.createElement("button",{type:"button",className:"button customselect-selected",onBlur:function(){return a(0)},onKeyDown:function(t){i.current===document.activeElement&&("ArrowDown"===t.key&&(t.preventDefault(),a((e.values.length+n+1)%e.values.length)),"ArrowUp"===t.key&&(t.preventDefault(),a((e.values.length+n-1)%e.values.length)),"Enter"!==t.key&&"Space"!==t.key||(t.preventDefault(),i.current.blur(),c(e.values[n])))},ref:i},u),r.createElement("div",{className:"customselect-options bg"},e.values.map((function(e,t){return r.createElement("button",{tabIndex:-1,type:"button",className:"button ".concat(t===n?"hover":""),key:e,onClick:function(t){t.currentTarget.blur(),c(e)}},e)}))))}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,u=[],c=!0,i=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=l.call(n)).done)&&(u.push(r.value),u.length!==t);c=!0);}catch(e){i=!0,a=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(i)throw a}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f=["Filter by Region","Africa","Americas","Asia","Europe","Oceania","Antarctic"];const m=r.memo((function(){var e=i((0,a.ok)(),2),t=e[0],n=e[1],l=i(r.useState(t.get("name")||""),2),o=l[0],u=l[1],s=i(r.useState(t.get("region")||f[0]),2),m=s[0],y=s[1],p=r.useRef(null);return r.useEffect((function(){return n((function(e){return null!==o&&e.set("name",o),m&&e.set("region","Filter by Region"===m?"":m),e}))}),[o,m,n]),r.createElement("div",{className:"filter"},r.createElement("input",{ref:p,onKeyDown:function(e){"Escape"===e.key&&p.current.blur()},type:"search",placeholder:"Search",className:"search",value:o,onChange:function(e){return u(e.currentTarget.value)}}),r.createElement(c,{defaultValue:m,className:"filter-select",onChange:y,values:f}))}));var y=n(343);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,u=[],c=!0,i=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=l.call(n)).done)&&(u.push(r.value),u.length!==t);c=!0);}catch(e){i=!0,a=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(i)throw a}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(){var e=(0,y.LG)(),t=b(r.useState(e),2),n=t[0],o=t[1],u=b((0,a.ok)(),1)[0],c=b(r.useTransition(),2),i=(c[0],c[1]);return r.useEffect((function(){return i((function(){var t=u.get("name");o(e.filter((function(e){return!t||e.name.common.toLowerCase().includes(t)||e.name.official.toLowerCase().includes(t)})))}))}),[u,e]),r.createElement("main",{className:"home-grid bg"},r.createElement(m,null),n.map((function(e){return r.createElement(l,p({key:e.name.official},e))})))}}}]);