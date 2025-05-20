'use client';

import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

export function MermaidDiagram({ chart, className = '' }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Configure and initialize mermaid
    mermaid.initialize({
      startOnLoad: false,
      theme: 'dark',
      securityLevel: 'loose',
    });

    // Clear the container contents
    containerRef.current.innerHTML = '';

    // Render the diagram
    const renderDiagram = async () => {
      if (!containerRef.current) return;
      
      try {
        const { svg } = await mermaid.render(
          `mermaid-${Math.random().toString(36).substring(2)}`,
          chart,
          containerRef.current
        );
        containerRef.current.innerHTML = svg;
      } catch (error) {
        console.error('Error rendering mermaid diagram:', error);
        containerRef.current.innerHTML = `<div class="text-red-500 p-4 border border-red-500 rounded">
          Error rendering diagram: ${(error as Error).message || 'Unknown error'}
        </div>`;
      }
    };

    renderDiagram();
  }, [chart]);

  return (
    <div ref={containerRef} className={`my-4 overflow-x-auto ${className}`}>
      {/* Mermaid diagram will be rendered here */}
    </div>
  );
} 