import type { UUID } from "node:crypto";

export class UserDto {
  constructor(
    public readonly id: UUID,
    public readonly name: string,
    public readonly age: number,
  ) {}
}
