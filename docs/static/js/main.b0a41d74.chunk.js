(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(120));t.default=function(e){return function(t,n){var r=t.document.getParent(n.key);return r&&a.default(e)(r)?r:null}}},120:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){return function(t){return e.types.includes(t.type)}}},121:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(188));t.getCurrentBlockquote=a.default;var u=r(n(546));t.isSelectionInBlockquote=u.default},122:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(547));t.unwrapBlockquote=a.default;var u=r(n(548));t.wrapInBlockquote=u.default},162:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t}(n(1).Record({types:["ul_list","ol_list"],typeItem:"list_item",typeDefault:"paragraph",canMerge:function(e,t){return e.type===t.type}}));t.default=a},183:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),u=r(n(120)),i=r(n(50));t.default=function(e){return function(t,n){if(!(n=n||t.selection).start.key)return a.List();var r=t.document,o=r.getClosestBlock(n.start.key),c=r.getClosestBlock(n.end.key);if(o===c){var l=i.default(e)(t,o);return l?a.List([l]):a.List()}var s=r.getCommonAncestor(o.key,c.key);if(u.default(e)(s)){var f=s.getPath(o.key),d=s.getPath(c.key);return s.nodes.slice(f[0],d[0]+1)}return s.type===e.typeItem?a.List([s]):a.List()}}},184:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bindAndScopeChange=function(e,t,n){return function(r){for(var a=[],u=1;u<arguments.length;u++)a[u-1]=arguments[u];return t(e,r)?n.apply(void 0,[e,r].concat(a)):r}}},186:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t}(n(1).Record({type:"blockquote",typeDefault:"paragraph"}));t.default=a},187:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(121),a=n(122);t.default=function(e,t,n,u){var i=t.value;return r.getCurrentBlockquote(n)(i)&&i.selection.isCollapsed?0!==i.selection.start.offset?u():(e.preventDefault(),a.unwrapBlockquote(n,t),!0):u()}},188:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){return function(t,n){var r=t.document;if(!n){if(!t.selection.start.key)return null;n=t.startBlock}var a=r.getParent(n.key);return a&&a.type===e.type?a:null}}},189:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(121),a=n(122);t.default=function(e,t,n,u){var i=t.value,o=i.startBlock;return r.getCurrentBlockquote(n)(i)?0!==o.text.length?u():(e.preventDefault(),a.unwrapBlockquote(n,t),!0):u()}},194:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=a(n(162)),i=n(419),o=a(n(528));var c=function(e){return function(t,n,r){var a=t;switch(a.key){case"Enter":return i.onEnter(a,n,e,r);case"Tab":return i.onTab(a,n,e,r);case"Backspace":return i.onBackspace(a,n,e,r);default:return r()}}};t.default=function(e){void 0===e&&(e={});var t=new u.default(e),n=o.default(e);return r({},n,{onKeyDown:c(t)})}},200:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=a(n(186)),i=n(545),o=a(n(550));t.default=function(e){void 0===e&&(e={});var t=new u.default(e),n=o.default(e);return r({},n,{onKeyDown:i.onKeyDown(t)})}},27:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(50));t.getCurrentItem=a.default;var u=r(n(518));t.getCurrentList=u.default;var i=r(n(519));t.getItemDepth=i.default;var o=r(n(183));t.getItemsAtRange=o.default;var c=r(n(119));t.getListForItem=c.default;var l=r(n(520));t.getPreviousItem=l.default;var s=r(n(120));t.isList=s.default;var f=r(n(521));t.isSelectionInList=f.default},285:function(e,t,n){e.exports=n(554)},290:function(e,t,n){},419:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(420));t.onEnter=a.default;var u=r(n(526));t.onTab=u.default;var i=r(n(527));t.onBackspace=i.default},420:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(62),a=n(27);t.default=function(e,t,n,u){if(e.shiftKey)return u();var i=t.value,o=a.getCurrentItem(n)(i);return o?(e.preventDefault(),i.selection.isExpanded&&t.delete(),o.nodes.every(function(e){return""===e.text})?a.getItemDepth(n)(i)>1?r.decreaseItemDepth(n,t):r.unwrapList(n,t):r.splitListItem(n,t)):u()}},421:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),a=n(1),u=n(27);t.default=function(e){return function(t,n,i){var o=function(e){var t=e.selection,n=e.document,r=n.getClosestBlock(t.start.key),u=n.getClosestBlock(t.end.key);if(r===u)return a.List([r]);var i=n.getCommonAncestor(r.key,u.key),o=i.getPath(r.key),c=i.getPath(u.key);return i.nodes.slice(o[0],c[0]+1)}(t.value);return n=n||e.types[0],t.withoutNormalizing(function(){t.wrapBlock({type:n,data:r.Data.create(i)})}),o.forEach(function(n){u.isList(e)(n)?n.nodes.forEach(function(e){var n=e.key;t.withoutNormalizing(function(){t.unwrapNodeByKey(n)})}):t.withoutNormalizing(function(){t.wrapBlockByKey(n.key,e.typeItem)})}),t.normalize()}}},50:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){return function(t,n){var r=t.document;if(!n){if(!t.selection.start.key)return null;n=t.startBlock}var a=r.getParent(n.key);return a&&a.type===e.typeItem?a:null}}},518:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(50)),u=r(n(119));t.default=function(e){return function(t,n){var r=a.default(e)(t,n);return r?u.default(e)(t,r):null}}},519:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(50));t.default=function e(t){return function(n,r){var u=n.document,i=n.startBlock;r=r||i;var o=a.default(t)(n,r);if(!o)return 0;var c=u.getParent(o.key);return 1+e(t)(n,c)}}},520:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(50));t.default=function(e){return function(t,n){var r=t.document,u=t.startBlock;n=n||u;var i=a.default(e)(t,n);if(!i)return null;var o=r.getPreviousSibling(i.key);return o&&o.type===e.typeItem?o:null}}},521:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(183)),u=r(n(119));t.default=function(e){return function(t,n){var r=a.default(e)(t);return!r.isEmpty()&&(!n||u.default(e)(t,r.first()).get("type")===n)}}},522:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(27);t.default=function(e,t){var n=r.getItemsAtRange(e)(t.value);return n.isEmpty()?t:t.withoutNormalizing(function(){n.forEach(function(e){t.unwrapNodeByKey(e.key)});var e=n.first(),r=t.value.document.getParent(e.key);if(r){var a=r.nodes.findIndex(function(t){return t.key===e.key});n.forEach(function(e){e.nodes.forEach(function(e){t.moveNodeByKey(e.key,r.key,a),a+=1})}),n.forEach(function(e){t.removeNodeByKey(e.key)})}})}},523:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(27);t.default=function(e,t){var n=t.value,a=r.getCurrentItem(e)(n);return a?t.splitDescendantsByKey(a.key,n.selection.start.key,n.selection.start.offset):t}},524:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),a=n(27);t.default=function(e,t){var n=a.getPreviousItem(e)(t.value),u=a.getCurrentItem(e)(t.value);return n&&u?function(e,t,n,u){var i=t.value.document.getDescendant(u),o=i.nodes.size,c=i.nodes.last(),l=a.isList(e)(c)?c:null;if(l)return t.moveNodeByKey(n.key,l.key,l.nodes.size);var s=a.getListForItem(e)(t.value,i);if(!s)throw new Error("Destination is not in a list");var f=r.Block.create({object:"block",type:s.type,data:s.data});return f.validate(t),t.withoutNormalizing(function(){t.insertNodeByKey(u,o,f),t.moveNodeByKey(n.key,f.key,0)})}(e,t,u,n.key):t}},525:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),a=n(27);t.default=function(e,t){var n=t.value,u=n.document;if(1===a.getItemDepth(e)(n))return t;var i=a.getCurrentItem(e)(n);if(!i)return t;var o=u.getParent(i.key),c=u.getParent(o.key),l=u.getParent(c.key),s=o.nodes.skipUntil(function(e){return e===i}).rest(),f=o.nodes.size===s.size+1;if(s.isEmpty())t.moveNodeByKey(i.key,l.key,l.nodes.indexOf(c)+1);else{var d=r.Block.create({object:"block",type:o.type,data:o.data});t.withoutNormalizing(function(){t.insertNodeByKey(i.key,i.nodes.size,d)}),t.withoutNormalizing(function(){t.moveNodeByKey(i.key,l.key,l.nodes.indexOf(c)+1)}),s.forEach(function(e,n){t.withoutNormalizing(function(){t.moveNodeByKey(e.key,d.key,d.nodes.size+n)})})}return f&&t.removeNodeByKey(o.key),t}},526:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(62),a=n(27);t.default=function(e,t,n,u){var i=t.value;return i.selection.isCollapsed&&a.getCurrentItem(n)(i)?e.shiftKey?(e.preventDefault(),r.decreaseItemDepth(n,t)):(e.preventDefault(),r.increaseItemDepth(n,t)):u()}},527:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(62),a=n(27);t.default=function(e,t,n,u){var i=t.value,o=i.selection,c=i.selection.start.offset;if(o.isExpanded)return u();if(c>0)return u();var l=a.getCurrentItem(n)(i);return l?!o.isCollapsed&&o.anchor.isAtEndOfNode(l)?u():(e.preventDefault(),r.unwrapList(n,t)):u()}},528:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(184),u=r(n(162)),i=n(529),o=n(62),c=n(27);var l=function(e,t){return c.isSelectionInList(e)(t.value)};t.default=function(e){void 0===e&&(e={});var t=new u.default(e);return{schema:i.schema(t),normalizeNode:i.normalizeNode(t),utils:{getCurrentItem:c.getCurrentItem(t),getCurrentList:c.getCurrentList(t),getItemDepth:c.getItemDepth(t),getItemsAtRange:c.getItemsAtRange(t),getPreviousItem:c.getPreviousItem(t),isList:c.isList(t),isSelectionInList:c.isSelectionInList(t)},changes:{decreaseItemDepth:a.bindAndScopeChange(t,l,o.decreaseItemDepth),increaseItemDepth:a.bindAndScopeChange(t,l,o.increaseItemDepth),splitListItem:a.bindAndScopeChange(t,l,o.splitListItem),unwrapList:a.bindAndScopeChange(t,l,o.unwrapList),wrapInList:o.wrapInList(t)}}}},529:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(530));t.schema=a.default;var u=r(n(531));t.normalizeNode=u.default},530:function(e,t,n){"use strict";function r(e){return function(t,n){var r=e[n.code];r&&r(t,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n={blocks:(t={},t[e.typeItem]={parent:e.types.map(function(e){return{type:e}}),nodes:[{match:{object:"block"}}],normalize:r({parent_type_invalid:function(e,t){e.withoutNormalizing(function(){e.unwrapNodeByKey(t.node.key)})},child_object_invalid:function(t,n){!function(e,t,n){t.withoutNormalizing(function(){t.wrapBlockByKey(n.nodes.first().key,e.typeDefault)});var r=t.value.document.getDescendant(n.key).nodes.first();n.nodes.rest().forEach(function(e,n){t.withoutNormalizing(function(){t.moveNodeByKey(e.key,r.key,n+1)})})}(e,t,n.node)}})},t)};return e.types.forEach(function(t){n.blocks[t]={nodes:[{match:{type:e.typeItem}}],normalize:r({child_type_invalid:function(t,n){t.withoutNormalizing(function(){t.wrapBlockByKey(n.child.key,e.typeItem)})}})}}),n}},531:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(27);t.default=function(e){return function(t){return function(e,t){if("document"===t.object||"block"===t.object){var n=t.nodes.map(function(n,a){if(!r.isList(e)(n))return null;var u=t.nodes.get(a+1);return u&&r.isList(e)(u)&&e.canMerge(n,u)?[n,u]:null}).filter(Boolean);if(!n.isEmpty())return function(e){n.reverse().forEach(function(t){var n=t,r=n[0],a=n[1],u=e.value.document.getDescendant(a.key);u.nodes.forEach(function(t,n){e.withoutNormalizing(function(){e.moveNodeByKey(t.key,r.key,r.nodes.size+n)})}),e.withoutNormalizing(function(){e.removeNodeByKey(a.key)})})}}}(e,t)}}},545:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(187));t.onBackspace=a.default;var u=r(n(189));t.onEnter=u.default;var i=r(n(549));t.onKeyDown=i.default},546:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(188));t.default=function(e){return function(t){return Boolean(a.default(e)(t))}}},547:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return t.unwrapBlock(e.type)}},548:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){return function(t){return t.wrapBlock(e.type)}}},549:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(189)),u=r(n(187));t.default=function(e){return function(t,n,r){var i=t;switch(i.key){case"Enter":return a.default(i,n,e,r);case"Backspace":return u.default(i,n,e,r);default:return r()}}}},550:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(184),u=r(n(186)),i=n(121),o=n(122),c=n(551);var l=function(e,t){return i.isSelectionInBlockquote(e)(t.value)};t.default=function(e){var t=new u.default(e);return{schema:c.schema(t),utils:{isSelectionInBlockquote:i.isSelectionInBlockquote(t)},changes:{wrapInBlockquote:o.wrapInBlockquote(t),unwrapBlockquote:a.bindAndScopeChange(t,l,o.unwrapBlockquote)}}}},551:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(552));t.schema=a.default},552:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4);t.default=function(e){var t;return{blocks:(t={},t[e.type]={nodes:[{match:{type:e.typeDefault}}],normalize:function(t,n){switch(n.code){case"child_type_invalid":return function(e,t,n){var a=n.node.nodes.filter(function(e){return"block"!==e.object});if(!a.isEmpty()){var u=r.Block.create({type:e.typeDefault});return t.withoutNormalizing(function(){t.insertNodeByKey(n.node.key,0,u),a.forEach(function(e,n){t.moveNodeByKey(e.key,u.key,n)})})}}(e,t,n)}}},t)}}},554:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(30),i=n.n(u),o=(n(290),n(556)),c=n(409),l=n(555),s=n(558),f=n(13),d=n.n(f),p=n(70),m=n.n(p),h=n(71),v=n.n(h),y=n(51),_=n.n(y),g=n(72),k=n.n(g),b=n(73),E=n.n(b),w=n(24),O=n(28),M=Object(O.withTheme)()(Object(O.withStyles)({svg:{height:"34px",maxHeight:"34px",marginRight:"1rem"}})(function(e){var t={fill:e.theme.palette.background.paper},n={fill:e.theme.palette.secondary.main},a=e.classes;return r.createElement("svg",{className:a.svg,version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 268 50.6",xmlSpace:"preserve"},r.createElement("g",null,r.createElement("path",{style:t,d:"M29.4,45.8c-0.5,0.2-1.5,0.4-3,0.7c-1.5,0.2-3.3,0.4-5.5,0.4c-2.7,0-5.1-0.4-7.1-1.3s-3.8-2.2-5.2-3.9\r S6.2,38,5.5,35.6c-0.7-2.4-1-5-1-8c0-3.2,0.4-5.9,1.2-8.3s2-4.4,3.4-6c1.5-1.6,3.2-2.8,5.1-3.6c2-0.8,4.1-1.2,6.3-1.2\r c2.4,0,4.6,0.3,6.7,0.8c2,0.5,3.7,1.2,4.9,2.1l1.5-3.7c-1-0.6-2.5-1.3-4.7-2c-2.1-0.7-4.8-1.1-8.1-1.1c-2.9,0-5.5,0.5-8.1,1.5\r C10.2,7,8,8.5,6.1,10.4s-3.4,4.4-4.5,7.2c-1,2.8-1.6,6.1-1.6,9.9s0.5,7,1.5,9.9s2.4,5.3,4.3,7.2c1.8,1.9,4,3.4,6.4,4.4\r c2.5,1,5.2,1.5,8.1,1.5c3.5,0,6.4-0.3,8.7-0.8c2.4-0.5,4-1,4.8-1.3V28.8h-4.4V45.8z"}),r.createElement("path",{style:t,d:"M64.9,45.6c-0.4,0.2-1.3,0.4-2.8,0.6c-1.5,0.2-3.2,0.3-5.1,0.3c-1.8,0-3.2-0.2-4.4-0.7c-1.2-0.4-2.2-1.2-3-2.2\r s-1.3-2.3-1.7-3.9c-0.3-1.6-0.5-3.6-0.5-6V16.6h-4.2v18.6c0,2.3,0.2,4.3,0.7,6.2c0.4,1.9,1.2,3.5,2.2,4.8s2.4,2.3,4,3.1\r c1.7,0.7,3.7,1.1,6.2,1.1c3,0,5.6-0.2,7.7-0.6c2.1-0.4,3.8-0.8,5-1.2v-32h-4.2L64.9,45.6L64.9,45.6z"}),r.createElement("path",{style:t,d:"M99.8,46c-1.3,0.4-3.1,0.6-5.4,0.6c-4.1,0-7.1-1.1-9-3.3c-1.1-1.2-1.9-2.8-2.4-4.7h-4.5\r c0.1,0.5,0.2,0.9,0.3,1.4c0.6,2.1,1.6,3.9,2.9,5.5c1.3,1.5,3,2.7,5.1,3.6s4.5,1.3,7.4,1.3c2.2,0,4.1-0.2,5.8-0.7\r c1.6-0.5,2.8-0.9,3.4-1.2l-0.8-3.6C102.1,45.3,101.2,45.5,99.8,46z"}),r.createElement("path",{style:t,d:"M102.2,19.8c-0.7-0.8-1.5-1.5-2.4-2c0.2-0.7,0.3-1.4,0.3-2.2c0-4.5-3.6-8.1-8.1-8.1s-8.1,3.6-8.1,8.1\r c0,1,0.2,2,0.5,2.9c-0.6,0.5-1.2,1-1.8,1.6c-1.3,1.5-2.4,3.3-3.3,5.4c-0.8,2.2-1.2,4.7-1.2,7.6c0,0.3,0,0.6,0,0.9h4.4h3.3h20\r c0-0.3,0.1-0.6,0.1-1c0-0.3,0-0.7,0-1C105.9,26.5,104.6,22.4,102.2,19.8z M92,10.7c2.7,0,4.8,2.2,4.8,4.8s-2.2,4.8-4.8,4.8\r s-4.8-2.2-4.8-4.8S89.3,10.7,92,10.7z M82.6,30.5c0.1-1.4,0.4-2.8,0.9-4.2c0.5-1.3,1.2-2.5,2-3.5c0.3-0.4,0.7-0.8,1.1-1.1\r c1.4,1.2,3.3,2,5.3,2c2.3,0,4.4-1,5.9-2.6c0.5,0.4,0.9,0.8,1.2,1.2c1.5,1.9,2.3,4.6,2.4,8.1H82.6V30.5z"}),r.createElement("path",{style:t,d:"M131.5,34.8c-0.9-0.7-1.9-1.4-3.1-1.9c-1.2-0.5-2.4-1.1-3.7-1.6c-1.2-0.5-2.3-1-3.3-1.4s-1.8-0.9-2.4-1.4\r c-0.7-0.5-1.2-1.1-1.5-1.7s-0.5-1.4-0.5-2.3s0.2-1.7,0.6-2.3c0.4-0.6,0.9-1.1,1.5-1.5s1.4-0.7,2.2-0.9s1.7-0.3,2.7-0.3\r c2.3,0,4.1,0.2,5.3,0.6s2.1,0.8,2.6,1l1-3.7c-0.6-0.3-1.6-0.6-3.1-1s-3.3-0.6-5.6-0.6c-3.5,0-6.3,0.8-8.4,2.5c-2,1.7-3,3.8-3,6.5\r c0,1.4,0.3,2.6,0.8,3.6s1.2,1.8,2,2.5c0.9,0.7,1.8,1.3,2.9,1.9c1.1,0.5,2.3,1.1,3.5,1.6c1.5,0.6,2.8,1.2,3.9,1.7\r c1,0.5,1.9,1,2.5,1.5c0.6,0.5,1.1,1.1,1.4,1.7c0.3,0.6,0.4,1.4,0.4,2.3c0,1.9-0.8,3.2-2.3,4c-1.6,0.8-3.5,1.2-5.9,1.2\r c-1.3,0-2.5-0.1-3.5-0.3s-1.9-0.4-2.6-0.6c-0.7-0.2-1.3-0.4-1.7-0.6c-0.4-0.2-0.7-0.3-0.8-0.4l-1.1,3.8c0.5,0.3,1.5,0.6,3.1,1.1\r c1.5,0.5,3.8,0.7,6.7,0.7c3.9,0,6.9-0.8,9.2-2.3c2.2-1.5,3.4-3.8,3.4-6.8c0-1.6-0.3-2.9-0.8-3.9C133.1,36.5,132.4,35.5,131.5,34.8z\r "}),r.createElement("path",{style:t,d:"M157.5,46c-1.1,0.4-2.5,0.6-4.2,0.6c-1,0-2-0.1-2.8-0.3c-0.9-0.2-1.6-0.6-2.2-1.3c-0.6-0.6-1.1-1.5-1.4-2.7\r c-0.3-1.2-0.5-2.7-0.5-4.6V20.1h13.2v-3.5h-13.2V6.1l-4.2,0.8v30.5c0,2.2,0.2,4.1,0.5,5.8c0.3,1.6,0.9,3,1.8,4.1\r c0.8,1.1,1.9,1.9,3.3,2.4c1.4,0.5,3.1,0.8,5.2,0.8c1.7,0,3.4-0.2,4.9-0.7s2.5-0.9,3.1-1.3l-1-3.5C159.4,45.3,158.6,45.6,157.5,46z"}),r.createElement("path",{style:n,d:"M196,29.4c-0.8-0.9-1.8-1.6-2.8-2.1c-1.1-0.6-2.2-1-3.5-1.3c2-0.6,3.7-1.8,4.9-3.5s1.8-3.7,1.8-6.1\r c0-2.2-0.5-4-1.4-5.5c-1-1.5-2.3-2.7-3.9-3.5c-1.6-0.9-3.5-1.5-5.7-1.9s-4.4-0.6-6.8-0.6c-0.8,0-1.7,0-2.7,0.1\r c-1,0-1.9,0.1-2.9,0.2s-2,0.2-2.9,0.4c-0.9,0.1-1.8,0.3-2.6,0.5v42.7c0.6,0.2,1.4,0.3,2.3,0.5c0.9,0.1,1.8,0.3,2.8,0.4\r c1,0.1,2,0.2,2.9,0.3s1.8,0.1,2.5,0.1c7,0,12.1-1.1,15.4-3.3s5-5.4,5-9.6c0-1.8-0.2-3.3-0.7-4.5C197.5,31.4,196.8,30.3,196,29.4z\r M171.9,9.1c0.7-0.1,1.6-0.2,2.7-0.3c1.1-0.1,2.4-0.1,4-0.1c2,0,3.8,0.1,5.4,0.4c1.6,0.3,3,0.7,4.2,1.4c1.2,0.6,2.1,1.5,2.7,2.5\r c0.6,1,1,2.2,1,3.7c0,1.6-0.3,2.9-0.9,4c-0.6,1-1.4,1.9-2.5,2.5c-1,0.6-2.3,1-3.7,1.3s-2.9,0.4-4.5,0.4h-8.4V9.1z M192.7,41.8\r c-0.9,1.2-2,2.1-3.4,2.8s-3,1.2-4.9,1.4c-1.9,0.3-3.8,0.4-5.7,0.4c-1.3,0-2.6-0.1-3.9-0.2c-1.3-0.1-2.2-0.2-2.9-0.3V28.4h9.2\r c2,0,3.7,0.1,5.3,0.4s3,0.7,4.1,1.4c1.1,0.7,2,1.6,2.6,2.7s0.9,2.6,0.9,4.3C194,39,193.6,40.5,192.7,41.8z"}),r.createElement("path",{style:n,d:"M227.4,46c-1.3,0.4-3.1,0.6-5.4,0.6c-4.1,0-7.1-1.1-9-3.3c-1.1-1.2-1.9-2.8-2.4-4.7h-4.5\r c0.1,0.5,0.2,0.9,0.3,1.4c0.6,2.1,1.6,3.9,2.9,5.5c1.3,1.5,3,2.7,5.1,3.6s4.5,1.3,7.4,1.3c2.2,0,4.1-0.2,5.8-0.7\r c1.6-0.5,2.8-0.9,3.4-1.2l-0.8-3.6C229.7,45.3,228.7,45.5,227.4,46z"}),r.createElement("path",{style:n,d:"M247.9,45.5c-0.4-0.4-0.7-0.9-0.9-1.5s-0.3-1.4-0.3-2.5V0l-4.2,0.8v41c0,1.6,0.2,2.9,0.5,3.9\r c0.4,1,0.9,1.9,1.6,2.6c0.7,0.7,1.6,1.2,2.6,1.5s2.3,0.5,3.7,0.5l0.6-3.5c-0.9-0.1-1.6-0.3-2.2-0.4C248.8,46.3,248.3,46,247.9,45.5\r z"}),r.createElement("path",{style:n,d:"M265.8,46.3c-0.6-0.2-1.1-0.4-1.5-0.8c-0.4-0.4-0.7-0.9-0.9-1.5c-0.2-0.6-0.3-1.4-0.3-2.5V0l-4.2,0.8v41\r c0,1.6,0.2,2.9,0.5,3.9c0.4,1,0.9,1.9,1.6,2.6c0.7,0.7,1.6,1.2,2.6,1.5s2.3,0.5,3.7,0.5l0.6-3.5C267.1,46.8,266.4,46.5,265.8,46.3z\r "}),r.createElement("path",{style:n,d:"M229.8,19.8c-2-2.2-4.7-3.5-7.8-3.8v-5h3.6V7.4h-10.8V11h3.6v5c-1.3,0.1-2.5,0.4-3.7,0.9\r c-1.7,0.7-3.3,1.8-4.6,3.2c-1.3,1.5-2.4,3.3-3.3,5.4c-0.8,2.2-1.2,4.7-1.2,7.6c0,0.3,0,0.6,0,0.9h27h0.6c0-0.3,0.1-0.6,0.1-1\r c0-0.3,0-0.7,0-1C233.4,26.5,232.2,22.4,229.8,19.8z M210.2,30.5c0.1-1.4,0.4-2.8,0.9-4.2c0.5-1.3,1.2-2.5,2-3.5\r c0.9-1,1.9-1.8,3.1-2.4c1.2-0.6,2.5-0.9,4-0.9c2.8,0,5,1,6.5,2.9s2.3,4.6,2.4,8.1H210.2z"})))})),j=n(76),B=n.n(j),P=n(192),I=n.n(P),N=n(557),C=n(559),D=function(e){return r.createElement("a",Object.assign({target:"blank",href:"https://github.com/guestbell/slate-plugins"},e))},z=Object(O.withStyles)(function(e){return{root:{flexGrow:1},appBar:{zIndex:e.zIndex.drawer+1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},toolbar:e.mixins.toolbar}})(Object(C.a)(function(e){var t=e.classes;return r.createElement(r.Fragment,null,r.createElement(m.a,{position:"static",className:t.appBar},r.createElement(v.a,null,r.createElement(M,null),r.createElement(_.a,{variant:"h6",color:"inherit",className:t.grow},"Slate plugins"),r.createElement(k.a,{color:"inherit",component:D},r.createElement(E.a,{className:"fa fa-github"})))),r.createElement(w.b,{className:t.drawer,variant:"permanent",classes:{paper:t.drawerPaper}},r.createElement("div",{className:t.toolbar}),r.createElement(w.c,null,r.createElement(w.d,{button:!0,component:function(e){return r.createElement(N.a,{to:"/slate-edit-list",className:e.className},e.children)}},r.createElement(w.e,null,r.createElement(B.a,null)),r.createElement(w.f,{primary:"Edit list"})),r.createElement(w.d,{button:!0,component:function(e){return r.createElement(N.a,{to:"/slate-edit-blockquote",className:e.className},e.children)}},r.createElement(w.e,null,r.createElement(I.a,null)),r.createElement(w.f,{primary:"Edit blockquote"})))))})),x=Object(O.withStyles)(function(e){return{root:{display:"flex",flexDirection:"column"},content:{flexGrow:1,padding:3*e.spacing.unit,marginLeft:240},toolbar:e.mixins.toolbar}})(function(e){var t=e.classes;return r.createElement("div",{className:d()("main-layout",e.className,t.root)},r.createElement(z,null),r.createElement("main",{className:d()(t.content)},e.children))}),L=n(128),S=function(e){return r.createElement("h2",null,"Not found what you were looking for")},q=function(e){return r.createElement("h2",null,"Home page")},K=n(77),A=n(78),T=n(83),V=n(79),R=n(84),F=n(194),H=n.n(F),J=n(80),U=Object(J.a)({blocks:{heading:"heading",paragraph:"paragraph",ul_list:"ul_list",ol_list:"ol_list",list_item:"list_item"}}),G=U("value",null,U("document",null,U("heading",null,"Slate + List Edition"),U("paragraph",null,"This page is a basic example of Slate + slate-edit-list plugin. Press Enter in a list to create a new list item. Press Enter again to exit and Shift+Enter to create a paragraph in a list. The items at range are detected and highlighted, for demonstration purpose."),U("ul_list",{style:{listStyleType:"disc"}},U("list_item",null,U("paragraph",null,"First item in the list")),U("list_item",null,U("paragraph",null,"List item can contain blocks"),U("heading",null,"Here is a heading"),U("paragraph",null,"And another paragraph")),U("list_item",null,U("paragraph",null,"Third item in the list, with a nested list"),U("ol_list",{style:{listStyleType:"decimal"}},U("list_item",null,U("paragraph",null,"First item in the nested list")),U("list_item",null,U("paragraph",null,"Second item in the nested list"))))),U("paragraph",null,"End paragraph"))),W=n(82),Q=function(e){return r.createElement(w.a,Object.assign({style:{marginRight:"1rem"},variant:"outlined"},e))},X=n(199),$=n.n(X),Y=n(198),Z=n.n(Y),ee=H()(),te=[ee];function ne(e){var t=e.node,n=e.attributes,a=e.children,u=e.editor,i=ee.utils.getItemsAtRange(u.value).contains(t);switch(t.type){case"ul_list":return r.createElement("ul",n,a);case"ol_list":return r.createElement("ol",n,a);case"list_item":return r.createElement("li",Object.assign({className:i?"current-item":"",title:i?"Current Item":""},e.attributes),e.children);case"paragraph":return r.createElement("p",n,a);case"heading":return r.createElement("h1",n,a);default:return r.createElement("p",n,a)}}var re=function(e){function t(e){var n;return Object(K.a)(this,t),(n=Object(T.a)(this,Object(V.a)(t).call(this,e))).onChange=function(e){var t=e.value,r=t.toJSON();console.log(r),n.setState({value:t})},n.state={value:G},n.editor=r.createRef(),n}return Object(R.a)(t,e),Object(A.a)(t,[{key:"renderToolbar",value:function(){var e=this,t=ee.changes,n=t.wrapInList,a=t.unwrapList,u=t.increaseItemDepth,i=t.decreaseItemDepth,o=ee.utils.isSelectionInList(this.state.value);return r.createElement("div",null,r.createElement(Q,{color:o?"secondary":"primary",onClick:function(){return e.call(o?a:n)}},r.createElement(B.a,null)),r.createElement(Q,{disabled:!o,onClick:function(){return e.call(i)}},r.createElement(Z.a,null)),r.createElement(Q,{disabled:!o,onClick:function(){return e.call(u)}},r.createElement($.a,null)),r.createElement(Q,{onClick:function(){return e.call(n)}},"Wrap in list"),r.createElement(Q,{onClick:function(){return e.call(a)}},"Unwrap from list"))}},{key:"call",value:function(e){this.editor.current&&this.editor.current.command(e)}},{key:"render",value:function(){return r.createElement("div",null,this.renderToolbar(),r.createElement(W.a,{className:"slate-editor",ref:this.editor,placeholder:"Enter some text...",plugins:te,value:this.state.value,onChange:this.onChange,renderNode:ne,shouldNodeComponentUpdate:function(e){return"list_item"===e.node.type}}))}}]),t}(r.Component),ae=n(200),ue=n.n(ae),ie=Object(J.a)({blocks:{heading:"heading",paragraph:"paragraph",blockquote:"blockquote"}}),oe=ie("value",null,ie("document",null,ie("heading",null,"Slate + Quote Editing"),ie("paragraph",null,"This page is a basic example of Slate + slate-edit-blockquote plugin."),ie("blockquote",null,ie("paragraph",null,"Some text in the blockquote")),ie("paragraph",null,"End paragraph"))),ce=ue()(),le=[ce];function se(e){var t=e.node,n=e.children,a=e.attributes;switch(t.type){case"blockquote":return r.createElement("blockquote",a,n);case"paragraph":return r.createElement("p",a,n);case"heading":return r.createElement("h1",a,n);default:return null}}var fe=function(e){function t(e){var n;return Object(K.a)(this,t),(n=Object(T.a)(this,Object(V.a)(t).call(this,e))).onChange=function(e){var t=e.value,r=t.toJSON();console.log(r),n.setState({value:t})},n.state={value:oe},n.editor=r.createRef(),n}return Object(R.a)(t,e),Object(A.a)(t,[{key:"renderToolbar",value:function(){var e=this,t=ce.changes,n=t.wrapInBlockquote,a=t.unwrapBlockquote,u=ce.utils.isSelectionInBlockquote(this.state.value);return r.createElement("div",null,r.createElement(Q,{onClick:function(){return e.call(n)}},"Blockquote"),r.createElement(Q,{disabled:!u,onClick:function(){return e.call(a)}},"Unwrap"))}},{key:"call",value:function(e){this.editor.current&&this.editor.current.command(e)}},{key:"render",value:function(){return r.createElement("div",null,this.renderToolbar(),r.createElement(W.a,{className:"slate-editor",ref:this.editor,placeholder:"Enter some text...",plugins:le,value:this.state.value,onChange:this.onChange,renderNode:se}))}}]),t}(r.Component),de=L.b.div({enter:{y:0,opacity:1,delay:100,beforeChildren:!0},exit:{y:-20,opacity:0,transition:{duration:200}}}),pe=[{exact:!0,path:"/",component:q,className:"home"},{path:"/slate-edit-list",component:re,className:"slate-edit-list"},{path:"/slate-edit-blockquote",component:fe,className:"slate-edit-blockquote"},{component:S}],me=r.createElement(c.a,{render:function(e){var t=e.location,n=pe.find(function(e){var n=Object(l.a)(t.pathname,{path:e.path,exact:e.exact,strict:e.strict});return Boolean(n)}),a=n&&n.className;return r.createElement(x,{className:a},r.createElement(L.a,null,r.createElement(de,{key:t.pathname,className:"d-flex flex-column"},r.createElement(s.a,{location:t},pe.map(function(e,t){return r.createElement(c.a,Object.assign({},e,{key:t}))})))))}}),he=n(74),ve=n.n(he),ye=Object(O.createMuiTheme)({palette:{primary:{main:"#10bdc7"},secondary:{main:"#555555"}},typography:{useNextVariants:!0}}),_e=function(e){return r.createElement(O.MuiThemeProvider,{theme:ye},r.createElement(ve.a,null),r.createElement(o.a,null,me))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(_e,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},62:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(421));t.wrapInList=a.default;var u=r(n(522));t.unwrapList=u.default;var i=r(n(523));t.splitListItem=i.default;var o=r(n(524));t.increaseItemDepth=o.default;var c=r(n(525));t.decreaseItemDepth=c.default}},[[285,2,1]]]);
//# sourceMappingURL=main.b0a41d74.chunk.js.map