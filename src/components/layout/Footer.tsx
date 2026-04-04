import { Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <MessageSquare className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-black text-white">GetLeadWave</span>
            </div>
            <p className="text-gray-500 text-sm max-w-md leading-relaxed">
              Empowering businesses with high-quality, targeted lead generation and automation. We help you stop chasing and start closing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/" className="hover:text-green-500 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-green-500 transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-green-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-green-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="#" className="hover:text-green-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-green-500 transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-center">
          <p className="text-gray-600 text-xs">
            © 2026 GetLeadWave.in. All Rights Reserved. <br />
            <span className="mt-2 block">Authorized Reseller Network</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
