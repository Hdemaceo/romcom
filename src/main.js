// Create variables targetting the relevant DOM elements here 👇
var cover = document.querySelector(".cover-image");
var title = document.querySelector(".cover-title");
var firstDescriptor = document.querySelector(".tagline-1");
var secondDescriptor = document.querySelector(".tagline-2");

var homeButton = document.querySelector(".home-button");
var randomCoverButton = document.querySelector(".random-cover-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var makeNewCoverButton = document.querySelector(".make-new-button");
var savedCoversButton = document.querySelector(".view-saved-button");

var formViewPage = document.querySelector(".form-view");
var homeViewPage = document.querySelector(".home-view");
var savedCoversViewPage = document.querySelector(".saved-view");

// We've provided a few variables below 👇
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;


// Add your event listeners here 👇
window.addEventListener("load", randomizePoster);
randomCoverButton.addEventListener("click", randomizePoster);
makeNewCoverButton.addEventListener("click", formViewPageHandler);
savedCoversButton.addEventListener("click", savedCoversViewHandler);
homeButton.addEventListener("click", homeViewPageHandler);

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

function homeViewPageHandler(){
  showHomeViewPage()
  hideFormViewPage()
  //hide home button:
  toggleHomeButton()
  //show new random cover button:
  showRandomCoverButton()
  //show save cover button:
  toggleSaveCoverButton()
}

function formViewPageHandler() {
  hideHomeViewPage()
  showFormViewPage()
  hideRandomCoverButton()
  hideSaveCoverButton()
  showHomeButton()
}

function savedCoversViewHandler() {
  hideHomeViewPage()
  showSavedCoversViewPage()
  hideRandomCoverButton()
  hideSaveCoverButton()
  showHomeButton()
}

//should we refactor to toggle?
function showHomeViewPage(){
  homeViewPage.classList.remove("hidden")
}

function hideHomeViewPage() {
  homeViewPage.classList.add("hidden")
}

//check toggle outcome for homeViewPage
function toggleHomeViewPage(){
  homeViewPage.classList.toggle("hidden")
}

function showFormViewPage() {
  formViewPage.classList.remove("hidden")
}

function hideFormViewPage() {
  formViewPage.classList.add("remove")
}

function showSavedCoversViewPage() {
  savedCoversViewPage.classList.remove("hidden")
}

function hideRandomCoverButton() {
  randomCoverButton.classList.add("hidden")
}

function showRandomCoverButton() {
  randomCoverButton.classList
}
function hideSaveCoverButton() {
  saveCoverButton.classList.add("hidden")
}

function toggleSaveCoverButton() {
  toggleCoverButton.classList.toggle("visible")
}

function showHomeButton() {
  homeButton.classList.remove("hidden")
}

function toggleHomeButton() {
  homeButton.classList.toggle("hidden")
}
