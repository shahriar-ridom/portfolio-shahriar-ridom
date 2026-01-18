export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="none"
      className={className}
    >
      <path
        d="M140 160 L280 256 L140 352"
        stroke="currentColor"
        strokeWidth="70"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="310"
        y1="352"
        x2="430"
        y2="352"
        stroke="#22c55e"
        strokeWidth="70"
        strokeLinecap="round"
      />
    </svg>
  );
}
