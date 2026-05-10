import { ReactNode } from "react";

interface PhoneFrameProps {
  children: ReactNode;
  label?: string;
  scale?: number;
  className?: string;
  time?: string;
}

export function StatusBar({ time = "9:41", dark = false }: { time?: string; dark?: boolean }) {
  const c = dark ? "text-foreground" : "text-foreground";
  return (
    <div className={`absolute top-0 inset-x-0 h-12 flex items-center justify-between px-7 pt-2.5 z-20 pointer-events-none ${c}`}>
      <span className="mono text-[13px] font-semibold tabular-nums">{time}</span>
      <div className="flex items-center gap-1.5">
        {/* signal */}
        <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor"><rect x="0" y="7" width="3" height="4" rx="0.5"/><rect x="4.5" y="5" width="3" height="6" rx="0.5"/><rect x="9" y="2.5" width="3" height="8.5" rx="0.5"/><rect x="13.5" y="0" width="3" height="11" rx="0.5"/></svg>
        {/* wifi */}
        <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor"><path d="M7.5 2.2c2.2 0 4.3.85 5.85 2.4l1.05-1.05A9.6 9.6 0 0 0 7.5.7C4.85.7 2.32 1.75.6 3.55L1.65 4.6A8.1 8.1 0 0 1 7.5 2.2zm0 3a5.6 5.6 0 0 1 3.95 1.65l1.05-1.05A7.1 7.1 0 0 0 7.5 3.7a7.1 7.1 0 0 0-5 2.1l1.05 1.05A5.6 5.6 0 0 1 7.5 5.2zm0 3a2.6 2.6 0 0 1 1.85.75L7.5 10.8 5.65 8.95A2.6 2.6 0 0 1 7.5 8.2z"/></svg>
        {/* battery */}
        <svg width="27" height="12" viewBox="0 0 27 12" fill="none"><rect x="0.5" y="0.5" width="22" height="11" rx="2.5" stroke="currentColor" opacity="0.5"/><rect x="2" y="2" width="19" height="8" rx="1.2" fill="currentColor"/><rect x="23.5" y="4" width="2" height="4" rx="1" fill="currentColor" opacity="0.5"/></svg>
      </div>
    </div>
  );
}

export function PhoneFrame({ children, label, scale = 1, className = "", time = "9:41" }: PhoneFrameProps) {
  return (
    <div className={`inline-block ${className}`} style={{ transform: `scale(${scale})`, transformOrigin: "top center" }}>
      {label && <div className="eyebrow text-center mb-3">{label}</div>}
      <div
        className="relative"
        style={{
          width: 390,
          height: 844,
          borderRadius: 56,
          padding: 6,
          background: "linear-gradient(160deg, oklch(0.32 0.005 150) 0%, oklch(0.18 0.005 150) 50%, oklch(0.28 0.005 150) 100%)",
          boxShadow:
            "0 0 0 1px oklch(0.40 0.005 150), 0 60px 120px -40px rgba(0,0,0,0.8), 0 30px 60px -30px rgba(0,0,0,0.6), inset 0 0 0 1px oklch(0.55 0.005 150 / 0.3)",
        }}
      >
        {/* side buttons */}
        <div className="absolute left-[-2px] top-[120px] w-[3px] h-9 rounded-l-sm bg-[oklch(0.30_0.005_150)]" />
        <div className="absolute left-[-2px] top-[180px] w-[3px] h-16 rounded-l-sm bg-[oklch(0.30_0.005_150)]" />
        <div className="absolute left-[-2px] top-[260px] w-[3px] h-16 rounded-l-sm bg-[oklch(0.30_0.005_150)]" />
        <div className="absolute right-[-2px] top-[160px] w-[3px] h-24 rounded-r-sm bg-[oklch(0.30_0.005_150)]" />

        <div
          className="relative w-full h-full overflow-hidden bg-surface"
          style={{ borderRadius: 50 }}
        >
          <StatusBar time={time} />
          {/* dynamic island */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[120px] h-[34px] bg-black rounded-full z-30" />
          <div className="w-full h-full text-foreground">{children}</div>
        </div>
      </div>
    </div>
  );
}
