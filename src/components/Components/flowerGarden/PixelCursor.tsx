export default function PixelCursor() {
  return (
    <svg width="24" height="32" viewBox="0 0 24 32" className="pixelated">
      {/* Pixel art cursor/pointer hand */}
      {/* Sparkles on top */}
      <rect x="4" y="0" width="2" height="2" fill="#858585" />
      <rect x="10" y="0" width="2" height="2" fill="#858585" />
      <rect x="16" y="0" width="2" height="2" fill="#858585" />

      {/* Index finger pointing up */}
      <rect x="10" y="4" width="4" height="2" fill="#858585" />
      <rect x="10" y="6" width="4" height="2" fill="#858585" />
      <rect x="10" y="8" width="4" height="2" fill="#858585" />
      <rect x="10" y="10" width="4" height="2" fill="#858585" />

      {/* Hand palm */}
      <rect x="4" y="12" width="4" height="2" fill="#858585" />
      <rect x="8" y="12" width="10" height="2" fill="#858585" />
      <rect x="4" y="14" width="14" height="2" fill="#858585" />

      {/* Other fingers */}
      <rect x="4" y="16" width="2" height="2" fill="#858585" />
      <rect x="8" y="16" width="2" height="2" fill="#858585" />
      <rect x="12" y="16" width="2" height="2" fill="#858585" />
      <rect x="16" y="16" width="2" height="2" fill="#858585" />

      <rect x="4" y="18" width="2" height="2" fill="#858585" />
      <rect x="8" y="18" width="2" height="2" fill="#858585" />
      <rect x="12" y="18" width="2" height="2" fill="#858585" />
      <rect x="16" y="18" width="2" height="2" fill="#858585" />

      {/* Bottom of hand */}
      <rect x="6" y="20" width="12" height="2" fill="#858585" />
      <rect x="8" y="22" width="8" height="2" fill="#858585" />

      {/* Thumb */}
      <rect x="2" y="16" width="2" height="2" fill="#858585" />
      <rect x="2" y="18" width="2" height="2" fill="#858585" />
      <rect x="2" y="20" width="2" height="2" fill="#858585" />
    </svg>
  );
}
