//Create an object for the insults
const gramseyInsults = {};

//Create an array categorizing the general insults
gramseyInsults.general = [];

//Get API Key for GIPHY
const myKey = "t9uzA10qm0ohWGiPoxU43lEDXVLCcj0s"
const answer = $("input").val();
const giphy = $.get(`http://api.giphy.com/v1/gifs/random?api_key=${myKey}&tag=${answer.toLowerCase()}&limit=1`);

//Based on what is typed pick a randomized gif from Giphy
gramseyInsults.formSubmit = function () {
  $("form").on("submit", function (event) {
    event.preventDefault();
    
    giphy.done(function(data){
      console.log(data);
      $("div").style.display = "block";
      $("div").src = data.data.images.original.url;
    });

    // const generalInsult = gramseyInsults.general;
    // let randomInsult = generalInsult[Math.floor(Math.random() * gramseyInsults.general.length)];
    // console.log(randomInsult);
    // const answer = $("input").val();
    // $("div").append()
    // $("div").append(randomInsult);
  });
};


$(function () {
  gramseyInsults.formSubmit();
});