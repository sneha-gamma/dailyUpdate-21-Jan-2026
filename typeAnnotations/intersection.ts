
type BussinessPartner = {
    name:string;
    credit:number
}

type Identity = {
    id:number;
    name:string
}

type contact={
    email:string;
    phone:string;
}


type user = Identity & contact;

const u1: user = {
     id:984,
     name:'abc',
     email:'abc213',
     phone:'98433543'
}

console.log(u1)