import { ScreenShell, I, ProgressBar, Avatar, PHOTOS } from "./ui";

export function Dashboard() {
  return (
    <ScreenShell className="pb-24">
      {/* header */}
      <div className="px-5 pt-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-accent text-accent-ink mono font-black flex items-center justify-center text-sm">E</div>
          <span className="mono text-[11px] uppercase tracking-wider text-muted-foreground">EPOCH</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 border border-accent/30">
          <I.flame width={12} height={12} className="text-accent"/>
          <span className="mono text-xs font-semibold text-accent">42</span>
        </div>
      </div>

      <div className="px-5 mt-4">
        <h1 className="text-3xl font-semibold tracking-tight">Hey, Marcus.</h1>
        <p className="mono text-[11px] uppercase tracking-wider text-muted-foreground mt-1">Sunday · May 10, 2026</p>
      </div>

      {/* week strip */}
      <div className="px-5 mt-5">
        <div className="grid grid-cols-7 gap-1.5">
          {["M","T","W","T","F","S","S"].map((d, i) => {
            const today = i === 6;
            const logged = [0,1,2,4,6].includes(i);
            return (
              <div key={i} className={`aspect-[3/4] rounded-xl flex flex-col items-center justify-center ${today ? "bg-accent text-accent-ink" : "bg-surface-2"}`}>
                <span className="mono text-[10px] uppercase">{d}</span>
                <span className="mono text-base font-semibold mt-0.5">{4+i}</span>
                {logged && <span className={`w-1 h-1 rounded-full mt-1 ${today ? "bg-accent-ink" : "bg-accent"}`}/>}
              </div>
            );
          })}
        </div>
      </div>

      {/* calorie ring */}
      <div className="mx-5 mt-5 p-5 rounded-3xl bg-surface-2 border border-hairline">
        <div className="flex items-center justify-between">
          <span className="eyebrow">Energy · kcal</span>
          <span className="mono text-[11px] text-muted-foreground">2,400 GOAL</span>
        </div>
        <div className="flex items-center gap-5 mt-3">
          <div className="relative w-28 h-28">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r="42" fill="none" stroke="oklch(0.30 0.005 150)" strokeWidth="8"/>
              <circle cx="50" cy="50" r="42" fill="none" stroke="oklch(0.90 0.21 128)" strokeWidth="8" strokeDasharray="264" strokeDashoffset="62" strokeLinecap="round"/>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="mono text-2xl font-semibold">1,840</span>
              <span className="mono text-[10px] text-muted-foreground uppercase">eaten</span>
            </div>
          </div>
          <div className="flex-1 space-y-2.5">
            {[
              { l: "Protein", v: 142, m: 180, u: "g" },
              { l: "Carbs", v: 210, m: 280, u: "g" },
              { l: "Fat", v: 58, m: 75, u: "g" },
            ].map((m) => (
              <div key={m.l}>
                <div className="flex justify-between text-[11px] mono uppercase">
                  <span className="text-muted-foreground">{m.l}</span>
                  <span><span className="text-foreground">{m.v}</span>/{m.m}{m.u}</span>
                </div>
                <ProgressBar value={m.v} max={m.m} accent height={3}/>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* water */}
      <div className="mx-5 mt-3 p-4 rounded-3xl bg-surface-2 border border-hairline flex items-center gap-4">
        <div>
          <span className="eyebrow">Water</span>
          <div className="mono text-2xl font-semibold mt-1">5<span className="text-muted-foreground text-base">/8</span></div>
        </div>
        <div className="flex-1 flex gap-1">
          {Array.from({length: 8}).map((_, i) => (
            <div key={i} className={`flex-1 h-10 rounded-md ${i < 5 ? "bg-info" : "bg-background border border-hairline"}`}/>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <button className="w-8 h-8 rounded-full bg-accent text-accent-ink flex items-center justify-center"><I.plus width={14} height={14}/></button>
          <button className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground"><I.minus width={14} height={14}/></button>
        </div>
      </div>

      {/* meals */}
      <div className="mx-5 mt-5">
        <div className="flex items-center justify-between mb-2">
          <span className="eyebrow">Meals</span>
          <span className="mono text-[10px] text-muted-foreground">04 SLOTS</span>
        </div>
        <div className="space-y-2">
          {[
            { n: "Breakfast", k: 420, items: ["Oats + berries", "Greek yogurt"] },
            { n: "Lunch", k: 680, items: ["Grilled chicken bowl", "Tahini drizzle"] },
            { n: "Dinner", k: 0, items: [] },
            { n: "Snacks", k: 240, items: ["Protein bar"] },
          ].map((m) => (
            <div key={m.n} className="p-3 rounded-2xl bg-surface-2 border border-hairline">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">{m.n}</div>
                  <div className="mono text-[11px] text-muted-foreground uppercase">{m.k} kcal · {m.items.length} items</div>
                </div>
                <button className="w-7 h-7 rounded-full bg-accent text-accent-ink flex items-center justify-center"><I.plus width={12} height={12}/></button>
              </div>
              {m.items.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {m.items.map((it) => (
                    <span key={it} className="text-[11px] px-2 py-0.5 rounded-md bg-background text-muted-foreground">{it}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* workout */}
      <div className="mx-5 mt-5 p-4 rounded-3xl bg-accent text-accent-ink">
        <div className="flex items-center justify-between">
          <span className="mono text-[10px] uppercase tracking-wider">Today's session · live</span>
          <span className="w-2 h-2 rounded-full bg-accent-ink animate-pulse"/>
        </div>
        <div className="mt-2 text-xl font-semibold">Push · Chest & Triceps</div>
        <div className="flex items-end gap-4 mt-3">
          <div>
            <div className="mono text-[10px] uppercase opacity-70">Elapsed</div>
            <div className="mono text-2xl font-semibold tabular-nums">42:18</div>
          </div>
          <div>
            <div className="mono text-[10px] uppercase opacity-70">Sets</div>
            <div className="mono text-2xl font-semibold">12<span className="text-sm opacity-60">/18</span></div>
          </div>
          <div>
            <div className="mono text-[10px] uppercase opacity-70">Exercises</div>
            <div className="mono text-2xl font-semibold">04<span className="text-sm opacity-60">/06</span></div>
          </div>
        </div>
      </div>

      {/* muscle map */}
      <div className="mx-5 mt-5 mb-8 p-4 rounded-3xl bg-surface-2 border border-hairline">
        <div className="flex items-center justify-between mb-3">
          <span className="eyebrow">Muscle map · this week</span>
          <span className="mono text-[10px] text-muted-foreground">07 GROUPS</span>
        </div>
        <div className="flex justify-around">
          <MuscleBody front/>
          <MuscleBody/>
        </div>
        <div className="mt-3 flex flex-wrap gap-1">
          {["Chest","Triceps","Quads","Lats","Glutes"].map((t) => (
            <span key={t} className="text-[10px] px-2 py-0.5 rounded-md bg-accent/15 text-accent mono uppercase tracking-wider">{t}</span>
          ))}
        </div>
      </div>

      {/* fab */}
      <div className="absolute bottom-6 right-5 w-14 h-14 rounded-full bg-accent text-accent-ink flex items-center justify-center shadow-2xl">
        <I.plus width={22} height={22}/>
      </div>
    </ScreenShell>
  );
}

export function MuscleBody({ front = false }: { front?: boolean }) {
  return (
    <svg viewBox="0 0 80 160" width="70" height="140" className="text-muted-foreground">
      <g fill="currentColor" opacity="0.25">
        <circle cx="40" cy="14" r="10"/>
        <rect x="28" y="24" width="24" height="8" rx="3"/>
        <rect x="20" y="32" width="40" height="36" rx="6"/>
        <rect x="14" y="36" width="10" height="36" rx="4"/>
        <rect x="56" y="36" width="10" height="36" rx="4"/>
        <rect x="22" y="68" width="36" height="28" rx="4"/>
        <rect x="24" y="96" width="14" height="40" rx="5"/>
        <rect x="42" y="96" width="14" height="40" rx="5"/>
        <rect x="26" y="136" width="12" height="14" rx="3"/>
        <rect x="42" y="136" width="12" height="14" rx="3"/>
      </g>
      {/* highlights */}
      <g fill="oklch(0.90 0.21 128)" opacity="0.85">
        {front ? (
          <>
            <rect x="22" y="34" width="36" height="14" rx="5"/>
            <rect x="14" y="48" width="10" height="14" rx="3"/>
            <rect x="56" y="48" width="10" height="14" rx="3"/>
            <rect x="24" y="98" width="14" height="22" rx="4"/>
            <rect x="42" y="98" width="14" height="22" rx="4"/>
          </>
        ) : (
          <>
            <rect x="22" y="34" width="36" height="22" rx="6"/>
            <rect x="22" y="68" width="36" height="14" rx="4"/>
            <rect x="24" y="120" width="14" height="16" rx="4"/>
            <rect x="42" y="120" width="14" height="16" rx="4"/>
          </>
        )}
      </g>
    </svg>
  );
}
