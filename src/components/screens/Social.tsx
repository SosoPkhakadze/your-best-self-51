import { ScreenShell, I, Avatar, PHOTOS } from "./ui";

export function Feed() {
  return (
    <ScreenShell className="pb-24">
      <div className="px-5 pt-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-accent text-accent-ink mono font-black flex items-center justify-center text-sm">E</div>
          <span className="mono text-[11px] uppercase tracking-wider text-muted-foreground">Feed</span>
        </div>
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded-full bg-surface-2 flex items-center justify-center"><I.search width={14} height={14}/></button>
          <button className="w-8 h-8 rounded-full bg-surface-2 flex items-center justify-center relative">
            <I.bell width={14} height={14}/>
            <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-accent"/>
          </button>
        </div>
      </div>

      <div className="mt-3 space-y-3">
        {[
          { n:"Lena Park", h:"@lenalifts", t:"3h", a:PHOTOS.athleteW, c:"new bench PR after a month of sticking points. patience > volume.", media:true, l:284, com:42 },
          { n:"Marcus Chen", h:"@marcusc", t:"6h", a:PHOTOS.athleteM, c:"Sunday meal prep. 4 days of variety from one tray.", media:false, l:128, com:18 },
          { n:"Aya Tanaka", h:"@ayalifts", t:"1d", a:PHOTOS.athlete2, c:"reminder: training is the only place where the math always works out.", media:false, l:912, com:67 },
        ].map((p,i)=>(
          <div key={i} className="px-5">
            <div className="flex items-start gap-3">
              <Avatar src={p.a} size={40}/>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 text-sm">
                  <span className="font-semibold">{p.n}</span>
                  <span className="text-muted-foreground text-xs">{p.h}</span>
                  <span className="text-muted-foreground text-xs">· {p.t}</span>
                </div>
                <p className="text-sm mt-1 leading-relaxed">{p.c}</p>
                {p.media && (
                  <div className="mt-2.5 aspect-[4/5] rounded-2xl bg-gradient-to-br from-surface-2 to-background border border-hairline overflow-hidden relative">
                    <img src={PHOTOS.gym1} alt="" className="w-full h-full object-cover opacity-90"/>
                    <div className="absolute bottom-3 left-3 px-2 py-1 rounded-md bg-background/70 backdrop-blur mono text-[10px] uppercase">BENCH · 102.5×8</div>
                  </div>
                )}
                <div className="mt-3 flex items-center gap-5 text-muted-foreground">
                  <button className="flex items-center gap-1.5"><I.heart width={15} height={15} className={i===2?"text-accent":""}/><span className="mono text-xs">{p.l}</span></button>
                  <button className="flex items-center gap-1.5"><I.comment width={15} height={15}/><span className="mono text-xs">{p.com}</span></button>
                  <button className="flex items-center gap-1.5"><I.share width={15} height={15}/></button>
                  <span className="ml-auto"><I.more width={16} height={16}/></span>
                </div>
              </div>
            </div>
            <div className="mt-3 h-px bg-hairline"/>
          </div>
        ))}
      </div>

      <div className="absolute bottom-6 right-5 w-14 h-14 rounded-full bg-accent text-accent-ink flex items-center justify-center shadow-2xl">
        <I.plus width={22} height={22}/>
      </div>
    </ScreenShell>
  );
}

export function CreatePost() {
  return (
    <ScreenShell className="px-5 pb-6">
      <div className="pt-3 flex items-center justify-between">
        <button className="text-sm text-muted-foreground">Cancel</button>
        <span className="mono text-[11px] uppercase tracking-wider text-muted-foreground">New post</span>
        <button className="px-4 py-1.5 rounded-full bg-accent text-accent-ink text-xs font-semibold">Post</button>
      </div>
      <div className="mt-5 flex gap-3">
        <Avatar src={PHOTOS.athleteM} size={36}/>
        <div className="flex-1">
          <div className="text-sm">marcus chen <span className="text-muted-foreground">@marcusc</span></div>
          <div className="mt-2 text-base leading-relaxed">
            {"new bench PR. "}<span className="text-accent">102.5kg × 8</span>{". patience > volume."}
          </div>
        </div>
      </div>
      <div className="mt-4 aspect-[4/5] rounded-2xl bg-gradient-to-br from-surface-2 to-background border border-hairline overflow-hidden relative">
        <img src={PHOTOS.gym1} alt="" className="w-full h-full object-cover"/>
        <button className="absolute top-3 right-3 w-7 h-7 rounded-full bg-background/70 flex items-center justify-center"><I.x width={14} height={14}/></button>
      </div>
      <div className="mt-3 flex gap-2">
        <button className="w-12 h-12 rounded-xl border border-dashed border-border flex items-center justify-center text-muted-foreground"><I.plus width={16} height={16}/></button>
        <button className="flex-1 h-12 rounded-xl border border-border flex items-center px-3 text-sm text-muted-foreground gap-2">
          <span className="mono text-[10px] uppercase tracking-wider">Tag</span> Bench Press · 102.5×8
        </button>
      </div>

      <div className="mt-4 p-3 rounded-2xl bg-surface-2 border border-hairline flex items-center justify-between">
        <span className="text-sm">Audience</span>
        <div className="inline-flex bg-background rounded-full p-1 mono text-[10px] uppercase tracking-wider">
          <span className="px-3 py-1 rounded-full bg-accent text-accent-ink">Public</span>
          <span className="px-3 py-1 text-muted-foreground">Followers</span>
        </div>
      </div>

      <div className="mt-2 text-right mono text-[10px] text-muted-foreground uppercase">214 / 280</div>
    </ScreenShell>
  );
}

export function Notifications() {
  return (
    <ScreenShell className="pb-8">
      <div className="px-5 pt-3 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Notifications</h1>
        <button className="text-xs mono uppercase tracking-wider text-accent">Mark read</button>
      </div>
      <div className="px-5 mt-3 flex gap-1.5">
        {["All","Likes","Comments","Follows"].map((t,i)=>(
          <span key={t} className={`px-3 py-1.5 rounded-full mono text-[10px] uppercase tracking-wider ${i===0?"bg-accent text-accent-ink":"bg-surface-2 text-muted-foreground"}`}>{t}</span>
        ))}
      </div>
      <div className="mt-3 divide-y divide-[var(--hairline)]">
        {[
          {a:PHOTOS.athleteW, n:"Lena Park", t:"liked your post", time:"2m", thumb:true, unread:true},
          {a:PHOTOS.athlete2, n:"Aya Tanaka", t:"started following you", time:"18m", unread:true},
          {a:PHOTOS.athlete3, n:"Diego Sosa", t:"commented: \"insane form\"", time:"1h", thumb:true},
          {a:PHOTOS.athlete4, n:"Sam Reilly", t:"liked your workout", time:"3h", thumb:true},
          {a:PHOTOS.athlete5, n:"Nora Klein", t:"mentioned you in a comment", time:"5h"},
          {a:PHOTOS.athleteM, n:"Marcus Chen", t:"shared your post", time:"yesterday", thumb:true},
        ].map((n,i)=>(
          <div key={i} className={`px-5 py-3 flex items-center gap-3 ${n.unread?"border-l-2 border-l-accent":""}`}>
            <Avatar src={n.a} size={40}/>
            <div className="flex-1 min-w-0">
              <div className="text-sm"><span className="font-medium">{n.n}</span> <span className="text-muted-foreground">{n.t}</span></div>
              <div className="mono text-[10px] uppercase tracking-wider text-muted-foreground">{n.time}</div>
            </div>
            {n.thumb && <div className="w-10 h-10 rounded-md bg-gradient-to-br from-surface-2 to-background border border-hairline"/>}
          </div>
        ))}
      </div>
    </ScreenShell>
  );
}
