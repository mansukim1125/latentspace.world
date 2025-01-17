export const HeroSection = () => (
  <section className="relative overflow-hidden border-b border-gray-800">
    <div className="max-w-6xl mx-auto px-4 py-24">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 h-full">
          {Array(64).fill(0).map((_, i) => (
            <div key={i} className="border border-gray-700" />
          ))}
        </div>
      </div>

      <div className="relative">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Exploring the Dimensions of AI
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          Deep dives into machine learning, neural networks, and the mathematics behind modern AI systems.
          From theoretical foundations to practical implementations.
        </p>
      </div>
    </div>
  </section>
);
