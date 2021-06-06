var quiz = [{
    question: "What is the capital of Turkey?",
    answers: ["Istanbul", "Ankara", "Izmir", "Trabzon"],
    correctAnswer: 1
}, {
    question: "When was Turkey established?",
    answers: [1923, 1928, 1933, 1934],
    correctAnswer: 0
}, {
    question: "What is the population of Turkey?",
    answers: ["90 million", "75 million", "100 million", "80 million"],
    correctAnswer: 1
}, {
    question: "What is the population of Turkey's biggest city, Istanbul?",
    answers: ["18 million", "16 million", "14 million", "7 million"],
    correctAnswer: 2
}]

var i = 0;
var score = 0;

$(document).ready(function () {
    $('#start').on('click', function () {
        $('#questions').text(quiz[i].question);
        $('#zero').text(quiz[i].answers[0]);
        $('#one').text(quiz[i].answers[1]);
        $('#two').text(quiz[i].answers[2]);
        $('#three').text(quiz[i].answers[3]);
        $('#start').remove();
        $('.choices').show('slow');
        $('#next').show('slow');
    });
});

$(document).ready(function () {
    $(document).on('click', '#next', function () {
        var answer = $('input[name="answers"]:checked').val();
        var answerString = quiz[i].answers[answer];
        $('p[class="userAnswer"][value=' + i + ']').text(answerString);
        var correctAnswer = quiz[i].correctAnswer;
        $('p[class="correctAnswer"][value=' + i + ']').text(quiz[i].answers[correctAnswer]);
        if (answer == quiz[i].correctAnswer) {
            score++;
        } else {
            $('tr[class="row"][name=' + i + ']').css('background', '#FE2E64');
        }
        if (!$('input[name="answers"]').is(':checked')) {
            alert("please make a choice");
            return undefined; //stops executing the rest of the code
        }
        i++;

        if (i < 4) {
            $('.choices').css('display', 'none');
            $('#questions').text(quiz[i].question);
            $('#zero').text(quiz[i].answers[0]);
            $('#one').text(quiz[i].answers[1]);
            $('#two').text(quiz[i].answers[2]);
            $('#three').text(quiz[i].answers[3]);
            $('.choices').show('slow');
            $('input[name="answers"]').prop('checked', false);

        }
        if (i > 3) {

            $('#quiz').remove();
            $('#score').text("You have completed the quiz, your score is " + score);//score*(100/i)
            $('#results').fadeIn('fast');
        }


    });
});