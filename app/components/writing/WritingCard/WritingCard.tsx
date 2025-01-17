import {ChevronRight} from "lucide-react";
import {Writing} from "@/app/types/writing/writing";
import Link from "next/link";

export const WritingCard = (param: { writing: Writing }) => {
  const { writing }	= param;

  return (
    <article
      className="border border-gray-800 bg-gray-900/50 rounded-lg p-6 hover:border-purple-500/50 transition-colors"
    >
      <div className="flex justify-between items-start mb-4">
        <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">
          {writing.category}
        </span>
        <span className="text-sm text-gray-500">{writing.date.toISOString().slice(0, 10)}</span>
      </div>
      <Link href={`/writings/${writing.slug}`} className="block group">
        <h2 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-400 transition-colors">
          {writing.title}
        </h2>
        <p className="text-gray-400 mb-4">{writing.excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{writing.readTime}</span>
          <ChevronRight className="w-5 h-5 text-purple-500 group-hover:translate-x-1 transition-transform"/>
        </div>
      </Link>
    </article>
  );
}
