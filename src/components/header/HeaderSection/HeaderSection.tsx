'use client';

import { Grid, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export const HeaderSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Grid className="w-8 h-8 text-purple-500" />
            <div>
              <Link href="/">
                <div className="text-lg font-bold tracking-wider">
                  latentspace
                </div>
                <div className="text-sm text-purple-500">.world</div>
              </Link>
            </div>
          </div>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/writings" className="text-gray-300 hover:text-white">
              Writings
            </Link>
            <Link
              href="/experiences"
              className="text-gray-300 hover:text-white"
            >
              Experiences
            </Link>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 드롭다운 */}
        {menuOpen && (
          <div className="mt-4 py-3 md:hidden">
            <Link
              href="/writings"
              className="block py-2 text-gray-300 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Writings
            </Link>
            <Link
              href="/experiences"
              className="block py-2 text-gray-300 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Experiences
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};