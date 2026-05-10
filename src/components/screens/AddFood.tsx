import { ScreenShell, I } from "./ui";

export function AddFood() {
  return (
    <ScreenShell className="pb-8">
      <div className="px-5 pt-3 flex items-center gap-3">
        <button className="text-muted-foreground"><I.back width={20} height={20}/></button>
        <h1 className="text-lg font-semibold">Add food</h1>
      </div>
      <div className="px-5 mt-3 flex gap-2">
        <div className="flex-1 h-11 rounded-xl bg-surface-2 px-3 flex items-center gap-2">
          <I.search width={14} height={14} className="text-muted-foreground"/>
          <span className="text-sm text-muted-foreground">Search foods, brands…</span>
        </div>
        <button className="w-11 h-11 rounded-xl bg-accent text-accent-ink flex items-center justify-center"><I.barcode width={20} height={20}/></button>
      </div>

      <div className="px-5 mt-5">
        <div className="flex items-center justify-between mb-2">
          <span className="eyebrow">Recent</span>
          <span className="mono text-[10px] text-muted-foreground">LAST 7D</span>
        </div>
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {["Oats 80g","Eggs 3pc","Chicken 200g","Banana"].map((t) => (
            <div key={t} className="shrink-0 px-3 py-2 rounded-xl bg-surface-2 border border-hairline">
              <div className="text-xs">{t}</div>
              <div className="mono text-[10px] text-muted-foreground">+ ADD</div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 mt-5">
        <div className="flex items-center justify-between mb-2">
          <span className="eyebrow">Frequent</span>
          <span className="mono text-[10px] text-muted-foreground">YOUR STAPLES</span>
        </div>
        <div className="space-y-2">
          {[
            { n:"Greek Yogurt 0%", b:"Fage", k:59, p:10, c:4, f:0 },
            { n:"Whey Isolate Vanilla", b:"Optimum", k:120, p:24, c:3, f:1 },
            { n:"Sourdough loaf", b:"Bakery", k:240, p:8, c:48, f:1 },
            { n:"Sweet potato", b:"Generic", k:86, p:1.6, c:20, f:0.1 },
            { n:"Avocado", b:"Hass", k:160, p:2, c:9, f:15 },
          ].map((it) => (
            <div key={it.n} className="p-3 rounded-2xl bg-surface-2 border border-hairline">
              <div className="flex justify-between">
                <div>
                  <div className="text-sm font-medium">{it.n}</div>
                  <div className="text-[11px] text-muted-foreground">{it.b} · per 100g</div>
                </div>
                <div className="mono text-base font-semibold">{it.k}<span className="text-[10px] text-muted-foreground ml-0.5">kcal</span></div>
              </div>
              <div className="mt-2 flex gap-3 mono text-[10px] uppercase tracking-wider text-muted-foreground">
                <span>P <span className="text-foreground">{it.p}</span></span>
                <span>C <span className="text-foreground">{it.c}</span></span>
                <span>F <span className="text-foreground">{it.f}</span></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-5 mt-5 p-3 rounded-2xl border border-dashed border-border flex items-center justify-between">
        <div>
          <div className="text-sm font-medium">Quick add custom</div>
          <div className="text-[11px] text-muted-foreground">Enter calories & macros manually</div>
        </div>
        <I.chev width={14} height={14}/>
      </div>
    </ScreenShell>
  );
}
