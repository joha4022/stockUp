// stockUpMap javascript

// variables
var map;
var yelpInitial = 'https://api.yelp.com/v3/businesses/search?term=grocery&location=broomfield';

// loads googleMap
function loadMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		// denver coordinates
		center: {lat: 39.9165382385254, lng: -105.05492401123},
		zoom: 15
	});
	console.log('loaded initial map!');
	var kingsooper = {lat: 39.9165382385254, lng: -105.05492401123};
	var marker = new google.maps.Marker({
		position: kingsooper,
		map: map
	});
	console.log('loaded marker on kingsooper!');
}

// loads yelp
function loadYelp() {

}
