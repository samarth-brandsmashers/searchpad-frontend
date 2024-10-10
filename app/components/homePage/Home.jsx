import React from "react";
import Image from "next/image";
import robo from "@/public/Home/robo.png";
import girl from "@/public/Home/FrameGirl.png";
import style from "@/styles/home/home.module.css";
import rose from "@/public/Home/chart-rose.png";
import mic from "@/public/Home/mic.png";
import note from "@/public/Home/note.png";
import pen from "@/public/Home/pen-tool.png";
import playList from "@/public/Home/play-list.png";
import megaphone from "@/public/Home/megaphone.png";
import webDesign from "@/public/Home/webDesign.png";
import boy from "@/public/Home/Frameboy.png";
const Home = () => {
  return (
    <div className="bg-gray-[ #171717] text-white min-h-screen">
      <header className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold mr-2">⚡</span>
          <span className="text-xl">Searchpad</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li className="text-purple-400">Home</li>
            <li>Products</li>
            <li>About us</li>
            <li>Pricing</li>
          </ul>
        </nav>
        <button className="bg-purple-600 px-4 py-2 rounded-md">
          Start for free
        </button>
      </header>

      <main className="container mx-auto px-4 py-12">
        <h1 className={`${style.heading} font-bold text-center mt-4`}>
          Unleash Creativity with
          <br />
          <span className={`${style.headingspan}`}>AI-Powered Solutions</span>
        </h1>
        <p className="text-center text-[16px] text-[#c9c9c9] font-[400] opacity-90 mt-5 mb-8">
          From video creation to web design, our AI-driven platform simplifies
          and elevates your creative <br /> process.
        </p>
        <div className="flex justify-center mb-12">
          <button
            className={` ${style.button1} px-9 py-3 rounded-[39px] text-[16px]`}
          >
            Start for free
          </button>
        </div>
        <div className={`${style.parent} `}>
          <div className={`${style.first}`}>
            <FeatureCard
              icon={playList}
              title="Video Creation"
              description="Harness AI to instantly generate  engaging videos and short clips with ease."
            />

            <FeatureCard
              icon={megaphone}
              title="Ad Creative"
              description="Create attention-grabbing ads effortlessly with the power of AI."
            />

            <FeatureCard
              icon={note}
              title="Slide Creation"
              description="Generate polished, professional slides instantly with AI assistance."
            />
          </div>
          <div className={`${style.second} `}>
            <div className={`${style.secondA} ${style.imgBox}`}>
              <Image
                src={robo}
                alt="robo"
                width={300}
                height={300}
                className={`${style.imgBox} rounded-lg `}
              />
            </div>

            <FeatureCard
              icon={rose}
              title="Data Visualization"
              description="Transform raw data into visually clear insights, powered by AI."
            />
          </div>
          <div className={`${style.third} `}>
            <FeatureCard
              icon={mic}
              title="Voiceover"
              description="Let AI produce perfectly tailored voiceovers for your content in seconds."
            />

            <FeatureCard
              icon={webDesign}
              title="Website Design"
              description="Use AI to design beautiful, user-friendly websites in no time."
            />

            <FeatureCard
              icon={pen}
              title="Graphic Design"
              description="AI generates stunning ads and designs that captivate and elevate your brand."
            />
          </div>
        </div>

        <div className={`${style.bigtext} text-center  `}>Quick, Simple</div>
        <div className={`${style.bigCard} mx-auto`}>
          <div className={`${style.bigCardDivOne}`}>
            <li className={`${style.listitem}`}>Image Creation</li>
            <li className={`${style.listitem}`}>Video Creation</li>
            <li className={`${style.listitem}`}>Voice Creation</li>
            <li className={`${style.listitem}`}>Idea Generation</li>
            <li className={`${style.listitem}`}>Document Creation</li>
          </div>
          <div className={`${style.bigCardDivTwo}`}>
            <div className={`${style.bigCardDivinnerIOne}`}>
              <h3 className="text-[1.75rem] text-[#c9c9c9] leading-[36px]">
                Instant video creation <br /> and editing
              </h3>
              <p className="text-[0.875rem] text-[#c8c8c8]">
                Create and edit videos effortlessly with our instant <br />{" "}
                tools, designed for fast, high-quality results <br /> tailored
                to your needs.
              </p>
              <div className={`${style.innerOneA}`}>
                <div className={`${style.innerOneAboxes}`}>
                  <p>Short / Reel Creator</p>
                </div>
                <div className={`${style.innerOneAboxes}`}>
                  <p>Add captions to video/Audio</p>
                </div>
                <div className={`${style.innerOneAboxes}`}>
                  <p>Audio to video converter</p>
                </div>
                <div className={`${style.innerOneAboxes}`}>
                  <p>Artical to video converter</p>
                </div>
                <div className={`${style.innerOneAboxes}`}>
                  <p> Add caption to video</p>
                </div>
                <div className={`${style.innerOneAboxes}`}>
                  <p>Silent video commenter</p>
                </div>
              </div>
            </div>
            <div className={`${style.bigCardDivinnerITwo}`}>
              <Image
                src={boy}
                alt="robo"
                width={720}
                height={576}
                className={` rounded-[8px] `}
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className={`${style.bigCard} mx-auto`}>
          <div className={`${style.bigCardDivOne}`}>
            <li className={`${style.listitem}`}>Website design</li>
            <li className={`${style.listitem}`}>Graphic design</li>
            <li className={`${style.listitem}`}>Ad Creatives</li>
            <li className={`${style.listitem}`}>Slide creation</li>
            <li className={`${style.listitem}`}>Data Visualization</li>
          </div>
          <div className={`${style.bigCardDivTwo}`}>
            <div className={`${style.bigCardDivinnerITwo}`}>
              <Image
                src={girl}
                alt="robo"
                width={720}
                height={576}
                className={` rounded-[8px] `}
              />
            </div>
            <div className={`${style.bigCardDivinnerIOne}`}>
              <h3 className="text-[1.75rem] text-[#c9c9c9] leading-[36px]">
                Instant video creation <br /> and editing
              </h3>
              <p className="text-[0.875rem] text-[#c8c8c8]">
                Create and edit videos effortlessly with our instant <br />{" "}
                tools, designed for fast, high-quality results <br /> tailored
                to your needs.
              </p>
              <div className={`${style.innerOneA}`}>
                <div className={`${style.innerOneAboxes}`}>
                  <p>Build in Minutes</p>
                </div>
                <div className={`${style.innerOneAboxes}`}>
                  <p>Instant Publishing</p>
                </div>
                <div className={`${style.innerOneAboxes}`}>
                  <p>Easy Edits</p>
                </div>
                <div className={`${style.innerOneAboxes}`}>
                  <p>No Coding Needed</p>
                </div>
                <div className={`${style.innerOneAboxes}`}>
                  <p> Mobile Ready</p>
                </div>
                <div className={`${style.innerOneAboxes}`}>
                  <p>Custom Templates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className={`${style.midtext} text-center mt-4`}>
          Engineered for Your <br /> Brand's Essence
        </p>

        <div className={`${style.fourthSection}`}>
          <div></div>
          <div></div>
        </div>
      </main>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div
    className={`${style.box} bg-[#1C1C1C] flex justify-center items-center gap-[24px] p-10 rounded-[24px]`}
  >
    <div className="">
      <Image
        src={icon}
        alt="robo"
        width={56}
        height={56}
        className="rounded-lg mr-1"
      />
    </div>
    <div className="flex flex-col gap-[8px">
      <p className="font-bold text-[16px] ">{title}</p>
      <p className="text-[13px] text-gray-400">{description}</p>
    </div>
  </div>
);

// Icon components

export default Home;
