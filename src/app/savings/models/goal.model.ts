export class Goal {
  constructor(
    public amount: number,
    public currency: string,
    public months: number,
    public startingMonth: number,
    public startingYear: number
  ) { }
}
