!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n=document.querySelector(".feedback-form"),o=document.querySelector("textarea"),r=document.querySelector("input"),i={},a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var u="Expected a function",f=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,d=/^0o[0-7]+$/i,s=parseInt,v="object"==typeof e&&e&&e.Object===Object&&e,g="object"==typeof self&&self&&self.Object===Object&&self,m=v||g||Function("return this")(),p=Object.prototype.toString,y=Math.max,b=Math.min,S=function(){return m.Date.now()};function j(e,t,n){var o,r,i,a,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(u);function g(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function m(e){return c=e,f=setTimeout(j,t),d?g(e):a}function p(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=i}function j(){var e=S();if(p(e))return w(e);f=setTimeout(j,function(e){var n=t-(e-l);return s?b(n,i-(e-c)):n}(e))}function w(e){return f=void 0,v&&o?g(e):(o=r=void 0,a)}function T(){var e=S(),n=p(e);if(o=arguments,r=this,l=e,n){if(void 0===f)return m(l);if(s)return f=setTimeout(j,t),g(l)}return void 0===f&&(f=setTimeout(j,t)),a}return t=h(t)||0,O(n)&&(d=!!n.leading,i=(s="maxWait"in n)?y(h(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},T.flush=function(){return void 0===f?a:w(S())},T}function O(e){var n=void 0===e?"undefined":t(a)(e);return!!e&&("object"==n||"function"==n)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(a)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(O(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=O(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var o=c.test(e);return o||d.test(e)?s(e.slice(2),o?2:8):l.test(e)?NaN:+e}i=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(u);return O(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),j(e,t,{leading:o,maxWait:t,trailing:r})};var w="feedback-form-state";!function(e){var t=localStorage.getItem(w);if(t){var n=JSON.parse(t);o.value=n.message||"",console.log(n.message)}}(),function(e){var t=localStorage.getItem(w);if(t){var n=JSON.parse(t);r.value=n.email||"",console.log(n.email)}}(),n.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),localStorage.removeItem(w),console.log(T)})),n.addEventListener("input",i((function(e){T[e.target.name]=e.target.value,localStorage.setItem(w,JSON.stringify(T))}),500));var T={}}();
//# sourceMappingURL=03-feedback.5caef066.js.map
