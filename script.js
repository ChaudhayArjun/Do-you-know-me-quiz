var readlineSycn = require("readline-sync");

var userName = readlineSycn.question("Hi What is your name? ");
console.log("---------------");

console.log("Welcome " + userName + "." );
console.log("---------------");

var userAnsWer = readlineSycn.question("Lets play a quiz to see how well do you Know me? PRESS yes or ok to continue : ");

if(userAnsWer.toLowerCase() == "yes" || userAnsWer.toLowerCase() == "ok") {
  console.log("---------------");

  var score = 0;

  var questions = [
    {
     question : "What is My Full Name? ",
     ans1 : "Arjun Chaudhary"
    } ,
    {
     question : "who is my favorite superhero? ",
     ans1 : "captain america"
    } ,
    {
      question : "My favorite colour? ",
      ans1 : "Blue",
      ans2 : "Black"
    } , 
    {
      question : "Where do I live? ",
      ans1 : "Anupshahr"
    } , 
    {
      question : "My favorite VideoGame? ",
      ans1 : "God of War",
      ans2 : "Genshin Impact"
    } , 
    {
      question : "My favorite Anime? ", 
      ans1 : "Mushoku Tensei"
    }
  ];

  function play(question, ans1, ans2) {
    var userAns = readlineSycn.question(question);
    if(userAns.toLowerCase() === ans1.toLowerCase() || userAns.toLowerCase() === ans2.toLowerCase()) {
      console.log("Right!"); 
      score += 10;
    } else {
      console.log("Wrong!");
      console.log(ans1 ,ans2)
    }
    console.log("---------------");
  }

  for(let i = 0; i < questions.length; i++) {
    var currQuestion = questions[i];
    play(currQuestion.question, currQuestion.ans1, currQuestion.ans2);
  }

  console.log("scored! " + score + " out of 60");

  if(score >= 40) {
    console.log("You know me pretty well! ");
  }
  
} else {
  console.log("say yes/ok to play!!!!");
}