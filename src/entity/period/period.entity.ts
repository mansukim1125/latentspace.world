import {IPeriod} from "@/interface/period/period.interface";

export class Period implements IPeriod {
  startDate: Date;
  endDate?: Date | undefined;

  public constructor(param: IPeriod) {
    Object.assign(this, param);
  }

  public getDurationInMonth(): Date {
  //   TODO: Implement this method.
  }

  public toPlainObject(): IPeriod {
    return {
      startDate: this.startDate,
      endDate: this.endDate,
    };
  }
}