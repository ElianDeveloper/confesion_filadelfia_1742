export interface Book {
  title: string;
  chapters: Chapter[];
}

export interface Chapter {
  id: number;
  title: string;
  content: string;
  verses: string[];
}

export interface ContentChapter {
  text: string;
  references: string[];
}
