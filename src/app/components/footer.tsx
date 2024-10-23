
import Image from "next/image";
import styles from "./page.module.css";

export default function Footer() {
 return(
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
 )
}