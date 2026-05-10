import { ScreenShell, I, Avatar, PHOTOS } from "./ui";

function Profile({ self }: { self: boolean }) {
  return (
    <ScreenShell topInset={false} className="pb-8">
      <div className="relative h-44 bg-gradient-to-br from-accent/30 via-surface-2 to-background overflow-hidden">
        <img src={PHOTOS.cover} alt="" className="w-full h-full object-cover opacity-60"/>
        <div className="absolute top-12 left-5 right-5 flex items-center justify-between">
          {!self ? <button className="w-9 h-9 rounded-full bg-background/60 backdrop-blur flex items-center justify-center"><I.back width={16} height={16}/></button> : <span/>}
          <div className="flex gap-2">
            {self ? (
              <button className="w-9 h-9 rounded-full bg-background/60 backdrop-blur flex items-center justify-center"><I.cog width={16} height={16}/></button>
            ) : (
              <button className="w-9 h-9 rounded-full bg-background/60 backdrop-blur flex items-center justify-center"><I.more width={16} height={16}/></button>
            )}
          </div>
        </div>
      </div>
      <div className="px-5 -mt-12 relative">
        <div className="relative inline-block">
          <Avatar src={self?PHOTOS.athleteM:PHOTOS.athleteW} size={92} ring/>
          {self && (
            <button className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-accent text-accent-ink flex items-center justify-center border-2 border-background"><I.camera width={12} height={12}/></button>
          )}
        </div>
        <div className="mt-3 flex items-end justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">{self?"Marcus Chen":"Lena Park"}</h1>
            <p className="text-sm text-muted-foreground">@{self?"marcusc":"lenalifts"}</p>
          </div>
        </div>
        <p className="text-sm mt-2 leading-relaxed">
          {self ? "engineer · lifting since 2019 · obsessed with tempo work and good coffee." : "powerlifter · coach · 67.5kg class · tea before training, always."}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-6">
            {[{l:"Posts",v:124},{l:"Followers",v:"3.4k"},{l:"Following",v:284}].map(s=>(
              <div key={s.l}><div className="mono text-lg font-semibold">{s.v}</div><div className="mono text-[10px] uppercase tracking-wider text-muted-foreground">{s.l}</div></div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          {self ? (
            <button className="flex-1 h-11 rounded-xl border border-border text-sm font-medium">Edit Profile</button>
          ) : (
            <>
              <button className="flex-1 h-11 rounded-xl bg-accent text-accent-ink text-sm font-semibold">Follow</button>
              <button className="flex-1 h-11 rounded-xl border border-border text-sm font-medium">Message</button>
            </>
          )}
        </div>
      </div>

      <div className="px-5 mt-6">
        <div className="flex border-b border-hairline mono text-[11px] uppercase tracking-wider">
          <button className="flex-1 py-2 border-b-2 border-accent text-foreground">Posts</button>
          <button className="flex-1 py-2 text-muted-foreground">Workouts</button>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-1">
          {Array.from({length:9}).map((_,i)=>(
            <div key={i} className="aspect-square rounded-md bg-gradient-to-br from-surface-2 to-background border border-hairline overflow-hidden">
              {i%3===0 && <img src={PHOTOS.gym1} alt="" className="w-full h-full object-cover opacity-80"/>}
              {i%3===1 && <img src={PHOTOS.food1} alt="" className="w-full h-full object-cover opacity-80"/>}
            </div>
          ))}
        </div>
      </div>
    </ScreenShell>
  );
}

export function MyProfile() { return <Profile self/>; }
export function OtherProfile() { return <Profile self={false}/>; }

export function Followers() {
  return (
    <ScreenShell className="pb-8">
      <div className="px-5 pt-3 flex items-center gap-3">
        <button className="text-muted-foreground"><I.back width={20} height={20}/></button>
        <div>
          <h1 className="text-lg font-semibold">Lena Park</h1>
          <p className="mono text-[10px] uppercase tracking-wider text-muted-foreground">3,412 followers</p>
        </div>
      </div>
      <div className="px-5 mt-3 flex">
        <div className="flex-1 text-center py-2 border-b-2 border-accent mono text-[11px] uppercase tracking-wider">Followers · 3.4K</div>
        <div className="flex-1 text-center py-2 border-b border-hairline mono text-[11px] uppercase tracking-wider text-muted-foreground">Following · 284</div>
      </div>
      <div className="px-5 mt-3 h-10 rounded-xl bg-surface-2 flex items-center px-3 gap-2">
        <I.search width={14} height={14} className="text-muted-foreground"/>
        <span className="text-xs text-muted-foreground">Search followers</span>
      </div>
      <div className="mt-3">
        {[
          {n:"Aya Tanaka",h:"@ayalifts",a:PHOTOS.athlete2,m:true,follow:false},
          {n:"Diego Sosa",h:"@dsosa.lift",a:PHOTOS.athlete3,follow:true},
          {n:"Sam Reilly",h:"@samr",a:PHOTOS.athlete4,follow:false},
          {n:"Nora Klein",h:"@noraklein",a:PHOTOS.athlete5,m:true,follow:true},
          {n:"Marcus Chen",h:"@marcusc",a:PHOTOS.athleteM,follow:true},
          {n:"Joon Lee",h:"@joonl",a:PHOTOS.athlete2,follow:false},
        ].map((u,i)=>(
          <div key={i} className="px-5 py-2.5 flex items-center gap-3">
            <Avatar src={u.a} size={42}/>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium flex items-center gap-1.5">{u.n} {u.m && <span className="mono text-[9px] text-muted-foreground">↔ MUTUAL</span>}</div>
              <div className="text-xs text-muted-foreground">{u.h}</div>
            </div>
            <button className={`text-xs font-semibold px-3 py-1.5 rounded-full ${u.follow?"border border-border text-foreground":"bg-accent text-accent-ink"}`}>{u.follow?"Following":"Follow"}</button>
          </div>
        ))}
      </div>
    </ScreenShell>
  );
}
