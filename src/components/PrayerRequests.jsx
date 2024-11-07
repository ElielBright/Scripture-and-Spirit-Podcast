import React from 'react';

export const PrayerRequests = () => (
  <section id="prayer-requests">
    <h2>Prayer Requests</h2>
    <form>
      <label htmlFor="request">Your Prayer Request:</label>
      <textarea id="request" rows="4" autoComplete="off"></textarea>
      <button type="submit">Submit</button>
    </form>
  </section>
);
