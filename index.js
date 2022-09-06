// const readlineSync = require('readline-sync');
// const chalk = require('chalk');
import readlineSync from 'readline-sync';
import chalk from 'chalk';

// Do you know tech quiz.
const questionAnswerList = [
  {
    question: 'Who introduced iPhone to the world?',
    answer: 'steve jobs',
  },
  {
    question: 'When iPhone 14 will be released? (give in dd/mm/yyyy format)',
    answer: '07/10/2022',
  },
  {
    question: 'What is the binary representation of false?',
    answer: '0',
  },
  {
    question: 'Who taught Namaste Javascript?',
    answer: 'akshay saini',
  },
  {
    question: 'Who founded CRED Company?',
    answer: 'kunal shah',
  },
];

const highScoresList = [
  {
    playerName: 'Akshay Raichur',
    score: 5,
  },
  {
    playerName: 'Anirudh Kulkarni',
    score: 4,
  },
];

let totalUserScore = 0;

function App() {
  // Welcome user
  const userName = readlineSync.question("Welcome, what's your name?\n");
  console.log(chalk.green(`Hey! ${userName}, good to see you here`));
  console.log(chalk.underline.bgBlue("Let's play the game!!"));

  // start the game!
  questionAnswerList.forEach((eachItem) => {
    const userAnswer = readlineSync.question(eachItem.question + '\n');

    if (userAnswer.toLowerCase() === eachItem.answer) {
      console.log(chalk.underline.green('Congrats! You answered it right..'));
      totalUserScore++;
      console.log(chalk.blue(`Your Score is now ${totalUserScore}`));
      console.log(chalk.cyan('------------------------------------------'));
    } else {
      console.log(chalk.underline.red('Sorry! Wrong answer..'));
      console.log(chalk.blue(`Your Score is ${totalUserScore}`));
      console.log(chalk.cyan('------------------------------------------'));
    }
  });

  // display the result and points table
  console.log(
    chalk.bgGreen(`Your Total Score in this Quix : ${totalUserScore}`)
  );

  if (totalUserScore >= questionAnswerList.length - 1) {
    console.log(
      chalk.green.underline(
        'Congratulations!! You are now among the top scorers for this quiz, contact me if you want your name in the list!!'
      )
    );
  } else {
    console.log(
      chalk.blueBright('Well played! Run the program once again to re-try!')
    );
  }

  console.log('\n');
  console.log('List of all players who scored really good in this quiz!');
  highScoresList.forEach((eachPlayer) => {
    console.log(`${eachPlayer.playerName} : ${eachPlayer.score} points`);
  });
}

App();
