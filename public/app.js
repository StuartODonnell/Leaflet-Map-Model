const drawMap = function (){
  const mapDiv = document.getElementById("main-map");
  const glasgow = [55.86515, -4.25763]
  const javaStreet = [55.801507, -4.003805];
  const zoomLevel = 15;
  const mainMap = new MapWrapper(mapDiv, javaStreet, zoomLevel);
  mainMap.addMarker(javaStreet);
}

const church [53.6607042,-2.9913836,14]

const button = document.querySelector('#relocate');
button.addEventListener('click', function(){
  mainMap.takeMeTo(church)
})

window.addEventListener("load", drawMap);
