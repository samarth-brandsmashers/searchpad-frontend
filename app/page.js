import React from "react";
import VoiceOver from "./components/voiceOver/VoiceOver";
import Workspace from "./components/voiceOver/Workspace";
import MyComponent from "./components/voiceOver/MyComponent";
import Home from "./components/homePage/Home";
import Image from "next/image";
import ToolsHomeSidebar from "./components/sidebars/ToolsHomeSidebar";
import VideoCreationPage from "./components/sidebars/VideoCreations";

const page = () => {
  return (
    <div>
      <ToolsHomeSidebar/>
       {/* <VideoCreationPage/> */}
    </div>
  );
};

export default page;
