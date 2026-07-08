interface CraneLogoProps {
  size?: number;
  className?: string;
}

export function CraneLogo({ size = 44, className = "" }: CraneLogoProps) {
  const h = size;
  const w = size * 0.65;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      viewBox="0 0 52 80"
      fill="none"
      className={className}
      aria-label="Discover Uganda — Grey Crowned Crane"
    >
      {/* ── Crown feathers (golden) ── */}
      <line x1="23" y1="8"  x2="19" y2="1"  stroke="#FFD700" strokeWidth="2.8" strokeLinecap="round"/>
      <line x1="26" y1="7"  x2="24" y2="0"  stroke="#FFD700" strokeWidth="2.8" strokeLinecap="round"/>
      <line x1="29" y1="7"  x2="29" y2="0"  stroke="#FFD700" strokeWidth="2.8" strokeLinecap="round"/>
      <line x1="32" y1="8"  x2="34" y2="1"  stroke="#FFD700" strokeWidth="2.8" strokeLinecap="round"/>
      <line x1="34" y1="9"  x2="37" y2="3"  stroke="#FFD700" strokeWidth="2.8" strokeLinecap="round"/>

      {/* ── Head ── */}
      <circle cx="28" cy="14" r="6" fill="#E84010"/>

      {/* ── Red wattle / cheek patch ── */}
      <circle cx="31" cy="16" r="2.4" fill="#B82A00"/>

      {/* ── Beak ── */}
      <path d="M33 12.5 L44 13.5 L33 16 Z" fill="#E84010"/>

      {/* ── Neck (S-curve to body) ── */}
      <path
        d="M24 19 C21 24 18 29 17 35"
        stroke="#E84010" strokeWidth="5.5" strokeLinecap="round" fill="none"
      />

      {/* ── Body ── */}
      <ellipse cx="15" cy="42" rx="13" ry="10" fill="#E84010" transform="rotate(-12 15 42)"/>

      {/* ── Wing (darker tone for depth) ── */}
      <path
        d="M5 38 C1 32 2 24 7 19 C11 26 13 32 16 37"
        fill="#C23200"
      />

      {/* ── Tail feathers ── */}
      <path d="M4 48 Q-1 52 -2 58" stroke="#E84010" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
      <path d="M5 46 Q0 49 -1 54"  stroke="#E84010" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6"/>

      {/* ── Standing leg ── */}
      <line x1="17" y1="51" x2="14" y2="67" stroke="#E84010" strokeWidth="2.4" strokeLinecap="round"/>
      {/* Standing foot (toes) */}
      <line x1="14" y1="67" x2="6"  y2="70" stroke="#E84010" strokeWidth="2"   strokeLinecap="round"/>
      <line x1="14" y1="67" x2="15" y2="71" stroke="#E84010" strokeWidth="2"   strokeLinecap="round"/>
      <line x1="14" y1="67" x2="21" y2="69" stroke="#E84010" strokeWidth="2"   strokeLinecap="round"/>

      {/* ── Raised leg (stepping forward — Uganda coat-of-arms pose) ── */}
      <path d="M21 50 L27 61 L24 67" stroke="#E84010" strokeWidth="2.4" strokeLinecap="round" fill="none"/>
      {/* Raised foot */}
      <line x1="24" y1="67" x2="18" y2="70" stroke="#E84010" strokeWidth="2"   strokeLinecap="round"/>
      <line x1="24" y1="67" x2="25" y2="71" stroke="#E84010" strokeWidth="2"   strokeLinecap="round"/>
    </svg>
  );
}
