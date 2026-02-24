import type { UUID } from "node:crypto";
import type { SubjectDto } from "../../dto/subject/subjectDto.js";



export interface ISubjectRepository {
    create:(subject:SubjectDto)=> Promise<SubjectDto>
    delete:(id:UUID)=>Promise<SubjectDto>
    update:(subject:SubjectDto) => Promise<SubjectDto>
    find:(id:string)=>Promise<SubjectDto|null>
    findAll:(userId:UUID)=>Promise<SubjectDto[]|null>
}