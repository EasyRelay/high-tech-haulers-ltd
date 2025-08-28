import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="py-12 bg-neutral min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h1 className="font-heading text-3xl font-bold text-primary mb-8">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">1. What Are Cookies</h2>
            <p className="text-gray-600 mb-6">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
              They are widely used to make websites work more efficiently and provide information to website owners.
            </p>

            <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">2. How We Use Cookies</h2>
            <p className="text-gray-600 mb-4">
              HIGH-TECH HAULERS LTD uses cookies to enhance your browsing experience and improve our services. 
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>To remember your preferences and settings</li>
              <li>To analyze website traffic and usage patterns</li>
              <li>To ensure the website functions properly</li>
              <li>To improve our website's performance and user experience</li>
            </ul>

            <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">3. Types of Cookies We Use</h2>
            
            <h3 className="font-heading text-lg font-medium text-primary mt-6 mb-3">Essential Cookies</h3>
            <p className="text-gray-600 mb-4">
              These cookies are necessary for the website to function properly. They enable basic functions like 
              page navigation and access to secure areas of the website.
            </p>

            <h3 className="font-heading text-lg font-medium text-primary mt-6 mb-3">Analytics Cookies</h3>
            <p className="text-gray-600 mb-4">
              These cookies help us understand how visitors interact with our website by collecting and reporting 
              information anonymously. This helps us improve our website's performance.
            </p>

            <h3 className="font-heading text-lg font-medium text-primary mt-6 mb-3">Preference Cookies</h3>
            <p className="text-gray-600 mb-6">
              These cookies allow our website to remember information that changes the way the website behaves 
              or looks, such as your preferred language or region.
            </p>

            <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">4. Managing Cookies</h2>
            <p className="text-gray-600 mb-4">
              You can control and manage cookies in various ways:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Browser Settings: Most browsers allow you to refuse cookies or delete existing ones</li>
              <li>Cookie Preferences: Use our cookie preference center to manage your choices</li>
              <li>Opt-out Tools: Use industry-standard opt-out tools for analytics cookies</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6">
              <p className="text-yellow-800">
                <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website 
                and your user experience.
              </p>
            </div>

            <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">5. Third-Party Cookies</h2>
            <p className="text-gray-600 mb-6">
              We may use third-party services that set cookies on our website, such as analytics providers. 
              These third parties have their own privacy policies and cookie practices.
            </p>

            <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">6. Cookie Consent</h2>
            <p className="text-gray-600 mb-6">
              When you first visit our website, you will see a cookie banner asking for your consent to use 
              non-essential cookies. You can choose to accept or reject these cookies.
            </p>

            <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">7. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about our use of cookies, please contact us:
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

export default CookiePolicy;