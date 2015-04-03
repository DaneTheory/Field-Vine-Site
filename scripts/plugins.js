/*!
* PrefixFree.js 
* KEEP THIS BEFORE ALL PLUGINS
*
* Great little script in conjunction
* with modernizr for handling browser
* based CSS prefixes
*
* http://leaverou.github.io/prefixfree/
*/
(function(a){if(a)a.events={DOMNodeInserted:function(b){var b=b.target,c=b.nodeName;b.nodeType==1&&(/link/i.test(c)?a.link(b):/style/i.test(c)?a.styleElement(b):b.hasAttribute("style")&&a.styleAttribute(b))},DOMAttrModified:function(b){b.attrName==="style"&&(document.removeEventListener("DOMAttrModified",a.events.DOMAttrModified,false),a.styleAttribute(b.target),document.addEventListener("DOMAttrModified",a.events.DOMAttrModified,false))}},document.addEventListener("DOMContentLoaded",function(){document.addEventListener("DOMNodeInserted",
a.events.DOMNodeInserted,false);document.addEventListener("DOMAttrModified",a.events.DOMAttrModified,false)},false)})(window.StyleFix);
(function(a){if(a&&window.CSSStyleDeclaration)for(var b=0;b<a.properties.length;b++){var c=StyleFix.camelCase(a.properties[b]),d=a.prefixProperty(c),e=CSSStyleDeclaration.prototype,f=function(a){return function(){return this[a]}}(d),d=function(a){return function(b){this[a]=b}}(d);Object.defineProperty?Object.defineProperty(e,c,{get:f,set:d,enumerable:true,configurable:true}):e.__defineGetter__&&(e.__defineGetter__(c,f),e.__defineSetter__(c,d))}})(window.PrefixFree);

/*!	
* FitText.js 1.0 jQuery free version
*
* Copyright 2011, Dave Rupert http://daverupert.com 
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
* Modified by Slawomir Kolodziej http://slawekk.info
*
* Date: Tue Aug 09 2011 10:45:54 GMT+0200 (CEST)
*/
!function(){var n=function(n,t,e){n.addEventListener?n.addEventListener(t,e,!1):n.attachEvent("on"+t,e)},t=function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e]);return n};window.fitText=function(e,i,a){var o=t({minFontSize:-1/0,maxFontSize:1/0},a),r=function(t){var e=i||1,a=function(){t.style.fontSize=Math.max(Math.min(t.clientWidth/(10*e),parseFloat(o.maxFontSize)),parseFloat(o.minFontSize))+"px"};a(),n(window,"resize",a)};if(e.length)for(var f=0;f<e.length;f++)r(e[f]);else r(e);return e}}();

/**
 * jQuery FocusPoint; version: 1.1.1
 * Author: http://jonathonmenz.com
 * Source: https://github.com/jonom/jquery-focuspoint
 * Copyright (c) 2014 J. Menz; MIT License
 * @preserve
 */
!function($){var t={reCalcOnWindowResize:!0,throttleDuration:17},n=function(t){var n=t.find("img").attr("src");t.data("imageSrc",n),i(n,function(n,i){t.data({imageW:i.width,imageH:i.height}),r(t)})},i=function(t,n){$("<img />").one("load",function(){n(null,{width:this.width,height:this.height})}).attr("src",t)},a=function(t,n){var i=!1;return function(){var a=Array.prototype.slice.call(arguments,0);return i?!1:(i=!0,void setTimeout(function(){i=!1,t.apply(null,a)},n))}},o=function(t,n,i,a,o){var r=Math.floor(n/2),e=(a+1)/2,u=Math.floor(i/t),f=Math.floor(e*u);o&&(f=u-f);var c=f-r,s=u-f,h=n-r;return h>s&&(c-=h-s),0>c&&(c=0),-100*c/n+"%"},r=function(t){var i=t.data("imageW"),a=t.data("imageH"),r=t.data("imageSrc");if(!i&&!a&&!r)return n(t);var e=t.width(),u=t.height(),f=parseFloat(t.data("focusX")),c=parseFloat(t.data("focusY")),s=t.find("img").first(),h=0,d=0;if(!(e>0&&u>0&&i>0&&a>0))return!1;var l=i/e,w=a/u;s.css({"max-width":"","max-height":""}),i>e&&a>u&&s.css(l>w?"max-height":"max-width","100%"),l>w?h=o(w,e,i,f):w>l&&(d=o(l,u,a,c,!0)),s.css({top:d,left:h})},e=$(window),u=function(t,n){var i=n.throttleDuration?a(function(){r(t)},n.throttleDuration):function(){r(t)},o=!1;return r(t),{adjustFocus:function(){return r(t)},windowOn:function(){return o?void 0:(e.on("resize",i),o=!0)},windowOff:function(){return o?(e.off("resize",i),o=!1,!0):void 0}}};$.fn.focusPoint=function(n){if("string"==typeof n)return this.each(function(){var t=$(this);t.data("focusPoint")[n]()});var i=$.extend({},t,n);return this.each(function(){var t=$(this),n=u(t,i);t.data("focusPoint")&&t.data("focusPoint").windowOff(),t.data("focusPoint",n),i.reCalcOnWindowResize&&n.windowOn()})},$.fn.adjustFocus=function(){return this.each(function(){r($(this))})}}(jQuery);
/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

!function(s){"use strict";function e(s){return new RegExp("(^|\\s+)"+s+"(\\s+|$)")}function n(s,e){var n=a(s,e)?c:t;n(s,e)}var a,t,c;"classList"in document.documentElement?(a=function(s,e){return s.classList.contains(e)},t=function(s,e){s.classList.add(e)},c=function(s,e){s.classList.remove(e)}):(a=function(s,n){return e(n).test(s.className)},t=function(s,e){a(s,e)||(s.className=s.className+" "+e)},c=function(s,n){s.className=s.className.replace(e(n)," ")});var i={hasClass:a,addClass:t,removeClass:c,toggleClass:n,has:a,add:t,remove:c,toggle:n};"function"==typeof define&&define.amd?define(i):s.classie=i}(window);

/**
 * uiMorphingButton_fixed.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
!function(t){"use strict";function n(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function e(t,e){this.el=t,this.options=n({},this.options),n(this.options,e),this._init()}var o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},i=o[Modernizr.prefixed("transition")],s={transitions:Modernizr.csstransitions};e.prototype.options={closeEl:"",onBeforeOpen:function(){return!1},onAfterOpen:function(){return!1},onBeforeClose:function(){return!1},onAfterClose:function(){return!1}},e.prototype._init=function(){this.button=this.el.querySelector("button"),this.expanded=!1,this.contentEl=this.el.querySelector(".morph-content"),this._initEvents()},e.prototype._initEvents=function(){var t=this;if(this.button.addEventListener("click",function(){t.toggle()}),""!==this.options.closeEl){var n=this.el.querySelector(this.options.closeEl);n&&n.addEventListener("click",function(){t.toggle()})}},e.prototype.toggle=function(){if(this.isAnimating)return!1;this.expanded?this.options.onBeforeClose():(classie.addClass(this.el,"active"),this.options.onBeforeOpen()),this.isAnimating=!0;var t=this,n=function(e){if(e.target!==this)return!1;if(s.transitions){if(t.expanded&&"opacity"!==e.propertyName||!t.expanded&&"width"!==e.propertyName&&"height"!==e.propertyName&&"left"!==e.propertyName&&"top"!==e.propertyName)return!1;this.removeEventListener(i,n)}t.isAnimating=!1,t.expanded?(classie.removeClass(t.el,"active"),t.options.onAfterClose()):t.options.onAfterOpen(),t.expanded=!t.expanded};s.transitions?this.contentEl.addEventListener(i,n):n();var e=this.button.getBoundingClientRect();classie.addClass(this.contentEl,"no-transition"),this.contentEl.style.left="auto",this.contentEl.style.top="auto",setTimeout(function(){t.contentEl.style.left=e.left+"px",t.contentEl.style.top=e.top+"px",t.expanded?(classie.removeClass(t.contentEl,"no-transition"),classie.removeClass(t.el,"open")):setTimeout(function(){classie.removeClass(t.contentEl,"no-transition"),classie.addClass(t.el,"open")},25)},25)},t.UIMorphingButton=e}(window),function(){function t(){window.scrollTo(l?l.x:0,l?l.y:0)}function n(){window.removeEventListener("scroll",i),window.addEventListener("scroll",t)}function e(){window.addEventListener("scroll",i)}function o(){window.removeEventListener("scroll",t),e()}function i(){r||(r=!0,setTimeout(function(){s()},60))}function s(){l={x:window.pageXOffset||c.scrollLeft,y:window.pageYOffset||c.scrollTop},r=!1}var r,l,c=window.document.documentElement;e(),[].slice.call(document.querySelectorAll(".morph-button")).forEach(function(t){new UIMorphingButton(t,{closeEl:".icon-close",onBeforeOpen:function(){n()},onAfterOpen:function(){o()},onBeforeClose:function(){n()},onAfterClose:function(){o()}})}),[].slice.call(document.querySelectorAll("form button")).forEach(function(t){t.addEventListener("click",function(t){t.preventDefault()})})}();