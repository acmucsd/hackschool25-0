const poll = {
  question: "What's the best boba flavor?",
  options: ["Taro", "Matcha", "Strawberry"],
  votes: {
    Taro: 0,
    Matcha: 0,
    Strawberry: 0
  }
};

/* **********************
Activity 3
*************************/

///// Write your arrow function vote() here! /////

/**
 * vote() should take in a string argument named "option"
 * Check that option "option" exists in the poll.votes object
 *    - If it exists, increase the vote count by 1 and log it in the console
 *    - If it does not exist, log a message stating "invalid option"
 */


// Arrow function to cast a vote
const vote = (option) => {
// your code here
};

// Given: Function to print current results
const printResults = () => {
  console.log(`\n${poll.question}`);
  for (let option of poll.options) {
    console.log(`${option}: ${poll.votes[option]} votes`);
  }
};

// Call your functions and print results to test
// Comment out these calls in Activity 4
// View outputs in outputs tab

// vote("Matcha");     
// vote("Milk Tea");   
// vote("Taro");      

// printResults();

/* **********************
Activity 4
*************************/

//////// Write your simulateVotes() function here! ///////
/**
 * Declare an async simulateVotes function
 * Declare a const options
 * For 5 votes...
 *    - Declare a const randomOption to store a random vote
 *    - Call the vote() function from Activity 3 to vote
 *    - Wait between the votes (hint: await new Promise(...))
 */

// Call printResults()
// Call simulateVotes()
