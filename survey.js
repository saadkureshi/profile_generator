const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let storedAnswers = [];

rl.question('What\'\s your name? Nicknames are also acceptable :) ', (answer) => {
  storedAnswers.push(answer);
  rl.question('What\'\s an activity you like doing? ', (answer) => {
    storedAnswers.push(answer);
    rl.question('What do you listen to while doing that? ', (answer) => {
      storedAnswers.push(answer);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        storedAnswers.push(answer);
        rl.question('What\'\s your favourite thing to eat for that meal? ', (answer) => {
          storedAnswers.push(answer);
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            storedAnswers.push(answer);
            rl.question('What is your superpower? ', (answer) => {
              storedAnswers.push(answer);
              console.log(`${storedAnswers[0]} loves listening to ${storedAnswers[2]} while ${storedAnswers[1]}, devouring ${storedAnswers[4]} for ${storedAnswers[3]}, prefers ${storedAnswers[5]} over any other sport, and is amazing at ${storedAnswers[6]}.`);
              rl.close();
            })
          })
        })
      })
    })
  })
});

