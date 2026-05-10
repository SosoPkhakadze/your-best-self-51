import { ScreenShell, I, Btn } from "./ui";

export function AddWorkout() {
  return (
    <ScreenShell className="pb-8">
      <div className="px-5 pt-3 flex items-center gap-3">
        <button className="text-muted-foreground"><I.back width={20} height={20}/></button>
        <h1 className="text-lg font-semibold">New session</h1>
      </div>

      <div className="px-5 mt-4 grid grid-cols-3 gap-2">
        {[
          { n:"Blank", d:"Start fresh", icon:"+" },
          { n:"Splits", d:"PPL, U/L…", icon:"≡" },
          { n:"Templates", d:"Saved", icon:"☆" },
        ].map((c, i) => (
          <div key={c.n} className={`p-3 rounded-2xl border ${i===1 ? "border-accent bg-accent/5" : "border-hairline bg-surface-2"} aspect-[3/4] flex flex-col`}>
            <div className="mono text-3xl">{c.icon}</div>
            <div className="flex-1"/>
            <div className="text-sm font-medium">{c.n}</div>
            <div className="text-[10px] mono uppercase text-muted-foreground">{c.d}</div>
          </div>
        ))}
      </div>

      <div className="px-5 mt-5">
        <span className="eyebrow">Choose split</span>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {[
            { n:"Push", g:"Chest · Shoulders · Triceps" },
            { n:"Pull", g:"Back · Biceps · Rear delts" },
            { n:"Legs", g:"Quads · Hams · Glutes" },
            { n:"Upper", g:"All upper body" },
            { n:"Lower", g:"Quads · Glutes · Calves" },
            { n:"Core / Cardio", g:"Abs · Conditioning" },
          ].map((s, i) => (
            <div key={s.n} className={`p-3 rounded-2xl border ${i===0 ? "border-accent bg-accent/5" : "border-hairline bg-surface-2"}`}>
              <div className="text-base font-semibold">{s.n}</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">{s.g}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 mt-5">
        <span className="eyebrow">Exercise library</span>
        <div className="mt-2 h-10 rounded-xl bg-surface-2 px-3 flex items-center gap-2">
          <I.search width={14} height={14} className="text-muted-foreground"/>
          <span className="text-xs text-muted-foreground">Search exercises…</span>
        </div>
        <div className="flex gap-1.5 mt-2 overflow-x-auto no-scrollbar">
          {["Chest","Back","Shoulders","Arms","Legs","Core","Glutes"].map((c, i) => (
            <span key={c} className={`shrink-0 px-2.5 py-1 rounded-full mono text-[10px] uppercase tracking-wider ${i===0?"bg-accent text-accent-ink":"bg-surface-2 text-muted-foreground"}`}>{c}</span>
          ))}
        </div>
        <div className="mt-3 space-y-1.5">
          {[
            { n:"Barbell Bench Press", m:"Chest · Triceps", e:"Barbell", on:true },
            { n:"Incline DB Press", m:"Upper Chest", e:"Dumbbells", on:true },
            { n:"Cable Fly", m:"Chest", e:"Cables" },
            { n:"Tricep Pushdown", m:"Triceps", e:"Cables", on:true },
            { n:"Overhead Press", m:"Shoulders", e:"Barbell" },
          ].map((ex) => (
            <div key={ex.n} className="p-3 rounded-xl bg-surface-2 border border-hairline flex items-center gap-3">
              <span className={`w-5 h-5 rounded-md border ${ex.on ? "bg-accent border-accent" : "border-border"} flex items-center justify-center`}>
                {ex.on && <I.check width={12} height={12} className="text-accent-ink"/>}
              </span>
              <div className="flex-1">
                <div className="text-sm font-medium">{ex.n}</div>
                <div className="mono text-[10px] uppercase tracking-wider text-muted-foreground">{ex.m} · {ex.e}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 mt-5"><Btn className="w-full">Add 3 exercises →</Btn></div>
    </ScreenShell>
  );
}
