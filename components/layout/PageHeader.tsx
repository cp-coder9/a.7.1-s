export function PageHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between gap-4 rounded-3xl border border-mint/15 bg-gradient-to-br from-white/[0.08] to-teal-deep/20 p-6 md:flex-row md:items-end">
      <div>
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[.25em] text-mint">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        <p className="mt-3 max-w-3xl text-slate-300">{description}</p>
      </div>
      {action}
    </div>
  );
}
