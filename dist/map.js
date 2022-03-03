// function $(selector)
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
console.log("map.js script is runned")
(function () {
var Map

  // Create a LatLng object
  // We use this LatLng object to center the map and position the marker
  var center = new google.maps.LatLng(50,0);

  // Declare your map options
  var mapOptions = {
      zoom: 4,
      center: center,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  // Create a map in the #map HTML element, using the declared options
  Map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // Create a marker and place it on the map
  // var marker = new google.maps.Marker({
  //     position: center,
  //     map: map
  // });
  // if (typeof window.define === 'function' && (window.define.amd != null)) {
  //   define(function() {
  //     return {
  //       Map: Map,
       
  //     };
  //   });
  // } else if (typeof module !== 'undefined' && (module.exports != null)) {
  //   module.exports = {
  //     Map: Map,
  //   };
  // } else {
  //   window.Map = Map;

  // }
}).call(this)
// // Example library calls
// $('h1').attr('class', 'new-class')

// console.log($('h1').attr('class'))

// $('h2').hide()

// $('h3').on('click', function()
// {
//   alert("I was clicked")
// })