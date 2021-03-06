


(function(){
    // Functions
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label class="qcm-container">
                <input type="radio" class="question" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
                <span class="checkmark"></span>
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers gris
          answerContainers[questionNumber].style.color = '#333';
        }
        // if answer is wrong or blank
        else{
          // color the answers vert
          answerContainers[questionNumber].style.color = '#FF2929';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `Vous avez ${numCorrect} r??ponses correctes sur ${myQuestions.length} !`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'flex;';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'flex';
      }
      else{
        nextButton.style.display = 'flex';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "Aujourd???hui, les rencontres amoureuses se font le plus sur :  ",
        answers: {
          a: "Une application de rencontre (Tinder, fruitz, meetics???)",
          b: "Les r??seaux sociaux (Instagram, Facebook, twitter???)",
          c: "Dans les lieux du quotidien (??cole, travail, amis???)"
        },
        correctAnswer: "a"
      },
      {
        question: "Combien de fran??ais est pr??sent sur une application de rencontre ?",
        answers: {
          a: "1 fran??ais sur 3",
          b: "2 fran??ais sur 3",
          c: "3 fran??ais sur 3"
        },
        correctAnswer: "a"
      },
      {
        question: "Le plus difficile dans une rencontre en ligne, c???est :",
        answers: {
          a: "??crire un premier message",
          b: "R??ussir la premi??re rencontre",
          c: "Instaurer un jeu de s??duction",
        },
        correctAnswer: "b"
      }
      
    ];
    

    // Kick things off
    buildQuiz();
  
    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  
  $(document).ready(function(){
  

    $("#submit").click(function(){
      console.log("??a marche")
      $(".quiz-container").css("display","none");
      $(this).css("display","none");
      $(".chargement_button").css("display","block");
      window.setTimeout("location=('../pages/chargement.html');",2200);
    })
  
  });