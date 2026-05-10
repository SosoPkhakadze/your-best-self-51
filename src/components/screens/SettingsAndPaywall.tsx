import { ScreenShell, I, Avatar, PHOTOS } from "./ui";

export function Settings() {
  return (
    <ScreenShell className="pb-8">
      <div className="px-5 pt-3 flex items-center gap-3">
        <button className="text-muted-foreground"><I.back width={20} height={20}/></button>
        <h1 className="text-lg font-semibold">Settings</h1>
      </div>
      <div className="mx-5 mt-4 p-4 rounded-2xl bg-surface-2 border border-hairline flex items-center gap-3">
        <Avatar src={PHOTOS.athleteM} size={48}/>
        <div className="flex-1">
          <div className="text-sm font-semibold">Marcus Chen</div>
          <div className="text-[11px] text-muted-foreground">marcus@epoch.app</div>
        </div>
        <I.chev width={14} height={14} className="text-muted-foreground"/>
      </div>

      <Group title="Account">
        {[
          {l:"Edit profile",r:"Marcus, @marcusc"},
          {l:"Change password",r:""},
          {l:"Connected accounts",r:"Google · Apple"},
        ].map(r=> <Row key={r.l} {...r}/>)}
      </Group>

      <Group title="Preferences">
        <Row l="Units" r="Metric · kg/cm" toggle/>
        <Row l="Language" r="🇺🇸 English"/>
        <Row l="Theme" r="Dark"/>
      </Group>

      <Group title="Notifications">
        {[
          {l:"Likes",on:true},
          {l:"Comments",on:true},
          {l:"New followers",on:false},
          {l:"Workout reminders",on:true},
          {l:"Meal reminders",on:false},
        ].map(t=>(
          <div key={t.l} className="px-4 py-3 flex items-center justify-between">
            <span className="text-sm">{t.l}</span>
            <Toggle on={t.on}/>
          </div>
        ))}
      </Group>

      <div className="mx-5 mt-4 p-4 rounded-2xl bg-accent text-accent-ink">
        <div className="flex items-center justify-between">
          <span className="mono text-[10px] uppercase tracking-wider opacity-70">Subscription</span>
          <span className="mono text-[10px] uppercase tracking-wider opacity-70">FREE</span>
        </div>
        <div className="mt-2 text-lg font-semibold">Upgrade to Epoch Pro</div>
        <div className="text-xs opacity-80 mt-0.5">Unlimited AI · advanced analytics · priority support</div>
        <button className="mt-3 w-full h-10 rounded-xl bg-accent-ink text-accent text-sm font-semibold">Start 7-day free trial</button>
      </div>

      <Group title="Support">
        <Row l="Privacy Policy"/>
        <Row l="Terms of Service"/>
        <Row l="Contact support"/>
        <div className="px-4 py-3 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">App version</span>
          <span className="mono text-[10px] uppercase tracking-wider text-muted-foreground">2026.05 (Build 4218)</span>
        </div>
      </Group>

      <div className="mx-5 mt-4">
        <button className="w-full p-3 rounded-2xl border border-danger/40 text-sm text-danger">Delete account</button>
      </div>
    </ScreenShell>
  );
}

function Group({ title, children }: { title: string; children: any }) {
  return (
    <div className="mx-5 mt-5">
      <div className="eyebrow mb-2">{title}</div>
      <div className="rounded-2xl bg-surface-2 border border-hairline divide-y divide-[var(--hairline)]">{children}</div>
    </div>
  );
}
function Row({ l, r, toggle }: { l: string; r?: string; toggle?: boolean }) {
  return (
    <div className="px-4 py-3 flex items-center justify-between">
      <span className="text-sm">{l}</span>
      <div className="flex items-center gap-2">
        {r && <span className="mono text-[10px] uppercase tracking-wider text-muted-foreground">{r}</span>}
        {toggle ? <Toggle on/> : <I.chev width={12} height={12} className="text-muted-foreground"/>}
      </div>
    </div>
  );
}
function Toggle({ on }: { on: boolean }) {
  return (
    <span className={`w-10 h-6 rounded-full p-0.5 ${on?"bg-accent":"bg-background border border-border"} flex ${on?"justify-end":"justify-start"}`}>
      <span className={`w-5 h-5 rounded-full ${on?"bg-accent-ink":"bg-muted-foreground"}`}/>
    </span>
  );
}

export function Paywall() {
  return (
    <ScreenShell className="px-5 pb-8 bg-background">
      <div className="pt-3 flex justify-end">
        <button className="text-muted-foreground"><I.x width={20} height={20}/></button>
      </div>
      <div className="mt-4 flex flex-col items-center text-center">
        <div className="w-14 h-14 rounded-2xl bg-accent text-accent-ink mono font-black text-xl flex items-center justify-center">E</div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight">Epoch <span className="text-accent">Pro</span></h1>
        <p className="text-sm text-muted-foreground mt-1 max-w-[280px]">An always-on AI coach, built around your data.</p>
      </div>

      <div className="mt-6 space-y-2">
        {[
          {t:"Unlimited AI coaching", d:"Powered by GPT-4 · trained on your logs"},
          {t:"50 AI messages / day", d:"With voice replies and form check"},
          {t:"Advanced analytics", d:"Volume, tonnage, fatigue, recovery curves"},
          {t:"Priority support", d:"Real humans · 4-hour first reply"},
        ].map((f,i)=>(
          <div key={i} className="p-3 rounded-2xl bg-surface-2 border border-hairline flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-accent text-accent-ink flex items-center justify-center mt-0.5"><I.check width={12} height={12}/></span>
            <div>
              <div className="text-sm font-medium">{f.t}</div>
              <div className="text-[11px] text-muted-foreground">{f.d}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2">
        <div className="p-3 rounded-2xl border border-border">
          <div className="mono text-[10px] uppercase tracking-wider text-muted-foreground">Monthly</div>
          <div className="mono text-2xl font-semibold mt-1">$12.99</div>
          <div className="mono text-[10px] text-muted-foreground">/ MO · BILLED MONTHLY</div>
        </div>
        <div className="p-3 rounded-2xl border border-accent bg-accent/5 relative">
          <span className="absolute -top-2 right-3 mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-accent text-accent-ink font-semibold">Best value</span>
          <div className="mono text-[10px] uppercase tracking-wider text-accent">Annual</div>
          <div className="mono text-2xl font-semibold mt-1">$79</div>
          <div className="mono text-[10px] text-muted-foreground">$6.58 / MO · SAVE 49%</div>
        </div>
      </div>

      <div className="mt-3 p-3 rounded-2xl bg-accent/10 border border-accent/30 text-center">
        <span className="mono text-[10px] uppercase tracking-wider text-accent">7-day free trial · cancel anytime</span>
      </div>

      <button className="mt-3 w-full h-14 rounded-2xl bg-accent text-accent-ink font-semibold">
        Start free trial — then $79/yr
      </button>
      <button className="mt-2 w-full text-xs text-muted-foreground underline">Restore purchases</button>
      <p className="mt-3 text-[10px] text-muted-foreground text-center leading-relaxed">
        Auto-renews at $79/year unless cancelled at least 24 hours before the end of the trial. Manage in App Store settings.
      </p>
    </ScreenShell>
  );
}
