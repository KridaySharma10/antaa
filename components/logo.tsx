export function Logo() {
  return (
    <svg
      width="200"
      height="60"
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-auto"
    >
      {/* Orange orbital swoosh */}
      <path
        d="M100 5 C120 5, 135 15, 140 25 C145 35, 143 45, 138 50 C133 55, 120 58, 105 57"
        stroke="url(#orangeGradient)"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="143" cy="10" r="3.5" fill="url(#orangeGradient)" />
      
      {/* Bottom orange swoosh */}
      <path
        d="M95 57 C80 56, 65 50, 60 40 C55 30, 57 20, 62 15"
        stroke="url(#orangeGradient)"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* ANTAA text in bold blue */}
      <text x="20" y="38" className="font-bold" fontSize="32" fill="#1e3a8a" letterSpacing="2">
        ANTAA
      </text>
      
      {/* INTELLIPRO SERVICES in gold */}
      <text x="20" y="54" fontSize="9" fill="url(#goldGradient)" letterSpacing="4" fontWeight="500">
        INTELLIPRO SERVICES
      </text>
      
      {/* Gradients */}
      <defs>
        <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#fb923c" />
        </linearGradient>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
      </defs>
    </svg>
  )
}
