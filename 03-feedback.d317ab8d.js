function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="Expected a function",i=NaN,o="[object Symbol]",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,m="object"==typeof self&&self&&self.Object===Object&&self,d=c||m||Function("return this")(),g=Object.prototype.toString,v=Math.max,p=Math.min,y=function(){return d.Date.now()};function b(e,t,n){var i,o,a,u,f,l,s=0,c=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(r);function g(t){var n=i,r=o;return i=o=void 0,s=t,u=e.apply(r,n)}function b(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-s>=a}function j(){var e=y();if(b(e))return O(e);f=setTimeout(j,function(e){var n=t-(e-l);return m?p(n,a-(e-s)):n}(e))}function O(e){return f=void 0,d&&i?g(e):(i=o=void 0,u)}function T(){var e=y(),n=b(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return function(e){return s=e,f=setTimeout(j,t),c?g(e):u}(l);if(m)return f=setTimeout(j,t),g(l)}return void 0===f&&(f=setTimeout(j,t)),u}return t=E(t)||0,S(n)&&(c=!!n.leading,a=(m="maxWait"in n)?v(E(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),T.cancel=function(){void 0!==f&&clearTimeout(f),s=0,i=l=o=f=void 0},T.flush=function(){return void 0===f?u:O(y())},T}function S(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function E(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&g.call(e)==o}(e))return i;if(S(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=S(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=f.test(e);return n||l.test(e)?s(e.slice(2),n?2:8):u.test(e)?i:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return S(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:i,maxWait:t,trailing:o})};const j={form:document.querySelector("form.feedback-form"),userEmail:document.querySelector("form input"),userMessage:document.querySelector("form textarea")},O="feedback-form-state";let T={email:"",message:""};!function(){const e=localStorage.getItem(O);if(!e)return;{const t=JSON.parse(e);T.email=t.email,T.message=t.message,j.userEmail.value=T.email,j.userMessage.value=T.message}}(),j.userEmail.addEventListener("input",e(t)((()=>{T.email=j.userEmail.value,localStorage.setItem(O,JSON.stringify(T))}),500)),j.userMessage.addEventListener("input",e(t)((()=>{T.message=j.userMessage.value,localStorage.setItem(O,JSON.stringify(T))}),500)),j.form.addEventListener("submit",(function(e){e.preventDefault(),j.userEmail.value&&j.userMessage.value?(localStorage.clear(),e.currentTarget.reset(),console.log(T),T={email:"",message:""}):alert("Please make sure all fields are filled!")}));
//# sourceMappingURL=03-feedback.d317ab8d.js.map