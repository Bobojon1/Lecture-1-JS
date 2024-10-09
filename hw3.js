// n № 1
// function flip (num) 
// {
//  if (num == 0)  return 1;
//  else if (num == 1)  return 0
// }
// console.log(flip(0));


// n № 2
// function equation(s1, s2) 
// {
//  let x = (- s2 ) / (s1)
//  return x
// }
// console.log( equation (4, 5));


// n № 3
// function points(twopoint, threepoint)
//  {
//  const twopointerpoints = twopoint * 2;
//  const threepointerpoints = threepoint* 3;
//  return twopointerpoints + threepointerpoints;
// }
// const totalPoints = points(1, 1);
// console.log(totalPoints); 


// n № 4
// function IsPow (num)
// {
//  if (num % 2 == 0 && num >= 2) return "True";
//  else return "False"
//  return num
// }
// console.log(IsPow(6));


// n № 5
// function largestSwap(number) 
// {
//  if (number < 10 || number > 99) {}
//  const tens = Math.floor(number / 10);
//  const num1 = number % 10;
//  const originalNumber = number;
//  const num99 = num1 * 10 + tens;
//  return originalNumber >= num99;
// }
// const number = 23;
// const result = largestSwap(number);
// console.log(result);


// n № 1.v2
// function longestTime(soat, minute, second) 
// {
//  soat = soat * 3600;
//  minute = minute * 60;
//  if (soat > minute && second) return soat / 3600
//  else if (minute > soat && second) return minute / 60
//  else return second
// }
// console.log(longestTime(1, 59, 3598));
// console.log(longestTime(2, 300, 15000));
// console.log(longestTime(15, 955, 59400));


// n № 2.v2
// function same(chislo)
// {
//  let num1 = Math.floor(chislo / 100);
//  let num2 = Math.floor(chislo / 10 % 10);
//  let num3 = chislo % 10;   
//  if (num1 == num2 || num1 == num3 ||  num2 == num3) return true;
//  else return false;  
// }
// console.log(same(212));


// n № 3.v2
// function largestSwap(number) 
// {
//  if (number < 10 || number > 99) {}
//  const tens = Math.floor(number / 10);
//  const num1 = number % 10;
//  const originalNumber = number;
//  const num99 = num1 * 10 + tens;
//  return originalNumber >= num99;
// }
// const number = 23;
// const result = largestSwap(number);
// console.log(result);


// n № 4.v2
// function addUp(number) 
// {
//  let sum = 0;
//  for (let i = 1; i <= number; i++) sum += i;
//  return sum;
// }
// let result = addUp(4);
// console.log(result);


// n № 5.v2
// function different(a, b, c)
// {
//  if (a == b) return 3
//  else if (b == c) return 1
//  else if (a == c) return 2
//  else return 0
// }
// console.log(different(908, 222, 908));


// n № 6
// function evenNum(a, b) 
// {
//  let sum = 0
//  for(let i = a; i <= b; i++)
//  if(i % 2 === 0) sum += i
//  return sum
// }
// console.log(evenNum(-5, -3));


// n № 7.v2
// function sumOfDigit(num)
// {
//  mx = - 999999
//  for (let i = num; i > 0; i /= 10)
//   if(i % 10 > mx) mx = Math.floor(i % 10)
//  return mx
// }
// console.log(sumOfDigit(9340));


// n № 8.v2
// function sumOfDigit(num)
// {
//  mx = - 999999
//  mn = 999999
//  for (let i = num; i > 0; i /= 10)
//   if(i % 10 > mx) mx = Math.floor(i % 10)
//  for (let i = num; i > 0; i /= 10)
//   if(i % 10 < mn) mn = Math.floor(i % 10)
//  return mn
// }
// console.log(sumOfDigit(9341));


// n № 9.v2
// function addUp(num) 
// {
//  let cnt = 0
//  for(let i = 1; i <= num; i++) cnt += i
//  return cnt
// }
// console.log(addUp(12));


// n № 10.v2
// function doubleEachDigit (number)
// {
//  let res = 1
//  for(let i = number; i > 0; i = Math.floor(i / 10)) res *= i % 10;
//  return res
// }
// console.log(doubleEachDigit(811));