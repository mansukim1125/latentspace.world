'use client';

import React, {useEffect, useState} from 'react';
import {ArrowLeft, Clock, Calendar, Share2, Bookmark} from 'lucide-react';
import {IWriting} from '@/interface/writing/writing.interface';
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

interface TableOfContents {
  id: string;
  title: string;
  level: number;
}

const makeHeadingId = (text: string) => {
  return text.toLowerCase().replace(/\s+/g, "-");
}

function extractTextFromChildren(children) {
  return React.Children.toArray(children)
    .map(child => {
      if (typeof child === "string") {
        return child; // 텍스트 노드 반환
      } else if (typeof child === "number") {
        return child.toString(); // 숫자 노드도 문자열로 변환
      } else if (React.isValidElement(child)) {
        return extractTextFromChildren(child.props.children); // 자식 요소 재귀 처리
      }
      return ""; // 기타 타입은 빈 문자열 반환
    })
    .join(""); // 배열을 하나의 문자열로 결합
}

function CustomHeading({ level, children }) {
  // Heading 텍스트로부터 id 생성
  const text = extractTextFromChildren(children);

  const id = makeHeadingId(text);

  const HeadingTag = `h${level}`; // 동적으로 h1, h2, h3 등을 결정

  // @ts-ignore
  return <HeadingTag id={id}>{children}</HeadingTag>;
}

const WritingDetail = ({ writing }: { writing: IWriting }) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [tableOfContents, setTableOfContents] = useState<TableOfContents[]>([]);

  useEffect(() => {
    // 목차 생성 및 IntersectionObserver 설정
    const headings = document.querySelectorAll('h2, h3');

    const toc: TableOfContents[] = Array.from(headings).map((heading, index) => ({
      id: makeHeadingId(heading.textContent || ''),
      title: heading.textContent || '',
      level: Number(heading.tagName.charAt(1))
    }));
    setTableOfContents(toc);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-black/50 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/writings" className="flex items-center text-gray-400 hover:text-white">
              <ArrowLeft className="w-5 h-5 mr-2"/>
              Back to Writing
            </Link>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-white">
                <Share2 className="w-5 h-5"/>
              </button>
              <button className="p-2 text-gray-400 hover:text-white">
                <Bookmark className="w-5 h-5"/>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-4 text-sm text-gray-400 mb-6">
              <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full">
                {writing.category}
              </span>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1"/>
                {writing.date.toISOString().slice(0, 10)}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1"/>
                {writing.readTime}
              </div>
            </div>
            <h1 className="text-4xl font-bold text-white mb-6">
              {writing.title}
            </h1>
            <p className="text-xl text-gray-400">
              {writing.excerpt}
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex gap-12">
          {/* Article Content */}
          <article className="w-full lg:w-2/3 prose-slate lg:prose-base">
            <Markdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1({node, ...props}) {
                  return <CustomHeading level={1} {...props} />;
                },
                h2({node, ...props}) {
                  return <CustomHeading level={2} {...props} />;
                },
                h3({node, ...props}) {
                  return <CustomHeading level={3} {...props} />;
                },
              }}
            >
              {writing.content}
            </Markdown>
          </article>

          {/* Table of Contents - Desktop */}
          <aside className="hidden lg:block w-1/3">
            <div className="sticky top-24 bg-gray-900/50 rounded-lg p-6 border border-gray-800">
              <nav>
                {tableOfContents.map((heading) => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    className={`block py-2 text-sm transition-colors ${
                      heading.level === 3 ? 'pl-4' : ''
                    } ${
                      activeSection === heading.id
                        ? 'text-purple-400'
                        : 'text-gray-400 hover:text-white'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      const gnbHeight = 90;

                      const element = document.getElementById(heading.id);
                      if (element) {
                        const top = element.getBoundingClientRect().top + window.scrollY - gnbHeight;
                        window.scrollTo({ top, behavior: "smooth" });
                      }
                    }}
                  >
                    {heading.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </div>

      {/* AuthorInterface Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 border-t border-gray-800">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-4">
            <img
              src={writing.author.avatar}
              alt={writing.author.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="text-white font-medium">{writing.author.name}</div>
              <div className="text-gray-400 text-sm">Software Engineer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritingDetail;