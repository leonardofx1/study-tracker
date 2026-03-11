import type { SubjectDto } from "../../../dto/subject/subjectDto.js";



export interface ICreateSubjectService  {
    create: (subject:SubjectDto  )=> Promise<Boolean>
    existingUser:(id:string)=> void
    
}