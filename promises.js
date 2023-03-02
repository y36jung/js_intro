function promiseLog(boolean) {
  const promiseA = new Promise((resolve, reject) => {
    if (boolean) {
      resolve()
    } else {
      reject()
    }
  })

  promiseA
    .then(() => {console.log(`Good Job! You kept your promise!`)})
    .catch(() => {console.log(`You broke your promise...`)})
}

export default promiseLog;

/*
//1
var x = function() {};

//2
function y() {

}

var y;
y = function() {

};

// --------------------------

// What is "Hoisting" in Javascript? AKA what's the difference between a function declaration and a function expression

// This will work
foo();
function foo() {

}

// This will throw an error
bar();
var bar = function() {

};
*/
