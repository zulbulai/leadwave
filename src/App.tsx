/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useLocation,
  useNavigate
} from 'react-router-dom';
import { 
  MessageSquare, 
  Zap, 
  Shield, 
  Users, 
  BarChart3, 
  Clock, 
  CheckCircle2, 
  ChevronDown, 
  Smartphone, 
  Globe, 
  Headphones,
  ArrowRight,
  Star,
  AlertCircle,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Send,
  Target,
  TrendingUp,
  Search,
  Plus
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Shared Components ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Product', path: '/services' },
    { name: 'Features', path: '/#features' },
    { name: 'Pricing', path: '/#pricing' },
    { name: 'Video Demo', path: '/#video' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';
  const headerBg = isScrolled || !isHome ? 'bg-white shadow-md py-3' : 'bg-white/80 backdrop-blur-md py-4';
  const textColor = 'text-gray-800';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#6366f1] rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200 group-hover:rotate-12 transition-transform">
            <Zap className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-black tracking-tight text-[#22c55e]">Lead <span className="text-[#f59e0b]">Wave</span></span>
          </div>
        </Link>
        
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              className={`text-sm font-bold transition-colors hover:text-[#22c55e] ${
                location.pathname === link.path ? 'text-[#22c55e]' : 'text-gray-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://getleadwave.in/LeadWave.exe" 
            className="bg-[#22c55e] text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-[#16a34a] transition-all shadow-md shadow-green-100"
          >
            Download App
          </a>
        </div>

        <button 
          className="lg:hidden text-gray-800" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-white z-[70] shadow-2xl p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#6366f1] rounded-xl flex items-center justify-center shadow-lg">
                    <Zap className="text-white w-6 h-6" />
                  </div>
                  <span className="text-xl font-black text-[#22c55e]">Lead <span className="text-[#f59e0b]">Wave</span></span>
                </div>
                <button onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-gray-900 transition-colors">
                  <X className="w-8 h-8" />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name}
                    to={link.path} 
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-xl font-bold transition-colors hover:text-[#22c55e] ${
                      location.pathname === link.path ? 'text-[#22c55e]' : 'text-gray-700'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-gray-100">
                <a 
                  href="https://getleadwave.in/LeadWave.exe" 
                  className="w-full bg-[#22c55e] text-white py-4 rounded-2xl font-black text-center text-lg flex items-center justify-center gap-2 shadow-xl shadow-green-100"
                >
                  <MessageSquare className="w-5 h-5" /> Download App
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-white py-20 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-[#6366f1] rounded-xl flex items-center justify-center shadow-lg">
              <Zap className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-black tracking-tight text-[#22c55e]">Lead <span className="text-[#f59e0b]">Wave</span></span>
          </div>
          <p className="text-gray-500 text-sm max-w-md leading-relaxed mb-8">
            Transform your business communication with AI-powered WhatsApp automation. Manage contacts, automate messages, and boost productivity with our desktop solution.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-500 text-sm">
              <Mail className="w-4 h-4 text-[#22c55e]" /> Zulbulai@gmail.com
            </div>
            <div className="flex items-center gap-3 text-gray-500 text-sm">
              <MessageSquare className="w-4 h-4 text-[#22c55e]" /> WhatsApp: +91 63876 17678
            </div>
            <div className="flex items-center gap-3 text-gray-500 text-sm">
              <MapPin className="w-4 h-4 text-[#22c55e]" /> Mumbai, Maharashtra, India
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-gray-900 font-black mb-6 uppercase text-xs tracking-widest">Product</h4>
          <ul className="space-y-4">
            <li><Link to="/services" className="text-gray-500 hover:text-[#22c55e] text-sm font-bold transition-colors">Services</Link></li>
            <li><Link to="/#features" className="text-gray-500 hover:text-[#22c55e] text-sm font-bold transition-colors">Features</Link></li>
            <li><Link to="/#pricing" className="text-gray-500 hover:text-[#22c55e] text-sm font-bold transition-colors">Pricing</Link></li>
            <li><Link to="/#video" className="text-gray-500 hover:text-[#22c55e] text-sm font-bold transition-colors">Video Demo</Link></li>
            <li><a href="https://getleadwave.in/LeadWave.exe" className="text-gray-500 hover:text-[#22c55e] text-sm font-bold transition-colors">Download</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-gray-900 font-black mb-6 uppercase text-xs tracking-widest">Company</h4>
          <ul className="space-y-4">
            <li><Link to="/about" className="text-gray-500 hover:text-[#22c55e] text-sm font-bold transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="text-gray-500 hover:text-[#22c55e] text-sm font-bold transition-colors">Contact</Link></li>
            <li><Link to="/privacy" className="text-gray-500 hover:text-[#22c55e] text-sm font-bold transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-gray-500 hover:text-[#22c55e] text-sm font-bold transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-xs font-bold">© 2025 Techno Ved. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-[#22c55e] transition-colors"><Globe className="w-5 h-5" /></a>
          <a href="#" className="text-gray-400 hover:text-[#22c55e] transition-colors"><Mail className="w-5 h-5" /></a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Page Components ---

const Home = () => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#fef3c7] border border-[#f59e0b]/20 text-[#f59e0b] text-xs font-bold rounded-full mb-8"
            >
              <Zap className="w-3 h-3 fill-current" /> New: Multi-Account Management
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight"
            >
              Lead Wave <span className="text-[#22c55e]">WhatsApp Desktop</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-500 max-w-2xl mb-10"
            >
              Transform Your Business Communication. Automate messages, and manage contacts with AI-powered intelligence.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-12"
            >
              <a href="#pricing" className="bg-[#22c55e] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#16a34a] transition-all flex items-center gap-2 shadow-lg shadow-green-100">
                Start Free Trial <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#features" className="bg-white border border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all flex items-center gap-2">
                <Menu className="w-5 h-5" /> View Features
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-6 text-sm text-gray-400 mb-16"
            >
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-[#f59e0b] fill-current" /> 2-day free trial
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-[#22c55e]" /> No credit card required
              </div>
            </motion.div>

            {/* Hero Image Placeholder */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative w-full max-w-5xl mx-auto"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#f59e0b]/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#6366f1]/10 rounded-full blur-3xl" />
              
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden relative">
                {/* PLACEHOLDER: Replace with actual dashboard screenshot */}
                <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-[#6366f1] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <Zap className="text-white w-10 h-10" />
                    </div>
                    <p className="text-gray-400 font-medium">Leadwave Dashboard Preview</p>
                    <p className="text-xs text-gray-300 mt-2">Replace with your dashboard image</p>
                  </div>
                </div>
                
                {/* Floating Stats Card */}
                <div className="absolute top-10 right-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 hidden md:block">
                  <div className="text-[#f59e0b] font-black text-2xl">99.9%</div>
                  <div className="text-gray-400 text-xs font-bold uppercase">Uptime</div>
                </div>
                
                <div className="absolute bottom-10 left-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 hidden md:block">
                  <div className="text-[#22c55e] font-black text-2xl">300+</div>
                  <div className="text-gray-400 text-xs font-bold uppercase">Happy Users</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's New Section */}
      <section className="py-20 bg-white border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#22c55e]/10 text-[#22c55e] text-xs font-bold rounded-full mb-4">
              <Zap className="w-3 h-3 fill-current" /> Latest Release
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-4">What's New in <span className="text-[#22c55e]">Version 3.0.0</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We've packed this release with powerful new features, improvements, and fixes to supercharge your WhatsApp marketing workflow.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Enhanced */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#22c55e]/10 rounded-xl flex items-center justify-center">
                  <Zap className="text-[#22c55e] w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">Enhanced</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Revamped Dashboard UI for a smoother experience",
                  "Support Button with official company information",
                  "Removed unnecessary device socket reconnection reloads",
                  "Device recognition enabled across all modules",
                  "Label Export in Group Grabber (Experimental)",
                  "Improved Number Filtering accuracy"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Fixed */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#f59e0b]/10 rounded-xl flex items-center justify-center">
                  <AlertCircle className="text-[#f59e0b] w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">Fixed</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Fixed Contact Group Name Editing issue",
                  "Resolved Campaign Pause issue"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
                <div className="mt-8 p-4 bg-gray-50 rounded-2xl flex items-center gap-2 text-xs font-bold text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-[#22c55e]" /> All critical issues resolved
                </div>
              </ul>
            </div>

            {/* Added */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#6366f1]/10 rounded-xl flex items-center justify-center">
                  <Plus className="text-[#6366f1] w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">Added</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Live Chat Module with basic CRM features",
                  "Cloud-Based Licensing System for enhanced security",
                  "Device restrictions during license generation",
                  "Option to disable licenses when required"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <Plus className="w-4 h-4 text-[#6366f1] shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#f59e0b]/10 text-[#f59e0b] text-xs font-bold rounded-full mb-4">
              <Zap className="w-3 h-3 fill-current" /> Powerful Features
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Everything you need to <span className="text-[#22c55e]">automate WhatsApp</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Powerful features designed to streamline your WhatsApp communication and boost your business productivity with cutting-edge automation.</p>
          </div>

          <div className="space-y-24">
            {[
              {
                title: "Multi-Device Support",
                desc: "Connect and manage multiple WhatsApp accounts from a single desktop application with seamless synchronization.",
                icon: Smartphone,
                color: "bg-[#22c55e]"
              },
              {
                title: "Bulk Messaging",
                desc: "Send personalized messages to multiple contacts simultaneously with smart scheduling and delivery optimization.",
                icon: MessageSquare,
                color: "bg-[#6366f1]"
              },
              {
                title: "Chatbot",
                desc: "Intelligent automated responses powered by advanced AI to handle customer inquiries 24/7 with human-like interactions.",
                icon: Zap,
                color: "bg-[#f59e0b]"
              },
              {
                title: "Message Templates",
                desc: "Create and manage reusable message templates for consistent communication.",
                icon: Globe,
                color: "bg-[#22c55e]"
              }
            ].map((feature, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16`}>
                <div className="flex-1">
                  <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <feature.icon className="text-white w-7 h-7" />
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-500 text-lg mb-8 leading-relaxed">{feature.desc}</p>
                  <a href="#" className="text-[#22c55e] font-bold flex items-center gap-2 hover:gap-4 transition-all">
                    Learn more <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
                <div className="flex-1 w-full">
                  <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden aspect-video flex items-center justify-center">
                    {/* PLACEHOLDER: Replace with feature specific screenshot */}
                    <div className="text-center p-8 bg-gray-50 w-full h-full flex flex-col items-center justify-center">
                      <feature.icon className={`w-16 h-16 ${feature.color.replace('bg-', 'text-')} mb-4 opacity-20`} />
                      <p className="text-gray-400 font-bold">{feature.title} Preview</p>
                      <p className="text-xs text-gray-300 mt-2">Replace with actual screenshot</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#f59e0b]/10 text-[#f59e0b] text-xs font-bold rounded-full mb-4">
              <Zap className="w-3 h-3 fill-current" /> Premium Desktop Application
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Affordable Subscription Plans</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Choose the plan that fits your business needs. One-time setup, recurring access.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                title: "Monthly Plan", 
                price: "49", 
                period: "month", 
                popular: false,
                features: ["Bulk Messaging", "Basic Chatbot", "Contact Management", "24/7 Support"]
              },
              { 
                title: "Quarterly Plan", 
                price: "99", 
                period: "3 months", 
                popular: true,
                features: ["Everything in Monthly", "Multi-Device Sync", "Advanced AI Chatbot", "Priority Support", "License Key System"]
              },
              { 
                title: "Annual Plan", 
                price: "299", 
                period: "year", 
                popular: false,
                features: ["Everything in Quarterly", "Multi-User Access", "Advanced Analytics", "Dedicated Account Manager", "Custom API Integration"]
              }
            ].map((plan, idx) => (
              <div key={idx} className={`relative p-8 rounded-[40px] border-2 transition-all flex flex-col ${
                plan.popular ? 'border-[#22c55e] bg-white shadow-2xl scale-105 z-10' : 'border-gray-100 bg-gray-50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#22c55e] text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-black text-gray-900 mb-4">{plan.title}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-black text-gray-900">₹{plan.price}</span>
                  <span className="text-gray-400 text-sm font-bold">/{plan.period}</span>
                </div>
                
                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-[#22c55e] shrink-0" /> {feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={`https://wa.me/916387617678?text=I want to buy the ${plan.title}`} 
                  className={`w-full py-4 rounded-2xl font-black text-lg text-center transition-all flex items-center justify-center gap-2 ${
                    plan.popular 
                      ? 'bg-[#22c55e] text-white hover:bg-[#16a34a] shadow-xl shadow-green-100' 
                      : 'bg-white border-2 border-gray-100 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <MessageSquare className="w-5 h-5" /> Buy Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activation Process */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Complete Activation Process</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Follow these visual steps to activate your Lead Wave application and start automating your WhatsApp communications.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 mb-20">
            {[
              { step: "1", title: "Download & Install", desc: "Download the Lead Wave desktop application file and install it on your computer.", icon: Smartphone },
              { step: "2", title: "Get Your License Code", desc: "After installation, the app will display a unique license code. Copy this code.", icon: Zap },
              { step: "3", title: "Share on WhatsApp", desc: "Send your license code to our WhatsApp number +91 63876 17678.", icon: MessageSquare },
              { step: "4", title: "Enter Activation Code", desc: "Enter the License Activation Code you received from our admin into the app.", icon: CheckCircle2 },
              { step: "5", title: "Start Using Lead Wave", desc: "Once activated, you can immediately start automating your WhatsApp business.", icon: Zap }
            ].map((item, i) => (
              <div key={i} className="relative text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl border border-gray-50 relative">
                  <item.icon className="w-7 h-7 text-[#22c55e]" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#22c55e] text-white rounded-full flex items-center justify-center text-sm font-black shadow-lg">
                    {item.step}
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Visual Steps Placeholder */}
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#22c55e]/10 text-[#22c55e] text-xs font-bold rounded-full mb-8">
                1. Copy License Code
              </div>
              <h3 className="text-2xl font-black mb-6">After Installation</h3>
              <div className="bg-white p-4 rounded-3xl shadow-xl border border-gray-100 aspect-video flex items-center justify-center">
                {/* PLACEHOLDER: Replace with activation screen screenshot */}
                <div className="text-center">
                  <p className="text-gray-400 font-bold">Activation Screen Screenshot</p>
                  <p className="text-xs text-gray-300 mt-2">Replace with actual image</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#22c55e]/10 text-[#22c55e] text-xs font-bold rounded-full mb-8">
                2. Enter Activation Code
              </div>
              <h3 className="text-2xl font-black mb-6">After WhatsApp Response</h3>
              <div className="bg-white p-4 rounded-3xl shadow-xl border border-gray-100 aspect-video flex items-center justify-center">
                {/* PLACEHOLDER: Replace with license key entry screen screenshot */}
                <div className="text-center">
                  <p className="text-gray-400 font-bold">License Key Entry Screenshot</p>
                  <p className="text-xs text-gray-300 mt-2">Replace with actual image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Watch.Learn.Done <span className="text-[#f59e0b]">Simply.</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-16">See Lead Wave in action! Watch our comprehensive tutorial and discover how easy it is to automate your WhatsApp business communication.</p>
          
          <div className="max-w-5xl mx-auto bg-slate-900 rounded-[40px] overflow-hidden shadow-2xl relative group">
            {/* PLACEHOLDER: Replace with actual video embed */}
            <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
              <div className="w-24 h-24 bg-[#22c55e] rounded-full flex items-center justify-center shadow-2xl shadow-green-500/20 group-hover:scale-110 transition-transform cursor-pointer">
                <Plus className="text-white w-10 h-10 rotate-45" /> {/* Play icon placeholder */}
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <p className="text-white/20 font-black text-4xl uppercase tracking-widest">Video Tutorial Placeholder</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
            {[
              { title: "Step-by-Step Guide", desc: "Complete walkthrough from installation to advanced features", icon: CheckCircle2 },
              { title: "Quick Setup", desc: "Get started in minutes with our easy setup process", icon: Clock },
              { title: "Pro Tips", desc: "Learn advanced techniques to maximize your results", icon: Zap }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 text-left">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-[#22c55e]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Get Started */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#f59e0b] text-white text-xs font-bold rounded-full mb-8 shadow-lg shadow-amber-100">
            <Star className="w-3 h-3 fill-current" /> Join 300+ Happy Users
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">Ready to transform <span className="text-[#22c55e]">your WhatsApp communication?</span></h2>
          <p className="text-gray-500 text-lg mb-12">Join 300+ businesses already using Lead Wave Desktop to automate their WhatsApp workflows and boost productivity.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="#" className="w-full sm:w-auto bg-[#22c55e] text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-[#16a34a] transition-all shadow-xl shadow-green-100 flex items-center justify-center gap-2">
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#" className="w-full sm:w-auto bg-white border-2 border-gray-100 text-gray-700 px-10 py-5 rounded-2xl font-black text-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
              Schedule Demo <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-gray-400">
            <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-[#22c55e]" /> No credit card required</div>
            <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-[#22c55e]" /> 2-day free trial</div>
            <div className="flex items-center gap-2"><Star className="w-5 h-5 text-[#22c55e]" /> Cancel anytime</div>
          </div>
        </div>
      </section>
    </main>
  );
};

const Services = () => (
  <main className="pt-32 pb-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Our WhatsApp Automation Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">We provide a comprehensive suite of tools and services to help you automate your business communication and scale your marketing efforts.</p>
      </div>

      <div className="grid gap-12">
        {[
          { 
            title: "Bulk Messaging Automation", 
            desc: "Send thousands of personalized messages to your contacts with smart scheduling, anti-ban technology, and detailed delivery reports. Perfect for announcements, promotions, and updates.",
            icon: MessageSquare
          },
          { 
            title: "AI-Powered Chatbots", 
            desc: "Deploy intelligent chatbots that handle customer inquiries 24/7. Our bots use advanced logic to provide human-like interactions, qualify leads, and even process orders automatically.",
            icon: Zap
          },
          { 
            title: "Contact & Group Management", 
            desc: "Easily manage your contact lists and WhatsApp groups. Extract members from groups, filter active numbers, and organize your audience into targeted segments for better conversion.",
            icon: Users
          },
          { 
            title: "Advanced API Integration", 
            desc: "Connect Leadwave with your existing CRM or business tools using our robust API. Streamline your entire sales pipeline and ensure data consistency across platforms.",
            icon: Shield
          }
        ].map((service, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-12 items-center p-12 bg-gray-50 rounded-[40px] border border-gray-100 hover:border-[#22c55e] transition-all group">
            <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#22c55e] transition-colors">
              <service.icon className="w-10 h-10 text-[#22c55e] group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="text-2xl font-black mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              <Link to="/contact" className="inline-flex items-center gap-2 mt-6 text-[#22c55e] font-bold hover:gap-4 transition-all">
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </main>
);

const About = () => (
  <main className="pt-32 pb-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
        <div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">The Story Behind Leadwave</h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            At Leadwave, our vision is simple: to empower businesses by eliminating the complexities of manual WhatsApp marketing. We aren't just a software provider; we are your growth partners. Our focus is on building powerful, intuitive automation tools that help you reach your audience more effectively and grow your revenue.
          </p>
          <div className="flex gap-4">
            <div className="p-6 bg-green-50 rounded-2xl">
              <div className="text-3xl font-black text-[#22c55e] mb-1">300+</div>
              <div className="text-gray-500 text-xs font-bold uppercase">Active Users</div>
            </div>
            <div className="p-6 bg-green-50 rounded-2xl">
              <div className="text-3xl font-black text-[#22c55e] mb-1">1M+</div>
              <div className="text-gray-500 text-xs font-bold uppercase">Messages Sent</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-[#22c55e] rounded-[60px] overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/software/800/800" 
              alt="Our Story" 
              className="w-full h-full object-cover mix-blend-overlay opacity-50"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white p-8 rounded-[40px] shadow-xl border border-gray-100 hidden md:block">
            <div className="w-full h-full bg-green-100 rounded-2xl flex items-center justify-center">
              <TrendingUp className="w-12 h-12 text-[#22c55e]" />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12">Why Choose Leadwave?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Automation First", desc: "We believe in working smarter, not harder. Our tools automate the repetitive tasks so you can focus on strategy." },
            { title: "Reliability & Security", desc: "Built with the latest technology to ensure your account safety and message delivery reliability." },
            { title: "Dedicated Support", desc: "Our team is always ready to help you overcome any technical challenges and maximize your results." }
          ].map((item, idx) => (
            <div key={idx} className="p-10 bg-gray-50 rounded-[40px] text-left border border-gray-100">
              <div className="w-12 h-12 bg-[#22c55e] text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-green-100">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </main>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Monthly Plan'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `New Leadwave Inquiry:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nPlan: ${formData.service}`;
    window.open(`https://wa.me/916387617678?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Let's Connect!</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Have questions about Leadwave or need help with activation? Fill out the form below or contact us directly via WhatsApp.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="p-10 bg-gray-50 rounded-[40px] border border-gray-100">
              <h3 className="text-2xl font-black mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Mail className="w-5 h-5 text-[#22c55e]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase">Email</div>
                    <div className="font-bold text-gray-900">Zulbulai@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Phone className="w-5 h-5 text-[#22c55e]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase">Phone</div>
                    <div className="font-bold text-gray-900">+91 63876 17678</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Clock className="w-5 h-5 text-[#22c55e]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase">Working Hours</div>
                    <div className="font-bold text-gray-900">Mon - Sat (10:00 AM - 6:00 PM)</div>
                  </div>
                </div>
              </div>
              <a 
                href="https://wa.me/916387617678" 
                className="flex items-center justify-center gap-2 mt-10 bg-[#22c55e] text-white py-5 rounded-2xl font-black hover:bg-[#16a34a] transition-all shadow-lg shadow-green-100"
              >
                <MessageSquare className="w-6 h-6" /> Click here to chat on WhatsApp
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-10 bg-white rounded-[40px] border border-gray-100 shadow-xl space-y-6">
            <h3 className="text-2xl font-black mb-4">Inquiry Form</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#22c55e] transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase">Email Address</label>
                <input 
                  required
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#22c55e] transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  placeholder="+91 0000000000"
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#22c55e] transition-all"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase">Company Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="Your Business"
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#22c55e] transition-all"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase">Interested Plan</label>
              <select 
                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#22c55e] transition-all appearance-none"
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
              >
                <option>Monthly Plan</option>
                <option>Quarterly Plan</option>
                <option>Annual Plan</option>
                <option>Other / Custom</option>
              </select>
            </div>
            <button 
              type="submit"
              className="w-full bg-[#22c55e] text-white py-5 rounded-2xl font-black text-lg hover:bg-[#16a34a] transition-all shadow-xl shadow-green-100 flex items-center justify-center gap-2"
            >
              Send Inquiry <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

const PrivacyPolicy = () => (
  <main className="pt-32 pb-24">
    <div className="max-w-4xl mx-auto px-6">
      <h1 className="text-4xl font-black text-gray-900 mb-8">Privacy Policy</h1>
      <div className="prose prose-slate max-w-none space-y-6 text-gray-600">
        <p className="text-lg">Last updated: April 4, 2026</p>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
          <p>Leadwave is a desktop application. We do not store your WhatsApp messages or contacts on our servers. All data processed by the application remains on your local machine.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Information</h2>
          <p>The information collected (such as your license key and device ID) is used solely for the purpose of verifying your subscription and providing technical support.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Security</h2>
          <p>We implement industry-standard security measures to protect your subscription information. However, since the software operates locally, you are responsible for the security of your own device.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Services</h2>
          <p>Our application interacts with WhatsApp's web interface. We are not affiliated with WhatsApp or Meta. Your use of WhatsApp is subject to their own terms and privacy policies.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at Zulbulai@gmail.com.</p>
        </section>
      </div>
    </div>
  </main>
);

const TermsOfService = () => (
  <main className="pt-32 pb-24">
    <div className="max-w-4xl mx-auto px-6">
      <h1 className="text-4xl font-black text-gray-900 mb-8">Terms of Service</h1>
      <div className="prose prose-slate max-w-none space-y-6 text-gray-600">
        <p className="text-lg">Last updated: April 4, 2026</p>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
          <p>By downloading or using Leadwave, you agree to be bound by these Terms of Service. If you do not agree, do not use the software.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. License Grant</h2>
          <p>We grant you a non-exclusive, non-transferable license to use Leadwave for your business purposes, subject to the terms of your subscription plan.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Prohibited Uses</h2>
          <p>You agree not to use Leadwave for sending spam, unsolicited messages, or any content that violates WhatsApp's policies. We reserve the right to terminate your license for such violations.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Disclaimer of Warranties</h2>
          <p>Leadwave is provided "as is" without any warranties. We do not guarantee that the software will be error-free or that it will meet all your requirements.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
          <p>In no event shall Leadwave be liable for any indirect, incidental, or consequential damages arising out of the use of the software.</p>
        </section>
      </div>
    </div>
  </main>
);

// --- Main App ---

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <HashScrollHandler />
      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-green-100 selection:text-green-900">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
        <Footer />
        
        {/* WhatsApp Floating Button */}
        <a 
          href="https://wa.me/916387617678?text=Hi, I need information about Leadwave" 
          className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 z-50 hover:scale-110 transition-transform animate-bounce"
          style={{ animationDuration: '3s' }}
        >
          <MessageSquare className="w-8 h-8" />
        </a>
      </div>
    </Router>
  );
}

const HashScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return null;
};
