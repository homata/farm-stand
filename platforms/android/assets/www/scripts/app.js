document.addEventListener("pageinit", function(e) {
  if (e.target.id == "page-map") {
    //document.getElementById("my-content").innerHTML = "私は元気です。";
    map_init();
  }
}, false);

//leaflet OSM map
function map_init() {

    // create a map in the "map_elemnt" div,
    // set the view to a given place and zoom
    var map = L.map('map_elemnt');
    map.setView([35.40, 139.50], 11);

    // add an OpenStreetMap tile layer
    var tileLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution : '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    });
    tileLayer.addTo(map);

    // add a marker in the given location,
    // attach some popup content to it and open the popup
    var mapMarker = L.marker([35.40, 139.50]);
    mapMarker.addTo(map);
    mapMarker.bindPopup('CSS3 popup. <br> ここはどこでしょうか？');
    //mapMarker.openPopup();

    // add layers
    var baseLayers = {
        "OpenStreetMap": tileLayer
    };
    var overlays = {
        "Marker": mapMarker,
    };
    L.control.layers(baseLayers, overlays).addTo(map);

    // add control scale
    L.control.scale().addTo(map);
}
