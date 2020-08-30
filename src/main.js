// Create variables targetting the relevant DOM elements here 👇
var cover = document.querySelector(".cover-image");
var title = document.querySelector(".cover-title");
var firstDescriptor = document.querySelector(".tagline-1");
var secondDescriptor = document.querySelector(".tagline-2");
var userCover = document.querySelector("#cover");
var userTitle = document.querySelector("#title");
var userDescriptorOne = document.querySelector("#descriptor1");
var userDescriptorTwo = document.querySelector("#descriptor2");

var homeButton = document.querySelector(".home-button");
var randomCoverButton = document.querySelector(".random-cover-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var makeNewCoverButton = document.querySelector(".make-new-button");
var viewSavedCoversButton = document.querySelector(".view-saved-button");
var makeBookButton = document.querySelector(".create-new-book-button");

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
makeBookButton.addEventListener("click", createNewBook);

// Create your event handlers and other functions here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function randomizePoster() {
  cover.src = covers[getRandomIndex(covers)];
  title.innerText = titles[getRandomIndex(titles)];
  firstDescriptor.innerText = descriptors[getRandomIndex(descriptors)];
  secondDescriptor.innerText = descriptors[getRandomIndex(descriptors)]
}
function saveUserInput(){
  cover.src = userCover.value;
  title.innerText = userTitle.value;
  firstDescriptor.innerText = userDescriptorOne.value;
  secondDescriptor.innerText = userDescriptorTwo.value;
// Array protoype methods:
// pop();  -- removes the LAST element from an array
// push(); -- adds one or more elements to the END of an array
// shift(); removes the FIRST element from an arrays
// unshift(); adds one or more elements to the BEGINNING of an array

  // save the users input into respective arrays
  // at either first or last index (push or unshift)

}
function createNewBook(){
  saveUserInput();
  homeViewPageHandler();
  // covers.push(userCover.value);
  // titles.push(userTitle.value);
  // descriptors.push(userDescriptorOne.value);
  // descriptors.push(userDescriptorTwo.value);
  // saveUserInput()
}

//EVENT HANDLERS:
function homeViewPageHandler(){
  hideHomeButton();
  hideFormViewPage();
  hideViewSavedCoversPage();
  showRandomCoverButton();
  showSaveCoverButton();
  //showViewSavedCoversButton();
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

function showRandomCoverButton() {
  randomCoverButton.classList.remove("hidden")
}
function hideRandomCoverButton() {
  randomCoverButton.classList.add("hidden")
}
function showSaveCoverButton() {
  saveCoverButton.classList.remove("hidden")
}
function hideSaveCoverButton() {
  saveCoverButton.classList.add("hidden")
}
// function showViewSavedCoversButton() {
//   viewSavedCoversButton.classList.remove("hidden")
// }

function showHomeViewPage() {
  homeViewPage.classList.remove("hidden")
}
function hideHomeViewPage() {
  homeViewPage.classList.add("hidden")
}
function showFormViewPage() {
  formViewPage.classList.remove("hidden")
}
function hideFormViewPage() {
  formViewPage.classList.add("hidden")
}
function showViewSavedCoversPage() {
  viewSavedCoversPage.classList.remove("hidden")
}
function hideViewSavedCoversPage() {
  viewSavedCoversPage.classList.add("hidden")
}
