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
});
