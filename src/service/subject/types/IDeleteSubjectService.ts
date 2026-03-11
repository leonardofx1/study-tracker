import type { SubjectDto } from "../../../dto/subject/subjectDto.js";




export interface IDeleteService {
    delete:(subjectId:string) => Promise<SubjectDto>

}