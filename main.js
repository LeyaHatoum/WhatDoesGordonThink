//Create an object for the insults
const gramseyInsults = {};
const numbers = [] --> //use reduce method to add;


//Get API Key for GIPHY
const myKey = "t9uzA10qm0ohWGiPoxU43lEDXVLCcj0s"

//Based on what is typed pick a randomized gif from Giphy
gramseyInsults.formSubmit = function () {
  $("form").on("submit", function (event) {
    event.preventDefault();
    
    //add answer to search query for Giphy
    const answer = $("input").val();
    const randomResult = function(){
    return  math.Floor(math.Random() * 50)
    };
    console.log(randomResult());
    const giphy = $.get(`http://api.giphy.com/v1/gifs/search?q=random+gordon+ramsay+frustrated+food&api_key=${myKey}&limit=1$offset=${randomResult()}`);
    
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