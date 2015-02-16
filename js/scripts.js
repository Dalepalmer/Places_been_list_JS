$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var newInputPlace = $("input#new-place").val();
    var newPlaceCountry = $("input#new-place-country").val();
    var newPlaceSeason = $("input#new-place-season").val();
    var newPlaceParticulars = $("input#new-place-notes").val();
    var newPlace = {placeName: newInputPlace, placeCountry: newPlaceCountry, placeSeason: newPlaceSeason, placeNotes: newPlaceParticulars };


    $("ul#visited-places").append("<li><span class='place'>" + newPlace.placeName + "</span></li>");

    // $("input#new-place").val("");
    // $("input#new-place-country").val("");
    // $("input#new-place-season").val("");

    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.placeName + "");
      $(".placeName").text(newPlace.placeName);
      $(".placeCountry").text(newPlace.placeCountry);
      $(".placeSeason").text(newPlace.placeSeason);
      $(".placeNotes").text(newPlace.placeNotes);
    });
  });
});
