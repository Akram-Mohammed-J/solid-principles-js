/**
 * 
 * Software entities (classes, modules, functions, etc.) should be open for
   extension, but closed for modification.

This means the design of a software entity should be such that you can introduce
new functionality or behavior without modifying the existing code since changing
the existing code might introduce bugs.
 */

const questions = [
  {
    description: "What is the largest population in the world ?",
    options: ["India", "China", "Russia"],
    type: "radio",
  },
  {
    description: "Which type of fruit repesent the flag of palastine ?",
    type: "text",
  },
  {
    description:
      "What is the minimum and maxium age to attend UPSC Exams in India?",
    type: "range",
  },
];

function renderQuizWithoutPrinciples(questions) {
  questions.forEach((qn) => {
    switch (qn.type) {
      case "text":
        console.log(qn.description);
        console.log("Enter your Answer here _________________");
        return;
      case "radio":
        console.log(qn.description);
        qn.options.forEach((option) => {
          console.log(option);
        });
        return;
      case "range":
        console.log(qn.description);
        console.log("Minimum _________________");
        console.log("Maximum _________________");
    }
  });
}

renderQuizWithoutPrinciples(questions);
//Using Solid Principles - Open for addition clossed for Modification
class RangeType {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log("Minimum _________________");
    console.log("Maximum _________________");
  }
}

class TextType {
  constructor(description) {
    this.description = description;
  }
  printQuestionChoices() {
    console.log("Enter your Answer here _________________");
  }
}

class RadioType {
  constructor(description, options) {
    this.description = description;
    this.options = options;
  }
  printQuestionChoices() {
    this.options.forEach((option, index) => {
      console.log(`${index + 1} ${option}`);
    });
  }
}

const Questions = [
  new RadioType("What is the largest population in the world", [
    "India",
    "China",
    "Russia",
  ]),
  new RangeType(
    "What is the minimum and maxium age to attend UPSC Exams in India?"
  ),
  new TextType("Which type of fruit repesent the flag of palastine ?"),
];

function renderQuiz(qns) {
  qns.forEach((qn, index) => {
    console.log(`${index + 1} ${qn.description}`);
    qn.printQuestionChoices();
  });
}

// renderQuiz(Questions);
