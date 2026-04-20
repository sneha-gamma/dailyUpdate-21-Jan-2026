
class Person{
    constructor(private firstName: string, private lastName: string){}

    getFullName(): string{
        return `${this.firstName} ${this.lastName}` ;
    }

    describe() : string{
        return `This is ${this.firstName} ${this.lastName}.`;
    }
 }

 class Employee extends Person{
      
    constructor(firstName:string, lastname:string, private jobTittle:string){
        super(firstName, lastname);
    }

    describe() : string{
        return super.describe()+` I'm ${this.jobTittle}.`;
    }

    public get JobTittle(){
        return this.jobTittle;
    }

     public set JobTittle(tittle:string) {
            this.jobTittle = tittle;
     }

 }

 let e1 = new Employee('Sneha', 'Bhagat', 'Software Engg');
 console.log(e1.getFullName());
 console.log(e1.describe());
 console.log(e1.JobTittle);