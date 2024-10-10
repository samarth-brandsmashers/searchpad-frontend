"use client";

import React, { useState } from "react";
import styles from "@/styles/VoiceOver/VoiceOverSidebar.module.css";
import Image from "next/image";
import { IoImageOutline } from "react-icons/io5";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { TbPhotoVideo } from "react-icons/tb";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // State to manage the toggle

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarContainer}>
        <div className={styles.mediaediting}>
          <p>AI Media Editing</p>
          <div className={styles.mediaDropdown}>

          </div>
        </div>
        <ul className={styles.sidebarMenu}>
          <Link href={"/tools"}>
            <li>
              <IoImageOutline className={styles.menuIcon} />
              {isOpen && <span>Text-to-Speech</span>}
            </li>
          </Link>
          <Link href={"/tools/media-library"}>
            <li>
              <TbPhotoVideo className={styles.menuIcon} />
              {isOpen && <span>Voice Changer</span>}
            </li>
          </Link>
          <Link href={"/tools/media-library"}>
            <li>
              <TbPhotoVideo className={styles.menuIcon} />
              {isOpen && <span>My Creations</span>}
            </li>
          </Link>
          {/* <li className={styles.plugins}>{isOpen && <span>Plugins</span>}</li> */}
          <ul className={styles.subMenu}>
            <Link href={"/tools/voices"}>
              <li>
                <MdOutlineKeyboardVoice className={styles.menuIcon} />
                {isOpen && <span>Samples</span>}
              </li>
            </Link>
          </ul>
        </ul>

        {/* <div className={styles.upgradeSection}>
          <div className={styles.upgradeContent}>
            <RiVipCrown2Line className={styles.upgradeIcon} />
            <p className={styles.upgradeText}>
              Unlock the full power of <br />
              Generative AI
            </p>
            <p className={styles.upgradeSubText}>Go limitless with Searchpad</p>
            <button className={styles.upgradeButton}>Upgrade Plan</button>
          </div>
        </div> */}
      </div>
      {/* <div className={styles.userProfile}>
        <Image
          src="/Images/VideoCreation/User.png" // Replace with the actual image path
          alt="User Profile"
          width={40}
          height={40}
          // layout="responsive"
          className={styles.profileImage}
        />
        {isOpen && <span>Sanusilamide</span>} {/* Add the user name */}
      {/* </div> */}
    </aside>
  );
};

export default Sidebar;
