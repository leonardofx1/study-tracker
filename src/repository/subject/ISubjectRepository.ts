import type { UUID } from "node:crypto";
import type { SubjectDto } from "../../dto/subject/subjectDto.js";



export interface ISubjectRepository {
    create:(subject:SubjectDto)=> Promise<SubjectDto|null>
    delete:(id:string)=>Promise<SubjectDto>
    update:(subject:SubjectDto) => Promise<SubjectDto|null>
    find:(id:string)=>Promise<SubjectDto|null>
    findAll:(userId:string)=>Promise<SubjectDto[]|null>
}