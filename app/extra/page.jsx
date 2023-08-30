async function Personaje(){
    const respuesta = await fetch('https://rickandmortyapi.com/api/character/1');
    const resultado = await respuesta.json();
    return(
        <div>
            <h1>{resultado.id}</h1>
            <h1>{resultado.name}</h1>
            <img src={resultado.image}/>
        </div> 
    );
}

async function Pokemon(){
    const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/3');
    const resultado = await respuesta.json();
    return(
        <div>
            <h1>{resultado.id}</h1>
            <h1>{resultado.name}</h1>
        </div>
    );
}

export default function Page(){
    return (
        <div>
            <h1>Extra ruta creada</h1>
            <Personaje></Personaje>
            <Pokemon></Pokemon>            
        </div>    
    );
}