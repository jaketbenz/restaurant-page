(()=>{"use strict";var e={424:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(81),r=n.n(a),o=n(645),i=n.n(o),c=n(667),d=n.n(c),s=new URL(n(926),n.b),l=i()(r()),m=d()(s);l.push([e.id,'/* @font-face {\n\tfont-family: "NeueZierSchrift";\n\tsrc: url("./NeueZierSchrift.ttf") format("truetype");\n\tfont-weight: 100;\n\tfont-style: normal;\n} */\n\n:root {\n\t--primary-light: #fefefe;\n\t--secondary-light: #e5e7eb;\n\t/* --primary-dark: #1f2937; */\n}\nhtml,\nbody {\n\tbackground-color: #004225 !important;\n}\n.container {\n\tmin-height: 100vh;\n\tmin-width: 100vw;\n\tmargin: 0 !important;\n\tpadding: 0 !important;\n}\n/* Header */\n.headerContainer {\n\theight: 5vh;\n\twidth: 100%;\n}\n.links {\n}\n.link__item {\n\tmargin: 1rem;\n\tcolor: white;\n\tfont-size: 1.1rem;\n\tcursor: pointer;\n}\n.active {\n\tborder-bottom: 3px solid white;\n}\n/* Main */\n.mainContainer {\n\tmin-height: 90vh;\n\twidth: 100vw;\n\tborder-top: 5px solid white;\n\tborder-bottom: 5px solid white;\n\tbackground-image: url('+m+');\n\tbackground-size: cover;\n}\n/* Footer */\n.footerContainer {\n\theight: 2vh;\n\tmargin: 1rem 0;\n\twidth: 100%;\n\t/* bottom: 0; \n\tposition: absolute; */\n\tcolor: var(--primary-light);\n\ttext-shadow: rgba(0, 0, 0, 0.24) 0px 10px 8px;\n}\n.footer__link {\n\tmargin-right: 0.25rem;\n\tcolor: var(--primary-light);\n}\n/* Home Page */\n.homeContainer {\n\theight: 100%;\n\twidth: 100%;\n}\n.home__header {\n\twidth: 90%;\n\tposition: absolute;\n\ttop: 25%;\n\tleft: 5%;\n\tbackground-color: #004225;\n\tcolor: white;\n\tborder-radius: 0.5rem;\n\t/* font-family: "NeueZierSchrift" !important; */\n\tfont-size: 2rem;\n\tletter-spacing: 0.25rem;\n\ttext-align: center;\n}\n/* Food Page */\n.foodContainer {\n\twidth: 100%;\n\tcontain: content;\n\toverflow: auto;\n}\n.appetizersHeader,\n.entreeHeader,\n.sandwichHeader,\n.sidesHeader,\n.dessertsHeader {\n\twidth: 50%;\n\tposition: relative;\n\tleft: 25%;\n\tmargin: 1rem 0 0.5rem 0;\n\tpadding: 0.5rem;\n\tcolor: white;\n\tbackground-color: #004225;\n\tborder-radius: 0.5rem;\n\tfont-size: 2em;\n\ttext-align: center;\n}\n/* .appetizersHeader {\n} */\n/* .appetizersContainer {\n} */\n/* .entreeHeader {\n} */\n/* .entreeContainer {\n} */\n/* .sandwichHeader {\n} */\n/* .sandwichContainer {\n} */\n/* .sidesHeader {\n} */\n/* .sidesContainer {\n} */\n/* .dessertsHeader {\n} */\n/* .dessertsContainer {\n} */\n.foodCard {\n\theight: 15rem;\n\twidth: 10rem;\n\tmargin: 0.5rem;\n\tbackground-color: rgba(256, 256, 256, 0.8);\n}\n.foodBody {\n\ttext-align: center;\n}\n.foodTitle {\n\tfont-weight: bold;\n}\n.foodDescription {\n\tfont-style: italic;\n\tmargin-bottom: 8px;\n}\n/* .foodPrice {\n} */\n.sideCard {\n\theight: 4rem;\n\twidth: 10rem;\n\tmargin: 0.5rem;\n\tbackground-color: rgba(256, 256, 256, 0.8);\n}\n\n/* Beer Page */\n.beerContainer {\n\twidth: 100%;\n\tcontain: content;\n\toverflow: auto;\n}\n.tapHeader,\n.bottleHeader,\n.wineHeader {\n\twidth: 50%;\n\tposition: relative;\n\tleft: 25%;\n\tmargin: 1rem 0 0.5rem 0;\n\tcolor: white;\n\tbackground-color: #004225;\n\tborder-radius: 0.5rem;\n\tfont-size: 2em;\n\ttext-align: center;\n}\n.beerCard {\n\theight: 10rem;\n\twidth: 10rem;\n\tmargin: 0.5rem;\n\tbackground-color: rgba(256, 256, 256, 0.8);\n}\n.beerBody {\n\ttext-align: center;\n}\n.beerTitle {\n\tfont-weight: bold;\n}\n.beerType {\n}\n.beerDescription {\n\tfont-style: italic;\n\tmargin-bottom: 8px;\n}\n.beerPercentage {\n}\n.bottleCard {\n\theight: 4rem;\n\twidth: 10rem;\n\tmargin: 0.5rem;\n\tbackground-color: rgba(256, 256, 256, 0.8);\n}\n\n@media screen and (max-width: 480px) {\n\t.link__item {\n\t\tmargin: 0 1rem;\n\t\tfont-size: 1.1rem;\n\t}\n\t.active {\n\t\tborder-bottom: 3px solid white;\n\t}\n\t.footerContainer {\n\t\tmargin: 0.75rem 0;\n\t}\n\t.home__header {\n\t\twidth: 100%;\n\t\tleft: 0;\n\t\tfont-size: 1.5rem;\n\t}\n}\n@media screen and (min-width: 481px) and (max-width: 768px) {\n\t.mainContainer {\n\t\tborder-top: 10px solid white;\n\t\tborder-bottom: 10px solid white;\n\t}\n\t.link__item {\n\t\tmargin: 0rem 2rem;\n\t\tfont-size: 2rem;\n\t}\n\t.active {\n\t\tborder-bottom: 3px solid white;\n\t}\n\t.home__header {\n\t\twidth: 60%;\n\t\tposition: absolute;\n\t\ttop: 25%;\n\t\tleft: 20%;\n\t\tborder-radius: 0.5rem;\n\t\tfont-size: 1.5rem;\n\t}\n\t.footerContainer {\n\t\tmargin: 1rem 0;\n\t\tfont-size: 20px;\n\t}\n}\n@media screen and (min-width: 769px) and (max-width: 1024px) {\n\t.mainContainer {\n\t\tborder-top: 15px solid white;\n\t\tborder-bottom: 15px solid white;\n\t}\n\t.link__item {\n\t\tmargin: 0rem 1rem;\n\t\tfont-size: 2rem;\n\t}\n\t.active {\n\t\tborder-bottom: 5px solid white;\n\t}\n\t.home__header {\n\t\twidth: 70%;\n\t\tposition: absolute;\n\t\ttop: 25%;\n\t\tleft: 15%;\n\t\tborder-radius: 0.5rem;\n\t\tfont-size: 48px;\n\t}\n\t.footerContainer {\n\t\tmargin: 1rem 0;\n\t\tfont-size: 1.5rem;\n\t}\n\t.foodContainer{\n\t\twidth: 80%;\n\t}\n\t.beerContainer{\n\t\twidth: 80%;\n\t}\n}\n@media screen and (min-width: 1025px) and (max-width: 1200px) {\n\t.mainContainer {\n\t\tborder-top: 15px solid white;\n\t\tborder-bottom: 15px solid white;\n\t}\n\t.link__item {\n\t\tmargin: 0rem 1rem;\n\t\tfont-size: 2rem;\n\t}\n\t.active {\n\t\tborder-bottom: 5px solid white;\n\t}\n\t.home__header {\n\t\twidth: 50%;\n\t\tposition: absolute;\n\t\ttop: 25%;\n\t\tleft: 25%;\n\t\tborder-radius: 0.5rem;\n\t\tfont-size: 48px;\n\t}\n\t.footerContainer {\n\t\tmargin: 20px 0;\n\t\tfont-size: 20px;\n\t}\n\t.foodContainer{\n\t\twidth: 70%;\n\t}\n\t.beerContainer{\n\t\twidth: 70%;\n\t}\n}\n@media screen and (min-width: 1201px) {\n\t.mainContainer {\n\t\tborder-top: 15px solid white;\n\t\tborder-bottom: 15px solid white;\n\t}\n\t.link__item {\n\t\tmargin: 0rem 1rem;\n\t\tfont-size: 2.5rem;\n\t}\n\t.active {\n\t\tborder-bottom: 5px solid white;\n\t}\n\t.home__header {\n\t\twidth: 50%;\n\t\tposition: absolute;\n\t\ttop: 25%;\n\t\tleft: 25%;\n\t\tborder-radius: 0.5rem;\n\t\tfont-size: 48px;\n\t}\n\t.footerContainer {\n\t\tmargin: 20px 0;\n\t\tfont-size: 20px;\n\t}\n\t.foodContainer{\n\t\twidth: 60%;\n\t}\n\t.beerContainer{\n\t\twidth: 60%;\n\t}\n}\n',""]);const p=l},917:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(81),r=n.n(a),o=n(645),i=n.n(o)()(r());i.push([e.id,'/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol,\nul {\n\tlist-style: none;\n}\nblockquote,\nq {\n\tquotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n\tcontent: "";\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n',""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);a&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var o={},i=[],c=0;c<e.length;c++){var d=e[c],s=a.base?d[0]+a.base:d[0],l=o[s]||0,m="".concat(s," ").concat(l);o[s]=l+1;var p=n(m),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var h=r(u,a);a.byIndex=c,t.splice(c,0,{identifier:m,updater:h,references:1})}i.push(m)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=n(o[i]);t[c].references--}for(var d=a(e,r),s=0;s<o.length;s++){var l=n(o[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=d}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},926:(e,t,n)=>{e.exports=n.p+"3ae3b22971e34bef32f7.jpg"}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={id:a,exports:{}};return e[a](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),a=n(795),r=n.n(a),o=n(569),i=n.n(o),c=n(565),d=n.n(c),s=n(216),l=n.n(s),m=n(589),p=n.n(m),u=n(917),h={};h.styleTagTransform=p(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),t()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;var b=n(424),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),t()(b.Z,f),b.Z&&b.Z.locals&&b.Z.locals;const g=()=>{const e=document.querySelector(".mainContainer");e.textContent="",e.appendChild((()=>{const e=document.createElement("div");e.className="homeContainer";const t=document.createElement("h1");return t.className="home__header py-2",t.textContent="Jakub's German Beer Hall",e.appendChild(t),e})())},C=[{name:"German Potato Pancakes",about:"3 German potato pancakes with apple sauce and sour cream",price:10},{name:"Bavarian Pretzel",about:"with salt, stone ground mustard, sweet chili sauce and beer cheese",price:10},{name:"Cheese Curds",about:"deep fried Ellsworth cheese curds with ranch",price:8},{name:"Bacon Jam Sliders",about:"3 angus sliders with bacon jam and beer cheese with haus chips",price:13},{name:"Chicken Schnitzel Sliders",about:"3 breaded chicken sliders with lettuce, tomato, mayo and haus chips",price:12},{name:"Sauerkraut Balls",about:"basked of breaded and fried combo of sauerkraut, smoked pork service with bavarian mustard",price:10},{name:"German Brat Bite Basket",about:"grilled bratwurst bites with dijon mustard for dipping",price:9},{name:"Curry Wurst",about:"brat bites dressed in curry ketchup served with fresh cut fries",price:9},{name:"Deep Fried Pickles",about:"deep fried dill pickle spears with ranch",price:8},{name:"Potato Skins",about:"potato halves filled with melted cheese, crushed bacon bits, and scallions with sour cream",price:10}],y=[{name:"Brauhaus Chicken Schnitzel",about:"freshly breaded cutlets with spaetzle, red cabbage and hunter sauce",price:16},{name:"Brauhaus Pork Schnitzel",about:"freshly breaded cutlets with spaetzle, red cabbage and hunter sauce",price:18},{name:"Branhaus Veal Schnitzel",about:"freshly breaded cutlets with spaetzle, red cabbage and hunter sauce",price:20},{name:"Oss Buco Pork Shank",about:"marinated pork with yukon gold mashed potatoes and buttered green beans",price:22},{name:"Beef Goulash",about:"tender marinated beef tips with spaetzle and sour cream",price:18},{name:"Sauerbraten",about:"slices of tender marinated beef dressed with gravy with yukon gold mashed potatoes with buttered green beans",price:16},{name:"Sausage Platter",about:"grilled german bratwurst, knackwurst, thuringer and kielbasa served with german potato salad, sauerkraut, spaetzle and hunter sauce",price:20},{name:"Beef Rouladin",about:"tender beef rolled with carrots, pickles and seasoning served with yukon gold mashed potatoes and buttered green beans",price:18}],x=[{name:"Jakub's Schnitzel Sandwich",about:"breaded and seasoned to order with lettuce, tomato, onion and mayo on a brioche bun",price:"13/chicken, $14/pork"},{name:"Brauhaus Bratwurst Sandwich",about:"caramelized onions, sauerkraut and dijon mustard on a brat bun",price:10},{name:"Bacon Wrapped Brat",about:"applewood smoked bacon wrapped bratwurst with caramelized onions, dijon mustard server on a brat bun",price:12},{name:"The Big Bertha",about:"kielbasa, german potato salad, beer cheese, grilled onions served on a brat bun",price:13},{name:"Jakub's Schnitzel Burger",about:"1/2 pound angus patty breaded and deep fried, german potato salad and beer cheese served on a brioche bun",price:14},{name:"Bacon Jam Burger",about:"1/2 pound angus patty, bacon jam, beer cheese served on a brioche bun",price:13}],w=[{name:"German Potato Salad"},{name:"Spaetzle"},{name:"Buttered Green Beans"},{name:"Braised Red Cabbage"},{name:"Sauerkraut"},{name:"Yukon Gold Mashed Potatoes"},{name:"Fresh Cut French Fries"},{name:"Tater Tots"},{name:"Onion Rings"},{name:"Haus Chips"}],v=[{name:"Apple Strudel",about:"home made apple strudel with a scoop of vanilla ice cream",price:7},{name:"Bread Pudding",about:"homemade bread pudding topped with vanillas cream sauce",price:8}],E=[{name:"Weihenstephaner Vitus",type:"Weisse",about:"Freising, Germany",percentage:7.7},{name:"Hacker Pschorr",type:"Weisse",about:"Munich, Germany",percentage:5.5},{name:"Franziskaner Hefe",type:"Weisse",about:"Munich, Germany",percentage:5},{name:"Tucher Hefe Weizen",type:"Weisse",about:"Nurnberg, Germany",percentage:5.3},{name:"Radeberger",type:"Pilsner",about:"Radeberger, Germany",percentage:4.8},{name:"Warsteiner",type:"Pilsner",about:"Warstein, Germany",percentage:4.8},{name:"Stella Artois",type:"Pilsner",about:"Leuven, Belgium",percentage:5.2},{name:"Ayinger Rotating",type:"Bock/DoppleBock",about:"Aying, Germany",percentage:"Celebrator - 6.9% Dark - 5% OktoberFest - 5.8"},{name:"Spaten Lager",type:"Lager",about:"Munich, Germany",percentage:5.1},{name:"Spaten Lager",type:"Lager",about:"Munich, Germany",percentage:5.9},{name:"Spaten Oktoberfest / Marzen",type:"Lager",about:"Munich, Germany",percentage:5.2},{name:"Dab",type:"Lager",about:"Darmnund, Germany",percentage:5}],k=[{name:"Paulaner Hefe Weizen"},{name:"Blue Moon"},{name:"Heineken"},{name:"Miller Lite"},{name:"Miller Highlife"},{name:"Coors Light"},{name:"Old Style"},{name:"Bud Light"},{name:"Budweiser"},{name:"Michelob Ultra"},{name:"Corona Extra"},{name:"Modelo Especial"},{name:"Modelo Negra"},{name:"Guiness"},{name:"Wyder's Pear Cider"},{name:"Wyder's Raspberry Cider"},{name:"Angry Orchard"},{name:"Finch's Tacocat"},{name:"Schofferhofer Grapefruit"}],N=[{name:"Sauvignon Blanc",type:"White Wine",about:"Fire Road, New Zealand",price:8},{name:"Chardonnay",type:"White Wine",about:"Deloach, California",price:9},{name:"Pinot Grigio",type:"White Wine",about:"Riff, Italy",price:9},{name:"Sparkling Wine",type:"White Wine",about:"Segura Viuda Brut Splits",price:7},{name:"Cabernet Sauvignon",type:"Red Wine",about:"Four Vines, Paso Robles",price:9},{name:"Pinot Noir",type:"Red Wine",about:"Deloach California",price:9},{name:"Malbec",type:"Red Wine",about:"Santa Julia, Argentina",price:8}],T=e=>{document.querySelectorAll(".link__item").forEach((e=>{void 0!==e&&e.classList.remove("active")})),e.classList.add("active")};(()=>{const e=document.querySelector(".container");e.appendChild((()=>{const e=document.createElement("header");e.className="headerContainer d-flex justify-content-center align-items-center";const t=document.createElement("ul");t.className="links d-flex";const n=document.createElement("li");n.className="link__item home",n.textContent="Home",n.addEventListener("click",(e=>{e.target.classList.contains("active")||(T(n),g())}));const a=document.createElement("li");a.className="link__item food",a.textContent="Food Menu",a.addEventListener("click",(e=>{e.target.classList.contains("active")||(T(a),(()=>{const e=document.querySelector(".mainContainer");e.textContent="",e.appendChild((()=>{const e=document.createElement("div");e.className="foodContainer";const t=document.createElement("h1");t.className="appetizersHeader",t.textContent="Appetizers";const n=document.createElement("div");n.className="appetizersContainer d-flex flex-wrap justify-content-center align-content-start",C.forEach((a=>{const r=document.createElement("div");r.className="card foodCard";const o=document.createElement("div");o.className="card-body foodBody d-flex flex-column justify-content-between";const i=document.createElement("h5");i.className="card-title foodTitle",i.innerText=a.name;const c=document.createElement("p");c.className="card-text foodDescription",c.innerText=a.about;const d=document.createElement("p");d.className="card-text foodPrice",d.innerText=`$${a.price}`,o.appendChild(i),o.appendChild(c),o.appendChild(d),r.appendChild(o),n.appendChild(r),e.appendChild(t),e.appendChild(n)}));const a=document.createElement("h1");a.className="entreeHeader",a.textContent="Entrees";const r=document.createElement("div");r.className="entreeContainer d-flex flex-wrap justify-content-center align-content-start",y.forEach((t=>{const n=document.createElement("div");n.className="card foodCard";const o=document.createElement("div");o.className="card-body foodBody d-flex flex-column justify-content-between";const i=document.createElement("h5");i.className="card-title foodTitle",i.innerText=t.name;const c=document.createElement("p");c.className="card-text foodDescription",c.innerText=t.about;const d=document.createElement("p");d.className="card-text foodPrice",d.innerText=`$${t.price}`,o.appendChild(i),o.appendChild(c),o.appendChild(d),n.appendChild(o),r.appendChild(n),e.appendChild(a),e.appendChild(r)}));const o=document.createElement("h1");o.className="sandwichHeader",o.textContent="Sandwiches";const i=document.createElement("div");i.className="sandwichContainer d-flex flex-wrap justify-content-center align-content-start",x.forEach((t=>{const n=document.createElement("div");n.className="card foodCard";const a=document.createElement("div");a.className="card-body foodBody d-flex flex-column justify-content-between";const r=document.createElement("h5");r.className="card-title foodTitle",r.innerText=t.name;const c=document.createElement("p");c.className="card-text foodDescription",c.innerText=t.about;const d=document.createElement("p");d.className="card-text foodPrice",d.innerText=`$${t.price}`,a.appendChild(r),a.appendChild(c),a.appendChild(d),n.appendChild(a),i.appendChild(n),e.appendChild(o),e.appendChild(i)}));const c=document.createElement("h1");c.className="sidesHeader",c.textContent="Sides";const d=document.createElement("div");d.className="sidesContainer d-flex flex-wrap justify-content-center align-content-start",w.forEach((t=>{const n=document.createElement("div");n.className="card sideCard";const a=document.createElement("div");a.className="card-body foodBody d-flex flex-column justify-content-center";const r=document.createElement("h5");r.className="card-title foodTitle",r.innerText=t.name,a.appendChild(r),n.appendChild(a),d.appendChild(n),e.appendChild(c),e.appendChild(d)}));const s=document.createElement("h1");s.className="dessertsHeader",s.textContent="Desserts";const l=document.createElement("div");return l.className="sidesContainer d-flex flex-wrap justify-content-center align-content-start",v.forEach((t=>{const n=document.createElement("div");n.className="card foodCard";const a=document.createElement("div");a.className="card-body foodBody d-flex flex-column justify-content-between";const r=document.createElement("h5");r.className="card-title foodTitle",r.innerText=t.name;const o=document.createElement("p");o.className="card-text foodDescription",o.innerText=t.about;const i=document.createElement("p");i.className="card-text foodPrice",i.innerText=`$${t.price}`,a.appendChild(r),n.appendChild(a),l.appendChild(n),a.appendChild(o),a.appendChild(i),n.appendChild(a),e.appendChild(s),e.appendChild(l)})),e})())})())}));const r=document.createElement("li");r.className="link__item beer",r.textContent="Beer Menu",r.addEventListener("click",(e=>{e.target.classList.contains("active")||(T(r),(()=>{const e=document.querySelector(".mainContainer");e.textContent="",e.appendChild((()=>{const e=document.createElement("div");e.className="beerContainer";const t=document.createElement("h1");t.className="tapHeader",t.textContent="Beers on Tap";const n=document.createElement("div");n.className="tapContainer d-flex flex-wrap justify-content-center align-content-start",E.forEach((a=>{const r=document.createElement("div");r.className="card beerCard";const o=document.createElement("div");o.className="card-body beerBody d-flex flex-column justify-content-between";const i=document.createElement("h5");i.className="card-title beerTitle",i.innerText=a.name;const c=document.createElement("p");c.className="card-text beerType",c.innerText=a.type;const d=document.createElement("p");d.className="card-text beerDescription",d.innerText=a.about;const s=document.createElement("p");s.className="card-text beerPercentage",s.innerText=`${a.percentage}%`,o.appendChild(i),o.appendChild(c),o.appendChild(d),o.appendChild(s),r.appendChild(o),n.appendChild(r),e.appendChild(t),e.appendChild(n)}));const a=document.createElement("h1");a.className="bottleHeader",a.textContent="Bottled Drink";const r=document.createElement("div");r.className="bottleContainer d-flex flex-wrap justify-content-center align-content-start",k.forEach((t=>{const n=document.createElement("div");n.className="card bottleCard";const o=document.createElement("div");o.className="card-body beerBody d-flex flex-column justify-content-between";const i=document.createElement("h5");i.className="card-title beerTitle",i.innerText=t.name,o.appendChild(i),n.appendChild(o),r.appendChild(n),e.appendChild(a),e.appendChild(r)}));const o=document.createElement("h1");o.className="wineHeader",o.textContent="Wines";const i=document.createElement("div");return i.className="tapContainer d-flex flex-wrap justify-content-center align-content-start",N.forEach((t=>{const n=document.createElement("div");n.className="card beerCard";const a=document.createElement("div");a.className="card-body beerBody d-flex flex-column justify-content-between";const r=document.createElement("h5");r.className="card-title beerTitle",r.innerText=t.name;const c=document.createElement("p");c.className="card-text beerType",c.innerText=t.type;const d=document.createElement("p");d.className="card-text beerDescription",d.innerText=t.about;const s=document.createElement("p");s.className="card-text beerPercentage",s.innerText=`$${t.price}`,a.appendChild(r),a.appendChild(c),a.appendChild(d),a.appendChild(s),n.appendChild(a),i.appendChild(n),e.appendChild(o),e.appendChild(i)})),e})())})())}));const o=document.createElement("li");return o.className="link__item about",o.textContent="About",o.addEventListener("click",(e=>{e.target.classList.contains("active")||(T(o),(()=>{const e=document.querySelector(".mainContainer");e.textContent="",e.appendChild((()=>{const e=document.createElement("div");return e.className="aboutContainer",e})())})())})),t.appendChild(n),t.appendChild(a),t.appendChild(r),t.appendChild(o),e.appendChild(t),e})()),e.appendChild((()=>{const e=document.createElement("main");return e.className="mainContainer d-flex justify-content-center",e})()),e.appendChild((()=>{const e=document.createElement("footer");e.className="footerContainer d-flex justify-content-center";const t=document.createElement("p");t.innerText="Made by ";const n=document.createElement("a");n.className="footer__link",n.innerText="Jake Benz",n.setAttribute("href","https://jakebenz.dev");const a=document.createElement("a");a.className="footer__link",a.innerText="Github",a.setAttribute("href","https://github.com/jaketbenz/restaurant-page");const r=document.createElement("i");return r.className="fa-brands fa-github",t.appendChild(n),t.appendChild(a),t.appendChild(r),e.appendChild(t),e})()),T(document.querySelector(".link__item")),g()})()})()})();