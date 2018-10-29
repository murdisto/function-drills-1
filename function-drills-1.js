function createGreeting(name, age) {
  const yearOfBirth = 2018 - age;
    return `Hi, my name is ${name} and I am ${age} years old. I was born in ${yearOfBirth}.`;
}

const greeting1 = createGreeting();
console.log(greeting1);
