function getYearofBirth(age) {
    const yearOfBirth = 2018 - age;
}
function createGreeting(name, age) {
    const yob = getYearofBirth(age);
    return `Hi, my name is ${name} and I am ${age} years old. I was born in ${yob}.`;
}

const greeting1 = createGreeting();
console.log(greeting1);

