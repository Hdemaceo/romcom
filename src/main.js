// Create variables targetting the relevant DOM elements here 👇
var cover = document.querySelector(".cover-image");
var title = document.querySelector(".cover-title");
var firstDescriptor = document.querySelector(".tagline-1");
var secondDescriptor = document.querySelector(".tagline-2");

var homeButton = document.querySelector(".home-button");
var randomCoverButton = document.querySelector(".random-cover-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var makeNewCoverButton = document.querySelector(".make-new-button");
var viewSavedCoversButton = document.querySelector(".view-saved-button");

var formViewPage = document.querySelector(".form-view");
var homeViewPage = document.querySelector(".home-view");
var viewSavedCoversPage = document.querySelector(".saved-view");

// We've provided a few variables below 👇
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;


// Add your event listeners here 👇
window.addEventListener("load", randomizePoster);
randomCoverButton.addEventListener("click", randomizePoster);
homeButton.addEventListener("click", homeViewPageHandler);
makeNewCoverButton.addEventListener("click", formViewPageHandler);
viewSavedCoversButton.addEventListener("click", viewSavedCoversHandler);

// Create your event handlers and other functions here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function randomizePoster() {
  cover.src = covers[getRandomIndex(covers)],
  title.innerText = titles[getRandomIndex(titles)],
  firstDescriptor.innerText = descriptors[getRandomIndex(descriptors)],
  secondDescriptor.innerText = descriptors[getRandomIndex(descriptors)]
}

//EVENT HANDLERS:
function homeViewPageHandler(){
  hideHomeButton();
  hideFormViewPage();
  hideViewSavedCoversPage();
  showRandomCoverButton();
  showSaveCoverButton();
  showViewSavedCoversButton();
  showHomeViewPage();
}

function formViewPageHandler() {
  hideHomeViewPage();
  hideRandomCoverButton();
  hideSaveCoverButton();
  hideViewSavedCoversPage();
  showFormViewPage();
  showHomeButton();
}

function viewSavedCoversHandler() {
  hideHomeViewPage();
  hideFormViewPage();
  hideRandomCoverButton();
  hideSaveCoverButton();
  showViewSavedCoversPage();
  showHomeButton();
}

//FUNCTIONS FOR BUTTONS AND PAGES

function showHomeButton() {
  homeButton.classList.remove("hidden")
}
function hideHomeButton() {
  homeButton.classList.add("hidden")
}
//function showHomeViewPage(){
//   homeViewPage.classList.remove("hidden")
// }
//
// function hideHomeViewPage() {
//   homeViewPage.classList.add("hidden")
// }
//
// //check toggle outcome for homeViewPage
// function toggleHomeViewPage(){
//   homeViewPage.classList.toggle("hidden")
// }
//
// function showFormViewPage() {
//   formViewPage.classList.remove("hidden")
// }
//
// function hideFormViewPage() {
//   formViewPage.classList.add("remove")
// }
//
// function showSavedCoversViewPage() {
//   savedCoversViewPage.classList.remove("hidden")
// }
//
// function hideRandomCoverButton() {
//   randomCoverButton.classList.add("hidden")
// }
//
// function showRandomCoverButton() {
//   randomCoverButton.classList
// }
// function hideSaveCoverButton() {
//   saveCoverButton.classList.add("hidden")
// }
//
// function toggleSaveCoverButton() {
//   toggleCoverButton.classList.toggle("visible")
// }
//
// function showHomeButton() {
//   homeButton.classList.remove("hidden")
// }
//
// function toggleHomeButton() {
//   homeButton.classList.toggle("hidden")
// }
