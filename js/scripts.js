$(document).ready(function() {

  $("form#animal-info").submit(function(event) {
    event.preventDefault();
    $(".animal-info").hide();
    var animals = $("input:radio[name=info]:checked").val();

    if(animals === "turtles") {
      $("#turtles").show();
    } else if(animals === "snakes") {
      $("#snakes").show();
    } else {
      $("#insects").show();
    }

  });

});
