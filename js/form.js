$(document).ready(main);
 
 function main() 

{
  $("#submit").click(function(event){
var slt_weather_val=$("#slt_weather").val();
  });
}

// I know I'm getting data back here but the if else is broken. if I take out the ; it complains that it wants one, if I put it in, it complains about the else if.

if ($("#submit").val() === '#rain'); {
 alert("Portland has everything you need!");
} else if ($('#slt_weather_val').val() === '#sea'); {
  alert("Storm Cove Will sooth your melancholy soul.");
} else ($('#slt_weather_val').val() === '#catacombs');{
  alert("You should go to the Catacombs Of Paris.");
}

// Your example:
// if (age > 21) {
//   $('#drinks').show();
// } else if (age === 21) {
//   $('#drinks').show();
// } else {
//   $('#under-21').show();
// }


// then i need to show with an if else the tags 
// #portland, #storm, #catacombs {
// display: none;

//     }

