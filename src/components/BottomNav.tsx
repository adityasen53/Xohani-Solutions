import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const BottomNav: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: 'home' },
    { path: '/services', label: 'Services', icon: 'settings_suggest' },
    { path: '/backlog', label: 'Backlog', icon: 'local_shipping' },
    { path: '/talent', label: 'Talent', icon: 'group_add' },
  ];

  return (
    <nav className="fixed bottom-0 w-full bg-white/90 backdrop-blur-md h-16 flex justify-around items-center px-4 z-50 border-t border-outline-variant/30">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center gap-1 transition-all ${
              isActive ? 'text-secondary font-bold' : 'text-outline'
            }`}
          >
            <span className={`material-symbols-outlined ${isActive ? 'fill-1' : ''}`} data-icon={item.icon}>
              {item.icon}
            </span>
            <span className="text-[10px] font-headline uppercase tracking-wider">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};
