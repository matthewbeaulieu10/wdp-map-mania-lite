function changeColor() {
    var el = document.getElementById('urmom')
    console.log(el.style.color)
    if (el.style.color == 'red') {
        el.style.color = 'green'
    } else {
        el.style.color = 'red'
    }
}

var gMAP;

function initMap() {
    gMap = new google.maps.Map(document.getElementById("myMapID"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }