'use client';

import { useState } from 'react';
import { Heart, Smile, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Paragraph, SectionTitle } from '@/components/ui/typography';

const questions = [
  'What will be our children’s name? (1 boy, 1 girl)',
  'What is Bisma’s birthday?',
  'What is Hafi’s birthday?',
  'When is our anniversary?',
  'When did we go to Centaurus Mall and browse through our children clothing?',
];

export default function QuizPage() {
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(''));
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-petal-50 via-white to-petal-100 px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <section className="rounded-[2rem] border border-white/80 bg-white/75 p-10 shadow-soft backdrop-blur-xl">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-3 rounded-full bg-petal-100 px-4 py-2 text-sm font-medium text-petal-700">
              <Heart className="h-4 w-4" /> Our sweet quiz
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              A gentle little quiz about us.
            </h1>
            <Paragraph className="text-lg text-slate-700">
              See how well you remember our cozy moments. It’s just for fun and full of love.
            </Paragraph>
            <div className="flex flex-wrap gap-4">
              <Button href="/">Back home</Button>
            </div>
          </div>
        </section>

        <section className="grid gap-6">
          {questions.map((question, index) => (
            <Card key={index} className="space-y-4">
              <SectionTitle className="text-xl">{question}</SectionTitle>
              <textarea
                value={answers[index]}
                onChange={(event) => {
                  const next = [...answers];
                  next[index] = event.target.value;
                  setAnswers(next);
                  setSubmitted(false);
                }}
                rows={4}
                className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-4 text-slate-900 shadow-sm outline-none transition focus:border-petal-300 focus:ring-2 focus:ring-petal-100"
                placeholder="Write your answer here..."
              />
            </Card>
          ))}
        </section>

        <section className="rounded-[2rem] border border-white/80 bg-petal-50 p-8 shadow-soft backdrop-blur-xl">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-slate-900">
              <Sparkles className="h-5 w-5 text-petal-700" />
              <p className="text-base font-semibold">A sweet finish</p>
            </div>
            <Paragraph>
              Write the things that feel most true for us. Every answer you give is perfect, because it comes from our love.
            </Paragraph>
            <div className="flex flex-wrap gap-3">
              <Button
                href="#"
                variant="secondary"
                onClick={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                }}
              >
                Save my love answers
              </Button>
              <Button href="/">Go back home</Button>
            </div>
            {submitted ? (
              <div className="rounded-3xl bg-white p-5 text-slate-900 shadow-sm">
                <p className="text-lg font-semibold">Thank you for sharing.</p>
                <p className="mt-2 text-slate-700">
                  Every answer you wrote is beautiful. This is our love story, and I treasure every word.
                </p>
              </div>
            ) : null}
          </div>
        </section>
      </div>
    </main>
  );
}
