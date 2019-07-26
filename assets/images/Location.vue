<template>
  <div>
    <div id="map" />
  </div>
</template>

<script>
export default {
  name: 'Location',
  mounted: function() {
    this.initMap()
  },
  methods: {
    // Initialize and add the map
    initMap: function() {
      // The location of Systemweb office
      var sw = {
        lat: 25.0782862,
        lng: 121.56880660000002
      }
      // The map, centered at Systemweb
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: sw
      })

      // The marker positions using Places api
      var infowindow = new google.maps.InfoWindow()
      var service = new google.maps.places.PlacesService(map)

      service.getDetails(
        {
          placeId: 'ChIJKcntKXCsQjQRsmQbKSHz0M0'
        },
        function(place, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location
            })
            google.maps.event.addListener(marker, 'click', function() {
              infowindow.setContent(
                '<div><strong>' +
                  place.name +
                  '</strong><br>' +
                  place.formatted_address +
                  '</div>'
              )
              infowindow.open(map, this)
              map.setZoom(18)
            })
          }
        }
      )
      // The marker, positioned at Systemweb
      //  var marker = new google.maps.Marker({ position: sw, map: map })
    }
  }
}
</script>

<style>
#map {
  height: 400px;
  width: 100%;
}
</style>
