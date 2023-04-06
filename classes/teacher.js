const Person = require('./person');

// constructor function that extends the Person class
class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience) {
    super(firstName, lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }
  // static method to sum the combined years of experience of all the teachers in the array
  static combinedYearsOfExperience(teachers) {  // array of teacher instances
    let sum = 0;
    for (let i = 0; i < teachers.length; i++) {
      let teacher = teachers[i];
      sum += teacher.yearsOfExperience;
    }
    return sum;
  }

}


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
