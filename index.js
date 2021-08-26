var readlineSync = require('readline-sync');
var chalk = require('chalk');
var center = require('center-align')

var userName = readlineSync.question(chalk.blue("What is your name? "))
console.log(chalk.blue("Hello, %s \nTake this quiz about India\n"), chalk.red.bold(userName) )

//variable to keep score
score = 0

//function to take answer and check if it's right or wrong
function quizGame (question, optionList, answer){
  console.log(chalk.bgYellowBright.black(" %s "),question)
  userAnswerIndex = readlineSync.keyInSelect(optionList, chalk.yellowBright("Choose an option"))
  if (userAnswerIndex > -1){
    if (optionList[userAnswerIndex] === answer) {
      console.log(chalk.green("Correct Answer!"))
      //keeping score
      score++
    }

    else {
      console.log(chalk.red("Sorry, Wrong Answer."))
    } 
  }

  else {
    console.log(chalk.bgMagenta("You cancelled."))
  }
}


//array to store objects with question, option and answer sets
var GKQuestions = [{
  question: "What is India's national animal?",
  options: ["Lion", "Horse", "Tiger", "Peacock"],
  answer: "Tiger"
},{
  question: "What is India's capital city?",
  options: ["Mumbai", "Kolkata", "Chennai", "New Delhi"],
  answer: "New Delhi" 
},{
  question: "What is the currency of India?",
  options: ["Yen", "Dollar", "Won", "Rupee"],
  answer: "Rupee"
},{
  question: "In which year did India become independent?",
  options: ["1857", "1947",  "1950", "1942"],
  answer: "1947"
},{
  question: "How many states does India have?",
  options: ["28", "29", "30", "27"],
  answer: "28"
}]

//loop to call the function for each question from the array
for (var i=0; i < GKQuestions.length; i++){
  var currentQuestion = GKQuestions[i]
  quizGame(currentQuestion.question, currentQuestion.options, currentQuestion.answer)
  console.log("\n")
}

//display score
console.log(chalk.bgCyanBright.black(" Your Score: %i \n"), score)

//Leaderboard
var leaderBoard = [" Aneesh: 5 points ", " Sukhchain: 5 points"]
var message = "Take a screenshot of your score and send it to me to have your name immortalized on the leaderboard."

var length = leaderBoard[0].length
console.log(chalk.blueBright(center(" Leaderboard ", length)))
for (var i=0; i < leaderBoard.length; i++){
	console.log(chalk.bgYellowBright.black(leaderBoard[i]))
}


console.log("\n" + chalk.bgCyan(message))

console.log(chalk.magenta(center("Thank You for Playing!", message.length )))




