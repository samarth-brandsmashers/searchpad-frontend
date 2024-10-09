import React from 'react'
import styles from "@/styles/ImageCreation.module.css";
import Image from 'next/image';
import logo from '../../../public/logo.png';
import { FaArrowLeftLong } from "react-icons/fa6";
import coins from '../../../public/icon/coins-01.png';
import crown from '../../../public/icon/crown.png'

const ImageCreationNavbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logoContainer}>
      <FaArrowLeftLong />
      <Image src={logo} />
      </div>

      <div>
      <h1 className={styles.centerHeading}>Image Generator</h1>
      </div>

     <div className={styles.rightcontaint}>
     
        <Image src={coins} ></Image>
        <h1 className={styles.heading}>25 Tokens Left</h1>
      <button className={styles.button}>
        <Image src={crown}></Image>
        <h1  className={styles.heading}>Upgrade</h1>
        </button>
    </div>
    </div>
  )
}

export default ImageCreationNavbar