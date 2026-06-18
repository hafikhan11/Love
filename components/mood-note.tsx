'use client';

import { useState } from 'react';

export default function MoodNote() {
  const [note, setNote] = useState('');
  const [saved, setSaved] = useState(false);

  return (
    <div className="space-y-4">
      <p className="text-slate-700">
        Write a quiet note for the day: something you want to hold close, release, or simply remember.
      </p>
      <textarea
        value={note}
        onChange={(event) => {
          setNote(event.target.value);
          setSaved(false);
        }}
        rows={5}
        className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-petal-300 focus:ring-2 focus:ring-petal-100"
        placeholder="Hafi and Bisma cuddling with kisses :)"
      />
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => setSaved(true)}
          className="inline-flex items-center justify-center rounded-full bg-petal-600 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-petal-700 focus:outline-none focus:ring-2 focus:ring-petal-400"
        >
          Keep this note
        </button>
        {saved ? <span className="text-sm text-petal-700">Your note is held close.</span> : null}
      </div>
    </div>
  );
}
