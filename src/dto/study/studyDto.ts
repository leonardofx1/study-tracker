

export class StudySessionDto {
  constructor(
    public readonly id: string,
    public readonly sessionDuration: number,
    public readonly date: string,
    public readonly subjectId: string,
  ) {}
}
