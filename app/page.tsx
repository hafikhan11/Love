import { Flower2, Heart, Sparkles, Droplet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Paragraph, SectionTitle } from '@/components/ui/typography';
import { Typewriter } from '@/components/ui/typewriter';
import MoodNote from '@/components/mood-note';
import BirthdayTimer from '@/components/birthday-timer';

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-petal-50 via-white to-petal-100 px-6 py-10 sm:px-10">
      {/* Site-wide decorative hearts (non-interactive) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/** Top band */}
        <Heart className="heart heart-pulse-1 heart-float-2 text-petal-300 absolute h-4 w-4 responsive-hide-sm" style={{ left: '4%', top: '8%' }} aria-hidden />
        <Heart className="heart heart-pulse-2 heart-float-1 text-petal-400 absolute h-5 w-5" style={{ left: '14%', top: '6%' }} aria-hidden />
        <Heart className="heart heart-pulse-3 heart-float-3 text-petal-500 absolute h-6 w-6" style={{ left: '24%', top: '12%' }} aria-hidden />
        <Heart className="heart heart-pulse-1 heart-float-4 text-petal-400 absolute h-4 w-4" style={{ left: '34%', top: '4%' }} aria-hidden />
        <Heart className="heart heart-pulse-2 heart-float-2 text-petal-300 absolute h-5 w-5" style={{ left: '46%', top: '10%' }} aria-hidden />
        <Heart className="heart heart-pulse-3 heart-float-1 text-petal-500 absolute h-6 w-6" style={{ left: '58%', top: '6%' }} aria-hidden />
        <Heart className="heart heart-pulse-2 heart-float-3 text-petal-400 absolute h-4 w-4 responsive-hide-sm" style={{ left: '70%', top: '14%' }} aria-hidden />
        <Heart className="heart heart-pulse-1 heart-float-2 text-petal-300 absolute h-5 w-5" style={{ left: '82%', top: '8%' }} aria-hidden />

        {/** Middle band */}
        <Heart className="heart heart-pulse-3 heart-float-1 text-petal-300 absolute h-4 w-4" style={{ left: '6%', top: '36%' }} aria-hidden />
        <Heart className="heart heart-pulse-2 heart-float-2 text-petal-400 absolute h-5 w-5" style={{ left: '18%', top: '44%' }} aria-hidden />
        <Heart className="heart heart-pulse-1 heart-float-3 text-petal-500 absolute h-6 w-6" style={{ left: '30%', top: '40%' }} aria-hidden />
        <Heart className="heart heart-pulse-2 heart-float-4 text-petal-400 absolute h-4 w-4" style={{ left: '42%', top: '46%' }} aria-hidden />
        <Heart className="heart heart-pulse-3 heart-float-1 text-petal-300 absolute h-5 w-5" style={{ left: '54%', top: '38%' }} aria-hidden />
        <Heart className="heart heart-pulse-1 heart-float-2 text-petal-500 absolute h-6 w-6 responsive-hide-sm" style={{ left: '66%', top: '50%' }} aria-hidden />
        <Heart className="heart heart-pulse-2 heart-float-3 text-petal-400 absolute h-4 w-4" style={{ left: '78%', top: '42%' }} aria-hidden />

        {/** Bottom band */}
        <Heart className="heart heart-pulse-1 heart-float-1 text-petal-500 absolute h-6 w-6" style={{ left: '8%', top: '72%' }} aria-hidden />
        <Heart className="heart heart-pulse-2 heart-float-2 text-petal-400 absolute h-5 w-5" style={{ left: '22%', top: '80%' }} aria-hidden />
        <Heart className="heart heart-pulse-3 heart-float-3 text-petal-300 absolute h-4 w-4 responsive-hide-sm" style={{ left: '36%', top: '74%' }} aria-hidden />
        <Heart className="heart heart-pulse-1 heart-float-4 text-petal-500 absolute h-5 w-5" style={{ left: '52%', top: '82%' }} aria-hidden />
        <Heart className="heart heart-pulse-2 heart-float-2 text-petal-400 absolute h-4 w-4" style={{ left: '68%', top: '76%' }} aria-hidden />
        <Heart className="heart heart-pulse-3 heart-float-1 text-petal-300 absolute h-5 w-5" style={{ left: '84%', top: '78%' }} aria-hidden />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 p-10 shadow-soft backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0 z-0">
            <span className="absolute left-6 top-8 h-28 w-28 rounded-full bg-petal-200/80 blur-3xl animate-float" />
            <span className="absolute right-10 top-24 h-20 w-20 rounded-full bg-petal-100/90 blur-3xl animate-float delay-1000" />
            <span className="absolute left-1/2 top-28 h-20 w-20 -translate-x-1/2 rounded-full bg-petal-300/70 blur-3xl animate-float delay-2000" />

            {/* tiny fluttering hearts */}
            <div className="absolute left-12 top-14 z-0">
              <Heart className="heart h-5 w-5 text-petal-500 heart-float-1" />
            </div>
            <div className="absolute right-20 top-8 z-0">
              <Heart className="heart h-4 w-4 text-petal-400 heart-float-2" />
            </div>
            <div className="absolute left-1/3 top-6 z-0">
              <Heart className="heart h-6 w-6 text-petal-600 heart-float-3" />
            </div>
            <div className="absolute right-8 top-40 z-0">
              <Heart className="heart h-4 w-4 text-petal-500 heart-float-4" />
            </div>
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

        <section className="grid gap-6 lg:grid-cols-2 items-start">
          <Card>
            <SectionTitle>Countdown to her birthday</SectionTitle>
            <div className="mt-4">
              <BirthdayTimer month={8} day={17} />
            </div>
          </Card>

          <Card className="space-y-4">
            <SectionTitle>A small love letter</SectionTitle>
            <div className="text-slate-700">
              <p>
                My love — each day with you feels like the gentlest kind of home. Your smile brightens small moments and your courage reminds me how lucky I am. On your birthday I’ll make you laugh, hold you close, and remind you how deeply cherished you are.
              </p>
              <p className="mt-3 text-sm text-slate-600">Always yours,</p>
              <p className="text-petal-700 font-semibold">Hafi</p>
            </div>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <Card className="text-center">
            <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-full bg-petal-100 p-4">
              <Flower2 className="h-6 w-6 text-petal-700" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Warmth</h3>
            <Paragraph className="mt-2 text-slate-700">Warm drinks, heat packs, and gentle cuddles whenever you need them.</Paragraph>
          </Card>
          <Card className="text-center">
            <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-full bg-petal-100 p-4">
              <Sparkles className="h-6 w-6 text-petal-700" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Listening</h3>
            <Paragraph className="mt-2 text-slate-700">I’ll listen with patience, no judgment — just care and understanding.</Paragraph>
          </Card>
          <Card className="text-center">
            <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-full bg-petal-100 p-4">
              <Heart className="h-6 w-6 text-petal-700" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Cozy nights</h3>
            <Paragraph className="mt-2 text-slate-700">Soft blankets, your favorite show, and warm company to help you unwind.</Paragraph>
          </Card>
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
