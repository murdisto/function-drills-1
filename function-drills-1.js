function getYearofBirth(age) {
    if (age < 0){
      throw new Error("Age can not be negative");
    }
    const yearOfBirth = 2018 - age;
    return yearOfBirth;
}
function createGreeting(name, age) {
    if (name === undefined || age === undefined){
      throw new Error('Arguments not valid')
    }

    const yob = getYearofBirth(age);
    return `Hi, my name is ${name} and I am ${age} years old. I was born in ${yob}.`;
}

try{
  const greeting1 = createGreeting("John", -24);
  console.log(greeting1);
} catch(error) {
  console.error(error);
}
