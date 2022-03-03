function $(selector)
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
function initialize() {

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
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // Create a marker and place it on the map
  var marker = new google.maps.Marker({
      position: center,
      map: map
  });
}
// // Example library calls
// $('h1').attr('class', 'new-class')

// console.log($('h1').attr('class'))

// $('h2').hide()

// $('h3').on('click', function()
// {
//   alert("I was clicked")
// })