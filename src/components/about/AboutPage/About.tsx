import {IProfile} from "@/interface/profile/profile.interface";
import {FileText, Globe} from "lucide-react";
import React from "react";

export function About(param: {
  profile: IProfile;
}) {
  const { profile } = param;

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="w-full md:w-1/3">
            <div className="aspect-square bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
              <img src={profile.profileImage} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold text-white mb-4">{profile.name}</h1>
            <div className="text-xl text-purple-400 mb-6">{profile.title}</div>
            <div className="flex items-center gap-4 text-gray-400 mb-8">
              <Globe className="w-4 h-4" />
              <span>{profile.location}</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-400">
                {profile.availability}
              </span>
            </div>
            <div className="flex flex-wrap gap-4 mb-8">
              {Object.entries(profile.socialLink).map(([label, link], index) => (
                <a key={index} href={link} className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-gray-300 hover:text-white hover:border-purple-500/50 transition-colors" target="_blank" rel="noopener noreferrer">
                  {/*{link.icon}*/}
                  <span>{label}</span>
                </a>
              ))}
            </div>
            <p className="text-gray-400 mb-6">{profile.bio}</p>
            <a href={profile.resumeLink} className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
              <FileText className="w-4 h-4" />
              View Full Resume
            </a>
          </div>
        </div>
        <div className="space-y-6 text-gray-300">
          <h2 className="text-2xl font-bold text-white mb-6">About Me</h2>
          {profile.aboutMe.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <div className="pt-6">
            <h3 className="text-xl font-bold text-white mb-4">Core Interests</h3>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((interest, index) => (
                <span key={index} className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-sm">{interest}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 pt-16 border-t border-gray-800">
          <div className="grid grid-cols-3 gap-6">
            {profile.blogStats.map((stat, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
