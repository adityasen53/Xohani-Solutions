import React from 'react';
import { motion } from 'motion/react';

export const Backlog: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="flex flex-col"
    >
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden asymmetric-clip min-h-[500px] flex flex-col justify-end p-8 pb-20">
        <div className="absolute inset-0 opacity-40">
          <img 
            alt="Fleet Management" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2fClb_Xsf_lDrrrBIaZd4UZdZHcBqteFMTzMV4aSGIFZ31rKB-NLunrG4PFEMMyHVBoa7h8Ce5ozt3XclOsaTGEfWhp3i_I-x0mhrpgQxJszQXwO6oC2noFlWurfoko9LSq2ednR3jzOYfLjCoSLIu5W3IOGp54hc24mRMg84wbdmgAXUQgKKVZW7RObAH1B-sfjwVIxawqveC1ie8wxCiNCpGiJMbOk77aKWD6CPN8bWLLL7eWAIELjzuK1edFvQlnKWLTjquJ4" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
        </div>
        <div className="relative z-10 space-y-4">
          <span className="inline-block px-3 py-1 bg-secondary-fixed-dim text-on-secondary-fixed text-[10px] font-bold uppercase tracking-widest rounded-full">Flagship Platform</span>
          <h1 className="text-5xl font-extrabold text-white font-headline tracking-tighter leading-none">Blacklog</h1>
          <p className="text-lg text-primary-fixed leading-relaxed max-w-xs">AI-driven fleet intelligence for the modern supply chain. Real-time GPS tracking and predictive logistics.</p>
          <div className="pt-4 flex gap-3">
            <button className="px-6 py-3 bg-gradient-to-r from-secondary to-primary-container text-white font-bold rounded-xl shadow-lg shadow-primary/20 flex items-center gap-2 active:scale-95 transition-all">
              Get Started <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <span className="material-symbols-outlined text-secondary">explore</span>
              </div>
              <span className="text-xs font-bold text-secondary uppercase tracking-wider">Live Map</span>
            </div>
            <h3 className="text-xl font-bold font-headline mb-1">Global Tracking</h3>
            <p className="text-sm text-outline">0.5s latency across 140 countries.</p>
            <div className="mt-4 h-32 rounded-xl overflow-hidden grayscale opacity-80">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzAa1aR9mQ-hR2ZA5tHzJL3s8GnYy5RGOwpnQgRJ2uWHVCpL-nOnPKDbUawOwwr1HgOKUACmC1jVn9TapeAzHupTLA4ttq83olpaPlsH7CBdOwN-aKyadDqWeG_zdfvN8JMONNZ9Ce9S6yDFhWCZufzK3AAHFZ4uIOv4CiSx3ykpIxveCyJJvLjvT8nlfHufF1WT69UXJs9lTb5rVoc2W4xoUrSU8gX6A-6Vyz2X39Xy8XE7ILi7ApIWD9n-ERcUIIU5nwxrKaevk" 
              />
            </div>
          </div>
          <div className="bg-primary text-white p-5 rounded-2xl flex flex-col justify-between">
            <span className="material-symbols-outlined text-secondary-container mb-4">psychology</span>
            <div>
              <div className="text-3xl font-black font-headline">98%</div>
              <div className="text-[10px] uppercase font-bold tracking-tighter opacity-70">AI Accuracy</div>
            </div>
          </div>
          <div className="bg-surface-container-low p-5 rounded-2xl flex flex-col justify-between border border-outline-variant/5">
            <span className="material-symbols-outlined text-secondary mb-4">local_shipping</span>
            <div>
              <div className="text-3xl font-black font-headline text-primary">4.2k</div>
              <div className="text-[10px] uppercase font-bold tracking-tighter text-outline">Active Assets</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="mt-12 px-6">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1px] flex-grow bg-outline-variant/20"></div>
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-outline">Core Ecosystem</h2>
          <div className="h-[1px] flex-grow bg-outline-variant/20"></div>
        </div>
        <div className="space-y-10">
          <div className="flex flex-col gap-4">
            <div className="aspect-video rounded-3xl overflow-hidden relative shadow-xl shadow-primary/5">
              <img 
                alt="AI Analytics Dashboard" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKC_asAEIaT02kYwyOpDDaz2jzQ499yeW78DgMwe_KwEgGfMoHbrHzOCyZYUqWlal7FWT6y085HgI-vXH8_8QFUx9l_2L-6crXbY4XGVbTbBTv9X2HD1Q5RciyqH5V2U_3HXsQ7YxpR8NIE1UU-2UZDJfSeEmU9lw7fKvwiTOgyIIuVTA7JBbgNrAH7Qg_GAsNXS8eVJaJI2PqputFt1q8h_mFcZhnVts3_eQLcT0jYZTk8N8yh7Biu59RA2WNW0s5sv1k7rXhZM8" 
              />
              <div className="absolute inset-0 bg-primary/20"></div>
            </div>
            <div>
              <h4 className="text-xl font-bold font-headline text-primary">Predictive Shipping</h4>
              <p className="text-sm text-on-surface-variant mt-2 leading-relaxed">
                Our AI engine analyzes weather patterns, traffic history, and port congestion to predict delays before they happen.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="aspect-video rounded-3xl overflow-hidden relative shadow-xl shadow-primary/5">
              <img 
                alt="Hardware Integration" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvib87yuXNor75Qk3O-bWHnL2vsoUFHsVLNweLghsbcjvoqivFveGIwg8T2jnIcBqTsmNDS9b7T00Jxig-nibjWhQDDjbCwjJbt8oBo1xkWQ_dszL1lWtvwF5WWZZcd1zGepJMUTreClOagDJz0YoynHB6f0U5Dxph3GKx0hYXWZhiOu94mrngQTKD3ecNpp4KNeVknDV3GnPtaBOlMC19hIBr4mzaPFIeZYdqa5CXGg0vveBhEpBV2iTkSGO4_yZRg77sOUMr2MA" 
              />
              <div className="absolute inset-0 bg-primary/20"></div>
            </div>
            <div>
              <h4 className="text-xl font-bold font-headline text-primary">Hardware Agnostic</h4>
              <p className="text-sm text-on-surface-variant mt-2 leading-relaxed">
                Connect any IoT sensor or GPS module. Blacklog provides a unified interface for fragmented hardware fleets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="mt-16 bg-surface-container-low py-12 px-6 mb-12">
        <div className="mb-8">
          <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Verticals</span>
          <h2 className="text-3xl font-black font-headline text-primary tracking-tighter">Industry Focus</h2>
        </div>
        <div className="space-y-4">
          {[
            { icon: 'liquor', title: 'Cold Chain', desc: 'Real-time temp monitoring' },
            { icon: 'construction', title: 'Heavy Equipment', desc: 'Engine diagnostic tracking' },
            { icon: 'e_mobiledata', title: 'Last-Mile Delivery', desc: 'Hyper-local route optimization' },
          ].map((v, idx) => (
            <div key={idx} className="bg-surface-container-lowest p-6 rounded-2xl flex items-center justify-between group active:scale-[0.98] transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">{v.icon}</span>
                </div>
                <div>
                  <h5 className="font-bold text-primary">{v.title}</h5>
                  <p className="text-xs text-outline">{v.desc}</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors">chevron_right</span>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};
