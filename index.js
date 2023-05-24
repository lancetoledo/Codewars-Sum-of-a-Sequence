/* 
Your task is to write a function which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step.

If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below. 

EXAMPLES:
2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)

*/

const sumSequence = (begin, end, step) => {
  // We know that the begin is included in the sum addition
  let sequence = [begin];

  // Edge case if begin is greater then end return 0
  if (begin > end) {
    return 0;
  }

  // If end is not the result of a number of sequence it is not included, covered in the else statement.
  if (end % step === 0) {
    // While our begin has not reach the end keep incrementing by step and add the number to the array
    while (begin != end) {
      begin += step;
      sequence.push(begin);
    }
    // Once all numbers are in the sequence arr find sum of sequence
    return sequence.reduce((sum, num) => sum + num);
  } else {
    // Keep looping while the step has not passed the end then push int to sequence
    while (begin + step <= end) {
      begin += step;
      sequence.push(begin);
    }
    // Once all numbers are in the sequence arr find sum of sequence
    return sequence.reduce((sum, num) => sum + num);
  }
};

console.log(sumSequence(2, 2, 2));
