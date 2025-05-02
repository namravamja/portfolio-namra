"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
  hoverEmoji: string;
}

interface SocialLinksProps {
  links?: SocialLink[];
}

export const defaultSocialLinks: SocialLink[] = [
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

const SocialLinks: React.FC<SocialLinksProps> = ({ 
  links = defaultSocialLinks 
}) => {
  return (
    <div className="flex flex-wrap gap-4">
      {links.map((link) => (
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
  );
};

export default SocialLinks;