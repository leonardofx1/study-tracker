import type { SubjectDto } from "../../../dto/subject/subjectDto.js";



export interface IFindAllSubejctService {
    findAllSubject:(idUser:string) => Promise<SubjectDto[]>
    existingUser:(id:string)=> Promise<Boolean>
}