import type { StudySessionDto } from "../../dto/study/studyDto.js";
import type { IStudySessionRepository } from "../../repository/studySession/IStudySessionRepository.js";
import type { IDeleteSessionService } from "./types/IDeleteSessionService.js";




export class DeleteSessionService implements IDeleteSessionService {
    constructor(private sessionRepository:IStudySessionRepository){

    }
    delete=async (id: string) => {
        const session = await this.sessionRepository.delete(id)
        if(session){
              return session 
        }
        throw new Error('not deleted session')
    }
}