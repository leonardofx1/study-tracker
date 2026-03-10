import type { SubjectDto } from "../../dto/subject/subjectDto.js";
import { ErrorCreatingSubject, ErrorSubjectAlreadyExists } from "../../errors/subject/subject.errors.js";
import { UserNotFoundError } from "../../errors/user/user.errors.js";
import type { ISubjectRepository } from "../../repository/subject/ISubjectRepository.js";
import type { IUserRepository } from "../../repository/user/IUserRepository.js";
import type { ICreateSubjectService } from "./types/ICreateSubjectService.js";

export class CreateSubjectService implements ICreateSubjectService {
  constructor(
    private subjectRepository: ISubjectRepository,
    private userRepository: IUserRepository,
  ) {}
  create = async (subject: SubjectDto) => {
    const alreadyExisting = await this.existingUser(subject.id);
    const exisitngSubjectForUser = await this.existingSubject(subject)

      const sub =await  this.subjectRepository.create(subject);
      if(sub){

        return true;
      }
    throw new ErrorCreatingSubject()
   
  };
  existingUser = async (idUser: string) => {
    const user = await this.userRepository.find(idUser);
    if(!user){
      throw new UserNotFoundError()
    }
  };
  existingSubject= async (subject:SubjectDto)=> { 
    const _subject = await this.subjectRepository.existingSubject(subject.name,subject.idUser)
    if(_subject){
      throw new ErrorSubjectAlreadyExists()
    }
    
  }
}
