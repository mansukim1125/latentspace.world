import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Briefcase,
  Code,
  Star,
  BookOpen,
  Award,
} from 'lucide-react';
import { IProfile } from '@/interface/profile/profile.interface';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CustomHeading } from '@/components/custom-heading/CustomHeading';

export const ProfileHeroSection = (param: { profile: IProfile }) => {
  const {
    avatar,
    name,
    location,
    social,
    badges,
    keyMetrics,
    summary,
    skills,
    title,
    experience,
  } = param.profile;

  return (
    <div className="border-b border-gray-800 bg-gradient-to-b from-black to-gray-900/70">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-4 items-start">
          {/* Left column - Avatar and basic info */}
          <div className="w-full justify-center  md:w-1/3">
            <div className="flex flex-col items-center md:items-start md:pl-8">
              {/* Avatar */}
              <div className="relative mb-6">
                {avatar ? (
                  <img
                    src={avatar}
                    alt={name}
                    className="w-32 h-32 rounded-full border-2 border-purple-500 p-1"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full border-2 border-purple-500 p-1 flex items-center justify-center bg-purple-900/30 text-4xl font-bold text-white">
                    {name.charAt(0)}
                  </div>
                )}
                <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-black"></div>
              </div>

              {/* Basic info */}
              <h1 className="text-3xl md:text-4xl font-bold text-white text-center md:text-left">
                {name}
              </h1>
              <p className="text-xl text-purple-400 mt-2 text-center md:text-left">
                {title}
              </p>

              {/* Location */}
              <div className="flex items-center mt-4 text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{location}</span>
              </div>

              {/* Experience */}
              <div className="flex items-center mt-2 text-gray-400">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{experience} of experience</span>
              </div>

              {/* Social links */}
              <div className="flex gap-4 mt-6">
                {social.github && (
                  <a
                    href={social.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-gray-800 rounded-full text-white hover:bg-purple-600 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  )}
                {social.linkedin && (
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-gray-800 rounded-full text-white hover:bg-purple-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  )}
                {social.email && (
                  <a
                    href={`mailto:${social.email}`}
                    className="p-2 bg-gray-800 rounded-full text-white hover:bg-purple-600 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  )}
              </div>
            </div>
          </div>

          {/* Right column - Bio, skills, metrics */}
          <div className="md:w-3/4">
            {/* Summary */}
            <div className="bg-gray-900/40 p-6 rounded-lg border border-gray-800 mb-6">
              <Markdown
                remarkPlugins={[remarkGfm]}
                components={{
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  h1({ node: _, ...props }) {
                    return (
                      <CustomHeading
                        level={1}
                        className="text-2xl font-bold text-white mb-4"
                      >
                        {props.children}
                      </CustomHeading>
                    );
                  },
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  h2({ node: _, ...props }) {
                    return (
                      <CustomHeading
                        level={2}
                        className="text-xl font-semibold text-white mb-3"
                      >{props.children}</CustomHeading>
                    );
                  },
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  h3({ node: _, ...props }) {
                    return (
                      <CustomHeading
                        level={3}
                        className="text-lg font-medium text-white mb-2"
                      >{props.children}</CustomHeading>
                    );
                  },
                  p: ({ children }) => (
                    <p className="text-gray-300 leading-relaxed mb-4 last:mb-0">{children}</p>
                  ),
                  ul: ({ children }) => (
                    <ul className="mb-4">{children}</ul>
                  ),
                }}
              >
                {summary}
              </Markdown>
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-900/40 p-4 rounded-lg border border-gray-800 flex flex-col items-center">
                <div className="bg-purple-500/20 p-2 rounded-full mb-2">
                  <Briefcase className="w-5 h-5 text-purple-400" />
                </div>
                <span className="text-2xl font-bold text-white">
                  {keyMetrics.projects}
                </span>
                <span className="text-sm text-gray-400">Projects</span>
              </div>
              <div className="bg-gray-900/40 p-4 rounded-lg border border-gray-800 flex flex-col items-center">
                <div className="bg-purple-500/20 p-2 rounded-full mb-2">
                  <Code className="w-5 h-5 text-purple-400" />
                </div>
                <span className="text-2xl font-bold text-white">
                  {keyMetrics.experience}
                </span>
                <span className="text-sm text-gray-400">Experience</span>
              </div>
              <div className="bg-gray-900/40 p-4 rounded-lg border border-gray-800 flex flex-col items-center">
                <div className="bg-purple-500/20 p-2 rounded-full mb-2">
                  <Star className="w-5 h-5 text-purple-400" />
                </div>
                <span className="text-2xl font-bold text-white">
                  {keyMetrics.contributions}+
                </span>
                <span className="text-sm text-gray-400">Contributions</span>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-gray-900/40 p-6 rounded-lg border border-gray-800 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-purple-400" />
                <h2 className="text-xl font-semibold text-white">Skills</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-medium hover:bg-purple-900/50 hover:text-purple-300 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Badges/Specialties */}
            <div className="flex flex-wrap gap-3">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-900/50 to-purple-700/30 rounded-lg border border-purple-700/50"
                >
                  <Award className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-medium text-purple-300">
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};