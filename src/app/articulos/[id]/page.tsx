"use client";

import { useRouter } from "next/navigation";
import styles from "../../components/page.module.css";


const Articulo = () => {
 const router = useRouter();
 const handleGoBack = () => {
  router.back(); // Ejemplo de uso del método back()
 };

 return (
  <div>
   <h1>Detalles del Artículo</h1>
   
  </div>
 );
};

export default Articulo;