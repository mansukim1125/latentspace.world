import { Terminal } from "lucide-react";
import { WritingCard } from "../WritingCard/WritingCard";
import { IWriting } from "@/interface/writing/writing.interface";
import Link from "next/link";

export const FeaturedWritings = (param: { featuredWritings: IWriting[] }) => {
  const { featuredWritings } = param;

  return (
    <section className="max-w-6xl mx-auto px-4 pb-20">
      {/* 제목 + "Explore Writings" 링크 */}
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-2xl font-bold flex items-center">
          <Terminal className="w-6 h-6 mr-2 text-purple-500" />
          Latest Writing
        </h2>
        <Link href="/writings">
          <span className="text-sm text-purple-400 hover:underline">
            Explore Writings →
          </span>
        </Link>
      </div>

      {/* 글 리스트 */}
      <div className="grid gap-8">
        {featuredWritings.map((writing, index) => (
          <WritingCard key={index} writing={writing} />
        ))}
      </div>
    </section>
  );
};
