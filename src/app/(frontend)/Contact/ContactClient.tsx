"use client";

import TypewriterEffect from "@/components/TypewriterEffect";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

const Contact = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: <Icon icon="mdi:github" className="h-6 w-6" />,
      color: "hover:text-gray-800 hover:bg-gray-100",
      hoverEmoji: "💻",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: <Icon icon="mdi:linkedin" className="h-6 w-6" />,
      color: "hover:text-blue-600 hover:bg-blue-50",
      hoverEmoji: "🔗",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/yourusername",
      icon: <Icon icon="mdi:instagram" className="h-6 w-6" />,
      color: "hover:text-pink-600 hover:bg-pink-50",
      hoverEmoji: "📸",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: <Icon icon="mdi:twitter" className="h-6 w-6" />,
      color: "hover:text-blue-400 hover:bg-blue-50",
      hoverEmoji: "🐦",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10,
      },
    },
  };

  const backgroundCircles = [
    {
      size: "w-32 h-32",
      color: "bg-green-300/30",
      initialX: "20%",
      initialY: "25%",
    },
    {
      size: "w-48 h-48",
      color: "bg-blue-200/30",
      initialX: "80%",
      initialY: "60%",
    },
    {
      size: "w-24 h-24",
      color: "bg-yellow-200/30",
      initialX: "60%",
      initialY: "15%",
    },
    {
      size: "w-40 h-40",
      color: "bg-purple-200/30",
      initialX: "10%",
      initialY: "70%",
    },
  ];

  return (
    <div className="relative overflow-hidden min-h-screen py-20 md:py-32">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b w-full from-[#d3f9d8]/90 via-[#b5f2b2]/40 to-white backdrop-blur-md z-0" />

      {/* Floating circles */}
      {backgroundCircles.map((circle, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full ${circle.size} ${circle.color} backdrop-blur-lg`}
          initial={{ x: circle.initialX, y: circle.initialY }}
          animate={{
            x: [
              circle.initialX,
              `calc(${circle.initialX} + 3%)`,
              circle.initialX,
            ],
            y: [
              circle.initialY,
              `calc(${circle.initialY} - 4%)`,
              circle.initialY,
            ],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Interactive mouse follower */}
      <motion.div
        className="hidden md:block absolute w-12 h-12 rounded-full bg-purple-400/20 backdrop-blur-sm pointer-events-none z-10"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", damping: 15, stiffness: 150 }}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center">
          <div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-slate-900 mb-8 tracking-tight text-center">
              <TypewriterEffect
                words={["Let's Connect"]}
                className="flex"
                cursorClassName="mt-1 sm:mt-2 lg:mt-3"
                initialDelay={350}
                typingSpeed={200}
                cycleOnce={true}
              />
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 text-center max-w-2xl mb-16">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Let's Collaborate Section */}
              <motion.div
                variants={item}
                className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-white/50 flex flex-col justify-between transform-gpu transition-all duration-300"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <span>Let's Collaborate</span>
                  <motion.span
                    initial={{ rotate: -10 }}
                    animate={{ rotate: 10 }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    ✨
                  </motion.span>
                </h2>
                <p className="text-slate-600 mb-6">
                  Want to start a project, collaborate on something cool, or
                  just want to say hi? Reach out directly:
                </p>
                <div className="space-y-4">
                  <motion.a
                    href="tel:+917984783982"
                    className="flex items-center gap-3 text-violet-900/70 font-medium group p-2 rounded-lg hover:bg-purple-50 transition-all"
                  >
                    <motion.div className="p-2 rounded-full">
                      <Icon icon="material-symbols:call" className="h-6 w-6" />
                    </motion.div>
                    <span>+917984783982</span>
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      className="text-xs bg-purple-100 rounded-full px-2 py-1 text-purple-700 ml-auto"
                    >
                      Call me
                    </motion.span>
                  </motion.a>
                  <a
                    href="mailto:namravamja00@gmail.com"
                    className="flex items-center gap-3 text-violet-900/70 font-medium group p-2 rounded-lg transition-all hover:bg-purple-50"
                  >
                    <motion.div className="bg-purple-100 p-2 rounded-full">
                      <Icon icon="mdi:email-outline" className="h-6 w-6" />
                    </motion.div>
                    <span>namravamja00@gmail.com</span>
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      className="text-xs bg-purple-100 rounded-full px-2 py-1 text-violet-900/70 ml-auto"
                    >
                      Email me
                    </motion.span>
                  </a>
                </div>

                <h3 className="mt-8 text-lg font-semibold text-slate-700 mb-3 flex items-center gap-2">
                  <span>Find me on</span>
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  >
                    🌐
                  </motion.div>
                </h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative bg-white p-3 rounded-full shadow-md transition-all ${link.color} group overflow-hidden`}
                      whileHover={{ y: -8, scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                    >
                      {link.icon}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center opacity-0 bg-white transition-opacity"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <span className="text-lg">{link.hoverEmoji}</span>
                      </motion.div>
                      <span className="sr-only">{link.name}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Message Form Section */}
              <motion.div
                variants={item}
                className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-white/50 flex flex-col justify-between transform-gpu transition-all duration-300"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <span>Send a Message</span>
                  <motion.span
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.2 }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    📝
                  </motion.span>
                </h2>
                <p className="text-slate-600 mb-6">
                  Have a question or want to work together? Drop me a message!
                </p>

                <div className="space-y-4">
                  <div className="group">
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Message
                    </label>
                    <textarea
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none transition-all resize-none"
                      placeholder="Your message here..."
                      rows={4}
                    />
                  </div>
                </div>

                <motion.button
                  className="mt-6 bg-gradient-to-r from-violet-900/70 to-violet-900/70 text-white font-medium py-3 px-6 rounded-xl hover:bg-violet-200 hover:cursor-pointer flex items-center justify-center gap-2 transition-all"
                  whileTap={{ scale: 0.97 }}
                >
                  <span>Send Message</span>
                  <motion.span
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  >
                    <Icon icon="mdi:send" className="h-5 w-5" />
                  </motion.span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
