import {Author} from "@/app/types/author/author";

export interface Writing {
  title: string;
  slug: string;
  category: string;
  date: Date;
  excerpt: string;
  readTime: number;
  content: string;
  author: Author;
}
