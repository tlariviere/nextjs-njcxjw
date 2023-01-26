export interface Language {
  id: number | string;
  name?: string;
  yearCreation: number;
  category: "good" | "bad";
  typing: "none" | "weak" | "strong";
}

export interface LanguageTreeNode extends Language {
  parentLanguage: Pick<Language, "id">;
}

export interface Project {
  id: number | string;
  startDate: Date;
  nbrApps: number;
  languages: LanguageTreeNode[];
}
