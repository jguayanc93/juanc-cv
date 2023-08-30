import Link from "next/link";
export default function PiedePagina(){
    return(
        <footer className="parte-bot">
            <div>
                <p>Juancarlos derechos reservados @ jguayancastillo21@gmail.com</p>
                <Link href="https://www.google.com/">Github</Link>
                <Link href="https://www.google.com/">LinkenId</Link>                
            </div>            
        </footer>
    );
}