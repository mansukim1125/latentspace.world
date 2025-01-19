import { Terminal } from "lucide-react";
import { WritingCard } from "../WritingCard/WritingCard";
import { IWriting } from "@/interface/writing/writing.interface";

export const FeaturedWritings = (param: {
  featuredWritings: IWriting[];
}) => {
  const { featuredWritings } = param;

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-2xl font-bold mb-12 flex items-center">
        <Terminal className="w-6 h-6 mr-2 text-purple-500"/>
        Latest Writing
      </h2>
      <div className="grid gap-8">
        {featuredWritings.map((writing, index) => (
          <WritingCard key={index} writing={writing}></WritingCard>
        ))}
      </div>
    </section>
  );
}
