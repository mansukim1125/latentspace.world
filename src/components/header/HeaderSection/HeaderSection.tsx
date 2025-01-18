import {Grid} from "lucide-react";
import Link from "next/link";

export const HeaderSection = () => {
  return (
    <nav className="border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Grid className="w-8 h-8 text-purple-500" />
            <div>
              <Link href="/public">
                <div className="text-lg font-bold tracking-wider">latentspace</div>
                <div className="text-sm text-purple-500">.world</div>
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <Link href="/writings" className="text-gray-300 hover:text-white">Writing</Link>
            <Link href="/projects" className="text-gray-300 hover:text-white">Projects</Link>
            <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
