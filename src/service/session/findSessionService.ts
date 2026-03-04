
import type { StudySessionRepository } from "../../repository/studySession/studySessionRepository.js";
import type { IFindSessionService } from "./types/IFindSessionService.js";








export class FindSessionService implements IFindSessionService {
    constructor(private studySession:StudySessionRepository){}
    findSession=async (id:string)=> {
        const session = await this.studySession.findSession(id)

        if(session){
            return session
        }
        throw new Error('not found session')
    }
}