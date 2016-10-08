require([
  "esri/Map",
  "esri/views/MapView",
  "dojo/domReady!"
], function(
  Map,
  MapView
) {

  // Create the Map with an initial basemap
  var map = new Map({
    basemap: "topo"
  });

   // Create the MapView and reference the Map in the instance
  var view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-86.049, 38.485],
    zoom: 3
  });

});

// 1 - Create the widget
var toggle = new BasemapToggle({
  // 2 - Set properties
  view: view, // view that provides access to the map's 'topo' basemap
  nextBasemap: "hybrid" // allows for toggling to the 'hybrid' basemap
});

toggle.startup(); // 3 - Call startup on the widget

// Add the BasemapToggle widget to the top right corner of the view
view.ui.add(toggle, "top-right");
