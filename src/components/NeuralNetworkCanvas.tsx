import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  pulse: number;
  pulseSpeed: number;
};

type NeuralNetworkCanvasProps = {
  className?: string;
  nodeCount?: number;
  linkDistance?: number;
};

const PRIMARY = "10, 20, 8";
const SECONDARY = "48, 108, 0";
const SECONDARY_FIXED = "170, 247, 120";

export function NeuralNetworkCanvas({
  className = "",
  nodeCount = 55,
  linkDistance = 150,
}: NeuralNetworkCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let animationFrame: number;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(
        (nodeCount * (width * height)) / (900 * 500)
      );
      nodes = Array.from({ length: Math.max(20, count) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.015,
      }));
    };

    const step = () => {
      ctx.clearRect(0, 0, width, height);

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += node.pulseSpeed;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
        node.x = Math.max(0, Math.min(width, node.x));
        node.y = Math.max(0, Math.min(height, node.y));
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDistance) {
            const opacity = (1 - dist / linkDistance) * 0.35;
            ctx.strokeStyle = `rgba(${SECONDARY}, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        const glow = (Math.sin(node.pulse) + 1) / 2;
        const radius = 1.5 + glow * 2;

        ctx.beginPath();
        ctx.arc(node.x, node.y, radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${SECONDARY_FIXED}, ${glow * 0.08})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${PRIMARY}, ${0.5 + glow * 0.5})`;
        ctx.fill();
      }

      animationFrame = requestAnimationFrame(step);
    };

    resize();
    window.addEventListener("resize", resize);

    if (prefersReducedMotion) {
      step();
    } else {
      animationFrame = requestAnimationFrame(step);
    }

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, [nodeCount, linkDistance]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
