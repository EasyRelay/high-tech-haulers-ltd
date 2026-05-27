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

            <p className="text-gray-600 mb-6">
              At HIGH-TECH HAULERS LTD, we are committed to protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you visit our website and use our services,
              including integrations with third-party communication platforms such as RingCentral.
            </p>

            <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect several types of information from and about users of our website and services:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Personal Identifiable Information (PII): your name, email address, phone number, and company name.</li>
              <li>
                Communication Data: data related to communication tools usage like RingCentral, such as call logs,
                messages (metadata), and user preferences.
              </li>
              <li>Technical Data: IP address, browser type, device info, OS, and activity logs.</li>
              <li>Usage Data: information on how you use our website or services.</li>
            </ul>

            <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the information we collect for the following purposes:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Providing logistics services to you</li>
              <li>Facilitating communication using RingCentral</li>
              <li>Improving our website and customer experience</li>
              <li>Providing customer support</li>
              <li>Monitoring and analyzing usage trends</li>
              <li>Complying with legal obligations</li>
            </ul>

            <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">RingCentral Integration</h2>
            <p className="text-gray-600 mb-4">
              Our service uses RingCentral APIs to facilitate communication. When you connect your RingCentral account,
              we may access and use data such as:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Your RingCentral account information</li>
              <li>Call and message metadata (not message content)</li>
              <li>Contact and directory information</li>
            </ul>
            <p className="text-gray-600 mb-6">
              We access only the data necessary for service functionality. This data is not shared with third parties
              except as required to operate the service.
            </p>

            <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">SMS Consent and Opt-In</h2>
            <h3 className="font-heading text-lg font-semibold text-primary mt-6 mb-3">SMS Consent and Mobile Messaging</h3>
            <p className="text-gray-600 mb-4">
              By providing your mobile phone number and opting in, you consent to receive SMS messages from
              HIGH-TECH HAULERS LTD related to our services, notifications, and customer support.
            </p>
            <p className="text-gray-600 mb-4">Message frequency may vary. Message and data rates may apply.</p>
            <p className="text-gray-600 mb-6">
              You may opt out at any time by replying STOP. For assistance, reply HELP or contact us at
              none.
            </p>

            <h3 className="font-heading text-lg font-semibold text-primary mt-6 mb-3">Mobile Opt-In Sharing</h3>
            <h3 className="font-heading text-lg font-semibold text-primary mt-6 mb-3">Mobile Opt-In Data Protection</h3>
            <p className="text-gray-600 mb-4">
              Mobile opt-in information and SMS consent data will NOT be shared, sold, rented, or disclosed to third
              parties or affiliates for marketing or promotional purposes.
            </p>
            <p className="text-gray-600 mb-6">
              Any information shared with service providers is used solely to support operational messaging and
              service delivery.
            </p>

            <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">Sharing of Your Information</h2>
            <p className="text-gray-600 mb-6">
              We do not share mobile messaging data, SMS consent, or opt-in information with third parties for marketing
              purposes.
            </p>

            <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">Data Retention</h2>
            <p className="text-gray-600 mb-6">
              We retain personal data only as long as necessary to provide services and fulfill the purposes outlined in
              this policy. Data related to RingCentral usage may be securely stored in line with RingCentral developer
              guidelines.
            </p>

            <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">Your Data Protection Rights</h2>
            <p className="text-gray-600 mb-4">You have the following rights regarding your personal data:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Object to or restrict certain data processing</li>
              <li>Withdraw consent for data usage (where applicable)</li>
            </ul>
            <p className="text-gray-600 mb-6">To exercise these rights, please contact us at none.</p>

            <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">Security of Your Information</h2>
            <p className="text-gray-600 mb-6">
              We implement industry-standard technical and organizational measures to protect your information, including
              encryption, secure data storage, and access controls.
            </p>

            <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">Third-Party Links</h2>
            <p className="text-gray-600 mb-6">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of
              such sites.
            </p>

            <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">Updates to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised
              effective date.
            </p>

            <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy, you can contact us at:
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