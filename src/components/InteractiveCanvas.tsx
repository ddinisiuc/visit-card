'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface InteractiveCanvasProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export function InteractiveCanvas({ src, alt, width = 1200, height = 800 }: InteractiveCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [initialScale, setInitialScale] = useState(1);

  const MIN_SCALE = 0.1;
  const MAX_SCALE = 3;
  const ZOOM_SENSITIVITY = 0.001;

  // Load image and calculate initial scale to fit
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      imageRef.current = img;

      // Calculate scale to fit image in container
      const container = containerRef.current;
      if (container) {
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        const padding = 40; // Add some padding

        const scaleX = (containerWidth - padding) / img.width;
        const scaleY = (containerHeight - padding) / img.height;
        const fitScale = Math.min(scaleX, scaleY, 1); // Don't scale up, only down

        setInitialScale(fitScale);
        setScale(fitScale);
      }

      setImageLoaded(true);
      setIsLoading(false);
      drawCanvas();
    };
    img.onerror = () => {
      console.error('Failed to load image:', src);
      setIsLoading(false);
    };
    img.src = src;
  }, [src]);

  // Draw canvas
  const drawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const img = imageRef.current;
    if (!canvas || !img) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Save context state
    ctx.save();

    // Calculate center position for image
    const scaledWidth = img.width * scale;
    const scaledHeight = img.height * scale;
    const centerX = (canvas.width - scaledWidth) / 2;
    const centerY = (canvas.height - scaledHeight) / 2;

    // Apply transformations with position offset
    ctx.translate(centerX + position.x, centerY + position.y);
    ctx.scale(scale, scale);

    // Draw image
    ctx.drawImage(img, 0, 0);

    // Restore context state
    ctx.restore();
  }, [scale, position]);

  // Redraw when scale or position changes
  useEffect(() => {
    if (imageLoaded) {
      drawCanvas();
    }
  }, [scale, position, imageLoaded, drawCanvas]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      drawCanvas();
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawCanvas]);

  // Zoom handler
  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate zoom
    const delta = -e.deltaY * ZOOM_SENSITIVITY;
    const newScale = Math.min(Math.max(scale + delta, MIN_SCALE), MAX_SCALE);

    if (newScale !== scale) {
      // Zoom towards cursor position
      const scaleChange = newScale / scale;
      const newX = mouseX - (mouseX - position.x) * scaleChange;
      const newY = mouseY - (mouseY - position.y) * scaleChange;

      setScale(newScale);
      setPosition({ x: newX, y: newY });
    }
  }, [scale, position]);

  // Mouse down handler
  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  }, [position]);

  // Mouse move handler
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging) return;

    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;

    setPosition({ x: newX, y: newY });
  }, [isDragging, dragStart]);

  // Mouse up handler
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Touch handlers for mobile
  const touchStartRef = useRef<{ x: number; y: number; distance: number } | null>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length === 1) {
      // Single touch - pan
      const touch = e.touches[0];
      setIsDragging(true);
      setDragStart({
        x: touch.clientX - position.x,
        y: touch.clientY - position.y,
      });
    } else if (e.touches.length === 2) {
      // Two touches - pinch zoom
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const distance = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY
      );
      touchStartRef.current = {
        x: (touch1.clientX + touch2.clientX) / 2,
        y: (touch1.clientY + touch2.clientY) / 2,
        distance,
      };
    }
  }, [position]);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();

    if (e.touches.length === 1 && isDragging) {
      // Single touch - pan
      const touch = e.touches[0];
      const newX = touch.clientX - dragStart.x;
      const newY = touch.clientY - dragStart.y;
      setPosition({ x: newX, y: newY });
    } else if (e.touches.length === 2 && touchStartRef.current) {
      // Two touches - pinch zoom
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const distance = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY
      );

      const scaleDelta = distance / touchStartRef.current.distance;
      const newScale = Math.min(Math.max(scale * scaleDelta, MIN_SCALE), MAX_SCALE);

      if (newScale !== scale) {
        const centerX = (touch1.clientX + touch2.clientX) / 2;
        const centerY = (touch1.clientY + touch2.clientY) / 2;

        const canvas = canvasRef.current;
        if (canvas) {
          const rect = canvas.getBoundingClientRect();
          const mouseX = centerX - rect.left;
          const mouseY = centerY - rect.top;

          const scaleChange = newScale / scale;
          const newX = mouseX - (mouseX - position.x) * scaleChange;
          const newY = mouseY - (mouseY - position.y) * scaleChange;

          setScale(newScale);
          setPosition({ x: newX, y: newY });
        }
      }

      touchStartRef.current = {
        x: (touch1.clientX + touch2.clientX) / 2,
        y: (touch1.clientY + touch2.clientY) / 2,
        distance,
      };
    }
  }, [isDragging, dragStart, scale, position]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    touchStartRef.current = null;
  }, []);

  // Add wheel event listener
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.addEventListener('wheel', handleWheel, { passive: false });
    return () => canvas.removeEventListener('wheel', handleWheel);
  }, [handleWheel]);

  // Control buttons handlers
  const handleZoomIn = () => {
    const newScale = Math.min(scale + 0.2, MAX_SCALE);
    setScale(newScale);
  };

  const handleZoomOut = () => {
    const newScale = Math.max(scale - 0.2, MIN_SCALE);
    setScale(newScale);
  };

  const handleReset = () => {
    setScale(initialScale);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div className="relative w-full">
      {/* Hint */}
      <div className="mb-4 flex items-center gap-2 text-sm text-muted">
        <ZoomIn className="w-4 h-4" />
        <span>Scroll to zoom • Drag to pan</span>
      </div>

      {/* Canvas Container */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-lg bg-navy-900 border border-gold-400/10"
        style={{ height: '600px' }}
      >
        {/* Loading skeleton */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-gold-400/20 border-t-gold-400 rounded-full animate-spin" />
          </div>
        )}

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className={`w-full h-full ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          aria-label={alt}
        />

        {/* Controls */}
        <div className="absolute bottom-4 right-4 flex flex-col gap-2">
          <button
            onClick={handleZoomIn}
            disabled={scale >= MAX_SCALE}
            className="p-2 glass-strong rounded-lg border border-gold-400/20 text-gold-400 hover:bg-gold-400/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Zoom in"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
          <button
            onClick={handleZoomOut}
            disabled={scale <= MIN_SCALE}
            className="p-2 glass-strong rounded-lg border border-gold-400/20 text-gold-400 hover:bg-gold-400/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
