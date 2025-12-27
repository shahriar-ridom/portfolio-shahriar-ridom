export function HeroGlow() {
  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] z-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, rgba(60, 131, 246, 0.1), transparent 60%)",
      }}
    />
  );
}
