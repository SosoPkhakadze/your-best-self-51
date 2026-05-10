/* shared screen primitives */
import { ReactNode } from "react";

export function ScreenShell({ children, className = "", topInset = true }: { children: ReactNode; className?: string; topInset?: boolean }) {
  return (
    <div className={`absolute inset-0 overflow-y-auto no-scrollbar ${topInset ? "pt-12" : ""} ${className}`}>
      {children}
    </div>
  );
}

export function Avatar({ initials, src, size = 36, ring = false }: { initials?: string; src?: string; size?: number; ring?: boolean }) {
  if (src) {
    return (
      <img
        src={src}
        alt=""
        className={`rounded-full object-cover ${ring ? "ring-2 ring-accent" : ""}`}
        style={{ width: size, height: size }}
      />
    );
  }
  return (
    <div
      className={`rounded-full flex items-center justify-center bg-surface-2 mono font-semibold ${ring ? "ring-2 ring-accent" : ""}`}
      style={{ width: size, height: size, fontSize: size * 0.38 }}
    >
      {initials}
    </div>
  );
}

export function Tag({ children, accent = false, className = "" }: { children: ReactNode; accent?: boolean; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-sm ${
        accent ? "bg-accent text-accent-ink" : "bg-surface-2 text-muted-foreground"
      } ${className}`}
    >
      {children}
    </span>
  );
}

export function Btn({ children, variant = "primary", className = "", icon }: { children: ReactNode; variant?: "primary" | "ghost" | "outline"; className?: string; icon?: ReactNode }) {
  const v =
    variant === "primary"
      ? "bg-accent text-accent-ink"
      : variant === "outline"
      ? "border border-border text-foreground"
      : "text-foreground";
  return (
    <button className={`h-12 px-5 rounded-xl text-sm font-semibold inline-flex items-center justify-center gap-2 ${v} ${className}`}>
      {icon}
      {children}
    </button>
  );
}

export function Divider({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-3 my-4">
      <span className="h-px flex-1 bg-hairline" />
      {label && <span className="eyebrow">{label}</span>}
      <span className="h-px flex-1 bg-hairline" />
    </div>
  );
}

export function ProgressBar({ value, max = 100, accent = false, height = 6 }: { value: number; max?: number; accent?: boolean; height?: number }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className="w-full bg-surface-2 rounded-full overflow-hidden" style={{ height }}>
      <div
        className={accent ? "bg-accent h-full" : "bg-foreground h-full"}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

/* tiny inline icons */
export const I = {
  flame: (p: any) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2c1 4 5 5 5 10a5 5 0 1 1-10 0c0-2 1-3 2-4-1 4 3 4 3 1 0-2-1-4 0-7z"/></svg>),
  plus: (p: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}><path d="M12 5v14M5 12h14"/></svg>),
  minus: (p: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}><path d="M5 12h14"/></svg>),
  x: (p: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}><path d="M6 6l12 12M6 18L18 6"/></svg>),
  chev: (p: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M9 18l6-6-6-6"/></svg>),
  search: (p: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3" strokeLinecap="round"/></svg>),
  bell: (p: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 8 3 8H3s3-1 3-8z" strokeLinejoin="round"/><path d="M10 21a2 2 0 0 0 4 0"/></svg>),
  heart: (p: any) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 21s-7-4.5-9.5-9C.8 8.6 3 5 6.5 5c2 0 3.5 1 5.5 3 2-2 3.5-3 5.5-3C21 5 23.2 8.6 21.5 12 19 16.5 12 21 12 21z"/></svg>),
  comment: (p: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" {...p}><path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5A8 8 0 1 1 21 12z"/></svg>),
  share: (p: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7M16 6l-4-4-4 4M12 2v14" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  back: (p: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M15 18l-6-6 6-6"/></svg>),
  more: (p: any) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>),
  lock: (p: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 1 1 8 0v3"/></svg>),
  eye: (p: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>),
  google: (p: any) => (<svg viewBox="0 0 24 24" {...p}><path fill="#EA4335" d="M12 5c1.6 0 3 .55 4.13 1.62l3.1-3.1A11 11 0 0 0 1 12l3.6-2.8C5.4 6.7 8.45 5 12 5z"/><path fill="#4285F4" d="M23 12.27c0-.79-.07-1.55-.2-2.27H12v4.5h6.18a5.3 5.3 0 0 1-2.3 3.5l3.55 2.74C21.6 18.83 23 15.87 23 12.27z"/><path fill="#FBBC05" d="M4.6 14.2A6.6 6.6 0 0 1 4.27 12c0-.77.13-1.51.36-2.2L1 7A11 11 0 0 0 1 17l3.6-2.8z"/><path fill="#34A853" d="M12 23c3 0 5.5-1 7.34-2.7l-3.55-2.74c-1 .67-2.27 1.07-3.79 1.07-3.55 0-6.6-1.7-7.4-4.2L1 17A11 11 0 0 0 12 23z"/></svg>),
  apple: (p: any) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M16.4 12.7c0-2.4 2-3.6 2.1-3.6-1.1-1.6-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.2 1-4 2.4-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3 2.5 1.2 0 1.7-.8 3.2-.8s1.9.8 3.2.7c1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.6-1-2.6-4zm-2.4-7.4c.7-.8 1.1-2 1-3.2-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.5 2.9-1.3z"/></svg>),
  attach: (p: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M21 12.5l-8.5 8.5a5 5 0 1 1-7-7L14 5.5a3.5 3.5 0 0 1 5 5L10.5 19a2 2 0 1 1-3-3l7-7"/></svg>),
  send: (p: any) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M3 3l18 9-18 9 4-9-4-9z"/></svg>),
  pause: (p: any) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/></svg>),
  check: (p: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 13l4 4L19 7"/></svg>),
  camera: (p: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M3 7h4l2-3h6l2 3h4v13H3V7z"/><circle cx="12" cy="13" r="4"/></svg>),
  barcode: (p: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M4 6v12M7 6v12M10 6v12M13 6v12M16 6v12M19 6v12" strokeLinecap="round"/></svg>),
  cog: (p: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a7.97 7.97 0 0 0 0-6l2-1.5-2-3.5-2.4 1a8 8 0 0 0-5.2-3L11 0H7l-.4 2a8 8 0 0 0-5.2 3l-2.4-1-2 3.5 2 1.5a7.97 7.97 0 0 0 0 6l-2 1.5 2 3.5 2.4-1a8 8 0 0 0 5.2 3L7 24h4l.4-2a8 8 0 0 0 5.2-3l2.4 1 2-3.5-2-1.5z" transform="translate(2 0)"/></svg>),
};

export const PHOTOS = {
  athleteW: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=200&q=80",
  athleteM: "https://images.unsplash.com/photo-1583468982228-19f19164aee2?w=200&q=80",
  athlete2: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200&q=80",
  athlete3: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&q=80",
  athlete4: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=200&q=80",
  athlete5: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=200&q=80",
  food1: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80",
  food2: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
  gym1: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80",
  gym2: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
  cover: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1200&q=80",
};
