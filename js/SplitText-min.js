var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;!function(e){"use strict";var t=e.GreenSockGlobals||e,i=function(e){var i,n=e.split("."),r=t;for(i=0;i<n.length;i++)r[n[i]]=r=r[n[i]]||{};return r}("com.greensock.utils"),n="SplitText",r=String.fromCharCode(103,114,101,101,110,115,111,99,107,46,99,111,109),o=String.fromCharCode(47,114,101,113,117,105,114,101,115,45,109,101,109,98,101,114,115,104,105,112,47),s=function(t){for(var i=-1!==(e?e.location.href:"").indexOf(String.fromCharCode(103,114,101,101,110,115,111,99,107))&&-1!==t.indexOf(String.fromCharCode(108,111,99,97,108,104,111,115,116)),o=[r,String.fromCharCode(99,111,100,101,112,101,110,46,105,111),String.fromCharCode(99,111,100,101,112,101,110,46,100,101,118),String.fromCharCode(99,115,115,45,116,114,105,99,107,115,46,99,111,109),String.fromCharCode(99,100,112,110,46,105,111),String.fromCharCode(103,97,110,110,111,110,46,116,118),String.fromCharCode(99,111,100,101,99,97,110,121,111,110,46,110,101,116),String.fromCharCode(116,104,101,109,101,102,111,114,101,115,116,46,110,101,116),String.fromCharCode(99,101,114,101,98,114,97,120,46,99,111,46,117,107),String.fromCharCode(116,121,109,112,97,110,117,115,46,110,101,116),String.fromCharCode(116,119,101,101,110,109,97,120,46,99,111,109),String.fromCharCode(116,119,101,101,110,108,105,116,101,46,99,111,109),String.fromCharCode(112,108,110,107,114,46,99,111),String.fromCharCode(104,111,116,106,97,114,46,99,111,109),String.fromCharCode(119,101,98,112,97,99,107,98,105,110,46,99,111,109),String.fromCharCode(97,114,99,104,105,118,101,46,111,114,103),String.fromCharCode(99,111,100,101,115,97,110,100,98,111,120,46,105,111),String.fromCharCode(106,115,102,105,100,100,108,101,46,110,101,116)],s=o.length;--s>-1;)if(-1!==t.indexOf(o[s]))return!0;return i&&e&&e.console&&console.log(String.fromCharCode(87,65,82,78,73,78,71,58,32,97,32,115,112,101,99,105,97,108,32,118,101,114,115,105,111,110,32,111,102,32)+n+String.fromCharCode(32,105,115,32,114,117,110,110,105,110,103,32,108,111,99,97,108,108,121,44,32,98,117,116,32,105,116,32,119,105,108,108,32,110,111,116,32,119,111,114,107,32,111,110,32,97,32,108,105,118,101,32,100,111,109,97,105,110,32,98,101,99,97,117,115,101,32,105,116,32,105,115,32,97,32,109,101,109,98,101,114,115,104,105,112,32,98,101,110,101,102,105,116,32,111,102,32,67,108,117,98,32,71,114,101,101,110,83,111,99,107,46,32,80,108,101,97,115,101,32,115,105,103,110,32,117,112,32,97,116,32,104,116,116,112,58,47,47,103,114,101,101,110,115,111,99,107,46,99,111,109,47,99,108,117,98,47,32,97,110,100,32,116,104,101,110,32,100,111,119,110,108,111,97,100,32,116,104,101,32,39,114,101,97,108,39,32,118,101,114,115,105,111,110,32,102,114,111,109,32,121,111,117,114,32,71,114,101,101,110,83,111,99,107,32,97,99,99,111,117,110,116,32,119,104,105,99,104,32,104,97,115,32,110,111,32,115,117,99,104,32,108,105,109,105,116,97,116,105,111,110,115,46,32,84,104,101,32,102,105,108,101,32,121,111,117,39,114,101,32,117,115,105,110,103,32,119,97,115,32,108,105,107,101,108,121,32,100,111,119,110,108,111,97,100,101,100,32,102,114,111,109,32,101,108,115,101,119,104,101,114,101,32,111,110,32,116,104,101,32,119,101,98,32,97,110,100,32,105,115,32,114,101,115,116,114,105,99,116,101,100,32,116,111,32,108,111,99,97,108,32,117,115,101,32,111,114,32,111,110,32,115,105,116,101,115,32,108,105,107,101,32,99,111,100,101,112,101,110,46,105,111,46)),i}(e?e.location.host:""),l=function(e){var t=e.nodeType,i="";if(1===t||9===t||11===t){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)i+=l(e)}else if(3===t||4===t)return e.nodeValue;return i},d=document,a=d.defaultView?d.defaultView.getComputedStyle:function(){},h=/([A-Z])/g,p=function(e,t,i,n){var r;return(i=i||a(e,null))?r=(e=i.getPropertyValue(t.replace(h,"-$1").toLowerCase()))||i.length?e:i[t]:e.currentStyle&&(r=(i=e.currentStyle)[t]),n?r:parseInt(r,10)||0},f=function(e){return!!(e.length&&e[0]&&(e[0].nodeType&&e[0].style&&!e.nodeType||e[0].length&&e[0][0]))},u=function(e,t){for(var i,n=t.length;--n>-1;)if(i=t[n],e.substr(0,i.length)===i)return i.length},c=/(?:\r|\n|\t\t)/g,g=/(?:\s\s+)/g,C=127462,S=127487,x=function(e){return(e.charCodeAt(0)-55296<<10)+(e.charCodeAt(1)-56320)+65536},y=" style='position:relative;display:inline-block;"+(d.all&&!d.addEventListener?"*display:inline;*zoom:1;'":"'"),m=function(e,t){var i=-1!==(e=e||"").indexOf("++"),n=1;return i&&(e=e.split("++").join("")),function(){return"<"+t+y+(e?" class='"+e+(i?n++:"")+"'>":">")}},b=i.SplitText=t.SplitText=function(t,i){if("string"==typeof t&&(t=b.selector(t)),!t)throw"cannot split a null element.";if(!s)return e.location.href="http://"+r+o+"?plugin="+n+"&source=codepen",!1;this.elements=f(t)?function(e){var t,i,n,r=[],o=e.length;for(t=0;t<o;t++)if(i=e[t],f(i))for(n=i.length,n=0;n<i.length;n++)r.push(i[n]);else r.push(i);return r}(t):[t],this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=i||{},this.split(i)},v=function(e,t,i){var n=e.nodeType;if(1===n||9===n||11===n)for(e=e.firstChild;e;e=e.nextSibling)v(e,t,i);else 3!==n&&4!==n||(e.nodeValue=e.nodeValue.split(t).join(i))},_=function(e,t){for(var i=t.length;--i>-1;)e.push(t[i])},T=function(e){var t,i=[],n=e.length;for(t=0;t!==n;i.push(e[t++]));return i},N=function(e,t,i){for(var n;e&&e!==t;){if(n=e._next||e.nextSibling)return n.textContent.charAt(0)===i;e=e.parentNode||e._parent}return!1},w=function(e){var t,i,n=T(e.childNodes),r=n.length;for(t=0;t<r;t++)(i=n[t])._isSplit?w(i):(t&&3===i.previousSibling.nodeType?i.previousSibling.nodeValue+=3===i.nodeType?i.nodeValue:i.firstChild.nodeValue:3!==i.nodeType&&e.insertBefore(i.firstChild,i),e.removeChild(i))},A=function(e,t,i,n,r,o,s){var l,h,f,u,c,g,C,S,x,y,m,b,T=a(e),A=p(e,"paddingLeft",T),L=-999,B=p(e,"borderBottomWidth",T)+p(e,"borderTopWidth",T),V=p(e,"borderLeftWidth",T)+p(e,"borderRightWidth",T),O=p(e,"paddingTop",T)+p(e,"paddingBottom",T),W=p(e,"paddingLeft",T)+p(e,"paddingRight",T),H=.2*p(e,"fontSize"),E=p(e,"textAlign",T,!0),k=[],R=[],j=[],M=t.wordDelimiter||" ",G=t.span?"span":"div",$=t.type||t.split||"chars,words,lines",q=r&&-1!==$.indexOf("lines")?[]:null,z=-1!==$.indexOf("words"),D=-1!==$.indexOf("chars"),F="absolute"===t.position||!0===t.absolute,I=t.linesClass,P=-1!==(I||"").indexOf("++"),Q=[];for(q&&1===e.children.length&&e.children[0]._isSplit&&(e=e.children[0]),P&&(I=I.split("++").join("")),f=(h=e.getElementsByTagName("*")).length,c=[],l=0;l<f;l++)c[l]=h[l];if(q||F)for(l=0;l<f;l++)((g=(u=c[l]).parentNode===e)||F||D&&!z)&&(b=u.offsetTop,q&&g&&Math.abs(b-L)>H&&("BR"!==u.nodeName||0===l)&&(C=[],q.push(C),L=b),F&&(u._x=u.offsetLeft,u._y=b,u._w=u.offsetWidth,u._h=u.offsetHeight),q&&((u._isSplit&&g||!D&&g||z&&g||!z&&u.parentNode.parentNode===e&&!u.parentNode._isSplit)&&(C.push(u),u._x-=A,N(u,e,M)&&(u._wordEnd=!0)),"BR"===u.nodeName&&(u.nextSibling&&"BR"===u.nextSibling.nodeName||0===l)&&q.push([])));for(l=0;l<f;l++)g=(u=c[l]).parentNode===e,"BR"!==u.nodeName?(F&&(x=u.style,z||g||(u._x+=u.parentNode._x,u._y+=u.parentNode._y),x.left=u._x+"px",x.top=u._y+"px",x.position="absolute",x.display="block",x.width=u._w+1+"px",x.height=u._h+"px"),!z&&D?u._isSplit?(u._next=u.nextSibling,u.parentNode.appendChild(u)):u.parentNode._isSplit?(u._parent=u.parentNode,!u.previousSibling&&u.firstChild&&(u.firstChild._isFirst=!0),u.nextSibling&&" "===u.nextSibling.textContent&&!u.nextSibling.nextSibling&&Q.push(u.nextSibling),u._next=u.nextSibling&&u.nextSibling._isFirst?null:u.nextSibling,u.parentNode.removeChild(u),c.splice(l--,1),f--):g||(b=!u.nextSibling&&N(u.parentNode,e,M),u.parentNode._parent&&u.parentNode._parent.appendChild(u),b&&u.parentNode.appendChild(d.createTextNode(" ")),t.span&&(u.style.display="inline"),k.push(u)):u.parentNode._isSplit&&!u._isSplit&&""!==u.innerHTML?R.push(u):D&&!u._isSplit&&(t.span&&(u.style.display="inline"),k.push(u))):q||F?(u.parentNode&&u.parentNode.removeChild(u),c.splice(l--,1),f--):z||e.appendChild(u);for(l=Q.length;--l>-1;)Q[l].parentNode.removeChild(Q[l]);if(q){for(F&&(y=d.createElement(G),e.appendChild(y),m=y.offsetWidth+"px",b=y.offsetParent===e?0:e.offsetLeft,e.removeChild(y)),x=e.style.cssText,e.style.cssText="display:none;";e.firstChild;)e.removeChild(e.firstChild);for(S=" "===M&&(!F||!z&&!D),l=0;l<q.length;l++){for(C=q[l],(y=d.createElement(G)).style.cssText="display:block;text-align:"+E+";position:"+(F?"absolute;":"relative;"),I&&(y.className=I+(P?l+1:"")),j.push(y),f=C.length,h=0;h<f;h++)"BR"!==C[h].nodeName&&(u=C[h],y.appendChild(u),S&&u._wordEnd&&y.appendChild(d.createTextNode(" ")),F&&(0===h&&(y.style.top=u._y+"px",y.style.left=A+b+"px"),u.style.top="0px",b&&(u.style.left=u._x-b+"px")));0===f?y.innerHTML="&nbsp;":z||D||(w(y),v(y,String.fromCharCode(160)," ")),F&&(y.style.width=m,y.style.height=u._h+"px"),e.appendChild(y)}e.style.cssText=x}F&&(s>e.clientHeight&&(e.style.height=s-O+"px",e.clientHeight<s&&(e.style.height=s+B+"px")),o>e.clientWidth&&(e.style.width=o-W+"px",e.clientWidth<o&&(e.style.width=o+V+"px"))),_(i,k),_(n,R),_(r,j)},L=function(e,t,i,n){var r,o,s=T(e.childNodes),a=s.length,h="absolute"===t.position||!0===t.absolute;if(3!==e.nodeType||a>1){for(t.absolute=!1,r=0;r<a;r++)(3!==(o=s[r]).nodeType||/\S+/.test(o.nodeValue))&&(h&&3!==o.nodeType&&"inline"===p(o,"display",null,!0)&&(o.style.display="inline-block",o.style.position="relative"),o._isSplit=!0,L(o,t,i,n));return t.absolute=h,void(e._isSplit=!0)}!function(e,t,i,n){var r,o,s,a,h,p,f,y,m,b,_=t.span?"span":"div",T=-1!==(t.type||t.split||"chars,words,lines").indexOf("chars"),N="absolute"===t.position||!0===t.absolute,w=t.wordDelimiter||" ",A=" "!==w?"":N?"&#173; ":" ",L=t.span?"</span>":"</div>",B=!0,V=t.specialChars?"function"==typeof t.specialChars?t.specialChars:u:null,O=d.createElement("div"),W=e.parentNode;for(W.insertBefore(O,e),O.textContent=e.nodeValue,W.removeChild(e),f=-1!==(r=l(e=O)).indexOf("<"),!1!==t.reduceWhiteSpace&&(r=r.replace(g," ").replace(c,"")),f&&(r=r.split("<").join("{{LT}}")),h=r.length,o=(" "===r.charAt(0)?A:"")+i(),s=0;s<h;s++)if(p=r.charAt(s),V&&(b=V(r.substr(s),t.specialChars)))p=r.substr(s,b||1),o+=T&&" "!==p?n()+p+"</"+_+">":p,s+=b-1;else if(p===w&&r.charAt(s-1)!==w&&s){for(o+=B?L:"",B=!1;r.charAt(s+1)===w;)o+=A,s++;s===h-1?o+=A:")"!==r.charAt(s+1)&&(o+=A+i(),B=!0)}else"{"===p&&"{{LT}}"===r.substr(s,6)?(o+=T?n()+"{{LT}}</"+_+">":"{{LT}}",s+=5):p.charCodeAt(0)>=55296&&p.charCodeAt(0)<=56319||r.charCodeAt(s+1)>=65024&&r.charCodeAt(s+1)<=65039?(y=x(r.substr(s,2)),m=x(r.substr(s+2,2)),a=y>=C&&y<=S&&m>=C&&m<=S||m>=127995&&m<=127999?4:2,o+=T&&" "!==p?n()+r.substr(s,a)+"</"+_+">":r.substr(s,a),s+=a-1):o+=T&&" "!==p?n()+p+"</"+_+">":p;e.outerHTML=o+(B?L:""),f&&v(W,"{{LT}}","<")}(e,t,i,n)},B=b.prototype;B.split=function(e){this.isSplit&&this.revert(),this.vars=e=e||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var t,i,n,r=this.elements.length,o=e.span?"span":"div",s=m(e.wordsClass,o),l=m(e.charsClass,o);--r>-1;)n=this.elements[r],this._originals[r]=n.innerHTML,t=n.clientHeight,i=n.clientWidth,L(n,e,s,l),A(n,e,this.chars,this.words,this.lines,i,t);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},B.revert=function(){if(!this._originals)throw"revert() call wasn't scoped properly.";for(var e=this._originals.length;--e>-1;)this.elements[e].innerHTML=this._originals[e];return this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},b.selector=e.$||e.jQuery||function(t){var i=e.$||e.jQuery;return i?(b.selector=i,i(t)):"undefined"==typeof document?t:document.querySelectorAll?document.querySelectorAll(t):document.getElementById("#"===t.charAt(0)?t.substr(1):t)},b.version="0.6.0"}(_gsScope),function(e){"use strict";var t=function(){return(_gsScope.GreenSockGlobals||_gsScope).SplitText};"undefined"!=typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define([],t)}();
