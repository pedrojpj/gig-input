!function(a,b,c){function d(b){if(a.event&&a.event.contentOverflow!==c)return{x:a.event.offsetX,y:a.event.offsetY};if(b.offsetX!==c&&b.offsetY!==c)return{x:b.offsetX,y:b.offsetY};var d=b.target.parentNode.parentNode;return{x:b.layerX-d.offsetLeft,y:b.layerY-d.offsetTop}}function e(a,c,d){a=b.createElementNS(r,a);for(var e in c)a.setAttribute(e,c[e]);"[object Array]"!=Object.prototype.toString.call(d)&&(d=[d]);for(var f=0,g=d[0]&&d.length||0;g>f;f++)a.appendChild(d[f]);return a}function f(a){var b,c,d,e,f,g=a.h%360/60;f=a.v*a.s,e=f*(1-Math.abs(g%2-1)),b=c=d=a.v-f,g=~~g,b+=[f,e,0,0,e,f][g],c+=[e,f,f,e,0,0][g],d+=[0,0,e,f,f,e][g];var h=Math.floor(255*b),i=Math.floor(255*c),j=Math.floor(255*d);return{r:h,g:i,b:j,hex:"#"+(16777216|j|i<<8|h<<16).toString(16).slice(1)}}function g(a){var b=a.r,c=a.g,d=a.b;(a.r>1||a.g>1||a.b>1)&&(b/=255,c/=255,d/=255);var e,f,g,h;return g=Math.max(b,c,d),h=g-Math.min(b,c,d),e=0==h?null:g==b?(c-d)/h+(d>c?6:0):g==c?(d-b)/h+2:(b-c)/h+4,e=e%6*60,f=0==h?0:h/g,{h:e,s:f,v:g}}function h(b,e,g){return function(h){h=h||a.event;var i=d(h);b.h=i.y/e.offsetHeight*360+q;var j=f({h:b.h,s:1,v:1}),k=f({h:b.h,s:b.s,v:b.v});g.style.backgroundColor=j.hex,b.callback&&b.callback(k.hex,{h:b.h-q,s:b.s,v:b.v},{r:k.r,g:k.g,b:k.b},c,i)}}function i(b,c){return function(e){e=e||a.event;var g=d(e),h=c.offsetWidth,i=c.offsetHeight;b.s=g.x/h,b.v=(i-g.y)/i;var j=f(b);b.callback&&b.callback(j.hex,{h:b.h-q,s:b.s,v:b.v},{r:j.r,g:j.g,b:j.b},g)}}function j(a,b,c){if(!(this instanceof j))return new j(a,b,c);if(this.h=0,this.s=1,this.v=1,c)this.callback=c,this.pickerElement=b,this.slideElement=a;else{var d=a;d.innerHTML=s,this.slideElement=d.getElementsByClassName("slide")[0],this.pickerElement=d.getElementsByClassName("picker")[0];var e=d.getElementsByClassName("slide-indicator")[0],f=d.getElementsByClassName("picker-indicator")[0];j.fixIndicators(e,f),this.callback=function(a,c,d,g,h){j.positionIndicators(e,f,h,g),b(a,c,d)}}if("SVG"==p){var g=o.cloneNode(!0),m=n.cloneNode(!0),q=g.getElementById("gradient-hsv"),r=g.getElementsByTagName("rect")[0];q.id="gradient-hsv-"+t,r.setAttribute("fill","url(#"+q.id+")");var u=[m.getElementById("gradient-black"),m.getElementById("gradient-white")],v=m.getElementsByTagName("rect");u[0].id="gradient-black-"+t,u[1].id="gradient-white-"+t,v[0].setAttribute("fill","url(#"+u[1].id+")"),v[1].setAttribute("fill","url(#"+u[0].id+")"),this.slideElement.appendChild(g),this.pickerElement.appendChild(m),t++}else this.slideElement.innerHTML=o,this.pickerElement.innerHTML=n;k(this.slideElement,"click",h(this,this.slideElement,this.pickerElement)),k(this.pickerElement,"click",i(this,this.pickerElement)),l(this,this.slideElement,h(this,this.slideElement,this.pickerElement)),l(this,this.pickerElement,i(this,this.pickerElement))}function k(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener&&a.addEventListener(b,c,!1)}function l(a,b,c){var d=!1;k(b,"mousedown",function(a){d=!0}),k(b,"mouseup",function(a){d=!1}),k(b,"mouseout",function(a){d=!1}),k(b,"mousemove",function(a){d&&c(a)})}function m(a,b,c,d){a.h=b.h%360,a.s=b.s,a.v=b.v;var e=f(a),g={y:a.h*a.slideElement.offsetHeight/360,x:0},h=a.pickerElement.offsetHeight,i={x:a.s*a.pickerElement.offsetWidth,y:h-a.v*h};return a.pickerElement.style.backgroundColor=f({h:a.h,s:1,v:1}).hex,a.callback&&a.callback(d||e.hex,{h:a.h,s:a.s,v:a.v},c||{r:e.r,g:e.g,b:e.b},i,g),a}var n,o,p=a.SVGAngle||b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML",q=15,r="http://www.w3.org/2000/svg",s=['<div class="picker-wrapper">','<div class="picker"></div>','<div class="picker-indicator"></div>',"</div>",'<div class="slide-wrapper">','<div class="slide"></div>','<div class="slide-indicator"></div>',"</div>"].join("");"SVG"==p?(o=e("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"100%",height:"100%"},[e("defs",{},e("linearGradient",{id:"gradient-hsv",x1:"0%",y1:"100%",x2:"0%",y2:"0%"},[e("stop",{offset:"0%","stop-color":"#FF0000","stop-opacity":"1"}),e("stop",{offset:"13%","stop-color":"#FF00FF","stop-opacity":"1"}),e("stop",{offset:"25%","stop-color":"#8000FF","stop-opacity":"1"}),e("stop",{offset:"38%","stop-color":"#0040FF","stop-opacity":"1"}),e("stop",{offset:"50%","stop-color":"#00FFFF","stop-opacity":"1"}),e("stop",{offset:"63%","stop-color":"#00FF40","stop-opacity":"1"}),e("stop",{offset:"75%","stop-color":"#0BED00","stop-opacity":"1"}),e("stop",{offset:"88%","stop-color":"#FFFF00","stop-opacity":"1"}),e("stop",{offset:"100%","stop-color":"#FF0000","stop-opacity":"1"})])),e("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"url(#gradient-hsv)"})]),n=e("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"100%",height:"100%"},[e("defs",{},[e("linearGradient",{id:"gradient-black",x1:"0%",y1:"100%",x2:"0%",y2:"0%"},[e("stop",{offset:"0%","stop-color":"#000000","stop-opacity":"1"}),e("stop",{offset:"100%","stop-color":"#CC9A81","stop-opacity":"0"})]),e("linearGradient",{id:"gradient-white",x1:"0%",y1:"100%",x2:"100%",y2:"100%"},[e("stop",{offset:"0%","stop-color":"#FFFFFF","stop-opacity":"1"}),e("stop",{offset:"100%","stop-color":"#CC9A81","stop-opacity":"0"})])]),e("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"url(#gradient-white)"}),e("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"url(#gradient-black)"})])):"VML"==p&&(o=['<DIV style="position: relative; width: 100%; height: 100%">','<v:rect style="position: absolute; top: 0; left: 0; width: 100%; height: 100%" stroked="f" filled="t">','<v:fill type="gradient" method="none" angle="0" color="red" color2="red" colors="8519f fuchsia;.25 #8000ff;24903f #0040ff;.5 aqua;41287f #00ff40;.75 #0bed00;57671f yellow"></v:fill>',"</v:rect>","</DIV>"].join(""),n=['<DIV style="position: relative; width: 100%; height: 100%">','<v:rect style="position: absolute; left: -1px; top: -1px; width: 101%; height: 101%" stroked="f" filled="t">','<v:fill type="gradient" method="none" angle="270" color="#FFFFFF" opacity="100%" color2="#CC9A81" o:opacity2="0%"></v:fill>',"</v:rect>",'<v:rect style="position: absolute; left: 0px; top: 0px; width: 100%; height: 101%" stroked="f" filled="t">','<v:fill type="gradient" method="none" angle="0" color="#000000" opacity="100%" color2="#CC9A81" o:opacity2="0%"></v:fill>',"</v:rect>","</DIV>"].join(""),b.namespaces.v||b.namespaces.add("v","urn:schemas-microsoft-com:vml","#default#VML"));var t=0;j.hsv2rgb=function(a){var b=f(a);return delete b.hex,b},j.hsv2hex=function(a){return f(a).hex},j.rgb2hsv=g,j.rgb2hex=function(a){return f(g(a)).hex},j.hex2hsv=function(a){return g(j.hex2rgb(a))},j.hex2rgb=function(a){return{r:parseInt(a.substr(1,2),16),g:parseInt(a.substr(3,2),16),b:parseInt(a.substr(5,2),16)}},j.prototype.setHsv=function(a){return m(this,a)},j.prototype.setRgb=function(a){return m(this,g(a),a)},j.prototype.setHex=function(a){return m(this,j.hex2hsv(a),c,a)},j.positionIndicators=function(a,b,c,d){c&&(a.style.top=c.y-a.offsetHeight/2+"px"),d&&(b.style.top=d.y-b.offsetHeight/2+"px",b.style.left=d.x-b.offsetWidth/2+"px")},j.fixIndicators=function(a,b){b.style.pointerEvents="none",a.style.pointerEvents="none"},a.ColorPicker=j}(window,window.document);