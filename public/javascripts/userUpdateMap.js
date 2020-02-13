var map;
var marker;

function initMap() {
 var paname = {
    lat: 48.856614,
    lng: 2.3522219
  };

  var map = new google.maps.Map(document.getElementById("mapUserUpdate"), {
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
    map: map,
    animation: google.maps.Animation.DROP,
  });
  map.panTo(latLng);
  var lat = document.querySelector("#mapUserUpdate-lat")
  var lng = document.querySelector("#mapUserUpdate-lng")
  lng.value = latLng.lng()
  lat.value = latLng.lat()
}
initMap();