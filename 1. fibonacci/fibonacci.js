//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...

/*
// using recursion
const calcFibonacci = (n) => { //  O(2^n) ❌
  if (n < 2) {
    return n
  }
  return calcFibonacci(n - 1) + calcFibonacci(n - 2);
}
const result = calcFibonacci(13)
console.log(result);
*/


function calcFibonacci(n) { //O(n)
  const answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i - 2] + answer[i - 1]);
  }
  return answer.pop();
}
const result = calcFibonacci(13)
console.log(result);


/*
// using dynamic programming and closure
function fibonacci() { //O(n)
  const cache = {};
  return function fib(n) {
      if (n in cache) {
          return cache[n];
      } else {
          if (n < 2) {
              return n;
          } else {
              cache[n] = fib(n - 1) + fib(n - 2);
              return cache[n];
          }
      }
  }
}

const calcFibonacci = fibonacci();
const result = calcFibonacci(14)
console.log(result);
*/

/*
// using dynamic programming
const calcFibonacci = (n, memo = {}) => {
  if (n in memo) {
    return memo[n]
  }
  if (n < 2) {
    return n
  }
  memo[n] = calcFibonacci(n - 1, memo) + calcFibonacci(n - 2, memo)
  return memo[n]
}

const result = calcFibonacci(20)
console.log(result);
*/
