// Do I need a $(document).ready(function() {} here? Should it load when run() is clicked?

$(function() {

// Set a timer equal to 30 seconds

// Start game object
var game = {
    questions: [
        {
            question: "What is the capital of Colorado?",
            answer: "Denver",
            options: ["Sacramento", "Reno", "Albany", "Denver"]
        },
        {
            question: "What is the state bird of Colorado?",
            answer: "Lark Bunting",
            options: ["Hawk", "Seagull", "Lark Bunting", "Pelican"]
        },
    ],
    start: function() {
        $("#runButton").hide(); // TODO: show button when reset

        this.displayQuestions();
        

        // put timer on page
        this.startTimer();

        // put finish button on page

    },
    displayQuestions: function() {
        // put questions on page
        for (var i = 0; i < this.questions.length; i++) {
            var questionObj = this.questions[i];
            // add question to page
            $("#questions").append(`
                <div>
                    ${questionObj.question}
                </div>
            `);
            // add options to page
            for (var j = 0; j < questionObj.options.length; j++) {
                var answerChoice = questionObj.options[j];
                // <input type="radio" name="question0" value="Sacramento" />
                $("#questions").append(`
                    ${answerChoice}: <input type="radio" name=${"question" + i} value=${answerChoice} />
                `);
            } 
            // add a nice line break
            $("#questions").append("<br /><br />");
        }
    },


        // set interval
 //  Variable that will hold our setInterval that runs the timer
 


 // prevents the clock from being sped up unnecessarily


    // timer method
    // array questions
        // multiple choice answer
    // end game
        // timer runs out || (finish button)
        // answer correct/incorrect
        // reset/start method
}

$("#runButton").click(function() {

    console.log("That button worked");
    console.log('this', this);



    // run() button disappears
    game.start();



});
// Decrement timer by one every 1000 milliseconds

// Create radio buttons for selecting answers. Using .click I think?!?!

// Generate page tallying answers correct/incorrect
});