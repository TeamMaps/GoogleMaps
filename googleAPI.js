function initMap() {
        var uluru = {lat: 45.3430556, lng: 14.4091667};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
     //listener je property mape
     map.addListener('click', function(e) {
    placeMarker(e.latLng, map);
  });
}

// funkcija koja dodaje marker
function placeMarker(latLng, map) {
  var marker = new google.maps.Marker({
    position: latLng,
    map: map
  });
}