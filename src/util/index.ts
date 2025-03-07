import React from 'react';

export function extractTextFromChildren(
  children: React.ReactNode | React.ReactNode[],
): string {
  return React.Children.toArray(children)
    .map((child) => {
      if (typeof child === 'string') {
        return child; // 텍스트 노드 반환
      } else if (typeof child === 'number') {
        return child.toString(); // 숫자 노드도 문자열로 변환
      } else if (React.isValidElement<{ children?: React.ReactNode }>(child)) {
        return extractTextFromChildren(child.props.children); // 자식 요소 재귀 처리
      }
      return ''; // 기타 타입은 빈 문자열 반환
    })
    .join(''); // 배열을 하나의 문자열로 결합
}

export function makeHeadingId(text: string) {
  return text.toLowerCase().replace(/\s+/g, '-');
}
