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
var miniCover = document.querySelector(".mini-cover");

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
makeBookButton.addEventListener("click", customCoverHandler);
saveCoverButton.addEventListener("click", saveCover);
//click saveCoverButton twice directs to viewSavedCoversPage
//"click"++ or removeEventListener()?
//button.addEventListener('click', event => {
//  button.innerHTML = `Click count: ${event.detail}`;


//FUNCTIONS:
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function randomizePoster() {
  currentCover = new Cover(
    covers[getRandomIndex(covers)],
    titles[getRandomIndex(titles)],
    descriptors[getRandomIndex(descriptors)],
    descriptors[getRandomIndex(descriptors)]
  );
  cover.src = currentCover.cover;
  title.innerText = currentCover.title;
  firstDescriptor.innerText = currentCover.tagline1;
  secondDescriptor.innerText = currentCover.tagline2;
}

function createCustomCover() {
  currentCover = new Cover(
    userCover.value,
    userTitle.value,
    userDescriptorOne.value,
    userDescriptorTwo.value
  );
  // covers.unshift(userCover.value);
  // titles.unshift(userTitle.value);
  // descriptors.unshift(userDescriptorOne.value);
  // descriptors.unshift(userDescriptorTwo.value);
}

function displayCustomCover() {
  cover.src = currentCover.cover;
  title.innerText = currentCover.title;
  firstDescriptor.innerText = currentCover.tagline1;
  secondDescriptor.innerText = currentCover.tagline2;
}

function clearUserInput() {
  userCover.value = "";
  userTitle.value = "";
  userDescriptorOne.value = "";
  userDescriptorTwo.value = "";
}

function customCoverHandler() {
  event.preventDefault();
  createCustomCover();
  displayCustomCover();
  homeViewPageHandler();
  clearUserInput();
}


function saveCover() {
  event.preventDefault();
  savedCovers.push(currentCover);
  viewSavedCoversPage.insertAdjacentHTML("afterend", miniCover);
//on one click, stays on page, saves cover to array
//on two clicks, goes to Saved Covers Page
  //.filter to avoid duplicates
  //on second click
  //viewSavedCoversHandler();

}

function displaySavedCovers() {
  //iterate through array in for loop
  //cover.src = savedCovers.cover;
  //title.innerText = savedCovers.title;
  //firstDescriptor.innerText = savedCovers.tagline1;
  //secondDescriptor.innerText = savedCovers.tagline2;
}
// should lines 68-71 be its own function and then "createNewBook" be renamed as a handler?
// rename handler functions

//EVENT HANDLERS:
function homeViewPageHandler() {
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
  displaySavedCovers();
}

//FUNCTIONS TO HIDE/SHOW BUTTONS AND PAGES:
function showHomeButton() {
  homeButton.classList.remove("hidden");
}
function hideHomeButton() {
  homeButton.classList.add("hidden");
}
function showRandomCoverButton() {
  randomCoverButton.classList.remove("hidden");
}
function hideRandomCoverButton() {
  randomCoverButton.classList.add("hidden");
}
function showSaveCoverButton() {
  saveCoverButton.classList.remove("hidden");
}
function hideSaveCoverButton() {
  saveCoverButton.classList.add("hidden");
}
// function showViewSavedCoversButton() {
//   viewSavedCoversButton.classList.remove("hidden")
// }
function showHomeViewPage() {
  homeViewPage.classList.remove("hidden");
}
function hideHomeViewPage() {
  homeViewPage.classList.add("hidden");
}
function showFormViewPage() {
  formViewPage.classList.remove("hidden");
}
function hideFormViewPage() {
  formViewPage.classList.add("hidden");
}
function showViewSavedCoversPage() {
  viewSavedCoversPage.classList.remove("hidden");
}
function hideViewSavedCoversPage() {
  viewSavedCoversPage.classList.add("hidden");
}
