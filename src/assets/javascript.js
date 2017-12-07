$( document ).ready(function() {
  $('.deckContainer').on('click', '.card', function() {
    console.log($(this).position())
    $(this).position({
      accept: ".card",
      my: "center",
      at: "center",
      of: $("#slot" + this.cnt),
      using: function(pos) {
        $(this).animate(pos, 200, "linear");
      }
    })
  })
});
