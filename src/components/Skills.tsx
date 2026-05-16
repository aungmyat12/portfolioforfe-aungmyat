import React from 'react';
import { motion } from 'motion/react';
import SectionHeader from './SectionHeader';
import { 
  Code2, Database, Layout, Server, Settings, Terminal, 
  Layers, Package, Globe, Github as GitIcon, Cloud
} from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="text-cyan-400" />,
    items: ["React", "Vue", "Angular", "Tailwind CSS", "TypeScript", "Next.js"]
  },
  {
    category: "Backend",
    icon: <Server className="text-blue-400" />,
    items: ["Laravel", "Node.js", "Java Servlet/JSP", "Express", "RESTful API"]
  },
  {
    category: "Database",
    icon: <Database className="text-teal-400" />,
    items: ["MySQL", "PostgreSQL", "MongoDB", "Firestore", "Redis"]
  },
  {
    category: "DevOps & Tools",
    icon: <Settings className="text-indigo-400" />,
    items: ["Git", "Docker", "Stripe API", "AWS", "Firebase", "Vite"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Technical Arsenal" subtitle="Skills" align="left" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 card-gradient rounded-3xl flex flex-col h-full"
            >
              <div className="mb-4 text-cyan-400">
                {skill.icon}
              </div>
              
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-4">{skill.category}</span>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {skill.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-[10px] font-bold rounded-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress bars styling from design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-8 card-gradient rounded-3xl flex flex-col gap-4"
          >
             <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">System Architecture</span>
             <div className="flex flex-col gap-4">
               <div>
                  <div className="flex justify-between items-center text-xs mb-2">
                    <span className="text-slate-300">Web Systems</span>
                    <span className="text-cyan-400">95%</span>
                  </div>
                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '95%' }} className="bg-cyan-500 h-full" />
                  </div>
               </div>
               <div>
                  <div className="flex justify-between items-center text-xs mb-2">
                    <span className="text-slate-300">IoT & AI Integration</span>
                    <span className="text-blue-400">80%</span>
                  </div>
                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '80%' }} className="bg-blue-500 h-full" />
                  </div>
               </div>
             </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-8 bg-cyan-500/5 border border-cyan-500/10 rounded-3xl flex flex-col justify-center"
          >
            <h4 className="text-sm font-bold text-cyan-400 mb-2 uppercase tracking-widest">Growth Mindset</h4>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              Constantly expanding my "Technical Arsenal" to include cutting-edge technologies like Edge Computing and Generative AI to stay ahead in the Japanese tech landscape.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
