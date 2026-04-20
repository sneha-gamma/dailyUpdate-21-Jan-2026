
// function Person(ssn : any, firstName : any, lastName : any){
//     this.ssn = ssn;
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Person.prototype.getFullname = function(){
//     return `${this.firstName} ${this.lastName}` ;
// }

// let p1 = new Person('181-29-0926', 'John' , 'Doe');
// console.log(p1.getFullname);

class Person{
     readonly ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn: string, firstName: string, lastName: string){
            this.ssn = ssn;
            this.firstName = firstName;
            this.lastName = lastName;
    }

    getFullName(): string {
               return `${this.firstName} ${this.lastName}`;

    }
}

let p1 = new Person('3457652','Sneha', 'Bhagat');
console.log(p1.getFullName());
//p1.ssn = '346578962';
console.log(p1.ssn);


// access modifiers
// class Person{
   
//     constructor( protected ssn: string, 
//         private firstName: string, 
//         private lastName: string)   { }

//     protected getFullName(): string {
//                return `${this.firstName} ${this.lastName}`;

//     }
// }

// let p1 = new Person('3457652','Sneha', 'Bhagat');
// console.log(p1.getFullName());
// //console.log(p1.ssn);