import Image from "next/image";
import ToolsHomeSidebar from "./components/sidebars/ToolsHomeSidebar";
import VideoCreationPage from "./components/sidebars/VideoCreations";

export default function Home() {
  return (
    <div>
      {/* <ToolsHomeSidebar/> */}
       <VideoCreationPage/>
    </div>
  );
}
