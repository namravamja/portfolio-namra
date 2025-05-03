"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import SocialLinks from "./SocialLinks";

const ContactInfo = () => {
  return (
    <motion.div
      variants={{
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
      }}
      className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-white/50 flex flex-col justify-between transform-gpu transition-all duration-300"
    >
      <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
        <span>Let&apos;s Collaborate</span>
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
        Want to start a project, collaborate on something cool, or just want to
        say hi? Reach out directly:
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
          <span className="text-xs sm:text-base md:text-base xl:text-base lg:text-2xl">
            namravamja00@gmail.com
          </span>
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
      <SocialLinks />
    </motion.div>
  );
};

export default ContactInfo;
