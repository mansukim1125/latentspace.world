export default function Home() {
  const posts = [
    {
      title: "Understanding Vector Embeddings in LLMs",
      category: "Deep Learning",
      date: "2025-01-15",
      excerpt: "An exploration of how large language models represent semantic meaning in high-dimensional vector spaces.",
      readTime: "12 min read"
    },
    {
      title: "Implementing Attention Mechanisms from Scratch",
      category: "NLP",
      date: "2025-01-10",
      excerpt: "A deep dive into the mathematics and implementation details of attention mechanisms in transformers.",
      readTime: "15 min read"
    },
    {
      title: "Optimizing Inference Performance in Production",
      category: "MLOps",
      date: "2025-01-05",
      excerpt: "Real-world strategies for deploying and optimizing machine learning models in production environments.",
      readTime: "10 min read"
    }
  ];

  const projects = [
    {
      title: "Vector DB Optimization",
      description: "High-performance vector similarity search implementation",
      tech: ["Python", "FAISS", "NumPy"],
      link: "#"
    },
    {
      title: "Transformer Architecture",
      description: "Custom implementation of transformer blocks",
      tech: ["PyTorch", "CUDA", "Python"],
      link: "#"
    }
  ];

  return (
    <h1>Hello, World!</h1>
  );
}
