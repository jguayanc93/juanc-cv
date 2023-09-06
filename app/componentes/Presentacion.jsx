import Link from "next/link";

export default function Presentacion(){
    return(
        <div className="parte-medio-1">
            <Saludo></Saludo>
            <AcercadeMi></AcercadeMi>
        </div>
    );
}
function Saludo(){
    return (
        <div className="about1">
            <div className="saludo">
                <p>Bienvenido soy <span>Juancarlos Guayan</span> desarrollador Web.</p>
            </div>
            <div className="saludo-movil">
                <div className="foto-movil"></div>
                <div className="datos-movil">
                    <p className="datos-movil-p1">Juancarlos Guayan</p>
                    <p className="datos-movil-p2">Desarrollador web</p>                    
                </div>
                <div className="contacto-movil">
                    <Link href=""><i class="fa-regular fa-envelope fa-2xl"></i>EMAIL</Link>
                    <Link href=""><i class="fa-brands fa-linkedin fa-2xl"></i>LINKENID</Link>
                </div>
                <div className="about-movil">
                    <p className="about-movil-p1">ABOUT</p>
                    <p className="about-movil-p2">Soy una persona entusiasta y comrpometida, de facil trato y perseverante.</p>
                </div>
                <div className="intereses-movil">
                    <p className="intereses-movil-p1">INTERESES</p>
                    <p className="intereses-movil-p2">Ingeniero de sistemas formado para desenvolverme satisfactoriamente en el campo de las tecnologias de las informacion,
                        mediante mi aporte de conocimientos y destrezas tengo el objetivo de continuar consolidando mi desarrollo profesional.
                    </p>
                </div>                
            </div>
        </div>
    );
}
function AcercadeMi(){
    return (
        <div className="about2">
            {/* <p>Ingeniero de sistemas formado para desenvolverme satisfactoriamente en el campo de las tecnologias de las informacion,
                mediante mi aporte de conocimientos y destrezas tengo el objetivo de continuar consolidando mi desarrollo profesional.
            </p> */}
            <p>
                Soy una persona entusiasta y comrpometida, de facil trato y perseverante.
            </p>
        </div>
    );
}