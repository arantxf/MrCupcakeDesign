"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  {/* Array of image sources */}
  const images = [
    "/echaelfreno.png",
    "/imhornyWhite.png",
    "/imhornyBlack.png",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleImageClick = () => {
    window.location.href = '/another-page'; // Cambia la URL según sea necesario
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


  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearchBar = () => {
    setSearchOpen((prev) => !prev);
  };

  {/* Toggle para barra lateral*/}
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

 
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.header}>
          {!sidebarOpen && (
            <button 
              className={styles.sidebarToggle} 
              onClick={toggleSidebar}
            >
              <Image
                src="/menu-icon.svg"
                alt="menu"
                width={24}
                height={24}
              />
            </button>
          )}

          <Image
            className={styles.logoHeader}
            src="/logo.png"
            alt="logo"
            width={252}
            height={82}
            priority
            unoptimized={true}
          />

          <div className={styles.iconosLaterales}>
            {/* Search wrapper para envolver la lupa y la barra */}
            <div className={styles.searchWrapper}>
              <button onClick={toggleSearchBar}>
                <Image
                src="/magnifier.svg"
                alt="magnifier"
                width={27}
                height={28}
                />
              </button>

            {/* Barra de búsqueda con clase condicional */}
            <input
              type="text"
              placeholder="Buscar..."
              className={`${styles.searchBar} ${searchOpen ? styles.searchBarOpen : ""}`}
            />
          </div>

            {/* Otros íconos */}
            <button>
              <Image
                src="/shopping_basket.svg"
                alt="basket"
                width={28}
                height={28}
              />
            </button>

            <button>
              <Image
                src="/account.svg"
                alt="account"
                width={28}
                height={84}
              />
            </button>

              {/* Barra lateral */}
              <div className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ""}`}>
                <h2>Mr.Cupcake Design</h2>
                <ul>
                  <li>Novedades</li>
                  <li>Camisetas</li>
                  <li>Tote Bag</li>
                  <li>¡Mira nuestro blog!</li>
                </ul>

                <div className={styles.sidebarMini}>
                  <ul>
                    <li>FAQs</li>
                    <li>Newsletter</li>
                  </ul>
                </div>

                {/* Flecha para cerrar */}
                {sidebarOpen && (
                  <button className={`${styles.sidebarArrow} ${sidebarOpen ? styles.sidebarArrowOpen : ""}`} onClick={toggleSidebar}>
                    <Image
                    src="/close-arrow.svg"
                    alt="close-arrow"
                    width={27}
                    height={28}
                    />
                  </button>
                )}
              </div>
          </div>
        </header>

        <div className={styles.carousel} onClick={handleSideClick}>
          <div className={styles.carouselImageWrapper}>
            <Image
              src={images[currentImageIndex]}
              alt="Camisetas"
              //--onClick={() => handleImageClick('/another-page')} // Cambia la URL según sea necesario
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

      {/* Footer Section */}
      <footer className={styles.footer}>
        {/* Left section with logo */}
        <div className={styles.footerLeft}>
          <Image
            className={styles.footerlogo}
            src="/logofooter.png"
            alt="Mr. Cupcake"
            width={172}
            height={130}
          />
        </div>

        {/* Center section with social media icons */}
        <div className={styles.footerCenter}>
          <h3>Nuestras redes</h3>
          <div className={styles.socialIcons}>
            <Image src="/instagram.svg" alt="Instagram" width={30} height={30} />
            <Image src="/tiktok.svg" alt="TikTok" width={30} height={30} />
            <Image src="/x.svg" alt="X" width={30} height={40} />
            <Image src="/facebook.svg" alt="Facebook" width={30} height={30} />
          </div>
        </div>

        {/* Right section with "Sobre nosotros" text */}
        <div className={styles.footerRight}>
          <h3>Sobre nosotros</h3>
          <p>
            Mr. Cupcake Design es un proyecto de emprendimiento juvenil que pretende combinar tres de las cosas que más nos gustan: la moda, los memes y las magdalenas.
          </p>
        </div>
      </footer>
    </div>
  );
}
