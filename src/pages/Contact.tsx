import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Clock, 
  Send 
} from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'B2B Leads'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hi, I'm ${formState.name} from ${formState.company}. I'm interested in ${formState.service}. My email is ${formState.email} and phone is ${formState.phone}.`;
    window.open(`https://wa.me/916387617678?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="pt-32 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
              चलिए कनेक्ट करते हैं और <br />
              <span className="text-green-500">आपकी सेल्स बढ़ाते हैं!</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              क्या आपके पास कोई प्रोजेक्ट है या लीड जनरेशन से जुड़ा कोई सवाल है? नीचे दिए गए फॉर्म को भरें या हमें सीधे संपर्क करें।
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="flex gap-6">
              <div className="w-16 h-16 bg-green-500 rounded-3xl flex items-center justify-center shadow-lg shadow-green-200 shrink-0">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Email Us</h4>
                <p className="text-xl text-gray-600">hello@getleadwave.in</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-16 h-16 bg-green-500 rounded-3xl flex items-center justify-center shadow-lg shadow-green-200 shrink-0">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Call Us</h4>
                <p className="text-xl text-gray-600">+91 6387617678</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-16 h-16 bg-green-500 rounded-3xl flex items-center justify-center shadow-lg shadow-green-200 shrink-0">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Working Hours</h4>
                <p className="text-xl text-gray-600">Mon - Sat (10:00 AM - 6:00 PM)</p>
              </div>
            </div>

            <a 
              href="https://wa.me/916387617678" 
              className="inline-flex items-center gap-3 bg-green-500 text-white px-10 py-5 rounded-3xl font-black text-xl hover:bg-green-600 transition-all shadow-xl shadow-green-500/20"
            >
              <MessageSquare className="w-6 h-6" /> Chat on WhatsApp
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-12 rounded-[50px] shadow-xl border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-green-500 transition-all"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-green-500 transition-all"
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Phone Number</label>
                  <input 
                    type="tel" 
                    required 
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-green-500 transition-all"
                    placeholder="+91 0000000000"
                    value={formState.phone}
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Company Name</label>
                  <input 
                    type="text" 
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-green-500 transition-all"
                    placeholder="Your Business"
                    value={formState.company}
                    onChange={(e) => setFormState({...formState, company: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Interested Service</label>
                <select 
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-green-500 transition-all appearance-none"
                  value={formState.service}
                  onChange={(e) => setFormState({...formState, service: e.target.value})}
                >
                  <option>B2B Leads</option>
                  <option>Social Media Ads</option>
                  <option>Funnel Building</option>
                  <option>Other</option>
                </select>
              </div>

              <button 
                type="submit" 
                className="w-full bg-green-500 text-white py-6 rounded-[30px] font-black text-xl hover:bg-green-600 transition-all shadow-xl shadow-green-500/20 flex items-center justify-center gap-3"
              >
                <Send className="w-6 h-6" /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
