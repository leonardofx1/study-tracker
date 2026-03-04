import type { StudySessionDto } from "../../dto/study/studyDto.js";
import type { IStudySessionRepository } from "../../repository/studySession/IStudySessionRepository.js";
import type { ISubjectRepository } from "../../repository/subject/ISubjectRepository.js";
import type { IFindAllSessionService } from "./types/IFindAllSessionService.js";




export class FindAllSessionService implements IFindAllSessionService{
    constructor(private sessionRepository:IStudySessionRepository,private subjectRepository:ISubjectRepository){

    }
    findAll=async (subjectId:string)=> {
        const existing = this.existingSubject(subjectId)

           const sessions = await  this.sessionRepository.findAllSession(subjectId)
           if(sessions){
           return sessions}
     
        throw new Error('not found sessions')
    }
    existingSubject= async(subjectId: string) => {
        const sub = await this.subjectRepository.find(subjectId)
        if(!sub){
            throw new Error('not found subject')
        }

    }
}