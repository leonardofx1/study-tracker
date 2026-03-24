import type { SubjectDto } from "../../../dto/subject/subjectDto.js";



export interface IUpdateSubject {
    update:(subject:SubjectDto)=> Promise<SubjectDto>
    existingSubject:(sub:SubjectDto)=> void
}