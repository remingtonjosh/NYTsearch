$("#submit").on("click", function() {
  var queryURL =
    "https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=UzNzbkoRZ1VEpS6Zk4io3T6zuCD5xEGh"; // key included

  /// ajax

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {});

  //function here
});
