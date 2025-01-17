export const FooterSection = () => {
  return (
    <footer className="border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            © 2025 latentspace.world
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-300">GitHub</a>
            <a href="#" className="text-gray-500 hover:text-gray-300">Twitter</a>
            <a href="#" className="text-gray-500 hover:text-gray-300">RSS</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
