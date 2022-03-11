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
class GoogleMapsApi {
  /**
   * Constructor set up config.
   */
  constructor() {
    // api key for google maps
    this.apiKey = 'your api key here';

    // set a globally scoped callback if it doesn't already exist
    if (!window._GoogleMapsApi) {
      this.callbackName = '_GoogleMapsApi.mapLoaded';
      window._GoogleMapsApi = this;
      window._GoogleMapsApi.mapLoaded = this.mapLoaded.bind(this);
    }
  }

  /**
   * Load the Google Maps API javascript
   */
  load() {
    if (!this.promise) {
      this.promise = new Promise(resolve => {
        this.resolve = resolve;
        if (typeof window.google === 'undefined') {
          const script = document.createElement('script');
          script.src = `//maps.googleapis.com/maps/api/js?key=${this.apiKey}&callback=${this.callbackName}`;
          script.async = true;
          document.body.append(script);
        } else {
          this.resolve();
        }
      });
    }

    return this.promise;
  }

  /**
   * Globally scoped callback for the map loaded
   */
  mapLoaded() {
    if (this.resolve) {
      this.resolve();
    }
  }
}
