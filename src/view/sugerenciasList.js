import CardSugerencia from'../component/cardSugerencia.js'
import React  from 'react'
import './sugerenciasList.css';

export default function SugerenciaList() {
  return (
     <div className="contenedorSugerencia">
        <div className="sugerencia1">

              <CardSugerencia className="sugerencia1" titulo="¿No tenes equipo?"
                              descripcion="Incluite en un equipo que le falte uno"
                              imagen="https://miro.medium.com/max/570/1*qj7qZuTR0--S2GoCF23dxA.png" />
        </div>
        <div className="sugerencia2">
            <CardSugerencia className="sugerencia2" titulo="¿Te falta rival?"
                          descripcion="No te quedes sin jugar"
                          imagen="https://www.compromisodiario.com.ar/wp-content/uploads/2015/09/futbol_5-1-570x330.jpg"/>
        </div>
        <div className="sugerencia3">
           <CardSugerencia  titulo="¿Te falta un jugador?"
                                     descripcion="Consegui el que te falta"
                                     imagen= "https://us.123rf.com/450wm/ostill/ostill1709/ostill170900064/85956978-un-cauc%C3%A1sico-jugador-de-f%C3%BAtbol-hombre-aislado-en-el-fondo-blanco.jpg?ver=6"/>
        </div>
    </div>

  );
}