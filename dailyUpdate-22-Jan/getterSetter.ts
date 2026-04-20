

// class Customer {
//     private firstName : string;
//     private lastName: string;
//     private age: number;

//     constructor(firstName: string, lastName: string, age: number){
//         this.age = age;
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     public get _age(){
//         return this.age;
//     }

//     public set _age(inputAge: number){
//         if(inputAge<0 || inputAge>=150){
//             throw new Error('Please enter the valid age');
//         }
//         this.age = inputAge;
//     }

//     public getDetails() : string {
//          return `Customer name is: ${this.firstName} ${this.lastName}
//          Custer age: ${this.age}`
//     }

// }

// let c1 = new Customer('Nick', 'Doe', 25);
// console.log(c1.getDetails());
// c1._age;
// console.log(c1._age);


class BankAcc{
    private _accNumber : string;
    private _name: string;
    private _bankName: string;

    constructor(accNUmber:string, name:string, bankName:string){
        this._accNumber = accNUmber;
        this._bankName = bankName;
        this._name = name;
    }
    
    public get AccNumber(){
        return this._accNumber;
    }

    public set AccNumber(inputN : string){
        if( inputN.length > 6){
            throw new Error("Enter a valid acc number");
        }
        else{
            this._accNumber = inputN;
        }
    }

}

let b1 = new BankAcc('1654234', 'Nick', 'SBI');
console.log(b1.AccNumber);
b1.AccNumber = '123455';
console.log(b1.AccNumber);