import type { StudySessionDto } from "../../dto/study/studyDto.js";
import type { StudySessionRepository } from "../../repository/studySession/studySessionRepository.js";
import type { SubjectRepository } from "../../repository/subject/subjectRepository.js";
import type { IUpdateSessionService } from "./types/IUpdateSessionService.js";




export class UpdateSessionService implements IUpdateSessionService {
    constructor(private sessionRepository:StudySessionRepository,private subjectRepository:SubjectRepository){

    }
    update=async  (session: StudySessionDto) => {
        const sub =  this.existingSubject(session.subjectId)
        const up = await this.sessionRepository.update(session)
        if(up){
            return up
        }
        throw new Error('not update')
    }
    existingSubject=async (subjectId: string) => {
        const sub = await this.subjectRepository.find(subjectId)
        if(!sub){
            throw new Error('not found sub')
        }
    }
}