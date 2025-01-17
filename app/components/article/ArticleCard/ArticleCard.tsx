import {ChevronRight} from "lucide-react";
import {Article} from "@/app/types/article/article";

export const ArticleCard = (param: { article: Article }) => {
	const { article }	= param;

	return (
		<article className="border border-gray-800 bg-gray-900 rounded-lg p-6 hover:border-purple-500/50 transition-colors">
			<div className="flex justify-between items-start mb-4">
				<span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">
					{article.category}
				</span>
				<span className="text-sm text-gray-500">{article.date.toISOString().slice(0, 10)}</span>
			</div>
			<h3 className="text-xl font-semibold mb-3 text-white">{article.title}</h3>
			<p className="text-gray-400 mb-4">{article.excerpt}</p>
			<div className="flex justify-between items-center">
				<span className="text-sm text-gray-500">{article.readTime} min read</span>
				<ChevronRight className="w-5 h-5 text-purple-500"/>
			</div>
		</article>
	);
}
