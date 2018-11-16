//Create an object for the insults. RamseyInsults includes insults each in an array (text, image src)...
const gordonRamsay = {};

gordonRamsay.ramsayInsults = [];

gordonRamsay.ramsayInsults.push({text: "<p>What are you?</p><p>An idiot sandwich</p>", gif: "assets/insult-idiot-sandwich.gif"});


//Create layout of gif with the text on top using js.


//Push gif and corresponding text to the ramseyInsults

//Based on what is typed pick a randomized gif from ramseyInsults, and include the type value in the insult. 

gordonRamsay.formSubmit = function () {
  $("form").on("submit", function (event) {
    event.preventDefault();
    //choose a random gif array

    //from that gif array, use the src of the gif for the img src

    //from that gif array, use the text to appear on the img 
    
    // append the gif result to the div on the DOM
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

//Create a button that appears underneath and allows you to play again. This button removes the previous input value, resets the gif/div to nothing or default state, and scrolls you back to the top of the page where the form and instructions are. 

//Do not allow the user to scroll down if they have not typed in anything. 

//Do not allow the user to type in numbers or symbols. 

//

// $(function () {
//   ramseyInsults.formSubmit();
// });