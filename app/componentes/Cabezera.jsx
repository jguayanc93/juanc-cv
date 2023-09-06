'use client'
import Link from 'next/link';

export default function Cabezera(){
    return(
        <div className="parte-top">
        <Titulo></Titulo>
        <Menu></Menu>
        <MenuDesplegado></MenuDesplegado>
        </div>
    );
}
function Titulo(){
    return (<div className="menu-logo"><p>juancarlos_</p></div>);
}
function Menu(){
    function handleClick(){
        if(document.getElementById('toogle2').style.display=="none"){
            return document.getElementById('toogle2').style.display="flex";
        }
        else document.getElementById("toogle2").style.display="none";
    }
    return(
        <nav className='navegador'>
            <div className='menu-web'>
                <Link href="./">HOME</Link>
                <Link href="./Tecnologias">TECNOLOGIAS</Link>
                <Link href="./Proyectos">PROYECTOS</Link>                
                <Link href='../extra'>CONTACTO</Link>
            </div>
            {/* <div id='toogle' onClick={()=>{document.getElementById("toogle2").style.display=="none" ? document.getElementById("toogle2").style.display="flex" : document.getElementById("toogle2").style.display="none"}} className='menu-web-movil'> */}
            <div className='menu-web-movil'>
                <a onClick={handleClick}><i class="fa-solid fa-bars fa-2xl"></i></a>                
            </div>
        </nav>
    );
}
function MenuDesplegado(){    
    return(
        <div id='toogle2' className='menu-desplegado-movil'>
            <Link href="">TECNOLOGIAS</Link>
            <Link href="">PROYECTOS</Link>
            <Link href='../extra'>CONTACTO</Link>            
        </div>
    );
}