import { TallyEmbed } from "@/components/TallyEmbed";

const states = [
  {
    label: "Usual rhythm",
    tone: "slate",
    caption: "Baseline",
    detail: "Energy, sleep, and routines still feel familiar.",
    bars: [30, 28, 32, 29, 31],
  },
  {
    label: "Baseline shifts",
    tone: "amber",
    caption: "Drift",
    detail: "Small changes start stacking across several weeks.",
    bars: [34, 42, 50, 58, 64],
  },
  {
    label: "Gentle check-in",
    tone: "rose",
    caption: "Notice",
    detail: "A calmer prompt asks whether this pace is sustainable.",
    bars: [62, 68, 72, 70, 66],
  },
  {
    label: "Easier week",
    tone: "emerald",
    caption: "Return",
    detail: "Going lighter may help patterns move back toward normal.",
    bars: [58, 48, 40, 34, 30],
  },
];

const toneStyles: Record<string, string> = {
  slate: "bg-slate-200",
  amber: "bg-amber-400",
  rose: "bg-rose-400",
  emerald: "bg-emerald-500",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,_#fcfcfb_0%,_#f7f5ef_100%)] px-5 py-6 text-slate-900 sm:px-8 lg:px-10 lg:py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <header className="flex items-center rounded-full border border-slate-200/80 bg-white/70 px-3.5 py-2.5 backdrop-blur sm:px-5">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-sm font-semibold">
              A
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
                Amiburnt
              </p>
            </div>
          </div>
        </header>

        <section className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-7 shadow-[0_16px_60px_-28px_rgba(15,23,42,0.25)] backdrop-blur sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-slate-500">
                Product discovery experiment
              </p>
              <h1 className="max-w-2xl text-4xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-5xl lg:text-6xl">
                Notice burnout before it becomes your baseline.
              </h1>
              <p className="max-w-xl text-[1.02rem] leading-7 text-slate-600 sm:text-lg">
                Amiburnt is a product discovery project exploring how subtle shifts in energy, routines, sleep, focus, and motivation can reveal gradual overload before people fully crash.
              </p>
              <div className="flex flex-col gap-2.5 sm:flex-row">
                <a
                  href="#early-research"
                  className="rounded-full bg-slate-950 px-4.5 py-2.5 text-center text-sm font-medium text-white transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                >
                  Help shape the research
                </a>
                <a
                  href="#hypothesis"
                  className="rounded-full border border-slate-300 px-4.5 py-2.5 text-center text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                >
                  Read the hypothesis
                </a>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center justify-between text-sm text-slate-500">
                <span>Pattern concept</span>
                <span>Before the crash</span>
              </div>
              <div className="mt-5 grid gap-3">
                {states.map((state) => (
                  <div key={state.label} className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{state.label}</p>
                        <p className="text-sm text-slate-500">{state.detail}</p>
                      </div>
                      <span className="rounded-full px-2.5 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200">
                        {state.caption}
                      </span>
                    </div>
                    <div className="mt-3 flex h-10 items-end gap-1.5">
                      {state.bars.map((height, index) => (
                        <div
                          key={`${state.label}-${index}`}
                          className={`w-2 rounded-full ${toneStyles[state.tone]}`}
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="hypothesis" className="grid gap-3 lg:grid-cols-3">
          <article className="rounded-[1.25rem] border border-slate-200/80 bg-white/70 p-5 backdrop-blur">
            <h2 className="text-base font-semibold text-slate-950">Burnout is gradual</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              It often starts as energy drift, skipped routines, duller focus, and rest that quietly stops catching up.
            </p>
          </article>
          <article className="rounded-[1.25rem] border border-slate-200/80 bg-white/70 p-5 backdrop-blur">
            <h2 className="text-base font-semibold text-slate-950">Metrics miss the story</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Many tools show numbers. We are exploring whether people need a calmer way to notice the bigger pattern.
            </p>
          </article>
          <article className="rounded-[1.25rem] border border-slate-200/80 bg-white/70 p-5 backdrop-blur">
            <h2 className="text-base font-semibold text-slate-950">Designed for noticing</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              The goal is not another health dashboard. It is early awareness, shaped by research with people close to overload.
            </p>
          </article>
        </section>

        <section
          id="early-research"
          className="rounded-[2rem] border border-slate-200/80 bg-slate-950 px-7 py-12 text-slate-100 sm:px-8 sm:py-14 lg:px-10 lg:py-16"
        >
          <div className="mx-auto max-w-[700px]">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-slate-400">
              Early research
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
              Help Shape This Research
            </h2>
            <p className="mt-2 text-base leading-7 text-slate-400">
              This project is still in discovery. I&apos;m trying to understand how people recognize burnout, what they notice too late, and where existing tools fall short.
            </p>
            <div className="mt-4 space-y-1 text-sm leading-6 text-slate-400">
              <p>The research takes about 5 minutes.</p>
              <p>No account required. Email is optional.</p>
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl bg-white p-3">
              <TallyEmbed />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
