$(document).ready(function() {
  $("form#choose").submit(function(event) {
    var beaches = $("select#beaches").val();


    if (beaches === "Yes") {
      $("#Jamaica").show();
  } else if (beaches === "No") {
      $("#Oregon").show();
  }


    event.preventDefault();
 });
});
