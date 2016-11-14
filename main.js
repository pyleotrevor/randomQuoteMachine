var quoteArr = ["This is a quote", "This is also a quote!", "This is quote too!"]
var random = Math.floor(Math.random() * quoteArr.length);

  $("document").ready(function() {

      $( ".quoteGenerator" ).click(function() {
          $(".quote").text(quoteArr[random])
});

  });