import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../logo/AppIcon.png';

function PrivacyPolicy() {
  return (
    <div className="container">
      <div className="content">
        <header>
          <Link to="/">
            <img src={logoImage} alt="Flow Focus App Logo" className="logo" />
          </Link>
          <h1>Privacy Policy</h1>
          <Link to="/" className="button">← Back to Home</Link>
        </header>
        
        <section>
          <h2>Introduction</h2>
          <p>At Flow Focus App, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our Flow Focus App.</p>
          <p>We do not collect personal identification information unless you voluntarily provide it to us.</p>
          
          <h2>Information We Collect</h2>
          <ul>
            <li><strong>Usage Data:</strong> We may collect anonymous usage statistics to improve our app functionality.</li>
            <li><strong>Device Information:</strong> Basic information about your device to ensure compatibility and optimal performance.</li>
            <li><strong>Calendar Data:</strong> Only if you enable calendar sync feature (with your explicit permission).</li>
            <li><strong>Local Data:</strong> Your flow sessions, statistics, and settings are stored locally on your device.</li>
            <li><strong>Payment Information:</strong> We do not collect or store your payment information. All payments are processed securely through the App Store.</li>
          </ul>
          
          <h2>How We Use Your Information</h2>
          <ul>
            <li>To provide and maintain our service</li>
            <li>To improve your user experience</li>
            <li>To enable specific features you choose to use (like calendar integration)</li>
            <li>To analyze usage patterns and optimize our app</li>
            <li>To process your in-app purchases and subscriptions</li>
            <li>To manage your subscription status and renewal</li>
          </ul>
          
          <h2>Data Storage</h2>
          <p>Most of your data is stored locally on your device. If you choose to enable cloud backup features, your data will be stored securely in your personal iCloud account, which is controlled by Apple's privacy practices.</p>
          
          <h2>Third-Party Services</h2>
          <p>Our app may integrate with third-party services:</p>
          <ul>
            <li>Apple services (iCloud, Calendar)</li>
            <li>App Store (for in-app purchases and subscriptions)</li>
            <li>Analytics tools</li>
          </ul>
          <p>Each third-party service has its own privacy policy and terms of use.</p>
          
          <h2>Your Choices</h2>
          <p>You can:</p>
          <ul>
            <li>Choose not to enable optional features that require data access</li>
            <li>Reset all app data via the Settings screen</li>
            <li>Disable notifications at any time</li>
            <li>Manage your subscriptions through your App Store account settings</li>
            <li>Contact us with any privacy concerns</li>
          </ul>

          <h2>Subscription Information</h2>
          <p>Our app offers the following subscription options:</p>
          <ul>
            <li>Monthly Premium: $0.79/month</li>
            <li>Yearly Premium: $5.99/year (Save 36%)</li>
            <li>Lifetime Access: $14.99 (one-time purchase)</li>
          </ul>
          <p>All subscriptions automatically renew unless canceled 24 hours before the renewal date. You can manage or cancel your subscriptions in your App Store account settings.</p>
          
          <h2>Changes to This Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
          
          <p className="updated-date">Last Updated: March 2025</p>
        </section>
        
        <div className="contact-section" style={{
          marginTop: "40px",
          padding: "20px",
          backgroundColor: "rgba(58, 123, 213, 0.1)",
          borderRadius: "10px",
          textAlign: "center"
        }}>
          <h2>Contact Us</h2>
          <p>Have questions or feedback? We'd love to hear from you!</p>
          <a href="mailto:flowfocusapp@gmail.com" 
             style={{
               display: "inline-block",
               margin: "10px 0",
               padding: "12px 25px",
               background: "linear-gradient(135deg, #3a7bd5 0%, #00d2ff 100%)",
               color: "white",
               textDecoration: "none",
               borderRadius: "30px",
               fontWeight: "500",
               boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)"
             }}>
            Email Us: flowfocusapp@gmail.com
          </a>
        </div>
        
        <footer>
          <p>&copy; {new Date().getFullYear()} Flow Focus App. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default PrivacyPolicy; 