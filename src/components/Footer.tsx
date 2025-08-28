import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-gray-300 mb-4">
              Driving logistics into the future with reliable freight solutions and advanced technology.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    1231 Cornell Park Dr<br />
                    Blue Ash, OH 45242
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a 
                  href="tel:+18008294933" 
                  className="text-gray-300 hover:text-accent transition-colors duration-200"
                >
                  +1-000-000-0000
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Long-Haul Freight Transportation</li>
              <li>• Advanced GPS Tracking</li>
              <li>• Real-Time Logistics Solutions</li>
              <li>• Professional Fleet Management</li>
              <li>• 24/7 Customer Support</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} HIGH-TECH HAULERS LTD. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy-policy" className="text-gray-400 hover:text-accent transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/cookie-policy" className="text-gray-400 hover:text-accent transition-colors duration-200">
                Cookie Policy
              </a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-accent transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;