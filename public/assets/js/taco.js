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

  $(".create-taco").on("submit", function(event) {
    event.preventDefault();

    var newTaco = {
      name: $("#taco")
        .val()
        .trim()
    };

    $.ajax("/api/tacos", {
      type: "POST",
      data: newTaco
    }).then(function() {
      location.reload();
    });
  });
});
