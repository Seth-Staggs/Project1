var zipZone = ""
var foodType = ""
var foodRating = 0
var foodPrice = ""


// Function to run Ajax call for resturaunt information
function ajaxCall() {
  $.ajax({
    method: "GET",
    crossDomain: true,
    url: "https://developers.zomato.com/api/v2.1/search?entity_type=zone&sort=rating&order=asc",
    dataType: "json",
    async: true,
    headers: {
      "user-key": "6a56dae347dd7a76013e24880ae2bfe9"
    },
    success: function (data) {
      console.log(data);
    }
  })
}

// Click listner to run ajax call
$("#food-search").click(function (event) {
  event.preventDefault()
  ajaxCall()
})
