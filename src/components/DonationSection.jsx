import React from 'react';

const DonationSection = () => {
  return (
    <section id="donations" className="donation-section">
      <h2>Support Our Podcast</h2>
      <p>Your contributions help us create more content and keep the Bible Fellowship Podcast going. Any amount is appreciated!</p>
      <form action="https://www.paypal.com/donate" method="post" target="_blank" className="donation-form">
        <button type="submit" className="donation-button">Donate via PayPal</button>
      </form>
    </section>
  );
};

export default DonationSection;
