import type { SubjectDto } from "../../../dto/subject/subjectDto.js";

export interface ISubject {name:string,idUser:string}
export interface IFindSubjectService {
    findSubject:(id:string)=>Promise<SubjectDto|null>
}