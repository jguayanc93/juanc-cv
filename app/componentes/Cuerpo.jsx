'use client'
import Link from "next/link";
export default function Cuerpo(){
    return(
        <div className="parte-medio-2">
        <Tecnologias></Tecnologias>
        <Proyectos></Proyectos>
        </div>
    );
}
function Tecnologias(){
    function Mostrar(){console.log(document.querySelector(".abajo").textContent);}
    let tools=[{
        id:0,
        nombre:"html",
        años:5
    },
    {
        id:1,
        nombre:"css",
        años:4
    },
    {
        id:2,
        nombre:"javascript",
        años:3
    },
    {
        id:3,
        nombre:"react",
        años:2
    },
    {
        id:4,
        nombre:"node js",
        años:2
    },
    {
        id:5,
        nombre:"express",
        años:1
    },
    {
        id:6,
        nombre:"mysql",
        años:3
    },
    {
        id:7,
        nombre:"mongoDB",
        años:1
    },
    {
        id:8,
        nombre:"git",
        años:2
    },
    {
        id:9,
        nombre:"php",
        años:2
    }
];    
    let tools_organizados2 = tools.map(herramienta=>{
        return(
            <div key={herramienta.id} className="card">
                <div className="arriba" id={herramienta.nombre} onMouseEnter={()=>{
                    setTimeout(()=>{document.getElementById(herramienta.id).style.display="flex"},280)}
                } onMouseLeave={()=>{
                    setTimeout(()=>{document.getElementById(herramienta.id).style.display="none"},250)
                }}
                >{herramienta.nombre}</div>
                {/* <div className="arriba" id={herramienta.id} onClick={()=>{document.getElementById(herramienta.id).setAttribute("class","abajo")}}>{herramienta.años}</div> */}
                {/* <div className="arriba" id={herramienta.id} onClick={()=>{
                    if(document.getElementById(herramienta.id).style.display="flex"){
                        document.getElementById(herramienta.id).style.display="none";
                        setTimeout(()=>{
                            document.getElementById(herramienta.id).style.display="flex"
                        },5000)
                    }
                    else{}
                }}>{herramienta.años} años</div> */}
                <div className="abajo" id={herramienta.id}>{herramienta.años} años</div>
            </div>
    )});
    return(
        <div className="conocimientos" id="aqui">
            <div className="lenguajes-nombre" id="contenedor">
                {tools_organizados2}
            </div>            
        </div>
    );
}
function Proyectos(){
    return(
        <div className="proyectos">
            <Pared></Pared>
        </div>
    );
}
function Pared(){
    const tarjeta = [{
        id:0,
        titulo:"To do list",
        direccion :"../Tareas",
        code:"codigo.."
    },
    {
        id:1,
        titulo:"3 en raya",
        direccion :"../Proyectos",
        code:"codigo.."
    },{
        id:2,
        titulo:"consulta persona",
        direccion :"../Consulta",
        code:"codigo.."
    }];
    const posteo = tarjeta.map(proyecto=>{
        return(
            <div key={proyecto.id} className="posteo">                
                <Link href={proyecto.direccion}>{proyecto.titulo}</Link>
                <Link href=''>{proyecto.code}</Link>
            </div>
        )
    });

    return(
        <div className="pared">
            {posteo}
        </div>
    )
    
}