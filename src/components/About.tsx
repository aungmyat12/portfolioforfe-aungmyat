import React from 'react';
import { motion } from 'motion/react';
import SectionHeader from './SectionHeader';
import { Plane, Cpu, Code2, Users, Lightbulb, Zap } from 'lucide-react';

export default function About() {
  const values = [
    { icon: <Zap size={20} />, title: 'Fast Learner', desc: 'Quickly mastering new techs and frameworks.' },
    { icon: <Lightbulb size={20} />, title: 'Problem Solver', desc: 'Analytical approach to complex technical challenges.' },
    { icon: <Users size={20} />, title: 'Collaborator', desc: 'Thriving in multicultural team environments.' },
  ];

  return (
    <section id="about" className="section-padding bg-neutral-900/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="My Journey" subtitle="About Me" align="left" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed font-light">
              Originally from <span className="text-white font-medium">Myanmar</span>, my passion for technology led me to <span className="text-white font-medium">Japan</span>, where I've been honing my skills in software engineering and modern web development.
            </p>
            <p className="text-xl text-neutral-300 mb-10 leading-relaxed font-light">
              I specialize in creating efficient, scalable systems that bridge the gap between complex backend logic and intuitive frontend experiences. My interest extends to the frontiers of <span className="text-cyan-400 font-medium">AI</span> and <span className="text-cyan-400 font-medium">IoT</span>, where I believe the next generation of digital transformation lies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <div key={i} className="p-6 glass rounded-2xl hover:border-cyan-500/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4">
                    {v.icon}
                  </div>
                  <h4 className="font-bold mb-2">{v.title}</h4>
                  <p className="text-xs text-neutral-500 line-clamp-2">{v.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px]"
          >
            <div className="absolute inset-0 bg-linear-to-tr from-cyan-500 to-blue-600 rounded-3xl opacity-20 blur-2xl" />
            <div className="relative h-full glass border-white/5 rounded-3xl overflow-hidden p-8 flex flex-col justify-between">
              <div>
                 <div className="flex items-center space-x-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                 </div>
                 <div className="space-y-4 font-mono text-sm">
                   <p className="text-cyan-400">const developer = &#123;</p>
                   <p className="pl-4 text-neutral-400">name: <span className="text-amber-200">"Yamin Thuzar"</span>,</p>
                   <p className="pl-4 text-neutral-400">from: <span className="text-amber-200">"Myanmar 🇲🇲"</span>,</p>
                   <p className="pl-4 text-neutral-400">location: <span className="text-amber-200">"Japan 🇯🇵"</span>,</p>
                   <p className="pl-4 text-neutral-400">passion: [<span className="text-amber-200">"Web"</span>, <span className="text-amber-200">"AI"</span>, <span className="text-amber-200">"IoT"</span>],</p>
                   <p className="pl-4 text-neutral-400">motto: <span className="text-amber-200">"Evolving through code."</span></p>
                   <p className="text-cyan-400">&#125;;</p>
                 </div>
              </div>

              <div className="mt-8 pb-4">
                <div className="flex items-center space-x-4">
                   <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '90%' }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="h-full bg-linear-to-r from-cyan-500 to-blue-500" 
                      />
                   </div>
                   <span className="text-[10px] font-bold text-neutral-500 uppercase">Ambition</span>
                </div>
              </div>
            </div>
            
            {/* Travel visual */}
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl rotate-6 shadow-xl">
               <div className="flex items-center space-x-4">
                  <Plane className="text-neutral-400" />
                  <div>
                    <p className="text-xs font-bold text-neutral-500 uppercase">Route</p>
                    <p className="text-sm font-semibold">MMR ✈️ JPN</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
