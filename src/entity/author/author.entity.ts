import { IAuthor } from '@/interface/author/author.interface';

export class AuthorEntity implements IAuthor {
  avatar: string;
  name: string;

  constructor(param: IAuthor) {
    this.avatar = param.avatar;
    this.name = param.name;
  }

  public toPlainObject(): IAuthor {
    return {
      avatar: this.avatar,
      name: this.name,
    };
  }
}
