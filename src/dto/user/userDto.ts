

export class UserDto {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly age: number,
    public readonly email: string,
    public password:string,
  ) {}
}
