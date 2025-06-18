// ====== chapter #6 to 9 ======
// Math functions and expressions


// ==== question 1 ====
// var a = 10;
// document.write("Result:<br>");
// document.write("The value of a is: " + a + "<br>");
// document.write("..................................................<br> <br>");
// a++;
// document.write("The value of ++a is: " + a + "<br>");
// document.write("Now the value of a is: " + a + "<br> <br>");
// document.write("The value of a++ is: " + a++ + "<br>");
// document.write("Now the value of a is: " + a + "<br> <br>");
// document.write("The value of --a is: " + --a + "<br>");
// document.write("Now the value of a is: " + a + "<br> <br>");
// document.write("The value of a-- is: " + a-- + "<br>");
// document.write("Now the value of a is: " + a + "<br>");


// ==== question 2 ====
// var a = 2, b = 1;
// var result;
// document.write("a is: " + a + "<br>");
// document.write("b is: " + b + "<br>");
// result = --a - --b + ++b + b--;
// document.write("Result of --a - --b + ++b + b-- is: " + result + "<br>");
// document.write("Explanation:<br>");
// document.write("1. --a: " + (--a) + "<br>");
// document.write("2. --b: " + (--b) + "<br>");
// document.write("3. ++b: " + (++b) + "<br>");
// document.write("4. b--: " + (b--) + "<br>");
// document.write("Final result: " + result + "<br>");


// ==== question 3 ====
// var userName = prompt("Enter your name:");
// document.write("Hello " + userName + "!<br>");


// ==== question 5 ====
// var tableNumber = parseInt(prompt("Enter a number for multiplication table (default is 5):")) || 5;
// document.write("<h2>Table of " + tableNumber + "</h2>");
// for (var i = 1; i <= 10; i++) {
//     document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
// }


// // ==== question 6 ====
// var subject1 = prompt("Enter first subject name:");
// var subject2 = prompt("Enter second subject name:");
// var subject3 = prompt("Enter third subject name:");
// var totalMarks = 100;
// var marks1 = parseInt(prompt("Enter marks obtained in " + subject1 + ":"));
// var marks2 = parseInt(prompt("Enter marks obtained in " + subject2 + ":"));
// var marks3 = parseInt(prompt("Enter marks obtained in " + subject3 + ":"));
// var totalObtainedMarks = marks1 + marks2 + marks3;
// var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;
// document.write("<h1>Subject Marks</h1>");
// document.write("Subject 1: " + subject1 + "<br>");
// document.write("Marks Obtained: " + marks1 + "<br>");
// document.write("Subject 2: " + subject2 + "<br>");
// document.write("Marks Obtained: " + marks2 + "<br>");
// document.write("Subject 3: " + subject3 + "<br>");
// document.write("Marks Obtained: " + marks3 + "<br>");
// document.write("Total Marks: " + (totalMarks * 3) + "<br>");
// document.write("Marks Obtained: " + totalObtainedMarks + "<br>");
// document.write("Percentage: " + percentage.toFixed(2) + "%<br>");