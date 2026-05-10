import { ScreenShell, I, Avatar, PHOTOS } from "./ui";

export function ChatsList() {
  return (
    <ScreenShell className="pb-8">
      <div className="px-5 pt-3 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Messages</h1>
        <button className="w-9 h-9 rounded-full bg-accent text-accent-ink flex items-center justify-center"><I.plus width={16} height={16}/></button>
      </div>
      <div className="px-5 mt-3 h-10 rounded-xl bg-surface-2 flex items-center px-3 gap-2">
        <I.search width={14} height={14} className="text-muted-foreground"/>
        <span className="text-xs text-muted-foreground">Search conversations</span>
      </div>

      <div className="px-5 mt-5 flex items-center justify-between">
        <span className="eyebrow">Direct</span>
        <span className="mono text-[10px] text-muted-foreground">04</span>
      </div>
      <div className="mt-1">
        {[
          {n:"Lena Park",a:PHOTOS.athleteW,p:"so the rest pause set actually worked",t:"2m",u:2},
          {n:"Aya Tanaka",a:PHOTOS.athlete2,p:"see you at 6 — bring chalk",t:"1h"},
          {n:"Diego Sosa",a:PHOTOS.athlete3,p:"voice message · 0:42",t:"yesterday"},
          {n:"Coach Reilly",a:PHOTOS.athlete4,p:"new program in your inbox",t:"Mon",u:1},
        ].map((c,i)=>(
          <Row key={i} c={c}/>
        ))}
      </div>

      <div className="px-5 mt-5 flex items-center justify-between">
        <span className="eyebrow">Groups</span>
        <span className="mono text-[10px] text-muted-foreground">02</span>
      </div>
      <div className="mt-1">
        {[
          { n:"Sunday Lifters", p:"Marcus: prepping bench at 5", t:"3m", u:8, group:[PHOTOS.athleteW,PHOTOS.athlete2,PHOTOS.athlete3,PHOTOS.athlete4]},
          { n:"Macro Council", p:"Aya: who has fage left?", t:"6h", group:[PHOTOS.athleteW,PHOTOS.athlete5,PHOTOS.athleteM,PHOTOS.athlete2]},
        ].map((c,i)=> <Row key={i} c={c} group/> )}
      </div>
    </ScreenShell>
  );
}

function Row({ c, group }: { c: any; group?: boolean }) {
  return (
    <div className="px-5 py-2.5 flex items-center gap-3">
      {group ? (
        <div className="grid grid-cols-2 grid-rows-2 w-11 h-11 rounded-full overflow-hidden gap-px bg-background">
          {c.group.map((g: string, i: number) => <img key={i} src={g} alt="" className="w-full h-full object-cover"/>)}
        </div>
      ) : <Avatar src={c.a} size={44}/>}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center">
          <div className="text-sm font-medium flex items-center gap-1.5">
            {c.n}
            <I.lock width={10} height={10} className="text-muted-foreground"/>
          </div>
          <span className="mono text-[10px] uppercase text-muted-foreground">{c.t}</span>
        </div>
        <div className="flex justify-between items-center gap-2">
          <p className="text-xs text-muted-foreground truncate">{c.p}</p>
          {c.u && <span className="mono text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-accent text-accent-ink">{c.u}</span>}
        </div>
      </div>
    </div>
  );
}

export function Chat() {
  const msgs = [
    { side:"in", n:"Lena", t:"how did the bench go?", time:"18:02"},
    { side:"out", t:"PR. 102.5×8. felt like 90.", time:"18:03", read:true},
    { side:"in", n:"Lena", t:"what 😭 send video", time:"18:03"},
    { side:"out", t:"", time:"18:04", read:true, media:true},
    { side:"in", n:"Lena", t:"the bar path is criminal", time:"18:05"},
    { side:"out", t:"thanks coach", time:"18:05", read:false},
  ];
  return (
    <ScreenShell topInset={false} className="bg-background flex flex-col">
      <div className="pt-12 px-4 pb-3 border-b border-hairline flex items-center gap-3 bg-surface">
        <button className="text-muted-foreground"><I.back width={20} height={20}/></button>
        <Avatar src={PHOTOS.athleteW} size={36}/>
        <div className="flex-1">
          <div className="text-sm font-semibold flex items-center gap-1.5">Lena Park <I.lock width={10} height={10} className="text-muted-foreground"/></div>
          <div className="mono text-[10px] uppercase tracking-wider text-accent">● ONLINE</div>
        </div>
        <button className="text-muted-foreground"><I.more width={18} height={18}/></button>
      </div>

      <div className="flex-1 px-4 py-3 space-y-2 overflow-y-auto no-scrollbar">
        <div className="text-center mono text-[10px] uppercase tracking-wider text-muted-foreground py-2">
          🔒 End-to-end encrypted
        </div>
        {msgs.map((m,i)=>(
          <div key={i} className={`flex ${m.side==="out"?"justify-end":"justify-start"}`}>
            <div className={`max-w-[75%] ${m.side==="out"?"bg-accent text-accent-ink":"bg-surface-2"} rounded-2xl px-3.5 py-2`}>
              {m.media ? (
                <div className="w-44 h-56 -m-1 rounded-xl bg-gradient-to-br from-background to-surface overflow-hidden">
                  <img src={PHOTOS.gym1} alt="" className="w-full h-full object-cover"/>
                </div>
              ) : (
                <p className="text-sm">{m.t}</p>
              )}
              <div className="flex items-center gap-1 justify-end mt-0.5">
                <span className={`mono text-[9px] ${m.side==="out"?"opacity-60":"text-muted-foreground"}`}>{m.time}</span>
                {m.side==="out" && <I.check width={10} height={10} className={m.read?"opacity-100":"opacity-40"}/>}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-hairline px-3 py-2 pb-6 flex items-center gap-2 bg-surface">
        <button className="w-9 h-9 rounded-full bg-surface-2 flex items-center justify-center text-muted-foreground"><I.attach width={16} height={16}/></button>
        <div className="flex-1 h-10 bg-surface-2 rounded-full px-4 flex items-center text-sm text-muted-foreground">Message</div>
        <button className="w-9 h-9 rounded-full bg-accent text-accent-ink flex items-center justify-center"><I.send width={14} height={14}/></button>
      </div>
    </ScreenShell>
  );
}

export function GroupInfo() {
  const members = [
    {n:"Marcus Chen",h:"@marcusc",a:PHOTOS.athleteM,role:"Admin"},
    {n:"Lena Park",h:"@lenalifts",a:PHOTOS.athleteW},
    {n:"Aya Tanaka",h:"@ayalifts",a:PHOTOS.athlete2},
    {n:"Diego Sosa",h:"@dsosa.lift",a:PHOTOS.athlete3},
    {n:"Sam Reilly",h:"@samr",a:PHOTOS.athlete4},
    {n:"Nora Klein",h:"@noraklein",a:PHOTOS.athlete5},
  ];
  return (
    <ScreenShell className="pb-8">
      <div className="px-5 pt-3 flex items-center justify-between">
        <button className="text-muted-foreground"><I.back width={20} height={20}/></button>
        <span className="mono text-[11px] uppercase tracking-wider text-muted-foreground">Group info</span>
        <span className="w-5"/>
      </div>
      <div className="mt-6 flex flex-col items-center px-5">
        <div className="grid grid-cols-2 grid-rows-2 w-24 h-24 rounded-full overflow-hidden gap-px bg-background ring-2 ring-accent">
          {members.slice(0,4).map(m=><img key={m.n} src={m.a} alt="" className="w-full h-full object-cover"/>)}
        </div>
        <h1 className="mt-4 text-xl font-semibold">Sunday Lifters</h1>
        <p className="mono text-[11px] uppercase tracking-wider text-muted-foreground mt-1 flex items-center gap-1.5">
          <I.lock width={10} height={10}/> 6 members · encrypted
        </p>
      </div>

      <div className="mx-5 mt-5 grid grid-cols-3 gap-2">
        {[{l:"Mute",i:"🔕"},{l:"Search",i:"⌕"},{l:"Media",i:"▣"}].map(a=>(
          <button key={a.l} className="aspect-square rounded-2xl bg-surface-2 border border-hairline flex flex-col items-center justify-center gap-1">
            <span className="text-xl">{a.i}</span>
            <span className="mono text-[10px] uppercase">{a.l}</span>
          </button>
        ))}
      </div>

      <div className="mx-5 mt-5">
        <div className="flex justify-between mb-2">
          <span className="eyebrow">Members</span>
          <button className="mono text-[10px] uppercase tracking-wider text-accent">+ Add</button>
        </div>
        <div className="rounded-2xl bg-surface-2 border border-hairline divide-y divide-[var(--hairline)]">
          {members.map(m=>(
            <div key={m.n} className="px-3 py-2.5 flex items-center gap-3">
              <Avatar src={m.a} size={36}/>
              <div className="flex-1">
                <div className="text-sm font-medium">{m.n}</div>
                <div className="text-[11px] text-muted-foreground">{m.h}</div>
              </div>
              {m.role ? <span className="mono text-[9px] uppercase tracking-wider text-accent">{m.role}</span> :
                <button className="text-muted-foreground text-xs">remove</button>}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-5 mt-4 space-y-2">
        <button className="w-full p-3 rounded-2xl border border-border text-sm text-foreground text-left flex justify-between items-center">
          Rotate encryption keys <span className="mono text-[10px] text-accent">SECURE</span>
        </button>
        <button className="w-full p-3 rounded-2xl border border-danger/40 text-sm text-danger text-left">Leave group</button>
      </div>
    </ScreenShell>
  );
}
