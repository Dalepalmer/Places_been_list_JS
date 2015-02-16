$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var newInputPlace = $("input#new-place").val();

    var newPlace = {placeName: newInputPlace };

    $("ul#visited-places").append("<li><span class='place'>" + newPlace.placeName + "</span></li>");

    $("input#new-place").val("");

    $()

  });
});
