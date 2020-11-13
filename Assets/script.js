var foodType = $("#food-type").val()
var foodRating = $('#food-rating').val()
var foodPrice = $('#food-price').val()
var resName = $('div.resName')
// var zLat = response.restaurants[0].restaurant.location.latitude
// var zLon = response.restaurants[0].restaurant.location.longitude
// var zNme = response.restaurants[0].restaurant.name
function testFunc(lat, lon, city) {
  console.log(lat)
  console.log(lon)
  console.log(city)
}

function lonlat() {

  var input = $('#location').val();

  var zipCode = input;

  $.ajax({
    method: "GET",
    url: 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBeQCRUEgdb2XprYRpK4otKtHf2JyM03K0&components=postal_code:' + zipCode,
  }).then(function (latLngData) {
    var lat = latLngData.results[0].geometry.location.lat
    var long = latLngData.results[0].geometry.location.lng
    $.ajax({
      method: "GET",
      url: "https://developers.zomato.com/api/v2.1/search?entity_type=zone&count=100&lat=" + lat + "&lon=" + long + "&radius=100m&sort=rating&order=asc",
      headers: {
        "user-key": "6a56dae347dd7a76013e24880ae2bfe9"
      },
    }).then(function (zomatoData) {
      for (var i = 0; i < 5; i++) {
        var zCity = zomatoData.restaurants[i].restaurant.location.address
        var zNme = zomatoData.restaurants[i].restaurant.name
        var zRating = zomatoData.restaurants[i].restaurant.user_rating.aggregate_rating
        var zCuisines = zomatoData.restaurants[i].restaurant.cuisines
        var zImg = zomatoData.restaurants[i].restaurant.thumb
        $("#resName"+i).text(zNme);
        $("#resLocation"+i).text(zCity);
        $("#resCuisine"+i).text(zCuisines);
        $("#resImg"+i).attr("src", zImg);
        $('.resListCard').css( "visibility", "visible" );
        console.log("-----------------")
        console.log(zCity);
        console.log(zNme);
        console.log(zRating);
        console.log(zCuisines);
        console.log(zImg)
        console.log("-----------------")
        console.log(latLngData);
        console.log("-----------------");
        console.log(zomatoData);
        console.log("-----------------");
        console.log(zipCode);

      }

    })
  })
};





$("#food-search").click(function (event) {
  event.preventDefault()
  lonlat()
})

