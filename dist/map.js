// class AmbiMap {
//   constructor(divIDstring, parentElement) {

//     this.divElement = document.createElement('div');

//     this.divElement.id = divIDstring;

//     this.divElement.innerHTML = "<h1>HELLO WORLD!</h1>";
//     // this.dataSources = data;
//     parentElement.appendChild(this.divElement);
//   }
// }


console.log("map.js imported")
class MapBox {
  /**
   * Constructor set up config.
   */
  constructor() {}
    // api key for google maps
   // this.apiKey = 'pk.eyJ1IjoiYWxiaW5hbWJpZHVjdG9yIiwiYSI6ImNsMHQ4eWFwcTA0dTYzZXFscno1NHp4M3MifQ.QrzZer4qGPc9Ck19Z6Pa9Q';

    // set a globally scoped callback if it doesn't already exist
  //   if (!window._MapBoxApi) {
  //     this.callbackName = '_MapBoxApi.mapLoaded';
  //     window._MapBox = this;
  //     window._MapBox.mapLoaded = this.mapLoaded.bind(this);
  //   }
  // }
  init () {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWxiaW5hbWJpZHVjdG9yIiwiYSI6ImNsMHQ4eWFwcTA0dTYzZXFscno1NHp4M3MifQ.QrzZer4qGPc9Ck19Z6Pa9Q';
    const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
    });
    return map
  }
  // mapboxgl.accessToken = 'pk.eyJ1IjoiYWxiaW5hbWJpZHVjdG9yIiwiYSI6ImNsMHQ4eWFwcTA0dTYzZXFscno1NHp4M3MifQ.QrzZer4qGPc9Ck19Z6Pa9Q';
  // const map = new mapboxgl.Map({
  // container: 'map', // container ID
  // style: 'mapbox://styles/mapbox/streets-v11', // style URL
  // center: [-74.5, 40], // starting position [lng, lat]
  // zoom: 9 // starting zoom
  // });

  /**
   * Load the MapBox API javascript
   */
  // load() {
  //   if (!this.promise) {
  //     this.promise = new Promise(resolve => {
  //       this.resolve = resolve;
  //       if (typeof window.google === 'undefined') {
  //         const script = document.createElement('script');
  //         script.src = `//maps.googleapis.com/maps/api/js?key=${this.apiKey}&callback=${this.callbackName}`;
  //         script.async = true;
  //         document.body.append(script);
  //       } else {
  //         this.resolve();
  //       }
  //     });
  //   }

  //   return this.promise;
  // }

  // /**
  //  * Globally scoped callback for the map loaded
  //  */
  // mapLoaded() {
  //   if (this.resolve) {
  //     this.resolve();
  //   }
  // }
}
