import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 px-8 flex flex-col gap-8 bg-surface-container-low dark:bg-primary mb-16">
      <div className="flex flex-col gap-4">
        <img 
          alt="XOHANI Logo" 
          className="h-10 w-auto object-contain self-start mb-2" 
          src="https://lh3.googleusercontent.com/aida/ADBb0ugsabiK3hCRZgJ6JjssYCZq-Uih5dqxqKIvsfa5vM0a2wWz4jInwOQDvLc7W365FKtFooufrWUerKAf0A5zJhgWeIpCLZZ3426Zrffh1YAZPvfWfuE5zz0jNE83trIYx4-ptUjjt7YQMNpOBcBmEUN438-2Roien9xyfYl4rmJ5PrEpxbFBYigscBcJFUII-ffT5KnW4W5JeFgpugZqVPSKYLTb31GeO1Gf6_5HsJQA7x5ok2fNDJxo7iEbZF3mQwXwMprVzddc" 
        />
        <p className="text-[10px] text-outline font-bold uppercase">Offices: Jabalpur • Indore • Pune • Bangalore</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a className="font-body text-sm leading-relaxed text-outline hover:text-primary transition-all" href="#">Contact</a>
          <a className="font-body text-sm leading-relaxed text-outline hover:text-primary transition-all" href="#">C2H Services</a>
          <a className="font-body text-sm leading-relaxed text-outline hover:text-primary transition-all" href="#">Recruitment</a>
          <a className="font-body text-sm leading-relaxed text-outline hover:text-primary transition-all" href="#">Terms</a>
        </div>
        <div className="mt-6 pt-6 border-t border-outline-variant/20">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-outline mb-3">Core Competencies</p>
          <div className="flex flex-wrap gap-2">
            {[
              'ServiceNow ITSM/ITOM', 'Salesforce Lightning', 'AWS Cloud Migration', 
              'Kubernetes Orchestration', 'DevOps Automation', 'React/Node.js Engineering', 
              'Fintech Compliance', 'AI/ML Integration', 'IT Staff Augmentation'
            ].map((tag) => (
              <span key={tag} className="text-[9px] font-bold text-outline-variant bg-surface-container-highest px-2 py-1 rounded border border-outline-variant/10">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="font-body text-sm leading-relaxed text-outline">© 2024 Xohani Solutions. All Rights Reserved. Corporate Reg: IN-8829310</p>
    </footer>
  );
};
