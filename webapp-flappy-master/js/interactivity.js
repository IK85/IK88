jQuery("#credits").on("click", function() {
 var message = "Game Paused";
 alert(message);
});

jQuery("#Game").on("click", function() {
  var information = "Game introduction";
  jQuery("#content").empty();
  jQuery("#content").append(
"<ul>" +
  "<li>" + "Chancellor Palpatine" + "</li>" +
  "<li>" + "Thanos" + "</li>" +
  "<li>" + "Fives" + "</li>" +
  "<li>" + "Artyom" + "</li>" +
  "<li>" + "Joey Wheeler" + "</li>" +
  "<li>" + "Ibraya" + "</li>" +
"</ul>"
  )
})

jQuery("#Help").on("click", function() {
  var information = "Are You Actually Serious?";
  jQuery("#content").empty();
  jQuery("#content").append(
    "<p>"+information+"</p>"
  )
})

jQuery("#Scores").on("click", function() {
  var information = "Scores";
  jQuery("#content").empty();
  jQuery("#content").append(
  "<ul>" +
  "<li>" + "Over 9000!" + "</li>" +
  "<li>" + "1337" + "</li>" +
  "<li>" + "1001" + "</li>" +
  "<li>" + "999" + "</li>" +
  "<li>" + "875" + "</li>" +
  "<li>" + "255" + "</li>" +
"</ul>"

)

})
