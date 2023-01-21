//list of all questions and answers

var questions = [
  {
    title:
      "Which of the following Array methods in JavaScript runs a function on every item in the Array and collects the result from previous calls, but in reverse?",
    choices: ["reduce()", "reduceRight()", "everse()", "pop()"],
    answer: "reduceRight()",
  },
  {
    title: "Which of the following is true about setTimeOut()?",
    choices: [
      "The statement(s) it executes run(s) only once.",
      "It pauses the script in which it is called.",
      "clearTimeOut() will not stop its execution.",
      "The delay is measured in hundredths of a second.",
    ],
    answer: "The statement(s) it executes run(s) only once.",
  },
  {
    title: "How can the operating system of the client machine be detected?",
    choices: [
      "It is not possible using JavaScript.",
      "Using the navigator object.",
      "Using the window object.",
      "Using the document object.",
    ],
    answer: "Using the navigator object.",
  },
  {
    title: "Which of the following is not a valid HTML event?",
    choices: ["ondblclick", "onmousemove", "onclick", "onblink"],
    answer: "onblink",
  },
  {
    title: "How can a JavaScript object be printed?",
    choices: [
      "console.log(obj)",
      "console.print(obj)",
      "console.echo(obj)",
      "None of these",
    ],
    answer: "console.log(obj)",
  },
  {
    title:
      "Having an array object var arr = new Array(), what is the best way to add a new item to the end of an array?",
    choices: [
      "arr.push(“New Item”)",
      "arr[arr.length] = “New Item”",
      "arr.unshift(“New Item”)",
      "arr.append(“New Item”)",
    ],
    answer: "arr.push(“New Item”)",
  },
  {
    title:
      "Which of the following is the most secure and efficient way of declaring an array?",
    choices: [
      "var a = []",
      "var a = new Array()",
      "var a = new Array(n)",
      "var a",
    ],
    answer: "var a = []",
  },
  {
    title:
      "Which of the following built-in functions is used to access form elements using their IDs?",
    choices: [
      "getItem(id)",
      "getFormElement(id)",
      "getElementById(id)",
      "All of these",
    ],
    answer: "getElementById(id)",
  },
  {
    title:
      "Which of the following will randomly choose an element from an array named myStuff, given that the number of elements changes dynamically?",
    choices: [
      "randomElement = myStuff[Math.floor(Math.random() * myStuff.length)];",
      "randomElement = myStuff[Math.ceil(Math.random() * myStuff.length)];",
      "randomElement = myStuff[Math.random(myStuff.length)];",
      "randomElement = Math.random(myStuff.length);",
    ],
    answer:
      "randomElement = myStuff[Math.floor(Math.random() * myStuff.length)];",
  },
  {
    title: "How can global variables be declared in JavaScript?",
    choices: [
      "All variables are local in JavaScript.",
      "Declare the variable between the ‘script’ tags, and outside a function to make the variable global.",
      "Precede the variable name with the constant global.",
      "Declare the variable in an external file.",
    ],
    answer:
      "Declare the variable between the ‘script’ tags, and outside a function to make the variable global.",
  },
];
