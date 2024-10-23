"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";


export default function Header() {
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

          <div className={styles.logoContainer}>
          <Link href="/">
            <Image
              className={styles.logoHeader}
              src="/logo.png"
              alt="logo"
              width={252}
              height={82}
              priority
              unoptimized={true}
            />
          </Link>
          </div>

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
 )
}




