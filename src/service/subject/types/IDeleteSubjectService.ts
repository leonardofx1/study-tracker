import type { SubjectDto } from "../../../dto/subject/subjectDto.js";




export interface IDeleteSubjectService {
    delete:(subjectId:string) => Promise<SubjectDto>

}