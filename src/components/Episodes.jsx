import React from 'react';

export const Episodes = () => (
  <section id="episodes">
    <h2>Podcast Episodes</h2>
    <div className="episode-list">
      <div className="episode">
        <h3>Episode 1: Finding Peace in Faith</h3>
        <audio controls>
          <source src="episode1.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p>In this episode, we explore finding peace through scripture.</p>
      </div>
      <div className="episode">
        <h3>Episode 2: Understanding Forgiveness</h3>
        <audio controls>
          <source src="episode2.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p>A discussion on forgiveness and its role in the Christian faith.</p>
      </div>
    </div>
  </section>
);
