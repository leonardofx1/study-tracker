import type { StudySessionDto } from "../../../dto/study/studyDto.js";



export interface IDeleteSessionService {
    delete:(id:string)=> Promise<string>
}