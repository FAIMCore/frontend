import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface MovingElement {
  id: number;
  type: "horizontal" | "vertical";
  lineIndex: number;
  delay: number;
  duration: number;
  color: string;
}

const AnimatedGrid = () => {
  const [elements, setElements] = useState<MovingElement[]>([]);

  // Grid configuration
  const gridSize = { horizontal: 6, vertical: 8 };

  useEffect(() => {
    // Generate random moving elements
    const generatedElements: MovingElement[] = [];
    // Brighter, more vibrant colors
    const colors = [
      "#00ffff",
      "#ff00ff",
      "#00ff00",
      "#ffff00",
      "#ff6600",
      "#ffffff",
    ];

    for (let i = 0; i < 15; i++) {
      const type = Math.random() > 0.5 ? "horizontal" : "vertical";
      const lineIndex =
        type === "horizontal"
          ? Math.floor(Math.random() * gridSize.horizontal)
          : Math.floor(Math.random() * gridSize.vertical);

      generatedElements.push({
        id: i,
        type,
        lineIndex,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    setElements(generatedElements);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundColor: "#000000",
        overflow: "hidden",
      }}
    >
      {/* Grid Lines */}
      <div style={{ position: "absolute", inset: 0 }}>
        {/* Horizontal lines */}
        {Array.from({ length: gridSize.horizontal }).map((_, i) => (
          <div
            key={`h-${i}`}
            style={{
              position: "absolute",
              width: "100%",
              height: "1px",
              backgroundColor: "rgba(100, 100, 100, 0.3)",
              top: `${(100 / (gridSize.horizontal + 1)) * (i + 1)}%`,
            }}
          />
        ))}

        {/* Vertical lines */}
        {Array.from({ length: gridSize.vertical }).map((_, i) => (
          <div
            key={`v-${i}`}
            style={{
              position: "absolute",
              height: "100%",
              width: "1px",
              backgroundColor: "rgba(100, 100, 100, 0.3)",
              left: `${(100 / (gridSize.vertical + 1)) * (i + 1)}%`,
            }}
          />
        ))}
      </div>

      {/* Moving Elements */}
      {elements.map((element) => (
        <MovingElement key={element.id} element={element} gridSize={gridSize} />
      ))}
    </div>
  );
};

interface MovingElementProps {
  element: MovingElement;
  gridSize: { horizontal: number; vertical: number };
}

const MovingElement = ({ element, gridSize }: MovingElementProps) => {
  const isHorizontal = element.type === "horizontal";

  // Calculate line position
  const linePosition = isHorizontal
    ? `${(100 / (gridSize.horizontal + 1)) * (element.lineIndex + 1)}%`
    : `${(100 / (gridSize.vertical + 1)) * (element.lineIndex + 1)}%`;

  return (
    <motion.div
      style={{
        position: "absolute",
        width: "2px",
        height: "2px",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: element.color,
        boxShadow: `0 0 30px ${element.color}, 0 0 60px ${element.color}, 0 0 90px ${element.color}`,
        left: isHorizontal ? "0%" : linePosition,
        top: isHorizontal ? linePosition : "0%",
      }}
      animate={{
        left: isHorizontal ? "100%" : linePosition,
        top: isHorizontal ? linePosition : "100%",
      }}
      transition={{
        duration: element.duration,
        delay: element.delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

export default AnimatedGrid;
