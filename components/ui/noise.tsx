export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden bg-neutral-950">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-full max-w-4xl opacity-20"
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 50% at 50% -20%, rgba(34,197,94,1), rgba(255,255,255,0))`,
        }}
      />
      <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-neutral-950 to-transparent" />
    </div>
  );
}

export function BackgroundDepth() {
  return (
    <div className="fixed inset-0 -z-20 h-full w-full bg-[#0a0a0a]">
      <div
        className="absolute h-full w-full"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 0.5H8.5V1.5H8V0.5Z' fill='white' fill-opacity='0.05'/%3E%3C/svg%3E")`,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 0%, #0a0a0a 100%)",
        }}
      />
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-green-500/20 blur-[100px]" />
    </div>
  );
}
