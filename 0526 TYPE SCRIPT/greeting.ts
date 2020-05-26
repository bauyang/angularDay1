// function sayHello(word): string{
//     return "Hello, " + word;
// }
// var providedWord = "World";

// document.getElementById("wordToReplace").innerHTML = sayHello(providedWord);

// function sayHello(person: string): string {
//     return "Hello, " + person;
//    }
//    var user = "Super Student";
//    document.getElementById("para").innerHTML = sayHello(user);

   class Person {
       fname: string;
       lname: string;
       age: string;
       phone: string;
       state: string;
       zip: string;
       occupation: string;
       hourlyWage: number;
       certs: string[];


       constructor(fname: string, lname: string, age?: string, phone?: string, state?: string, zip?: string, occupation?: string, hourlyWage?: number) {
           this.fname = fname;
           this.lname = lname;
           this.age = age;
           this.phone = phone;
           this.state = state;
           this.zip = zip;
           this.occupation = occupation;
           this.hourlyWage = hourlyWage;

       }
    
       getFullName(): string {
            return this.fname + " " + this.lname;
       }
       
       getPhone(): string {
           return this.phone;
       }

       getState(): string {
           return this.state;
       }
       getZip() : string {
           return this.zip;
       }
       getAge() : string {
           return this.age;
       }
       getOccupation() : string {
           return this.occupation;
       }
       getWeeklyWage(hours?: number) : number {
           if( hours){
               return this.hourlyWage * hours;
           }else{
               return this.hourlyWage * 40;
           }
       }

       getNameAndWage() : string {
           return this.getFullName() + " " + this.getWeeklyWage();
       }

       addCerts(...args) {
            for( var i = 0; i< args.length; i ++) {
                this.certs.push(args[i]);
            }
       }
       static getPerson(config: PersonOptions): Person {
           let newPerson = new Person(config.fname, config.lname);
           if(config.age){
               newPerson.age = config.age;
           } return newPerson;
           if(config.phone){
               newPerson.phone = config.phone;
           } return newPerson;
           if(config.state){
               newPerson.state = config.state;
           }return newPerson;
           if (config.zip){
               newPerson.zip = config.zip;
           }
           return newPerson;
       }

   }

   let person1 = new Person("Jon", "Doe", "22", "555-123-4567", "ND", "22222", "student", 10);
   let person2 = new Person("Jane", "Smith", "29", "999-123-4567", "TX", "45465", "doctor", 56);
   let person3 = new Person("Andy", "Woods", "43", "222-123-4567", "FL", "35333", "Uber Driver", 22);

   document.getElementById("person1").innerHTML = person1.getNameAndWage();
   document.getElementById("person2").innerHTML = person2.getPhone();
   document.getElementById("person3").innerHTML = person3.getAge();


   interface PersonOptions {
    fname: string;
    lname: string;
    age?: string;
    phone?: string;
    state?: string;
    zip?: string;
    occupation?: string;
    hourlyWage?: number;
   }
  
    let person4 = Person.getPerson({fname: "James", lname: "Johnson", age:"13"});
    document.getElementById("person4").innerHTML = person4.getAge();


    