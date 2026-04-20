// Promise<t> -> generic type where t is the type of the resolved value
// promise<void> -> for promises that dont return a value


const randomValue = (): Promise<string> =>  {
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            const success = Math.random() > 0.5;
            if(success){
                resolve('hello typescript')
            }else{
                reject(new Error('failed to fetch'))
            }
        },1000)
    })
}

randomValue()
.then((greeting)=>console.log(greeting.toUpperCase()))
.catch((error:Error)=>{console.error('error:', error.message)})


// async/await

interface User{
    id: number,
    name:string,
    email:string,
    role:'admin'|'user'|'guest'
}
 
async function fetchUser(): Promise<User[]> {
    console.log('fetching users...')
    await new Promise(resolve=>setTimeout(resolve,1000));
    return[
        {id:1,name:'alice',email:'alice.com',role:'admin'},
        {id:2,name:'bob',email:'bob.com',role:'user'}
    ]
}

async function processUser(){
    try{
         const users = await fetchUser();
         console.log(`fetched ${users.length} users`);
         const adminEmails = users
         .filter(user=>user.role==='admin')
         .map(user=>user.email)

         console.log('admin emails',adminEmails)
         return users;
    } catch(error){
        if(error instanceof Error){
            console.error('an unknown error occured')
        }
        throw error;
    }
} 

processUser()
.then(users=>console.log('processing complete'))
.catch(err=>console.error('processing error',err))