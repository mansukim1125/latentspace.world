import { IWriting } from '@/interface/writing/writing.interface';
import { IRepository } from '@/interface/repository/repository.interface';
import { WritingEntity } from '@/entity/writing/writing.entity';

// Mocking..
const writings: IWriting[] = [
  {
    "id": "build-a-consistent-habit",
    "title": "꾸준한 습관 형성",
    "slug": "build-a-consistent-habit",
    "category": "Self Improvement",
    "date": new Date("2025-03-31"),
    "excerpt":
      "꾸준한 습관을 형성하는 것은 어렵다.",
    "readTime": 10,
    "content": "## 개요\n\n꾸준한, 지속 가능한 습관을 형성하는 것은 어렵다.\n반복되는 출퇴근 사이클에서 퇴근 이후 목표를 설정하고, 계획하고, 수행하는 데 어려움이 있는 것 같다.\n> \n\n퇴근 후 집에 도착하면 피로감과 함께 \'오늘은 쉬자\'는 생각이 자연스레 떠오른다. 내일부터 제대로 시작하면 되겠지. 하지만 그 \'내일\'은 결코 오지 않는다.\n\n![(다이어트는 내일부터..)](https://dfxspjge1zm8u.cloudfront.net/production/images/image.png)\n\n(다이어트는 내일부터..)\n\n직장인의 저녁은 아이러니하다. 온전히 나를 위한 시간이면서도, 가장 에너지가 바닥난 시간이다. 의사결정 피로로 지친 뇌는 더 이상의 노력을 거부한다.\n\n![“내가 이런 것 까지 결정해야 돼?”](https://dfxspjge1zm8u.cloudfront.net/production/images/ChatGPT_Image_2025%E1%84%82%E1%85%A7%E1%86%AB_3%E1%84%8B%E1%85%AF%E1%86%AF_31%E1%84%8B%E1%85%B5%E1%86%AF_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_09_02_51.png)\n\n“내가 이런 것 까지 결정해야 돼?”\n\n이런 악순환을 깨기 위해 최근 코딩 테스트 스터디를 신청하여 오늘부터 시작했다.\n\n매일 하루에 한 문제씩 풀고 인증하는 간단한 일정이 생겼다.\n\n간단한 습관을 형성하는 것부터 해봐야지. 건강한 생활 습관을 구축하는 것이 중요하다.\n\n스터디를 통해 이 작은 시도가 어떤 변화를 가져올지 기대해본다.\n\n## 오늘의 문제\n\nhttps://www.acmicpc.net/problem/1032\n\n첫 날이라서 인지, 비기너 레벨이어서인지 문제가 굉장히 쉽다.\n\n문제를 간단히 설명하면, 주어진 문자열에서 동일한 위치에 동일한 문자가 나타나는지 여부를 판단하는 문제이다.\n\n다음은 의사코드.\n\n```\n함수 solution():\n    n을 입력받음 (문자열의 개수)\n    pattern = null\n    \n    n번 반복:\n        새 문자열(new_line)을 입력받음\n        \n        만약 pattern이 null이면:\n            pattern = new_line을 문자 리스트로 변환\n            다음 반복으로 이동\n            \n        pattern의 길이만큼 반복(i 사용):\n            ch_new_line = new_line의 i번째 문자\n            ch_pattern = pattern의 i번째 문자\n            \n            만약 ch_pattern이 ch_new_line과 다르면:\n                pattern[i]를 \'?\'로 변경\n                \n    pattern을 문자열로 합쳐서 출력\n```\n\n### Python\n\n```python\ndef solution():\n    n = int(input())\n\n    pattern = None\n    for _ in range(n):\n        new_line = input()\n        if pattern is None:\n            pattern = list(new_line)\n            continue\n        for i in range(len(pattern)):\n            ch_new_line = new_line[i]\n            ch_pattern = pattern[i]\n            if ch_pattern != ch_new_line:\n                pattern[i] = \'?\'\n\n    print(\'\'.join(pattern))\n\nif __name__ == \'__main__\':\n    solution()\n```\n\n## 보너스 문제란다.\n\n회문 판단하는 문제. 이 문제는 풀이가 여러 개 있는데, Python 으로는 아주 쉽게 풀 수 있다.\n\n```python\ndef solution():\n    sentence = input()\n    reversed_sentence = list(sentence)\n    reversed_sentence.reverse()\n    reversed_sentence = \'\'.join(reversed_sentence)\n\n    print(int(sentence == reversed_sentence))\n\nif __name__ == \'__main__\':\n    solution()\n```\n\nlist 뒤집고 원본 문자열과 비교하면 된다.",
    "author": {
      "name": "Joonseok Kim",
      "avatar": "https://avatars1.githubusercontent.com/u/55?v=4"
    }
  },
  {
    id: 'understanding-vector-embeddings-in-llms',
    title: 'Understanding Vector Embeddings in LLMs',
    slug: 'understanding-vector-embeddings-in-llms',
    excerpt:
      'An exploration of how large language models represent semantic meaning in high-dimensional vector spaces.',
    category: 'Machine Learning',
    date: new Date('2025-01-15'),
    readTime: 12,
    content:
      'Large Language Models (LLMs) like GPT, BERT, and others have revolutionized natural language processing (NLP) tasks by leveraging vector embeddings to represent the semantic meaning of text. These embeddings are high-dimensional vectors that capture the contextual relationships between words, phrases, or even entire documents. In this article, we explore the concept of vector embeddings, how they are generated, and why they are fundamental to the performance of LLMs.\n' +
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
      "Embeddings can be visualized using dimensionality reduction techniques like t-SNE or PCA. Here's an example in Python using t-SNE:\n" +
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
  {
    id: 'implementing-attention-mechanisms-from-scratch',
    title: 'Implementing Attention Mechanisms from Scratch',
    slug: 'implementing-attention-mechanisms-from-scratch',
    category: 'NLP',
    date: new Date('2025-01-10'),
    excerpt:
      'A deep dive into the mathematics and implementation details of attention mechanisms in transformers.',
    readTime: 15,
    content:
      'This article provides a detailed exploration of attention mechanisms, explaining their mathematical foundation and offering a step-by-step guide for implementing them in code.',
    author: {
      name: 'Joonseok Kim',
      avatar: 'https://avatars1.githubusercontent.com/u/55?v=4',
    },
  },
  {
    id: 'optimizing-inference-performance-in-production',
    title: 'Optimizing Inference Performance in Production',
    slug: 'optimizing-inference-performance-in-production',
    category: 'MLOps',
    date: new Date('2025-01-05'),
    excerpt:
      'Real-world strategies for deploying and optimizing machine learning models in production environments.',
    readTime: 10,
    content:
      'This article discusses various strategies for optimizing inference performance in production, focusing on latency reduction, throughput maximization, and resource utilization.',
    author: {
      name: 'Joonseok Kim',
      avatar: 'https://avatars1.githubusercontent.com/u/55?v=4',
    },
  },
];

export class WritingRepository implements IRepository<IWriting> {
  private readonly writings: IWriting[];

  private constructor() {
    // Mocking..
    this.writings = writings;
  }

  public static createInstance(): WritingRepository {
    return new WritingRepository();
  }

  public async findAll(): Promise<WritingEntity[]> {
    return this.writings.map((writing) => new WritingEntity(writing));
  }

  public async findOne(id: string): Promise<WritingEntity> {
    const writing = this.writings.find((writing) => writing.id === id);
    if (!writing) {
      throw new Error('No writing with id ' + id);
    }

    return new WritingEntity(writing);
  }

  public async findFeaturedWritings() {
    const writings = await this.findAll();
    return writings.slice(0, 2);
  }
}
