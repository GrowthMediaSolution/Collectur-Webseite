/**
 * EntruempelungScene – Flat-design SVG illustration
 * Shows a German house + branded truck + boxes + worker.
 * Clearly illustrated (not a photo). Brand colors: #3B82F6 / #1E3A5F.
 * Slot: replace worker avatar with /public/team/abraham.jpg later.
 */
export default function EntruempelungScene({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 540 340"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Professionelle Entrümpelung in Ahlen – illustrierte Szene mit Haus und Collectus-Truck"
      className={className}
    >
      <defs>
        <linearGradient id="es-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EFF6FF" />
          <stop offset="100%" stopColor="#F8FBFF" />
        </linearGradient>
        <linearGradient id="es-truck" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient id="es-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D1FAE5" />
          <stop offset="100%" stopColor="#A7F3D0" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="540" height="340" fill="url(#es-sky)" rx="16" />

      {/* Sun */}
      <circle cx="488" cy="52" r="34" fill="#FEF9C3" opacity="0.7" />
      <circle cx="488" cy="52" r="24" fill="#FEF08A" opacity="0.85" />

      {/* Clouds */}
      <ellipse cx="130" cy="65" rx="38" ry="18" fill="white" opacity="0.8" />
      <ellipse cx="108" cy="72" rx="28" ry="14" fill="white" opacity="0.8" />
      <ellipse cx="162" cy="72" rx="24" ry="12" fill="white" opacity="0.8" />

      <ellipse cx="370" cy="80" rx="30" ry="14" fill="white" opacity="0.7" />
      <ellipse cx="350" cy="86" rx="22" ry="11" fill="white" opacity="0.7" />
      <ellipse cx="394" cy="86" rx="20" ry="10" fill="white" opacity="0.7" />

      {/* Ground */}
      <rect x="0" y="278" width="540" height="62" fill="url(#es-ground)" rx="0 0 16 16" />
      <rect x="0" y="278" width="540" height="5" fill="#6EE7B7" />

      {/* Driveway */}
      <path d="M155 340 Q205 285 260 280 L365 280 Q420 280 450 340 Z" fill="#E5E7EB" opacity="0.7" />

      {/* ── HOUSE ── */}
      {/* Shadow */}
      <ellipse cx="367" cy="283" rx="108" ry="7" fill="#9CA3AF" opacity="0.2" />
      {/* Walls */}
      <rect x="257" y="178" width="215" height="104" rx="3" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" />
      {/* Roof */}
      <polygon points="240,184 369,112 490,184" fill="#1E3A5F" />
      <polygon points="240,184 369,112 490,184 476,184 369,125 255,184" fill="#293E6B" opacity="0.45" />
      {/* Chimney */}
      <rect x="408" y="127" width="22" height="42" rx="2" fill="#374151" />
      <rect x="405" y="124" width="28" height="7" rx="2" fill="#4B5563" />
      {/* Smoke puffs */}
      <circle cx="419" cy="115" r="7" fill="#D1D5DB" opacity="0.5" />
      <circle cx="424" cy="103" r="5" fill="#D1D5DB" opacity="0.35" />

      {/* Window left */}
      <rect x="272" y="196" width="54" height="50" rx="4" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1.5" />
      <line x1="299" y1="196" x2="299" y2="246" stroke="#3B82F6" strokeWidth="1.5" />
      <line x1="272" y1="221" x2="326" y2="221" stroke="#3B82F6" strokeWidth="1.5" />
      <rect x="274" y="198" width="12" height="22" rx="2" fill="white" opacity="0.55" />

      {/* Window right */}
      <rect x="402" y="196" width="54" height="50" rx="4" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1.5" />
      <line x1="429" y1="196" x2="429" y2="246" stroke="#3B82F6" strokeWidth="1.5" />
      <line x1="402" y1="221" x2="456" y2="221" stroke="#3B82F6" strokeWidth="1.5" />
      <rect x="404" y="198" width="12" height="22" rx="2" fill="white" opacity="0.55" />

      {/* Door */}
      <rect x="333" y="232" width="60" height="50" rx="4 4 0 0" fill="#2563EB" />
      <path d="M333 243 Q363 226 393 243" fill="#3B82F6" />
      <circle cx="385" cy="259" r="4" fill="#FDE68A" />
      <rect x="331" y="230" width="64" height="52" rx="4 4 0 0" fill="none" stroke="#1E3A5F" strokeWidth="2" />
      {/* Door step */}
      <rect x="323" y="279" width="82" height="5" rx="2" fill="#D1D5DB" />

      {/* Right tree */}
      <rect x="478" y="225" width="10" height="56" rx="3" fill="#92400E" />
      <ellipse cx="483" cy="213" rx="26" ry="32" fill="#4ADE80" />
      <ellipse cx="483" cy="207" rx="18" ry="24" fill="#22C55E" />

      {/* Left bush */}
      <ellipse cx="262" cy="278" rx="22" ry="13" fill="#4ADE80" />
      <ellipse cx="249" cy="282" rx="15" ry="11" fill="#22C55E" />

      {/* ── TRUCK ── */}
      {/* Shadow */}
      <ellipse cx="105" cy="284" rx="97" ry="6" fill="#9CA3AF" opacity="0.2" />
      {/* Cargo section */}
      <rect x="16" y="214" width="140" height="68" rx="5" fill="url(#es-truck)" />
      {/* Cargo panel lines */}
      <line x1="86" y1="214" x2="86" y2="282" stroke="#2563EB" strokeWidth="1.5" opacity="0.6" />
      <line x1="16" y1="248" x2="156" y2="248" stroke="#2563EB" strokeWidth="1.5" opacity="0.4" />
      {/* Cab */}
      <rect x="150" y="228" width="64" height="54" rx="6 6 0 0" fill="#2563EB" />
      {/* Windshield */}
      <rect x="158" y="236" width="48" height="32" rx="3" fill="#DBEAFE" opacity="0.85" />
      <line x1="182" y1="236" x2="182" y2="268" stroke="#93C5FD" strokeWidth="1" />
      {/* Undercarriage */}
      <rect x="12" y="273" width="206" height="10" rx="3" fill="#1E3A5F" />
      {/* Rear wheel */}
      <circle cx="54" cy="284" r="20" fill="#1F2937" />
      <circle cx="54" cy="284" r="12" fill="#374151" />
      <circle cx="54" cy="284" r="5" fill="#9CA3AF" />
      {/* Front wheel */}
      <circle cx="185" cy="284" r="20" fill="#1F2937" />
      <circle cx="185" cy="284" r="12" fill="#374151" />
      <circle cx="185" cy="284" r="5" fill="#9CA3AF" />
      {/* Checkmark badge on truck */}
      <circle cx="86" cy="248" r="16" fill="white" opacity="0.18" />
      <polyline points="78,248 85,255 97,241" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* ── BOXES ── */}
      {/* Box on ground */}
      <rect x="168" y="255" width="48" height="28" rx="3" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
      <line x1="192" y1="255" x2="192" y2="283" stroke="#F59E0B" strokeWidth="1.5" />
      <line x1="168" y1="269" x2="216" y2="269" stroke="#F59E0B" strokeWidth="1.5" />
      {/* Box stacked */}
      <rect x="173" y="228" width="40" height="27" rx="3" fill="#FDE68A" stroke="#F59E0B" strokeWidth="1.5" />
      <line x1="193" y1="228" x2="193" y2="255" stroke="#F59E0B" strokeWidth="1.5" />
      <line x1="173" y1="241" x2="213" y2="241" stroke="#F59E0B" strokeWidth="1.5" />

      {/* ── WORKER FIGURE ── */}
      {/* Legs */}
      <rect x="216" y="257" width="11" height="28" rx="4" fill="#374151" />
      <rect x="230" y="257" width="11" height="28" rx="4" fill="#374151" />
      {/* Body */}
      <rect x="208" y="222" width="34" height="38" rx="6" fill="#3B82F6" />
      {/* Left arm */}
      <rect x="194" y="229" width="16" height="9" rx="4" fill="#FBBF24" />
      {/* Right arm */}
      <rect x="242" y="229" width="16" height="9" rx="4" fill="#FBBF24" />
      {/* Box being carried */}
      <rect x="198" y="203" width="46" height="30" rx="3" fill="#FDE68A" stroke="#F59E0B" strokeWidth="1.5" />
      <line x1="221" y1="203" x2="221" y2="233" stroke="#F59E0B" strokeWidth="1.5" />
      <line x1="198" y1="218" x2="244" y2="218" stroke="#F59E0B" strokeWidth="1.5" />
      {/* Head */}
      <circle cx="225" cy="205" r="16" fill="#FBBF24" />
      {/* Hair */}
      <path d="M210,199 Q225,190 240,199 Q239,192 225,189 Q211,192 210,199 Z" fill="#1F2937" />
      {/* Eyes */}
      <circle cx="220" cy="204" r="2" fill="#92400E" />
      <circle cx="230" cy="204" r="2" fill="#92400E" />
      {/* Smile */}
      <path d="M219,211 Q225,216 231,211" fill="none" stroke="#92400E" strokeWidth="1.5" strokeLinecap="round" />

      {/* Decorative label (subtle) */}
      <rect x="30" y="228" width="52" height="26" rx="4" fill="white" opacity="0.22" />
      <polyline points="40,241 46,247 58,235" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
