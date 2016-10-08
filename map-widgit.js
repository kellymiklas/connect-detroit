require([
  "esri/Map",
  "esri/views/MapView",
  "esri/WebMap",
  //"esri/widgets/BasemapToggle",
  "dojo/domReady!"
], function(
  Map,
  MapView,
  WebMap//,
  //BasemapToggle
) {

  var webmap = new WebMap({
        portalItem: { // autocasts as new PortalItem()
          id: "f2e9b762544945f390ca4ac3671cfa72"
        }
      });

   /************************************************************
       * Set the WebMap instance to the map property in a MapView.
       ************************************************************/
      var view = new MapView({
        map: webmap,
        container: "viewDiv"
      });

  // // Create the Map with an initial basemap
  // var map = new Map({
  //   basemap: "topo"
  // });

  //  // Create the MapView and reference the Map in the instance
  // var view = new MapView({
  //   container: "viewDiv",
  //   map: map,
  //   center: [-86.049, 38.485],
  //   zoom: 3
  // });

});

// var basemapToggle = new BasemapToggle({
//   view: view,  // The view that provides access to the map's "streets" basemap
//   nextBasemap: "hybrid"  // Allows for toggling to the "hybrid" basemap
// });
// basemapToggle.startup();// 3 - Call startup on the widget

// // Add the BasemapToggle widget to the top right corner of the view
// view.ui.add(basemapToggle, "top-right");
