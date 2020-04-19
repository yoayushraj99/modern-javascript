/*Unlike regular functions, arrow functions do not have their own this. The value of this inside an arrow function 
remains the same throughout the lifecycle of the function and is always bound to the value of this in the closest 
non-arrow parent function.
Regular functions created using function declarations or expressions are constructible and callable. 
Since regular functions are constructible, they can be called using the new keyword.
However, the arrow functions are only callable and not constructible, i.e arrow functions can never be used as constructor functions.
Hence, they can never be invoked with the new keyword.
*/


class User {
  constructor(username, email){
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login(){
    console.log(`${this.username} just logged in`);
    return this;
  }
  logout(){
    console.log(`${this.username} just logged out`);
    return this;
  }
  incScore(){
    this.score += 1;
    console.log(`${this.username} has a score of ${this.score}`);
    return this;
  }
}

const userOne = new User('luigi', 'luigi@thenetninja.co.uk');
const userTwo = new User('mario', 'mario@thenetninja.co.uk');

// userOne.login();
// userOne.logout();
// userTwo.login();
// userTwo.logout();

userTwo.login()
  .incScore()
  .incScore()
  .logout();
