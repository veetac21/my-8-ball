$(document).ready(function () {
  var magic8Ball = {};
  magic8Ball.listofanswers =
  ["Yes","No","Indeed","Most likely Not",
    "Without a Doubt", "Ask again later"];

  magic8Ball.getAnswer = function (question) {
    var randomNumber = Math.random();
    var randomAnswer = Math.floor(randomNumber * this.listofanswers.length);
    return this.listofanswers[randomAnswer];
  };

  $("#8ball").effect("shake");
  $("#answer").hide();

  var onClick = function () {
    $("#answer").hide();
    $("#8ball").attr(
      "src",
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png"
    );

    var question = prompt("What do you want to know?");

    var answer = magic8Ball.getAnswer(question); 
    $("#answer").text(answer); 
    $("#answer").show();


    magic8Ball.getAnswer(question);
  };

  $("#questionButton").click(onClick);
});
