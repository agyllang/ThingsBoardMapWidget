console.log("map.js imported 33")
class AmbiMap {
  constructor(divIDstring, parentElement) {
    console.log("AmbiMap constructor")

    this.divElement = document.createElement('div');

    this.divElement.id = divIDstring;

    this.divElement.innerHTML = "<h1>HELLO WORLD!</h1>";
    // this.dataSources = data;
    parentElement.appendChild(this.divElement);
  }
}



class MapBox {
  /**
   * Constructor set up config.
   */
  constructor(string, containerId) {
    console.log("MapBox constructor",string)

  mapboxgl.accessToken = 'pk.eyJ1IjoiYWxiaW5hbWJpZHVjdG9yIiwiYSI6ImNsMHQ4eWFwcTA0dTYzZXFscno1NHp4M3MifQ.QrzZer4qGPc9Ck19Z6Pa9Q';
  this.map= new mapboxgl.Map({
  container: containerId, // container ID
  style: 'mapbox://styles/mapbox/streets-v11', // style URL
  center: [11.981, 57.671], // starting position [lng, lat]
  zoom: 5 // starting zoom
  });
  }
  init(){
    return this.map
  }
  setPin(lngLat){
      console.log("setPin() param:",lngLat)
    //LngLat=[11.9810, 57.6717]
    //göteborg
    let m = new mapboxgl.Marker()
    .setLngLat(lngLat)
    .addTo(this.map);

  }
}