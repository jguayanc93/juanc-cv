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
                <p>Bienvenido soy <span>juancarlos guayan</span> desarrollador web.</p>
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