import React from 'react';
import { motion } from 'motion/react';

export const Talent: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="flex flex-col"
    >
      {/* Hero Section */}
      <section className="px-6 py-12 bg-primary overflow-hidden relative">
        <div className="relative z-10">
          <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-[0.05em] uppercase rounded-full mb-4 font-label">
            Global Staffing Network
          </span>
          <h1 className="text-4xl font-extrabold text-white font-headline leading-tight tracking-tighter mb-4">
            Global <br/><span className="text-secondary-fixed-dim">Talent Nexus</span>
          </h1>
          <p className="text-on-primary-container text-lg leading-relaxed mb-8 max-w-xs">
            The biggest risk to digital transformation isn't technology—it's the talent gap. Xohani provides a pre-vetted, elite technical pipeline to bridge this gap.
          </p>
          <div className="flex gap-4">
            <button className="bg-gradient-to-br from-secondary to-primary-container text-white px-6 py-3 rounded-xl font-bold text-sm shadow-xl shadow-black/20 active:scale-95 transition-all">
              Find Talent
            </button>
            <button className="bg-white/10 text-white border border-white/20 px-6 py-3 rounded-xl font-bold text-sm backdrop-blur-sm active:scale-95 transition-all">
              Join Network
            </button>
          </div>
        </div>
        <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-secondary rounded-full opacity-20 blur-3xl"></div>
        <div 
          className="absolute top-0 right-0 w-full h-full opacity-10" 
          style={{ 
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCJHQOVHYDbmGeNoKYl2WMhXHJ6oGuoUk-N0q54hkDjftDjFCULkF9LS2Q9M-sASYEHDqWldJHrtrrPRpTeJYOWBwYZgCg7fEVVrsVX54nUIznV9aR71CZjxqbVSw1sT2AxwxWVswYWnm2q9ncCR4rMltPKByiDqFD7zMb3kCv12wi3FpgfBj_YZOOtBBT2ccpgd8CxnizhK2r5V_SVUbnBJZt44xOi1pAZbNkiuCq-NSkK2-fM6QvfsL9o2Wdrwcb8BQBar5VlPe8')",
            backgroundSize: 'cover'
          }}
        ></div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-6">
        <h2 className="text-xs font-bold tracking-[0.1em] uppercase text-outline mb-6 font-label">Our Capabilities</h2>
        <div className="grid grid-cols-1 gap-6">
          {[
            { icon: 'public', title: 'Global IT Staffing', desc: 'Scalable workforce solutions across 40+ countries for rapid digital transformation.' },
            { icon: 'handshake', title: 'Contract-to-Hire (C2H)', desc: 'Our "Talent-as-a-Service" model allows you to test-drive elite talent before making a long-term commitment, reducing hiring risk by 70%.' },
            { icon: 'group_add', title: 'Executive Recruitment', desc: 'Direct placement for C-suite and elite technical leadership roles globally.' },
          ].map((service, idx) => (
            <div key={idx} className="bg-surface-container-low p-6 rounded-xl relative overflow-hidden group">
              <div className="bg-secondary-container/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-secondary">{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-primary font-headline mb-2">{service.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Specialized Talent Pool */}
      <section className="py-12 px-6 bg-surface-container">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-primary font-headline tracking-tighter">Enterprise Experts</h2>
          <p className="text-on-surface-variant text-sm mt-2">Vetted specialists in high-demand enterprise ecosystems.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10">
            <div className="flex items-center justify-between mb-4">
              <span className="material-symbols-outlined text-secondary text-3xl">terminal</span>
              <span className="text-[10px] font-bold bg-primary text-white px-2 py-1 rounded">PLATFORM</span>
            </div>
            <h4 className="font-bold text-primary font-headline text-lg">ServiceNow & SAP Masters</h4>
            <p className="text-xs text-on-surface-variant mt-2">Certified architects for ITSM, HRSD, and SAP S/4HANA transformations.</p>
            <div className="mt-4 flex -space-x-2">
              <img 
                alt="talent" 
                className="w-8 h-8 rounded-full border-2 border-white" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmGjlujxU0fcx3GEMrUDucHDESBaelfhsL8x7_GzA9QXcvwJ6Py7iZvHS-rDHzgSnYRJw7CPF7-rfN-7rq5cUoJfYp0RgHFP6BT2w1NyA9Jnc_CNA7zf6uO4cr_WV__NW8uUTNv0hY7qfoWG5Ju0TTpHlMUERh-CwvynDMOEhlCqbzHfGdl4ohZ2ZfWHBGgfcLyd2kj2aYv5Dpl8G8HQsfzh4iGmK-ChiP5-4NPdk-NP-wOg-qz2hGpP1BloIZN2aMOaGXi4IHis4" 
              />
              <img 
                alt="talent" 
                className="w-8 h-8 rounded-full border-2 border-white" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOcneAK16DrU_0LJVbfLRCyKyrb-AP-mH4zo1oDvPjdbqb8K5Y8EHrZfUM7x4x8g0VsMQfxNhDFMZtjmVEnTqkFfZYjhL-Gxb6o1h_rljV77agsiAmdyQ5mrk0PX-aTdeX7Y65vg_x9crDlWNScqjk_lcpKPC4o4QO6eIjWZghrFFAg1a8-9Ehoum0B4B2h5mgxD486faZaL_b28R5jB2HoWUuVFbp3LcPxcYgYeGt0a2Y7WcyEpvhmJxdQePN_m7O6fwA8AMe1wc" 
              />
              <div className="w-8 h-8 rounded-full border-2 border-white bg-secondary-fixed flex items-center justify-center text-[10px] font-bold text-on-secondary-fixed">25+</div>
            </div>
          </div>
          <div className="bg-primary text-white p-5 rounded-2xl flex flex-col justify-between">
            <span className="material-symbols-outlined text-secondary-fixed-dim">cloud_sync</span>
            <div>
              <h4 className="font-bold font-headline mt-4">VMware Experts</h4>
              <p className="text-[10px] text-primary-fixed-dim opacity-80">vSphere & NSX specialized.</p>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/15 flex flex-col justify-between">
            <span className="material-symbols-outlined text-secondary">psychology</span>
            <div>
              <h4 className="font-bold font-headline text-primary mt-4">AI Engineers</h4>
              <p className="text-[10px] text-on-surface-variant">LLM & RAG specialists.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 text-center">
        <div className="bg-surface-container-low rounded-3xl p-8 relative overflow-hidden">
          <h2 className="text-2xl font-black text-primary font-headline mb-4">Scale Your Global Team</h2>
          <p className="text-on-surface-variant mb-8 text-sm">Access top-tier C2H and permanent talent across SAP, ServiceNow, and VMware ecosystems.</p>
          <div className="flex flex-col gap-3">
            <button className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-transform active:scale-[0.98]">
              <span className="material-symbols-outlined text-sm">business_center</span>
              Request Staffing
            </button>
            <button className="w-full bg-white border border-outline-variant py-4 rounded-xl font-bold text-primary flex items-center justify-center gap-2 transition-transform active:scale-[0.98]">
              <span className="material-symbols-outlined text-sm">upload_file</span>
              Apply as Candidate
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
