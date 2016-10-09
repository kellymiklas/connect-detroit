var map;
      require(["esri/map", 
        "dojo/domReady!"], 
      function(Map) 
      {
        map = new Map("mapDiv", 
        {
          basemap: "topo",  //For full list of pre-defined basemaps, navigate to http://arcg.is/1JVo6Wd
          center: [-83.0458, 42.3314], // longitude, latitude – DETROIT
          zoom: 12
        });
      });