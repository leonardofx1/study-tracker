import type { StudySessionDto } from "../../../dto/study/studyDto.js";



export interface IUpdateSessionService {

    update:(session:StudySessionDto)=> Promise<StudySessionDto>
    existingSubject:(subjectId:string)=> void
}