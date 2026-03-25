import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-6 h-16 bg-white/70 backdrop-blur-md z-50 shadow-sm shadow-on-background/5">
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-secondary">menu</span>
        <Link to="/">
          <img 
            alt="XOHANI Logo" 
            className="h-8 w-auto object-contain" 
            src="https://lh3.googleusercontent.com/aida/ADBb0ugsabiK3hCRZgJ6JjssYCZq-Uih5dqxqKIvsfa5vM0a2wWz4jInwOQDvLc7W365FKtFooufrWUerKAf0A5zJhgWeIpCLZZ3426Zrffh1YAZPvfWfuE5zz0jNE83trIYx4-ptUjjt7YQMNpOBcBmEUN438-2Roien9xyfYl4rmJ5PrEpxbFBYigscBcJFUII-ffT5KnW4W5JeFgpugZqVPSKYLTb31GeO1Gf6_5HsJQA7x5ok2fNDJxo7iEbZF3mQwXwMprVzddc" 
          />
        </Link>
      </div>
      <div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden">
        <img 
          alt="User Profile" 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOHeXTzPXCFHn4Z-2_de_ZBcHJlsQBd0i0hFlLdE1c8IjFpk7IXNdJtjMURW9AObyPAP4kqLi44a6wtMsTSsi352xtSkgsH5NEy6crOnC6SNTknA0jfR0rfC8-mwHr6nuoDGAbrwcQ5_1fqRuGvo4FkD2hlm6_ZZuFGisfnUbm4s_PS3UrdNMlHBX0jc9ZG70xDVT5OBSwqNGVKD0J0RDkWMKNHYBjFjQL1YLDyZQRAuLbrg4W1pCX9_ys7p4kbZ0dGgU5jqQxQX4" 
        />
      </div>
    </header>
  );
};
