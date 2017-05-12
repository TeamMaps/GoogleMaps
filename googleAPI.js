if(localStorage.markers === undefined){ markers = []; }
else markers = JSON.parse(localStorage.getItem("markers"));
// pretrazuje local storage za oznaku markers i taj value parsa u ovaj var, akmo je nema stvara prazni globalni array markers

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
}                                 // stvara globalnu varijablu mapa s centrom u Rijeci(default)

function getContent(){
   return prompt("Upisi info");
}                               // funkcija koja se poziva kad korisnik klikne na mapu, izbacuje bootstrap modal(not yet) i skuplja user input

function placeMarker(latLng, map) {
  var marker = new google.maps.Marker({
    position: latLng,
    map: map,
    content: "ayy"
  });
    marker.addListener("click", function(){
    var infowindow = new google.maps.InfoWindow();
    infowindow.setContent(this.content);
    infowindow.open(map, this);
  });
    markers.push(latLng)
} // funkcija vezana za event listener mape, poziva getContent pravi marker i pusha latLng i content u markers

function markerReviver(latLng, map){
    var marker = new google.maps.Marker({
        position:latLng,
        map:map,
        content: "ayy"
    });
    marker.addListener("click", function(){
        var infowindow = new google.maps.InfoWindow();
        infowindow.setContent(this.content);
        infowindow.open(map,this);
    });
} // kad se ucita stranica stavlja markere iz local storagea na mapu

function ucitajPodatke(){
    for(var i = 0; i < markers.length ; i++){
        markerReviver(markers[i], map)
    }
} // body onload funkcija koja poziva markerReviver na svaki element markers arraya

function spremiPodatke(){
    localStorage.setItem("markers", JSON.stringify(markers));
} // button onclick triggered sprema trenutni markers u local storage