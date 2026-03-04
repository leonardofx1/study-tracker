import type { StudySessionDto } from "../../dto/study/studyDto.js";
import type { IStudySessionRepository } from "../../repository/studySession/IStudySessionRepository.js";
import type { ISubjectRepository } from "../../repository/subject/ISubjectRepository.js";
import type { ICreateSessionService } from "./types/ICreateSessionService.js";




export class CreateSessionService implements ICreateSessionService {
    constructor(private sessionRepository:IStudySessionRepository,private subjectRepository:ISubjectRepository){

    }
create=async (session: StudySessionDto) => {
    const subject =await this.existingSubject(session.subjectId)

    if(subject){
        const resSession = await this.sessionRepository.save(session)
        return resSession
    }
    throw new Error('not created session')
}
existingSubject=async  (subjectId: string) => {
    const sub =  await this.subjectRepository.find(subjectId)
    if(sub){
        return true
    }
    return false
}

}