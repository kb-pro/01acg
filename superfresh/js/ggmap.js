function initialize() {
	  var place = { lat: 13.7579973, lng: 100.5584789};
	var	 map = new google.maps.Map(document.getElementById('map'), {
		zoom: 17,
		center: place
	  });

	 var marker = new google.maps.Marker({
           position: place,
            map: map,
            animation: google.maps.Animation.BOUNCE,
            });

	 var infowindow = new google.maps.InfoWindow({ 
			content: 'ACG Group'
		 });
		infowindow.open(map, marker);
	}

google.maps.event.addDomListener(window, 'load', initialize);
