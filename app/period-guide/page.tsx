import { ArrowLeft, Flower2, Heart, Sparkles, Droplet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Paragraph, SectionTitle } from '@/components/ui/typography';

export default function PeriodGuidePage() {
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

          <div className="flex flex-col gap-6">
            <Button href="/" variant="secondary">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back home
            </Button>
            <div className="max-w-3xl">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-petal-100 px-4 py-2 text-sm font-medium text-petal-700">
                <Heart className="h-4 w-4" /> Period guide
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Soft care for your period days.
              </h1>
              <Paragraph className="mt-6 text-lg text-slate-700">
                I want you to feel comforted, held, and safe. Here are calm, loving ideas for the days when your body needs extra care.
              </Paragraph>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <Card>
            <SectionTitle>Comfort first</SectionTitle>
            <Paragraph>
              Wrap yourself in a soft blanket, sip warm herbal tea, and let yourself slow down. Heat packs, gentle movement, and quiet help soothe your body.
            </Paragraph>
          </Card>
          <Card>
            <SectionTitle>Love and support</SectionTitle>
            <Paragraph>
              I’ll be right here with cuddles, a listening ear, and small acts of care. Whether you need space or a warm embrace, I’m with you.
            </Paragraph>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <Card>
            <SectionTitle>Sleep and rest</SectionTitle>
            <ul className="space-y-3 text-slate-700">
              <li>• Nap when your body feels heavy.</li>
              <li>• Dim the lights and play soft music.</li>
              <li>• Let go of pressure and let rest come naturally.</li>
            </ul>
          </Card>
          <Card>
            <SectionTitle>Gentle nourishing</SectionTitle>
            <ul className="space-y-3 text-slate-700">
              <li>• Warm soup or calming tea can feel soothing.</li>
              <li>• Small, wholesome snacks matter.</li>
              <li>• Hydrate with water or warm ginger tea.</li>
            </ul>
          </Card>
          <Card>
            <SectionTitle>Emotional care</SectionTitle>
            <ul className="space-y-3 text-slate-700">
              <li>• It’s okay to feel tired, sad, or irritable.</li>
              <li>• I value your feelings and I’m here to hold space.</li>
              <li>• You deserve gentleness from yourself and from me.</li>
            </ul>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="bg-petal-50">
            <SectionTitle>What I’ll do for you</SectionTitle>
            <ul className="space-y-3 text-slate-700">
              <li>• Make you a warm drink and bring it to you.</li>
              <li>• Keep your favorite snacks close by.</li>
              <li>• Share quiet time, soft music, and calm cuddles.</li>
              <li>• Offer help without making you feel pressured.</li>
              <li>• Tell you I love you, gently and truly.</li>
            </ul>
          </Card>
          <Card className="flex flex-col justify-between bg-slate-950/95 text-white">
            <div>
              <SectionTitle className="text-white">Togetherness</SectionTitle>
              <Paragraph className="mt-4 text-slate-200">
                We’ll take this one step at a time. When you want company, I’ll be there. When you want quiet, I’ll give you space. Your comfort is my priority.
              </Paragraph>
            </div>
            <div className="mt-6 flex items-center gap-3 text-slate-200">
              <Droplet className="h-5 w-5 text-petal-300" />
              <span>Warmth, tenderness, and calm support.</span>
            </div>
          </Card>
        </section>

        <section className="rounded-[1.75rem] border border-white/80 bg-slate-950/95 p-8 text-white shadow-soft backdrop-blur-xl">
          <h2 className="text-2xl font-semibold">A gentle promise</h2>
          <p className="mt-4 max-w-3xl text-slate-200/90 leading-8">
            You are loved, deeply and truly. I want these days to feel softer for you, and I’m here to care for you in every kind way I can.
          </p>
        </section>
      </div>
    </main>
  );
}
