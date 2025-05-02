import { generatePageMetadata } from "@/utils/metadata";
import ContactPage from "./components/ContactPage";

const Contact = () => {
  return <ContactPage />;
};

export const metadata = generatePageMetadata("Contact");
export default Contact;
