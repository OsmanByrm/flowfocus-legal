import React from 'react';
import { Link } from 'react-router-dom';

function TermsOfService() {
  return (
    <div className="container">
      <div className="content">
        <header>
          <Link to="/">
            <img src="/logo/AppIcon.png" alt="Flow Focus App Logo" className="logo" />
          </Link>
          <h1>Terms of Service</h1>
          <Link to="/" className="button">← Back to Home</Link>
        </header>
        
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>By downloading, installing, or using the Flow Focus App, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the app.</p>
          
          <h2>2. Description of Service</h2>
          <p>Flow Focus App is a productivity tool designed to help users manage their time effectively using the Pomodoro technique and other focus methods. The app provides timing functionality, statistics tracking, and other related features.</p>
          
          <h2>3. Use of the Service</h2>
          <p>You agree to use the app only for lawful purposes and in a way that does not infringe upon the rights of others or inhibit their use of the app. You are responsible for all activities that occur under your device.</p>
          
          <h2>4. Premium Features and Subscriptions</h2>
          <p>Flow Focus App may offer premium features available for purchase. Purchases are processed through the Apple App Store and are subject to their terms and conditions. Premium features are non-transferable and may be modified or discontinued at our discretion.</p>
          
          <div className="subscription-info" style={{
            backgroundColor: "rgba(58, 123, 213, 0.1)",
            borderLeft: "4px solid #3a7bd5",
            padding: "15px",
            borderRadius: "0 8px 8px 0",
            margin: "20px 0"
          }}>
            <h3>Subscription Information</h3>
            <p>We offer the following subscription options:</p>
            <table style={{
              width: "100%",
              borderCollapse: "collapse",
              margin: "20px 0",
              border: "1px solid #ddd"
            }}>
              <thead>
                <tr>
                  <th style={{padding: "12px", textAlign: "left", backgroundColor: "rgba(58, 123, 213, 0.1)", border: "1px solid #ddd"}}>Subscription</th>
                  <th style={{padding: "12px", textAlign: "left", backgroundColor: "rgba(58, 123, 213, 0.1)", border: "1px solid #ddd"}}>Duration</th>
                  <th style={{padding: "12px", textAlign: "left", backgroundColor: "rgba(58, 123, 213, 0.1)", border: "1px solid #ddd"}}>Features</th>
                  <th style={{padding: "12px", textAlign: "left", backgroundColor: "rgba(58, 123, 213, 0.1)", border: "1px solid #ddd"}}>Renewal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{padding: "12px", textAlign: "left", border: "1px solid #ddd"}}>Monthly Premium</td>
                  <td style={{padding: "12px", textAlign: "left", border: "1px solid #ddd"}}>1 month</td>
                  <td style={{padding: "12px", textAlign: "left", border: "1px solid #ddd"}}>Ad-free experience</td>
                  <td style={{padding: "12px", textAlign: "left", border: "1px solid #ddd"}}>Auto-renews monthly unless canceled</td>
                </tr>
                <tr>
                  <td style={{padding: "12px", textAlign: "left", border: "1px solid #ddd"}}>Yearly Premium</td>
                  <td style={{padding: "12px", textAlign: "left", border: "1px solid #ddd"}}>1 year</td>
                  <td style={{padding: "12px", textAlign: "left", border: "1px solid #ddd"}}>Ad-free experience, save 36% vs monthly</td>
                  <td style={{padding: "12px", textAlign: "left", border: "1px solid #ddd"}}>Auto-renews yearly unless canceled</td>
                </tr>
                <tr>
                  <td style={{padding: "12px", textAlign: "left", border: "1px solid #ddd"}}>Lifetime Premium</td>
                  <td style={{padding: "12px", textAlign: "left", border: "1px solid #ddd"}}>Unlimited</td>
                  <td style={{padding: "12px", textAlign: "left", border: "1px solid #ddd"}}>Ad-free experience</td>
                  <td style={{padding: "12px", textAlign: "left", border: "1px solid #ddd"}}>One-time purchase, no renewal</td>
                </tr>
              </tbody>
            </table>
            <p><strong>Payment:</strong> Payment will be charged to your Apple ID account at confirmation of purchase.</p>
            <p><strong>Auto-Renewal:</strong> Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current period.</p>
            <p><strong>Manage Subscriptions:</strong> You can manage your subscriptions and turn off auto-renewal in your Account Settings in the App Store after purchase.</p>
            <p><strong>Cancellation:</strong> You cannot cancel the current subscription during the active subscription period.</p>
            <p><strong>Free Trial:</strong> Any unused portion of a free trial period, if offered, will be forfeited when you purchase a subscription.</p>
          </div>
          
          <h2>5. Privacy</h2>
          <p>Our Privacy Policy explains how we collect, use, and protect your information. By using the app, you agree to our <Link to="/privacy-policy" style={{color: "#3a7bd5"}}>Privacy Policy</Link>.</p>
          
          <h2>6. Intellectual Property</h2>
          <p>The app, including all content, features, and functionality, is owned by Flow Focus App and is protected by international copyright, trademark, and other intellectual property laws.</p>
          
          <h2>7. Disclaimer of Warranties</h2>
          <p>The app is provided "as is" without warranties of any kind, either express or implied. We do not guarantee that the app will be error-free or uninterrupted.</p>
          
          <h2>8. Limitation of Liability</h2>
          <p>In no event shall Flow Focus App be liable for any indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of the app.</p>
          
          <h2>9. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Continued use of the app after changes constitutes acceptance of the new terms.</p>
          
          <h2>10. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at: flowfocusapp@gmail.com</p>
          
          <p className="updated-date">Last Updated: April 7, 2025</p>
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

export default TermsOfService; 