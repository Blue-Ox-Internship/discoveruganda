interface KitengeDividerProps {
  className?: string;
  height?: number;
}

export function KitengeDivider({ className = "", height = 48 }: KitengeDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden ${className}`}
      style={{ height }}
      aria-hidden="true"
    >
      <svg
        width="100%"
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="kitenge-strip-pattern"
            x="0"
            y="0"
            width="48"
            height={height}
            patternUnits="userSpaceOnUse"
          >
            {/* Outer diamond */}
            <polygon
              points={`24,4 44,${height / 2} 24,${height - 4} 4,${height / 2}`}
              style={{ fill: "none", stroke: "var(--color-accent)", strokeWidth: 1.5 }}
            />
            {/* Inner diamond */}
            <polygon
              points={`24,${height / 2 - 8} 32,${height / 2} 24,${height / 2 + 8} 16,${height / 2}`}
              style={{ fill: "none", stroke: "var(--color-accent)", strokeWidth: 0.75, opacity: 0.5 }}
            />
            {/* Center point */}
            <circle
              cx="24"
              cy={height / 2}
              r="1.5"
              style={{ fill: "var(--color-accent)", opacity: 0.7 }}
            />
            {/* Corner marks */}
            <circle cx="0" cy={height / 2} r="2" style={{ fill: "var(--color-accent)", opacity: 0.3 }} />
            <circle cx="48" cy={height / 2} r="2" style={{ fill: "var(--color-accent)", opacity: 0.3 }} />
          </pattern>
        </defs>
        <rect
          width="100%"
          height={height}
          fill="hsl(var(--background))"
        />
        <rect
          width="100%"
          height={height}
          fill="url(#kitenge-strip-pattern)"
        />
      </svg>
    </div>
  );
}
