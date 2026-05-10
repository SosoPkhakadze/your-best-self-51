import { createFileRoute } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { SectionHeader } from "@/components/SectionHeader";
import { AuthSignIn, AuthSignUp } from "@/components/screens/Auth";
import { Onboarding } from "@/components/screens/Onboarding";
import { Dashboard } from "@/components/screens/Dashboard";
import { PlannerNutrition, PlannerTraining } from "@/components/screens/Planner";
import { AddFood } from "@/components/screens/AddFood";
import { AddWorkout } from "@/components/screens/AddWorkout";
import { ActiveWorkout, WorkoutSummary } from "@/components/screens/Workout";
import { Progress } from "@/components/screens/Progress";
import { Feed, CreatePost, Notifications } from "@/components/screens/Social";
import { MyProfile, OtherProfile, Followers } from "@/components/screens/Profiles";
import { ChatsList, Chat, GroupInfo } from "@/components/screens/Messaging";
import { Settings, Paywall } from "@/components/screens/SettingsAndPaywall";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EPOCH / OS — Train, Eat, Connect" },
      { name: "description", content: "An operating system for athletes. Twenty pixel-detailed screens of a fitness, nutrition, training, and social platform — designed with the precision of performance hardware." },
      { property: "og:title", content: "EPOCH / OS — Train, Eat, Connect" },
      { property: "og:description", content: "An operating system for athletes." },
    ],
  }),
  component: Index,
});

function Phone({ children, label, scale = 0.55 }: { children: React.ReactNode; label?: string; scale?: number }) {
  // wrapper accounts for scaled height
  return (
    <div style={{ height: 844 * scale + 30, width: 390 * scale }}>
      <PhoneFrame scale={scale} label={label}>{children}</PhoneFrame>
    </div>
  );
}

function Strip({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto no-scrollbar pb-8">
      <div className="flex gap-6 px-6 md:px-10 min-w-max">{children}</div>
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* HERO */}
      <section className="relative bg-grid border-b border-hairline overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-12 pb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-accent text-accent-ink mono font-black flex items-center justify-center text-sm">E</div>
              <span className="mono text-[11px] uppercase tracking-[0.2em]">EPOCH / OS</span>
            </div>
            <nav className="hidden md:flex gap-6 mono text-[11px] uppercase tracking-wider text-muted-foreground">
              <a href="#auth">Auth</a><a href="#onboarding">Onboarding</a><a href="#dashboard">Dashboard</a>
              <a href="#training">Training</a><a href="#social">Social</a><a href="#paywall">Pro</a>
            </nav>
            <a href="#paywall" className="mono text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full bg-accent text-accent-ink">Spec sheet</a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-8 pb-16">
          <div className="md:col-span-8">
            <div className="eyebrow mb-6">v 2026.05 · iOS native · 20 frames</div>
            <h1 className="text-[clamp(3.5rem,12vw,11rem)] font-semibold leading-[0.85] tracking-[-0.045em]">
              EPOCH<span className="text-accent">/</span>OS
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              An operating system for athletes. Train, eat, connect — engineered with the
              precision of performance hardware. The complete twenty-screen reference build.
            </p>
          </div>
          <aside className="md:col-span-4 space-y-3 mono text-[11px] uppercase tracking-wider">
            {[
              ["FORM FACTOR","iOS · 6.7\""],
              ["BUILD","2026.05.4218"],
              ["SCREENS","20"],
              ["GRID","4 / 8 / 24"],
              ["TYPE","Inter Tight · JetBrains Mono"],
              ["ACCENT","oklch(.90 .21 128)"],
            ].map(([k,v])=>(
              <div key={k} className="flex justify-between border-b border-hairline pb-2">
                <span className="text-muted-foreground">{k}</span>
                <span>{v}</span>
              </div>
            ))}
          </aside>
        </div>

        {/* hero phones */}
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pb-20">
          <div className="flex justify-center items-end gap-[-40px]" style={{ gap: -40 }}>
            <div style={{ transform: "rotate(-6deg) translateY(20px)" }}><Phone scale={0.6}><Feed/></Phone></div>
            <div style={{ transform: "translateY(-20px)", zIndex: 10 }}><Phone scale={0.7}><ActiveWorkout/></Phone></div>
            <div style={{ transform: "rotate(6deg) translateY(20px)" }}><Phone scale={0.6}><Dashboard/></Phone></div>
          </div>
        </div>
      </section>

      {/* AUTH */}
      <section id="auth" className="border-b border-hairline">
        <SectionHeader index="01" eyebrow="Authentication" title="A door, not a gate." lede="Saved accounts, OAuth, and a single primary action. The fastest path back to training is the one nobody notices."/>
        <Strip>
          <Phone label="01 / SIGN IN"><AuthSignIn/></Phone>
          <Phone label="02 / SIGN UP"><AuthSignUp/></Phone>
        </Strip>
      </section>

      {/* ONBOARDING */}
      <section id="onboarding" className="border-b border-hairline bg-grid-fine">
        <SectionHeader index="02" eyebrow="Onboarding" title="Eight steps. Zero friction." lede="Goals, sex, DOB, height, weight, target, activity, units. Each step earns its place."/>
        <Strip>
          {[1,2,3,4,5,6,7,8].map(s => (
            <Phone key={s} label={`STEP ${s}/8`}><Onboarding step={s}/></Phone>
          ))}
        </Strip>
      </section>

      {/* DASHBOARD */}
      <section id="dashboard" className="border-b border-hairline">
        <SectionHeader index="03" eyebrow="Dashboard" title="Today, at a glance." lede="Streak, calories, macros, water, meals, the live session, and a muscle map for the week."/>
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-24 grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7 flex justify-center"><Phone scale={0.85}><Dashboard/></Phone></div>
          <div className="md:col-span-5 space-y-6 mt-12">
            {[
              ["A","Streak counter","42-day flame · earned, not gamified."],
              ["B","Calorie ring","SVG arc · 1,840 of 2,400 kcal · 23% fat target."],
              ["C","Live session","The accent block — never miss it mid-set."],
              ["D","Muscle map","Front + back silhouettes lit by the week's volume."],
            ].map(([k,t,d])=>(
              <div key={k} className="flex gap-4 border-l-2 border-accent pl-4">
                <span className="mono text-accent text-sm">{k}</span>
                <div>
                  <div className="text-base font-semibold">{t}</div>
                  <div className="text-sm text-muted-foreground mt-0.5">{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUTRITION */}
      <section id="nutrition" className="border-b border-hairline bg-grid-fine">
        <SectionHeader index="04" eyebrow="Nutrition" title="Macros, mapped." lede="Daily plan, four meal slots, and a search-first food log with barcode capture."/>
        <Strip>
          <Phone label="PLANNER · NUTRITION"><PlannerNutrition/></Phone>
          <Phone label="ADD FOOD"><AddFood/></Phone>
        </Strip>
      </section>

      {/* TRAINING */}
      <section id="training" className="border-b border-hairline">
        <SectionHeader index="05" eyebrow="Training" title="The hour that earns the rest of the day." lede="Plan the week, build the session, run it live, and read the receipt."/>
        <Strip>
          <Phone label="PLANNER · TRAINING"><PlannerTraining/></Phone>
          <Phone label="ADD WORKOUT"><AddWorkout/></Phone>
          <Phone label="ACTIVE · LIVE"><ActiveWorkout/></Phone>
          <Phone label="SUMMARY · 2 PRs"><WorkoutSummary/></Phone>
        </Strip>
      </section>

      {/* PROGRESS */}
      <section id="progress" className="border-b border-hairline bg-grid-fine">
        <SectionHeader index="06" eyebrow="Progress" title="The line that goes the right way." lede="Bodyweight curve, measurements, weekly volume, all-time PRs, and a chronological photo grid."/>
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-24 flex justify-center">
          <Phone scale={0.85}><Progress/></Phone>
        </div>
      </section>

      {/* SOCIAL */}
      <section id="social" className="border-b border-hairline">
        <SectionHeader index="07" eyebrow="Social" title="A feed for people who actually train." lede="Posts, composer, and notifications. Less noise, more signal."/>
        <Strip>
          <Phone label="FEED"><Feed/></Phone>
          <Phone label="CREATE POST"><CreatePost/></Phone>
          <Phone label="NOTIFICATIONS"><Notifications/></Phone>
        </Strip>
      </section>

      {/* PROFILES */}
      <section id="profiles" className="border-b border-hairline bg-grid-fine">
        <SectionHeader index="08" eyebrow="Profiles" title="Who you are. Who you follow." lede="Your profile, theirs, and the people in between."/>
        <Strip>
          <Phone label="MY PROFILE"><MyProfile/></Phone>
          <Phone label="OTHER PROFILE"><OtherProfile/></Phone>
          <Phone label="FOLLOWERS"><Followers/></Phone>
        </Strip>
      </section>

      {/* MESSAGING */}
      <section id="messaging" className="border-b border-hairline">
        <SectionHeader index="09" eyebrow="Messaging" title="End-to-end. Always." lede="Direct messages, group chats, and the controls to keep both private."/>
        <Strip>
          <Phone label="INBOX"><ChatsList/></Phone>
          <Phone label="CHAT · ENCRYPTED"><Chat/></Phone>
          <Phone label="GROUP INFO"><GroupInfo/></Phone>
        </Strip>
      </section>

      {/* SETTINGS / PAYWALL */}
      <section id="paywall" className="border-b border-hairline bg-grid-fine">
        <SectionHeader index="10" eyebrow="Settings & Pro" title="Everything else." lede="Account, preferences, support, and the upgrade that gives you a coach in your pocket."/>
        <Strip>
          <Phone label="SETTINGS"><Settings/></Phone>
          <Phone label="EPOCH PRO"><Paywall/></Phone>
        </Strip>
      </section>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <div className="text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-[-0.03em] leading-none">
              Twenty screens.<br/>
              <span className="text-muted-foreground">One coherent system.</span>
            </div>
          </div>
          <div className="md:col-span-5 space-y-2 mono text-[11px] uppercase tracking-wider">
            {[
              ["Build","EPOCH / OS · 2026.05"],
              ["Aesthetic","Dark performance tech"],
              ["Type","Inter Tight · JetBrains Mono"],
              ["Accent","oklch(0.90 0.21 128)"],
              ["Made for","People who train."],
            ].map(([k,v])=>(
              <div key={k} className="flex justify-between border-b border-hairline pb-2">
                <span className="text-muted-foreground">{k}</span>
                <span>{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex justify-between mono text-[10px] uppercase tracking-wider text-muted-foreground">
          <span>© 2026 EPOCH</span>
          <span>↑ BACK TO TOP</span>
        </div>
      </footer>
    </main>
  );
}
