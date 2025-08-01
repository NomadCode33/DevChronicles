/*
Complete the function so that it finds the average of the three 
scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'

Tested values are all between 0 and 100. Theres is no need to check 
for negative values or values greater than 100.

function getGrade (s1, s2, s3) {
  // Code here
}
*/

// Answer:
// Since I have compare the average to the score thresholds, I made sure
// that I calculated the average using s1, s2, and s3
// Then I used the average in conditional statements for the point thresholds
function getGrade (s1, s2, s3) {
  const avg = (s1 + s2 + s3) / 3;
  
  if (90 <= avg && avg <= 100) {
    return 'A';
  } else if (80 <= avg && avg < 90) {
    return 'B';
  } else if (70 <= avg && avg < 80) {
    return 'C';
  } else if (60 <= avg && avg < 70) {
    return 'D';
  } else {
    return 'F';
  }
}