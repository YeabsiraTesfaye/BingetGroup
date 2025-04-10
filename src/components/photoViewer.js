import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const PhotoViewerAlbum = ({ media }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % media.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const currentMedia = media[currentIndex];

  return (
    <div className="relative w-full max-w-3xl h-[500px] mx-auto overflow-hidden rounded-2xl shadow-lg">
      <AnimatePresence custom={direction} mode="wait">
        {currentMedia.type === "image" ? (
          <motion.img
            key={`img-${currentIndex}`}
            src={currentMedia.src}
            alt={`Media ${currentIndex + 1}`}
            className="absolute w-full h-full object-cover"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
          />
        ) : (
          <motion.video
            key={`video-${currentIndex}`}
            src={currentMedia.src}
            className="absolute w-full h-full object-cover"
            autoPlay
            controls
            loop
            muted
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
      >
        <ArrowLeft />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default PhotoViewerAlbum;
