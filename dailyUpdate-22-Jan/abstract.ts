
//bstract class can not be inantiated and abstract method does not contain the implemaentation it provide the structure to implement in other class

abstract class Employee{

    constructor(private firstname:string, private lastname:string){};
    
    abstract getSalary():number;

    get fullname(): string{
        return  `${this.firstname} ${this.lastname}`;
    }

    compensationStatement(): string{
        return `${this.fullname} makes ${this.getSalary()} a month`;
    }
}

class fullTimeEmp extends Employee{
    
    constructor(firstname:string, lastname:string, private salary:number){
        super(firstname, lastname);
    }

    getSalary(): number {
        return this.salary;
    }
}


let f1 = new fullTimeEmp('Aarav', 'Oberoi', 24687754);
console.log(f1.compensationStatement());
