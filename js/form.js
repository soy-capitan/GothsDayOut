$(document).ready(main);
 
 function main() 

{
  $("#submit").click(function(event){
var slt_weather_val=$("#slt_weather").val();
console.log("whatever " + slt_weather_val);
  }); 

}


//  event.preventDefault();


      // this is what I wanrt to write the js to capture <form id="personalinfo">
//  <form>
//                         <div class="form-group">

//                             <p><label for="vacapref">Do you prefer Lots of Rain, Indoor Activities or Stormy Seas?</label>
//                                 <select select name="weather" id='slt_weather'>>
//                                     <option value="rain">Rainy all the way!</option>
//                                     <option value="indoors">What is this Outside you talk of?</option>
//                                     <option value="sea">Stormy Seas, Matey</option>
//                                 </select></p>
//                         </div>
//                         nothing else needs to work or take in data. just that first selection.

// then i need to show with an if else the tags 
// #portland, #storm, #catacombs {
// display: none;

//     }

