let welcome = confirm(
    "Hey there! This is Favour's Prompt Calculator. To perform a calculation, please press OK. Otherwise, press Cancel."
  );
  
  if (welcome === false) {
    alert("See you soon!");
  }
  
  if (welcome === true) {
    const calculation = function (firstNumber, operation, secondNumber) {
      let answer = "";
      if (operation === "+") {
        answer = Number(firstNumber + secondNumber);
      } else if (operation === "-") {
        answer = Number(firstNumber - secondNumber);
      } else if (operation === "/") {
        answer = Number(firstNumber / secondNumber);
      } else if (operation === "*") {
        answer = Number(firstNumber * secondNumber);
      } else {
        answer = undefined;
      }
      return answer;
    };
  
    const firstNumber = prompt("Please enter the first number.");
    const operation = prompt(
      "Please enter the operation required.\nChoose from the following symbols:\n+,-,*,/"
    );
    const secondNumber = prompt("Please enter the second number.");
    alert(
      `The answer is:\n${calculation(
        Number(firstNumber),
        operation,
        Number(secondNumber)
      )}`
    );
    const bye = alert(
      "Thank you for using my calculator! Refresh page to perform another calculation."
    );
  }