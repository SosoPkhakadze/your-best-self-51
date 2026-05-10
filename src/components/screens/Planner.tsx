import { ScreenShell, I, ProgressBar, PHOTOS, Avatar } from "./ui";

export function PlannerNutrition() {
  return (
    <ScreenShell className="pb-8">
      <div className="px-5 pt-3 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Planner</h1>
        <div className="flex items-center gap-1.5"><span className="w-7 h-7 rounded-full bg-surface-2 flex items-center justify-center"><I.search width={14} height={14}/></span></div>
      </div>
      <div className="px-5 mt-3">
        <div className="inline-flex bg-surface-2 rounded-full p-1 text-sm">
          <span className="px-4 py-1.5 rounded-full bg-accent text-accent-ink font-medium">Nutrition</span>
          <span className="px-4 py-1.5 text-muted-foreground">Training</span>
        </div>
      </div>
      <div className="px-5 mt-4 flex items-center justify-between">
        <button className="text-muted-foreground"><I.back width={18} height={18}/></button>
        <span className="mono text-xs uppercase tracking-wider">Sun · May 10</span>
        <button className="text-muted-foreground rotate-180"><I.back width={18} height={18}/></button>
      </div>

      <div className="mx-5 mt-3 p-5 rounded-3xl bg-surface-2 border border-hairline text-center">
        <span className="eyebrow">Calories remaining</span>
        <div className="mono text-5xl font-semibold mt-1 tracking-tighter">560</div>
        <div className="mono text-[11px] text-muted-foreground mt-1">2,400 GOAL · 1,840 EATEN</div>
        <div className="mt-4 space-y-2 text-left">
          {[{l:"Protein",v:142,m:180},{l:"Carbs",v:210,m:280},{l:"Fat",v:58,m:75}].map((m)=>(
            <div key={m.l}>
              <div className="flex justify-between mono text-[11px] uppercase">
                <span className="text-muted-foreground">{m.l}</span>
                <span>{m.v}<span className="text-muted-foreground">/{m.m}g</span></span>
              </div>
              <ProgressBar value={m.v} max={m.m} accent height={4}/>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-5 mt-4 space-y-2">
        {[
          { n:"Breakfast", k:420, items:[{n:"Rolled oats",s:"80g",k:300},{n:"Blueberries",s:"100g",k:57},{n:"Almond milk",s:"200ml",k:63}] },
          { n:"Lunch", k:680, items:[{n:"Chicken breast",s:"180g",k:297},{n:"Brown rice",s:"150g",k:165},{n:"Mixed greens + olive oil",s:"1 bowl",k:218}] },
          { n:"Dinner", k:0, items:[] },
          { n:"Snacks", k:240, items:[{n:"Whey protein bar",s:"1 bar",k:240}] },
        ].map((m) => (
          <div key={m.n} className="rounded-2xl bg-surface-2 border border-hairline overflow-hidden">
            <div className="p-3 flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">{m.n}</div>
                <div className="mono text-[11px] text-muted-foreground uppercase">{m.k} kcal</div>
              </div>
              <button className="w-7 h-7 rounded-full bg-accent text-accent-ink flex items-center justify-center"><I.plus width={12} height={12}/></button>
            </div>
            {m.items.length > 0 && (
              <div className="border-t border-hairline divide-y divide-[var(--hairline)]">
                {m.items.map((it,i) => (
                  <div key={i} className="px-3 py-2 flex items-center justify-between">
                    <div>
                      <div className="text-sm">{it.n}</div>
                      <div className="mono text-[10px] text-muted-foreground uppercase">{it.s}</div>
                    </div>
                    <div className="mono text-xs">{it.k} kcal</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mx-5 mt-4 p-4 rounded-2xl border border-hairline flex items-center justify-between">
        <span className="eyebrow">Daily total</span>
        <span className="mono text-lg font-semibold">1,840 kcal</span>
      </div>
    </ScreenShell>
  );
}

export function PlannerTraining() {
  const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  const plan = ["Push","Pull","Legs","Rest","Push","Pull","Legs"];
  return (
    <ScreenShell className="pb-8">
      <div className="px-5 pt-3 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Planner</h1>
      </div>
      <div className="px-5 mt-3">
        <div className="inline-flex bg-surface-2 rounded-full p-1 text-sm">
          <span className="px-4 py-1.5 text-muted-foreground">Nutrition</span>
          <span className="px-4 py-1.5 rounded-full bg-accent text-accent-ink font-medium">Training</span>
        </div>
      </div>

      <div className="px-5 mt-4">
        <span className="eyebrow">Week of May 4</span>
        <div className="mt-2 grid grid-cols-7 gap-1.5">
          {days.map((d, i) => {
            const today = i === 6;
            return (
              <div key={d} className={`p-2 rounded-xl border ${today ? "border-accent bg-accent/5" : "border-hairline bg-surface-2"} flex flex-col items-center text-center min-h-[110px]`}>
                <span className="mono text-[10px] uppercase text-muted-foreground">{d}</span>
                <span className="mono text-base font-semibold mt-0.5">{4+i}</span>
                <div className="flex-1"/>
                {plan[i] === "Rest" ? (
                  <span className="mono text-[10px] text-muted-foreground">REST</span>
                ) : (
                  <span className={`text-[10px] mono uppercase tracking-wider px-1.5 py-0.5 rounded-md ${today ? "bg-accent text-accent-ink" : "bg-background"}`}>{plan[i]}</span>
                )}
                <button className="mt-1 w-5 h-5 rounded-full bg-background/50 flex items-center justify-center text-muted-foreground"><I.plus width={10} height={10}/></button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-5 mt-6">
        <div className="flex items-center justify-between mb-2">
          <span className="eyebrow">Splits library</span>
          <span className="mono text-[10px] text-muted-foreground">06</span>
        </div>
        <div className="space-y-2">
          {[
            { n:"Push / Pull / Legs", g:"Chest · Back · Legs · Shoulders · Arms" },
            { n:"Upper / Lower", g:"Full upper body · Lower body" },
            { n:"Full Body 3×", g:"Compound lifts, all groups" },
            { n:"Bro Split", g:"One muscle group per day" },
            { n:"Arnold Split", g:"Chest+Back · Shoulders+Arms · Legs" },
          ].map((s) => (
            <div key={s.n} className="p-3 rounded-2xl bg-surface-2 border border-hairline flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">{s.n}</div>
                <div className="text-[11px] text-muted-foreground">{s.g}</div>
              </div>
              <I.chev width={14} height={14} className="text-muted-foreground"/>
            </div>
          ))}
        </div>
      </div>
    </ScreenShell>
  );
}
