var markers = JSON.parse(localStorage.getItem("markers"));


function initMap() {
        var uluru = {lat: 45.3430556, lng: 14.4091667};
         map = new google.maps.Map(document.getElementById('map'), {
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
    map: map,
    content: "ayyy"
  });
    marker.addListener("click", function(){
    var infowindow = new google.maps.InfoWindow();
    infowindow.setContent(this.content);
    infowindow.open(map, this);
  });
    markers.push(latLng)
}

function ucitajPodatke(){
    for(var i = 0; i < markers.length ; i++){
    var marker = new google.maps.Marker({
    position: markers[i],
    map: map,
    content: "ayyy"
    });
    marker.addListener("click", function(){
    var infowindow = new google.maps.InfoWindow();
    infowindow.setContent(this.content);
    infowindow.open(map, this);
    });
    }
}

function spremiPodatke(){
    localStorage.setItem("markers", JSON.stringify(markers));
}