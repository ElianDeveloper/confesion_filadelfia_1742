export interface Citation {
  citation: string;
  text: string;
}

export interface TextSegment {
  text: string;
  referenceId: string;  // Ej: "1a", "1b", "2a", etc.
}

export interface Paragraph {
  number: number;
  segments: TextSegment[];
  references: BiblicalReference[];
}

export interface BiblicalReference {
  id: string;          // Ej: "1a", "1b", "2a", etc.
  citations: Citation[];
}

export interface Chapter {
  id: number;
  title: string;
  paragraphs: Paragraph[];
}

export interface ContentChapter {
  text: string;
  references: string[];
}
