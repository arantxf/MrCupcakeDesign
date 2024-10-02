import { useRouter } from "next/router";

const Articulo = () => {
 const router = useRouter();
 const {idArticulo} = router.query;

 return (
  <div>

  </div>
 );
};

export default Articulo;