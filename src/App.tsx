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
  Search
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
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';
  const headerBg = isScrolled || !isHome ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5';
  const textColor = isScrolled || !isHome ? 'text-gray-900' : 'text-white';
  const linkColor = isScrolled || !isHome ? 'text-gray-600 hover:text-green-600' : 'text-gray-300 hover:text-white';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-200 group-hover:scale-110 transition-transform">
            <MessageSquare className="text-white w-6 h-6" />
          </div>
          <span className={`text-2xl font-black tracking-tighter transition-colors ${textColor}`}>Leadwave</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              className={`text-sm font-bold transition-colors ${
                location.pathname === link.path 
                  ? 'text-green-500' 
                  : linkColor
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://wa.me/916387617678?text=Hi, I want to book a strategy call" 
            className="bg-green-500 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-green-600 transition-all shadow-md shadow-green-500/20"
          >
            Book a Strategy Call
          </a>
        </div>

        <button 
          className={`md:hidden ${textColor}`} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 md:hidden overflow-hidden shadow-xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-bold ${
                    location.pathname === link.path ? 'text-green-500' : 'text-gray-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="https://wa.me/916387617678" 
                className="bg-green-500 text-white py-4 rounded-2xl font-bold text-center text-lg"
              >
                Book a Strategy Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-black py-20 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <MessageSquare className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-black text-white">Leadwave</span>
          </div>
          <p className="text-gray-500 text-sm max-w-md leading-relaxed">
            Leadwave - Empowering businesses with high-quality, targeted lead generation. हम आपके बिज़नेस के लिए हाई-कन्वर्टिंग लीड्स लाते हैं।
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link to="/" className="text-gray-500 hover:text-green-500 text-sm transition-colors">Home</Link></li>
            <li><Link to="/services" className="text-gray-500 hover:text-green-500 text-sm transition-colors">Services</Link></li>
            <li><Link to="/about" className="text-gray-500 hover:text-green-500 text-sm transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="text-gray-500 hover:text-green-500 text-sm transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Legal</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-500 hover:text-green-500 text-sm transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-500 hover:text-green-500 text-sm transition-colors">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-xs">© 2026 Leadwave.in. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="text-gray-600 hover:text-white transition-colors"><Globe className="w-4 h-4" /></a>
          <a href="#" className="text-gray-600 hover:text-white transition-colors"><Mail className="w-4 h-4" /></a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Page Components ---

const Home = () => {
  const navigate = useNavigate();
  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.15),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight">
              Stop Chasing, <span className="text-green-500">Start Closing.</span><br />
              आपके बिज़नेस के लिए हाई-कन्वर्टिंग लीड्स।
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              हम आपके टारगेट ऑडियंस को ढूंढते हैं और उन्हें 'हॉट लीड्स' में बदलते हैं। आप कोल्ड कॉलिंग छोड़ें और सिर्फ अपनी सेल्स क्लोज़ करने पर फोकस करें।
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="w-full sm:w-auto bg-green-500 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-green-600 transition-all shadow-xl shadow-green-500/20">
                Get Your Free Proposal
              </Link>
              <Link to="/services" className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">क्या आप मार्केटिंग पर पैसा जला रहे हैं, लेकिन सही ग्राहक नहीं मिल रहे?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">विज्ञापन चलाना आसान है, लेकिन सही और क्वालिटी लोगों तक पहुँचना मुश्किल। Leadwave इस समस्या को 3 तरीकों से हल करता है:</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: CheckCircle2, title: "100% Verified Leads", desc: "कोई फेक डेटा नहीं, सिर्फ असली और इंट्रेस्टेड खरीदार।" },
              { icon: Target, title: "Laser-Targeted Audience", desc: "हम उसी ऑडियंस को टारगेट करते हैं जिन्हें सच में आपकी सर्विस की जरूरत है।" },
              { icon: TrendingUp, title: "High Conversion Rate", desc: "हमारी लीड्स नर्चर की हुई होती हैं, जो आसानी से और जल्दी क्लोज़ होती हैं।" }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-green-500 transition-all group">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors">
                  <item.icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Core Requirement */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">Affordable Reseller Plans</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">अपने Business के लिए सही Plan चुनें।</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Monthly", price: "49", period: "month", popular: false },
              { title: "Quarterly", price: "99", period: "3 months", popular: true },
              { title: "Annually", price: "299", period: "year", popular: false }
            ].map((plan, idx) => (
              <div key={idx} className={`relative p-8 rounded-3xl border-2 transition-all ${
                plan.popular ? 'border-green-500 bg-white shadow-xl scale-105' : 'border-gray-200 bg-gray-50'
              }`}>
                {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-xs font-bold">MOST POPULAR</div>}
                <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black">₹{plan.price}</span>
                  <span className="text-gray-500 text-sm">/{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle2 className="w-4 h-4 text-green-500" /> WhatsApp Automation</li>
                  <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle2 className="w-4 h-4 text-green-500" /> Bulk Messaging</li>
                  <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle2 className="w-4 h-4 text-green-500" /> 24/7 Support</li>
                </ul>
                <a href={`https://wa.me/916387617678?text=I want the ${plan.title} plan`} className={`block w-full py-4 rounded-xl font-bold text-center transition-all ${
                  plan.popular ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-white border-2 border-green-500 text-green-600 hover:bg-green-50'
                }`}>Buy Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">लीड जनरेशन का हमारा 3-स्टेप प्रूवन फॉर्मूला</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "1", title: "Discovery", desc: "हम आपके बिज़नेस मॉडल, आपके गोल्स और आपके आइडियल कस्टमर प्रोफाइल (ICP) को गहराई से समझते हैं।" },
              { step: "2", title: "Campaign Setup", desc: "हम आपके लिए कस्टमाइज़्ड, डेटा-ड्रिवन और हाई-कन्वर्टिंग एड कैंपेन तैयार करके रन करते हैं।" },
              { step: "3", title: "Lead Delivery", desc: "आपके CRM, ईमेल या वॉट्सऐप पर सीधे क्वालिटी लीड्स रियल-टाइम में डिलीवर होती हैं।" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-lg shadow-green-200">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-green-500 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">अपने बिज़नेस को नेक्स्ट लेवल पर ले जाने के लिए तैयार हैं?</h2>
          <p className="text-lg mb-10 opacity-90">आज ही हमारे साथ एक फ्री स्ट्रेटेजी कॉल बुक करें और जानें कि हम आपके लिए कितने नए ग्राहक ला सकते हैं।</p>
          <Link to="/contact" className="inline-block bg-white text-green-600 px-12 py-5 rounded-2xl font-black text-xl hover:bg-gray-100 transition-all shadow-xl">
            Let's Talk Growth
          </Link>
        </div>
      </section>
    </main>
  );
};

const Services = () => (
  <main className="pt-32 pb-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">हमारी लीड जनरेशन सर्विसेज़</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">हम कोई एक 'फिक्स' फॉर्मूला हर जगह नहीं लगाते। आपके बिज़नेस की ज़रूरत के हिसाब से हम सही चैनल का इस्तेमाल करते हैं।</p>
      </div>

      <div className="grid gap-12">
        {[
          { 
            title: "B2B Lead Generation", 
            desc: "LinkedIn आउटरीच, कोल्ड ईमेल मार्केटिंग और एडवांस डेटा स्क्रैपिंग के ज़रिए हम आपके बिज़नेस को सही कंपनी के डिसीजन मेकर्स (Decision Makers) तक पहुँचाते हैं। हाई-टिकट सेल्स के लिए यह सबसे बेहतरीन सर्विस है।",
            icon: Users
          },
          { 
            title: "Targeted Ad Campaigns", 
            desc: "हम डेटा-ड्रिवन विज्ञापन चलाते हैं। बेहतरीन ऐड क्रिएटिव्स और लेज़र-टार्गेटिंग के जरिए हम कम से कम कॉस्ट (CPL) में ज़्यादा से ज़्यादा क्वालिटी लीड्स जनरेट करते हैं। हम लोकल और नेशनल, दोनों तरह के कैंपेन सँभालते हैं।",
            icon: Zap
          },
          { 
            title: "High-Converting Sales Funnels", 
            desc: "ट्रैफ़िक लाना सिर्फ आधा काम है। हम ऐसे लैंडिंग पेज और सेल्स फ़नल डिज़ाइन करते हैं जो विज़िटर्स को एंगेज करते हैं और उन्हें आपकी लीड्स में कन्वर्ट करने के लिए मनोवैज्ञानिक रूप से प्रेरित करते हैं।",
            icon: BarChart3
          }
        ].map((service, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-12 items-center p-12 bg-gray-50 rounded-[40px] border border-gray-100 hover:border-green-500 transition-all group">
            <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-green-500 transition-colors">
              <service.icon className="w-10 h-10 text-green-500 group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="text-2xl font-black mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              <Link to="/contact" className="inline-flex items-center gap-2 mt-6 text-green-600 font-bold hover:gap-4 transition-all">
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
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">Leadwave के पीछे की कहानी</h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Leadwave में, हमारा विज़न बहुत साफ़ है: बिज़नेस ओनर्स की सबसे बड़ी समस्या 'लीड्स की कमी' को हमेशा के लिए खत्म करना। हम सिर्फ एक आम मार्केटिंग एजेंसी नहीं हैं जो सिर्फ क्लिक्स और इम्प्रेस्शंस दिखाती है; हम आपके 'ग्रोथ पार्टनर' हैं। हमारा फोकस सिर्फ एक चीज़ पर होता है—आपके बिज़नेस का रेवेन्यू बढ़ाना।
          </p>
          <div className="flex gap-4">
            <div className="p-6 bg-green-50 rounded-2xl">
              <div className="text-3xl font-black text-green-600 mb-1">500+</div>
              <div className="text-gray-500 text-xs font-bold uppercase">Clients Served</div>
            </div>
            <div className="p-6 bg-green-50 rounded-2xl">
              <div className="text-3xl font-black text-green-600 mb-1">1M+</div>
              <div className="text-gray-500 text-xs font-bold uppercase">Leads Generated</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-green-500 rounded-[60px] overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/business/800/800" 
              alt="Our Story" 
              className="w-full h-full object-cover mix-blend-overlay opacity-50"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white p-8 rounded-[40px] shadow-xl border border-gray-100 hidden md:block">
            <div className="w-full h-full bg-green-100 rounded-2xl flex items-center justify-center">
              <TrendingUp className="w-12 h-12 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12">Why Choose Leadwave?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Data-Driven Approach", desc: "हम अंदाज़े पर नहीं, डेटा और फैक्ट्स पर काम करते हैं।" },
            { title: "Quality Over Quantity", desc: "100 बेकार लीड्स से अच्छी 10 क्वालिटी लीड्स हैं जो कन्वर्ट हों।" },
            { title: "Transparent Reporting", desc: "आपका पैसा कहाँ लग रहा है और क्या रिजल्ट आ रहा है, इसकी पूरी ट्रांसपेरेंसी हम रखते हैं।" }
          ].map((item, idx) => (
            <div key={idx} className="p-10 bg-gray-50 rounded-[40px] text-left border border-gray-100">
              <div className="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-green-100">
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
    service: 'B2B Leads'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `New Lead Request:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nService: ${formData.service}`;
    window.open(`https://wa.me/916387617678?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">चलिए कनेक्ट करते हैं!</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">क्या आपके पास कोई प्रोजेक्ट है या लीड जनरेशन से जुड़ा कोई सवाल है? नीचे दिए गए फॉर्म को भरें या हमें सीधे संपर्क करें।</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="p-10 bg-gray-50 rounded-[40px] border border-gray-100">
              <h3 className="text-2xl font-black mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Mail className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase">Email</div>
                    <div className="font-bold text-gray-900">hello@getleadwave.in</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Phone className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase">Phone</div>
                    <div className="font-bold text-gray-900">+91 6387617678</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Clock className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase">Working Hours</div>
                    <div className="font-bold text-gray-900">Mon - Sat (10:00 AM - 6:00 PM)</div>
                  </div>
                </div>
              </div>
              <a 
                href="https://wa.me/916387617678" 
                className="flex items-center justify-center gap-2 mt-10 bg-green-500 text-white py-5 rounded-2xl font-black hover:bg-green-600 transition-all shadow-lg shadow-green-100"
              >
                <MessageSquare className="w-6 h-6" /> Click here to chat on WhatsApp
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-10 bg-white rounded-[40px] border border-gray-100 shadow-xl space-y-6">
            <h3 className="text-2xl font-black mb-4">Lead Capture Form</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-green-500 transition-all"
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
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-green-500 transition-all"
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
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-green-500 transition-all"
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
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-green-500 transition-all"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase">Interested Service</label>
              <select 
                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-green-500 transition-all appearance-none"
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
              >
                <option>B2B Leads</option>
                <option>Social Media Ads</option>
                <option>Funnel Building</option>
                <option>Other</option>
              </select>
            </div>
            <button 
              type="submit"
              className="w-full bg-green-500 text-white py-5 rounded-2xl font-black text-lg hover:bg-green-600 transition-all shadow-xl shadow-green-500/20 flex items-center justify-center gap-2"
            >
              Send Message / Request a Call <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-green-100 selection:text-green-900">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
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
