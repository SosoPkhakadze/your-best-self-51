import { ScreenShell, Btn, Divider, I, PHOTOS, Avatar } from "./ui";

export function AuthSignIn() {
  return (
    <ScreenShell className="px-6 pb-8">
      <div className="flex justify-end pt-4">
        <button className="flex items-center gap-2 text-xs mono uppercase tracking-wider text-muted-foreground border border-border rounded-full px-3 py-1.5">
          <span>🇺🇸</span> EN <I.chev width={10} height={10}/>
        </button>
      </div>
      <div className="mt-12 flex flex-col items-center">
        <div className="w-16 h-16 rounded-2xl bg-accent text-accent-ink flex items-center justify-center mono font-black text-2xl">E</div>
        <div className="eyebrow mt-4">EPOCH / OS</div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-sm text-muted-foreground mt-1">Pick up where you left off</p>
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between">
          <span className="eyebrow">Saved Accounts</span>
          <span className="mono text-[10px] text-muted-foreground">02</span>
        </div>
        <div className="mt-3 space-y-2">
          {[
            { n: "Marcus Chen", e: "marcus@epoch.app", a: PHOTOS.athleteM },
            { n: "Lena Park", e: "lena.p@gmail.com", a: PHOTOS.athleteW },
          ].map((u) => (
            <div key={u.n} className="flex items-center gap-3 p-3 border border-border rounded-2xl">
              <Avatar src={u.a} size={40} />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{u.n}</div>
                <div className="text-xs text-muted-foreground truncate">{u.e}</div>
              </div>
              <button className="w-7 h-7 rounded-full bg-surface-2 flex items-center justify-center text-muted-foreground"><I.x width={12} height={12}/></button>
            </div>
          ))}
        </div>
        <button className="mt-2 w-full flex items-center justify-center gap-2 py-3 border border-dashed border-border rounded-2xl text-sm text-muted-foreground">
          <I.plus width={14} height={14}/> Add Another Account
        </button>
      </div>

      <Divider label="OR" />

      <div className="space-y-2">
        <button className="w-full h-12 rounded-xl bg-surface-2 flex items-center justify-center gap-3 text-sm font-medium">
          <I.google width={16} height={16}/> Continue with Google
        </button>
        <button className="w-full h-12 rounded-xl bg-foreground text-background flex items-center justify-center gap-3 text-sm font-medium">
          <I.apple width={16} height={16}/> Sign in with Apple
        </button>
      </div>

      <div className="mt-10 flex justify-center">
        <div className="inline-flex bg-surface-2 rounded-full p-1 mono text-[11px] uppercase tracking-wider">
          <span className="px-4 py-1.5 rounded-full bg-accent text-accent-ink">Sign In</span>
          <span className="px-4 py-1.5 text-muted-foreground">Sign Up</span>
        </div>
      </div>
    </ScreenShell>
  );
}

export function AuthSignUp() {
  return (
    <ScreenShell className="px-6 pb-8">
      <div className="flex justify-end pt-4">
        <button className="flex items-center gap-2 text-xs mono uppercase tracking-wider text-muted-foreground border border-border rounded-full px-3 py-1.5">
          <span>🇫🇷</span> FR <I.chev width={10} height={10}/>
        </button>
      </div>
      <div className="mt-10 flex flex-col items-center">
        <div className="w-16 h-16 rounded-2xl bg-accent text-accent-ink flex items-center justify-center mono font-black text-2xl">E</div>
        <div className="eyebrow mt-4">EPOCH / OS</div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">Create your account</h1>
        <p className="text-sm text-muted-foreground mt-1">Start your first epoch</p>
      </div>

      <div className="mt-8 space-y-4">
        <div>
          <label className="eyebrow">Email</label>
          <div className="mt-1.5 h-12 rounded-xl bg-surface-2 px-4 flex items-center text-sm text-foreground/90">you@epoch.app</div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <label className="eyebrow">Password</label>
            <button className="text-[11px] mono uppercase text-accent">Forgot?</button>
          </div>
          <div className="mt-1.5 h-12 rounded-xl bg-surface-2 px-4 flex items-center justify-between">
            <span className="mono tracking-widest text-foreground/80">••••••••</span>
            <I.eye width={16} height={16} className="text-muted-foreground"/>
          </div>
        </div>
        <label className="flex items-center gap-2.5 mt-2">
          <span className="w-4 h-4 rounded border border-border bg-accent flex items-center justify-center"><I.check width={10} height={10} className="text-accent-ink"/></span>
          <span className="text-xs text-muted-foreground">Save this account</span>
        </label>
      </div>

      <Btn className="w-full mt-5">Create account →</Btn>

      <p className="text-[11px] text-muted-foreground text-center mt-4 leading-relaxed">
        By continuing you agree to our <span className="text-foreground underline">Terms</span> & <span className="text-foreground underline">Privacy Policy</span>
      </p>

      <Divider label="OR" />

      <div className="space-y-2">
        <button className="w-full h-12 rounded-xl bg-surface-2 flex items-center justify-center gap-3 text-sm font-medium">
          <I.google width={16} height={16}/> Continue with Google
        </button>
        <button className="w-full h-12 rounded-xl bg-foreground text-background flex items-center justify-center gap-3 text-sm font-medium">
          <I.apple width={16} height={16}/> Sign up with Apple
        </button>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="inline-flex bg-surface-2 rounded-full p-1 mono text-[11px] uppercase tracking-wider">
          <span className="px-4 py-1.5 text-muted-foreground">Sign In</span>
          <span className="px-4 py-1.5 rounded-full bg-accent text-accent-ink">Sign Up</span>
        </div>
      </div>
    </ScreenShell>
  );
}
