import { generatePageMetadata } from "@/utils/metadata";
import Experience from "./components/Experience";

function page() {
  return (
    <div>
      <Experience />
    </div>
  );
}

export const metadata = generatePageMetadata("Experience");
export default page;
