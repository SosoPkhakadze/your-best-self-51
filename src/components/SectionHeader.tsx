interface Props {
  index: string;
  eyebrow: string;
  title: string;
  lede?: string;
}

export function SectionHeader({ index, eyebrow, title, lede }: Props) {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-10">
      <div className="flex items-center gap-4 mb-8">
        <span className="mono text-[11px] tracking-[0.18em] text-accent uppercase">§{index}</span>
        <span className="h-px flex-1 bg-hairline" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] max-w-4xl">
        {title}
      </h2>
      {lede && (
        <p className="mt-6 max-w-xl text-muted-foreground text-base md:text-lg leading-relaxed">
          {lede}
        </p>
      )}
    </div>
  );
}
