function timeLeft(){
    var number = 5;
  
    var intervalId;
  
    function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    }
    function stop() {
        clearInterval(intervalId);
    }
  
    function decrement() {
  
        number--;
  
        $("#timeLeft").text(number);
  
        if (number === 0) {
  
            number = 0;
            window.location.href = "answerPage.html";
            stop()
        }
    }
   
    function run(){
        if (number === 0){
            stop()
        }
    }
    run()
}
    

var myQuestions = [
{
    question: "What's the capitail of Minnesota?",
    answers: {
        a: 'Minneapolis ',
        b: 'St. Paul ',
        c: 'Bloomington ' ,
        d: 'Edina ',
    },
    correctAnswer: 'a'
},
{
    question: "Minnesota is the land of _____?",
    answers: {
        a: 'The North ',
        b: 'Nice People ',
        c: '10,000 Lakes ' ,
        d: 'Burgers ',
    },
    correctAnswer: 'c'
},
{
    question: "What's Minnesotsas NFL team?",
    answers: {
        a: 'Eagles ',
        b: 'Vikings ',
        c: 'Turtles ',
        d: 'Bears ',
    },
    correctAnswer: 'b'
},
{
    question: "What was the orginal name of St. Paul?",
    answers: {
        a: 'Pigs Eye ',
        b: 'Hibbing ',
        c: 'River Town ',
        d: 'Pigs Tale ',
    },
    correctAnswer: 'a'
},
{
    question: "The Mall of America is located in which city?",
    answers: {
        a: 'Eden Praire',
        b: 'Edina',
        c: 'Bloomington',
        d: 'St. Paul',
    },
    correctAnswer: 'c'
},
{
    question: "What two cities make up the Twin Cities",
    answers: {
        a: 'Wyzeta, Eden Praire',
        b: 'St. Paul, Bloominton',
        c: 'Edin, Minneapolis',
        d: 'Minneapolis, St. Paul ',
    },
    correctAnswer: 'd'
    }
];

  
var quizContainer = document.getElementById('#quiz');
// var resultsContainer = document.getElementById('results');
// var submitButton = document.getElementById('submit');
  
function quiz(){

    function showQuestions(){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<myQuestions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in myQuestions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + myQuestions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + myQuestions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        // quizContainer.innerHTML = output.join('');
        $("#quiz").html(output.join(""))
    }


    function showResults(){
            
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        var numWrong = 0;
        var numUq = 0;
        
        // for each question...
        for(var i=0; i<myQuestions.length; i++){

            // find selected answer
            userAnswer = ('')
            
            if(userAnswer===myQuestions[i].correctAnswer){
                numCorrect++;
            } else if (userAnswer!==myQuestions[i].answers){
                numUq++;
            } else{
                numWrong++;
            }
            // console.log(numCorrect);
            // console.log(numWrong);
            // console.log(numUq);

        }
        // show number of correct answers out of total
        $("#right").text(numCorrect);
        $("#wrong").text(numWrong);
        $("#ua").text(numUq);
    }
    showQuestions();
    showResults();

}

quiz();
timeLeft();

  
  