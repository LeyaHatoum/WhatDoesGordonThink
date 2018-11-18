//Creating an object for the insults and their functions. ramsayInsults includes insults each in an array [text, image src].
const gordonRamsay = {};
gordonRamsay.ramsayInsults = [];

//Hide the answer section on page load
$("section").hide();

//Creating mother function that selects and shows Gif result
const refreshGif = function () {

  //Push items into the array
  gordonRamsay.ramsayInsults.push({
    text: `<p>Look at this mess!</p>`,
    gif: "assets/insult-a-mess.gif"
  }, {
      text: `<p>I can't sink any further</p>`,
      gif: "assets/insult-cant-sink-further.gif"
    }, {
      text: `<p>Your ${$("input").val()} is so frozen it started singing "Let It Go"</p>`,
      gif: "assets/insult-chicken-let-it-go.gif"
    }, {
      text: `<p>${$("input").val()}? Now you're sounding deluded</p>`,
      gif: "assets/insult-deluded.gif"
    }, {
      text: `<p>${$("input").val()} is a disgusting festering mess</p>`,
      gif: "assets/insult-disgusting-festering-mess.gif"
    }, {
      text: `<p>The ${$("input").val()} is disgusting, it's like something out of a gas station!</p>`,
      gif: "assets/insult-disgusting-sauce.gif"
    }, {
      text: `<p>${$("input").val()} is absolute dog s***.</p>`,
      gif: "assets/insult-dog-shit.gif"
    }, {
      text: `<p>I don't get it</p>`,
      gif: "assets/insult-dont-get-it.gif"
    }, {
      text: `<p>Dreadful!</p>`,
      gif: "assets/insult-dreadful.gif"
    }, {
      text: `<p>Have you got a drinking problem?</p>`,
      gif: "assets/insult-drinking-problem.gif"
    }, {
      text: `<p>${$("input").val()}? Where is the finesse?</p>`,
      gif: "assets/insult-finesse.gif"
    }, {
      text: `<p>Gross</p>`,
      gif: "assets/insult-gross.gif"
    }, {
      text: `<p>I don't like it</p>`,
      gif: "assets/insult-i-dont-like-it.gif"
    }, {
      text: `<p>What are you? An idiot sandwich.</p>`,
      gif: "assets/insult-idiot-sandwich.gif"
    }, {
      text: `<p>You deserve a kick in the nuts</p>`,
      gif: "assets/insult-kick-in-the-nuts.gif"
    }, {
      text: `<p>The ${$("input").val()} is stinking</p>`,
      gif: "assets/insult-meat-is-stinking.gif"
    }, {
      text: `<p>I think you need a doctor right now.</p>`,
      gif: "assets/insult-need-a-doctor.gif"
    }, {
      text: `<p>Oh, my God!</p>`,
      gif: "assets/insult-oh-my-god.gif"
    }, {
      text: `<p>May the Lord above not poison me. Amen.</p>`,
      gif: "assets/insult-prayer.gif"
    }, {
      text: `<p>I am seriously disappointed!</p>`,
      gif: "assets/insult-seriously-disappointed.gif"
    }, {
      text: `<p>${$("input").val()} is disgusting!</p>`,
      gif: "assets/insult-spice-and-disgusting.gif"
    }, {
      text: `<p>${$("input").val()} is a joke!</p>`,
      gif: "assets/insult-this-is-a-joke.gif"
    },
  );

  //choose a random gif array
  const insults = gordonRamsay.ramsayInsults;
  const theChosenOne = insults[Math.floor(Math.random() * insults.length)];
  
  //remove previous answers
  $("p").remove();
  $("img").remove();

  //create an image element and place the chosen gif in it
  const gifHolder = document.createElement("img");
  const gifLocation = theChosenOne.gif;
  gifHolder.src = gifLocation;
  
  //place the text as a caption
  const caption = theChosenOne.text;
  
  //append the image and text on to the DOM
  $(".gif-home").append(gifHolder, caption);
  
  //reveal answers 
  $("section").show();
  
};

//Defining actions for submit event
gordonRamsay.formSubmit = function () {
  $("form").on("submit", function (event) {
    event.preventDefault();
    refreshGif();
  });
};

//Defining actions for Another Gif button
// gordonRamsay.anotherGif = function () {
//   $(".another-gif").on("click", function (event) {
//     event.preventDefault();
//     refreshGif();
//   });
// };

//Defining actions for Try Again button
// gordonRamsay.tryAgain = function () {
//   $(".try-again").on("click", function (event){
//     $("input").val("");
//   })
// };



//Create layout of gif with the text on top using js.

//Do not allow the user to scroll down if they have not typed in anything. 

//Do not allow the user to type in numbers or symbols. 

//

$(function () {
  gordonRamsay.formSubmit();
  // gordonRamsay.anotherGif();
  // gordonRamsay.tryAgain();
});