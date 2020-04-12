import readlineSync from 'readline-sync';

const requestUsername = () => readlineSync.question('May I have your name? ');
const greeting = (username) => console.log(`Hello, ${username}`);

const main = () => {
  console.log('Welcome to the Brain Games!');

  const username = requestUsername();
  greeting(username);
};

export default main;
