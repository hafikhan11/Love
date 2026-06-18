"use client";
import React, { useEffect, useState } from 'react';

type Props = {
  month: number;
  day: number;
};

function getNextBirthday(month: number, day: number) {
  const now = new Date();
  let year = now.getFullYear();
  let candidate = new Date(year, month - 1, day, 0, 0, 0);
  if (candidate <= now) year += 1;
  return new Date(year, month - 1, day, 0, 0, 0);
}

function pad(n: number) {
  return String(n).padStart(2, '0');
}

export default function BirthdayTimer({ month, day }: Props) {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const next = getNextBirthday(month, day);
  const diff = Math.max(0, next.getTime() - now.getTime());

  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return (
    <div>
      <div className="flex items-baseline gap-4">
        <div className="flex items-center gap-2">
          <div className="rounded-md bg-petal-100 px-3 py-2 text-center">
            <div className="text-3xl font-semibold text-petal-700">{pad(days)}</div>
            <div className="text-xs text-slate-600">days</div>
          </div>
        </div>

        <div className="ml-2 rounded-md bg-white/70 px-3 py-2 text-lg font-medium text-slate-900 shadow-sm">
          {pad(hours)}:{pad(minutes)}:{pad(seconds)}
        </div>
      </div>
      <div className="mt-2 text-sm text-slate-600">until Aug 17</div>
    </div>
  );
}
