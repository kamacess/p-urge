var toilets;
var map;
var infoWindow;

function initMap() {
    toilets = JSON.parse(document.getElementById("toilets_batch").value);
    console.log(toilets[0]);
    var paname = {
        lat: 48.856614,
        lng: 2.3522219
    };
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 12,
            center: paname
        });
        infoWindow = new google.maps.InfoWindow;

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
        
              infoWindow.setPosition(pos);
              infoWindow.setContent('Location found.');
              infoWindow.open(map);
              map.setCenter(pos);
            }, function() {
              handleLocationError(true, infoWindow, map.getCenter());
            });
          } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
          }
        
        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
          infoWindow.setPosition(pos);
          infoWindow.setContent(browserHasGeolocation ?
                                'Error: The Geolocation service failed.' :
                                'Error: Your browser doesn\'t support geolocation.');
          infoWindow.open(map);
        }

    toilets.forEach(toilet => {
        var marker = new google.maps.Marker({
            position: {
                lat: toilet.geo_point_2d[0],
                lng: toilet.geo_point_2d[1]
            },
            map: map
        });

        var infoWindowMarker = new google.maps.InfoWindow({
            content: toilet.type + " <br> " + (toilet.adresse + " <br> " + toilet.arrondissement).toLowerCase() + " " + "Paris"
        });

        marker.addListener("click", function () {
            infoWindowMarker.open(map, marker);
        });
    })
}

initMap();