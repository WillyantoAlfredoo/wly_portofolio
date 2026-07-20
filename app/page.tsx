"use client"; 

import { useEffect, useState } from "react"; 
import Sidebar from "./components/Sidebar";

// 1. DATA MASTER PROJECT
const PROJECTS_DATA = [
  {
    id: "diskominfo",
    title: "GePIKA",
    company: "Diskominfo Kota Jambi",
    type: "Internship Project",
    period: "1 July - 31 August 2024",
    logoImage: "/logo.png", 
    galleryImages: [
      "diskom/pagedepan.png", 
      "diskom/login.png",
      "diskom/crud.png", 
      "diskom/panduan.png",
      "diskom/uml.png",
      "diskom/erd.png"
    ],
    shortDesc: "Collaborated on web development and designed data structures for local government applications.",
    longDesc: `During my internship as a Web Developer & System Analyst at Diskominfo, I collaborated with frontend developers to build web applications for district offices. I was responsible for analyzing requirements to define system functionalities and mapping workflows or business processes during development. 

Additionally, I designed and managed MySQL databases using Laravel backend logic to ensure efficient data flow, maintained data accuracy and consistency, and aligned system features with user requirements through close team collaboration.`,
    tech: ["Laravel", "PHP", "MySQL", "UML Modeling", "Draw.io", "System Analysis"], 
    link: "https://diskominfo.jambiprov.go.id" 
  }
];

// 2. DATA MASTER SERTIFIKASI
const CERTIFICATIONS_DATA = {
  id: "certs-willy",
  title: "Professional Credentials & Certifications",
  shortDesc: "Verified achievements in JavaScript development, database design, and systems engineering.",
  items: [
    {
      title: "Foundation: Data, Data, Everywhere",
      platform: "Google",
      year: "2026",
      image: "sertifggl/sql.png", 
      description: "Demonstrates foundational knowledge of data analytics concepts, data ecosystems, analytical thinking, data ethics, and the data life cycle, along with an introduction to Spreadsheets, SQL, and Tableau."
    },
    {
      title: "SQL Course",
      platform: "Progate",
      year: "2026",
      image: "sertif/sql.png", 
      description: "SQL fundamentals covering the basics of manipulating databases"
    },
    {
      title: "SQL 101: Belajar SQL dari Nol",
      platform: "Ngulik Data",
      year: "2026",
      image: "sertif/sql-101-certificate.png", 
      description: "Mastered SQL fundamentals including data filtering, aggregation, and complex multi-table analysis using various JOIN types to extract business insights"
    },
    {
      title: "QUALITY ASSURANCE INTRODUCTION",
      platform: "Myskill",
      year: "2026",
      image: "sertif/qamyskill.png", 
      description: "Learn software testing lifecycles, test case design, and bug tracking to ensure product reliability."
    },
    {
      title: "Software Engineering",
      platform: "RevoU",
      year: "2026",
      image: "sertif/revo.png", 
      description: "Intensive training on full-stack web development frameworks and modern architecture"
    },
    {
      title: "Artificial Intelligence Using Go",
      platform: "Ruangguru",
      year: "2024",
      image: "sertif/go.png", 
      description: "Implementation of AI algorithms and machine learning concepts using Go for high-performance backends."
    },
    {
      title: "Management Systems and Databases",
      platform: "Ruangguru",
      year: "2024",
      image: "sertif/databaserg.png", 
      description: "Mastery of relational database design (ERD), data normalization, and advanced SQL querying techniques."
    },
  ]
};

export default function Home() {
  const [activeProject, setActiveProject] = useState<typeof PROJECTS_DATA[0] | null>(null);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-zinc-950 via-zinc-900 to-zinc-950 text-white font-sans antialiased selection:bg-white selection:text-black overflow-x-hidden relative">
      
      {/* ── STYLES ANIMASI BACKGROUND LANGIT MALAM OPTIMAL ── */}
      <style jsx global>{`
        @keyframes float-slow { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes float-reverse { 0%, 100% { transform: translateY(-5px); } 50% { transform: translateY(5px); } }
        @keyframes star-blink { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        @keyframes shooting-star {
          0% { transform: translateX(0) translateY(0) rotate(-45deg); opacity: 0; }
          6% { opacity: 1; }
          24% { transform: translateX(-600px) translateY(600px) rotate(-45deg); opacity: 0; }
          100% { transform: translateX(-600px) translateY(600px) rotate(-45deg); opacity: 0; }
        }
        .animate-float-1 { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-2 { animation: float-slow 7s ease-in-out infinite 1s; }
        .animate-float-3 { animation: float-slow 5s ease-in-out infinite 2s; }
        .animate-float-academic { animation: float-reverse 5s ease-in-out infinite; }
        
        .star-field {
          background-image: radial-gradient(rgba(255,255,255,0.4) 1px, transparent 0), radial-gradient(rgba(255,255,255,0.3) 1px, transparent 0);
          background-size: 280px 280px, 400px 400px;
          background-position: 0 0, 150px 150px;
        }
        .shooting-star-line {
          position: fixed;
          height: 1px;
          background: linear-gradient(-45deg, rgba(255,255,255,1), rgba(255,255,255,0));
          filter: drop-shadow(0 0 5px rgba(255,255,255,0.9));
          opacity: 0;
          pointer-events: none;
          z-index: 1;
        }
      `}</style>

      {/* ── STRUKTUR LANGIT MALAM ── */}
      <div className="fixed inset-0 star-field opacity-40 pointer-events-none z-0 animate-[star-blink_8s_infinite]"></div>
      
      {/* ── TOTAL 10 ARSITEKTUR BINTANG JATUH BERGANTIAN ── */}
      <div className="shooting-star-line top-4 right-[5%] w-24 animate-[shooting-star_10s_linear_infinite]"></div>
      <div className="shooting-star-line top-[15%] right-[25%] w-32 animate-[shooting-star_14s_linear_infinite_2s]"></div>
      <div className="shooting-star-line top-[8%] right-[45%] w-20 animate-[shooting-star_11s_linear_infinite_4s]"></div>
      <div className="shooting-star-line top-[25%] right-[10%] w-28 animate-[shooting-star_16s_linear_infinite_6s]"></div>
      <div className="shooting-star-line top-[30%] right-[35%] w-36 animate-[shooting-star_13s_linear_infinite_1s]"></div>
      <div className="shooting-star-line top-[2%] right-[60%] w-16 animate-[shooting-star_15s_linear_infinite_8s]"></div>
      <div className="shooting-star-line top-[18%] right-[55%] w-26 animate-[shooting-star_12s_linear_infinite_3s]"></div>
      <div className="shooting-star-line top-[40%] right-[20%] w-30 animate-[shooting-star_17s_linear_infinite_5s]"></div>
      <div className="shooting-star-line top-[12%] right-[75%] w-22 animate-[shooting-star_9s_linear_infinite_7s]"></div>
      <div className="shooting-star-line top-[35%] right-[5%] w-25 animate-[shooting-star_15s_linear_infinite_10s]"></div>

      {/* Grid Ornamen Latar */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10 pointer-events-none z-0"></div>

      {/* Lingkaran Orbit Besar */}
      <div className="hidden sm:flex fixed -top-20 -right-20 w-[600px] h-[600px] border border-zinc-800/40 rounded-full animate-[spin_120s_linear_infinite] pointer-events-none items-center justify-center z-0">
        <div className="w-[450px] h-[450px] border border-dashed border-zinc-800/30 rounded-full"></div>
        <div className="w-[250px] h-[250px] border border-zinc-800/20 rounded-full absolute"></div>
      </div>

      {/* Pendaran Nebula */}
      <div className="fixed top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[700px] bg-zinc-800/10 blur-[180px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-violet-950/20 blur-[130px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed bottom-[10%] right-[10%] w-[300px] h-[300px] bg-blue-950/15 blur-[100px] rounded-full pointer-events-none z-0"></div>

      {/* Memanggil Komponen Sidebar */}
      <Sidebar />

      {/* Lencana Nama */}
      <div className="fixed top-4 right-4 md:top-8 md:right-12 z-50">
        <div className="border border-zinc-800 px-4 py-1.5 md:px-5 md:py-2 rounded-full text-[10px] md:text-xs tracking-wider font-medium bg-zinc-900/60 backdrop-blur-md text-zinc-300 shadow-sm select-none">
          Willyanto Alfredo
        </div>
      </div>

      {/* Konten Utama */}
      <main className="pl-0 md:pl-64 relative z-10 w-full overflow-x-hidden">
        
        {/* ======================================================== */}
        {/* 1. SECTION HOME */}
        {/* ======================================================== */}
        <section id="home" className="min-h-screen flex flex-col justify-center px-6 py-20 md:py-0 md:pr-8 md:pl-24 relative box-border">
          <div className="relative select-none w-full max-w-full md:max-w-[85vw]">
            <div className="relative inline-block w-full">
              <h1 className="text-[16vw] md:text-[13vw] font-black tracking-tighter leading-[0.75] uppercase bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent drop-shadow-2xl">
                PORTO
              </h1>
              <div className="absolute top-[12%] right-[22%] w-[10vw] h-[10vw] md:w-[6.5vw] md:h-[6.5vw] rounded-full bg-gradient-to-tr from-zinc-700 via-zinc-200 to-white shadow-[inset_-5px_-5px_20px_rgba(0,0,0,0.8),0_15px_30px_rgba(0,0,0,0.6)] z-20"></div>
              <div className="absolute top-[-2%] right-[14%] w-[18vw] h-[14vw] md:w-[12vw] md:h-[10vw] border-[2px] md:border-[4px] border-zinc-300/70 rounded-full rotate-[32deg] transform scale-y-[0.3] z-30 pointer-events-none shadow-[0_0_20px_rgba(255,255,255,0.2)]"></div>
            </div>

            <h1 className="text-[16vw] md:text-[13vw] font-black tracking-tighter leading-[0.75] uppercase bg-gradient-to-b from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent flex items-center w-full">
              FOLI
              <span className="inline-block transform scale-x-[0.85] scale-y-[1.15] text-white origin-left ml-[-0.5vw]">
                O
              </span>
            </h1>
          </div>

          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row sm:items-end justify-between max-w-4xl w-full gap-8 pl-1 md:pl-2">
            <div className="space-y-3 max-w-sm">
              <div className="space-y-1">
                <p className="text-[10px] md:text-xs tracking-widest text-zinc-300 uppercase font-medium">
                  System & Data Analysis
                </p>
                <div className="h-[1px] w-full bg-zinc-800"></div>
              </div>
              <p className="text-[10px] md:text-xs tracking-widest text-zinc-500 uppercase font-medium">
                ERP Systems, SQL & Database Architecture
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 items-stretch sm:items-center w-full sm:w-auto">
              <a 
                href="/WillyantoAlfredo SystemAnalyst.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group/cv px-5 py-3 rounded-full border border-white text-[10px] md:text-xs font-mono font-bold tracking-wider text-black bg-white flex items-center justify-center gap-2 transition-all duration-300 hover:bg-transparent hover:text-white hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]"
              >
                <span>VIEW DOCUMENT CV</span>
                <span className="transform group-hover/cv:translate-x-1 transition-transform">→</span>
              </a>

              <a 
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group/node px-5 py-3 rounded-full border border-zinc-800 text-[10px] md:text-xs font-mono tracking-wider text-zinc-400 bg-zinc-900/20 backdrop-blur-sm flex items-center justify-center gap-2 transition-all duration-300 hover:border-zinc-500 hover:text-white"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 group-hover/node:bg-white animate-pulse"></span>
                <span>EXPLORE PROJECT NODE</span>
                <span className="transform group-hover/node:translate-y-0.5 transition-transform">↓</span>
              </a>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 2. SECTION ABOUT */}
        {/* ======================================================== */}
        <section id="about" className="min-h-screen flex flex-col justify-center px-6 py-20 md:pr-8 md:pl-24 border-t border-zinc-900/50 relative overflow-hidden box-border">
          <div className="max-w-5xl w-full space-y-12 md:space-y-16">
            <div className="space-y-2 flex flex-col items-center justify-center text-center w-full">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">ABOUT ME</h2>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 w-full justify-between text-center lg:text-left">
              <div className="relative group shrink-0">
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-zinc-500/10 rounded-full blur-xl opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"></div>
                <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-full p-[2px] bg-gradient-to-b from-zinc-500 via-zinc-800 to-zinc-900 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
                  <div className="w-full h-full rounded-full bg-zinc-950 overflow-hidden relative flex items-center justify-center">
                    <img 
                      src="/WillyantoAlfredo_foto.png" 
                      alt="Willyanto Alfredo" 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4 flex-1">
                <p className="text-base md:text-lg lg:text-xl text-zinc-400 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Information Systems graduate from Universitas Jambi interested in{" "}
                  <span className="text-white font-medium">System Analysis</span>. 
                  Experienced in UML modeling and system validation at Diskominfo. Proficient in{" "}
                  <span className="text-white font-medium">SQL</span> for database management, with foundational knowledge 
                  in basic web development, APIs, and ERP. Expanded skills in{" "}
                  <span className="text-white font-medium">AI using Go</span> via Ruangguru. 
                  Brings critical thinking and attention to detail to solve problems effectively.
                </p>
              </div>

              <div className="animate-float-academic shrink-0 w-full sm:w-56 border border-zinc-800 bg-zinc-900/10 px-6 py-8 md:py-10 rounded-[40px] md:rounded-[50px] flex flex-col items-center justify-center text-center space-y-5 hover:border-white/40 hover:bg-zinc-900/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500 ease-out">
                <div className="text-[10px] md:text-[11px] font-mono text-zinc-400 tracking-[0.2em] uppercase font-semibold">EDUCATION</div>
                <div className="space-y-1.5">
                  <h4 className="text-lg md:text-xl font-black tracking-wider text-white bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]">UNJA</h4>
                  <p className="text-xs md:text-sm font-medium text-zinc-300 leading-tight">Jambi University</p>
                  <span className="text-[10px] md:text-[11px] text-zinc-500 font-mono block">Jambi, Indonesia</span>
                </div>
                <div className="w-16 h-[1px] bg-zinc-800/80"></div>
                <div className="space-y-0.5">
                  <span className="text-[9px] md:text-[10px] font-mono text-zinc-500 tracking-wider block uppercase">Grade / GPA</span>
                  <span className="text-xl md:text-2xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">3.65</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-6 max-w-4xl mx-auto w-full">
              <div className="animate-float-1 group/card border border-zinc-800 bg-zinc-900/20 px-6 py-8 rounded-[30px] sm:rounded-[100px] flex flex-col items-center justify-center space-y-3 hover:border-white/40 hover:bg-zinc-900/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500 ease-out">
                <div className="text-[10px] font-mono text-zinc-500 tracking-widest">01 // CORE</div>
                <h3 className="text-sm md:text-base font-bold tracking-wide text-zinc-300 group-hover/card:text-white transition-colors">SYSTEM ARCHITECT</h3>
                <p className="text-xs text-zinc-500 group-hover/card:text-zinc-400 leading-relaxed text-center px-2">Analyzing requirements and modeling business processes using UML (DFD/ERD).</p>
              </div>
              <div className="animate-float-2 group/card border border-zinc-800 bg-zinc-900/20 px-6 py-8 rounded-[30px] sm:rounded-[100px] flex flex-col items-center justify-center space-y-3 hover:border-white/40 hover:bg-zinc-900/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500 ease-out">
                <div className="text-[10px] font-mono text-zinc-500 tracking-widest">02 // DEV</div>
                <h3 className="text-sm md:text-base font-bold tracking-wide text-zinc-300 group-hover/card:text-white transition-colors">BACKEND & SQL</h3>
                <p className="text-xs text-zinc-500 group-hover/card:text-zinc-400 leading-relaxed text-center px-2">Managing MySQL database structures and developing Laravel backend services.</p>
              </div>
              <div className="animate-float-3 group/card border border-zinc-800 bg-zinc-900/20 px-6 py-8 rounded-[30px] sm:rounded-[100px] flex flex-col items-center justify-center space-y-3 sm:col-span-2 md:col-span-1 hover:border-white/40 hover:bg-zinc-900/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500 ease-out">
                <div className="text-[10px] font-mono text-zinc-500 tracking-widest">03 // DATA</div>
                <h3 className="text-sm md:text-base font-bold tracking-wide text-zinc-300 group-hover/card:text-white transition-colors">DATA VALIDATION</h3>
                <p className="text-xs text-zinc-500 group-hover/card:text-zinc-400 leading-relaxed text-center px-2">Executing statistical testing using SmartPLS and SPSS for business intelligence.</p>
              </div>
            </div>

            {/* AREA CORE STACK & KOTAK SERTIFIKASI YANG SUDAH DI-UPGRADE AGAR MENCOLOK */}
            <div className="pt-8 border-t border-zinc-900/60 space-y-8 w-full">
              <div className="flex flex-col sm:flex-row flex-wrap justify-center text-center sm:text-left gap-y-3 gap-x-12 text-[10px] md:text-[11px] font-mono text-zinc-500">
                <div><span className="text-zinc-400 font-medium">LANGUAGES:</span> PHP, JavaScript, SQL</div>
                <div><span className="text-zinc-400 font-medium">FRAMEWORKS & TOOLS:</span> Laravel, Postman, Jira, Git, Draw.io, SmartPLS, SPSS</div>
              </div>

              <div className="space-y-4 max-w-3xl mx-auto">
                <span className="text-[10px] font-mono text-zinc-400 tracking-[0.2em] uppercase font-semibold block text-center animate-pulse">
                  // CREDENTIAL SYSTEM ARCHIVE
                </span>
                
                {/* UPGRADED KARTU PICU SERTIFIKAT (SANGAT VISUAL & INTERAKTIF) */}
                <div 
                  onClick={() => setIsCertModalOpen(true)}
                  className="group/cert block p-6 md:p-8 border border-zinc-800 bg-zinc-950/40 rounded-3xl hover:border-white/40 hover:bg-zinc-900/30 hover:shadow-[0_0_50px_rgba(255,255,255,0.08)] cursor-pointer transition-all duration-500 relative overflow-hidden group"
                >
                  {/* Efek Garis Neon Mengalir */}
                  <div className="h-[2px] absolute top-0 left-0 right-0 bg-gradient-to-r from-transparent via-zinc-700 group-hover/cert:via-white/60 to-transparent transition-all duration-500"></div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    
                    {/* Kolom Teks Utama (Kiri) */}
                    <div className="lg:col-span-7 space-y-3 text-left">
                      <div className="flex items-center gap-2">
                        <span className="inline-block w-2 h-2 rounded-full bg-zinc-400 animate-ping"></span>
                        <span className="text-[9px] md:text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                          MODULE // {CERTIFICATIONS_DATA.items.length} VERIFIED DIPLOMAS
                        </span>
                      </div>
                      <h4 className="text-lg md:text-2xl font-black tracking-tight text-zinc-100 group-hover/cert:text-white transition-colors bg-gradient-to-r from-white to-zinc-400 bg-clip-text">
                        {CERTIFICATIONS_DATA.title}
                      </h4>
                      <p className="text-xs text-zinc-400 font-light leading-relaxed group-hover/cert:text-zinc-300 transition-colors">
                        {CERTIFICATIONS_DATA.shortDesc} Click to run full verification and examine digital credential records.
                      </p>
                    </div>

                    {/* Kolom Pratinjau Gambar / Grid Thumbnail (Kanan - Membuat Orang Langsung Ngeh) */}
                    <div className="lg:col-span-5 relative flex items-center justify-start lg:justify-end overflow-hidden h-20 md:h-24 pr-2">
                      <div className="flex -space-x-8 md:-space-x-12 transform group-hover/cert:translate-x-[-10px] transition-transform duration-500">
                        {CERTIFICATIONS_DATA.items.slice(0, 4).map((cert, idx) => (
                          <div 
                            key={idx} 
                            style={{ zIndex: 10 + idx }}
                            className="w-24 h-16 md:w-32 md:h-20 border border-zinc-700 bg-zinc-900 rounded-lg overflow-hidden rotate-[-8deg] shadow-[5px_5px_15px_rgba(0,0,0,0.6)] group-hover/cert:rotate-[-4deg] group-hover/cert:scale-105 transition-all duration-500 origin-bottom shrink-0 relative"
                          >
                            <img src={cert.image} alt="Preview" className="w-full h-full object-cover object-center filter brightness-[0.8] group-hover/cert:brightness-100 transition-all" />
                            <div className="absolute inset-0 bg-zinc-950/10 group-hover/cert:bg-transparent"></div>
                          </div>
                        ))}
                        {CERTIFICATIONS_DATA.items.length > 4 && (
                          <div 
                            style={{ zIndex: 40 }}
                            className="w-16 h-16 md:w-20 md:h-20 border border-dashed border-zinc-700 bg-zinc-950/90 rounded-lg flex flex-col items-center justify-center text-zinc-400 rotate-[-8deg] shadow-[5px_5px_15px_rgba(0,0,0,0.65)] shrink-0 font-mono text-xs font-bold"
                          >
                            +{CERTIFICATIONS_DATA.items.length - 4}
                          </div>
                        )}
                      </div>
                    </div>

                  </div>

                  {/* Garis Terminal Navigasi Bawah */}
                  <div className="text-[10px] md:text-[11px] font-mono text-zinc-500 group-hover/cert:text-white transition-colors flex items-center justify-between border-t border-zinc-900 pt-4 mt-4">
                    <span className="tracking-widest">// INITIALIZE CREDENTIAL INSPECTION TERMINAL</span>
                    <span className="transform group-hover/cert:translate-x-1 transition-transform">INSPECT SECURELY →</span>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ======================================================== */}
        {/* 3. SECTION PROJECTS */}
        {/* ======================================================== */}
        <section id="projects" className="min-h-screen flex flex-col justify-center px-6 py-20 md:pr-8 md:pl-24 border-t border-zinc-900/50 relative overflow-hidden box-border">
          <div className="max-w-5xl w-full space-y-12">
            
            <div className="space-y-2 flex flex-col items-center justify-center text-center w-full">
              <span className="text-xs tracking-[0.2em] font-mono text-zinc-500 uppercase block animate-pulse">[ 02 / WORKS ]</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">FEATURED PROJECTS</h2>
              <p className="text-[11px] md:text-xs text-zinc-500 font-mono max-w-xs md:max-w-none">Click on any project window to open its multi-view system insights</p>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-8 pt-4 px-1 snap-x scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent w-full">
              {PROJECTS_DATA.map((project) => (
                <div 
                  key={project.id}
                  onClick={() => setActiveProject(project)}
                  className="snap-center shrink-0 w-[85vw] sm:w-[420px] border border-zinc-800 bg-zinc-900/20 rounded-3xl overflow-hidden cursor-pointer group hover:border-white/30 hover:bg-zinc-900/40 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all duration-500 flex flex-col h-[480px] sm:h-[470px] justify-between relative"
                >
                  <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-zinc-700 group-hover:via-white/40 to-transparent transition-all duration-500"></div>
                  <div className="p-5 sm:p-6 space-y-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 text-[11px] font-mono text-zinc-500">
                      <span className="tracking-widest uppercase text-zinc-400 font-medium group-hover:text-white transition-colors line-clamp-1">
                        // {project.company}
                      </span>
                      <span className="text-[10px] sm:text-[11px]">{project.period}</span>
                    </div>
                    <div className="w-full h-36 sm:h-40 rounded-xl border border-zinc-800/80 overflow-hidden relative bg-white flex items-center justify-center p-4 group-hover:bg-zinc-50 transition-colors duration-500">
                      <img 
                        src={project.logoImage} 
                        alt={project.title} 
                        className="max-w-full max-h-full object-contain transform group-hover:scale-95 transition-transform duration-500 ease-out"
                      />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[9px] font-mono tracking-wider text-zinc-600 block uppercase">{project.type}</span>
                      <h3 className="text-base sm:text-lg font-bold text-zinc-200 group-hover:text-white transition-colors leading-snug">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed group-hover:text-zinc-300 transition-colors line-clamp-2">
                      {project.shortDesc}
                    </p>
                  </div>
                  <div className="p-5 sm:p-6 pt-0 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((t, idx) => (
                        <span key={idx} className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-zinc-950 text-zinc-500 border border-zinc-900">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between border-t border-zinc-800/60 pt-3 text-[11px] font-mono text-zinc-500 group-hover:text-white transition-colors">
                      <span>VIEW FULL MULTI-SCREEN</span>
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 4. SECTION CONTACT */}
        {/* ======================================================== */}
        <section id="contact" className="min-h-screen flex flex-col justify-center px-6 py-20 md:pr-8 md:pl-24 border-t border-zinc-900/50 relative overflow-hidden box-border">
          <div className="max-w-4xl w-full space-y-12 mx-auto">
            
            <div className="space-y-2 flex flex-col items-center justify-center text-center w-full">
              <span className="text-xs tracking-[0.2em] font-mono text-zinc-500 uppercase block animate-pulse">// HUBUNGI SAYA</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">GET IN TOUCH</h2>
              <p className="text-[11px] md:text-xs text-zinc-500 font-mono">Let&apos;s connect through official terminals and network nodes</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-stretch w-full">
              
              <div className="md:col-span-3 relative overflow-hidden p-5 md:p-6 border border-zinc-800 bg-zinc-900/10 rounded-2xl flex flex-col justify-between group/geo transition-all duration-500 hover:border-zinc-700 hover:bg-zinc-900/30">
                <div className="space-y-1 text-left">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">// CURRENT LOCATION</span>
                  <h4 className="text-base md:text-lg font-bold text-zinc-200 group-hover/geo:text-white transition-colors">Tangerang Selatan</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">Jakarta, Indonesia</p>
                </div>
                <div className="text-[11px] font-mono text-zinc-600 mt-6 md:mt-8 flex items-center justify-between border-t border-zinc-800/60 pt-3 group-hover/geo:text-zinc-400 transition-colors">
                  <span>TIMEZONE // GMT+7</span>
                  <span className="animate-pulse">📍</span>
                </div>
              </div>

              <a 
                href="mailto:willyanto.alfredoo@email.com"
                className="md:col-span-3 relative overflow-hidden p-5 md:p-6 border border-zinc-800 bg-zinc-900/10 rounded-2xl flex flex-col justify-between group/mail transition-all duration-500 hover:border-zinc-500/50 hover:bg-zinc-900/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
              >
                <div className="space-y-1 text-left overflow-hidden">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">// ELECTRONIC MAIL</span>
                  <h4 className="text-sm md:text-lg font-bold text-zinc-200 group-hover/mail:text-white transition-colors truncate">willyanto.alfredoo@email.com</h4>
                  <p className="text-xs text-zinc-500">Available for professional inquiries</p>
                </div>
                <div className="text-[11px] font-mono text-zinc-600 mt-6 md:mt-8 flex items-center justify-between border-t border-zinc-800/60 pt-3 group-hover/mail:text-white transition-colors">
                  <span>SEND DIRECT ENQUIRY</span>
                  <span className="transform group-hover/mail:translate-x-1 transition-transform">→</span>
                </div>
              </a>

              <a 
                href="https://wa.me/6289672236850"
                target="_blank"
                rel="noopener noreferrer"
                className="md:col-span-2 relative overflow-hidden p-5 md:p-6 border border-zinc-800 bg-zinc-900/10 rounded-2xl flex flex-col justify-between group/phone transition-all duration-500 hover:border-emerald-500/40 hover:bg-zinc-900/20 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]"
              >
                <div className="space-y-1 text-left">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">// SECURE LINE</span>
                  <h4 className="text-sm md:text-base font-bold text-zinc-300 group-hover/phone:text-white transition-colors">+62 896-7223-6850</h4>
                  <p className="text-[11px] text-zinc-500">WhatsApp / Call</p>
                </div>
                <div className="text-[11px] font-mono text-zinc-600 mt-4 md:mt-6 flex items-center justify-between border-t border-zinc-800/60 pt-3 group-hover/phone:text-emerald-400 transition-colors">
                  <span>CONNECT PHONE</span>
                  <span>→</span>
                </div>
                <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-emerald-500/5 blur-xl group-hover/phone:bg-emerald-500/10 rounded-full transition-all duration-500"></div>
              </a>

              <a 
                href="http://linkedin.com/in/willyanto-alfredo/"
                target="_blank" 
                rel="noopener noreferrer"
                className="md:col-span-2 group/li relative overflow-hidden p-5 md:p-6 border border-zinc-800 bg-zinc-900/10 rounded-2xl flex flex-col justify-between transition-all duration-500 hover:border-blue-500/50 hover:bg-zinc-900/20 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
              >
                <div className="space-y-1 text-left">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">// PRO NETWORK</span>
                  <h4 className="text-sm md:text-base font-bold text-zinc-300 group-hover/li:text-white transition-colors">LinkedIn</h4>
                  <p className="text-[11px] text-zinc-500">Willyanto Alfredo</p>
                </div>
                <div className="text-[11px] font-mono text-zinc-600 mt-4 md:mt-6 flex items-center justify-between border-t border-zinc-800/60 pt-3 group-hover/li:text-blue-400 transition-colors">
                  <span>VIEW PROFILE</span>
                  <span>→</span>
                </div>
                <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-blue-500/5 blur-xl group-hover/li:bg-blue-500/10 rounded-full transition-all duration-500"></div>
              </a>

              <div className="md:col-span-2 flex flex-col gap-3">
                <a 
                  href="https://github.com/WillyantoAlfredoo"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group/git relative overflow-hidden p-4 border border-zinc-800 bg-zinc-900/10 rounded-xl flex items-center justify-between transition-all duration-300 hover:border-white/30 hover:bg-zinc-900/20"
                >
                  <div className="text-left">
                    <span className="text-[9px] font-mono text-zinc-600 block">REPOSITORY</span>
                    <span className="text-xs font-bold text-zinc-300 group-hover/git:text-white transition-colors">GitHub Terminal</span>
                  </div>
                  <span className="text-xs text-zinc-600 group-hover/git:text-white transition-transform group-hover/git:translate-x-0.5">→</span>
                </a>

                <a 
                  href="https://www.instagram.com/_wlyy?igsh=MXJwbGxleDF4anJoeg%3D%3D&utm_source=qr"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group/ig relative overflow-hidden p-4 border border-zinc-800 bg-zinc-900/10 rounded-xl flex items-center justify-between transition-all duration-300 hover:border-pink-500/40 hover:bg-zinc-900/20"
                >
                  <div className="text-left">
                    <span className="text-[9px] font-mono text-zinc-600 block">SOCIAL</span>
                    <span className="text-xs font-bold text-zinc-300 group-hover/ig:text-pink-400 transition-colors">Instagram</span>
                  </div>
                  <span className="text-xs text-zinc-600 group-hover/ig:text-pink-400 transition-transform group-hover/ig:translate-x-0.5">→</span>
                </a>
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* ======================================================== */}
      {/* MODAL POPUP FOR PROJECTS */}
      {/* ======================================================== */}
      {activeProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-4 backdrop-blur-xl bg-zinc-950/80 animate-[fadeIn_0.3s_ease-out]">
          <div className="border border-zinc-800 bg-zinc-900/90 rounded-2xl md:rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
            <div className="sticky top-0 bg-zinc-900/90 backdrop-blur-md px-4 py-3 md:px-6 md:py-4 border-b border-zinc-800/60 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <button onClick={() => setActiveProject(null)} className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors"></button>
                <div className="hidden sm:block w-3 h-3 rounded-full bg-zinc-700"></div>
                <div className="hidden sm:block w-3 h-3 rounded-full bg-zinc-700"></div>
              </div>
              <span className="text-[10px] md:text-xs font-mono text-zinc-400 uppercase tracking-wider truncate max-w-[50%]">{activeProject.company} // SYSTEM ARTIFACTS</span>
              <button onClick={() => setActiveProject(null)} className="text-xs font-mono text-zinc-500 hover:text-white transition-colors">[ ESC ]</button>
            </div>
            <div className="p-5 md:p-8 space-y-6 md:space-y-8">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] md:text-xs font-mono text-zinc-400">
                  <span className="text-white font-medium uppercase">{activeProject.type}</span>
                  <span className="text-zinc-600 hidden sm:inline">•</span>
                  <span>Timeline: {activeProject.period}</span>
                </div>
                <h3 className="text-xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
                  {activeProject.title}
                </h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[9px] md:text-[10px] font-mono text-zinc-500 px-1">
                  <span>// SYSTEM SCREENSHOTS & UML ARCHITECTURE</span>
                  <span className="animate-pulse">SCROLL HORIZONTAL →</span>
                </div>
                <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 pt-1 snap-x scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent w-full">
                  {activeProject.galleryImages.map((imgUrl, index) => (
                    <div key={index} className="snap-center shrink-0 w-[80vw] sm:w-[550px] h-48 sm:h-80 rounded-xl border border-zinc-800 overflow-hidden relative bg-zinc-950 shadow-2xl group/img">
                      <div className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[9px] font-mono border border-zinc-800 text-zinc-400 z-10">Artifact {index + 1}</div>
                      <img src={imgUrl} alt={`Artifact view ${index + 1}`} className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-[11px] md:text-xs font-mono text-zinc-400 tracking-wider uppercase">// PROJECT SPECIFICATION & ARCHITECTURE</h4>
                <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed whitespace-pre-line">{activeProject.longDesc}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL POPUP FOR CERTIFICATIONS */}
      {/* ======================================================== */}
      {isCertModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-4 backdrop-blur-xl bg-zinc-950/80 animate-[fadeIn_0.3s_ease-out]">
          <div className="border border-zinc-800 bg-zinc-900/90 rounded-2xl md:rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
            <div className="sticky top-0 bg-zinc-900/90 backdrop-blur-md px-4 py-3 md:px-6 md:py-4 border-b border-zinc-800/60 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <button onClick={() => setIsCertModalOpen(false)} className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors"></button>
                <div className="hidden sm:block w-3 h-3 rounded-full bg-zinc-700"></div>
                <div className="hidden sm:block w-3 h-3 rounded-full bg-zinc-700"></div>
              </div>
              <span className="text-[10px] md:text-xs font-mono text-zinc-400 uppercase tracking-wider">WILLYANTO // VERIFIED CERTIFICATES</span>
              <button onClick={() => setIsCertModalOpen(false)} className="text-xs font-mono text-zinc-500 hover:text-white transition-colors">[ ESC ]</button>
            </div>
            <div className="p-5 md:p-8 space-y-8 md:space-y-10">
              <div className="space-y-1 text-left">
                <span className="text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-[0.2em] block">// ACADEMIC credentials</span>
                <h3 className="text-xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">{CERTIFICATIONS_DATA.title}</h3>
              </div>
              <div className="space-y-6 md:space-y-8 divide-y divide-zinc-800/60">
                {CERTIFICATIONS_DATA.items.map((cert, index) => (
                  <div key={index} className={`flex flex-col md:flex-row gap-4 md:gap-6 pt-6 ${index === 0 ? 'pt-0' : ''} text-left items-start`}>
                    <div className="w-full md:w-80 h-40 md:h-48 rounded-xl border border-zinc-800 overflow-hidden relative bg-zinc-950 shrink-0 group/img">
                      <img src={cert.image} alt={cert.title} className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
                    </div>
                    <div className="space-y-2 md:space-y-3 flex-1 w-full">
                      <div className="flex justify-between items-baseline gap-x-2">
                        <span className="text-[9px] md:text-[10px] font-mono text-zinc-500 uppercase tracking-wider">{cert.platform}</span>
                        <span className="text-[11px] font-mono text-zinc-500">Issued {cert.year}</span>
                      </div>
                      <h4 className="text-base md:text-lg font-bold text-white tracking-tight">{cert.title}</h4>
                      <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">{cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}