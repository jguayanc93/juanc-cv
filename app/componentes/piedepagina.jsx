import Link from "next/link";
export default function PiedePagina(){
    return(
        <footer>
            <div className="parte-bot">
                <p>Juancarlos derechos reservados @ jguayancastillo21@gmail.com</p>
                <Link href="https://www.google.com/">Github</Link>
                <Link href="https://www.google.com/">LinkenId</Link>                
            </div>
            <div className="parte-bot-movil">
                <Link href="https://www.google.com"><i class="fa-brands fa-square-github fa-2xl"></i></Link>
                <Link href="https://www.google.com"><i class="fa-brands fa-linkedin fa-2xl"></i></Link>
                <Link href="https://www.google.com"><i class="fa-regular fa-envelope fa-2xl"></i></Link>
            </div>
        </footer>
    );
}