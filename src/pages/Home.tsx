import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Shield, 
  Users, 
  BarChart3, 
  Clock, 
  Smartphone, 
  Globe, 
  Star 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureBlock = ({ icon: Icon, title, description }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
  >
    <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors">
      <Icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const PricingCard = ({ title, price, period, description, features, popular = false, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`relative flex flex-col p-8 rounded-3xl border-2 transition-all duration-300 hover:shadow-2xl ${
      popular 
        ? 'border-green-500 bg-white shadow-xl scale-105 z-10' 
        : 'border-gray-100 bg-gray-50 hover:border-green-200'
    }`}
  >
    {popular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
        MOST POPULAR
      </div>
    )}
    <div className="mb-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-extrabold text-gray-900">₹{price}</span>
        <span className="text-gray-500 font-medium">/{period}</span>
      </div>
      <p className="mt-4 text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
    <ul className="flex-1 space-y-4 mb-8">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <a 
      href={`https://wa.me/916387617678?text=Hi, I want to subscribe to the ${title} plan for ₹${price}`}
      className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
        popular 
          ? 'bg-green-500 text-white hover:bg-green-600 shadow-lg shadow-green-200' 
          : 'bg-white border-2 border-green-500 text-green-600 hover:bg-green-50'
      }`}
    >
      अभी शुरू करें
    </a>
  </motion.div>
);

export default function Home() {
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.15),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold rounded-full mb-6 tracking-widest uppercase">
              India's #1 WhatsApp Automation Tool
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight">
              Stop Chasing, <span className="text-green-500">Start Closing.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              हम आपके टारगेट ऑडियंस को ढूंढते हैं और उन्हें 'हॉट लीड्स' में बदलते हैं। आप कोल्ड कॉलिंग छोड़ें और सिर्फ अपनी सेल्स क्लोज़ करने पर फोकस करें।
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="w-full sm:w-auto bg-green-500 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-green-600 transition-all shadow-xl shadow-green-500/20 flex items-center justify-center gap-2">
                Get Your Free Proposal <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/services" className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">क्या आप मार्केटिंग पर पैसा जला रहे हैं?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">विज्ञापन चलाना आसान है, लेकिन सही और क्वालिटी लोगों तक पहुँचना मुश्किल। GetLeadWave इस समस्या को 3 तरीकों से हल करता है:</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureBlock 
              icon={Shield} 
              title="100% Verified Leads" 
              description="कोई फेक डेटा नहीं, सिर्फ असली और इंट्रेस्टेड खरीदार।"
            />
            <FeatureBlock 
              icon={Users} 
              title="Laser-Targeted Audience" 
              description="हम उसी ऑडियंस को टारगेट करते हैं जिन्हें सच में आपकी सर्विस की जरूरत है।"
            />
            <FeatureBlock 
              icon={Zap} 
              title="High Conversion Rate" 
              description="हमारी लीड्स नर्चर की हुई होती हैं, जो आसानी से और जल्दी क्लोज़ होती हैं।"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">लीड जनरेशन का हमारा 3-स्टेप फॉर्मूला</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Discovery", desc: "हम आपके बिज़नेस मॉडल, आपके गोल्स और आपके आइडियल कस्टमर प्रोफाइल (ICP) को गहराई से समझते हैं।" },
              { step: "02", title: "Campaign Setup", desc: "हम आपके लिए कस्टमाइज़्ड, डेटा-ड्रिवन और हाई-कन्वर्टिंग एड कैंपेन तैयार करके रन करते हैं।" },
              { step: "03", title: "Lead Delivery", desc: "आपके CRM, ईमेल या वॉट्सऐप पर सीधे क्वालिटी लीड्स रियल-टाइम में डिलीवर होती हैं।" }
            ].map((item, idx) => (
              <div key={idx} className="relative p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
                <div className="text-6xl font-black text-green-500/10 absolute top-4 right-8">{item.step}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section (Reseller Plans) */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-green-600 font-bold tracking-widest uppercase text-xs mb-4 block">Reseller Plans</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">अपने Business के लिए सही Plan चुनें</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">एक बार खरीदो, बेझिझक इस्तेमाल करो। No hidden charges.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard 
              title="Monthly"
              price="49"
              period="month"
              description="छोटे businesses के लिए बेस्ट। आज ही शुरू करें।"
              features={[
                "1 WhatsApp Account",
                "Bulk Messaging (Limited)",
                "Auto Reply & Chatbot",
                "Contact Management",
                "WhatsApp Support",
                "Standard Updates"
              ]}
              delay={0.1}
            />
            <PricingCard 
              title="Quarterly"
              price="99"
              period="3 months"
              popular={true}
              description="Growing businesses के लिए। सबसे ज्यादा बिकने वाला प्लान।"
              features={[
                "3 WhatsApp Accounts",
                "Unlimited Bulk Messaging",
                "AI Chatbot + Flows",
                "Interactive Messages",
                "Priority Support",
                "Advanced Segmentation"
              ]}
              delay={0.2}
            />
            <PricingCard 
              title="Annually"
              price="299"
              period="year"
              description="बड़े teams और agencies के लिए। सबसे किफायती।"
              features={[
                "Unlimited WhatsApp Accounts",
                "Unlimited Bulk Messaging",
                "All Pro Features",
                "Multi-Device Management",
                "Dedicated Manager",
                "Lifetime Free Updates"
              ]}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_70%)]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
            अपने बिज़नेस को नेक्स्ट लेवल पर ले जाने के लिए तैयार हैं?
          </h2>
          <p className="text-gray-400 mb-12 text-lg">आज ही हमारे साथ एक फ्री स्ट्रेटेजी कॉल बुक करें और जानें कि हम आपके लिए कितने नए ग्राहक ला सकते हैं।</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 bg-green-500 text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-green-600 transition-all shadow-2xl shadow-green-500/20"
          >
            Let's Talk Growth <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
