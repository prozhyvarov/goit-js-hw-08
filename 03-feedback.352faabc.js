function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="Expected a function",i=NaN,o="[object Symbol]",u=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,m="object"==typeof self&&self&&self.Object===Object&&self,d=c||m||Function("return this")(),v=Object.prototype.toString,g=Math.max,p=Math.min,y=function(){return d.Date.now()};function b(e,t,n){var i,o,u,a,f,l,s=0,c=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(r);function v(t){var n=i,r=o;return i=o=void 0,s=t,a=e.apply(r,n)}function b(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-s>=u}function S(){var e=y();if(b(e))return h(e);f=setTimeout(S,function(e){var n=t-(e-l);return m?p(n,u-(e-s)):n}(e))}function h(e){return f=void 0,d&&i?v(e):(i=o=void 0,a)}function w(){var e=y(),n=b(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return function(e){return s=e,f=setTimeout(S,t),c?v(e):a}(l);if(m)return f=setTimeout(S,t),v(l)}return void 0===f&&(f=setTimeout(S,t)),a}return t=E(t)||0,j(n)&&(c=!!n.leading,u=(m="maxWait"in n)?g(E(n.maxWait)||0,t):u,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==f&&clearTimeout(f),s=0,i=l=o=f=void 0},w.flush=function(){return void 0===f?a:h(y())},w}function j(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function E(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&v.call(e)==o}(e))return i;if(j(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=j(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var n=f.test(e);return n||l.test(e)?s(e.slice(2),n?2:8):a.test(e)?i:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return j(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:i,maxWait:t,trailing:o})};const S="feedback-form-state",h={form:document.querySelector("form.feedback-form"),userEmail:document.querySelector("form input"),userMessage:document.querySelector("form textarea")};!function(){const e=localStorage.getItem(S);if(e){const t=JSON.parse(e);h.userEmail.value=t.email,h.userMessage.value=t.message}else h.userEmail.value="",h.userMessage.value=""}();let w={email:"",message:""};h.form.addEventListener("input",e(t)((function(e){w[e.target.name]=e.target.value,localStorage.setItem(S,JSON.stringify({...w,email:h.userEmail.value,message:h.userMessage.value}))}),500)),h.form.addEventListener("submit",(function(e){e.preventDefault(),h.userEmail.value&&h.userMessage.value&&(h.form.reset(),localStorage.removeItem(S),console.log(w),w.email="",w.message="")}));
//# sourceMappingURL=03-feedback.352faabc.js.map