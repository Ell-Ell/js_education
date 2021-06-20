const secretNumber = Math.round(Math.random() * 100 + 1);
// console.log(secretNumber);
let userNumber;
do {
  userNumber = Number.parseInt(prompt('Enter a number'));
  //parseFloat вообще не к месту тут,но вообще есть, не забывай!
  if (secretNumber === userNumber) {
    console.log('Bingo! You rock!');
  }

  if (secretNumber > userNumber) {
    console.log(':( x >', userNumber);
  }
  if (secretNumber < userNumber) {
    console.log(' :( x <', userNumber);
  }
} while (secretNumber !== userNumber && !isNaN(userNumber));
