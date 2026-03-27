import z from "zod";


export const userSchema = z.object({
    id:z.string().nonempty({message:'provide a valid id.'}),
    name:z.string().min(3,{error:' provide a name with 3 or more characters.'}).nonempty(),
    email:z.email({error:'provider a valid email'}).nonempty(),
    age:z.number().min(18,{error:'Only users aged 18 and over are allowed.'}),
    password:z.string().nonempty().min(4,{error:'Enter a password with 5 or more characters.'})
})

export const userDeleteSchema = z.object({id:z.string().nonempty().min(5,{error:'provide valid id.'})})