$(document).ready(main);
  function main() {
    $("#submit").click(function(event){
    event.preventDefault()
    var slt_weather_val=$("#slt_weather").val();
    var humor_val=$("#humor").val();
           //added a couple options to show I understand the concept of each form of logic. 
          // This could be expanded using this same logic/form though at that point it's just typing. 
          // I could refactor this with new stuff, but that isn't in the scope of this assignment.
    if ((slt_weather_val === 'rain') && (humor_val === 'fantasy' || humor_val === 'dead')) {
      alert("Portland has everything you need!");} 
        else if ((slt_weather_val === 'sea') && (humor_val === 'fantasy')) {
          alert("Storm Cove Will sooth your melancholy soul.");} 
        else if ((slt_weather_val === 'sea') && (humor_val === 'dead')) {
          alert("Set your sails for The Burmuda Triangle.");}   
        else if (slt_weather_val === 'indoors') {
          alert("You should go to the Catacombs Of Paris.");
    }
  });
}




