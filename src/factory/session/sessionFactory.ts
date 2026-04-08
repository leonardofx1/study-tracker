import { SessionController } from "../../controllers/session/sessionController.js"
import { StudySessionRepository } from "../../repository/studySession/studySessionRepository.js"
import { SubjectRepository } from "../../repository/subject/subjectRepository.js"
import { CreateSessionService } from "../../service/session/createSessionService.js"
import { DeleteSessionService } from "../../service/session/deleteSessionService.js"
import { FindAllSessionService } from "../../service/session/findAllSessionService.js"
import { FindSessionService } from "../../service/session/findSessionService.js"
import { UpdateSessionService } from "../../service/session/updateSessionService.js"



export const sessionFactory = ()=> {
    const sessionRepository = new StudySessionRepository()
    const subjectRepository = new SubjectRepository()
    const createSession = new CreateSessionService(sessionRepository,subjectRepository)
    const deleteSession = new DeleteSessionService(sessionRepository)
    const findAllSession = new FindAllSessionService(sessionRepository,subjectRepository)
    const findSession = new FindSessionService(sessionRepository)
    const updateSession  = new UpdateSessionService(sessionRepository,subjectRepository)
    const session = new SessionController(createSession,deleteSession,findAllSession,findSession,updateSession)
    return session
}

const factorySessionController = sessionFactory()

export {factorySessionController}