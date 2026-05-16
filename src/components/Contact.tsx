import React, { useState } from 'react';
import { motion } from 'motion/react';
import SectionHeader from './SectionHeader';
import { Mail, Github, Linkedin, Twitter, Send, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="contact" className="section-padding bg-neutral-900/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Let's Connect" subtitle="Contact" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">Have a project in mind?</h3>
            <p className="text-lg text-neutral-400 mb-10 leading-relaxed font-light">
              I'm always open to discussing new projects, creative ideas, or opportunities in the Japanese tech market. Let's build something exceptional together.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center space-x-6">
                 <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-cyan-400">
                    <Mail size={24} />
                 </div>
                 <div>
                    <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">Email Me</p>
                    <p className="text-lg font-medium">yamin.dev@example.com</p>
                 </div>
              </div>
              <div className="flex items-center space-x-6">
                 <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-blue-400">
                    <MapPin size={24} />
                 </div>
                 <div>
                    <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">Current Location</p>
                    <p className="text-lg font-medium">Tokyo, Japan</p>
                 </div>
              </div>
            </div>

            <div className="flex space-x-4">
              {[
                { icon: <Github size={20} />, href: "#", color: "hover:text-white" },
                { icon: <Linkedin size={20} />, href: "#", color: "hover:text-blue-400" },
                { icon: <Twitter size={20} />, href: "#", color: "hover:text-cyan-400" },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className={`w-12 h-12 rounded-full glass flex items-center justify-center text-neutral-400 transition-all ${social.color} hover:border-white/20`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card-gradient p-8 md:p-12 rounded-[2.5rem]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Your Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 focus:outline-hidden focus:border-cyan-500 transition-colors text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 focus:outline-hidden focus:border-cyan-500 transition-colors text-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Subject</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 focus:outline-hidden focus:border-cyan-500 transition-colors text-sm"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">How can I help?</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 focus:outline-hidden focus:border-cyan-500 transition-colors resize-none text-sm"
                  placeholder="Tell me about your project visions..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status !== 'idle'}
                className={`w-full py-4 rounded-xl flex items-center justify-center space-x-2 font-bold uppercase tracking-widest text-xs transition-all ${
                  status === 'success' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-cyan-500 hover:bg-cyan-400 text-[#05070a] shadow-lg shadow-cyan-500/20'
                }`}
              >
                {status === 'idle' && (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
                {status === 'sending' && (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                )}
                {status === 'success' && (
                  <span>Message Sent Successfully!</span>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
