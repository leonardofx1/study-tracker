import type { UUID } from "node:crypto";
import type { StudySessionDto } from "../../dto/study/studyDto.js";


export interface IStudySessionRepository {
    save:(session:StudySessionDto) => Promise<StudySessionDto >
    findSession:(id:string) => Promise<StudySessionDto|null >
    delete:(id:string)=>Promise<string | null>
    findAllSession:(subjectId:string)=> Promise<StudySessionDto[]|null>
    update:(session:StudySessionDto)=> Promise<StudySessionDto|null>
}