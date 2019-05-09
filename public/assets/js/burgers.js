$(document).ready(function() {
  // bind event listener to submit burger-form
  $("#burger-form").on("submit", function(event) {
    event.preventDefault();

    // package up burger info from form
    const burgerData = {
      burger_name: $("#burger-input").val().trim()
    };

    $.ajax({
      url: "/api/burgers",
      method: "POST",
      data: burgerData
    })
    .then(() => location.reload())
    .catch(err => console.log(err));
  });

  // bind event listener for when devour-burger btn clicked
  $(".devour-burger").on("click", function() {
    const burgerId = $(this).attr("data-id");
    const devoured = $(this).attr("data-devoured");

    $.ajax({
      url: `/api/burgers/${burgerId}`,
      method: "PUT",
      data: {
        devoured: devoured
      }
    })
    .then(() => location.reload())
    .catch(err => console.log(err));
  });

  // Do not delete
});