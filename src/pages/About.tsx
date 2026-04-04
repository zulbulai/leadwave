import { motion } from 'motion/react';
import { 
  BarChart3, 
  CheckCircle2, 
  Target, 
  Eye 
} from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
              GetLeadWave के पीछे की <span className="text-green-500">कहानी</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              GetLeadWave में, हमारा विज़न बहुत साफ़ है: बिज़नेस ओनर्स की सबसे बड़ी समस्या 'लीड्स की कमी' को हमेशा के लिए खत्म करना। 
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              हम सिर्फ एक आम मार्केटिंग एजेंसी नहीं हैं जो सिर्फ क्लिक्स और इम्प्रेस्शंस दिखाती है; हम आपके 'ग्रोथ पार्टनर' हैं। हमारा फोकस सिर्फ एक चीज़ पर होता है—आपके बिज़नेस का रेवेन्यू बढ़ाना।
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-green-500 rounded-[60px] rotate-6 opacity-10" />
            <img 
              src="https://picsum.photos/seed/business/800/800" 
              alt="About GetLeadWave" 
              className="relative z-10 rounded-[60px] shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">Why Choose GetLeadWave?</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            { icon: BarChart3, title: "Data-Driven Approach", desc: "हम अंदाज़े पर नहीं, डेटा और फैक्ट्स पर काम करते हैं।" },
            { icon: Target, title: "Quality Over Quantity", desc: "100 बेकार लीड्स से अच्छी 10 क्वालिटी लीड्स हैं जो कन्वर्ट हों।" },
            { icon: Eye, title: "Transparent Reporting", desc: "आपका पैसा कहाँ लग रहा है और क्या रिजल्ट आ रहा है, इसकी पूरी ट्रांसपेरेंसी हम रखते हैं।" }
          ].map((item, idx) => (
            <div key={idx} className="p-10 bg-gray-50 rounded-[40px] border border-gray-100">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-green-200">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
