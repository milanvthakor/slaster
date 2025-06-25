export default function PrivacyPolicy() {
  return (
    <div className="content-container">
      <h2 className="content-title">Privacy Policy</h2>

      <div className="content-content">
        <p className="content-last-updated">Last updated: 25th June 2025</p>

        <section className="content-section">
          <h3>1. Introduction</h3>
          <p>
            Slaster ("we," "our," or "us") is committed to protecting your
            privacy. This Privacy Policy explains how we handle your information
            when you use our Google Add-on application that connects Google
            Calendar with Slack.
          </p>
          <p>
            <strong>
              Important: Slaster does not store any of your data on our servers.
            </strong>
          </p>
        </section>

        <section className="content-section">
          <h3>2. Information We Access (No Storage)</h3>
          <h4>2.1 Google Calendar Data</h4>
          <ul>
            <li>Calendar event details (times, descriptions, titles)</li>
            <li>
              Custom Slack status messages stored in Google Calendar event
              descriptions
            </li>
            <li>Event scheduling and timing information</li>
          </ul>
          <p>
            <strong>Note:</strong> All this data remains stored in your Google
            Calendar account. We only access it temporarily to sync with Slack
            and do not store it on our servers.
          </p>

          <h4>2.2 Slack Integration Data</h4>
          <ul>
            <li>Slack workspace information for status updates</li>
            <li>User preferences for status synchronization</li>
            <li>Do Not Disturb settings and scheduling preferences</li>
          </ul>
          <p>
            <strong>Note:</strong> We only send status updates to Slack based on
            your calendar events. We do not store any Slack data on our servers.
          </p>
        </section>

        <section className="content-section">
          <h3>3. How We Use Your Information</h3>
          <p>We use the accessed information to:</p>
          <ul>
            <li>Read your Google Calendar events to identify status updates</li>
            <li>
              Extract custom Slack status messages from calendar event
              descriptions
            </li>
            <li>
              Automatically update your Slack status based on calendar events
            </li>
            <li>Manage Do Not Disturb settings according to your calendar</li>
            <li>Provide the core synchronization functionality</li>
          </ul>
          <p>
            <strong>Important:</strong> All data processing happens in real-time
            without permanent storage on our servers.
          </p>
        </section>

        <section className="content-section">
          <h3>4. Data Storage and Retention</h3>
          <p>
            <strong>
              Slaster does not store any of your data on our servers.
            </strong>{" "}
            Here's how data is handled:
          </p>
          <ul>
            <li>
              <strong>Google Calendar Data:</strong> Stored entirely in your
              Google Calendar account
            </li>
            <li>
              <strong>Slack Status Messages:</strong> Stored as custom text in
              your Google Calendar event descriptions
            </li>
            <li>
              <strong>Processing:</strong> All data processing is temporary and
              happens in memory only
            </li>
            <li>
              <strong>No Server Storage:</strong> We do not maintain any
              databases or storage systems for user data
            </li>
            <li>
              <strong>Immediate Deletion:</strong> Any temporary data used for
              processing is immediately deleted
            </li>
          </ul>
        </section>

        <section className="content-section">
          <h3>5. Data Sharing and Disclosure</h3>
          <p>
            Since we don't store your data, there is no data sharing from our
            servers. However:
          </p>
          <ul>
            <li>
              <strong>Google Calendar:</strong> Your calendar data remains under
              Google's control and privacy policy
            </li>
            <li>
              <strong>Slack:</strong> Status updates are sent directly to Slack
              according to their privacy policy
            </li>
            <li>
              <strong>No Third-Party Sharing:</strong> We do not share any data
              with third parties
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may be required to
              disclose information if required by law
            </li>
          </ul>
        </section>

        <section className="content-section">
          <h3>6. Data Security</h3>
          <p>
            Our security approach focuses on secure data access rather than
            storage:
          </p>
          <ul>
            <li>Secure OAuth authentication with Google and Slack</li>
            <li>Encrypted data transmission between services</li>
            <li>No persistent storage of sensitive information</li>
            <li>Regular security assessments of our integration code</li>
            <li>Immediate deletion of any temporary processing data</li>
          </ul>
        </section>

        <section className="content-section">
          <h3>7. Your Rights and Choices</h3>
          <p>
            Since we don't store your data, your rights are primarily about
            access control:
          </p>
          <ul>
            <li>
              <strong>Revoke Access:</strong> You can revoke Slaster's access to
              Google Calendar and Slack at any time
            </li>
            <li>
              <strong>Delete Data:</strong> Remove custom status messages from
              your Google Calendar events
            </li>
            <li>
              <strong>Stop Sync:</strong> Disable the add-on to stop all data
              processing
            </li>
            <li>
              <strong>No Data Portability:</strong> Since we don't store data,
              there's nothing to export
            </li>
            <li>
              <strong>Complete Removal:</strong> Uninstall the add-on to
              completely stop all data access
            </li>
          </ul>
        </section>

        <section className="content-section">
          <h3>8. Third-Party Services</h3>
          <p>
            Our service integrates with Google Calendar and Slack. Your data is
            subject to their privacy policies:
          </p>
          <ul>
            <li>
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Privacy Policy
              </a>{" "}
              - Controls your calendar data
            </li>
            <li>
              <a
                href="https://slack.com/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Slack Privacy Policy
              </a>{" "}
              - Controls your Slack workspace data
            </li>
          </ul>
          <p>
            <strong>Note:</strong> Custom Slack status messages are stored in
            your Google Calendar event descriptions, so they're subject to
            Google's privacy policy.
          </p>
        </section>

        <section className="content-section">
          <h3>9. Children's Privacy</h3>
          <p>
            Our service is not intended for children under 13 years of age. We
            do not knowingly collect or process personal information from
            children under 13. If you are a parent or guardian and believe your
            child has provided us with personal information, please contact us.
          </p>
        </section>

        <section className="content-section">
          <h3>10. International Data Transfers</h3>
          <p>
            Since we don't store your data, there are no international data
            transfers from our servers. However, your data may be transferred
            internationally by Google and Slack according to their respective
            privacy policies.
          </p>
        </section>

        <section className="content-section">
          <h3>11. Changes to This Privacy Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any material changes by posting the new Privacy Policy on
            this page and updating the "Last updated" date. Your continued use
            of our service after such changes constitutes acceptance of the
            updated policy.
          </p>
        </section>

        <section className="content-section">
          <h3>12. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy or our data
            practices, please contact us at:
          </p>
          <ul>
            <li>Email: milanv.thakor@gmail.com</li>
            <li>
              GitHub:{" "}
              <a
                href="https://github.com/milanvthakor/slaster"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/milanvthakor/slaster
              </a>
            </li>
          </ul>
        </section>

        <section className="content-section">
          <h3>13. Compliance with Google Add-on Requirements</h3>
          <p>
            This privacy policy complies with Google Add-on app publishing
            requirements, including:
          </p>
          <ul>
            <li>Clear disclosure that no data is stored on our servers</li>
            <li>Transparency about data access and processing practices</li>
            <li>Information about third-party service dependencies</li>
            <li>User rights and access control options</li>
            <li>Contact information for privacy inquiries</li>
            <li>Compliance with applicable data protection laws</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
