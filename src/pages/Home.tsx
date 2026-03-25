import React from 'react';
import { motion } from 'motion/react';

export const Home: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="flex flex-col"
    >
      {/* Hero Section */}
      <section className="relative hero-gradient text-white px-6 py-16 flex flex-col gap-6 overflow-hidden">
        <div className="relative z-10 flex flex-col gap-4">
          <span className="font-label uppercase tracking-[0.05em] text-xs font-bold text-secondary-fixed-dim">
            Est. 2019 • Jabalpur • Indore • Pune • Bangalore
          </span>
          <div className="inline-flex items-center gap-2 bg-secondary/30 self-start px-3 py-1 rounded-full border border-secondary/50">
            <span className="material-symbols-outlined text-sm text-secondary-fixed" data-icon="verified">verified</span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-secondary-fixed">ServiceNow Expert Company</span>
          </div>
          <h1 className="font-headline text-4xl font-extrabold tracking-tighter leading-tight">
            Enterprise Velocity. <br/>
            <span className="text-secondary-fixed-dim">Indian Precision. Global Impact.</span>
          </h1>
          <p className="font-body text-lg text-primary-fixed/80 leading-relaxed max-w-[90%]">
            We don't just build software; we architect the digital backbone of modern enterprises. From ServiceNow workflows to AI-driven recruitment, Xohani delivers elite technical execution at an optimized global cost structure.
          </p>
          <div className="flex gap-4 mt-4">
            <button className="bg-secondary-container text-on-secondary-container font-bold px-6 py-3 rounded-full flex items-center gap-2 active:scale-95 transition-all">
              Get Started
              <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
            </button>
          </div>
        </div>
        <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
      </section>

      {/* Partner Logos */}
      <section className="py-8 bg-surface-container-low border-y border-outline-variant/30">
        <div className="flex overflow-x-auto gap-8 px-6 no-scrollbar items-center">
          {[
            { icon: 'cloud_done', label: 'ServiceNow' },
            { icon: 'hub', label: 'Salesforce' },
            { icon: 'psychology', label: 'AI/ML' },
            { icon: 'dataset', label: 'SAP' },
            { icon: 'layers', label: 'VMware' },
          ].map((partner, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 min-w-fit">
              <span className="material-symbols-outlined text-3xl text-primary" data-icon={partner.icon}>{partner.icon}</span>
              <span className="text-[10px] font-bold text-primary/60 uppercase">{partner.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Brief Overview */}
      <section className="px-6 py-12 bg-surface">
        <div className="flex flex-col gap-4">
          <h2 className="font-headline text-2xl font-bold text-primary">The Architectural Architect</h2>
          <div className="h-1 w-12 bg-secondary"></div>
          <p className="text-on-surface-variant leading-relaxed text-sm">
            Headquartered in Jabalpur with strategic hubs in Indore, Pune, and Bangalore, Xohani Solutions has evolved into a global technology powerhouse. We deliver enterprise agility through top-tier architectural precision at unmatched value.
          </p>
        </div>
      </section>

      {/* The Xohani Delta Section */}
      <section className="py-16 px-6 bg-white">
        <div className="mb-10">
          <span className="font-label text-xs font-bold uppercase tracking-widest text-secondary mb-2 block">The Xohani Advantage</span>
          <h2 className="font-headline text-3xl font-extrabold tracking-tight text-primary">The Xohani Delta</h2>
          <p className="text-on-surface-variant mt-4 text-sm">Why global leaders choose us over massive conglomerates.</p>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          {[
            { feature: 'Agility', desc: 'Zero bureaucracy. Direct access to architects and decision-makers.', icon: 'bolt' },
            { feature: 'Tech Stack', desc: 'Deep expertise in ServiceNow, Salesforce, and MERN—the trifecta of modern enterprise.', icon: 'layers' },
            { feature: 'Cost', desc: '"Tier 1" quality delivered at "Tier 2" pricing through our Jabalpur/Indore hubs.', icon: 'payments' },
            { feature: 'Stability', desc: 'Est. 2019 with a proven track record across FinTech, Healthcare, and Logistics.', icon: 'verified' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 p-6 bg-surface-container-lowest rounded-2xl border border-outline-variant/10">
              <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-secondary text-xl">{item.icon}</span>
              </div>
              <div>
                <h4 className="font-headline font-bold text-primary">{item.feature}</h4>
                <p className="text-xs text-on-surface-variant mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Backlog Product Spotlight */}
      <section className="py-16 px-6 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="relative z-10">
          <span className="px-3 py-1 bg-secondary text-white text-[10px] font-bold rounded-full uppercase tracking-wider mb-4 inline-block">Product Spotlight</span>
          <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-4">Backlog: Intelligence in Motion</h2>
          <p className="text-primary-fixed-dim text-sm leading-relaxed mb-8">
            Our proprietary AI-driven fleet management platform. Backlog isn't just a GPS—it's a predictive logistics engine that reduces operational overhead and provides real-time geospatial intelligence.
          </p>
          <button className="bg-white text-primary px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-xl shadow-black/20 active:scale-95 transition-transform text-sm">
            Explore Backlog Features
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="px-6 py-8 flex flex-col gap-6">
        <div className="flex justify-between items-end">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight text-primary leading-none">Core<br/>Expertise</h2>
          <span className="font-label text-xs uppercase tracking-widest text-secondary font-bold">Services</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 bg-primary text-white p-6 rounded-xl flex flex-col gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary-fixed" data-icon="precision_manufacturing">precision_manufacturing</span>
            </div>
            <div>
              <h3 className="font-headline font-bold text-lg">ServiceNow Expert</h3>
              <p className="text-sm text-primary-fixed/80">End-to-end ITSM, ITOM, and CSM workflows customized for global scale.</p>
            </div>
          </div>
          <div className="col-span-2 bg-surface-container-low p-6 rounded-xl flex flex-col gap-4 border-b-2 border-secondary/10">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary" data-icon="cloud_sync">cloud_sync</span>
            </div>
            <div>
              <h3 className="font-headline font-bold text-lg text-primary">Salesforce</h3>
              <p className="text-sm text-on-surface-variant">Strategic CRM optimization and custom implementation for global enterprises.</p>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-xl flex flex-col gap-4 shadow-sm shadow-primary/5">
            <div className="w-10 h-10 bg-secondary-container/20 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary" data-icon="terminal">terminal</span>
            </div>
            <h3 className="font-headline font-bold text-md text-primary leading-tight">MERN Stack</h3>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-xl flex flex-col gap-4 shadow-sm shadow-primary/5">
            <div className="w-10 h-10 bg-secondary-container/20 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary" data-icon="verified_user">verified_user</span>
            </div>
            <h3 className="font-headline font-bold text-md text-primary leading-tight">QA Automation</h3>
          </div>
        </div>
      </section>

      {/* Talent/HR Section */}
      <section className="mx-6 my-8 bg-secondary-container text-on-secondary-container rounded-xl overflow-hidden shadow-lg border border-secondary/20">
        <div className="p-8 flex flex-col gap-4">
          <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase self-start">Talent-as-a-Service</span>
          <h2 className="font-headline text-2xl font-bold leading-tight">Human Capital Solutions</h2>
          <p className="text-sm leading-relaxed opacity-90">
            The biggest risk to digital transformation isn't technology—it's the talent gap. Xohani provides a pre-vetted, elite technical pipeline to bridge this gap.
          </p>
          <div className="bg-white/20 p-4 rounded-lg border border-white/30 italic text-xs">
            "We don’t just find 'candidates'; we deploy 'solutions.' Our C2H (Contract-to-Hire) model allows you to test-drive elite talent before making a long-term commitment, reducing hiring risk by 70%."
          </div>
          <div className="flex flex-col gap-3 mt-2">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-xl" data-icon="person_search">person_search</span>
              <span className="font-bold text-sm">Strategic Recruitment</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-xl" data-icon="handshake">handshake</span>
              <span className="font-bold text-sm">C2H Flexibility</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-surface-container-low">
        <div className="px-6 mb-8">
          <h2 className="font-headline text-2xl font-bold text-primary">Client Echoes</h2>
        </div>
        <div className="flex overflow-x-auto gap-6 px-6 no-scrollbar">
          <div className="min-w-[85%] bg-white p-6 rounded-xl flex flex-col gap-4 shadow-sm">
            <div className="flex gap-1 text-secondary">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="material-symbols-outlined text-sm fill-1" data-icon="star">star</span>
              ))}
            </div>
            <p className="italic text-on-surface-variant leading-relaxed text-sm">
              "Xohani transformed our legacy systems into a kinetic cloud infrastructure. True partners for ServiceNow."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-surface-container"></div>
              <span className="font-bold text-xs uppercase tracking-wider text-primary">CTO, FinTech Global</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 flex flex-col items-center text-center gap-8">
        <h2 className="font-headline text-3xl font-extrabold text-primary">Ready to architect your future?</h2>
        <button className="w-full bg-primary text-white font-bold py-4 rounded-xl flex justify-center items-center gap-2 hover:opacity-90 transition-all active:scale-95">
          Speak with our Experts
          <span className="material-symbols-outlined" data-icon="chat_bubble">chat_bubble</span>
        </button>
      </section>
    </motion.div>
  );
};
