# RomCom
### Developers ::
- [Connie Hong](https://github.com/conconartist)
- [Demaceo Howard](https://github.com/Hdemaceo)

### Project Links ::
- [Repo](https://github.com/Hdemaceo/romcom)
- [Deployed Page](https://hdemaceo.github.io/romcom/)

## Set-up ::
- Create repo and clone to personal computer
- Open in text editor
- Read the README
- In terminal, run command "open index.html" to interact with app.

## Overview & Learning Goals ::
For our Mod 1 group project, RomCom, we've been given a repository as well as a basic HTML layout to work on. The intended goal is to create an application with operational functionality according to the rubric and provided composition.

Our learning goals are to understand and be able to apply the functional concepts of this project. Additionally, we want to become familiar with how HTML and CSS interacts with JavaScript. Lastly, we want to practice and improve upon our GitHub collaborative workflow.


## Progression ::
8/25: Completed DTR, made GitHub repository, and familiarized ourselves with the given rubric.

8/26: Mapped out the index.html file so as to better acquiant ourselves with the given elements and classes with respect to their positions and how they appear on the web browser. We then walked through the code that was provided to us in the main.js and data.js files. Afterwards, we began creating variables in main.js that target the relevant DOM elements for interation 0 and 1. Next we created a function called "randomizePoster" which would utilize our query selector variables and the provided getRandomIndex function in generating random cover, titles, and descriptors. Once this was complete, we added an event listener that will invoke the randomizePoster function whenever the main page loads, thus completing iteration 0. Moving on to iteration 1, we created a variable that targets the "Show New Random Cover" button. With this variable, we added an event listener to it that will invoke the randomizePoster function whenever the button is clicked.

8/27: Began working on Iteration 2 of the project. The main focus of Iteration 2 is to be able to switch from the "Home" page to the "Form" page. Here, we discussed the usage of event handlers for when the "Make Your Own Cover" button is clicked. We created an event handler for the "Form" page as well as the "Home" page. Each event handler runs through a series of functions specific to the individual event performed. These functions include removing/adding the .hidden class from certain forms and buttons, as outlined in the rubric.

8/28: We continued with our work on Iteration 2, creating event handler functions for each event listener outlined under this portion of the project. These event handler functions involved removing and adding .hidden class when specific buttons are clicked on respective pages. We refactored some of the functionality of the event handlers to git rid of some of the bugs we experienced with toggling. On each page, we added and removed the working buttons on specified pages, according to the rubric guidelines.

8/30: We went through and refactored our functions for our event listeners and event handlers. We worked on Iteration 3 to add functionality to the Form View Page, creating query selectors for user input variables. We created functions to allow the user’s input data to be stored once “Make My Book” button is clicked. That stored data is saved into their respective arrays and then is loaded to the main page and displayed as a new book cover.

8/31: Refactor code that is mainly pertaining to Iteration 3 so that the data model is utilized to store user input first to then update the DOM.Then we began working on Iteration 4 which pertained to saving & viewing posters. Here, we focused on accessing our data model (more specifically, our savedCovers array) to be able to display each item as a mini cover on the “View Saved Covers” page. The mini covers have CSS stylings that were provided to us at the start of the project. We are able to successfully display our saved covers as mini covers on the "View Saved Covers" page by utilizing the insertAdjacentHTML method followed by an "afterbegin" argument and iterpolation of the mini cover class.

9/1: Completed Iteration 4. Project due at 9pm.


## Showcase ::
<p align="center"> </br>
  <img width="460" height="auto" src=" " alt=" ">
</p>
<p align="center"> </br>
  <img width="460" height="auto" src=" " alt=" ">
</p>
<p align="center"> </br>
  <img width="460" height="auto" src=" " alt=" ">
</p>
<p align="center"></br>
  <img width="200" height="auto" src=" " alt=" ">
</p>

Project spec & rubric can be found [here](https://github.com/turingschool-examples/romcom/).
