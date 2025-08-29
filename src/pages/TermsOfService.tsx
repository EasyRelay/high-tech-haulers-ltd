import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="py-12 bg-neutral min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h1 className="font-heading text-3xl font-bold text-primary mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using the services provided by HIGH-TECH HAULERS LTD ("Company," "we," "our," or "us"), 
              you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, 
              you may not access or use our services.
            </p>

            <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">2. Services Description</h2>
            <p className="text-gray-600 mb-4">
              HIGH-TECH HAULERS LTD provides freight transportation and logistics services including:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Long-haul freight transportation across the United States</li>
              <li>GPS tracking and real-time logistics monitoring</li>
              <li>Professional fleet management services</li>
              <li>24/7 customer support and communication</li>
              <li>Secure and insured cargo transportation</li>
            </ul>

            <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">3. Licensing and Compliance</h2>
            <p className="text-gray-600 mb-6">
              Our company operates under valid federal transportation licenses including Motor Carrier Number 
              and Department of Transportation Number. We maintain all required insurance coverage and 
              comply with federal and state transportation regulations.
            </p>

            <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">4. Service Terms and Conditions</h2>
            
            <h3 className="font-heading text-lg font-medium text-primary mt-6 mb-3">4.1 Service Quotes</h3>
            <p className="text-gray-600 mb-4">
              All service quotes are estimates based on information provided by the customer. Final pricing may vary 
              based on actual shipment specifications, route conditions, and regulatory requirements.
            </p>

            <h3 className="font-heading text-lg font-medium text-primary mt-6 mb-3">4.2 Cargo Requirements</h3>
            <p className="text-gray-600 mb-4">
              Customers must provide accurate descriptions of cargo, including weight, dimensions, and any special 
              handling requirements. Hazardous materials must be properly declared and comply with DOT regulations.
            </p>

            <h3 className="font-heading text-lg font-medium text-primary mt-6 mb-3">4.3 Delivery Times</h3>
            <p className="text-gray-600 mb-6">
              While we strive to meet estimated delivery times, schedules may be affected by weather, traffic, 
              mechanical issues, or regulatory delays. We are not liable for consequential damages due to delivery delays.
            </p>

            <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">5. Payment Terms</h2>
            <p className="text-gray-600 mb-4">
              Payment terms will be specified in individual service agreements. Standard terms include:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Payment due within 30 days of invoice date</li>
              <li>Late payment fees may apply to overdue accounts</li>
              <li>Services may be suspended for non-payment</li>
              <li>All payments must be in U.S. dollars</li>
            </ul>

            <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              Our liability for cargo loss or damage is limited by federal transportation regulations and our 
              insurance coverage. We maintain appropriate cargo insurance as required by law. Claims must be 
              filed within the timeframes specified by federal regulations.
            </p>

            <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-6">
              <p className="text-red-800">
                <strong>Important:</strong> Our total liability shall not exceed the actual value of the cargo 
                or the amount of our insurance coverage, whichever is less.
              </p>
            </div>

            <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">7. Force Majeure</h2>
            <p className="text-gray-600 mb-6">
              We shall not be liable for any delays or failures in performance due to circumstances beyond our 
              reasonable control, including but not limited to acts of God, natural disasters, government actions, 
              labor disputes, or equipment failures.
            </p>

            <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">8. Governing Law</h2>
            <p className="text-gray-600 mb-6">
              These Terms shall be governed by and construed in accordance with the laws of the State of Ohio, 
              United States, without regard to conflict of law provisions. Any disputes shall be resolved in 
              the courts of Ohio.
            </p>

            <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">9. Changes to Terms</h2>
            <p className="text-gray-600 mb-6">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon 
              posting to our website. Your continued use of our services constitutes acceptance of the modified Terms.
            </p>

            <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">10. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              For questions regarding these Terms of Service or legal inquiries, please contact us:
            </p>
            <div className="bg-neutral p-4 rounded-lg">
              <p className="text-gray-700 font-medium mb-2">HIGH-TECH HAULERS LTD</p>
              <p className="text-gray-600 mb-1">1231 Cornell Park Dr, Blue Ash, OH 45242</p>
              <p className="text-gray-600 mb-1">Phone: +1-000-000-0000</p>
              <p className="text-gray-600">Email: none</p>
            </div>

            <div className="mt-8 p-4 bg-primary text-white rounded-lg">
              <p className="text-center">
                <strong>By using our services, you acknowledge that you have read, understood, 
                and agree to be bound by these Terms of Service.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;