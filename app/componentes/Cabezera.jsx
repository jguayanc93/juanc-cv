import Link from 'next/link';

export default function Cabezera(){
    return(
        <div className="parte-top">
        <Titulo></Titulo>
        <Menu></Menu>
        </div>
    );
}
function Titulo(){
    return (<div className="menu-logo"><p>juancarlos_</p></div>);
}
function Menu(){
    return(
        <nav className="menu-web">
            <a>inicio</a>
            <Link href='./#aqui'>tecnologias</Link>
            <Link href='../extra'>contactos</Link>
        </nav>
    );
}