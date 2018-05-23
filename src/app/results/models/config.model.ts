export class Config {
  constructor(
    public amount: number,
    public currency: string,
    public months: number,
    public startingMonth: number,
    public startingYear: number
  ) { }

  static default(): Config {
    return new Config(
      36000,
      'USD',
      12,
      new Date().getMonth(),
      new Date().getFullYear()
    );
  }
}
