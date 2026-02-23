'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

// Diagram data structure
export interface DiagramNode {
  id: string;
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  textColor: string;
}

export interface DiagramEdge {
  from: string;
  to: string;
  label?: string;
  color?: string;
}

export interface DiagramData {
  nodes: DiagramNode[];
  edges: DiagramEdge[];
  width: number;
  height: number;
}

interface DiagramCanvasProps {
  data: DiagramData;
  alt: string;
}

export function DiagramCanvas({ data, alt }: DiagramCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const MIN_SCALE = 0.3;
  const MAX_SCALE = 3;
  const ZOOM_SENSITIVITY = 0.001;

  // Draw arrow helper
  const drawArrow = (
    ctx: CanvasRenderingContext2D,
    fromX: number,
    fromY: number,
    toX: number,
    toY: number,
    color: string,
    label?: string
  ) => {
    const headlen = 15; // Arrow head length
    const angle = Math.atan2(toY - fromY, toX - fromX);

    // Draw line
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();

    // Draw arrow head
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(toX, toY);
    ctx.lineTo(
      toX - headlen * Math.cos(angle - Math.PI / 6),
      toY - headlen * Math.sin(angle - Math.PI / 6)
    );
    ctx.lineTo(
      toX - headlen * Math.cos(angle + Math.PI / 6),
      toY - headlen * Math.sin(angle + Math.PI / 6)
    );
    ctx.closePath();
    ctx.fill();

    // Draw label
    if (label) {
      const midX = (fromX + toX) / 2;
      const midY = (fromY + toY) / 2;

      ctx.font = 'bold 16px ui-sans-serif, system-ui, -apple-system, sans-serif';
      ctx.fillStyle = '#f59e0b';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Enable text smoothing
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      // Background for label
      const metrics = ctx.measureText(label);
      const padding = 10;
      ctx.fillStyle = 'rgba(10, 22, 40, 0.95)';
      ctx.fillRect(
        midX - metrics.width / 2 - padding,
        midY - 12,
        metrics.width + padding * 2,
        24
      );

      // Label text
      ctx.fillStyle = '#f59e0b';
      ctx.fillText(label, midX, midY);
    }
  };

  // Draw rounded rectangle helper
  const drawRoundedRect = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
    fillColor: string,
    strokeColor: string
  ) => {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();

    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 3;
    ctx.stroke();
  };

  // Draw diagram
  const drawDiagram = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Save state
    ctx.save();

    // Calculate center position
    const scaledWidth = data.width * scale;
    const scaledHeight = data.height * scale;
    const centerX = (canvas.width - scaledWidth) / 2;
    const centerY = (canvas.height - scaledHeight) / 2;

    // Apply transformations
    ctx.translate(centerX + position.x, centerY + position.y);
    ctx.scale(scale, scale);

    // Draw edges first (behind nodes)
    data.edges.forEach((edge) => {
      const fromNode = data.nodes.find((n) => n.id === edge.from);
      const toNode = data.nodes.find((n) => n.id === edge.to);

      if (fromNode && toNode) {
        const fromX = fromNode.x + fromNode.width / 2;
        const fromY = fromNode.y + fromNode.height;
        const toX = toNode.x + toNode.width / 2;
        const toY = toNode.y;

        drawArrow(
          ctx,
          fromX,
          fromY,
          toX,
          toY,
          edge.color || '#64748b',
          edge.label
        );
      }
    });

    // Draw nodes
    data.nodes.forEach((node) => {
      const isHovered = hoveredNode === node.id;
      const shadowColor = isHovered ? 'rgba(245, 158, 11, 0.5)' : 'rgba(0, 0, 0, 0.2)';

      // Shadow
      ctx.shadowColor = shadowColor;
      ctx.shadowBlur = isHovered ? 20 : 10;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 4;

      // Draw node box
      drawRoundedRect(
        ctx,
        node.x,
        node.y,
        node.width,
        node.height,
        12,
        node.color,
        isHovered ? '#f59e0b' : node.color
      );

      // Reset shadow
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;

      // Draw text with better quality and padding
      ctx.fillStyle = node.textColor;

      // Check if this is a title or large box - use different font sizes
      const isLargeBox = node.width > 280 || node.height > 120;
      const fontSize = isLargeBox ? 16 : 18;

      ctx.font = `bold ${fontSize}px ui-sans-serif, system-ui, -apple-system, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Enable text smoothing
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      // Split label into lines and filter out empty lines
      const lines = node.label.split('\n').filter(line => line.trim() !== '');
      const lineHeight = isLargeBox ? 26 : 28;

      // Calculate vertical padding
      const verticalPadding = 20;
      const totalTextHeight = (lines.length - 1) * lineHeight;
      const availableHeight = node.height - (verticalPadding * 2);

      // Center text vertically with padding consideration
      const startY = node.y + verticalPadding + (availableHeight - totalTextHeight) / 2;

      // Add horizontal padding constraint
      const horizontalPadding = 20;
      const maxWidth = node.width - (horizontalPadding * 2);

      lines.forEach((line, index) => {
        // Measure text and scale down if needed
        const metrics = ctx.measureText(line);
        if (metrics.width > maxWidth) {
          const scale = maxWidth / metrics.width;
          ctx.save();
          ctx.translate(node.x + node.width / 2, startY + index * lineHeight);
          ctx.scale(scale, 1);
          ctx.fillText(line, 0, 0);
          ctx.restore();
        } else {
          ctx.fillText(
            line,
            node.x + node.width / 2,
            startY + index * lineHeight
          );
        }
      });
    });

    // Restore state
    ctx.restore();
  }, [data, scale, position, hoveredNode]);

  // Handle mouse move for hover detection
  const handleMouseMoveCanvas = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDragging) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      setPosition({ x: newX, y: newY });
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Transform mouse coordinates to canvas space
    const scaledWidth = data.width * scale;
    const scaledHeight = data.height * scale;
    const centerX = (canvas.width - scaledWidth) / 2;
    const centerY = (canvas.height - scaledHeight) / 2;

    const canvasX = (mouseX - centerX - position.x) / scale;
    const canvasY = (mouseY - centerY - position.y) / scale;

    // Check if mouse is over any node
    let found = false;
    for (const node of data.nodes) {
      if (
        canvasX >= node.x &&
        canvasX <= node.x + node.width &&
        canvasY >= node.y &&
        canvasY <= node.y + node.height
      ) {
        setHoveredNode(node.id);
        found = true;
        break;
      }
    }

    if (!found) {
      setHoveredNode(null);
    }
  }, [data, scale, position, isDragging, dragStart]);

  // Redraw when data or transformations change
  useEffect(() => {
    drawDiagram();
  }, [drawDiagram]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      drawDiagram();
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawDiagram]);

  // Calculate initial scale to fit
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const padding = 60;

    const scaleX = (containerWidth - padding) / data.width;
    const scaleY = (containerHeight - padding) / data.height;
    const fitScale = Math.min(scaleX, scaleY, 1);

    setScale(fitScale);
  }, [data]);

  // Zoom handler
  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();

    const delta = -e.deltaY * ZOOM_SENSITIVITY;
    const newScale = Math.min(Math.max(scale + delta, MIN_SCALE), MAX_SCALE);

    setScale(newScale);
  }, [scale]);

  // Add wheel event listener
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.addEventListener('wheel', handleWheel, { passive: false });
    return () => canvas.removeEventListener('wheel', handleWheel);
  }, [handleWheel]);

  // Control buttons handlers
  const handleZoomIn = () => setScale(Math.min(scale + 0.2, MAX_SCALE));
  const handleZoomOut = () => setScale(Math.max(scale - 0.2, MIN_SCALE));
  const handleReset = () => {
    const container = containerRef.current;
    if (!container) return;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const padding = 60;

    const scaleX = (containerWidth - padding) / data.width;
    const scaleY = (containerHeight - padding) / data.height;
    const fitScale = Math.min(scaleX, scaleY, 1);

    setScale(fitScale);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div className="relative w-full">
      {/* Hint */}
      <div className="mb-4 flex items-center gap-2 text-sm text-muted">
        <ZoomIn className="w-4 h-4" />
        <span>Scroll to zoom • Drag to pan • Hover for highlights</span>
      </div>

      {/* Canvas Container */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-lg bg-navy-900 border border-gold-400/10"
        style={{ height: '600px' }}
      >
        <canvas
          ref={canvasRef}
          className={`w-full h-full ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          onMouseDown={(e) => {
            setIsDragging(true);
            setDragStart({
              x: e.clientX - position.x,
              y: e.clientY - position.y,
            });
          }}
          onMouseMove={handleMouseMoveCanvas}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          aria-label={alt}
        />

        {/* Controls */}
        <div className="absolute bottom-4 right-4 flex flex-col gap-2">
          <button
            onClick={handleZoomIn}
            disabled={scale >= MAX_SCALE}
            className="p-2 glass-strong rounded-lg border border-gold-400/20 text-gold-400 hover:bg-gold-400/10 transition-colors disabled:opacity-50"
            aria-label="Zoom in"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
          <button
            onClick={handleZoomOut}
            disabled={scale <= MIN_SCALE}
            className="p-2 glass-strong rounded-lg border border-gold-400/20 text-gold-400 hover:bg-gold-400/10 transition-colors disabled:opacity-50"
            aria-label="Zoom out"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <button
            onClick={handleReset}
            className="p-2 glass-strong rounded-lg border border-gold-400/20 text-gold-400 hover:bg-gold-400/10 transition-colors"
            aria-label="Reset view"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>

        {/* Zoom indicator */}
        <div className="absolute top-4 right-4 px-3 py-1 glass-strong rounded-full border border-gold-400/20 text-xs text-gold-400">
          {Math.round(scale * 100)}%
        </div>
      </div>
    </div>
  );
}
