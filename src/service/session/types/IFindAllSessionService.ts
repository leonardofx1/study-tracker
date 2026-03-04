import type { StudySessionDto } from "../../../dto/study/studyDto.js";


export interface IFindAllSessionService {
    findAll:(subjectId:string) => Promise<StudySessionDto[]>
    existingSubject:(subjectId:string)=>void
}