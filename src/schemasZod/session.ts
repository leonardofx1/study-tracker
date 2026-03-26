import z, { nonnegative } from "zod";



export const createSessionSchema = z.object({
    id:z.string(),
    sessionDuration:z.number().positive({message:'informe um valor positivo para seção de estudos.'}),
    date:z.coerce.date(),
    subjectId:z.string().min(5,{message:'informe um id de um assunto valído'})
})

export const deleteSession = z.string().min(5,{message:'informe um id valído de um assunto.'})
export const findSession = z.string().min(5,{message:'informe um id valído de um assunto.'})