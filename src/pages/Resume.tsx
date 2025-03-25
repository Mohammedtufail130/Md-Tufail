import React from 'react';

const Resume: React.FC = () => {
  return (
    <article className="bg-[#1e1e1f] border border-[#333] rounded-[20px] p-4 md:p-8 mb-20">
      <header className="mb-6">
        <h2 className="text-2xl md:text-3xl text-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30px] after:h-[3px] after:bg-gradient-to-r after:from-[#f5c45a] after:to-[#f5a63a] after:rounded-md">
          Resume
        </h2>
      </header>
      
      {/* Education Section */}
      <section className="mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative bg-gradient-to-br from-[#404042] to-[#313133] w-[30px] h-[30px] md:w-[48px] md:h-[48px] rounded-lg flex items-center justify-center text-[#f5c45a]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
            </svg>
          </div>
          <h3 className="text-xl md:text-2xl text-white">Education</h3>
        </div>
        
        <ol className="ml-12 relative border-l border-[#333]">
          {[
            {
              title: "PACE, Mangalore, India",
              years: "2021 — 2024",
              description: "During my academic journey, I received First Prize for my final year project and was honoured with the Best Outgoing Student Award."
            },
            {
              title: "S.J.V.P Polytechnic",
              years: "2017 — 2020",
              description: "Diploma in Electronics & Communication"
            },
            {
              title: "Maria Nivas High school",
              years: "2015 — 2016",
              description: "10th Grade"
            }
          ].map((edu, index) => (
            <li key={index} className="mb-6 ml-6 relative">
              <div className="absolute w-3 h-3 bg-gradient-to-r from-[#f5c45a] to-[#f5a63a] rounded-full -left-[22px] top-2 border-4 border-[#222]"></div>
              <h4 className="text-white text-lg mb-1">{edu.title}</h4>
              <span className="text-[#f5c45a] text-sm block mb-2">{edu.years}</span>
              <p className="text-[#aaa] text-sm">{edu.description}</p>
            </li>
          ))}
        </ol>
      </section>
      
      {/* Experience Section */}
      <section className="mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative bg-gradient-to-br from-[#404042] to-[#313133] w-[30px] h-[30px] md:w-[48px] md:h-[48px] rounded-lg flex items-center justify-center text-[#f5c45a]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
            </svg>
          </div>
          <h3 className="text-xl md:text-2xl text-white">Experience</h3>
        </div>
        
        <ol className="ml-12 relative border-l border-[#333]">
          {[
            {
              title: "web Developer",
              years: "2025 — Present",
              description: "Assisted in developing responsive and interactive frontend components using modern JavaScript frameworks such as Reactjs."
            },
            
          ].map((exp, index) => (
            <li key={index} className="mb-6 ml-6 relative">
              <div className="absolute w-3 h-3 bg-gradient-to-r from-[#f5c45a] to-[#f5a63a] rounded-full -left-[22px] top-2 border-4 border-[#222]"></div>
              <h4 className="text-white text-lg mb-1">{exp.title}</h4>
              <span className="text-[#f5c45a] text-sm block mb-2">{exp.years}</span>
              <p className="text-[#aaa] text-sm">{exp.description}</p>
            </li>
          ))}
        </ol>
      </section>
      
      {/* Skills Section */}
      <section>
        <h3 className="text-xl md:text-2xl text-white mb-6">My skills</h3>
        
        <div className="bg-gradient-to-br from-[#404042] to-[#313133] p-5 rounded-[14px]">
          <ul className="space-y-4">
            {[
              { name: "Core java ", value: 80 },
              { name: "JavaScript", value: 70 },
              { name: "HTML&CSS", value: 70 },
              { name: "Springboot", value: 50 }
            ].map((skill, index) => (
              <li key={index}>
                <div className="flex justify-between mb-2">
                  <h5 className="text-white">{skill.name}</h5>
                  <span className="text-white">{skill.value}%</span>
                </div>
                <div className="h-2 bg-[#333] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#f5c45a] to-[#f5a63a] rounded-full" 
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
};

export default Resume;
