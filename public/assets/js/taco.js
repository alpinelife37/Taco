$(document).ready(function() {
  $(".devour").on("click", function() {
    var tacoId = $(this).data("id");
    var devoured = $(this).data("devoured");
    $.ajax({
      url: "/api/tacos/" + tacoId,
      method: "PATCH",
      data: { devoured: devoured }
    }).then(function() {
      location.reload();
    });
  });

  $("btn btn-danger").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newTaco = {
      name: $("#taco")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/tacos", {
      type: "POST",
      data: newTaco
    }).then(function() {
      // Reload the page to get the updated list
      console.log("made it");
      location.reload();
    });
  });
});
