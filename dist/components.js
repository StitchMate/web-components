import"./chunk-TIR5MGQM.js";import{a as l}from"./chunk-4EYIOXEB.js";import"./chunk-NWVBBPFX.js";import{a as h,b as y}from"./chunk-F2MJTV6A.js";var p=h((k,i)=>{(function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e=[],s=0;s<arguments.length;s++){var t=arguments[s];if(!!t){var r=typeof t;if(r==="string"||r==="number")e.push(t);else if(Array.isArray(t)){if(t.length){var d=o.apply(null,t);d&&e.push(d)}}else if(r==="object")if(t.toString===Object.prototype.toString)for(var u in t)a.call(t,u)&&t[u]&&e.push(u);else e.push(t.toString())}}return e.join(" ")}typeof i!="undefined"&&i.exports?(o.default=o,i.exports=o):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return o}):window.classNames=o})()});var f=y(p());import{h as n}from"atomico";import{c as g,useEffect as w,useEvent as m}from"atomico";import{css as v}from"atomico";var b=v`.button,.button--loading{transition-property:padding border-radius;transition-duration:1s}.button{height:2.5rem;border-style:none;padding-left:var(--seam-button-horizontal-padding);padding-right:var(--seam-button-horizontal-padding);border-radius:var(--seam-button-radius);font-size:var(--seam-text-base)}.button--loading{padding:.5rem;border-radius:9999px}.button--success{padding:.5rem;border-radius:9999px;background:#34d399}.button--fail,.button--primary,.button--success{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity));transition-property:padding border-radius background;transition-duration:1s}.button--fail{padding:.5rem;border-radius:9999px;background:#f43f5e}.button--primary{background:var(--seam-button-primary)}.button--primary:hover{background:var(--seam-button-primary--hover)}.button--primary:active{background:var(--seam-button-primary--active)}`;function c({loading:a,success:o,fail:e}){let s=m("seam-loading",{bubbles:!0,composed:!0}),t=m("seam-success",{bubbles:!0,composed:!0}),r=m("seam-fail",{bubbles:!0,composed:!0});return w(()=>{a&&s(),o&&t(),e&&r()}),n("host",{shadowDom:!0},n("button",{class:(0,f.default)("button",{"button--loading":a,"button--success":o,"button--fail":e,"button--primary":!o&&!e})},a?n("seam-loading-icon",null):o?n("seam-check-icon",null):e?n("seam-x-icon",null):n("slot",null)))}c.props={loading:{type:Boolean,value:!1},success:{type:Boolean,value:!1},fail:{type:Boolean,value:!1}};c.styles=[b,l];var x=g(c);customElements.define("seam-button",x);
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/