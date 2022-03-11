class AmbiMap{
  constructor(divIDstring, parentElement, data){
      this.dataSources = getDataSources(data);
      this.divElement = document.createElement('div');
      this.divElement.id = divIDstring;
      this.divElement.innerHTML = "<h1>HELLO WORLD!</h1>";
      this.dataSources = data;
      parentElement.appendChild(this.divElement);
  }


}
// (function ()
// {
//   var AnimatedText, AnimatedTextFactory, Bar, BaseDonut, BaseGauge, Donut, Gauge, GaugePointer, TextRenderer, ValueUpdater, addCommas, cutHex, formatNumber, mergeObjects, secondsToString, Map
//     slice = [].slice,
//     hasProp = {}.hasOwnProperty,
//     extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
//     indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
  
//     (function() {
//       var browserRequestAnimationFrame, isCancelled, j, lastId, len, vendor, vendors;
//       vendors = ['ms', 'moz', 'webkit', 'o'];
//       for (j = 0, len = vendors.length; j < len; j++) {
//         vendor = vendors[j];
//         if (window.requestAnimationFrame) {
//           break;
//         }
//         window.requestAnimationFrame = window[vendor + 'RequestAnimationFrame'];
//         window.cancelAnimationFrame = window[vendor + 'CancelAnimationFrame'] || window[vendor + 'CancelRequestAnimationFrame'];
//       }
//       browserRequestAnimationFrame = null;
//       lastId = 0;
//       isCancelled = {};
//       if (!requestAnimationFrame) {
//         window.requestAnimationFrame = function(callback, element) {
//           var currTime, id, lastTime, timeToCall;
//           currTime = new Date().getTime();
//           timeToCall = Math.max(0, 16 - (currTime - lastTime));
//           id = window.setTimeout(function() {
//             return callback(currTime + timeToCall);
//           }, timeToCall);
//           lastTime = currTime + timeToCall;
//           return id;
//         };
//         return window.cancelAnimationFrame = function(id) {
//           return clearTimeout(id);
//         };
//       } else if (!window.cancelAnimationFrame) {
//         browserRequestAnimationFrame = window.requestAnimationFrame;
//         window.requestAnimationFrame = function(callback, element) {
//           var myId;
//           myId = ++lastId;
//           browserRequestAnimationFrame(function() {
//             if (!isCancelled[myId]) {
//               return callback();
//             }
//           }, element);
//           return myId;
//         };
//         return window.cancelAnimationFrame = function(id) {
//           return isCancelled[id] = true;
//         };
//       }
//     })();
//     secondsToString = function(sec) {
//       var hr, min;
//       hr = Math.floor(sec / 3600);
//       min = Math.floor((sec - (hr * 3600)) / 60);
//       sec -= (hr * 3600) + (min * 60);
//       sec += '';
//       min += '';
//       while (min.length < 2) {
//         min = '0' + min;
//       }
//       while (sec.length < 2) {
//         sec = '0' + sec;
//       }
//       hr = hr ? hr + ':' : '';
//       return hr + min + ':' + sec;
//     };
//     mergeObjects = function(obj1, obj2) {
//       var key, out, val;
//       out = {};
//       for (key in obj1) {
//         if (!hasProp.call(obj1, key)) continue;
//         val = obj1[key];
//         out[key] = val;
//       }
//       for (key in obj2) {
//         if (!hasProp.call(obj2, key)) continue;
//         val = obj2[key];
//         out[key] = val;
//       }
//       return out;
//     };
  
//     addCommas = function(nStr) {
//       var rgx, x, x1, x2;
//       nStr += '';
//       x = nStr.split('.');
//       x1 = x[0];
//       x2 = '';
//       if (x.length > 1) {
//         x2 = '.' + x[1];
//       }
//       rgx = /(\d+)(\d{3})/;
//       while (rgx.test(x1)) {
//         x1 = x1.replace(rgx, '$1' + ',' + '$2');
//       }
//       return x1 + x2;
//     };
  
//     cutHex = function(nStr) {
//       if (nStr.charAt(0) === "#") {
//         return nStr.substring(1, 7);
//       }
//       return nStr;
//     };
//     ValueUpdater = (function() {
//       ValueUpdater.prototype.animationSpeed = 32;
  
//       function ValueUpdater(addToAnimationQueue, clear) {
//         if (addToAnimationQueue == null) {
//           addToAnimationQueue = true;
//         }
//         this.clear = clear != null ? clear : true;
//         if (addToAnimationQueue) {
//           AnimationUpdater.add(this);
//         }
//       }
  
//       ValueUpdater.prototype.update = function(force) {
//         var diff;
//         if (force == null) {
//           force = false;
//         }
//         if (force || this.displayedValue !== this.value) {
//           if (this.ctx && this.clear) {
//             this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
//           }
//           diff = this.value - this.displayedValue;
//           if (Math.abs(diff / this.animationSpeed) <= 0.001) {
//             this.displayedValue = this.value;
//           } else {
//             this.displayedValue = this.displayedValue + diff / this.animationSpeed;
//           }
//           this.render();
//           return true;
//         }
//         return false;
//       };
  
//       return ValueUpdater;
  
//     })();
    
//     window.AnimationUpdater = {
//       elements: [],
//       animId: null,
//       addAll: function(list) {
//         var elem, j, len, results;
//         results = [];
//         for (j = 0, len = list.length; j < len; j++) {
//           elem = list[j];
//           results.push(AnimationUpdater.elements.push(elem));
//         }
//         return results;
//       },
//       add: function(object) {
//         if (indexOf.call(AnimationUpdater.elements, object) < 0) {
//           return AnimationUpdater.elements.push(object);
//         }
//       },
//       run: function(force) {
//         var elem, finished, isCallback, j, k, l, len, ref, toRemove;
//         if (force == null) {
//           force = false;
//         }
//         isCallback = isFinite(parseFloat(force));
//         if (isCallback || force === true) {
//           finished = true;
//           toRemove = [];
//           ref = AnimationUpdater.elements;
//           for (k = j = 0, len = ref.length; j < len; k = ++j) {
//             elem = ref[k];
//             if (elem.update(force === true)) {
//               finished = false;
//             } else {
//               toRemove.push(k);
//             }
//           }
//           for (l = toRemove.length - 1; l >= 0; l += -1) {
//             k = toRemove[l];
//             AnimationUpdater.elements.splice(k, 1);
//           }
//           return AnimationUpdater.animId = finished ? null : requestAnimationFrame(AnimationUpdater.run);
//         } else if (force === false) {
//           if (AnimationUpdater.animId === !null) {
//             cancelAnimationFrame(AnimationUpdater.animId);
//           }
//           return AnimationUpdater.animId = requestAnimationFrame(AnimationUpdater.run);
//         }
//       }
//     };


//     // Map = (function(superClass){
//     //   extend(Map,superClass);
//     //   function Map() {
//     //     return Map.__super__.constructor.apply(this, arguments);
//     //   }
//     //   function Map(canvas) {
//     //     var h, w;
//     //     this.canvas = canvas;
//     //     Gauge.__super__.constructor.call(this);
//     //     this.percentColors = null;
//     //     if (typeof G_vmlCanvasManager !== 'undefined') {
//     //       this.canvas = window.G_vmlCanvasManager.initElement(this.canvas);
//     //     }
//     //     this.ctx = this.canvas.getContext('2d');
//     //     h = this.canvas.clientHeight;
//     //     w = this.canvas.clientWidth;
//     //     this.canvas.height = h;
//     //     this.canvas.width = w;
//     //     this.gp = [new GaugePointer(this)];
//     //     this.setOptions();
//     //   }

//     //    function hello(text) {
//     //     const div = document.createElement('div');
//     //     div.textContent = `Hello ${text}`;
//     //     document.body.appendChild(div);
//     //   }
//     //   return Map
//     // })(ValueUpdater)
//     Map = (function(canvas){
   

//        function hello(text) {
//         const div = document.createElement('div');
//         div.textContent = `Hello ${text}`;
//         document.body.appendChild(div);
//       }
//       return hello("hello world albin 1")
//     })()

  
//     if (typeof window.define === 'function' && (window.define.amd != null)) {
//       define(function() {
//         return {
//           Map: Map,
//           // Donut: Donut,
//           // BaseDonut: BaseDonut,
//           // TextRenderer: TextRenderer
//         };
//       });
//     } else if (typeof module !== 'undefined' && (module.exports != null)) {
//       module.exports = {
//         Map: Map,
//         // Donut: Donut,
//         // BaseDonut: BaseDonut,
//         // TextRenderer: TextRenderer
//       };
//     } else {
//       window.Map = Map;
//       // window.Donut = Donut;
//       // window.BaseDonut = BaseDonut;
//       // window.TextRenderer = TextRenderer;
//     }
  
//   }).call(this);
// console.log("map.js script is runned");



//function $(selector)
// {
//   const self = {
//     element: document.querySelector(selector),
//     html: ()=> self.element,
//     on: (event, callback) => {
//       self.element.addEventListener(event, callback)
//     },
//     hide: ()=> {
//       self.element.style.display = 'none'
//     },
//     attr: (name, value) => {
//       if(value == null)
//         return self.element.getAttribute(name)
//       else
//         self.element.setAttribute(name, value)
//     }
//   }

//   return self
// }
// console.log("map.js script is runned");
// // Example library calls
// $('h1').attr('class', 'new-class')

// console.log($('h1').attr('class'))

// $('h2').hide()

// $('h3').on('click', function()
// {
//   alert("I was clicked")
// })
( function hello(text) {
  const div = document.createElement('div');
  div.textContent = `Hello ${text}`;
  document.body.appendChild(div);
})