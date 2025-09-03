// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Confetti from "react-confetti";

// export default function App() {
//   const [confetti, setConfetti] = useState(false);
//   const [audio, setAudio] = useState(null);

//   useEffect(() => {
//     // Load audio
//     const song = new Audio("/Happy Birthday Song.mp3");
//     song.loop = true; // repeat
//     song.volume = 0.8;
//     setAudio(song);

//     // Try autoplay
//     song.play().catch(() => {
//       console.log("Autoplay blocked, will play on button click 🎶");
//     });
//   }, []);

//   const playSong = () => {
//     if (audio) {
//       audio.play();
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500 text-white relative overflow-hidden">
//       {/* Confetti */}
//       {confetti && <Confetti />}

//       {/* Floating Balloons */}
//       <motion.div
//         className="absolute top-10 left-10 w-16 h-24 bg-pink-500 rounded-full"
//         animate={{ y: [0, -50, 0] }}
//         transition={{ duration: 3, repeat: Infinity }}
//       />
//       <motion.div
//         className="absolute top-20 right-16 w-16 h-24 bg-purple-500 rounded-full"
//         animate={{ y: [0, -60, 0] }}
//         transition={{ duration: 2.5, repeat: Infinity }}
//       />

//       {/* Girl's Photo */}
//       <motion.img
//         src="/Khusii 2.jpg"
//         alt="Birthday Girl"
//         className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-yellow-300 shadow-xl object-cover"
//         initial={{ scale: 0, opacity: 0 }}
//         animate={{ scale: 1, opacity: 2, y: [0, -10, 0] }}
//         transition={{
//           duration: 3,
//           repeat: 10,
//           repeatType: "mirror",
//         }}
//         // transition={{ delay: 1, duration: 1 }}
//       />

//       {/* Heading */}
//       <motion.h1
//         className="text-4xl md:text-6xl font-extrabold mt-6 drop-shadow-lg"
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 1.2, type: "spring" }}
//       >
//         🎂 Happy Birthday, <span className="text-yellow-300"> Khusuuu </span> 🎉
//       </motion.h1>

//       {/* Message */}
//       <motion.p
//         className="mt-4 text-lg md:text-2xl max-w-xl text-center font-light"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1, duration: 1 }}
//       >
//         May your day sparkle with joy, laughter, and endless love.  
//         You deserve the happiest moments today 💖✨
//       </motion.p>

//       {/* Celebrate Button */}
//       <motion.button
//         className="mt-8 px-8 py-3 bg-yellow-400 text-black font-bold rounded-2xl shadow-lg hover:bg-yellow-500 transition"
//         whileTap={{ scale: 0.9 }}
//         onClick={() => {
//           setConfetti(true);
//           playSong();
//         }}
//       >
//         🎊 Celebrate 🎊
//       </motion.button>
//     </div>
//   );
// }


// 2nd
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Confetti from "react-confetti";

// export default function App() {
//   const [confetti, setConfetti] = useState(false);
//   const [audio, setAudio] = useState(null);

//   useEffect(() => {
//     // Load audio
//     const song = new Audio("/Happy Birthday Song.mp3");
//     song.loop = true;
//     song.volume = 0.8;
//     setAudio(song);

//     // Try autoplay
//     song.play().catch(() => {
//       console.log("Autoplay blocked, will play on button click 🎶");
//     });
//   }, []);

//   const playSong = () => {
//     if (audio) {
//       audio.play();
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500 text-white relative overflow-hidden">
//       {/* Confetti */}
//       {confetti && <Confetti />}

//       {/* Floating Balloons */}
//       <motion.div
//         className="absolute top-10 left-10 w-16 h-24 bg-pink-500 rounded-full"
//         animate={{ y: [0, -50, 0] }}
//         transition={{ duration: 3, repeat: Infinity }}
//       />
//       <motion.div
//         className="absolute top-20 right-16 w-16 h-24 bg-purple-500 rounded-full"
//         animate={{ y: [0, -60, 0] }}
//         transition={{ duration: 2.5, repeat: Infinity }}
//       />

//       {/* 🌈 Animated Glowing Border with Photo */}
//       <motion.div
//         className="relative w-44 h-44 md:w-60 md:h-60 rounded-full p-1 bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 animate-spin-slow"
//       >
//         <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 blur-lg opacity-75"></div>
//         <motion.img
//           src="/Khusii 2.jpg"
//           alt="Birthday Girl"
//           className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-xl"
//           initial={{ scale: 0, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1, y: [0, -10, 0] }}
//           transition={{
//             duration: 1.5,
//             repeat: Infinity,
//             repeatType: "mirror",
//           }}
//         />
//       </motion.div>

//       {/* Heading */}
//       <motion.h1
//         className="text-4xl md:text-6xl font-extrabold mt-6 drop-shadow-lg"
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 1.2, type: "spring" }}
//       >
//         🎂 Happy Birthday, <span className="text-yellow-300">Ananya</span> 🎉
//       </motion.h1>

//       {/* Message */}
//       <motion.p
//         className="mt-4 text-lg md:text-2xl max-w-xl text-center font-light"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1, duration: 1 }}
//       >
//         May your day sparkle with joy, laughter, and endless love.  
//         You deserve the happiest moments today 💖✨
//       </motion.p>

//       {/* Celebrate Button */}
//       <motion.button
//         className="mt-8 px-8 py-3 bg-yellow-400 text-black font-bold rounded-2xl shadow-lg hover:bg-yellow-500 transition"
//         whileTap={{ scale: 0.9 }}
//         onClick={() => {
//           setConfetti(true);
//           playSong();
//         }}
//       >
//         🎊 Celebrate 🎊
//       </motion.button>
//     </div>
//   );
// }


//3rd
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

export default function App() {
  const [confetti, setConfetti] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    // Load audio
    const song = new Audio("/Happy Birthday Song.mp3");
    song.loop = true;
    song.volume = 0.8;
    setAudio(song);

    // Try autoplay
    song.play().catch(() => {
      console.log("Autoplay blocked, will play on button click 🎶");
    });
  }, []);

  const playSong = () => {
    if (audio) audio.play();
  };
  const sparkles = Array.from({ length: 12 });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500 text-white relative overflow-hidden">
      {/* Confetti */}
      {confetti && <Confetti />}

      {/* Floating Balloons */}
      <motion.div
        className="absolute top-10 left-10 w-16 h-24 bg-pink-500 rounded-full"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-20 right-16 w-16 h-24 bg-purple-500 rounded-full"
        animate={{ y: [0, -60, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />

      {/* 🌈 Animated Glowing Border with Photo */}
      <motion.div className="relative w-44 h-44 md:w-60 md:h-60 rounded-full p-1 bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 animate-spin-slow">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 blur-lg opacity-75"></div>
        <motion.img
          src="/Bibhu 9.jpg"
          alt="Birthday Girl"
          className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, y: [0, -10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />

        {/* ✨ Sparkles around photo */}
        {sparkles.map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full shadow-md"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold mt-6 drop-shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, type: "spring" }}
      >
        🎂 Advance Happy Birthday, <span className="text-yellow-300"> Me..😊 </span> 🎉
      </motion.h1>

      {/* Message */}
      <motion.p
        className="mt-4 text-lg md:text-2xl max-w-xl text-center font-light"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        May your day sparkle with joy, laughter, and endless love.  
        You deserve the happiest moments. 💖✨
      </motion.p>

      {/* Celebrate Button */}
      <motion.button
        className="mt-8 px-8 py-3 bg-yellow-400 text-black font-bold rounded-2xl shadow-lg hover:bg-yellow-500 transition"
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setConfetti(true);
          playSong();
        }}
      >
        🎊 Celebrate 🎊
      </motion.button>
    </div>
  );
}
