import Link from "next/link";
import {ArrowLeft, Calendar, Clock, ExternalLink, Github} from "lucide-react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import React from "react";

interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  period: string;
  duration: string;
  stack: string[];
  role: string;
  team?: string;
  links: {
    github?: string;
    demo?: string;
    docs?: string;
  };
  content: string; // Markdown content
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

export default function ProjectDetail({ project }: { project: ProjectDetail }) {
  // 예시 데이터. 실제로는 params로 받은 id를 기반으로 데이터를 불러옵니다
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/50 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/projects" className="flex items-center text-gray-400 hover:text-white">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Projects
            </Link>
            <div className="flex items-center space-x-4">
              {Object.entries(project.links).map(([key, url]) => (
                url && (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-white"
                  >
                    {key === 'github' ? <Github className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
                  </a>
                )
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Project Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex flex-wrap gap-4 mb-6">
            {project.stack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-bold text-white mb-6">{project.title}</h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl">{project.description}</p>
          <div className="flex flex-wrap gap-6 text-gray-400">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              {project.period}
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              {project.duration}
            </div>
          </div>
        </div>
      </header>

      {/* Project Content - Markdown */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <article className="prose prose-invert prose-purple max-w-none">
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
            {project.content}
          </Markdown>
        </article>
      </div>
    </div>
  );
};
