var magic8Ball = {};
magic8Ball.listofanswers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes, definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
];

magic8Ball.getAnswer = function (question) {
  var randomNumber = Math.random();
  var randomAnswer = Math.floor(randomNumber * this.listofanswers.length);
  var answer = this.listofanswers[randomAnswer];

  $("#8ball").effect("shake");
  $("#answer").text(answer);
  $("#answer").fadeIn(3000);
  $("#8ball").attr(
    "src",
    "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png"
  );

  console.log(question);
  console.log(answer);
};

onClick = function () {
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
