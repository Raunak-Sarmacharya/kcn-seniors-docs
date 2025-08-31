'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface VideoTutorial {
  id: string;
  title: string;
  description: string;
  videoId: string;
  duration: string;
  difficulty: string;
  shortDesc: string;
}

const videoTutorials: VideoTutorial[] = [
  {
    id: '1',
    title: 'Volunteer Task Assignment',
    description: 'Learn the complete process of assigning new volunteer tasks, including the full task acceptance flow and detailed workflow management. This tutorial covers dashboard navigation, task creation, volunteer matching, and the complete coordination process.',
    videoId: '1114699885',
    duration: '8 minutes',
    difficulty: 'Beginner',
    shortDesc: 'Complete workflow guide for volunteer task management'
  },
          {
          id: '2',
          title: 'Event Management Tutorial',
          description: 'Learn how to create and manage events in the KCN Seniors system. This tutorial covers the complete event creation workflow, including making events open for all users and managing event bookings.',
          videoId: '1114706019',
          duration: '6 minutes',
          difficulty: 'Beginner',
          shortDesc: 'Creating and managing events with complete workflow'
        },
          {
          id: '3',
          title: 'Event Types Management Tutorial',
          description: 'Learn how to manage event types and categories in EventPrime. This tutorial covers creating, organizing, and managing event categories for better event organization and role-based styling.',
          videoId: '1114708909',
          duration: '5 minutes',
          difficulty: 'Beginner',
          shortDesc: 'Managing event types and categories in EventPrime'
        },
        {
          id: '4',
          title: 'EventPrime Dashboard Overview',
          description: 'Learn about the EventPrime plugin dashboard options and capabilities. This tutorial provides a brief overview of what you can do with EventPrime and how to navigate the dashboard interface.',
          videoId: '1114712978',
          duration: '4 minutes',
          difficulty: 'Beginner',
          shortDesc: 'EventPrime dashboard overview and options'
        },
        {
          id: '5',
          title: 'User Management Basics',
          description: 'Learn the basics of user management for KCN Seniors, including changing user roles, adding volunteer tags, and managing role permissions through the Members plugin. This tutorial covers essential user administration tasks.',
          videoId: '1114714099',
          duration: '7 minutes',
          difficulty: 'Beginner',
          shortDesc: 'User roles, volunteer tags, and permissions management'
        }
];

export default function VideoTutorials() {
  const [activeVideo, setActiveVideo] = useState<VideoTutorial>(videoTutorials[0]);

  const handleVideoSelect = (video: VideoTutorial) => {
    if (video.videoId) {
      setActiveVideo(video);
    }
  };

  return (
    <div className="video-tutorials-container">
      {/* Video Player Section */}
      <div className="video-player-section">
        <div className="video-player-container">
          <div id="main-video-player" className="main-video-player">
            <div className="video-iframe-container">
              <iframe 
                id="video-iframe"
                src={`https://player.vimeo.com/video/${activeVideo.videoId}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title={activeVideo.title}
              />
            </div>
          </div>
          
          {/* Video Description */}
          <div id="video-description" className="video-description">
            <h3 id="current-video-title">{activeVideo.title}</h3>
            <p id="current-video-desc">{activeVideo.description}</p>
          </div>
        </div>
      </div>

      {/* Video List Section */}
      <div className="video-list-section">
        <div className="video-list-container">
          <h3>Available Tutorials</h3>
          <div className="video-list">
            {videoTutorials.map((video) => (
                             <motion.div
                 key={video.id}
                 className={`video-item ${!video.videoId ? 'coming-soon' : ''} ${activeVideo.id === video.id ? 'active' : ''}`}
                 onClick={() => handleVideoSelect(video)}
                 whileTap={video.videoId ? { scale: 0.98 } : {}}
               >
                <div className="video-item-number">{video.id}</div>
                <div className="video-item-content">
                  <h4>{video.title}</h4>
                  <p>{video.shortDesc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
