/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  LayoutDashboard, 
  BarChart3, 
  Cpu, 
  Rss, 
  Lightbulb, 
  Search, 
  Bell, 
  Settings, 
  Zap, 
  Heart, 
  Gavel, 
  Star,
  Sparkles,
  Smile,
  Briefcase,
  Wand2,
  MoreVertical,
  ArrowUpRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

const SidebarItem = ({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) => (
  <motion.div 
    whileHover={{ x: 4 }}
    whileTap={{ scale: 0.98 }}
    className={`flex items-center px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${
      active 
        ? 'text-brand-red bg-brand-red/5 font-semibold border-r-2 border-brand-red shadow-[4px_0_12px_rgba(224,63,63,0.1)]' 
        : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
    }`}
  >
    <Icon className="w-5 h-5 mr-3" />
    <span className="text-sm tracking-tight">{label}</span>
  </motion.div>
);

const StatCard = ({ label, value, subtext, icon: Icon, trend, color = "text-on-surface" }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="glass-card p-6 rounded-2xl relative overflow-hidden group"
  >
    <div className="flex justify-between items-start mb-4">
      <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{label}</p>
      <Icon className={`w-5 h-5 ${color} opacity-40 group-hover:opacity-100 transition-opacity`} />
    </div>
    <div className="flex items-baseline space-x-2">
      <h2 className={`text-4xl font-bold tracking-tight ${color}`}>{value}</h2>
      {subtext && <span className="text-gray-500 text-xs font-medium">{subtext}</span>}
      {trend && (
        <span className="text-emerald-400 text-xs font-bold flex items-center bg-emerald-400/10 px-1.5 py-0.5 rounded ml-auto">
          <ArrowUpRight className="w-3 h-3 mr-0.5" /> {trend}
        </span>
      )}
    </div>
  </motion.div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [liveOpt, setLiveOpt] = useState(true);
  const [selectedTone, setSelectedTone] = useState('Witty');

  return (
    <div className="min-h-screen flex font-sans">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 border-r border-white/10 bg-surface-base z-50 flex flex-col pt-8">
        <div className="px-8 mb-10">
          <h1 className="text-3xl font-black tracking-tighter text-brand-red">EQKING</h1>
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mt-1 font-bold">AI Social Assistant</p>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          <SidebarItem icon={LayoutDashboard} label="Dashboard" active={activeTab === 'Dashboard'} />
          <SidebarItem icon={BarChart3} label="EQ Analysis" active={activeTab === 'Analysis'} />
          <SidebarItem icon={Cpu} label="AI Control" active={activeTab === 'Control'} />
          <SidebarItem icon={Rss} label="Social Feed" active={activeTab === 'Feed'} />
          <SidebarItem icon={Lightbulb} label="Insights" active={activeTab === 'Insights'} />
        </nav>

        <div className="p-4 mt-auto">
          <div className="bg-surface-card p-4 rounded-2xl flex items-center space-x-3 border border-white/5">
            <div className="w-10 h-10 rounded-full border border-brand-red/30 bg-brand-red/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-brand-red" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-100">Premium User</p>
              <p className="text-xs text-gray-500">Elite Status</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-64 flex flex-col">
        {/* Top Header */}
        <header className="sticky top-0 h-20 border-b border-white/10 bg-surface-base/80 backdrop-blur-xl z-40 flex items-center justify-between px-10">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Analyze a contact or thread..." 
              className="w-full bg-white/5 border-none rounded-full pl-12 pr-6 py-2.5 text-sm focus:ring-1 focus:ring-brand-red/50 transition-all placeholder:text-gray-600"
            />
          </div>

          <div className="flex items-center space-x-6">
            <button className="text-gray-400 hover:text-white transition-colors relative">
              <Bell className="w-5 h-5" />
              <div className="absolute top-0 right-0 w-2 h-2 bg-brand-red rounded-full border-2 border-surface-base"></div>
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <Settings className="w-5 h-5" />
            </button>
            <div className="h-9 w-9 rounded-full border border-brand-red/30 p-0.5 bg-brand-red/5">
              <img 
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100" 
                className="w-full h-full rounded-full object-cover" 
                alt="Profile"
              />
            </div>
          </div>
        </header>

        <main className="p-10 space-y-10">
          {/* Stats Grid */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatCard label="Charisma" value="84%" trend="2.4%" icon={Zap} color="text-brand-red" />
            <StatCard label="Empathy" value="92" subtext="/ 100" icon={Heart} color="text-gray-200" />
            <StatCard label="Conflicts" value="0" subtext="Stable" icon={Gavel} color="text-gray-200" />
            <StatCard label="Rank" value="Elite" icon={Star} color="text-brand-red" />
          </section>

          {/* Middle Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* AI Control Center */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-card rounded-3xl p-8 ai-glow h-full"
              >
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-100">AI Control Center</h3>
                    <p className="text-gray-500 text-sm mt-1">Fine-tune your social presence in real-time</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-bold text-brand-red uppercase tracking-wider">Live Optimization</span>
                    <button 
                      onClick={() => setLiveOpt(!liveOpt)}
                      className={`w-11 h-6 rounded-full transition-colors relative ${liveOpt ? 'bg-brand-red/20 border border-brand-red/30' : 'bg-white/10'}`}
                    >
                      <motion.div 
                        animate={{ x: liveOpt ? 22 : 4 }}
                        className={`absolute top-1 w-4 h-4 rounded-full ${liveOpt ? 'bg-brand-red shadow-[0_0_10px_#E03F3F]' : 'bg-gray-600'}`}
                      />
                    </button>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/5">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-brand-red/10 rounded-xl">
                        <Sparkles className="w-5 h-5 text-brand-red" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-100 text-sm">Auto-Reply Assist</p>
                        <p className="text-xs text-gray-500">Draft empathetic responses automatically</p>
                      </div>
                    </div>
                    <button className="px-5 py-2 bg-brand-red text-white font-bold rounded-xl text-xs shadow-lg shadow-brand-red/20 active:scale-95 transition-all">
                      ACTIVE
                    </button>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-5">Tone Selection</p>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { icon: Smile, label: 'Casual' },
                        { icon: Briefcase, label: 'Serious' },
                        { icon: Wand2, label: 'Witty' }
                      ].map((tone) => (
                        <button 
                          key={tone.label}
                          onClick={() => setSelectedTone(tone.label)}
                          className={`p-4 rounded-2xl border transition-all flex flex-col items-center space-y-2 ${
                            selectedTone === tone.label 
                              ? 'border-brand-red bg-brand-red/10 text-brand-red' 
                              : 'border-white/5 bg-white/5 text-gray-500 hover:border-white/10'
                          }`}
                        >
                          <tone.icon className="w-5 h-5" />
                          <span className="text-sm font-medium">{tone.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Weekly Insights */}
            <div className="lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-card rounded-3xl p-8 h-full flex flex-col relative overflow-hidden"
              >
                 <div className="absolute -right-20 -top-20 w-56 h-56 bg-brand-red/5 rounded-full blur-3xl"></div>
                 <h3 className="text-2xl font-bold text-gray-100">Weekly EQ Insights</h3>
                 <p className="text-gray-500 text-sm mt-1 mb-10">Performance trend over last 7 days</p>

                 <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="relative w-44 h-44 mb-8">
                       <svg className="w-full h-full transform -rotate-90">
                          <circle className="text-white/5" cx="88" cy="88" r="80" fill="transparent" stroke="currentColor" strokeWidth="10" />
                          <motion.circle 
                            initial={{ strokeDashoffset: 502 }}
                            animate={{ strokeDashoffset: 502 - (502 * 0.7) }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="text-brand-red" cx="88" cy="88" r="80" 
                            fill="transparent" stroke="currentColor" strokeWidth="10" 
                            strokeDasharray="502.6" strokeLinecap="round"
                          />
                       </svg>
                       <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-4xl font-black text-gray-100">+14%</span>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Consistency</span>
                       </div>
                    </div>
                    <div className="text-center">
                       <p className="font-bold text-gray-100">Tone Consistency Increased</p>
                       <p className="text-xs text-gray-500 mt-2 px-6">Your communication style has remained steady across 12 different platforms this week.</p>
                    </div>
                 </div>

                 <button className="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl font-bold text-sm transition-all mt-8">
                   View Full Report
                 </button>
              </motion.div>
            </div>
          </div>

          {/* Success Feed */}
          <section className="glass-card rounded-3xl overflow-hidden">
            <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
              <h3 className="text-xl font-bold text-gray-100">Recent Success Feed</h3>
              <span className="text-[10px] font-black text-brand-red bg-brand-red/10 px-3 py-1.5 rounded-full border border-brand-red/20 uppercase tracking-widest">
                AI Assisted
              </span>
            </div>
            
            <div className="divide-y divide-white/5">
              {[
                { 
                  name: "James Sullivan", 
                  time: "2 hours ago", 
                  msg: "I understand your concerns about the timeline, let's look at the resource allocation together.",
                  tags: ["De-escalated", "Empathetic"],
                  img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
                },
                { 
                  name: "Sarah Chen", 
                  time: "5 hours ago", 
                  msg: "That's a brilliant pivot, Sarah! Your eye for detail really saved the campaign's visual flow.",
                  tags: ["Charismatic", "Reinforcing"],
                  img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100"
                },
                { 
                  name: "Marcus Thompson", 
                  time: "Yesterday", 
                  msg: "Deeply appreciate the feedback on the proposal. I'll integrate those insights by Monday.",
                  tags: ["Professional"],
                  img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
                }
              ].map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  key={i} 
                  className="p-8 flex items-center space-x-6 hover:bg-white/[0.02] transition-colors group"
                >
                  <img src={item.img} className="w-14 h-14 rounded-2xl object-cover shrink-0 grayscale hover:grayscale-0 transition-all border border-white/10" alt={item.name} />
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-1">
                      <span className="font-bold text-gray-100">{item.name}</span>
                      <span className="text-xs text-gray-500">{item.time}</span>
                    </div>
                    <p className="text-sm text-gray-400 font-medium">"{item.msg}"</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    {item.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                    <button className="p-2 text-gray-600 hover:text-white transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <button className="w-full py-4 text-xs font-black text-gray-600 hover:text-brand-red bg-white/[0.01] transition-colors uppercase tracking-[0.2em]">
              Load More Interactions
            </button>
          </section>
        </main>
      </div>
    </div>
  );
}
