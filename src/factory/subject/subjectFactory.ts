import { SubjectController } from "../../controllers/subject/subjectController.js"
import { SubjectRepository } from "../../repository/subject/subjectRepository.js"
import { UserRepository } from "../../repository/user/userRepository.js"
import { CreateSubjectService } from "../../service/subject/createSubjectService.js"
import { DeleteSubjectService } from "../../service/subject/deleteSubjectService.js"
import { FindAllSubject } from "../../service/subject/findAllSubjectService.js"
import { FindSubjectService } from "../../service/subject/findSubjectService.js"
import { UpdateSubjectService } from "../../service/subject/updateSubjectService.js"



const subjectFactory = ()=>{
    const userRepository = new UserRepository()
    const subjectRepository = new SubjectRepository()
    const createSubjectService = new CreateSubjectService(subjectRepository,userRepository)
    const deleteSubjectService = new DeleteSubjectService(subjectRepository)
    const findSubjectService = new FindSubjectService(subjectRepository)
    const updateSubjectService = new UpdateSubjectService(subjectRepository,findSubjectService)
    const findAllsubjectService = new FindAllSubject(subjectRepository,userRepository)
    const subjectController = new SubjectController(createSubjectService,deleteSubjectService,updateSubjectService,findAllsubjectService,findSubjectService)
    return subjectController
}
const factorySubjectController = subjectFactory()

export {factorySubjectController}



