require([
  "esri/Map",
  "esri/views/MapView",
  "esri/widgets/BasemapToggle",
  "dojo/domReady!"
], function(
  Map,
  MapView,
  BasemapToggle
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

var basemapToggle = new BasemapToggle({
  view: view,  // The view that provides access to the map's "streets" basemap
  nextBasemap: "hybrid"  // Allows for toggling to the "hybrid" basemap
});
basemapToggle.startup();// 3 - Call startup on the widget

// Add the BasemapToggle widget to the top right corner of the view
view.ui.add(basemapToggle, "top-right");
