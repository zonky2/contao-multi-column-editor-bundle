!function(e){function t(t){for(var n,o,i=t[0],a=t[1],l=0,c=[];l<i.length;l++)o=i[l],r[o]&&c.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(u&&u(t);c.length;)c.shift()()}var n={},r={"contao-multi-column-editor-bundle":0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/public/js/",o.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=a;o(o.s="3K4J")}({"3K4J":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var formdata_polyfill__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("hRLk"),formdata_polyfill__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(formdata_polyfill__WEBPACK_IMPORTED_MODULE_0__);function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var MultiColumnEditorBundle=function(){function MultiColumnEditorBundle(){_classCallCheck(this,MultiColumnEditorBundle)}return _createClass(MultiColumnEditorBundle,null,[{key:"init",value:function(){var e=document.querySelectorAll(".multi-column-editor");if(!(e.length<1)){var t="backend"===e[0].dataset.env;utilsBundle.event.addDynamicEventListener("click",".multi-column-editor .add",function(e,n){n.preventDefault(),MultiColumnEditorBundle.triggerAction(t,e,"addRow",e.href)}),utilsBundle.event.addDynamicEventListener("click",".multi-column-editor .delete",function(e,n){n.preventDefault(),MultiColumnEditorBundle.triggerAction(t,e,"deleteRow",e.href)}),utilsBundle.event.addDynamicEventListener("click",".multi-column-editor .drag-handle",function(e,t){t.preventDefault()}),utilsBundle.event.addDynamicEventListener("click","[data-mce-click]",function(e,n){MultiColumnEditorBundle.triggerAction(t,e,"updateRows",e.getAttribute("data-mce-click"))}),utilsBundle.event.addDynamicEventListener("change","[data-mce-change]",function(e,n){MultiColumnEditorBundle.triggerAction(t,e,"updateRows",e.getAttribute("data-mce-change"))}),MultiColumnEditorBundle.initSortable(t)}}},{key:"initSortable",value:function(e){e?new Sortables(".multi-column-editor-wrapper .sortable",{constrain:!0,opacity:.6,handle:".drag-handle",onComplete:function(t){for(var n=[],r=!1,o=t.closest(".rows").querySelectorAll(".mce-row"),i=0;i<o.length;i++)n.push(o[i].dataset.index),o[i].dataset.index!==[].slice.call(o).indexOf(this)+1&&(r=!0);var a=[{name:"newIndices",value:n.join(",")}];r&&MultiColumnEditorBundle.triggerAction(e,t.querySelector(".drag-handle"),"sortRows",null,a)}}):Promise.resolve().then(__webpack_require__.t.bind(null,"o1Lx",7)).then(function(t){var n=document.querySelectorAll(".multi-column-editor-wrapper .sortable");n.forEach(function(r){t.create(r,{handle:".drag-handle",onEnd:function(t){for(var o=[],i=!1,a=t.item.closest(".rows").querySelectorAll(".mce-row"),l=0;l<a.length;l++)o.push(a[l].dataset.index),a[l].dataset.index!==Array.prototype.indexOf.call(n,r)+1&&(i=!0);var u=[{name:"newIndices",value:o.join(",")}];i&&MultiColumnEditorBundle.triggerAction(e,t.item.querySelector(".drag-handle"),"sortRows",null,u)}})})})}},{key:"triggerAction",value:function triggerAction(isBackend,link,action,url,additionalFormData,callback){var form=link.closest("form"),formData=new FormData,editor=link.closest(".multi-column-editor");null===url&&(url=form.action),form.querySelectorAll("input[name]:not([disabled]), textarea[name]:not([disabled]), select[name]:not([disabled]), button[name]:not([disabled])").forEach(function(e){if("FORM_SUBMIT"!==e.name)switch(e.type){case"checkbox":case"radio":formData.append(e.name,e.checked?e.value:"");break;default:formData.append(e.name,e.value)}});var row=link.closest(".mce-row");formData.set("row",null!=row?row.dataset.index:0),formData.set("field",editor.dataset.field),formData.set("table",editor.dataset.table),formData.set("action",action),void 0!==additionalFormData&&additionalFormData.forEach(function(e){if("FORM_SUBMIT"!==e.name)switch(e.type){case"checkbox":case"radio":formData.append(e.name,e.checked?e.value:"");break;default:formData.append(e.name,e.value)}});var xhr=new XMLHttpRequest;xhr.onreadystatechange=function(){if(4===xhr.readyState){var customEvent=document.createEvent("CustomEvent");if(customEvent.initEvent("ajaxSuccess",!0,!0),document.dispatchEvent(customEvent),200===xhr.status)if(isBackend){var response=document.createElement("div");response.innerHTML=xhr.responseText;var scriptElements=response.childNodes[0].getElementsByTagName("script");link.closest(".multi-column-editor-wrapper").replaceWith(response.childNodes[0]),MultiColumnEditorBundle.initChosen(),MultiColumnEditorBundle.initSortable(isBackend);for(var n=0;n<scriptElements.length;n++)eval(scriptElements[n].innerHTML);"function"==typeof callback&&callback.apply(this,Array.prototype.slice.call(arguments,1));var e=document.createEvent("CustomEvent");e.initEvent("ajaxComplete",!0,!0),document.dispatchEvent(e)}else{var data=JSON.parse(xhr.responseText),_response=document.createElement("div");_response.innerHTML=data.result.html,link.closest(".multi-column-editor-wrapper").replaceWith(_response.childNodes[0]),MultiColumnEditorBundle.initSortable(isBackend),"function"==typeof callback&&callback.apply(this,Array.prototype.slice.call(arguments,1)),customEvent=document.createEvent("CustomEvent"),customEvent.initEvent("ajaxComplete",!0,!0),document.dispatchEvent(customEvent)}}},xhr.open("POST",url),xhr.setRequestHeader("X-Requested-With","XMLHttpRequest"),xhr.send(formData)}}]),MultiColumnEditorBundle}();document.addEventListener("DOMContentLoaded",MultiColumnEditorBundle.init),"function"==typeof window.addEvent&&window.addEvent("domready",function(){MultiColumnEditorBundle.initChosen=function(){$$(".multi-column-editor select.tl_chosen").each(function(e){void 0===e.initialized&&(e.initialized=$$("#"+e.getAttribute("id")).chosen())})}})},hRLk:function(e,t,n){(function(e){!function(){var t;function n(e){var t=0;return function(){return t<e.length?{done:!1,value:e[t++]}:{done:!0}}}var r="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){e!=Array.prototype&&e!=Object.prototype&&(e[t]=n.value)},o="undefined"!=typeof window&&window===this?this:void 0!==e&&null!=e?e:this;function i(){i=function(){},o.Symbol||(o.Symbol=u)}function a(e,t){this.s=e,r(this,"description",{configurable:!0,writable:!0,value:t})}a.prototype.toString=function(){return this.s};var l,u=function(){var e=0;return function t(n){if(this instanceof t)throw new TypeError("Symbol is not a constructor");return new a("jscomp_symbol_"+(n||"")+"_"+e++,n)}}();function c(){i();var e=o.Symbol.iterator;e||(e=o.Symbol.iterator=o.Symbol("Symbol.iterator")),"function"!=typeof Array.prototype[e]&&r(Array.prototype,e,{configurable:!0,writable:!0,value:function(){return function(e){return c(),(e={next:e})[o.Symbol.iterator]=function(){return this},e}(n(this))}}),c=function(){}}function s(e){var t="undefined"!=typeof Symbol&&Symbol.iterator&&e[Symbol.iterator];return t?t.call(e):{next:n(e)}}if("function"==typeof Object.setPrototypeOf)l=Object.setPrototypeOf;else{var d;e:{var f={};try{f.__proto__={v:!0},d=f.v;break e}catch(e){}d=!1}l=d?function(e,t){if(e.__proto__=t,e.__proto__!==t)throw new TypeError(e+" is not extensible");return e}:null}var p=l;function h(){this.h=!1,this.c=null,this.o=void 0,this.b=1,this.m=this.w=0,this.g=null}function m(e){if(e.h)throw new TypeError("Generator is already running");e.h=!0}function v(e,t,n){return e.b=n,{value:t}}function y(e){for(var t in this.C=e,this.l=[],e)this.l.push(t);this.l.reverse()}function b(e){this.a=new h,this.D=e}function _(e,t,n,r){try{var o=t.call(e.a.c,n);if(!(o instanceof Object))throw new TypeError("Iterator result "+o+" is not an object");if(!o.done)return e.a.h=!1,o;var i=o.value}catch(t){return e.a.c=null,e.a.j(t),w(e)}return e.a.c=null,r.call(e.a,i),w(e)}function w(e){for(;e.a.b;)try{var t=e.D(e.a);if(t)return e.a.h=!1,{value:t.value,done:!1}}catch(t){e.a.o=void 0,e.a.j(t)}if(e.a.h=!1,e.a.g){if(t=e.a.g,e.a.g=null,t.B)throw t.A;return{value:t.return,done:!0}}return{value:void 0,done:!0}}function g(e){this.next=function(t){return e.i(t)},this.throw=function(t){return e.j(t)},this.return=function(t){return function(e,t){m(e.a);var n=e.a.c;return n?_(e,"return"in n?n.return:function(e){return{value:e,done:!0}},t,e.a.return):(e.a.return(t),w(e))}(e,t)},c(),this[Symbol.iterator]=function(){return this}}function E(e,t){var n=new g(new b(t));return p&&p(n,e.prototype),n}if(h.prototype.i=function(e){this.o=e},h.prototype.j=function(e){this.g={A:e,B:!0},this.b=this.w||this.m},h.prototype.return=function(e){this.g={return:e},this.b=this.m},b.prototype.i=function(e){return m(this.a),this.a.c?_(this,this.a.c.next,e,this.a.i):(this.a.i(e),w(this))},b.prototype.j=function(e){return m(this.a),this.a.c?_(this,this.a.c.throw,e,this.a.i):(this.a.j(e),w(this))},"function"==typeof Blob&&("undefined"==typeof FormData||!FormData.prototype.keys)){var x=function(e,t){for(var n=0;n<e.length;n++)t(e[n])},k=function(e,t,n){return t instanceof Blob?[String(e),t,void 0!==n?n+"":"string"==typeof t.name?t.name:"blob"]:[String(e),String(t)]},S=function(e,t){if(e.length<t)throw new TypeError(t+" argument required, but only "+e.length+" present.")},M=function(e){var t=s(e);return e=t.next().value,t=t.next().value,e instanceof Blob&&(e=new File([e],t,{type:e.type,lastModified:e.lastModified})),e},B="object"==typeof window?window:"object"==typeof self?self:this,C=B.FormData,D=B.XMLHttpRequest&&B.XMLHttpRequest.prototype.send,j=B.Request&&B.fetch,O=B.navigator&&B.navigator.sendBeacon;i();var A=B.Symbol&&Symbol.toStringTag;A&&(Blob.prototype[A]||(Blob.prototype[A]="Blob"),"File"in B&&!File.prototype[A]&&(File.prototype[A]="File"));try{new File([],"")}catch(e){B.File=function(e,t,n){return e=new Blob(e,n),n=n&&void 0!==n.lastModified?new Date(n.lastModified):new Date,Object.defineProperties(e,{name:{value:t},lastModifiedDate:{value:n},lastModified:{value:+n},toString:{value:function(){return"[object File]"}}}),A&&Object.defineProperty(e,A,{value:"File"}),e}}i(),c();var L=function(e){if(this.f=Object.create(null),!e)return this;var t=this;x(e.elements,function(e){if(e.name&&!e.disabled&&"submit"!==e.type&&"button"!==e.type)if("file"===e.type){var n=e.files&&e.files.length?e.files:[new File([],"",{type:"application/octet-stream"})];x(n,function(n){t.append(e.name,n)})}else"select-multiple"===e.type||"select-one"===e.type?x(e.options,function(n){!n.disabled&&n.selected&&t.append(e.name,n.value)}):"checkbox"===e.type||"radio"===e.type?e.checked&&t.append(e.name,e.value):(n="textarea"===e.type?e.value.replace(/\r\n/g,"\n").replace(/\n/g,"\r\n"):e.value,t.append(e.name,n))})};if((t=L.prototype).append=function(e,t,n){S(arguments,2);var r=s(k.apply(null,arguments));e=r.next().value,t=r.next().value,n=r.next().value,(r=this.f)[e]||(r[e]=[]),r[e].push([t,n])},t.delete=function(e){S(arguments,1),delete this.f[String(e)]},t.entries=function e(){var t,n,r,o,i,a,l=this;return E(e,function(e){switch(e.b){case 1:t=l.f,r=new y(t);case 2:var u;e:{for(u=r;0<u.l.length;){var c=u.l.pop();if(c in u.C){u=c;break e}}u=null}if(null==(n=u)){e.b=0;break}o=s(t[n]),i=o.next();case 5:if(i.done){e.b=2;break}return a=i.value,v(e,[n,M(a)],6);case 6:i=o.next(),e.b=5}})},t.forEach=function(e,t){S(arguments,1);for(var n=s(this),r=n.next();!r.done;r=n.next()){var o=s(r.value);r=o.next().value,o=o.next().value,e.call(t,o,r,this)}},t.get=function(e){S(arguments,1);var t=this.f;return t[e=String(e)]?M(t[e][0]):null},t.getAll=function(e){return S(arguments,1),(this.f[String(e)]||[]).map(M)},t.has=function(e){return S(arguments,1),String(e)in this.f},t.keys=function e(){var t,n,r,o,i=this;return E(e,function(e){if(1==e.b&&(t=s(i),n=t.next()),3!=e.b)return n.done?void(e.b=0):(r=n.value,o=s(r),v(e,o.next().value,3));n=t.next(),e.b=2})},t.set=function(e,t,n){S(arguments,2);var r=k.apply(null,arguments);this.f[r[0]]=[[r[1],r[2]]]},t.values=function e(){var t,n,r,o,i=this;return E(e,function(e){if(1==e.b&&(t=s(i),n=t.next()),3!=e.b)return n.done?void(e.b=0):(r=n.value,(o=s(r)).next(),v(e,o.next().value,3));n=t.next(),e.b=2})},L.prototype._asNative=function(){for(var e=new C,t=s(this),n=t.next();!n.done;n=t.next()){var r=s(n.value);n=r.next().value,r=r.next().value,e.append(n,r)}return e},L.prototype._blob=function(){for(var e="----formdata-polyfill-"+Math.random(),t=[],n=s(this),r=n.next();!r.done;r=n.next()){var o=s(r.value);r=o.next().value,o=o.next().value,t.push("--"+e+"\r\n"),o instanceof Blob?t.push('Content-Disposition: form-data; name="'+r+'"; filename="'+o.name+'"\r\n',"Content-Type: "+(o.type||"application/octet-stream")+"\r\n\r\n",o,"\r\n"):t.push('Content-Disposition: form-data; name="'+r+'"\r\n\r\n'+o+"\r\n")}return t.push("--"+e+"--"),new Blob(t,{type:"multipart/form-data; boundary="+e})},L.prototype[Symbol.iterator]=function(){return this.entries()},L.prototype.toString=function(){return"[object FormData]"},A&&(L.prototype[A]="FormData"),D){var q=B.XMLHttpRequest.prototype.setRequestHeader;B.XMLHttpRequest.prototype.setRequestHeader=function(e,t){return"content-type"===e.toLowerCase()&&(this.u=!0),q.call(this,e,t)},B.XMLHttpRequest.prototype.send=function(e){e instanceof L?(e=e._blob(),this.u||this.setRequestHeader("Content-Type",e.type),D.call(this,e)):D.call(this,e)}}if(j){var R=B.fetch;B.fetch=function(e,t){return t&&t.body&&t.body instanceof L&&(t.body=t.body._blob()),R.call(this,e,t)}}O&&(B.navigator.sendBeacon=function(e,t){return t instanceof L&&(t=t._asNative()),O.call(this,e,t)}),B.FormData=L}}()}).call(this,n("yLpj"))},o1Lx:function(e,t){e.exports=Sortable},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}});