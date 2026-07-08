interface CraneLogoProps {
  size?: number;
  className?: string;
}

export function CraneLogo({ size = 40, className = "" }: CraneLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-label="Discover Uganda logo — Grey Crowned Crane"
    >
      <rect width="48" height="48" rx="10" fill="#E84010"/>
      {/* Crown feathers — golden */}
      <line x1="28" y1="10" x2="25" y2="4" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/>
      <line x1="30" y1="9" x2="28" y2="3" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/>
      <line x1="32" y1="9" x2="32" y2="3" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/>
      <line x1="34" y1="10" x2="35" y2="4" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/>
      {/* Head */}
      <circle cx="31" cy="14" r="4" fill="white"/>
      {/* Red cheek patch */}
      <circle cx="33" cy="15" r="1.6" fill="#CC2200" opacity="0.85"/>
      {/* Beak */}
      <path d="M34 13 L43 13.5 L34 15.2 Z" fill="white"/>
      {/* Neck */}
      <path d="M28 17.5 C25 21 22 24.5 20 27.5" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none"/>
      {/* Body */}
      <ellipse cx="16" cy="31" rx="8.5" ry="6" fill="white" transform="rotate(-15 16 31)"/>
      {/* Wing */}
      <path d="M10 28 C7 23 7 18 11 14 C14 20 16 24.5 19 27" fill="rgba(220,220,220,0.9)"/>
      {/* Tail feathers */}
      <path d="M9 35 Q4 37 3 41" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M10 33.5 Q5 35 3 38" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.75" fill="none"/>
      {/* Leg */}
      <line x1="17" y1="36.5" x2="14" y2="44" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      {/* Foot */}
      <line x1="14" y1="44" x2="9" y2="46" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="14" y1="44" x2="15" y2="47" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
