console.log("christofferTest.js is running test 1.");

class Map{
    constructor(accessToken, containerID, amountOfMarkers=30){
        console.log("accestoken", accessToken);
        console.log("containerID", containerID);

        mapboxgl.accessToken = accessToken;
        this.map = new mapboxgl.Map({
            container: containerID,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [-96, 37.8],
            zoom: 3
        });
        /*
        const data = new TestData(amountOfMarkers);
        this.geojson = data.getGeojson();
        this.addMarkers(this.map);
        this.map.on('click', ()=>{
            const len = this.geojson.features.length/2;
            for(let i = 0; i < len; i++){
               const el = document.getElementById('marker-' + i);
               el.style.backgroundImage = 'url("./PNG/sad.png")';     
            }
        });
        this.map.on('dblclick', ()=>{
            const len = this.geojson.features.length/2;
            for(let i = 0; i < len; i++){
               const el = document.getElementById('marker-' + i);
               el.style.backgroundImage = 'url("./PNG/happy.png")';
            }
        });
        */
    }
    init() {
        return this.map;
      }
    /*
    addMarkers(parent){
        for(let x = 0; x < this.geojson.features.length; x++){
            const feature = this.geojson.features[x];
            const el = document.createElement('div');
            el.className = 'marker';
            el.id = 'marker-' + x;

            // make a marker for each feature and add to the map
            new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(parent);
            new mapboxgl.Marker(el)
            .setLngLat(feature.geometry.coordinates)
            .setPopup(
              new mapboxgl.Popup({ offset: 25 }) // add popups
                .setHTML(
                  `<h3>${feature.properties.title}</h3>
                  <p>${feature.properties.description}</p>`
                )
            )
            .addTo(parent);

        }
       

    }
     */

}

/*
class TestData{
    constructor(amountOfPoints){
        this.geojson = this.createRandomData(amountOfPoints);
    }
    getGeojson(){
        return this.geojson;
    }
    createRandomData(amount){
        
        const geojson = {
            type: "FeatureCollection",
            features: [],
        }
        for(let i = 0; i < amount; i++){
            const longitude = this.randomLongitude();
            const latitude = this.randomLatitdue();
            geojson.features.push({
                type: 'Feature',
                geometry: {
                    type: 'Point',
                coordinates: [longitude, latitude]
            },
            properties: {
                title: "Point id: " + i,
                description: "description:<br>" + 
                " longitude: " + longitude.toFixed(3) + "<br>"+
                "latitude: " + latitude.toFixed(3),
            }
        });
        }
        return geojson;
    }
    randomLatitdue(){
        //const latitude = Math.random() * 170 - 85;
        const latitude = Math.random() * 15 + 50;
        return latitude;
    }
    randomLongitude(){
        //const longitude = Math.random() * 360 - 180;
        const longitude = Math.random() * 10 + 5;
        return longitude;
    }
}
*/

