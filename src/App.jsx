import React from 'react';
import Card from './Card';
import './index.css';

const events = [
  { title: "CyberQuest 2077 Release", category: "Game Release", description: "Next-gen RPG launching June 2025" },
  { title: "Streamer: PixelHero", category: "Streamer", description: "Watch PixelHero's daily retro gaming streams" },
  { title: "World Fighters League 2025", category: "Tournament", description: "Annual fighting game championship" },
  { title: "VR Gamers Meetup", category: "Event", description: "Local VR gaming meetup (July 2025)" },
  { title: "Neo Retro Racing", category: "Game Release", description: "Classic racing game remastered" },
  { title: "Guide: Speedrun MegaDash", category: "Guide", description: "Tips to speedrun MegaDash in under 10 minutes" },
  { title: "Streamer: LadyGameCube", category: "Streamer", description: "Popular platformer game streamer" },
  { title: "Indie Game Expo 2025", category: "Event", description: "Showcasing indie titles (Sep 2025)" },
  { title: "League Champs Tickets", category: "Tournament", description: "LoL World Championship tickets on sale" },
  { title: "Optimal Game Settings", category: "Guide", description: "Best graphics settings for smooth gameplay" },
];

function App() {
  return (
    <>
      <header>Neo Arcade Community Board</header>
      <div className="card-container">
        {events.map((item, idx) => (
          <Card key={idx} item={item} />
        ))}
      </div>
    </>
  );
}

export default App;
