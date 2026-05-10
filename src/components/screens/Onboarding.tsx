import { ScreenShell, Btn, I } from "./ui";

interface OnbProps { step?: number; }

const STEPS = [
  { kind: "goal" }, { kind: "gender" }, { kind: "dob" }, { kind: "height" },
  { kind: "weight" }, { kind: "target" }, { kind: "activity" }, { kind: "units" },
];

export function Onboarding({ step = 1 }: OnbProps) {
  const total = STEPS.length;
  const idx = Math.min(Math.max(step, 1), total) - 1;
  const cur = STEPS[idx];

  return (
    <ScreenShell className="px-6 pb-6 flex flex-col">
      {/* progress */}
      <div className="pt-3">
        <div className="flex items-center justify-between mb-2">
          <button className="text-muted-foreground"><I.back width={20} height={20}/></button>
          <span className="mono text-[11px] uppercase tracking-wider text-muted-foreground">Step {step}/{total}</span>
          <span className="w-5"/>
        </div>
        <div className="flex gap-1">
          {STEPS.map((_, i) => (
            <span key={i} className={`h-0.5 flex-1 rounded-full ${i <= idx ? "bg-accent" : "bg-surface-2"}`}/>
          ))}
        </div>
      </div>

      <div className="flex-1 mt-10">
        {cur.kind === "goal" && <GoalStep/>}
        {cur.kind === "gender" && <GenderStep/>}
        {cur.kind === "dob" && <DobStep/>}
        {cur.kind === "height" && <HeightStep/>}
        {cur.kind === "weight" && <WeightStep title="Current weight" v="78.4" unit="kg"/>}
        {cur.kind === "target" && <WeightStep title="Target weight" v="74.0" unit="kg" target/>}
        {cur.kind === "activity" && <ActivityStep/>}
        {cur.kind === "units" && <UnitsStep/>}
      </div>

      <Btn className="w-full">Continue →</Btn>
    </ScreenShell>
  );
}

function H({ t, s }: { t: string; s: string }) {
  return (
    <>
      <h1 className="text-3xl font-semibold tracking-tight leading-tight">{t}</h1>
      <p className="text-sm text-muted-foreground mt-2">{s}</p>
    </>
  );
}

function GoalStep() {
  const goals = [
    { t: "Lose Weight", d: "Cut fat, keep strength", icon: "↘", on: false },
    { t: "Build Muscle", d: "Hypertrophy focus", icon: "↗", on: true },
    { t: "Maintain", d: "Hold the line", icon: "=", on: false },
    { t: "Improve Fitness", d: "Endurance + mobility", icon: "∞", on: false },
  ];
  return (
    <>
      <H t="What's the goal?" s="Pick one. You can change it later." />
      <div className="mt-6 space-y-2.5">
        {goals.map((g) => (
          <div key={g.t} className={`p-4 rounded-2xl border flex items-center gap-4 ${g.on ? "border-accent bg-accent/5" : "border-border"}`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mono text-xl ${g.on ? "bg-accent text-accent-ink" : "bg-surface-2"}`}>{g.icon}</div>
            <div className="flex-1">
              <div className="text-sm font-medium">{g.t}</div>
              <div className="text-xs text-muted-foreground">{g.d}</div>
            </div>
            <span className={`w-5 h-5 rounded-full border-2 ${g.on ? "border-accent bg-accent" : "border-border"}`}/>
          </div>
        ))}
      </div>
    </>
  );
}

function GenderStep() {
  return (
    <>
      <H t="Biological sex" s="Used to calibrate metabolic estimates." />
      <div className="mt-8 grid grid-cols-2 gap-3">
        {["Male", "Female"].map((g, i) => (
          <div key={g} className={`aspect-[3/4] rounded-2xl border flex flex-col items-center justify-center ${i === 0 ? "border-accent bg-accent/5" : "border-border"}`}>
            <div className="text-5xl mono">{i === 0 ? "♂" : "♀"}</div>
            <div className="mt-3 text-sm font-medium">{g}</div>
          </div>
        ))}
      </div>
    </>
  );
}

function DobStep() {
  return (
    <>
      <H t="Date of birth" s="We need this for accurate BMR calculation." />
      <div className="mt-10 grid grid-cols-3 gap-2 text-center">
        {[
          { l: "Day", v: "14" }, { l: "Month", v: "Mar" }, { l: "Year", v: "1996" },
        ].map((c) => (
          <div key={c.l} className="p-4 rounded-2xl bg-surface-2">
            <div className="eyebrow">{c.l}</div>
            <div className="mono text-3xl mt-2 font-semibold">{c.v}</div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center text-xs text-muted-foreground mono">28 YRS · ARIES</div>
    </>
  );
}

function HeightStep() {
  return (
    <>
      <H t="Height" s="Slide to set." />
      <div className="mt-12 text-center">
        <div className="mono text-7xl font-semibold tracking-tighter">182<span className="text-2xl text-muted-foreground ml-1">cm</span></div>
        <div className="mt-8 relative h-16">
          <div className="absolute inset-x-0 top-1/2 h-px bg-hairline"/>
          {Array.from({length: 21}).map((_, i) => (
            <span key={i} className={`absolute top-1/2 -translate-y-1/2 w-px ${i % 5 === 0 ? "h-6 bg-foreground" : "h-3 bg-hairline"}`} style={{left: `${i*5}%`}}/>
          ))}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-accent"/>
        </div>
        <div className="mt-6 inline-flex bg-surface-2 rounded-full p-1 mono text-[11px] uppercase tracking-wider">
          <span className="px-4 py-1 rounded-full bg-accent text-accent-ink">cm</span>
          <span className="px-4 py-1 text-muted-foreground">ft / in</span>
        </div>
      </div>
    </>
  );
}

function WeightStep({ title, v, unit, target }: { title: string; v: string; unit: string; target?: boolean }) {
  return (
    <>
      <H t={title} s={target ? "Where are you headed?" : "Be honest. We don't judge."} />
      <div className="mt-12 text-center">
        <div className="mono text-7xl font-semibold tracking-tighter">{v}<span className="text-2xl text-muted-foreground ml-1">{unit}</span></div>
        {target && <div className="mt-2 text-xs text-accent mono">−4.4 KG TO GO</div>}
        <div className="mt-10 inline-flex bg-surface-2 rounded-full p-1 mono text-[11px] uppercase tracking-wider">
          <span className="px-4 py-1 rounded-full bg-accent text-accent-ink">kg</span>
          <span className="px-4 py-1 text-muted-foreground">lbs</span>
        </div>
      </div>
    </>
  );
}

function ActivityStep() {
  const opts = [
    { t: "Sedentary", d: "Desk life · 0 sessions/wk" },
    { t: "Lightly Active", d: "Walks · 1–2 sessions/wk" },
    { t: "Moderately Active", d: "Lifting · 3–4 sessions/wk", on: true },
    { t: "Active", d: "Daily training · 5–6 sessions/wk" },
    { t: "Very Active", d: "Athlete · 7+ sessions/wk" },
  ];
  return (
    <>
      <H t="Activity level" s="How often do you train right now?" />
      <div className="mt-6 space-y-2">
        {opts.map((o) => (
          <div key={o.t} className={`p-3.5 rounded-xl border flex items-center justify-between ${o.on ? "border-accent bg-accent/5" : "border-border"}`}>
            <div>
              <div className="text-sm font-medium">{o.t}</div>
              <div className="text-[11px] text-muted-foreground mono uppercase tracking-wider">{o.d}</div>
            </div>
            <span className={`w-5 h-5 rounded-full border-2 ${o.on ? "border-accent bg-accent" : "border-border"}`}/>
          </div>
        ))}
      </div>
    </>
  );
}

function UnitsStep() {
  return (
    <>
      <H t="Unit preferences" s="Choose how you read numbers." />
      <div className="mt-8 space-y-4">
        {[
          { l: "Mass", a: "kg", b: "lbs" },
          { l: "Length", a: "cm", b: "ft / in" },
          { l: "Energy", a: "kcal", b: "kJ" },
          { l: "Liquid", a: "ml", b: "fl oz" },
        ].map((r) => (
          <div key={r.l} className="flex items-center justify-between p-4 bg-surface-2 rounded-2xl">
            <span className="eyebrow">{r.l}</span>
            <div className="inline-flex bg-background rounded-full p-1 mono text-[11px] uppercase tracking-wider">
              <span className="px-3 py-1 rounded-full bg-accent text-accent-ink">{r.a}</span>
              <span className="px-3 py-1 text-muted-foreground">{r.b}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
