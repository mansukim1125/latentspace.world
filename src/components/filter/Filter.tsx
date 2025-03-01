// 'use client';
//
// import React, { useState } from 'react';
// import {
//   Building2, ExternalLink, Calendar, ChevronRight, Code, Timer,
//   AlertTriangle, // 서버 장애 대응
//   AlertCircle,   // 버그 수정
//   PlusCircle,    // 신규 기능 개발
//   Settings,      // 성능 개선
//   History        // 유지보수
// } from 'lucide-react';
//
// const ProjectsPage = () => {
//   const [filters, setFilters] = useState({
//     taskTypes: new Set<string>(),
//     techStack: new Set<string>()
//   });
//
//   const taskTypes = [
//     { id: 'incident-response', label: '서버 장애 대응', color: 'red', icon: <AlertTriangle className="stroke-[1.5]" /> },
//     { id: 'bug-fix', label: '버그 수정', color: 'yellow', icon: <AlertCircle className="stroke-[1.5]" /> },
//     { id: 'feature', label: '신규 기능 개발', color: 'green', icon: <PlusCircle className="stroke-[1.5]" /> },
//     { id: 'improvement', label: '성능 개선', color: 'blue', icon: <Settings className="stroke-[1.5]" /> },
//     { id: 'maintenance', label: '유지보수', color: 'gray', icon: <History className="stroke-[1.5]" /> }
//   ];
//
//   const companies = [
//     {
//       id: "company-a",
//       name: "Tech Company A",
//       projects: [
//         { id: "project-1", title: "MSA 기반 커머스 플랫폼", stack: ["Java", "Spring Boot"], taskTypes: ['feature'] },
//         { id: "project-2", title: "결제 시스템 리뉴얼", stack: ["Kotlin", "Redis"], taskTypes: ['improvement', 'incident-response'] },
//       ]
//     }
//   ];
//
//   const allTechStacks = Array.from(
//     new Set(
//       companies.flatMap(company =>
//         company.projects.flatMap(project => project.stack)
//       )
//     )
//   );
//
//   return (
//     <div className="min-h-screen bg-black">
//       {/* 필터 섹션 */}
//       <div className="sticky top-0 z-50 bg-gray-900/50 backdrop-blur-md border-b border-gray-800">
//         <div className="max-w-6xl mx-auto px-4 py-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* 작업 유형 필터 */}
//             <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
//               <h3 className="text-lg font-bold text-white mb-4">작업 유형</h3>
//               <div className="flex flex-wrap gap-3">
//                 {taskTypes.map((task) => (
//                   <button
//                     key={task.id}
//                     onClick={() =>
//                       setFilters((prev) => {
//                         const taskTypes = new Set(prev.taskTypes);
//                         if (taskTypes.has(task.id)) taskTypes.delete(task.id);
//                         else taskTypes.add(task.id);
//                         return { ...prev, taskTypes };
//                       })
//                     }
//                     className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all duration-200 ${
//                       filters.taskTypes.has(task.id)
//                         ? `bg-${task.color}-500/20 text-${task.color}-400`
//                         : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
//                     }`}
//                   >
//                     {task.icon}
//                     {task.label}
//                   </button>
//                 ))}
//               </div>
//             </div>
//
//             {/* 기술 스택 필터 */}
//             <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
//               <h3 className="text-lg font-bold text-white mb-4">기술 스택</h3>
//               <div className="flex flex-wrap gap-3">
//                 {allTechStacks.map((tech) => (
//                   <button
//                     key={tech}
//                     onClick={() =>
//                       setFilters((prev) => {
//                         const techStack = new Set(prev.techStack);
//                         if (techStack.has(tech)) techStack.delete(tech);
//                         else techStack.add(tech);
//                         return { ...prev, techStack };
//                       })
//                     }
//                     className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all duration-200 ${
//                       filters.techStack.has(tech)
//                         ? 'bg-blue-500/20 text-blue-400'
//                         : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
//                     }`}
//                   >
//                     <Code className="w-4 h-4" />
//                     {tech}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//
//           {/* 필터 초기화 버튼 */}
//           {(filters.taskTypes.size > 0 || filters.techStack.size > 0) && (
//             <button
//               onClick={() => setFilters({ taskTypes: new Set(), techStack: new Set() })}
//               className="mt-6 px-4 py-2 bg-gray-700 text-gray-400 hover:bg-gray-600 hover:text-white rounded-lg"
//             >
//               필터 초기화
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default ProjectsPage;

'use client';

import React, { useState } from 'react';
import {
  AlertTriangle, AlertCircle, PlusCircle, Settings, History, Code
} from 'lucide-react';

const ProjectsPage = () => {
  const [filters, setFilters] = useState({
    taskTypes: new Set<string>(),
    techStack: new Set<string>()
  });
  const [openSections, setOpenSections] = useState({
    taskTypes: true,
    techStack: false
  });

  const taskTypes = [
    { id: 'incident-response', label: '서버 장애 대응', color: 'red', icon: <AlertTriangle className="stroke-[1.5]" /> },
    { id: 'bug-fix', label: '버그 수정', color: 'yellow', icon: <AlertCircle className="stroke-[1.5]" /> },
    { id: 'feature', label: '신규 기능 개발', color: 'green', icon: <PlusCircle className="stroke-[1.5]" /> },
    { id: 'improvement', label: '성능 개선', color: 'blue', icon: <Settings className="stroke-[1.5]" /> },
    { id: 'maintenance', label: '유지보수', color: 'gray', icon: <History className="stroke-[1.5]" /> }
  ];

  const companies = [
    {
      id: "company-a",
      name: "Tech Company A",
      projects: [
        { id: "project-1", title: "MSA 기반 커머스 플랫폼", stack: ["Java", "Spring Boot"], taskTypes: ['feature'] },
        { id: "project-2", title: "결제 시스템 리뉴얼", stack: ["Kotlin", "Redis"], taskTypes: ['improvement', 'incident-response'] },
      ]
    }
  ];

  const allTechStacks = Array.from(
    new Set(
      companies.flatMap(company =>
        company.projects.flatMap(project => project.stack)
      )
    )
  );

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="min-h-screen bg-black">
      {/* 필터 섹션 */}
      <div className="sticky top-0 z-50 bg-gray-900/50 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-6 space-y-4">
          {/* 작업 유형 필터 */}
          <div>
            <button
              onClick={() => toggleSection('taskTypes')}
              className="w-full flex justify-between items-center px-4 py-3 bg-gray-800 text-white rounded-lg"
            >
              <span className="text-lg font-bold">작업 유형</span>
              <span className="material-icons">
                {openSections.taskTypes ? 'expand_less' : 'expand_more'}
              </span>
            </button>
            {openSections.taskTypes && (
              <div className="mt-4 flex flex-wrap gap-3">
                {taskTypes.map((task) => (
                  <button
                    key={task.id}
                    onClick={() =>
                      setFilters((prev) => {
                        const taskTypes = new Set(prev.taskTypes);
                        if (taskTypes.has(task.id)) taskTypes.delete(task.id);
                        else taskTypes.add(task.id);
                        return { ...prev, taskTypes };
                      })
                    }
                    className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all duration-200 ${
                      filters.taskTypes.has(task.id)
                        ? `bg-${task.color}-500/20 text-${task.color}-400`
                        : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                    }`}
                  >
                    {task.icon}
                    {task.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 기술 스택 필터 */}
          <div>
            <button
              onClick={() => toggleSection('techStack')}
              className="w-full flex justify-between items-center px-4 py-3 bg-gray-800 text-white rounded-lg"
            >
              <span className="text-lg font-bold">기술 스택</span>
              <span className="material-icons">
                {openSections.techStack ? 'expand_less' : 'expand_more'}
              </span>
            </button>
            {openSections.techStack && (
              <div className="mt-4 flex flex-wrap gap-3">
                {allTechStacks.map((tech) => (
                  <button
                    key={tech}
                    onClick={() =>
                      setFilters((prev) => {
                        const techStack = new Set(prev.techStack);
                        if (techStack.has(tech)) techStack.delete(tech);
                        else techStack.add(tech);
                        return { ...prev, techStack };
                      })
                    }
                    className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all duration-200 ${
                      filters.techStack.has(tech)
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                    }`}
                  >
                    <Code className="w-4 h-4" />
                    {tech}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 필터 초기화 버튼 */}
          {(filters.taskTypes.size > 0 || filters.techStack.size > 0) && (
            <button
              onClick={() => setFilters({ taskTypes: new Set(), techStack: new Set() })}
              className="mt-6 px-4 py-2 bg-gray-700 text-gray-400 hover:bg-gray-600 hover:text-white rounded-lg"
            >
              필터 초기화
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
