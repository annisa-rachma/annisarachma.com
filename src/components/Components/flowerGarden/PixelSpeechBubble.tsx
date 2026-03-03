export default function PixelSpeechBubble() {
  return (
    <div className="relative inline-block">
      {/* Speech bubble with pixel border */}
      <div className="relative bg-white border-2 border-grey px-4 py-3 pixelated" style={{
        boxShadow: '4px 4px 0 0 rgba(133,133,133,1)'
      }}>
        <p className="text-xs md:text-sm font-[roboto-serif] text-grey font-semibold tracking-wide whitespace-nowrap" style={{
          fontFamily: 'monospace',
          letterSpacing: '0.05em'
        }}>
          CLICK TO PLANT FLOWER
        </p>
      </div>
    </div>
  );
}
