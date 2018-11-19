//Creating an object for the insults and their functions
const gordonRamsay = {};

//Applying default events to start with
$("section").hide();
$("input").val("");

//Creating mother function that selects and shows Gif result
const refreshGif = function () {

  //Declare user's input
  const answer = $("input").val();
    
  //Create array of answers based on user's input
  gordonRamsay.ramsayInsults = [{
    text: `<p>Look at this mess!</p>`,
    gif: "assets/insult-a-mess.gif"
    }, {
      text: `<p>I can't sink any further</p>`,
      gif: "assets/insult-cant-sink-further.gif"
    }, {
      text: `<p>Your ${answer} is so frozen it started singing "Let It Go"</p>`,
      gif: "assets/insult-chicken-let-it-go.gif"
    }, {
      text: `<p>${answer}? Now you're sounding deluded</p>`,
      gif: "assets/insult-deluded.gif"
    }, {
      text: `<p>${answer} is a disgusting festering mess!</p>`,
      gif: "assets/insult-disgusting-festering-mess.gif"
    }, {
      text: `<p>This ${answer} is disgusting, it's like something out of a gas station!</p>`,
      gif: "assets/insult-disgusting-sauce.gif"
    }, {
      text: `<p>${answer} is absolute dog s***.</p>`,
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
      text: `<p>${answer}? Where is the finesse?</p>`,
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
      text: `<p>${answer} is stinky</p>`,
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
      text: `<p>${answer} is disgusting!</p>`,
      gif: "assets/insult-spice-and-disgusting.gif"
    }, {
      text: `<p>${answer} is a joke!</p>`,
      gif: "assets/insult-this-is-a-joke.gif"
    }, {
      text: `<p>This ${answer} looks like a dog's dinner</p>`,
      gif: "assets/insult-dogs-dinner.gif"
    },
  ];

  //choose a random gif array
  const insults = gordonRamsay.ramsayInsults;
  const theChosenOne = insults[Math.floor(Math.random() * insults.length)];
  
  console.log($(answer));
  console.log(theChosenOne.text);

  //remove previous answers
  $("p").remove();
  $(".gif-image").remove();

  //create an image element and place the chosen gif in it
  const gifHolder = document.createElement("img");
  gifHolder.className = "gif-image";
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
    document.querySelector("section").scrollIntoView({
      behavior: "smooth"
    });
});
};

//Defining actions for Another Gif button
gordonRamsay.anotherGif = function () {
  $(".another-gif").on("click", function (event) {
    refreshGif();
  });
};

//Defining actions for Try Again button
gordonRamsay.tryAgain = function () {
  $(".try-again").on("click", function (event){
    event.preventDefault();
    $("input").val("");
    document.querySelector("main").scrollIntoView({
      behavior: "smooth"
    });
  })
};

//Customizing Error Message for Invalid Inputs
gordonRamsay.Error = function () {

  //Create invalid pop-up element
  const errorMessage = document.createElement("div");
  errorMessage.id = "notify";
  errorMessage.style.display = "none";
  errorMessage.className = "pop-up";

  //Fill it with an image and text
  const gordonsPic = document.createElement("img");
  gordonsPic.className = "gordon";
  const gordonsQuote = document.createElement("span");
  gordonsQuote.className = "quote";
  errorMessage.append(gordonsPic, gordonsQuote);

  //Append Error Message to the Form 
  $("form").prepend(errorMessage);

  //Create the event for when it's invalid so that the popup message appears
  $("input").on("invalid", function(event){
    event.preventDefault();
    if (!event.target.validity.valid){
      gordonsPic.src = "assets/gordon-ramsay.jpg";
      gordonsQuote.textContent = "Do you know what words are? Use them.";
      errorMessage.style.display = "flex";
    }
  });
  
  //Create the event for when it's valid so that the popup message hides
  $("form").on("submit", function(event){
      event.preventDefault();
      $(".pop-up").hide();
  });
};

//Adding Credits
gordonRamsay.Credits = function (){
  $(".credits-closed").on("click", function(event){
    event.preventDefault();
    $(".credits-opened").css("display","flex");
    $(this).hide();
  });

  $("i").on("click", function(){
    $(".credits-closed").show();
    $(".credits-opened").css("display","none");
  });
};

//Document Ready starts here
$(function () {
  gordonRamsay.Credits();
  gordonRamsay.Error();
  gordonRamsay.formSubmit();
  gordonRamsay.anotherGif();
  gordonRamsay.tryAgain();
});
