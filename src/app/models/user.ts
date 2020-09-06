export class User {
  constructor(
    public username: string,
    public email: string,
    public password: string,
    public confirm: string,
    public phone: string,
    public emails?: string[]
  ) {}
}
