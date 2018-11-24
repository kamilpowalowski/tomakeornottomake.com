import { Goal } from './goal.model';
import { Month } from './month.model';

export class Data {
  constructor(
    public goal: Goal,
    public months: Month[]
  ) { }
}
