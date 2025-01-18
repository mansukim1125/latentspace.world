// app/writing/[slug]/page.tsx
import WritingDetail from "@/app/components/writing/WritingDetail/WritingDetail";
import {Writing} from "@/app/types/writing/writing";

const getPosts = async () => {
  const writings: Writing[] = [
    {
      title: "Understanding Vector Embeddings in LLMs",
      slug: "understanding-vector-embeddings-in-llms",
      excerpt: "An exploration of how large language models represent semantic meaning in high-dimensional vector spaces.",
      category: "Machine Learning",
      date: new Date("2025-01-15"),
      readTime: 12,
      content: 'Large Language Models (LLMs) like GPT, BERT, and others have revolutionized natural language processing (NLP) tasks by leveraging vector embeddings to represent the semantic meaning of text. These embeddings are high-dimensional vectors that capture the contextual relationships between words, phrases, or even entire documents. In this article, we explore the concept of vector embeddings, how they are generated, and why they are fundamental to the performance of LLMs.\n' +
        '\n' +
        '---\n' +
        '\n' +
        '## What Are Vector Embeddings?\n' +
        '\n' +
        'Vector embeddings are numerical representations of text elements (e.g., words, sentences) in a continuous vector space. These vectors are designed to preserve semantic relationships such that:\n' +
        '\n' +
        '- **Similar meanings** correspond to vectors that are close to each other.\n' +
        '- **Dissimilar meanings** correspond to vectors that are far apart.\n' +
        '\n' +
        'For example, the words "king" and "queen" might have embeddings with a small Euclidean distance, while the words "king" and "car" are likely to be farther apart.\n' +
        '\n' +
        '### Mathematical Representation\n' +
        '\n' +
        'An embedding is typically a vector in an $n$-dimensional space:\n' +
        '\n' +
        '\\[\n' +
        '\\mathbf{v} = [v_1, v_2, \\dots, v_n] \\\\\n' +
        '\\mathbf{v} \\in \\mathbb{R}^n\n' +
        '\\]\n' +
        '\n' +
        'Where $n$ is the dimensionality of the embedding space, often ranging from 100 to 1024 dimensions in modern LLMs.\n' +
        '\n' +
        '---\n' +
        '\n' +
        '## How LLMs Generate Embeddings\n' +
        '\n' +
        '### 1. **Tokenization**\n' +
        '\n' +
        'Before generating embeddings, text is tokenized into smaller units such as words or subwords. For instance, the sentence:\n' +
        '\n' +
        '> "The cat sat on the mat."\n' +
        '\n' +
        'Might be tokenized as:\n' +
        '\n' +
        '\\[\n' +
        '\\text{"The", "cat", "sat", "on", "the", "mat", "."}\n' +
        '\\]\n' +
        '\n' +
        '### 2. **Embedding Layer**\n' +
        '\n' +
        'Each token is mapped to an initial embedding using a lookup table or embedding matrix, $\\mathbf{E}$:\n' +
        '\n' +
        '\\[\n' +
        '\\mathbf{e}_i = \\mathbf{E}[t_i]\n' +
        '\\]\n' +
        '\n' +
        'Where $t_i$ is the token index. The embedding matrix $\\mathbf{E}$ is learned during training and has dimensions $|V| \\times d$, where $|V|$ is the vocabulary size and $d$ is the embedding dimensionality.\n' +
        '\n' +
        '### 3. **Contextualization**\n' +
        '\n' +
        'Initial embeddings are passed through transformer layers, which apply mechanisms like self-attention to capture contextual relationships. This process modifies the embeddings to account for the surrounding tokens, creating **contextual embeddings**:\n' +
        '\n' +
        '\\[\n' +
        '\\mathbf{h}_i^{(L)} = f(\\mathbf{h}_i^{(L-1)}, \\mathbf{h}_{\\text{context}})\n' +
        '\\]\n' +
        '\n' +
        'Here, $\\mathbf{h}_i^{(L)}$ is the representation of the $i$-th token at layer $L$, and $\\mathbf{h}_{\\text{context}}$ includes embeddings of all tokens in the input sequence.\n' +
        '\n' +
        '---\n' +
        '\n' +
        '## Semantic Representation in High-Dimensional Space\n' +
        '\n' +
        'The high-dimensional nature of embeddings enables LLMs to represent nuanced semantic relationships. Key properties include:\n' +
        '\n' +
        '### 1. **Semantic Similarity**\n' +
        '\n' +
        'The similarity between embeddings is often measured using cosine similarity:\n' +
        '\n' +
        '\\[\n' +
        '\\text{Cosine Similarity}(\\mathbf{u}, \\mathbf{v}) = \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{u}\\| \\|\\mathbf{v}\\|}\n' +
        '\\]\n' +
        '\n' +
        'Where $\\mathbf{u}$ and $\\mathbf{v}$ are two embedding vectors. A value closer to 1 indicates high similarity.\n' +
        '\n' +
        '### 2. **Linear Relationships**\n' +
        '\n' +
        'Embeddings can capture linear relationships between concepts. For example, the relationship:\n' +
        '\n' +
        '\\[\n' +
        '\\text{king} - \\text{man} + \\text{woman} \\approx \\text{queen}\n' +
        '\\]\n' +
        '\n' +
        'Is a direct consequence of the way semantic information is encoded in the vector space.\n' +
        '\n' +
        '---\n' +
        '\n' +
        '## Applications of Vector Embeddings\n' +
        '\n' +
        'Vector embeddings are foundational to many NLP applications, including:\n' +
        '\n' +
        '1. **Search and Retrieval**: Representing documents as embeddings allows for semantic search, where queries are matched to documents based on meaning rather than exact keywords.\n' +
        '   \n' +
        '2. **Text Classification**: Classifying text into categories using embeddings as features.\n' +
        '   \n' +
        '3. **Recommendation Systems**: Matching user preferences to items using embeddings.\n' +
        '\n' +
        '4. **Generative Models**: LLMs use embeddings to condition the generation of coherent and contextually relevant text.\n' +
        '\n' +
        '---\n' +
        '\n' +
        '## Example: Visualizing Embeddings\n' +
        '\n' +
        'Embeddings can be visualized using dimensionality reduction techniques like t-SNE or PCA. Here\'s an example in Python using t-SNE:\n' +
        '\n' +
        '```python\n' +
        'import numpy as np\n' +
        'from sklearn.manifold import TSNE\n' +
        'import matplotlib.pyplot as plt\n' +
        '\n' +
        '# Example embeddings (random for demonstration)\n' +
        'embeddings = np.random.rand(100, 50)  # 100 tokens in 50-dimensional space\n' +
        '\n' +
        '# Reduce to 2D for visualization\n' +
        'reduced_embeddings = TSNE(n_components=2).fit_transform(embeddings)\n' +
        '\n' +
        '# Plot\n' +
        'plt.scatter(reduced_embeddings[:, 0], reduced_embeddings[:, 1], alpha=0.7)\n' +
        'plt.title("2D Visualization of Embeddings")\n' +
        'plt.xlabel("Dimension 1")\n' +
        'plt.ylabel("Dimension 2")\n' +
        'plt.show()\n' +
        '```\n' +
        '\n' +
        '---\n' +
        '\n' +
        '## Conclusion\n' +
        '\n' +
        'Vector embeddings are the backbone of semantic understanding in large language models. By representing text in high-dimensional spaces, embeddings enable LLMs to capture complex relationships and provide context-aware insights. As research progresses, advancements in embedding techniques promise to further enhance the capabilities of NLP systems.\n' +
        '\n',
      author: {
        name: 'Joonseok Kim',
        avatar: 'https://avatars1.githubusercontent.com/u/55?v=4',
      },
    },
    // ... more posts
  ];

  return writings;
}

const getPostBySlug = async (slug: string) => {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function WritingPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;

  const post = await getPostBySlug(slug);

  if (!post) {
  //   TOOD: 404 page..
    return;
  }

  return <WritingDetail post={post} />;
}
