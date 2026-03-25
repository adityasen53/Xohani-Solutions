import React from 'react';
import { motion } from 'motion/react';

export const Services: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="flex flex-col"
    >
      {/* Hero Section */}
      <section className="mb-12 px-6 pt-12">
        <span className="font-label text-xs font-bold uppercase tracking-[0.05em] text-secondary mb-2 block">Our Expertise</span>
        <h2 className="font-headline text-4xl font-extrabold tracking-tight text-primary leading-none mb-4">Architecting Tomorrow's Solutions.</h2>
        <p className="text-on-surface-variant text-lg leading-relaxed mb-4">We engineer digital ecosystems that empower your enterprise to lead globally, from PAN India to worldwide projects.</p>
        <div className="flex items-center gap-2 text-secondary font-bold text-sm">
          <span className="material-symbols-outlined text-sm">public</span>
          Worldwide Project Reach
        </div>
      </section>

      {/* Primary Expertise */}
      <section className="mb-6 px-6">
        <div className="bg-surface-container-lowest rounded-xl p-8 flex flex-col gap-6 relative overflow-hidden group border-2 border-secondary/20">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
          <div className="flex justify-between items-start">
            <div className="w-14 h-14 bg-secondary-container rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-on-secondary-container text-3xl" data-icon="rocket_launch">rocket_launch</span>
            </div>
            <span className="px-3 py-1 bg-secondary text-white text-[10px] font-bold rounded-full uppercase tracking-wider">Primary Expertise</span>
          </div>
          <div>
            <h3 className="font-headline text-3xl font-bold text-primary mb-2">ServiceNow: The Workflow Engine</h3>
            <p className="text-on-surface-variant mb-4 text-sm leading-relaxed">
              Beyond basic ITSM. We specialize in <strong>Kinetic Automation</strong>—transforming stagnant manual processes into fluid, automated workflows.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-xs text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                <span><strong>ITOM & ITBM:</strong> Aligning your infrastructure with business goals.</span>
              </li>
              <li className="flex items-center gap-2 text-xs text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                <span><strong>Custom Scoped Apps:</strong> Building unique business solutions on the Now Platform.</span>
              </li>
              <li className="flex items-center gap-2 text-xs text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                <span><strong>HRSD & CSM:</strong> Enhancing employee and customer experience through unified portals.</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-secondary-fixed-dim/20 text-on-secondary-fixed-variant text-[10px] font-bold rounded-full">ITSM & ITOM</span>
              <span className="px-3 py-1 bg-secondary-fixed-dim/20 text-on-secondary-fixed-variant text-[10px] font-bold rounded-full">HRSD</span>
              <span className="px-3 py-1 bg-secondary-fixed-dim/20 text-on-secondary-fixed-variant text-[10px] font-bold rounded-full">CSM</span>
            </div>
            <button className="w-full bg-gradient-to-br from-primary to-primary-container text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-primary/10">
              Consultation
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Outsource & Delivery Model */}
      <section className="mb-10 mx-6 bg-secondary/5 rounded-xl p-6 border border-secondary/10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-secondary">handshake</span>
          </div>
          <h3 className="font-headline text-xl font-bold text-primary">Outsource & Delivery</h3>
        </div>
        <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">Leverage our specialized delivery model designed for efficiency and scale. We combine global standards with cost-effective execution.</p>
        <div className="bg-white p-4 rounded-lg border border-secondary/20 flex flex-col gap-2">
          <span className="text-xs font-label uppercase text-outline font-bold">The Xohani Promise</span>
          <span className="text-secondary font-headline text-lg font-extrabold leading-tight">Best Quality at Indian Rates</span>
        </div>
      </section>

      {/* Services Grid */}
      <div className="grid grid-cols-1 gap-6 px-6">
        <div className="bg-surface-container-low rounded-xl p-6 flex flex-col gap-4">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-secondary" data-icon="hub">hub</span>
          </div>
          <h3 className="font-headline text-xl font-bold text-primary">Salesforce: The Revenue Multiplier</h3>
          <p className="text-on-surface-variant text-sm">
            Moving from "Data Entry" to "Actionable Intelligence." We optimize your CRM to act as a proactive sales and service tool.
          </p>
          <ul className="space-y-1">
            <li className="text-[10px] text-on-surface-variant flex items-center gap-2">
              <span className="w-1 h-1 bg-secondary rounded-full"></span>
              <span><strong>Cloud Implementations:</strong> Sales, Service, and Marketing Cloud.</span>
            </li>
            <li className="text-[10px] text-on-surface-variant flex items-center gap-2">
              <span className="w-1 h-1 bg-secondary rounded-full"></span>
              <span><strong>LWC & Apex:</strong> Customizing complex business logic.</span>
            </li>
            <li className="text-[10px] text-on-surface-variant flex items-center gap-2">
              <span className="w-1 h-1 bg-secondary rounded-full"></span>
              <span><strong>Integration:</strong> Connecting Salesforce with ERP and legacy systems.</span>
            </li>
          </ul>
        </div>

        <div className="bg-surface-container-low rounded-xl p-6 flex flex-col gap-4">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-secondary" data-icon="cloud_queue">cloud_queue</span>
          </div>
          <h3 className="font-headline text-xl font-bold text-primary">VMware & Infra</h3>
          <p className="text-on-surface-variant text-sm">Virtualization strategies and VMware management that ensure infrastructure resilience and high availability.</p>
        </div>

        <div className="relative bg-primary rounded-xl p-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-90"></div>
          <div className="relative z-10">
            <span className="material-symbols-outlined text-secondary-container text-4xl mb-4" data-icon="psychology">psychology</span>
            <h3 className="font-headline text-2xl font-bold text-white mb-2">AI & Gen-AI</h3>
            <p className="text-primary-fixed-dim text-sm mb-6">Harnessing generative AI and machine learning to drive intelligent automation across your workflow.</p>
            <button className="bg-secondary-container text-on-secondary-container px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2">
              Explore AI Solutions
            </button>
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 border-4 border-white/5 rounded-full"></div>
        </div>

        <div className="bg-surface-container-lowest rounded-xl p-6 flex flex-col gap-4 shadow-sm shadow-on-surface/5">
          <div className="flex justify-between items-center">
            <h3 className="font-headline text-lg font-bold text-primary">Full-Stack & QA</h3>
            <span className="material-symbols-outlined text-secondary" data-icon="terminal">terminal</span>
          </div>
          <p className="text-on-surface-variant text-sm">MERN stack applications and automated testing frameworks built for global scalability.</p>
          <div className="mt-4 pt-4 border-t border-outline-variant/10 flex justify-between items-center">
            <span className="text-[10px] font-label uppercase tracking-widest text-outline">PAN India Support</span>
            <span className="material-symbols-outlined text-secondary" data-icon="add_circle">add_circle</span>
          </div>
        </div>
      </div>

      {/* Secondary CTA Section */}
      <section className="mt-16 mb-12 text-center px-6">
        <h4 className="font-headline text-xl font-bold text-primary mb-2">Need a custom partner?</h4>
        <p className="text-on-surface-variant text-sm mb-6">Let's discuss how Xohani can accelerate your roadmap with high-quality Indian delivery.</p>
        <div className="flex flex-col gap-3">
          <button className="py-4 border border-outline/20 rounded-xl font-bold text-primary hover:bg-surface-container-low transition-colors active:scale-95">
            Download Capabilities Deck
          </button>
        </div>
      </section>
    </motion.div>
  );
};
