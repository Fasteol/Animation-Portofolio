import React from "react";
import { ArrowUpRight, Folder, Cpu, Mail, Code2, Monitor } from "lucide-react";

// Bulletproof Custom GitHub Icon Component
const GithubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Portfolio() {
  // Common Neobrutalism utility classes with enhanced reactive animations
  const neoBox =
    "border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white rounded-none transition-all duration-200";

  const neoCardHover =
    "hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]";

  const neoBtn =
    "border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none font-black uppercase tracking-wider transition-all duration-75 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none";

  return (
    <div className="min-h-screen bg-[#FFFBEB] text-black font-sans selection:bg-[#FF6B6B] selection:text-white pb-20 overflow-x-hidden">
      {/* INJEKSI ANIMASI KUSTOM & SMOOTH SCROLL GLOBAL */}
      <style>{`
        html {
          scroll-behavior: smooth; /* Menjadikan pergerakan scroll halus */
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(3deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-marquee-text {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .animate-float-box {
          animation: float 4s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>

      {/* 1. NAVBAR SECTION */}
      <header className="sticky top-0 z-50 w-full bg-[#FFFBEB] p-4 md:px-8 border-b-4 border-black">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div
            className={`p-2 px-4 ${neoBox} bg-[#FFDE4D] font-black tracking-tighter text-xl hover:rotate-2 cursor-pointer`}
          >
            FASTEOL
          </div>
          <nav className="hidden md:flex gap-6 font-bold">
            <a
              href="#about"
              className="hover:underline underline-offset-4 transition-all hover:text-[#FF6B6B]"
            >
              ABOUT
            </a>
            <a
              href="#skills"
              className="hover:underline underline-offset-4 transition-all hover:text-[#4D96FF]"
            >
              SKILLS
            </a>
            <a
              href="#projects"
              className="hover:underline underline-offset-4 transition-all hover:text-[#54B435]"
            >
              PROJECTS
            </a>
          </nav>
          <a
            href="#contact"
            className={`p-2 px-4 ${neoBtn} bg-[#4D96FF] text-white text-sm`}
          >
            Contact Me
          </a>
        </div>
      </header>

      {/* INFINITE MARQUEE BANNER */}
      <div className="w-full bg-[#FF6B6B] border-b-4 border-black py-2 overflow-hidden select-none">
        <div className="animate-marquee-text flex gap-8 text-white font-black uppercase text-xs tracking-widest">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="flex gap-8">
              <span>✦ Web Developer</span>
              <span>✦ Visual Programmer</span>
              <span>✦ Open For Collaboration</span>
              <span>✦ Code is Art</span>
            </span>
          ))}
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 md:px-8 mt-12 md:mt-20 space-y-24">
        {/* 2. HERO SECTION (scroll-mt-28 memberikan jarak aman dari sticky navbar) */}
        <section
          id="about"
          className="scroll-mt-28 grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        >
          <div className="md:col-span-2 space-y-6">
            <div className="inline-block bg-[#FF6B6B] text-white font-black text-sm uppercase tracking-widest px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              🚀 Welcome to My World
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-none">
              Hello, I'm
              <span className="bg-[#FFDE4D] px-2 border-4 border-black inline-block my-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:skew-x-3 transition-transform duration-150">
                Razan
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-xl leading-relaxed">
              A passionate
              <span className="text-[#4D96FF] font-bold bg-white/40 px-1">
                Web Developer
              </span>
              and visual programmer dedicated to crafting clean code with a
              precise, modern-minimalist aesthetic.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className={`p-4 px-6 ${neoBtn} bg-[#FFDE4D] text-black text-base flex items-center gap-2`}
              >
                View Work <Folder className="w-5 h-5 animate-pulse" />
              </a>
              <a
                href="https://github.com/Fasteol"
                target="_blank"
                rel="noreferrer"
                className={`p-4 px-6 ${neoBtn} bg-white text-black text-base flex items-center gap-2`}
              >
                GitHub <GithubIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Floating Neobrutalist Box Avatar */}
          <div className="flex justify-center md:justify-end">
            <div
              className={`w-72 h-72 ${neoBox} bg-[#4D96FF] relative overflow-hidden group animate-float-box shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`}
            >
              <div className="absolute inset-0 bg-[#FFDE4D] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center font-black text-3xl uppercase tracking-wider p-4 text-center border-b-4 border-black z-10 cursor-pointer">
                Let's Collaborate!
              </div>
              <div className="absolute inset-0 flex items-center justify-center border-4 border-black m-4 bg-white transition-transform duration-300 group-hover:rotate-6">
                <Code2 className="w-24 h-24 stroke-[2.5] text-black" />
              </div>
            </div>
          </div>
        </section>

        <hr className="border-2 border-black" />

        {/* 3. TECH STACK / SKILLS SECTION */}
        <section id="skills" className="scroll-mt-28 space-y-8">
          <div className="space-y-2">
            <h2 className="text-4xl font-black uppercase tracking-tight flex items-center gap-3">
              <Cpu className="w-8 h-8 bg-[#FFDE4D] p-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
              Skills & Arsenal
            </h2>
            <p className="font-medium text-gray-700">
              Technologies and tools I typically use to bring ideas to life:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { name: "PHP", color: "#4D96FF" },
              { name: "JavaScript", color: "#FFDE4D" },
              { name: "Tailwind CSS", color: "#E8A0BF" },
              { name: "HTML & CSS", color: "#FF6B6B" },
              { name: "Laravel", color: "#FF7A00" },
            ].map((skill, index) => (
              <div
                key={index}
                className={`${neoBox} ${neoCardHover} p-4 flex flex-col justify-between h-28 cursor-pointer`}
                style={{ backgroundColor: skill.color }}
              >
                <span className="font-black text-xs uppercase tracking-wider text-black/60">
                  Tech
                </span>
                <span className="font-black text-lg uppercase tracking-tight wrap-break-words">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-2 border-black" />

        {/* 4. PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-28 space-y-8">
          <div className="space-y-2">
            <h2 className="text-4xl font-black uppercase tracking-tight flex items-center gap-3">
              <Monitor className="w-8 h-8 bg-[#FF6B6B] p-1 border-2 border-black text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
              Featured Projects
            </h2>
            <p className="font-medium text-gray-700">
              A collection of systems and visual experiments I have built:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div
              className={`${neoBox} ${neoCardHover} group overflow-hidden flex flex-col cursor-pointer`}
            >
              <div className="bg-[#FFDE4D] p-6 border-b-4 border-black font-black text-xl flex justify-between items-center">
                <span>01 / WEB PORTAL & FORM VALIDATION</span>
                <ArrowUpRight className="w-6 h-6 transition-transform duration-200 group-hover:translate-x-2 group-hover:-translate-y-2" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <p className="font-medium text-gray-800 leading-relaxed">
                  A structured web-based application focused on optimizing data
                  array manipulation and securing user-side input form
                  validation architectures.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white border-2 border-black p-1 px-2 text-xs font-black uppercase group-hover:bg-black group-hover:text-white transition-colors">
                    PHP
                  </span>
                  <span className="bg-white border-2 border-black p-1 px-2 text-xs font-black uppercase group-hover:bg-black group-hover:text-white transition-colors">
                    Tailwind
                  </span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div
              className={`${neoBox} ${neoCardHover} group overflow-hidden flex flex-col cursor-pointer`}
            >
              <div className="bg-[#FF6B6B] text-white p-6 border-b-4 border-black font-black text-xl flex justify-between items-center">
                <span>02 / DYNAMIC LANDSCAPE SIMULATION</span>
                <ArrowUpRight className="w-6 h-6 text-white transition-transform duration-200 group-hover:translate-x-2 group-hover:-translate-y-2" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <p className="font-medium text-gray-800 leading-relaxed">
                  An interactive graphics-based visual programming experiment
                  utilizing parallax scrolling, water layering algorithms, and
                  moving object simulations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white text-black border-2 border-black p-1 px-2 text-xs font-black uppercase group-hover:bg-black group-hover:text-white transition-colors">
                    Processing
                  </span>
                  <span className="bg-white text-black border-2 border-black p-1 px-2 text-xs font-black uppercase group-hover:bg-black group-hover:text-white transition-colors">
                    Java Graphics
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-2 border-black" />

        {/* 5. CONTACT / FOOTER SECTION */}
        <section
          id="contact"
          className={`${neoBox} ${neoCardHover} bg-[#4D96FF] text-white p-8 md:p-12 text-center space-y-6 relative overflow-hidden group cursor-default scroll-mt-28`}
        >
          {/* Rotating Decorative Backing Ornaments */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#FFDE4D] border-4 border-black animate-spin-slow hidden md:block"></div>
          <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#FF6B6B] border-4 border-black rotate-45 group-hover:scale-110 transition-transform hidden md:block"></div>

          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-black transition-transform duration-200 group-hover:scale-105">
            Have a Project Idea?
          </h2>
          <p className="text-lg md:text-xl font-bold max-w-xl mx-auto text-black/80">
            The door to collaboration is always open. Drop a message and let's
            build something extraordinary together!
          </p>
          <div className="pt-4">
            <a
              href="mailto:razanmfs507@gmail.com"
              className={`${neoBtn} bg-[#FFDE4D] text-black p-4 px-8 inline-flex items-center gap-3 text-lg`}
            >
              Get In Touch via Email
              <Mail className="w-5 h-5 group-hover:animate-bounce" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
