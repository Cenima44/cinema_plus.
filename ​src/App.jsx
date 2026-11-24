import React, { useState } from 'react';
import { Film, Play, MessageCircle, Menu, X } from 'lucide-react';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappUrl =
    'https://wa.me/967772908480?text=' +
    encodeURIComponent('مرحباً Ghaithan 44، أتواصل معك بخصوص منصة Cinema Plus');

  return (
    <div dir="rtl" className="min-h-screen bg-[#060b19] text-slate-100">
      <header className="sticky top-0 z-30 border-b border-blue-900/50 bg-[#081024]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="القائمة"
              className="rounded-lg border border-blue-800/60 bg-blue-950/60 p-2 text-blue-200 hover:bg-blue-900/60"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/30">
                <Film className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold tracking-wide text-white">Cinema Plus</span>
                <span className="block text-xs text-blue-300/80">Ghaithan 44</span>
              </div>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
          >
            <MessageCircle className="h-4 w-4" />
            <span>واتساب</span>
          </a>
        </div>

        {menuOpen && (
          <nav className="border-t border-blue-900/50 bg-[#081024] px-4 py-3 text-sm">
            <div className="mx-auto flex max-w-6xl flex-col gap-2">
              <a href="#featured" onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2 hover:bg-blue-950/70">
                العروض والمحتوى
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg px-3 py-2 text-emerald-300 hover:bg-blue-950/70">
                تواصل مباشر مع Ghaithan 44
              </a>
            </div>
          </nav>
        )}
      </header>

      <main id="featured" className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-blue-800/40 bg-gradient-to-br from-[#0c1a3a] via-[#081229] to-[#050914] p-7 shadow-2xl shadow-blue-950/50 sm:p-10">
          <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-medium text-blue-300">
            منصة سينما بلس • Cinema Plus
          </span>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-5xl">
            تجربة سينمائية وإبداعية بهوية <span className="text-blue-400">Cinema Plus</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
            منصة بإدارة <strong className="text-white">Ghaithan 44</strong> بتصميم ليلي أزرق يركز على سهولة التصفح والعرض المباشر للمحتوى.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#featured"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
            >
              <Play className="h-4 w-4 fill-current" />
              <span>ابدأ الاستعراض</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-blue-700/60 bg-blue-950/50 px-5 py-3 text-sm font-semibold text-blue-200 transition hover:bg-blue-900/50"
            >
              <MessageCircle className="h-4 w-4" />
              <span>تواصل عبر واتساب</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
