// VARIABLES AND QUERY SELECTORS:
var cover = document.querySelector(".cover-image");
var title = document.querySelector(".cover-title");
var firstDescriptor = document.querySelector(".tagline-1");
var secondDescriptor = document.querySelector(".tagline-2");

var userCover = document.querySelector(".user-cover");
var userTitle = document.querySelector(".user-title");
var userDescriptorOne = document.querySelector(".user-desc1");
var userDescriptorTwo = document.querySelector(".user-desc2");

var homeButton = document.querySelector(".home-button");
var randomCoverButton = document.querySelector(".random-cover-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var makeNewCoverButton = document.querySelector(".make-new-button");
var viewSavedCoversButton = document.querySelector(".view-saved-button");
var makeBookButton = document.querySelector(".create-new-book-button");

var formViewPage = document.querySelector(".form-view");
var homeViewPage = document.querySelector(".home-view");
var viewSavedCoversPage = document.querySelector(".saved-view");

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;


//EVENT LISTENERS:
window.addEventListener("load", randomizePoster);
randomCoverButton.addEventListener("click", randomizePoster);
homeButton.addEventListener("click", homeViewPageHandler);
makeNewCoverButton.addEventListener("click", formViewPageHandler);
viewSavedCoversButton.addEventListener("click", viewSavedCoversHandler);
makeBookButton.addEventListener("click", createNewBook);


//FUNCTIONS:
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function randomizePoster() {
  cover.src = covers[getRandomIndex(covers)];
  title.innerText = titles[getRandomIndex(titles)];
  firstDescriptor.innerText = descriptors[getRandomIndex(descriptors)];
  secondDescriptor.innerText = descriptors[getRandomIndex(descriptors)]
}

function saveUserInput() {
  covers.unshift(userCover.value);
  titles.unshift(userTitle.value);
  descriptors.unshift(userDescriptorOne.value);
  descriptors.unshift(userDescriptorTwo.value);
}

function clearUserInput() {
  userCover.value = "";
  userTitle.value = "";
  userDescriptorOne.value = "";
  userDescriptorTwo.value = "";
}

function createNewBook() {
  event.preventDefault();
  saveUserInput();
  clearUserInput();
  cover.src = covers[0];
  title.innerText = titles[0];
  firstDescriptor.innerText = descriptors[1];
  secondDescriptor.innerText = descriptors[0];
  homeViewPageHandler()
}
// should lines 68-71 be its own function and then "createNewBook" be renamed as a handler?

//EVENT HANDLERS:
function homeViewPageHandler() {
  hideHomeButton();
  hideFormViewPage();
  hideViewSavedCoversPage();
  showRandomCoverButton();
  showSaveCoverButton();
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

//FUNCTIONS TO HIDE/SHOW BUTTONS AND PAGES:
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
