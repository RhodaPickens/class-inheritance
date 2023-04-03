const Person = require('./person');

class Student extends Person {
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName);
    this.major = major;
    this.GPA = GPA;
  }

  static compareGPA(student1, student2) {
    if (student1.GPA === student2.GPA) {
      return "Both students have the same GPA";
    } else if (student1.GPA > student2.GPA) {
      return `${student1.firstName} ${student1.lastName} has the higher GPA.`;
    } else {
      return `${student2.firstName} ${student2.lastName} has the higher GPA.`;
    }
  }

}

let student1 = new Student("billy", "johnson", "software-development", 3.2);
console.log(student1.major);

/* Implement the following in the classes/student.js file.
Create a new Student class and have its constructor call the super(),
passing the parameters needed for a Person and a constructor function that
takes in additional parameters for their major subject and GPA.
Check the specs to determine which parameters you need to inherit.
Create a static method called compareGPA which will take in two Student instances
as the first and second parameter and return a string comparing the GPAs return
"<firstName> <lastName> has the higher GPA." If they're equal, return "Both students have the same GPA."

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
