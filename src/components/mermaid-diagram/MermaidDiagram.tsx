'use client';

import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

export function MermaidDiagram({ chart, className = '' }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const id = `mermaid-${Math.random().toString(36).substring(2)}`;

  useEffect(() => {
    if (!containerRef.current) return;

    // Configure and initialize mermaid
    mermaid.initialize({
      startOnLoad: false,
      theme: 'dark',
      securityLevel: 'loose',
    });

    const renderDiagram = async () => {
      try {
        // Create a temporary element with the specific ID that Mermaid requires
        containerRef.current!.innerHTML = `<div id="${id}">${chart}</div>`;
        
        // Let Mermaid process the diagram
        await mermaid.run({
          nodes: [document.getElementById(id)!]
        });
        
        // Apply center alignment to the SVG after rendering
        if (containerRef.current) {
          const svgElement = containerRef.current.querySelector('svg');
          if (svgElement) {
            svgElement.style.margin = '0 auto';
          }
        }
      } catch (error) {
        console.error('Error rendering mermaid diagram:', error);
        if (containerRef.current) {
          containerRef.current.innerHTML = `<div class="text-red-500 p-4 border border-red-500 rounded">
            Error rendering diagram: ${(error as Error).message || 'Unknown error'}
          </div>`;
        }
      }
    };

    renderDiagram();
  }, [chart, id]);

  return (
    <div ref={containerRef} className={`my-4 overflow-x-auto ${className}`}>
      {/* Mermaid diagram will be rendered here */}
    </div>
  );
} 