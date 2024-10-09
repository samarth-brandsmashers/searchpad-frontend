"use client";

import React, { useState } from 'react';
import { IoIosRefresh } from "react-icons/io";
import { IoCopyOutline } from "react-icons/io5";
import { HiMiniPhoto } from "react-icons/hi2";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { FaShareAlt, FaTrash, FaEllipsisV } from 'react-icons/fa';
import styles from '@/styles/ImageCreation.module.css';

const myCreationsData = [
  {
    title: "Crypto AI Illustrations",
    prompt: "Generate creative AI-based illustrations for crypto marketing.",
    images: [
      "https://images.unsplash.com/photo-1639426090332-69e939822d99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1639426090332-69e939822d99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ]
  },
  {
    title: "VR Headset Illustrations",
    prompt: "VR headset futuristic illustrations.",
    images: [
      "https://images.unsplash.com/photo-1639426090332-69e939822d99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ]
  },
  {
    title: "Cat Concept Mobile App",
    prompt: "Mobile app UI concept for cat lovers.",
    images: [
      "https://images.unsplash.com/photo-1639426090332-69e939822d99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1639426090332-69e939822d99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1639426090332-69e939822d99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ]
  }
];

const ImageCreation = () => {
  const [isMyCreations, setIsMyCreations] = useState(true);

  return (
    <div className={styles.imageCreationSection}>
      <div className={styles.topbar}>
        <span
          style={{ borderBottomColor: isMyCreations ? "#6949FF" : "transparent" }}
          onClick={() => setIsMyCreations(true)}
        >
          <HiMiniPhoto />
          My Creations
        </span>
        <span
          style={{ borderBottomColor: !isMyCreations ? "#6949FF" : "transparent" }}
          onClick={() => setIsMyCreations(false)}
        >
          <MdOutlinePhotoLibrary />
          Inspirations
        </span>
      </div>

      <div className="p-4">
        {isMyCreations ? (
          <div className={styles.myCreations}>
            <div className={styles.creationGallery}>
            {myCreationsData.map((creation, index) => (
          <div key={index} className={styles.row}>
            <div className={styles.creationText}>
              <div className="flex gap-2 items-center mb-1">
                <p>{creation.prompt}</p>
                <IoIosRefresh className={styles.icon} />
                <IoCopyOutline className={styles.icon} />
              </div>
              <div className={styles.icons}>
                <FaShareAlt className={styles.icon} />
                <FaTrash className={styles.icon} />
                <FaEllipsisV className={styles.icon} />
              </div>
            </div>
            <div className={styles.images}>
              {creation.images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={creation.title}
                  className={styles.creationImage}
                />
              ))}
            </div>
          </div>
        ))}
            </div>
          </div>
        ) : (
          <div>Inspirations</div>
        )}
      </div>
    </div>
  );
};

export default ImageCreation;
