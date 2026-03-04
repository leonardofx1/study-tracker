import type { StudySessionDto } from "../../../dto/study/studyDto.js";



export interface ICreateSessionService {
    create:(session:StudySessionDto)=> Promise<StudySessionDto>
    existingSubject:(subjectId:string)=>Promise<Boolean> 
}