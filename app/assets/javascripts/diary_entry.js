$(document).ready(function () {
  var marker;

  function setLocation(e) {
    $("#latitude").val(e.latlng.lat);
    $("#longitude").val(e.latlng.lng);

    if (marker) {
      removeMarkerFromMap(marker);
    }

    marker = addMarkerToMap(e.latlng, null, I18n.t('diary_entry.edit.marker_text'));
  }

  $("#usemap").click(function (e) {
    e.preventDefault();

    $("#map").show();
    $("#usemap").hide();

    var params = $("#map").data();
    var centre = [params.lat, params.lon];
    var map = createMap("map");

    map.setView(centre, params.zoom);

    if ($("#latitude").val() && $("#longitude").val()) {
      marker = addMarkerToMap(centre, null, I18n.t('diary_entry.edit.marker_text'));
    }

    map.on("click", setLocation);
  });
});
