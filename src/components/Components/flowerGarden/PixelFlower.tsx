import { useState, useEffect } from "react";

type FlowerStage = 1 | 2 | 3;
type FlowerType = "yellow" | "pink" | "blue" | "daisy" | "lavender";

interface PixelFlowerProps {
  index: number;
  onPlant: () => void;
  autoGrow?: boolean;
}

export default function PixelFlower({ autoGrow = false }: PixelFlowerProps) {
  const [stage, setStage] = useState<FlowerStage>(1);
  const [flowerType] = useState<FlowerType>(() => {
    const types: FlowerType[] = ["yellow", "pink", "blue", "daisy", "lavender"];
    return types[Math.floor(Math.random() * types.length)];
  });

  // Generate random variations (recalculated for truly random flowers)
  const getRandomVariations = () => ({
    stemHeight: 28 + Math.floor(Math.random() * 12), // 28-40px
    stemWidth: Math.random() > 0.5 ? 4 : 3, // Thicker or thinner stem
    leafOffset: Math.floor(Math.random() * 8) - 4, // -4 to +4 leaf position offset
    leafSize: Math.random() > 0.5 ? 4 : 5, // Smaller or larger leaves
    leafPattern: Math.floor(Math.random() * 3), // 0, 1, or 2 for different leaf arrangements
    stemCurve: Math.floor(Math.random() * 5), // 0-4 for different curve patterns
    curveDirection: Math.random() > 0.5 ? 1 : -1, // Curve left or right
    curveIntensity: 2 + Math.floor(Math.random() * 4), // 2-6 pixels curve amount
  });

  // Fixed variations per flower instance
  const [variations] = useState(getRandomVariations);

  // Generate random grass patches
  const [grassPatches] = useState(() => {
    const patches = [];
    const patchCount = 12 + Math.floor(Math.random() * 8); // 12-20 grass patches

    for (let i = 0; i < patchCount; i++) {
      patches.push({
        x: Math.floor(Math.random() * 48), // Random x position
        y: 58 + Math.floor(Math.random() * 6), // Near bottom (58-64)
        type: Math.floor(Math.random() * 4), // 4 grass blade types
        shade: Math.floor(Math.random() * 3), // 3 green shades
      });
    }
    return patches;
  });

  // Generate chunky grass blocks (rounded pixel style)
  const [grassBlocks] = useState(() => {
    const blocks = [];
    const blockCount = 2 + Math.floor(Math.random() * 3); // 2-4 grass blocks

    for (let i = 0; i < blockCount; i++) {
      blocks.push({
        x: Math.floor(Math.random() * 36) + 2, // Random x position with padding
        y: 56 + Math.floor(Math.random() * 4), // Near bottom
        width: 6 + Math.floor(Math.random() * 6), // 6-12px wide
        height: 4 + Math.floor(Math.random() * 4), // 4-8px tall
        shade: Math.floor(Math.random() * 2), // 2 main shades
      });
    }
    return blocks;
  });

  // Auto-grow flowers with delays for animation effect
  useEffect(() => {
    if (autoGrow) {
      const timer1 = setTimeout(() => setStage(2), 500);
      const timer2 = setTimeout(() => setStage(3), 1500);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [autoGrow]);

  // Helper function to render grass ground
  const renderGrass = (colors: Record<string, string>) => {
    const grassShades = [colors.darkGreen, colors.green, colors.lightGreen];
    const blockShades = [colors.green, colors.darkGreen];

    return (
      <>
        {/* Render chunky grass blocks first (background layer) */}
        {grassBlocks.map((block, idx) => {
          const baseColor = blockShades[block.shade];
          const pixelSize = 2;

          return (
            <g key={`block-${idx}`}>
              {/* Main body of grass block */}
              <rect
                x={block.x + pixelSize}
                y={block.y + pixelSize}
                width={block.width - pixelSize * 2}
                height={block.height - pixelSize * 2}
                fill={baseColor}
              />

              {/* Top edge with rounded corners (pixel style) */}
              <rect x={block.x + pixelSize} y={block.y} width={block.width - pixelSize * 2} height={pixelSize} fill={baseColor} opacity={0.9} />

              {/* Bottom edge */}
              <rect x={block.x + pixelSize} y={block.y + block.height - pixelSize} width={block.width - pixelSize * 2} height={pixelSize} fill={baseColor} opacity={0.7} />

              {/* Left edge */}
              <rect x={block.x} y={block.y + pixelSize} width={pixelSize} height={block.height - pixelSize * 2} fill={baseColor} opacity={0.8} />

              {/* Right edge */}
              <rect x={block.x + block.width - pixelSize} y={block.y + pixelSize} width={pixelSize} height={block.height - pixelSize * 2} fill={baseColor} opacity={0.8} />

              {/* Top highlights (lighter green on top for depth) */}
              <rect x={block.x + pixelSize * 2} y={block.y + pixelSize} width={block.width - pixelSize * 4} height={pixelSize} fill={colors.lightGreen} opacity={0.4} />
            </g>
          );
        })}

        {/* Render sporadic grass blades (foreground layer) */}
        {grassPatches.map((patch, idx) => {
          const color = grassShades[patch.shade];
          const pixelSize = 2;

          // Different grass blade shapes
          switch (patch.type) {
            case 0: // Single tall blade
              return (
                <g key={`blade-${idx}`}>
                  <rect x={patch.x} y={patch.y} width={pixelSize} height={pixelSize} fill={color} />
                  <rect x={patch.x} y={patch.y - 2} width={pixelSize} height={pixelSize} fill={color} opacity={0.8} />
                </g>
              );
            case 1: // Short double blade
              return (
                <g key={`blade-${idx}`}>
                  <rect x={patch.x} y={patch.y} width={pixelSize} height={pixelSize} fill={color} />
                  <rect x={patch.x + 2} y={patch.y} width={pixelSize} height={pixelSize} fill={color} opacity={0.7} />
                </g>
              );
            case 2: // Triple cluster
              return (
                <g key={`blade-${idx}`}>
                  <rect x={patch.x} y={patch.y} width={pixelSize} height={pixelSize} fill={color} />
                  <rect x={patch.x - 2} y={patch.y + 1} width={pixelSize} height={pixelSize} fill={color} opacity={0.6} />
                  <rect x={patch.x + 2} y={patch.y + 1} width={pixelSize} height={pixelSize} fill={color} opacity={0.6} />
                </g>
              );
            case 3: // Small patch
              return (
                <g key={`blade-${idx}`}>
                  <rect x={patch.x} y={patch.y} width={pixelSize} height={pixelSize} fill={color} opacity={0.5} />
                </g>
              );
            default:
              return null;
          }
        })}
      </>
    );
  };

  // Helper function to render curved stem with specific variations
  const renderCurvedStem = (
    colors: Record<string, string>,
    _pixelSize: number,
    variations: ReturnType<typeof getRandomVariations>,
    baseXOffset: number = 0
  ) => {
    const segments = [];
    const segmentHeight = 4; // Height of each stem segment
    const totalSegments = Math.floor(variations.stemHeight / segmentHeight);

    for (let i = 0; i < totalSegments; i++) {
      let xOffset = 22 + baseXOffset; // Base X position with offset for multiple stems
      const yPos = 64 - (i + 1) * segmentHeight;

      // Apply curve based on pattern
      switch (variations.stemCurve) {
        case 0: // Straight (no curve)
          xOffset = 22 + baseXOffset;
          break;
        case 1: // Simple curve
          xOffset = 22 + baseXOffset + (variations.curveDirection * variations.curveIntensity * i) / totalSegments;
          break;
        case 2: // S-curve
          if (i < totalSegments / 2) {
            xOffset = 22 + baseXOffset + (variations.curveDirection * variations.curveIntensity * i) / (totalSegments / 2);
          } else {
            xOffset = 22 + baseXOffset + (variations.curveDirection * variations.curveIntensity * (totalSegments - i)) / (totalSegments / 2);
          }
          break;
        case 3: // Wave curve
          xOffset = 22 + baseXOffset + variations.curveDirection * Math.sin((i / totalSegments) * Math.PI * 2) * variations.curveIntensity;
          break;
        case 4: // Bent at middle
          if (i < totalSegments / 2) {
            xOffset = 22 + baseXOffset;
          } else {
            xOffset = 22 + baseXOffset + variations.curveDirection * variations.curveIntensity;
          }
          break;
      }

      segments.push(
        <rect
          key={i}
          x={Math.round(xOffset)}
          y={yPos}
          width={variations.stemWidth}
          height={segmentHeight}
          fill={colors.darkGreen}
        />
      );
    }

    return <>{segments}</>;
  };

  const getFlowerSVG = () => {
    const pixelSize = 4;

    // Color palette
    const colors = {
      darkGreen: "#2d5016",
      green: "#4a8c2a",
      lightGreen: "#7bc043",
      yellow: "#ffd700",
      darkYellow: "#ffb700",
      pink: "#ff69b4",
      darkPink: "#ff1493",
      blue: "#4169e1",
      darkBlue: "#1e4d8b",
      white: "#ffffff",
      lightGray: "#e0e0e0",
      lavender: "#9370db",
      darkLavender: "#6a4c9c",
      brown: "#8b4513",
      soil: "#d4a574",
    };

    switch (stage) {
      case 1: // Seed/Sprout
        return (
          <svg width="48" height="64" viewBox="0 0 48 64" className="pixelated animate-fadeIn">
            {/* Small sprout */}
            <rect x="20" y="48" width={pixelSize} height={pixelSize} fill={colors.lightGreen} />
            <rect x="24" y="48" width={pixelSize} height={pixelSize} fill={colors.lightGreen} />
            <rect x="22" y="52" width={pixelSize} height={pixelSize * 2} fill={colors.green} />
            {/* Grass ground */}
            {renderGrass(colors)}
          </svg>
        );

      case 2: {
        // Stem with leaves (with variations)
        const leafY = 32 + variations.leafOffset;
        return (
          <svg width="48" height="64" viewBox="0 0 48 64" className="pixelated animate-growUp">
            {/* Leaves with random patterns */}
            {variations.leafPattern === 0 && (
              <>
                {/* Pattern 0: Opposite leaves */}
                <rect x="16" y={leafY} width={variations.leafSize} height={pixelSize} fill={colors.darkGreen} />
                <rect x="12" y={leafY + 4} width={variations.leafSize} height={pixelSize} fill={colors.green} />
                <rect x="32" y={leafY} width={variations.leafSize} height={pixelSize} fill={colors.darkGreen} />
                <rect x="32" y={leafY + 4} width={variations.leafSize} height={pixelSize} fill={colors.green} />
              </>
            )}
            {variations.leafPattern === 1 && (
              <>
                {/* Pattern 1: Alternate leaves */}
                <rect x="14" y={leafY} width={variations.leafSize} height={pixelSize} fill={colors.darkGreen} />
                <rect x="10" y={leafY + 3} width={variations.leafSize} height={pixelSize} fill={colors.green} />
                <rect x="30" y={leafY + 6} width={variations.leafSize} height={pixelSize} fill={colors.darkGreen} />
                <rect x="34" y={leafY + 9} width={variations.leafSize} height={pixelSize} fill={colors.lightGreen} />
              </>
            )}
            {variations.leafPattern === 2 && (
              <>
                {/* Pattern 2: Clustered leaves */}
                <rect x="16" y={leafY + 2} width={variations.leafSize} height={pixelSize} fill={colors.green} />
                <rect x="32" y={leafY + 2} width={variations.leafSize} height={pixelSize} fill={colors.green} />
                <rect x="14" y={leafY + 6} width={pixelSize} height={pixelSize} fill={colors.lightGreen} />
                <rect x="34" y={leafY + 6} width={pixelSize} height={pixelSize} fill={colors.lightGreen} />
              </>
            )}
            {/* Curved stem */}
            {renderCurvedStem(colors, pixelSize, variations, 0)}
            {/* Grass ground */}
            {renderGrass(colors)}
          </svg>
        );
      }

      case 3: // Fully bloomed
        return renderBloomedFlower(flowerType, pixelSize, colors);

      default:
        return null;
    }
  };

  const renderBloomedFlower = (
    type: FlowerType,
    pixelSize: number,
    colors: Record<string, string>
  ) => {
    const leafY = 32 + variations.leafOffset;
    const commonStem = (
      <>
        {/* Leaves with variations */}
        {variations.leafPattern === 0 && (
          <>
            <rect x="14" y={leafY} width={variations.leafSize} height={pixelSize} fill={colors.darkGreen} />
            <rect x="10" y={leafY + 4} width={variations.leafSize} height={pixelSize} fill={colors.green} />
            <rect x="30" y={leafY} width={variations.leafSize} height={pixelSize} fill={colors.darkGreen} />
            <rect x="34" y={leafY + 4} width={variations.leafSize} height={pixelSize} fill={colors.green} />
          </>
        )}
        {variations.leafPattern === 1 && (
          <>
            <rect x="12" y={leafY} width={variations.leafSize} height={pixelSize} fill={colors.darkGreen} />
            <rect x="8" y={leafY + 3} width={variations.leafSize} height={pixelSize} fill={colors.green} />
            <rect x="32" y={leafY + 6} width={variations.leafSize} height={pixelSize} fill={colors.darkGreen} />
            <rect x="36" y={leafY + 9} width={variations.leafSize} height={pixelSize} fill={colors.lightGreen} />
          </>
        )}
        {variations.leafPattern === 2 && (
          <>
            <rect x="14" y={leafY + 2} width={variations.leafSize} height={pixelSize} fill={colors.green} />
            <rect x="34" y={leafY + 2} width={variations.leafSize} height={pixelSize} fill={colors.green} />
            <rect x="12" y={leafY + 6} width={pixelSize} height={pixelSize} fill={colors.lightGreen} />
            <rect x="36" y={leafY + 6} width={pixelSize} height={pixelSize} fill={colors.lightGreen} />
          </>
        )}
        {/* Curved stem */}
        {renderCurvedStem(colors, pixelSize, variations, 0)}
      </>
    );

    switch (type) {
      case "yellow": // Sunflower
        return (
          <svg width="48" height="64" viewBox="0 0 48 64" className="pixelated animate-growUp">
            {/* Petals */}
            <rect x="22" y="4" width={pixelSize} height={pixelSize} fill={colors.yellow} />
            <rect x="10" y="12" width={pixelSize} height={pixelSize} fill={colors.yellow} />
            <rect x="34" y="12" width={pixelSize} height={pixelSize} fill={colors.yellow} />
            <rect x="6" y="20" width={pixelSize} height={pixelSize} fill={colors.darkYellow} />
            <rect x="38" y="20" width={pixelSize} height={pixelSize} fill={colors.darkYellow} />
            {/* Center */}
            <rect x="18" y="12" width={pixelSize * 3} height={pixelSize * 3} fill={colors.darkYellow} />
            {commonStem}
            {/* Grass ground */}
            {renderGrass(colors)}
          </svg>
        );

      case "pink": // Rose-like flower
        return (
          <svg width="48" height="64" viewBox="0 0 48 64" className="pixelated animate-growUp">
            {/* Petals */}
            <rect x="18" y="8" width={pixelSize} height={pixelSize} fill={colors.pink} />
            <rect x="26" y="8" width={pixelSize} height={pixelSize} fill={colors.pink} />
            <rect x="14" y="12" width={pixelSize} height={pixelSize} fill={colors.pink} />
            <rect x="30" y="12" width={pixelSize} height={pixelSize} fill={colors.pink} />
            <rect x="14" y="16" width={pixelSize} height={pixelSize} fill={colors.darkPink} />
            <rect x="30" y="16" width={pixelSize} height={pixelSize} fill={colors.darkPink} />
            <rect x="18" y="16" width={pixelSize * 3} height={pixelSize} fill={colors.darkPink} />
            {/* Center */}
            <rect x="22" y="12" width={pixelSize} height={pixelSize} fill={colors.darkPink} />
            {commonStem}
            {/* Grass ground */}
            {renderGrass(colors)}
          </svg>
        );

      case "blue": // Simple wildflower
        return (
          <svg width="48" height="64" viewBox="0 0 48 64" className="pixelated animate-growUp">
            {/* Petals - 5 petals around center */}
            <rect x="22" y="6" width={pixelSize} height={pixelSize} fill={colors.blue} />
            <rect x="12" y="14" width={pixelSize} height={pixelSize} fill={colors.blue} />
            <rect x="32" y="14" width={pixelSize} height={pixelSize} fill={colors.blue} />
            <rect x="16" y="22" width={pixelSize} height={pixelSize} fill={colors.darkBlue} />
            <rect x="28" y="22" width={pixelSize} height={pixelSize} fill={colors.darkBlue} />
            {/* Center */}
            <rect x="22" y="14" width={pixelSize} height={pixelSize} fill={colors.darkYellow} />
            {commonStem}
            {/* Grass ground */}
            {renderGrass(colors)}
          </svg>
        );

      case "daisy": // White petals with yellow center
        return (
          <svg width="48" height="64" viewBox="0 0 48 64" className="pixelated animate-growUp">
            {/* Petals radiating out */}
            <rect x="22" y="6" width={pixelSize} height={pixelSize} fill={colors.white} />
            <rect x="10" y="14" width={pixelSize} height={pixelSize} fill={colors.white} />
            <rect x="34" y="14" width={pixelSize} height={pixelSize} fill={colors.white} />
            <rect x="14" y="10" width={pixelSize} height={pixelSize} fill={colors.lightGray} />
            <rect x="30" y="10" width={pixelSize} height={pixelSize} fill={colors.lightGray} />
            <rect x="14" y="18" width={pixelSize} height={pixelSize} fill={colors.lightGray} />
            <rect x="30" y="18" width={pixelSize} height={pixelSize} fill={colors.lightGray} />
            <rect x="22" y="22" width={pixelSize} height={pixelSize} fill={colors.white} />
            {/* Yellow center */}
            <rect x="18" y="14" width={pixelSize * 3} height={pixelSize} fill={colors.yellow} />
            {commonStem}
            {/* Grass ground */}
            {renderGrass(colors)}
          </svg>
        );

      case "lavender": // Tall purple flowers
        return (
          <svg width="48" height="64" viewBox="0 0 48 64" className="pixelated animate-growUp">
            {/* Top cluster */}
            <rect x="20" y="6" width={pixelSize} height={pixelSize} fill={colors.lavender} />
            <rect x="24" y="6" width={pixelSize} height={pixelSize} fill={colors.lavender} />
            <rect x="18" y="10" width={pixelSize} height={pixelSize} fill={colors.darkLavender} />
            <rect x="26" y="10" width={pixelSize} height={pixelSize} fill={colors.darkLavender} />
            <rect x="20" y="14" width={pixelSize} height={pixelSize} fill={colors.lavender} />
            <rect x="24" y="14" width={pixelSize} height={pixelSize} fill={colors.lavender} />
            <rect x="22" y="18" width={pixelSize} height={pixelSize} fill={colors.darkLavender} />
            {commonStem}
            {/* Grass ground */}
            {renderGrass(colors)}
          </svg>
        );

      default:
        return null;
    }
  };

  return <div>{getFlowerSVG()}</div>;
}
