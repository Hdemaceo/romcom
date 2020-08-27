// Create variables targetting the relevant DOM elements here 👇

var cover = document.querySelector(".cover-image");
var title = document.querySelector(".cover-title");
var firstDescriptor = document.querySelector(".tagline-1");
var secondDescriptor = document.querySelector(".tagline-2");
var randomCoverButton = document.querySelector(".random-cover-button");






// We've provided a few variables below 👇

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;





// Add your event listeners here 👇

window.addEventListener("load", randomizePoster);
randomCoverButton.addEventListener("click", randomizePoster);








// Create your event handlers and other functions here 👇

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function randomizePoster(){
  cover.src = covers[getRandomIndex(covers)],
  title.innerText = titles[getRandomIndex(titles)],
  firstDescriptor.innerText = descriptors[getRandomIndex(descriptors)],
  secondDescriptor.innerText = descriptors[getRandomIndex(descriptors)]
}
