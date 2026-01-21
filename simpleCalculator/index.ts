
 enum operators {
    Multiply , Add, Subtract, Divide
 };

const calculator = (a : number, b:number , op:operators) : number => {
    switch(op){
        case operators.Multiply:
            return a*b;
            break;
        case operators.Add:
            return a+b;
        case operators.Subtract:
            return a-b;
        case operators.Divide:
            if(b==0){
                throw new Error('Denominator can not be zero ...enter something else');
            }
            else{
                return a/b;
            }
        default:
            throw new Error("invalid Input")
            break;
    }
}

console.log(calculator(5,0,operators.Divide))