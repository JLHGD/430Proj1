let currentQuestionIndex = 0;

// From https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
// Hides a given HTML element
const hideContent = (element) => {
  //var questionForm = document.querySelector("q1");
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
};

// Updates the buttons to be eneabled or disabled based on what question is currently being displayed
const updateButtonStates = (nextButton, previousButton) => {
    if(currentQuestionIndex >= 2){
        nextButton.disabled = true;
    }
    else{
        nextButton.disabled = false;
    }
    if(currentQuestionIndex <= 0){
        previousButton.disabled = true;
    }
    else{
        previousButton.disabled = false;
    }
};

// Sets up the buttons to control which questions are shown / hidden
const init = () => {
    const q1 = document.querySelector("#question1");
    const q2 = document.querySelector("#question2");
    const q3 = document.querySelector("#question3");
    const questions = [q1, q2, q3];

    // Get the next and previous buttons
    const nextButton = document.querySelector('#nextButton');
    const previousButton = document.querySelector('#previousButton');

    // Add an event handler to the next button that tells the current questionDiv to hide itself and for the next div to show itself
    const showNextQuestion = (e) => {
        if(currentQuestionIndex < 2){
            hideContent(questions[currentQuestionIndex]);
            hideContent(questions[currentQuestionIndex+1]);
            currentQuestionIndex++;
        }
        updateButtonStates(nextButton, previousButton);
    }
    nextButton.addEventListener('click', showNextQuestion);

    // Add an event handler to the previous button that tells the current questionDiv to hide itself and for the previous div to show itself
    const showPreviousQuestion = (e) => {
        if(currentQuestionIndex > 0){
            hideContent(questions[currentQuestionIndex]);
            hideContent(questions[currentQuestionIndex-1]);
            currentQuestionIndex--;
        }
        updateButtonStates(nextButton, previousButton);
    }
    previousButton.addEventListener('click', showPreviousQuestion);
    previousButton.disabled = true;

    // hide question 1 and question 2
    hideContent(q2);
    hideContent(q3);
};

window.addEventListener('load', init);
