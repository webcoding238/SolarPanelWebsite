import ResizeObserver from 'resize-observer-polyfill';
import { vi } from 'vitest';
import React from 'react';

globalThis.ResizeObserver = ResizeObserver;

vi.mock('recharts', async (importOriginal) => {
  const original = await importOriginal<typeof import('recharts')>();
  return {
    ...original,
    ResponsiveContainer: ({ children }: { children: React.ReactNode }) => (
       React.createElement(
        'div', 
        { className: 'mock-recharts-container', style: { width: '800px', height: '600px' } }, 
        children
      ),
    ),
  };
});