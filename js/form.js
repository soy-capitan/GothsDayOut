$(document).ready(main);
 
 function main() 

{
  $("#submit").click(function(event){
var slt_weather_val=$("#slt_weather").val();
  });
}


if ($('#slt_weather_val').val() === 'rain'){
 alert("Portland has everything you need!");
}
if ($('#slt_weather_val').val() === 'sea'){
  alert("Storm Cove Will sooth your melancholy soul.");
}
if ($('#slt_weather_val').val() === 'catacombs'){
  alert("You should go to the Catacombs Of Paris.");
}



  // if($('#arrivalTimeCheck:checked').val() === 'on')

// then i need to show with an if else the tags 
// #portland, #storm, #catacombs {
// display: none;

//     }

