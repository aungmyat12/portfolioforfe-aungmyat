import React from 'react';

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-8 py-10 border-t border-white/5 text-[10px] text-slate-500 font-medium">
      <div className="flex gap-6 uppercase tracking-[0.2em] mb-4 md:mb-0">
        <p>© {new Date().getFullYear()} Yamin Thuzar</p>
        <p className="hidden sm:block">Built with React & Tailwind</p>
      </div>
      <div className="flex gap-8">
        {[
          { name: 'LinkedIn', href: '#' },
          { name: 'GitHub', href: '#' },
          { name: 'Email', href: 'mailto:yamin.dev@example.com' }
        ].map(link => (
          <a 
            key={link.name} 
            href={link.href} 
            className="hover:text-cyan-400 transition-colors uppercase tracking-[0.2em]"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
