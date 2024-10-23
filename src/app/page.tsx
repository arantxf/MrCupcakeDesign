"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./components/page.module.css";


export default function Home() {
  {/* Array of image sources */}
  const images = [
    { src: "/echaelfreno.png", id: 1 },
    { src: "/imhornyWhite.png", id: 2 },
    { src: "/imhornyBlack.png", id: 3 },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleImageClick = (id: number) => {
    window.location.href = `/articulos/${id}`;
  };


  {/* Function to handle the next image */}
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  {/* Function to handle de previous image */}
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleSideClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, currentTarget } = event;
    const { offsetWidth } = currentTarget;
    
    // Si el clic es en la mitad izquierda, se va a la imagen anterior, si es en la derecha, va a la siguiente
    if (clientX < offsetWidth / 2) {
      prevImage();
    } else {
      nextImage();
    }
  };


  return (
    <div className={styles.page}>
      <main className={styles.main}>
        

        <div className={styles.carousel} onClick={handleSideClick}>
          <div className={styles.carouselImageWrapper}>
            <Image
              src={images[currentImageIndex].src}
              alt="Camisetas"
              onClick={() =>  handleImageClick(images[currentImageIndex].id)} // Cambia la URL según sea necesario
              fill
              style={{
                objectFit: "contain",
                maxWidth: "100%",
                maxHeight: "100%",
                cursor: 'pointer'
              }}
            />
            <div className={styles.carouselText}>
              <h1>100% madaleno</h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
