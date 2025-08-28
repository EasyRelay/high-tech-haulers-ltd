import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="py-12 bg-neutral min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h1 className="font-heading text-3xl font-bold text-primary mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last Updated:</strong>08-27-2025
            </p>

            <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              HIGH-TECH HAULERS LTD ("we," "our," or "us") collects information you provide directly to us, 
              such as when you contact us for freight services, request quotes, or communicate with our support team.
            </p>
            <p className="text-gray-600 mb-4">
              The types of information we may collect include:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Contact information (name, email address, phone number, address)</li>
              <li>Business information (company name, shipping requirements)</li>
              <li>Communication records and correspondence</li>
              <li>Website usage data and analytics information</li>
            </ul>

            <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Provide, maintain, and improve our freight transportation services</li>
              <li>Process quotes and service requests</li>
              <li>Communicate with you about our services</li>
              <li>Comply with legal obligations and regulatory requirements</li>
              <li>Analyze website usage to improve user experience</li>
            </ul>

            <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">3. Information Sharing and Disclosure</h2>
            <p className="text-gray-600 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
              except as described in this Privacy Policy. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>With service providers who assist us in operating our business</li>
              <li>When required by law or to protect our rights and safety</li>
              <li>In connection with a business transfer or acquisition</li>
            </ul>

            <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">4. Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate technical and organizational security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
              the Internet or electronic storage is 100% secure.
            </p>

            <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">5. Your Rights</h2>
            <p className="text-gray-600 mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>The right to access and receive a copy of your personal information</li>
              <li>The right to correct inaccurate personal information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to restrict or object to certain processing of your information</li>
            </ul>

            <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">6. GDPR & CCPA Compliance</h2>
            <p className="text-gray-600 mb-6">
              We are committed to complying with the General Data Protection Regulation (GDPR) and the California Consumer 
              Privacy Act (CCPA). If you are a resident of the European Union or California, you have additional rights 
              regarding your personal information as outlined in these regulations.
            </p>

            <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">7. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-neutral p-4 rounded-lg">
              <p className="text-gray-700 font-medium mb-2">HIGH-TECH HAULERS LTD</p>
              <p className="text-gray-600 mb-1">1231 Cornell Park Dr, Blue Ash, OH 45242</p>
              <p className="text-gray-600 mb-1">Phone: +1-000-000-0000</p>
              <p className="text-gray-600">Email: none</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;