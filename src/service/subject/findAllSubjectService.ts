import type { SubjectDto } from "../../dto/subject/subjectDto.js";
import type { ISubjectRepository } from "../../repository/subject/ISubjectRepository.js";
import type { IUserRepository } from "../../repository/user/IUserRepository.js";
import type { IFindAllSubejctService } from "./types/IFindAllSubjectService.js";




export class FindAllSubject implements IFindAllSubejctService {
  constructor(private subjectRepository:ISubjectRepository,private userRepository:IUserRepository) {}
  findAllSubject=async(idUser:string)=> {

    const user = await this.existingUser(idUser)
    if(user){
        const subjects = await this.subjectRepository.findAll(idUser) as SubjectDto[]
        return subjects
    }
    throw new Error('user inesxisting')
  }
  existingUser=async  (id: string) => {
    const user = await this.userRepository.find(id)
    if(user) {
        return true
    }
    return false
  }
}
