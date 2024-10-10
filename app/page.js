import Image from "next/image";
import ToolsHomeSidebar from "./components/sidebars/ToolsHomeSidebar";
import VideoCreationPage from "./components/sidebars/VideoCreations";
import GraphicDesign from "./components/GraphicDesign/GraphicDesign";

export default function Home() {
  return (
    <div>
    {/*  <ToolsHomeSidebar/>
      <VideoCreationPage/> */}
      <GraphicDesign/>
    </div>
  );
}
