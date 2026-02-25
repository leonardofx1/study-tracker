import type { UUID } from "node:crypto";

export class SubjectDto {
  constructor(
    public readonly id:string,
    public readonly name: string,
    public readonly idUser: UUID,
  ) {}
}
