import {IAuthor} from "../author/author.interface";

export interface IWriting {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: Date;
  excerpt: string;
  readTime: number;
  content: string;
  author: IAuthor;
}
