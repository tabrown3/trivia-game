/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface TriviaCategoryResponse {
  trivia_categories: TriviaCategory[];
}

interface TriviaCategory {
  id: number;
  name: string;
}

interface TriviaQuestionsResponse {
  response_code: number;
  results: TriviaQuestion[];
}

interface TriviaQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
