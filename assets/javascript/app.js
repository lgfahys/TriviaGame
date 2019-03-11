$(document).ready(function () {

    // setting up global variables

    // question timer
    var counter = 15;
    // next question timer
    var nextTimer = 5;
    // tracks the question we are on
    var questionTracker = 0;
    var intervalId;
    var interval;
    var incorrectGuesses = 0;
    var correctGuesses = 0;

    // setting up questions array

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
            image: "<img src='assets/images/beelegs.png'>",
        },
    ];

    // setting up functions

    function startGame() {
        $("#start").show();
        $("#restart").hide();
        $("#time").hide();
        $("#time").empty();
        $("#question").empty();
        $("#answers").empty();
        $("#status").empty();
        $("#correctAnswer").empty();
        $("#correctImage").empty();
        counter = 15;
        nextTimer = 5;
        incorrectGuesses = 0;
        correctGuesses = 0;
        questionTracker = 0;
    }

    function restartGame() {
        stopTimer();
        $("#correctAnswer").empty();
        $("#correctImage").empty();
        $("#status").empty();
        $("#status").append("You finished! Here are your results..." + "</br>"
        + "Correct Answers: " + correctGuesses + "</br>"
        + "Incorrect Answers: " + incorrectGuesses);
        $("#restart").show();

        $("#restart").click(function()
        {
            startGame();
        });
        
    };


    function askQuestion() {
        if (questionTracker < questions.length){
        
        // starting timer

        startTimer();

        $("#correctImage").empty();
        $("#correctAnswer").empty();
        $("#status").empty();
        $("#time").show();

        // setting up variables for the questions and answers

        var question = (questions[questionTracker].question);

        $("#question").show(question);
        $("#question").append(question);
        $("#answers").show(
            questions[questionTracker].answerChoices[0].answer +
            questions[questionTracker].answerChoices[1].answer +
            questions[questionTracker].answerChoices[2].answer +
            questions[questionTracker].answerChoices[3].answer) +
            $("#answers").append(
                '<p class = "answerChoices" id = "answer_0">' + questions[questionTracker].answerChoices[0].answer +
                '</p><p class = "answerChoices" id = "answer_1">' + questions[questionTracker].answerChoices[1].answer +
                '</p><p class = "answerChoices" id = "answer_2">' + questions[questionTracker].answerChoices[2].answer +
                '</p><p class = "answerChoices" id = "answer_3">' + questions[questionTracker].answerChoices[3].answer) +
            '</p>';
        $("#restart").hide();
        $("#start").hide();

        // checking if the value of the answer selected is true & calling win/lose function based on value

        $("#answer_0").click(function () {

            if (questions[questionTracker].answerChoices[0].value === true) {
                win();
            } else {
                lose();
            }
           
    
        });

        $("#answer_1").click(function () {
        
            if (questions[questionTracker].answerChoices[1].value === true) {
                win();
            } else {
                lose();
            }
           
    
        });

        $("#answer_2").click(function () {
            
            if (questions[questionTracker].answerChoices[2].value === true) {
                win();
            } else {
                lose();
            }
           
    
        });

        $("#answer_3").click(function () {
        
            if (questions[questionTracker].answerChoices[3].value === true) {
                win();
            } else {
                lose();
            }
           
            
        });
    } else {
        restartGame();
    }

    };

    // setting up question timer

    function startTimer() {
        counter = 15;
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

    function nextQuestionTimer() {
        nextTimer = 5;
        interval = setInterval(decrease, 1000);
    };

    function decrease() {
        nextTimer--;

        if (nextTimer === 0) {
            stopNextQuestionTimer();
            askQuestion();
        };

        function stopNextQuestionTimer() {
            clearInterval(interval);
        };
    };

    // setting up timeout function for question timer

    function timeOut() {

        stopTimer();
        nextQuestionTimer();

        var correctImage = questions[questionTracker].image;

        $("#question").empty();
        $("#answers").empty();
        $("#correctAnswer").append("The correct answer was " + questions[questionTracker].correctAnswer);
        $("#status").show();
        $("#status").append("Out of Time!")
        $("#correctImage").append(correctImage);
        incorrectGuesses++;
        questionTracker++;

    };

    function win() {

        stopTimer();
        nextQuestionTimer();

        var correctImage = questions[questionTracker].image;

        $("#question").empty();
        $("#answers").empty();
        $("#correctAnswer").append("The correct answer was " + questions[questionTracker].correctAnswer);
        $("#status").show();
        $("#status").append("Your answer was correct!")
        $("#correctImage").append(correctImage);
        correctGuesses++;
        questionTracker++;

    };

    function lose() {
        
        stopTimer();
        nextQuestionTimer();

        var correctImage = questions[questionTracker].image;

        $("#question").empty();
        $("#answers").empty();
        $("#correctAnswer").append("The correct answer was: " + questions[questionTracker].correctAnswer);
        $("#status").show();
        $("#status").append("Your answer was incorrect")
        $("#correctImage").append(correctImage);
        incorrectGuesses++;
        questionTracker++;

    };

    // calling the startGame function on load

    window.onload = startGame();

    // when user clicks start, call askQuestion function

    $("#start").click(function () {
        askQuestion();
    });

});