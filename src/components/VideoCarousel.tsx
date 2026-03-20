import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const DUMMY_VIDEOS = [
  { id: 1, url: 'https://www.w3schools.com/html/mov_bbb.mp4', thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop' },
  { id: 2, url: 'https://www.w3schools.com/html/mov_bbb.mp4', thumbnail: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop' },
  { id: 3, url: 'https://www.w3schools.com/html/mov_bbb.mp4', thumbnail: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055ce?q=80&w=800&auto=format&fit=crop' },
  { id: 4, url: 'https://www.w3schools.com/html/mov_bbb.mp4', thumbnail: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=800&auto=format&fit=crop' },
  { id: 5, url: 'https://www.w3schools.com/html/mov_bbb.mp4', thumbnail: 'https://images.unsplash.com/photo-1611162617263-47306e769a9a?q=80&w=800&auto=format&fit=crop' },
];

export const VideoCarousel = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(2);
  const [playingId, setPlayingId] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % DUMMY_VIDEOS.length;
    setCurrentIndex(nextIndex);
    const nextId = DUMMY_VIDEOS[nextIndex].id;
    if (playingId !== null) {
      videoRefs.current[playingId]?.pause();
    }
    videoRefs.current[nextId]?.play();
    setPlayingId(nextId);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + DUMMY_VIDEOS.length) % DUMMY_VIDEOS.length;
    setCurrentIndex(prevIndex);
    const prevId = DUMMY_VIDEOS[prevIndex].id;
    if (playingId !== null) {
      videoRefs.current[playingId]?.pause();
    }
    videoRefs.current[prevId]?.play();
    setPlayingId(prevId);
  };

  const handlePlay = (id: number) => {
    if (playingId === id) {
      videoRefs.current[id]?.pause();
      setPlayingId(null);
    } else {
      if (playingId !== null) {
        videoRefs.current[playingId]?.pause();
      }
      videoRefs.current[id]?.play();
      setPlayingId(id);
      
      const index = DUMMY_VIDEOS.findIndex(v => v.id === id);
      if (index !== -1 && index !== currentIndex) {
        setCurrentIndex(index);
      }
    }
  };

  const getPositionStyles = (index: number) => {
    const diff = (index - currentIndex + DUMMY_VIDEOS.length) % DUMMY_VIDEOS.length;
    let offset = diff;
    if (diff > 2) offset = diff - DUMMY_VIDEOS.length;

    const isCenter = offset === 0;
    
    // Adjust spacing for mobile vs desktop
    const x = offset * 90; 
    const scale = isCenter ? 1 : 0.8 - Math.abs(offset) * 0.1;
    const zIndex = 10 - Math.abs(offset);
    const opacity = Math.abs(offset) > 2 ? 0 : 1;
    const rotateY = offset * -15;

    return {
      x: `${x}%`,
      scale,
      zIndex,
      opacity,
      rotateY,
    };
  };

  return (
    <section className="py-24 bg-[#050505] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#8cc63f]" />
          <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">Featured Videos</span>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-display font-bold mb-6"
        >
          Watch Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8cc63f] to-[#b4f066]">Recent Reels</span>
        </motion.h2>
      </div>

      <div className="relative h-[450px] md:h-[600px] max-w-6xl mx-auto flex items-center justify-center">
        <button 
          onClick={handlePrev}
          className="absolute left-4 md:left-12 z-50 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#8cc63f] hover:text-black transition-colors backdrop-blur-md"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="relative w-[220px] md:w-[320px] h-[390px] md:h-[570px] perspective-[1200px] flex items-center justify-center">
          {DUMMY_VIDEOS.map((video, index) => {
            const styles = getPositionStyles(index);
            const isCenter = currentIndex === index;
            const isPlaying = playingId === video.id;

            return (
              <motion.div
                key={video.id}
                className="absolute w-full h-full rounded-2xl border-4 border-white overflow-hidden shadow-2xl bg-black cursor-pointer group"
                animate={{
                  x: styles.x,
                  scale: styles.scale,
                  zIndex: styles.zIndex,
                  opacity: styles.opacity,
                  rotateY: styles.rotateY,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onClick={() => handlePlay(video.id)}
              >
                <video
                  ref={(el) => (videoRefs.current[video.id] = el)}
                  src={video.url}
                  className="w-full h-full object-cover"
                  loop
                  playsInline
                />
                
                {!isPlaying && (
                  <>
                    <img 
                      src={video.thumbnail} 
                      alt="Thumbnail" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
                        <Play className="w-8 h-8 text-[#8cc63f] ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>

        <button 
          onClick={handleNext}
          className="absolute right-4 md:right-12 z-50 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#8cc63f] hover:text-black transition-colors backdrop-blur-md"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};
