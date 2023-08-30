'use client'

import { useState } from "react";

function Cuadrado({value,jugadaClick}){
    // const [value,setValue] = useState(null);
    // function handleClick(){setValue("X");}
    return <button className="cuadrado" onClick={jugadaClick}>{value}</button>
}
export default function Tablero(){

    const [siguiente,setSiguiente] = useState(true);
    const [cuadrado,setCuadrado] = useState(Array(9).fill(null));

    function handleClick(i){
        if(cuadrado[i] || calculateWinner(cuadrado)){
            return;
        }
        const siguienteJugada = cuadrado.slice();
        if(siguiente){
            siguienteJugada[i]="X";
        }
        else{
            siguienteJugada[i]="O";
        }        
        setCuadrado(siguienteJugada);
        setSiguiente(!siguiente);
    }

    const ganador = calculateWinner(cuadrado);
    let status;
    if(ganador){
        status = "ganador: "+ ganador;
    }
    else{
        status = "siguiente jugador: " + (siguiente ? "X" : "O")
    }

    function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

    return (
        <>
        <div className="estado-ganador">{status}</div>
        <div className="tablero-fila">
            <Cuadrado value={cuadrado[0]} jugadaClick={()=>{handleClick(0)}}></Cuadrado>
            <Cuadrado value={cuadrado[1]} jugadaClick={()=>{handleClick(1)}}></Cuadrado>
            <Cuadrado value={cuadrado[2]} jugadaClick={()=>{handleClick(2)}}></Cuadrado>
        </div>
        <div className="tablero-fila">
            <Cuadrado value={cuadrado[3]} jugadaClick={()=>{handleClick(3)}}></Cuadrado>
            <Cuadrado value={cuadrado[4]} jugadaClick={()=>{handleClick(4)}}></Cuadrado>
            <Cuadrado value={cuadrado[5]} jugadaClick={()=>{handleClick(5)}}></Cuadrado>
        </div>
        <div className="tablero-fila">
            <Cuadrado value={cuadrado[6]} jugadaClick={()=>{handleClick(6)}}></Cuadrado>
            <Cuadrado value={cuadrado[7]} jugadaClick={()=>{handleClick(7)}}></Cuadrado>
            <Cuadrado value={cuadrado[8]} jugadaClick={()=>{handleClick(8)}}></Cuadrado>
        </div>
        </>
    );
}