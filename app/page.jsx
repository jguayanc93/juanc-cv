import Cabezera from './componentes/Cabezera.jsx';
import Presentacion from './componentes/Presentacion.jsx';
import Cuerpo from './componentes/Cuerpo.jsx';
import PiedePagina from './componentes/piedepagina.jsx'

export default function Page() {
    return(
        <>
        <Cabezera></Cabezera>
        <Presentacion></Presentacion>
        {/* <Cuerpo></Cuerpo> */}
        <PiedePagina></PiedePagina>
        </>
    );
  }  