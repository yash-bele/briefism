const PrivacyPolicy = () => {
  return (
    <main className="mb-16">
      <h2 className="border-b-4 border-double border-red-100 mb-5 capitalize w-fit mx-auto text-3xl text-red-300">
        Privacy Policy
      </h2>
      <div className="space-y-5 text-sm">
        <p>
          Welcome to Briefism. This Privacy Policy outlines our commitment to
          transparency and your privacy, affirming that we do not collect any
          personal information or use cookies on our website.
        </p>
        <p>
          <span className="block text-lg">1. No Information Collection:</span>
          <span>
            Briefism does not collect any personal information from users. We do
            not request or store names, email addresses, or any other
            identifiable details. We are committed to maintaining a
            privacy-focused environment.
          </span>
        </p>
        <p>
          <span className="block text-lg">
            2. No Cookies or Similar Technologies:
          </span>
          <span>
            We do not use cookies or any similar technologies that track user
            behavior or collect personal data. Your visit to our website remains
            entirely anonymous.
          </span>
        </p>
        <p>
          <span className="block text-lg">3. Third-Party Links:</span>
          <span>
            While we do not use third-party cookies, our website may contain
            links to external websites. Please be aware that these sites have
            their own privacy policies, and we do not take responsibility for
            their practices.
          </span>
        </p>
        <p>
          <span className="block text-lg">4. Policy Updates:</span>
          <span>
            Our commitment to user privacy remains unwavering. Any potential
            changes in our data collection or cookie usage practices will be
            reflected in updates to this Privacy Policy. Users will be informed
            of any significant changes.
          </span>
        </p>
        <p>
          <span className="block text-lg">5. Children's Privacy:</span>
          <span>
            Briefism is not intended for children under the age of 13, and we do
            not knowingly collect personal information from children.
          </span>
        </p>
        <p>
          <span className="block text-lg">6. Contact Us:</span>
          <span>
            If you have any questions or concerns about our privacy practices,
            please contact us at{" "}
            <a href="mailto: briefism@gmail.com" className="text-blue-700">
              briefism@gmail.com
            </a>
            .
          </span>
        </p>
        <p>
          Thank you for choosing Briefism. We prioritize your privacy and are
          dedicated to providing a secure and anonymous browsing experience.
        </p>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
