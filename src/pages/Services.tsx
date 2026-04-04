import { motion } from 'motion/react';
import { 
  Users, 
  Zap, 
  Layout, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, features }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-10 bg-white rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
  >
    <div className="w-20 h-20 bg-green-50 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-green-500 transition-colors">
      <Icon className="w-10 h-10 text-green-600 group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-3xl font-black text-gray-900 mb-6">{title}</h3>
    <p className="text-gray-600 text-lg leading-relaxed mb-8">{description}</p>
    <ul className="space-y-4 mb-10">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-3 text-gray-700 font-medium">
          <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Link 
      to="/contact" 
      className="inline-flex items-center gap-2 text-green-600 font-bold text-lg hover:gap-4 transition-all"
    >
      Get Started <ArrowRight className="w-5 h-5" />
    </Link>
  </motion.div>
);

export default function Services() {
  return (
    <div className="pt-32 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
              हमारी लीड जनरेशन सर्विसेज़ <br />
              <span className="text-green-500">जो सीधा ROI देती हैं।</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              हम कोई एक 'फिक्स' फॉर्मूला हर जगह नहीं लगाते। आपके बिज़नेस की ज़रूरत के हिसाब से हम सही चैनल का इस्तेमाल करते हैं।
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-12">
          <ServiceCard 
            icon={Users} 
            title="B2B Lead Generation" 
            description="LinkedIn आउटरीच, कोल्ड ईमेल मार्केटिंग और एडवांस डेटा स्क्रैपिंग के ज़रिए हम आपके बिज़नेस को सही कंपनी के डिसीजन मेकर्स तक पहुँचाते हैं।"
            features={[
              "LinkedIn Outreach",
              "Cold Email Marketing",
              "Data Scraping",
              "Decision Maker Targeting"
            ]}
          />
          <ServiceCard 
            icon={Zap} 
            title="Targeted Ad Campaigns" 
            description="हम डेटा-ड्रिवन विज्ञापन चलाते हैं। बेहतरीन ऐड क्रिएटिव्स और लेज़र-टार्गेटिंग के जरिए हम कम से कम कॉस्ट में ज़्यादा से ज़्यादा क्वालिटी लीड्स जनरेट करते हैं।"
            features={[
              "Facebook & Instagram Ads",
              "Google Ads Management",
              "Creative Ad Design",
              "Low CPL Optimization"
            ]}
          />
          <ServiceCard 
            icon={Layout} 
            title="High-Converting Funnels" 
            description="ट्रैफ़िक लाना सिर्फ आधा काम है। हम ऐसे लैंडिंग पेज और सेल्स फ़नल डिज़ाइन करते हैं जो विज़िटर्स को एंगेज करते हैं और उन्हें आपकी लीड्स में कन्वर्ट करते हैं।"
            features={[
              "Landing Page Design",
              "Sales Funnel Strategy",
              "Conversion Optimization",
              "Psychological Triggers"
            ]}
          />
        </div>
      </div>
    </div>
  );
}
