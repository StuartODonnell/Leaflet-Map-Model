const MapWrapper = function(element, coords, zoom){
  const osmlayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
  this.map = L.map(element)
  .addLayer(osmlayer)
  .setView(coords, zoom);

  this.map.on("click", function(event){
    this.addMarker(event.latlng);
  }.bind(this))

}
MapWrapper.prototype.addMarker = function (coords) {

  L.marker(coords).addTo(this.map);

};

MapWrapper.prototype.takeMeTo = function(newArea){
  this.map.flyTo(newArea, 15);
  L.marker(newArea).addTo(this.map).bindPopup(`<a href="https://en.wikipedia.org/wiki/Church_(building)"</a>`).openPopup()
}
