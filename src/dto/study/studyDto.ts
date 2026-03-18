

export class StudySessionDto {
  constructor(
    public readonly id: string,
    public readonly sessionDuration: number,
    public readonly date: Date,
    public readonly subjectId: string,
  ) {}
}
