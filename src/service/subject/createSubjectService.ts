import type { SubjectDto } from "../../dto/subject/subjectDto.js";
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
    if (alreadyExisting && !exisitngSubjectForUser) {
      this.subjectRepository.create(subject);
      return true;
    }
    return false;
  };
  existingUser = async (idUser: string) => {
    const user = await this.userRepository.find(idUser);
    return user ? true : false;
  };
  existingSubject= async (subject:SubjectDto)=> { 
    const _subject = await this.subjectRepository.existingSubject(subject.name,subject.idUser)
    return _subject?true :false
  }
}
