import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Code, Cpu, Sparkles, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="section-padding pt-32 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Main Hero Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-8 group relative overflow-hidden flex flex-col justify-end p-8 md:p-12 rounded-[2.5rem] card-gradient min-h-[500px]"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full group-hover:bg-cyan-500/15 transition-colors" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full" />
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8"
            >
              <Sparkles size={14} className="text-cyan-400" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Available for innovative projects</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Building Scalable <br/>
              <span className="gradient-text">Digital Experiences</span> <br/>
              in Japan.
            </h1>
            
            <p className="text-slate-400 text-base md:text-lg max-w-xl mb-10 leading-relaxed font-light">
              Passionate developer specializing in <span className="text-white font-medium">Web, IoT, and AI</span>. 
              Originally from Myanmar, now crafting software solutions in the heart of Tokyo.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-cyan-500 hover:bg-cyan-400 text-[#05070a] font-bold rounded-2xl transition-all shadow-lg shadow-cyan-500/20 text-sm uppercase tracking-widest"
              >
                Contact Me
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all text-sm uppercase tracking-widest"
              >
                Selected Works
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Info Cards Side Column */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex-1 glass rounded-[2.5rem] p-8 flex flex-col justify-between group"
          >
            <div className="flex justify-between items-start">
               <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Current Status</span>
               <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                  <Cpu size={16} />
               </div>
            </div>
            
            <div className="mt-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-2xl font-bold text-white tracking-tight">Tokyo, Japan</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                Studying and developing high-performance applications at the intersection of AI and Web Systems.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
               <span className="text-[10px] text-slate-500 font-bold uppercase">Timezone</span>
               <span className="text-xs font-mono text-cyan-400">JST (UTC+9)</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="h-[180px] bg-linear-to-br from-blue-600/20 to-cyan-500/5 rounded-[2.5rem] border border-blue-500/10 p-8 flex flex-col justify-center relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-4">
                <Code className="text-blue-500/20" size={64} />
             </div>
             <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-2">Expertise</p>
             <h3 className="text-xl font-bold text-white">Full Stack Architecture</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
