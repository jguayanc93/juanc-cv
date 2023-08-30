import Cabezera from '../componentes/Cabezera.jsx'
export default function ExtraLayout({children}){
    return(
        <>
        <Cabezera></Cabezera>
        {children}
        </>
        
    );
}