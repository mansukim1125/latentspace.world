import React, { createElement } from 'react';
import { extractTextFromChildren, makeHeadingId } from '@/util';

export function CustomHeading(param: {
  level: number;
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}) {
  const { level, className, children } = param;

  // Heading 텍스트로부터 id 생성

  const text = extractTextFromChildren(children);

  const id = makeHeadingId(text);

  const HeadingTag = `h${level}`; // 동적으로 h1, h2, h3 등을 결정

  return createElement(HeadingTag, { id, className }, children);
}
