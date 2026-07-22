'use client';

import React, { useState, useEffect } from 'react';
import { 
  Search, Sun, Moon, CheckCircle, Vote, Mail, BookOpen, 
  ChevronRight, Calendar, Landmark, AlertCircle, Shield, Award 
} from 'lucide-react';

export default function CitizenVoiceHome() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [pollVotes, setPollVotes] = useState({ support: 42, oppose: 18, neutral: 25, needInfo: 15 });
  const [hasVoted, setHasVoted] = useState(false);
  const [opinionSubmitted, setOpinionSubmitted] = useState(false);

  // Email draft state
  const [emailTarget, setEmailTarget] = useState('ministry@gov.in');
  const [emailSubject, setEmailSubject] = useState('Citizen Feedback on CJP Movement Policy');
  const [emailBody, setEmailBody] = useState('Dear Representative,\n\nI am writing to share my views regarding the ongoing CJP movement and public policy discussions...\n\nSincerely,\nA Concerned Citizen');

  // Interactive Poll Voting
  const handleVote = (option: keyof typeof pollVotes) => {
    if (hasVoted) return;
    setPollVotes(prev => ({ ...prev, [option]: prev[option] + 1 }));
    setHasVoted(true);
  };

  // Calculate Poll Percentages
  const totalVotes = Object.values(pollVotes).reduce((a, b) => a + b, 0);
  const getPercent = (val: number) => Math.round((val / totalVotes) * 100);

  // Draft Email Mailto Handler
  const handleSendMail = () => {
    const mailtoUrl = `mailto:${emailTarget}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-navy-900 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* GLOBAL NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-opacity-70 border-b border-slate-700/30 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-saffron-500 via-white to-indiaGreen-500 flex items-center justify-center font-bold text-navy-900 text-xs shadow-md">
            CVI
          </div>
          <span className="font-extrabold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-saffron to-indiaGreen">
            Citizen Voice India
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium opacity-90">
          <a href="#about" className="hover:text-saffron transition">About</a>
          <a href="#updates" className="hover:text-saffron transition">Updates</a>
          <a href="#timeline" className="hover:text-saffron transition">Timeline</a>
          <a href="#opinion" className="hover:text-saffron transition">Opinion</a>
          <a href="#polls" className="hover:text-saffron transition">Polls</a>
          <a href="#constitution" className="hover:text-saffron transition">Constitution</a>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border border-slate-700/50 hover:bg-slate-800/50 transition"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-saffron" /> : <Moon className="w-4 h-4 text-navy" />}
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
        {/* Subtle Backdrop Accent */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FF9933_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="max-w-5xl text-center space-y-8 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saffron/30 bg-saffron/10 text-saffron text-xs tracking-wider uppercase font-semibold">
            <Shield className="w-3.5 h-3.5" /> Non-Partisan Civic Platform
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
            Citizen Voice India
          </h1>

          <p className="text-xl md:text-2xl font-light text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Know the facts. Understand the timeline. Share your opinion.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a href="#about" className="px-6 py-3.5 rounded-xl bg-saffron text-navy-900 font-bold hover:bg-saffron/90 transition shadow-lg shadow-saffron/20">
              Learn More
            </a>
            <a href="#timeline" className="px-6 py-3.5 rounded-xl border border-slate-700 backdrop-blur-md hover:bg-slate-800/40 transition">
              Timeline
            </a>
            <a href="#updates" className="px-6 py-3.5 rounded-xl border border-slate-700 backdrop-blur-md hover:bg-slate-800/40 transition">
              Latest Updates
            </a>
            <a href="#opinion" className="px-6 py-3.5 rounded-xl bg-indiaGreen text-white font-semibold hover:bg-indiaGreen/90 transition">
              Share Opinion
            </a>
          </div>
        </div>
      </section>

      {/* GLOBAL SEARCH SECTION */}
      <section className="max-w-4xl mx-auto px-6 -mt-12 relative z-20">
        <div className="p-4 rounded-2xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-xl shadow-2xl flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400" />
          <input 
            type="text"
            placeholder="Search articles, timeline events, court updates, and FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent outline-none text-sm placeholder:text-slate-500"
          />
        </div>
      </section>

      {/* ABOUT CJP SECTION */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-28">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">Understanding the CJP Movement</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">A objective overview of the civic movement, its origins, public interest focus, and legislative developments.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "What is CJP?", desc: "A civil initiative focusing on administrative reform, public accountability, and civic awareness." },
            { title: "How did it start?", desc: "Originated from public advocacy discussions around transparency and regulatory speed." },
            { title: "Why it gained attention", desc: "Digital connectivity and widespread citizen participation accelerated public awareness across regions." },
            { title: "Current Status", desc: "Under review by policy committees with active public feedback submissions ongoing." }
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md hover:border-slate-700 transition">
              <h3 className="text-lg font-bold text-saffron mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LIVE UPDATES CARDS */}
      <section id="updates" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800/60">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold">Verified Live Updates</h2>
            <p className="text-sm text-slate-400 mt-1">Attributed directly to official record sources.</p>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-indiaGreen/20 text-indiaGreen font-semibold">Live Feed</span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { tag: "Government Statement", time: "2 hours ago", title: "Ministry issues draft policy consultation guidelines.", source: "Official Press Bureau" },
            { tag: "Court Update", time: "5 hours ago", title: "High Court schedules hearing on regulatory timeline framework.", source: "Judicial Registry" },
            { tag: "Public Announcement", time: "1 day ago", title: "Civic forum opens nationwide digital recommendation portal.", source: "Citizen Secretariat" }
          ].map((news, i) => (
            <div key={i} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/30 backdrop-blur-md flex flex-col justify-between space-y-4">
              <div>
                <div className="flex justify-between items-center text-xs mb-3">
                  <span className="text-saffron font-semibold">{news.tag}</span>
                  <span className="text-slate-500">{news.time}</span>
                </div>
                <h3 className="font-semibold text-base leading-snug">{news.title}</h3>
              </div>
              <div className="text-xs text-slate-500 border-t border-slate-800/60 pt-3">
                Source: {news.source}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VERTICAL TIMELINE SECTION */}
      <section id="timeline" className="max-w-4xl mx-auto px-6 py-28 border-t border-slate-800/60">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Chronological Timeline</h2>

        <div className="relative border-l border-slate-800 ml-4 md:ml-32 space-y-12">
          {[
            { phase: "Beginning", date: "Initial Phase", details: "Public proposals introduced regarding civic administrative frameworks." },
            { phase: "Major Events", date: "Consultation Phase", details: "Regional public discussions organized; multi-stakeholder feedback collected." },
            { phase: "Current Situation", date: "Present Day", details: "Policy review committee assessing submitted citizen recommendations." }
          ].map((ev, idx) => (
            <div key={idx} className="relative pl-8">
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-saffron ring-4 ring-navy-900" />
              <div className="md:absolute md:-left-36 md:top-1 text-xs text-slate-500 font-semibold">{ev.date}</div>
              <h3 className="text-lg font-bold text-slate-200">{ev.phase}</h3>
              <p className="text-sm text-slate-400 mt-1 max-w-lg">{ev.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CITIZEN OPINION FORM */}
      <section id="opinion" className="max-w-3xl mx-auto px-6 py-20 border-t border-slate-800/60">
        <div className="p-8 rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl">
          <h2 className="text-2xl font-bold mb-2">Share Your Opinion</h2>
          <p className="text-sm text-slate-400 mb-6">Your voice matters. Submissions are reviewed for civic constructive guidelines.</p>

          {opinionSubmitted ? (
            <div className="p-6 rounded-2xl bg-indiaGreen/10 border border-indiaGreen/30 text-indiaGreen flex items-center gap-3">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span className="font-semibold text-sm">Thank you for sharing your opinion.</span>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setOpinionSubmitted(true); }} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Name (optional)" className="w-full p-3.5 rounded-xl bg-slate-800/50 border border-slate-700 text-sm outline-none focus:border-saffron" />
                <input type="text" placeholder="State" required className="w-full p-3.5 rounded-xl bg-slate-800/50 border border-slate-700 text-sm outline-none focus:border-saffron" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Age Group (e.g. 18-25)" required className="w-full p-3.5 rounded-xl bg-slate-800/50 border border-slate-700 text-sm outline-none focus:border-saffron" />
                <input type="text" placeholder="Occupation" required className="w-full p-3.5 rounded-xl bg-slate-800/50 border border-slate-700 text-sm outline-none focus:border-saffron" />
              </div>
              <textarea placeholder="Your Opinion or Suggestions..." rows={4} required className="w-full p-3.5 rounded-xl bg-slate-800/50 border border-slate-700 text-sm outline-none focus:border-saffron" />
              <button type="submit" className="w-full py-3.5 rounded-xl bg-saffron text-navy-900 font-bold hover:bg-saffron/90 transition">
                Submit Perspective
              </button>
            </form>
          )}
        </div>
      </section>

      {/* LIVE POLL SECTION */}
      <section id="polls" className="max-w-3xl mx-auto px-6 py-20 border-t border-slate-800/60">
        <div className="p-8 rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl space-y-6">
          <div>
            <span className="text-xs font-bold text-saffron uppercase tracking-widest">Public Poll</span>
            <h2 className="text-xl font-bold mt-1">What is your opinion on the proposed reform roadmap?</h2>
          </div>

          <div className="space-y-3">
            {[
              { key: 'support', label: 'Support' },
              { key: 'oppose', label: 'Oppose' },
              { key: 'neutral', label: 'Neutral' },
              { key: 'needInfo', label: 'Need More Information' }
            ].map(({ key, label }) => {
              const pct = getPercent(pollVotes[key as keyof typeof pollVotes]);
              return (
                <button
                  key={key}
                  onClick={() => handleVote(key as keyof typeof pollVotes)}
                  className="w-full p-4 rounded-xl border border-slate-800 bg-slate-800/30 text-left relative overflow-hidden transition hover:border-slate-700"
                >
                  <div 
                    className="absolute left-0 top-0 bottom-0 bg-saffron/15 transition-all duration-500" 
                    style={{ width: `${pct}%` }} 
                  />
                  <div className="relative z-10 flex justify-between items-center text-sm font-medium">
                    <span>{label}</span>
                    <span className="font-bold">{pct}%</span>
                  </div>
                </button>
              );
            })}
          </div>
          <p className="text-xs text-slate-500 text-center">Total Votes Cast: {totalVotes.toLocaleString()}</p>
        </div>
      </section>

      {/* DRAFT EMAIL CAMPAIGN TOOL */}
      <section className="max-w-3xl mx-auto px-6 py-20 border-t border-slate-800/60">
        <div className="p-8 rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl space-y-4">
          <div className="flex items-center gap-2 text-saffron">
            <Mail className="w-5 h-5" />
            <h2 className="text-xl font-bold text-slate-100">Draft Representative Communication</h2>
          </div>
          <p className="text-xs text-slate-400">Review your message below. Clicking send opens your preferred email client to dispatch directly.</p>

          <div className="space-y-3 pt-2">
            <div>
              <label className="text-xs text-slate-400 font-semibold block mb-1">Target Public Office</label>
              <input 
                type="text" 
                value={emailTarget} 
                onChange={(e) => setEmailTarget(e.target.value)} 
                className="w-full p-3 rounded-xl bg-slate-800/50 border border-slate-700 text-xs outline-none"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 font-semibold block mb-1">Subject</label>
              <input 
                type="text" 
                value={emailSubject} 
                onChange={(e) => setEmailSubject(e.target.value)} 
                className="w-full p-3 rounded-xl bg-slate-800/50 border border-slate-700 text-xs outline-none"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 font-semibold block mb-1">Message Body</label>
              <textarea 
                rows={5} 
                value={emailBody} 
                onChange={(e) => setEmailBody(e.target.value)} 
                className="w-full p-3 rounded-xl bg-slate-800/50 border border-slate-700 text-xs outline-none"
              />
            </div>
            <button 
              onClick={handleSendMail}
              className="w-full py-3.5 rounded-xl bg-indiaGreen text-white font-bold hover:bg-indiaGreen/90 transition text-sm"
            >
              Open Email App & Send
            </button>
          </div>
        </div>
      </section>

      {/* CONSTITUTION SECTION */}
      <section id="constitution" className="max-w-5xl mx-auto px-6 py-28 border-t border-slate-800/60">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-saffron uppercase tracking-widest">Foundation of Democracy</span>
          <h2 className="text-3xl md:text-5xl font-black mt-2">The Constitution of India</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40">
            <h3 className="font-bold text-saffron mb-2">Preamble</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Constitutes India into a SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC securing Justice, Liberty, Equality, and Fraternity.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40">
            <h3 className="font-bold text-saffron mb-2">Fundamental Rights</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Guarantees essential liberties including Equality, Freedom of Speech, Protection of Life, and Constitutional Remedies.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40">
            <h3 className="font-bold text-saffron mb-2">Fundamental Duties</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Encourages citizens to abide by constitutional ideals, promote harmony, and safeguard public property.
            </p>
          </div>
        </div>

        {/* DR. B. R. AMBEDKAR TRIBUTE & HISTORICAL IMAGES */}
        <div className="p-8 rounded-3xl border border-slate-800 bg-slate-900/30 backdrop-blur-md">
          <h3 className="text-2xl font-bold mb-6 text-center">Historical Context & Architect of the Constitution</h3>
          
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-saffron">Dr. B. R. Ambedkar</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                As Chairman of the Drafting Committee, Dr. Bhimrao Ramji Ambedkar served as the principal architect of the Indian Constitution. His visionary stewardship established a robust legal framework guaranteeing civic rights, social equality, and democratic governance.
              </p>
            </div>
            
            {/* Dr. B. R. Ambedkar Portrait */}
            <div className="flex flex-col items-center">
              <Image 
                src="image_agent_tag_13891836486728175827" 
                alt="Portrait of Dr. B. R. Ambedkar" 
                caption="Dr. B. R. Ambedkar (1891–1956), Principal Architect of the Indian Constitution" 
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-slate-800">
            <div>
              <h4 className="text-sm font-bold text-slate-200 mb-3">Original Preamble Document</h4>
              <Image 
                src="image_agent_tag_13891836486728176544" 
                alt="The Constitution of India Preamble Calligraphy Document" 
                caption="Calligraphed Preamble of the Constitution of India" 
              />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-200 mb-3">National Emblem & Symbols</h4>
              <Image 
                src="image_agent_tag_13891836486728177261" 
                alt="Indian National Flag with Ashoka Chakra" 
                caption="National Flag representing courage, peace, and progress" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ANIMATED STATISTICS COUNTERS */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800/60">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Platform Visitors", count: "1,240,000+" },
            { label: "Opinions Submitted", count: "85,400+" },
            { label: "Poll Votes Cast", count: "310,000+" },
            { label: "Verified Briefs", count: "142" }
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-2xl border border-slate-800/40 bg-slate-900/20">
              <div className="text-3xl md:text-4xl font-black text-saffron">{stat.count}</div>
              <div className="text-xs text-slate-400 mt-2 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 bg-slate-950 px-6 py-12 text-xs text-slate-500">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-bold text-slate-300 mb-3">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-slate-300">About CJP</a></li>
              <li><a href="#updates" className="hover:text-slate-300">Live News</a></li>
              <li><a href="#timeline" className="hover:text-slate-300">Timeline</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-300 mb-3">Participation</h4>
            <ul className="space-y-2">
              <li><a href="#opinion" className="hover:text-slate-300">Submit Opinion</a></li>
              <li><a href="#polls" className="hover:text-slate-300">Public Polls</a></li>
              <li><a href="#constitution" className="hover:text-slate-300">Constitution</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-300 mb-3">Legal & Governance</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-slate-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-slate-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-slate-300">Editorial Guidelines</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-300 mb-3">Contact</h4>
            <p className="leading-relaxed">Citizen Voice Secretariat<br />New Delhi, India<br />contact@citizenvoice.in</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-6 border-t border-slate-900 flex justify-between items-center">
          <span>&copy; {new Date().getFullYear()} Citizen Voice India. Non-partisan public information platform.</span>
          <span>Designed for Accessibility & Civic Engagement</span>
        </div>
      </footer>

    </div>
  );
}
