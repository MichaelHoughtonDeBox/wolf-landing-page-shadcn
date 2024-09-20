export const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy 🔒</h1>
      {/* Privacy Policy content */}
      <div className="space-y-4">
        {/* Introduction */}
        <p>
          At Community Wolf, we are committed to safeguarding the privacy of our users. This Privacy Policy outlines how we collect, use, and protect your personal data when you interact with our services through communitywolf.com or via our other platforms such as WhatsApp, and how we comply with applicable UK data protection laws, including the General Data Protection Regulation (GDPR).
        </p>
        <p>
          By using the Website or any of our services, you agree to the collection and use of information in accordance with this policy.
        </p>

        {/* Data Controller */}
        <h2 className="text-xl font-semibold mt-6">1. Data Controller</h2>
        <p>
          The data controller responsible for your personal data is:
          Community Wolf
        </p>
        <p>
          If you have any questions about this Privacy Policy, please contact us at info@communitywolf.com.
        </p>

        {/* What Personal Data We Collect */}
        <h2 className="text-xl font-semibold mt-6">2. What Personal Data We Collect</h2>
        <p>We may collect the following types of personal data:</p>
        <ul className="list-disc list-inside">
          <li>Contact Information: such as your name, phone number, and email address.</li>
          <li>Location Data: including data submitted via "drop pin" or similar location-sharing features.</li>
          <li>Incident Reports: any reports of suspicious activity, including voice notes, text messages, and other user-generated content.</li>
          <li>Device Information: such as IP address, browser type, and device identifiers.</li>
          <li>Communication Data: messages exchanged through WhatsApp or other messaging services integrated into Wolf.</li>
        </ul>

        {/* How We Use Your Data */}
        <h2 className="text-xl font-semibold mt-6">3. How We Use Your Data</h2>
        <p>We use your personal data to:</p>
        <ul className="list-disc list-inside">
          <li>Facilitate community reporting and notify relevant authorities or first responders.</li>
          <li>Improve our services by analysing trends, incidents, and user behaviour.</li>
          <li>Provide you with real-time updates on incidents in your area.</li>
          <li>Ensure compliance with our legal obligations.</li>
          <li>Enhance the safety and security of the community.</li>
        </ul>

        {/* Legal Basis for Processing */}
        <h2 className="text-xl font-semibold mt-6">4. Legal Basis for Processing</h2>
        <p>We process your personal data based on the following legal grounds:</p>
        <ul className="list-disc list-inside">
          <li>Consent: Where you have provided explicit consent for us to process your data, such as when you submit an incident report.</li>
          <li>Legitimate Interests: To ensure the safety and security of our users and community.</li>
          <li>Legal Obligations: To comply with applicable laws, regulations, and requests from law enforcement agencies.</li>
        </ul>

        {/* Data Sharing */}
        <h2 className="text-xl font-semibold mt-6">5. Data Sharing</h2>
        <p>We may share your personal data with:</p>
        <ul className="list-disc list-inside">
          <li>Law enforcement and first responders: to ensure prompt action on reported incidents.</li>
          <li>Third-party service providers: who assist us in maintaining and improving the Website and our services.</li>
          <li>Partners: such as private security firms or armed response units, where applicable.</li>
        </ul>
        <p>We will never sell or rent your personal data to third parties.</p>

        {/* Data Retention */}
        <h2 className="text-xl font-semibold mt-6">6. Data Retention</h2>
        <p>
          We will retain your personal data for as long as necessary to fulfil the purposes for which we collected it, including satisfying any legal, accounting, or reporting requirements. After this period, we will securely delete or anonymize your data.
        </p>

        {/* Your Data Rights */}
        <h2 className="text-xl font-semibold mt-6">7. Your Data Rights</h2>
        <p>Under UK data protection law, you have the following rights:</p>
        <ul className="list-disc list-inside">
          <li>Access: You have the right to request access to the personal data we hold about you.</li>
          <li>Rectification: You can ask us to correct any inaccuracies in your personal data.</li>
          <li>Erasure: You have the right to request that we delete your personal data under certain conditions.</li>
          <li>Restriction of Processing: You can ask us to restrict the processing of your personal data in certain situations.</li>
          <li>Data Portability: You have the right to receive your personal data in a structured, commonly used, and machine-readable format.</li>
          <li>Objection: You can object to our processing of your personal data based on legitimate interests.</li>
          <li>Withdraw Consent: Where we rely on your consent to process your personal data, you have the right to withdraw consent at any time.</li>
        </ul>
        <p>If you wish to exercise any of these rights, please contact us at info@communitywolf.com.</p>

        {/* Security */}
        <h2 className="text-xl font-semibold mt-6">8. Security</h2>
        <p>
          We take the security of your data seriously. We implement appropriate technical and organisational measures to protect your personal data from unauthorised access, disclosure, alteration, or destruction. However, please note that no method of transmission over the internet or method of electronic storage is 100% secure.
        </p>

        {/* Cookies */}
        <h2 className="text-xl font-semibold mt-6">9. Cookies</h2>
        <p>
          We use cookies and similar tracking technologies to enhance user experience and analyse usage patterns on our Website.
        </p>

        {/* Changes to This Privacy Policy */}
        <h2 className="text-xl font-semibold mt-6">10. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your data.
        </p>

        {/* Contact Us */}
        <h2 className="text-xl font-semibold mt-6">11. Contact Us</h2>
        <p>
          If you have any questions or concerns regarding this Privacy Policy or our data protection practices, please contact us at:
        </p>
        <p>Email: hello@communitywolf.com</p>
      </div>
    </div>
  );
};