// import { Suspense } from 'react';
import { robotoFlex } from '@/app/ui/fonts';
// import Search from '../ui/search';
import { client } from '@/app/sanity/lib/client';
import { fetchQuestionsByTypeQuery } from '@/app/sanity/lib/queries';
import { Question } from '@/app/lib/definitions';

export default async function Page() {
  const questions = await client.fetch(fetchQuestionsByTypeQuery('ecg'));

  return (
    <main>
      <h1 className={`${robotoFlex} mb-4 text-xl md:text-2xl`}>Questions</h1>
      <div className="mb-4">{/* <Search placeholder="Enter a search term..." /> */}</div>
      <ul>
        {questions.map((question: Question) => (
          <li key={question._id}>
            <a href={`/posts/${question?._id}`}>{question?.title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
