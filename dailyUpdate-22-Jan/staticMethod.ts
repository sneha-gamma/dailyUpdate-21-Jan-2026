
// statics variable -> shared among all instances of a class

class Employee{

    static count: number = 0;

    constructor(private name:string, private tittle:string, private salary:number){
          Employee.count++;
    }
}

let e1 = new Employee('Jyoti', 'Software engg', 8976894);
let e2 = new Employee('John', 'Software engg', 89894);
let e3 = new Employee('Nick', 'Aerospace engg', 86894);

console.log(Employee.count);


//static methods
