
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
        I'm still ${this.maritalStatus} `
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

    
