import React from 'react';
import { motion } from 'motion/react';
import SectionHeader from './SectionHeader';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "Admin Dashboard System",
    description: "A professional-grade management dashboard following MVC architecture. Features secure authentication, dynamic analytics, and CSV export capabilities.",
    tags: ["Laravel", "MySQL", "Bootstrap", "Analytics"],
    link: "#",
    github: "#",
    image: "https://picsum.photos/seed/dashboard/800/600"
  },
  {
    title: "Shopping System",
    description: "Comprehensive E-commerce platform with real-time cart functionality and secure Stripe API payment integration. Focused on high-conversion UX.",
    tags: ["React", "Laravel", "Stripe API", "MySQL"],
    link: "#",
    github: "#",
    image: "https://picsum.photos/seed/shop/800/600"
  },
  {
    title: "Order Management System",
    description: "Efficient B2B system for tracking customer orders and generating detailed business reports. Built with high reliability in mind.",
    tags: ["Java Servlet/JSP", "MySQL", "MVC"],
    link: "#",
    github: "#",
    image: "https://picsum.photos/seed/order/800/600"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <SectionHeader title="Selected Works" subtitle="Portfolio" align="left" />
          <span className="text-[10px] text-slate-500 hover:text-cyan-400 cursor-pointer uppercase tracking-widest font-bold mb-8 transition-colors">View All Archive</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group card-gradient rounded-[2.5rem] p-6 flex flex-col relative"
            >
              <div className="absolute top-6 right-6 text-cyan-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <ExternalLink size={20} />
              </div>

              <span className={`text-[10px] font-bold uppercase tracking-tighter mb-2 ${
                idx === 0 ? 'text-cyan-400' : idx === 1 ? 'text-blue-400' : 'text-purple-400'
              }`}>
                {idx === 0 ? 'Dashboard Flow' : idx === 1 ? 'E-Commerce' : 'Logistics Flow'}
              </span>

              <h4 className="text-xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">{project.title}</h4>
              
              <div className="aspect-video relative rounded-2xl overflow-hidden mb-6">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                {project.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map(tag => (
                   <span key={tag} className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400 font-medium tracking-tight">
                     {tag}
                   </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
