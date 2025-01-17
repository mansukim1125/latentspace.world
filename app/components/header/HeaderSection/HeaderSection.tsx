import {Grid} from "lucide-react";

export const HeaderSection = () => {
  return (
    <nav className="border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Grid className="w-8 h-8 text-purple-500" />
            <div>
              <div className="text-lg font-bold tracking-wider">latentspace</div>
              <div className="text-sm text-purple-500">.world</div>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white">Writing</a>
            <a href="#" className="text-gray-300 hover:text-white">Projects</a>
            <a href="#" className="text-gray-300 hover:text-white">About</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
