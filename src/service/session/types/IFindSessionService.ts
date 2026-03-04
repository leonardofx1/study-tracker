import type { StudySessionDto } from "../../../dto/study/studyDto.js";

export interface IFindSessionService {
    findSession:(id:string) => Promise<StudySessionDto>
}