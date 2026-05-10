import { ScreenShell, I, Tag } from "./ui";

type SetRow = { i: number; t: string; prev: string; w: number; r: number; done: boolean; active?: boolean };
type Ex = { n: string; m: string; super?: boolean; sets: SetRow[] };

export function ActiveWorkout() {
  const exercises: Ex[] = [
    {
      n: "Barbell Bench Press", m: "CHEST",
      sets: [
        { i:1, t:"WARM", prev:"60×10", w:60, r:10, done:true },
        { i:2, t:"NORMAL", prev:"100×8", w:102.5, r:8, done:true },
        { i:3, t:"NORMAL", prev:"100×8", w:102.5, r:8, done:true },
        { i:4, t:"NORMAL", prev:"100×6", w:105, r:0, done:false, active:true },
      ]
    },
    {
      n: "Incline DB Press", m: "UPPER CHEST", super: true,
      sets: [
        { i:1, t:"NORMAL", prev:"30×10", w:30, r:0, done:false },
        { i:2, t:"DROPSET", prev:"30→20×8", w:30, r:0, done:false },
      ]
    },
  ];

  return (
    <ScreenShell topInset={false} className="pb-24 bg-background">
      {/* top bar */}
      <div className="pt-12 px-5 pb-3 border-b border-hairline">
        <div className="flex items-center justify-between">
          <button className="text-muted-foreground text-xs mono uppercase tracking-wider">Minimize</button>
          <button className="text-danger text-xs mono uppercase tracking-wider font-semibold">Finish ✓</button>
        </div>
        <div className="mt-2 flex items-end justify-between">
          <div>
            <div className="eyebrow">Push · Chest & Triceps</div>
            <div className="mono text-5xl font-semibold tabular-nums tracking-tighter mt-1">42:18</div>
          </div>
          <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground">
            <I.pause width={18} height={18}/>
          </button>
        </div>
        <div className="mt-3 flex gap-4 mono text-[11px] uppercase tracking-wider text-muted-foreground">
          <span>SETS <span className="text-foreground">12/18</span></span>
          <span>VOL <span className="text-foreground">4,820 kg</span></span>
          <span>HR <span className="text-accent">148</span></span>
        </div>
      </div>

      {/* rest timer banner */}
      <div className="mx-5 mt-3 p-3 rounded-2xl bg-accent text-accent-ink flex items-center justify-between">
        <div>
          <div className="mono text-[10px] uppercase tracking-wider opacity-70">Rest</div>
          <div className="mono text-2xl font-semibold tabular-nums">01:32</div>
        </div>
        <div className="flex-1 mx-4 h-2 rounded-full bg-accent-ink/20 overflow-hidden">
          <div className="h-full bg-accent-ink" style={{width:"45%"}}/>
        </div>
        <button className="mono text-[11px] uppercase font-semibold">Skip →</button>
      </div>

      <div className="px-5 mt-4 space-y-4">
        {exercises.map((ex, i) => (
          <div key={i}>
            {ex.super && <div className="ml-3 -mb-1.5 mono text-[10px] uppercase tracking-wider text-accent">↳ SUPERSET</div>}
            <div className="p-3 rounded-2xl bg-surface-2 border border-hairline">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">{ex.n}</div>
                  <div className="mono text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">{ex.m}</div>
                </div>
                <button className="text-muted-foreground"><I.more width={18} height={18}/></button>
              </div>
              <div className="mt-3">
                <div className="grid grid-cols-[24px_60px_1fr_60px_50px_28px] gap-2 mono text-[9px] uppercase tracking-wider text-muted-foreground pb-1">
                  <span>#</span><span>Type</span><span>Prev</span><span className="text-right">Kg</span><span className="text-right">Reps</span><span/>
                </div>
                {ex.sets.map((s) => (
                  <div key={s.i} className={`grid grid-cols-[24px_60px_1fr_60px_50px_28px] gap-2 items-center py-1.5 ${s.done ? "opacity-50" : ""} ${s.active ? "bg-accent/5 -mx-2 px-2 rounded-md" : ""}`}>
                    <span className="mono text-xs">{s.i}</span>
                    <span className={`text-[9px] mono uppercase tracking-wider px-1 py-0.5 rounded ${s.t==="DROPSET"?"bg-danger/20 text-danger":s.t==="WARM"?"bg-info/20 text-info":"bg-background text-muted-foreground"}`}>{s.t}</span>
                    <span className="mono text-[11px] text-muted-foreground">{s.prev}</span>
                    <span className="text-right mono text-sm">{s.w || "—"}</span>
                    <span className="text-right mono text-sm">{s.r || "—"}</span>
                    <button className={`w-6 h-6 rounded-md flex items-center justify-center ${s.done ? "bg-accent text-accent-ink" : "border border-border"}`}>
                      {s.done && <I.check width={12} height={12}/>}
                    </button>
                  </div>
                ))}
              </div>
              <button className="mt-2 w-full py-1.5 rounded-md text-xs mono uppercase tracking-wider text-muted-foreground border border-dashed border-border">+ Add set</button>
            </div>
          </div>
        ))}
        <button className="w-full py-3 rounded-2xl border border-dashed border-border text-sm text-muted-foreground flex items-center justify-center gap-2">
          <I.plus width={14} height={14}/> Add exercise
        </button>
      </div>
    </ScreenShell>
  );
}

export function WorkoutSummary() {
  return (
    <ScreenShell className="pb-8">
      <div className="px-5 pt-3">
        <div className="eyebrow">Session complete</div>
        <h1 className="text-3xl font-semibold tracking-tight mt-1">Push · Chest & Triceps</h1>
        <p className="mono text-[11px] text-muted-foreground uppercase mt-1">SUN MAY 10 · 18:42 → 19:54</p>
      </div>

      <div className="mx-5 mt-5 grid grid-cols-2 gap-2">
        {[
          {l:"Duration", v:"1:12:04"},
          {l:"Volume", v:"6,820 kg"},
          {l:"Exercises", v:"06"},
          {l:"Sets", v:"18"},
        ].map((s)=>(
          <div key={s.l} className="p-4 rounded-2xl bg-surface-2 border border-hairline">
            <div className="eyebrow">{s.l}</div>
            <div className="mono text-2xl font-semibold mt-1">{s.v}</div>
          </div>
        ))}
      </div>

      <div className="mx-5 mt-4 p-4 rounded-2xl bg-accent text-accent-ink">
        <div className="mono text-[10px] uppercase tracking-wider opacity-70">★ New personal records</div>
        <div className="mt-2 space-y-1.5">
          {[
            {n:"Bench Press", v:"105 kg × 8"},
            {n:"Tricep Pushdown", v:"42.5 kg × 12"},
          ].map(p=>(
            <div key={p.n} className="flex justify-between text-sm font-medium">
              <span>{p.n}</span><span className="mono">{p.v}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-5 mt-4">
        <span className="eyebrow">Volume by muscle</span>
        <div className="mt-2 space-y-1.5">
          {[{n:"Chest",v:80},{n:"Triceps",v:55},{n:"Shoulders",v:25}].map(m=>(
            <div key={m.n} className="flex items-center gap-2">
              <span className="text-xs w-20">{m.n}</span>
              <div className="flex-1 h-3 bg-surface-2 rounded-sm overflow-hidden">
                <div className="bg-accent h-full" style={{width:`${m.v}%`}}/>
              </div>
              <span className="mono text-[11px] w-12 text-right">{m.v*48} kg</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-5 mt-6 flex gap-2">
        <button className="flex-1 h-12 rounded-xl border border-border text-sm">Share</button>
        <button className="flex-1 h-12 rounded-xl bg-accent text-accent-ink text-sm font-semibold">Save & post</button>
      </div>
    </ScreenShell>
  );
}
