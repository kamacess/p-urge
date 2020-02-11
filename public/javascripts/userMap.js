var map;
var marker;
var lng;
var lat;

function initMap() {
 var paname = {
    lat: 48.856614,
    lng: 2.3522219
  };

  var map = new google.maps.Map(document.getElementById("mapUser"), {
    zoom: 4,
    center: paname
  });
  map.addListener("click", function(e) {
    placeMarkerAndPanTo(e.latLng, map);
  });
}

function placeMarkerAndPanTo(latLng, map) {
    var lng = latLng.lng()
    var lat = latLng.lat();
  var marker = new google.maps.Marker({
    position: latLng,
    map: map    
  });
  map.panTo(latLng);
}
initMap();

// créer 2 inputs dans mon form (hidden) > onclick sur la map il faut remplir la value de ces deux inputs, lat() et lng() 
// et les stocker dans les inputs ==> récupérer dans rec body.