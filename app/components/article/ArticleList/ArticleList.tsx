import { Terminal } from "lucide-react";
import { ArticleCard } from "@/app/components/article/ArticleCard/ArticleCard";
import { Article } from "@/app/types/article/article";

export const ArticleList = () => {
  const articles: Article[] = [
    {
      title: "Understanding Vector Embeddings in LLMs",
      category: "Deep Learning",
      date: new Date("2025-01-15"),
      excerpt: "An exploration of how large language models represent semantic meaning in high-dimensional vector spaces.",
      readTime: 12,
    },
    {
      title: "Implementing Attention Mechanisms from Scratch",
      category: "NLP",
      date: new Date("2025-01-10"),
      excerpt: "A deep dive into the mathematics and implementation details of attention mechanisms in transformers.",
      readTime: 15,
    },
    {
      title: "Optimizing Inference Performance in Production",
      category: "MLOps",
      date: new Date("2025-01-05"),
      excerpt: "Real-world strategies for deploying and optimizing machine learning models in production environments.",
      readTime: 10,
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-2xl font-bold mb-12 flex items-center">
        <Terminal className="w-6 h-6 mr-2 text-purple-500"/>
        Latest Writing
      </h2>
      <div className="grid gap-8">
        {articles.map((post, index) => (
          <ArticleCard key={index} article={post}></ArticleCard>
        ))}
      </div>
    </section>
  );
}
