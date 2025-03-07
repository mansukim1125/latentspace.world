import { IWriting } from '@/interface/writing/writing.interface';
import { AuthorEntity } from '@/entity/author/author.entity';

export class WritingEntity implements IWriting {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: Date;
  excerpt: string;
  readTime: number;
  content: string;
  author: AuthorEntity;

  constructor(param: IWriting) {
    this.id = param.id;
    this.title = param.title;
    this.slug = param.slug;
    this.category = param.category;
    this.date = param.date;
    this.excerpt = param.excerpt;
    this.readTime = param.readTime;
    this.content = param.content;
    this.author = new AuthorEntity(param.author);
  }

  public toPlainObject(): IWriting {
    return {
      id: this.id,
      title: this.title,
      slug: this.slug,
      category: this.category,
      date: this.date,
      excerpt: this.excerpt,
      readTime: this.readTime,
      content: this.content,
      author: this.author.toPlainObject(),
    };
  }
}
