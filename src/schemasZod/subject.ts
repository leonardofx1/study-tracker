import { randomUUID } from "node:crypto";
import z from "zod";



export const subjectSchema = z.object({
    id:z.string().min(5,{message:'enter a valid id.'}).default(randomUUID()),
    name:z.string().nonempty({message:'Please provide a valid topic. '}),
    idUser:z.string().min(5, {message:'enter a valid idUser.'})
})

export const subjectIdSchema =z.object({
    id:z.string().min(5,'enter a valid id.')
}) 

export const subjectIdUserSchema =z.object({
    idUser:z.string().min(5,'enter a valid id.')
}) 

