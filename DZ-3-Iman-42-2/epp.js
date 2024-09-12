let grades = [40, 55, 22, 89, 14, 78, 56, 47, 59];

for (let i = 0; i < grades.length; i++) {
  let number = grades[i];
  let grade;
  if (number <= 20) {
    grade = 1;
  } else if (number <= 40) {
    grade = 2;
  } else if (number <= 60) {
    grade = 3;
  } else if (number <= 80) {
    grade = 4;
  } else if (number <= 100) {
    grade = 5;
  } else {
    console.log("error");
  }
  console.log(number + " = " + grade);
}

let num = parseInt(prompt("enter the number"));
if (num >= 2 && num <= 10) {
  for (let i = 1; i <= 10; i++) {
    console.log(num + " * " + i + " = " + num * i);
  }
} else {
  console.log("error");
}
