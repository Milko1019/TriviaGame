function timeLeft(){
  var number = 30;

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


  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');

  

    function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

      function showQuestions(questions, quizContainer){
          // we'll need a place to store the output and the answer choices
          var output = [];
          var answers;

          // for each question...
          for(var i=0; i<questions.length; i++){
              
              // first reset the list of answers
              answers = [];

              // for each available answer...
              for(letter in questions[i].answers){

                  // ...add an html radio button
                  answers.push(
                      '<label>'
                          + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                          + letter + ': '
                          + questions[i].answers[letter]
                      + '</label>'
                  );
              }

              // add this question and its answers to the output
              output.push(
                  '<div class="question">' + questions[i].question + '</div>'
                  + '<div class="answers">' + answers.join('') + '</div>'
              );
          }

          // finally combine our output list into one string of html and put it on the page
          quizContainer.innerHTML = output.join('');
      }


      function showResults(questions, quizContainer, resultsContainer){
          
             
          // gather answer containers from our quiz
          var answerContainers = quizContainer.querySelectorAll('.answers');
          
          // keep track of user's answers
          var userAnswer = '';
          var numCorrect = 0;
          var numWrong = 0;
          var numUq = 0;
          
          // for each question...
          for(var i=0; i<questions.length; i++){

              // find selected answer
              userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
              
              if(userAnswer===questions[i].correctAnswer){
                  numCorrect++;
              } else if (userAnswer!==questions[i].answers){
                  numUq++;
              } else{
                  numWrong++;
              }

              console.log(numCorrect);
              console.log(numWrong);
              console.log(numUq);

                    // document.getElementById("#right").textContent = numCorrect;
                    // document.getElementById("#wrong").textContent = numWrong;
                    // document.getElementById("#ua").textContent = numUq;
          }
          // show number of correct answers out of total
          $("#right").text(numCorrect);
          $("#wrong").text(numWrong);
          $("#ua").text(numUq);
      }

      // show questions right away
      showQuestions(questions, quizContainer);
      
      // on submit, show results
      submitButton.onclick = function(){
          showResults(questions, quizContainer, resultsContainer);
      }


}
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
timeLeft();

