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
var Person = /** @class */ (function () {
    function Person(fname, lname, age, phone, state, zip, occupation, hourlyWage) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.phone = phone;
        this.state = state;
        this.zip = zip;
        this.occupation = occupation;
        this.hourlyWage = hourlyWage;
    }
    Person.prototype.getFullName = function () {
        return this.fname + " " + this.lname;
    };
    Person.prototype.getPhone = function () {
        return this.phone;
    };
    Person.prototype.getState = function () {
        return this.state;
    };
    Person.prototype.getZip = function () {
        return this.zip;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.getOccupation = function () {
        return this.occupation;
    };
    Person.prototype.getWeeklyWage = function (hours) {
        if (hours) {
            return this.hourlyWage * hours;
        }
        else {
            return this.hourlyWage * 40;
        }
    };
    Person.prototype.getNameAndWage = function () {
        return this.getFullName() + " " + this.getWeeklyWage();
    };
    Person.prototype.addCerts = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        for (var i = 0; i < args.length; i++) {
            this.certs.push(args[i]);
        }
    };
    Person.getPerson = function (config) {
        var newPerson = new Person(config.fname, config.lname);
        if (config.age) {
            newPerson.age = config.age;
        }
        return newPerson;
        if (config.phone) {
            newPerson.phone = config.phone;
        }
        return newPerson;
        if (config.state) {
            newPerson.state = config.state;
        }
        return newPerson;
        if (config.zip) {
            newPerson.zip = config.zip;
        }
        return newPerson;
    };
    return Person;
}());
var person1 = new Person("Jon", "Doe", "22", "555-123-4567", "ND", "22222", "student", 10);
var person2 = new Person("Jane", "Smith", "29", "999-123-4567", "TX", "45465", "doctor", 56);
var person3 = new Person("Andy", "Woods", "43", "222-123-4567", "FL", "35333", "Uber Driver", 22);
document.getElementById("person1").innerHTML = person1.getNameAndWage();
document.getElementById("person2").innerHTML = person2.getPhone();
document.getElementById("person3").innerHTML = person3.getAge();
var person4 = Person.getPerson({ fname: "James", lname: "Johnson", age: "13" });
document.getElementById("person4").innerHTML = person4.getAge();
