/**
 * SeniorenCareScene – Warm, flat-design SVG illustration
 * Shows a caring service scenario: a helper and an elderly person,
 * a cozy home environment. Respectful, warm, clearly illustrated.
 * Brand colors: #3B82F6 (blue) + warm ambers.
 */
export default function SeniorenCareScene({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 320"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Einfühlsamer Seniorenservice – illustrierte Szene mit Helfer und Senioren"
      className={className}
    >
      <defs>
        <linearGradient id="sc-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="100%" stopColor="#FEF3C7" />
        </linearGradient>
        <linearGradient id="sc-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#FCD34D" />
        </linearGradient>
        <linearGradient id="sc-wall" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="100%" stopColor="#FEF9C3" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="480" height="320" fill="url(#sc-bg)" rx="16" />

      {/* Wall */}
      <rect x="0" y="0" width="480" height="240" fill="url(#sc-wall)" rx="16 16 0 0" />

      {/* Wallpaper strip */}
      <rect x="0" y="230" width="480" height="8" fill="#FDE68A" />

      {/* Floor */}
      <rect x="0" y="238" width="480" height="82" fill="#FEF3C7" rx="0 0 16 16" />
      {/* Floor boards */}
      {[0, 80, 160, 240, 320, 400].map((x) => (
        <line key={x} x1={x} y1="238" x2={x + 60} y2="320" stroke="#FDE68A" strokeWidth="1.5" opacity="0.6" />
      ))}

      {/* Window */}
      <rect x="310" y="30" width="130" height="100" rx="6" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="2" />
      <line x1="375" y1="30" x2="375" y2="130" stroke="#93C5FD" strokeWidth="2" />
      <line x1="310" y1="80" x2="440" y2="80" stroke="#93C5FD" strokeWidth="2" />
      {/* Window frame */}
      <rect x="308" y="28" width="134" height="104" rx="6" fill="none" stroke="#BFDBFE" strokeWidth="3" />
      {/* Window glow */}
      <rect x="312" y="32" width="30" height="46" rx="4" fill="white" opacity="0.5" />
      {/* Window curtain left */}
      <path d="M306,28 Q292,68 306,130" fill="#FCA5A5" opacity="0.5" stroke="#F87171" strokeWidth="1.5" />
      {/* Window curtain right */}
      <path d="M442,28 Q456,68 442,130" fill="#FCA5A5" opacity="0.5" stroke="#F87171" strokeWidth="1.5" />
      {/* Sunbeam through window */}
      <path d="M310,130 L200,238 L240,238 L370,130 Z" fill="#FEF9C3" opacity="0.3" />

      {/* Armchair */}
      <rect x="16" y="195" width="110" height="60" rx="10" fill="#F59E0B" />
      <rect x="8" y="175" width="126" height="50" rx="12" fill="#FBBF24" />
      {/* Chair armrests */}
      <rect x="8" y="195" width="20" height="40" rx="6" fill="#F59E0B" />
      <rect x="114" y="195" width="20" height="40" rx="6" fill="#F59E0B" />
      {/* Chair cushion highlight */}
      <rect x="24" y="182" width="94" height="30" rx="8" fill="#FCD34D" opacity="0.5" />
      {/* Chair legs */}
      <rect x="22" y="250" width="12" height="20" rx="3" fill="#D97706" />
      <rect x="108" y="250" width="12" height="20" rx="3" fill="#D97706" />

      {/* Side table */}
      <rect x="145" y="225" width="55" height="10" rx="3" fill="#D97706" />
      <rect x="168" y="235" width="8" height="35" rx="2" fill="#D97706" />

      {/* Tea cup on table */}
      <ellipse cx="172" cy="225" rx="14" ry="6" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="1.5" />
      <path d="M158,225 Q158,240 172,242 Q186,240 186,225" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="1.5" />
      <path d="M186,230 Q196,228 196,234 Q196,240 186,238" fill="none" stroke="#93C5FD" strokeWidth="1.5" />
      {/* Steam */}
      <path d="M167,220 Q164,214 167,208" fill="none" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path d="M173,218 Q170,212 173,206" fill="none" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />

      {/* Plant in corner */}
      <rect x="418" y="202" width="28" height="40" rx="4" fill="#B45309" />
      <rect x="414" y="198" width="36" height="8" rx="3" fill="#92400E" />
      {/* Plant leaves */}
      <ellipse cx="432" cy="180" rx="22" ry="28" fill="#4ADE80" />
      <ellipse cx="432" cy="174" rx="15" ry="22" fill="#22C55E" />
      <ellipse cx="418" cy="188" rx="16" ry="18" fill="#4ADE80" opacity="0.8" />
      <ellipse cx="446" cy="188" rx="16" ry="18" fill="#4ADE80" opacity="0.8" />

      {/* ── ELDERLY PERSON (seated in chair) ── */}
      {/* Body */}
      <rect x="38" y="188" width="30" height="36" rx="8" fill="#E5E7EB" />
      {/* Head */}
      <circle cx="53" cy="175" r="17" fill="#FBBF24" />
      {/* White/gray hair */}
      <path d="M37,172 Q53,162 69,172 Q67,163 53,159 Q39,163 37,172 Z" fill="#D1D5DB" />
      <path d="M37,172 Q36,180 38,185" fill="none" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round" />
      <path d="M69,172 Q70,180 68,185" fill="none" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round" />
      {/* Eyes */}
      <circle cx="47" cy="174" r="2" fill="#92400E" />
      <circle cx="59" cy="174" r="2" fill="#92400E" />
      {/* Smile */}
      <path d="M46,181 Q53,186 60,181" fill="none" stroke="#92400E" strokeWidth="1.5" strokeLinecap="round" />
      {/* Glasses */}
      <rect x="41" y="170" width="14" height="9" rx="3" fill="none" stroke="#374151" strokeWidth="1.5" />
      <rect x="57" y="170" width="14" height="9" rx="3" fill="none" stroke="#374151" strokeWidth="1.5" />
      <line x1="55" y1="174" x2="57" y2="174" stroke="#374151" strokeWidth="1.5" />
      {/* Cane */}
      <line x1="72" y1="224" x2="80" y2="270" stroke="#92400E" strokeWidth="3" strokeLinecap="round" />
      <path d="M72,224 Q78,218 82,222" fill="none" stroke="#92400E" strokeWidth="3" strokeLinecap="round" />

      {/* ── HELPER FIGURE (standing, right) ── */}
      {/* Legs */}
      <rect x="264" y="225" width="14" height="55" rx="5" fill="#374151" />
      <rect x="282" y="225" width="14" height="55" rx="5" fill="#374151" />
      {/* Body – brand blue shirt */}
      <rect x="254" y="180" width="52" height="50" rx="8" fill="#3B82F6" />
      {/* Collar */}
      <path d="M266,180 L280,192 L294,180" fill="#DBEAFE" />
      {/* Left arm – extended toward senior */}
      <rect x="208" y="192" width="48" height="13" rx="6" fill="#3B82F6" />
      <rect x="204" y="193" width="16" height="11" rx="5" fill="#FBBF24" />
      {/* Right arm */}
      <rect x="304" y="192" width="34" height="13" rx="6" fill="#3B82F6" />
      <rect x="334" y="193" width="16" height="11" rx="5" fill="#FBBF24" />
      {/* Head */}
      <circle cx="280" cy="163" r="19" fill="#FBBF24" />
      {/* Dark hair */}
      <path d="M262,158 Q280,148 298,158 Q296,149 280,145 Q264,149 262,158 Z" fill="#1F2937" />
      {/* Eyes */}
      <circle cx="274" cy="162" r="2.5" fill="#92400E" />
      <circle cx="286" cy="162" r="2.5" fill="#92400E" />
      {/* Smile */}
      <path d="M273,170 Q280,176 287,170" fill="none" stroke="#92400E" strokeWidth="1.8" strokeLinecap="round" />
      {/* Shoes */}
      <rect x="260" y="275" width="20" height="10" rx="4" fill="#1F2937" />
      <rect x="278" y="275" width="20" height="10" rx="4" fill="#1F2937" />

      {/* ── HOUSE ICON (between figures, floating) ── */}
      <g transform="translate(155,95)">
        {/* Shadow */}
        <ellipse cx="52" cy="118" rx="44" ry="6" fill="#9CA3AF" opacity="0.2" />
        {/* House body */}
        <rect x="14" y="62" width="76" height="58" rx="4" fill="white" stroke="#DBEAFE" strokeWidth="2" />
        {/* Roof */}
        <polygon points="5,68 52,28 99,68" fill="#1E3A5F" />
        {/* Door */}
        <rect x="38" y="88" width="28" height="32" rx="3 3 0 0" fill="#3B82F6" />
        {/* Door knob */}
        <circle cx="60" cy="105" r="3" fill="#FDE68A" />
        {/* Windows */}
        <rect x="18" y="72" width="22" height="20" rx="3" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="1.5" />
        <rect x="64" y="72" width="22" height="20" rx="3" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="1.5" />
        {/* Heart */}
        <path d="M43,52 Q44,46 52,46 Q60,46 61,52 Q62,58 52,66 Q42,58 43,52 Z" fill="#F87171" opacity="0.85" />
      </g>

      {/* Floating sparkles / stars */}
      <text x="135" y="80" fontSize="14" fill="#3B82F6" opacity="0.5">✦</text>
      <text x="370" y="155" fontSize="10" fill="#3B82F6" opacity="0.4">✦</text>
      <text x="100" y="140" fontSize="8" fill="#F59E0B" opacity="0.5">✦</text>
    </svg>
  )
}
