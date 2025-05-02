import type { Metadata } from "next";

export const generatePageMetadata = (
  pageTitle: string,
  pageDescription?: string
): Metadata => {
  return {
    title: `Namra Vamja | ${pageTitle} `,
    description:
      pageDescription ||
      "Portfolio of Namra Vamja showcasing work, skills, and projects.",
  };
};
