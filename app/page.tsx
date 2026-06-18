import { Flower2, Heart, Sparkles, Droplet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Paragraph, SectionTitle } from '@/components/ui/typography';
import { Typewriter } from '@/components/ui/typewriter';
import MoodNote from '@/components/mood-note';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-petal-50 via-white to-petal-100 px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 p-10 shadow-soft backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <span className="absolute left-10 top-10 h-28 w-28 rounded-full bg-petal-200/80 blur-3xl animate-float" />
            <span className="absolute right-10 top-24 h-20 w-20 rounded-full bg-petal-100/90 blur-3xl animate-float delay-1000" />
            <span className="absolute left-1/2 top-32 h-20 w-20 -translate-x-1/2 rounded-full bg-petal-300/70 blur-3xl animate-float delay-2000" />
          </div>

          <div className="absolute right-8 top-8 hidden h-28 w-28 items-center justify-center rounded-full bg-petal-100/80 shadow-soft sm:flex">
            <Flower2 className="h-16 w-16 text-petal-700" />
          </div>

          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-petal-100 px-4 py-2 text-sm font-medium text-petal-700">
              <Heart className="h-4 w-4" /> A blooming corner for you
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              You are seen, valued, and cared for.
            </h1>
            <Paragraph className="mt-6 text-lg text-slate-700">
              This space is made to remind you that it’s okay to feel everything. You deserve understanding, rest, and gentle kindness right now.
            </Paragraph>
            <Paragraph className="mt-4 text-base text-petal-700">
              I love you, and I’m here to make this time softer with hugs, warm care, and calm moments together.
            </Paragraph>
            <Paragraph className="mt-6 text-base text-slate-900">
              <Typewriter
                text={['I will hold you close', 'I will make you tea', 'I will listen with all my heart']}
                speed={60}
                waitTime={1600}
                deleteSpeed={40}
                className="text-petal-700 font-semibold"
                cursorChar="|"
              />
            </Paragraph>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#breath">Breathe with me</Button>
              <Button variant="secondary" href="#comfort">Comfort ideas</Button>
              <Button variant="secondary" href="/quiz">Take our quiz</Button>
            </div>
          </div>
        </section>

        <section id="breath" className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card>
            <SectionTitle>Take a moment to breathe</SectionTitle>
            <Paragraph>
              When emotions feel heavy, a soft breath can help. Try inhaling for four, holding for four, exhaling for six.
            </Paragraph>
          </Card>
          <Card className="bg-petal-50">
            <SectionTitle>Period guide</SectionTitle>
            <ul className="space-y-3 text-slate-700">
              <li>• Warm tea, a soft heat pack, and cozy clothes can help ease cramps.</li>
              <li>• Keep snacks nearby, rest when your body asks, and be gentle with yourself.</li>
              <li>• I’ll be here with quiet support, hugs, and whatever you need most.</li>
            </ul>
          </Card>
        </section>

        <section id="comfort" className="grid gap-6 lg:grid-cols-3">
          <Card>
            <SectionTitle>Warm comforts</SectionTitle>
            <Paragraph>Soft blankets, warm tea, calming music, and a little quiet can help soothe your mind.</Paragraph>
          </Card>
          <Card>
            <SectionTitle>Supportive words</SectionTitle>
            <Paragraph>
              I’m sorry for the pain our words caused. I want to do better, listen more, and spend soft evenings cuddling, watching your favorite shows, and taking care of you.
            </Paragraph>
          </Card>
          <Card>
            <SectionTitle>Self-care ideas</SectionTitle>
            <ul className="space-y-2 text-slate-700">
              <li>• Rest when your body asks for it.</li>
              <li>• Drink water or herbal tea.</li>
              <li>• Let yourself feel without forcing a fix.</li>
              <li>• Light a candle or play calm music.</li>
              <li>• Wrap yourself in my arms.</li>
            </ul>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="bg-petal-50">
            <SectionTitle>Self-care checklist</SectionTitle>
            <ul className="space-y-3 text-slate-700">
              <li>• Take a pause when you need it.</li>
              <li>• Drink something warm and soothing.</li>
              <li>• Let your feelings be exactly as they are.</li>
              <li>• Remember your strength in moving through this.</li>
            </ul>
          </Card>
          <Card>
            <SectionTitle>Personal apology</SectionTitle>
            <div className="rounded-[2rem] border border-white/80 bg-white/90 p-6 text-slate-800 shadow-sm">
              <p className="mb-4 text-sm uppercase tracking-[0.2em] text-petal-700">For you</p>
              <p className="leading-7">
                I am sorry for how my words landed. I understand that I hurt you, and I want to listen more carefully, be softer, and rebuild trust with kindness.
              </p>
              <p className="mt-4 leading-7">
                You deserve warmth, understanding, and space to feel calm. I care about you and I’m here when you’re ready.
              </p>
            </div>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="space-y-6">
            <SectionTitle>Quiet comfort note</SectionTitle>
            <Paragraph>
              Sometimes writing down one kind thought can help you feel grounded. Use the note area to tell yourself something soothing.
            </Paragraph>
            <MoodNote />
          </Card>
          <Card className="flex flex-col justify-between bg-slate-950/95 text-white">
            <div>
              <SectionTitle className="text-white">Soothing support</SectionTitle>
              <ul className="mt-4 space-y-3 text-slate-200">
                <li className="flex items-start gap-3">
                  <Droplet className="mt-1 h-5 w-5 text-petal-300" />
                  <span>Allow your body to rest when it needs rest.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="mt-1 h-5 w-5 text-petal-300" />
                  <span>Seek gentle moments and small joys wherever you can.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="mt-1 h-5 w-5 text-petal-300" />
                  <span>Know that you are cared for, even on the hard days.</span>
                </li>
              </ul>
            </div>
          </Card>
        </section>

        <section className="rounded-[1.75rem] border border-white/80 bg-slate-950/95 p-8 text-white shadow-soft backdrop-blur-xl">
          <h2 className="text-2xl font-semibold">A message for you</h2>
          <p className="mt-4 max-w-3xl text-slate-200/90 leading-8">
            I care about you and I care about healing our communication. I want this page to be a warm reminder that you’re not alone, and that I’m here with compassion, tenderness, and love.
          </p>
        </section>
      </div>
    </main>
  );
}
