//Create an object for the insults
const gramseyInsults = {};
const numbers = [];
for (let i = 0; i <= 10; i++){
  numbers.push(i);
};

//Get API Key for GIPHY
const myKey = "t9uzA10qm0ohWGiPoxU43lEDXVLCcj0s"

//Based on what is typed pick a randomized gif from Giphy
gramseyInsults.formSubmit = function () {
  $("form").on("submit", function (event) {
    event.preventDefault();
    
    //add answer to search query for Giphy
    const answer = $("input").val();
    const randomResult = numbers[Math.floor((Math.random() * numbers.length))];
    console.log(randomResult);
    const giphy = $.get(`http://api.giphy.com/v1/gifs/search?q=gordon+ramsay+${answer.toLowerCase}+food+insult&api_key=${myKey}&offset=${randomResult}`);
    
    //append the gif result to the div on the DOM
    giphy.done(function(data){
      console.log(data);
      const theGif = document.createElement("img");
      const gifLocation = data.data[0].images.original.url;
      console.log(gifLocation); 
      console.log("TITLE:", data.data[0].title)
      theGif.src = gifLocation;
      $("div").append(theGif);
    });

  });
};


$(function () {
  gramseyInsults.formSubmit();
});