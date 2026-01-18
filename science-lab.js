/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.
const name = 'Alice';
const age = 28;
const studyField = 'Biology';

const participant = {
    name,
    age,
    studyField
};

/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` that prints the participant's details using `this` and a template string.
// Both tasks completed below Task 2:

const participantCopy = {
    ...participant,
    displayInfo() {
        console.log(`Participant Name: ${this.name}, Age: ${this.age}, Field of Study: ${this.studyField}`);
    }
};

/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// TODO: Echo the above task with an arrow function. Observe the behavior of `this` and explain your findings.
participant.participantInfo = () => {
    console.log(`Participant Name: ${participant.name}, Age: ${participant.age}, Field of Study: ${participant.studyField}`);
};

/*
 * Observations:
 * TODO: Explain here.
 */
// In arrow functions, `this` does not refer to the object itself but rather to the surrounding lexical context. Therefore, using `this` inside an arrow function defined in an object will not work as expected. Instead, we directly reference the `participant` object to access its properties.

/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and returns a new object with that property dynamically set.
const updateParticipantInfo = (obj, propertyName, value) => {
    {
        return {
            ...obj,
            [propertyName]: value
        };
    }
};

// Example usage:
let updatedParticipant = updateParticipantInfo(participant, 'age', 29);
console.log(updatedParticipant); // { name: 'Alice', age: 29, studyField: 'Biology' }