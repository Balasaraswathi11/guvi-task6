
class Person {
    constructor(name, birthyear, gender, address, phone, email, occupation, nationality, maritalStatus) {
      this.name = name;
      this.birthyear=birthyear;
      this.gender = gender;
      this.address = address;
      this.phone = phone;
      this.email = email;
      this.occupation = occupation;
      this.nationality = nationality;
      this.maritalStatus = maritalStatus;
    }
    greetings() {
        return `Hello ${this.name}`
    }
    age()
    {return new Date().getFullYear()-this.birthyear}
    ageindays()
    {
        return this.age()*365
    }
    intro()
    { 
return `Hi, I'm ${this.name}, 
        I'm ${this.age()} years old, 
        I'm a ${this.nationality}${this.occupation},
        I'm currently living in ${this.address}.
        I'm  ${this.maritalStatus} `
    }
    changeAddress(newAddress) {
        this.address = newAddress;
    }
    changeMaritalStatus(newStatus) {
        this.maritalStatus = newStatus;
    }
    
    contactinfo(){
        
            return `Phone: ${this.phone}, Email: ${this.email}`;
        
        
    }
    
}
    
const person1=new Person("Bala",
2002,
"Male",
"3/1,Bryant Nagar,Tuty",
"555-1234",
"bala123@gmail.com",
"Software Developer",
"Indian",
"Single")

const person2 = new Person(
    "Lavaya",
    1995,
    "Female",
    "123 Main St, Anytown",
    "555-5678",
    "person2@example.com",
    "Teacher",
    "American",
    "Married"
);

const person3 = new Person(
    "Chandran",
    1980,
    "Male",
    "456 Elm St, Othertown",
    "555-9876",
    "person3@example.com",
    "Doctor",
    "British",
    "Divorced"
);

console.log(person1.greetings()); // Output: Hello Bala

console.log(person1.intro());
/*
Output:
Hi, I'm Bala, 
I'm 22 years old, 
I'm a Indian Software Developer,
I'm currently living in 3/1, Bryant Nagar, Tuty.
I'm still Single, 
*/

console.log(person1.ageindays()); // Output: 8030
person1.changeAddress("Chennai");
console.log(person1.address); // Output: Chennai
console.log(person1.contactinfo()) //Phone: 555-1234, Email: bala123@gmail.com

console.log(person2.greetings()); // Output: Hello Lavanya
console.log(person3.greetings()); // Output: Hello Chandran

console.log(person2.intro());
/*
Output:
Hi, I'm Lavanya, 
I'm 29 years old, 
I'm an American Teacher,
I'm currently living in 123 Main St, Anytown.
I'm  Married 
*/

console.log(person3.intro());
/*
Output:
Hi, I'm Chandran, 
        I'm 44 years old, 
        I'm a BritishDoctor,
        I'm currently living in 456 Elm St, Othertown.
        I'm  Divorced 
*/

console.log(person2.ageindays()); // Output: 10585
console.log(person3.ageindays()); // Output: 16060

person2.changeAddress("updated address,america");
console.log(person2.address); // Output:updated address,america

person3.changeMaritalStatus("Single");
console.log(person3.maritalStatus); // Output: Single

console.log(person2.contactinfo()); // Output: Phone: 555-5678, Email: person2@example.com
console.log(person3.contactinfo()); // Output: Phone: 555-9876, Email: person3@example.com

    
