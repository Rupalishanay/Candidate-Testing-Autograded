const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName=" ";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question="Who was the first American woman in space? ";
let correctAnswer="Sally Ride", 
  candidateAnswer=" ";

//TODO: Variables for Part  
let questions=["Who was the first American woman in space? ","True or false: 5 kilometer == 5000 meters? ","(5 + 3)/2 * 10 = ? ","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ","What is the minimum crew size for the ISS? "];
let correctAnswers=["Sally Ride", "True", "40", "Trajectory", 5];
let candidateAnswers=[];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName=input.question("Enter the user name");

   console.log("successfully user created");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  
  console.log(String(candidateAnswer));
  for (let i = 0; i < questions.length; i++) {
     candidateAnswers[i] = input.question(questions[i] + "\n");
     
  }

return candidateAnswer;

}

function gradeQuiz(candidateAnswer) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  console.log(String(candidateAnswer));
  
    
   if(candidateAnswer.toLowerCase===correctAnswer.toLowerCase())
  {
     console.log("your answer is correct ");
  }
 else
 {
    console.log("answer is wrong");
 }
  
  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() 
{
  askForName();
    // TODO 1.1c: Greet candidate using their name //
    console.log(`Welcome to the coding world,${candidateName}!`);
  askQuestion();
  gradeQuiz(this.candidateAnswer);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
correctAnswers: correctAnswers,
candidateAnswers: candidateAnswers,
  
  
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};