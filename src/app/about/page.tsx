import React from 'react';
import { Github, Twitter, Linkedin, Mail, FileText, Globe } from 'lucide-react';

const AboutPage = () => {
  // 소셜 링크
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: 'GitHub', url: 'https://github.com/yourusername' },
    { icon: <Twitter className="w-5 h-5" />, label: 'Twitter', url: 'https://twitter.com/yourusername' },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
    { icon: <Mail className="w-5 h-5" />, label: 'Email', url: 'mailto:you@example.com' }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          {/* Profile Image */}
          <div className="w-full md:w-1/3">
            <div className="aspect-square bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
              <img
                src="/api/placeholder/400/400"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bio & Links */}
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold text-white mb-4">Your Name</h1>
            <div className="text-xl text-purple-400 mb-6">AI Engineer & Software Developer</div>

            {/* Location & Status */}
            <div className="flex items-center gap-4 text-gray-400 mb-8">
              <Globe className="w-4 h-4" />
              <span>Seoul, South Korea</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-400">
                Available for opportunities
              </span>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 mb-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-gray-300 hover:text-white hover:border-purple-500/50 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>

            {/* Quick Intro */}
            <p className="text-gray-400 mb-6">
              Building AI-powered solutions with a focus on large language models and vector spaces.
              Passionate about making complex systems simple and efficient.
            </p>

            {/* CTA Button */}
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
            >
              <FileText className="w-4 h-4" />
              View Full Resume
            </a>
          </div>
        </div>

        {/* Cover Letter */}
        <div className="space-y-6 text-gray-300">
          <h2 className="text-2xl font-bold text-white mb-6">About Me</h2>

          <p>
            I specialize in developing machine learning systems and scalable backend architectures.
            With over 5 years of experience in software development, I've focused particularly on
            natural language processing and vector search systems.
          </p>

          <p>
            Currently, I'm deeply interested in the intersection of large language models and
            efficient vector storage systems. My work involves designing and implementing solutions
            that make AI more accessible and practical for real-world applications.
          </p>

          <p>
            When I'm not coding, I write about my experiences and insights in AI/ML on this blog.
            I believe in the power of sharing knowledge and contributing to the open-source community.
          </p>

          <div className="pt-6">
            <h3 className="text-xl font-bold text-white mb-4">Core Interests</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Large Language Models",
                "Vector Databases",
                "Distributed Systems",
                "System Design",
                "Open Source"
              ].map((interest, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Stats */}
        <div className="mt-16 pt-16 border-t border-gray-800">
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400">Technical Posts</div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-white mb-2">10+</div>
              <div className="text-gray-400">Open Source Projects</div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;