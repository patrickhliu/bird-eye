export interface singleQuestion {
   category: string,
   value: string,
   question: string,
   answer: string,
   map:any, // why is this needed?
}

export interface QuestionList {
  questions: Array<singleQuestion>;
}