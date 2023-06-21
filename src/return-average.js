/*
 input: array of numbers
 output: number  
 */

/*
function name: calcualateAverage
it takes an array of numbers 
returns average of all the numbers  
*/

function calucalateAverage(array) {
  return array.reduce((acc, curr) => acc + curr, 0) / array.length;
}
export { calucalateAverage };
