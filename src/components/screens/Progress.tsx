import { ScreenShell, I } from "./ui";

export function Progress() {
  // svg line chart points
  const pts = [80,79.5,79.8,79.2,78.6,78.9,78.4,78.0,77.6,77.4,77.8,77.2];
  const min = 76, max = 81;
  const w = 320, h = 120;
  const xs = pts.map((_, i) => (i / (pts.length - 1)) * w);
  const ys = pts.map(p => h - ((p - min) / (max - min)) * h);
  const path = xs.map((x,i)=>`${i===0?"M":"L"}${x.toFixed(1)},${ys[i].toFixed(1)}`).join(" ");
  const area = `${path} L${w},${h} L0,${h} Z`;

  return (
    <ScreenShell className="pb-8">
      <div className="px-5 pt-3 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Progress</h1>
        <button className="text-xs mono uppercase tracking-wider px-3 py-1.5 rounded-full border border-border">Last 90 days</button>
      </div>

      <div className="mx-5 mt-4 p-4 rounded-3xl bg-surface-2 border border-hairline">
        <div className="flex items-end justify-between">
          <div>
            <span className="eyebrow">Weight</span>
            <div className="mono text-3xl font-semibold mt-1">77.2<span className="text-base text-muted-foreground"> kg</span></div>
            <div className="mono text-[11px] text-accent uppercase">↘ −2.8 KG · 30D</div>
          </div>
          <div className="inline-flex bg-background rounded-full p-1 mono text-[10px] uppercase tracking-wider">
            {["1W","1M","3M","6M","1Y"].map((p,i)=>(
              <span key={p} className={`px-2 py-1 rounded-full ${i===2?"bg-accent text-accent-ink":"text-muted-foreground"}`}>{p}</span>
            ))}
          </div>
        </div>
        <svg viewBox={`0 0 ${w} ${h+20}`} className="w-full mt-3">
          <defs>
            <linearGradient id="ar" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.90 0.21 128)" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="oklch(0.90 0.21 128)" stopOpacity="0"/>
            </linearGradient>
          </defs>
          {[0,1,2,3].map(i => (
            <line key={i} x1="0" x2={w} y1={i*(h/3)} y2={i*(h/3)} stroke="oklch(0.30 0.005 150)" strokeDasharray="2 4"/>
          ))}
          <path d={area} fill="url(#ar)"/>
          <path d={path} fill="none" stroke="oklch(0.90 0.21 128)" strokeWidth="2"/>
          {xs.map((x,i)=>i===xs.length-1 && (
            <g key={i}>
              <circle cx={x} cy={ys[i]} r="5" fill="oklch(0.90 0.21 128)"/>
              <circle cx={x} cy={ys[i]} r="2" fill="oklch(0.16 0.005 150)"/>
            </g>
          ))}
        </svg>
        <div className="flex justify-between mono text-[10px] text-muted-foreground uppercase tracking-wider mt-1">
          <span>Feb</span><span>Mar</span><span>Apr</span><span>May</span>
        </div>
      </div>

      <div className="mx-5 mt-4">
        <div className="flex justify-between items-center mb-2">
          <span className="eyebrow">Body measurements</span>
          <button className="w-7 h-7 rounded-full bg-accent text-accent-ink flex items-center justify-center"><I.plus width={12} height={12}/></button>
        </div>
        <div className="rounded-2xl bg-surface-2 border border-hairline divide-y divide-[var(--hairline)]">
          {[
            {n:"Chest",v:"104.0 cm", d:"+0.5", up:true},
            {n:"Waist",v:"82.0 cm", d:"−1.2", up:false},
            {n:"Hips",v:"96.5 cm", d:"−0.4", up:false},
            {n:"Arms",v:"38.2 cm", d:"+0.3", up:true},
            {n:"Thighs",v:"58.4 cm", d:"+0.7", up:true},
          ].map(m=>(
            <div key={m.n} className="px-4 py-3 flex justify-between items-center">
              <span className="text-sm">{m.n}</span>
              <div className="flex items-center gap-3">
                <span className="mono text-sm">{m.v}</span>
                <span className={`mono text-[10px] uppercase ${m.up?"text-accent":"text-info"}`}>{m.up?"↗":"↘"} {m.d}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-5 mt-4 p-4 rounded-3xl bg-surface-2 border border-hairline">
        <div className="flex justify-between">
          <span className="eyebrow">Volume · weekly</span>
          <span className="mono text-[11px] text-foreground">28,420 kg</span>
        </div>
        <div className="mt-3 flex items-end gap-1 h-24">
          {[40,55,38,68,62,80,72,90].map((v,i)=>(
            <div key={i} className="flex-1 flex flex-col justify-end gap-1">
              <div className={`${i===7?"bg-accent":"bg-foreground/40"} rounded-sm`} style={{height:`${v}%`}}/>
              <span className="mono text-[9px] text-center text-muted-foreground">{`W${i+1}`}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-5 mt-4">
        <span className="eyebrow">Personal records</span>
        <div className="mt-2 space-y-1.5">
          {[
            {n:"Bench Press", v:"105 × 8", d:"Today", n_:true},
            {n:"Squat", v:"140 × 5", d:"May 7"},
            {n:"Deadlift", v:"170 × 3", d:"May 2"},
            {n:"Overhead Press", v:"62.5 × 6", d:"Apr 28"},
          ].map(p=>(
            <div key={p.n} className={`p-3 rounded-2xl flex justify-between items-center ${p.n_?"bg-accent/10 border border-accent":"bg-surface-2 border border-hairline"}`}>
              <div>
                <div className="text-sm font-medium flex items-center gap-2">{p.n} {p.n_ && <span className="mono text-[9px] px-1.5 py-0.5 rounded bg-accent text-accent-ink">NEW</span>}</div>
                <div className="mono text-[10px] uppercase text-muted-foreground">{p.d}</div>
              </div>
              <div className="mono text-base font-semibold">{p.v}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-5 mt-4">
        <div className="flex justify-between mb-2">
          <span className="eyebrow">Photos</span>
          <button className="w-7 h-7 rounded-full bg-accent text-accent-ink flex items-center justify-center"><I.plus width={12} height={12}/></button>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {Array.from({length:6}).map((_,i)=>(
            <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-surface-2 to-background border border-hairline relative overflow-hidden">
              <div className="absolute bottom-1 left-1 mono text-[9px] uppercase text-muted-foreground">{`MAR ${i*4+1}`}</div>
            </div>
          ))}
        </div>
      </div>
    </ScreenShell>
  );
}
