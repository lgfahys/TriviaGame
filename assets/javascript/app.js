$(document).ready(function () {

    // setting up global variables

    var counter = 45;
    var questionTracker = 0;
    var intervalId;
    var incorrectGuesses = 0;
    var correctGuesses = 0;

    // setting up questions

    var questions = [
        {
            question: "Pollen is a source of _______?",
            answerChoices: [
                { answer: "protein", value: true },
                { answer: "carbohydrates", value: false },
                { answer: "sugar", value: false },
                { answer: "allergies", value: false }
            ],
            correctAnswer: "protein",
            image: "<img src='assets/images/beepollen.jpg'>",
        },
        {
            question: "How fast can bees fly?",
            answerChoices: [
                { answer: "10 mph", value: false },
                { answer: "22 mph", value: true },
                { answer: "60 mph", value: false },
                { answer: "43 mph", value: false }
            ],
            correctAnswer: "22 mph",
            image: "<img src='assets/images/beeflying.jpg'>",
        },
        {
            question: "How many eyes does a bee have?",
            answerChoices: [
                { answer: "3", value: false },
                { answer: "5", value: true },
                { answer: "15", value: false },
                { answer: "2", value: false }
            ],
            correctAnswer: "5",
            image: "<img src='assets/images/beeeyes.jpg'>",
        },
        {
            question: "Do bees sleep?",
            answerChoices: [
                { answer: "yes", value: false },
                { answer: "only in the winter", value: false },
                { answer: "no", value: true },
                { answer: "I don't know", value: false },
            ],
            correctAnswer: "no",
            image: "<img src='assets/images/beesleeping.jpg'>",
        },
        {
            question: "How many wings does a bee have?",
            answerChoices: [
                { answer: "3", value: false },
                { answer: "2", value: false },
                { answer: "8", value: false },
                { answer: "4", value: true }
            ],
            correctAnswer: "4",
            image: "<img src='assets/images/beewings.jpg'>",
        },
        {
            question: "How many legs does a bee have?",
            answerChoices: [
                { answer: "6", value: true },
                { answer: "2", value: false },
                { answer: "4", value: false },
                { answer: "8", value: false },
            ],
            correctAnswer: "6",
            image: "<img src='assets/images/beewings.png'>",
        },
    ];

    // setting up start game function

    function startGame() {
        $("#restart").hide();
        $("#start").show();
        questionTracker = 0;
    };

    function askQuestion() {

        // setting up variables for the questions and answers

        var question = (questions[questionTracker].question);

        startTimer();
        $("#time").show();
        $("#question").show(question);
        $("#question").append(question);
        $("#answers").show(
            questions[questionTracker].answerChoices[0].answer +
            questions[questionTracker].answerChoices[1].answer +
            questions[questionTracker].answerChoices[2].answer +
            questions[questionTracker].answerChoices[3].answer) +
            $("#answers").append(
                '<p class = "answerChoices">' + questions[questionTracker].answerChoices[0].answer +
                '</p><p class = "answerChoices">' + questions[questionTracker].answerChoices[1].answer +
                '</p><p class = "answerChoices">' + questions[questionTracker].answerChoices[2].answer +
                '</p><p class = "answerChoices">' + questions[questionTracker].answerChoices[3].answer) +
            '</p>';
        $("#restart").hide();
        $("#start").hide();

        $(answers).attr("style", "text-align: center");
    };

    // setting up question timer

    function startTimer() {
        intervalId = setInterval(decrement, 1000);
    };

    // setting up decrement function for question timer

    function decrement() {
        counter--;
        $("#time").html("Time Remaining: " + counter);

        if (counter === 0) {
            stopTimer();
            timeOut();
        };

    };

    // setting up a function to stop the question timer

    function stopTimer() {
        clearInterval(intervalId);
    };

    // setting up timeout function for question timer

    function timeOut() {

        var correctImage = questions[questionTracker].image;

        $("#question").hide();
        $("#answers").hide();
        $("#correctAnswer").append("The correct answer was " + questions[questionTracker].correctAnswer);
        $("#status").show();
        $("#status").append("Out of Time!")
        incorrectGuesses++;
        questionTracker++;
        $("#correctImage").append(correctImage);
        // display correct answer
        // display image
    };

    function win() {
        alert("you win!");
    };

    function lose() {
        alert("you lose!");
    };


    // calling functions

    window.onload = startGame();

    $("#start").click(function () {
        askQuestion();
    });



    $().click(function () {
        
        userGuess = $(this);
        alert(this);
       

    });



});