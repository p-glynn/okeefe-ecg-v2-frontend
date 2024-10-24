import { defineQuery } from 'next-sanity';

export function fetchQuestionsByTypeQuery(questionType: string) {
  return defineQuery(`*[_type=="${questionType}"]{_id, title}`);
}
