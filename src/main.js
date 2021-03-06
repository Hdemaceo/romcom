// GLOBAL VARIABLES AND QUERY SELECTORS:
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
var savedCoversSection = document.querySelector(".saved-covers-section");

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;


//EVENT LISTENERS:
window.addEventListener("load", displayRandomPoster);
randomCoverButton.addEventListener("click", displayRandomPoster);
homeButton.addEventListener("click", homeViewPageHandler);
makeNewCoverButton.addEventListener("click", formViewPageHandler);
viewSavedCoversButton.addEventListener("click", viewSavedCoversHandler);
makeBookButton.addEventListener("click", customCoverHandler);
saveCoverButton.addEventListener("click", saveCover);
// savedCoversSection.addEventListener("dblclick", deleteCover);


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
}

function displayRandomPoster(){
  randomizePoster();
  cover.src = currentCover.cover;
  title.innerText = currentCover.title;
  firstDescriptor.innerText = currentCover.tagline1;
  secondDescriptor.innerText = currentCover.tagline2;
}


//FUNCTIONS FOR EVENT HANDLERS:
function createCustomCover() {
  currentCover = new Cover(
    userCover.value,
    userTitle.value,
    userDescriptorOne.value,
    userDescriptorTwo.value
  );
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

function hasDuplicates() {
  var duplicates;
  for (var i = 0; i < savedCovers.length; i++) {
    if(savedCovers[i] === currentCover) {
      duplicates = true;
    } else {
      duplicates = false;
    }
    return duplicates;
  }
}

function saveCover() {
  if(hasDuplicates() === false) {
    savedCovers.unshift(currentCover);
  }
}

function displaySavedCovers() {
  savedCoversSection.innerHTML = "";
  for (var i = 0; i < savedCovers.length; i++) {
    savedCoversSection.insertAdjacentHTML("afterbegin", `
    <div class = "mini-cover" id = ${savedCovers[i].id}>
      <img class="cover-image" src=${savedCovers[i].cover}>
      <h2 class="cover-title">${savedCovers[i].title}</h2>
      <h3 class="tagline">A tale of
      <span class="tagline-1">${savedCovers[i].tagline1}</span> and
      <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    </div>`);
  }
}


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
  displaySavedCovers();
}

function customCoverHandler() {
  event.preventDefault();
  createCustomCover();
  displayCustomCover();
  homeViewPageHandler();
  clearUserInput();
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
