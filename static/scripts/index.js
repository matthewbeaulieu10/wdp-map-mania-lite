function changeColor() {
    var el = document.getElementById('urmom')
    console.log(el.style.color)
    if (el.style.color == 'red') {
        el.style.color = 'green'
    } else {
        el.style.color = 'red'
    }
}

var gMap;

function initMap() {
    gMap = new google.maps.Map(document.getElementById("myMapID"), {
      center: {lat:0,lng:0},
      zoom: 3,
    });

    var marker = new google.maps.Marker({position:{lat:41.970760,lng:-88.351590},map:gMap});
    marker.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png')
  
    var infoWindow = new google.maps.InfoWindow({content:'my home'})
    marker.addListener('click', function() {
        infoWindow.open(gMap, marker);
    })

    google.maps.event.addListener(gMap, 'idle', function() {
        updateGame()
    })
}

function updateGame() {
    var zoomLevel = gMap.getZoom()
    var inBounds = false;

    if (gMap.getBounds().contains({lat:41.970760,lng:-88.351590})) {
        inBounds = true;
    }

    console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel)
}
