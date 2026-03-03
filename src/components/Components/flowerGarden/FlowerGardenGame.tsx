import { useState, useEffect } from "react";
import PixelFlower from "./PixelFlower";
import PixelCursor from "./PixelCursor";
import PixelSpeechBubble from "./PixelSpeechBubble";

interface PlantedFlower {
  id: number;
  x: number;
  y: number;
  scale: number;
}

export default function FlowerGardenGame() {
  const [flowers, setFlowers] = useState<PlantedFlower[]>([]);
  const [nextId, setNextId] = useState(0);
  const [showTutorial, setShowTutorial] = useState(true);
  const [tutorialComplete, setTutorialComplete] = useState(false);

  // Plant the first example flower after tutorial animation
  useEffect(() => {
    if (tutorialComplete && flowers.length === 0) {
      const timer = setTimeout(() => {
        // Plant first flower in the center-ish area
        setFlowers([
          {
            id: 0,
            x: 50,
            y: 50,
            scale: 1,
          },
        ]);
        setNextId(1);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [tutorialComplete, flowers.length]);

  // Hide tutorial after animation sequence
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowTutorial(false);
    }, 3000); // Show animation for 3 seconds

    const timer2 = setTimeout(() => {
      setTutorialComplete(true);
    }, 3500); // Start growing flower after animation

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Don't allow planting during tutorial
    if (showTutorial) return;

    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();

    // Get click position relative to container
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    // Random scale between 0.6 and 1.2
    const scale = 0.6 + Math.random() * 0.6;

    // Add new flower at clicked position
    setFlowers((prev) => [
      ...prev,
      {
        id: nextId,
        x,
        y,
        scale,
      },
    ]);

    setNextId((prev) => prev + 1);
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      {/* Click Tutorial Animation */}
      {showTutorial && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20 gap-8">
          {/* Speech Bubble */}
          <div className="animate-fadeIn">
            <PixelSpeechBubble />
          </div>

          {/* Pixel Cursor with animations */}
          <div className="relative">
            {/* Animated pixel cursor */}
            <div className="animate-click">
              <PixelCursor />
            </div>
            {/* Ripple effect for click */}
            <div className="absolute left-1/2 top-full -translate-x-1/2 mt-2">
              <div className="w-8 h-8 border-2 border-black animate-ripple"></div>
            </div>
          </div>
        </div>
      )}

      {/* Planting Area - Full Container */}
      <div
        className="relative w-full h-full cursor-pointer"
        onClick={handleContainerClick}
      >
        {/* Render all planted flowers */}
        {flowers.map((flower) => (
          <div
            key={flower.id}
            className="absolute"
            style={{
              left: `${flower.x}%`,
              top: `${flower.y}%`,
              transform: `translate(-50%, -50%) scale(${flower.scale})`,
              transformOrigin: "center",
              pointerEvents: "none",
            }}
          >
            <PixelFlower
              index={flower.id}
              onPlant={() => {}}
              autoGrow={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
