var map;
var marker;

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
  var marker = new google.maps.Marker({
    position: latLng,
    map: map    
  });
  map.panTo(latLng);
  var lat = document.querySelector("#mapUser-lat")
  var lng = document.querySelector("#mapUser-lng")
  lng.value = latLng.lng()
  lat.value = latLng.lat()
}
initMap();