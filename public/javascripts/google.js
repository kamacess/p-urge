var toilets;

function initMap() {
    toilets = JSON.parse(document.getElementById("toilets_batch").value);
    // console.log(typeof toilets[0], toilets[0]);
    var paname = {
        lat: 48.856614,
        lng: 2.3522219
    };
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 12,
            center: paname
        });

    toilets.forEach(toilet => {
        var marker = new google.maps.Marker({
            position: {
                lat: toilet.geo_point_2d[0],
                lng: toilet.geo_point_2d[1]
            },
            map: map
        });

        var infoWindow = new google.maps.InfoWindow({
            content: toilet.type + " <br> " + (toilet.adresse + " <br> " + toilet.arrondissement).toLowerCase() + " " + "Paris"
        });

        marker.addListener("click", function () {
            infoWindow.open(map, marker);
        });
    });
};

initMap();