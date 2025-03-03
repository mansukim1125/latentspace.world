import {IBlogStat} from "@/interface/blog-stat/blog-stat.interface";

export class BlogStat implements IBlogStat {
  value: string;
  label: string;

  constructor(param: IBlogStat) {
    this.value = param.value;
    this.label = param.label;
  }

  toPlainObject(): IBlogStat {
    return {
      value: this.value,
      label: this.label,
    };
  }
}
