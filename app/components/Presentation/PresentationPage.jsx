// components/PresentationPage.jsx

import React from "react";
import Image from "next/image";
import { BsStars } from "react-icons/bs";
import { RxDragHandleDots2 } from "react-icons/rx";
import { BsCloudUpload } from "react-icons/bs";
import { RiRobot2Line } from "react-icons/ri";
import styles from "@/styles/Presentation/Presentation.module.css";
import { RiRobot2Fill } from "react-icons/ri";
import SeparatorWithText from "../Seperators/Seperators";
// import { BsStars } from "react-icons/bs";

const PresentationPage = () => {
  return (
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
      <SeparatorWithText text="Outlines" />

      <div className={styles.sections}>
        <div className={styles.section}>
          <div className={styles.dots}>
            <RxDragHandleDots2 className={styles.dotsIcon} />
          </div>
          <div>
            <h2>Mission Statement</h2>
            <p>
              To empower small businesses with innovative technology solutions
              that drive growth and efficiency.
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.dots}>
            <RxDragHandleDots2 className={styles.dotsIcon} />
          </div>
          <div>
            <h2>Vision Statement</h2>
            <p>
              To be the global leader in providing affordable and scalable
              digital solutions to businesses of all sizes.
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.dots}>
            <RxDragHandleDots2 className={styles.dotsIcon} />
          </div>
          <div>
            <h2>Core Values</h2>
            <ul>
              <li>
                <strong>Integrity</strong> – We believe in honesty and
                transparency.
              </li>
              <li>
                <strong>Customer-Centricity</strong> – Our customers' needs are
                central.
              </li>
              <li>
                <strong>Innovation</strong> – We seek creative solutions to
                drive progress.
              </li>
              <li>
                <strong>Teamwork</strong> – We collaborate for success.
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.dots}>
            <RxDragHandleDots2 className={styles.dotsIcon} />
          </div>
          <div>
            <h2>Closing Statement</h2>
            <p>
              Driven by our mission, inspired by our vision, and guided by our
              values, we're here to make a difference.
            </p>
          </div>
        </div>
        <div className={styles.addSection}>+ Add Section</div>
      </div>

      <SeparatorWithText text="Prefrences" />
      <div className={styles.brandingGuidelines}>
        <h2>Design Preferences & Branding Guidelines</h2>
        <p>
          Maintain brand consistency through colors, fonts, logos, and visuals
          for a cohesive, professional presentation.
        </p>

        {/* Color Section */}
        <div className={styles.colorandtypography}>
          <div className={styles.colorSection}>
            <div className={styles.colorPicker}>
              <label>Color</label>
              <input type="color" className={styles.colorInput} />
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

        {/* Logo Upload Section */}

        <div className={styles.visualElements}>
          <h2>Visual Elements</h2>
          <p>
            Use icons, images, and graphics to enhance clarity and visual
            appeal.
          </p>

          {/* Icon Style */}
          <div className={styles.iconStyle}>
            <h3>Icon Style</h3>
            <div className={styles.optionCards}>
              <div className={styles.optionCard}>
                <div className={styles.cardIcon}>
                  <RiRobot2Line className={styles.robot} />
                </div>
                <div className={styles.iconContainer}>
                  <h>Flat Icons</h>
                  <small>Simple, 2D icons for a clean and modern look</small>
                </div>
              </div>
              <div className={styles.optionCard}>
                <div className={styles.cardIcon}>
                  <Image
                    src="/Images/Robot.png"
                    alt="robo"
                    width={300}
                    height={300}
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
              <div className={styles.optionCard}>
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

          {/* Image Type */}
          <div className={styles.imageType}>
            <h3>Image Type</h3>
            <div className={styles.optionCards}>
              <div className={styles.optionCard}>
                <div className={styles.imagecardIcon}>
                  <Image
                    src="/Images/Premium.png"
                    alt="robo"
                    width={300}
                    height={500}
                    layout="responsive"
                    className={styles.imageIcon}
                  />
                </div>
                <div className={styles.iconContainer}>
                  <h>Premium stock photos</h>
                  <small>Generic images to represent abstract concepts</small>
                </div>
              </div>
              <div className={styles.optionCard}>
                <div className={styles.imagecardIcon}>
                  <Image
                    src="/Images/Custom.png"
                    alt="robo"
                    width={300}
                    height={300}
                    layout="responsive"
                    className={styles.imageIcon}
                  />
                </div>
                <div className={styles.iconContainer}>
                  <h>Custom Images</h>
                  <small>Unique images tailored to your brand</small>
                </div>
              </div>
              <div className={styles.optionCard}>
                <div className={styles.imagecardIcon}>
                  <Image
                    src="/Images/AiGenerated.png"
                    alt="robo"
                    width={300}
                    height={500}
                    layout="responsive"
                    className={styles.imageIcon}
                  />
                </div>
                <div className={styles.iconContainer}>
                  <h>AI Generated Image</h>
                  <small>Generic images to represent abstract concepts</small>
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
                  src="/Images/VideoCreation/Realistic.png" // Update with the actual image path
                  alt="Realistic"
                  layout="responsive"
                  width={100} // Adjust width according to your design
                  height={100} // Adjust height according to your design
                  className={styles.styleImage}
                />
                <span>Realistic</span>
              </div>
              <div className={styles.styleOption}>
                <Image
                  src="/Images/VideoCreation/illustration.png" // Update with the actual image path
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
                  src="/Images/VideoCreation/Anime.png" // Update with the actual image path
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
                  src="/Images/VideoCreation/Water Painting.png" // Update with the actual image path
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
                  src="/Images/VideoCreation/Sci-fi.png" // Update with the actual image path
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
                  src="/Images/VideoCreation/Realistic.png" // Update with the actual image path
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
              Tailor your presentations to meet the specific needs of different
              audiences and objectives.
            </p>

            <p1>Presentation Formats</p1>

            <div className={styles.optionCards}>
              <div className={styles.optionCard}>
                <div className={styles.imagecardIcon}>
                <Image
                    src="/Images/Business.png"
                    alt="robo"
                    width={300}
                    height={300}
                    layout="responsive"
                    className={styles.formatImage}
                  />
                </div>
                <div className={styles.iconContainer}>
                  <h>Business-Oriented Presentations</h>
                  <small>
                    Business Pitch, Investor Deck, Sales Presentation, Product
                    Demo
                  </small>
                </div>
              </div>
              <div className={styles.optionCard}>
                <div className={styles.imagecardIcon}>
                <Image
                    src="/Images/Education.png"
                    alt="robo"
                    width={300}
                    height={300}
                    layout="responsive"
                    className={styles.formatImage}
                  />
                </div>
                <div className={styles.iconContainer}>
                  <h>Educational & Training Presentations</h>
                  <small>Educational, Training, Workshop, etc.</small>
                </div>
              </div>
              <div className={styles.optionCard}>
                <div className={styles.imagecardIcon}>
                <Image
                    src="/Images/Creative.png"
                    alt="robo"
                    width={300}
                    height={300}
                    layout="responsive"
                    className={styles.formatImage}
                  />
                </div>
                <div className={styles.iconContainer}>
                  <h>Creative & Conceptual Presentations</h>
                  <small>Creative Pitch, Product Demo, etc.</small>
                </div>
              </div>
            </div>
          </div>

          {/* Generate Presentation Button */}
          <div className={styles.generateButton}>
            <button className={styles.generateBtn}>
            <BsStars />
              Generate Presentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationPage;
