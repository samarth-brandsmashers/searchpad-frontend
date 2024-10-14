// components/PresentationPage.jsx

import React from "react";
import Image from "next/image";
import { BsStars } from "react-icons/bs";
import { RxDragHandleDots2 } from "react-icons/rx";
import { BsCloudUpload } from "react-icons/bs";
import { RiRobot2Line } from "react-icons/ri";
import styles from "../../../styles/GaphicsDesign/GraphicsTool.module.css";
import { RiRobot2Fill } from "react-icons/ri";
import offerimage from "../../../public/offerimage.png";
import { MdInfoOutline } from "react-icons/md";
import InpuText from "./InputTex";
import imageCreation from "../../../public/imageCreation.png";
import videoCreation from "../../../public/videoCreation.png";
import anime from "../../../public/anime.png";
import visualization from "../../../public/visualization.png";
import voiceover from "../../../public/voiceover.png";
import documents from "../../../public/documents.png";
import robos from "../../../public/robos.png";
import stoke from "../../../public/stoke.png";
import custom from "../../../public/custom.png";
import aiimage from "../../../public/aiimage.png";
import business from "../../../public/business.png";
import education from "../../../public/education.png";
import creative from "../../../public/creative.png";
import arow from '../../../public/graphics/arow.png'

const GraphicsTool = () => {
  return (
    <div className={styles.container}>
      <div className={styles.presentationContainer}>
        <div className={styles.header}>
          <h1>Design engaging presentations effortlessly with AI</h1>
        </div>
        <div className={styles.prompt}>
          <h1>Prompt</h1>
          <textarea
            className={styles.textarea}
            placeholder="A modern slide highlighting the company's mission, vision, and core values, featuring clean icons and bold headings."
          ></textarea>
        </div>
        <div className={styles.regenerate}>
          <BsStars />
          Regenerate Copy
        </div>

        <InpuText />

        {/* <SeparatorWithText text="Prefrences" /> */}
        <div className={styles.brandingGuidelines}>
          <div className={styles.designBranding}>
            <h2>Design Preferences & Branding Guidelines</h2>
            <select className={styles.fontSelects}>          
              <option></option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <p>
            Maintain brand consistency through colors, fonts, logos, and visuals
            for a cohesive, professional presentation.
          </p>

          {/* Color Section */}
          <div className={styles.colorandtypography}>
            <div className={styles.colorSection}>
            
              <div>
              <label>Color</label>
              <input type="text" className={styles.colorInput} />
              </div>
              
              <div className={styles.color}></div>
              <div className={styles.colorDisplay}>
                <div className={styles.primaryColors}>
                  <h3>Primary Colors</h3>
                  <div className={styles.colorblockcontainer}>
                    <div className={styles.colorBlock}>+</div>
                    <div className={styles.colorBlock}>+</div>
                    <div className={styles.colorBlock}>+</div>
                  </div>
                </div>
                <div className={styles.secondaryColors}>
                  <h3>Secondary Colors</h3>
                  <div className={styles.colorblockcontainer}>
                    <div className={styles.colorBlock}>+</div>
                    <div className={styles.colorBlock}>+</div>
                    <div className={styles.colorBlock}>+</div>
                    <div className={styles.colorBlock}>+</div>
                    <div className={styles.colorBlock}>+</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Typography Section */}
            <div className={styles.typographySection}>
              Typography
              <div className={styles.typo}>
                <div className={styles.typography}>
                  <label>Headline (Secondary Font)</label>
                  <select className={styles.fontSelect}>
                    <option>Inter (Bold)</option>
                    <option>Roboto (Bold)</option>
                    <option>Arial (Bold)</option>
                  </select>
                </div>
                <div className={styles.typography}>
                  <label>Body text (Primary Font)</label>
                  <select className={styles.fontSelect}>
                    <option>Inter (Bold)</option>
                    <option>Roboto (Regular)</option>
                    <option>Arial (Regular)</option>
                  </select>
                </div>
              </div>
              <div className={styles.logoUpload}>
                <label>Logo</label>
                <div className={styles.uploadBox}>
                  <BsCloudUpload className={styles.uploadIcon} />
                  <p>
                    Drag & drop or <span>Choose file</span>
                  </p>
                  <p className={styles.uploadNote}>
                    For better result upload: PNG, SVG files
                  </p>
                </div>
              </div>
            </div>
          </div>

      {/* black */}

      <div className={styles.designBranding}>
            <div>
             <h2>Visual Elements</h2>
             <p>
              Use icons, images, and graphics to enhance clarity and visual
              appeal.
            </p>
            </div>
            <select className={styles.fontSelects}>          
              <option></option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
              {/* Icon Style */}
              <div className={styles.iconStyles}>
               <div className={styles.optionCardss}>
                <div className={styles.optionCard}>
                <div className={styles.box1}></div>
                  <div className={styles.iconContainer}>
                    <h className={styles.heading}>Portrait(9:16)</h>
                    <small>Reels, shorts, TikTok, Stories, etc</small>
                  </div>
                </div>

                <div className={styles.optionCard}>
                  <div className={styles.cardIconss}>
                   <div className={styles.box2}></div>
                  </div>

                <div className={styles.iconContainer}>
                    <h className={styles.heading}>Squqre(1:1)</h>
                    <small>
                    Meta Ads, Instagram, Facebook, etc
                    </small>
                  </div>
                </div>

                <div className={styles.optionCard}>
                <div className={styles.box3}>
                    
                   </div>
                  <div className={styles.iconContainer}>
                    <h className={styles.heading}>Landscape(16:9)</h>
                    <small>
                    Youtube, Linkedin,Tv, etc/
                    </small>
                  </div>
                </div>
                 <div className={styles.optionCard}>
                  <div className={`${styles.cardIcons} ${styles.headings}`}>
                   <Image src={arow } alt='arow' width={16} height={16}/>
                  </div>
                  <div className={`${styles.iconContainer} ${styles.headings}`}>
                   <h >Custom Size</h>
                  </div>
                </div>

              </div>
              </div>
          

          {/* Logo Upload Section */}

          <div className={styles.visualElements}>
           
            <div className={styles.designBranding}>
            <div>
             <h2>Visual Elements</h2>
             <p>
              Use icons, images, and graphics to enhance clarity and visual
              appeal.
            </p>
            </div>
            <select className={styles.fontSelects}>          
              <option></option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>

             {/* Icon Style */}
            <div className={styles.iconStyle}>
              <h3>Icon Style</h3>
              <div className={styles.optionCards}>
                <div className={styles.optioncard}>
                  <div className={styles.cardIcon}>
                    <RiRobot2Line className={styles.robot} />
                  </div>
                  <div className={styles.iconContainer}>
                    <h>Flat Icons</h>
                    <small>Simple, 2D icons for a clean and modern look</small>
                  </div>
                </div>
                <div className={styles.optioncard}>
                  <div className={styles.cardIcon}>
                    <Image
                      src={robos}
                      alt="robo"
                      width={200}
                      height={200}
                      layout="responsive"
                    />
                  </div>
                  <div className={styles.iconContainer}>
                    <h>3D Icons</h>
                    <small>
                      Icons with depth and shading to make elements pop
                    </small>
                  </div>
                </div>
                <div className={styles.optioncard}>
                  <div className={styles.cardIcon}>
                    <RiRobot2Fill className={styles.robot} />
                  </div>
                  <div className={styles.iconContainer}>
                    <h>Outlined Icons</h>
                    <small>
                      Minimalist outlined icons for a sleek and elegant design
                    </small>
                  </div>
                </div>
              </div>
            </div>

            {/* visualization section */}

           
            

            {/* Image Type */}
            <div className={styles.imageType}>
              <h3>Image Type</h3>
              <div className={styles.optionCards}>
                <div className={styles.optioncard}>
                  <div className={styles.imagecardIcon}>
                    <Image
                      src={stoke}
                      alt="robo"
                      width={300}
                      height={500}
                      layout="responsive"
                      className={styles.imageIcon}
                    />
                  </div>
                  <div className={styles.iconContainer}>
                    <h className={styles.heading}>Premium stock photos</h>
                    <small className={styles.para}>Generic images to represent abstract concepts</small>
                  </div>
                </div>
                <div className={styles.optioncard}>
                  <div className={styles.imagecardIcon}>
                    <Image
                      src={custom}
                      alt="robo"
                      width={300}
                      height={300}
                      layout="responsive"
                      className={styles.imageIcon}
                    />
                  </div>
                  <div className={styles.iconContainer}>
                    <h className={styles.heading}>Custom Images</h>
                    <small className={styles.para}>Unique images tailored to your brand</small>
                  </div>
                </div>
                <div className={styles.optioncard}>
                  <div className={styles.imagecardIcon}>
                    <Image
                      src={aiimage}
                      alt="robo"
                      width={300}
                      height={500}
                      layout="responsive"
                      className={styles.imageIcon}
                    />
                  </div>
                  <div className={styles.iconContainer}>
                    <h className={styles.heading}>AI Generated Image</h>
                    <small className={styles.para}>Generic images to represent abstract concepts</small>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Generated Images */}
            <div className={styles.videoGenerationStyle}>
              <h3>Ai generated Image</h3>
              <div className={styles.styleOptions}>
                <div className={styles.styleOption}>
                  <Image
                    src={imageCreation} // Update with the actual image path
                    alt="Realistic"
                    layout="responsive"
                    width={100} // Adjust width according to your design
                    height={100}
                    className={styles.styleImage}
                  />
                  <span>Realistic</span>
                </div>
                <div className={styles.styleOption}>
                  <Image
                    src={videoCreation} // Update with the actual image path
                    alt="Illustration"
                    width={100}
                    height={100}
                    layout="responsive"
                    className={styles.styleImage}
                  />
                  <span>Illustration</span>
                </div>
                <div className={styles.styleOption}>
                  <Image
                    src={anime} // Update with the actual image path
                    alt="Anime"
                    width={100}
                    height={100}
                    layout="responsive"
                    className={styles.styleImage}
                  />
                  <span>Anime</span>
                </div>
                <div className={styles.styleOption}>
                  <Image
                    src={visualization} // Update with the actual image path
                    alt="Water Painting"
                    width={100}
                    height={100}
                    layout="responsive"
                    className={styles.styleImage}
                  />
                  <span>Water Painting</span>
                </div>
                <div className={styles.styleOption}>
                  <Image
                    src={voiceover} // Update with the actual image path
                    alt="Sci-fi"
                    width={100}
                    height={100}
                    layout="responsive"
                    className={styles.styleImage}
                  />
                  <span>Sci-fi</span>
                </div>
                <div className={styles.styleOption}>
                  <Image
                    src={documents} // Update with the actual image path
                    alt="Imaginative"
                    width={100}
                    height={100}
                    layout="responsive"
                    className={styles.styleImage}
                  />
                  <span>Imaginative</span>
                </div>
              </div>
            </div>

            {/* Tone & Voice Section */}
            <div className={styles.toneVoice}>
              <h3>Tone & Voice</h3>
              <p>
                Tailor your presentations to meet the specific needs of
                different audiences and objectives.
              </p>

              <p1>Presentation Formats</p1>

              <div className={styles.optionCards}>
                <div className={styles.optioncard}>
                  <div className={styles.imagecardIcon}>
                    <Image
                      src={business}
                      alt="robo"
                      width={300}
                      height={300}
                      layout="responsive"
                      className={styles.formatImages}
                    />
                  </div>
                  <div className={styles.iconContainer}>
                    <h  className={styles.heading}>Business-Oriented Presentations</h>
                    <small className={styles.para}>
                      Business Pitch, Investor Deck, Sales Presentation, Product
                      Demo
                    </small>
                  </div>
                </div>

                <div className={styles.optioncard}>
                  <div className={styles.imagecardIcon}>
                    <Image
                     src={education}
                      alt="robo"
                      width={300}
                      height={300}
                      layout="responsive"
                      className={styles.formatImages}
                    />
                  </div>
                  <div className={styles.iconContainer}>
                    <h  className={styles.heading}>Business-Oriented Presentations</h>
                    <small className={styles.para}>
                      Business Pitch, Investor Deck, Sales Presentation, Product
                      Demo
                    </small>
                    
                  </div>
                </div>
                <div className={styles.optioncard}>
                  <div className={styles.imagecardIcon}>
                    <Image
                     src={education}
                      alt="robo"
                      width={300}
                      height={300}
                      layout="responsive"
                      className={styles.formatImages}
                    />
                  </div>
                  <div className={styles.iconContainer}>
                    <h  className={styles.heading}>Business-Oriented Presentations</h>
                    <small className={styles.para}>
                      Business Pitch, Investor Deck, Sales Presentation, Product
                      Demo
                    </small>
                    
                  </div>
                </div>

                
              </div>
            </div>

            {/* Generate Presentation Button */}
            <div className={styles.generateButton}>
              <button className={styles.generateBtn}>
                <BsStars />
                Generate
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.ightcontainer}>
        <div className={styles.rightsection}>
          <div>
            <MdInfoOutline className={styles.icon} />
          </div>
          <div className={styles.text}>
            <p>Simple preview</p>
            <h1>Add Captions to video</h1>
          </div>
        </div>
        <Image src={offerimage} alt="dalle" className={styles.imageSection} />
      </div>
    </div>
  );
};

export default GraphicsTool;
