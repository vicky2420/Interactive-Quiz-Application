angular.module('quizApp', [])
  .controller('QuizController', function ($scope) {
    $scope.quizStarted = false;
    $scope.quizFinished = false;
    $scope.score = 0;
    $scope.selectedOption = null;

    $scope.questions = [
      {
        question: 'What is the capital of France?',
        options: ['London', 'Paris', 'Berlin', 'Madrid'],
        correctAnswer: 'Paris'
      },
      {
        question: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
        correctAnswer: 'Mars'
      },
      // Add more questions as needed
    ];

    $scope.currentQuestionIndex = 0;
    $scope.currentQuestion = $scope.questions[$scope.currentQuestionIndex];

    $scope.startQuiz = function () {
      $scope.quizStarted = true;
    };

    $scope.submitAnswer = function () {
      if ($scope.selectedOption === $scope.currentQuestion.correctAnswer) {
        $scope.score++;
      }

      $scope.selectedOption = null;
      $scope.currentQuestionIndex++;

      if ($scope.currentQuestionIndex < $scope.questions.length) {
        $scope.currentQuestion = $scope.questions[$scope.currentQuestionIndex];
      } else {
        $scope.quizFinished = true;
      }
    };

    $scope.restartQuiz = function () {
      $scope.quizStarted = false;
      $scope.quizFinished = false;
      $scope.score = 0;
      $scope.currentQuestionIndex = 0;
      $scope.currentQuestion = $scope.questions[$scope.currentQuestionIndex];
    };
  });
